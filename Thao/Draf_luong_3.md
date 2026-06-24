# BÁO CÁO LUỒNG 3 — MEASUREMENT, QR SCANNER & TRACKING PLAN

**Người thực hiện:** Nguyễn Lâm Phương Thảo — 2A202600873
**Dự án:** Smart TV Repair & Warranty Virtual Assistant
**Sản phẩm:** AI Customer Support Agent hỗ trợ xử lý lỗi và bảo hành Smart TV
**Phạm vi phụ trách:** Measurement Ladder, North Star Metric, Metric Tracking Plan, QR Scanner mockup, Real-time Tracking Simulator và tổng hợp slide cuối.

---

## 07 — Measurement Ladder

### 7.1. Mục tiêu đo lường

Vì sản phẩm là AI Customer Support Agent cho tình huống Smart TV gặp lỗi phần cứng, mục tiêu đo lường không phải là tăng số lượt mở app hằng ngày. Use case chính có tần suất tự nhiên thấp, thường chỉ xảy ra khi người dùng gặp lỗi thiết bị, cần kiểm tra bảo hành hoặc cần chuyển sang nhân viên kỹ thuật.

Do đó, hệ thống đo lường tập trung vào 4 câu hỏi chính:

1. Người dùng có được đưa tới đúng hướng xử lý bảo hành không?
2. Người dùng có hoàn thành bước cung cấp thông tin thiết bị không?
3. AI có biết dừng lại và chuyển nhân viên thật khi dữ liệu không chắc chắn không?
4. Luồng hỗ trợ có giảm ma sát và rút ngắn thời gian tới giá trị không?

### 7.2. Measurement Ladder đề xuất

| Tầng đo lường                 | Metric đề xuất                                                            | Ý nghĩa                                                                                                         |
| :---------------------------- | :------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------- |
| **Marketing / Traffic**       | Số lượt mở chatbot hỗ trợ                                                 | Đo lượng người dùng bắt đầu tìm tới kênh hỗ trợ AI.                                                             |
| **Visitor**                   | Số người dùng bắt đầu báo lỗi thiết bị                                    | Cho biết bao nhiêu người dùng thật sự có nhu cầu hỗ trợ kỹ thuật.                                               |
| **Activation**                | Tỷ lệ người dùng nhận được hướng xử lý bảo hành đầu tiên                  | Đo việc người dùng đã nhận được giá trị ban đầu, ví dụ thấy chính sách bảo hành hoặc hướng xử lý có bằng chứng. |
| **Core Action**               | Số lượt xác nhận handoff hoặc gửi yêu cầu hỗ trợ kỹ thuật thành công      | Cho biết người dùng đã đi tới hành động có giá trị thực tế.                                                     |
| **Retention**                 | Monthly Cohort Retention cho nhóm người dùng quay lại dùng hỗ trợ/bảo trì | Phù hợp với tần suất thấp của use case bảo hành thiết bị.                                                       |
| **Business / Customer Value** | Giảm thời gian xử lý ticket, giảm tải tổng đài, tăng CSAT                 | Đo hiệu quả dài hạn đối với doanh nghiệp và trải nghiệm khách hàng.                                             |

### 7.3. Lý do không chọn DAU làm metric chính

Sự cố phần cứng Smart TV không xảy ra hằng ngày. Nếu dùng DAU làm chỉ số chính, nhóm có thể bị lệch mục tiêu và cố tạo tương tác giả tạo không cần thiết. Với sản phẩm chăm sóc khách hàng, chỉ số quan trọng hơn là chất lượng xử lý sự cố, tỷ lệ đi tới đúng hướng hỗ trợ và khả năng chuyển giao an toàn khi AI không chắc chắn.

---

## 08 — North Star Metric & Input Metrics

### 8.1. North Star Metric

**North Star Metric đề xuất:**
**Monthly Verified Warranty Support Resolutions**

### 8.2. Định nghĩa North Star Metric

Một lượt được tính là **Verified Warranty Support Resolution** khi người dùng hoàn thành ít nhất một trong các kết quả sau:

1. Nhận được hướng xử lý bảo hành rõ ràng kèm bằng chứng chính sách.
2. Quét hoặc nhập serial thành công để hệ thống kiểm tra tình trạng bảo hành.
3. Được chuyển sang nhân viên thật khi dữ liệu mâu thuẫn hoặc AI không đủ chắc chắn để tự xử lý.

Metric này phản ánh đúng giá trị cốt lõi của sản phẩm: giúp người dùng đang gặp lỗi Smart TV đi tới hướng giải quyết đáng tin cậy, thay vì chỉ nhận câu trả lời chung chung.

### 8.3. Input Metrics

| Input Metric                    | Định nghĩa                                                                                                   | Vì sao tác động tới North Star                                                      |
| :------------------------------ | :----------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| **Activation Rate**             | Tỷ lệ người dùng đi từ onboarding tới first value, ví dụ thấy chính sách bảo hành hoặc hướng xử lý đầu tiên. | Nếu activation thấp, người dùng rời đi trước khi nhận được giá trị.                 |
| **Serial Capture Success Rate** | Tỷ lệ người dùng cung cấp được serial bằng nhập tay hoặc quét QR.                                            | Serial là dữ liệu quan trọng để kiểm tra bảo hành và xử lý chính xác.               |
| **Handoff Confirmation Rate**   | Tỷ lệ người dùng đồng ý chuyển sang nhân viên thật khi AI phát hiện dữ liệu mâu thuẫn.                       | Cho thấy luồng “Don’t Act” và chuyển giao có đủ rõ ràng, đáng tin và hữu ích không. |

### 8.4. Leading và Lagging Indicators

| Loại chỉ số           | Metric                                         | Giải thích                                                          |
| :-------------------- | :--------------------------------------------- | :------------------------------------------------------------------ |
| **Leading Indicator** | Activation Rate                                | Báo hiệu sớm onboarding và flow hỗ trợ có đưa user tới value không. |
| **Leading Indicator** | Serial Capture Success Rate                    | Báo hiệu QR Scanner hoặc form nhập serial có giảm ma sát không.     |
| **Leading Indicator** | Handoff Confirmation Rate                      | Báo hiệu user có tin tưởng quyết định chuyển nhân viên thật không.  |
| **Lagging Indicator** | CSAT                                           | Phản ánh mức độ hài lòng sau khi trải nghiệm kết thúc.              |
| **Lagging Indicator** | Average Resolution Time                        | Phản ánh thời gian xử lý sự cố sau khi hệ thống vận hành.           |
| **Lagging Indicator** | Ticket Deflection / Call Center Load Reduction | Phản ánh hiệu quả kinh doanh dài hạn.                               |

### 8.5. Trade-off cần theo dõi

Trade-off quan trọng nhất là giữa **tự động hóa** và **an toàn khi xử lý sự cố**.

Nếu AI chuyển handoff quá sớm, hệ thống an toàn hơn nhưng có thể làm tăng tải cho nhân viên thật. Ngược lại, nếu AI cố tự xử lý quá nhiều, tổng đài có thể giảm tải ngắn hạn nhưng rủi ro tư vấn sai, hiểu nhầm chính sách hoặc làm khách hàng mất niềm tin sẽ tăng lên.

Vì vậy, sản phẩm cần theo dõi đồng thời:

* Handoff Confirmation Rate.
* Serial Conflict Detection Rate.
* CSAT sau handoff.
* Tỷ lệ người dùng phải lặp lại thông tin sau khi chuyển nhân viên thật.

---

## 11 — Metric Tracking Requirement

### 11.1. Bảng định nghĩa metric

| Metric                          | Câu hỏi cần trả lời                                      | Định nghĩa                                                                             | Công thức                                                        | Window      | Segment                          | Event cần có                                                                |
| :------------------------------ | :------------------------------------------------------- | :------------------------------------------------------------------------------------- | :--------------------------------------------------------------- | :---------- | :------------------------------- | :-------------------------------------------------------------------------- |
| **Activation Rate**             | Bao nhiêu user nhận được giá trị đầu tiên?               | User được xem hướng xử lý bảo hành hoặc chính sách bảo hành có bằng chứng.             | `warranty_policy_shown / onboarding_started`                     | Monthly     | Người dùng báo lỗi Smart TV      | `onboarding_started`, `warranty_policy_shown`                               |
| **Serial Capture Success Rate** | Bao nhiêu user cung cấp được serial thành công?          | User nhập tay hoặc quét QR thành công serial thiết bị.                                 | `(serial_qr_scanned + serial_manual_entered) / serial_requested` | Monthly     | Người dùng cần kiểm tra bảo hành | `serial_requested`, `serial_qr_scanned`, `serial_manual_entered`            |
| **Handoff Confirmation Rate**   | Khi AI đề xuất gặp nhân viên thật, user có đồng ý không? | User bấm xác nhận chuyển nhân viên sau khi AI phát hiện dữ liệu mâu thuẫn.             | `handoff_confirmed / handoff_offered`                            | Monthly     | Session có serial conflict       | `handoff_offered`, `handoff_confirmed`                                      |
| **Time to Value**               | Người dùng mất bao lâu để nhận được giá trị đầu tiên?    | Thời gian từ lúc onboarding bắt đầu tới lúc user thấy chính sách/hướng xử lý đầu tiên. | `timestamp(first_value_event) - timestamp(onboarding_started)`   | Per session | Tất cả session hỗ trợ            | `onboarding_started`, `warranty_policy_shown`, `handoff_offered`            |
| **Recovery Success Rate**       | Khi AI hiểu sai, user có sửa được luồng không?           | User bấm nút sửa sai và hệ thống quay lại đúng hướng xử lý.                            | `receipt_shown / refund_misunderstanding_shown`                  | Monthly     | Session có AI misunderstanding   | `refund_misunderstanding_shown`, `refund_recovery_clicked`, `receipt_shown` |

---

### 11.2. Bảng tracking event

| Event name                      | Event được ghi khi nào?                                         | User identity           | Properties                                   | Metric sử dụng event           | Cách tránh ghi trùng                            |
| :------------------------------ | :-------------------------------------------------------------- | :---------------------- | :------------------------------------------- | :----------------------------- | :---------------------------------------------- |
| `onboarding_started`            | Khi chatbot gửi lời chào đầu tiên ở Step 0.                     | `user_id`, `session_id` | `surface`, `source`, `step`                  | Activation Rate, Time to Value | Chỉ ghi 1 lần cho mỗi session.                  |
| `issue_reported`                | Khi user báo lỗi màn hình.                                      | `user_id`, `session_id` | `issue_text`, `step`                         | Funnel analysis                | Không ghi lại khi reload trang.                 |
| `issue_type_selected`           | Khi user chọn loại lỗi, ví dụ “Điểm chết/Sọc”.                  | `user_id`, `session_id` | `issue_type`, `selection_label`              | Activation Rate                | Chỉ ghi khi user click lựa chọn thật.           |
| `warranty_policy_shown`         | Khi AI hiển thị chính sách bảo hành hoặc Digital Warranty Card. | `user_id`, `session_id` | `policy_type`, `evidence_shown`, `ai_action` | Activation Rate, Time to Value | Chỉ ghi khi card thật sự render lần đầu.        |
| `refund_misunderstanding_shown` | Khi AI hiểu sai ý định và hiện luồng hoàn tiền.                 | `user_id`, `session_id` | `misunderstood_intent`, `actual_intent`      | Recovery Success Rate          | Chỉ ghi 1 lần cho cùng một misunderstanding.    |
| `refund_recovery_clicked`       | Khi user bấm “Không, tôi không muốn hoàn tiền”.                 | `user_id`, `session_id` | `button_label`, `recovery_type`              | Recovery Success Rate          | Chỉ ghi khi user click nút.                     |
| `receipt_shown`                 | Khi hệ thống sửa lỗi và hiển thị biên lai/hướng xử lý đúng.     | `user_id`, `session_id` | `document_type`, `recovery_success`          | Recovery Success Rate          | Chỉ ghi khi recovery thành công.                |
| `qr_scanner_opened`             | Khi user bấm nút quét QR ở Step 4.                              | `user_id`, `session_id` | `entry_point`, `method`                      | Serial Capture Success Rate    | Ghi mỗi lần mở modal, phân biệt bằng timestamp. |
| `serial_qr_scanned`             | Khi QR mock scan thành công và trả về serial.                   | `user_id`, `session_id` | `serial_masked`, `entry_method`, `source`    | Serial Capture Success Rate    | Không ghi trùng cùng serial trong cùng session. |
| `serial_lookup_started`         | Khi hệ thống bắt đầu kiểm tra serial.                           | `user_id`, `session_id` | `serial_masked`, `entry_method`              | Time to Value, Funnel analysis | Chỉ ghi khi lookup thật sự bắt đầu.             |
| `serial_conflict_detected`      | Khi hệ thống phát hiện dữ liệu bảo hành mâu thuẫn.              | `user_id`, `session_id` | `conflict_type`, `ai_action`                 | Handoff Confirmation Rate      | Chỉ ghi 1 lần cho cùng serial conflict.         |
| `handoff_offered`               | Khi AI đề xuất chuyển sang nhân viên thật.                      | `user_id`, `session_id` | `reason`, `context_included`                 | Handoff Confirmation Rate      | Chỉ ghi khi card handoff xuất hiện.             |
| `handoff_confirmed`             | Khi user xác nhận gặp nhân viên thật.                           | `user_id`, `session_id` | `reason`, `context_included`                 | Handoff Confirmation Rate      | Chỉ ghi khi user click xác nhận.                |

---

### 11.3. Event map gắn với flow

```text
Step 0 — Onboarding
[event] onboarding_started

Step 1 — User báo lỗi màn hình
[event] issue_reported
[event] issue_type_selected

Step 2 — AI đưa chính sách bảo hành có bằng chứng
[event] warranty_policy_shown

Step 3 — AI hiểu sai ý định thành hoàn tiền
[event] refund_misunderstanding_shown

User sửa sai bằng nút “Không, tôi không muốn hoàn tiền”
[event] refund_recovery_clicked
[event] receipt_shown

Step 4 — User cung cấp Serial
[event] qr_scanner_opened
[event] serial_qr_scanned
[event] serial_lookup_started

AI phát hiện dữ liệu mâu thuẫn
[event] serial_conflict_detected
[event] handoff_offered

User đồng ý gặp nhân viên thật
[event] handoff_confirmed
```

---

### 11.4. Acceptance Criteria cho tracking

| Mã      | Tiêu chí nghiệm thu                                | Mô tả                                                                                                                                                               |
| :------ | :------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **AC1** | Event chỉ ghi khi hành vi thật sự xảy ra           | `serial_qr_scanned` chỉ được ghi sau khi QR mock scan trả về serial thành công, không ghi ngay khi modal vừa mở.                                                    |
| **AC2** | Refresh hoặc click lặp không làm sai dữ liệu chính | Các event một lần như `onboarding_started`, `warranty_policy_shown`, `serial_conflict_detected` cần tránh ghi trùng trong cùng session.                             |
| **AC3** | Event có đủ identity và properties                 | Mỗi event phải có `user_id`, `session_id`, `timestamp`, `current_step` và `properties`.                                                                             |
| **AC4** | Event dùng được để tính metric đã định nghĩa       | `warranty_policy_shown` dùng cho Activation Rate, `serial_qr_scanned` dùng cho Serial Capture Success Rate, `handoff_confirmed` dùng cho Handoff Confirmation Rate. |
| **AC5** | Không thu thập dữ liệu cá nhân không cần thiết     | Serial nên được mask hoặc chỉ dùng serial mẫu trong prototype. Không lưu số điện thoại, địa chỉ, tài khoản ngân hàng hoặc thông tin nhạy cảm nếu không cần.         |
| **AC6** | Timestamp và timezone nhất quán                    | Tất cả event dùng timestamp ISO để sắp xếp thứ tự và tính Time to Value chính xác.                                                                                  |

---

## 12 — Demo Path & Prototype Evidence

### 12.1. QR Scanner Mockup

Để giảm ma sát khi người dùng phải nhập serial tivi thủ công, prototype bổ sung chức năng **Quét mã QR trên tem bảo hành** ở Step 4.

Trong phiên bản prototype, QR Scanner là giả lập kỹ thuật, không dùng camera thật. Khi người dùng bấm nút quét, hệ thống mở modal mô phỏng quá trình scan và trả về serial mẫu `TV12345`. Serial này được đưa vào cùng luồng kiểm tra Step 4. Sau đó hệ thống phát hiện dữ liệu mâu thuẫn và đề xuất chuyển sang nhân viên thật.

**Lý do thiết kế:**

* Giảm lỗi nhập sai serial.
* Giảm số thao tác thủ công.
* Tăng khả năng người dùng hoàn thành bước kiểm tra bảo hành.
* Minh họa rõ metric `Serial Capture Success Rate`.

**Minh chứng cần chèn:**

```text
[Ảnh 1] Step 4 có nút “Quét mã QR trên tem bảo hành”
[Ảnh 2] QR Scanner Modal đang quét hoặc quét thành công
[Ảnh 3] Sau khi quét QR, chatbot chuyển sang serial conflict và handoff
```

---

### 12.2. Real-time Tracking Simulator

Prototype bổ sung tab **Tracking Logs** ở sidebar phải. Tab này hiển thị event JSON realtime khi người dùng tương tác với chatbot.

Mỗi event gồm các trường chính:

```json
{
  "id": "event_id",
  "event_name": "serial_qr_scanned",
  "timestamp": "2026-06-24T04:27:23.566Z",
  "user_id": "demo_user_001",
  "session_id": "demo_session_001",
  "current_step": 4,
  "properties": {
    "entry_method": "qr",
    "source": "qr_scanner_modal"
  }
}
```

**Lý do thiết kế:**

* Giúp giảng viên thấy rõ event nào được ghi ở từng bước.
* Minh họa cách metric trong tracking plan được chuyển thành dữ liệu cụ thể.
* Cho thấy hệ thống có cơ chế tránh ghi nhận mơ hồ hoặc chỉ dựa trên cảm tính.
* Không dùng analytics thật, chỉ là simulator phục vụ prototype.

**Minh chứng cần chèn:**

```text
[Ảnh 4] Tracking Logs hiển thị event JSON realtime
[Ảnh 5] Event qr_scanner_opened / serial_qr_scanned / handoff_offered
```

---

### 12.3. Demo path phần Luồng 3

1. Đi tới Step 4 sau khi user sửa lỗi AI hiểu sai ở Step 3.
2. User chọn **Quét mã QR trên tem bảo hành**.
3. QR Scanner Modal mở ra và trả về serial mẫu.
4. Hệ thống ghi event `qr_scanner_opened`, `serial_qr_scanned`, `serial_lookup_started`.
5. AI phát hiện serial conflict và chọn **Don’t Act**.
6. AI đề xuất handoff sang nhân viên thật.
7. Tracking Logs hiển thị đầy đủ event JSON.
8. User xác nhận handoff, hệ thống ghi `handoff_confirmed`.

---

## Kết luận Luồng 3

Phần Luồng 3 bổ sung lớp đo lường và giả lập kỹ thuật cho prototype Day 20. QR Scanner giúp giảm ma sát ở bước nhập Serial, còn Tracking Logs Simulator cho thấy cách hệ thống ghi nhận hành vi người dùng thành dữ liệu có thể đo được.

Các chỉ số được chọn không tập trung vào lượt truy cập hằng ngày mà tập trung vào giá trị thật của use case: người dùng nhận được hướng xử lý bảo hành đáng tin cậy, cung cấp được thông tin thiết bị, và được chuyển sang nhân viên thật khi AI không đủ chắc chắn.

Nhờ đó, phần đo lường kết nối trực tiếp với mục tiêu sản phẩm, trải nghiệm người dùng và yêu cầu tracking của bài lab.
