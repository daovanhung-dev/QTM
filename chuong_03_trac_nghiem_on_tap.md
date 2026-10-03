# CHƯƠNG 3 — MANAGING STORAGE VOLUMES
## Bộ câu hỏi trắc nghiệm ôn tập tổng hợp

> **Nguồn:** Toàn bộ 104 trang của *Chuong 03.pdf*.
>
> **Mục tiêu:** Ôn tập toàn bộ kiến thức trong chương, mức độ từ hiểu bản chất đến vận dụng tình huống. Mỗi câu có **một đáp án đúng được in đậm**.

---

## Phần 1 — Understanding the Linux filesystem

### Câu 1
Trong chương, thuật ngữ **filesystem** trên Linux có thể được hiểu theo hai nghĩa nào?

- A. Kernel và shell
- **B. Cấu trúc thư mục mặc định và loại hệ thống tệp dùng khi định dạng volume (như ext4, XFS)**
- C. RAM và swap
- D. Physical volume và logical volume

### Câu 2
Điểm bắt đầu của cây hệ thống tệp Linux được biểu diễn bằng ký hiệu nào?

- A. `~`
- B. `.`
- **C. `/`**
- D. `//`

### Câu 3
Điều gì cho thấy `/home` nằm ở mức root của hệ thống tệp?

- A. Nó luôn chứa UID 0
- **B. Đường dẫn bắt đầu bằng dấu `/`**
- C. Nó chỉ có thể được root truy cập
- D. Nó nằm trong `/root`

### Câu 4
Filesystem Hierarchy Standard (FHS) chủ yếu quy định điều gì?

- A. Cách tạo inode
- B. Cách chia RAID
- **C. Tên thư mục, vị trí của chúng và mục đích sử dụng**
- D. Cách cấp phát swap

### Câu 5
Theo chương, các bản phân phối Linux có bắt buộc tuân thủ FHS tuyệt đối không?

- A. Có, nếu không kernel sẽ không boot
- B. Có, vì FHS là một phần của ext4
- **C. Không; một số distro có thể khác một vài định nghĩa nhưng phần lớn tuân theo khá sát**
- D. Không; Ubuntu hoàn toàn không dùng FHS

### Câu 6
Quy trình khái quát đúng khi thêm một volume mới vào Linux là gì?

- A. Mount → format → tạo partition
- **B. Format volume rồi mount (gắn) volume vào một thư mục trên filesystem**
- C. Tạo symlink → format → reboot
- D. Chỉ cần cắm disk, hệ thống tự dùng ngay

### Câu 7
Phát biểu nào đúng về mount point?

- A. Bắt buộc phải nằm trong `/mnt`
- B. Bắt buộc phải nằm trong `/media`
- **C. Có thể dùng tên và vị trí tùy ý, nhưng FHS đưa ra các quy ước nên cân nhắc tuân theo**
- D. Chỉ được mount ở root `/`

### Câu 8
Thư mục nào là home directory của các user thông thường?

- A. `/root`
- **B. `/home`**
- C. `/usr/home`
- D. `/users`

### Câu 9
Home directory riêng của tài khoản root là thư mục nào?

- A. `/home/root`
- **B. `/root`**
- C. `/usr/root`
- D. `/admin`

### Câu 10
Theo bảng FHS trong chương, thư mục phù hợp nhất cho removable media như USB flash drive là:

- A. `/opt`
- B. `/mnt`
- **C. `/media`**
- D. `/proc`

### Câu 11
Theo FHS trong chương, `/mnt` chủ yếu dùng cho:

- A. Các user command
- **B. Các volume dự kiến được mount tạm thời**
- C. Log file
- D. Kernel modules

### Câu 12
Thư mục `/opt` được mô tả là nơi dành cho:

- A. Log hệ thống
- B. Home của root
- **C. Các gói phần mềm bổ sung, ít phổ biến hơn**
- D. Thiết bị removable

### Câu 13
Theo bảng trong chương, `/bin` chứa chủ yếu:

- A. Library
- **B. Các user binary thiết yếu như `ls`, `cp`, ...**
- C. File log
- D. Mount point

### Câu 14
`/proc` được mô tả đúng nhất là:

- A. Một partition vật lý riêng
- B. Nơi chứa package cài thêm
- **C. Virtual filesystem cho các thành phần mức hệ điều hành**
- D. Thư mục home dự phòng

### Câu 15
Cặp ánh xạ nào đúng theo bảng FHS trong chương?

- A. `/usr/bin` → libraries; `/usr/lib` → user commands
- **B. `/usr/bin` → phần lớn user commands; `/usr/lib` → libraries**
- C. `/usr/bin` → logs; `/usr/lib` → removable media
- D. `/usr/bin` → swap; `/usr/lib` → kernel

### Câu 16
Thư mục nào chứa log files theo bảng trong chương?

- A. `/etc/log`
- B. `/usr/log`
- **C. `/var/log`**
- D. `/proc/log`

---

## Phần 2 — Inode, symbolic link và hard link

### Câu 17
Inode được mô tả đúng nhất là gì?

- A. Một bản sao đầy đủ nội dung file
- **B. Một data object chứa metadata của file trong filesystem**
- C. Một mount point
- D. Một logical volume

### Câu 18
Thông tin nào sau đây **không** được liệt kê trong chương là metadata lưu trong inode?

- A. Owner của file
- B. Permission
- C. Last modified date
- **D. Nội dung văn bản đầy đủ của file**

### Câu 19
Muốn xem inode number của file bằng `ls`, dùng tùy chọn nào?

- A. `ls -n`
- **B. `ls -i`**
- C. `ls -h`
- D. `ls -p`

### Câu 20
Có bao nhiêu loại link chính được trình bày trong chương?

- A. 1
- **B. 2: symbolic link và hard link**
- C. 3: symbolic, hard, soft-hard
- D. 4

### Câu 21
Lệnh nào tạo hard link `link_file1` trỏ đến dữ liệu của `file1.txt`?

- **A. `ln file1.txt link_file1`**
- B. `ln -s file1.txt link_file1`
- C. `link file1.txt link_file1`
- D. `cp -l link_file1 file1.txt`

### Câu 22
Sau khi tạo hard link đúng cách, điều gì đúng về inode của file gốc và hard link?

- A. Luôn khác nhau
- **B. Giống nhau**
- C. Một file không còn inode
- D. Chỉ root mới có inode

### Câu 23
Bản chất của hard link theo chương là:

- A. Một shortcut lưu path tuyệt đối
- **B. Một duplicate entry cùng tham chiếu đến cùng dữ liệu/inode**
- C. Một bản sao byte-for-byte độc lập
- D. Một mount point tạm

### Câu 24
Nếu di chuyển một hard link sang vị trí khác nhưng vẫn trong cùng filesystem thì:

- A. Link luôn hỏng
- **B. Link vẫn tham chiếu đúng dữ liệu**
- C. Inode tự đổi sang UUID
- D. File gốc bị xóa

### Câu 25
Hạn chế nào của hard link được nêu trong chương?

- A. Không thể trỏ tới file
- **B. Không thể tạo hard link đến directory**
- C. Không thể dùng với ext4
- D. Chỉ dùng được cho file rỗng

### Câu 26
Vì sao hard link không thể được di chuyển sang một filesystem khác theo giải thích của chương?

- A. Do thiếu quyền root
- **B. Mỗi filesystem có inode riêng, inode trên filesystem này không thể tham chiếu cùng đối tượng ở filesystem khác**
- C. Vì UUID bị thay đổi khi reboot
- D. Vì `ln` chỉ hoạt động trong `/home`

### Câu 27
Symbolic link còn được gọi là gì?

- A. Physical link
- **B. Soft link hoặc symlink**
- C. Device link
- D. LVM link

### Câu 28
Khác biệt cốt lõi giữa hard link và symbolic link là gì?

- A. Hard link dùng UUID, symlink dùng inode
- **B. Hard link tham chiếu inode; symbolic link tham chiếu một path cụ thể**
- C. Cả hai đều luôn có cùng inode
- D. Symbolic link chỉ dùng cho partition

### Câu 29
Lệnh nào tạo symbolic link `symbolic_file1` trỏ đến `file1.txt`?

- A. `ln file1.txt symbolic_file1`
- **B. `ln -s file1.txt symbolic_file1`**
- C. `ln -h file1.txt symbolic_file1`
- D. `symlink file1.txt symbolic_file1`

### Câu 30
Sau khi tạo symbolic link, inode của symlink so với inode của file gốc thường:

- A. Giống nhau tuyệt đối
- **B. Khác nhau**
- C. Không tồn tại
- D. Luôn bằng 0

### Câu 31
Phát biểu nào đúng nhất về symbolic link?

- A. Là clone đầy đủ của file gốc
- **B. Là một pointer tới path của file/directory đích**
- C. Luôn dùng chung inode với đích
- D. Không thể trỏ đến directory

### Câu 32
Nếu di chuyển file gốc sang path khác mà không cập nhật symlink, điều gì xảy ra?

- A. Symlink tự tìm inode mới
- B. Symlink trở thành hard link
- **C. Symlink trỏ tới path cũ không còn tồn tại và bị “broken”**
- D. File gốc tự trở lại vị trí cũ

### Câu 33
Lợi ích quan trọng của symbolic link so với hard link là:

- A. Có cùng inode với file gốc
- **B. Có thể trỏ qua filesystem khác và có thể trỏ đến directory**
- C. Không bao giờ bị hỏng
- D. Không cần filesystem

### Câu 34
Trong cùng filesystem, nếu di chuyển **một trong hai tên** của cùng hard-linked object sang vị trí khác, điều gì đúng?

- A. Dữ liệu bị nhân đôi
- B. Cả hai link hỏng
- **C. Hard link còn lại vẫn hoạt động vì các entry vẫn trỏ đến cùng inode/object**
- D. Inode bị xóa ngay

---

## Phần 3 — Viewing disk usage

### Câu 35
`df -h` phù hợp nhất cho mục đích nào?

- A. Tìm chính xác file nào lớn nhất
- **B. Xem tổng quan các filesystem/volume đã mount và dung lượng còn trống**
- C. Tạo partition mới
- D. Tạo inode

### Câu 36
Thông tin nào `df` cung cấp theo chương?

- A. Chỉ tên filesystem
- **B. Filesystem, size, used, available, used percentage và mount point**
- C. Chỉ dung lượng RAM
- D. UID và GID của từng file

### Câu 37
Tại sao `df -h` có thể báo còn nhiều dung lượng nhưng ứng dụng vẫn báo disk full?

- A. Vì CPU quá tải
- **B. Có thể filesystem đã cạn inode**
- C. Vì `/etc/fstab` luôn sai
- D. Vì symlink quá nhiều

### Câu 38
Lệnh nào dùng để xem mức sử dụng inode thay vì byte dung lượng?

- A. `du -i`
- **B. `df -i`**
- C. `ls -inode`
- D. `inode -h`

### Câu 39
Trong ví dụ của chương, root filesystem có tổng số inode là bao nhiêu?

- A. 74,922
- B. 1,235,798
- **C. 1,310,720**
- D. 12,820

### Câu 40
Trong tình huống inode cạn nhưng byte dung lượng vẫn còn, nguyên nhân cốt lõi thường là:

- A. Một file duy nhất quá lớn
- **B. Có quá nhiều file so với số inode mà filesystem có thể quản lý**
- C. Swap bị tắt
- D. RAID không hoạt động

### Câu 41
`du` chủ yếu giúp trả lời câu hỏi nào?

- A. Disk nào chưa partition?
- **B. Directory/file nào đang chiếm dung lượng**
- C. UUID nào đang được mount?
- D. RAID đang degraded hay không?

### Câu 42
Nếu chạy `du` không kèm đối số trong thư mục hiện tại, theo chương nó sẽ:

- A. Chỉ báo tổng dung lượng toàn ổ
- **B. Quét current working directory và liệt kê mức sử dụng của các mục cùng phần tổng kết**
- C. Format thư mục
- D. Chỉ hiển thị inode

### Câu 43
Trong lệnh `du -hsc *`, tùy chọn `-h` có ý nghĩa gì?

- A. Chỉ tính hidden file
- **B. Hiển thị dung lượng ở dạng human-readable như MB, GB**
- C. Chỉ hiển thị hard link
- D. Dừng sau 1 level

### Câu 44
Trong `du -hsc *`, `-s` dùng để:

- A. Sắp xếp kết quả
- **B. Cho summary**
- C. Chỉ tính symbolic link
- D. Hiển thị filesystem type

### Câu 45
Trong `du -hsc *`, `-c` dùng để:

- A. Xóa cache
- B. Chỉ tính current user
- **C. Hiển thị tổng cộng (total) dung lượng của các mục được quét**
- D. Kiểm tra CRC

### Câu 46
`ncdu` là viết tắt/ý nghĩa của tiện ích nào trong chương?

- A. Network CPU Disk Utility
- **B. NCurses Disk Usage**
- C. New Command Disk UUID
- D. Native Core Data Usage

### Câu 47
Ưu điểm thực tế của `ncdu` so với việc liên tục chạy lại `du` là gì?

- A. Tạo RAID tự động
- **B. Quét một lần rồi cho phép duyệt/drill-down kết quả theo giao diện menu**
- C. Tự format volume
- D. Tự mount tất cả disk

### Câu 48
Lệnh cài `ncdu` theo chương là:

- A. `sudo dpkg -i ncdu`
- **B. `sudo apt install ncdu`**
- C. `sudo snap install disk`
- D. `sudo yum install ncdu`

### Câu 49
Trong `ncdu`, thao tác nào đúng?

- A. `Esc` để xóa directory
- **B. Dùng phím lên/xuống để chọn, Enter để đi sâu, `q` để thoát**
- C. `r` để reboot
- D. `m` để mount volume

### Câu 50
Theo chương, phím `d` trong `ncdu` có thể dùng để:

- A. Hiển thị device UUID
- **B. Xóa item hoặc cả folder**
- C. Tạo directory
- D. Mount disk

### Câu 51
Vì sao đôi khi cần chạy `du`/`ncdu` với quyền root?

- A. Vì root làm kết quả nhỏ hơn
- **B. Vì các công cụ chỉ quét được những directory mà user gọi lệnh có quyền truy cập; root giúp có cái nhìn đầy đủ hơn**
- C. Vì không có quyền root thì inode không tồn tại
- D. Vì `du` luôn yêu cầu sudo

---

## Phần 4 — Adding additional storage volumes

### Câu 52
Khi gắn một disk mới vào server, Linux thường làm gì trước tiên?

- A. Tự format ext4
- **B. Phát hiện thiết bị và gán cho nó một device name**
- C. Tự thêm vào `/etc/fstab`
- D. Tự đưa vào LVM

### Câu 53
Quy ước tên device thường gặp cho disk vật lý theo chương là:

- A. `/dev/disk1`, `/dev/disk2`
- **B. `/dev/sda`, `/dev/sdb`, ...**
- C. `/disk/sda`
- D. `/mnt/sda`

### Câu 54
Với một số virtual disk, chương nêu các kiểu tên có thể khác như:

- A. `/dev/usb1`, `/dev/usb2`
- **B. `/dev/vda`, `/dev/xda`, ...**
- C. `/var/vda`
- D. `/proc/disk`

### Câu 55
Thông thường khi thêm disk mới, ký tự cuối của device name sẽ:

- A. Luôn là `0`
- **B. Tăng dần theo bảng chữ cái**
- C. Luôn là UUID
- D. Đổi ngẫu nhiên mỗi phút

### Câu 56
`sudo fdisk -l` trong ngữ cảnh này được dùng để:

- A. Mount disk
- **B. Liệt kê thông tin disk/partition để xác định device name và layout**
- C. Format disk thành ext4
- D. Tạo swap file

### Câu 57
So với `fdisk -l`, lợi ích được nêu của `lsblk` là:

- A. Tạo partition nhanh hơn
- **B. Không cần quyền root và output đơn giản hơn**
- C. Tự động format
- D. Chỉ chạy trên RAID

### Câu 58
Muốn quan sát kernel message liên tục trong lúc gắn disk để nhận ra device mới, dùng:

- A. `journalctl --boot`
- **B. `dmesg --follow`**
- C. `tail -f /etc/fstab`
- D. `lsblk --watch`

### Câu 59
Khi dùng `dmesg --follow` để theo dõi quá trình attach disk, có thể dừng bằng:

- A. `Ctrl + Z`
- **B. `Ctrl + C`**
- C. `Ctrl + D`
- D. `q` duy nhất

### Câu 60
Trong checklist thêm storage, sau khi biết dung lượng cần và device name, hai câu hỏi quan trọng tiếp theo là:

- A. User nào sẽ dùng sudo và hostname là gì
- **B. Format theo filesystem nào và mount ở đâu**
- C. Có bật SSH không và DNS nào dùng
- D. Có cài Samba và NFS không

### Câu 61
Theo chương, filesystem phổ biến nhất tại thời điểm tài liệu viết là:

- A. FAT32
- **B. ext4**
- C. NTFS
- D. ZFS

### Câu 62
Chương nêu filesystem nào như một lựa chọn khác cho một số workload?

- A. exFAT
- **B. XFS**
- C. HFS+
- D. ReFS

---

## Phần 5 — Partitioning and formatting volumes

### Câu 63
Bước đầu tiên trước khi partition một disk mới là:

- A. Chạy `mkfs` ngay
- **B. Xác định đúng device name bằng `lsblk` hoặc `sudo fdisk -l`**
- C. Thêm UUID vào fstab
- D. Tạo symlink đến disk

### Câu 64
Để mở `fdisk` thao tác trực tiếp trên `/dev/sdc`, dùng:

- A. `sudo fdisk -l /dev/sdc`
- **B. `sudo fdisk /dev/sdc`**
- C. `sudo fdisk --format /dev/sdc`
- D. `sudo mkfs /dev/sdc`

### Câu 65
Trong phiên tương tác `fdisk`, phím/lệnh nào được dùng trong ví dụ để tạo partition mới?

- A. `p`
- **B. `n`**
- C. `w`
- D. `d`

### Câu 66
Trong màn hình tạo partition của ví dụ, lựa chọn `p` biểu thị:

- A. Print
- **B. Primary partition**
- C. Parity
- D. Physical volume

### Câu 67
Điểm quan trọng về thay đổi trong `fdisk` trước khi ghi là:

- A. Mọi thay đổi được ghi ngay lập tức
- **B. Thay đổi chỉ nằm trong memory cho tới khi quyết định write**
- C. Luôn cần reboot trước khi ghi
- D. `fdisk` không thể xóa partition

### Câu 68
Trong `fdisk`, lệnh nào ghi partition table xuống disk và thoát theo ví dụ?

- A. `q`
- B. `p`
- **C. `w`**
- D. `x`

### Câu 69
Nếu muốn thoát `fdisk` mà **không lưu** thay đổi, menu help cho biết dùng:

- A. `w`
- **B. `q`**
- C. `g`
- D. `v`

### Câu 70
Sau khi tạo partition, lệnh nào được dùng trong chương để kiểm tra lại kết quả?

- A. `df -h`
- **B. `sudo fdisk -l`**
- C. `mount -a`
- D. `free -h`

### Câu 71
Cú pháp tổng quát được mô tả để format volume là:

- A. `format.<device> <filesystem>`
- **B. `mkfs.<filesystem-type> <target-device>`**
- C. `fdisk -f <filesystem>`
- D. `mount -t <filesystem> --format`

### Câu 72
Lệnh nào format `/dev/sdc1` thành ext4 theo chương?

- A. `sudo ext4 /dev/sdc1`
- **B. `sudo mkfs.ext4 /dev/sdc1`**
- C. `sudo fdisk.ext4 /dev/sdc1`
- D. `sudo mount.ext4 /dev/sdc1`

---

## Phần 6 — Mounting and unmounting volumes

### Câu 73
Lệnh `mount` được dùng để:

- A. Tạo partition
- **B. Gắn storage device hoặc network share vào một local directory**
- C. Tạo inode
- D. Kiểm tra RAID

### Câu 74
Theo nội dung chương, trước khi mount vào một directory, directory đó nên:

- A. Chứa ít nhất một file
- **B. Rỗng**
- C. Nằm trong `/root`
- D. Có UID 0

### Câu 75
Theo FHS được nêu trong chương, cặp mục đích nào đúng?

- A. `/mnt` cho removable media; `/media` cho temporary mount
- **B. `/mnt` cho filesystem mount tạm thời; `/media` cho removable media**
- C. Cả hai chỉ dành cho swap
- D. Cả hai chỉ dành cho RAID

### Câu 76
Trước khi mount vào `/mnt/vol1`, lệnh nào tạo mount point?

- A. `sudo touch /mnt/vol1`
- **B. `sudo mkdir /mnt/vol1`**
- C. `sudo mkfs /mnt/vol1`
- D. `sudo ln /mnt/vol1`

### Câu 77
Lệnh mount `/dev/sdc1` vào `/mnt/vol1` là:

- A. `sudo mount /mnt/vol1 /dev/sdc1`
- **B. `sudo mount /dev/sdc1 /mnt/vol1`**
- C. `sudo attach /dev/sdc1 /mnt/vol1`
- D. `sudo mount -i /mnt/vol1`

### Câu 78
Nếu muốn chỉ rõ ext4 khi mount theo ví dụ, lệnh phù hợp là:

- A. `sudo mount ext4 /dev/sdc1 /mnt/vol1`
- **B. `sudo mount /dev/sdc1 -t ext4 /mnt/vol1`**
- C. `sudo mkfs -t ext4 /mnt/vol1`
- D. `sudo fdisk -t ext4 /dev/sdc1`

### Câu 79
Một cách đơn giản để xác nhận volume đã mount là:

- A. Chỉ kiểm tra `/etc/passwd`
- **B. So sánh output `df -h` trước và sau khi mount**
- C. Chạy `swapon -a`
- D. Chạy `pvdisplay`

### Câu 80
Tên lệnh tháo mount trong Linux là:

- A. `unmount`
- **B. `umount`**
- C. `dismount`
- D. `mount -d`

### Câu 81
Lệnh tháo `/mnt/vol1` theo ví dụ là:

- A. `sudo unmount /mnt/vol1`
- **B. `sudo umount /mnt/vol1`**
- C. `sudo rm /mnt/vol1`
- D. `sudo eject /mnt/vol1`

### Câu 82
Nếu `umount` báo “device or resource busy”, nguyên nhân hợp lý nhất theo chương là:

- A. Filesystem chưa format
- **B. Volume đang được sử dụng**
- C. UUID quá dài
- D. Swap quá nhỏ

### Câu 83
Nhược điểm của mount thủ công là:

- A. Không thể đọc/ghi
- **B. Sau reboot volume không tự mount lại nếu không cấu hình persistent**
- C. Chỉ dùng được với ext4
- D. Không thể unmount

---

## Phần 7 — Understanding `/etc/fstab`

### Câu 84
Vai trò quan trọng của `/etc/fstab` là gì?

- A. Lưu password
- **B. Khai báo filesystem/volume cần mount, bao gồm các mount tự động khi boot**
- C. Lưu inode
- D. Quản lý process

### Câu 85
Vì sao sửa `/etc/fstab` cần đặc biệt cẩn thận?

- A. Vì nó chỉ ảnh hưởng shell prompt
- **B. Vì lỗi có thể khiến server không boot được, do file này còn liên quan tới main filesystem**
- C. Vì file tự xóa sau reboot
- D. Vì chỉ RAID mới đọc được

### Câu 86
Trong các ví dụ fstab, volume thường được nhận diện bằng gì thay vì tên `/dev/sdX`?

- A. PID
- B. GID
- **C. UUID (Universally Unique Identifier)**
- D. Hostname

### Câu 87
Lệnh nào liệt kê UUID của volume?

- A. `uuid -l`
- **B. `blkid`**
- C. `ls -uuid`
- D. `df --uuid`

### Câu 88
Cột thứ nhất của một dòng `/etc/fstab` chứa:

- A. Mount options
- **B. Device identifier, có thể là UUID hoặc label/device identifier**
- C. Filesystem type
- D. Pass order

### Câu 89
Cột thứ hai của fstab dùng để chỉ:

- A. Dump flag
- **B. Mount point/location**
- C. UUID
- D. Owner

### Câu 90
Cột thứ ba của fstab dùng cho:

- A. Backup schedule
- **B. Filesystem type như ext4 hoặc swap**
- C. Mount point
- D. RAID level

### Câu 91
Cột thứ tư của fstab là:

- A. UUID
- B. Filesystem type
- **C. Danh sách mount options, phân tách bằng dấu phẩy**
- D. Inode count

### Câu 92
Hai cột thứ năm và thứ sáu của fstab lần lượt là:

- A. owner và group
- **B. dump và pass**
- C. size và used
- D. UUID và mount point

### Câu 93
Ý nghĩa thực tế được nêu của trường `dump` là:

- A. Quy định journal mode
- **B. Có thể được backup utility dùng để xác định filesystem có nên backup hay không; thường để `0`**
- C. Tạo core dump khi boot
- D. Chỉ thứ tự fsck

### Câu 94
Trường `pass` trong fstab cho biết:

- A. Password mount
- **B. Thứ tự mà `fsck` kiểm tra các filesystem**
- C. Số lần retry mount
- D. Số inode cần cấp phát

### Câu 95
Bước đầu khi thêm một hard disk/virtual disk mới vào fstab là:

- A. Chạy `lvremove`
- **B. Dùng `blkid` để lấy UUID của volume**
- C. Tạo snapshot
- D. Xóa mount point

### Câu 96
Ví dụ tạo mount point mới trong chương là:

- A. `sudo mkdir /etc/extra_storage`
- **B. `sudo mkdir /mnt/extra_storage`**
- C. `sudo touch /mnt/extra_storage`
- D. `sudo mkfs /mnt/extra_storage`

### Câu 97
Lệnh mở fstab bằng nano là:

- A. `nano /etc/fdisk`
- **B. `sudo nano /etc/fstab`**
- C. `sudo nano /var/fstab`
- D. `sudo edit /etc/mount`

### Câu 98
Sau khi thêm entry fstab, chương minh họa kiểm tra mount tự động bằng cách:

- A. Tắt swap rồi chạy `df -i`
- **B. Reboot (`sudo reboot`) rồi dùng `mount` để kiểm tra**
- C. Xóa mount point rồi reboot
- D. Chạy `pvcreate`

### Câu 99
Trong mount options mặc định (`defaults`), `rw` có nghĩa là:

- A. Read only
- **B. Mount read/write**
- C. Rewind
- D. Rewrite UUID

### Câu 100
Trong `defaults`, `exec` có nghĩa là:

- A. Chỉ root được execute mount
- **B. Cho phép file trong volume được thực thi như chương trình**
- C. Tự động format khi boot
- D. Tự chạy fsck mỗi phút

### Câu 101
Trong `defaults`, `auto` có nghĩa là:

- A. Tự đổi filesystem type
- **B. Tự động mount device khi boot**
- C. Tự động tạo RAID
- D. Tự động resize LVM

### Câu 102
Trong `defaults`, `nouser` có nghĩa là:

- A. Không user nào được đọc file
- **B. Chỉ root có thể mount filesystem**
- C. Volume không có owner
- D. Xóa user khi unmount

### Câu 103
Trong `defaults`, `async` có nghĩa là:

- A. I/O luôn đồng bộ
- **B. Output tới device nên hoạt động asynchronous**
- C. Chỉ mount khi có mạng
- D. Chỉ dùng cho swap

---

## Phần 8 — Managing swap

### Câu 104
Swap được mô tả đúng nhất là:

- A. Một filesystem chỉ chứa log
- **B. Partition hoặc file hoạt động như RAM khi bộ nhớ server bị bão hòa**
- C. Một loại hard link
- D. Một RAID level

### Câu 105
Vì sao chương hy vọng server “properly managed” sẽ ít phải dùng swap?

- A. Swap nhanh hơn RAM
- **B. Swap nằm trên disk và chậm hơn RAM nhiều bậc**
- C. Swap không thể đọc được
- D. Swap chỉ dùng khi CPU hỏng

### Câu 106
Lý do vẫn nên có swap là:

- A. Để thay thế hoàn toàn RAM
- **B. Khi memory usage tăng đột biến, swap có thể giúp tránh server bị down**
- C. Để tăng số inode
- D. Để mount RAID

### Câu 107
Trong các phiên bản Ubuntu hiện đại theo chương, installer mặc định thường tạo:

- A. Swap partition cố định
- **B. Swap file thay vì swap partition**
- C. Không có swap dưới mọi hình thức
- D. Swap RAID

### Câu 108
Nếu cần tăng swap trong bối cảnh chương, cách được xem là dễ hơn và an toàn hơn là:

- A. Resize partition table trước
- **B. Xóa swap file cũ và tạo lại swap file lớn hơn**
- C. Tăng inode
- D. Thêm hard link vào swap

### Câu 109
Lệnh nào tìm swap được khai báo trong `/etc/fstab` và kích hoạt chúng?

- A. `mkswap -a`
- **B. `sudo swapon -a`**
- C. `swapmount -a`
- D. `mount -swap`

### Câu 110
Lệnh đối nghịch để deactivate/unmount swap theo chương là:

- A. `swapremove -a`
- **B. `swapoff -a`**
- C. `umount -swap`
- D. `mkswap -off`

### Câu 111
Lệnh ví dụ tạo file swap 4 GB là:

- A. `sudo dd 4G /swapfile`
- **B. `sudo fallocate -l 4G /swapfile`**
- C. `sudo mkfs.swap -l 4G /swapfile`
- D. `sudo truncate -s 4M /swapfile`

### Câu 112
Sau khi tạo `/swapfile`, bước chuẩn bị file thành swap là:

- A. `sudo mkfs.ext4 /swapfile`
- **B. `sudo mkswap /swapfile`**
- C. `sudo pvcreate /swapfile`
- D. `sudo fdisk /swapfile`

### Câu 113
Entry fstab mẫu cho swap file trong chương là:

- A. `/swapfile /mnt swap defaults 1 1`
- **B. `/swapfile none swap sw 0 0`**
- C. `UUID=/swapfile / swap auto 0 0`
- D. `/swapfile none ext4 rw 0 0`

---

## Phần 9 — Utilizing LVM volumes

### Câu 114
Lợi ích nổi bật của LVM được nhấn mạnh đầu phần là:

- A. Chỉ dùng được khi server tắt
- **B. Có thể resize filesystem/storage online mà không cần reboot server**
- C. Không cần filesystem
- D. Thay thế hoàn toàn backup

### Câu 115
Theo khuyến nghị trong chương, khi dựng virtual server, nên ưu tiên dùng:

- A. Chỉ raw partition
- **B. LVM cho storage volumes để dễ mở rộng về sau**
- C. Chỉ swap file
- D. Chỉ RAID hardware

### Câu 116
Ba khái niệm nền tảng của LVM là:

- A. RAID, swap, inode
- **B. Volume Group (VG), Physical Volume (PV), Logical Volume (LV)**
- C. ext4, XFS, NTFS
- D. PID, UID, GID

### Câu 117
Volume Group được mô tả gần đúng nhất là:

- A. Một file system duy nhất
- **B. Namespace/container cấp cao bao gồm các physical và logical volume thuộc LVM setup**
- C. Một hard link tới disk
- D. Một file swap

### Câu 118
Điều nào đúng về số lượng Volume Group trên một server?

- A. Chỉ được có một
- **B. Có thể có nhiều VG, mỗi VG có các disk/volume riêng**
- C. Mỗi server bắt buộc có đúng ba VG
- D. VG chỉ có trên RAID

### Câu 119
Physical Volume (PV) là:

- A. Mount point của logical volume
- **B. Physical hoặc virtual hard disk/block device là thành viên của một Volume Group**
- C. File cấu hình LVM
- D. Snapshot của LV

### Câu 120
Logical Volume (LV) giống partition ở điểm nào và khác ở điểm quan trọng nào?

- A. Không giống partition và không thể mount
- **B. Có thể dùng như partition, nhưng có thể trải rộng qua nhiều disk**
- C. Chỉ có thể nằm trên một disk duy nhất
- D. Không thể resize

### Câu 121
Trong ví dụ lý thuyết, ba disk 100 GB có thể được kết hợp thành một LV dung lượng xấp xỉ:

- A. 100 GB
- B. 200 GB
- **C. 300 GB**
- D. 1 TB

### Câu 122
Khi LV đầy, lợi ích của LVM là:

- A. Phải xóa toàn bộ filesystem
- **B. Có thể thêm disk mới vào cấu hình rồi mở rộng volume, trong khi user vẫn nhìn thấy một vùng storage duy nhất**
- C. Luôn phải reinstall Ubuntu
- D. Chỉ tăng được swap

### Câu 123
Lệnh kiểm tra package `lvm2` đã cài chưa trong ví dụ là:

- A. `apt status lvm2`
- **B. `dpkg -s lvm2 | grep status`**
- C. `lvm2 --check`
- D. `rpm -q lvm2`

### Câu 124
Nếu `lvm2` chưa cài, lệnh được dùng là:

- A. `sudo snap install lvm2`
- **B. `sudo apt install lvm2`**
- C. `sudo dpkg --create lvm2`
- D. `sudo yum install lvm2`

### Câu 125
Trước khi tạo PV, chương đề nghị kiểm kê disk bằng:

- A. `df -h`
- **B. `fdisk -l`**
- C. `swapon -a`
- D. `mount -a`

### Câu 126
Lệnh tạo `/dev/sdb` thành physical volume là:

- A. `sudo vgcreate /dev/sdb`
- **B. `sudo pvcreate /dev/sdb`**
- C. `sudo lvcreate /dev/sdb`
- D. `sudo mkfs.lvm /dev/sdb`

### Câu 127
Trong ví dụ bốn disk, các thiết bị được `pvcreate` lần lượt là:

- A. `/dev/sda` đến `/dev/sdd`
- **B. `/dev/sdb`, `/dev/sdc`, `/dev/sdd`, `/dev/sde`**
- C. `/dev/sdb1` đến `/dev/sdb4`
- D. `/dev/vda` đến `/dev/vdd`

### Câu 128
Lệnh hiển thị các physical volume và thông tin chi tiết của chúng là:

- A. `lvdisplay`
- B. `vgdisplay`
- **C. `pvdisplay`**
- D. `df -i`

### Câu 129
Lệnh tạo volume group `vg-test` từ `/dev/sdb` là:

- A. `sudo pvcreate vg-test /dev/sdb`
- **B. `sudo vgcreate vg-test /dev/sdb`**
- C. `sudo lvcreate vg-test /dev/sdb`
- D. `sudo vgextend vg-test /dev/sdb`

### Câu 130
Lệnh xem thông tin chi tiết của Volume Group là:

- A. `pvdisplay`
- **B. `vgdisplay`**
- C. `lvdisplay`
- D. `groupdisplay`

### Câu 131
Lệnh tạo logical volume tên `myvol1`, dung lượng 10 GB trong `vg-test` là:

- A. `sudo lvcreate -L myvol1 -n 10g vg-test`
- **B. `sudo lvcreate -n myvol1 -L 10g vg-test`**
- C. `sudo vgcreate -n myvol1 -L 10g vg-test`
- D. `sudo pvcreate -n myvol1 -L 10g vg-test`

### Câu 132
Lệnh xem thông tin của logical volume là:

- A. `pvdisplay`
- B. `vgdisplay`
- **C. `lvdisplay`**
- D. `lsvolume`

### Câu 133
Sau khi tạo LV, bước cần làm trước khi dùng như storage là:

- A. Tạo RAID bắt buộc
- **B. Format LV bằng filesystem, ví dụ `sudo mkfs.ext4 /dev/vg-test/myvol1`**
- C. Xóa VG
- D. Tắt swap

### Câu 134
Lệnh mount LV trong ví dụ là:

- A. `sudo mount /mnt/lvm/myvol1 /dev/vg-test/myvol1`
- **B. `sudo mount /dev/vg-test/myvol1 /mnt/lvm/myvol1`**
- C. `sudo vgmount vg-test/myvol1`
- D. `sudo lvm --mount myvol1`

### Câu 135
Sau khi mount LV, lệnh dùng để kiểm tra volume và kích thước là:

- A. `df -i`
- **B. `df -h`**
- C. `free -h`
- D. `swapon --show`

### Câu 136
Trong ví dụ, muốn mở rộng LV dùng **toàn bộ phần free còn lại của VG**, biểu thức quan trọng là:

- A. `+100%USED`
- **B. `+100%FREE`**
- C. `+ALLSWAP`
- D. `+MAXINODE`

### Câu 137
Sau khi `lvextend` làm LV lớn hơn, tại sao `df -h` có thể vẫn hiển thị kích thước cũ?

- A. Vì LV chưa có UUID
- **B. Vì logical volume đã lớn hơn nhưng filesystem ext4 bên trong chưa được resize**
- C. Vì `df` không hỗ trợ LVM
- D. Vì swap đang bật

### Câu 138
Lệnh được dùng để mở rộng ext4 filesystem sau khi mở rộng LV là:

- A. `mkfs.ext4`
- **B. `resize2fs`**
- C. `fdisk -r`
- D. `fsck -grow`

### Câu 139
Ví dụ đường dẫn mapper dùng với `resize2fs` là:

- A. `/dev/mapper/vg-test/myvol1`
- **B. `/dev/mapper/vg--test-myvol1`**
- C. `/mapper/vg-test-myvol1`
- D. `/dev/lvm/myvol1`

### Câu 140
Muốn thêm `/dev/sdc` vào Volume Group `vg-test`, dùng:

- A. `sudo lvextend vg-test /dev/sdc`
- **B. `sudo vgextend vg-test /dev/sdc`**
- C. `sudo pvextend vg-test /dev/sdc`
- D. `sudo vgcreate vg-test /dev/sdc`

### Câu 141
Trong ví dụ, sau khi thêm các PV `/dev/sdc`, `/dev/sdd`, `/dev/sde` vào `vg-test`, lệnh nào xác nhận các PV đã gắn với VG?

- A. `mount`
- **B. `pvdisplay`**
- C. `df -h`
- D. `blkid`

### Câu 142
Muốn tăng thêm đúng 10 GB cho `/dev/vg-test/myvol1`, cú pháp trong chương là:

- A. `sudo lvextend -l +10g /dev/vg-test/myvol1`
- **B. `sudo lvextend -L+10g /dev/vg-test/myvol1`**
- C. `sudo vgextend -L+10g /dev/vg-test/myvol1`
- D. `sudo resize2fs -L+10g /dev/vg-test/myvol1`

### Câu 143
Sau `lvextend -L+10g`, bước cuối để filesystem sử dụng phần dung lượng mới là:

- A. `pvdisplay`
- **B. `sudo resize2fs /dev/vg-test/myvol1`**
- C. `sudo mkswap /dev/vg-test/myvol1`
- D. `sudo reboot` bắt buộc

### Câu 144
LVM snapshot dùng để:

- A. Thay RAID
- **B. Chụp trạng thái logical volume tại một thời điểm để có thể mount/kiểm tra và phục hồi về snapshot khi cần**
- C. Tăng inode tự động
- D. Format disk

### Câu 145
Điều kiện cần được nêu để tạo LVM snapshot là:

- A. Phải có RAID 5
- **B. Volume Group phải còn unallocated space**
- C. Swap phải tắt
- D. Filesystem phải là XFS duy nhất

### Câu 146
Vì sao snapshot LVM không nên được xem là backup thực sự?

- A. Vì snapshot không lưu metadata
- **B. Vì nó vẫn nằm trên cùng server; backup nên được lưu ngoài server, tốt nhất off-site**
- C. Vì snapshot luôn chỉ đọc
- D. Vì snapshot không thể mount

### Câu 147
Rủi ro nếu snapshot dùng hết vùng space được cấp là:

- A. VG tự tăng dung lượng vô hạn
- **B. Snapshot có thể bị corrupt và ngừng hoạt động**
- C. Kernel luôn panic ngay
- D. Tất cả hard link bị xóa

### Câu 148
Theo cơ chế được mô tả, ngay sau khi snapshot được tạo:

- A. Nó sao chép ngay toàn bộ LV nên chiếm đúng bằng dung lượng LV
- **B. Ban đầu gần như chưa tiêu thụ space cho dữ liệu; khi block gốc thay đổi, block cũ được copy vào snapshot để giữ trạng thái trước đó**
- C. Nó đổi inode của mọi file
- D. Nó unmount LV gốc

### Câu 149
Lệnh tạo snapshot tên `mysnapshot`, dung lượng 4 GB từ `vg-test/myvol1` là:

- A. `sudo lvcreate -n mysnapshot vg-test/myvol1`
- **B. `sudo lvcreate -s -n mysnapshot -L 4g vg-test/myvol1`**
- C. `sudo snapshot -L 4g myvol1`
- D. `sudo vgcreate -s mysnapshot myvol1`

### Câu 150
Một lợi ích của việc snapshot được tạo như một logical volume mới là:

- A. Không thể mount
- **B. Có thể mount như LV bình thường, ví dụ để lấy lại một file riêng lẻ**
- C. Chỉ dùng được để resize VG
- D. Luôn tự merge ngay

### Câu 151
Lệnh merge snapshot `mysnapshot` về lại volume theo ví dụ là:

- A. `sudo lvmerge vg-test/mysnapshot`
- **B. `sudo lvconvert --merge vg-test/mysnapshot`**
- C. `sudo vgmerge --snapshot mysnapshot`
- D. `sudo pvconvert --merge mysnapshot`

### Câu 152
Lệnh xóa logical volume `myvol1` thuộc `vg-test` là:

- A. `sudo vgremove vg-test/myvol1`
- **B. `sudo lvremove vg-test/myvol1`**
- C. `sudo pvremove vg-test/myvol1`
- D. `sudo rm /dev/vg-test/myvol1`

### Câu 153
Lệnh xóa toàn bộ Volume Group `vg-test` là:

- A. `sudo lvremove vg-test`
- **B. `sudo vgremove vg-test`**
- C. `sudo pvremove vg-test`
- D. `sudo lvm --delete-all`

---

## Phần 10 — Understanding RAID

### Câu 154
Thông điệp nền tảng mở đầu phần RAID là:

- A. Disk hiện đại không bao giờ hỏng
- **B. Disk rồi sẽ hỏng; cần backup và disaster recovery để chuẩn bị cho tình huống đó**
- C. Chỉ SSD mới hỏng
- D. RAID thay thế mọi loại backup

### Câu 155
RAID trong chương được mở rộng là:

- A. Rapid Array of Integrated Drives
- **B. Redundant Array of Inexpensive Disks**
- C. Remote Access Integrated Disk
- D. Reliable Allocation of Indexed Data

### Câu 156
Mục tiêu cơ bản của RAID được mô tả là:

- A. Làm disk không bao giờ hỏng
- **B. Khi một disk hỏng, hệ thống vẫn có thể tiếp tục và không mất dữ liệu trong điều kiện RAID phù hợp, miễn thay disk trong thời gian hợp lý**
- C. Thay thế filesystem
- D. Tăng số inode vô hạn

### Câu 157
Phát biểu nào đúng về RAID và backup theo chương?

- A. RAID chính là backup
- **B. RAID không phải backup; nó là một safety net khi mất disk**
- C. Có RAID thì không cần disaster recovery
- D. Backup chỉ dùng cho software RAID

### Câu 158
Hai loại RAID chính được nêu là:

- A. Local và remote
- **B. Hardware RAID và software RAID**
- C. ext4 RAID và XFS RAID
- D. Static và dynamic RAID

### Câu 159
Trong hardware RAID, hệ điều hành nhìn thấy storage như thế nào?

- A. Luôn thấy từng disk riêng lẻ
- **B. OS gần như không biết RAID tồn tại; controller card trừu tượng hóa layout và OS thường chỉ thấy một disk**
- C. Chỉ thấy swap
- D. Chỉ thấy logical volume LVM

### Câu 160
Trong software RAID:

- A. RAID hoàn toàn nằm trong controller card
- **B. OS quản lý RAID configuration và nhìn thấy các disk**
- C. OS chỉ thấy một disk duy nhất
- D. Không thể giám sát từ Linux

### Câu 161
Theo mẹo kiểm tra nhanh trong chương, nếu server đã cấu hình RAID và `sudo fdisk -l` chỉ thấy **một disk**, khả năng cao đó là:

- A. Software RAID
- **B. Hardware RAID**
- C. LVM snapshot
- D. Swap RAID

### Câu 162
Nếu `sudo fdisk -l` hiển thị nhiều disk trong một hệ thống RAID đã cấu hình, theo chương khả năng cao là:

- A. Hardware RAID
- **B. Software RAID**
- C. Không có RAID
- D. Chỉ có swap

### Câu 163
Linux software RAID implementation được gọi là:

- A. LVMRAID
- **B. MDRAID**
- C. SWAPRAID
- D. FHSRAID

### Câu 164
Công cụ dòng lệnh dùng để quản lý MDRAID là:

- A. `raidctl`
- **B. `mdadm`**
- C. `lvm2`
- D. `fdisk-md`

### Câu 165
Theo tài liệu, `mdadm` được giải thích là viết tắt của:

- A. Multi Device Advanced RAID Manager
- **B. Multiple Disk And Disk Administration**
- C. Managed Disk Array Device Module
- D. Main Disk Administration Manager

### Câu 166
Một lợi ích vận hành của `mdadm` được nêu là:

- A. Không thể query trạng thái array
- **B. Có thể query trạng thái RAID array và viết script kiểm tra định kỳ để cảnh báo failure**
- C. Tự tạo backup off-site
- D. Tự tạo swap file

### Câu 167
Tác giả thiên về software RAID trên Linux một phần vì:

- A. Hardware RAID không có controller
- **B. Native Linux tools được xem là đáng tin cậy để quản lý/giám sát và software RAID rất phổ biến trên Linux**
- C. Software RAID luôn nhanh hơn trong mọi tình huống
- D. Software RAID không cần disk thật

### Câu 168
Theo chương, thời điểm ưu tiên để triển khai MDRAID là:

- A. Sau khi server chạy production nhiều năm
- **B. Ngay từ đầu, trong quá trình cài Ubuntu**
- C. Chỉ sau khi disk đầu tiên hỏng
- D. Sau khi xóa toàn bộ filesystem

### Câu 169
Để thiết lập MDRAID theo nội dung chương, cần lưu ý gì về installer?

- A. Default Ubuntu installer luôn hỗ trợ tính năng này đầy đủ theo tài liệu
- **B. Cần dùng alternative installer vì tính năng này không có trong default Ubuntu installer được tài liệu mô tả**
- C. Chỉ Windows installer hỗ trợ
- D. Không cần installer

---

# Bài tổng hợp tình huống

## Câu 170
Một server báo “disk full”, nhưng `df -h` cho thấy còn 40% dung lượng trống. Bước kiểm tra phù hợp nhất theo chương là:

- A. Chạy `mkswap`
- **B. Chạy `df -i` để kiểm tra inode usage**
- C. Xóa `/etc/fstab`
- D. Tạo RAID

### Câu 171
Bạn cần tạo một alias tới file nhưng alias phải tiếp tục hoạt động nếu tên file gốc bị đổi vị trí trong **cùng filesystem**. Lựa chọn phù hợp hơn là:

- A. Symbolic link
- **B. Hard link**
- C. Swap file
- D. LVM snapshot

### Câu 172
Bạn cần tạo link tới một directory nằm trên filesystem khác. Lựa chọn phù hợp là:

- A. Hard link
- **B. Symbolic link**
- C. UUID link
- D. RAID link

### Câu 173
Bạn vừa thêm `/dev/sdc1`, format ext4 và mount thủ công. Sau reboot volume biến mất khỏi mount point. Nguyên nhân phù hợp nhất là:

- A. ext4 không hỗ trợ reboot
- **B. Chưa tạo entry persistent trong `/etc/fstab`**
- C. Chưa tạo inode
- D. Swap đang bật

### Câu 174
Bạn mở rộng LV từ 10 GB lên 20 GB, `lvextend` báo thành công nhưng `df -h` vẫn hiển thị gần 10 GB. Thao tác tiếp theo là:

- A. `vgremove`
- **B. Chạy `resize2fs` trên filesystem của LV**
- C. `mkswap`
- D. `fdisk -w`

### Câu 175
Bạn cần thêm dung lượng cho `vg-test` từ một disk đã được chuẩn bị làm PV là `/dev/sdc`. Lệnh phù hợp là:

- A. `lvextend vg-test /dev/sdc`
- **B. `vgextend vg-test /dev/sdc`**
- C. `mkfs.ext4 vg-test /dev/sdc`
- D. `mount /dev/sdc vg-test`

### Câu 176
Bạn muốn thử nghiệm thay đổi nguy hiểm trên một LV và có thể quay lại trạng thái trước đó, nhưng không coi đây là backup off-site. Tính năng phù hợp nhất là:

- A. Hard link
- **B. LVM snapshot**
- C. Swap partition
- D. `/proc`

### Câu 177
Một snapshot LVM bắt đầu tiêu thụ hết phần unallocated space đã dành cho nó. Rủi ro chính là:

- A. `df -h` tự xóa filesystem
- **B. Snapshot có thể bị corrupt và ngừng hoạt động**
- C. RAID tự chuyển sang hardware RAID
- D. Kernel tự tạo swap mới

### Câu 178
Bạn muốn cấu hình volume tự mount khi boot với quyền read/write, cho phép execute, mount tự động, chỉ root được mount và I/O async. Cách ngắn gọn nhất trong fstab là dùng:

- A. `safe`
- **B. `defaults`**
- C. `lvm`
- D. `bootall`

### Câu 179
Server memory đột ngột tăng rất cao. Swap có thể giúp ích, nhưng lý do không nên xem swap như RAM chính là:

- A. Swap không lưu được dữ liệu
- **B. Swap nằm trên disk và chậm hơn RAM rất nhiều**
- C. Swap chỉ dùng cho RAID
- D. Swap làm mất inode

### Câu 180
Một hệ thống RAID đã cấu hình, `fdisk -l` chỉ hiển thị một disk logic mặc dù thực tế có nhiều ổ vật lý gắn vào controller. Đây phù hợp nhất với:

- A. Software RAID
- **B. Hardware RAID**
- C. LVM snapshot
- D. Hard link storage

---

## Checklist kiến thức đã bao phủ

- Linux filesystem, root `/`, FHS và các thư mục quan trọng.
- Inode, hard link, symbolic link và hành vi khi di chuyển file.
- `df -h`, `df -i`, `du`, `du -hsc *`, `ncdu`.
- Device naming, `fdisk -l`, `lsblk`, `dmesg --follow`.
- Partition bằng `fdisk`, format bằng `mkfs.ext4`.
- `mount`, `umount`, `/mnt`, `/media`, kiểm tra bằng `df -h`.
- `/etc/fstab`, UUID, `blkid`, 6 trường cấu hình, `defaults`.
- Swap partition/swap file, `fallocate`, `mkswap`, `swapon`, `swapoff`.
- LVM: PV, VG, LV; `pvcreate`, `vgcreate`, `lvcreate`, `*display`, mở rộng volume/filesystem, snapshot, merge, remove.
- RAID: hardware/software RAID, MDRAID, `mdadm`, giám sát và thời điểm triển khai.

---

> **Gợi ý ôn tập:** Lần 1 đọc có đáp án in đậm. Lần 2 có thể tìm/thay Markdown `**` để ẩn phần in đậm và tự làm lại toàn bộ 180 câu.
