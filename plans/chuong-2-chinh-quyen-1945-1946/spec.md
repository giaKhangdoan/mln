# Spec: Trình bày Chương 2 về xây dựng và bảo vệ chính quyền 1945–1946 trên web

**Date:** 2026-10-23  
**Status:** Ready

---

## Problem Statement

Trang web hiện trình bày chủ đề 1954–1975, trong khi nhóm cần chuyển sang nội dung thuyết trình Chương 2 về xây dựng và bảo vệ chính quyền cách mạng giai đoạn 1945–1946. Cần thay toàn bộ nội dung hiển thị theo tài liệu slide, dùng tài liệu lời thuyết trình làm phần bổ trợ, không thêm dữ kiện ngoài hai file và giữ nguyên UX/UI đang có.

---

## User Stories

- **[P1]** Là người thuyết trình, tôi muốn nội dung web đi đúng tám slide trong file slide để trình bày theo thứ tự đã chuẩn bị.
  Accepted when: có đúng 8 thẻ, đánh số 01–08, giữ nguyên thứ tự slide trong file 2 và được chia thành ba chặng: 1–2, 3–5, 6–8.

- **[P1]** Là người thuyết trình, tôi muốn dùng phần lời thuyết trình để làm rõ các ý trên slide mà không làm sai hoặc mở rộng dữ kiện.
  Accepted when: mọi câu lịch sử, ngày tháng và số liệu trên trang truy được về một đoạn trong file 2 hoặc phần giải thích tương ứng trong file 1; không có thông tin ngoài hai tài liệu.

- **[P1]** Là người thuyết trình, tôi muốn giao diện quen thuộc để tập trung vào nội dung mới.
  Accepted when: giữ nhận diện màu, font, điều hướng dính, kiểu thẻ, hiệu ứng reveal, hiệu ứng ngôi sao khi bấm và hành vi responsive hiện tại.

- **[P1]** Là người thuyết trình, tôi muốn tạm ẩn trắc nghiệm và phụ lục AI khỏi buổi trình bày này.
  Accepted when: nav và DOM hiển thị chỉ có các chặng 01–03; mục quiz và phụ lục AI không được render, còn component/dữ liệu được giữ trong dự án để bật lại sau.

- **[P1]** Là người xem, tôi muốn phần mở đầu và hình minh họa đúng giai đoạn 1945–1946.
  Accepted when: tiêu đề và lời dẫn lấy từ slide 1; hero dùng ảnh nguồn chính thống có điều kiện tái sử dụng được xác minh và có chú thích/liên kết đúng, hoặc dùng khối typography “1945–1946 · Kháng chiến, kiến quốc” nếu chưa xác minh được quyền; bản đồ cũ được thay bằng khối phạm vi và luận điểm từ tài liệu.

- **[P2]** Là người thuyết trình, tôi muốn dùng phần hỏi đáp 3C sau khi tám slide chính đã hoàn tất.
  Accepted when: nội dung 3C được giữ ngoài phạm vi giao diện hiện tại và có thể lên kế hoạch riêng ở lượt sau.

---

## Functional Requirements

1. **FR-01 — Thứ bậc nguồn:** dùng `Noi_dung_slide_Chuong_2_Xay_dung_bao_ve_chinh_quyen_1945-1946.docx` làm chuẩn cho nội dung trình chiếu. Chỉ dùng `Loi_thuyet_trinh_Chuong_2_Xay_dung_bao_ve_chinh_quyen_1945-1946.docx` để giải thích hoặc thêm ngữ cảnh tương ứng; không tự tạo dữ kiện.

2. **FR-02 — Phạm vi lịch sử:** thể hiện phạm vi từ sau ngày 2/9/1945 đến khi kháng chiến toàn quốc bùng nổ ngày 19/12/1946, tập trung mục I.1 của giáo trình; giữ dẫn nguồn giáo trình 2019, trang 60–70 như trong tài liệu.

3. **FR-03 — Tám thẻ theo thứ tự nguồn:**
   - 01 Tổng quan chủ đề.
   - 02 Bối cảnh sau ngày độc lập.
   - 03 Chủ trương “Kháng chiến, kiến quốc”.
   - 04 Nền tảng chính trị–pháp lý.
   - 05 Khắc phục nạn đói, nạn dốt và khó khăn tài chính.
   - 06 Ứng phó với Pháp và quân Trung Hoa Dân quốc.
   - 07 Từ hòa hoãn có nguyên tắc đến toàn quốc kháng chiến.
   - 08 Kết quả, kinh nghiệm và ý nghĩa thực tiễn.

4. **FR-04 — Chia chặng:** giữ ba vị trí điều hướng hiện tại; nhóm slide 01–02 vào chặng 01 “Bối cảnh”, slide 03–05 vào chặng 02 “Kháng chiến, kiến quốc”, slide 06–08 vào chặng 03 “Bảo vệ chính quyền”. Nhãn nav có thể dùng chữ ngắn “Bối cảnh”, “Đường lối”, “Bảo vệ” để đọc rõ trên màn hình nhỏ; tiêu đề đầy đủ vẫn hiện ở đầu từng chặng.

5. **FR-05 — Nhận diện trang:** thay tiêu đề chính bằng “Xây dựng và bảo vệ chính quyền cách mạng (1945–1946)” và lời dẫn “Từ giành chính quyền đến giữ vững nền độc lập non trẻ”, theo file 2. Giữ bố cục hero, CTA và phong cách trình bày hiện tại.

6. **FR-06 — Khối phạm vi:** thay khu vực bản đồ Việt Nam bằng khối nội dung có cùng nhịp thị giác, dùng thông tin trong slide 1 về mốc thời gian, hai nhiệm vụ gắn bó và luận điểm “Kháng chiến, kiến quốc”. Không giữ các nhãn Hoàng Sa, Trường Sa hoặc dữ liệu địa lý của chủ đề cũ trong phần trình bày mới.

7. **FR-07 — Hình ảnh:** bỏ các ảnh và chú thích gắn với giai đoạn 1954–1975. Chỉ dùng một ảnh ở hero khi xác minh được ảnh thuộc bối cảnh 1945–1946, nguồn là cơ quan/báo chí chính thống, điều kiện tái sử dụng cho phép, và chú thích/tên nguồn/liên kết dẫn đúng về nguồn ảnh. Người dùng giao chọn ảnh phù hợp nhất trong các nguồn chính thống đã xác minh; không thêm ảnh vào thẻ slide trong lượt này. Không có ảnh phù hợp hoặc không rõ quyền sử dụng thì không chép/hotlink ảnh lên trang. Khi đó, giữ cột hero cân bằng bằng một khối typography không dùng ảnh, chỉ hiển thị mốc “1945–1946” và cụm “Kháng chiến, kiến quốc” lấy từ slide 1; không thêm dữ kiện mới.

8. **FR-08 — Số liệu hiện nay:** dùng các số liệu đúng như slide 08: 52,7 triệu người có việc làm; thu nhập bình quân 9,1 triệu đồng/tháng; 32,4 triệu lao động phi chính thức (61,5% số người có việc làm); tỷ lệ thiếu việc làm trong độ tuổi lao động 1,53%. Ghi rõ 9 tháng năm 2026 và dùng liên kết Cục Thống kê trong file 2. Giữ giới hạn diễn giải như tài liệu; không gán quan hệ nhân quả với bài học lịch sử.

9. **FR-09 — Loại bỏ nội dung chủ đề cũ khỏi trang:** thay dữ liệu slide, mở đầu và nội dung 1954–1975 trên giao diện hiển thị. Không để lẫn số liệu GDP, kinh tế số, chuỗi chiến dịch 1975 hoặc kết luận cũ.

10. **FR-10 — Tạm ẩn hai mục cuối:** gỡ mục 04 Trắc nghiệm và 05 Phụ lục AI khỏi thanh điều hướng, phần nội dung được render và theo dõi active section. Giữ lại component/dữ liệu hiện có để có thể khôi phục sau.

11. **FR-11 — Hỏi đáp 3C:** không đưa sáu câu hỏi 3C vào lượt trình bày này. Phần đó được xem xét riêng sau khi tám slide chính hoàn tất.

12. **FR-12 — Nguồn theo thẻ:** giữ nguồn giáo trình 2019, trang 60–70 cho nội dung lịch sử và nguồn Cục Thống kê cho số liệu lao động. Liên kết nguồn nằm đúng nơi số liệu/ảnh được trình bày.

---

## Non-Functional Requirements

- **Responsive:** tiếp tục dùng các breakpoint hiện có; nội dung phải đọc được ở chiều rộng 360 px trở lên và không gây tràn ngang.
- **Performance:** không thêm dependency runtime; ảnh hero tải ưu tiên, ảnh thẻ tải lazy như hành vi hiện tại.
- **Accessibility:** giữ tiêu đề phân cấp, văn bản thay thế ảnh, focus-visible, liên kết nguồn mở an toàn và hỗ trợ `prefers-reduced-motion`.
- **Content integrity:** 100% số liệu, ngày tháng và phát biểu lịch sử có thể đối chiếu về hai tài liệu hoặc nguồn đã nêu trong chúng.
- **Availability:** trang vẫn là website tĩnh hiện tại; không thêm dịch vụ, API hoặc trạng thái đăng nhập.

---

## Success Criteria

- [x] Có đúng 8 thẻ được hiển thị, đánh số và sắp xếp như file 2.
- [x] Thanh nav có đúng 3 chặng và nhóm slide tương ứng 2 / 3 / 3 thẻ.
- [x] Mục Trắc nghiệm và Phụ lục AI không xuất hiện trong nav hoặc DOM hiển thị; các module gốc vẫn được giữ trong codebase.
- [x] Không còn tiêu đề, ảnh, nhãn bản đồ hoặc số liệu riêng của chủ đề 1954–1975 trong trang hiển thị mới.
- [x] Mỗi số liệu hiện nay hiển thị kỳ tham chiếu và nguồn; đủ bốn chỉ số trong slide 08.
- [x] Hero chỉ dùng ảnh khi nguồn, bối cảnh và quyền tái sử dụng đã xác minh; nếu chưa, dùng khối typography đã chốt và không nhúng ảnh chưa kiểm chứng.
- [x] Các yếu tố UX/UI đã nêu trong FR-05 vẫn hoạt động và giữ nhận diện hiện tại.
- [ ] Bản dựng production thành công sau khi triển khai. *(Chưa triển khai trong lượt này; sẽ kiểm tra tại cổng phát hành.)*

---

## Out of Scope

- Thay đổi bảng màu, font, hệ thống thẻ, hiệu ứng, thanh nav hoặc hành vi responsive.
- Hiển thị sáu câu hỏi phản biện 3C trong lượt này.
- Xóa vĩnh viễn code/dữ liệu của quiz và Phụ lục AI.
- Bổ sung sự kiện, số liệu hoặc hình ảnh không thể xác minh từ tài liệu hay nguồn chính thống.

---

## Assumptions

- File 2 là nguồn duy nhất quyết định thứ tự và nội dung chính của tám slide.
- File 1 chỉ được dùng để làm sáng rõ các ý tương ứng, không để thêm chủ đề hoặc dữ kiện.
- Người dùng đã chốt cách nhóm slide: 01–02 / 03–05 / 06–08.
- Phần 3C được để sang lượt sau; “8 slide trước” không đồng nghĩa xóa nội dung câu hỏi khỏi tài liệu nguồn.
- Chỉ dùng ảnh ở hero, không thêm ảnh vào các thẻ slide. Người dùng giao chọn ảnh phù hợp nhất trong nguồn chính thống nếu xác minh được quyền sử dụng; nếu không, dùng khối typography “1945–1946 · Kháng chiến, kiến quốc”.

