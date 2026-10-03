const PAGE_SIZE = 10;
const STORAGE_KEY = 'qtm-quiz-progress-v3';

const chapters = [
  {
    id: 'chapter-2',
    number: '02',
    title: 'Managing Users',
    file: 'trac_nghiem_chuong_02_managing_users.md',
  },
  {
    id: 'chapter-3',
    number: '03',
    title: 'Managing Storage Volumes',
    file: 'chuong_03_trac_nghiem_on_tap.md',
  },
  {
    id: 'chapter-4',
    number: '04',
    title: 'Connecting to Networks',
    file: 'chuong_4_trac_nghiem_on_tap.md',
  },
  {
    id: 'chapter-5',
    number: '05',
    title: 'Managing Software Packages',
    file: 'Trac_nghiem_Chuong_05_Managing_Software_Packages.md',
  },
];

const appView = document.querySelector('#app-view');
const loadedChapters = new Map();
let activeChapter = null;
let activeProgress = null;
let view = 'home';
let storageAvailable = true;

boot();

async function boot() {
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
  return {
    answers: saved.answers,
    page: Number.isInteger(saved.page) ? saved.page : 0,
    submitted: Boolean(saved.submitted),
    reviewPage: Number.isInteger(saved.reviewPage) ? saved.reviewPage : 0,
    reviewFilter: ['all', 'incorrect', 'unanswered'].includes(saved.reviewFilter) ? saved.reviewFilter : 'all',
    sourceHash: chapterData.sourceHash,
  };
}

function saveProgress() {
  if (!activeChapter || !activeProgress) return;
  const allProgress = readAllProgress();
  allProgress[activeChapter.id] = activeProgress;

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

function makeProgress(chapterData) {
  return {
    answers: {},
    page: 0,
    submitted: false,
    reviewPage: 0,
    reviewFilter: 'all',
    sourceHash: chapterData.sourceHash,
  };
}

function renderHome() {
  view = 'home';
  activeChapter = null;
  activeProgress = null;
  const errors = chapters
    .map((chapter) => loadedChapters.get(chapter.id))
    .filter((item) => item?.error);
  const available = chapters
    .map((chapter) => loadedChapters.get(chapter.id))
    .filter((item) => item && !item.error);
  const totalQuestions = available.reduce((sum, item) => sum + item.questions.length, 0);

  appView.innerHTML = `
    ${errors.length ? renderErrorBanner(errors) : ''}
    <section class="page-heading">
      <p class="eyebrow">Bộ câu hỏi trắc nghiệm</p>
      <h1>Luyện tập theo chương</h1>
      <p class="intro">Chọn một chương để làm bài theo thứ tự trong tài liệu. Đáp án sẽ hiện sau khi bạn nộp bài.</p>
    </section>
    <section class="chapter-grid" aria-label="Danh sách chương">
      ${chapters.map((chapter) => renderChapterCard(chapter, loadedChapters.get(chapter.id))).join('')}
    </section>
    ${available.length ? `<p class="resume-note">${formatNumber(totalQuestions)} câu hỏi trong ${available.length} chương</p>` : ''}
    ${!storageAvailable ? '<p class="storage-note" role="status">Trình duyệt không cho phép lưu tiến độ. Bài vẫn hoạt động trong phiên hiện tại.</p>' : ''}
  `;

  appView.querySelectorAll('[data-start-chapter]').forEach((button) => {
    button.addEventListener('click', () => startChapter(button.dataset.startChapter));
  });
  focusViewHeading();
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

function renderChapterCard(chapter, data) {
  if (!data) return '';
  if (data.error) {
    return `
      <article class="chapter-card unavailable-card">
        <div class="chapter-card-top"><span class="chapter-number">CH ${chapter.number}</span><span class="chapter-count">Chưa tải được</span></div>
        <h2>${escapeHtml(chapter.title)}</h2>
        <p class="unavailable-filename">${escapeHtml(chapter.file)}</p>
      </article>
    `;
  }

  const saved = readProgress(data);
  const answered = saved ? countAnswered(saved, data.questions) : 0;
  let status = 'Chưa bắt đầu';
  let buttonLabel = 'Bắt đầu';
  if (saved?.submitted) {
    const score = calculateScore(saved, data.questions);
    status = `Đã hoàn thành · ${score.correct}/${data.questions.length} câu đúng`;
    buttonLabel = 'Xem kết quả';
  } else if (saved && answered > 0) {
    status = `Đang làm · ${answered}/${data.questions.length} câu đã chọn`;
    buttonLabel = 'Tiếp tục';
  }

  return `
    <article class="chapter-card">
      <div class="chapter-card-top">
        <span class="chapter-number">CH ${chapter.number}</span>
        <span class="chapter-count">${formatNumber(data.questions.length)} câu</span>
      </div>
      <h2>${escapeHtml(chapter.title)}</h2>
      <p>Làm theo thứ tự · Chấm điểm cuối lượt</p>
      <div class="chapter-card-bottom">
        <span class="saved-state ${saved?.submitted ? 'is-complete' : saved && answered ? 'has-progress' : ''}">${escapeHtml(status)}</span>
        <button class="button" type="button" data-start-chapter="${chapter.id}">${buttonLabel}<span aria-hidden="true">→</span></button>
      </div>
    </article>
  `;
}

function startChapter(chapterId) {
  const data = loadedChapters.get(chapterId);
  if (!data || data.error) return;

  activeChapter = data.chapter;
  activeProgress = readProgress(data) ?? makeProgress(data);
  activeProgress.page = Math.max(0, Math.min(activeProgress.page, pageCount(data.questions) - 1));
  activeProgress.reviewPage = Math.max(0, activeProgress.reviewPage);
  saveProgress();

  if (activeProgress.submitted) {
    renderResults();
  } else {
    renderQuiz();
  }
}

function renderQuiz() {
  view = 'quiz';
  const data = loadedChapters.get(activeChapter.id);
  const questions = data.questions;
  const totalPages = pageCount(questions);
  activeProgress.page = Math.min(activeProgress.page, totalPages - 1);
  const start = activeProgress.page * PAGE_SIZE;
  const pageQuestions = questions.slice(start, start + PAGE_SIZE);
  const answered = countAnswered(activeProgress, questions);
  const unanswered = questions.length - answered;
  const progressPercent = questions.length ? Math.round((answered / questions.length) * 100) : 0;
  const end = Math.min(start + pageQuestions.length, questions.length);

  appView.innerHTML = `
    <div class="quiz-topline">
      <div class="quiz-heading">
        <p class="eyebrow">Chương ${activeChapter.number}</p>
        <h1 class="view-title">${escapeHtml(activeChapter.title)}</h1>
      </div>
      <button class="button ghost" id="back-to-chapters" type="button"><span aria-hidden="true">←</span> Danh sách chương</button>
    </div>

    <section class="progress-panel" aria-label="Tiến độ làm bài">
      <div class="progress-meta"><strong>${answered}/${questions.length} câu đã trả lời</strong><span>Đáp án hiện sau khi nộp bài</span></div>
      <div class="progress-track" role="progressbar" aria-label="Số câu đã trả lời" aria-valuemin="0" aria-valuemax="${questions.length}" aria-valuenow="${answered}">
        <div class="progress-fill" style="width:${progressPercent}%"></div>
      </div>
    </section>

    <div class="quiz-page-meta"><strong>Câu ${start + 1}–${end} <span class="meta-muted">/ ${questions.length}</span></strong><span>Trang ${activeProgress.page + 1} / ${totalPages}</span></div>
    <section class="question-list" aria-label="Câu hỏi trang ${activeProgress.page + 1}">
      ${pageQuestions.map((question) => renderQuestionCard(question, activeProgress.answers[question.id])).join('')}
    </section>

    <nav class="quiz-navigation" aria-label="Điều hướng bài làm">
      <button class="button secondary" id="previous-page" type="button" ${activeProgress.page === 0 ? 'disabled' : ''}><span aria-hidden="true">←</span> Trang trước</button>
      <span class="navigation-center">${activeProgress.page + 1} / ${totalPages}</span>
      ${activeProgress.page < totalPages - 1
        ? '<button class="button" id="next-page" type="button">Trang tiếp <span aria-hidden="true">→</span></button>'
        : '<button class="button" id="submit-quiz" type="button">Nộp bài <span aria-hidden="true">✓</span></button>'}
    </nav>
    <p class="resume-note">${unanswered ? `${unanswered} câu chưa chọn đáp án` : 'Bạn đã trả lời tất cả câu hỏi'} · Tiến độ được lưu tự động</p>
  `;

  appView.querySelector('#back-to-chapters').addEventListener('click', renderHome);
  appView.querySelector('#previous-page').addEventListener('click', () => moveQuizPage(-1));
  appView.querySelector('#next-page')?.addEventListener('click', () => moveQuizPage(1));
  appView.querySelector('#submit-quiz')?.addEventListener('click', submitQuiz);
  appView.querySelectorAll('input[data-question-id]').forEach((input) => {
    input.addEventListener('change', () => {
      activeProgress.answers[input.dataset.questionId] = Number(input.value);
      saveProgress();
      updateQuizProgress();
    });
  });
  focusViewHeading();
}

function renderQuestionCard(question, selectedIndex) {
  return `
    <article class="question-card">
      <div class="question-label">Câu ${question.number}${question.section ? `<span class="topic">${escapeHtml(question.section)}</span>` : ''}</div>
      <p class="question-prompt">${renderRichText(question.prompt)}</p>
      <fieldset class="question-options">
        <legend>Chọn một đáp án cho câu ${question.number}</legend>
        ${question.options.map((option, index) => `
          <label class="answer-choice">
            <input type="radio" name="answer-${question.id}" value="${index}" data-question-id="${question.id}" ${selectedIndex === index ? 'checked' : ''} />
            <span class="choice-content"><span class="choice-letter" aria-hidden="true">${option.letter}</span><span class="choice-text">${renderRichText(option.text)}</span></span>
          </label>
        `).join('')}
      </fieldset>
    </article>
  `;
}

function updateQuizProgress() {
  const data = loadedChapters.get(activeChapter.id);
  const answered = countAnswered(activeProgress, data.questions);
  const unanswered = data.questions.length - answered;
  const progress = appView.querySelector('[role="progressbar"]');
  const fill = appView.querySelector('.progress-fill');
  const meta = appView.querySelector('.progress-meta strong');
  const note = appView.querySelector('.resume-note');
  if (progress) progress.setAttribute('aria-valuenow', String(answered));
  if (fill) fill.style.width = `${Math.round((answered / data.questions.length) * 100)}%`;
  if (meta) meta.textContent = `${answered}/${data.questions.length} câu đã trả lời`;
  if (note) note.textContent = `${unanswered ? `${unanswered} câu chưa chọn đáp án` : 'Bạn đã trả lời tất cả câu hỏi'} · Tiến độ được lưu tự động`;
}

function moveQuizPage(offset) {
  const questions = loadedChapters.get(activeChapter.id).questions;
  activeProgress.page = Math.max(0, Math.min(pageCount(questions) - 1, activeProgress.page + offset));
  saveProgress();
  renderQuiz();
}

function submitQuiz() {
  const data = loadedChapters.get(activeChapter.id);
  const unanswered = data.questions.length - countAnswered(activeProgress, data.questions);
  if (unanswered > 0) {
    const shouldSubmit = window.confirm(`Còn ${unanswered} câu chưa trả lời. Câu bỏ trống không được tính điểm. Bạn vẫn muốn nộp bài?`);
    if (!shouldSubmit) return;
  }

  activeProgress.submitted = true;
  activeProgress.reviewPage = 0;
  activeProgress.reviewFilter = 'all';
  saveProgress();
  renderResults();
}

function renderResults() {
  view = 'results';
  const data = loadedChapters.get(activeChapter.id);
  const score = calculateScore(activeProgress, data.questions);
  const filtered = getReviewQuestions(data.questions, activeProgress);
  const totalPages = Math.max(1, pageCount(filtered));
  activeProgress.reviewPage = Math.min(activeProgress.reviewPage, totalPages - 1);
  const start = activeProgress.reviewPage * PAGE_SIZE;
  const end = Math.min(start + PAGE_SIZE, filtered.length);
  const pageQuestions = filtered.slice(start, end);
  const percent = Math.round((score.correct / data.questions.length) * 100);

  appView.innerHTML = `
    <div class="quiz-topline">
      <div class="quiz-heading"><p class="eyebrow">Kết quả · Chương ${activeChapter.number}</p><h1 class="view-title">${escapeHtml(activeChapter.title)}</h1></div>
      <button class="button ghost" id="back-to-chapters" type="button"><span aria-hidden="true">←</span> Danh sách chương</button>
    </div>

    <section class="result-summary" aria-label="Tổng kết kết quả">
      <div><p class="eyebrow">Đã hoàn thành</p><h2>${score.unanswered ? 'Bài làm đã được chấm' : 'Hoàn thành tốt!'}</h2><p>${score.correct} đúng · ${score.wrong} sai · ${score.unanswered} chưa trả lời</p></div>
      <div class="score-block"><span class="score-number">${score.correct}/${data.questions.length}</span><span class="score-caption">${percent}% câu đúng</span></div>
    </section>

    <div class="result-actions">
      <label class="filter-label" for="review-filter">Xem câu
        <select id="review-filter">
          <option value="all" ${activeProgress.reviewFilter === 'all' ? 'selected' : ''}>Tất cả (${data.questions.length})</option>
          <option value="incorrect" ${activeProgress.reviewFilter === 'incorrect' ? 'selected' : ''}>Trả lời sai (${score.wrong})</option>
          <option value="unanswered" ${activeProgress.reviewFilter === 'unanswered' ? 'selected' : ''}>Chưa trả lời (${score.unanswered})</option>
        </select>
      </label>
      <span class="spacer"></span>
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

  return `
    <article class="review-card ${stateClass}">
      <div class="review-top"><strong>Câu ${question.number}${question.section ? `<span class="topic"> · ${escapeHtml(question.section)}</span>` : ''}</strong><span class="answer-status ${stateBadge}">${stateLabel}</span></div>
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
    return questions.filter((question) => {
      const answer = progress.answers[question.id];
      return Number.isInteger(answer) && answer !== question.correctIndex;
    });
  }
  if (progress.reviewFilter === 'unanswered') {
    return questions.filter((question) => !Number.isInteger(progress.answers[question.id]));
  }
  return questions;
}

function moveReviewPage(offset) {
  const filtered = getReviewQuestions(loadedChapters.get(activeChapter.id).questions, activeProgress);
  activeProgress.reviewPage = Math.max(0, Math.min(pageCount(filtered) - 1, activeProgress.reviewPage + offset));
  saveProgress();
  renderResults();
}

function retakeQuiz() {
  if (!window.confirm('Bắt đầu lại từ đầu? Câu trả lời và kết quả hiện tại của chương này sẽ được xóa.')) return;
  const data = loadedChapters.get(activeChapter.id);
  clearProgress(activeChapter.id);
  activeProgress = makeProgress(data);
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
