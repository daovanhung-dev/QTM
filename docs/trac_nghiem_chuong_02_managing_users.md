# Bộ câu hỏi trắc nghiệm ôn tập - Chương 2: Managing Users

> Mục tiêu: ôn tập **toàn bộ nội dung Chương 2**, mức độ tương đối khó, có nhiều câu tình huống và câu lệnh.
> Đáp án đúng được **in đậm trực tiếp** trong từng câu hỏi.

## Phạm vi kiến thức

- Root và `sudo`
- Tạo/xóa user
- `/etc/passwd`, `/etc/shadow`
- `/etc/skel`
- Chuyển đổi user
- Group và `usermod`/`gpasswd`
- Password aging và password policy
- Cấu hình sudo qua `/etc/sudoers`
- Permission, `chmod`, `chown`, `chgrp`


## 1. Understanding when to use root

### Câu 1. Theo chương 2, nhận định nào mô tả đúng nhất về tài khoản `root` trên Linux?

A. Chỉ tồn tại trên Ubuntu Server

B. Chỉ dùng để cài phần mềm

**C. Có toàn quyền và có thể thực hiện gần như mọi thao tác trên hệ thống**

D. Chỉ có quyền cao hơn user thường khi dùng `sudo`

### Câu 2. Vì sao việc thao tác trực tiếp bằng `root` được xem là rủi ro?

A. Root không thể đọc log

**B. Nhiều lệnh được thực thi ngay mà không có bước xác nhận bảo vệ người dùng**

C. Root không dùng được shell

D. Root không thể thay đổi permission

### Câu 3. Khuyến nghị chung trong chương về việc dùng tài khoản `root` là gì?

A. Luôn đăng nhập bằng root để quản trị

**B. Chỉ dùng root khi thật sự cần thiết**

C. Chỉ dùng root khi làm việc với mạng

D. Không bao giờ được phép dùng root

### Câu 4. Điểm khác biệt mặc định của Ubuntu Server đối với tài khoản `root` là gì?

A. Root bị xóa khỏi hệ thống

**B. Root bị khóa mặc định**

C. Root không có UID

D. Root chỉ đăng nhập được qua SSH

### Câu 5. Trong quá trình cài Ubuntu Server theo nội dung chương, vì sao người dùng không được yêu cầu đặt mật khẩu root?

A. Vì root sử dụng mật khẩu của user đầu tiên

**B. Vì Ubuntu khóa tài khoản root theo mặc định**

C. Vì root không cần mật khẩu

D. Vì mật khẩu root được lấy từ BIOS

### Câu 6. Mục đích chính của `sudo` theo chương là gì?

A. Chuyển mọi user thành root vĩnh viễn

**B. Cho phép user thường thực thi tác vụ vốn chỉ root mới làm được**

C. Xóa yêu cầu xác thực

D. Thay thế hoàn toàn hệ thống group

### Câu 7. Một user thường chạy `apt install tmux` và nhận lỗi permission. Cách xử lý phù hợp theo chương là gì?

A. `su tmux`

**B. `sudo apt install tmux`**

C. `chmod 777 apt`

D. `passwd apt`

### Câu 8. Khi chạy một lệnh bằng `sudo`, mật khẩu nào thường được yêu cầu để xác nhận?

A. Mật khẩu của root

**B. Mật khẩu của user đang đăng nhập**

C. Mật khẩu của user đích

D. Không cần mật khẩu trong mọi trường hợp

### Câu 9. Theo chương, cụm từ “administrative account” trên Ubuntu về bản chất thường là gì?

A. Một tài khoản root thứ hai

**B. Một user account có khả năng sử dụng `sudo`**

C. Một system account không có home

D. Một group đặc biệt không có user

### Câu 10. Phát biểu nào đúng nhất về root bị khóa mặc định trên Ubuntu?

A. Không thể mở khóa root trong bất kỳ trường hợp nào

B. Không thể chuyển sang root bằng bất kỳ cách nào

**C. Root không dễ truy cập trực tiếp như bình thường, nhưng vẫn có thể được mở khóa hoặc truy cập qua cơ chế phù hợp**

D. Root bị xóa khỏi `/etc/passwd`


## 2. Creating and removing users

### Câu 11. Hai lệnh được chương nhắc tới để tạo user trên Ubuntu là gì?

A. `mkuser` và `newuser`

**B. `adduser` và `useradd`**

C. `usermod` và `passwd`

D. `usernew` và `groupadd`

### Câu 12. Trong lệnh `sudo useradd -d /home/cauha -m cauha`, tùy chọn `-d` có vai trò gì?

A. Đặt shell mặc định

**B. Chỉ định home directory**

C. Xóa user cũ

D. Đặt GID

### Câu 13. Trong lệnh `sudo useradd -d /home/cauha -m cauha`, tùy chọn `-m` có vai trò gì?

**A. Tạo home directory trong quá trình tạo user**

B. Đặt mật khẩu ngay lập tức

C. Thêm user vào group `sudo`

D. Di chuyển home directory cũ

### Câu 14. Nếu dùng `useradd` nhưng không yêu cầu tạo home directory, điều gì có thể xảy ra theo chương?

A. Home vẫn luôn được tạo tự động

**B. Người quản trị có thể phải tự tạo home directory**

C. User tự động bị khóa

D. User sẽ trở thành root

### Câu 15. Lệnh nào phù hợp để đặt mật khẩu cho user `cauha` khi bạn có quyền sudo?

**A. `sudo passwd cauha`**

B. `sudo usermod cauha --password`

C. `passwd -d cauha`

D. `sudo shadow cauha`

### Câu 16. Khi một user chạy `passwd` không kèm username, hành vi mặc định là gì?

A. Đổi mật khẩu root

**B. Đổi mật khẩu user hiện đang đăng nhập**

C. Xóa mật khẩu user hiện tại

D. Khóa tài khoản hiện tại

### Câu 17. Trình tự tương tác điển hình khi user tự chạy `passwd` là gì?

A. Nhập mật khẩu root → mật khẩu mới

**B. Nhập mật khẩu hiện tại → mật khẩu mới → xác nhận mật khẩu mới**

C. Chỉ nhập mật khẩu mới một lần

D. Nhập username → UID → mật khẩu

### Câu 18. Ưu điểm nổi bật của `adduser` so với `useradd` theo chương là gì?

A. Nhanh hơn vì không hỏi gì

**B. Tương tác thuận tiện hơn, hỏi các thông tin cần thiết và báo chi tiết các thao tác**

C. Luôn tạo user có quyền root

D. Chỉ tồn tại trên mọi Linux distribution

### Câu 19. Khi `adduser` tạo user `sinhvien`, home directory mặc định thường là gì?

A. `/root/sinhvien`

B. `/usr/sinhvien`

**C. `/home/sinhvien`**

D. `/var/sinhvien`

### Câu 20. Theo ví dụ trong chương, `adduser` cấp UID và GID mới cho user bằng cách nào?

A. Dùng UID/GID của root

**B. Dùng giá trị khả dụng tiếp theo**

C. Luôn dùng 1000

D. Dùng PID của tiến trình shell

### Câu 21. Các file cấu hình mặc định của user mới được lấy từ đâu?

A. `/etc/profile.d`

**B. `/etc/skel`**

C. `/var/skel`

D. `/usr/share/users`

### Câu 22. Theo chương, điểm nào đúng về `adduser` trên các bản phân phối Linux?

A. Có sẵn trên mọi distribution

**B. Không có trên mọi distribution, nên vẫn cần biết `useradd`**

C. Chỉ có trên Red Hat

D. Đã bị thay thế hoàn toàn bởi `passwd`

### Câu 23. Theo slide, `adduser` trên Ubuntu thực chất là gì?

A. Một kernel module

B. Một binary viết bằng C

**C. Một shell script viết bằng Perl**

D. Một alias của `useradd` không có mã riêng

### Câu 24. Đường dẫn được dùng để mở script `adduser` trong ví dụ là gì?

A. `/bin/adduser`

**B. `/usr/sbin/adduser`**

C. `/etc/adduser`

D. `/opt/adduser`

### Câu 25. Lệnh cơ bản để xóa tài khoản user `cothu` là gì?

**A. `sudo userdel cothu`**

B. `sudo del cothu`

C. `sudo rmuser cothu`

D. `sudo usermod -x cothu`

### Câu 26. Mặc định, `userdel cothu` xử lý home directory của `cothu` như thế nào?

A. Xóa luôn toàn bộ home

**B. Giữ lại nội dung home directory**

C. Nén thành `.tar.gz`

D. Chuyển vào `/tmp`

### Câu 27. Nếu muốn xóa cả tài khoản và home directory trong một lệnh, lựa chọn đúng theo chương là gì?

**A. `sudo userdel -r cothu`**

B. `sudo userdel -m cothu`

C. `sudo rm -u cothu`

D. `sudo passwd -d cothu`

### Câu 28. Vì sao chương khuyên cân nhắc trước khi xóa home directory khi xóa user?

A. Vì home chứa kernel

**B. Vì có thể vẫn cần dữ liệu của user để lưu trữ/điều tra/bàn giao**

C. Vì home luôn là read-only

D. Vì xóa home làm hỏng `/etc/passwd`

### Câu 29. Lệnh nào trong ví dụ dùng để tạo thư mục lưu trữ `/store/file_archive` nếu nó chưa tồn tại?

A. `sudo touch /store/file_archive`

**B. `sudo mkdir -p /store/file_archive`**

C. `sudo mkfs /store/file_archive`

D. `sudo cp -p /store/file_archive`

### Câu 30. Sau khi đã xóa account nhưng home vẫn còn, chương minh họa lệnh nào để xóa thư mục đó đệ quy?

**A. `sudo rm -r /cothu`**

B. `sudo deltree /home/cothu`

C. `sudo userdel -r /home/cothu`

D. `sudo rmdir -f /home/cothu`


## 3. Understanding `/etc/passwd` and `/etc/shadow`

### Câu 31. Thông tin account user theo chương được lưu chủ yếu trong hai file nào?

A. `/etc/users` và `/etc/groups`

**B. `/etc/passwd` và `/etc/shadow`**

C. `/var/passwd` và `/var/shadow`

D. `/etc/profile` và `/etc/login`

### Câu 32. Quyền đọc hai file trên được mô tả thế nào?

A. Chỉ root đọc được cả hai

**B. Mọi user có thể đọc `/etc/passwd`, còn `/etc/shadow` chỉ root đọc được**

C. Mọi user đọc được cả hai

D. Chỉ group sudo đọc được `/etc/passwd`

### Câu 33. Các trường trong một dòng `/etc/passwd` được phân cách bằng ký tự nào?

A. Dấu phẩy

B. Dấu chấm phẩy

**C. Dấu hai chấm `:`**

D. Tab

### Câu 34. Trường thứ nhất của `/etc/passwd` chứa gì?

A. UID

**B. Username**

C. GID

D. Home directory

### Câu 35. Ký tự `x` ở trường thứ hai của `/etc/passwd` biểu thị điều gì theo chương?

A. User bị xóa

**B. Mật khẩu mã hóa không được lưu ở đây mà nằm trong `/etc/shadow`**

C. User là root

D. User không có mật khẩu

### Câu 36. Trường thứ ba và thứ tư của `/etc/passwd` lần lượt là gì?

A. GID và UID

**B. UID và GID**

C. Home và shell

D. Username và password hash

### Câu 37. Trường thứ năm của `/etc/passwd` chủ yếu dành cho thông tin gì?

**A. Thông tin mô tả user, thường là họ tên**

B. Hash mật khẩu

C. Ngày hết hạn

D. Danh sách group phụ

### Câu 38. Trường thứ sáu của `/etc/passwd` biểu diễn gì?

A. Default shell

**B. Home directory**

C. Last login

D. Password age

### Câu 39. Trường cuối của `/etc/passwd` biểu diễn gì?

**A. Default shell của user**

B. GID phụ

C. Password hash

D. Quota

### Câu 40. Theo chương, shell mặc định thường được mô tả thế nào khi tạo bằng `adduser` và `useradd`?

A. Cả hai đều `/bin/zsh`

**B. `adduser` thường `/bin/bash`, `useradd` thường `/bin/sh`**

C. `adduser` `/bin/sh`, `useradd` `/bin/bash`

D. Cả hai không có shell

### Câu 41. Nếu UID và GID của một user trùng nhau trong ví dụ, kết luận đúng nhất là gì?

A. Linux bắt buộc UID phải luôn bằng GID

**B. Đó có thể chỉ là trùng hợp trong hệ thống cụ thể, không phải quy tắc bắt buộc**

C. GID chính là PID

D. UID luôn được lấy từ GID

### Câu 42. Khi tạo một user mới theo cách mặc định, group chính thường được xử lý thế nào?

A. Không có primary group

**B. Một primary group cùng tên user thường được tạo**

C. User luôn dùng group root

D. Primary group là `sudo`

### Câu 43. Trường thứ hai của `/etc/shadow` chứa nội dung quan trọng nào?

A. Tên shell

**B. Hash mật khẩu**

C. UID

D. Home path

### Câu 44. Dòng root trong `/etc/shadow` được chương dùng để minh họa điều gì?

A. Root luôn có mật khẩu plaintext

**B. Tài khoản root mặc định đang bị khóa**

C. Root không có UID

D. Root không có entry trong shadow

### Câu 45. Trường thứ ba của `/etc/shadow` được giải thích là gì?

**A. Số ngày kể từ Unix Epoch tới lần đổi mật khẩu gần nhất**

B. Số lần đăng nhập sai

C. UID

D. Số group user thuộc về

### Câu 46. Trường thứ tư của `/etc/shadow` biểu diễn gì?

**A. Số ngày tối thiểu phải chờ trước khi được đổi mật khẩu lại**

B. Số ngày tối đa trước khi account bị xóa

C. Số lần đổi mật khẩu

D. Ngày tạo account

### Câu 47. Trường thứ năm của `/etc/shadow` biểu diễn gì?

**A. Số ngày tối đa giữa các lần thay đổi mật khẩu**

B. Số ngày kể từ boot

C. Số ngày cảnh báo

D. Số ngày inactive sau khi hết hạn

### Câu 48. Trường thứ sáu của `/etc/shadow` biểu diễn gì?

**A. Số ngày cảnh báo trước khi mật khẩu hết hạn**

B. UID

C. Số ngày user được dùng sudo

D. Số lần nhập sai

### Câu 49. Trường thứ bảy của `/etc/shadow` theo chương biểu diễn gì?

**A. Số ngày sau khi mật khẩu hết hạn trước khi account bị vô hiệu hóa**

B. Ngày tạo home

C. Số group phụ

D. Ngày root unlock

### Câu 50. Trường thứ tám của `/etc/shadow` theo chương biểu diễn gì?

**A. Số ngày kể từ Unix Epoch tới thời điểm account bị vô hiệu hóa**

B. Số ngày kể từ lần login cuối

C. Số lần đổi shell

D. Ngày hết hạn group


## 4. Distributing default configuration files with `/etc/skel`

### Câu 51. Mục đích chính của `/etc/skel` là gì?

A. Lưu kernel modules

**B. Chứa các file mẫu được copy vào home của user mới**

C. Lưu password hash

D. Lưu sudo rules

### Câu 52. Điều kiện quan trọng để các file trong `/etc/skel` được copy vào home user mới theo chương là gì?

A. User phải có UID 0

**B. Phải tạo home directory cho user**

C. User phải thuộc group sudo

D. Phải dùng SSH

### Câu 53. Tại sao lệnh `ls -la /etc/skel` dùng `-a`?

A. Để sắp xếp theo thời gian

**B. Vì nhiều file mẫu là hidden file bắt đầu bằng dấu chấm**

C. Để hiện UID

D. Để giải nén file

### Câu 54. Trong `ls -la /etc/skel`, tùy chọn `-l` chủ yếu giúp gì?

**A. Hiển thị long listing dễ đọc hơn**

B. Ẩn file

C. Khóa thư mục

D. Theo dõi symlink

### Câu 55. Một file `welcome` được đặt trong `/etc/skel` sẽ có tác dụng gì với user mới?

**A. Được copy vào home của user mới**

B. Được thực thi bằng root mỗi lần boot

C. Được thêm vào `/etc/passwd`

D. Chỉ root nhìn thấy

### Câu 56. Ứng dụng thực tế nào phù hợp với `/etc/skel` theo chương?

**A. Phân phối sẵn cấu hình editor hoặc ứng dụng cho nhân viên mới**

B. Quản lý network interface

C. Đặt static IP

D. Lưu log

### Câu 57. Điểm mạnh của `/etc/skel` trong môi trường tổ chức là gì?

**A. Giúp chuẩn hóa file/config mặc định cho user mới**

B. Thay thế toàn bộ group permission

C. Tự cấp sudo cho mọi user

D. Tự tạo backup

### Câu 58. Nhận định nào đúng về nội dung `/etc/skel`?

A. Chỉ được phép chứa `.bashrc`

**B. Có thể bổ sung các file cấu hình tùy nhu cầu tổ chức**

C. Không thể sửa

D. Chỉ chứa binary


## 5. Switching users

### Câu 59. Lệnh chuẩn trong chương để chuyển sang user khác kèm môi trường đăng nhập là gì?

**A. `su - <username>`**

B. `user <username>`

C. `login --switch <username>`

D. `sudo passwd <username>`

### Câu 60. Khi dùng `su - <username>` không kèm sudo, bạn thường cần biết mật khẩu của ai?

A. User đang đăng nhập

**B. User đích**

C. Root trong mọi trường hợp

D. Không cần mật khẩu

### Câu 61. Nếu bạn có quyền sudo và muốn chuyển sang user khác mà không biết mật khẩu của họ, cách nào được minh họa?

**A. `sudo su - <username>`**

B. `sudo passwd -u <username>`

C. `groups <username>`

D. `useradd -m <username>`

### Câu 62. Nếu chạy `su` không kèm username, hệ thống mặc định cố chuyển sang ai?

A. User đầu tiên trong `/etc/passwd`

**B. Root**

C. Nobody

D. User có UID cao nhất

### Câu 63. Vì sao `su` sang root thường thất bại trên Ubuntu mặc định?

A. Root không có shell

**B. Root bị khóa và thường chưa có mật khẩu sử dụng trực tiếp**

C. `su` bị gỡ khỏi Ubuntu

D. Root không nằm trong `/etc/passwd`

### Câu 64. Theo chương, lệnh `sudo passwd` không kèm username được dùng trong ví dụ để làm gì?

**A. Đặt mật khẩu cho root và qua đó mở khả năng đăng nhập/su trực tiếp vào root**

B. Đổi mật khẩu user hiện tại

C. Xóa mật khẩu root

D. Khóa group sudo

### Câu 65. Cách được khuyến nghị hơn nếu chỉ cần shell root mà không muốn unlock root là gì?

**A. `sudo su -`**

B. `su root` không mật khẩu

C. `passwd -u root`

D. `useradd root`

### Câu 66. Sau khi chuyển user bằng `su`, lệnh đơn giản để quay lại account trước là gì?

A. `return`

B. `logout-all`

**C. `exit`**

D. `back`

### Câu 67. Một tình huống thực tế để chuyển sang account của user khác là gì?

**A. Kiểm tra/reproduce lỗi permission mà user báo cáo**

B. Tăng dung lượng ổ cứng

C. Đổi kernel

D. Tạo partition

### Câu 68. Lợi ích của việc reproduce vấn đề dưới chính account của user là gì?

**A. Có thể xác minh lỗi và kiểm tra bản sửa trước khi phản hồi**

B. Tự động cấp quyền root cho user

C. Không cần xem permission

D. Tự động xóa log


## 6. Managing groups

### Câu 69. Mục đích chính của group trong quản trị Linux theo chương là gì?

**A. Kiểm soát quyền truy cập tài nguyên hiệu quả cho nhiều user**

B. Lưu mật khẩu hệ thống

C. Quản lý process

D. Thay thế filesystem

### Câu 70. Một file hoặc directory trên Linux có bao nhiêu user owner và group owner theo mô hình chương trình bày?

A. Nhiều user và nhiều group

**B. Một user owner và một group owner**

C. Chỉ có group owner

D. Không có ownership

### Câu 71. Một user account có thể là thành viên của bao nhiêu group?

A. Chỉ một group

**B. Có thể nhiều group**

C. Tối đa hai group

D. Không giới hạn primary group nhưng không có secondary group

### Câu 72. Lệnh nào xem các group của user hiện đang đăng nhập?

A. `group`

**B. `groups`**

C. `cat /etc/passwd`

D. `whoami -g`

### Câu 73. Muốn xem các group của user `cauha`, lệnh nào đúng?

**A. `groups cauha`**

B. `groupadd cauha`

C. `cat /etc/shadow cauha`

D. `usermod -G`

### Câu 74. Danh sách group đã tạo trên hệ thống được lưu trong file nào?

A. `/etc/groups`

**B. `/etc/group`**

C. `/var/group`

D. `/etc/gshadow-only`

### Câu 75. Một dòng trong `/etc/group` có bao nhiêu trường chính theo chương?

A. 3

**B. 4**

C. 7

D. 9

### Câu 76. Trường thứ nhất của `/etc/group` là gì?

**A. Tên group**

B. GID

C. Password hash user

D. Danh sách member

### Câu 77. Trường thứ hai của `/etc/group` có thể dùng cho gì dù ít được sử dụng?

**A. Password của group**

B. UID owner

C. Home directory

D. Default shell

### Câu 78. Trường thứ ba của `/etc/group` chứa gì?

A. UID

**B. GID**

C. PID

D. SID

### Câu 79. Trường cuối của `/etc/group` chứa gì?

**A. Danh sách user thành viên, phân cách bằng dấu phẩy**

B. Password hash

C. Shell

D. Home directory

### Câu 80. Lệnh tạo group `admins` là gì?

**A. `sudo groupadd admins`**

B. `sudo adduser admins`

C. `sudo useradd -g admins`

D. `sudo mkgroup /admins`

### Câu 81. Lệnh xóa group `admins` là gì?

**A. `sudo groupdel admins`**

B. `sudo rmgroup admins`

C. `sudo userdel admins`

D. `sudo groups -d admins`

### Câu 82. Vì sao chương không khuyến khích sửa trực tiếp `/etc/group` để tạo group?

A. Vì file luôn read-only

**B. Dùng `groupadd` an toàn hơn và giúp đảm bảo entry được tạo đúng**

C. Vì `/etc/group` không chứa group

D. Vì group chỉ được tạo khi reboot

### Câu 83. Trong `sudo usermod -aG admins cauha`, `-a` nghĩa là gì?

A. Activate

**B. Append**

C. Admin

D. All

### Câu 84. Trong `sudo usermod -aG admins cauha`, `-G` tác động tới loại group nào?

A. Primary group

**B. Secondary/supplementary group membership**

C. Root group

D. Temporary group

### Câu 85. Nguy cơ khi dùng `usermod -G admins cauha` mà quên `-a` là gì?

A. User bị xóa

**B. Các secondary group hiện tại có thể bị thay thế bằng danh sách mới**

C. Primary group trở thành root

D. Home bị xóa

### Câu 86. Muốn đổi primary group của user, tùy chọn nào được dùng?

A. `-G`

**B. `-g`**

C. `-a`

D. `-p`

### Câu 87. Lệnh nào được minh họa để đổi primary group của user?

**A. `sudo usermod -g <group-name> <username>`**

B. `sudo groups -p <username>`

C. `sudo chgrp -u <username>`

D. `sudo groupadd -p <username>`

### Câu 88. Theo ví dụ đổi tên user `sinhvien` thành `thu`, thao tác nào xử lý home directory?

**A. `sudo usermod -d /home/thu sinhvien -m`**

B. `sudo passwd -d /home/thu sinhvien`

C. `sudo groupmod /home/thu`

D. `sudo mvuser -h /home/thu`

### Câu 89. Trong thao tác đổi home bằng `usermod`, tùy chọn `-m` dùng để làm gì?

**A. Move nội dung home sang vị trí mới**

B. Đặt minimum password age

C. Modify GID

D. Mount home

### Câu 90. Tùy chọn nào của `usermod` đổi login name/username?

**A. `-l`**

B. `-L`

C. `-u`

D. `-n`

### Câu 91. Lệnh nào xem manual page đầy đủ của `usermod`?

A. `help usermod`

**B. `man usermod`**

C. `info /etc/usermod`

D. `usermod --doc-only`

### Câu 92. Muốn xóa user khỏi một group, chương minh họa lệnh nào?

**A. `sudo gpasswd -d <username> <group>`**

B. `sudo userdel -g <group>`

C. `sudo groupdel <username>`

D. `sudo chmod -g <username>`

### Câu 93. Muốn thêm user vào một group bằng `gpasswd`, lệnh nào đúng?

**A. `sudo gpasswd -a <username> <group>`**

B. `sudo gpasswd -d <username> <group>`

C. `sudo passwd -g <username>`

D. `sudo groupadd -a <username>`


## 7. Managing passwords and password policies

### Câu 94. Tùy chọn nào của `passwd` khóa một user account?

A. `-u`

**B. `-l`**

C. `-d`

D. `-m`

### Câu 95. Tùy chọn nào của `passwd` mở khóa user account?

**A. `-u`**

B. `-l`

C. `-x`

D. `-r`

### Câu 96. Lệnh nào hiển thị thông tin password aging của user?

**A. `sudo chage -l <username>`**

B. `sudo passwd -l <username>`

C. `sudo shadow -s <username>`

D. `sudo age -p <username>`

### Câu 97. Lệnh `sudo chage -d 0 <username>` được dùng để làm gì?

**A. Đặt mật khẩu hết hạn ngay, buộc đổi ở lần đăng nhập kế tiếp**

B. Xóa user sau 0 ngày

C. Mở khóa root

D. Đặt minimum age bằng 0 nhưng không ảnh hưởng login

### Câu 98. Lệnh `sudo chage -M 90 <username>` có ý nghĩa gì?

**A. Mật khẩu phải được đổi tối đa sau 90 ngày**

B. Mật khẩu không được đổi trong 90 ngày

C. User bị khóa 90 phút

D. Lưu 90 mật khẩu cũ

### Câu 99. Lệnh `sudo chage -m 5 cauha` có ý nghĩa gì?

**A. Đặt minimum password age là 5 ngày**

B. Đặt maximum age là 5 ngày

C. Cho 5 lần thử mật khẩu

D. Khóa account sau 5 ngày

### Câu 100. Theo chương, mục tiêu của password policy có thể bao gồm những gì?

**A. Độ dài, độ phức tạp và các yêu cầu liên quan**

B. Chỉ username

C. Chỉ UID

D. Chỉ group membership

### Câu 101. Gói nào được cài trong chương để bổ sung khả năng kiểm soát password policy qua PAM?

**A. `libpam-cracklib`**

B. `pam-root-only`

C. `shadow-utils`

D. `sudo-policy`

### Câu 102. File nào được chỉnh để cấu hình các yêu cầu password trong ví dụ?

**A. `/etc/pam.d/common-password`**

B. `/etc/passwd`

C. `/etc/login.defs-only`

D. `/etc/sudoers`

### Câu 103. Dòng `password required pam_pwhistory.so` kết hợp `remember=99 use_authtok` nhằm mục đích gì?

**A. Ghi nhớ 99 mật khẩu trước để ngăn tái sử dụng**

B. Cho phép dùng lại 99 mật khẩu

C. Tự sinh 99 mật khẩu

D. Khóa user sau 99 lần login

### Câu 104. Nếu `remember=99` và minimum password age là 5 ngày, chương suy luận điều gì?

**A. Có thể mất khoảng 495 ngày mới quay vòng đủ 99 lần đổi mật khẩu để thử dùng lại mật khẩu cũ**

B. Mật khẩu hết hạn sau 99 phút

C. User chỉ có 5 mật khẩu

D. Root được miễn mọi policy

### Câu 105. Thiết lập `difok=3` trong file policy được giải thích thế nào?

**A. Mật khẩu mới phải khác mật khẩu cũ ít nhất 3 ký tự**

B. Mật khẩu phải có đúng 3 ký tự

C. Cho phép sai 3 lần

D. Phải có 3 user xác nhận

### Câu 106. Từ khóa `obscure` trong cấu hình password được chương giải thích là gì?

**A. Ngăn các mật khẩu quá đơn giản như từ điển thông dụng**

B. Ẩn username khỏi `/etc/passwd`

C. Mã hóa home directory

D. Chỉ cho root đổi mật khẩu

### Câu 107. Sự khác nhau quan trọng giữa `chage -M` và `chage -m` là gì?

**A. `-M` đặt maximum age, `-m` đặt minimum age**

B. `-M` khóa account, `-m` mở khóa

C. `-M` cho root, `-m` cho user

D. Không có khác nhau


## 8. Configuring administrator access with `sudo`

### Câu 108. Mục tiêu quản trị root account theo chương là gì?

A. Cho càng nhiều người dùng càng tốt

**B. Bảo vệ bằng mật khẩu mạnh và hạn chế số người sử dụng trực tiếp**

C. Xóa root

D. Cho phép remote root login mặc định

### Câu 109. Trên Ubuntu mặc định, trạng thái root được nhắc lại trong phần sudo là gì?

**A. Root bị khóa trừ khi người quản trị chủ động đặt mật khẩu/mở khóa**

B. Root tự đăng nhập không cần mật khẩu

C. Root bị xóa

D. Root chỉ dùng được qua GUI

### Câu 110. Lợi ích của `sudo` so với chia sẻ mật khẩu root là gì?

**A. Có thể cấp quyền quản trị mà không cần đưa mật khẩu root hoặc unlock root**

B. Không cần xác thực

C. Không cần group

D. Tự động mã hóa filesystem

### Câu 111. Thành viên group nào trên Ubuntu mặc định có quyền dùng sudo rộng rãi?

A. `users`

**B. `sudo`**

C. `wheel` bắt buộc trong Ubuntu

D. `staff`

### Câu 112. User được tạo trong quá trình cài Ubuntu theo chương thường được thêm vào group nào?

**A. `sudo`**

B. `daemon`

C. `nogroup`

D. `www-data`

### Câu 113. Lệnh thêm user vào group sudo là gì?

**A. `sudo usermod -aG sudo <username>`**

B. `sudo groupadd sudo <username>`

C. `sudo passwd -s <username>`

D. `sudo chown sudo <username>`

### Câu 114. Lệnh nên dùng để chỉnh cấu hình sudo là gì?

**A. `visudo`**

B. `nano /etc/passwd`

C. `groupadd`

D. `sudoedit /etc/shadow`

### Câu 115. File cấu hình trung tâm mà `visudo` chỉnh là gì?

**A. `/etc/sudoers`**

B. `/etc/sudo.conf.d/users` duy nhất

C. `/etc/passwd`

D. `/var/sudoers`

### Câu 116. Vì sao chỉnh trực tiếp `/etc/sudoers` bằng editor thường bị khuyến cáo không nên làm?

A. Vì file không phải text

**B. `visudo` kiểm tra cú pháp và giúp tránh làm hỏng cấu hình sudo**

C. Vì root không đọc được file

D. Vì file được tạo lại mỗi giây

### Câu 117. Theo nội dung slide, editor mặc định được dùng khi chạy `visudo` trên Ubuntu là gì?

**A. nano**

B. vim

C. emacs

D. gedit

### Câu 118. Theo slide, muốn buộc `visudo` dùng vim, ví dụ lệnh nào được đưa ra?

**A. `sudo EDITOR=vim visudo`**

B. `visudo --editor vim /etc/passwd`

C. `sudo vim --visudo`

D. `EDITOR=nano sudo passwd`

### Câu 119. Dòng `%sudo ALL=(ALL:ALL) ALL` áp dụng cho đối tượng nào?

**A. Group `sudo`**

B. User tên `%sudo`

C. Root duy nhất

D. Mọi user không phân biệt group

### Câu 120. Trong syntax sudoers, dấu `%` trước tên thường biểu thị gì?

**A. Tên group**

B. Biến môi trường

C. Comment

D. Wildcard command

### Câu 121. Theo giải thích trong chương về `root ALL=(ALL:ALL) ALL`, `ALL` đầu tiên biểu thị phạm vi nào?

**A. Nơi/terminal-host mà rule áp dụng**

B. Danh sách group được mạo danh

C. Danh sách command

D. Password policy

### Câu 122. Theo giải thích trong chương, `ALL` thứ hai trong `(ALL:ALL)` biểu thị gì?

**A. Có thể chạy với tư cách bất kỳ user nào**

B. Có thể chạy bất kỳ command nào

C. Bất kỳ filesystem nào

D. Bất kỳ password nào

### Câu 123. Theo giải thích trong chương, `ALL` thứ ba trong `(ALL:ALL)` biểu thị gì?

**A. Có thể chạy với tư cách bất kỳ group nào**

B. Có thể login từ bất kỳ IP nào

C. Có thể sửa bất kỳ file nào

D. Có thể đổi bất kỳ password nào

### Câu 124. `ALL` cuối trong dòng sudoers biểu thị gì?

**A. Các command được phép chạy; `ALL` nghĩa là mọi command**

B. Mọi group

C. Mọi host

D. Mọi password

### Câu 125. Rule `charlie ALL=(ALL:ALL) /usr/sbin/reboot,/usr/sbin/shutdown` cho phép Charlie làm gì?

**A. Chỉ chạy các command reboot và shutdown được liệt kê với quyền phù hợp**

B. Chạy mọi command

C. Chỉ đọc log

D. Chỉ đổi mật khẩu

### Câu 126. Nếu Charlie vẫn là thành viên group `sudo` có quyền ALL, việc thêm một rule hạn chế riêng có thể không đạt mục tiêu. Chương lưu ý điều gì?

**A. Cần remove Charlie khỏi group sudo khi muốn thực sự giới hạn quyền theo rule riêng**

B. Cần xóa `/etc/sudoers`

C. Cần khóa root

D. Cần đổi UID Charlie thành 0

### Câu 127. Rule `charlie ubuntu-server=(ALL:ALL) /usr/bin/apt` nhấn mạnh loại giới hạn nào?

**A. Giới hạn theo host và command được phép**

B. Giới hạn theo password age

C. Giới hạn filesystem quota

D. Giới hạn home directory

### Câu 128. Với rule cho `/usr/bin/apt`, Charlie được phép làm gì theo slide?

**A. Dùng các subcommand của apt như update/dist-upgrade nhưng không tự động có quyền reboot hay sửa file khác**

B. Tự động chạy mọi binary trong `/usr/bin`

C. Tự thêm mình vào sudo

D. Được quyền root toàn hệ thống

### Câu 129. Nếu muốn ngăn Charlie dùng `sudo -u` để mạo danh user khác, chương minh họa cách nào?

**A. Bỏ phần `(ALL:ALL)` khỏi rule**

B. Đổi ALL cuối thành ALL

C. Thêm `%sudo`

D. Đặt password root

### Câu 130. Rule `charlie ubuntu-server=(dscully:admins) ALL` có ý nghĩa chính gì?

**A. Charlie được phép chạy lệnh thay mặt user `dscully` và group `admins` theo rule**

B. Charlie trở thành dscully vĩnh viễn

C. Charlie chỉ được xem group admins

D. Charlie bị cấm sudo


## 9. Setting permissions on files and directories

### Câu 131. Trong output `ls -l`, trường đầu tiên là gì?

**A. Permission string của object**

B. UID dạng số

C. Tên group

D. Kích thước

### Câu 132. Trường thứ hai trong output `ls -l` được chương mô tả là gì?

**A. Link count**

B. GID

C. Ngày sửa

D. Shell

### Câu 133. Sau link count, hai trường kế tiếp lần lượt thường là gì?

**A. User owner và group owner**

B. UID và password hash

C. Home và shell

D. Size và inode

### Câu 134. Sau owner/group trong output ví dụ, trường tiếp theo được mô tả là gì?

**A. Kích thước tính bằng bytes**

B. Permission octal

C. PID

D. Last login

### Câu 135. Permission string được chia thành bao nhiêu nhóm logic theo chương?

**A. 4 nhóm: 1 ký tự loại object + 3 nhóm quyền user/group/other**

B. 3 nhóm bằng nhau

C. 2 nhóm

D. 8 nhóm

### Câu 136. Ký tự đầu tiên của permission string chủ yếu biểu thị gì?

**A. Loại object**

B. Quyền của owner

C. Quyền của group

D. Quyền của other

### Câu 137. Ba ký tự tiếp theo sau object type biểu thị quyền của ai?

**A. User owner**

B. Group owner

C. Other

D. Root

### Câu 138. Nhóm ba ký tự tiếp theo biểu thị quyền của ai?

**A. Group owner**

B. User owner

C. Other

D. Kernel

### Câu 139. Nhóm ba ký tự cuối biểu thị quyền của ai?

**A. Other - người không phải owner và không thuộc owning group trong cách mô tả của chương**

B. Root duy nhất

C. Primary group của root

D. System services

### Câu 140. Đối với file, quyền `r` nghĩa là gì?

**A. Đọc nội dung file**

B. Đổi owner

C. Thực thi

D. Xóa filesystem

### Câu 141. Đối với directory, quyền `r` được chương mô tả là gì?

**A. Có thể xem nội dung/danh sách của directory**

B. Có thể `cd` vào directory

C. Có thể đổi owner

D. Có thể format directory

### Câu 142. Đối với file, quyền `w` nghĩa là gì?

**A. Có thể ghi/sửa file**

B. Có thể execute

C. Có thể list directory

D. Có thể đổi group

### Câu 143. Đối với directory, quyền `w` được chương mô tả là gì?

**A. Có thể thay đổi nội dung directory**

B. Chỉ có thể đọc tên

C. Có thể execute file

D. Có thể đổi UID

### Câu 144. Đối với file, quyền `x` nghĩa là gì?

**A. File có thể được thực thi như chương trình**

B. File có thể được đọc

C. File có thể đổi group

D. File trở thành hidden

### Câu 145. Đối với directory, quyền `x` được giải thích thế nào?

**A. User/group có thể `cd`/đi vào directory**

B. Có thể đọc file bất kỳ

C. Có thể đổi owner

D. Có thể xóa mountpoint

### Câu 146. Lệnh `chmod o-r budget.txt` làm gì?

**A. Gỡ quyền read của `other` trên `budget.txt`**

B. Gỡ quyền read của owner

C. Thêm quyền read cho group

D. Đặt octal 0

### Câu 147. Nếu file không nằm trong current directory, chương lưu ý điều gì khi dùng `chmod`?

**A. Có thể cung cấp full path tới file**

B. Bắt buộc `cd /`

C. Không thể chmod

D. Phải đổi owner trước

### Câu 148. Nếu bạn muốn chmod file không thuộc sở hữu của mình, thường cần gì?

**A. Quyền sudo/root thích hợp**

B. Đổi UID thành 0

C. Xóa file

D. Chuyển file vào `/tmp`

### Câu 149. Trong symbolic chmod, dấu `+` và `-` lần lượt dùng để làm gì?

**A. Thêm quyền và gỡ quyền**

B. Tăng UID và giảm UID

C. Thêm group và xóa user

D. Mount và unmount

### Câu 150. `chmod u+rw <filename>` làm gì?

**A. Thêm read và write cho user/owner**

B. Thêm rw cho group

C. Xóa rw của owner

D. Thêm execute cho other

### Câu 151. `chmod g+r <filename>` làm gì?

**A. Cấp read cho owning group**

B. Cấp read cho owner

C. Gỡ read của group

D. Đổi group

### Câu 152. `chmod o-rw <filename>` làm gì?

**A. Gỡ read và write của other**

B. Gỡ read/write của owner

C. Thêm rw cho group

D. Đổi permission thành 000

### Câu 153. Giá trị octal của `read`, `write`, `execute` lần lượt là gì?

**A. 4, 2, 1**

B. 1, 2, 4

C. 7, 5, 3

D. 8, 4, 2

### Câu 154. Quyền `rwx` tương ứng giá trị octal nào?

**A. 7**

B. 6

C. 5

D. 4

### Câu 155. Quyền `rw-` tương ứng giá trị octal nào?

**A. 6**

B. 7

C. 5

D. 3

### Câu 156. Quyền `r-x` tương ứng giá trị octal nào?

**A. 5**

B. 6

C. 4

D. 3

### Câu 157. Permission `600` tương ứng gần nhất với chuỗi nào?

**A. `rw-------`**

B. `rwx------`

C. `rw-rw----`

D. `r--r-----`

### Câu 158. Permission `740` tương ứng gần nhất với chuỗi nào?

**A. `rwxr-----`**

B. `rwxrw----`

C. `rw-r-----`

D. `rwxrwx---`

### Câu 159. Permission `770` tương ứng với chuỗi nào?

**A. `rwxrwx---`**

B. `rwxr-x---`

C. `rw-rw----`

D. `rwxrwxrwx`

### Câu 160. Permission `777` biểu thị điều gì?

**A. User, group và other đều có rwx**

B. Chỉ owner có rwx

C. Chỉ group có rwx

D. Không ai có quyền

### Câu 161. Lệnh nào đặt permission 740 cho `filename.txt`?

**A. `chmod 740 filename.txt`**

B. `chmod rwx-r---- filename.txt`

C. `chown 740 filename.txt`

D. `chmod -740 filename.txt`

### Câu 162. Theo chương, `chmod 770 -R mydir` nhằm mục đích gì?

**A. Đổi permission đệ quy cho directory và nội dung bên dưới**

B. Chỉ đổi owner

C. Chỉ đổi permission của file đầu tiên

D. Đổi GID

### Câu 163. Rủi ro của việc chmod recursive `770` lên một cây thư mục có cả file và directory là gì?

**A. Các file thường cũng nhận execute bit, có thể không phải điều mong muốn**

B. Mọi file bị xóa

C. Mọi user thành root

D. Filesystem bị format

### Câu 164. Cặp lệnh `find` nào trong chương dùng để đặt quyền khác nhau cho file và directory?

**A. `find /path/to/dir/ -type f -exec chmod 644 {} \;` và `find /path/to/dir/ -type d -exec chmod 755 {} \;`**

B. `find /path/to/dir/ -type f -exec chmod 777 {} \;` và `find /path/to/dir/ -type d -exec chmod 000 {} \;`

C. `find /path/to/dir/ -user root -delete` và `find /path/to/dir/ -group sudo -delete`

D. `find /path/to/dir/ -mount 644` và `find /path/to/dir/ -mount 755`

### Câu 165. Trong cặp lệnh trên, file được đặt permission nào?

**A. 644**

B. 755

C. 777

D. 600

### Câu 166. Trong cặp lệnh trên, directory được đặt permission nào?

**A. 755**

B. 644

C. 600

D. 700

### Câu 167. Lệnh `sudo chown sue myfile.txt` làm gì?

**A. Đổi user owner của `myfile.txt` thành `sue`**

B. Đổi group thành sue

C. Đổi permission thành sue

D. Đổi tên file

### Câu 168. Tùy chọn `-R` với `chown` dùng để làm gì?

**A. Đổi ownership đệ quy trên directory và nội dung**

B. Chỉ đổi root

C. Reset permission

D. Read-only

### Câu 169. Cú pháp `sudo chown sue:sales myfile.txt` có ý nghĩa gì?

**A. Đổi user owner thành `sue` và group owner thành `sales`**

B. Đổi user thành `sales` và group thành `sue`

C. Đặt password `sales` cho sue

D. Thêm sue vào group sales nhưng không đổi ownership

### Câu 170. Lệnh nào đổi trực tiếp group owner của file thành `sales`?

**A. `sudo chgrp sales myfile.txt`**

B. `sudo groupadd sales myfile.txt`

C. `sudo chmod sales myfile.txt`

D. `sudo groups sales myfile.txt`

### Câu 171. Theo chương, `chgrp` có thể dùng `-R` để làm gì?

**A. Đổi group ownership đệ quy trong directory**

B. Xóa group recursively

C. Đổi UID

D. Thêm user vào group

### Câu 172. Khi đọc `ls -la`, vì sao cần phân biệt user owner, group owner và other?

**A. Vì ba nhóm quyền `rwx` sau ký tự loại object được áp dụng riêng cho ba đối tượng này**

B. Vì mỗi file có ba UID

C. Vì root không có quyền

D. Vì group không liên quan tới permission


---

**Tổng số câu: 172.**

> Gợi ý học: làm lại lần 1 bằng cách che phần in đậm; lần 2 tự giải thích vì sao 3 phương án còn lại sai; lần 3 thực hành các câu lệnh trên máy Linux test.
