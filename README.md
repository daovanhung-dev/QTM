# Website luyện trắc nghiệm QTM

Website tĩnh đọc trực tiếp sáu tệp đề Markdown trong thư mục `docs/`. Không cần cài thư viện hay cấu hình máy chủ ứng dụng.

## Chạy trên máy

Mở terminal tại thư mục dự án và chạy:

```bash
python3 -m http.server 8000
```

Sau đó mở <http://localhost:8000> trên trình duyệt. Dùng `Ctrl+C` trong terminal để dừng máy chủ.

Không mở `index.html` trực tiếp bằng đường dẫn `file://`: trình duyệt chặn việc website đọc các tệp câu hỏi trong chế độ đó.

## Cách sử dụng

- Chọn chương để làm toàn bộ câu hỏi theo thứ tự trong tài liệu, 10 câu mỗi trang.
- Chuyển qua lại giữa các trang để đổi câu trả lời; website tự lưu tiến độ trên trình duyệt hiện tại.
- Nộp bài ở trang cuối để xem điểm và đáp án. Có thể lọc các câu sai hoặc chưa trả lời.
- Chọn **Làm lại từ đầu** nếu muốn xóa lượt hiện tại và làm lại chương.

Đáp án đúng được nhận diện từ lựa chọn in đậm trong từng tệp Markdown. Khi sửa đề, giữ tiêu đề dạng `### Câu 1`, bốn lựa chọn A–D và in đậm đúng một lựa chọn để website đọc được.
# QTM
