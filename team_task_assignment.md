# Phân công công việc nhóm - Lab Day 20

## 📦 Bảng phân công sản phẩm bàn giao cuối cùng (Final Deliverables)

| Sản phẩm bàn giao (Deliverables) | Người chịu trách nhiệm | Định dạng đầu ra | Trạng thái |
| :--- | :--- | :--- | :---: |
| 📑 **Slide thuyết trình hoàn chỉnh (13 phần)** | 👩‍💻 **Thảo** (Tổng hợp) | Tệp Slide (PPT/PDF hoặc link Canva/Slides) | `[ ]` |
| 🌐 **Đường dẫn chạy Prototype hoàn chỉnh (đã gộp)** | 👩‍💻 **Thảo** (Tích hợp) | Link website (Vercel/Netlify/Local run) | `[ ]` |
| 📝 **Bản nháp lý thuyết Luồng 1** (Canvas, Active User, Nature/Nurture) | 👨‍💼 **Huy** (Bạn) | Tệp văn bản nháp (Docs/Word) | `[ ]` |
| 💻 **Component code `RetentionCanvasTab.jsx`** | 👨‍💼 **Huy** (Bạn) | Tệp mã nguồn React | `[ ]` |
| 📝 **Bản nháp lý thuyết Luồng 2** (UX Audit, Before/After, Hook Model) | 🧑‍🎨 **Nhật Anh** | Tệp văn bản nháp & sơ đồ phác thảo | `[ ]` |
| 💻 **Component code `WarrantyCard.jsx` & `HookModelTab.jsx`** | 🧑‍🎨 **Nhật Anh** | Tệp mã nguồn React | `[ ]` |
| 📝 **Bản nháp lý thuyết Luồng 3** (Phễu chỉ số, NSM, Tracking Plan) | 👩‍💻 **Thảo** | Tệp văn bản nháp | `[ ]` |
| 💻 **Component code `QRScannerModal.jsx` & `TrackingLogsTab.jsx`** | 👩‍💻 **Thảo** | Tệp mã nguồn React | `[ ]` |

---

## 👨‍💼 1. Huy (Bạn) — Luồng 1: Chiến lược Retention & Nature/Nurture
*Phụ trách nghiên cứu tệp khách hàng, định hình cách giữ chân người dùng và tích hợp giao diện.*

*   **Nhiệm vụ lý thuyết (Soạn bản nháp nội dung gửi cho Thảo):**
    *   **Customer Retention Canvas (Bài 1):** Viết phân tích 6 yếu tố (Problem, Persona, Anti-persona, Why, Alternative, Frequency).
    *   **Core Action & Active User (Bài 2):** Định nghĩa hành động tạo giá trị và ngưỡng Active User (MAU).
    *   **Nature vs Nurture (Bài 5.1):** Phân tích nhịp tự nhiên của người dùng và các điểm chạm chủ động của hãng.
*   **Nhiệm vụ Code/UI trên Prototype:**
    *   Tự code thiết kế tab **"Retention Canvas"** ở Sidebar bên phải để hiển thị trực quan các nội dung lý thuyết của Luồng 1.
*   **Đầu ra bàn giao cho Thảo:** File văn bản nháp (Text draft) các phần phân tích trên + file component code giao diện hiển thị.

---

## 🧑‍🎨 2. Nhật Anh — Luồng 2: UX Audit, Onboarding Redesign & Hook Model
*Phụ trách tối ưu hóa trải nghiệm chatbot thực tế, thiết kế luồng khôi phục lỗi và vòng lặp tạo thói quen.*

*   **Nhiệm vụ lý thuyết & Sơ đồ (Soạn bản nháp nội dung gửi cho Thảo):**
    *   **Onboarding Audit (Bài 3):** Phân tích ma sát luồng cũ Ngày 18 theo các nhãn Keep, Remove, Delay, Simplify.
    *   **Redesigned Journey (Bài 3):** Vẽ/thiết kế sơ đồ hành trình mới tối ưu.
    *   **Bảng Before/After & Recovery (Bài 3):** Bảng so sánh các chỉ số trải nghiệm cũ/mới và mô tả luồng khôi phục lỗi (nút bấm sửa sai).
    *   **Hook Model (Bài 5.2):** Thiết kế vòng lặp thói quen 4 bước (Trigger -> Action -> Reward -> Investment) cho Smart TV.
*   **Nhiệm vụ Code/UI trên Prototype:**
    *   Cập nhật giao diện chatbot chính: Thiết kế **Thẻ bảo hành điện tử (Digital Warranty Card)** thay thế cho quote text thô ở Step 2.
    *   Tự code thiết kế tab **"Hook Model"** hiển thị sơ đồ vòng lặp tạo thói quen ở Sidebar bên phải.
*   **Đầu ra bàn giao cho Thảo:** File văn bản nháp phân tích + sơ đồ hành trình mới & Hook Model + file component code.

---

## 👩‍💻 3. Thảo — Luồng 3: Đo lường Chỉ số, Giả lập Kỹ thuật (QR & Tracking) & Tổng hợp Slide Cuối
*Phụ trách lập trình tính năng giảm ma sát thực tế, thiết lập tracking và tổng hợp toàn bộ bài nộp của nhóm.*

*   **Nhiệm vụ lý thuyết & Code của Thảo:**
    *   **Measurement Ladder & North Star (Bài 4):** Vẽ sơ đồ phễu chỉ số, định nghĩa North Star & Input Metrics và phân tích trade-off.
    *   **Metric Tracking Plan (Bài 6):** Lập bảng đặc tả tracking event và viết 4 tiêu chí nghiệm thu kiểm thử (Acceptance Criteria).
    *   **Code chức năng tương tác:** Mockup nút/giao diện **Quét mã QR** để lấy số Serial tự động ở Step 4.
    *   **Code màn hình Real-time Tracking Simulator:** Thiết kế tab log event hiển thị JSON thời gian thực khi tương tác trong chatbot.
*   **Nhiệm vụ Tổng hợp & Hoàn thiện Slide (Mục 00 đến 12):**
    *   Đọc và thu thập toàn bộ các file nội dung nháp + code của Huy và Nhật Anh bàn giao.
    *   Gộp mã nguồn thành sản phẩm hoàn chỉnh và chuẩn bị kịch bản demo (Demo Path).
    *   **Thiết kế và biên tập tệp slide thuyết trình hoàn chỉnh (gồm 13 phần từ 00 đến 12)** từ nguồn nội dung của Huy, Nhật Anh và chính mình.
*   **Sản phẩm gộp cuối cùng:** Tệp slide thuyết trình hoàn thiện + link chạy prototype đã tích hợp đầy đủ tính năng.
