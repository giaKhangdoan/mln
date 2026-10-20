# Phase 02 — Update page identity and review

## Objective

Cập nhật nhận diện trang theo chủ đề mới và lựa chọn của người dùng; hoàn thiện điều hướng và rà soát độ chính xác, khả năng đọc, và responsive của trang sau khi thay nội dung.

## Stories Covered

- **US-01 (P1):** Trang khớp với chủ đề thuyết trình mới.
- **US-03 (P1):** Nguồn/số liệu rõ ràng, chính xác.
- **US-04 (P2):** Đọc và điều hướng trên điện thoại thuận tiện.

## Scope and Tasks

1. Trong `index.html`, đổi `lang="en"` thành tiếng Việt; cập nhật `<title>` và meta description theo chủ đề mới, bỏ mô tả Meaning Map/HCM202.
2. Trong header/footer, giữ “Trường Đại học FPT”, dùng nhãn học phần “VNR202”, bỏ HCM202 và nhóm HCM/SPST/C3-02; không tự tạo nhãn nhóm mới.
3. Dùng luận điểm trung tâm Slide 1 làm câu dẫn/kết nếu cần; không giữ luận điểm cũ về Meaning Map.
4. Hoàn thiện điều hướng ba chặng; đồng bộ nav, mục cuộn trang, active-section tracking và IDs của chín slide.
5. Chỉ chỉnh `src/index.css` nếu cần để đạt bố cục một cột, không tràn ngang ở viewport 360 px; ưu tiên dùng utility/style hiện có.
6. Đọc lại toàn bộ chín card và nguồn, so với DOCX; rà soát các chữ cũ còn sót trong trang hiển thị và metadata.

## Files and Modules

- `index.html` — `lang`, title và meta description.
- `src/App.jsx` — nhãn FPT/VNR202, header/footer, điều hướng và các IDs.
- `src/index.css` — chỉ nếu điều chỉnh responsive là cần thiết.

## Dependencies

- Phụ thuộc Phase 01 vì metadata/IDs cần khớp cấu trúc trang mới.

## Tests and Acceptance Criteria

Không thêm hoặc chạy automated tests trong phase này. Chấp nhận khi:

- Tab trình duyệt mô tả đúng chủ đề 1954–1975; `lang` là tiếng Việt.
- Header giữ Trường Đại học FPT và hiển thị học phần VNR202; không còn HCM202 hoặc tên nhóm cũ.
- Điều hướng ba chặng tới đúng nội dung; đủ chín slide vẫn hiển thị riêng.
- Nguồn xuất hiện ở 9/9 slide và khớp tài liệu tương ứng.
- Ở viewport 360 px, nội dung xếp một cột, không tràn ngang; số liệu và caveat vẫn dễ đọc.
- Trang hiển thị không còn câu trích, phần lý luận, ví dụ hoặc phản hồi tương tác của chuyên đề cũ.

## Risks and Open Questions

- Thanh điều hướng dài có thể chật trên màn hình nhỏ; chỉ dùng ba mục chặng ở nav chính.
- Giữ nguyên department/group name không được người dùng xác nhận có thể để lại metadata sai; chỉ giữ trường và học phần người dùng đã chốt.
- Không có câu hỏi mở.
