# CHƯƠNG 6 - TRẮC NGHIỆM ÔN TẬP

**Chủ đề:** Controlling and Monitoring Processes

> Mục tiêu: bao quát toàn bộ nội dung Chương 6, ưu tiên câu hỏi phân biệt khái niệm, đọc lệnh và xử lý tình huống.
>
> **Quy ước:** đáp án đúng được **in đậm** ngay trong các lựa chọn.

---

## I. Hiển thị và phân tích tiến trình với `ps`

### Câu 1. Khi chạy `ps` mà không kèm tùy chọn, phạm vi tiến trình được hiển thị theo nội dung chương 6 là gì?
- A. Tất cả tiến trình của hệ thống
- **B. Các tiến trình do user hiện tại gọi lệnh `ps` chạy**
- C. Chỉ các daemon
- D. Chỉ các tiến trình có mức CPU cao

### Câu 2. Thông tin nào là định danh mà kernel gán cho mỗi tiến trình khi tiến trình được khởi tạo?
- A. TTY
- **B. PID**
- C. STAT
- D. TIME

### Câu 3. Bạn biết tên tiến trình là `vim` nhưng chưa biết PID. Lệnh nào được chương dùng để tìm trực tiếp PID mà không cần lọc đầu ra của `ps`?
- **A. `pidof vim`**
- B. `ps -p vim`
- C. `grep vim /proc`
- D. `jobs vim`

### Câu 4. Mục đích chính của tùy chọn `a` trong ví dụ `ps a` của chương là gì?
- A. Chỉ hiển thị tiến trình root
- **B. Hiển thị nhiều thông tin hơn so với `ps` mặc định**
- C. Sắp xếp theo CPU
- D. Hiển thị cây tiến trình

### Câu 5. Trong đầu ra `ps`, trường `STAT` biểu diễn điều gì?
- A. Thời gian chạy thực tế của chương trình
- **B. Trạng thái hiện tại của tiến trình**
- C. Thiết bị lưu trữ của tiến trình
- D. Người dùng sở hữu tiến trình

### Câu 6. Trạng thái `S` trong `STAT` được mô tả như thế nào?
- A. Đang chạy trong run queue
- **B. Interruptible sleep, đang chờ đầu vào/sự kiện để thức dậy**
- C. Zombie
- D. Uninterruptible sleep

### Câu 7. Trạng thái `D` được mô tả phù hợp nhất là gì?
- A. Tiến trình đã kết thúc và chờ parent dọn dẹp
- B. Tiến trình đang chạy bình thường
- **C. Uninterruptible sleep, thường đang chờ input và không xử lý thêm signal**
- D. Tiến trình bị dừng thủ công

### Câu 8. Một tiến trình có trạng thái `Z` là gì?
- A. Tiến trình đang dùng swap
- **B. Defunct/zombie: công việc đã xong nhưng đang chờ parent cleanup**
- C. Tiến trình bị đưa vào foreground
- D. Tiến trình đang chiếm 100% CPU

### Câu 9. Theo chương, một zombie tồn tại quá lâu và không tự biến mất có thể trở thành ứng viên cho thao tác nào?
- A. `enable`
- **B. `kill`**
- C. `reload`
- D. `mount`

### Câu 10. Trạng thái `T` thường gắn với tình huống nào?
- **A. Tiến trình bị dừng (stopped), thường liên quan đến việc đưa tiến trình ra khỏi foreground**
- B. Tiến trình đang truy cập ổ đĩa
- C. Tiến trình đang chờ mạng
- D. Tiến trình vừa khởi động

### Câu 11. Trạng thái `R` trong `STAT` có ý nghĩa gì?
- **A. Đang ở run queue**
- B. Đang bị treo vĩnh viễn
- C. Đang chờ parent
- D. Đang ở swap

### Câu 12. Cột `TTY` cho biết điều gì?
- A. Core CPU đang dùng
- **B. Terminal/TTY mà tiến trình gắn vào**
- C. Dung lượng RAM của tiến trình
- D. UID của tiến trình

### Câu 13. Trong cách giải thích của chương, `tty` và `pts` khác nhau chủ yếu ở điểm nào?
- **A. `tty` là thiết bị terminal thực, `pts` là pseudo-terminal**
- B. `tty` chỉ dành cho root, `pts` chỉ dành cho user thường
- C. `tty` là TCP, `pts` là UDP
- D. `tty` là process, `pts` là service

### Câu 14. Cột `TIME` của `ps` nên được hiểu là gì?
- A. Tổng thời gian đồng hồ kể từ khi tiến trình được chạy
- **B. Tổng thời gian CPU thực sự được tiến trình sử dụng**
- C. Thời gian kể từ lần reboot cuối
- D. Thời gian chờ I/O

### Câu 15. Một tiến trình đã mở 2 giờ nhưng `TIME` chỉ vài giây. Giải thích nào phù hợp với chương?
- **A. `TIME` chỉ đếm thời gian CPU thực sự được sử dụng, không phải elapsed time**
- B. `TIME` bị lỗi nếu tiến trình chạy qua SSH
- C. Tiến trình đang là zombie
- D. `ps` chỉ đo theo phút

### Câu 16. Biến thể `ps au` trong chương được dùng để làm gì?
- **A. Liệt kê các tiến trình đang được người dùng chạy**
- B. Chỉ hiện daemon
- C. Hiện danh sách filesystem
- D. Hiện mỗi tiến trình của root

### Câu 17. Khi thêm tùy chọn `x`, đầu ra không còn bị giới hạn như thế nào?
- **A. Không còn giới hạn ở tiến trình có TTY**
- B. Không còn giới hạn theo PID
- C. Không còn giới hạn theo user root
- D. Không còn giới hạn theo RAM

### Câu 18. Vì sao `ps aux` thường cho nhiều tiến trình hơn đáng kể?
- A. Vì nó chỉ hiện tiến trình mới nhất
- **B. Vì nó bao gồm cả nhiều tiến trình hệ thống không gắn với TTY mà người dùng trực tiếp khởi chạy**
- C. Vì nó tự khởi động thêm daemon
- D. Vì nó lặp mỗi tiến trình ba lần

### Câu 19. Muốn lọc các tiến trình có chuỗi `nginx` từ đầu ra lớn của `ps aux`, lệnh minh họa nào đúng?
- **A. `ps aux | grep nginx`**
- B. `ps aux > nginx`
- C. `grep ps aux nginx`
- D. `ps nginx | head`

### Câu 20. Theo ý tưởng được nêu trong chương, nếu chỉ muốn chọn tiến trình theo tên/chuỗi lệnh thay vì lấy toàn bộ `ps aux` rồi `grep`, dạng lệnh nào phù hợp?
- **A. `ps u -C <tên-tiến-trình>`**
- B. `ps -m <tên-tiến-trình>`
- C. `pidof -a all`
- D. `jobs -C <tên-tiến-trình>`

### Câu 21. Lệnh nào được chương dùng để sắp xếp `ps aux` theo mức sử dụng CPU?
- **A. `ps aux --sort=-pcpu`**
- B. `ps aux --sort=cpu`
- C. `ps aux --cpu=max`
- D. `ps aux | cpu -r`

### Câu 22. Tại sao chương nối `| head -n 5` sau lệnh sắp xếp theo CPU?
- **A. Để chỉ giữ một số dòng đầu, tránh phải cuộn ngược quá xa**
- B. Để tăng mức ưu tiên CPU
- C. Để tiêu diệt 5 tiến trình đầu
- D. Để chuyển đầu ra sang MB

### Câu 23. Lệnh nào đúng theo chương để thu hẹp danh sách các tiến trình dùng nhiều CPU nhất?
- **A. `ps aux --sort=-pcpu | head -n 5`**
- B. `ps aux --sort=pcpu | tail -n 5`
- C. `top -cpu 5`
- D. `pidof --cpu 5`

### Câu 24. Muốn thực hiện tương tự nhưng sắp xếp theo mức dùng bộ nhớ, lệnh nào được nêu?
- **A. `ps aux --sort=-pmem | head -n 5`**
- B. `ps aux --sort=-ram | head -n 5`
- C. `ps aux --memory | tail -n 5`
- D. `free --sort=-pmem`

### Câu 25. Một admin cần tìm PID rồi chấm dứt tiến trình lỗi. Theo workflow nền tảng được chương nhấn mạnh, bước hợp lý đầu tiên là gì?
- **A. Tìm PID bằng `ps`/`pidof` rồi mới xử lý tiến trình**
- B. Reboot ngay
- C. Xóa file binary
- D. Disable toàn bộ systemd

---

## II. Quản lý job trong shell

### Câu 26. Ý tưởng chính của job control trong chương là gì?
- **A. Cho phép làm nhiều việc trong cùng shell bằng cách foreground/background tiến trình**
- B. Chỉ để theo dõi daemon
- C. Chỉ để chạy cron
- D. Chỉ để theo dõi disk

### Câu 27. Khi đang chạy `vim` ở foreground, tổ hợp nào được dùng để dừng/suspend tiến trình để quản lý như một job?
- A. Ctrl+C
- **B. Ctrl+Z**
- C. Ctrl+D
- D. Ctrl+S

### Câu 28. Lệnh chuyên dụng nào liệt kê các background/stopped jobs của shell hiện tại?
- A. `ps`
- **B. `jobs`**
- C. `status`
- D. `bglist`

### Câu 29. Trong đầu ra `jobs`, ký hiệu `[1]` đại diện cho gì?
- A. PID 1
- **B. Job ID 1**
- C. TTY 1
- D. CPU core 1

### Câu 30. Lệnh `fg` không kèm số thường làm gì khi có nhiều background job?
- **A. Đưa job gần nhất trở lại foreground**
- B. Đưa tất cả job về foreground
- C. Xóa tất cả job
- D. Chỉ hiện PID

### Câu 31. Nếu muốn đưa chính xác job ID 1 trở lại foreground, lệnh nào được chương minh họa?
- **A. `fg 1`**
- B. `fg -p 1`
- C. `jobs -f 1`
- D. `ps fg 1`

### Câu 32. Ngoài cách Ctrl+Z, làm sao khởi chạy một tiến trình ở background ngay từ đầu?
- **A. Thêm `&` ở cuối lệnh**
- B. Thêm `#` ở đầu lệnh
- C. Thêm `|` ở cuối lệnh
- D. Thêm `!` ở đầu lệnh

### Câu 33. Ví dụ nào đúng với cách khởi chạy `htop` ở background ngay lập tức?
- **A. `htop &`**
- B. `& htop`
- C. `htop |`
- D. `bg htop`

### Câu 34. Rủi ro quan trọng được chương cảnh báo khi bạn thoát khỏi shell trong khi còn background process là gì?
- **A. Các background process của shell sẽ đóng**
- B. Mọi service systemd bị disable
- C. Kernel panic
- D. Swap bị xóa

### Câu 35. Trước khi logout, lệnh nào nên dùng để kiểm tra còn job nào chưa kết thúc?
- **A. `jobs`**
- B. `free`
- C. `uptime`
- D. `systemctl enable`

### Câu 36. Một ứng dụng background vẫn liên tục in diagnostic text làm nhiễu terminal. Chương gợi ý loại công cụ nào để có session riêng biệt?
- **A. Multiplexer như `tmux` hoặc `screen`**
- B. `cron`
- C. `fdisk`
- D. `journalctl`

### Câu 37. Theo chương, nội dung về `tmux`/`screen` được xem như thế nào?
- **A. Hữu ích nhưng nằm ngoài phạm vi chi tiết của chương**
- B. Bắt buộc phải dùng thay systemd
- C. Chỉ dùng cho Windows
- D. Không thể dùng với SSH

---

## III. Xử lý tiến trình hoạt động sai, signal, `kill` và `killall`

### Câu 38. Lệnh `kill` nhận đối tượng chính nào để xác định tiến trình cần xử lý?
- A. Tên file cấu hình
- **B. PID**
- C. TTY
- D. UID duy nhất

### Câu 39. Mặc định, `kill <PID>` cố gắng làm gì?
- **A. Yêu cầu tiến trình kết thúc một cách graceful**
- B. Xóa binary khỏi đĩa
- C. Disable service tại boot
- D. Bắt buộc reboot

### Câu 40. Workflow hợp lý được chương mô tả khi một tiến trình không tự kết thúc là gì?
- **A. Dùng `ps` tìm PID, sau đó dùng `kill` với PID**
- B. Dùng `free`, sau đó xóa swap
- C. Dùng `cron`, sau đó restart cron
- D. Dùng `df`, sau đó mount lại root

### Câu 41. Linux signal trong ngữ cảnh chương được hiểu là gì?
- **A. Cơ chế truyền yêu cầu/thay đổi đến tiến trình, có thể từ kernel, tiến trình khác hoặc lệnh thủ công**
- B. Một file log
- C. Một loại filesystem
- D. Một user group

### Câu 42. Signal nào báo cho tiến trình rằng controlling terminal của nó đã thoát?
- **A. SIGHUP**
- B. SIGINT
- C. SIGTERM
- D. SIGKILL

### Câu 43. Khi một ứng dụng foreground bị dừng bằng Ctrl+C, signal nào được chương gắn với tình huống đó?
- **A. SIGINT**
- B. SIGHUP
- C. SIGTERM
- D. SIGKILL

### Câu 44. Signal nào yêu cầu tiến trình kết thúc sạch sẽ?
- **A. SIGTERM**
- B. SIGKILL
- C. SIGHUP
- D. SIGSTOP

### Câu 45. Signal nào ép tiến trình kết thúc không sạch?
- **A. SIGKILL**
- B. SIGTERM
- C. SIGINT
- D. SIGHUP

### Câu 46. Giá trị số nào tương ứng với SIGTERM trong chương?
- A. 9
- **B. 15**
- C. 1
- D. 2

### Câu 47. Giá trị số nào tương ứng với SIGKILL?
- A. 15
- **B. 9**
- C. 6
- D. 20

### Câu 48. Mặc định lệnh `kill` gửi signal nào?
- **A. SIGTERM (15)**
- B. SIGKILL (9)
- C. SIGHUP (1)
- D. SIGINT (2)

### Câu 49. Tại sao SIGKILL được coi là phương án cuối cùng?
- **A. Tiến trình không có thời gian phản ứng/cleanup, có thể dẫn đến file hỏng hoặc vấn đề khác**
- B. Nó luôn làm hỏng kernel
- C. Nó chỉ hoạt động với root
- D. Nó không thể kết thúc tiến trình

### Câu 50. Lệnh nào gửi SIGKILL đến PID `31258` theo ví dụ?
- **A. `sudo kill -9 31258`**
- B. `sudo kill -15 31258`
- C. `sudo killall 31258`
- D. `sudo sigkill 31258`

### Câu 51. Theo chương, nếu một tiến trình hiếm hoi vẫn không biến mất sau `kill -9`, hướng xử lý có thể phải là gì?
- **A. Reboot server**
- B. Chạy `crontab -e`
- C. Tăng swappiness
- D. Chạy `free -g`

### Câu 52. Zombie process về bản chất đang ở trạng thái nào?
- **A. Đã chết về mặt thực thi nhưng còn entry vì chờ parent reap/cleanup**
- B. Đang chạy 100% CPU
- C. Đang chạy ở kernel mode
- D. Đang được cron tạo

### Câu 53. Vì sao chương khuyên nên cho zombie thời gian để parent reap trước khi can thiệp mạnh?
- **A. Thông thường zombie sẽ được parent dọn dẹp và bản thân nó không thực sự chạy công việc**
- B. SIGKILL không tồn tại
- C. Zombie luôn chiếm toàn bộ RAM
- D. Parent luôn là PID 1

### Câu 54. Khác biệt chính giữa `kill` và `killall` trong cách chọn mục tiêu là gì?
- **A. `kill` chọn theo PID; `killall` chọn theo tên tiến trình**
- B. `kill` chọn theo tên; `killall` chọn theo port
- C. `killall` chỉ dùng cho systemd
- D. `kill` chỉ dùng cho user thường

### Câu 55. Rủi ro đặc trưng của `killall myprocess` là gì?
- **A. Nó có thể tác động đến mọi tiến trình tìm thấy có tên đó**
- B. Nó luôn reboot server
- C. Nó không thể gửi SIGTERM
- D. Nó chỉ chạy trên PID 1

### Câu 56. Lệnh nào theo chương gửi signal 9 cho tất cả tiến trình có tên `myprocess`?
- **A. `sudo killall -9 myprocess`**
- B. `sudo kill -9 myprocess`
- C. `sudo killall 9 PID`
- D. `sudo systemctl kill myprocess`

---

## IV. Theo dõi tài nguyên với `htop`

### Câu 57. Mục đích được nhấn mạnh nhất của `htop` trong chương là gì?
- **A. Xem tổng thể hiệu năng và mức sử dụng tài nguyên của server**
- B. Quản lý filesystem
- C. Tạo user
- D. Cấu hình DHCP

### Câu 58. Nếu chưa có `htop`, lệnh cài đặt được nêu là gì?
- **A. `sudo apt install htop`**
- B. `sudo snap enable htop`
- C. `sudo systemctl install htop`
- D. `sudo apt install topd`

### Câu 59. Phần trên của giao diện `htop` hiển thị nhóm thông tin nào?
- **A. Meter cho từng core, memory, swap; cùng uptime, load average và số task**
- B. Chỉ danh sách cron job
- C. Chỉ log systemd
- D. Chỉ inode

### Câu 60. Phần dưới của `htop` chủ yếu chứa gì?
- **A. Danh sách tiến trình với thông tin như CPU, memory, command, user, PID**
- B. Partition table
- C. Danh sách package
- D. Danh sách mount

### Câu 61. Phím F6 trong `htop` dùng cho mục đích nào?
- **A. Sắp xếp tiến trình**
- B. Thoát
- C. Mở editor cron
- D. Tạo user

### Câu 62. Phím F2 được chương nêu để làm gì?
- **A. Setup, ví dụ chỉnh màu và CPU average**
- B. Kill tiến trình
- C. Tree view
- D. Filter theo user

### Câu 63. Nhấn `U` trong `htop` mở chức năng nào?
- **A. Show processes of: lọc theo user**
- B. Tăng refresh rate
- C. Mở uptime
- D. Bật swap

### Câu 64. Phím F5 trong `htop` bật chế độ nào?
- **A. Tree view theo quan hệ parent/child**
- B. Kill menu
- C. Sort menu
- D. Setup

### Câu 65. Theo chương, `htop` mặc định cập nhật thống kê với chu kỳ bao lâu?
- **A. 2 giây**
- B. 1 giây
- C. 5 giây
- D. 10 giây

### Câu 66. Tùy chọn `-d` của `htop` nhận giá trị theo đơn vị nào?
- **A. Phần mười giây**
- B. Giây nguyên
- C. Mili-giây
- D. Phút

### Câu 67. Lệnh nào làm `htop` refresh mỗi 7 giây theo ví dụ của chương?
- **A. `htop -d 70`**
- B. `htop -d 7`
- C. `htop --delay 7000`
- D. `htop -r 7`

### Câu 68. Trong `htop`, quy trình được nêu để gửi signal đến tiến trình là gì?
- **A. Highlight tiến trình, nhấn F9, chọn signal, Enter; Esc để hủy**
- B. Nhấn F2 rồi reboot
- C. Nhấn U rồi kill tự động
- D. Nhấn F5 rồi nhập PID

---

## V. Quản lý system process/service bằng `systemd` và `systemctl`

### Câu 69. System process còn được chương gọi bằng thuật ngữ nào?
- **A. Daemon**
- B. Inode
- C. Socket file duy nhất
- D. Crontab

### Câu 70. Đặc điểm điển hình của daemon theo chương là gì?
- **A. Chạy nền và thường tự khởi động khi server boot**
- B. Chỉ chạy khi mở GUI
- C. Luôn gắn với một TTY
- D. Chỉ tồn tại 1 giây

### Câu 71. Trong Linux hiện đại theo chương, init system quản lý service là gì?
- **A. systemd**
- B. cron
- C. htop
- D. grep

### Câu 72. Vì sao init system thường gắn với PID 1?
- **A. Init system luôn nhận PID 1**
- B. PID 1 dành cho cron
- C. PID 1 là swap
- D. PID 1 là kernel thread duy nhất

### Câu 73. Trong cách gọi của `systemd`, service thường được gọi là gì?
- **A. Unit**
- B. Job ID
- C. Inode
- D. Mount

### Câu 74. Command quan trọng của bộ `systemd` để start/stop/xem trạng thái unit là gì?
- **A. `systemctl`**
- B. `servicefile`
- C. `unitctl`
- D. `initps`

### Câu 75. Tùy chọn/keyword nào của `systemctl` được chương nêu để dump danh sách unit?
- **A. `list-units`**
- B. `show-all-pids`
- C. `list-jobs-only`
- D. `dump-daemons`

### Câu 76. Khi không nhớ chính xác tên unit nhưng biết có chuỗi `ssh`, kỹ thuật được chương minh họa là gì?
- **A. Pipe đầu ra `systemctl` qua `grep ssh`**
- B. Dùng `free -m ssh`
- C. Dùng `crontab -l ssh`
- D. Dùng `killall ssh`

### Câu 77. Lệnh nào dùng để xem thông tin chi tiết trạng thái của SSH service trong ví dụ?
- **A. `systemctl status ssh`**
- B. `ps status ssh`
- C. `ssh --status`
- D. `journalctl enable ssh`

### Câu 78. Theo chương, `systemctl status` có thể cho biết những nhóm thông tin nào?
- **A. Service có đang chạy, có enabled lúc boot và các log entry gần đây**
- B. Chỉ dung lượng RAM
- C. Chỉ hostname
- D. Chỉ version kernel

### Câu 79. Nếu đầu ra `systemctl status` bị rút gọn, thêm tùy chọn nào để xem log đầy đủ hơn?
- **A. `-l`**
- B. `-m`
- C. `-g`
- D. `-x`

### Câu 80. Cặp lệnh nào đúng để dừng rồi khởi động lại SSH service?
- **A. `sudo systemctl stop ssh` và `sudo systemctl start ssh`**
- B. `sudo service ssh off` và `on`
- C. `kill ssh` và `run ssh`
- D. `ssh stop` và `ssh start`

### Câu 81. Keyword nào thực hiện hành động dừng rồi khởi động lại service trong một lệnh?
- **A. `restart`**
- B. `reload`
- C. `enable`
- D. `list-units`

### Câu 82. Theo chương, `reload` hữu ích trong trường hợp nào?
- **A. Kích hoạt cấu hình mới mà không cần hạ toàn bộ ứng dụng**
- B. Xóa service khỏi boot
- C. Buộc SIGKILL
- D. Xóa log

### Câu 83. Lệnh nào cấu hình SSH unit khởi động ở boot?
- **A. `sudo systemctl enable ssh`**
- B. `sudo systemctl start-once ssh`
- C. `sudo systemctl boot ssh`
- D. `sudo systemctl daemon ssh`

### Câu 84. Lệnh nào bỏ cấu hình tự khởi động của SSH unit?
- **A. `sudo systemctl disable ssh`**
- B. `sudo systemctl stop ssh`
- C. `sudo systemctl unload ssh`
- D. `sudo systemctl remove ssh`

### Câu 85. Lệnh nào trong systemd suite được chương nêu để xem log?
- **A. `journalctl`**
- B. `logctl`
- C. `syslogps`
- D. `htop -l`

### Câu 86. Tên công cụ tương đương systemd trên các Ubuntu release cũ được chương nhắc đến là gì?
- **A. Upstart**
- B. Syslog-ng
- C. OpenRC
- D. Supervisor

---

## VI. Theo dõi bộ nhớ, cache, swap và swappiness

### Câu 87. Lệnh cơ bản được dùng để xem tình trạng memory trong chương là gì?
- **A. `free`**
- B. `df`
- C. `du`
- D. `memctl`

### Câu 88. Nếu chạy `free` không có tùy chọn theo nội dung chương, đơn vị đầu ra là gì?
- **A. Kilobytes**
- B. Megabytes
- C. Gigabytes
- D. Bytes luôn luôn

### Câu 89. Tùy chọn nào hiển thị memory theo megabytes?
- **A. `free -m`**
- B. `free -g`
- C. `free -k`
- D. `free -MIB`

### Câu 90. Tùy chọn nào hiển thị memory theo gigabytes nhưng có thể không đủ chính xác trên nhiều server?
- **A. `free -g`**
- B. `free -m`
- C. `free -p`
- D. `free -s`

### Câu 91. Trong bảng của chương, cột `total` có nghĩa là gì?
- **A. Tổng RAM cài trên server**
- B. Tổng swap đã dùng
- C. Tổng cache
- D. Tổng process

### Câu 92. Theo bảng, `used` được mô tả với công thức nào?
- **A. `total - free - buffers - cache`**
- B. `total - available` duy nhất
- C. `free + cache`
- D. `swap - cache`

### Câu 93. Cột `free` nghĩa là gì?
- **A. Memory hiện không được dùng bởi bất cứ thứ gì, kể cả cache**
- B. Memory chỉ dành cho root
- C. Memory đã swap
- D. Memory của tmpfs

### Câu 94. Cột `shared` trong bảng của chương chủ yếu phản ánh gì?
- **A. Memory dùng bởi tmpfs**
- B. Memory dùng bởi kernel log
- C. RAM bị lỗi
- D. RAM của từng core

### Câu 95. Cột `buff/cache` phản ánh gì?
- **A. Memory đang dùng cho buffer và cache**
- B. Memory đã giải phóng hoàn toàn
- C. Swap đã ghi
- D. Chỉ page table

### Câu 96. Cột `available` nên được hiểu theo chương là gì?
- **A. Memory có thể dùng cho application**
- B. RAM vật lý chưa lắp
- C. Swap còn lại
- D. Memory chỉ dành cho systemd

### Câu 97. Trong ví dụ có `free=1320 MB` và `available=1626 MB`, vì sao `available` lớn hơn `free`?
- **A. Một phần RAM đang dùng làm cache có thể được giải phóng khi ứng dụng cần**
- B. Kernel báo sai
- C. Swap được cộng trực tiếp vào RAM
- D. `available` là tổng RAM

### Câu 98. Quan điểm 'unused RAM is wasted RAM' trong chương dẫn đến hành vi nào của Linux?
- **A. Tận dụng RAM rảnh cho disk cache để tăng hiệu năng**
- B. Luôn xóa cache
- C. Luôn tắt swap
- D. Luôn dành 50% RAM cho root

### Câu 99. Khi ghi dữ liệu, disk cache giúp gì theo mô tả chương?
- **A. Dữ liệu có thể được đặt vào RAM cache rồi đồng bộ xuống storage ở background**
- B. Dữ liệu bỏ qua storage vĩnh viễn
- C. Bắt buộc ghi từng byte trực tiếp ngay lập tức
- D. Tự nhân đôi file

### Câu 100. Khi đọc dữ liệu, lợi ích của cache là gì?
- **A. Lần truy cập sau có thể lấy từ RAM thay vì đọc lại từ disk**
- B. Luôn buộc đọc từ disk để chính xác
- C. Tăng swap
- D. Giảm số core

### Câu 101. Về swap, dấu hiệu nào được chương coi là đáng điều tra hơn?
- **A. Một lượng swap đáng kể đang được dùng**
- B. Một lượng swap rất nhỏ dù RAM còn nhiều
- C. Swap bằng 0 ngay sau boot
- D. Có file swap được tạo

### Câu 102. `swappiness` mô tả điều gì?
- **A. Mức độ/frequency mà Linux có xu hướng sử dụng swap**
- B. Dung lượng swap tối đa
- C. Số process trong swap
- D. Tốc độ CPU

### Câu 103. Giá trị swappiness mặc định thường được chương nêu là bao nhiêu?
- **A. 60**
- B. 30
- C. 100
- D. 0

### Câu 104. Lệnh nào đọc giá trị swappiness hiện tại?
- **A. `cat /proc/sys/vm/swappiness`**
- B. `free --swappiness`
- C. `sysctl /etc/swappiness`
- D. `cat /proc/meminfo/swappiness.conf`

### Câu 105. Theo cách mô tả của chương, swappiness càng cao thì điều gì càng có khả năng xảy ra?
- **A. Server càng có xu hướng sử dụng swap nhiều hơn**
- B. Server càng ít dùng swap
- C. RAM vật lý tăng
- D. CPU core giảm

### Câu 106. Theo chương, ý nghĩa cực trị `swappiness=100` là gì?
- **A. Dùng swap nhiều nhất có thể**
- B. Không bao giờ dùng swap
- C. Disable swap file
- D. Chỉ dùng swap khi reboot

### Câu 107. Theo chương, ý nghĩa `swappiness=0` là gì?
- **A. Swap sẽ không được sử dụng**
- B. Swap luôn chiếm 100%
- C. Chỉ root dùng swap
- D. Tạo thêm swap

### Câu 108. Lệnh nào thay đổi swappiness ngay lập tức thành 30 nhưng không đảm bảo tồn tại sau reboot?
- **A. `sudo sysctl vm.swappiness=30`**
- B. `sudo free -s 30`
- C. `sudo swapoff 30`
- D. `sudo systemctl swappiness 30`

### Câu 109. Vì sao thay đổi bằng `sysctl vm.swappiness=30` ở ví dụ không bền vững?
- **A. Sau reboot giá trị sẽ quay về mặc định nếu không cấu hình persistent**
- B. Lệnh chỉ áp dụng cho cron
- C. Lệnh chỉ áp dụng cho user shell
- D. Lệnh chỉ tác động swap file đầu tiên

### Câu 110. File nào được chương dùng để cấu hình swappiness vĩnh viễn?
- **A. `/etc/sysctl.conf`**
- B. `/etc/fstab`
- C. `/etc/default/swap`
- D. `/proc/sys/vm/swappiness`

### Câu 111. Dòng cấu hình persistent nào được ví dụ dùng?
- **A. `vm.swappiness = 30`**
- B. `swappiness: 30`
- C. `swap=30%`
- D. `vm.swap = yes`

---

## VII. Lập lịch tác vụ với `cron`

### Câu 112. Cron phù hợp nhất với nhu cầu nào trong chương?
- **A. Chạy process/program/script tại thời điểm cụ thể, chính xác đến phút**
- B. Giữ process chạy foreground mãi mãi
- C. Quản lý partition
- D. Theo dõi TTY

### Câu 113. Mỗi user có thể có gì riêng để chứa các cron job của mình?
- **A. Crontab**
- B. Journal
- C. Unit file bắt buộc
- D. Swap table

### Câu 114. Root crontab có ý nghĩa đặc biệt nào?
- **A. Cho phép thực hiện các tác vụ quản trị hệ thống**
- B. Chỉ chạy được command không cần quyền
- C. Không thể có cron job
- D. Chỉ xem được log

### Câu 115. Theo chương, mỗi cron job trong crontab được đặt như thế nào?
- **A. Mỗi job một dòng**
- B. Mỗi job hai file
- C. Mỗi job một process tree
- D. Mỗi job một PID tĩnh

### Câu 116. Lệnh nào liệt kê crontab của user hiện tại?
- **A. `crontab -l`**
- B. `cron -list`
- C. `jobs -l`
- D. `systemctl cron`

### Câu 117. Muốn xem crontab của user `jdoe` từ tài khoản có quyền phù hợp, lệnh nào được nêu?
- **A. `sudo crontab -u jdoe -l`**
- B. `crontab jdoe --show`
- C. `sudo cron -l jdoe`
- D. `cat /home/jdoe/crontab`

### Câu 118. Một user chưa tạo cron job nào. Khi chạy `crontab -l`, tình huống nào phù hợp?
- **A. Có thể báo không có crontab cho user đó**
- B. Tự tạo ngay 5 job mặc định
- C. Luôn hiện root crontab
- D. Luôn mở editor

### Câu 119. Lệnh nào tạo/chỉnh sửa crontab của user hiện tại?
- **A. `crontab -e`**
- B. `crontab -w`
- C. `cron edit`
- D. `systemctl edit cron`

### Câu 120. Lần đầu chạy `crontab -e`, hệ thống trong ví dụ có thể yêu cầu gì?
- **A. Chọn text editor**
- B. Chọn PID
- C. Chọn CPU core
- D. Chọn swap file

### Câu 121. Định dạng tổng quát của một cron job theo chương là gì?
- **A. `m h dom mon dow command`**
- B. `sec min hour user command`
- C. `pid tty stat command`
- D. `year month day command`

### Câu 122. Mỗi cron job theo format của chương có bao nhiêu field?
- **A. 6**
- B. 5
- C. 7
- D. 4

### Câu 123. Field thứ nhất là gì?
- **A. Minute**
- B. Hour
- C. Day of month
- D. Command

### Câu 124. Field thứ hai là gì?
- **A. Hour theo 24 giờ, 0-23**
- B. Minute
- C. Month
- D. User

### Câu 125. Field thứ ba là gì?
- **A. Day of month**
- B. Day of week
- C. Month
- D. Command

### Câu 126. Field thứ tư là gì?
- **A. Month**
- B. Minute
- C. Year
- D. PID

### Câu 127. Field thứ năm là gì?
- **A. Day of week, 0-6 từ Sunday đến Saturday**
- B. User ID
- C. CPU load
- D. Signal

### Câu 128. Field cuối cùng là gì?
- **A. Command được thực thi**
- B. TTY
- C. PID
- D. Swap size

### Câu 129. Các field cron phải được ngăn cách như thế nào theo chương?
- **A. Ít nhất một space hoặc tab; nhiều space/tab vẫn parse được**
- B. Chỉ bằng dấu phẩy
- C. Chỉ bằng dấu `:`
- D. Không được có khoảng trắng

### Câu 130. Dòng `3 0 * * 4 /usr/local/bin/cleanup.sh` chạy khi nào theo giải thích của chương?
- **A. 00:03 mỗi thứ Sáu**
- B. 03:00 mỗi thứ Tư
- C. 00:04 mỗi ngày
- D. 03:04 mỗi tháng

### Câu 131. Dòng `0 1 1 * * /usr/local/bin/run_report.sh` biểu thị lịch nào?
- **A. 01:00 vào ngày 1 hàng tháng**
- B. 01:01 mỗi ngày
- C. 00:01 mỗi thứ Hai
- D. Mỗi phút trong tháng 1

### Câu 132. Nếu không biết fully qualified path của một command để đặt vào cron, chương gợi ý dùng lệnh nào?
- **A. `which`**
- B. `whereis-pid`
- C. `pidof`
- D. `jobs`

### Câu 133. Sau khi lưu crontab, điều gì xảy ra?
- **A. Cron được cập nhật và từ đó job sẽ chạy theo lịch đã chọn**
- B. Phải reboot mới nhận
- C. Phải chạy `systemctl enable crontab` bắt buộc
- D. Crontab chỉ có hiệu lực một lần

### Câu 134. Vì cron dựa vào yếu tố nào nên cần kiểm tra để tránh job chạy sai giờ?
- **A. Ngày và giờ hiện tại của server**
- B. Tên hostname
- C. Số inode
- D. Số user

### Câu 135. Lệnh nào được chương nêu để xem ngày giờ hiện tại của server?
- **A. `date`**
- B. `time`
- C. `clock --show`
- D. `uptime -d`

---

## VIII. Hiểu và đánh giá `load average`

### Câu 136. Theo chương, load average được dùng để biểu diễn điều gì?
- **A. Xu hướng tải CPU/tác vụ chờ CPU trong một khoảng thời gian**
- B. Dung lượng ổ đĩa còn lại
- C. Số cron job
- D. Số package

### Câu 137. Những nơi/lệnh nào được chương nêu có thể hiển thị load average?
- **A. `htop`, `top`, `uptime`, và `/proc/loadavg`**
- B. `free`, `df`, `du`, `/etc/fstab`
- C. `cron`, `jobs`, `kill`, `/etc/passwd`
- D. `apt`, `dpkg`, `snap`, `/var/log/apt`

### Câu 138. Lệnh nào đọc trực tiếp file lưu load average được chương nêu?
- **A. `cat /proc/loadavg`**
- B. `cat /proc/cpuavg`
- C. `free /proc/loadavg`
- D. `uptime /etc/loadavg`

### Câu 139. Ba giá trị load average lần lượt đại diện cho khoảng thời gian nào?
- **A. 1 phút, 5 phút, 15 phút**
- B. 5 giây, 10 giây, 15 giây
- C. 1 giờ, 5 giờ, 15 giờ
- D. Hiện tại, hôm nay, tuần này

### Câu 140. Với `0.36, 0.29, 0.31`, giá trị 0.29 thuộc khoảng nào?
- **A. 5 phút**
- B. 1 phút
- C. 15 phút
- D. 30 phút

### Câu 141. Cách giải thích quan trọng của mỗi con số load average trong chương là gì?
- **A. Số task trung bình đang chờ CPU attention trong khoảng thời gian tương ứng**
- B. Phần trăm RAM đã dùng
- C. Số core bị tắt
- D. Số process đã chết

### Câu 142. Tại sao chương cho rằng load average có thể hữu ích hơn việc chỉ nhìn CPU percentage tại một thời điểm?
- **A. Nó cho xu hướng qua nhiều khung thời gian, trong khi CPU% có thể dao động rất nhanh**
- B. CPU% không tồn tại trên Linux
- C. Load average luôn là phần trăm
- D. Load average đo disk duy nhất

### Câu 143. Theo cách quy ước của chương, một core vật lý hay virtual được Linux xem như gì khi xét năng lực xử lý load?
- **A. Một CPU**
- B. Một TTY
- C. Một swap device
- D. Một cron job

### Câu 144. Server có 4 core và load của một khoảng là 4.0. Theo nguyên tắc trong chương, điều này gần nhất với trạng thái nào?
- **A. Đang ở mức capacity cho khoảng đó**
- B. Chỉ dùng 25% công suất
- C. Chắc chắn crash
- D. Không có workload

### Câu 145. Khi nào load average bắt đầu đáng lo hơn theo chương?
- **A. Khi liên tục cao hơn số core/CPU khả dụng**
- B. Khi bằng 0.1 trong một lần đo
- C. Khi thấp hơn 100
- D. Khi systemd đang chạy

### Câu 146. Vì sao load cao hơn số CPU/core liên tục là tín hiệu cần điều tra?
- **A. Có nhiều task chờ hơn khả năng CPU xử lý đồng thời, tức hàng đợi bắt đầu tích lại**
- B. Vì RAM tự động bị xóa
- C. Vì cron dừng hoạt động
- D. Vì disk tự unmount

### Câu 147. Ẩn dụ 'cashier' trong chương dùng để minh họa điều gì?
- **A. Mỗi CPU xử lý một task tại một thời điểm; nếu khách/task xếp hàng vượt số cashier/CPU thì queue tăng**
- B. Mỗi process cần một ổ đĩa
- C. Cron cần một user riêng
- D. Swap là cashier

### Câu 148. Nếu hàng đợi CPU tăng, hai hướng xử lý được chương ví dụ hóa là gì?
- **A. Thêm CPU hoặc loại bỏ/kill tiến trình gây vấn đề**
- B. Tăng hostname hoặc đổi TTY
- C. Xóa crontab hoặc đổi shell
- D. Tắt journalctl hoặc xóa `/proc`

### Câu 149. Server có 4 CPU, load `1.87, 1.53, 1.22`. Theo ví dụ chương, đánh giá nào phù hợp?
- **A. Không đáng lo vì vẫn dưới năng lực 4 CPU**
- B. Chắc chắn quá tải vì lớn hơn 1
- C. Bắt buộc reboot
- D. Chắc chắn thiếu RAM

### Câu 150. Cùng load `1.87, 1.53, 1.22` nhưng server chỉ có 1 CPU. Theo chương, điều gì hợp lý hơn?
- **A. Nên điều tra nguyên nhân vì hàng đợi có thể đang tích lại**
- B. Hoàn toàn bình thường vì luôn phải dưới 4
- C. Load không liên quan CPU
- D. Chỉ cần tăng swappiness

### Câu 151. Một server thường phải chạy workload liên tục nhưng load average bỗng tụt xuống 'zero-something'. Vì sao chương nói điều này đôi khi cũng đáng lo?
- **A. Có thể một service vốn thường chạy đã fail và exit**
- B. Vì load càng thấp càng làm CPU nóng
- C. Vì cron tự xóa
- D. Vì swap đầy

### Câu 152. Kết luận cân bằng nào phù hợp nhất với chương về load average?
- **A. Thấp thường tốt hơn, nhưng phải xét số CPU và workload bình thường; quá thấp bất thường cũng có thể là dấu hiệu sự cố**
- B. Luôn phải bằng 0
- C. Luôn phải nhỏ hơn 1 dù có bao nhiêu core
- D. Chỉ quan tâm giá trị 1 phút

---

## Thống kê

- Tổng số câu: **152**
- Số phần: **8**
- Mức độ: từ nhận biết chính xác lệnh/khái niệm đến tình huống phân tích và phân biệt các phương án gần giống nhau.
