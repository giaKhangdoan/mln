# Brainstorm: Thay nội dung website bằng bộ thuyết trình 1954–1975

**Date:** 2026-10-20

## Ideas Explored

- **Chín mục riêng, mỗi mục ứng với một slide.** Tạo đối chiếu một-một, dễ kiểm tra nội dung và nguồn; đổi lại trang kéo dài hơn.
- **Ba chặng, giữ nguyên nhãn Slide 1–9.** Gộp các slide thành (1) bối cảnh, ý nghĩa và nhân tố; (2) bài học và hạn chế; (3) liên hệ hiện nay và kết luận. Cách này giữ đường dẫn về từng slide, đồng thời giúp người đọc theo dõi theo chủ đề.
- **Giữ và chuyển đổi các mô-đun tương tác hiện có.** Có thể làm trang sinh động, nhưng sơ đồ, flashcard, câu hỏi và trợ lý hiện tại đều gắn với chủ đề cũ; việc chuyển đổi làm tăng phần nội dung cần kiểm soát và nguy cơ sinh thêm ý ngoài tài liệu.
- **Bài viết tuyến tính ngắn.** Dễ đọc nhanh, nhưng kém thuận tiện để đối chiếu đủ nội dung với từng slide.

## User's Direction

Người dùng muốn thay toàn bộ nội dung cũ bằng bộ nội dung mới; giữ đủ ý của file `Noi_dung_tren_9_slide.docx`, trình bày tinh gọn, dễ đọc, và có thể dùng lời trong `Loi_thuyet_trinh_9_slide.docx` để giải thích khi cần. Hướng được chọn là ba chặng với số thứ tự 01–09 nhưng không hiển thị chữ “Slide”, và đặt nguồn ngay tại từng mục. Người dùng xác nhận giữ tên Trường Đại học FPT và dùng học phần VNR202.

File nội dung trên 9 slide là cơ sở bắt buộc. File lời thuyết trình là nguồn giải thích bổ sung. Không thêm số liệu, sự kiện hoặc nhận định thực tế ngoài hai file. Các số liệu trên slide 7–9 cần đi cùng phần diễn giải/caveat tương ứng trong lời thuyết trình để tránh trình bày con số tách khỏi bối cảnh.

## Các điều chỉnh sau khi xem trang chạy

- Bỏ bộ đếm “09 slide · 03 chặng” ở hero và bỏ số đếm trong dòng “Nội dung trình bày”; điều hướng chính vẫn có ba chặng.
- Bỏ nhãn chữ “Slide” trên chín mục, chỉ giữ số thứ tự; thay các khối nhấn có vạch dọc bằng khối nền và bố trí lại trình tự chiến dịch theo hàng.
- Đổi nhãn các phần diễn giải số liệu thành “Kết luận”, gộp phần lưu ý với kết luận cuối ở mục 09 để tránh lặp.
- Thêm chuyển động xuất hiện nhẹ khi cuộn tới và tôn trọng tùy chọn giảm chuyển động của thiết bị.

## Tách yêu cầu của người dùng và ghi chú trong tài liệu

- Yêu cầu của người dùng: file 1 là lời để đọc và học; file 2 là nội dung đưa lên web; giữ đủ nội dung file 2, không bịa, có thể tham khảo file 1, và trình bày tinh gọn, dễ đọc. Sau khi được hỏi về phạm vi, người dùng xác nhận thay toàn bộ nội dung cũ.
- Ghi chú bên trong file 1 như “Mỗi đoạn tương ứng với một slide” và “Dòng nguồn đặt sau lời trình bày để đối chiếu, không đọc thành lời” là hướng dẫn cho tài liệu/người thuyết trình. Trên web, dùng chúng làm căn cứ ghép nội dung theo slide và đặt nguồn dưới phần nội dung; không biến ghi chú “không đọc thành lời” thành yêu cầu ẩn nguồn khỏi trang.
- File 2 xác định nội dung hiển thị và nguồn theo slide; các ghi chú bố cục bên trong file 2 hỗ trợ việc tổ chức nội dung, nhưng không thay thế yêu cầu của người dùng.

## Rà soát hiện trạng và điểm cần thay

Trang đang chạy lấy nội dung từ `src/main.jsx` → `src/App.jsx`. Các phần cần rà soát trong phạm vi thay chuyên đề:

- **Thông tin trang:** `index.html` còn tiêu đề/mô tả Meaning Map, HCM202, nhóm C3-02 và khai báo `lang="en"`; đổi theo chủ đề mới, đặt tiếng Việt, giữ Trường Đại học FPT, dùng nhãn VNR202 và bỏ tên nhóm cũ.
- **Hero và nhận diện:** thay tiêu đề, mô tả, câu trích Hồ Chí Minh và chân dung Hồ Chí Minh. Các nhãn trường/học phần/nhóm đang gắn với đề tài cũ; không tự đặt nhãn mới. Có thể giữ nền đỏ-vàng và cờ như phong cách trang nếu muốn.
- **Điều hướng và mạch nội dung:** hiện điều hướng tới tám phần cũ (lộ trình, khung lý luận, Meaning Map, dẫn chứng, khái niệm, trắc nghiệm, trợ lý AI, nguồn). Đổi thành ba chặng với chín đơn vị đánh số, căn theo thứ tự file 2.
- **Các phần học thuật và dẫn chứng:** thay timeline 4 mốc, ba khái niệm, Meaning Map và các ví dụ A80 / “Tổ quốc trong tim” / thu nhập 2025 bằng ý tương ứng slides 1–9; không giữ số liệu 8,4 triệu đồng và 8,9% từ đề tài cũ.
- **Tương tác:** bỏ thẻ khái niệm, quiz khóa bằng mật khẩu, poll có số bình chọn mặc định và chatbot trả lời nội dung HCM202. Không thêm trợ lý AI mở; chỉ cân nhắc câu hỏi ôn tập cố định nếu sau này người dùng muốn và từng đáp án đều lấy từ hai file.
- **Nguồn và chân trang:** thay danh mục Giáo trình Tư tưởng Hồ Chí Minh, Hồ Chí Minh Toàn tập, A80 và báo Nhân Dân bằng nguồn đã ghi theo từng slide; giữ Trường Đại học FPT và VNR202, bỏ luận điểm cũ, mã HCM202 và tên nhóm HCM/SPST/C3-02.
- **Phạm vi mã nguồn:** `src/main.jsx` đang nạp `App.jsx`. `DocxPresentation.jsx` và `QuizSection.jsx` hiện không được nạp từ entry point; rà soát việc dọn phần cũ này riêng, không nhầm với nội dung đang hiển thị.

## Open Questions

Không còn câu hỏi về phạm vi: người dùng đã chọn thay toàn bộ nội dung website hiện tại.

## Risks

- Trang dài hoặc dày chữ nếu rút gọn câu mà làm mất ý; cần giữ từng slide thành đơn vị độc lập, dùng 3–5 gạch đầu dòng hoặc bố cục tương đương.
- Website hiện tại có trích dẫn, bản đồ, flashcard, trắc nghiệm và trợ lý AI về chủ đề khác; nếu còn sót lại sẽ gây nhầm chủ đề hoặc cung cấp nội dung không được hai file xác nhận.
- Số liệu 2026 và phần diễn giải ở slides 7–9 cần được giữ chính xác cùng nguồn và caveat trong tài liệu.
- Trường Đại học FPT và học phần VNR202 được người dùng xác nhận; tên nhóm cũ không được xác nhận nên cần bỏ.
