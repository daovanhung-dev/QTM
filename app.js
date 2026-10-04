const PAGE_SIZE = 10;
const STORAGE_KEY = 'qtm-quiz-progress-v3';
const MODE_END_OF_CHAPTER = 'end-of-chapter';
const MODE_AFTER_QUESTION = 'after-question';
const CHAPTERS_MANIFEST = 'docs/chapters.json';
const ALL_CHAPTERS_ID = 'all-chapters';

const appView = document.querySelector('#app-view');
let chapters = [];
let catalogError = null;
const loadedChapters = new Map();
const chapterModes = new Map();
let activeChapter = null;
let activeQuizData = null;
let activeProgress = null;
let view = 'home';
let storageAvailable = true;
let elapsedTimerInterval = null;

boot();

async function boot() {
  try {
    chapters = await loadChapterManifest();
  } catch (error) {
    catalogError = error.message;
    renderHome();
    return;
  }

  const results = await Promise.all(chapters.map(loadChapter));
  results.forEach((result) => {
    if (result.error) {
      loadedChapters.set(result.chapter.id, { chapter: result.chapter, error: result.error });
    } else {
      loadedChapters.set(result.chapter.id, result);
    }
  });
  renderHome();
}

async function loadChapterManifest() {
  const response = await fetch(CHAPTERS_MANIFEST, { cache: 'no-cache' });
  if (!response.ok) {
    throw new Error(`Không tải được danh mục chương (${response.status}).`);
  }

  const manifest = await response.json();
  if (!Array.isArray(manifest) || !manifest.length) {
    throw new Error('Danh mục chương phải là một mảng JSON không rỗng.');
  }

  const ids = new Set();
  const files = new Set();
  return manifest.map((chapter, index) => {
    if (!chapter || ['id', 'number', 'title', 'file'].some((key) => typeof chapter[key] !== 'string' || !chapter[key].trim())) {
      throw new Error(`Mục chương thứ ${index + 1} trong danh mục thiếu id, number, title hoặc file.`);
    }
    if (!/^[\w-]+$/.test(chapter.id) || [ALL_CHAPTERS_ID, '__proto__', 'constructor', 'prototype'].includes(chapter.id)) {
      throw new Error(`Mã chương tại mục ${index + 1} không hợp lệ hoặc trùng với mã dành riêng.`);
    }
    if (ids.has(chapter.id) || files.has(chapter.file)) {
      throw new Error(`Danh mục chương có id hoặc đường dẫn bị trùng tại mục ${index + 1}.`);
    }
    ids.add(chapter.id);
    files.add(chapter.file);
    return {
      id: String(chapter.id),
      number: String(chapter.number),
      title: String(chapter.title),
      file: String(chapter.file),
    };
  });
}

async function loadChapter(chapter) {
  try {
    const response = await fetch(chapter.file, { cache: 'no-cache' });
    if (!response.ok) {
      throw new Error(`Máy chủ trả về mã ${response.status}.`);
    }

    const source = await response.text();
    const questions = parseQuestions(source, chapter);
    if (!questions.length) {
      throw new Error('Không tìm thấy câu hỏi theo định dạng tiêu đề “Câu N”.');
    }

    const sourceHash = hashText(source);
    return { chapter, questions, sourceHash };
  } catch (error) {
    return {
      chapter,
      error: `${error.message} Hãy kiểm tra tệp đề và mở website bằng máy chủ cục bộ theo README.md.`,
    };
  }
}

function parseQuestions(source, chapter) {
  const lines = source.replace(/^\uFEFF/, '').split(/\r?\n/);
  const questions = [];
  let current = null;
  let section = '';

  const finishQuestion = () => {
    if (!current) return;

    const prompt = current.promptLines.join('\n').trim();
    const options = current.options;
    const letters = options.map((option) => option.letter);
    const validOptions = options.length === 4
      && ['A', 'B', 'C', 'D'].every((letter) => letters.includes(letter))
      && new Set(letters).size === 4;
    const correctOptions = options.filter((option) => option.isCorrect);

    if (!prompt) {
      throw new Error(`Câu ${current.number} không có nội dung câu hỏi.`);
    }
    if (!validOptions) {
      throw new Error(`Câu ${current.number} cần có đủ bốn lựa chọn A, B, C, D.`);
    }
    if (correctOptions.length !== 1) {
      throw new Error(`Câu ${current.number} cần có đúng một đáp án được in đậm.`);
    }

    questions.push({
      id: `${chapter.id}-${questions.length + 1}`,
      number: current.number,
      section: current.section,
      prompt,
      options,
      correctIndex: options.findIndex((option) => option.isCorrect),
    });
    current = null;
  };

  for (const line of lines) {
    const questionHeading = line.match(/^#{2,6}\s+Câu\s+(\d+)\b\s*(?:[.)]\s*(.*))?\s*$/i);
    if (questionHeading) {
      finishQuestion();
      current = {
        number: Number(questionHeading[1]),
        section,
        promptLines: questionHeading[2]?.trim() ? [questionHeading[2].trim()] : [],
        options: [],
      };
      continue;
    }

    const sectionHeading = line.match(/^#{1,6}\s+(.+?)\s*#*\s*$/);
    if (sectionHeading && !current) {
      section = cleanMarkdown(sectionHeading[1]);
      continue;
    }

    if (!current) continue;

    const option = parseOption(line);
    if (option) {
      current.options.push(option);
    } else if (current.options.length === 0) {
      current.promptLines.push(line);
    }
  }

  finishQuestion();
  return questions;
}

function parseOption(line) {
  const candidate = line.trim().replace(/^[-*+]\s+/, '');
  const isCorrect = candidate.includes('**');
  const unwrapped = candidate.replaceAll('**', '').trim();
  const match = unwrapped.match(/^([A-D])[.)]\s+(.+)$/);
  if (!match) return null;

  return {
    letter: match[1],
    text: match[2].trim(),
    isCorrect,
  };
}

function cleanMarkdown(value) {
  return value
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/^\s*[-*+]\s+/, '')
    .trim();
}

function hashText(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(36);
}

function readAllProgress() {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value ? JSON.parse(value) : {};
  } catch {
    storageAvailable = false;
    return {};
  }
}

function readProgress(chapterData) {
  const allProgress = readAllProgress();
  const saved = allProgress[chapterData.chapter.id];
  if (!saved || saved.sourceHash !== chapterData.sourceHash) return null;
  if (!saved.answers || typeof saved.answers !== 'object') return null;
  const questionIds = new Set(chapterData.questions.map((question) => question.id));
  const completedQuestionIds = Array.isArray(saved.completedQuestionIds)
    ? [...new Set(saved.completedQuestionIds.filter((id) => questionIds.has(id)))]
    : [];
  const questionById = new Map(chapterData.questions.map((question) => [question.id, question]));
  const retryQuestionIds = Array.isArray(saved.retrySession?.questionIds)
    ? [...new Set(saved.retrySession.questionIds.filter((id) => {
      const question = questionById.get(id);
      const answer = saved.answers[id];
      return question && Number.isInteger(answer) && answer !== question.correctIndex;
    }))]
    : [];
  const retryAnswers = Object.fromEntries(Object.entries(saved.retrySession?.answers ?? {})
    .filter(([id, answer]) => retryQuestionIds.includes(id)
      && Number.isInteger(answer)
      && answer >= 0
      && answer < questionById.get(id).options.length));
  const retryCompletedQuestionIds = Array.isArray(saved.retrySession?.completedQuestionIds)
    ? [...new Set(saved.retrySession.completedQuestionIds.filter((id) => retryQuestionIds.includes(id)))]
    : [];
  const retrySession = retryQuestionIds.length
    ? {
      questionIds: retryQuestionIds,
      answers: retryAnswers,
      completedQuestionIds: retryCompletedQuestionIds,
      page: Number.isInteger(saved.retrySession.page) ? saved.retrySession.page : 0,
    }
    : null;
  return {
    answers: saved.answers,
    mode: saved.mode === MODE_AFTER_QUESTION ? MODE_AFTER_QUESTION : MODE_END_OF_CHAPTER,
    completedQuestionIds,
    page: Number.isInteger(saved.page) ? saved.page : 0,
    submitted: Boolean(saved.submitted),
    timerStartedAt: Number.isFinite(saved.timerStartedAt) ? saved.timerStartedAt : null,
    elapsedMs: Number.isFinite(saved.elapsedMs) && saved.elapsedMs >= 0 ? saved.elapsedMs : null,
    retrySession,
    reviewPage: Number.isInteger(saved.reviewPage) ? saved.reviewPage : 0,
    reviewFilter: ['all', 'incorrect', 'unanswered'].includes(saved.reviewFilter) ? saved.reviewFilter : 'all',
    sourceHash: chapterData.sourceHash,
  };
}

function saveProgress() {
  if (!activeChapter || !activeProgress) return;
  writeProgress(activeChapter.id, activeProgress);
}

function writeProgress(chapterId, progress) {
  const allProgress = readAllProgress();
  allProgress[chapterId] = progress;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allProgress));
    storageAvailable = true;
  } catch {
    storageAvailable = false;
  }
}

function clearProgress(chapterId) {
  const allProgress = readAllProgress();
  delete allProgress[chapterId];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allProgress));
    storageAvailable = true;
  } catch {
    storageAvailable = false;
  }
}

function makeProgress(chapterData, mode = MODE_END_OF_CHAPTER) {
  return {
    answers: {},
    mode,
    completedQuestionIds: [],
    page: 0,
    submitted: false,
    timerStartedAt: null,
    elapsedMs: null,
    retrySession: null,
    reviewPage: 0,
    reviewFilter: 'all',
    sourceHash: chapterData.sourceHash,
  };
}

function makeAllChaptersData() {
  if (!chapters.length) return null;
  const chapterData = chapters.map((chapter) => loadedChapters.get(chapter.id));
  if (chapterData.some((data) => !data || data.error)) return null;

  const sourceSignature = chapterData.map(({ chapter, sourceHash }) => ({
    id: chapter.id,
    number: chapter.number,
    title: chapter.title,
    file: chapter.file,
    sourceHash,
  }));
  return {
    chapter: { id: ALL_CHAPTERS_ID, number: '', title: 'Kiểm tra tất cả chương' },
    chapters: chapterData,
    isCombined: true,
    questions: chapterData.flatMap((data) => data.questions.map((question) => ({
      ...question,
      chapter: data.chapter,
    }))),
    sourceHash: hashText(JSON.stringify(sourceSignature)),
  };
}

function renderHome() {
  stopElapsedTimer();
  view = 'home';
  activeChapter = null;
  activeQuizData = null;
  activeProgress = null;
  const errors = chapters
    .map((chapter) => loadedChapters.get(chapter.id))
    .filter((item) => item?.error);
  const available = chapters
    .map((chapter) => loadedChapters.get(chapter.id))
    .filter((item) => item && !item.error);
  const allChaptersData = makeAllChaptersData();
  const totalQuestions = available.reduce((sum, item) => sum + item.questions.length, 0);

  appView.innerHTML = `
    ${catalogError ? renderCatalogErrorBanner(catalogError) : ''}
    ${errors.length ? renderErrorBanner(errors) : ''}
    <section class="page-heading">
      <p class="eyebrow">Bộ câu hỏi trắc nghiệm</p>
      <h1>Luyện tập theo chương</h1>
      <p class="intro">Chọn chương và cách xem đáp án. Bạn có thể xem đáp án sau khi nộp cả chương hoặc chốt từng câu.</p>
      <div class="home-export-actions">
        <button class="button secondary" type="button" data-export-results>Xuất kết quả Markdown <span aria-hidden="true">↓</span></button>
        <span class="export-status" data-export-status role="status" aria-live="polite"></span>
      </div>
    </section>
    ${renderAllChaptersCard(allChaptersData, errors)}
    <section class="chapter-grid" aria-label="Danh sách chương">
      ${chapters.map((chapter) => renderChapterCard(chapter, loadedChapters.get(chapter.id))).join('')}
    </section>
    ${available.length ? `<p class="resume-note">${formatNumber(totalQuestions)} câu hỏi trong ${available.length} chương</p>` : ''}
    ${!storageAvailable ? '<p class="storage-note" role="status">Trình duyệt không cho phép lưu tiến độ. Bài vẫn hoạt động trong phiên hiện tại.</p>' : ''}
  `;

  appView.querySelectorAll('[data-start-chapter]').forEach((button) => {
    button.addEventListener('click', () => startChapter(button.dataset.startChapter));
  });
  appView.querySelector('[data-export-results]')?.addEventListener('click', exportResultsMarkdown);
  appView.querySelector('[data-start-all-chapters]')?.addEventListener('click', startAllChapters);
  appView.querySelectorAll('[data-mode-chapter]').forEach((input) => {
    input.addEventListener('change', () => updateChapterMode(input.dataset.modeChapter, input.value));
  });
  appView.querySelectorAll('[data-mode-all-chapters]').forEach((input) => {
    input.addEventListener('change', () => updateAllChaptersMode(input.value));
  });
  focusViewHeading();
}

function collectSubmittedResults() {
  const results = [];
  const allChaptersData = makeAllChaptersData();
  if (allChaptersData) {
    const progress = readProgress(allChaptersData);
    if (progress?.submitted) results.push(makeExportResult(allChaptersData, progress));
  }

  for (const chapter of chapters) {
    const data = loadedChapters.get(chapter.id);
    if (!data || data.error) continue;
    const progress = readProgress(data);
    if (progress?.submitted) results.push(makeExportResult(data, progress));
  }

  return results;
}

function makeExportResult(data, progress) {
  const answers = {};
  for (const question of data.questions) {
    const selected = progress.answers[question.id];
    if (Number.isInteger(selected) && selected >= 0 && selected < question.options.length) {
      answers[question.id] = selected;
    }
  }
  const normalizedProgress = { ...progress, answers };
  return {
    data,
    progress: normalizedProgress,
    score: calculateScore(normalizedProgress, data.questions),
  };
}

function exportResultsMarkdown() {
  const status = appView.querySelector('[data-export-status]');
  const results = collectSubmittedResults();
  if (!results.length) {
    if (status) status.textContent = 'Chưa có kết quả đã nộp hợp lệ để xuất.';
    return;
  }

  const generatedAt = new Date();
  const date = [generatedAt.getFullYear(), String(generatedAt.getMonth() + 1).padStart(2, '0'), String(generatedAt.getDate()).padStart(2, '0')].join('-');
  const markdown = [
    '# Kết quả làm bài QTM',
    '',
    `Xuất lúc: ${generatedAt.toLocaleString('vi-VN')}`,
    `Số bài đã nộp: ${results.length}`,
    '',
    ...results.flatMap(renderExportResult),
  ].join('\n');

  try {
    const file = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = url;
    link.download = `qtm-ket-qua-lam-bai-${date}.md`;
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    if (status) status.textContent = `Đã xuất ${results.length} kết quả vào file Markdown.`;
  } catch {
    if (status) status.textContent = 'Không thể tạo file Markdown trên trình duyệt này.';
  }
}

function renderExportResult({ data, progress, score }) {
  const percent = Math.round((score.correct / data.questions.length) * 100);
  const title = data.isCombined
    ? 'Bài tổng hợp tất cả chương'
    : `Chương ${data.chapter.number} · ${data.chapter.title}`;
  const lines = [
    `## ${escapeMarkdownHeading(title)}`,
    '',
    `- Điểm tổng: **${score.correct}/${data.questions.length} câu đúng (${percent}%)**`,
    `- Kết quả: ${score.wrong} câu sai · ${score.unanswered} câu bỏ trống`,
    `- Thời gian làm bài: ${formatElapsedTime(getElapsedTimeMs(progress))}`,
    '',
    '### Điểm theo chương',
    '',
  ];

  const chapterData = data.isCombined ? data.chapters : [data];
  for (const item of chapterData) {
    const chapterScore = calculateScore(progress, item.questions);
    lines.push(`- **CH ${escapeMarkdownHeading(item.chapter.number)} · ${escapeMarkdownHeading(item.chapter.title)}:** ${chapterScore.correct}/${item.questions.length} đúng, ${chapterScore.wrong} sai, ${chapterScore.unanswered} bỏ trống`);
  }

  lines.push('', '### Chi tiết từng câu', '');
  for (const question of data.questions) {
    const selectedIndex = progress.answers[question.id];
    const selectedOption = Number.isInteger(selectedIndex) ? question.options[selectedIndex] : null;
    const correctOption = question.options[question.correctIndex];
    const questionChapter = question.chapter ?? data.chapter;
    const questionHeading = data.isCombined
      ? `CH ${questionChapter.number} · ${questionChapter.title} — Câu ${question.number}`
      : `Câu ${question.number}`;
    const resultLabel = selectedOption
      ? selectedIndex === question.correctIndex ? 'Đúng' : 'Sai'
      : 'Bỏ trống';

    lines.push(`#### ${escapeMarkdownHeading(questionHeading)}`, '');
    lines.push('**Nội dung câu hỏi**', '', markdownBlockquote(question.prompt), '');
    lines.push(`- Bạn chọn: ${selectedOption ? `${selectedOption.letter}. ${selectedOption.text}` : 'Bỏ trống'}`);
    lines.push(`- Đáp án đúng: ${correctOption.letter}. ${correctOption.text}`);
    lines.push(`- Kết quả: **${resultLabel}**`, '');
  }

  return [...lines, ''];
}

function markdownBlockquote(value) {
  return String(value).split(/\r?\n/).map((line) => line ? `> ${line}` : '>').join('\n');
}

function escapeMarkdownHeading(value) {
  return String(value).replace(/([\\`*_{}\[\]()#+.!|>])/g, '\\$1');
}

function renderCatalogErrorBanner(message) {
  return `
    <div class="error-banner" role="alert">
      <strong>Không đọc được danh mục chương</strong>
      <span>${escapeHtml(message)} Kiểm tra tệp <code>${CHAPTERS_MANIFEST}</code>.</span>
    </div>
  `;
}

function renderErrorBanner(errors) {
  return `
    <div class="error-banner" role="alert">
      <strong>Không tải được một số bộ câu hỏi</strong>
      <span>Các chương còn lại vẫn có thể sử dụng.</span>
      <ul>${errors.map((item) => `<li><code>${escapeHtml(item.chapter.file)}</code>: ${escapeHtml(item.error)}</li>`).join('')}</ul>
    </div>
  `;
}

function renderAllChaptersCard(data, errors) {
  const saved = data ? readProgress(data) : null;
  const answered = saved && data ? countAnswered(saved, data.questions) : 0;
  const mode = saved?.mode ?? MODE_END_OF_CHAPTER;
  let status = 'Chưa bắt đầu';
  let buttonLabel = 'Bắt đầu kiểm tra';
  if (saved?.submitted) {
    const score = calculateScore(saved, data.questions);
    if (saved.retrySession) {
      const retryQuestions = data.questions.filter((question) => saved.retrySession.questionIds.includes(question.id));
      const retryAnswered = countAnswered(saved.retrySession, retryQuestions);
      status = `Đang làm lại · ${retryAnswered}/${retryQuestions.length} câu đã chọn`;
      buttonLabel = 'Tiếp tục làm lại';
    } else {
      status = `Đã hoàn thành · ${score.correct}/${data.questions.length} câu đúng`;
      buttonLabel = 'Xem kết quả';
    }
  } else if (saved && (answered > 0 || Number.isFinite(saved.timerStartedAt))) {
    status = `Đang làm · ${answered}/${data.questions.length} câu đã chọn`;
    buttonLabel = 'Tiếp tục kiểm tra';
  }

  const summary = data
    ? `${formatNumber(data.questions.length)} câu · ${data.chapters.length} chương`
    : errors.length
      ? `Cần tải đủ ${chapters.length} chương để bắt đầu bài tổng hợp.`
      : 'Chưa có danh mục chương hợp lệ.';

  return `
    <article class="all-chapters-card">
      <div class="all-chapters-copy">
        <p class="eyebrow">Bài tổng hợp</p>
        <h2>Kiểm tra tất cả chương</h2>
        <p>${summary} · Theo thứ tự chương, chấm điểm cuối lượt.</p>
      </div>
      <fieldset class="chapter-mode-picker all-chapters-mode-picker" ${data ? '' : 'disabled'}>
        <legend>Chế độ hiện đáp án</legend>
        <label><input type="radio" name="mode-all-chapters" value="${MODE_END_OF_CHAPTER}" data-mode-all-chapters ${mode === MODE_END_OF_CHAPTER ? 'checked' : ''} /><span>Làm hết rồi xem đáp án</span></label>
        <label><input type="radio" name="mode-all-chapters" value="${MODE_AFTER_QUESTION}" data-mode-all-chapters ${mode === MODE_AFTER_QUESTION ? 'checked' : ''} /><span>Chốt từng câu</span></label>
      </fieldset>
      <div class="all-chapters-action">
        <span class="saved-state ${saved?.submitted ? 'is-complete' : saved && answered ? 'has-progress' : ''}">${escapeHtml(status)}</span>
        <button class="button" type="button" data-start-all-chapters ${data ? '' : 'disabled'}>${buttonLabel}<span aria-hidden="true">→</span></button>
      </div>
    </article>
  `;
}

function updateAllChaptersMode(mode) {
  const data = makeAllChaptersData();
  if (!data) return;
  const progress = readProgress(data) ?? makeProgress(data);
  progress.mode = mode === MODE_AFTER_QUESTION ? MODE_AFTER_QUESTION : MODE_END_OF_CHAPTER;
  writeProgress(ALL_CHAPTERS_ID, progress);
}

function renderChapterCard(chapter, data) {
  if (!data) return '';
  if (data.error) {
    return `
      <article class="chapter-card unavailable-card">
        <div class="chapter-card-top"><span class="chapter-number">CH ${escapeHtml(chapter.number)}</span><span class="chapter-count">Chưa tải được</span></div>
        <h2>${escapeHtml(chapter.title)}</h2>
        <p class="unavailable-filename">${escapeHtml(chapter.file)}</p>
      </article>
    `;
  }

  const saved = readProgress(data);
  const answered = saved ? countAnswered(saved, data.questions) : 0;
  const mode = chapterModes.get(chapter.id) ?? saved?.mode ?? MODE_END_OF_CHAPTER;
  const modeDescription = mode === MODE_AFTER_QUESTION
    ? 'Chốt từng câu để xem đáp án ngay.'
    : 'Xem đáp án sau khi nộp cả chương.';
  let status = 'Chưa bắt đầu';
  let buttonLabel = 'Bắt đầu';
  if (saved?.submitted) {
    const score = calculateScore(saved, data.questions);
    if (saved.retrySession) {
      const retryQuestions = data.questions.filter((question) => saved.retrySession.questionIds.includes(question.id));
      const retryAnswered = countAnswered(saved.retrySession, retryQuestions);
      status = `Đang làm lại · ${retryAnswered}/${retryQuestions.length} câu đã chọn`;
      buttonLabel = 'Tiếp tục làm lại';
    } else {
      status = `Đã hoàn thành · ${score.correct}/${data.questions.length} câu đúng`;
      buttonLabel = 'Xem kết quả';
    }
  } else if (saved && (answered > 0 || Number.isFinite(saved.timerStartedAt))) {
    status = `Đang làm · ${answered}/${data.questions.length} câu đã chọn`;
    buttonLabel = 'Tiếp tục';
  }

  return `
    <article class="chapter-card">
      <div class="chapter-card-top">
        <span class="chapter-number">CH ${escapeHtml(chapter.number)}</span>
        <span class="chapter-count">${formatNumber(data.questions.length)} câu</span>
      </div>
      <h2>${escapeHtml(chapter.title)}</h2>
      <p>Làm theo thứ tự · Chấm điểm cuối lượt</p>
      <fieldset class="chapter-mode-picker">
        <legend>Chế độ hiện đáp án</legend>
        <label><input type="radio" name="mode-${chapter.id}" value="${MODE_END_OF_CHAPTER}" data-mode-chapter="${chapter.id}" ${mode === MODE_END_OF_CHAPTER ? 'checked' : ''} /><span>Làm hết rồi xem đáp án</span></label>
        <label><input type="radio" name="mode-${chapter.id}" value="${MODE_AFTER_QUESTION}" data-mode-chapter="${chapter.id}" ${mode === MODE_AFTER_QUESTION ? 'checked' : ''} /><span>Chốt từng câu</span></label>
        <span class="chapter-mode-description" aria-live="polite">${modeDescription}</span>
      </fieldset>
      <div class="chapter-card-bottom">
        <span class="saved-state ${saved?.submitted ? 'is-complete' : saved && answered ? 'has-progress' : ''}">${escapeHtml(status)}</span>
        <button class="button" type="button" data-start-chapter="${chapter.id}">${buttonLabel}<span aria-hidden="true">→</span></button>
      </div>
    </article>
  `;
}

function updateChapterMode(chapterId, mode) {
  const data = loadedChapters.get(chapterId);
  if (!data || data.error) return;

  const progress = readProgress(data) ?? makeProgress(data);
  progress.mode = mode === MODE_AFTER_QUESTION ? MODE_AFTER_QUESTION : MODE_END_OF_CHAPTER;
  chapterModes.set(chapterId, progress.mode);
  writeProgress(chapterId, progress);

  const card = appView.querySelector(`[data-start-chapter="${chapterId}"]`)?.closest('.chapter-card');
  const description = card?.querySelector('.chapter-mode-description');
  if (description) {
    description.textContent = progress.mode === MODE_AFTER_QUESTION
      ? 'Chốt từng câu để xem đáp án ngay.'
      : 'Xem đáp án sau khi nộp cả chương.';
  }
}

function startChapter(chapterId) {
  const data = loadedChapters.get(chapterId);
  if (!data || data.error) return;

  startQuiz(data);
}

function startAllChapters() {
  const data = makeAllChaptersData();
  if (!data) return;
  startQuiz(data);
}

function startQuiz(data) {
  activeQuizData = data;
  activeChapter = data.chapter;
  activeProgress = readProgress(data) ?? makeProgress(data);
  activeProgress.mode = (data.isCombined ? activeProgress.mode : chapterModes.get(data.chapter.id) ?? activeProgress.mode)
    ?? MODE_END_OF_CHAPTER;
  activeProgress.page = Math.max(0, Math.min(activeProgress.page, pageCount(data.questions) - 1));
  activeProgress.reviewPage = Math.max(0, activeProgress.reviewPage);
  saveProgress();

  if (activeProgress.submitted && activeProgress.retrySession) {
    renderQuiz();
  } else if (activeProgress.submitted) {
    renderResults();
  } else {
    renderQuiz();
  }
}

function getActiveQuizSession() {
  return activeProgress.retrySession ?? activeProgress;
}

function getActiveQuizQuestions() {
  const questions = activeQuizData.questions;
  const retrySession = activeProgress.retrySession;
  if (!retrySession) return questions;
  const retryIds = new Set(retrySession.questionIds);
  return questions.filter((question) => retryIds.has(question.id));
}

function renderQuiz() {
  view = 'quiz';
  if (!activeProgress.retrySession && !activeProgress.submitted
    && (!Number.isFinite(activeProgress.timerStartedAt) || activeProgress.timerStartedAt <= 0)) {
    activeProgress.timerStartedAt = Date.now();
    activeProgress.elapsedMs = null;
    saveProgress();
  }
  const session = getActiveQuizSession();
  const questions = getActiveQuizQuestions();
  if (!questions.length) {
    activeProgress.retrySession = null;
    saveProgress();
    renderResults();
    return;
  }
  const isRetry = Boolean(activeProgress.retrySession);
  const totalPages = pageCount(questions);
  session.page = Math.max(0, Math.min(session.page, totalPages - 1));
  const start = session.page * PAGE_SIZE;
  const pageQuestions = questions.slice(start, start + PAGE_SIZE);
  const answered = countAnswered(session, questions);
  const unanswered = questions.length - answered;
  const completedOnPage = pageQuestions.filter((question) => isQuestionCompleted(session, question.id)).length;
  const progressPercent = questions.length ? Math.round((answered / questions.length) * 100) : 0;
  const end = Math.min(start + pageQuestions.length, questions.length);
  const modeHint = activeProgress.mode === MODE_AFTER_QUESTION
    ? `${completedOnPage}/${pageQuestions.length} câu trên trang đã hoàn thành`
    : `Đáp án hiện sau khi nộp ${isRetry ? 'lượt làm lại' : 'bài'}`;
  const heading = isRetry
    ? 'Làm lại câu sai'
    : activeQuizData.isCombined
      ? 'Bài tổng hợp'
      : `Chương ${escapeHtml(activeChapter.number)}`;
  const progressLabel = isRetry ? 'câu trong lượt làm lại đã trả lời' : 'câu đã trả lời';
  const questionRange = isRetry
    ? `Câu ${start + 1}–${end} <span class="meta-muted">/ ${questions.length} câu sai</span>`
    : `Câu ${start + 1}–${end} <span class="meta-muted">/ ${questions.length}</span>`;
  const unansweredLabel = unanswered
    ? `${unanswered} câu chưa chọn đáp án`
    : 'Bạn đã trả lời tất cả câu hỏi';

  appView.innerHTML = `
    <div class="quiz-topline">
      <div class="quiz-heading">
        <p class="eyebrow">${heading}</p>
        <h1 class="view-title">${escapeHtml(activeChapter.title)}</h1>
      </div>
      <button class="button ghost" id="back-to-chapters" type="button"><span aria-hidden="true">←</span> Danh sách chương</button>
    </div>

    <section class="progress-panel" aria-label="Tiến độ làm bài">
      <div class="progress-meta"><strong>${answered}/${questions.length} ${progressLabel}</strong><span id="quiz-mode-hint">${modeHint}</span>${isRetry ? '' : '<time class="elapsed-time" id="elapsed-time" aria-label="Thời gian đã làm">00:00</time>'}</div>
      <div class="progress-track" role="progressbar" aria-label="Số câu đã trả lời" aria-valuemin="0" aria-valuemax="${questions.length}" aria-valuenow="${answered}">
        <div class="progress-fill" style="width:${progressPercent}%"></div>
      </div>
    </section>

    <div class="quiz-page-meta"><strong>${questionRange}</strong><span>Trang ${session.page + 1} / ${totalPages}</span></div>
    <section class="question-list" aria-label="Câu hỏi trang ${session.page + 1}">
      ${pageQuestions.map((question) => renderQuestionCard(question, session)).join('')}
    </section>

    <nav class="quiz-navigation" aria-label="Điều hướng bài làm">
      <button class="button secondary" id="previous-page" type="button" ${session.page === 0 ? 'disabled' : ''}><span aria-hidden="true">←</span> Trang trước</button>
      <span class="navigation-center">${session.page + 1} / ${totalPages}</span>
      ${session.page < totalPages - 1
        ? '<button class="button" id="next-page" type="button">Trang tiếp <span aria-hidden="true">→</span></button>'
        : `<button class="button" id="submit-quiz" type="button">${isRetry ? 'Nộp lượt làm lại' : 'Nộp bài'} <span aria-hidden="true">✓</span></button>`}
    </nav>
    <p class="resume-note">${unansweredLabel} · Tiến độ được lưu tự động</p>
  `;

  appView.querySelector('#back-to-chapters').addEventListener('click', renderHome);
  appView.querySelector('#previous-page').addEventListener('click', () => moveQuizPage(-1));
  appView.querySelector('#next-page')?.addEventListener('click', () => moveQuizPage(1));
  appView.querySelector('#submit-quiz')?.addEventListener('click', submitQuiz);
  appView.querySelectorAll('input[data-question-id]').forEach((input) => {
    input.addEventListener('change', () => {
      session.answers[input.dataset.questionId] = Number(input.value);
      saveProgress();
      updateQuizProgress();
    });
  });
  appView.querySelectorAll('[data-complete-question]').forEach((button) => {
    button.addEventListener('click', () => completeQuestion(button.dataset.completeQuestion));
  });
  startElapsedTimer();
  focusViewHeading();
}

function stopElapsedTimer() {
  if (elapsedTimerInterval !== null) {
    window.clearInterval(elapsedTimerInterval);
    elapsedTimerInterval = null;
  }
}

function getElapsedTimeMs(progress) {
  if (progress.submitted) {
    return Number.isFinite(progress.elapsedMs) && progress.elapsedMs >= 0 ? progress.elapsedMs : null;
  }
  if (!Number.isFinite(progress.timerStartedAt) || progress.timerStartedAt <= 0) return null;
  return Math.max(0, Date.now() - progress.timerStartedAt);
}

function formatElapsedTime(elapsedMs) {
  if (!Number.isFinite(elapsedMs) || elapsedMs < 0) return '—';
  const totalSeconds = Math.floor(elapsedMs / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const pad = (value) => String(value).padStart(2, '0');
  return hours > 0
    ? `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
    : `${pad(Math.floor(totalSeconds / 60))}:${pad(seconds)}`;
}

function updateElapsedTimer() {
  if (!activeProgress) return;
  const time = appView.querySelector('#elapsed-time');
  if (time) time.textContent = formatElapsedTime(getElapsedTimeMs(activeProgress));
}

function startElapsedTimer() {
  stopElapsedTimer();
  if (!activeProgress || activeProgress.submitted || activeProgress.retrySession) return;
  updateElapsedTimer();
  elapsedTimerInterval = window.setInterval(updateElapsedTimer, 1000);
}

function renderQuestionCard(question, progress) {
  const selectedIndex = progress.answers[question.id];
  const completed = isQuestionCompleted(progress, question.id);
  const revealAnswer = activeProgress.mode === MODE_AFTER_QUESTION && completed;
  const selectedCorrect = selectedIndex === question.correctIndex;
  const questionChapter = question.chapter ?? activeChapter;
  const chapterLabel = activeQuizData.isCombined
    ? `<span class="topic question-chapter-label">CH ${escapeHtml(questionChapter.number)} · ${escapeHtml(questionChapter.title)}</span>`
    : '';
  const sectionLabel = question.section && (!activeQuizData.isCombined || question.section !== questionChapter.title)
    ? `<span class="topic">${escapeHtml(question.section)}</span>`
    : '';
  const choices = question.options.map((option, index) => {
    const correct = revealAnswer && index === question.correctIndex;
    const selectedWrong = revealAnswer && selectedIndex === index && !selectedCorrect;
    const tag = correct && selectedCorrect
      ? '<span class="choice-answer-tag">Bạn chọn · Đáp án đúng</span>'
      : correct
        ? '<span class="choice-answer-tag">Đáp án đúng</span>'
        : selectedWrong
          ? '<span class="choice-answer-tag">Bạn đã chọn</span>'
          : '';
    const classes = ['choice-content', correct ? 'is-answer' : '', selectedWrong ? 'is-selected-wrong' : ''].filter(Boolean).join(' ');
    return `
      <label class="answer-choice ${completed ? 'is-locked' : ''}">
        <input type="radio" name="answer-${question.id}" value="${index}" data-question-id="${question.id}" ${selectedIndex === index ? 'checked' : ''} ${completed ? 'disabled' : ''} />
        <span class="${classes}"><span class="choice-letter" aria-hidden="true">${option.letter}</span><span class="choice-text">${renderRichText(option.text)}</span>${tag}</span>
      </label>
    `;
  }).join('');

  return `
    <article class="question-card ${completed ? 'is-completed' : ''}" data-question-card="${question.id}">
      <div class="question-label">Câu ${question.number}${chapterLabel}${sectionLabel}</div>
      <p class="question-prompt">${renderRichText(question.prompt)}</p>
      <fieldset class="question-options">
        <legend>Chọn một đáp án cho ${activeQuizData.isCombined ? `${escapeHtml(questionChapter.title)}, ` : ''}câu ${question.number}</legend>
        ${choices}
      </fieldset>
      ${activeProgress.mode === MODE_AFTER_QUESTION
        ? completed
          ? `<p class="question-feedback ${selectedCorrect ? 'is-correct' : 'is-wrong'}" role="status">${selectedCorrect ? 'Chính xác.' : 'Chưa chính xác.'} Đáp án đúng được đánh dấu bên trên.</p>`
          : `<div class="question-action"><button class="button secondary" type="button" data-complete-question="${question.id}" ${Number.isInteger(selectedIndex) ? '' : 'disabled'}>Hoàn thành câu</button></div>`
        : ''}
    </article>
  `;
}

function completeQuestion(questionId) {
  const session = getActiveQuizSession();
  if (activeProgress.mode !== MODE_AFTER_QUESTION
    || !Number.isInteger(session.answers[questionId])
    || isQuestionCompleted(session, questionId)) return;

  session.completedQuestionIds.push(questionId);
  saveProgress();

  const question = activeQuizData.questions.find((item) => item.id === questionId);
  const card = appView.querySelector(`[data-question-card="${questionId}"]`);
  if (!question || !card) return;
  card.outerHTML = renderQuestionCard(question, session);
  updateQuizProgress();
  const feedback = appView.querySelector(`[data-question-card="${questionId}"] .question-feedback`);
  feedback?.setAttribute('tabindex', '-1');
  feedback?.focus({ preventScroll: true });
}

function isQuestionCompleted(progress, questionId) {
  return progress.completedQuestionIds.includes(questionId);
}

function updateQuizProgress() {
  const session = getActiveQuizSession();
  const questions = getActiveQuizQuestions();
  const answered = countAnswered(session, questions);
  const unanswered = questions.length - answered;
  const progress = appView.querySelector('[role="progressbar"]');
  const fill = appView.querySelector('.progress-fill');
  const meta = appView.querySelector('.progress-meta strong');
  const note = appView.querySelector('.resume-note');
  if (progress) progress.setAttribute('aria-valuenow', String(answered));
  if (fill) fill.style.width = `${Math.round((answered / questions.length) * 100)}%`;
  if (meta) meta.textContent = `${answered}/${questions.length} ${activeProgress.retrySession ? 'câu trong lượt làm lại đã trả lời' : 'câu đã trả lời'}`;
  const pageStart = session.page * PAGE_SIZE;
  const pageQuestions = questions.slice(pageStart, pageStart + PAGE_SIZE);
  const modeHint = appView.querySelector('#quiz-mode-hint');
  if (modeHint) {
    modeHint.textContent = activeProgress.mode === MODE_AFTER_QUESTION
      ? `${pageQuestions.filter((question) => isQuestionCompleted(session, question.id)).length}/${pageQuestions.length} câu trên trang đã hoàn thành`
      : `Đáp án hiện sau khi nộp ${activeProgress.retrySession ? 'lượt làm lại' : 'bài'}`;
  }
  appView.querySelectorAll('[data-complete-question]').forEach((button) => {
    const selected = session.answers[button.dataset.completeQuestion];
    button.disabled = !Number.isInteger(selected);
  });
  if (note) note.textContent = `${unanswered ? `${unanswered} câu chưa chọn đáp án` : 'Bạn đã trả lời tất cả câu hỏi'} · Tiến độ được lưu tự động`;
}

function moveQuizPage(offset) {
  const session = getActiveQuizSession();
  const questions = getActiveQuizQuestions();
  session.page = Math.max(0, Math.min(pageCount(questions) - 1, session.page + offset));
  saveProgress();
  renderQuiz();
  if (offset > 0) scrollToTop();
}

function submitQuiz() {
  if (activeProgress.retrySession) {
    submitWrongQuestionRetry();
    return;
  }
  const data = activeQuizData;
  const unanswered = data.questions.length - countAnswered(activeProgress, data.questions);
  if (unanswered > 0) {
    const shouldSubmit = window.confirm(`Còn ${unanswered} câu chưa trả lời. Câu bỏ trống không được tính điểm. Bạn vẫn muốn nộp bài?`);
    if (!shouldSubmit) return;
  }

  activeProgress.elapsedMs = getElapsedTimeMs(activeProgress);
  activeProgress.submitted = true;
  activeProgress.reviewPage = 0;
  activeProgress.reviewFilter = 'all';
  saveProgress();
  stopElapsedTimer();
  renderResults();
}

function submitWrongQuestionRetry() {
  const session = activeProgress.retrySession;
  if (!session) return;
  const questions = getActiveQuizQuestions();
  const unanswered = questions.length - countAnswered(session, questions);
  if (unanswered > 0) {
    const shouldSubmit = window.confirm(`Còn ${unanswered} câu trong lượt làm lại chưa chọn đáp án. Câu bỏ trống giữ nguyên đáp án cũ. Bạn vẫn muốn nộp lượt làm lại?`);
    if (!shouldSubmit) return;
  }

  for (const question of questions) {
    const answer = session.answers[question.id];
    if (Number.isInteger(answer)) activeProgress.answers[question.id] = answer;
  }
  activeProgress.retrySession = null;
  activeProgress.reviewPage = 0;
  activeProgress.reviewFilter = 'all';
  saveProgress();
  renderResults();
}

function renderResults() {
  stopElapsedTimer();
  view = 'results';
  const data = activeQuizData;
  const score = calculateScore(activeProgress, data.questions);
  const filtered = getReviewQuestions(data.questions, activeProgress);
  const totalPages = Math.max(1, pageCount(filtered));
  activeProgress.reviewPage = Math.min(activeProgress.reviewPage, totalPages - 1);
  const start = activeProgress.reviewPage * PAGE_SIZE;
  const end = Math.min(start + PAGE_SIZE, filtered.length);
  const pageQuestions = filtered.slice(start, end);
  const percent = Math.round((score.correct / data.questions.length) * 100);
  const elapsedTime = formatElapsedTime(getElapsedTimeMs(activeProgress));
  const chapterBreakdown = data.isCombined
    ? `<section class="chapter-score-section" aria-label="Điểm theo chương">
        <h2>Điểm theo chương</h2>
        <div class="chapter-score-grid">${data.chapters.map((chapterData) => {
          const chapterScore = calculateScore(activeProgress, chapterData.questions);
          return `<article class="chapter-score-card">
            <strong>CH ${escapeHtml(chapterData.chapter.number)} · ${escapeHtml(chapterData.chapter.title)}</strong>
            <span>${chapterScore.correct}/${chapterData.questions.length} đúng</span>
            <small>${chapterScore.wrong} sai · ${chapterScore.unanswered} bỏ trống</small>
          </article>`;
        }).join('')}</div>
      </section>`
    : '';

  appView.innerHTML = `
    <div class="quiz-topline">
      <div class="quiz-heading"><p class="eyebrow">${data.isCombined ? 'Kết quả · Bài tổng hợp' : `Kết quả · Chương ${escapeHtml(activeChapter.number)}`}</p><h1 class="view-title">${escapeHtml(activeChapter.title)}</h1></div>
      <button class="button ghost" id="back-to-chapters" type="button"><span aria-hidden="true">←</span> Danh sách chương</button>
    </div>

    <section class="result-summary" aria-label="Tổng kết kết quả">
      <div><p class="eyebrow">Đã hoàn thành</p><h2>${score.unanswered ? 'Bài làm đã được chấm' : 'Hoàn thành tốt!'}</h2><p>${score.correct} đúng · ${score.wrong} sai · ${score.unanswered} chưa trả lời</p><p class="result-duration">Thời gian làm bài: <time>${elapsedTime}</time></p></div>
      <div class="score-block"><span class="score-number">${score.correct}/${data.questions.length}</span><span class="score-caption">${percent}% câu đúng</span></div>
    </section>

    ${chapterBreakdown}

    <div class="result-actions">
      <label class="filter-label" for="review-filter">Xem câu
        <select id="review-filter">
          <option value="all" ${activeProgress.reviewFilter === 'all' ? 'selected' : ''}>Tất cả (${data.questions.length})</option>
          <option value="incorrect" ${activeProgress.reviewFilter === 'incorrect' ? 'selected' : ''}>Trả lời sai (${score.wrong})</option>
          <option value="unanswered" ${activeProgress.reviewFilter === 'unanswered' ? 'selected' : ''}>Chưa trả lời (${score.unanswered})</option>
        </select>
      </label>
      <span class="spacer"></span>
      ${score.wrong > 0 ? `<button class="button" id="retry-wrong-questions" type="button">Làm lại câu sai (${score.wrong})</button>` : ''}
      <button class="button secondary" id="retake-quiz" type="button">Làm lại từ đầu</button>
    </div>

    ${pageQuestions.length
      ? `<section class="review-list" aria-label="Xem lại câu trả lời">${pageQuestions.map((question) => renderReviewCard(question, activeProgress.answers[question.id])).join('')}</section>`
      : '<div class="empty-review">Không có câu nào trong mục này.</div>'}

    <nav class="quiz-navigation review-navigation" aria-label="Điều hướng phần xem lại">
      <button class="button secondary" id="previous-review-page" type="button" ${activeProgress.reviewPage === 0 ? 'disabled' : ''}><span aria-hidden="true">←</span> Trang trước</button>
      <span class="navigation-center">${filtered.length ? `Câu ${start + 1}–${end} / ${filtered.length}` : '0 câu'}</span>
      <button class="button secondary" id="next-review-page" type="button" ${activeProgress.reviewPage >= totalPages - 1 ? 'disabled' : ''}>Trang tiếp <span aria-hidden="true">→</span></button>
    </nav>
  `;

  appView.querySelector('#back-to-chapters').addEventListener('click', renderHome);
  appView.querySelector('#retry-wrong-questions')?.addEventListener('click', startWrongQuestionRetry);
  appView.querySelector('#retake-quiz').addEventListener('click', retakeQuiz);
  appView.querySelector('#review-filter').addEventListener('change', (event) => {
    activeProgress.reviewFilter = event.target.value;
    activeProgress.reviewPage = 0;
    saveProgress();
    renderResults();
  });
  appView.querySelector('#previous-review-page').addEventListener('click', () => moveReviewPage(-1));
  appView.querySelector('#next-review-page').addEventListener('click', () => moveReviewPage(1));
  focusViewHeading();
}

function renderReviewCard(question, selectedIndex) {
  const selected = Number.isInteger(selectedIndex) ? selectedIndex : null;
  const isCorrect = selected === question.correctIndex;
  const stateClass = selected === null ? 'is-unanswered' : isCorrect ? 'is-correct' : 'is-wrong';
  const stateLabel = selected === null ? 'Chưa trả lời' : isCorrect ? 'Chính xác' : 'Chưa chính xác';
  const stateBadge = selected === null ? 'unanswered' : isCorrect ? 'correct' : 'wrong';
  const chapterLabel = activeQuizData.isCombined && question.chapter
    ? `<span class="review-chapter-label">CH ${escapeHtml(question.chapter.number)} · ${escapeHtml(question.chapter.title)}</span>`
    : '';
  const sectionLabel = question.section && (!activeQuizData.isCombined || question.section !== question.chapter?.title)
    ? `<span class="topic"> · ${escapeHtml(question.section)}</span>`
    : '';

  return `
    <article class="review-card ${stateClass}">
      <div class="review-top"><strong>${chapterLabel}<span>Câu ${question.number}${sectionLabel}</span></strong><span class="answer-status ${stateBadge}">${stateLabel}</span></div>
      <p class="review-prompt">${renderRichText(question.prompt)}</p>
      <div class="review-options">
        ${question.options.map((option, index) => {
          const correct = index === question.correctIndex;
          const selectedWrong = selected === index && !correct;
          const classes = ['review-option', correct ? 'is-answer' : '', selectedWrong ? 'is-selected-wrong' : ''].filter(Boolean).join(' ');
          const tag = correct && selected === index
            ? '<span class="review-tag">Bạn chọn · Đáp án đúng</span>'
            : correct
              ? '<span class="review-tag">Đáp án đúng</span>'
              : selectedWrong
                ? '<span class="review-tag">Bạn đã chọn</span>'
                : '';
          return `<div class="${classes}"><span class="choice-letter" aria-hidden="true">${option.letter}</span><span class="choice-text">${renderRichText(option.text)}</span>${tag}</div>`;
        }).join('')}
      </div>
    </article>
  `;
}

function getReviewQuestions(questions, progress) {
  if (progress.reviewFilter === 'incorrect') {
    return getIncorrectQuestions(questions, progress);
  }
  if (progress.reviewFilter === 'unanswered') {
    return questions.filter((question) => !Number.isInteger(progress.answers[question.id]));
  }
  return questions;
}

function getIncorrectQuestions(questions, progress) {
  return questions.filter((question) => {
    const answer = progress.answers[question.id];
    return Number.isInteger(answer) && answer !== question.correctIndex;
  });
}

function startWrongQuestionRetry() {
  if (!activeProgress.submitted || activeProgress.retrySession) return;
  const data = activeQuizData;
  const incorrectQuestions = getIncorrectQuestions(data.questions, activeProgress);
  if (!incorrectQuestions.length) return;

  activeProgress.retrySession = {
    questionIds: incorrectQuestions.map((question) => question.id),
    answers: {},
    completedQuestionIds: [],
    page: 0,
  };
  activeProgress.reviewPage = 0;
  activeProgress.reviewFilter = 'all';
  saveProgress();
  renderQuiz();
}

function moveReviewPage(offset) {
  const filtered = getReviewQuestions(activeQuizData.questions, activeProgress);
  activeProgress.reviewPage = Math.max(0, Math.min(pageCount(filtered) - 1, activeProgress.reviewPage + offset));
  saveProgress();
  renderResults();
  if (offset > 0) scrollToTop();
}

function scrollToTop() {
  const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
  window.scrollTo({ top: 0, behavior });
}

function retakeQuiz() {
  const subject = activeQuizData.isCombined ? 'bài tổng hợp' : 'chương này';
  if (!window.confirm(`Bắt đầu lại từ đầu? Câu trả lời và kết quả hiện tại của ${subject} sẽ được xóa.`)) return;
  const data = activeQuizData;
  clearProgress(activeChapter.id);
  activeProgress = makeProgress(data, activeProgress.mode);
  saveProgress();
  renderQuiz();
}

function countAnswered(progress, questions) {
  return questions.reduce((count, question) => count + (Number.isInteger(progress.answers[question.id]) ? 1 : 0), 0);
}

function calculateScore(progress, questions) {
  const correct = questions.reduce((count, question) => count + (progress.answers[question.id] === question.correctIndex ? 1 : 0), 0);
  const answered = countAnswered(progress, questions);
  return { correct, wrong: answered - correct, unanswered: questions.length - answered };
}

function pageCount(items) {
  return Math.ceil(items.length / PAGE_SIZE);
}

function formatNumber(value) {
  return new Intl.NumberFormat('vi-VN').format(value);
}

function renderRichText(value) {
  const code = [];
  let safe = escapeHtml(value).replace(/`([^`]+)`/g, (_, text) => {
    const index = code.push(text) - 1;
    return `\uE000${index}\uE001`;
  });
  safe = safe
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/\n\s*\n/g, '<br /><br />')
    .replace(/\n/g, '<br />');
  return safe.replace(/\uE000(\d+)\uE001/g, (_, index) => `<code>${code[Number(index)]}</code>`);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character]);
}

function focusViewHeading() {
  const heading = appView.querySelector('.view-title, .page-heading h1');
  if (heading) {
    heading.setAttribute('tabindex', '-1');
    heading.focus({ preventScroll: true });
  }
}
