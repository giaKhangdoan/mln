# Brainstorm: Trình bày Chương 2 về xây dựng và bảo vệ chính quyền 1945–1946 trên web

**Date:** 2026-10-23

## Ideas Explored

- **Giữ đúng 8 slide và thứ tự nguồn:** chuyển mỗi slide trong file nội dung thành một thẻ riêng; gom các thẻ vào ba chặng điều hướng hiện tại. Đây là hướng được chọn vì bám sát tài liệu trình chiếu mà vẫn giữ nhịp điều hướng quen thuộc.
- **Gộp thành ba khối chủ đề lớn:** giảm số thẻ và biên tập lại thứ tự bên trong. Hướng này không được chọn vì làm mờ ranh giới giữa các slide đã chốt.
- **Đưa toàn bộ lời thuyết trình lên trang:** có thể giúp người trình bày đọc trực tiếp, nhưng làm trang dài và lấn át nội dung slide. Chọn cách dùng file lời thuyết trình để bổ sung giải thích ngắn trong thẻ tương ứng, không tạo một bảng lời thoại riêng.
- **Giữ ảnh 1975 và bản đồ đang có:** giữ nguyên nội dung trực quan cũ sẽ lệch chủ đề 1945–1946. Hướng được chọn là giữ cấu trúc thị giác, thay ảnh bằng tư liệu lưu trữ 1945–1946 có nguồn chính thống và thay bản đồ bằng khối phạm vi/luận điểm lấy từ slide 1.
- **Giữ các mục 04 Trắc nghiệm và 05 Phụ lục AI:** người dùng yêu cầu tạm bỏ. Chúng sẽ không xuất hiện trong điều hướng hoặc trang đang trình bày; dữ liệu và component được giữ lại để có thể bật lại sau.
- **Đưa phụ lục câu hỏi 3C vào ngay lần này:** file 2 có sáu câu hỏi 3C ghi rõ là phần phụ lục, không tính slide. Người dùng chốt ưu tiên tám slide chính trước, nên 3C nằm ngoài lượt trình bày hiện tại.

## User's Direction

- File `Noi_dung_slide_Chuong_2_Xay_dung_bao_ve_chinh_quyen_1945-1946.docx` là nguồn nội dung chính.
- File `Loi_thuyet_trinh_Chuong_2_Xay_dung_bao_ve_chinh_quyen_1945-1946.docx` chỉ bổ trợ giải thích cho nội dung tương ứng; không dùng để thêm dữ kiện ngoài phạm vi hai tài liệu.
- Giữ nguyên UX/UI hiện tại: nhận diện màu, font, thanh điều hướng dính, kiểu thẻ, hiệu ứng xuất hiện, hiệu ứng ngôi sao khi bấm và bố cục đáp ứng.
- Giữ tám thẻ theo đúng thứ tự và nhóm thành ba chặng: slide 1–2, 3–5, 6–8.
- Tạm ẩn mục 04 Trắc nghiệm và mục 05 Phụ lục AI khỏi nội dung hiển thị.
- Thay ảnh chủ đề 1954–1975 bằng ảnh tư liệu 1945–1946 có nguồn chính thống; thay bản đồ cũ bằng thông tin phạm vi và luận điểm dựa trên file 2.
- Chỉ đưa tám slide chính lên web trước; phần hỏi đáp 3C để đợt sau.

## Open Questions

- Không còn câu hỏi cần người dùng chốt. Khi triển khai, cần tra cứu và xác minh ảnh tư liệu chính thống phù hợp với giai đoạn 1945–1946 trước khi đưa ảnh lên trang.

## Risks

- Lời thuyết trình có diễn giải dài và sắc thái phân tích riêng. Mỗi bổ sung phải khớp luận điểm của slide tương ứng và được giữ trong phạm vi hai tài liệu.
- Trang hiện tại còn ảnh, bản đồ và dữ liệu gắn với 1954–1975. Các phần đó cần được thay khỏi trang hiển thị để tránh trộn hai chủ đề.
- Ảnh lịch sử cần đúng thời kỳ, bối cảnh và nguồn; nếu không kiểm tra được nguồn ảnh, không dùng ảnh đó.
