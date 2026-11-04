# Phase 04 — Manual source and UX acceptance

**Phase ID:** `phase-04-manual-acceptance`

**Objective:** Nghiệm thu đối chiếu nội dung và bảo toàn giao diện sau khi trang cuộn và trình chiếu đã dùng dữ liệu mới.

## Stories Covered

- US-01–US-06 in `spec.md`.

## Scope

1. So từng trang web với đúng số slide trong `Chuong_7_Gia_dinh_noi_dung_slide.docx`; dùng `Chuong_7_Gia_dinh_loi_thuyet_trinh.docx` chỉ khi cần làm rõ nội dung đã có.
2. Đối chiếu trang nguồn 11, tên nguồn, URL, trang in/PDF và quy ước về trích nguyên văn/diễn giải.
3. Kiểm tra trang nguồn ảnh hero là cơ quan nhà nước/báo chí chính thống; đối chiếu caption, credit, asset URL và điều kiện tái sử dụng. Nếu quyền sử dụng chưa rõ, xác nhận trang dùng typography fallback.
4. Tìm bằng mắt các nội dung chủ đề cũ trong hero, scope, cards, footer, metadata, quiz, appendix và presentation.
5. Kiểm tra điều hướng và anchor cho ba chặng cùng hai placeholder; xác nhận không có quiz/password/AI prompt tương tác nào render.
6. Rà thao tác trình chiếu: mở, 11 trang, tiến/lùi, bàn phím, thoát, focus và scroll restore.
7. So sánh desktop và viewport 360 px; rà tràn ngang, card dày chữ, nguồn và link focus; kiểm tra click-star, reveal và reduced-motion behavior vẫn giữ nguyên.

## Files / Modules

- Manual review of `src/App.jsx`, `src/components/PresentationMode.jsx`, `src/data/chapter7-family.js`, `index.html` and rendered page.
- No planned source changes in this phase unless a defect is found; any fix returns to its owning implementation phase.

## Dependencies

- Depends on Phases 02 and 03.

## Acceptance / Manual Verification

- 11/11 pages are present in order; 10 content slides are in groups 3 / 3 / 4; source page is last.
- All dates, metrics, units, legal references, citations and URLs match the supplied DOCX; no new facts appear.
- Hero image is from an official source with matching caption, attribution, source link and verified reuse status; use fallback when reuse is unclear.
- Only the permitted phrase is treated as a direct quote; analytical statements retain their qualifications.
- Zero Chapter 2/1945–1946 content remains in the rendered site, including metadata and full-screen presentation.
- Quiz and AI sections display only the approved placeholder message and retain working anchors.
- No visible UI or interaction has been redesigned; desktop and 360 px layouts have no horizontal overflow.
- No automated test is added or run; record the reviewed viewport sizes and results in the implementation evidence.

## Risks / Notes

- Because the check is manual, record which DOCX pages/slides were compared and which viewport widths were reviewed; do not claim automated coverage.
- If a source link is dead or a fact cannot be traced, leave it unaltered and flag it instead of silently substituting a different source or claim.
