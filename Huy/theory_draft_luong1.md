# BẢN NHÁP LÝ THUYẾT & SLIDE: LUỒNG 1 — RETENTION STRATEGY & NATURE/NURTURE
**Họ và tên người thực hiện:** Nguyễn Bình Huy   
**Dự án:** Smart TV Repair & Warranty Virtual Assistant (AI Support Agent)

---

## 01 – Customer Retention Canvas (Bài 1)

Sản phẩm  là Trợ lý ảo AI hỗ trợ xử lý sự cố và hướng dẫn bảo hành thiết bị hiển thị Smart TV. Luồng use case chính được phân tích là **"Đăng ký sửa chữa bảo hành tại nhà khi Smart TV gặp lỗi phần cứng"**.

### 1.1. The Problem (Vấn đề của người dùng)
*   **Định nghĩa theo ngôn ngữ của người dùng (User's Voice):**  
    > *"Tivi nhà tôi đột nhiên bị sọc nhiễu màn hình và mất hình. Tôi không rõ máy có được bảo hành miễn phí hay không và phải liên hệ thế nào. Gọi điện lên tổng đài hãng thì lúc nào cũng báo bận hoặc phải chờ máy nhạc chờ rất lâu, còn tự lên mạng đọc các văn bản chính sách bảo hành bằng PDF thì quá dài dòng, phức tạp, chứa nhiều thuật ngữ kỹ thuật khó hiểu."*
*   **Điểm cần tránh (Không mô tả bằng tính năng):**  
    Không viết: *"Người dùng cần một hệ thống chatbot AI có tích hợp tra cứu chính sách bảo hành và form đăng ký sửa chữa tại nhà."* (Đây là mô tả giải pháp/tính năng, không phải vấn đề của khách hàng).

### 1.2. The Persona (Chân dung khách hàng)
*   **Mô tả cụ thể:**  
    *   **Đối tượng:** Chủ sở hữu Smart TV trong gia đình (Tuổi từ 25 - 60, sống tại các hộ gia đình đô thị).
    *   **Hoàn cảnh:** Người bận rộn đi làm cả ngày, sử dụng tivi như công cụ giải trí chính của gia đình vào buổi tối. Không có chuyên môn kỹ thuật sâu về sửa chữa đồ điện tử.
    *   **Mục tiêu:** Muốn kiểm tra ngay tivi bị hỏng có được bảo hành miễn phí không, và đăng ký lịch hẹn thợ kỹ thuật của hãng đến sửa chữa tận nhà nhanh nhất có thể.

### 1.3. Anti-persona (Chân dung đối lập)
*   **Mô tả cụ thể:**  
    *   Thợ sửa tivi tự do hoặc các cửa hàng sửa chữa điện tử cũ (họ tự khắc phục sự cố để bán lại, không có nhu cầu liên hệ bảo hành chính hãng).
    *   Khách hàng đang tìm kiếm thông tin để mua tivi mới (không gặp sự cố tivi hỏng và không thuộc đối tượng của luồng bảo hành này).
*   **Vai trò:** Giúp đội phát triển tránh bị lẫn lộn dữ liệu hành vi của những nhóm người dùng không mang lại giá trị hoặc có hành vi bất thường.

### 1.4. The Why (Động lực cốt lõi)
*   **Động lực:** Tiết kiệm tối đa công sức và thời gian tìm kiếm thông tin bảo hành chính xác; có được sự đảm bảo chính thức từ hãng (thời gian, chi phí sửa) để nhanh chóng khôi phục hoạt động giải trí cho gia đình.

### 1.5. The Alternative (Giải pháp thay thế hiện tại)
*   Gọi lên số hotline chăm sóc khách hàng của hãng Smart TV (mất thời gian chờ kết nối máy lẻ).
*   Tra cứu thông tin chính sách bảo hành trên Google hoặc đọc file tài liệu PDF điều khoản dịch vụ (gặp khó khăn do văn bản dài dòng và nhiều thuật ngữ chuyên môn).
*   Tự tháo dỡ tivi cồng kềnh mang ra trung tâm sửa chữa bảo hành (tốn công sức vận chuyển, có rủi ro bể vỡ dọc đường).
*   Chấp nhận bỏ tiền túi ra gọi thợ sửa chữa bên ngoài tự do (tốn kém chi phí mặc dù tivi có thể vẫn nằm trong hạn bảo hành).

### 1.6. The Frequency (Tần suất tự nhiên của vấn đề)
*   **Tần suất:** **Rất thấp (Infrequent/Yearly)** - Lỗi hỏng hóc phần cứng nặng của tivi (như sọc màn hình, chết panel) thường chỉ xảy ra 1 đến vài năm một lần. Người dùng không bao giờ gặp vấn đề này hàng ngày hoặc hàng tuần.

---

## 02 – Core Action & Active User (Bài 2)

### 2.1. Xác định Core Action (Hành động cốt lõi)
*   **Core Job:** Giải quyết sự cố tivi bị lỗi phần cứng bằng phương án sửa chữa bảo hành chính hãng.
*   **Core Action:** **Gửi thành công yêu cầu sửa chữa bảo hành tại nhà (Submit home service request)** hoặc **Xác nhận lịch kết nối CSKH hỗ trợ trực tiếp (Confirm support handoff connection)**.
*   **Vì sao hành động này cho thấy user thực sự nhận được value?**  
    Hành động này chứng minh người dùng đã vượt qua mọi rào cản về mặt tra cứu chính sách bảo hành phức tạp và chính thức đạt được giải pháp thực tế: Hãng đã ghi nhận sự cố, xác minh quyền lợi bảo hành miễn phí và chốt lịch kỹ thuật viên đến tận nhà kiểm tra/sửa chữa.
*   **Khi nào được tính là đã xảy ra?**  
    Khi hệ thống backend ghi nhận sự kiện `service_request_submitted` thành công (ở cuối luồng đăng ký hoặc khi người dùng click kết nối handoff thành công và hệ thống chuyển bối cảnh đi).

### 2.2. Định nghĩa Active User (Người dùng hoạt động)
*   Một người dùng được tính là **Active User** khi họ thực hiện **hoàn thành ít nhất 1 lượt kiểm tra bảo hành thiết bị** hoặc **gửi thành công 1 yêu cầu hỗ trợ kỹ thuật** trong **vòng 30 ngày (Monthly Active User - MAU)**.
*   **Lý giải:** Không tính active theo ngày (DAU) hay tuần (WAU) vì tần suất lỗi tivi là rất thấp. Định nghĩa theo chu kỳ 30 ngày phản ánh đúng nhịp sử dụng tự nhiên của việc xử lý sự cố thiết bị gia dụng.

---

## 03 – Natural Frequency & Retention Metric (Bài 2)

### 3.1. Chọn Retention Metric theo Natural Frequency
*   Do tần suất tự nhiên của việc hỏng tivi rất thấp (Yearly), chúng ta không thể sử dụng các chỉ số Retention truyền thống như **D1, D7 hoặc D30 Retention** cho sản phẩm CSKH thuần túy này (khách hàng sẽ rời đi ngay sau khi tivi được sửa xong và không quay lại cho đến khi tivi hỏng tiếp sau vài năm).
*   **Chỉ số lựa chọn phù hợp:** **Monthly Cohort Retention** (đo lường tỷ lệ nhóm người dùng quay lại ứng dụng mỗi tháng) kết hợp mở rộng sản phẩm sang các tính năng chăm sóc thiết bị định kỳ.
*   **Chỉ số Stickiness:** Sử dụng **WAU/MAU** hoặc **MAU** làm chỉ số đo lường mức độ tương tác sức khỏe lâu dài của dịch vụ chăm sóc khách hàng.

---

## 09 – Nature vs Nurture (Bài 5)

### 9.1. Nature (Nhịp tự nhiên)
*   Khách hàng chỉ tự tìm đến sản phẩm khi thiết bị tivi gặp sự cố hỏng hóc hoặc cần tra cứu chính sách bảo hành đột xuất (tần suất trung bình: 1 - 2 lần/năm).

### 9.2. Nurture (Hoạt động nuôi dưỡng chủ động của sản phẩm)
Để duy trì sự hiện diện của ứng dụng trong đời sống khách hàng và kéo dài vòng đời tương tác, sản phẩm chủ động thực hiện các hoạt động nuôi dưỡng sau:

*   **Nhắc nhở bảo trì tivi định kỳ (In-app Maintenance Alerts):** Gửi thông báo nhắc nhở người dùng chạy tính năng làm sạch điểm ảnh màn hình (Pixel Cleaning) định kỳ mỗi 6 tháng trên Smart TV OLED để tránh lỗi bóng mờ (burn-in).
*   **Gợi ý tối ưu hình ảnh/âm thanh:** Gợi ý cách thiết lập thông số hiển thị tối ưu theo từng mùa bóng đá hoặc nâng cấp phần mềm tivi định kỳ.
*   **Nhắc nhở gia hạn bảo hành:** Gửi thông báo gửi ưu đãi gói bảo hành mở rộng (Extended Warranty) 1 tháng trước khi thời hạn bảo hành gốc 12 tháng của tivi kết thúc.

### 9.3. Bảng phân tích Nature vs Nurture đề xuất

| Nội dung | Câu trả lời của nhóm |
| :--- | :--- |
| **Natural frequency của use case** | Rất thấp (Yearly/Infrequent) - chỉ xảy ra khi tivi bị hỏng phần cứng. |
| **Internal trigger (Kích hoạt nội tại)** | Cảm giác lo lắng màn hình đắt tiền bị sọc hỏng hoặc mong muốn nhanh chóng sửa tivi để cả gia đình tiếp tục giải trí. |
| **External trigger hiện có** | Thông báo nhắc nhở chạy pixel cleaning bảo trì màn hình định kỳ phát trên tivi/điện thoại. |
| **Một hoạt động nurture phù hợp** | Gửi thông báo định kỳ 6 tháng chạy quét dọn điểm ảnh để tối ưu chất lượng màn hình OLED, kéo dài tuổi thọ tivi. |
| **Vì sao nurture không quá dày hoặc quá thưa?** | Không được quá dày (ví dụ gửi hàng tuần) vì tivi không cần bảo trì liên tục, sẽ gây phiền hà làm user xóa app. Không quá thưa (nhu cầu thấp) vì user sẽ quên app. Mức **mỗi 6 tháng** là hợp lý. |
| **Metric dùng để theo dõi tác động** | Tỷ lệ nhấp chuột vào thông báo chạy bảo trì (`maintenance_click_rate`) và tỷ lệ quay lại chạy pixel cleaning hàng tháng (`monthly_pixel_clean_rate`). |
