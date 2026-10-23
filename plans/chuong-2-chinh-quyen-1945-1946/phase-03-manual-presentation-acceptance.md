# Phase 03 — Manual presentation acceptance

**Phase ID:** `phase-03-manual-presentation-acceptance`  
**Story coverage:** P1 — toàn bộ nội dung đúng nguồn; P1 — UX/UI và responsive giữ nguyên; P1 — không còn nội dung 1954–1975 và mục 04–05; P2 — 3C vẫn để ngoài lượt này.  
**Depends on:** `phase-02-chapter-two-page-integration`.

## Mục tiêu

Rà soát trang hoàn chỉnh trên trình duyệt theo spec, tập trung vào độ chính xác nguồn, đủ tám thẻ, hành vi điều hướng, giao diện responsive và việc loại bỏ nội dung không thuộc buổi trình bày.

## Phạm vi công việc

1. Dò lần lượt tám thẻ từ đầu đến cuối cạnh file nội dung slide; đối chiếu các câu diễn giải được bổ sung cạnh file lời thuyết trình. Ghi nhận và sửa câu không truy nguyên được trước khi bàn giao.
2. Rà toàn trang để tìm dấu vết hiển thị của chủ đề cũ: 1954–1975, giải phóng 1975, chiến dịch 1975, dữ liệu GDP/xuất nhập khẩu/khoa học số và bản đồ cũ. Kiểm tra cả vùng hero, chú thích ảnh, footer và nội dung được render.
3. Kiểm tra nav sticky ở ba chặng, đường dẫn hash và active section khi nhảy giữa các nhóm; xác nhận chặng chia slide 2/3/3.
4. Rà tương tác giữ lại: CTA, reveal, hiệu ứng ngôi sao năm cánh khi bấm, liên kết nguồn, focus bằng bàn phím và hành vi `prefers-reduced-motion`.
5. Quan sát bố cục ở viewport 360 px và desktop; rà tràn ngang, tiêu đề dài tiếng Việt, thẻ có metrics, caption nguồn và hero khi thiếu ảnh.
6. Nếu có ảnh mới: mở liên kết nguồn, kiểm tra chú thích khớp ảnh; xác nhận thuộc giai đoạn 1945–1946 và quyền/điều kiện sử dụng đã được ghi nhận. Nếu không xác minh được, đổi sang phương án không ảnh.
7. Xác nhận chỉ hero có thể dùng ảnh tư liệu; các thẻ slide không thêm ảnh trong lượt này. Nếu hero dùng typography fallback, nội dung chỉ là “1945–1946” và “Kháng chiến, kiến quốc” theo slide 1.
8. Xác nhận quiz và AI không có link/section trong DOM hiển thị. Bảo đảm code/module hiện tại vẫn được giữ để khôi phục trong lượt sau.
9. Ghi lại kết quả nghiệm thu thủ công. Không thêm hoặc chạy bộ kiểm thử tự động trong phạm vi kế hoạch này. Khi có yêu cầu triển khai, production build hiện có là cổng phát hành từ tiêu chí của spec, không phải thay thế cho rà soát nội dung.

## Files/modules

- Chủ yếu rà soát/sửa theo phát hiện: `src/data/history1945-1946.js`, `src/data/historicalPhotos.js`, `src/App.jsx`, `index.html`.
- Điều kiện ảnh: `public/images/`.
- Không thay đổi ngoài phạm vi nếu không phát hiện lỗi: CSS/layout tokens và các module giữ lại cho quiz, AI, bản đồ, chủ đề cũ.

## Nghiệm thu thủ công

- Có 8 thẻ hiển thị, số 01–08, đúng thứ tự và nhóm 2/3/3.
- Mọi dữ kiện lịch sử, ngày tháng, số liệu và nguồn trên trang đối chiếu được về tài liệu; slide 08 có bốn số liệu và giới hạn diễn giải chính xác.
- Trang không còn nội dung cũ 1954–1975, bản đồ, quiz hoặc phụ lục AI trong DOM render.
- Ảnh (nếu dùng) có nguồn chính thống, đúng bối cảnh, quyền sử dụng được xác minh, chú thích và liên kết nguồn khớp.
- Chỉ hero dùng ảnh nếu đủ điều kiện; các thẻ slide không thêm ảnh. Nếu dùng fallback, khối chữ chỉ chứa nội dung được duyệt từ slide 1.
- Bố cục đọc được từ 360 px, không tràn ngang; nav và tương tác giữ đúng hành vi cũ; giảm chuyển động theo cài đặt hệ thống.
- Ghi rõ các mục không thể xác minh nếu có; không suy diễn để đánh dấu đạt.

## Rủi ro / quyết định

- Đây là kiểm tra thủ công theo nội dung và trình duyệt, không phải cam kết kiểm thử tự động.
- Tiêu chí “production build thành công” trong spec được thực hiện tại cổng phát hành khi triển khai; không chạy test suite hoặc thay đổi pipeline trong phase này.

## Kết quả nghiệm thu

- [x] Đối chiếu tám slide và nhóm 2/3/3 với mô hình đã so sánh từ file nội dung slide; file lời thuyết trình chỉ dùng để làm rõ ý tương ứng. Slide 08 có đủ bốn chỉ số, kỳ 9 tháng năm 2026 và liên kết nguồn Cục Thống kê; không gán quan hệ nhân quả với giai đoạn lịch sử.
- [x] DOM hiển thị chỉ có ba chặng và tám thẻ; không còn bản đồ, quiz, phụ lục AI, số liệu/chủ đề 1954–1975 hoặc các chuỗi cũ được rà soát.
- [x] Không có ảnh được nhúng. Hero dùng hai cụm chữ đã duyệt, đúng phương án khi không xác minh được quyền tái sử dụng ảnh.
- [x] Kiểm tra trực quan ở 1440 px và 360 px; nội dung không tràn ngang. Nav sticky, CTA và active section giữ hành vi mong đợi.
- [x] Điều hướng bằng Tab/Enter có focus-visible và đổi đúng chặng active; thao tác kích hoạt vẫn hiện sao vàng.
- [x] Khi mô phỏng `prefers-reduced-motion: reduce`, animation của sao và hero bị tắt.
- [x] Quiz/AI không render; các component và dữ liệu tương ứng vẫn được giữ trong repo.
- [x] Code review cuối được phê duyệt, không có phát hiện cần xử lý.

Không thêm hoặc chạy bộ kiểm thử tự động và không tạo production build trong lượt này; chưa có yêu cầu triển khai.
