# TRẮC NGHIỆM ÔN TẬP CHƯƠNG 8 - SHARING AND TRANSFERRING FILES

> Nguồn: **Chương 8 - Sharing and Transferring Files**.  
> Mục tiêu: ôn tập bao quát toàn bộ nội dung chương, mức độ **trung bình-khá đến khó**, ưu tiên câu hỏi phân biệt khái niệm, cú pháp lệnh và tình huống cấu hình.  
> Quy ước: **đáp án đúng được in đậm**.

---

## Phần 1 - File server considerations

### Câu 1
Hai công nghệ chia sẻ tệp phổ biến được chương 8 tập trung so sánh là gì?

- A. FTP và TFTP
- **B. Samba và NFS**
- C. SSHFS và WebDAV
- D. SCP và rsync

### Câu 2
Nhận định nào đúng về việc triển khai Samba và NFS trên cùng một máy chủ?

- A. Không thể vì hai dịch vụ xung đột cổng mặc định.
- B. Chỉ có thể nếu Samba chạy trong container.
- **C. Có thể chạy cả Samba và NFS trên cùng một server; mỗi giải pháp phù hợp với từng use case khác nhau.**
- D. Chỉ NFS được phép chạy song song với dịch vụ khác.

### Câu 3
Trong một môi trường có cả máy Windows và Linux, lựa chọn nào thường phù hợp hơn theo chương?

- **A. Samba**
- B. NFS
- C. SCP
- D. SSHFS

### Câu 4
Trong một môi trường chủ yếu là Linux/UNIX, giải pháp nào thường phù hợp hơn?

- A. SMB trực tiếp
- **B. NFS**
- C. SCP
- D. FTP

### Câu 5
Lý do cốt lõi khiến Samba có thể phục vụ tốt cho Windows là gì?

- A. Samba dùng NFSv4 bên dưới.
- B. Samba giả lập NTFS.
- **C. Samba là một bản triển khai lại của giao thức Server Message Block (SMB), vốn được Windows sử dụng chủ yếu.**
- D. Samba bắt buộc phải chạy trên Windows Server.

### Câu 6
Điều nào đúng về khả năng truy cập Samba từ các nền tảng không phải Windows?

- A. Chỉ Windows mới truy cập được Samba share.
- B. Chỉ Linux và Windows truy cập được, macOS không hỗ trợ.
- **C. Windows, Linux, macOS và cả Android với ứng dụng phù hợp đều có thể truy cập Samba share.**
- D. Android chỉ truy cập được qua NFS.

### Câu 7
Nếu yếu tố **permission và confidentiality** là ưu tiên cao, chương gợi ý nên xem xét kỹ hơn giải pháp nào?

- A. SCP
- B. Samba
- **C. NFS**
- D. SSHFS

### Câu 8
Điểm thuận lợi của NFS về quyền truy cập so với Samba trong ngữ cảnh chương là gì?

- A. NFS bỏ qua hoàn toàn quyền UNIX.
- **B. NFS hỗ trợ đầy đủ permission chuẩn UNIX, nhờ đó có thể cấu hình quyền theo mô hình UNIX một cách nhất quán.**
- C. NFS luôn cho mọi user quyền ghi.
- D. NFS không cần UID/GID.

---

## Phần 2 - Sharing files with Windows users via Samba

### Câu 9
Lệnh cài đặt Samba server được dùng trong chương là gì?

- **A. sudo apt install samba**
- B. sudo apt install smbd
- C. sudo apt install smb-server
- D. sudo apt install samba-client

### Câu 10
Sau khi cài gói `samba`, daemon nào được cài và tự động khởi động/enable theo tài liệu?

- A. nmbclient
- **B. smbd**
- C. smbfs
- D. cifsd

### Câu 11
File cấu hình mặc định chính của Samba nằm ở đâu?

- A. `/etc/smb/samba.conf`
- B. `/etc/samba.conf`
- **C. `/etc/samba/smb.conf`**
- D. `/var/lib/samba/smb.conf`

### Câu 12
Khi muốn cấu hình Samba lại từ đầu nhưng vẫn giữ bản cấu hình gốc để tham khảo, lệnh nào được dùng?

- A. `sudo cp /etc/samba/smb.conf /etc/samba/smb.conf.orig`
- **B. `sudo mv /etc/samba/smb.conf /etc/samba/smb.conf.orig`**
- C. `sudo rm /etc/samba/smb.conf`
- D. `sudo mv /etc/samba/smb.conf /etc/samba/samba.orig`

### Câu 13
Tại sao tài liệu không khuyến khích ghi đè/xóa ngay file `smb.conf` gốc?

- A. Vì Samba sẽ không bao giờ khởi động lại được.
- **B. Vì file mặc định chứa các ghi chú và ví dụ hữu ích để tham khảo về sau.**
- C. Vì file đó chứa mật khẩu người dùng.
- D. Vì file đó được kernel quản lý.

### Câu 14
Tác giả chia cấu hình Samba thành hai file nào để cấu hình sạch và dễ đọc hơn?

- A. `/etc/samba/global.conf` và `/etc/samba/share.conf`
- **B. `/etc/samba/smb.conf` và `/etc/samba/smbshared.conf`**
- C. `/etc/smb.conf` và `/etc/smbshared.conf`
- D. `/etc/samba/smb.conf` và `/etc/exports`

### Câu 15
Trong `smb.conf`, stanza `[global]` có vai trò gì?

- A. Chỉ cấu hình share Public.
- B. Chỉ chứa thông tin đăng nhập.
- **C. Chứa các thiết lập ảnh hưởng đến Samba như một tổng thể.**
- D. Khai báo duy nhất một thư mục được chia sẻ.

### Câu 16
Dòng `server string = File Server` chủ yếu dùng để làm gì?

- A. Đặt hostname Linux thật sự của server.
- **B. Cung cấp chuỗi mô tả cho file server, có thể hiển thị dưới tên server trong Windows Explorer.**
- C. Chỉ định giao thức SMB version.
- D. Chỉ định tên share.

### Câu 17
`workgroup = WORKGROUP` cấu hình điều gì?

- A. Group UNIX sở hữu mọi file Samba.
- **B. Namespace/nhóm máy mà Samba server tham gia khi duyệt network share trên Windows.**
- C. Nhóm user được phép đăng nhập SSH.
- D. Tên DNS domain của server.

### Câu 18
Nếu tổ chức đã có workgroup riêng, cách cấu hình phù hợp là gì?

- A. Luôn giữ nguyên `WORKGROUP`.
- **B. Đặt giá trị `workgroup` trùng với workgroup đang dùng trên các máy khác.**
- C. Xóa hoàn toàn dòng `workgroup`.
- D. Đặt bằng username quản trị.

### Câu 19
Theo tài liệu, nếu Windows chưa tùy chỉnh workgroup thì tên mặc định thường là gì?

- A. HOME
- B. WINDOWS
- **C. WORKGROUP**
- D. LOCALDOMAIN

### Câu 20
`security = user` có ý nghĩa gì trong cấu hình mẫu?

- A. Tắt xác thực.
- **B. Samba sử dụng username và password, với local users để xác thực.**
- C. Bắt buộc dùng Active Directory.
- D. Bắt buộc dùng Domain Controller.

### Câu 21
Trong slide, `security = user` được phân biệt với các lựa chọn nào?

- A. `ldap` và `kerberos`
- **B. `ads` (Active Directory) và `domain` (Domain Controller)**
- C. `guest` và `root`
- D. `nfs` và `cifs`

### Câu 22
`map to guest = Bad User` được dùng để làm gì?

- A. Khóa toàn bộ user không đăng nhập được.
- **B. Xử lý user chưa xác thực như guest user, do đó họ nhận quyền guest thay vì full permissions.**
- C. Biến mọi local user thành root.
- D. Chỉ cho phép Active Directory account.

### Câu 23
Nếu bỏ dòng `map to guest = Bad User`, tài liệu lưu ý điều gì?

- A. Client bắt buộc dùng địa chỉ IP thay vì hostname.
- **B. Cần đảm bảo server và client PC có cùng tên tài khoản người dùng tương ứng ở hai phía.**
- C. Samba sẽ tự động chuyển sang NFS.
- D. `smbd` sẽ không khởi động.

### Câu 24
`name resolve order = bcast hosts wins` mô tả thứ tự resolve nào?

- A. DNS -> WINS -> `/etc/hosts`
- **B. Broadcast -> ánh xạ trong `/etc/hosts` -> WINS**
- C. WINS -> Broadcast -> DNS
- D. `/etc/hosts` -> DNS -> Broadcast

### Câu 25
Vì sao WINS vẫn xuất hiện trong ví dụ dù đã ít được dùng?

- A. Vì Samba không hỗ trợ DNS.
- **B. Vì WINS được giữ lại chủ yếu vì tính tương thích, dù về cơ bản đã bị DNS thay thế.**
- C. Vì WINS là bắt buộc trong Linux.
- D. Vì WINS quản lý permission UNIX.

### Câu 26
Dòng `include = /etc/samba/smbshared.conf` có tác dụng gì?

- A. Sao chép file vào `/var/lib/samba`.
- B. Chạy file như shell script.
- **C. Chèn nội dung của `smbshared.conf` vào cấu hình Samba tại vị trí đó như thể chỉ dùng một file.**
- D. Chỉ kiểm tra syntax của file.

### Câu 27
Trong file `smbshared.conf` mẫu, hai stanza chia sẻ được đặt tên là gì?

- A. `[Backup]` và `[Home]`
- **B. `[Documents]` và `[Public]`**
- C. `[Private]` và `[Public]`
- D. `[Users]` và `[Guests]`

### Câu 28
Tên stanza như `[Documents]` hoặc `[Public]` tương ứng với điều gì?

- A. Tên user Linux bắt buộc.
- **B. Tên share mà client có thể truy cập dưới dạng `//servername/share-name`.**
- C. Tên filesystem.
- D. Tên service systemd.

### Câu 29
Theo ví dụ, hai đường dẫn UNC tương ứng với hai stanza là gì?

- A. `/servername/Documents` và `/servername/Public`
- **B. `//servername/Documents` và `//servername/Public`**
- C. `smb://Documents` và `smb://Public`
- D. `\\Documents\servername` và `\\Public\servername`

### Câu 30
`path = /share/documents` trong stanza `[Documents]` chỉ định điều gì?

- A. Đường dẫn trên máy Windows client.
- **B. Đường dẫn thực trên filesystem của Samba server dùng làm nội dung share.**
- C. Đường dẫn log Samba.
- D. Tên namespace của workgroup.

### Câu 31
Điều kiện bắt buộc với đường dẫn khai báo bằng `path` là gì?

- A. Phải nằm dưới `/home`.
- B. Phải là symbolic link.
- **C. Phải tồn tại trên filesystem của server.**
- D. Phải thuộc sở hữu root.

### Câu 32
`force user = myuser` có ảnh hưởng gì khi truy cập share?

- A. Bắt client đăng nhập bằng `myuser`.
- **B. Các thao tác trên share được xử lý như user `myuser` thay vì account thực của người truy cập.**
- C. Đổi password của user thành `myuser`.
- D. Chỉ định DNS user.

### Câu 33
`force group = users` trong ví dụ dùng để làm gì?

- A. Ép client tham gia Windows workgroup `users`.
- **B. Ép các thao tác trên share dùng group `users`, tương tự cách `force user` ép user.**
- C. Tạo group mới tự động.
- D. Chặn mọi group khác.

### Câu 34
Tài liệu nhấn mạnh gì về account khai báo trong `force user`?

- A. Có thể là account không tồn tại vì Samba sẽ tự tạo.
- **B. Account đó phải tồn tại trên server.**
- C. Phải là root.
- D. Phải là account Active Directory.

### Câu 35
Kết hợp `public = yes` và `writable = no` cho share `[Documents]` tạo hành vi nào?

- A. Không ai truy cập được.
- **B. Share có thể truy cập công khai nhưng nội dung không thể bị thay đổi qua share.**
- C. Chỉ root mới đọc được.
- D. Share tự động mount ở client.

### Câu 36
Use case phù hợp nhất cho `public = yes` + `writable = no` là gì?

- A. Thư mục upload công cộng.
- **B. Chia sẻ tài liệu cho nhiều người đọc nhưng không cho họ sửa nội dung.**
- C. Thư mục private chỉ một user.
- D. Thư mục backup incremental.

### Câu 37
Trong share `[Public]`, `create mask = 0664` và `force create mode = 0664` nhằm kiểm soát gì?

- A. Quyền trên directory mới.
- **B. Quyền của file mới được tạo trong share.**
- C. Cổng SMB.
- D. UID của người tạo file.

### Câu 38
Trong share `[Public]`, `directory mask = 0777` và `force directory mode = 0777` áp dụng cho gì?

- A. File bình thường.
- **B. Directory mới được tạo trong share.**
- C. Samba daemon.
- D. `/etc/samba`.

### Câu 39
Vì sao cấu hình quyền `0777` cho directory và `0664` cho file được chấp nhận trong ví dụ `[Public]`?

- A. Vì Samba luôn yêu cầu permission mở tối đa.
- **B. Vì share được thiết kế là Public, chủ đích là full access và dữ liệu không được coi là confidential/restricted.**
- C. Vì NFS sẽ ghi đè permission.
- D. Vì `0777` là bắt buộc với CIFS.

### Câu 40
Để `[Public]` cho phép tạo/sửa nội dung, cặp thiết lập nào được dùng?

- A. `public = no`, `writable = no`
- B. `public = no`, `writable = yes`
- **C. `public = yes`, `writable = yes`**
- D. `public = root`, `writable = guest`

### Câu 41
Trước khi start Samba theo cấu hình ví dụ, cần đảm bảo các directory nào tồn tại?

- A. `/srv/documents` và `/srv/public`
- **B. `/share/documents` và `/share/public`**
- C. `/exports/documents` và `/exports/public`
- D. `/mnt/documents` và `/mnt/public`

### Câu 42
Ngoài việc các directory share phải tồn tại, điều gì còn phải đúng với `force user`/`force group`?

- A. Chỉ cần tên giống nhau, không cần tồn tại.
- **B. User và group được tham chiếu phải tồn tại và có ownership phù hợp trên các shared directories.**
- C. Phải dùng root/root.
- D. Phải có cùng UID với Windows SID.

### Câu 43
Lệnh nào được khuyên dùng để kiểm tra syntax cấu hình Samba trước khi start service?

- A. `smbcheck`
- B. `smbd --verify`
- **C. `testparm`**
- D. `samba-test`

### Câu 44
Ngoài kiểm tra syntax, `testparm` còn làm gì theo chương?

- A. Xóa cấu hình lỗi.
- **B. In toàn bộ cấu hình ra Terminal để người quản trị xem lại.**
- C. Tự động tạo user Samba.
- D. Mount tất cả share.

### Câu 45
Sau khi `testparm` không báo lỗi, lệnh nào được dùng để start Samba daemon trong ví dụ?

- **A. sudo systemctl start smbd**
- B. sudo systemctl start samba
- C. sudo service smb restart
- D. sudo systemctl start nmbd-only

### Câu 46
Trên Windows, cách trực tiếp để truy cập share theo ví dụ là gì?

- A. Mở CMD và dùng `mount`.
- **B. Mở Run (Windows + R) rồi nhập UNC path như `//servername/Documents` hoặc `//servername/Public`.**
- C. Dùng `sshfs`.
- D. Dùng `nfs-common`.

### Câu 47
Share nào trong ví dụ cho phép tạo file mới từ Windows client?

- A. Documents
- **B. Public**
- C. Cả hai đều read-only
- D. Không share nào

### Câu 48
Nhận định nào đúng về truy cập Samba share từ Linux desktop?

- A. Linux không thể truy cập Samba.
- **B. Nhiều file manager trên Linux có mục Network để duyệt local shares; cách cụ thể tùy desktop environment/distribution.**
- C. Chỉ có thể dùng `scp`.
- D. Bắt buộc phải sửa kernel.

### Câu 49
Muốn mount Samba share qua `/etc/fstab`, filesystem type nào được dùng trong ví dụ?

- A. `nfs`
- B. `sshfs`
- **C. `cifs`**
- D. `ext4`

### Câu 50
Để fstab mount CIFS hoạt động trên Debian/Ubuntu client, tài liệu yêu cầu cài gói nào?

- A. `samba nfs-common`
- **B. `smbclient cifs-utils`**
- C. `samba-server sshfs`
- D. `cifs-server nfs-utils`

### Câu 51
Lệnh cài client packages cho Samba/CIFS trong chương là gì?

- **A. sudo apt install smbclient cifs-utils**
- B. sudo apt install samba-client cifs
- C. sudo apt install smbfs nfs-common
- D. sudo apt install cifsd smbclient

### Câu 52
Sau khi đã có entry phù hợp trong `/etc/fstab` và directory `/mnt/documents` tồn tại, lệnh nào đủ để mount share đó?

- A. `sudo mount -a /mnt/documents`
- **B. `sudo mount /mnt/documents`**
- C. `sudo cifs /mnt/documents`
- D. `sudo smbclient --mount /mnt/documents`

### Câu 53
Tùy chọn `noauto` trong Samba fstab entry nhằm mục đích gì?

- A. Tự động mount ở boot.
- **B. Không tự động mount share khi hệ thống boot; người dùng mount thủ công khi cần.**
- C. Không cho phép unmount.
- D. Tắt xác thực username.

### Câu 54
Nếu muốn Samba share tự động mount ở boot, tài liệu nói có thể thay `noauto` bằng gì?

- A. `boot`
- **B. `auto`**
- C. `mountonboot`
- D. `defaults-only`

### Câu 55
Vì sao tác giả thiên về dùng `noauto` cho Samba share trong ví dụ?

- A. `auto` không được kernel hỗ trợ.
- **B. Nếu server chứa share không truy cập được lúc boot, quá trình boot có thể phát sinh lỗi.**
- C. `noauto` nhanh hơn khi transfer.
- D. `auto` chỉ dùng cho NFS.

### Câu 56
Không muốn thêm entry vào `/etc/fstab`, lệnh mount trực tiếp nào đúng theo ví dụ?

- **A. sudo mount -t cifs //myserver/Documents -o username=myuser /mnt/documents**
- B. sudo mount -t nfs //myserver/Documents /mnt/documents
- C. sudo smbmount myserver:/Documents /mnt/documents
- D. sudo mount sshfs://myserver/Documents /mnt/documents

### Câu 57
Trong lệnh mount CIFS trực tiếp, `-o username=myuser` có vai trò gì?

- A. Chỉ định local mount point.
- **B. Truyền option username dùng để xác thực tới Samba server.**
- C. Chỉ định workgroup.
- D. Chỉ định tên daemon.

---

## Phần 3 - Setting up NFS shares

### Câu 58
NFS viết tắt của gì?

- A. Network Folder Sharing
- **B. Network File System**
- C. Native File Service
- D. Network File Security

### Câu 59
NFS được mô tả phù hợp nhất cho tình huống nào?

- A. Chia sẻ giữa Windows-only.
- **B. Chia sẻ file từ Linux/UNIX server tới Linux/UNIX client/server.**
- C. Copy một file đơn lẻ qua SSH.
- D. Chia sẻ tạm thời qua trình duyệt.

### Câu 60
Điểm mạnh được nhấn mạnh của NFS trong môi trường Linux/UNIX là gì?

- A. Tự động chuyển mọi user thành root.
- **B. Hỗ trợ đầy đủ Linux/UNIX-style permissions.**
- C. Không cần mount.
- D. Không cần cấu hình server.

### Câu 61
Directory cha được dùng để chứa các NFS export trong ví dụ là gì?

- A. `/share`
- **B. `/exports`**
- C. `/mnt/nfs`
- D. `/srv/nfsroot`

### Câu 62
Lệnh tạo directory cha của các NFS export trong ví dụ là gì?

- **A. sudo mkdir /exports**
- B. sudo mkdir /share
- C. sudo mkdir -p /mnt/exports
- D. sudo exportfs /exports

### Câu 63
Trong NFS, mỗi thư mục được chia sẻ được gọi là gì?

- A. Stanza
- B. Sharepoint
- **C. Export**
- D. CIFS target

### Câu 64
Ba subdirectory export mẫu trong chương là gì?

- A. `/exports/home`, `/exports/data`, `/exports/tmp`
- **B. `/exports/backup`, `/exports/documents`, `/exports/public`**
- C. `/share/backup`, `/share/documents`, `/share/public`
- D. `/nfs/backup`, `/nfs/docs`, `/nfs/public`

### Câu 65
Gói nào được cài trên NFS server?

- A. `nfs-common`
- **B. `nfs-kernel-server`**
- C. `nfs-client`
- D. `kernel-nfsd`

### Câu 66
Lệnh cài NFS server trong tài liệu là gì?

- **A. sudo apt install nfs-kernel-server**
- B. sudo apt install nfs-common
- C. sudo apt install nfs-server
- D. sudo apt install nfs-utils-client

### Câu 67
Sau khi cài `nfs-kernel-server`, điều gì xảy ra theo slide?

- A. Phải reboot mới daemon xuất hiện.
- **B. Daemon `nfs-kernel-server` khởi động tự động.**
- C. `/etc/exports` bị xóa.
- D. NFS client tự được mount.

### Câu 68
File cấu hình chính mà NFS đọc thông tin share/export là gì?

- A. `/etc/nfs.conf`
- **B. `/etc/exports`**
- C. `/etc/exportfs`
- D. `/etc/nfs/shares.conf`

### Câu 69
File `/etc/exports` mặc định sau cài đặt được mô tả như thế nào?

- A. Chứa sẵn ba export đang hoạt động.
- **B. Có file mặc định nhưng chủ yếu chỉ có các dòng comment, không có thiết lập hữu ích đang bật.**
- C. Không tồn tại.
- D. Chứa password của NFS users.

### Câu 70
Lệnh backup `/etc/exports` trong ví dụ là gì?

- **A. sudo mv /etc/exports /etc/exports.orig**
- B. sudo cp /etc/exports /etc/export.conf
- C. sudo mv /etc/exports /exports/exports.orig
- D. sudo rm /etc/exports

### Câu 71
Dòng nào đóng vai trò **Export Root** trong cấu hình mẫu?

- **A. `/exports *(ro,fsid=0,no_subtree_check)`**
- B. `/exports/backup 192.168.1.0/255.255.255.0(rw,no_subtree_check)`
- C. `/exports/documents 192.168.1.0/255.255.255.0(ro,no_subtree_check)`
- D. `/exports/public 192.168.1.0/255.255.255.0(rw,no_subtree_check)`

### Câu 72
Trong ví dụ `/etc/exports`, export nào được cấu hình read-only?

- A. `/exports/backup`
- **B. `/exports/documents`**
- C. `/exports/public`
- D. Cả backup và public

### Câu 73
Trong ví dụ, `/exports/backup` và `/exports/public` dùng quyền nào?

- A. `ro`
- **B. `rw`**
- C. `noauto`
- D. `users`

### Câu 74
Phần `192.168.1.0/255.255.255.0` trong một export line dùng để làm gì?

- A. Chỉ định UID range.
- **B. Chỉ định network được phép truy cập export đó.**
- C. Chỉ định gateway mặc định.
- D. Chỉ định DNS resolver.

### Câu 75
Một client đến từ network khác với network được khai báo trong export line sẽ thế nào?

- A. Tự động được thêm vào whitelist.
- **B. Bị từ chối truy cập export.**
- C. Chỉ được read-only bất kể cấu hình.
- D. Được chuyển qua Samba.

### Câu 76
Tùy chọn `rw` trong `/etc/exports` nghĩa là gì?

- A. Read without authentication
- **B. Read-write**
- C. Remote workgroup
- D. Root writable only

### Câu 77
Tùy chọn `ro` trong `/etc/exports` nghĩa là gì?

- **A. Read-only**
- B. Root-owned
- C. Remote-only
- D. Retry-once

### Câu 78
`no_subtree_check` làm gì theo nội dung chương?

- A. Bật kiểm tra toàn bộ parent directories sâu hơn.
- **B. Tắt subtree checking, một cơ chế từng có vấn đề ổn định và có thể gây rắc rối với open file handles.**
- C. Tắt permission check.
- D. Tắt UID mapping.

### Câu 79
Lợi ích được nêu của `no_subtree_check` là gì?

- A. Tăng encryption.
- **B. Tăng độ tin cậy; tránh một số vấn đề do NFS quét parent directories.**
- C. Cho phép root từ xa.
- D. Tự động mount client.

### Câu 80
Nếu không khai báo `no_subtree_check`, điều gì được slide mô tả?

- A. NFS chắc chắn không chạy.
- **B. NFS có thể phàn nàn khi restart, nhưng điều đó không nhất thiết làm dịch vụ ngừng hoạt động.**
- C. Export chuyển thành SMB.
- D. Client bắt buộc reboot.

### Câu 81
Tài liệu gợi ý xem thêm các option export bằng lệnh man nào?

- A. `man nfsd`
- **B. `man export`**
- C. `man exports.conf`
- D. `man nfs-common`

### Câu 82
Mặc định, vì lý do bảo mật, root user từ một NFS client thường được ánh xạ thành gì ở phía bên kia?

- A. `daemon`
- B. `guest`
- **C. `nobody`**
- D. `admin`

### Câu 83
`no_root_squash` có tác dụng gì?

- A. Chuyển root thành nobody.
- **B. Vô hiệu cơ chế root squash, cho phép root ở một đầu được đối xử như root ở đầu kia.**
- C. Chỉ cho root read-only.
- D. Vô hiệu export root.

### Câu 84
Vì sao `no_root_squash` cần dùng thận trọng?

- A. Vì làm NFS chậm hơn.
- **B. Vì root access từ hệ thống này sang hệ thống khác thường là rủi ro bảo mật.**
- C. Vì không tương thích Linux.
- D. Vì làm mất DNS.

### Câu 85
File nào được chương nhấn mạnh là cần thiết để mapping permissions giữa các node trong NFS setup?

- A. `/etc/passwd`
- B. `/etc/exports`
- **C. `/etc/idmapd.conf`**
- D. `/etc/samba/smb.conf`

### Câu 86
Vấn đề UID nào khiến `idmapd` hữu ích?

- A. Mọi user luôn có cùng UID trên mọi server nên không có vấn đề.
- **B. Cùng một user có thể có UID khác nhau trên hai server; NFS dùng UID để tham chiếu permission nên cần cơ chế mapping nhất quán.**
- C. UID chỉ tồn tại trên Windows.
- D. NFS không dùng UID/GID.

### Câu 87
Để `idmapd` hoạt động nhất quán, điều gì cần đồng bộ trên server và client?

- A. Cùng hostname tuyệt đối.
- B. Cùng IP address.
- **C. Cùng domain name trong cấu hình `idmapd`.**
- D. Cùng password root.

### Câu 88
Khi chỉnh `/etc/idmapd.conf`, thao tác nào phù hợp theo chương?

- A. Xóa toàn bộ file.
- **B. Tìm dòng Domain, bỏ comment và đổi domain cho khớp domain đang dùng trong network.**
- C. Đặt Domain bằng IP gateway.
- D. Chỉ chỉnh file trên server, không bao giờ chỉnh client.

### Câu 89
Tại sao phải chỉnh `/etc/idmapd.conf` trên các node client truy cập file server?

- A. Để client cài Samba.
- **B. Để chúng dùng cấu hình mapping nhất quán với server.**
- C. Để tạo export tự động.
- D. Để mở port CIFS.

### Câu 90
Sau khi `/etc/exports` và `/etc/idmapd.conf` đã được cấu hình, lệnh nào restart NFS service theo slide?

- **A. sudo systemctl restart nfs-kernel-server**
- B. sudo systemctl restart nfs-common
- C. sudo service nfs restart-all
- D. sudo systemctl restart exportfs

### Câu 91
Lệnh nào được dùng để kiểm tra trạng thái NFS daemon sau khi restart?

- A. `systemctl status smbd`
- **B. `systemctl status -l nfs-kernel-server`**
- C. `systemctl status nfs-common`
- D. `nfs --status`

### Câu 92
Trên Debian/Ubuntu NFS client, cần cài gói nào để access/mount exports?

- A. `nfs-kernel-server`
- **B. `nfs-common`**
- C. `cifs-utils`
- D. `sshfs`

### Câu 93
Lệnh cài NFS client package theo tài liệu là gì?

- **A. sudo apt install nfs-common**
- B. sudo apt install nfs-client-only
- C. sudo apt install nfs-kernel-server
- D. sudo apt install exportfs

### Câu 94
Khác với Samba trong ví dụ, NFS exports trên Linux file manager được mô tả như thế nào?

- A. Tự động hiện dưới mục Network.
- **B. Không nhất thiết hiện khi browse network; cần mount thủ công.**
- C. Chỉ hiện trên Windows Explorer.
- D. Chỉ mount bằng CIFS.

### Câu 95
Lệnh mount NFS export `documents` trong ví dụ là gì?

- **A. sudo mount myserver:/documents /mnt/documents**
- B. sudo mount myserver:/exports/documents /mnt/documents
- C. sudo mount //myserver/Documents /mnt/documents
- D. sudo sshfs myserver:/documents /mnt/documents

### Câu 96
Trong lệnh NFS mount, `myserver` có thể được thay bằng gì?

- A. Chỉ FQDN, không được IP.
- **B. Hostname hoặc IP address của server.**
- C. Tên user NFS.
- D. Workgroup Samba.

### Câu 97
Vì sao client mount `myserver:/documents` thay vì `myserver:/exports/documents`?

- A. Vì `/exports/documents` không tồn tại.
- **B. Vì `/exports` được khai báo là export root (`fsid=0`), nên các export bên dưới được tham chiếu tương đối từ root đó.**
- C. Vì NFS tự bỏ mọi thư mục đầu tiên.
- D. Vì `documents` là hostname.

### Câu 98
Vì sao export root `/exports` được cấu hình `ro` trong ví dụ?

- A. Vì mọi NFS share bắt buộc read-only.
- **B. Để không ai chỉnh trực tiếp base directory `/exports` trong khi các export con có thể có permission riêng.**
- C. Vì `fsid=0` chỉ hoạt động với `ro` trong mọi trường hợp.
- D. Vì root user không được phép đọc.

### Câu 99
Khi thêm export mới lúc đang có user kết nối, vì sao restart NFS không phải lựa chọn lý tưởng?

- A. Restart sẽ xóa `/etc/exports`.
- **B. Restart có thể làm gián đoạn các kết nối/phiên làm việc hiện tại.**
- C. Restart đổi UID user.
- D. Restart chuyển NFS thành read-only vĩnh viễn.

### Câu 100
Lệnh nào buộc NFS đọc lại `/etc/exports` và activate export mới mà không cần restart service?

- **A. sudo exportfs -a**
- B. sudo exports -r
- C. sudo nfs-refresh /etc/exports
- D. sudo systemctl reload smb

---

## Phần 4 - Transferring files with rsync

### Câu 101
`rsync` được mô tả chủ yếu là công cụ gì?

- A. Chỉ dùng để mount filesystem.
- **B. Công cụ copy dữ liệu linh hoạt từ nơi này sang nơi khác với nhiều tùy chọn kiểm soát cách transfer.**
- C. Chỉ quản lý user.
- D. Chỉ copy qua FTP.

### Câu 102
Use case nào được chương nêu cho `rsync`?

- A. Chỉ upload một file nhỏ.
- **B. Copy giữ permission, backup file bị thay thế và xây dựng incremental backup.**
- C. Chỉ tạo NFS export.
- D. Chỉ mount remote directory.

### Câu 103
Lệnh đầu tiên dùng `rsync` trong ví dụ là gì?

- **A. sudo rsync -r /home/myuser /backup**
- B. sudo rsync -a /backup /home/myuser
- C. rsync --delete /backup /home/myuser
- D. scp -r /home/myuser /backup

### Câu 104
Tùy chọn `-r` của `rsync` có nghĩa là gì?

- A. Read-only
- **B. Recursive, copy cả directories và nội dung bên trong.**
- C. Remote only
- D. Retry

### Câu 105
Vấn đề của ví dụ `sudo rsync -r /home/myuser /backup` là gì?

- A. Không copy được thư mục con.
- **B. Nội dung đích có thể trở thành owned by root và không giữ đầy đủ permission/metadata như mong muốn.**
- C. Xóa source sau khi copy.
- D. Chỉ copy symbolic links.

### Câu 106
Khi backup home directory, ngoài permission, metadata nào được slide nhấn mạnh nên giữ lại?

- A. Chỉ hostname.
- **B. Timestamps và càng nhiều metadata càng tốt.**
- C. Chỉ IP address.
- D. Workgroup.

### Câu 107
Tùy chọn nào thay cho `-r` để giữ nhiều metadata nhất và gần như tạo bản sao chính xác?

- A. `-v`
- **B. `-a` (archive)**
- C. `-b`
- D. `--delete`

### Câu 108
Lệnh archive-mode trong ví dụ là gì?

- **A. sudo rsync -a /home/myuser /backup**
- B. sudo rsync -r /backup /home/myuser
- C. sudo rsync -v /home/myuser /backup
- D. sudo rsync --archive-only /backup

### Câu 109
Sau khi dùng `-a`, thay đổi mong đợi ở `/backup` là gì?

- A. Tất cả file vẫn owned by root bắt buộc.
- **B. Permissions trong backup khớp source tốt hơn và timestamps cũng được giữ.**
- C. Chỉ filename được giữ.
- D. Mọi file bị nén gzip.

### Câu 110
Theo slide, `-a` là wrapper bao gồm nhóm option nào?

- A. `-rvzP`
- **B. `-rlptgoD`**
- C. `-abcdeF`
- D. `-rwxyz`

### Câu 111
Muốn quan sát chi tiết rsync đang làm gì trong lúc chạy, thêm option nào?

- A. `-q`
- **B. `-v`**
- C. `-r`
- D. `-b`

### Câu 112
Lệnh kết hợp archive + verbose trong ví dụ là gì?

- **A. sudo rsync -av /home/myuser /backup**
- B. sudo rsync -rv /backup /home/myuser
- C. sudo rsync -ab /home/myuser /backup
- D. sudo rsync -v --delete /backup

### Câu 113
`rsync` hỗ trợ giao thức nào mặc định để copy từ node này sang node khác trong ví dụ?

- A. FTP
- B. SMB
- **C. SSH**
- D. NFS only

### Câu 114
Cú pháp remote rsync nào đúng theo ví dụ?

- **A. sudo rsync -av /home/myuser admin@192.168.1.5:/backup**
- B. sudo rsync -av admin:/backup /home/myuser@192.168.1.5
- C. sudo rsync ssh://192.168.1.5 /home/myuser
- D. sudo rsync -av //192.168.1.5/backup /home/myuser

### Câu 115
`--delete` trong `rsync` có tác dụng gì?

- A. Xóa source sau transfer.
- **B. Đồng bộ hai directory bằng cách xóa ở target những file không còn tồn tại ở source.**
- C. Xóa mọi file trước khi copy.
- D. Chỉ xóa file zero-byte.

### Câu 116
Vì sao `--delete` được coi là potentially destructive?

- A. Vì luôn format filesystem.
- **B. Vì nó có thể xóa file ở target nếu file tương ứng không còn trong source.**
- C. Vì nó xóa user account.
- D. Vì tắt SSH.

### Câu 117
Lệnh minh họa đồng bộ source/target với xóa file thừa ở target là gì?

- **A. sudo rsync -av --delete /src /target**
- B. sudo rsync -av --remove-source-files /src /target
- C. sudo rsync -r /target /src
- D. sudo scp --delete /src /target

### Câu 118
Tùy chọn `-b` trong `rsync` được dùng để làm gì?

- A. Chạy background.
- **B. Backup file ở target sắp bị overwrite bằng cách đổi tên nó để vẫn giữ bản cũ.**
- C. Bật bandwidth limit.
- D. Chỉ copy binary files.

### Câu 119
Lệnh nào kết hợp archive, verbose, backup và delete theo ví dụ?

- **A. sudo rsync -avb --delete /src /target**
- B. sudo rsync -arb --purge /src /target
- C. sudo rsync -av --backup-only /src /target
- D. sudo scp -avb /src /target

### Câu 120
`--backup-dir=/backup/incremental` thay đổi hành vi của `-b` như thế nào?

- A. Không còn giữ file cũ.
- **B. File cũ bị thay thế được chuyển sang directory chỉ định thay vì chỉ đổi tên tại target.**
- C. Chuyển source sang backup-dir.
- D. Mount backup-dir qua NFS.

### Câu 121
Lệnh minh họa incremental backup với `--backup-dir` là gì?

- **A. sudo rsync -avb --delete --backup-dir=/backup/incremental /src /target**
- B. sudo rsync -av --backup-dir /src /target /backup/incremental
- C. sudo rsync -b /backup/incremental /src /target
- D. sudo rsync --delete /backup/incremental

### Câu 122
Tại sao kết hợp `-b` và `--backup-dir` có thể tạo incremental backup hiệu quả?

- A. Vì nó nén mọi file thành một archive duy nhất.
- **B. Vì mỗi file sắp bị thay thế ở target được giữ lại ở một directory backup riêng.**
- C. Vì nó copy toàn bộ filesystem ở mỗi lần chạy.
- D. Vì nó tạo snapshot LVM.

### Câu 123
Biến `CURDATE` trong ví dụ Bash được tạo để làm gì?

- A. Lưu IP của remote host.
- **B. Lưu ngày hiện tại để dùng làm tên thư mục incremental backup theo từng lần chạy.**
- C. Lưu username.
- D. Lưu checksum.

### Câu 124
Dòng tạo biến ngày trong ví dụ là gì?

- **A. CURDATE=$(date +%m-%d-%Y)**
- B. CURDATE=$(date +%Y/%m/%d)
- C. CURDATE=$(now)
- D. CURDATE=$(date +%H:%M)

### Câu 125
Sau khi tạo `CURDATE`, tài liệu làm gì tiếp theo?

- A. Xóa biến ngay.
- **B. `export $CURDATE` để biến có thể được dùng rộng hơn trong shell context của ví dụ.**
- C. Đổi UID của biến.
- D. Ghi biến vào `/etc/exports`.

### Câu 126
Ý tưởng chính của câu lệnh dùng `--backup-dir=/backup/incremental/$CURDATE` là gì?

- A. Mỗi ngày ghi đè cùng một thư mục.
- **B. Lưu các phiên bản file bị thay thế vào thư mục được phân tách theo ngày, giúp incremental backup có lịch sử rõ hơn.**
- C. Chỉ backup file tạo trong ngày.
- D. Xóa các phiên bản cũ ngay lập tức.

---

## Phần 5 - Transferring files with SCP

### Câu 127
SCP là viết tắt của gì trong nội dung chương?

- A. System Copy Protocol
- **B. Secure Copy**
- C. Samba Copy
- D. Secure CIFS Protocol

### Câu 128
SCP đi kèm với bộ phần mềm nào?

- A. Samba
- B. NFS
- **C. OpenSSH**
- D. rsync-daemon

### Câu 129
So với rsync, SCP được tài liệu đánh giá phù hợp hơn cho loại công việc nào?

- A. Đồng bộ phức tạp với incremental backup.
- **B. Các tác vụ one-off, gửi một file hoặc một số ít file.**
- C. Mount filesystem lâu dài.
- D. File server cho nhiều user.

### Câu 130
Lệnh nào dùng để kiểm tra binary `scp` có sẵn không?

- A. `where scp`
- **B. `which scp`**
- C. `locate --run scp`
- D. `systemctl status scp`

### Câu 131
Output được mong đợi từ `which scp` trong slide là gì?

- A. `/sbin/scp`
- **B. `/usr/bin/scp`**
- C. `/usr/local/sbin/scp`
- D. `/opt/ssh/scp`

### Câu 132
Nếu `which scp` không cho output, gói nào nên kiểm tra/cài đặt?

- A. `openssh-server` bắt buộc
- **B. `openssh-client`**
- C. `samba-client`
- D. `nfs-common`

### Câu 133
Cú pháp nào copy file local `myfile.txt` lên remote server 192.168.1.50 bằng user `jdoe` vào `/home/jdoe`?

- **A. scp myfile.txt jdoe@192.168.1.50:/home/jdoe**
- B. scp jdoe@192.168.1.50:/home/jdoe myfile.txt
- C. scp myfile.txt //192.168.1.50/home/jdoe
- D. scp /home/jdoe jdoe:myfile.txt

### Câu 134
Trong câu lệnh trên, file `myfile.txt` được giả định nằm ở đâu?

- A. `/home/jdoe` trên remote.
- **B. Current working directory của local machine.**
- C. `/tmp` trên local.
- D. `/root` trên remote.

### Câu 135
Lệnh nào copy `myfile.txt` từ home của `jdoe` trên remote về current working directory local?

- **A. scp jdoe@192.168.1.50:myfile.txt .**
- B. scp myfile.txt jdoe@192.168.1.50:.
- C. scp . jdoe@192.168.1.50:myfile.txt
- D. scp -r jdoe@192.168.1.50 /myfile.txt

### Câu 136
Dấu `.` ở cuối lệnh SCP phía trên có nghĩa gì?

- A. Home directory của remote user.
- **B. Current working directory của local machine.**
- C. Root filesystem.
- D. Parent directory.

### Câu 137
Muốn copy toàn bộ directory bằng SCP, cần option nào?

- A. `-a`
- **B. `-r`**
- C. `-b`
- D. `--delete`

### Câu 138
Lệnh nào copy recursive local directory `/home/jdoe/downloads/linux_iso` lên remote vào `downloads`?

- **A. scp -r /home/jdoe/downloads/linux_iso jdoe@192.168.1.50:downloads**
- B. scp /home/jdoe/downloads/linux_iso jdoe@192.168.1.50:/downloads
- C. scp -a linux_iso //192.168.1.50/downloads
- D. rsync -r linux_iso jdoe@192.168.1.50

### Câu 139
Trong ví dụ `... jdoe@192.168.1.50:downloads`, vì sao `downloads` được hiểu nằm dưới `/home/jdoe`?

- A. Vì SCP luôn prepend `/root`.
- **B. Vì target path là relative và SCP mặc định làm việc trong home directory của remote user.**
- C. Vì DNS ánh xạ `downloads` thành home.
- D. Vì `-r` tự tạo home.

### Câu 140
Muốn SCP dùng SSH port 2222, option nào đúng?

- A. `-p 2222`
- **B. `-P 2222`**
- C. `--ssh 2222`
- D. `-port=2222`

### Câu 141
Điểm dễ nhầm về option đổi port của SCP là gì?

- A. Dùng `-r` viết hoa.
- **B. Dùng `-P` viết hoa.**
- C. Dùng `-v` viết hoa.
- D. Không hỗ trợ đổi port.

### Câu 142
Lệnh nào đúng để recursive copy qua port 2222 theo ví dụ?

- **A. scp -P 2222 -r /home/jdoe/downloads/linux_iso jdoe@192.168.1.50:downloads**
- B. scp -p 2222 -r /home/jdoe/downloads/linux_iso jdoe@192.168.1.50:downloads
- C. scp --port 2222 /home/jdoe/downloads/linux_iso jdoe@192.168.1.50
- D. scp -rP /home/jdoe/downloads/linux_iso:2222 jdoe@192.168.1.50

### Câu 143
SCP hỗ trợ verbose mode bằng option nào?

- A. `-a`
- B. `-q`
- **C. `-v`**
- D. `-b`

### Câu 144
Lệnh nào vừa recursive vừa verbose trong ví dụ cuối phần SCP?

- **A. scp -rv /home/jdoe/downloads/linux_iso jdoe@192.168.1.50:downloads**
- B. scp -av /home/jdoe/downloads/linux_iso jdoe@192.168.1.50:downloads
- C. scp -bv /home/jdoe/downloads/linux_iso jdoe@192.168.1.50:downloads
- D. scp -Pv /home/jdoe/downloads/linux_iso jdoe@192.168.1.50:downloads

---

## Phần 6 - Mounting remote directories with SSHFS

### Câu 145
SSHFS là viết tắt của gì?

- A. Secure Shared File Server
- **B. SSH Filesystem**
- C. System Shell File Service
- D. Secure Samba File System

### Câu 146
Lý do SSHFS được giới thiệu sau Samba/NFS là gì?

- A. Nó thay thế hoàn toàn Samba/NFS trong mọi tình huống.
- **B. Samba/NFS có thể quá phức tạp nếu chỉ cần chia sẻ/mount tạm thời; SSHFS là lựa chọn on-demand đơn giản hơn.**
- C. Nó chỉ dùng cho Windows.
- D. Nó không cần SSH.

### Câu 147
SSHFS cho phép làm gì?

- A. Chỉ copy một file rồi ngắt kết nối.
- **B. Mount một remote directory lên local machine và thao tác với nó gần như một directory bình thường.**
- C. Tạo NFS export root.
- D. Thay đổi SMB workgroup.

### Câu 148
SSHFS mount tồn tại trong khoảng thời gian nào theo slide?

- A. Vĩnh viễn cho đến khi reboot server.
- **B. Trong thời gian SSH connection còn tồn tại; xong việc thì disconnect/unmount.**
- C. Chỉ 60 giây.
- D. Chỉ trong lúc `rsync` chạy.

### Câu 149
Nhược điểm hiệu năng chính của SSHFS so với NFS là gì?

- A. SSHFS không hỗ trợ file lớn.
- **B. Transfer có thể chậm hơn vì phải tính đến overhead mã hóa của SSH.**
- C. SSHFS không hỗ trợ directory.
- D. SSHFS chỉ chạy qua SMB.

### Câu 150
Rủi ro khi đang chỉnh sửa file trên SSHFS mà SSH connection bị rớt là gì?

- A. Samba service tự restart.
- **B. Có thể mất dữ liệu, vì vậy nên lưu công việc thường xuyên.**
- C. File tự chuyển read-only vĩnh viễn.
- D. Local filesystem bị format.

### Câu 151
Tại sao tài liệu nói SSHFS mang tính on-demand hơn là mount lâu dài?

- A. Vì SSHFS không thể mount directory.
- **B. Vì kết nối phụ thuộc SSH session và không được định hướng để luôn luôn giữ kết nối như một file-sharing service lâu dài.**
- C. Vì chỉ root mới dùng được.
- D. Vì không hỗ trợ encryption.

### Câu 152
Lệnh cài SSHFS là gì?

- **A. sudo apt install sshfs**
- B. sudo apt install fuse-only
- C. sudo apt install openssh-fs
- D. sudo apt install nfs-sshfs

### Câu 153
Điều kiện cơ bản để SSHFS hoạt động theo ví dụ là gì?

- A. Chỉ cần remote directory.
- **B. Có directory/local mount point trên máy local và directory trên remote Linux server mà user có thể truy cập qua SSH.**
- C. Phải chạy Samba daemon ở cả hai phía.
- D. Phải có NFS export trước.

### Câu 154
SSHFS có thể mount remote directory nào?

- A. Chỉ `/home`.
- **B. Bất kỳ directory nào trên remote server mà user bình thường có quyền truy cập qua SSH.**
- C. Chỉ `/exports`.
- D. Chỉ directory thuộc root.

### Câu 155
Lệnh SSHFS mẫu trong chương là gì?

- **A. sshfs myuser@192.168.1.50:/share/myfiles /mnt/myfiles**
- B. sshfs //192.168.1.50/share/myfiles /mnt/myfiles
- C. mount -t nfs myuser@192.168.1.50:/share/myfiles /mnt/myfiles
- D. scp -r myuser@192.168.1.50:/share/myfiles /mnt/myfiles

### Câu 156
Trong lệnh SSHFS mẫu, `/share/myfiles` là gì?

- A. Local mount point.
- **B. Remote directory trên server 192.168.1.50.**
- C. File cấu hình SSHFS.
- D. Backup directory local.

### Câu 157
Trong lệnh SSHFS mẫu, `/mnt/myfiles` là gì?

- A. Remote export root.
- **B. Local mount point.**
- C. Remote user's home.
- D. Samba share name.

### Câu 158
Sau khi SSHFS mount thành công, thay đổi file dưới local mount point sẽ thế nào?

- A. Chỉ thay đổi cache local.
- **B. Thay đổi được áp dụng vào target remote directory.**
- C. Bị bỏ qua cho đến reboot.
- D. Tự chuyển thành rsync job.

### Câu 159
SSHFS mount được mô tả hoạt động tương tự điều gì sau khi đã mount?

- A. Chỉ như symbolic link.
- **B. Tương tự một NFS hoặc Samba share đã mount cục bộ.**
- C. Như một tar archive.
- D. Như swap partition.

### Câu 160
Cách unmount SSHFS bằng quyền root theo phương pháp thông thường là gì?

- **A. sudo umount /mnt/myfiles**
- B. sudo unmount sshfs /mnt/myfiles
- C. sudo sshfs -u /mnt/myfiles
- D. sudo exportfs -u /mnt/myfiles

### Câu 161
Normal user có thể unmount SSHFS bằng lệnh nào mà không cần sudo/root?

- A. `umount -u /mnt/myfiles`
- **B. `fusermount -u /mnt/myfiles`**
- C. `sshfs --disconnect /mnt/myfiles`
- D. `mount -u /mnt/myfiles`

### Câu 162
`fusermount` thuộc suite nào?

- A. CIFS
- B. NFS utilities
- **C. Filesystem in Userspace (FUSE)**
- D. OpenSSL

### Câu 163
Mối quan hệ giữa SSHFS và FUSE được mô tả ra sao?

- A. SSHFS thay thế FUSE.
- **B. SSHFS sử dụng FUSE như virtual filesystem để hỗ trợ việc mount remote directory.**
- C. FUSE chỉ dùng cho Samba.
- D. Không liên quan.

### Câu 164
Trong `fusermount -u /mnt/myfiles`, `-u` có ý nghĩa gì?

- A. Update
- **B. Unmount theo cách bình thường.**
- C. User-only read mode
- D. Unlock

### Câu 165
Option `-z` của `fusermount` làm gì?

- A. Nén dữ liệu trước khi unmount.
- **B. Lazy unmount: unmount mà không cleanup open resources đầy đủ.**
- C. Chỉ unmount khi không có user.
- D. Zero-fill mount point.

### Câu 166
Tại sao `fusermount -z` chỉ nên là lựa chọn cuối cùng?

- A. Vì làm chậm mạng.
- **B. Vì lazy unmount có thể bỏ qua cleanup của open resources và có nguy cơ gây mất dữ liệu.**
- C. Vì sẽ xóa remote server.
- D. Vì luôn yêu cầu reboot.

### Câu 167
SSHFS có thể được khai báo trong file nào để đơn giản hóa việc mount lại sau này?

- A. `/etc/exports`
- B. `/etc/samba/smb.conf`
- **C. `/etc/fstab`**
- D. `/etc/ssh/sshd_config`

### Câu 168
Trong SSHFS fstab entry mẫu, filesystem type được dùng là gì?

- A. `ssh`
- **B. `fuse.sshfs`**
- C. `cifs`
- D. `nfs4`

### Câu 169
Bộ option nào xuất hiện trong SSHFS fstab example?

- A. `ro,auto,root,_netdev`
- **B. `rw,noauto,users,_netdev`**
- C. `rw,auto,nofail,guest`
- D. `defaults,exec,suid,nodev`

### Câu 170
`noauto` trong SSHFS fstab example có ý nghĩa gì?

- A. Tự động mount khi boot.
- **B. Hệ thống không tự cố mount SSHFS resource khi boot.**
- C. Không cho phép user mount.
- D. Không dùng network.

### Câu 171
Sau khi đã khai báo SSHFS resource trong `/etc/fstab`, lệnh nào đủ để mount theo local mount point?

- A. `sshfs /mnt/myfiles`
- **B. `mount /mnt/myfiles`**
- C. `exportfs -a /mnt/myfiles`
- D. `smbclient /mnt/myfiles`

### Câu 172
Vì sao `mount /mnt/myfiles` có thể đủ sau khi có fstab entry?

- A. Vì mount tự scan toàn bộ LAN.
- **B. Vì `/etc/fstab` đã chứa loại mount, remote location và user/account cần dùng.**
- C. Vì SSHFS không cần remote path.
- D. Vì NFS tự resolve SSHFS.

### Câu 173
Sau khi chạy `mount /mnt/myfiles`, user thường sẽ được hỏi gì nếu chưa cấu hình passwordless authentication?

- A. Samba password.
- **B. SSH password của user dùng để kết nối remote server.**
- C. Root password của local kernel.
- D. NFS export key.

### Câu 174
Use case cuối chương mà tác giả đánh giá SSHFS đặc biệt hữu ích là gì?

- A. Chia sẻ máy in Windows.
- **B. Làm việc với nhiều file trên remote server nhưng muốn mở/chỉnh sửa chúng bằng các ứng dụng cài trên local workstation.**
- C. Đồng bộ dữ liệu theo lịch cron bắt buộc.
- D. Tạo RAID qua mạng.

---

# Bộ câu hỏi tình huống tổng hợp

### Câu 175
Một công ty có máy Windows, Linux và macOS; muốn người dùng mở share từ Windows Explorer, nhưng không yêu cầu semantics permission UNIX quá chặt. Giải pháp hợp lý nhất theo chương là gì?

- **A. Samba**
- B. NFS
- C. SCP
- D. `rsync --delete`

### Câu 176
Bạn cần một share Linux-to-Linux, muốn dựa nhiều vào permission UNIX và kiểm soát network nào được phép truy cập. Nên ưu tiên gì?

- A. Samba với `public = yes`
- **B. NFS với `/etc/exports` và network restriction phù hợp.**
- C. SCP interactive.
- D. SSHFS bắt buộc với fstab.

### Câu 177
Bạn muốn share Samba chỉ cho đọc, nhưng ai cũng có thể truy cập share. Cặp option nào khớp nhất?

- A. `public = no`, `writable = no`
- **B. `public = yes`, `writable = no`**
- C. `public = yes`, `writable = yes`
- D. `security = domain`, `writable = yes`

### Câu 178
Bạn vừa sửa `smb.conf` và muốn bắt lỗi syntax trước khi start daemon. Thao tác đúng nhất là gì?

- A. `systemctl start smbd` trước, rồi xem lỗi sau.
- **B. Chạy `testparm`, review output, sau đó mới start `smbd` nếu không có lỗi.**
- C. Chạy `exportfs -a`.
- D. Chạy `rsync -av`.

### Câu 179
Một Samba share khai báo trong fstab với `noauto`. Sau reboot, user muốn mount. Lệnh tối giản là gì nếu mount point đã tồn tại?

- A. `sudo systemctl start smbd`
- **B. `sudo mount /mnt/documents`**
- C. `sudo testparm /mnt/documents`
- D. `sudo exportfs -a`

### Câu 180
Một NFS server vừa thêm export mới, đang có nhiều user sử dụng share hiện tại. Cách activate export mới ít gây gián đoạn nhất theo chương là gì?

- A. Reboot server.
- B. Restart `nfs-kernel-server` ngay.
- **C. Chạy `sudo exportfs -a` để reread `/etc/exports`.**
- D. Chạy `sudo mount -a` trên server.

### Câu 181
Bạn thấy cùng user `jdoe` có UID 1001 trên server A và 1007 trên server B, khiến permission NFS khó nhất quán. Thành phần nào cần được cấu hình thống nhất?

- A. `smb.conf`
- **B. `/etc/idmapd.conf` với cùng domain trên các node.**
- C. `/etc/fstab` với `cifs`.
- D. `scp -P`.

### Câu 182
Bạn muốn backup `/home/myuser` và giữ permission/timestamp. Lựa chọn nào tốt hơn `rsync -r`?

- A. `scp -r`
- **B. `rsync -a`**
- C. `rsync --delete` duy nhất
- D. `mount -t cifs`

### Câu 183
Bạn muốn target phản ánh chính xác source và tự xóa file ở target nếu file đó đã bị xóa khỏi source. Option nào then chốt?

- A. `-b`
- B. `-v`
- **C. `--delete`**
- D. `-P`

### Câu 184
Bạn muốn vẫn giữ phiên bản cũ của file mỗi khi rsync sắp overwrite nó ở target, nhưng không muốn chúng nằm lẫn trong target. Cấu hình nào phù hợp nhất?

- A. Chỉ `-r`.
- **B. Dùng `-b` kết hợp `--backup-dir=<directory>`.**
- C. Chỉ `--delete`.
- D. Dùng `scp -v`.

### Câu 185
Bạn chỉ cần gửi một file cấu hình duy nhất sang server khác một lần, không cần đồng bộ phức tạp. Công cụ nào phù hợp nhất theo chương?

- A. NFS
- B. Samba
- **C. SCP**
- D. `rsync --backup-dir` bắt buộc

### Câu 186
SSH server đích nghe trên port 2222 và bạn cần SCP cả một directory. Lệnh nào có cấu trúc option đúng nhất?

- A. `scp -p 2222 -r source user@host:dest`
- **B. `scp -P 2222 -r source user@host:dest`**
- C. `scp -r --ssh-port=2222 source user@host:dest`
- D. `scp -vP source user@host:2222/dest`

### Câu 187
Bạn cần truy cập tạm thời một remote project directory qua SSH và muốn dùng IDE local chỉnh trực tiếp file remote. Giải pháp phù hợp nhất là gì?

- A. Chỉ dùng SCP mỗi lần sửa.
- **B. SSHFS**
- C. NFS bắt buộc.
- D. Samba bắt buộc.

### Câu 188
Một normal user đã mount SSHFS và muốn unmount mà không có sudo. Lệnh đúng là gì?

- A. `sudo umount /mnt/myfiles`
- **B. `fusermount -u /mnt/myfiles`**
- C. `sshfs -P /mnt/myfiles`
- D. `exportfs -u /mnt/myfiles`

### Câu 189
Trong tình huống SSHFS mount bị treo và cần lazy unmount như biện pháp cuối cùng, option nào liên quan?

- A. `-u`
- **B. `-z`**
- C. `-a`
- D. `--delete`

### Câu 190
Bạn muốn SSHFS resource không tự mount lúc boot nhưng mọi lần sau chỉ cần `mount /mnt/myfiles`. Cách nào phù hợp nhất?

- A. Ghi vào `/etc/exports`.
- **B. Tạo `/etc/fstab` entry kiểu `fuse.sshfs` có `noauto`, sau đó dùng `mount /mnt/myfiles` khi cần.**
- C. Ghi vào `smb.conf`.
- D. Tạo cron job `scp`.

---

## Gợi ý cách ôn

- Làm một lượt **không nhìn đáp án**, che phần in đậm nếu cần.
- Lượt 2 tập trung vào **cú pháp lệnh**, đường dẫn cấu hình và ý nghĩa từng option.
- Lượt 3 tự giải thích vì sao ba đáp án sai là sai; đây là cách hiệu quả để tránh nhầm các cặp gần giống như `-P/-p`, `ro/rw`, `auto/noauto`, `-r/-a`, `-b/--backup-dir`.
- Các nhóm cần nhớ kỹ nhất: **Samba (`smb.conf`, `smbshared.conf`, CIFS mount)**, **NFS (`/etc/exports`, `idmapd`, `exportfs`)**, **rsync options**, **SCP syntax**, **SSHFS/FUSE**.
