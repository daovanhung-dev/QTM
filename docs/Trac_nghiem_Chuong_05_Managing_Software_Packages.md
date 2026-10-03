# Bộ câu hỏi trắc nghiệm ôn tập - Chương 5: Managing Software Packages

> Nguồn: **Chương 05 - Managing Software Packages** (68 trang). Bộ câu hỏi bám sát nội dung trong chương, bao phủ toàn bộ 9 phần và được thiết kế ở mức **trung bình-khá**, tập trung vào phân biệt khái niệm, lệnh, luồng xử lý và tình huống thực tế.

> **Quy ước:** Đáp án đúng được **in đậm** ngay trong từng câu. Một số lệnh/phiên bản Ubuntu trong câu hỏi được giữ nguyên theo tài liệu gốc để phục vụ ôn tập đúng chương.

---

## I. Hiểu về quản lý gói Linux

### Câu 1. Theo chương, hệ thống quản lý gói trên Linux đã xuất hiện từ khi nào và được phổ biến trước tiên bởi những hệ nào?

A. Từ thập niên 1980, bởi Ubuntu rồi Fedora
**B. Từ thập niên 1990, bởi Debian rồi Red Hat**
C. Từ năm 2004, bởi Ubuntu rồi Debian
D. Từ thập niên 2000, bởi Red Hat rồi Debian

### Câu 2. Một Ubuntu Server thường lấy gói phần mềm từ đâu?

A. Một máy chủ trung tâm duy nhất của Canonical
**B. Các mirror phân bố theo khu vực địa lý, thường ưu tiên mirror gần**
C. GitHub Releases của từng dự án
D. Chỉ từ đĩa cài đặt ban đầu

### Câu 3. Vì sao hệ thống quản lý gói phải xử lý dependency?

**A. Vì một gói thường cần các gói khác để hoạt động**
B. Vì mỗi gói chỉ chạy được trên một CPU cụ thể
C. Vì mọi gói Ubuntu đều là Snap
D. Vì dependency chỉ dùng để kiểm tra chữ ký GPG

### Câu 4. Nhận định nào đúng theo tài liệu về Ubuntu và dependency resolution?

A. Ubuntu không hỗ trợ dependency resolution
B. Chỉ Red Hat có dependency resolution
**C. Ubuntu có dependency resolution và thừa hưởng nền tảng từ Debian**
D. Dependency luôn phải cài thủ công

### Câu 5. Package maintainer có vai trò nào phù hợp nhất?

A. Chỉ tải gói xuống mirror
**B. Chịu trách nhiệm một hoặc nhiều gói, gửi phiên bản mới để phê duyệt và phân phối**
C. Chỉ kiểm thử kernel
D. Chỉ quản lý PPA cá nhân

### Câu 6. Một security update chủ yếu nhằm mục đích gì?

A. Thêm giao diện mới
B. Đổi định dạng gói
**C. Khắc phục lỗ hổng bảo mật**
D. Chuyển Debian package sang Snap

### Câu 7. Theo chương, đặc điểm mã nguồn mở của phần lớn gói Ubuntu hỗ trợ quy trình vá bảo mật như thế nào?

A. Không ai ngoài Canonical được xem mã nguồn
**B. Mọi người có thể xem mã nguồn, phát hiện và báo lỗi; maintainer xem xét rồi phát hành bản sửa**
C. Mã nguồn mở khiến không cần security update
D. Mọi lỗi được sửa tự động không cần maintainer

### Câu 8. Feature update khác security update chủ yếu ở điểm nào?

A. Feature update chỉ áp dụng cho kernel
**B. Feature update đưa tính năng mới và không nhất thiết gắn với lỗ hổng bảo mật**
C. Feature update luôn bắt buộc
D. Feature update chỉ tồn tại với Snap

### Câu 9. Vì sao Ubuntu thường không đưa các phiên bản gói thay đổi quá lớn vào cùng một release hiện tại?

A. Để giảm dung lượng mirror
**B. Để tránh thay đổi quá nhiều gây mất ổn định**
C. Vì APT không hỗ trợ phiên bản mới
D. Vì mọi phiên bản mới phải chờ LTS

### Câu 10. Theo tài liệu, chu kỳ phát hành Ubuntu được nhắc tới là bao lâu?

A. 3 tháng
**B. 6 tháng**
C. 12 tháng
D. 24 tháng

### Câu 11. Trong vai trò quản trị viên server, loại cập nhật nào được chương nhấn mạnh là quan trọng nhất?

A. Theme update
B. Feature update
**C. Security update**
D. Snap refresh

### Câu 12. Ưu điểm thực tế quan trọng của package management trên Ubuntu là gì?

**A. Cài một gói có thể kéo theo dependency cần thiết và phần lớn phần mềm có thể lấy từ repository**
B. Mọi gói đều chạy không cần dependency
C. Không bao giờ cần cập nhật package index
D. Không cần quyền quản trị khi cài phần mềm

---

## II. Hardware Enablement (HWE)

### Câu 13. Vấn đề phần cứng nào HWE hướng tới giải quyết?

A. Ổ đĩa không có phân vùng swap
**B. Phần cứng mới cần driver/kernel mới hơn trong khi distro hiện tại dùng kernel cũ**
C. Package name khác giữa các distro
D. PPA bị mất maintainer

### Câu 14. Theo tài liệu, driver phần cứng trên Linux thường được tích hợp ở đâu?

A. Trong trình duyệt
**B. Trong Linux kernel**
C. Trong /etc/apt/sources.list
D. Trong PPA

### Câu 15. HWE stack được mô tả là tính năng dành riêng cho loại release nào?

A. Daily build
B. Non-LTS
**C. LTS**
D. Chỉ desktop beta

### Câu 16. Một HWE update thường bao gồm gì?

A. Chỉ firmware BIOS
**B. Kernel mới và thường thêm phần mềm/driver cập nhật cho phần cứng mới**
C. Chỉ security patch cho APT
D. Chỉ Snap runtime

### Câu 17. Lợi ích chính của HWE trên LTS là gì?

A. Biến LTS thành rolling release
**B. Giữ LTS nhưng tận dụng driver/kernel mới hơn từ các release mới**
C. Loại bỏ hoàn toàn kernel cũ
D. Bắt buộc cài lại hệ điều hành

### Câu 18. Trên Ubuntu Server, việc nhận HWE update theo chương là gì?

A. Bắt buộc
**B. Tùy chọn, người quản trị quyết định opt in**
C. Chỉ do mirror quyết định
D. Chỉ bật khi dùng Snap

### Câu 19. Nếu KHÔNG opt in HWE, điều gì được tài liệu mô tả?

A. Kernel luôn nhảy lên bản mới nhất
**B. Hardware enablement nhìn chung giữ như lúc LTS được phát hành; kernel liên quan vẫn nhận security update**
C. Không nhận bất kỳ security update nào
D. Server tự động đổi sang non-LTS

### Câu 20. Khi nào tài liệu cho rằng thường có lý do hợp lý để cài HWE stack mới?

A. Mỗi tuần
**B. Khi vừa thêm phần cứng mới cần kernel/driver mới**
C. Ngay sau mọi apt update
D. Khi muốn xóa orphan package

### Câu 21. Nếu server đang hoạt động tốt và không thêm phần cứng mới, tài liệu khuyến nghị thế nào với HWE?

A. Nên cài ngay
**B. Thường không có lý do để cài HWE stack mới**
C. Phải chuyển sang Snap
D. Phải cài PPA

### Câu 22. Có mấy cách chính để opt in HWE được nêu trong chương?

A. 1
**B. 2**
C. 3
D. 4

### Câu 23. Hai cách opt in HWE được nêu là gì?

A. Bật trong BIOS hoặc dùng PPA
**B. Chọn HWE khi cài Ubuntu Server hoặc cài thủ công các package cần thiết sau đó**
C. Dùng snap refresh hoặc apt autoremove
D. Dùng dpkg hoặc dselect

### Câu 24. Lệnh ví dụ để chuyển Ubuntu 16.04 sang HWE kernel trong tài liệu là lệnh nào?

A. sudo apt install linux-generic
**B. sudo apt install --install-recommends linux-generic-hwe-16.04**
C. sudo snap install linux-generic-hwe-16.04
D. sudo apt-get dselect-upgrade

---

## III. Debian package và Snap package

### Câu 25. Xu hướng định dạng gói đa distro được chương nhắc tới gồm những ứng viên nào?

A. RPM, MSI, APK
**B. Flatpak, AppImage, Snap**
C. DEB, EXE, DMG
D. Docker, LXC, KVM

### Câu 26. Định dạng gói chính truyền thống của Ubuntu theo chương là gì?

A. .rpm
**B. .deb**
C. .snap
D. .appimage

### Câu 27. Vì sao chúng được gọi là Debian packages trên Ubuntu?

**A. Ubuntu được xây dựng từ nguồn Debian và dùng cùng hệ công cụ quản lý gói**
B. Vì mọi gói do Debian Foundation ký
C. Vì Ubuntu không có repository riêng
D. Vì Snap dùng nội bộ Debian

### Câu 28. Điểm bất lợi kiến trúc của Debian packages được chương nêu là gì?

A. Không thể cài dependency
**B. Ứng dụng và system package cùng chia sẻ hệ dependency nên có khả năng xung đột**
C. Không thể cập nhật bảo mật
D. Không thể lưu trong mirror

### Câu 29. Nếu một system library quan trọng bị hỏng, hậu quả minh họa trong chương là gì?

A. Chỉ một gói bị ảnh hưởng
**B. Nhiều phần mềm phụ thuộc vào library đó có thể thất bại**
C. Snapd tự sửa mọi thứ
D. APT tự chuyển sang PPA

### Câu 30. Một hạn chế khác của Debian package về software availability là gì?

A. Gói luôn quá mới
**B. Phiên bản mới thường không được cung cấp cho đến release distro kế tiếp**
C. Không thể cài Apache
D. Chỉ hỗ trợ phần mềm desktop

### Câu 31. Ví dụ ngoại lệ được nêu cho việc cập nhật phần mềm mới hơn trong cùng release là gì?

**A. Firefox trên Ubuntu Desktop**
B. Kernel HWE trên Debian Stable
C. MariaDB trên Snap
D. Apache trong PPA

### Câu 32. Snap packages được Canonical giới thiệu để giảm vấn đề nào?

A. Thiếu hostname
**B. Xung đột với các Debian system packages và hạn chế phiên bản ứng dụng**
C. Thiếu swap
D. Không có SSH

### Câu 33. Quan hệ giữa Snap package và Debian package nền bên dưới được mô tả thế nào?

A. Snap ghi đè trực tiếp Debian package
**B. Snap hoàn toàn tách biệt và không tác động trực tiếp lên Debian packages nền**
C. Snap chỉ là symlink đến .deb
D. Snap bắt buộc dùng cùng library hệ thống

### Câu 34. Vì sao Snap thường có thể cung cấp phiên bản ứng dụng mới hơn?

**A. Vì Snap tách biệt khỏi dependency của hệ Debian nền**
B. Vì Snap bỏ qua mọi kiểm tra bảo mật
C. Vì Snap chỉ chứa source code
D. Vì Snap dùng PPA mặc định

### Câu 35. Nhược điểm chính của Snap được nêu trong chương là gì?

A. Không thể cập nhật
**B. Gói thường lớn hơn vì chứa cả ứng dụng và các library cần thiết**
C. Chỉ chạy trên Windows
D. Không thể cài song song với APT

### Câu 36. Theo quan điểm của tài liệu, kích thước Snap lớn hơn thường được đánh giá thế nào?

A. Lớn đến mức không dùng được trên server
**B. Thường không quá lớn và không nên là vấn đề đáng kể về disk space**
C. Luôn nhỏ hơn Debian package
D. Không thể dự đoán

### Câu 37. Vì sao dù tài liệu thiên về Snap, phần lớn gói trong sách vẫn là Debian packages?

A. Snap không hỗ trợ lệnh install
**B. Vì tại thời điểm tài liệu, Debian package vẫn là thứ sẵn có phổ biến hơn**
C. Vì Snap không chạy trên Ubuntu
D. Vì Snap không có phiên bản mới

### Câu 38. Quy tắc kinh nghiệm mà tài liệu đưa ra khi chọn giữa Snap và Debian package là gì?

A. Luôn chỉ dùng Debian package
**B. Thử Snap trước; fallback sang Debian package khi cần hoặc khi Snap chưa có**
C. Luôn tự compile từ source
D. Chỉ dùng PPA

---

## IV. Cài đặt, gỡ bỏ và cập nhật phần mềm

### Câu 39. APT là viết tắt của cụm nào?

A. Application Package Transfer
**B. Advanced Package Tool**
C. Automated Package Tracker
D. Advanced Process Terminal

### Câu 40. Lệnh cài `openssh-server` bằng APT theo chương là gì?

A. sudo apt add openssh-server
**B. sudo apt install openssh-server**
C. sudo dpkg install openssh-server
D. sudo snap find openssh-server

### Câu 41. Muốn cài nhiều Debian package trong một lệnh APT, cách đúng là gì?

A. Ngăn cách package bằng dấu phẩy
**B. Ngăn cách package bằng khoảng trắng sau `apt install`**
C. Dùng một lệnh `apt install` cho từng package bắt buộc
D. Dùng `apt multi-install`

### Câu 42. Khi cài Debian package, APT thường làm bước nào trước?

A. Xóa package index
**B. Tính dependency và kiểm tra package/dependency có sẵn**
C. Tạo PPA
D. Chuyển package thành Snap

### Câu 43. Vì sao nên chạy `sudo apt update` định kỳ?

A. Để xóa toàn bộ package cũ
**B. Vì repository thay đổi nhanh, package mới được thêm và bản cũ có thể bị thay thế/xóa**
C. Để nâng cấp kernel ngay lập tức
D. Để bật HWE

### Câu 44. `sudo apt update` chủ yếu cập nhật cái gì?

A. Tất cả package đã cài lên phiên bản mới
**B. Thông tin/chỉ mục nguồn package cục bộ**
C. Chỉ Snap packages
D. Mật khẩu sudo

### Câu 45. Lệnh gỡ một Debian package theo cú pháp cơ bản là gì?

A. sudo apt delete <package>
**B. sudo apt remove <package>**
C. sudo dpkg erase <package>
D. sudo snap remove <package>

### Câu 46. Để gỡ nhiều Debian package cùng lúc, chương hướng dẫn thế nào?

**A. Liệt kê các tên package sau `apt remove`, cách nhau bởi khoảng trắng**
B. Dùng dấu `;` giữa tên package
C. Chỉ có thể gỡ từng gói
D. Dùng `apt purge-all`

### Câu 47. Tùy chọn `--purge` khi `apt remove` nhằm mục đích gì?

A. Chỉ xóa cache package
**B. Gỡ package đồng thời xóa cấu hình của nó, thường nằm dưới `/etc`**
C. Xóa mọi dependency trên hệ thống
D. Xóa repository chứa package

### Câu 48. Lệnh nào đúng để gỡ package và purge cấu hình theo tài liệu?

A. sudo apt purge-cache <package>
**B. sudo apt remove --purge <package>**
C. sudo apt update --purge <package>
D. sudo snap remove --purge <package>

### Câu 49. Công cụ dòng lệnh chính để quản lý Snap package là gì?

A. dpkg
**B. snap**
C. apt-cache
D. dselect

### Câu 50. Lệnh tìm Snap package theo từ khóa là gì?

A. snap search <package>
**B. snap find <package>**
C. apt find <package>
D. dpkg --find <package>

### Câu 51. Trong ví dụ `nmap`, tài liệu lưu ý Snap version thường có đặc điểm gì so với bản trong APT repository?

A. Cũ hơn và ít tính năng hơn
**B. Thường mới hơn và có nhiều tính năng hơn**
C. Luôn cùng version
D. Không thể chạy trên server

### Câu 52. Lệnh cài `nmap` bằng Snap là gì?

A. sudo apt install nmap-snap
**B. sudo snap install nmap**
C. snap add nmap
D. sudo dpkg -i nmap

### Câu 53. Sau khi cài Snap `nmap`, `which nmap` trong ví dụ trỏ tới đâu?

A. /usr/local/bin/nmap
**B. /snap/bin/nmap**
C. /opt/nmap
D. /etc/nmap

### Câu 54. Nếu đồng thời có APT nmap và Snap nmap, nhận định nào đúng?

A. Hai bản không thể cùng tồn tại
**B. Chúng độc lập; có thể chạy Snap ở `/snap/bin/nmap` hoặc bản Ubuntu ở `/usr/bin/nmap`**
C. APT nmap tự biến thành Snap
D. Snap luôn xóa APT nmap

### Câu 55. Lệnh gỡ Snap `nmap` là gì?

**A. sudo snap remove nmap**
B. sudo apt remove snap:nmap
C. sudo snap delete --all nmap
D. sudo dpkg -r nmap

### Câu 56. Cặp lệnh nào đúng để cập nhật một Snap và cập nhật toàn bộ Snap?

A. `sudo snap update nmap` và `sudo snap update-all`
**B. `sudo snap refresh nmap` và `sudo snap refresh`**
C. `sudo apt update nmap` và `sudo apt update`
D. `snap upgrade nmap` và `snap dist-upgrade`

---

## V. Tìm kiếm package

### Câu 57. Vì sao kỹ năng tìm package quan trọng trên Ubuntu Server?

A. Tên package luôn giống tên ứng dụng
**B. Tên package có thể không rõ ràng và còn khác giữa các distro**
C. APT không có mô tả package
D. Ubuntu không có repository

### Câu 58. Lệnh APT được dùng trong ví dụ để tìm package theo từ khóa là gì?

**A. apt search <search term>**
B. apt locate <search term>
C. apt query <search term>
D. apt-cache show <search term>

### Câu 59. Đầu ra của `apt search` theo chương thường cung cấp gì?

A. Chỉ checksum
**B. Danh sách package phù hợp cùng tên và mô tả**
C. Chỉ dependency tree
D. Chỉ package đã cài

### Câu 60. Muốn tìm package PHP module cho Apache khi chưa biết tên package, ví dụ trong chương dùng lệnh nào?

**A. apt search apache php**
B. snap find apache-php-only
C. dpkg --get-selections apache php
D. apt-add-repository php

### Câu 61. Package được suy ra là phù hợp nhất từ ví dụ tìm PHP module cho Apache là gì?

A. php-apache-core
**B. libapache2-mod-php**
C. apache2-php-runtime
D. mod-php-snap

### Câu 62. Lệnh nào được dùng để xem thêm thông tin về `libapache2-mod-php` trong slide ví dụ?

**A. apt-cache show libapache2-mod-php**
B. apt details libapache2-mod-php
C. dpkg --show-repo libapache2-mod-php
D. snap info apache2-php

### Câu 63. Ngoài CLI, trang nào được tài liệu nêu để tìm Debian packages cho Ubuntu?

**A. packages.ubuntu.com**
B. snapcraft.io/channels
C. kernel.org/packages
D. debian.org/ppa

### Câu 64. Trang Ubuntu Packages Search hữu ích ở điểm nào?

A. Chỉ hiển thị package đã cài cục bộ
**B. Cho duyệt package theo bản Ubuntu được hỗ trợ và xem dependency, mô tả, thông tin liên quan**
C. Chỉ dùng để tạo PPA
D. Chỉ để tải kernel HWE

### Câu 65. Trong phần tổng kết tìm kiếm package, tài liệu còn nhắc lệnh nào bên cạnh `snap find`?

**A. apt-cache search**
B. dpkg search-remote
C. apt-add-repository search
D. dselect find

### Câu 66. Khi không chắc cách cài một phần mềm cụ thể, tài liệu gợi ý gì?

A. Tự sửa `/etc/apt/sources.list` ngẫu nhiên
**B. Tra cứu tài liệu của phần mềm và tìm kiếm thêm để xác định cách cài phù hợp trên Ubuntu**
C. Luôn compile source
D. Luôn dùng PPA đầu tiên thấy được

---

## VI. Quản lý package repositories và PPA

### Câu 67. Khi nào thường cần thêm repository ngoài mặc định?

A. Mỗi lần cài bất kỳ package nào
**B. Khi cần phần mềm Ubuntu không cung cấp mặc định hoặc cần version mới hơn**
C. Chỉ khi mất mạng
D. Chỉ để cài Snap

### Câu 68. Vì sao tài liệu coi việc thêm repository ngoài là phương án nên dùng thận trọng/last resort?

A. Vì APT không đọc được URL
**B. Vì bạn đang đặt niềm tin vào tác giả repository và package có thể chứa mã độc/backdoor**
C. Vì repository ngoài không có package
D. Vì chỉ root mới đọc được sources.list

### Câu 69. Rủi ro nào xảy ra nếu maintainer của repository bỏ dự án?

A. Kernel tự cập nhật nhanh hơn
**B. Repository có thể offline hoặc tiếp tục online nhưng không còn security update**
C. APT tự chuyển sang Snap
D. Mọi package bị purge ngay

### Câu 70. Nếu phần mềm bắt buộc không có trong Ubuntu repo, hai hướng được chương nêu là gì?

**A. Biên dịch từ source hoặc thêm repository**
B. Chỉ dùng Docker
C. Chỉ dùng AppImage
D. Đổi hostname hoặc reboot

### Câu 71. Theo chương, software repositories về bản chất được cấu hình như thế nào?

**A. URL trong các file text**
B. Binary blob trong kernel
C. Biến môi trường trong shell
D. Bảng SQLite của snapd

### Câu 72. Danh sách repository Ubuntu chính nằm ở file nào?

A. /etc/apt/repositories.conf
**B. /etc/apt/sources.list**
C. /var/lib/apt/sources.list
D. /usr/share/apt/repositories

### Câu 73. Ngoài `/etc/apt/sources.list`, APT còn đọc repository từ đâu?

**A. Các file `.list` trong `/etc/apt/sources.list.d/`**
B. Mọi file trong `/tmp`
C. Chỉ `/etc/hosts`
D. `/snap/bin`

### Câu 74. Trong dòng `deb http://us.archive.ubuntu.com/ubuntu/ bionic main restricted`, trường đầu tiên `deb` biểu thị gì?

A. Repository chỉ chứa source
**B. APT tìm binary packages; `deb-src` dùng cho source packages**
C. Tên codename
D. Tên component

### Câu 75. Trường URL trong một repository line có vai trò gì?

**A. Chỉ định nơi APT kết nối tới repository**
B. Chỉ định package đã cài
C. Chỉ định user chạy apt
D. Chỉ định kernel version

### Câu 76. Trong ví dụ repository line, `bionic` là gì?

A. Tên package
**B. Codename của release, ở đây là Ubuntu 18.04 Bionic Beaver**
C. Tên mirror
D. GPG key

### Câu 77. Bốn component được nêu trong repository Ubuntu là gì?

A. core, extra, testing, unstable
**B. main, restricted, universe, multiverse**
C. base, source, binary, snap
D. free, nonfree, contrib, extras

### Câu 78. Component `main` được mô tả thế nào?

A. Chỉ do cộng đồng hỗ trợ
**B. Phần mềm được hỗ trợ chính thức; thường có source để Ubuntu developer sửa lỗi**
C. Không miễn phí và không được hỗ trợ
D. Chỉ chứa source package

### Câu 79. Component `restricted` được mô tả thế nào?

**A. Vẫn được hỗ trợ nhưng có thể có license gây tranh luận/hạn chế**
B. Không được hỗ trợ và luôn mã nguồn mở
C. Chỉ có package 32-bit
D. Chỉ chứa HWE kernel

### Câu 80. Component `universe` được hỗ trợ chủ yếu bởi ai?

A. Canonical trực tiếp
**B. Cộng đồng**
C. Microsoft
D. Không ai

### Câu 81. Component `multiverse` được mô tả ra sao?

A. Miễn phí, được Canonical hỗ trợ đầy đủ
**B. Không miễn phí và không được hỗ trợ; dùng với rủi ro của người dùng**
C. Chỉ dành cho Snap
D. Chỉ có security updates

### Câu 82. Một repository URL có thể cung cấp nhiều component không?

A. Không, mỗi URL chỉ có đúng một component
**B. Có; bạn có thể subscribe các component cần thiết trên cùng repository line/URL**
C. Chỉ với PPA
D. Chỉ với deb-src

### Câu 83. Vì sao thêm repository bằng file riêng trong `/etc/apt/sources.list.d/` được tài liệu ưa chuộng?

A. Nhanh hơn CPU
**B. Dễ quản lý: thêm bằng cách tạo file và gỡ bằng cách xóa file**
C. Không cần GPG
D. Không cần apt update

### Câu 84. GnuPG key khi thêm repository mới chủ yếu nhằm mục đích gì theo tài liệu?

A. Mã hóa toàn bộ ổ đĩa
**B. Giúp đảm bảo package cài đặt đã được ký**
C. Tăng tốc download
D. Tạo dependency tự động

### Câu 85. Sau khi thêm repository (và key nếu cần), lệnh nào cần chạy để đồng bộ package index?

**A. sudo apt update**
B. sudo apt upgrade --all
C. sudo snap refresh
D. sudo dpkg --get-selections

### Câu 86. Vì sao `apt update` cần thiết sau khi thêm repository?

**A. APT chỉ biết package có trong local package database/cache; cần đồng bộ để nhận package từ repository mới**
B. Để tạo PPA
C. Để cài dselect
D. Để xóa các .list cũ

### Câu 87. PPA là viết tắt của gì?

A. Public Package API
**B. Personal Package Archive**
C. Private Package Access
D. Portable Package Application

### Câu 88. PPA trong tài liệu được xem là loại gì?

**A. Một dạng APT repository**
B. Một Snap store riêng
C. Một kernel module
D. Một file backup dpkg

### Câu 89. Đặc điểm quy mô thường thấy của PPA là gì?

A. Rất lớn, chứa toàn bộ Ubuntu
**B. Thường nhỏ, đôi khi chỉ phục vụ một ứng dụng/mục đích**
C. Chỉ chứa source kernel
D. Không chứa package

### Câu 90. Use case đáng chú ý của PPA được chương nhấn mạnh là gì?

A. Đổi hostname
**B. Software versioning khi standard repo không có version ứng dụng mà tổ chức cần**
C. Tạo user mới
D. Dọn orphan package

### Câu 91. Vì sao tự compile từ source có thể tạo thêm gánh nặng vận hành?

**A. Bạn phải tự theo dõi và biên dịch các security patch mới**
B. APT sẽ không bao giờ chạy nữa
C. Không thể dùng compiler trên Ubuntu
D. Package sẽ tự xóa

### Câu 92. Theo tài liệu, nếu ứng dụng có Snap thì lựa chọn nào được xem là an toàn hơn so với PPA?

**A. Cài Snap**
B. Tự sửa kernel
C. Dùng repository không ký
D. Tắt security update

### Câu 93. Cú pháp PPA ví dụ trong chương là lệnh nào?

**A. sudo apt-add-repository ppa:username/myawesomesoftware-1.0**
B. sudo apt install ppa://username/myawesomesoftware-1.0
C. sudo snap add ppa:username/myawesomesoftware-1.0
D. sudo dpkg --add-ppa username

### Câu 94. Trang được nêu để tìm PPA là đâu?

**A. launchpad.net/ubuntu/+ppas**
B. packages.ubuntu.com/ppa
C. snapcraft.io/ppa
D. kernel.org/ubuntu/ppa

### Câu 95. `apt-add-repository` tự động hóa những việc nào theo chương?

**A. Thêm repository vào `/etc/apt/sources.list.d/` và cài key của nó**
B. Cài toàn bộ package trong PPA
C. Xóa sources.list
D. Chuyển PPA thành Snap

### Câu 96. Theo tài liệu, có thể gỡ một PPA đã thêm bằng cách nào đơn giản?

**A. Xóa file repository tương ứng**
B. Xóa `/etc/apt`
C. Chạy `apt autoremove`
D. Xóa `/snap/bin`

---

## VII. Sao lưu và khôi phục danh sách Debian packages

### Câu 97. Mục tiêu của việc export package selections bằng `dpkg` là gì?

A. Sao lưu nội dung file của từng package
**B. Ghi lại danh sách trạng thái package để có thể tái tạo môi trường trên server cài lại/mới**
C. Sao lưu partition
D. Sao lưu PPA key

### Câu 98. Lệnh export danh sách package selections là gì?

**A. dpkg --get-selections > packages.list**
B. dpkg --backup-all packages.list
C. apt list --save packages.list
D. dselect --export packages.list

### Câu 99. Một dòng ví dụ trong file export được tài liệu minh họa là gì?

**A. tmux install**
B. tmux enabled
C. tmux latest
D. tmux /usr/bin

### Câu 100. Trước khi restore selections, bước đầu được tài liệu khuyến nghị là gì?

**A. sudo apt update**
B. sudo apt autoremove
C. sudo snap refresh
D. sudo aptitude unmarkauto

### Câu 101. Cách kiểm tra `dselect` đã cài theo slide là gì?

**A. which dselect**
B. apt-cache show dselect
C. dpkg --get-selections dselect
D. snap find dselect

### Câu 102. Nếu chưa có `dselect`, lệnh cài là gì?

**A. sudo apt install dselect**
B. sudo snap install dselect
C. sudo dpkg -i dselect
D. sudo apt-add-repository dselect

### Câu 103. Chuỗi lệnh nào đúng để import và cài lại các package thiếu từ `packages.list`?

**A. `sudo dselect update` -> `sudo dpkg --set-selections < packages.list` -> `sudo apt-get dselect-upgrade`**
B. `sudo apt update` -> `sudo snap refresh` -> `sudo apt autoremove`
C. `dpkg --get-selections` -> `apt remove` -> `dselect purge`
D. `apt-cache search` -> `apt install packages.list` -> `reboot`

### Câu 104. Vì sao bước cuối dùng `apt-get` thay vì `apt`?

**A. Vì `dselect-upgrade` là một thao tác được nêu là chỉ hoạt động với `apt-get`**
B. Vì `apt` không cài package
C. Vì `apt-get` chỉ dành cho Snap
D. Vì `apt` không có quyền root

---

## VIII. Dọn orphaned packages

### Câu 105. Orphaned package trong ngữ cảnh chương là gì?

A. Package bị mất chữ ký GPG
**B. Package vẫn được cài nhưng không còn cần bởi bất kỳ package nào**
C. Package chỉ có trong PPA
D. Package chưa được cài

### Câu 106. Hai nguyên nhân chính khiến orphan package xuất hiện là gì?

**A. Xóa package có dependency hoặc dependency của package đang cài thay đổi**
B. Đổi hostname hoặc IP
C. Cài Snap và reboot
D. Thêm user hoặc group

### Câu 107. Lệnh được hệ thống gợi ý để dọn các package tự động cài mà không còn cần là gì?

**A. sudo apt autoremove**
B. sudo apt clean-all
C. sudo dpkg --purge-orphans
D. sudo aptitude erase-all

### Câu 108. Tài liệu cảnh báo `apt autoremove` cần đặc biệt cẩn thận với loại package nào?

A. Fonts
**B. Kernel packages**
C. Shell scripts
D. PPA keys

### Câu 109. Tên package nào thường gợi ý đó là kernel image cũ?

**A. linux-image**
B. ubuntu-repo
C. snap-core
D. apt-index

### Câu 110. Trước khi xóa kernel cũ bằng autoremove, cần làm gì?

**A. Xác nhận kernel mới cài đang hoạt động đúng**
B. Xóa `/boot`
C. Tắt security update
D. Xóa mọi PPA

### Câu 111. Khoảng thời gian chờ tối thiểu được tài liệu khuyến nghị trước khi autoremove kernel cũ là bao lâu?

A. 1 giờ
B. 1 ngày
**C. Ít nhất khoảng 1 tuần**
D. 1 tháng bắt buộc

### Câu 112. Với orphan package thông thường không phải kernel, tài liệu đánh giá thế nào?

**A. Thường an toàn để xóa bằng `apt autoremove` vì chúng thường là dependency của package không còn tồn tại**
B. Tuyệt đối không bao giờ xóa
C. Phải chuyển thành Snap trước
D. Chỉ xóa bằng `rm -rf`

---

## IX. Aptitude

### Câu 113. Aptitude được mô tả là gì?

A. Một GUI desktop bắt buộc
**B. Tiện ích quản lý package dạng text, có thể dùng thay apt và có thêm một số tính năng**
C. Một daemon mạng
D. Một trình biên dịch kernel

### Câu 114. Lệnh cài Aptitude là gì?

**A. sudo apt install aptitude**
B. sudo snap install apt
C. sudo dpkg --aptitude
D. sudo apt-add-repository aptitude

### Câu 115. Cặp lệnh tương đương nào đúng theo bảng trong chương?

**A. `aptitude install <packagename>` ↔ `apt install <packagename>`**
B. `aptitude install` ↔ `apt autoremove`
C. `aptitude search` ↔ `snap find` duy nhất
D. `aptitude dist-upgrade` ↔ `apt update`

### Câu 116. Theo bảng, `aptitude remove <packagename>` tương đương gần nhất với lệnh nào?

**A. apt remove <packagename>**
B. apt purge-all
C. snap remove <packagename>
D. dpkg --get-selections

### Câu 117. Theo bảng, `aptitude search <search term>` được đối chiếu với lệnh nào?

**A. apt-cache search <packagename>**
B. apt-cache show <packagename>
C. snap refresh
D. apt-add-repository

### Câu 118. Ba cặp update/upgrade nào đúng theo bảng Aptitude?

**A. `aptitude update`↔`apt update`, `aptitude upgrade`↔`apt upgrade`, `aptitude dist-upgrade`↔`apt dist-upgrade`**
B. Cả ba đều tương đương `apt update`
C. Cả ba đều tương đương `snap refresh`
D. Không có lệnh tương đương

### Câu 119. Khác biệt đầu tiên của kết quả `aptitude search` so với công cụ APT được nêu là gì?

A. Không có package name
**B. Hiển thị thoáng hơn và có thêm cột trạng thái package**
C. Chỉ hiện package đã cài
D. Không có description

### Câu 120. Trong cột trạng thái của `aptitude search`, ký tự `i` có nghĩa là gì?

**A. Package đã cài**
B. Package chưa cài
C. Package là virtual
D. Package bị lỗi

### Câu 121. Trong cột trạng thái của `aptitude search`, ký tự `p` có nghĩa là gì?

A. Package đã cài
**B. Package chưa cài**
C. Package là virtual
D. Package nằm trong PPA

### Câu 122. Trong cột trạng thái của `aptitude search`, ký tự `v` có nghĩa là gì?

A. Package đã bị purge
**B. Package là virtual**
C. Package đang upgrade
D. Package là version pin

### Câu 123. Nếu muốn giữ một package mà APT đang xem là tự động cài và có nguy cơ bị autoremove, lệnh Aptitude nào được nêu?

**A. sudo aptitude unmarkauto <packagename>**
B. sudo aptitude keep --forever <packagename>
C. sudo apt hold-auto <packagename>
D. sudo snap pin <packagename>

### Câu 124. Sau `aptitude unmarkauto`, tác dụng mong đợi là gì?

**A. Package không còn là ứng viên cho autoremove**
B. Package bị gỡ ngay
C. Package chuyển thành Snap
D. Package bị khóa không thể update

### Câu 125. Chạy `sudo aptitude` không có đối số mở ra giao diện gì?

A. Web UI
**B. Giao diện ncurses dạng text, tương tự một ứng dụng đồ họa trong terminal**
C. Systemd unit
D. GUI Qt

### Câu 126. Trong giao diện Aptitude, tổ hợp phím nào mở menu để thao tác thêm?

**A. Ctrl + T**
B. Ctrl + Z
C. Ctrl + D
D. Alt + F4

### Câu 127. Cách tương tác cơ bản trong giao diện Aptitude theo chương là gì?

**A. Arrow keys để di chuyển, Enter để xác nhận; có thể dùng q để thoát**
B. Chỉ dùng chuột
C. Chỉ dùng phím F1-F12
D. Không thể thoát nếu không reboot

### Câu 128. Theo slide cuối, cách thoát Aptitude qua menu là gì?

**A. Mở menu rồi chọn Quit**
B. Chạy `apt remove aptitude`
C. Nhấn Ctrl+C bắt buộc
D. Xóa process bằng kill -9

---

## Thống kê phạm vi

- Tổng số câu: **128**
- Số phần: **9**
- Phạm vi: package management, security/feature updates, HWE, Debian vs Snap, APT/Snap install-remove-update, package search, repositories/PPA, backup-restore bằng dpkg/dselect, orphan packages, Aptitude.

---

**Mẹo ôn:** Hãy che phần đáp án in đậm khi làm lần đầu; lần hai tập trung vào các câu về lệnh và đường dẫn cấu hình vì đây là nhóm dễ nhầm nhất.