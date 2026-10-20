# Plan: Thay nội dung website bằng bộ thuyết trình 1954–1975

Mode: --fast
Risk: normal — thay nội dung trên trang hiện hữu và metadata; thay đổi có thể xem lại/hoàn nguyên, không chạm API, auth hoặc hạ tầng.

Spec: `plans/1954-1975-web-content/spec.md`

## Overview

Thay chuyên đề HCM202 đang hiển thị bằng nội dung 9 slide về ý nghĩa lịch sử và kinh nghiệm lãnh đạo của Đảng thời kỳ 1954–1975. Bố cục thành ba chặng, giữ từng slide là một đơn vị riêng, đặt nguồn và caveat cạnh nội dung tương ứng. Giữ Trường Đại học FPT, dùng nhãn học phần VNR202, bỏ HCM202 và tên nhóm HCM/SPST/C3-02. Tái sử dụng bố cục và màu sắc hiện có ở mức phù hợp.

## Scope Challenge

- **Exists:** Website đang có nội dung một chủ đề khác, không có trang nội dung cho bộ slide mới.
- **Minimum:** Cập nhật active React page và metadata HTML; gỡ các mô-đun thuộc chủ đề cũ khỏi trang đang chạy.
- **Complexity:** Fast; nội dung hiển thị chính nằm trong một React page, metadata trong một HTML file.
- **Tests:** Không tạo hoặc chạy tests trong kế hoạch này; xác nhận nội dung bằng đối chiếu thủ công với hai DOCX và tiêu chí nghiệm thu.
- **Tasks:** Checklist theo phase ở dưới.

## Phase Index

| Phase | Objective | Stories | Dependency |
|---|---|---|---|
| `phase-01-replace-presentation-content` | Tạo mô hình nội dung chuẩn từ hai DOCX và thay toàn bộ nội dung đang hiển thị bằng ba chặng/chín slide. | US-01, US-02, US-03 | None |
| `phase-02-update-page-identity-and-review` | Cập nhật metadata/nhận diện, hoàn thiện điều hướng và rà soát nội dung, nguồn, bố cục responsive. | US-01, US-03, US-04 | Phase 01 |

## Risks and Mitigations

- **Mất ý khi rút gọn:** dùng các ý trong file 2 làm checklist theo từng slide; lời thuyết trình chỉ bổ sung giải thích/caveat có trong file.
- **Số liệu bị tách khỏi giới hạn diễn giải:** đặt caveat ngay cạnh số liệu ở slides 7–9; kiểm tra chính xác từng giá trị và mốc.
- **Nội dung cũ còn sót:** rà soát hero, nav, section, quiz/poll/chatbot, nguồn, footer, title và description; bỏ identifiers cũ khỏi trang đang chạy.
- **Trang quá dài hoặc tràn ngang trên điện thoại:** nhóm theo ba chặng, hiển thị từng slide thành card ngắn, dùng điều hướng ba mục và kiểm tra ở viewport 360 px.
- **Nguồn không có URL trong DOCX:** giữ trích dẫn dạng văn bản như tài liệu; không tự tạo URL.

## Implementation Checklist

- [x] Phase 01: xây dữ liệu 9 slide có nguồn, thay active page, gỡ nội dung/tương tác chủ đề cũ.
- [x] Phase 02: cập nhật metadata và nhãn trường/học phần, rà soát nội dung và trải nghiệm đọc ở desktop/mobile.

## Session Notes
<!-- Updated by cook automatically — do not edit manually -->

**Last active:** 2026-10-20
**Phase in progress:** all planned phases complete
**Status:** Both phases are implemented. The live page shows the new title, FPT/VNR202 identity, three-chapter navigation, all nine slides, and their sources. At a 360 px CSS viewport, `innerWidth`, `clientWidth`, and `scrollWidth` are all 360. No automated tests were run.

### Decisions made this session
- Kept the slide text in a separate data module so all nine sections and their sources are easy to compare with the supplied documents.
- Replaced the old interactive modules and topic content on the active page with three chapter sections and nine slide cards.
- Used FPT and VNR202 in the page header and footer; removed the old group labels and topic-specific metadata.

### Next immediate action
None — planned implementation is complete. The Vite development server is running at `http://127.0.0.1:5173/`.
