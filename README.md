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

- Chọn chương để làm câu hỏi từng câu một; thứ tự câu và lựa chọn A–D được tráo cho mỗi lượt mới.
- Chọn **Kiểm tra tất cả chương** để làm bài tổng hợp: các nhóm chương giữ thứ tự manifest, còn câu trong mỗi chương được tráo.
- Chọn **Tạo đề** trên trang chính để nhập tên đề, câu hỏi, bốn lựa chọn và đáp án đúng. Có thể thêm/xóa câu, mở bài kiểm tra ngay hoặc tải đề thành Markdown.
- Chọn **Nhập bài tập .md** trên trang chính để mở một bài kiểm tra từ file `.md` hoặc `.markdown` trên máy. File được đọc ngay trong trình duyệt, không tải lên máy chủ.
- Dùng **↑/↓** để chọn đáp án, **←/→** để chuyển câu, và **Enter** để chốt đáp án rồi xem đúng/sai ngay. Mũi tên dừng ở câu đầu và câu cuối; có thể dùng chuột và các nút điều hướng trên màn hình.
- Website tự lưu tiến độ và thứ tự câu/đáp án trên trình duyệt hiện tại. Khi tiếp tục bài cũ, thứ tự được giữ nguyên; **Làm lại từ đầu** tạo thứ tự mới. Các tiến độ cũ được giữ theo thứ tự gốc.
- Nộp bài ở trang cuối để xem điểm và đáp án. Có thể lọc các câu sai hoặc chưa trả lời.
- **Làm lại câu sai** giữ thứ tự câu và đáp án của lượt vừa nộp.
- Chọn **Làm lại từ đầu** nếu muốn xóa lượt hiện tại và làm lại chương hoặc bài tổng hợp.
- Chọn **Xuất kết quả Markdown** trên trang chính để tải các kết quả đã nộp gần nhất của từng chương, bài tổng hợp và bài nhanh đã chọn trong phiên trình duyệt hiện tại. File gồm điểm tổng, điểm theo chương (nếu có) và chi tiết câu trả lời theo nhãn đáp án hiển thị trong lượt làm; chỉ xuất kết quả khớp với nội dung đề hiện tại. Sau khi tải lại trang, hãy chọn lại file bài nhanh để đưa kết quả đã lưu của file đó vào bản xuất.
- Trên màn hình kết quả, chọn **Xuất kết quả bài này · Markdown** để tải riêng kết quả đang xem, gồm điểm và chi tiết từng câu; file này không gộp các bài khác.

## Tạo bài nhanh từ Markdown

Form **Tạo đề** tạo file theo cùng định dạng Markdown mô tả bên dưới. Hãy tải file xuống nếu muốn lưu nội dung để dùng lại; khi chọn lại file đó, website có thể khôi phục tiến độ theo nội dung. Nội dung form không được lưu riêng trên website.

Bạn cũng có thể dùng [file mẫu](docs/mau-de-trac-nghiem.md) để thử chức năng nhập đề hoặc sao chép làm đề mới.

Mỗi file được chọn bằng nút **Nhập bài tập .md** sẽ tạo thành một bài độc lập. Dùng tiêu đề `### Câu N` cho mỗi câu, ghi nội dung câu hỏi bên dưới, rồi thêm đủ bốn lựa chọn A–D. In đậm đúng một lựa chọn để đánh dấu đáp án đúng. Có thể thêm `-` trước mỗi lựa chọn. Mỗi lượt mới tráo thứ tự câu và lựa chọn; nhãn A–D được gán lại theo vị trí hiển thị.

```markdown
### Câu 1
Thủ đô của Việt Nam là thành phố nào?
- A. Huế
- B. Đà Nẵng
- C. **Hà Nội**
- D. Cần Thơ
```

File phải có ít nhất một câu hợp lệ. Nếu câu hỏi thiếu nội dung, thiếu lựa chọn A–D hoặc có số lựa chọn in đậm khác một, website báo lỗi cụ thể và không mở bài kiểm tra một phần. Tiến độ và thứ tự tráo được lưu riêng theo nội dung file trên trình duyệt; chọn lại file có cùng nội dung để tiếp tục. Khi nội dung thay đổi, bài mới bắt đầu từ đầu. Website chỉ lưu câu trả lời, dấu vân tay nội dung và thứ tự tráo, không lưu văn bản file.

## Thêm chương mới

1. Thêm file đề Markdown vào `docs/` theo định dạng câu hỏi hiện có.
2. Thêm một mục vào `docs/chapters.json` với `id` duy nhất, `number`, `title` và đường dẫn `file`; vị trí mục trong danh sách quyết định thứ tự làm bài.
3. Tải lại website. Chương mới sẽ xuất hiện trong danh sách và bài kiểm tra tổng hợp; thứ tự nhóm chương theo manifest được giữ nguyên.

Nếu một chương trong danh mục bị thiếu hoặc có định dạng không hợp lệ, bài tổng hợp sẽ tạm khóa cho đến khi sửa được đề; các chương hợp lệ vẫn có thể làm riêng.
Khi danh mục hoặc nội dung đề thay đổi, lượt tổng hợp đã lưu sẽ bắt đầu lại để phản ánh bộ chương hiện tại; tiến độ từng chương được giữ nguyên.

Đáp án đúng được nhận diện từ lựa chọn in đậm trong từng tệp Markdown. Khi sửa đề, giữ tiêu đề dạng `### Câu 1`, bốn lựa chọn A–D và in đậm đúng một lựa chọn để website đọc được.
# QTM
