# Phase 01 — Build the source-locked Chapter 7 content model

**Phase ID:** `phase-01-build-chapter7-content-model`

**Objective:** Tạo một data module Chương 7 duy nhất cho 10 slide nội dung, trang nguồn 11 và nội dung dẫn nhập; bảo toàn đúng thứ tự, diễn giải và nguồn từ hai DOCX.

## Stories Covered

- US-01 — Đưa đủ 11 trang của file slide lên web đúng thứ tự.
- US-02 — Dùng lời thuyết trình chỉ để làm rõ ý đã có trong file slide.
- US-04 — Giữ các trích dẫn, nguồn và quy ước dẫn chứng có thể kiểm tra.
- US-06 — Tìm ảnh mở đầu liên quan từ nguồn chính thống và xác minh điều kiện sử dụng.

## Scope

1. Tạo `src/data/chapter7-family.js` theo shape `chapters` gần nhất của dự án để các renderer hiện có tiếp tục dùng được.
2. Khai báo nội dung dẫn nhập lấy từ slide 01: tiêu đề chủ đề, câu hỏi trung tâm và mạch trình bày.
3. Mô hình hóa đúng 10 slide nội dung, đánh số 01–10:
   - Chặng 01: slide 01–03, cơ sở.
   - Chặng 02: slide 04–06, biến đổi cơ cấu, chức năng và quan hệ.
   - Chặng 03: slide 07–10, bối cảnh, phương hướng, vận dụng và kết luận.
4. Khai báo trang 11 riêng trong cùng module để trang cuộn và PresentationMode có thể dùng nó mà không đẩy trang nguồn vào nhóm điều hướng 03.
5. Mô hình hóa danh mục nguồn slide 11 thành các mục có tên, trang/vị trí và URL riêng khi tài liệu cung cấp URL; giữ cả trang in và trang PDF.
6. Lưu nguồn theo từng thẻ và phân biệt trích dẫn nguyên văn với diễn giải. Ghi chú rằng chỉ cụm “gia đình hạt nhân quy mô nhỏ” là trích nguyên văn.
7. Giữ nguyên từng số liệu, đơn vị, mốc ngày, luật, điều khoản và giới hạn diễn giải trong file slide. Không thêm dữ kiện học thuật ngoài tài liệu; việc tìm ảnh minh họa được quản lý riêng ở mục 9.
8. Chỉ lấy lời thuyết trình để giải thích nội dung đã có tương ứng; không lấy lời chào, phần chuyển ý hay suy luận ngoài slide làm luận điểm mới.
9. Tìm và ghi nhận 1–3 ứng viên ảnh gia đình từ cổng cơ quan nhà nước/báo chí chính thống; lưu URL bài gốc, caption, credit/photographer, URL asset và điều kiện tái sử dụng. Ưu tiên ảnh có liên hệ rõ với chủ đề gia đình; không suy luận giấy phép từ uy tín của trang.

## Files / Modules

- New: `src/data/chapter7-family.js`
- Read-only source: `C:\Users\khang\Downloads\Chuong_7_Gia_dinh_noi_dung_slide.docx`
- Read-only supplemental source: `C:\Users\khang\Downloads\Chuong_7_Gia_dinh_loi_thuyet_trinh.docx`
- Contract: `plans/chuong-7-gia-dinh-web-content/spec.md`

## Dependencies

- None. Phase 02 and Phase 03 consume this module.

## Acceptance / Manual Verification

- Data module has exactly 3 content groups and 10 content slides numbered sequentially 01–10.
- Source slide is represented as page 11 and is not grouped as a fifth card under navigation section 03.
- All 11 titles match the slide file; the main question and roadmap match slide 01.
- Every factual point, quote, metric, legal reference and source entry is traceable to either DOCX; the speech file only clarifies matching slide points.
- All seven full sources listed in the slide document are represented, with the slide’s stated citation convention and print/PDF page mappings preserved.
- The 2025 demographic/labor figures retain their units and period; slide’s cautions on unpaid care and causal inference remain present.
- No unverified photo path is put into the page data; image candidates and their reuse status are recorded separately for Phase 02.
- At least one official-source image candidate has a recorded page URL, asset URL, caption/credit and image reuse status; any unclear status is marked unresolved and routes to the typography fallback rather than an uncredited image.
- No automated test is added or run.

## Risks / Notes

- Dense slide 11 has both a compact source summary and a full bibliography. Keep both available in the model so later renderers do not drop the complete sources.
- Keep data for the old chapter intact; the new module is additive and can be compared or switched back safely.
