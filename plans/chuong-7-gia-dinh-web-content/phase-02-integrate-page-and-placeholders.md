# Phase 02 — Integrate the Chapter 7 page and placeholders

**Phase ID:** `phase-02-integrate-page-and-placeholders`

**Objective:** Dùng data module Chương 7 trong trang cuộn, giữ nguyên giao diện, thay toàn bộ copy/nhận diện Chương 2 và giữ hai vị trí 04–05 bằng placeholders đã duyệt.

## Stories Covered

- US-01 — Nội dung slide mới dùng đúng thứ tự và nguồn.
- US-03 — Giữ giao diện hiện tại.
- US-05 — Gỡ quiz và phụ lục AI cũ, để chỗ bổ sung sau.
- US-06 — Dùng ảnh mở đầu từ nguồn chính thống khi điều kiện sử dụng đã rõ.

## Scope

1. Đổi import chapter data trong `src/App.jsx` từ module Chương 2 sang `src/data/chapter7-family.js`.
2. Giữ nguyên DOM hierarchy, class styling, navigation component và click-star/reveal behavior; chỉ đổi nội dung và data binding.
3. Thay hero title/copy bằng nội dung slide 01; cập nhật nhãn nút trình chiếu thành 11 trang.
4. Thay vùng dẫn nhập 1945–1946 bằng câu hỏi trung tâm và mạch trình bày. Thay ảnh cũ bằng ứng viên ảnh chính thống đã xác minh ở Phase 01, giữ cùng vị trí/kích thước/phong cách và gắn alt, caption, credit, source URL; nếu không có ảnh đủ điều kiện dùng, thay bằng khối chữ/đồ họa từ slide 01.
5. Đổi nhãn ba chặng và thứ tự thẻ theo nhóm 01–03 / 04–06 / 07–10.
6. Render trang nguồn 11 ở cuối phần nội dung, bao gồm danh mục nguồn và quy ước trang in/PDF; hiển thị nhiều liên kết bằng kiểu chữ/link hiện tại.
7. Thay việc mount `QuizSection` và `AIAppendix` bằng hai vùng giữ chỗ cùng ID `quiz` và `phu-luc-ai`, nội dung đúng một câu `Nội dung sẽ được bổ sung sau` cho mỗi vùng. Không xóa module/component/data cũ.
8. Cập nhật footer và metadata `index.html` sang chủ đề Chương 7; loại bỏ title/description Chương 2.

## Files / Modules

- `src/App.jsx`
- `index.html`
- `src/data/chapter7-family.js` (consumed; update only if renderer fields are missing)
- Existing but no longer mounted for this page: `src/components/QuizSection.jsx`, `src/components/AIAppendix.jsx`, `src/data/historyQuiz.js`, `src/data/aiAppendix.js`

## Dependencies

- Depends on Phase 01 content contract.
- Phase 03 will use the same data module and can proceed after data shape is stable.

## Acceptance / Manual Verification

- The page shows exactly 3 topic nav items followed by 04 Trắc nghiệm and 05 Phụ lục AI.
- Clicking 04 or 05 scrolls to the matching stable anchor; each placeholder shows only `Nội dung sẽ được bổ sung sau`.
- Ten chapter cards are displayed in the three specified groups; page 11 references appear after slide 10.
- Hero, introductory block, footer, title and meta description contain no Chapter 2/1945–1946 copy or imagery. Hero image, if used, has official origin, correct credit/link and confirmed use status; otherwise the typography fallback is used.
- All preserved visual patterns and interactions remain as before: sticky navigation, active section, card styling, star effect, reveal motion, focus behavior, reduced motion and responsive behavior.
- At 360 px, content does not create horizontal overflow; at desktop, existing grid proportions remain.
- No automated test is added or run.

## Risks / Notes

- Emptying the old question array is insufficient: `QuizSection` expects a question and state. Do not mount it while placeholder-only behavior is required.
- Updating only visible React content would leave browser title/description stale; update `index.html` in this phase.
