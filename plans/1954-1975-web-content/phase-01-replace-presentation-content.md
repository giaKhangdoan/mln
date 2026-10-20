# Phase 01 — Replace presentation content

## Objective

Thay nội dung đang hiển thị ở trang React bằng đầy đủ nội dung của file `Noi_dung_tren_9_slide.docx`, chia thành ba chặng và chín mục slide có thể đối chiếu riêng. Dùng `Loi_thuyet_trinh_9_slide.docx` để bổ sung giải thích và caveat, không thêm dữ kiện ngoài hai file.

## Stories Covered

- **US-01 (P1):** Người thuyết trình có thể đối chiếu trang với đủ chín slide.
- **US-02 (P1):** Người đọc theo dõi mạch nội dung qua ba chặng với cách trình bày gọn.
- **US-03 (P1):** Số liệu và giới hạn diễn giải được trình bày chính xác.

## Scope and Tasks

1. Tạo `src/data/history1954-1975.js` làm nguồn dữ liệu nội dung có cấu trúc: ba chặng, chín slide; mỗi slide có số, tiêu đề, các ý ngắn và citation. Giữ đủ các luận điểm của file 2.
2. Tách nội dung theo ba chặng: Slide 1–3 (tổng quan/ý nghĩa/nhân tố), Slide 4–6 (bài học/hạn chế), Slide 7–9 (liên hệ hiện nay/kết luận).
3. Với Slide 5, giữ đúng trình tự Tây Nguyên → Huế–Đà Nẵng → Hồ Chí Minh và mốc thắng lợi 30/4/1975.
4. Với slides 7–9, giữ chính xác số liệu và đặt bối cảnh/caveat ngay cùng card số liệu; không chỉ hiển thị KPI rời.
5. Chuyển `src/App.jsx` sang render ba chặng và chín card. Giữ nội dung nguồn dưới từng slide; dùng các đoạn ngắn hoặc bullets để dễ quét.
6. Gỡ khỏi trang đang chạy nội dung timeline cũ, khung lý luận độc lập/tự do/hạnh phúc, Meaning Map, ví dụ A80/concert/thu nhập 2025, flashcard, quiz/poll cũ và chatbot HCM202 cùng state/handler/data chỉ phục vụ các mô-đun đó.
7. Tái sử dụng lớp card, màu sắc và chuyển động chung khi không gây nhầm chủ đề. Không thêm ảnh, câu trích, URL, số liệu hoặc nội dung mới.

## Files and Modules

- `src/App.jsx` — thay active page, nội dung, nav và loại bỏ các mô-đun cũ trên trang.
- `src/data/history1954-1975.js` — **new**, dữ liệu 9 slide và citation để nội dung tách khỏi JSX.
- Hai DOCX tại `C:\Users\khang\Downloads\` — nguồn đối chiếu chỉ đọc, không sửa.

## Dependencies

- Không phụ thuộc phase trước.
- Phase 02 phụ thuộc cấu trúc nội dung và IDs của phase này.

## Tests and Acceptance Criteria

Không thêm hoặc chạy automated tests trong phase này. Chấp nhận khi:

- Có đúng chín slide theo thứ tự, đặt trong ba chặng và có tiêu đề/số riêng.
- Mọi ý chính ở file 2 được giữ lại; file 1 chỉ thêm giải thích/caveat có căn cứ trong tài liệu.
- 9/9 mục có citation đúng theo DOCX.
- Các số liệu 9,01%; 434,30 tỷ USD; 453,72 tỷ USD; 19,42 tỷ USD; 94,1%; 14,02%; 963; 37; 26/34; 52,7 triệu; 9,1 triệu đồng/tháng và mốc 30/4/1975 chép đúng.
- Không còn nội dung HCM202, A80, concert, số liệu 2025, quiz/poll/chatbot cũ hiển thị trên active page.

## Risks and Open Questions

- Rút gọn quá mức có thể làm mất sắc thái ở slides 2, 3 và 6. Đối chiếu từng ý với DOCX trước khi chỉnh câu.
- Không hiển thị dữ kiện của file 1 như thể chúng là mục bắt buộc trên slide nếu file 2 không có; chỉ bổ sung phần giải thích phù hợp với yêu cầu người dùng.
- Không có câu hỏi mở về phạm vi nội dung.
