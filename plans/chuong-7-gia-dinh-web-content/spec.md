# Spec: Thay nội dung web bằng Chương 7 về gia đình

**Date:** 2026-11-04
**Status:** Ready

---

## Problem Statement

Website hiện đang trình bày nội dung Chương 2 về xây dựng và bảo vệ chính quyền 1945–1946, trong khi nhóm chuẩn bị thuyết trình Chương 7 về vấn đề gia đình trong thời kỳ quá độ lên chủ nghĩa xã hội. Cần thay nội dung hiển thị theo file slide, dùng file lời thuyết trình để làm rõ các ý tương ứng, đồng thời giữ nguyên UX/UI hiện tại.

---

## User Stories

- **[P1 · US-01]** Là người thuyết trình, tôi muốn nội dung website đi theo đủ 11 trang chiếu trong file slide để trình bày đúng thứ tự.
  Accepted when: 10 trang nội dung và trang nguồn cuối được thể hiện theo thứ tự 01–11; nội dung chính không bị gộp làm mất ranh giới slide.

- **[P1 · US-02]** Là người thuyết trình, tôi muốn lời thuyết trình chỉ bổ sung phần giải thích cần thiết cho các ý trên slide.
  Accepted when: mọi bổ sung từ lời thuyết trình gắn với một ý trên slide; không có ngày tháng, số liệu, luật hoặc kết luận thực tế mới ngoài hai tài liệu.

- **[P1 · US-03]** Là người xem, tôi muốn giao diện quen thuộc trong khi nội dung chuyển sang chủ đề gia đình.
  Accepted when: giữ nguyên cấu trúc giao diện, kiểu chữ, bảng màu, kích thước và kiểu điều hướng, kiểu thẻ, khoảng cách, hiệu ứng, responsive và cách vận hành chế độ trình chiếu.

- **[P1 · US-04]** Là người xem, tôi muốn kiểm tra nguồn và cách dùng dẫn chứng.
  Accepted when: trang 11, gồm tài liệu tham khảo, trang in/PDF và quy ước trích dẫn, có thể xem ở cuối nội dung; chỉ cụm “gia đình hạt nhân quy mô nhỏ” được đánh dấu trích nguyên văn như file quy định.

- **[P1 · US-05]** Là người thuyết trình, tôi muốn tạm để trống nội dung quiz và phụ lục AI của Chương 2 để bổ sung sau.
  Accepted when: nội dung cũ không còn được render; mục 04 và 05 vẫn có trong điều hướng và hiển thị thông báo “Nội dung sẽ được bổ sung sau”.

- **[P1 · US-06]** Là người xem, tôi muốn phần mở đầu có hình ảnh liên quan đến chủ đề gia đình từ nguồn chính thống.
  Accepted when: hero dùng ảnh có nguồn là cơ quan nhà nước hoặc báo chí chính thống, có chú thích/credit và liên kết nguồn; chỉ đưa ảnh vào trang khi điều kiện sử dụng ảnh đó được xác nhận, nếu không thì dùng typography từ slide 01 trong cùng vùng.

---

## Functional Requirements

1. **FR-01 — Thứ bậc tài liệu:** dùng `Chuong_7_Gia_dinh_noi_dung_slide.docx` làm nguồn chính cho nội dung web. Chỉ dùng `Chuong_7_Gia_dinh_loi_thuyet_trinh.docx` để giải thích rõ hơn nội dung tương ứng; không dùng lời thuyết trình để thêm chủ đề hoặc dữ kiện.

2. **FR-02 — Nội dung theo thứ tự:** trình bày đủ 11 trang của file slide:
   - 01. Xây dựng gia đình Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội.
   - 02. Mạch trình bày và mục tiêu.
   - 03. Cơ sở lý luận: gia đình gắn với điều kiện xã hội.
   - 04. Cơ cấu gia đình: quy mô và liên kết đa thế hệ.
   - 05. Chức năng gia đình: cách thực hiện thay đổi.
   - 06. Quan hệ gia đình: bình đẳng, chăm sóc và an toàn.
   - 07. Bối cảnh dân số và việc làm: dữ liệu để đặt câu hỏi.
   - 08. Bốn phương hướng xây dựng gia đình Việt Nam.
   - 09. Kinh nghiệm vận dụng vào thực tiễn hiện nay.
   - 10. Kết luận: thích ứng để duy trì các giá trị cốt lõi.
   - 11. Nguồn, trang trích và quy ước dẫn chứng.

3. **FR-03 — Ba chặng điều hướng:** giữ ba vùng điều hướng nội dung hiện tại và đặt nhãn phù hợp với nội dung mới. Nhóm slide 01–03 vào chặng 01 “Cơ sở”; slide 04–06 vào chặng 02 “Biến đổi”; slide 07–10 vào chặng 03 “Phương hướng và vận dụng”. Slide 11 nằm ở phần nguồn cuối trang.

4. **FR-04 — Nội dung mở đầu:** đổi tiêu đề và lời dẫn theo slide 01, gồm tên chủ đề “Xây dựng gia đình Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội”, câu hỏi trung tâm và mạch “Cơ sở lý luận → Biến đổi → Phương hướng xây dựng”. Dùng lại vùng mở đầu hiện có, không thiết kế lại bố cục.

5. **FR-05 — Vùng nội dung dẫn nhập:** thay nội dung Chương 2/1945–1946 tại vùng dẫn nhập bằng nội dung lấy từ câu hỏi trung tâm hoặc cơ sở lý luận trong slide 01 và 03. Giữ vị trí, kích thước, cấu trúc và phong cách của vùng hiện tại; không để lại ảnh/chữ mang thông tin riêng của Chương 2.

6. **FR-06 — Chú giải học thuật:** giữ đúng các phân biệt trong tài liệu:
   - Ba LO là mục tiêu đề xuất cho bài trình bày, không phải mã chuẩn đầu ra chính thức.
   - Cụm “gia đình hạt nhân quy mô nhỏ” là phần trích nguyên văn; các ý khác được diễn giải hoặc nêu như phân tích.
   - Nhận định phân tích không được trình bày thành số liệu điều tra hay dữ kiện áp dụng cho mọi gia đình.
   - Số liệu lao động không đo trực tiếp việc chăm sóc không lương; số liệu bối cảnh không tự chứng minh nguyên nhân của biến đổi gia đình.
   - Chú thích Marx/Engels/Lenin là tài liệu được giáo trình dẫn, không ghi như thể nhóm đã trực tiếp đối chiếu bản gốc.

7. **FR-07 — Dữ liệu, luật và trích dẫn:** giữ nguyên số, đơn vị, kỳ tham chiếu, ngày tháng, điều luật, trang in/PDF và URL theo file slide. Không tự cập nhật, bổ sung số liệu, hoặc diễn giải nhân quả. Dẫn nguồn ngay tại nội dung liên quan và giữ danh mục nguồn đầy đủ ở trang 11.

8. **FR-08 — Chế độ trình chiếu:** tiếp tục dùng giao diện và thao tác trình chiếu hiện tại; cập nhật dữ liệu và số lượng trang để phản ánh 11 trang nguồn, gồm trang tham khảo.

9. **FR-09 — Quiz và phụ lục AI:** bỏ toàn bộ câu hỏi, đáp án, mật khẩu, prompt và nội dung AI gắn với Chương 2. Giữ mục điều hướng 04 Trắc nghiệm và 05 Phụ lục AI cùng vị trí neo; nội dung của mỗi mục chỉ là “Nội dung sẽ được bổ sung sau”. Không tự tạo quiz hoặc nhật ký AI cho Chương 7 trong đợt này.

10. **FR-10 — Loại bỏ chủ đề cũ:** nội dung hiển thị không còn dữ kiện, hình ảnh, chú thích hoặc kết luận riêng về 1945–1946; không còn số liệu lao động 2026 thuộc Chương 2 hay prompt AI của Chương 2. Header/footer dùng tên chủ đề mới ở những vị trí đang nêu chủ đề.

11. **FR-11 — Ảnh mở đầu:** tìm ảnh liên quan gia đình từ cổng cơ quan nhà nước hoặc báo chí chính thống. Ghi đúng chú thích, credit và liên kết bài gốc; xác minh điều kiện sử dụng của ảnh trước khi đưa vào. Nếu không có ảnh đủ điều kiện, dùng khối typography/đồ họa lấy từ câu hỏi trung tâm và mạch slide 01 trong cùng vùng hero.

---

## Non-Functional Requirements

- **UX/UI:** giữ nguyên nhận diện, component shapes, typography, màu sắc, điều hướng dính, card density, animation và hiệu ứng tương tác hiện tại.
- **Responsive:** giữ các breakpoint đang dùng; nội dung đọc được từ chiều rộng 360 px và không tràn ngang.
- **Accessibility:** giữ heading semantics, focus-visible, accessible labels, điều khiển bàn phím trong chế độ trình chiếu và hỗ trợ `prefers-reduced-motion`.
- **Content integrity:** mọi ngày tháng, số liệu, điều luật và trích dẫn trên trang phải đối chiếu được tới một trong hai DOCX hoặc URL nguồn được ghi trong file slide.
- **Image sourcing:** ảnh phải truy nguyên được đến trang chính thống, có credit, alt text và điều kiện sử dụng rõ ràng; ảnh không được dùng làm căn cứ cho nội dung học thuật ngoài hai DOCX.
- **Performance:** không thêm thư viện hoặc dịch vụ runtime cho việc thay nội dung.

---

## Success Criteria

- [ ] Trang nội dung có đủ 11 trang, đánh số và sắp theo đúng thứ tự trong file slide.
- [ ] Mười trang nội dung được nhóm thành ba chặng 3 / 3 / 4; trang 11 được trình bày như phần nguồn ở cuối.
- [ ] Chế độ trình chiếu phản ánh đủ 11 trang và giữ nguyên các thao tác hiện tại.
- [ ] 04 và 05 còn trong điều hướng, mỗi mục chỉ hiển thị “Nội dung sẽ được bổ sung sau”; không còn quiz hoặc phụ lục AI cũ.
- [ ] Nội dung dẫn nhập, thẻ nội dung, nguồn và footer không còn dữ kiện riêng của Chương 2.
- [ ] Hero dùng một ảnh liên quan từ nguồn chính thống có credit/link và quyền sử dụng được xác nhận; nếu không, dùng khối chữ/đồ họa từ slide 01 mà không đổi bố cục.
- [ ] Các nguồn, số liệu, mốc thời gian, điều luật và quy ước trích dẫn trùng với tài liệu; không có dữ kiện mới được thêm.
- [ ] UX/UI hiện tại được giữ nguyên; không có thanh điều hướng, bảng màu, font, hình dạng thẻ, chuyển động hoặc responsive mới.

---

## Out of Scope

- Thay đổi bố cục, phong cách, hệ thống màu/font, cấu trúc điều hướng hoặc hiệu ứng UI.
- Tạo bộ câu hỏi trắc nghiệm, mật khẩu, prompt AI hoặc nhật ký sử dụng AI mới.
- Viết lại toàn bộ lời thuyết trình thành nội dung web dài.
- Tìm ảnh từ nguồn không chính thống hoặc dùng ảnh chưa rõ điều kiện sử dụng.
- Thêm luận điểm, dữ kiện, luật, số liệu, nguồn hoặc thông tin lịch sử/gia đình không có căn cứ trong hai tài liệu.

---

## Assumptions

- Git repository root là `E:\mln\mln`; không có `.skills.json` gần hơn.
- Giữ ba vùng điều hướng hiện có và dùng nhóm 01–03 / 04–06 / 07–10 theo mạch nội dung của file slide.
- Trang 11 được giữ ở phần nguồn cuối và được tính trong chế độ trình chiếu 11 trang.
- Vùng hero giữ nguyên vị trí và phong cách; ưu tiên tìm ảnh gia đình liên quan từ nguồn chính thống. Candidate cần rà soát gồm cổng Báo Điện tử Chính phủ và Bộ Văn hóa, Thể thao và Du lịch; credit và điều kiện tái sử dụng phải được xác nhận trước khi nhúng ảnh.
- Các mục quiz và phụ lục AI được giữ chỗ bằng đúng thông báo người dùng đã duyệt.

## [NEEDS CLARIFICATION]

- Không còn mục nào.
