# Phase 03 — Update the full-screen presentation

**Phase ID:** `phase-03-update-fullscreen-presentation`

**Objective:** Trình chiếu cùng nội dung Chương 7 với trang cuộn, đủ 11 trang và không đổi thao tác trình chiếu hiện tại.

## Stories Covered

- US-01 — Trình bày đủ nội dung theo thứ tự file slide.
- US-03 — Giữ giao diện và hành vi của chế độ trình chiếu.
- US-04 — Giữ nguồn có thể kiểm tra.

## Scope

1. Đổi import trong `src/components/PresentationMode.jsx` sang module Chương 7 dùng chung; không sao chép nội dung sang một mảng độc lập.
2. Tạo thứ tự trình chiếu gồm 10 slide nội dung theo các chặng hiện tại, tiếp đó là trang nguồn 11 từ cùng data module. Vì trang nguồn không thuộc một chặng điều hướng, cấp metadata trình chiếu riêng `sectionLabel: 'Nguồn'`; không giả định trang này có `slide.chapter`.
3. Đổi accessible label, tiêu đề trình chiếu và nhãn chặng sang Chương 7; header và footer phải dùng nhãn “Nguồn” an toàn cho trang 11 thay vì truy cập thuộc tính chặng không tồn tại.
4. Giữ tiến độ, số trang, phím mũi tên/Space/Home/End/Escape, mở/thoát fullscreen, focus và khôi phục scroll như hiện tại; total pages phải là 11.
5. Hiển thị trang nguồn cuối bằng typography, danh sách và liên kết theo style hiện có; không bỏ URL hoặc nhập toàn bộ nguồn vào một liên kết duy nhất.
6. Giữ scroll nội dung trong card hiện có để trang 11 nhiều chữ vẫn đọc và truy cập được mà không đổi kích thước/khung trình chiếu.

## Files / Modules

- `src/components/PresentationMode.jsx`
- `src/data/chapter7-family.js` (shared source; update only if needed to expose page 11)

## Dependencies

- Depends on Phase 01 data model.
- Follows Phase 02 integration so shared page identity and final copy are established.

## Acceptance / Manual Verification

- Nút trình chiếu mở slide 01; bộ đếm và progressbar hiển thị 01/11.
- Next/Previous và bàn phím di chuyển qua đủ 11 trang; trang 11 có thể tới được và Previous quay lại slide 10.
- Tiêu đề, điểm nội dung, nguồn và thứ tự ở full-screen khớp với trang cuộn.
- Slide cuối hiển thị đầy đủ danh sách nguồn đã mô hình hóa và mọi liên kết có thể thao tác bằng bàn phím.
- Slide 11 hiển thị nhãn “Nguồn” trong header/footer; không phát sinh lỗi khi slide không có metadata chặng.
- Aria label và tiêu đề không còn nhắc Chương 2; Escape/close vẫn thoát và trả lại scroll/focus đúng như hiện tại.
- Không automated test mới hoặc chạy test trong phase này.

## Risks / Notes

- Trang nguồn nhiều chữ hơn slide thông thường; dùng scroll pane đã có và rà độ đọc ở desktop/mobile thay vì bỏ nguồn để ép vừa.
- Trình chiếu cần một trang nguồn sau danh sách các chặng, nhưng không được làm slide 11 thành một nav group mới hay làm sai số lượng thẻ nội dung.
