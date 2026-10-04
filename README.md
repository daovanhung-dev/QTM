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

- Chọn chương để làm toàn bộ câu hỏi theo thứ tự trong tài liệu, 10 câu mỗi trang.
- Chọn **Kiểm tra tất cả chương** để làm bài tổng hợp theo thứ tự chương và thứ tự câu trong tài liệu.
- Chuyển qua lại giữa các trang để đổi câu trả lời; website tự lưu tiến độ trên trình duyệt hiện tại.
- Nộp bài ở trang cuối để xem điểm và đáp án. Có thể lọc các câu sai hoặc chưa trả lời.
- Chọn **Làm lại từ đầu** nếu muốn xóa lượt hiện tại và làm lại chương hoặc bài tổng hợp.
- Chọn **Xuất kết quả Markdown** trên trang chính để tải các kết quả đã nộp gần nhất của từng chương và bài tổng hợp. File gồm điểm tổng, điểm theo chương và chi tiết câu trả lời; chỉ xuất kết quả được lưu trên trình duyệt hiện tại và khớp với nội dung đề hiện tại.

## Thêm chương mới

1. Thêm file đề Markdown vào `docs/` theo định dạng câu hỏi hiện có.
2. Thêm một mục vào `docs/chapters.json` với `id` duy nhất, `number`, `title` và đường dẫn `file`; vị trí mục trong danh sách quyết định thứ tự làm bài.
3. Tải lại website. Chương mới sẽ xuất hiện trong danh sách và bài kiểm tra tổng hợp.

Nếu một chương trong danh mục bị thiếu hoặc có định dạng không hợp lệ, bài tổng hợp sẽ tạm khóa cho đến khi sửa được đề; các chương hợp lệ vẫn có thể làm riêng.
Khi danh mục hoặc nội dung đề thay đổi, lượt tổng hợp đã lưu sẽ bắt đầu lại để phản ánh bộ chương hiện tại; tiến độ từng chương được giữ nguyên.

Đáp án đúng được nhận diện từ lựa chọn in đậm trong từng tệp Markdown. Khi sửa đề, giữ tiêu đề dạng `### Câu 1`, bốn lựa chọn A–D và in đậm đúng một lựa chọn để website đọc được.
# QTM
