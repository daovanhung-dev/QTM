# TRẮC NGHIỆM ÔN TẬP CHƯƠNG 7 — SETTING UP NETWORK SERVICES

> **Mục tiêu:** Bao quát toàn bộ nội dung Chương 7, mức độ từ trung bình đến tương đối khó.  
> **Cách dùng:** Đáp án đúng đã được **in đậm** ngay trong từng câu để tiện tự ôn và đối chiếu.  
> **Phạm vi:** Planning your IP address scheme, `isc-dhcp-server`, DNS với BIND, secondary/slave DNS, Internet Gateway và NTP.

---

## PHẦN 1 — PLANNING YOUR IP ADDRESS SCHEME

### Câu 1
Khi lập kế hoạch sơ đồ địa chỉ IP, yếu tố nền tảng cần ước lượng trước tiên là gì?

- A. Số lượng DNS record cần tạo
- **B. Số lượng thiết bị cần kết nối vào mạng và khả năng hỗ trợ chúng**
- C. Số lượng package đã cài trên server
- D. Số lượng user có quyền `sudo`

### Câu 2
Một kế hoạch địa chỉ IP tốt ngoài nhu cầu hiện tại còn phải tính đến yếu tố nào?

- A. Chỉ số CPU load average
- B. Dung lượng swap
- **C. Khả năng tăng trưởng và mở rộng trong tương lai**
- D. Phiên bản kernel

### Câu 3
Theo chương, yếu tố chính tác động đến quy mô sơ đồ địa chỉ IP là gì?

- A. Số lượng file log
- **B. Quy mô user base**
- C. Số lượng dịch vụ systemd
- D. Số lượng partition

### Câu 4
Một văn phòng nhỏ hiện chỉ có vài người vẫn nên dự phòng tăng trưởng vì lý do nào?

- A. DHCP luôn yêu cầu tối thiểu 1.000 địa chỉ
- B. DNS chỉ chạy được trên mạng lớn
- **C. Tổ chức có thể phát triển và cần thêm thiết bị/người dùng về sau**
- D. `/24` không hỗ trợ văn phòng nhỏ

### Câu 5
Phần lớn router/network equipment phổ thông thường tích hợp sẵn dịch vụ nào?

- A. BIND authoritative DNS
- **B. DHCP server**
- C. NTP stratum-1
- D. Secondary DNS

### Câu 6
Theo ví dụ của chương, mạng mặc định thường gặp trên router phổ thông là kiểu nào?

- A. `/8`
- B. `/16`
- **C. `/24`**
- D. `/32`

### Câu 7
Nếu không cấu hình gì thêm trên một mạng `/24` điển hình, số địa chỉ host có thể sử dụng được nêu trong chương là bao nhiêu?

- A. 256
- **B. 254**
- C. 255
- D. 253

### Câu 8
Giải pháp được chương nhấn mạnh khi không gian địa chỉ hiện tại không đủ là gì?

- A. Tăng TTL DNS
- B. Tăng lease time
- **C. Chia mạng thành các subnet**
- D. Chuyển toàn bộ sang loopback

### Câu 9
Vì sao nên lập kế hoạch IP “assume the worst and plan ahead”?

- A. Vì cấu hình BIND không thể thay đổi
- B. Vì DHCP không thể mở rộng
- **C. Vì triển khai lại một IP scheme mới có thể tốn nhiều thời gian và gây phiền phức**
- D. Vì subnet mask không thể đổi sau khi cài Ubuntu

### Câu 10
Trong ví dụ mạng `192.168.1.0/24`, dải nào được dành cho network equipment?

- **A. `192.168.1.1` – `192.168.1.10`**
- B. `192.168.1.11` – `192.168.1.99`
- C. `192.168.1.100` – `192.168.1.240`
- D. `192.168.1.241` – `192.168.1.254`

### Câu 11
Trong ví dụ mạng `192.168.1.0/24`, dải nào được dành cho server?

- A. `192.168.1.1` – `192.168.1.10`
- **B. `192.168.1.11` – `192.168.1.99`**
- C. `192.168.1.100` – `192.168.1.240`
- D. `192.168.1.241` – `192.168.1.254`

### Câu 12
Trong ví dụ mạng `192.168.1.0/24`, dải DHCP được đề xuất là gì?

- A. `192.168.1.1` – `192.168.1.99`
- B. `192.168.1.11` – `192.168.1.254`
- **C. `192.168.1.100` – `192.168.1.240`**
- D. `192.168.1.241` – `192.168.1.254`

### Câu 13
Trong ví dụ mạng `192.168.1.0/24`, dải reservation được đề xuất là gì?

- A. `192.168.1.1` – `192.168.1.10`
- B. `192.168.1.11` – `192.168.1.99`
- C. `192.168.1.100` – `192.168.1.240`
- **D. `192.168.1.241` – `192.168.1.254`**

### Câu 14
Địa chỉ `192.168.1.0` trong mạng `192.168.1.0/24` có ý nghĩa gì?

- A. Broadcast address
- B. Default gateway bắt buộc
- **C. Địa chỉ của chính network và không gán cho client**
- D. DNS server mặc định

### Câu 15
Địa chỉ `192.168.1.255` trong mạng `/24` của ví dụ được dùng làm gì?

- A. NTP server
- **B. Broadcast Address và không gán cho host**
- C. DHCP server bắt buộc
- D. Loopback

### Câu 16
Sau khi phân chia các vùng IP tĩnh, chương khuyên nên làm gì để quản lý chúng?

- A. Chỉ ghi vào `/etc/hosts`
- B. Chỉ lưu trong DHCP lease file
- **C. Theo dõi bằng spreadsheet hoặc tốt hơn là internal wiki/knowledge base**
- D. Ghi vào `/var/log/syslog`

---

## PHẦN 2 — SERVING IP ADDRESSES WITH `isc-dhcp-server`

### Câu 17
Server cung cấp DHCP cần loại địa chỉ IP nào?

- A. Địa chỉ chỉ nhận từ chính DHCP server đó
- **B. Static IP**
- C. Chỉ IPv6
- D. Loopback

### Câu 18
Vì sao DHCP server không thể dựa vào static lease do chính nó cấp cho bản thân?

- A. Vì DHCP không hỗ trợ server
- **B. Vì DHCP server không thể tự gán cho mình một địa chỉ bằng chính dịch vụ DHCP của nó**
- C. Vì static lease chỉ dùng cho DNS
- D. Vì static lease chỉ tồn tại 1 giờ

### Câu 19
Lệnh cài đặt DHCP server trong chương là gì?

- A. `sudo apt install dhcpd`
- **B. `sudo apt install isc-dhcp-server`**
- C. `sudo apt install bind9`
- D. `sudo apt install ntp`

### Câu 20
Lệnh kiểm tra trạng thái daemon DHCP là gì?

- A. `service dhcp status`
- **B. `systemctl status isc-dhcp-server`**
- C. `systemctl status dhcpd.service9`
- D. `ip status dhcp`

### Câu 21
Ngay sau khi cài `isc-dhcp-server`, service bị failed có nhất thiết là lỗi nghiêm trọng không?

- A. Có, phải cài lại Ubuntu
- **B. Không; có thể do server chưa được cấu hình**
- C. Có, vì DHCP luôn chạy được ngay
- D. Có, vì interface chắc chắn hỏng

### Câu 22
File cấu hình chính mặc định của `isc-dhcp-server` trong chương nằm ở đâu?

- A. `/etc/isc/dhcp.conf`
- **B. `/etc/dhcp/dhcpd.conf`**
- C. `/var/lib/dhcp/dhcpd.conf`
- D. `/etc/default/dhcpd.conf`

### Câu 23
Chương sao lưu file cấu hình DHCP mặc định bằng lệnh nào?

- A. `cp /etc/dhcp/dhcpd.conf /etc/dhcp/dhcpd.bak`
- **B. `sudo mv /etc/dhcp/dhcpd.conf /etc/dhcp/dhcpd.conf.orig`**
- C. `sudo rm /etc/dhcp/dhcpd.conf`
- D. `sudo tar /etc/dhcp/dhcpd.conf`

### Câu 24
Sau khi chuyển file mặc định thành `.orig`, file `/etc/dhcp/dhcpd.conf` mới được tạo theo hướng nào?

- A. Giữ nguyên toàn bộ cấu hình mẫu
- **B. Bắt đầu từ một file trống và tự cấu hình**
- C. Chỉ chứa DNS
- D. Chỉ chứa lease file

### Câu 25
Trong DHCP, `default-lease-time` quy định điều gì?

- A. Thời gian tối đa tuyệt đối của mọi lease
- **B. Thời gian lease mặc định nếu client không yêu cầu thời gian dài hơn cụ thể**
- C. Thời gian refresh DNS
- D. Thời gian daemon khởi động

### Câu 26
Trong DHCP, `max-lease-time` có ý nghĩa gì?

- A. Thời gian tối thiểu của lease
- **B. Thời gian tối đa client được phép giữ lease**
- C. Thời gian cache DNS
- D. Thời gian retry của slave DNS

### Câu 27
Ví dụ cấu hình trong chương đặt `default-lease-time` là bao nhiêu?

- A. `86400`
- **B. `43200`**
- C. `3600`
- D. `604800`

### Câu 28
Ví dụ cấu hình trong chương đặt `max-lease-time` là bao nhiêu?

- **A. `86400`**
- B. `43200`
- C. `3600`
- D. `120`

### Câu 29
Dòng `option subnet-mask 255.255.255.0;` truyền thông tin gì cho client?

- A. DNS server
- B. Broadcast address
- **C. Subnet mask `/24`**
- D. Lease file

### Câu 30
`option broadcast-address 192.168.1.255;` có tác dụng gì?

- A. Cấp IP `.255` cho client đầu tiên
- **B. Thông báo cho client địa chỉ broadcast của subnet**
- C. Đặt DNS forwarder
- D. Cấu hình IP của DHCP server

### Câu 31
Vì sao địa chỉ broadcast thường không được gán cho host?

- A. Vì đó là địa chỉ loopback
- **B. Vì nó được dùng làm địa chỉ broadcast của subnet**
- C. Vì nó luôn là DNS
- D. Vì nó là network address đầu tiên

### Câu 32
`option domain-name "facebook.com";` trong ví dụ khiến hostname `cauha` được tham chiếu như thế nào?

- A. `facebook.cauha.com`
- **B. `cauha.facebook.com`**
- C. `cauha@facebook.com`
- D. `facebook.com/cauha`

### Câu 33
Tùy chọn `authoritative;` tuyên bố điều gì?

- A. DHCP server chỉ là backup
- **B. DHCP server này là authoritative cho network**
- C. Server là authoritative DNS
- D. Lease không bao giờ hết hạn

### Câu 34
Theo chương, trường hợp thông thường chỉ có một DHCP server cho network thì nên làm gì với `authoritative;`?

- A. Xóa nó
- **B. Bao gồm nó trong file cấu hình**
- C. Thay bằng `not authoritative;`
- D. Chỉ dùng trên slave DNS

### Câu 35
Khối nào dưới đây đúng với ví dụ subnet DHCP trong chương?

- A. `subnet 192.168.99.0 netmask 255.255.0.0`
- **B. `subnet 192.168.99.0 netmask 255.255.255.0`**
- C. `subnet 192.168.99.100 netmask 255.255.255.0`
- D. `subnet 192.168.99.255 netmask 255.255.255.0`

### Câu 36
Pool địa chỉ DHCP trong ví dụ là gì?

- A. `192.168.99.1` – `192.168.99.254`
- B. `192.168.99.2` – `192.168.99.99`
- **C. `192.168.99.100` – `192.168.99.240`**
- D. `192.168.99.241` – `192.168.99.254`

### Câu 37
Trong ví dụ, `option routers 192.168.99.2;` cung cấp cho client thông tin gì?

- A. IP của NTP server
- **B. Default gateway/router**
- C. Broadcast address
- D. Lease server

### Câu 38
Trong ví dụ, `option domain-name-servers 192.168.99.2;` cung cấp gì cho client?

- A. Default route
- **B. DNS server**
- C. Subnet mask
- D. NTP stratum

### Câu 39
Nếu `option routers` và `option domain-name-servers` trỏ tới địa chỉ sai, hậu quả được chương cảnh báo là gì?

- A. Client vẫn truy cập mọi thứ bình thường
- **B. Client nhận lease nhưng có thể không kết nối được tới tài nguyên cần thiết**
- C. DHCP server tự chuyển sang IPv6
- D. Lease tự bị xóa ngay

### Câu 40
Sau khi hoàn thiện `dhcpd.conf`, còn một bước quan trọng để service lắng nghe request là gì?

- A. Đổi hostname
- **B. Khai báo network interface mà DHCP server sẽ listen**
- C. Tạo BIND zone
- D. Mở `/etc/ntp.conf`

### Câu 41
File dùng để chỉ định interface cho `isc-dhcp-server` trong chương là gì?

- A. `/etc/dhcp/interfaces`
- **B. `/etc/default/isc-dhcp-server`**
- C. `/etc/network/dhcp`
- D. `/var/lib/dhcp/interfaces`

### Câu 42
Dòng nào là ví dụ khai báo interface IPv4 đúng trong chương?

- A. `INTERFACE="ens33"`
- **B. `INTERFACESv4="ens33"`**
- C. `DHCP_INTERFACE=ens33`
- D. `listen="ens33"`

### Câu 43
Lệnh khởi động DHCP service sau khi cấu hình là gì?

- A. `sudo systemctl enable dhcp`
- **B. `sudo systemctl start isc-dhcp-server`**
- C. `sudo dhcpd --start-all`
- D. `sudo ip dhcp start`

### Câu 44
Sau khi start DHCP, lệnh nào nên dùng để xác nhận daemon đang `active (running)`?

- A. `ip addr show`
- **B. `sudo systemctl status isc-dhcp-server`**
- C. `dig localhost`
- D. `ntpq -p`

### Câu 45
Các lease DHCP được ghi vào file nào?

- A. `/var/log/dhcpd.leases`
- **B. `/var/lib/dhcp/dhcpd.leases`**
- C. `/etc/dhcp/leases`
- D. `/run/dhcp/leases.conf`

### Câu 46
File `dhcpd.leases` chứa loại thông tin nào?

- A. Chỉ lease đang active
- **B. Active và previous DHCP leases**
- C. Chỉ DNS cache
- D. Chỉ default gateway

### Câu 47
DHCP server còn ghi thông tin hoạt động vào system log nào trong chương?

- A. `/var/log/auth.log`
- **B. `/var/log/syslog`**
- C. `/var/log/messages/dhcp`
- D. `/etc/log/syslog`

### Câu 48
Lệnh nào được dùng để theo dõi `syslog` theo thời gian thực khi quan sát DHCP?

- A. `cat -f /var/log/syslog`
- **B. `sudo tail -f /var/log/syslog`**
- C. `grep -f /var/log/syslog`
- D. `watch /var/log/syslog`

### Câu 49
Khi DHCP daemon gặp lỗi cấu hình, điều nào nên được kiểm tra trước theo chương?

- A. Chỉ BIND zone serial
- **B. Các giá trị static IP và `/etc/dhcp/dhcpd.conf` có đúng và khớp nhau không**
- C. Chỉ NTP
- D. Chỉ hostname

### Câu 50
Điều kiện quan trọng về network của IP tĩnh trên DHCP server so với pool cấp cho client là gì?

- A. Phải ở network khác
- **B. Phải thuộc cùng network phù hợp với dải IP mà server đang cấp**
- C. Phải luôn là `.1`
- D. Phải là broadcast address

---

## PHẦN 3 — SETTING UP DNS WITH BIND

### Câu 51
Lợi ích quan trọng của local DNS server trong tổ chức là gì?

- A. Tự động cấp IP
- **B. Phân giải được các hostname nội bộ mà external DNS không biết**
- C. Đồng bộ thời gian
- D. Tạo firewall

### Câu 52
File chứa thông tin về host và IP trong DNS nội bộ được gọi là gì?

- A. Lease File
- **B. Zone File**
- C. Shadow File
- D. Route File

### Câu 53
Nếu local DNS không thể tự đáp ứng một truy vấn external, theo mô hình chương mô tả nó sẽ làm gì?

- A. Xóa truy vấn
- B. Chuyển sang DHCP
- **C. Chuyển/forward request tới external DNS server**
- D. Reboot BIND

### Câu 54
BIND là viết tắt của gì theo chương?

- A. Binary Internet Name Database
- **B. Berkeley Internet Name Daemon**
- C. Basic Internal Network Domain
- D. Berkeley IP Network Daemon

### Câu 55
Package BIND được cài bằng lệnh nào?

- A. `sudo apt install bind`
- **B. `sudo apt install bind9`**
- C. `sudo apt install named`
- D. `sudo apt install dns9`

### Câu 56
Ngay sau khi cài BIND9, chức năng cơ bản nhất được chương mô tả là gì?

- A. DHCP authoritative server
- **B. Caching Name Server**
- C. NTP master
- D. Internet gateway

### Câu 57
Caching Name Server trong ngữ cảnh này hoạt động theo cách nào?

- A. Tự tạo mọi DNS name
- **B. Cache các response nhận từ external DNS server**
- C. Chỉ phân giải `/etc/hosts`
- D. Chỉ trả lời reverse DNS

### Câu 58
File được chỉnh để cấu hình forwarders của BIND là gì?

- A. `/etc/bind/named.conf.local`
- **B. `/etc/bind/named.conf.options`**
- C. `/etc/bind/named.conf.default-zones`
- D. `/etc/dhcp/dhcpd.conf`

### Câu 59
Hai DNS forwarder được dùng trong ví dụ là gì?

- A. `1.1.1.1` và `1.0.0.1`
- **B. `8.8.8.8` và `8.8.4.4`**
- C. `192.168.99.1` và `192.168.99.2`
- D. `127.0.0.1` và `127.0.0.53`

### Câu 60
Sau khi chỉnh forwarders, lệnh nào được dùng để restart BIND?

- A. `sudo service dns restart`
- **B. `sudo systemctl restart bind9`**
- C. `sudo systemctl reload isc-dhcp-server`
- D. `sudo bind9 --restart`

### Câu 61
Lệnh kiểm tra BIND có `active (running)` là gì?

- A. `dig bind9`
- **B. `systemctl status bind9`**
- C. `bind9 status`
- D. `systemctl status named9.conf`

### Câu 62
Cách dễ nhất theo chương để cấu hình các client dùng DNS server mới là gì?

- A. Sửa thủ công `/etc/hosts` trên từng client
- **B. Cấu hình DHCP để cấp địa chỉ DNS server cho client khi nhận/renew lease**
- C. Cài BIND trên tất cả client
- D. Tắt DHCP

### Câu 63
Tại sao chạy `dig facebook.com` lần thứ hai thường nhanh hơn lần đầu trong ví dụ?

- A. DHCP đổi gateway
- **B. Kết quả đã được DNS server cache**
- C. NTP giảm latency
- D. BIND bỏ qua DNS hoàn toàn

### Câu 64
File cấu hình chính `/etc/bind/named.conf` mặc định include bao nhiêu file cấu hình quan trọng được nêu trên slide?

- A. 1
- B. 2
- **C. 3**
- D. 4

### Câu 65
Ba file được include trong `/etc/bind/named.conf` gồm gì?

- A. `options`, `zones`, `leases`
- **B. `named.conf.options`, `named.conf.local`, `named.conf.default-zones`**
- C. `dhcpd.conf`, `ntp.conf`, `named.conf.local`
- D. `hosts`, `resolv.conf`, `syslog`

### Câu 66
Để khai báo một local zone tùy chỉnh, chương chỉnh file nào?

- A. `/etc/bind/named.conf.options`
- **B. `/etc/bind/named.conf.local`**
- C. `/etc/bind/named.conf.default-zones`
- D. `/etc/resolv.conf`

### Câu 67
Đoạn cấu hình nào thể hiện zone `facebook.com` là master?

- A. `type slave;`
- **B. `type master;`**
- C. `type cache;`
- D. `type forward-only;`

### Câu 68
Trong ví dụ, master zone `facebook.com` trỏ tới zone file nào?

- A. `/var/lib/bind/facebook.com`
- **B. `/etc/bind/www.facebook.com`**
- C. `/etc/bind/facebook.zone.db`
- D. `/var/cache/bind/facebook.com`

### Câu 69
`$TTL 1D` trong zone file quy định gì?

- A. DNS server phải restart mỗi 1 ngày
- **B. Thời gian một DNS record có thể được cache**
- C. Lease DHCP mặc định
- D. Chu kỳ NTP poll

### Câu 70
Khi TTL hết hạn, điều gì xảy ra với một lookup đã cache?

- A. DNS cache giữ vĩnh viễn
- **B. Server cần lấy lại/fetch kết quả DNS khi truy vấn tiếp theo đến**
- C. DHCP cấp IP mới
- D. BIND tự tắt

### Câu 71
Dòng `@ IN SOA ...` trong zone file biểu thị record loại gì?

- A. Name Server
- **B. Start of Authority**
- C. Canonical Name
- D. Address

### Câu 72
SOA trong ví dụ thể hiện điều gì về DNS server?

- A. Chỉ là caching server
- **B. Server có authority đối với domain/zone đó**
- C. Server chỉ là slave
- D. Server là DHCP router

### Câu 73
Địa chỉ email `hostmaster@facebook.com` trong SOA được viết theo cú pháp BIND như thế nào?

- A. `hostmaster@facebook.com.`
- **B. `hostmaster.facebook.com.`**
- C. `hostmaster/facebook.com`
- D. `hostmaster:facebook.com`

### Câu 74
Trường `serial` trong zone file đặc biệt quan trọng khi làm gì?

- A. Đổi DHCP pool
- **B. Cập nhật zone để DNS/slave nhận biết có thay đổi**
- C. Mở port 123
- D. Bật IP forwarding

### Câu 75
Khi sửa zone file, quy tắc quan trọng với `serial` là gì?

- A. Giảm đi ít nhất 1
- **B. Tăng lên ít nhất 1**
- C. Luôn đặt bằng TTL
- D. Xóa serial

### Câu 76
Nếu sửa zone record nhưng quên tăng serial, vấn đề nào có thể xảy ra?

- A. DHCP ngừng cấp lease
- **B. BIND/slave có thể không nhận biết rằng zone đã thay đổi**
- C. Kernel mất route
- D. NTP chuyển stratum

### Câu 77
Giá trị `8H ; refresh` trong SOA cho biết gì?

- A. Master restart sau 8 giờ
- **B. Slave kiểm tra cập nhật zone theo chu kỳ 8 giờ**
- C. DNS cache chỉ sống 8 giờ
- D. DHCP lease kéo dài 8 giờ

### Câu 78
Giá trị `4H ; retry` mô tả điều gì?

- A. TTL mặc định
- **B. Thời gian slave chờ trước khi thử check lại sau khi lần trước có lỗi**
- C. Thời gian shutdown master
- D. Chu kỳ lease renewal

### Câu 79
Trong ví dụ zone file, giá trị `expire` là bao nhiêu?

- A. `4H`
- B. `1D`
- **C. `4W`**
- D. `8H`

### Câu 80
Trong ví dụ zone file, giá trị `minimum` là bao nhiêu?

- A. `8H`
- B. `4H`
- C. `4W`
- **D. `1D`**

### Câu 81
Record loại `A` dùng để làm gì trong zone file ví dụ?

- A. Trỏ hostname tới hostname khác
- **B. Ánh xạ hostname tới địa chỉ IPv4**
- C. Khai báo authoritative email
- D. Chỉ định lease time

### Câu 82
Record `NS` dùng để xác định gì?

- A. Default gateway
- **B. Name server của zone**
- C. DHCP pool
- D. NTP peer

### Câu 83
Trong ví dụ, name server được khai báo là gì?

- A. `mail.facebook.com`
- **B. `www.facebook.com`**
- C. `fileserv.facebook.com`
- D. `web01.facebook.com`

### Câu 84
Theo ví dụ, `www` được ánh xạ tới IP nào?

- A. `192.168.99.2`
- **B. `192.168.99.9`**
- C. `192.168.1.9`
- D. `127.0.0.1`

### Câu 85
Theo zone file mẫu, `fileserv` được ánh xạ tới đâu?

- A. `192.168.99.2`
- **B. `192.168.99.9`**
- C. `8.8.8.8`
- D. `127.0.0.53`

### Câu 86
Theo zone file mẫu, `mailserv` được cấu hình bằng record nào?

- **A. `A`**
- B. `CNAME`
- C. `SOA`
- D. `NS`

### Câu 87
Record `mail IN CNAME mailserv.` có ý nghĩa gì?

- A. `mail` có IP riêng độc lập
- **B. `mail` là alias/pointer trỏ tới hostname `mailserv`**
- C. `mail` là authoritative server
- D. `mail` là DHCP client

### Câu 88
Khác biệt then chốt giữa `A` và `CNAME` trong ví dụ là gì?

- A. Cả hai đều chỉ chứa IP
- **B. `A` trỏ hostname tới IP, còn `CNAME` trỏ một tên tới một hostname khác**
- C. `A` chỉ dùng cho slave
- D. `CNAME` chỉ dùng cho DHCP

### Câu 89
Vì sao chương nhấn mạnh nên có record cho chính DNS server (`www`) trong zone file?

- A. Vì nếu không DHCP sẽ crash
- **B. Vì BIND có thể phàn nàn và từ chối load zone**
- C. Vì NTP yêu cầu
- D. Vì Linux kernel yêu cầu

### Câu 90
Sau khi tạo/sửa zone file, bước áp dụng cấu hình được nêu là gì?

- A. Reboot toàn bộ máy
- **B. `sudo systemctl restart bind9`**
- C. `sudo systemctl restart ntp`
- D. `sudo systemctl restart networking`

### Câu 91
Sau khi restart BIND, nên dùng lệnh nào để kiểm tra lỗi/load zone?

- A. `ping bind9`
- **B. `systemctl status bind9`**
- C. `ip route`
- D. `cat /etc/hostname`

### Câu 92
Nếu BIND không chạy hoặc zone không load, lệnh log nào được chương gợi ý?

- A. `tail /var/lib/bind`
- **B. `cat /var/log/syslog | grep bind9`**
- C. `grep dhcp /etc/bind`
- D. `ntpq -p`

### Câu 93
Ngoài `syslog`, lệnh journal nào được dùng để xem log BIND?

- A. `sudo journalctl -u dhcp`
- **B. `sudo journalctl -eu bind9`**
- C. `sudo dmesg bind9`
- D. `sudo systemctl logs bind9`

### Câu 94
Local resolver trên Linux hiện đại tạo thêm lớp nào giữa ứng dụng và DNS server?

- A. Một DHCP server mới
- **B. Lớp cache DNS lookup trên local computer**
- C. Một NTP relay
- D. Một default route

### Câu 95
Lệnh được chương dùng để xem DNS Servers mà systemd resolver đang dùng là gì?

- A. `resolvectl dns`
- **B. `systemd-resolve --status |grep DNS Servers`**
- C. `systemctl status dns`
- D. `dig --status`

---

## PHẦN 4 — CREATING A SECONDARY (SLAVE) DNS SERVER

### Câu 96
Lý do chính để triển khai secondary/slave DNS là gì?

- A. Tăng DHCP pool
- **B. Tạo redundancy để name resolution vẫn hoạt động nếu primary gặp sự cố**
- C. Thay NTP
- D. Giảm subnet mask

### Câu 97
Nếu chỉ có một DNS server và server đó hỏng, hậu quả được chương mô tả là gì?

- A. Chỉ mất DHCP
- **B. User có thể không resolve được cả tên nội bộ lẫn bên ngoài**
- C. Chỉ mất NTP
- D. Client tự động dùng broadcast address

### Câu 98
Slave DNS nhận zone records từ đâu?

- A. DHCP server
- **B. Master/primary DNS server**
- C. NTP server
- D. Internet gateway

### Câu 99
Trước khi slave nhận zone, primary cần được cấu hình để làm gì?

- A. Chặn transfer
- **B. Cho phép transfer zone records tới slave**
- C. Đổi thành `type slave`
- D. Xóa forwarders

### Câu 100
Cấu hình `allow-transfer` được thêm vào file nào trên primary trong ví dụ?

- A. `/etc/bind/named.conf.local`
- **B. `/etc/bind/named.conf.options`**
- C. `/etc/dhcp/dhcpd.conf`
- D. `/etc/ntp.conf`

### Câu 101
Ví dụ `allow-transfer` của primary cho phép địa chỉ slave nào?

- A. `192.168.99.2`
- **B. `192.168.99.99`**
- C. `192.168.99.9`
- D. `8.8.8.8`

### Câu 102
Trên slave DNS, vì sao không cần dòng `allow-transfer` giống primary?

- A. Slave không chạy BIND
- **B. Slave chỉ nhận records, không đóng vai trò nguồn transfer trong cấu hình đang xét**
- C. Slave không có zone
- D. Slave chỉ dùng DHCP

### Câu 103
Trên slave, forwarders trong `named.conf.options` được xử lý thế nào theo chương?

- A. Luôn xóa
- **B. Vẫn uncomment/cấu hình tương tự để forward truy vấn cần thiết**
- C. Thay bằng DHCP lease
- D. Chỉ trỏ tới master

### Câu 104
Trong `/etc/bind/named.conf.local` của slave, zone được khai báo bằng loại nào?

- A. `type master;`
- **B. `type slave;`**
- C. `type cache;`
- D. `type backup;`

### Câu 105
Trong cấu hình slave mẫu, `masters { 192.168.99.9; };` có ý nghĩa gì?

- A. Chỉ định default gateway
- **B. Chỉ định IP của primary/master DNS**
- C. Chỉ định NTP master
- D. Chỉ định DHCP pool

### Câu 106
Zone file trên slave được lưu ở đâu trong ví dụ?

- A. `/etc/bind/www.facebook.com`
- **B. `/var/lib/bind/www.facebook.com`**
- C. `/var/log/bind/www.facebook.com`
- D. `/etc/dhcp/www.facebook.com`

### Câu 107
Vì sao zone file của slave được đặt ở vị trí khác master?

- A. Vì slave dùng ext4 khác
- **B. Vì permission trên slave/master khác và `/var/lib/bind` phù hợp để BIND ghi dữ liệu slave**
- C. Vì DHCP yêu cầu
- D. Vì NTP yêu cầu

### Câu 108
Sau khi cấu hình slave, chương yêu cầu restart BIND ở đâu?

- A. Chỉ slave
- B. Chỉ master
- **C. Cả slave và master**
- D. Không cần restart

### Câu 109
Dấu hiệu trong `systemctl status bind9` trên slave cho thấy zone transfer hoạt động là gì?

- A. DHCPACK
- **B. Log thể hiện transfer zone/serial từ master thành công**
- C. `ntpd active`
- D. `ip_forward=1`

### Câu 110
Sau khi thêm secondary DNS, DHCP server cần được sửa để làm gì?

- A. Chỉ cấp secondary làm gateway
- **B. Cấp cả primary và secondary DNS cho client**
- C. Bỏ DNS primary
- D. Đổi subnet mask

### Câu 111
Sau khi sửa danh sách DNS trong DHCP, bước tiếp theo trong chương là gì?

- A. Restart BIND trên client
- **B. Restart `isc-dhcp-server` và kiểm tra status**
- C. Restart NTP
- D. Xóa lease file

### Câu 112
Bài test failover được thực hiện bằng cách nào?

- A. Tắt DHCP slave
- **B. Dừng primary DNS rồi kiểm tra client vẫn phân giải được qua secondary**
- C. Xóa zone trên slave
- D. Đóng port 123

### Câu 113
Lệnh `dig @192.168.99.9 fileserv` có ý nghĩa gì?

- A. Kiểm tra DHCP server `.9`
- **B. Buộc `dig` truy vấn trực tiếp DNS server `192.168.99.9` cho tên `fileserv`**
- C. Cấu hình DNS `.9`
- D. Start BIND `.9`

### Câu 114
Lệnh `dig @192.168.99.99 fileserv` được dùng để kiểm tra gì?

- A. Default gateway
- **B. Secondary DNS server có resolve `fileserv` đúng không**
- C. NTP peer
- D. DHCP lease

---

## PHẦN 5 — SETTING UP AN INTERNET GATEWAY

### Câu 115
Router thương mại thường tích hợp cùng lúc các chức năng nào được chương nhắc đến?

- A. NTP, RAID, LVM
- **B. DNS, DHCP và routing**
- C. Samba, NFS, SCP
- D. MariaDB, Apache, NGINX

### Câu 116
Ubuntu/Linux server có thể được dùng để hợp nhất các chức năng nào trên cùng một máy?

- A. Chỉ DNS
- **B. DHCP, DNS và routing**
- C. Chỉ NTP
- D. Chỉ file sharing

### Câu 117
Một server làm Internet Gateway theo mô hình chương cần tối thiểu bao nhiêu Ethernet port?

- A. 1
- **B. 2**
- C. 3
- D. 4

### Câu 118
Vai trò điển hình của hai Ethernet port trên gateway là gì?

- A. Một cho DNS, một cho NTP
- **B. Một nối modem/internet device, một nối switch/mạng LAN**
- C. Một cho primary DNS, một cho slave DNS
- D. Một cho `/24`, một cho `/16`

### Câu 119
Nếu cần phục vụ thiết bị Wi‑Fi trong mô hình này, chương nói cần thêm gì?

- A. Secondary DNS
- **B. Access point**
- C. NTP server
- D. RAID controller

### Câu 120
Vì sao việc tự dựng Linux gateway cần đặc biệt chú ý security?

- A. Vì gateway không có IP
- **B. Vì thiết bị nằm giữa mạng nội bộ và Internet là mục tiêu tấn công thường xuyên**
- C. Vì BIND không hỗ trợ firewall
- D. Vì DHCP dùng port 123

### Câu 121
Các biện pháp security nào được chương khuyên chú ý khi dựng Internet Gateway?

- A. Chỉ đổi hostname
- **B. Firewall, hạn chế SSH, strong passwords, security patches và công cụ như fail2ban**
- C. Chỉ tăng TTL
- D. Chỉ tăng lease time

### Câu 122
Theo mặc định, routing giữa hai interface trên Ubuntu server ở ngữ cảnh này có trạng thái thế nào?

- A. Luôn bật
- **B. Bị disable**
- C. Chỉ bật cho IPv6
- D. Chỉ bật khi BIND chạy

### Câu 123
Lệnh nào trong chương bật IPv4 forwarding ngay lập tức?

- A. `echo 0 | sudo tee /proc/sys/net/ipv4/ip_forward`
- **B. `echo 1 | sudo tee /proc/sys/net/ipv4/ip_forward`**
- C. `sudo ip route enable`
- D. `sudo systemctl start gateway`

### Câu 124
Sau khi ghi `1` vào `/proc/sys/net/ipv4/ip_forward`, server có thêm khả năng gì?

- A. Trở thành NTP stratum 1
- **B. Route traffic giữa các interface, tức đóng vai trò router/gateway**
- C. Tự cấp DHCP lease
- D. Tự tạo DNS zone

---

## PHẦN 6 — KEEPING YOUR CLOCK IN SYNC WITH NTP

### Câu 125
Vì sao đồng bộ thời gian đặc biệt quan trọng trên Linux server?

- A. Để tăng số lượng IP
- **B. Clock sai có thể gây hành vi bất thường, đặc biệt với các công cụ đồng bộ file**
- C. Để BIND cấp lease
- D. Để mở port 80

### Câu 126
Package NTP được cài bằng lệnh nào trong chương?

- A. `sudo apt install chrony`
- **B. `sudo apt install ntp`**
- C. `sudo apt install ntpd9`
- D. `sudo apt install timesync`

### Câu 127
Sau khi cài package `ntp`, daemon được mô tả như thế nào?

- A. Phải start thủ công trong mọi trường hợp
- **B. Khởi động ngay và duy trì thời gian được cập nhật**
- C. Chỉ chạy khi có DHCP
- D. Chỉ chạy trên workstation

### Câu 128
Lệnh kiểm tra trạng thái NTP daemon là gì?

- A. `ntp status`
- **B. `systemctl status ntp`**
- C. `systemctl status ntpq`
- D. `timedatectl ntp-server`

### Câu 129
File cấu hình NTP được chương chỉ ra là gì?

- A. `/etc/default/ntp`
- **B. `/etc/ntp.conf`**
- C. `/var/lib/ntp.conf`
- D. `/etc/network/ntp`

### Câu 130
Cấu hình mặc định trong `/etc/ntp.conf` thường khiến server đồng bộ với đâu?

- A. DHCP server
- **B. Ubuntu NTP pool/time servers**
- C. DNS zone
- D. Gateway broadcast address

### Câu 131
Trong tổ chức có rất nhiều client, vì sao có thể nên triển khai local NTP server?

- A. Để tất cả client có IP tĩnh
- **B. Để chỉ một server giao tiếp với NTP bên ngoài, còn các node nội bộ đồng bộ qua local server**
- C. Để bỏ DNS
- D. Để tăng số subnet

### Câu 132
Chương gợi ý một máy nào có thể kiêm local NTP server?

- A. Chỉ database server
- **B. Internet gateway đã cấu hình ở phần trước**
- C. Chỉ workstation
- D. Chỉ slave DNS

### Câu 133
Lệnh nào được dùng để xem thống kê NTP peer và xác minh connectivity/synchronization?

- A. `ntp -status`
- **B. `ntpq -p`**
- C. `systemctl peers ntp`
- D. `dig ntp`

### Câu 134
Trong output `ntpq -p`, cột `remote` biểu thị gì?

- A. Local clock
- **B. Các NTP server mà máy đang kết nối tới**
- C. DNS forwarders
- D. DHCP clients

### Câu 135
Trong output `ntpq -p`, cột `refid` biểu thị gì?

- A. IP của DHCP client
- **B. NTP server mà remote server đang tham chiếu/kết nối tới**
- C. Default gateway
- D. Local subnet mask

### Câu 136
Trong output `ntpq -p`, cột `st` biểu thị gì?

- A. Status của systemd
- **B. Stratum của NTP server**
- C. Static IP
- D. Serial DNS

### Câu 137
Theo chương, với `st` thì xu hướng nào thường tốt hơn?

- A. Số càng lớn càng gần nguồn thời gian
- **B. Số càng thấp thì càng gần nguồn hơn và thường tốt hơn**
- C. Luôn phải bằng 16
- D. Luôn bằng 0

### Câu 138
Trong `ntpq -p`, cột `t` chỉ loại kết nối NTP như thế nào?

- A. TTL
- **B. Unicast, broadcast, multicast hoặc manycast**
- C. TCP/UDP port
- D. Timezone

### Câu 139
Cột `when` trong `ntpq -p` biểu thị gì?

- A. Khi hệ thống boot
- **B. Bao lâu kể từ lần server được poll gần nhất**
- C. Thời điểm lease hết hạn
- D. Thời gian zone transfer

### Câu 140
Cột `poll` biểu thị gì?

- A. Số lượng client
- **B. Tần suất/khoảng thời gian server sẽ được poll**
- C. DNS serial
- D. Gateway hop count

### Câu 141
Trong ví dụ, giá trị `poll` phổ biến được đề cập là bao nhiêu giây?

- A. 8
- B. 32
- **C. 64**
- D. 123

### Câu 142
Cột `reach` trong `ntpq -p` được hiểu như thế nào?

- A. Số IP còn trống
- **B. Kết quả của tám lần NTP update gần nhất, biểu diễn ở dạng octal**
- C. Thời gian cache DNS
- D. Số route hiện có

### Câu 143
Nếu cả 8 lần update gần nhất đều thành công, `reach` sẽ hiển thị gì theo chương?

- A. `11111111`
- B. `255`
- **C. `377`**
- D. `888`

### Câu 144
Khi NTP daemon mới khởi động, điều gì có thể xảy ra với `reach`?

- A. Lập tức luôn là `377`
- **B. Có thể cần một thời gian mới đạt tới `377`**
- C. Luôn là `999`
- D. Không bao giờ thay đổi

### Câu 145
Cột `delay` trong nhóm thống kê NTP dùng để phản ánh điều gì?

- A. Chênh lệch serial DNS
- **B. Độ trễ khi liên lạc với NTP server, tính theo milliseconds**
- C. DHCP lease time
- D. TTL zone

### Câu 146
Cột `offset` phản ánh điều gì?

- A. Số hop tới gateway
- **B. Chênh lệch giữa local clock và clock của server**
- C. Số giây từ lần poll gần nhất
- D. DNS cache age

### Câu 147
Cột `jitter` phản ánh điều gì theo phần giải thích trong chương?

- A. Lease fluctuation
- **B. Độ biến thiên/latency của kết nối mạng giữa server của bạn và NTP server**
- C. DNS record type
- D. Số lượng zone

### Câu 148
Để một máy trong mạng đóng vai trò NTP server cho các node khác, điều kiện network quan trọng nào được nêu?

- A. Mở port 53
- B. Mở port 67
- **C. Port 123 phải được phép qua firewall giữa các máy**
- D. Mở port 80

### Câu 149
Client nội bộ muốn đồng bộ với local NTP server cần chỉnh gì?

- A. DHCP `range`
- **B. Các `pool` address trong `/etc/ntp.conf` để trỏ tới IP hoặc FQDN của local NTP server**
- C. BIND `allow-transfer`
- D. `/proc/sys/net/ipv4/ip_forward`

### Câu 150
Sau khi đổi NTP pool trên các node client, bước tiếp theo là gì?

- A. Restart DHCP
- **B. Restart dịch vụ NTP trên các node để chúng bắt đầu đồng bộ với master/local server**
- C. Restart BIND
- D. Xóa `/etc/ntp.conf`

### Câu 151
Dòng cấu hình dạng `restrict 192.168.123.0 mask 255.255.255.0 notrust` được chương đề nghị sửa theo hướng nào cho local NTP?

- A. Giữ nguyên `notrust`
- **B. Bỏ comment, đổi network/mask cho đúng mạng của mình và bỏ từ khóa `notrust`**
- C. Đổi thành `allow-transfer`
- D. Đổi thành `authoritative`

### Câu 152
Mục đích của dòng `restrict 192.168.1.0 mask 255.255.255.0` sau khi chỉnh là gì?

- A. Cho phép Internet truy cập toàn quyền NTP
- **B. Giới hạn NTP server cho local clients và chỉ cho phép quyền truy cập phù hợp/read-only vì lý do an toàn**
- C. Tạo DHCP reservation
- D. Khai báo DNS slave

### Câu 153
Theo chương, local NTP server có bắt buộc cho mọi mạng không?

- A. Có, mọi mạng đều phải có
- **B. Không; tùy quy mô mạng, nhưng NTP nên có trên các Linux workstation/server để đảm bảo đồng bộ thời gian**
- C. Chỉ cần trên DNS server
- D. Chỉ cần trên DHCP server

### Câu 154
Khác biệt được chương nêu giữa Ubuntu workstation và Ubuntu Server về NTP là gì?

- A. Workstation không bao giờ đồng bộ thời gian
- **B. Workstation thường đã được cấu hình đồng bộ với Ubuntu time servers, còn bản Server thường không cài NTP sẵn**
- C. Server luôn là stratum 1
- D. Workstation luôn phải cài BIND

---

# PHẦN TỔNG HỢP — CÂU HỎI TÌNH HUỐNG KHÓ HƠN

### Câu 155
Một DHCP server có IP tĩnh `192.168.50.2/24`, nhưng `dhcpd.conf` lại khai báo pool thuộc `192.168.99.0/24`. Service không start đúng. Kiểm tra nào phù hợp nhất với hướng troubleshooting của chương?

- A. Tăng DNS TTL
- **B. Kiểm tra và làm cho static IP/network của server khớp với subnet/pool được khai báo trong DHCP**
- C. Cài NTP
- D. Bật IP forwarding

### Câu 156
Client nhận được IP từ DHCP nhưng không truy cập được ra ngoài và cũng không resolve được tên. Trong cấu hình, cả `option routers` lẫn `option domain-name-servers` đều trỏ nhầm IP. Nhận định nào đúng nhất?

- A. DHCP chắc chắn không cấp được lease
- **B. DHCP vẫn có thể cấp lease, nhưng gateway và DNS sai khiến client gần như không dùng mạng đúng cách**
- C. BIND tự sửa hai địa chỉ này
- D. NTP tự cung cấp gateway

### Câu 157
Bạn vừa thêm một host mới vào master DNS zone file nhưng slave không nhận thay đổi. Bạn đã restart BIND, nhưng quên một chi tiết quan trọng. Chi tiết đó có khả năng là gì?

- A. Giảm TTL xuống 0
- **B. Tăng `serial` của zone**
- C. Đổi `type master` thành `type cache`
- D. Đổi DHCP lease time

### Câu 158
Bạn muốn `mail.facebook.com` dùng chung đích với `mailserv.facebook.com` mà không lặp lại IP trong record `mail`. Record phù hợp theo ví dụ là gì?

- A. `mail IN A mailserv.`
- **B. `mail IN CNAME mailserv.`**
- C. `mail IN NS mailserv.`
- D. `mail IN SOA mailserv.`

### Câu 159
Primary DNS dừng hoạt động nhưng client vẫn resolve được `www.facebook.com`. Cấu hình nào giải thích hợp lý nhất?

- A. Chỉ có một DNS server trong DHCP
- **B. DHCP đã cấp cả primary và secondary DNS, và slave đã nhận zone từ master trước đó**
- C. IP forwarding tự thay DNS
- D. NTP cache hostname

### Câu 160
Bạn muốn xác minh trực tiếp hai DNS server trả lời cùng một hostname thay vì dùng DNS server mặc định của máy. Cặp lệnh phù hợp nhất là gì?

- A. `ping 192.168.99.9` và `ping 192.168.99.99`
- **B. `dig @192.168.99.9 fileserv` và `dig @192.168.99.99 fileserv`**
- C. `ntpq -p` và `systemctl status ntp`
- D. `ip route` và `ip addr`

### Câu 161
Một mạng có hàng trăm máy đều truy vấn trực tiếp Ubuntu NTP pool. Thiết kế nào phù hợp với đề xuất trong chương?

- A. Tắt NTP ở tất cả client
- **B. Cho một local server đồng bộ ra ngoài, sau đó cho các node nội bộ đồng bộ với server đó**
- C. Cho mỗi client làm NTP master
- D. Dùng DHCP lease file làm time source

### Câu 162
Một NTP server nội bộ đồng bộ tốt với upstream nhưng client không thể đồng bộ với nó. Firewall đang chặn một port. Port nào cần được xem xét theo chương?

- A. 22
- B. 53
- C. 80
- **D. 123**

### Câu 163
Bạn chạy `ntpq -p` ngay sau khi start daemon và `reach` chưa phải `377`. Kết luận hợp lý nhất theo chương là gì?

- A. Chắc chắn daemon hỏng
- **B. Chưa chắc có lỗi; có thể cần thời gian để đủ các lần poll thành công**
- C. DNS serial sai
- D. DHCP pool cạn

### Câu 164
Bạn muốn biến Ubuntu Server có hai NIC thành router giữa modem và LAN. Thao tác cốt lõi được chương minh họa là gì?

- A. `systemctl restart bind9`
- **B. Ghi `1` vào `/proc/sys/net/ipv4/ip_forward`**
- C. Tăng `max-lease-time`
- D. Đổi `serial`

### Câu 165
Một BIND server đã được cấu hình forwarders và `dig` lần thứ hai nhanh hơn đáng kể lần đầu. Tính năng nào đang được quan sát?

- A. DHCP reservation
- **B. DNS caching**
- C. Zone transfer
- D. NTP polling

### Câu 166
Bạn có hostname nội bộ mà public DNS không hề biết. Thành phần nào trong chương giúp ánh xạ hostname đó tới IP nội bộ?

- A. `/var/lib/dhcp/dhcpd.leases`
- **B. Local BIND Zone File**
- C. `/proc/sys/net/ipv4/ip_forward`
- D. `ntpq -p`

### Câu 167
Trong thiết kế địa chỉ `192.168.1.0/24`, bạn định cấp DHCP từ `.1` đến `.254` rồi đồng thời gán `.10` cho switch, `.20` cho server. Điểm yếu lớn nhất so với sơ đồ mẫu của chương là gì?

- A. `/24` không hỗ trợ DHCP
- **B. Pool DHCP chồng lấn với các vùng IP tĩnh cho network equipment/server, dễ gây xung đột**
- C. Broadcast address bị thiếu
- D. DNS không thể hoạt động trên `.20`

### Câu 168
Một client đã nhận lease cũ trước khi bạn đổi DNS server trong DHCP. Theo chương, khi nào client có thể tự nhận DNS server mới?

- A. Chỉ sau khi cài lại hệ điều hành
- **B. Khi client request lease mới hoặc cố renew lease hiện tại**
- C. Chỉ khi restart BIND trên client
- D. Chỉ sau khi TTL bằng 0

### Câu 169
Bạn muốn theo dõi trực tiếp việc DHCP daemon nhận request/cấp lease. Lệnh nào phù hợp nhất?

- A. `systemctl status bind9`
- **B. `sudo tail -f /var/log/syslog`**
- C. `dig @127.0.0.1`
- D. `ntpq -p`

### Câu 170
Một DNS slave được khai báo `type slave;` nhưng `masters` trỏ sai IP. Điều gì dễ xảy ra nhất?

- A. Slave tự trở thành master
- **B. Slave không thể lấy đúng zone từ primary**
- C. DHCP tự sửa IP
- D. Gateway tự chuyển tiếp zone

### Câu 171
Bạn cấu hình DNS `A` record cho `www` nhưng quên `NS` record trong zone. Thành phần nào đang thiếu về mặt mô tả zone theo ví dụ?

- A. Lease time
- **B. Thông tin xác định name server của zone**
- C. NTP stratum
- D. Default gateway

### Câu 172
Một admin muốn toàn bộ client nội bộ chỉ sử dụng local NTP server và không query Ubuntu pool trực tiếp. Cần thay đổi gì trên client?

- A. `option routers`
- **B. Sửa các `pool` entries trong `/etc/ntp.conf` trỏ về IP/FQDN của local NTP server rồi restart NTP**
- C. `allow-transfer`
- D. `INTERFACESv4`

### Câu 173
Nếu mục tiêu là xem DNS server mà local resolver thực sự đang dùng, lệnh nào sát với nội dung chương nhất?

- A. `cat /etc/hostname`
- **B. `systemd-resolve --status |grep DNS Servers`**
- C. `tail -f /var/log/syslog`
- D. `ntpq -p`

### Câu 174
Một tổ chức dự kiến tăng rất nhanh số thiết bị. Lựa chọn nào phù hợp nhất với triết lý lập kế hoạch của chương?

- A. Chỉ đủ IP cho số thiết bị hiện tại
- **B. Dự phòng tăng trưởng, phân vùng địa chỉ có cấu trúc và cân nhắc subnet từ đầu**
- C. Gán mọi thiết bị IP ngẫu nhiên
- D. Dùng broadcast address cho server dự phòng

### Câu 175
Bạn thấy `192.168.1.0` và `192.168.1.255` còn “trống” trong spreadsheet và muốn gán cho hai server. Nhận định đúng là gì?

- A. Cả hai đều dùng được
- **B. Không nên; `.0` là network address và `.255` là broadcast address trong `/24`**
- C. Chỉ `.0` dùng được
- D. Chỉ `.255` dùng được

### Câu 176
Trong mô hình DNS master/slave, cơ chế nào quyết định slave nên kiểm tra master định kỳ sau bao lâu?

- A. DHCP `default-lease-time`
- **B. Giá trị `refresh` trong SOA**
- C. NTP `poll`
- D. DNS `TTL` của client

### Câu 177
Nếu lần check zone của slave gặp lỗi, thông số SOA nào điều khiển thời gian chờ trước khi thử lại?

- A. `expire`
- **B. `retry`**
- C. `minimum`
- D. `serial`

### Câu 178
Một gateway Linux đã bật routing nhưng được đưa trực tiếp ra Internet mà không có firewall, SSH vẫn mở rộng, mật khẩu yếu. Theo chương, vấn đề lớn nhất là gì?

- A. DHCP lease quá ngắn
- **B. Gateway trở thành mục tiêu tấn công nghiêm trọng do thiếu các lớp bảo vệ cần thiết**
- C. DNS TTL quá cao
- D. NTP `reach` sẽ bằng 0

### Câu 179
Bạn muốn biết một DHCP client đã từng nhận IP gì ngay cả khi lease cũ không còn active. Nơi phù hợp nhất để kiểm tra là đâu?

- A. `/etc/bind/named.conf.local`
- **B. `/var/lib/dhcp/dhcpd.leases`**
- C. `/etc/ntp.conf`
- D. `/proc/sys/net/ipv4/ip_forward`

### Câu 180
Kết hợp nào mô tả đúng “chuỗi hạ tầng mạng” mà chương xây dựng?

- A. NTP cấp IP → DHCP phân giải tên → DNS route Internet
- **B. DHCP cấp cấu hình mạng → DNS phân giải tên → secondary DNS tạo redundancy → gateway route traffic → NTP giữ thời gian đồng bộ**
- C. DNS cấp lease → NTP tạo zone → DHCP làm firewall
- D. Gateway tạo user → DNS quản lý process → NTP phân vùng ổ đĩa

---

## Gợi ý ôn tập

Bộ câu hỏi này cố tình trộn:
- **Khái niệm**: subnet, lease, caching, zone, SOA, redundancy, routing, NTP.
- **Đường dẫn file cấu hình**: `/etc/dhcp/dhcpd.conf`, `/etc/default/isc-dhcp-server`, `/etc/bind/...`, `/etc/ntp.conf`.
- **Lệnh quản trị**: `systemctl`, `dig`, `tail -f`, `ntpq -p`, `ip_forward`.
- **Giá trị cấu hình cụ thể** trong ví dụ của chương.
- **Tình huống lỗi/thực hành** để tránh chỉ học thuộc lòng.

**Tổng số: 180 câu trắc nghiệm.**
