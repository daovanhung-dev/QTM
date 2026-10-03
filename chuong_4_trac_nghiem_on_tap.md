# BỘ CÂU HỎI TRẮC NGHIỆM ÔN TẬP - CHƯƠNG 4: CONNECTING TO NETWORKS

> Nguồn: **Chương 4 - Connecting to Networks** (`chuong 04.pdf`, 66 trang).
>
> Mục tiêu: bao quát toàn bộ nội dung chương, tập trung vào hiểu bản chất, đọc cấu hình, chọn lệnh đúng và xử lý tình huống. Mức độ được nâng lên tương đối so với câu hỏi ghi nhớ đơn thuần.
>
> **Quy ước:** đáp án đúng được **in đậm** ngay trong từng câu.

---

## PHẦN 1 - SETTING THE HOSTNAME

### Câu 1
Trong quá trình cài đặt Ubuntu Server, giá trị hostname mặc định được tài liệu nêu là gì?

- A. localhost
- **B. ubuntu**
- C. server
- D. ubuntu-server

### Câu 2
Với shell prompt mặc định, phần hostname thường được hiển thị theo quy tắc nào?

- A. Luôn hiển thị đầy đủ FQDN.
- B. Chỉ hiển thị phần sau dấu chấm cuối cùng.
- **C. Chỉ hiển thị hostname đến trước dấu chấm đầu tiên.**
- D. Chỉ hiển thị địa chỉ IP thay vì hostname.

### Câu 3
Nếu hostname đầy đủ là `dev.mycompany.org`, shell prompt mặc định nhiều khả năng hiển thị phần nào?

- **A. `dev`**
- B. `mycompany`
- C. `dev.mycompany`
- D. `dev.mycompany.org`

### Câu 4
Lệnh nào được dùng trong chương để xem **toàn bộ hostname**?

- A. `host`
- B. `hostnamectl show`
- **C. `hostname`**
- D. `cat /etc/hosts`

### Câu 5
Lệnh nào đúng để đổi hostname thành `dev2.mynetwork.org` theo nội dung chương?

- A. `sudo hostname dev2.mynetwork.org`
- **B. `sudo hostnamectl set-hostname dev2.mynetwork.org`**
- C. `sudo hostctl set dev2.mynetwork.org`
- D. `sudo hostnamectl dev2.mynetwork.org`

### Câu 6
Theo chương, thao tác cốt lõi mà `hostnamectl set-hostname` thực hiện đối với hostname là gì?

- A. Chỉ thay đổi biến môi trường của shell hiện tại.
- **B. Thay đổi nội dung file `/etc/hostname`.**
- C. Chỉ sửa `/etc/hosts`.
- D. Thay đổi cấu hình DNS từ xa.

### Câu 7
File `/etc/hostname` theo nội dung chương chứa chủ yếu nội dung nào?

- A. Danh sách DNS server.
- B. Danh sách tất cả interface mạng.
- **C. Hostname của máy.**
- D. Public key của SSH server.

### Câu 8
Sau khi đổi hostname, lỗi dạng `unable to resolve host dev.mynetwork.org` chủ yếu xuất hiện vì nguyên nhân nào?

- A. DNS public đang mất kết nối.
- B. Netplan chưa được apply.
- **C. Hostname đã đổi nhưng tham chiếu tương ứng trong `/etc/hosts` chưa được cập nhật.**
- D. OpenSSH chưa restart.

### Câu 9
Tại sao chỉ chạy `hostnamectl set-hostname` vẫn có thể chưa đủ để hoàn tất việc đổi hostname?

- A. Vì lệnh này không thay đổi `/etc/hostname`.
- B. Vì lệnh này chỉ có hiệu lực sau reboot.
- **C. Vì lệnh này không tự cập nhật `/etc/hosts`.**
- D. Vì lệnh này chỉ chạy được trên desktop.

### Câu 10
Theo tài liệu, cách nào sau đây là hợp lý khi muốn tránh lỗi resolve hostname sau khi đổi tên máy?

- A. Chỉ sửa `/etc/resolv.conf`.
- **B. Đảm bảo cả `/etc/hostname` và `/etc/hosts` phản ánh hostname mới.**
- C. Xóa `/etc/hosts`.
- D. Chạy `ip link set` cho interface chính.

### Câu 11
Lệnh nào phù hợp để kiểm tra trực tiếp nội dung file lưu hostname?

- A. `cat /etc/hosts`
- **B. `cat /etc/hostname`**
- C. `cat /etc/netplan`
- D. `cat /etc/resolv.conf`

### Câu 12
Phát biểu nào phù hợp nhất với quan điểm của tài liệu về việc dùng `hostnamectl` so với sửa file thủ công?

- A. `hostnamectl` luôn cập nhật mọi file liên quan nên không cần chỉnh gì khác.
- B. Sửa file thủ công là không được hỗ trợ.
- **C. Vì vẫn phải cập nhật `/etc/hosts`, có thể chọn dùng `hostnamectl` hoặc sửa thủ công cả `/etc/hostname` và `/etc/hosts`.**
- D. Chỉ root mới có thể xem hostname.

---

## PHẦN 2 - MANAGING NETWORK INTERFACES

### Câu 13
Lệnh nào được chương dùng để xem địa chỉ IP hiện đang được gán cho các interface?

- A. `ip route show`
- **B. `ip addr show`**
- C. `ip link add`
- D. `route -n`

### Câu 14
Muốn đưa interface `ens33` xuống trạng thái down bằng bộ lệnh `ip`, lệnh nào đúng?

- A. `sudo ip addr set ens33 down`
- **B. `sudo ip link set ens33 down`**
- C. `sudo ip route set ens33 down`
- D. `sudo ifdown ip ens33`

### Câu 15
Muốn bật lại interface `ens33` sau khi đã down, lệnh nào đúng theo chương?

- A. `sudo ip addr ens33 up`
- **B. `sudo ip link set ens33 up`**
- C. `sudo netplan ens33 up`
- D. `sudo systemctl start ens33`

### Câu 16
Theo chương, khi đưa interface xuống bằng `ip link set ... down`, tác động thực tế được mô tả là gì?

- A. Xóa toàn bộ cấu hình Netplan vĩnh viễn.
- **B. Làm interface ngừng hoạt động, mất gán IP hiện thời và không thể kết nối mạng trong trạng thái đó.**
- C. Chỉ tắt DNS nhưng vẫn giữ kết nối IP.
- D. Xóa driver của card mạng.

### Câu 17
`ifconfig` thuộc bộ công cụ nào?

- A. iproute2
- **B. net-tools**
- C. systemd-networkd
- D. openssh-client

### Câu 18
Theo chương, bộ công cụ nào được xem là sự thay thế hiện đại cho `net-tools`/`ifconfig`?

- A. dnsutils
- **B. iproute2**
- C. coreutils
- D. procps

### Câu 19
Lệnh nào có thể được dùng khi `ifconfig` không chạy trực tiếp trong môi trường của user bình thường do vấn đề PATH?

- A. `/usr/bin/ifconfig`
- **B. `/sbin/ifconfig`**
- C. `/opt/ifconfig`
- D. `/etc/ifconfig`

### Câu 20
Cặp lệnh nào tương ứng với việc down rồi up interface `enp0s3` bằng `ifconfig`?

- A. `ifconfig down enp0s3` và `ifconfig up enp0s3`
- **B. `sudo ifconfig enp0s3 down` và `sudo ifconfig enp0s3 up`**
- C. `sudo ifconfig --down enp0s3` và `sudo ifconfig --up enp0s3`
- D. `sudo service enp0s3 stop` và `sudo service enp0s3 start`

### Câu 21
Nhận định nào đúng theo nội dung chương về `ifconfig`?

- A. Đây là công cụ được khuyến nghị duy nhất trên Ubuntu mới.
- B. Nó thuộc iproute2 và thay thế lệnh `ip`.
- **C. Nó phần lớn đã deprecated, nhưng vẫn còn được nhiều quản trị viên sử dụng.**
- D. Nó chỉ dùng để xem hostname.

### Câu 22
Nếu mục tiêu là xem thông tin interface bằng công cụ hiện đại được chương ưu tiên, lựa chọn nào phù hợp nhất?

- A. `ifconfig -a` là duy nhất.
- **B. Sử dụng lệnh thuộc iproute2, tiêu biểu là `ip addr show`.**
- C. `hostname`.
- D. `systemctl status network`.

---

## PHẦN 3 - ASSIGNING STATIC IP ADDRESSES VÀ TMUX

### Câu 23
Vì sao tài liệu nhấn mạnh server nên có địa chỉ IP cố định?

- A. Để tăng dung lượng ổ đĩa.
- B. Để hostname luôn ngắn.
- **C. Vì IP thay đổi có thể làm người dùng mất kết nối, dịch vụ lỗi hoặc cả website không truy cập được.**
- D. Vì SSH không hỗ trợ DHCP.

### Câu 24
Sau cài đặt Ubuntu Server, máy thường nhận IP ban đầu theo cách nào được mô tả trong chương?

- A. Chỉ có loopback.
- **B. Nhận lease động từ DHCP server.**
- C. Tự tạo static IP ngẫu nhiên.
- D. Bắt buộc nhập IP thủ công trong lần boot đầu tiên.

### Câu 25
Hai cách được chương nêu để cấp một địa chỉ cố định cho server là gì?

- A. NAT và bridge.
- **B. Static IP assignment và static lease/DHCP reservation.**
- C. DNS và mDNS.
- D. IPv4 và IPv6.

### Câu 26
`static lease` trong ngữ cảnh chương còn được gọi là gì?

- A. DNS alias
- **B. DHCP reservation**
- C. Default route
- D. ARP binding

### Câu 27
Kể từ Ubuntu 17.10 theo tài liệu, phương pháp cấu hình IP thủ công thay đổi đáng kể với sự xuất hiện của công cụ nào?

- A. NetworkManager
- **B. Netplan**
- C. net-tools
- D. BIND

### Câu 28
Các file cấu hình Netplan được đặt mặc định ở thư mục nào?

- A. `/etc/network/interfaces.d`
- **B. `/etc/netplan`**
- C. `/var/lib/netplan`
- D. `/usr/share/netplan`

### Câu 29
Định dạng file cấu hình Netplan được nhấn mạnh trong chương là gì?

- A. JSON
- B. INI
- **C. YAML**
- D. XML

### Câu 30
Tên file Netplan ví dụ được chương nhắc đến trên Ubuntu 17.10 trở lên là gì?

- A. `interfaces.yaml`
- **B. `50-cloud-init.yaml`**
- C. `network.conf`
- D. `01-network-manager.conf`

### Câu 31
Trong cấu hình Netplan ban đầu, dòng `dhcp4: true` biểu thị điều gì?

- A. Tắt IPv4.
- **B. Interface lấy cấu hình IPv4 qua DHCP.**
- C. Buộc dùng static IP.
- D. Bật SSH qua IPv4.

### Câu 32
Để chuyển từ DHCP sang cấu hình IPv4 tĩnh theo ví dụ trong chương, thay đổi trực tiếp nào cần được thực hiện?

- A. `dhcp4: true` thành `dhcp4: static`
- **B. `dhcp4: true` thành `dhcp4: no`**
- C. Xóa khóa `network:`
- D. Đổi `version: 2` thành `version: 4`

### Câu 33
Trong ví dụ Netplan, khóa nào dùng để khai báo địa chỉ IP tĩnh theo CIDR?

- A. `ip:`
- **B. `addresses:`**
- C. `static:`
- D. `host-address:`

### Câu 34
Giá trị dạng `192.168.81.133/24` trong `addresses` đồng thời thể hiện điều gì?

- A. Chỉ địa chỉ gateway.
- **B. Địa chỉ IPv4 và độ dài prefix mạng.**
- C. Địa chỉ DNS và cổng SSH.
- D. Tên interface và MTU.

### Câu 35
Trong ví dụ cấu hình được trình bày, khóa nào dùng để khai báo default gateway theo cú pháp cũ của Netplan?

- A. `routes-default:`
- **B. `gateway4:`**
- C. `router:`
- D. `default-ip:`

### Câu 36
Trong cấu hình Netplan, DNS server được đặt dưới cấu trúc nào?

- A. `dns: servers:`
- **B. `nameservers:` rồi `addresses:`**
- C. `resolv:` rồi `hosts:`
- D. `name-resolution:` rồi `server:`

### Câu 37
Theo ảnh cấu hình trong chương, danh sách nameserver có thể chứa điều gì?

- A. Chỉ đúng một DNS server.
- B. Chỉ DNS public.
- **C. Nhiều địa chỉ DNS, gồm cả DNS public hoặc DNS nội bộ.**
- D. Chỉ hostname, không dùng IP.

### Câu 38
Tại sao tài liệu cảnh báo không dùng phím TAB để thụt dòng trong file YAML Netplan?

- A. Vì TAB làm SSH tự disconnect.
- **B. Vì YAML/Netplan trong ví dụ yêu cầu thụt dòng nhất quán bằng SPACE; TAB có thể khiến cấu hình không hoạt động.**
- C. Vì TAB tự đổi IP.
- D. Vì TAB chỉ dùng cho IPv6.

### Câu 39
Sau khi chỉnh file Netplan xong, lệnh nào được dùng để áp dụng cấu hình?

- A. `sudo netplan restart`
- **B. `sudo netplan apply`**
- C. `sudo systemctl reload netplan`
- D. `sudo network apply`

### Câu 40
Nếu `netplan apply` gặp lỗi và cần thêm thông tin chẩn đoán, lệnh nào được chương đưa ra?

- A. `sudo netplan test`
- **B. `sudo netplan --debug apply`**
- C. `sudo netplan apply --quiet`
- D. `sudo ip --debug addr`

### Câu 41
Sau khi áp dụng cấu hình static IP, lệnh nào phù hợp nhất để xác minh địa chỉ mới theo chương?

- **A. `ip addr show`**
- B. `hostnamectl`
- C. `systemctl status ssh`
- D. `cat /etc/hostname`

### Câu 42
Rủi ro đặc biệt khi thay đổi cấu hình mạng trên server qua kết nối từ xa là gì?

- A. CPU sẽ tự tắt.
- **B. Có thể bị rớt phiên kết nối trước khi mạng được khôi phục hoặc nếu cấu hình sai.**
- C. File `/etc/hostname` sẽ bị xóa.
- D. Public key SSH sẽ tự thay đổi.

### Câu 43
Công cụ nào được chương đề xuất để giảm rủi ro công việc bị gián đoạn khi chỉnh mạng từ xa?

- A. screenfetch
- **B. tmux**
- C. nmap
- D. rsync

### Câu 44
Lệnh cài `tmux` theo chương là gì?

- A. `sudo apt install terminal-mux`
- **B. `sudo apt install tmux`**
- C. `sudo snap install ssh-tmux`
- D. `sudo systemctl enable tmux`

### Câu 45
Sau khi cài xong, cách đơn giản để bắt đầu một phiên tmux theo chương là gì?

- A. `tmux start --daemon`
- **B. Gõ `tmux` trong shell.**
- C. `systemctl start tmux`
- D. `ssh tmux`

### Câu 46
Lợi ích quan trọng của tmux khi cấu hình mạng từ xa là gì?

- A. Nó tự sửa YAML sai cú pháp.
- **B. Lệnh chạy trong tmux có thể tiếp tục chạy dù người dùng bị mất kết nối khỏi server.**
- C. Nó thay thế Netplan.
- D. Nó cấp IP DHCP cho server.

### Câu 47
Trong ví dụ minh họa tmux, chương yêu cầu chạy lệnh nào để quan sát một tiến trình vẫn tiếp tục sau khi detach?

- A. `ps`
- **B. `top`**
- C. `watch ip a`
- D. `ping`

### Câu 48
Tổ hợp phím nào được chương dùng để detach khỏi tmux?

- A. Ctrl + C, rồi Q
- B. Ctrl + A, rồi X
- **C. Ctrl + B, thả ra, rồi nhấn D**
- D. Alt + B, rồi D

### Câu 49
Tại sao nên bắt đầu tmux **trước** khi thực hiện lệnh restart/reconfigure mạng từ xa?

- A. Để tmux gán IP tĩnh thay cho Netplan.
- **B. Nếu shell bị rớt, lệnh vẫn có thể hoàn tất trong nền và mạng có cơ hội lên lại với cấu hình mới.**
- C. Để tự đổi hostname.
- D. Để bỏ qua quyền sudo.

### Câu 50
Nếu sau khi thay đổi Netplan không thể reconnect từ xa, hành động nào được chương gợi ý?

- A. Xóa luôn hệ điều hành và cài lại.
- **B. Truy cập console vật lý hoặc console của trình quản lý máy ảo để đăng nhập và sửa lỗi.**
- C. Chỉ cần đổi DNS public.
- D. Bắt buộc tắt SSH key authentication.

### Câu 51
Sau khi mạng khởi động lại thành công, cách kiểm tra IP mới nào được chương nhắc đến?

- A. Chỉ dùng `hostname`.
- **B. Dùng `ip addr show` hoặc `ifconfig`.**
- C. Chỉ dùng `ping localhost`.
- D. Dùng `cat /etc/passwd`.

### Câu 52
Trang 27 của chương chủ yếu làm gì?

- A. Đưa thêm cấu hình SSH key bắt buộc.
- **B. Ghi chú rằng có phần nội dung bổ sung dành cho các bản Ubuntu cũ.**
- C. Cấm sử dụng Netplan.
- D. Chuyển sang cấu hình RAID.

---

## PHẦN 4 - UNDERSTANDING NETWORKMANAGER

### Câu 53
NetworkManager được mô tả đúng nhất là gì?

- A. Trình quản lý package.
- **B. Tiện ích/daemon chạy nền để quản lý kết nối mạng.**
- C. Một DNS server chuyên dụng.
- D. Trình quản lý SSH key.

### Câu 54
Theo chương, NetworkManager trên server hiện đại đã phần lớn được thay thế bởi công nghệ nào?

- A. Samba
- **B. Netplan**
- C. Apache
- D. nftables

### Câu 55
Trên desktop Ubuntu, NetworkManager đặc biệt hữu ích vì lý do nào?

- A. Chỉ để đổi hostname.
- **B. Có thể quản lý Wi-Fi, VPN, wired network profiles và nhiều kết nối qua giao diện đồ họa.**
- C. Chỉ chạy khi không có card mạng.
- D. Thay thế OpenSSH.

### Câu 56
Theo chương, trên server NetworkManager thường được đánh giá như thế nào?

- A. Luôn bắt buộc và không thể tắt.
- **B. Không hữu ích bằng trên desktop trong phần lớn trường hợp.**
- C. Chỉ để quản lý RAID.
- D. Chỉ hỗ trợ IPv6.

### Câu 57
Lệnh nào dừng NetworkManager theo nội dung chương?

- A. `sudo service netplan stop`
- **B. `sudo systemctl stop NetworkManager`**
- C. `sudo nmcli off`
- D. `sudo networkctl stop NetworkManager`

### Câu 58
Lệnh nào ngăn NetworkManager tự khởi động cùng hệ thống theo nội dung chương?

- A. `sudo systemctl mask netplan`
- **B. `sudo systemctl disable NetworkManager`**
- C. `sudo systemctl stop NetworkManager --boot`
- D. `sudo networkctl disable`

### Câu 59
Theo cảnh báo trong chương, chỉ nên stop/disable NetworkManager sau khi nào?

- A. Sau khi cài OpenSSH client.
- **B. Sau khi đã thiết lập cấu hình IP tĩnh thủ công phù hợp.**
- C. Sau khi xóa `/etc/hosts`.
- D. Sau khi đổi port SSH.

### Câu 60
Ghi chú bổ sung trong slide về Ubuntu Server 22.04 nói gì?

- A. Ubuntu Server 22.04 bắt buộc NetworkManager.
- **B. Đến Ubuntu Server 22.04, NetworkManager đã bị bỏ khỏi ngữ cảnh được trình bày trong slide.**
- C. Ubuntu Server 22.04 không hỗ trợ Netplan.
- D. Ubuntu Server 22.04 không hỗ trợ Ethernet.

---

## PHẦN 5 - UNDERSTANDING LINUX NAME RESOLUTION

### Câu 61
DNS có vai trò nền tảng nào?

- A. Chuyển port thành process ID.
- **B. Ánh xạ tên miền dễ hiểu với con người sang địa chỉ IP.**
- C. Cấp phát địa chỉ MAC.
- D. Mã hóa public key SSH.

### Câu 62
Theo chương, DNS có luôn là nguồn đầu tiên Ubuntu kiểm tra khi phân giải tên không?

- A. Có, luôn luôn.
- **B. Không; thứ tự phân giải có thể khiến file cục bộ được kiểm tra trước DNS.**
- C. Chỉ khi dùng IPv6.
- D. Chỉ trên desktop.

### Câu 63
File nào quyết định thứ tự các nguồn được hệ thống dùng khi phân giải tên?

- A. `/etc/hostname`
- **B. `/etc/nsswitch.conf`**
- C. `/etc/ssh/sshd_config`
- D. `/etc/netplan/config`

### Câu 64
Dòng `hosts: files dns` trong `/etc/nsswitch.conf` được hiểu đúng nhất như thế nào?

- A. Tra DNS trước, sau đó mới tra file cục bộ.
- **B. Tra các file cục bộ trước, nếu không có kết quả mới hỏi DNS.**
- C. Chỉ dùng file và bỏ qua DNS.
- D. Chỉ dùng DNS và bỏ qua file.

### Câu 65
File cục bộ cụ thể nào được chương nêu là nơi hệ thống kiểm tra trước DNS trong cấu hình `files dns`?

- A. `/etc/hostname`
- **B. `/etc/hosts`**
- C. `/etc/services`
- D. `/etc/networks`

### Câu 66
Theo chương, `/etc/hosts` giúp server tự phân giải hostname cục bộ bằng cách ánh xạ hostname tới địa chỉ nào?

- A. `0.0.0.0`
- **B. `127.0.0.1`**
- C. `255.255.255.255`
- D. `8.8.8.8`

### Câu 67
Lợi ích của việc thêm ánh xạ thủ công vào `/etc/hosts` là gì?

- A. Tự động tạo SSH key.
- **B. Có thể phân giải một tên sang IP mà không cần hỏi DNS server.**
- C. Tự động cấp DHCP lease.
- D. Tự động đổi default gateway.

### Câu 68
Theo ví dụ trong chương, nếu muốn tên `minecraftserver` trỏ tới `10.10.96.124`, dòng nào phù hợp trong `/etc/hosts`?

- A. `minecraftserver = 10.10.96.124`
- **B. `10.10.96.124 minecraftserver`**
- C. `dns 10.10.96.124 minecraftserver`
- D. `host minecraftserver 10.10.96.124`

### Câu 69
Trong các Ubuntu cũ hơn, file nào từng được dùng trực tiếp để xác định DNS server cần truy vấn?

- A. `/etc/hostname`
- **B. `/etc/resolv.conf`**
- C. `/etc/hosts.allow`
- D. `/etc/ssh/config`

### Câu 70
Theo nội dung chương về Ubuntu 18.04, cơ chế nào đảm nhiệm name resolution thay cho cách cũ dựa trực tiếp vào `/etc/resolv.conf`?

- A. NetworkManager-only
- **B. `systemd-resolved`**
- C. sshd
- D. cron

### Câu 71
Nếu máy dùng static IP, theo chương bạn có thể xem DNS đã cấu hình ở đâu?

- A. Trong `/etc/passwd`.
- **B. Trong cấu hình Netplan.**
- C. Trong `authorized_keys`.
- D. Trong `sshd_config`.

### Câu 72
Nếu máy nhận IP qua DHCP và muốn kiểm tra DNS server đang được dùng theo cú pháp trong slide cũ, lệnh nào phù hợp?

- A. `netplan dns show`
- **B. `systemd-resolve --status | grep DNS\ Servers`**
- C. `hostname --dns`
- D. `ssh --dns`

### Câu 73
Ghi chú dành cho Ubuntu 22.04 trong chương gợi ý dùng lệnh nào để xem thông tin resolver hiện hành?

- A. `resolvectl nameserver`
- **B. `resolvectl status | grep Current`**
- C. `systemctl status resolv.conf`
- D. `dnsctl show`

### Câu 74
Trong mô hình Linux doanh nghiệp điển hình được mô tả, local DNS server thường xử lý truy vấn như thế nào?

- A. Chỉ phân giải Internet, không phân giải nội bộ.
- **B. Phân giải tài nguyên nội bộ và forward các truy vấn không thuộc nội bộ tới public DNS.**
- C. Chỉ cấp địa chỉ DHCP.
- D. Chỉ phục vụ SSH key.

---

## PHẦN 6 - GETTING STARTED WITH OPENSSH

### Câu 75
Công dụng chính của OpenSSH trong chương là gì?

- A. Chia sẻ file SMB.
- **B. Cho phép mở command shell trên máy Linux khác và quản trị từ xa như đang ngồi trước máy.**
- C. Cấp IP qua DHCP.
- D. Phân vùng ổ đĩa.

### Câu 76
Mô hình hoạt động cơ bản của OpenSSH server/client được mô tả thế nào?

- A. Client chạy daemon, server chỉ gửi file.
- **B. Server chạy daemon lắng nghe kết nối; workstation dùng SSH client để kết nối.**
- C. Cả hai bên chỉ cần web browser.
- D. Không có tiến trình chạy nền.

### Câu 77
Ngoài server Linux, OpenSSH còn có thể hữu ích để quản trị loại thiết bị nào theo chương?

- A. Chỉ máy in USB.
- **B. Workstation và network appliances.**
- C. Chỉ điện thoại Android.
- D. Chỉ máy ảo Windows.

### Câu 78
Lệnh nào được chương dùng để kiểm tra xem executable của OpenSSH server daemon đã tồn tại chưa?

- A. `which ssh`
- **B. `which sshd`**
- C. `whereis openssh-client`
- D. `systemctl list sshd`

### Câu 79
Nếu OpenSSH server đã được cài theo ví dụ, `which sshd` thường trả về đường dẫn nào?

- A. `/usr/bin/ssh`
- **B. `/usr/sbin/sshd`**
- C. `/etc/ssh/sshd`
- D. `/var/run/sshd`

### Câu 80
Lệnh cài OpenSSH server theo chương là gì?

- A. `sudo apt install ssh`
- **B. `sudo apt install openssh-server`**
- C. `sudo apt install sshd-client`
- D. `sudo snap install opensshd`

### Câu 81
Ngay cả khi không cài OpenSSH server, thành phần nào thường đã có mặc định trên hệ thống được nêu?

- A. `sshd` daemon
- **B. OpenSSH client**
- C. BIND server
- D. tmux server

### Câu 82
Lệnh nào kiểm tra vị trí của SSH client?

- **A. `which ssh`**
- B. `which sshd`
- C. `ssh --daemon`
- D. `systemctl which ssh`

### Câu 83
Đường dẫn SSH client được slide minh họa là gì?

- **A. `/usr/bin/ssh`**
- B. `/usr/sbin/ssh`
- C. `/etc/ssh/ssh`
- D. `/var/lib/ssh`

### Câu 84
Sau khi cài `openssh-server`, Ubuntu thường xử lý service SSH thế nào theo chương?

- A. Không bao giờ tự khởi động.
- **B. Thường được cấu hình tự khởi động và enable khi cài.**
- C. Chỉ chạy sau khi tạo key.
- D. Chỉ chạy trên desktop.

### Câu 85
Lệnh nào kiểm tra trạng thái SSH service?

- A. `systemctl status sshd_config`
- **B. `systemctl status ssh`**
- C. `service openssh-client status`
- D. `ssh status`

### Câu 86
Nếu SSH daemon chưa chạy, lệnh nào dùng để start theo chương?

- A. `sudo ssh start`
- **B. `sudo systemctl start ssh`**
- C. `sudo systemctl start sshd_config`
- D. `sudo apt start openssh-server`

### Câu 87
Nếu SSH daemon đang disabled và muốn nó tự chạy khi boot, dùng lệnh nào?

- A. `sudo systemctl auto ssh`
- **B. `sudo systemctl enable ssh`**
- C. `sudo ssh --enable`
- D. `sudo netplan enable ssh`

### Câu 88
Lệnh nào được chương dùng để xem các socket/port đang listen và lọc riêng SSH?

- A. `ss -l | ssh`
- **B. `sudo netstat -tulpn | grep ssh`**
- C. `ip addr show | grep ssh`
- D. `netplan status | grep ssh`

### Câu 89
Port mặc định của SSH server theo chương là bao nhiêu?

- A. 20
- B. 21
- **C. 22**
- D. 80

### Câu 90
File cấu hình chính của SSH daemon được chương nêu là gì?

- A. `/etc/ssh/config`
- **B. `/etc/ssh/sshd_config`**
- C. `~/.ssh/config`
- D. `/etc/sshd.conf`

### Câu 91
Nếu đổi port SSH trong `sshd_config`, khi nào daemon đọc các giá trị cấu hình này theo mô tả của chương?

- A. Chỉ lúc cài package.
- **B. Mỗi khi daemon được start hoặc restart.**
- C. Chỉ lúc user logout.
- D. Mỗi khi DNS refresh.

### Câu 92
Lệnh nào kết nối đến server `192.168.81.133` bằng username hiện tại?

- A. `ssh://192.168.81.133`
- **B. `ssh 192.168.81.133`**
- C. `sshd 192.168.81.133`
- D. `connect ssh 192.168.81.133`

### Câu 93
Nếu muốn dùng username `tvha` khi SSH tới `192.168.81.133`, cú pháp nào đúng?

- A. `ssh 192.168.81.133 -u tvha`
- **B. `ssh tvha@192.168.81.133`**
- C. `ssh tvha:192.168.81.133`
- D. `ssh --user=tvha/192.168.81.133`

### Câu 94
Theo chương, nếu không chỉ định username trong lệnh SSH, client mặc định làm gì?

- A. Luôn dùng root.
- **B. Dùng username của tài khoản hiện đang đăng nhập trên máy client.**
- C. Dùng `ubuntu` bất kể hệ thống.
- D. Từ chối kết nối.

### Câu 95
Muốn SSH tới port `2242` thay vì port mặc định, cú pháp nào đúng?

- A. `ssh --port 2242@tvha 192.168.81.133`
- **B. `ssh -p 2242 tvha@192.168.81.133`**
- C. `ssh tvha@192.168.81.133:2242`
- D. `ssh -P tvha@192.168.81.133 2242`

### Câu 96
Sau khi đăng nhập SSH thành công, quyền của bạn trên máy đích được xác định chủ yếu theo điều gì?

- A. Quyền của user trên máy client.
- **B. Quyền của tài khoản mà bạn đăng nhập trên máy đích.**
- C. Luôn là root.
- D. Luôn chỉ read-only.

### Câu 97
Nếu user SSH trên máy đích bình thường có quyền sudo, điều gì đúng?

- A. SSH chặn sudo.
- **B. User vẫn có thể sử dụng sudo qua phiên SSH như khi thao tác trực tiếp trên máy đích.**
- C. Cần cài thêm FTP server.
- D. Phải đổi port về 80.

### Câu 98
Cách thoát phiên SSH được chương nêu là gì?

- A. Chỉ có thể đóng terminal.
- **B. Gõ `exit` hoặc nhấn Ctrl + D.**
- C. Nhấn Ctrl + B rồi D.
- D. Chạy `systemctl stop ssh`.

---

## PHẦN 7 - GETTING STARTED WITH SSH KEY MANAGEMENT

### Câu 99
So với xác thực bằng password, Public Key Authentication được chương nhấn mạnh lợi ích gì?

- A. Không cần tài khoản user trên server.
- **B. Tăng bảo mật và không phải truyền system password trong quá trình kết nối.**
- C. Tự đổi port SSH.
- D. Không cần private key.

### Câu 100
Một SSH key-pair gồm những thành phần nào?

- A. Hai public key.
- **B. Một public key và một private key.**
- C. Một password và một hostname.
- D. Một DNS key và một DHCP key.

### Câu 101
Vì sao server có public key của bạn có thể xác thực bạn?

- A. Vì public key chứa plaintext password.
- **B. Vì public key và private key được liên kết toán học; chỉ người có private key tương ứng mới chứng minh được danh tính.**
- C. Vì server hỏi DNS về private key.
- D. Vì username luôn là root.

### Câu 102
Để tăng bảo mật thêm nữa sau khi triển khai key authentication, chương gợi ý điều gì?

- A. Bật anonymous login.
- **B. Có thể tắt password-based authentication để chỉ cho phép đăng nhập bằng key.**
- C. Xóa `authorized_keys`.
- D. Chia sẻ private key cho tất cả quản trị viên.

### Câu 103
Lệnh nào dùng để tạo SSH key pair theo chương?

- A. `ssh-keycreate`
- **B. `ssh-keygen`**
- C. `openssl ssh-key`
- D. `ssh --new-key`

### Câu 104
Theo ảnh minh họa, `ssh-keygen` mặc định tạo loại key nào trong ví dụ?

- A. DSA 1024-bit
- **B. RSA key pair**
- C. X.509 certificate
- D. Kerberos ticket

### Câu 105
Thư mục mặc định để lưu SSH key của user được tài liệu nêu là gì?

- A. `/etc/ssh/keys`
- **B. `/home/<user>/.ssh`**
- C. `/var/lib/ssh/user`
- D. `/usr/share/ssh`

### Câu 106
Khi `ssh-keygen` hỏi passphrase, nhận định nào phù hợp với chương?

- A. Passphrase bắt buộc và phải giống system password.
- **B. Passphrase là tùy chọn nhưng được khuyến nghị; nên khác system password để tăng bảo mật.**
- C. Passphrase chỉ dùng cho public key trên server.
- D. Passphrase là port SSH.

### Câu 107
Nếu không muốn đặt passphrase cho SSH key, theo chương có thể làm gì tại prompt tương ứng?

- A. Gõ `none`.
- **B. Nhấn Enter mà không nhập giá trị.**
- C. Nhấn Ctrl + C và key vẫn được tạo.
- D. Dùng password `root`.

### Câu 108
Nếu thư mục `~/.ssh` chưa tồn tại, `ssh-keygen` trong mô tả của chương sẽ làm gì?

- A. Báo lỗi và dừng ngay.
- **B. Tạo thư mục `.ssh` trong home directory.**
- C. Tạo `/etc/.ssh`.
- D. Tạo thư mục trong `/tmp`.

### Câu 109
Tên file private key mặc định được chương minh họa là gì?

- A. `id_rsa.pub`
- **B. `id_rsa`**
- C. `authorized_keys`
- D. `known_hosts`

### Câu 110
Tên file public key mặc định được chương minh họa là gì?

- A. `id_rsa`
- **B. `id_rsa.pub`**
- C. `public_rsa.key`
- D. `ssh.pubkey`

### Câu 111
Nguyên tắc quan trọng nhất đối với private key là gì?

- A. Nên upload lên server công khai.
- **B. Không nên rời khỏi máy của bạn, không đưa cho người khác và không lưu tùy tiện trên media bên ngoài.**
- C. Phải đặt trong `/etc/hosts`.
- D. Nên gửi qua email cho admin.

### Câu 112
Nếu private key bị lộ, hệ quả được chương nhấn mạnh là gì?

- A. Không ảnh hưởng vì public key mới quan trọng.
- **B. Cặp key không còn đáng tin cậy cho mục đích bảo mật.**
- C. Chỉ làm DNS chậm hơn.
- D. Server tự đổi hostname.

### Câu 113
Theo chương, quyền mặc định của private key được mô tả theo hướng nào?

- A. Mọi user đều đọc được.
- **B. Chủ sở hữu key có quyền đọc/ghi, người khác không được cấp quyền tương tự.**
- C. Public có quyền ghi.
- D. Chỉ root được đọc, ngay cả chủ sở hữu cũng không.

### Câu 114
Public key khác private key về mức độ bảo mật thế nào?

- A. Public key phải bí mật hơn private key.
- **B. Public key có thể rời máy và không cần được bảo vệ nghiêm ngặt như private key.**
- C. Public key không được copy sang server.
- D. Public key chứa password nên phải mã hóa riêng.

### Câu 115
Theo ảnh quyền file trong chương, public key thường có đặc điểm permission nào?

- A. Chỉ owner đọc được.
- **B. Owner có thể ghi và mọi người có thể đọc.**
- C. Mọi người có quyền ghi.
- D. Không ai được đọc.

### Câu 116
Công cụ nào được dùng để copy public key sang server đích?

- A. `scp-key`
- **B. `ssh-copy-id`**
- C. `ssh-keygen --send`
- D. `rsync-key`

### Câu 117
Trong lệnh `ssh-copy-id -i /home/tvha/.ssh/tvha_key.pub tvha@192.168.81.133`, tùy chọn `-i` dùng để làm gì?

- A. Chỉ định IP source.
- **B. Chỉ định file public key cần cài lên server.**
- C. Bật interactive mode.
- D. Đổi port mặc định.

### Câu 118
Trong lần chạy `ssh-copy-id`, người dùng thường vẫn phải làm gì trước khi key được copy?

- A. Đăng nhập bằng private key đã cài sẵn.
- **B. Xác thực bằng password để server chấp nhận việc cài public key.**
- C. Tắt SSH daemon.
- D. Tạo DNS record mới.

### Câu 119
Trên server đích, nếu `~/.ssh` chưa tồn tại khi dùng `ssh-copy-id`, điều gì xảy ra theo chương?

- A. Lệnh thất bại bắt buộc.
- **B. Thư mục `.ssh` được tạo.**
- C. Key được lưu vào `/etc/hosts`.
- D. Key được lưu vào `/tmp`.

### Câu 120
Tên file trên server đích chứa các public key được phép đăng nhập là gì?

- A. `known_hosts`
- **B. `authorized_keys`**
- C. `id_rsa`
- D. `sshd_keys`

### Câu 121
Nếu `authorized_keys` chưa tồn tại khi cài key đầu tiên, điều gì xảy ra theo mô tả?

- A. SSH key authentication không thể dùng.
- **B. File được tạo.**
- C. Server tự restart.
- D. Public key bị bỏ qua.

### Câu 122
Khi thêm nhiều public key vào cùng tài khoản trên server, chúng được lưu thế nào trong `authorized_keys`?

- A. Ghi đè key cũ mỗi lần.
- **B. Mỗi key mới được thêm vào cuối file, thường mỗi key một dòng.**
- C. Mỗi key tạo một partition riêng.
- D. Mỗi key được lưu trong `/etc/hosts`.

### Câu 123
Khi client SSH tới server đã thiết lập key relationship, server kiểm tra nơi nào?

- A. `/etc/hostname`
- **B. `~/.ssh/authorized_keys` của tài khoản trên server.**
- C. `/etc/netplan`
- D. `~/.ssh/known_hosts` trên client.

### Câu 124
Phía client, thành phần nào được dùng để chứng minh khớp với public key trên server?

- A. File `/etc/hosts`
- **B. Private key, ví dụ `~/.ssh/id_rsa`.**
- C. DNS cache.
- D. DHCP lease.

### Câu 125
Nếu public key trên server và private key trên client là một cặp hợp lệ, kết quả là gì?

- A. Server đổi port về 22.
- **B. Client được phép xác thực/đăng nhập theo cơ chế key.**
- C. Password bị gửi qua mạng.
- D. NetworkManager tự dừng.

### Câu 126
Nếu private key được bảo vệ bằng passphrase, người dùng cần làm gì khi sử dụng key?

- A. Gửi passphrase cho server để lưu lâu dài.
- **B. Nhập passphrase để mở khóa/sử dụng private key khi được yêu cầu.**
- C. Đổi passphrase thành username.
- D. Xóa public key trước.

### Câu 127
Phần cuối mục SSH key management trong slide còn nhắc đến tài nguyên/công cụ nào?

- A. Wireshark
- **B. Bitvise key management**
- C. Samba
- D. Apache2

---

## PHẦN 8 - SIMPLIFYING SSH CONNECTIONS WITH A CONFIG FILE

### Câu 128
Mục đích chính của SSH client config file được trình bày trong chương là gì?

- A. Thay thế hoàn toàn `sshd_config` trên server.
- **B. Lưu cấu hình cho các server thường xuyên kết nối để rút gọn lệnh SSH.**
- C. Cấp IP tĩnh.
- D. Quản lý DNS cache.

### Câu 129
SSH config file cục bộ của user phải được đặt trong thư mục nào?

- A. `/etc/ssh/`
- **B. `~/.ssh/`**
- C. `/var/ssh/`
- D. `/opt/ssh/`

### Câu 130
Tên file cấu hình cục bộ được chương sử dụng là gì?

- A. `ssh.conf`
- **B. `config`**
- C. `client.conf`
- D. `sshd_config`

### Câu 131
Đường dẫn đầy đủ ví dụ của SSH config cho user `tvha` là gì?

- A. `/etc/ssh/tvha/config`
- **B. `/home/tvha/.ssh/config`**
- C. `/home/tvha/ssh.conf`
- D. `/usr/tvha/.ssh/config`

### Câu 132
SSH config file của user có tồn tại mặc định không theo chương?

- A. Luôn tồn tại sau khi cài Ubuntu.
- **B. Không nhất thiết; nếu tồn tại thì SSH sẽ parse và sử dụng.**
- C. Chỉ root có file này.
- D. Chỉ được tạo bởi DHCP.

### Câu 133
Lệnh ví dụ nào được chương dùng để mở SSH config file bằng nano?

- A. `nano /etc/ssh/config`
- **B. `nano /home/your_username/.ssh/config`**
- C. `nano /etc/ssh/sshd_config`
- D. `nano ~/.ssh/authorized_keys`

### Câu 134
Trong block cấu hình SSH client, từ khóa `Host` chủ yếu định nghĩa gì?

- A. DNS server bắt buộc.
- **B. Tên bí danh/nhãn để bạn gọi cấu hình kết nối đó.**
- C. Địa chỉ MAC.
- D. Tên interface Ethernet.

### Câu 135
Trong ví dụ `Host MainServer`, `Hostname 192.168.81.133` có vai trò gì?

- A. Đặt hostname mới cho Ubuntu Server.
- **B. Chỉ định địa chỉ/hostname thực tế mà alias `MainServer` sẽ kết nối tới.**
- C. Cấu hình DNS suffix.
- D. Đổi hostname phía client.

### Câu 136
Trong SSH client config, từ khóa `port 22` dùng để lưu thông tin gì?

- A. Port DNS.
- **B. Port SSH của host đích.**
- C. Port DHCP.
- D. Port Netplan.

### Câu 137
Trong ví dụ config, từ khóa `user tvha` giúp điều gì?

- A. Tạo user mới trên server.
- **B. Chỉ định username mặc định dùng khi kết nối tới host alias đó.**
- C. Đổi owner của private key.
- D. Bật sudo tự động.

### Câu 138
Giả sử config chứa `Host MainServer`, `Hostname 192.168.81.133`, `port 22`, `user tvha`. Lệnh nào ngắn gọn nhất để dùng cấu hình đó?

- A. `ssh 192.168.81.133 -u tvha -p 22`
- **B. `ssh MainServer`**
- C. `sshd MainServer`
- D. `ssh config MainServer`

### Câu 139
Ưu điểm thực tế của SSH config đối với quản trị viên phải kết nối nhiều máy là gì?

- A. Làm tăng tốc độ CPU server.
- **B. Giảm việc phải nhớ và gõ lại IP, username, port và các tham số kết nối cho từng server.**
- C. Thay thế hoàn toàn public key.
- D. Loại bỏ yêu cầu cài SSH client.

---

# PHẦN TỔNG HỢP TÌNH HUỐNG - MỨC ĐỘ KHÓ HƠN

### Câu 140
Bạn vừa đổi hostname bằng `hostnamectl`, sau đó `sudo` báo `unable to resolve host`. Chuỗi xử lý hợp lý nhất theo chương là gì?

- A. Sửa Netplan rồi restart SSH.
- **B. Kiểm tra `/etc/hostname`, sau đó cập nhật hostname tương ứng trong `/etc/hosts`.**
- C. Xóa `/etc/nsswitch.conf`.
- D. Disable NetworkManager.

### Câu 141
Bạn đang SSH vào server từ xa để đổi từ DHCP sang static IP. Cách chuẩn bị an toàn nhất theo chương là gì?

- A. Chạy `netplan apply` ngay trong shell thường.
- **B. Vào tmux trước, sửa cấu hình, rồi apply/restart mạng để lệnh có thể tiếp tục nếu kết nối bị rớt.**
- C. Tắt SSH trước khi sửa mạng.
- D. Xóa default gateway.

### Câu 142
Một máy có dòng `hosts: files dns`. Bạn thêm `10.10.96.124 minecraftserver` vào `/etc/hosts`. Khi ứng dụng truy cập `minecraftserver`, nguồn nào được thử trước?

- A. Public DNS.
- **B. `/etc/hosts`.**
- C. DHCP server.
- D. SSH config.

### Câu 143
Bạn cấu hình SSH server chạy port 2242. Client phải dùng lệnh nào nếu user là `tvha` và IP là `192.168.81.133`?

- A. `ssh tvha@192.168.81.133:2242`
- **B. `ssh -p 2242 tvha@192.168.81.133`**
- C. `ssh --ssh-port=2242 192.168.81.133/tvha`
- D. `sshd -p 2242 tvha@192.168.81.133`

### Câu 144
Bạn muốn giảm lệnh ở câu trên thành `ssh MainServer`. Cấu hình nào phù hợp nhất với nội dung chương?

- A. `Host 192.168.81.133\nHostname MainServer\nUser 2242`
- **B. `Host MainServer\nHostname 192.168.81.133\nport 2242\nuser tvha`**
- C. `Server MainServer\nIP 192.168.81.133\nSSH 2242`
- D. `Alias MainServer = tvha@192.168.81.133:2242`

### Câu 145
Một admin copy public key sang server rồi xóa private key trên client vì nghĩ server đã có đủ thông tin. Nhận định đúng theo mô hình trong chương là gì?

- A. Vẫn đăng nhập bình thường vì server giữ public key.
- **B. Sẽ mất khả năng chứng minh danh tính bằng cặp key đó vì private key phải được giữ ở client.**
- C. Server sẽ tự tạo lại private key.
- D. Public key sẽ tự chuyển thành private key.

### Câu 146
Nếu server đã có public key trong `authorized_keys`, nhưng client dùng một private key không tương ứng, điều gì xảy ra theo cơ chế mô tả?

- A. Server vẫn cho phép vì username đúng.
- **B. Xác thực key thất bại vì hai key không phải cặp toán học khớp nhau.**
- C. Server tự tải private key từ Internet.
- D. DNS sẽ sửa key.

### Câu 147
Bạn cần vừa giữ tính ổn định của server vừa tránh IP thay đổi nhưng không muốn cấu hình static IP trực tiếp trên máy. Phương án nào thuộc hai cách được chương nêu?

- A. SSH alias.
- **B. DHCP reservation/static lease trên DHCP server.**
- C. Thêm IP vào `/etc/hosts`.
- D. Đổi port SSH.

### Câu 148
Một interface được cấu hình Netplan với `dhcp4: true`. Bạn thêm `addresses: [192.168.81.133/24]` nhưng quên tắt DHCP. Thay đổi nào phù hợp với quy trình của chương trước khi xem đây là cấu hình static đầy đủ?

- A. Đổi `version: 2` thành `version: 1`.
- **B. Chuyển `dhcp4: true` thành `dhcp4: no`.**
- C. Xóa `addresses`.
- D. Enable NetworkManager.

### Câu 149
Một server không resolve được tên nội bộ, nhưng `/etc/hosts` không có mapping và `hosts: files dns`. Bước logic tiếp theo của hệ thống là gì?

- A. Khởi động lại máy.
- **B. Truy vấn DNS theo thứ tự đã khai báo.**
- C. Dùng SSH config.
- D. Gọi DHCP để đổi hostname.

### Câu 150
Trong toàn chương, nhóm công nghệ nào tạo thành một chuỗi quản trị từ xa hợp lý nhất?

- A. `/etc/hostname` -> RAID -> Apache -> MariaDB
- **B. Static IP/Netplan -> name resolution -> OpenSSH -> SSH key -> SSH config**
- C. Samba -> NFS -> Docker -> LVM
- D. cron -> swap -> apt -> rsync

---

# CHECKLIST PHẠM VI KIẾN THỨC ĐÃ BAO PHỦ

Bộ câu hỏi trên đã phủ các nhóm nội dung của toàn bộ Chương 4:

- Setting the hostname: shell prompt/PS1, `hostname`, `hostnamectl`, `/etc/hostname`, `/etc/hosts`, lỗi resolve host.
- Managing network interfaces: `ip addr show`, `ip link set ... up/down`, `ifconfig`, `net-tools`, `iproute2`, `/sbin/ifconfig`.
- Static IP: lý do dùng IP cố định, DHCP reservation, Netplan, YAML, `/etc/netplan`, `50-cloud-init.yaml`, `dhcp4`, `addresses`, gateway, nameservers, SPACE/TAB, `netplan apply`, `--debug`.
- Bảo vệ phiên làm việc khi đổi mạng từ xa: `tmux`, detach, tiến trình tiếp tục chạy, console recovery.
- NetworkManager: vai trò daemon, desktop/server, stop/disable, mối quan hệ với Netplan và ghi chú Ubuntu Server 22.04 trong slide.
- Linux name resolution: DNS, `/etc/nsswitch.conf`, `hosts: files dns`, `/etc/hosts`, mapping tên-IP, `/etc/resolv.conf`, `systemd-resolved`, `systemd-resolve`, `resolvectl`, local DNS và forward public DNS.
- OpenSSH: server/client, `sshd`, cài package, systemd, port 22, `netstat`, `/etc/ssh/sshd_config`, cú pháp SSH theo IP/user/port, quyền user và thoát phiên.
- SSH key management: public/private key, `ssh-keygen`, `.ssh`, passphrase, permissions, `ssh-copy-id`, `authorized_keys`, cơ chế xác thực key.
- SSH client config: `~/.ssh/config`, Host alias, Hostname, Port, User và lệnh `ssh MainServer`.

