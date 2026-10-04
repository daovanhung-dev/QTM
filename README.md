# Website luyện trắc nghiệm QTM

Website tĩnh đọc các tệp đề Markdown được đăng ký trong `docs/chapters.json`. Không cần cài thư viện hay cấu hình máy chủ ứng dụng.

## Chạy trên máy

Mở terminal tại thư mục dự án và chạy:

```bash
python3 -m http.server 8000
```

Sau đó mở <http://localhost:8000> trên trình duyệt. Dùng `Ctrl+C` trong terminal để dừng máy chủ.

Không mở `index.html` trực tiếp bằng đường dẫn `file://`: trình duyệt chặn việc website đọc các tệp câu hỏi trong chế độ đó.

## Cách sử dụng

- Chọn chương để làm toàn bộ câu hỏi theo thứ tự trong tài liệu, từng câu một.
- Chọn **Kiểm tra tất cả chương** để làm bài tổng hợp theo thứ tự chương và thứ tự câu trong tài liệu.
- Chọn **Chọn file Markdown** trong mục làm bài nhanh để mở một bài kiểm tra từ file `.md` hoặc `.markdown` trên máy. File được đọc ngay trong trình duyệt, không tải lên máy chủ.
- Dùng **↑/↓** để chọn đáp án, **←/→** để chuyển câu, và **Enter** để chốt đáp án rồi xem đúng/sai ngay. Mũi tên dừng ở câu đầu và câu cuối; có thể dùng chuột và các nút điều hướng trên màn hình.
- Website tự lưu tiến độ trên trình duyệt hiện tại. Khi tiếp tục bài cũ, câu đang mở được giữ lại; tiến độ kiểu 10 câu mỗi trang trước đây được chuyển về câu đầu tiên của trang đó.
- Nộp bài ở trang cuối để xem điểm và đáp án. Có thể lọc các câu sai hoặc chưa trả lời.
- Chọn **Làm lại từ đầu** nếu muốn xóa lượt hiện tại và làm lại chương hoặc bài tổng hợp.
- Chọn **Xuất kết quả Markdown** trên trang chính để tải các kết quả đã nộp gần nhất của từng chương, bài tổng hợp và bài nhanh đã chọn trong phiên trình duyệt hiện tại. File gồm điểm tổng, điểm theo chương (nếu có) và chi tiết câu trả lời; chỉ xuất kết quả khớp với nội dung đề hiện tại. Sau khi tải lại trang, hãy chọn lại file bài nhanh để đưa kết quả đã lưu của file đó vào bản xuất.

## Tạo bài nhanh từ Markdown

Mỗi file được chọn tạo thành một bài độc lập. Dùng tiêu đề `### Câu N` cho mỗi câu, ghi nội dung câu hỏi bên dưới, rồi thêm đủ bốn lựa chọn A–D. In đậm đúng một lựa chọn để đánh dấu đáp án đúng. Có thể thêm `-` trước mỗi lựa chọn.

```markdown
### Câu 1
Thủ đô của Việt Nam là thành phố nào?
- A. Huế
- B. Đà Nẵng
- C. **Hà Nội**
- D. Cần Thơ
```

File phải có ít nhất một câu hợp lệ. Nếu câu hỏi thiếu nội dung, thiếu lựa chọn A–D hoặc có số lựa chọn in đậm khác một, website báo lỗi cụ thể và không mở bài kiểm tra một phần. Tiến độ được lưu riêng theo nội dung file trên trình duyệt; chọn lại file có cùng nội dung để tiếp tục. Khi nội dung thay đổi, bài mới bắt đầu từ đầu. Website chỉ lưu câu trả lời và dấu vân tay nội dung, không lưu văn bản file.

## Thêm chương mới

1. Thêm file đề Markdown vào `docs/` theo định dạng câu hỏi hiện có.
2. Thêm một mục vào `docs/chapters.json` với `id` duy nhất, `number`, `title` và đường dẫn `file`; vị trí mục trong danh sách quyết định thứ tự làm bài.
3. Tải lại website. Chương mới sẽ xuất hiện trong danh sách và bài kiểm tra tổng hợp.

Nếu một chương trong danh mục bị thiếu hoặc có định dạng không hợp lệ, bài tổng hợp sẽ tạm khóa cho đến khi sửa được đề; các chương hợp lệ vẫn có thể làm riêng.
Khi danh mục hoặc nội dung đề thay đổi, lượt tổng hợp đã lưu sẽ bắt đầu lại để phản ánh bộ chương hiện tại; tiến độ từng chương được giữ nguyên.

Đáp án đúng được nhận diện từ lựa chọn in đậm trong từng tệp Markdown. Khi sửa đề, giữ tiêu đề dạng `### Câu 1`, bốn lựa chọn A–D và in đậm đúng một lựa chọn để website đọc được.
# QTM
