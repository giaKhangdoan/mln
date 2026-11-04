# Plan: Thay nội dung web bằng Chương 7 về gia đình

**Date:** 2026-11-04

- **Mode:** hard
- **Status:** Implemented; Phases 01–04 and hard verification gates passed. Scoped commit `7228edd` created; awaiting explicit push approval.
- **Risk:** normal — thay nội dung qua nhiều module frontend; không thay xác thực, dịch vụ ngoài hoặc hạ tầng.
- **Spec:** `plans/chuong-7-gia-dinh-web-content/spec.md`
- **Project root:** `E:\mln\mln` (git root; không có `.skills.json` ở ancestor gần hơn)

## Goal

Chuyển nội dung website sang Chương 7 theo đúng tài liệu slide, sử dụng tài liệu lời thuyết trình để giải thích các ý tương ứng. Giữ UX/UI và tương tác hiện tại; tạm thay nội dung quiz và phụ lục AI bằng thông báo giữ chỗ.

## Decisions

- Tạo data module riêng `src/data/chapter7-family.js`; không ghi đè nội dung tham chiếu Chương 2.
- Dùng cùng một nguồn dữ liệu Chương 7 cho trang cuộn và trình chiếu.
- Có 10 thẻ nội dung theo slide 01–10, nhóm thành ba chặng 3 / 3 / 4; slide 11 giữ ở cuối như trang nguồn và quy ước dẫn chứng, đồng thời tính trong chế độ trình chiếu.
- Thay ảnh chủ đề cũ trong vùng hero bằng ảnh gia đình từ nguồn chính thống, giữ cùng vùng, kích thước và phong cách; dùng typography từ slide 01 nếu điều kiện sử dụng ảnh chưa rõ.
- Giữ mục điều hướng 04 và 05 cùng anchor `quiz` và `phu-luc-ai`; mỗi mục hiển thị `Nội dung sẽ được bổ sung sau` và không mount nội dung quiz/AI Chương 2.
- Hai DOCX không có media nhúng; tìm ảnh riêng từ nguồn chính thống và xác minh credit/điều kiện sử dụng trước khi đưa lên trang.
- Không thêm thư viện runtime. Nghiệm thu nội dung theo phase bằng đối chiếu nguồn và kiểm tra UI thủ công; chế độ `--hard` bổ sung build, test và review gate sau Phase 04.

## Phase Index

| Phase | Objective | Dependencies | Stories |
|---|---|---|---|
| `phase-01-build-chapter7-content-model` | Tạo mô hình nội dung có thể truy nguyên về hai DOCX, đủ 11 trang và nguồn; rà nguồn ảnh chính thống | Không | US-01, US-02, US-04, US-06 |
| `phase-02-integrate-page-and-placeholders` | Nối nội dung mới vào trang cuộn, cập nhật nhận diện, ảnh mở đầu và thay nội dung 04–05 bằng placeholders | Phase 01 | US-01, US-03, US-05, US-06 |
| `phase-03-update-fullscreen-presentation` | Cấp cùng nội dung Chương 7 cho chế độ trình chiếu, gồm trang nguồn 11 | Phase 01; Phase 02 | US-01, US-03, US-04 |
| `phase-04-manual-acceptance` | Xác nhận độ trung thực nội dung, nguồn ảnh và hành vi giao diện trên desktop/mobile | Phase 02; Phase 03 | US-01–US-06 |

## Execution Checklist

- [x] `phase-01-build-chapter7-content-model`
- [x] `phase-02-integrate-page-and-placeholders`
- [x] `phase-03-update-fullscreen-presentation`
- [x] `phase-04-manual-acceptance`

## Session Notes
<!-- Updated by cook automatically — do not edit manually -->

**Last active:** 2026-11-04 22:45
**Phase in progress:** Step 5 — awaiting push decision
**Status:** Phases 01–04 and hard verification gates passed; scoped commit `7228edd` created. No push performed.

### Decisions made this session
- Added one shared Chương 7 module with slides 01–10 grouped 3 / 3 / 4, plus source page 11 and seven source records.
- Two official photo candidates were researched. Neither page establishes image-specific reuse rights, so record them without embedding and keep the approved typography fallback.
- Integrated the shared data into the scroll page, updated page metadata/footer, and replaced the old quiz and AI appendix mounts with the approved placeholders.
- Connected full-screen presentation to the shared 11-page data, rendered source page 11 and all source links in its scroll pane, and aligned presentation identity and section labels to Chương 7.
- Manually verified slide order/count, progress, source content/links, next/previous controls, Arrow/Space/Home/End, Escape/close, and return focus/scroll. ESLint, syntax check and `git diff --check` passed.
- Completed Phase 04 by extracting both supplied DOCX files and comparing slide-content paragraphs for slides 01–11 with `chapter7-family.js`; the speaker-script paragraphs were used only to clarify corresponding points. Dates, statistics (TFR 1.93/1.91, age 60+ 14.0%/14.5%, labor-force participation 63.0%/74.3%), legal references, printed/PDF page mappings, quotation rule, seven source records, and source-page order match the slide file.
- Browser review at 1280×900 and 360×800 confirmed 11 ordered page IDs, 3/3/4 groups, five navigation anchors, no horizontal overflow, updated title/description/footer, no rendered legacy Chapter 2/1945–1946 copy, and placeholders 04/05 without quiz, password, or AI controls. The hero contains no external image; the approved typography fallback remains because neither official image candidate states image-specific reuse permission.
- Rechecked the presentation at 1/11 and 11/11; the source page has seven links in an independently scrollable pane, and End/Home/Escape work. Escape closes the presentation, restores focus to its launch button, and restores scroll position. Click-star and reduced-motion behavior were verified in the prior Phase 03 browser review and retained here. No automated tests run in this manual-acceptance phase.
- The exact MOJ legal-database URL from the DOCX is indexed by the official search result as Law 52/2014/QH13, but direct web fetch returned 502 and the local CUA browser returned `ERR_NAME_NOT_RESOLVED`; the URL is unchanged and this access limitation is recorded.
- Mandatory `--hard` gates passed: Vite build succeeded, Node test suite passed 7/7, ESLint passed for `src/App.jsx` and `tests/chapter7-family.test.js`, and code review approved 10/10 with no remaining findings. The first review's low-severity desktop-nav finding was fixed by restoring the prior desktop flex layout; the mobile grid remains.

### Next immediate action
Await the user's explicit decision to push commit `7228edd` to remote `main`.

## Cross-Phase Invariants

- Slide file quyết định nội dung và thứ tự; lời thuyết trình chỉ làm sáng rõ ý đã có.
- Không thêm dữ kiện, luật, mốc hoặc số liệu ngoài hai DOCX và URL được ghi trong slide. Ảnh là tư liệu minh họa riêng, chỉ dùng khi nguồn chính thống và điều kiện sử dụng được xác nhận.
- Hero image must come from an official source with attribution and image-specific reuse terms confirmed; if not available, use the approved slide-derived typography fallback.
- Giữ ba nhóm slide 01–03, 04–06, 07–10; slide 11 là phần nguồn ở cuối.
- Giữ bảng màu, font, grid, khoảng cách, card, thanh điều hướng, hiệu ứng reveal/star, keyboard controls, reduced-motion behavior và responsive hiện có.
- Không xóa `src/data/history1945-1946.js`, `src/data/historyQuiz.js`, `src/data/aiAppendix.js` hoặc component gốc; chỉ loại chúng khỏi trang đang trình bày Chương 7.

## Risks

| Risk | Mitigation |
|---|---|
| Trang nguồn 11 có nhiều mục và URL, trong khi component hiện có trường `sourceUrl` đơn | Dùng danh sách nguồn có cấu trúc, render bằng kiểu chữ/liên kết hiện tại; kiểm tra toàn bộ nguồn ở trang cuộn và trang cuối trình chiếu. |
| App và PresentationMode đọc hai module khác nhau | Cả hai phải nhập từ data module Chương 7 duy nhất; acceptance kiểm tra tiêu đề, thứ tự và số trang khớp nhau. |
| Còn sót nội dung Chương 2 ở hero, metadata, footer, nav hoặc component cũ | Rà chuỗi hiển thị và kiểm tra DOM sau khi thay; giữ data cũ trong code nhưng không render. |
| Câu diễn giải bị nâng thành trích dẫn hoặc khẳng định phổ quát | Chỉ đánh dấu cụm “gia đình hạt nhân quy mô nhỏ” là trích nguyên văn; giữ các giới hạn phân tích và số liệu như tài liệu. |
| Nội dung dài làm mất tính đọc được ở màn hình nhỏ | Giữ card/layout và kiểm tra thủ công ở 360 px cùng desktop; không rút mất trích dẫn/số liệu để xử lý tràn. |
| `--hard` bổ sung automated test ngoài các phase nội dung | Chỉ thêm `tests/chapter7-family.test.js` bằng Node tích hợp sẵn; không thêm dependency, và toàn bộ 7 kiểm thử đã qua. |

## Verification Policy

Không thêm hoặc chạy automated tests như một phần của nghiệm thu nội dung từng phase. Nghiệm thu nội dung bằng đối chiếu với hai DOCX và kiểm tra trực tiếp các luồng UI. Với lần chạy cook --hard do người dùng yêu cầu, vẫn thực hiện build gate và test gate bắt buộc sau khi hoàn tất các phase theo quy trình của skill. Nếu trong lúc triển khai phát sinh thay đổi về hành vi hoặc phụ thuộc, cập nhật plan trước khi mở rộng phạm vi.
