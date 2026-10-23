# Phase 02 — Chapter 2 page integration

**Phase ID:** `phase-02-chapter-two-page-integration`  
**Story coverage:** P1 — giữ UX/UI hiện có; P1 — tạm ẩn Trắc nghiệm và Phụ lục AI; P1 — mở đầu, ảnh và phạm vi đúng Chương 2.  
**Depends on:** `phase-01-source-locked-content-model`.

## Mục tiêu

Kết nối bộ dữ liệu 1945–1946 với trang hiện tại, thay nội dung hiển thị cũ, giữ cách trình bày và tương tác hiện có, đồng thời bỏ mục 04–05 khỏi trang mà vẫn giữ module để dùng lại sau.

## Phạm vi công việc

1. Trong `src/App.jsx`, đổi import `chapters` từ dữ liệu 1954–1975 sang `src/data/history1945-1946.js`.
2. Cập nhật hero bằng tiêu đề “Xây dựng và bảo vệ chính quyền cách mạng (1945–1946)” và lời dẫn theo file slide: “Từ giành chính quyền đến giữ vững nền độc lập non trẻ”. Giữ cấu trúc cột, CTA, màu, font, animation và liên kết CTA đến chặng đầu. Dùng một ảnh tư liệu phù hợp nhất đã được phase 01 duyệt; không thêm ảnh vào thẻ slide. Nếu phase 01 không duyệt được ảnh, render trong cột phải một khối typography cân bằng với số lớn “1945–1946” và cụm “Kháng chiến, kiến quốc” lấy nguyên từ slide 1; không để trống cột và không thêm dữ kiện. Khối này chỉ dùng khi thiếu ảnh để tránh làm trang đổi bố cục.
3. Thay phần tử `VietnamMapSection` bằng khối phạm vi có nhịp thị giác tương đương: mốc thời gian, hai nhiệm vụ gắn bó và luận điểm “Kháng chiến, kiến quốc” lấy từ slide 1. Không render SVG bản đồ, các nhãn đảo hoặc nội dung địa lý của trang cũ.
4. Render ba chặng và tám thẻ theo dữ liệu mới. Bỏ nhánh tiêu đề viết cứng riêng cho `chapter.number === '01'`; dùng `chapter.title` từ mô hình để không còn tiêu đề 1954–1975. Giữ renderer và kiểu thẻ; chỉ sửa logic trường dữ liệu nếu nội dung Chương 2 không thể biểu diễn bằng mô hình hiện có.
5. Chỉ tạo ba link nav từ `chapters`. Giữ nguyên ID `chang-1` đến `chang-3`, trạng thái active, focus và thiết kế sticky. Trong IntersectionObserver chỉ theo dõi ba chặng đang render; bỏ ID quiz/AI khỏi danh sách theo dõi.
6. Bỏ import và JSX render `QuizSection`, `AIAppendix`, `VietnamMapSection` trên trang mới. Không xóa hay chỉnh sửa các module `src/components/QuizSection.jsx`, `src/components/AIAppendix.jsx`, các tệp dữ liệu tương ứng hoặc `src/components/VietnamMapSection.jsx`.
7. Cập nhật phần mô tả footer sang chủ đề Chương 2, không để câu “thời kỳ 1954–1975”. Giữ nhận diện trường/học phần.
8. Sửa `<title>` và meta description trong `index.html` cho Chương 2, giữ `lang="vi"`, viewport và favicon hiện tại.
9. Cập nhật `HistoricalPhoto` để nhãn nguồn hiển thị theo trường nguồn của từng ảnh, thay cho chuỗi cố định “Báo Điện tử Chính phủ”. Thêm trường `sourceName` cho ảnh mới và cho các ảnh cũ đang dùng liên kết Báo Điện tử Chính phủ mà không thay đổi `src`, `alt`, caption hay URL của chúng; nếu gặp entry chưa có tên nguồn, dùng nhãn chung “Trang nguồn” thay vì gán sai tổ chức. Bảo đảm liên kết, tên nguồn, chú thích và alt text cùng trỏ đúng tư liệu. Kiểm tra hiệu ứng sao vàng toàn trang, reveal, reduced-motion, source links, alt text, focus-visible và tải ưu tiên ảnh hero/lazy ảnh thẻ vẫn dùng theo component hiện tại.

## Files/modules

- Sửa: `src/App.jsx`, `index.html`.
- Tiêu thụ/cập nhật dữ liệu: `src/data/history1945-1946.js`, `src/data/historicalPhotos.js` (chỉ thêm nhãn nguồn cho entry mới và legacy; giữ nguyên ảnh/caption/URL cũ) và ảnh đã được phase 01 xác minh (nếu có).
- Không sửa/xóa: `src/components/QuizSection.jsx`, `src/components/AIAppendix.jsx`, `src/components/VietnamMapSection.jsx`, `src/data/history1954-1975.js`, `src/data/historyQuiz.js`, `src/data/aiAppendix.js`.
- CSS giữ nguyên trừ khi cần sửa một lỗi bố cục cụ thể do thay nội dung; không đổi token màu, font, motion hoặc kiểu thẻ.

## Nghiệm thu thủ công

- Trang hero hiển thị đúng tên Chương 2, giai đoạn và lời dẫn; CTA tới đúng chặng 01.
- Khối phạm vi thay bản đồ cũ; không còn tên Hoàng Sa, Trường Sa hoặc mô tả bản đồ trong DOM được render.
- Nav có đúng ba mục; các liên kết tới `#chang-1`, `#chang-2`, `#chang-3` cuộn tới nhóm 2/3/3 thẻ và trạng thái active bám đúng chặng.
- Tám tiêu đề, số thứ tự và nguồn của thẻ theo dữ liệu phase 01; các cột số liệu và kết luận không làm nội dung tràn ngang.
- `#quiz` và `#ai-nhat-ky` không có section trong DOM; mục 04/05 không có link nav. Tệp module vẫn còn trong repo.
- Kiểm tra bằng trình duyệt tại chiều rộng 360 px và desktop; nhận diện burgundy/kem, font, nav sticky, card, reveal và sao vàng vẫn như hiện tại; các nguồn/ảnh truy cập được và focus nhìn thấy được.
- Metadata của tab/trang dùng tên chủ đề mới.

## Rủi ro / quyết định

- Nếu hero không có ảnh đủ điều kiện sử dụng, giữ khu vực hero theo bố cục hiện tại bằng phương án không ảnh trong spec, không thay bằng ảnh ngoài chưa xác minh.
- Dữ liệu ảnh mới phải có tên nguồn hiển thị đúng; renderer không được cố định tên một đơn vị khi nguồn ảnh có thể khác.
- Các entry ảnh legacy phải tiếp tục có nhãn khớp với trang nguồn khi chủ đề cũ được khôi phục; nếu không có metadata nguồn, chỉ dùng nhãn chung, không đoán nhà xuất bản.
- Khi bỏ component khỏi DOM, không cần xóa dependency hoặc dữ liệu liên quan; giữ module để có thể bật lại mục 04–05 sau buổi thuyết trình.

## Kết quả nghiệm thu thủ công

- [x] Hero, khối phạm vi và metadata dùng nội dung Chương 2; cột hero dùng typography “1945–1946 · Kháng chiến, kiến quốc” vì các nguồn ảnh đã rà soát chưa công bố quyền tái sử dụng.
- [x] Có đúng ba liên kết điều hướng tới `#chang-1`, `#chang-2`, `#chang-3`; các chặng chứa lần lượt 2, 3 và 3 thẻ.
- [x] Trang render đúng tám thẻ theo thứ tự 01–08; mỗi thẻ có nguồn hiển thị.
- [x] Quiz, phụ lục AI, bản đồ và từ khóa nội dung chủ đề cũ không xuất hiện trong DOM được render; các module gốc vẫn còn trong repo.
- [x] Trang được xem thủ công ở desktop 1440 px và mobile 360 px; không phát hiện tràn ngang. Trạng thái active đổi đúng khi điều hướng bằng chuột và bàn phím.
- [x] Đã sửa trạng thái active khi nhảy đến một chặng trên viewport thấp: nav cập nhật ngay trong thao tác kích hoạt link, còn IntersectionObserver tiếp tục đồng bộ khi cuộn tay.
- [x] Đã rà tiêu đề/meta, nguồn slide 08, bốn chỉ số lao động, hiệu ứng sao và `prefers-reduced-motion` trên trang chạy.

Không chạy automated tests hoặc production build; kế hoạch yêu cầu production build tại cổng triển khai, còn lượt này chưa có yêu cầu triển khai.
