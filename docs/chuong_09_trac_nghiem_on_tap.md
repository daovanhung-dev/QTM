# CHƯƠNG 9 – MANAGING DATABASES
## Bộ câu hỏi trắc nghiệm ôn tập tổng hợp

> Nguồn: **Chương 9 – Managing Databases** (64 trang).  
> Mục tiêu: bao quát toàn bộ nội dung chương, câu hỏi ở mức **trung bình–khá đến tương đối khó**, có câu hỏi tình huống và câu hỏi phân biệt các lệnh/cấu hình gần giống nhau.  
> **Đáp án đúng được in đậm ngay trong các lựa chọn.**

---

## PHẦN I – PREPARATIONS FOR SETTING UP A DATABASE SERVER

### Câu 1
Một trong các lý do chính chương này tập trung vào MariaDB thay vì MySQL là gì?

- A. MariaDB chỉ chạy được trên Ubuntu Server.
- **B. Phần lớn cộng đồng Linux đang chuyển dần sang MariaDB và MariaDB là một drop-in replacement cho MySQL.**
- C. MySQL không còn hỗ trợ SQL.
- D. MariaDB không cần cấu hình bảo mật.

### Câu 2
Nhận định nào phù hợp nhất với khả năng tương thích giữa MariaDB và MySQL theo chương?

- A. Script viết cho MySQL phải viết lại hoàn toàn khi chuyển sang MariaDB.
- B. MariaDB chỉ tương thích với dữ liệu nhưng không tương thích với câu lệnh MySQL.
- **C. Phần lớn database/script đã viết cho MySQL có khả năng hoạt động tốt với MariaDB, ngoại trừ một số trường hợp biên.**
- D. MariaDB tương thích với PostgreSQL hơn MySQL.

### Câu 3
Vì sao kiến thức quản trị MariaDB vẫn hữu ích khi gặp hệ thống MySQL trong thực tế?

- A. Vì MySQL và MariaDB dùng chung tiến trình hệ thống.
- **B. Vì nhiều lệnh thực hành với MariaDB cũng tương tự những gì sẽ làm trên MySQL, và vẫn còn nhiều hệ thống MySQL đang được sử dụng.**
- C. Vì MariaDB tự động chuyển đổi mọi máy chủ MySQL.
- D. Vì cả hai luôn dùng cùng một file cấu hình duy nhất.

### Câu 4
Chương nhấn mạnh MariaDB là “more than just a fork of MySQL” vì lý do nào?

- A. MariaDB loại bỏ hoàn toàn cú pháp SQL của MySQL.
- B. MariaDB không còn hỗ trợ các công cụ của MySQL.
- **C. MariaDB kế thừa nhiều điểm mạnh của MySQL đồng thời có thêm các thay đổi và cải tiến riêng.**
- D. MariaDB chỉ là giao diện quản trị cho MySQL.

### Câu 5
Theo chương, lợi thế nào của MariaDB liên quan trực tiếp đến quá trình phát hành bản vá bảo mật?

- A. Không cần kiểm thử trước khi phát hành.
- **B. Nhà phát triển có thể phát hành bản vá nhanh hơn vì không phải chờ Oracle phê duyệt.**
- C. Không sử dụng phần mềm nguồn mở.
- D. Không cần cập nhật sau khi cài đặt.

### Câu 6
Ngoài bản vá bảo mật nhanh hơn, chương còn nêu lợi ích nào của MariaDB?

- A. Chỉ hỗ trợ một node duy nhất.
- B. Không có tính năng clustering.
- **C. Có hiệu năng tốt hơn và thêm các lựa chọn clustering hiệu quả hơn so với MySQL thuần.**
- D. Không cần bộ nhớ RAM.

### Câu 7
Nhu cầu tài nguyên của một database server được xác định chủ yếu bởi yếu tố nào?

- A. Tên database.
- B. Phiên bản shell.
- **C. Môi trường và workload thực tế.**
- D. Chỉ số lượng CPU core, không phụ thuộc số client.

### Câu 8
Nhận định nào đúng về tài nguyên của MariaDB theo chương?

- A. MariaDB luôn cần lượng RAM rất lớn ngay cả khi không có tải.
- **B. Bản thân MariaDB không nhất thiết chiếm nhiều tài nguyên, nhưng mức sử dụng thực tế phụ thuộc workload.**
- C. Số lượng client không ảnh hưởng đến tài nguyên.
- D. MariaDB luôn dùng tài nguyên cố định.

### Câu 9
Chương khuyến nghị dùng LVM đặc biệt cho phần nào của database server?

- A. Phân vùng chứa `/etc`.
- B. Phân vùng chứa `/boot`.
- **C. Phân vùng chứa các file database.**
- D. Chỉ phân vùng swap.

### Câu 10
Lý do chính nên cân nhắc LVM cho nơi lưu file database là gì?

- A. Để MariaDB không cần backup.
- B. Để vô hiệu hóa quyền người dùng.
- **C. Để linh hoạt hơn trong quản lý dung lượng và giảm phiền toái về lâu dài khi nhu cầu lưu trữ thay đổi.**
- D. Để database chỉ có thể được truy cập cục bộ.

---

## PHẦN II – INSTALLING MARIADB

### Câu 11
Lệnh nào cài đặt MariaDB Server theo chương?

- A. `sudo apt install mariadb-client`
- **B. `sudo apt install mariadb-server`**
- C. `sudo apt install mysql-client`
- D. `sudo apt install database-server`

### Câu 12
Nếu tổ chức muốn tiếp tục dùng MySQL thay vì MariaDB, package nào được cài?

- A. `mysql-client-only`
- B. `mariadb-mysql`
- **C. `mysql-server`**
- D. `mysqld-core-only`

### Câu 13
Sau khi cài `mariadb-server`, lệnh nào dùng để kiểm tra service đã chạy và được kích hoạt chưa?

- A. `service mysql check`
- **B. `systemctl status mariadb`**
- C. `systemctl status mysql-client`
- D. `mariadb --status-daemon`

### Câu 14
Theo chương, trạng thái mặc định của service MariaDB sau khi cài package thường là gì?

- A. Disabled và stopped.
- **B. Đã được start và enable sẵn.**
- C. Chỉ enable nhưng chưa start.
- D. Chỉ start một lần rồi tự tắt.

### Câu 15
Lệnh nào được dùng để tăng cường bảo mật ban đầu cho MariaDB?

- A. `sudo mariadb_secure_setup`
- **B. `sudo mysql_secure_installation`**
- C. `sudo secure_mariadb --init`
- D. `sudo systemctl secure mariadb`

### Câu 16
Khi `mysql_secure_installation` lần đầu hỏi mật khẩu hiện tại của root trong tình huống của chương, thao tác được hướng dẫn là gì?

- A. Nhập mật khẩu tài khoản Linux hiện tại.
- **B. Nhấn Enter vì chưa đặt root password.**
- C. Nhập `root`.
- D. Nhập mật khẩu rỗng dưới dạng hai dấu nháy.

### Câu 17
Sau bước nhập mật khẩu root hiện tại, script sẽ hỏi gì liên quan đến root?

- A. Có xóa root account không.
- **B. Có đặt root password không.**
- C. Có đổi UID của root không.
- D. Có tạo thêm root thứ hai không.

### Câu 18
Theo khuyến nghị trong chương, câu hỏi “Remove anonymous users?” nên trả lời như thế nào?

- A. No.
- **B. Yes.**
- C. Chỉ Yes nếu dùng VPS.
- D. Bỏ qua vì không liên quan bảo mật.

### Câu 19
Theo chương, “Disallow root login remotely?” nên chọn gì?

- A. No để dễ quản trị.
- **B. Yes để không cho root đăng nhập từ xa.**
- C. Chỉ No nếu có firewall.
- D. Không có câu hỏi này trong script.

### Câu 20
Tại sao chương cho rằng việc cấm root login từ xa đặc biệt quan trọng?

- A. Vì MariaDB không hỗ trợ TCP/IP.
- B. Vì root không có quyền trên database.
- **C. Vì gần như không có lý do tốt để mở quyền truy cập root MariaDB/MySQL trực tiếp từ bên ngoài; ứng dụng web có thể truy cập database cục bộ.**
- D. Vì website không bao giờ cần database.

### Câu 21
Một website phục vụ người dùng bên ngoài thường nên tương tác với MariaDB theo mô hình nào được mô tả trong chương?

- A. Người dùng bên ngoài kết nối thẳng vào root MariaDB.
- **B. Người dùng truy cập website, còn website tự giao tiếp với database ở phía server.**
- C. Mỗi người dùng website có một root account MariaDB.
- D. MariaDB phải luôn public ra Internet.

### Câu 22
Ngoài xóa anonymous user và cấm remote root login, `mysql_secure_installation` còn hỏi về thao tác nào?

- A. Xóa `/etc/mysql`.
- **B. Xóa test database và quyền truy cập vào nó.**
- C. Tắt binary log.
- D. Tắt MariaDB service.

### Câu 23
Câu hỏi cuối quan trọng trong chuỗi ví dụ `mysql_secure_installation` là gì?

- A. Reboot server now?
- **B. Reload privilege tables now?**
- C. Remove all databases?
- D. Disable SQL now?

### Câu 24
Cách đơn giản nhất để vào MariaDB shell với quyền root trong cấu hình mặc định của chương là gì?

- A. `mariadb -u root -p`
- **B. `sudo mariadb`**
- C. `mysql root`
- D. `su mariadb`

### Câu 25
Vì sao `sudo mariadb` có thể cho phép vào shell mà không cần nhập username/password của MariaDB?

- A. Vì MariaDB không có cơ chế xác thực.
- **B. Vì khi dùng sudo, root được ngầm định và cơ chế mặc định dùng UNIX socket có thể cho phép truy cập theo cách đó.**
- C. Vì password được lưu trong shell history.
- D. Vì tất cả user Linux đều là admin MariaDB.

### Câu 26
Lệnh nào thể hiện phương pháp đăng nhập bằng username/password truyền thống?

- A. `mariadb root password`
- **B. `mariadb -u root -p`**
- C. `sudo mariadb -p root`
- D. `mariadb --socket-password`

### Câu 27
Tại sao `mariadb -u root -p` có thể thất bại theo cấu hình mặc định được trình bày?

- A. Root user không tồn tại.
- **B. Root mặc định dùng cơ chế xác thực UNIX socket thay vì xác thực password truyền thống.**
- C. MariaDB không hỗ trợ option `-p`.
- D. `-u` chỉ dùng cho remote login.

### Câu 28
Lỗi nào được minh họa khi đăng nhập root bằng password không phù hợp với cơ chế mặc định?

- A. ERROR 404.
- B. ERROR 2002 only.
- **C. ERROR 1045 (28000): Access denied for user 'root'@'localhost'.**
- D. ERROR 1064 syntax error.

### Câu 29
Nếu không muốn thay đổi cơ chế xác thực root, cách xử lý được chương đánh giá là hợp lý nhất là gì?

- A. Xóa root.
- **B. Tiếp tục sử dụng `sudo mariadb`.**
- C. Mở root ra Internet.
- D. Tắt UNIX socket.

### Câu 30
Nếu muốn root đăng nhập theo cách username/password truyền thống, plugin nào được chuyển sang?

- A. `unix_socket_only`
- B. `sha256_socket`
- **C. `mysql_native_password`**
- D. `pam_root`

### Câu 31
Câu lệnh nào trong chương thay đổi plugin của root sang `mysql_native_password`?

- A. `ALTER SYSTEM root USE mysql_native_password;`
- **B. `UPDATE mysql.user SET plugin = 'mysql_native_password' WHERE USER='root';`**
- C. `SET root.plugin='mysql_native_password';`
- D. `GRANT mysql_native_password TO root;`

### Câu 32
Sau khi thay đổi plugin hoặc thông tin đặc quyền trong ví dụ, lệnh nào được chạy?

- A. `RELOAD DATABASES;`
- **B. `FLUSH PRIVILEGES;`**
- C. `SYNC USERS;`
- D. `APPLY AUTH;`

### Câu 33
Package nào cung cấp lệnh `mariadb` theo mô tả của chương?

- A. `mariadb-tools-extra`
- **B. `mariadb-client`, được cài như dependency của `mariadb-server`.**
- C. `mysql-shell` bắt buộc cài riêng.
- D. `libmariadb-only`.

### Câu 34
Chạy lệnh `mariadb` không có option mặc định kết nối đến đâu?

- A. Database server bất kỳ trên Internet.
- **B. Database server trên máy cục bộ.**
- C. Chỉ tới localhost nếu chỉ định `-h`.
- D. Không thể kết nối nếu thiếu database name.

### Câu 35
Lệnh `mariadb` ngoài kết nối local còn có khả năng nào?

- A. Chỉ tạo file backup.
- **B. Kết nối tới database server bên ngoài để quản trị từ xa khi được cấu hình phù hợp.**
- C. Chỉ quản lý user Linux.
- D. Chỉ xem log hệ thống.

### Câu 36
Prompt nào biểu thị đã vào MariaDB shell nhưng chưa chọn database?

- A. `mysql#`
- **B. `MariaDB [(none)]>`**
- C. `MariaDB [root]$`
- D. `SQL [(all)]>`

### Câu 37
Cách nào được chương nêu để thoát khỏi MariaDB shell?

- A. Chỉ `logout`.
- **B. Gõ `exit` rồi Enter hoặc nhấn `Ctrl + D`.**
- C. Nhấn `Ctrl + C` bắt buộc.
- D. Chỉ `quit --force`.

---

## PHẦN III – UNDERSTANDING THE MARIADB CONFIGURATION FILES

### Câu 38
Thư mục chính chứa các file cấu hình MariaDB trên hệ thống trong chương là gì?

- A. `/etc/mariadb`
- **B. `/etc/mysql`**
- C. `/usr/mysql/config`
- D. `/var/lib/mysql/conf`

### Câu 39
Tập hợp nào dưới đây gồm các file được liệt kê mặc định trong `/etc/mysql`?

- A. `httpd.conf`, `server.cnf`, `db.conf`
- **B. `debian.cnf`, `debian-start`, `mariadb.cnf`, `my.cnf`, `my.cnf.fallback`**
- C. `maria.ini`, `mysql.ini`, `client.conf`
- D. `master.cnf`, `slave.cnf`, `users.cnf`

### Câu 40
Hai thư mục con cấu hình được nêu trong `/etc/mysql` là gì?

- A. `sites-available` và `sites-enabled`
- **B. `conf.d` và `mariadb.conf.d`**
- C. `master.d` và `slave.d`
- D. `client.d` và `server.d`

### Câu 41
File nào được MariaDB đọc khi khởi động theo nội dung chương?

- A. `/etc/mysql/debian.cnf`
- **B. `/etc/mysql/mariadb.cnf`**
- C. `/etc/mysql/my.cnf.fallback` duy nhất
- D. `/var/lib/mysql/mariadb.cnf`

### Câu 42
`/etc/mysql/debian-start` thực chất là gì?

- A. File database nhị phân.
- **B. Một script thiết lập một số giá trị mặc định và biến môi trường khi MariaDB khởi động.**
- C. File chứa dữ liệu bảng.
- D. File lưu binary log.

### Câu 43
`debian-start` định nghĩa SIGHUP trap để làm gì theo chương?

- A. Xóa database cũ.
- **B. Cho phép kiểm tra các bảng bị crash khi tiến trình MariaDB nhận tín hiệu SIGHUP.**
- C. Tắt toàn bộ client.
- D. Thay đổi root password.

### Câu 44
`debian-start` còn load file nào?

- A. `/etc/passwd`
- **B. `/etc/mysql/debian.cnf`**
- C. `/etc/fstab`
- D. `/etc/mysql/users.conf`

### Câu 45
`/etc/mysql/debian.cnf` chủ yếu đặt loại cấu hình nào?

- A. Kernel tuning.
- **B. Một số client settings cho MariaDB daemon/các tiện ích liên quan.**
- C. Cấu hình Apache.
- D. Cấu hình LVM.

### Câu 46
Trong phần `[client]` của ví dụ `debian.cnf`, host mặc định là gì?

- A. `0.0.0.0`
- B. `192.168.1.1`
- **C. `localhost`**
- D. `%`

### Câu 47
Trong ví dụ `debian.cnf`, user mặc định là ai?

- A. `admin`
- **B. `root`**
- C. `mysql`
- D. `debian`

### Câu 48
Socket được nêu trong `debian.cnf` là đường dẫn nào?

- A. `/tmp/mysql.sock`
- **B. `/var/run/mysqld/mysqld.sock`**
- C. `/var/lib/mysql/mysql.sock`
- D. `/run/maria/maria.sock`

### Câu 49
Trong block `[mysql_upgrade]`, `basedir` được minh họa là gì?

- A. `/var`
- B. `/etc`
- **C. `/usr`**
- D. `/opt/mysql`

### Câu 50
Chương nhận xét thế nào về các giá trị mặc định trong `debian.cnf`?

- A. Phải thay đổi ngay sau khi cài.
- **B. Thường đã ổn và hiếm khi có lý do để sửa.**
- C. Chỉ dùng cho remote server.
- D. Bị bỏ qua hoàn toàn.

### Câu 51
Trên các nền tảng MySQL khác, file cấu hình daemon thường được thấy ở đâu theo chương?

- A. `/etc/mysql.ini`
- **B. `/etc/my.cnf`**
- C. `/usr/local/mysql.conf`
- D. `/var/my.cnf`

### Câu 52
`/etc/mysql/mariadb.cnf` có vai trò tổng quát nào?

- A. Chỉ lưu user/password.
- **B. Đặt global defaults và include các file cấu hình khác.**
- C. Chỉ dùng cho backup.
- D. Chỉ dùng trên slave.

### Câu 53
Trong Ubuntu, `mariadb.cnf` include các cấu hình từ đâu?

- A. `/etc/mysql/sites-enabled` và `/etc/mysql/plugins`
- **B. `/etc/mysql/conf.d` và `/etc/mysql/mariadb.conf.d`**
- C. `/etc/mariadb.d` duy nhất
- D. `~/.ssh`

### Câu 54
File nào chương dự kiến chỉnh khi thiết lập master/slave replication?

- A. `/etc/mysql/debian-start`
- **B. `/etc/mysql/conf.d/mysql.cnf`**
- C. `/etc/mysql/my.cnf.fallback`
- D. `/etc/mysql/users.cnf`

### Câu 55
Thứ tự đọc cấu hình nào đúng theo phần comment được trích từ `mariadb.cnf`?

- A. `~/.my.cnf` → `mariadb.conf.d/*.cnf` → `conf.d/*.cnf` → `mariadb.cnf`
- **B. `/etc/mysql/mariadb.cnf` → `/etc/mysql/conf.d/*.cnf` → `/etc/mysql/mariadb.conf.d/*.cnf` → `~/.my.cnf`**
- C. `conf.d/*.cnf` → `mariadb.cnf` → `~/.my.cnf` → `mariadb.conf.d/*.cnf`
- D. Chỉ đọc `mariadb.cnf`.

### Câu 56
Dòng nào trong `mariadb.cnf` khiến MariaDB đọc thư mục `conf.d`?

- A. `Include /etc/mysql/conf.d/*`
- **B. `!includedir /etc/mysql/conf.d/`**
- C. `source /etc/mysql/conf.d/`
- D. `load_dir=/etc/mysql/conf.d/`

### Câu 57
Dòng nào include thư mục riêng của MariaDB?

- A. `!includedir /etc/mysql/mysql.d/`
- **B. `!includedir /etc/mysql/mariadb.conf.d/`**
- C. `include-dir /var/lib/mariadb/`
- D. `source-dir ~/.maria/`

### Câu 58
Một cấu hình **tương thích với MySQL, không riêng cho MariaDB** nên đặt ở đâu theo hướng dẫn?

- A. `/etc/mysql/mariadb.conf.d` bắt buộc.
- **B. Một file `.cnf` trong `/etc/mysql/conf.d`.**
- C. `/etc/mysql/debian-start`.
- D. `/var/log/mysql`.

### Câu 59
Một cấu hình cho **tính năng riêng của MariaDB, không tương thích MySQL** nên đặt ở đâu?

- A. `/etc/mysql/conf.d`.
- **B. `/etc/mysql/mariadb.conf.d`**
- C. `/etc/hosts`.
- D. `~/.bashrc`.

### Câu 60
Lý do Ubuntu chia cấu hình thành nhiều file/thư mục thay vì nhồi tất cả vào một file lớn là gì?

- A. MariaDB không thể đọc file lớn.
- **B. Để modular hóa cấu hình và tách các nhóm tùy chọn phù hợp.**
- C. Để tránh dùng phần mở rộng `.cnf`.
- D. Vì `mariadb.cnf` không hỗ trợ comment.

---

## PHẦN IV – MANAGING MARIADB DATABASES

### Câu 61
Tại sao chương khuyên tạo một tài khoản quản trị MariaDB riêng thay vì cho người khác dùng root?

- A. Root không có đủ quyền.
- **B. Root là tài khoản quản trị mặc định nhưng không nên được chia sẻ; tạo tài khoản admin riêng an toàn và phù hợp hơn.**
- C. MariaDB không hỗ trợ root.
- D. Root chỉ dùng để backup.

### Câu 62
User bên trong MariaDB và user Linux trên hệ thống có quan hệ thế nào theo chương?

- A. Là cùng một danh sách user.
- **B. Là hai hệ thống tài khoản tách biệt.**
- C. MariaDB tự động tạo user Linux cho mỗi user database.
- D. Chỉ root là tách biệt.

### Câu 63
Câu lệnh nào tạo user `admin` chỉ được đăng nhập từ localhost?

- A. `ADD USER admin LOCAL PASSWORD 'password';`
- **B. `CREATE USER 'admin'@'localhost' IDENTIFIED BY 'password';`**
- C. `CREATE LOCAL USER admin WITH password;`
- D. `USERADD admin@localhost;`

### Câu 64
Sau khi tạo user hoặc thay đổi quyền theo hướng dẫn trong chương, thao tác nào nên thực hiện?

- A. `REINDEX USERS;`
- **B. `FLUSH PRIVILEGES;`**
- C. `RESET DATABASES;`
- D. `COMMIT ROOT;`

### Câu 65
`'admin'@'localhost'` thể hiện điều gì?

- A. Admin được truy cập từ mọi nơi.
- **B. Admin chỉ được xác thực khi kết nối từ máy local.**
- C. Admin chỉ được dùng database tên localhost.
- D. Admin là user Linux.

### Câu 66
Câu lệnh nào tạo `admin` có thể đăng nhập từ mọi nguồn theo ví dụ?

- A. `CREATE USER 'admin'@'localhost' ...`
- **B. `CREATE USER 'admin'@'%' IDENTIFIED BY 'password';`**
- C. `CREATE USER '%'@'admin' ...`
- D. `CREATE GLOBAL USER admin;`

### Câu 67
Ký tự `%` ở phần host của MariaDB user có ý nghĩa gì trong chương?

- A. Chỉ mạng loopback.
- **B. Wildcard đại diện cho mọi nguồn/host phù hợp.**
- C. Chỉ IPv6.
- D. Chỉ user anonymous.

### Câu 68
Nếu chỉ muốn admin remote từ mạng `192.168.1.x`, ví dụ nào phù hợp nhất?

- A. `'admin'@'0.0.0.0'`
- **B. `'admin'@'192.168.1.%'`**
- C. `'admin'@'192.168.%'` bắt buộc
- D. `'admin'@'localhost%'`

### Câu 69
So với dùng `%`, giới hạn user vào `192.168.1.%` có lợi gì?

- A. Cho phép nhiều host hơn.
- **B. Thu hẹp nguồn kết nối, an toàn hơn so với cho phép mọi nơi.**
- C. Tắt password.
- D. Biến user thành root.

### Câu 70
Lệnh nào cấp toàn bộ quyền trên toàn bộ database/table cho admin local?

- A. `GRANT ALL ON localhost TO admin;`
- **B. `GRANT ALL PRIVILEGES ON *.* TO 'admin'@'localhost';`**
- C. `GRANT ROOT TO admin;`
- D. `GRANT * ON * TO admin;`

### Câu 71
`*.*` trong lệnh GRANT trên có nghĩa gần nhất với gì?

- A. Chỉ một table.
- B. Chỉ database hiện tại.
- **C. Mọi database và mọi table.**
- D. Chỉ system database.

### Câu 72
Lệnh nào đăng nhập MariaDB bằng user `admin` và để hệ thống hỏi password?

- A. `mariadb admin --password`
- **B. `mariadb -u admin -p`**
- C. `sudo admin mariadb`
- D. `mariadb -p admin -u`

### Câu 73
Cú pháp nào truyền password trực tiếp cùng option `-p` theo ví dụ của chương?

- A. `mariadb -u admin -p password`
- **B. `mariadb -u admin -p<password>`**
- C. `mariadb -u admin --p=password` bắt buộc
- D. `mariadb admin password`

### Câu 74
Điểm cú pháp đáng chú ý khi truyền password trực tiếp với `-p` là gì?

- A. Phải có hai dấu cách.
- **B. Không có khoảng trắng giữa `-p` và password.**
- C. `-p` phải đứng trước `-u`.
- D. Password phải đặt trước username.

### Câu 75
Giới hạn quan trọng của admin account được tạo trong chương là gì?

- A. Không tạo được database.
- **B. Có thể quản lý database nhưng không dùng để quản lý user/permissions; phần đó vẫn cần root.**
- C. Chỉ đọc được dữ liệu.
- D. Không thể login.

### Câu 76
Tại sao chương muốn root vẫn là tài khoản dùng để quản lý user permissions?

- A. Vì admin không thể có quyền trên database.
- **B. Để hạn chế việc ai có thể tạo user và thay đổi đặc quyền ở mức cao nhất.**
- C. Vì root không thể tạo table.
- D. Vì chỉ root mới chạy được `SELECT`.

### Câu 77
Câu lệnh nào tạo một read-only user trên toàn bộ database/table trong ví dụ?

- A. `GRANT READ ON *.* TO readonlyuser;`
- **B. `GRANT SELECT ON *.* TO 'readonlyuser'@'localhost' IDENTIFIED BY 'password';`**
- C. `CREATE READONLY USER readonlyuser;`
- D. `GRANT VIEW DATABASES TO readonlyuser;`

### Câu 78
Quyền nào được dùng để biến user thành read-only theo ví dụ?

- A. DELETE
- B. CREATE
- **C. SELECT**
- D. DROP

### Câu 79
Lệnh nào tạo database tên `mysampledb`?

- A. `NEW DATABASE mysampledb;`
- **B. `CREATE DATABASE mysampledb;`**
- C. `ADD DATABASE mysampledb;`
- D. `MAKE DB mysampledb;`

### Câu 80
Lệnh nào liệt kê database để xác nhận `mysampledb` đã được tạo?

- A. `LIST DATABASES;`
- **B. `SHOW DATABASES;`**
- C. `SELECT DATABASES;`
- D. `SHOW ALL DB;`

### Câu 81
Theo slide, câu lệnh nào được dùng để liệt kê HOST, USER và PASSWORD từ bảng hệ thống?

- A. `SHOW USERS;`
- **B. `SELECT HOST, USER, PASSWORD FROM mysql.user;`**
- C. `SELECT * FROM system.users;`
- D. `LIST USER HOST PASSWORD;`

### Câu 82
Trong triển khai ứng dụng thông thường, nguyên tắc phân quyền user database được chương nhấn mạnh là gì?

- A. Luôn cấp `ALL ON *.*`.
- **B. Chỉ cấp quyền trên database mà ứng dụng cần và với mức quyền tối thiểu đủ để hoạt động.**
- C. Dùng root cho mọi ứng dụng.
- D. Không cần tạo user riêng.

### Câu 83
Lệnh nào tạo/cấp quyền chỉ đọc cho `appuser` trên riêng `mysampledb`?

- A. `GRANT SELECT ON *.* TO 'appuser'@'localhost';`
- **B. `GRANT SELECT ON mysampledb.* TO 'appuser'@'localhost' IDENTIFIED BY 'password';`**
- C. `GRANT READ mysampledb TO appuser;`
- D. `GRANT SELECT ON mysql.user TO appuser;`

### Câu 84
`mysampledb.*` trong GRANT có ý nghĩa gì?

- A. Mọi database nhưng chỉ table `mysampledb`.
- **B. Mọi table bên trong database `mysampledb`.**
- C. Chỉ system table.
- D. Chỉ schema mặc định.

### Câu 85
Nếu `appuser` cần toàn quyền trên **riêng** `mysampledb`, lệnh nào đúng theo chương?

- A. `GRANT ALL ON *.* TO 'appuser'@'localhost';`
- **B. `GRANT ALL ON mysampledb.* TO 'appuser'@'localhost' IDENTIFIED BY 'password';`**
- C. `GRANT ROOT ON mysampledb TO appuser;`
- D. `GRANT ALL DATABASES TO appuser;`

### Câu 86
Lệnh nào kiểm tra các quyền đã cấp cho `appuser` local?

- A. `SHOW PRIVILEGES appuser;`
- **B. `SHOW GRANTS FOR 'appuser'@'localhost';`**
- C. `LIST GRANTS appuser;`
- D. `SELECT GRANTS FROM appuser;`

### Câu 87
Quyền nào cho phép user đọc dữ liệu theo danh sách quyền trong chương?

- A. DELETE
- B. DROP
- **C. SELECT**
- D. CREATE

### Câu 88
Quyền nào cho phép xóa các dòng trong table theo mô tả của chương?

- A. CREATE
- **B. DELETE**
- C. SELECT
- D. SHOW

### Câu 89
Quyền nào được mô tả là cho phép thêm row mới vào table?

- A. DROP
- **B. INSERT**
- C. SELECT
- D. DELETE

### Câu 90
Quyền nào cho phép xóa hoàn toàn database theo danh sách của chương?

- A. DELETE
- B. REMOVE
- **C. DROP**
- D. TRUNCATE

### Câu 91
Quyền `ALL` được mô tả ngắn gọn như thế nào?

- A. Chỉ cho phép SELECT và INSERT.
- **B. Cấp toàn bộ quyền được xét đến cho user.**
- C. Chỉ dành cho localhost.
- D. Chỉ cho phép tạo database.

### Câu 92
Theo slide, lệnh nào được dùng để xóa quyền truy cập bằng cách xóa bản ghi user khỏi `mysql.user`?

- A. `DROP USER myuser;`
- **B. `DELETE FROM mysql.user WHERE user='myuser' AND host='localhost';`**
- C. `REMOVE USER FROM mysql.user;`
- D. `DELETE DATABASE USER myuser;`

### Câu 93
Để bắt đầu làm việc trực tiếp với `mysampledb`, lệnh nào được chạy?

- A. `OPEN mysampledb;`
- **B. `USE mysampledb;`**
- C. `SELECT mysampledb;`
- D. `CONNECT DATABASE mysampledb;`

### Câu 94
Sau khi chạy `USE mysampledb;`, prompt thay đổi như thế nào?

- A. Từ `MariaDB [(none)]>` thành `Linux [mysampledb]$`.
- **B. Từ `MariaDB [(none)]>` thành `MariaDB [mysampledb]>`.**
- C. Không thay đổi.
- D. Thành `mysql#`.

### Câu 95
Câu lệnh tạo table Employees trong ví dụ có cấu trúc nào?

- A. `Name int, Age char, Occupation date`
- **B. `CREATE TABLE Employees (Name char(15), Age int(3), Occupation char(15));`**
- C. `CREATE Employees TABLE (...)`
- D. `ADD TABLE Employees (...)`

### Câu 96
Lệnh nào kiểm tra các column của table `Employees`?

- A. `DESCRIBE DATABASE Employees;`
- **B. `SHOW COLUMNS IN Employees;`**
- C. `SHOW FIELDS DATABASE Employees;`
- D. `LIST Employees COLUMNS;`

### Câu 97
Lệnh INSERT nào đúng với dữ liệu ví dụ Joe Smith, 26 tuổi, nghề Ninja?

- A. `INSERT Employees ('Joe Smith',26,'Ninja');`
- **B. `INSERT INTO Employees VALUES ('Joe Smith', '26', 'Ninja');`**
- C. `ADD ROW Employees VALUES ...`
- D. `CREATE ROW Employees ...`

### Câu 98
Lệnh nào hiển thị toàn bộ dữ liệu trong table `Employees`?

- A. `SHOW * Employees;`
- **B. `SELECT * FROM Employees;`**
- C. `PRINT Employees;`
- D. `LIST ROWS Employees;`

### Câu 99
Muốn xóa riêng bản ghi có `Name = 'Joe Smith'`, lệnh nào đúng theo ví dụ?

- A. `DROP FROM Employees WHERE Name='Joe Smith';`
- **B. `DELETE FROM Employees WHERE Name = 'Joe Smith';`**
- C. `REMOVE Employees 'Joe Smith';`
- D. `DELETE TABLE Employees WHERE ...`

### Câu 100
Vai trò của `WHERE` trong câu lệnh DELETE trên là gì?

- A. Xác định database hiện tại.
- **B. Đưa ra điều kiện tìm kiếm để giới hạn các record bị xóa.**
- C. Đặt quyền cho user.
- D. Chọn host kết nối.

### Câu 101
Lệnh nào xóa toàn bộ table `Employees`?

- A. `DELETE TABLE Employees;`
- **B. `DROP TABLE Employees;`**
- C. `REMOVE TABLE Employees;`
- D. `TRUNCATE DATABASE Employees;`

### Câu 102
Lệnh nào xóa toàn bộ database `mysampledb`?

- A. `DELETE DATABASE mysampledb;`
- **B. `DROP DATABASE mysampledb;`**
- C. `REMOVE DB mysampledb;`
- D. `DROP TABLE mysampledb;`

### Câu 103
Công cụ nào được dùng để backup database trong chương?

- A. `mariabackup` bắt buộc.
- **B. `mysqldump`**
- C. `rsync` trực tiếp vào file dữ liệu đang chạy.
- D. `tar` duy nhất.

### Câu 104
Trước khi chạy lệnh backup bằng `mysqldump` như ví dụ, thao tác nào được yêu cầu?

- A. Xóa database.
- **B. Thoát khỏi MariaDB shell để trở về Linux shell.**
- C. Tắt mạng.
- D. Xóa user admin.

### Câu 105
Lệnh backup nào đúng theo ví dụ?

- A. `mysqldump mysampledb > admin.sql`
- **B. `mysqldump -u admin -p --databases mysampledb > mysampledb.sql`**
- C. `mariadb -u admin -p mysampledb > dump`
- D. `mysqlbackup --all > mysampledb.sql`

### Câu 106
Dấu `>` trong lệnh backup có vai trò gì ở mức shell?

- A. Đưa nội dung file SQL vào MariaDB.
- **B. Chuyển output của `mysqldump` vào file `mysampledb.sql`.**
- C. So sánh hai database.
- D. Mở kết nối remote.

### Câu 107
Lệnh restore được nêu trong chương là gì?

- A. `mysqldump < mysampledb.sql`
- **B. `sudo mariadb < mysampledb.sql`**
- C. `restore mariadb mysampledb.sql`
- D. `mariadb > mysampledb.sql`

### Câu 108
Dấu `<` trong lệnh restore có ý nghĩa gần nhất là gì?

- A. Ghi output database ra file.
- **B. Dùng file SQL làm input cho lệnh `mariadb`.**
- C. Giới hạn quyền user.
- D. Chọn host localhost.

---

## PHẦN V – SETTING UP A SLAVE DATABASE SERVER

### Câu 109
Để bắt đầu thiết lập replication theo chương, cần tối thiểu bao nhiêu database server?

- A. 1
- **B. 2**
- C. 3
- D. 4

### Câu 110
Hai server trong mô hình được gán vai trò nào?

- A. Primary và proxy.
- **B. Master và slave.**
- C. Client và router.
- D. Source và cache bắt buộc.

### Câu 111
Thông tin nào nên ghi lại ngay từ đầu cho cả master và slave?

- A. Chỉ hostname.
- **B. Địa chỉ IP của mỗi server.**
- C. Chỉ MAC address.
- D. Chỉ database password.

### Câu 112
Trên master, file nào được chỉnh đầu tiên cho phần replication trong ví dụ?

- A. `/etc/mysql/mariadb.conf.d/50-server.cnf`
- **B. `/etc/mysql/conf.d/mysql.cnf`**
- C. `/etc/mysql/debian.cnf`
- D. `/etc/mysql/my.cnf.fallback`

### Câu 113
Trong `mysql.cnf`, block nào được thêm để cấu hình daemon replication?

- A. `[client]`
- B. `[mysql]`
- **C. `[mysqld]`**
- D. `[replication-client]`

### Câu 114
Tùy chọn nào bật binary logging trong cấu hình master được nêu?

- A. `binary-log=true`
- **B. `log-bin`**
- C. `enable-binlog=1`
- D. `replication-log=on`

### Câu 115
`binlog-do-db=mysampledb` có mục tiêu gì trong cấu hình ví dụ?

- A. Chỉ cho phép user mysampledb login.
- **B. Chỉ định database `mysampledb` là database cần ghi/đưa vào phạm vi binary logging cho replication theo ví dụ.**
- C. Xóa binary log khác.
- D. Tắt replication của mysampledb.

### Câu 116
`server-id` của master trong ví dụ là bao nhiêu?

- A. 0
- **B. 1**
- C. 2
- D. 3306

### Câu 117
File nào được chỉnh để thay đổi `bind-address` cho MariaDB daemon trên master?

- A. `/etc/mysql/conf.d/mysql.cnf`
- **B. `/etc/mysql/mariadb.conf.d/50-server.cnf`**
- C. `/etc/mysql/debian-start`
- D. `/etc/network/interfaces`

### Câu 118
`bind-address = 127.0.0.1` gây trở ngại gì cho replication?

- A. Tắt binary log.
- **B. MariaDB chỉ lắng nghe kết nối local, nên slave ở máy khác không thể kết nối.**
- C. Chỉ cho phép IPv6.
- D. Tự động biến server thành slave.

### Câu 119
Theo chương, `bind-address` được đổi thành giá trị nào để lắng nghe trên mọi interface?

- A. `127.0.0.1`
- B. `192.168.1.1`
- **C. `0.0.0.0`**
- D. `%`

### Câu 120
Lệnh nào cấp quyền replication cho user `replicate` từ slave IP `192.168.1.204`?

- A. `GRANT ALL ON mysampledb.* TO 'replicate'@'192.168.1.204';`
- **B. `GRANT REPLICATION SLAVE ON *.* TO 'replicate'@'192.168.1.204' IDENTIFIED BY 'slavepassword';`**
- C. `GRANT SELECT ON *.* TO replicate;`
- D. `CREATE SLAVE USER replicate;`

### Câu 121
Nếu dùng hostname pattern `%.mydomain` cho replication user, `%` mang ý nghĩa gì?

- A. Chỉ hostname chính xác `mydomain`.
- **B. Cho phép hostname bất kỳ kết thúc bằng `.mydomain`.**
- C. Chỉ cho localhost.
- D. Bắt buộc là IP.

### Câu 122
Sau khi chỉnh cấu hình master, lệnh nào được dùng để restart MariaDB?

- A. `sudo service mysql reload-only`
- **B. `sudo systemctl restart mariadb`**
- C. `sudo systemctl restart mysql-client`
- D. `mariadb restart`

### Câu 123
Tại sao chương đề nghị khóa database master tạm thời trong quá trình chuẩn bị slave?

- A. Để tăng tốc mạng.
- **B. Để tránh dữ liệu trên master tiếp tục thay đổi trong lúc tạo bản đồng bộ ban đầu cho slave.**
- C. Để tắt quyền root.
- D. Để xóa binary log.

### Câu 124
Lệnh nào khóa table ở master theo nội dung chương?

- A. `LOCK DATABASE mysampledb;`
- **B. `FLUSH TABLES WITH READ LOCK;`**
- C. `STOP WRITES;`
- D. `SET DATABASE READONLY;`

### Câu 125
Tại sao nên dùng `mysqldump` để master và slave có dữ liệu giống nhau trước khi bắt đầu đồng bộ?

- A. Vì replication không truyền thay đổi mới.
- **B. Vì khởi đầu từ cùng một trạng thái dữ liệu giúp quá trình synchronization đơn giản và trơn tru hơn.**
- C. Vì slave không thể tạo table.
- D. Vì binary log không dùng cho thay đổi dữ liệu.

### Câu 126
Các công cụ nào được chương gợi ý để chuyển file dump từ master sang slave?

- A. FTP và Telnet bắt buộc.
- **B. `rsync` hoặc `scp`.**
- C. `ping` hoặc `traceroute`.
- D. `apt` hoặc `snap`.

### Câu 127
Lệnh backup trên master trong phần replication là gì?

- A. `mariadb -u admin -p > mysampledb.sql`
- **B. `mysqldump -u admin -p --databases mysampledb > mysampledb.sql`**
- C. `mysqldump --all-databases > slave.sql` bắt buộc
- D. `rsync /var/lib/mysql mysampledb.sql`

### Câu 128
Sau khi chuyển file dump sang slave, lệnh import được ví dụ hóa là gì?

- A. `mysqldump -u root -p < mysampledb.sql`
- **B. `mariadb -u root -p < mysampledb.sql`**
- C. `mariadb -u root -p > mysampledb.sql`
- D. `restore mysql root mysampledb.sql`

### Câu 129
Trên slave, `server-id` trong ví dụ được đặt là bao nhiêu?

- A. 1
- **B. 2**
- C. 3306
- D. 204

### Câu 130
Sau khi sửa `server-id` trên slave, thao tác nào phải thực hiện trước khi tiếp tục?

- A. Reboot cả mạng.
- **B. Restart MariaDB trên slave.**
- C. Xóa user replicate.
- D. Tắt master.

### Câu 131
Lệnh `CHANGE MASTER TO ...` trên slave cần tối thiểu những thông tin nào trong ví dụ?

- A. Tên table, port SSH, root UID.
- **B. `MASTER_HOST`, `MASTER_USER`, `MASTER_PASSWORD`.**
- C. Chỉ database name.
- D. Chỉ `server-id` của slave.

### Câu 132
Trong ví dụ, `MASTER_HOST` được đặt thành gì?

- A. `127.0.0.1`
- **B. `192.168.1.184`**
- C. `192.168.1.204`
- D. `0.0.0.0`

### Câu 133
Sau khi cấu hình synchronization xong, lệnh nào dùng trên master để bỏ khóa table?

- A. `RELEASE DATABASES;`
- **B. `UNLOCK TABLES;`**
- C. `START WRITES;`
- D. `FLUSH UNLOCK;`

### Câu 134
Lệnh nào kiểm tra trạng thái slave và hiển thị kết quả theo chiều dọc?

- A. `SHOW MASTER STATUS;`
- **B. `SHOW SLAVE STATUS\G`**
- C. `STATUS SLAVE --vertical`
- D. `SHOW REPLICATION;`

### Câu 135
Ký hiệu `\G` trong lệnh kiểm tra status có tác dụng gì?

- A. Bật global permissions.
- **B. Hiển thị output theo chiều dọc thay vì hàng ngang.**
- C. Ghi output vào log.
- D. Chạy lệnh trên master.

### Câu 136
Giá trị nào trong `Slave_IO_State` cho thấy replication đang chờ sự kiện từ master và về cơ bản hoạt động theo ví dụ?

- A. `Stopped by root`
- B. `No master configured`
- **C. `Waiting for master to send event`**
- D. `Permission denied`

### Câu 137
Nếu `Slave_IO_State` trống và slave chưa chạy, lệnh nào được sử dụng?

- A. `RUN SLAVE;`
- **B. `START SLAVE;`**
- C. `ENABLE SLAVE;`
- D. `RESTART MASTER;`

### Câu 138
Sau `START SLAVE;`, thao tác tiếp theo hợp lý nhất theo chương là gì?

- A. Xóa database master.
- **B. Chạy lại `SHOW SLAVE STATUS\G` để kiểm tra.**
- C. Đổi `server-id` về 1.
- D. Tắt binary log.

### Câu 139
Cách kiểm thử replication được chương minh họa là gì?

- A. Thêm record trên slave rồi kiểm tra master.
- **B. Thêm một record mới vào master rồi kiểm tra xem record đó xuất hiện trên slave hay không.**
- C. Xóa slave và tạo lại.
- D. Chỉ ping giữa hai server.

### Câu 140
Record mẫu dùng để kiểm thử replication là gì?

- A. `('Joe Smith','26','Ninja')`
- **B. `('Optimus Prime', '100', 'Transformer')`**
- C. `('Admin','1','DBA')`
- D. `('Slave','2','Server')`

### Câu 141
Trên slave, cặp lệnh nào được dùng để kiểm tra record mới trong ví dụ?

- A. `SHOW DATABASES;` và `SHOW USERS;`
- **B. `USE mysampledb;` và `SELECT * FROM Employees;`**
- C. `DROP TABLE Employees;` và `SHOW COLUMNS;`
- D. `START SLAVE;` và `DELETE FROM Employees;`

### Câu 142
Nếu replication lỗi, bước kiểm tra mạng đầu tiên được gợi ý là gì?

- A. Kiểm tra Apache port 80.
- **B. Đảm bảo master đang lắng nghe trên `0.0.0.0` port `3306`.**
- C. Kiểm tra DNS port 53.
- D. Tắt firewall vĩnh viễn ngay lập tức.

### Câu 143
Lệnh nào được dùng để kiểm tra mysqld đang lắng nghe port nào?

- A. `ss -l | grep apache`
- **B. `sudo netstat -tulpn | grep mysql`**
- C. `ping mysql:3306`
- D. `systemctl ports mariadb`

### Câu 144
Output mong đợi của kiểm tra port trong chương chứa địa chỉ/port nào?

- A. `127.0.0.1:22`
- **B. `0.0.0.0:3306` ở trạng thái LISTEN.**
- C. `0.0.0.0:80`.
- D. `192.168.1.255:53`.

### Câu 145
Nếu `SHOW SLAVE STATUS\G` báo lỗi authentication, chương khuyên kiểm tra gì ở master trước?

- A. Xóa root password.
- **B. Chạy `FLUSH PRIVILEGES;` và kiểm tra lại quyền replication.**
- C. Tắt bind-address.
- D. Xóa binary log.

### Câu 146
Ngoài `FLUSH PRIVILEGES`, ba thông tin nào cần kiểm tra khớp khi slave kết nối master?

- A. Tên table, UID, GID.
- **B. Username, IP address và password.**
- C. Hostname Linux, shell, home directory.
- D. RAM, CPU, disk.

### Câu 147
Một điều kiện dữ liệu quan trọng trước/đầu replication là gì?

- A. Master và slave phải dùng khác database để tránh xung đột.
- **B. Master và slave nên có cùng database và table cần đồng bộ.**
- C. Slave không được có table.
- D. Master phải trống hoàn toàn.

### Câu 148
Vì sao master không thể cập nhật một database trên slave nếu database/table tương ứng không tồn tại?

- A. Vì slave không hỗ trợ SQL.
- **B. Vì replication cần cấu trúc đích phù hợp để áp dụng thay đổi.**
- C. Vì port 3306 chỉ hỗ trợ SELECT.
- D. Vì `server-id=2` cấm CREATE.

### Câu 149
Theo chương, thông thường cần `mysqldump` và import dữ liệu ban đầu sang slave bao nhiêu lần?

- A. Sau mỗi INSERT.
- B. Mỗi phút.
- **C. Một lần để đồng bộ trạng thái ban đầu; sau đó thay đổi trên master sẽ được replication chuyển sang slave.**
- D. Không bao giờ.

### Câu 150
Nếu gặp khó khăn với `mysqldump`, phương án tối thiểu được chương nêu cho ví dụ là gì?

- A. Không cần tạo gì trên slave.
- **B. Có thể tự tạo thủ công `mysampledb` và table `Employees` trên slave để có cấu trúc cần thiết cho việc đồng bộ ví dụ.**
- C. Chỉ tạo user root mới.
- D. Chỉ đổi port MariaDB.

---

# CHECKLIST KIẾN THỨC ĐÃ BAO PHỦ

- Lý do dùng MariaDB, tính tương thích với MySQL, cải tiến, tài nguyên và LVM.
- Cài MariaDB/MySQL, kiểm tra service, `mysql_secure_installation` và các lựa chọn bảo mật.
- Hai cách đăng nhập MariaDB, UNIX socket, lỗi 1045, chuyển sang `mysql_native_password`, `FLUSH PRIVILEGES`.
- MariaDB client, prompt, local/remote connection, thoát shell.
- Toàn bộ cấu trúc file cấu hình trong `/etc/mysql`, `debian-start`, `debian.cnf`, socket, thứ tự include, `conf.d` và `mariadb.conf.d`.
- Tạo user, giới hạn host, wildcard `%`, cấp quyền, admin/read-only/app user, `SHOW GRANTS`, danh sách quyền.
- Tạo/xóa database, chọn database, tạo table, xem column, INSERT/SELECT/DELETE/DROP.
- Backup/restore với `mysqldump` và redirect `>`/`<`.
- Master/slave replication: `log-bin`, `binlog-do-db`, `server-id`, `bind-address`, replication user, lock/unlock, dump/import, `CHANGE MASTER TO`, `SHOW SLAVE STATUS\\G`, `START SLAVE`, kiểm thử và troubleshooting port/auth/data consistency.

---

> Gợi ý ôn tập: trước khi nhìn phần in đậm, hãy che đáp án và tự giải. Các câu có lệnh gần giống nhau được cố tình thiết kế để kiểm tra khả năng nhớ đúng cú pháp và hiểu mục đích của từng bước.
