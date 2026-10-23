# Phase 01 — Source-locked content model

**Phase ID:** `phase-01-source-locked-content-model`  
**Story coverage:** P1 — đủ tám slide đúng thứ tự; P1 — mọi phát biểu có nguồn; P2 — giữ phần 3C ngoài giao diện lượt này.  
**Depends on:** none.

## Mục tiêu

Chuyển nội dung từ hai DOCX thành một mô hình dữ liệu riêng cho Chương 2, giữ file nội dung slide làm chuẩn, bảo đảm tám thẻ có đúng thứ tự và nhóm, đồng thời thẩm định ảnh lịch sử trước khi đưa vào giao diện.

## Phạm vi công việc

1. Đối chiếu `Noi_dung_slide_Chuong_2_Xay_dung_bao_ve_chinh_quyen_1945-1946.docx` với `Loi_thuyet_trinh_Chuong_2_Xay_dung_bao_ve_chinh_quyen_1945-1946.docx` theo từng slide. Tài liệu lời chỉ bổ sung giải thích tương ứng; không lấy sáu câu hỏi 3C làm nội dung trình chiếu.
2. Tạo `src/data/history1945-1946.js`, xuất ba chặng với ID ổn định `chang-1`, `chang-2`, `chang-3` và đúng tám slide:
   - Chặng 01: slide 01 Tổng quan chủ đề; slide 02 Độc lập vừa giành được, đất nước đứng trước nhiều nguy cơ.
   - Chặng 02: slide 03 Chủ trương “Kháng chiến, kiến quốc”; slide 04 Củng cố nền tảng chính trị–pháp lý; slide 05 Khắc phục nạn đói, nạn dốt và khó khăn tài chính.
   - Chặng 03: slide 06 Ứng phó với Pháp và quân Trung Hoa Dân quốc; slide 07 Từ hòa hoãn có nguyên tắc đến toàn quốc kháng chiến; slide 08 Kết quả, kinh nghiệm và ý nghĩa thực tiễn.
3. Dùng trường dữ liệu mà renderer hiện có hỗ trợ (`title`, `intro`, `lead`, `points`, `highlight`, `metrics`, `conclusion`, `source`) nếu chúng phản ánh nội dung nguồn. Chỉ bổ sung nhánh dữ liệu/hiển thị khi cần để trình bày đúng một nội dung trong DOCX; giữ bố cục thẻ hiện tại.
4. Ghi phạm vi thời gian từ sau 2/9/1945 đến 19/12/1946 và nguồn giáo trình Chương 2, mục I.1, ấn bản 2019, tr. 60–70 đúng như file slide. Gắn nguồn phù hợp vào từng slide thay cho trích dẫn Chương 2 mục II, phần 3, tr. 113–114 của dữ liệu cũ.
5. Với slide 08, đưa đúng bốn chỉ số từ file slide: 52,7 triệu người có việc làm; thu nhập bình quân 9,1 triệu đồng/tháng; 32,4 triệu lao động phi chính thức (61,5% số người có việc làm); tỷ lệ thiếu việc làm trong độ tuổi lao động 1,53%. Ghi rõ 9 tháng năm 2026 và liên kết Cục Thống kê trong tài liệu. Không diễn giải thành tác động nhân quả của sự kiện lịch sử.
6. Thẩm định các ảnh ứng viên từ [hochiminh.vn](https://hochiminh.vn/tin-tuc/bac-ho-voi-thang-loi-ve-vang-cua-cach-mang-thang-tam-5245), [media.quochoi.vn](https://media.quochoi.vn/Home/AlbumDetails/7464) và [baotanglichsu.vn](https://baotanglichsu.vn/vi/Articles/4092/anh-tu-lieu): xác minh bối cảnh 1945–1946, mô tả gốc, cơ quan lưu trữ, đường dẫn ảnh, quyền/điều kiện tái sử dụng và kích thước/chất lượng phù hợp hero. Người dùng giao chọn ảnh phù hợp nhất trong nhóm nguồn này nếu quyền sử dụng rõ; không tìm ảnh cho các thẻ slide.
7. Nếu quyền sử dụng được xác minh hoặc có chấp thuận, thêm ảnh đã chọn vào `public/images/` theo cách tối ưu phù hợp dự án; thêm entry mới vào `src/data/historicalPhotos.js` với `src`, `alt`, chú thích, **tên nguồn riêng** và liên kết nguồn. Không ghi đè các entry 1954–1975 để còn khả năng bật lại nội dung cũ. Nếu không đủ căn cứ dùng ảnh, không chép/hotlink ảnh; đánh dấu không có ảnh được duyệt để phase 02 dùng khối typography thay thế.

## Files/modules

- Đọc đối chiếu: hai DOCX trong `C:\Users\khang\Downloads\` đã nêu trong spec.
- Tạo: `src/data/history1945-1946.js`.
- Có điều kiện: `src/data/historicalPhotos.js`, một ảnh mới trong `public/images/`.
- Giữ nguyên: `src/data/history1954-1975.js`, `src/data/historyQuiz.js`, `src/data/aiAppendix.js`.

## Nghiệm thu thủ công

- Mô hình dữ liệu có 3 chặng, 8 thẻ đánh số 01–08, đúng nhóm 2/3/3 và đúng thứ tự file slide.
- Đối chiếu thủ công tiêu đề, ý chính, mốc ngày, con số và nguồn từng thẻ với DOCX; nội dung từ file lời có thể chỉ ra ý trong file slide mà nó giải thích.
- Slide 08 có đủ bốn chỉ số, kỳ tham chiếu, nguồn và câu liên hệ đúng giới hạn; không có sáu câu hỏi 3C.
- Ảnh chỉ được thêm khi có bằng chứng về nguồn, thời kỳ, quyền sử dụng và chất lượng. Nếu thiếu một trong các điều kiện này, mô hình không trỏ đến ảnh chưa xác minh.
- Dữ liệu ảnh lưu đúng tên cơ quan/báo nguồn; không suy ra tên nguồn từ URL và không gắn nhãn “Báo Điện tử Chính phủ” cho ảnh từ đơn vị khác.

## Rủi ro / quyết định

- Đã rà soát ba nguồn ảnh chính thống: trang Hồ Chí Minh ghi cơ quan chủ quản/bản quyền nhưng không nêu quyền tái sử dụng ảnh; thư viện Quốc hội yêu cầu đăng nhập để xem ảnh đầy đủ và không nêu giấy phép tái sử dụng; trang tư liệu của Bảo tàng Lịch sử Quốc gia không nêu điều kiện cấp phép. Chưa có căn cứ xác nhận quyền tái sử dụng, nên không tải, chép hay hotlink ảnh nào. Theo lựa chọn của người dùng, phase 02 dùng khối typography chỉ gồm “1945–1946” và “Kháng chiến, kiến quốc” từ slide 1.
- So sánh thủ công đủ tám slide với DOCX nội dung slide: đúng thứ tự và nhóm 2/3/3; ngày tháng, dữ kiện, số liệu, giới hạn diễn giải và dẫn nguồn được giữ theo tài liệu. File lời thuyết trình chỉ bổ trợ ý tương ứng; sáu câu hỏi 3C được để ngoài mô hình trình chiếu.
- Loại bỏ chữ mang tính ghi chú biên tập “File slide cho phép phân tích” khỏi câu ở slide 04; giữ nguyên nội dung phân tích mà DOCX cho phép trình bày.
- Nếu một đoạn lời thuyết trình không ánh xạ được sang slide, bỏ đoạn đó khỏi dữ liệu web thay vì tự suy diễn.
