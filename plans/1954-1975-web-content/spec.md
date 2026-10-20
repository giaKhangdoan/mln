# Spec: Thay nội dung website bằng bộ thuyết trình 1954–1975

**Date:** 2026-10-20
**Status:** Draft

---

## Problem Statement

Website hiện tại trình bày chủ đề tư tưởng Hồ Chí Minh về độc lập, tự do và hạnh phúc, trong khi bộ thuyết trình mới nói về ý nghĩa lịch sử và kinh nghiệm lãnh đạo của Đảng thời kỳ 1954–1975. Cần thay toàn bộ nội dung chuyên đề cũ bằng nội dung đủ chín slide, gọn và dễ đọc, có thể dùng lời thuyết trình để giải thích nhưng không thêm thông tin ngoài hai tài liệu.

---

## User Stories

- **[US-01][P1]** Là người thuyết trình, tôi muốn nội dung web bám đủ chín slide để người xem có thể theo dõi và đối chiếu với phần trình bày.
  Accepted when: Có đủ chín mục được đánh số và có tiêu đề tương ứng; tất cả ý và số liệu chính trong file `Noi_dung_tren_9_slide.docx` được giữ lại.

- **[US-02][P1]** Là người đọc, tôi muốn nội dung chia nhóm và trình bày ngắn gọn để nắm được mạch lịch sử, bài học và liên hệ hiện nay.
  Accepted when: Chín slide nằm trong ba chặng có tiêu đề; mỗi slide dùng tối đa năm gạch đầu dòng hoặc bố cục ngắn tương đương, không xóa mất ý để đạt độ gọn.

- **[US-03][P1]** Là người thuyết trình, tôi muốn số liệu và nguồn được trình bày chính xác để tránh gây hiểu sai.
  Accepted when: Tất cả số liệu slides 7–9 khớp tài liệu; từng slide có dòng nguồn tương ứng; phần liên hệ giữ lại các caveat của file lời thuyết trình.

- **[US-04][P2]** Là người xem trên điện thoại, tôi muốn đọc và điều hướng giữa các slide dễ dàng.
  Accepted when: Nội dung xếp thành một cột ở màn hình hẹp, không có tràn ngang ở chiều rộng 360 px; điều hướng tới đủ chín slide.

---

## Functional Requirements

1. **FR-01 — Thay toàn bộ chuyên đề cũ:** Không còn nội dung hiển thị về chủ đề “Độc lập – Tự do – Hạnh phúc”, câu trích Hồ Chí Minh, bản đồ ý nghĩa, khung lý luận, thẻ khái niệm, câu hỏi cũ hoặc câu trả lời cũ của trợ lý AI. Giữ lại hoặc sửa phần khung giao diện chung chỉ khi không để lại nội dung cũ.
2. **FR-02 — Ba chặng, chín đơn vị:** Chặng 1 gồm slides 1–3 (tổng quan, ý nghĩa, nhân tố); chặng 2 gồm slides 4–6 (bốn bài học, hạn chế và rút kinh nghiệm); chặng 3 gồm slides 7–9 (liên hệ kinh tế, khoa học công nghệ/chuyển đổi số, đời sống và kết luận). Mỗi đơn vị vẫn hiển thị số slide và tiêu đề để đối chiếu trực tiếp; điều hướng chính chỉ cần ba chặng để không quá dày trên màn hình nhỏ.
3. **FR-03 — Slide 1–3:** Slide 1 giữ hai nhiệm vụ chiến lược, bối cảnh hai miền, mạch trình bày và luận điểm trung tâm; Slide 2 giữ ý nghĩa trong nước (giải phóng miền Nam, thống nhất, hoàn thành cách mạng dân tộc dân chủ nhân dân, mở thời kỳ hòa bình và đi lên chủ nghĩa xã hội) cùng ý nghĩa quốc tế; Slide 3 giữ các nhân tố thắng lợi gồm lãnh đạo của Đảng, vai trò nhân dân, hậu phương miền Bắc và chi viện, đoàn kết Việt Nam–Lào–Campuchia, giúp đỡ của các nước xã hội chủ nghĩa và ủng hộ quốc tế, gắn kết dưới sự lãnh đạo thống nhất.
4. **FR-04 — Slide 4–6:** Slide 4 giữ bài học kiên định mục tiêu độc lập dân tộc gắn với chủ nghĩa xã hội và lựa chọn phương pháp linh hoạt, kết hợp đấu tranh quân sự, chính trị, ngoại giao, phát huy chiến tranh nhân dân; Slide 5 giữ bài học tổ chức lực lượng, xây dựng thế trận, nắm thời cơ, chuỗi Tây Nguyên → Huế–Đà Nẵng → Hồ Chí Minh dẫn tới thắng lợi ngày 30/4/1975, cùng bài học xây dựng Đảng, củng cố lực lượng, mở rộng đoàn kết quốc tế và vai trò quyết định của nội lực; Slide 6 giữ các hạn chế và yêu cầu rút kinh nghiệm, điều chỉnh theo thực tiễn, không sao chép máy móc phương thức thời chiến.
5. **FR-05 — Slide 7:** Hiển thị GDP 9 tháng đầu năm 2026 tăng 9,01%; xuất khẩu 434,30 tỷ USD; nhập khẩu 453,72 tỷ USD; nhập siêu 19,42 tỷ USD; 94,1% giá trị nhập khẩu là tư liệu sản xuất. Giữ liên hệ về năng lực cung ứng trong nước và giá trị nội địa; đặt caveat đọc nhập siêu cùng cơ cấu hàng hóa ngay cạnh nhóm số liệu.
6. **FR-06 — Slide 8:** Giữ nội dung Nghị quyết 57-NQ/TW; kinh tế số năm 2025 ước chiếm 14,02% GDP; đến cuối tháng 5/2026 có 963 doanh nghiệp khoa học và công nghệ, 37 trung tâm đổi mới sáng tạo tại 26/34 tỉnh, thành phố. Giữ caveat rằng số lượng tổ chức phản ánh một phần đầu vào; hiệu quả cần nhìn qua năng suất, mức độ ứng dụng và khả năng thương mại hóa. Không để nhóm số liệu đứng riêng khỏi caveat.
7. **FR-07 — Slide 9:** Hiển thị khoảng 52,7 triệu người có việc làm và thu nhập bình quân 9,1 triệu đồng/tháng trong 9 tháng đầu năm 2026. Đặt caveat về khác biệt ngành nghề, vùng miền và chất lượng việc làm cùng khu vực số liệu; kết luận gắn tăng trưởng với việc làm, kỹ năng, thu nhập thực tế và lợi ích của nhân dân.
8. **FR-08 — Nguồn:** Đặt nguồn ngay trong từng đơn vị slide. Slides 1–6 dùng trích dẫn Giáo trình Lịch sử Đảng Cộng sản Việt Nam, Chương 2, mục II, phần 3, tr. 113–114; slides 7 và 9 dùng Báo cáo tình hình kinh tế – xã hội quý III và 9 tháng năm 2026 của Cục Thống kê, 03/10/2026; slide 8 dùng nguồn Báo Điện tử Chính phủ về triển khai Nghị quyết 57-NQ/TW, 02/01/2026 và 09/06/2026, ghi chú nguồn bổ sung như trong tài liệu.
9. **FR-09 — Giới hạn nội dung và chỉ dẫn trong tài liệu:** Yêu cầu của người dùng quyết định vai trò hai file: file nội dung 9 slide là căn cứ cho nội dung web; file lời thuyết trình là tài liệu đọc/học để bổ sung giải thích và caveat. Các ghi chú hướng dẫn người thuyết trình nằm trong DOCX, như “nguồn ... không đọc thành lời”, không phải lệnh yêu cầu ẩn nguồn khỏi web. Không thêm dữ kiện, nguồn, ví dụ hoặc nhận định ngoài hai file. Nếu hai file diễn đạt khác mức độ chi tiết, giữ đủ nội dung file 2 và chỉ dùng file 1 để bổ sung, không thay thế hoặc phủ nhận ý file 2.
10. **FR-10 — Dễ đọc:** Dùng phân cấp tiêu đề, đoạn ngắn, gạch đầu dòng và nhấn số liệu; không gộp nhiều ý thành một đoạn dài. Mỗi slide có tiêu đề, nội dung và nguồn rõ ràng.

---

## Bản đồ thay nội dung

| Khu vực hiện tại | Thay đổi đề xuất |
|---|---|
| `index.html`: tiêu đề/mô tả Meaning Map, HCM202, `lang="en"` | Đổi tiêu đề và mô tả trang theo chủ đề 1954–1975; đặt ngôn ngữ tiếng Việt; dùng nhãn học phần VNR202. |
| Hero: câu “Độc lập · Tự do · Hạnh phúc”, mô tả cũ, trích dẫn Hồ Chí Minh, chân dung Hồ Chí Minh | Dùng tiêu đề “Ý nghĩa lịch sử và kinh nghiệm lãnh đạo của Đảng thời kỳ 1954–1975” và mạch nội dung từ Slide 1; bỏ câu trích/ảnh chân dung không thuộc tài liệu mới. Có thể giữ nền đỏ-vàng và cờ như trang trí. |
| Thông tin trường, học phần, nhóm và chân trang HCM202/C3-02 | Giữ Trường Đại học FPT, hiển thị học phần VNR202, bỏ mã HCM202 và tên nhóm HCM/SPST/C3-02. Không tự tạo tên nhóm mới. |
| Thanh điều hướng tám phần cũ và mảng theo dõi mục đang xem | Chuyển sang ba chặng; mỗi slide vẫn là một đơn vị riêng có số/tiêu đề. Đồng bộ các mã mục cuộn trang; tránh thanh điều hướng chín nút dày trên điện thoại. |
| Lộ trình 4 mốc, khung lý luận 3 giá trị, Meaning Map | Thay bằng nội dung slides 1–6: tổng quan/ý nghĩa/nhân tố, bốn bài học, hạn chế và kinh nghiệm. |
| Ba thẻ dẫn chứng A80, “Tổ quốc trong tim”, thu nhập 2025 (8,4 triệu; +8,9%) | Bỏ hoàn toàn; thay bằng số liệu và caveat trong slides 7–9. |
| Flashcard, quiz khóa bằng mật khẩu, poll có số bình chọn mặc định, chatbot HCM202 | Bỏ nội dung và phản hồi cũ; không tạo trợ lý AI mở. Quiz cố định chỉ là phần ngoài phạm vi hiện tại. |
| Danh mục tài liệu tham khảo và luận điểm ở footer | Gắn nguồn đúng theo từng slide; bỏ tài liệu HCM cũ và luận điểm cũ; nếu giữ câu kết trang, lấy đúng luận điểm trung tâm trong Slide 1. Không tự tạo URL hoặc thông tin nhóm. |

**Điểm kỹ thuật cần biết khi lập kế hoạch:** `src/main.jsx` hiện render `App.jsx`. `DocxPresentation.jsx` và `QuizSection.jsx` không được import từ entry point hiện tại; dọn chúng là việc vệ sinh mã nguồn riêng, không phải điều kiện để trang đang chạy hiển thị đúng nội dung mới.

---

## Non-Functional Requirements

- **Readability:** Chín mục phải nhận ra riêng biệt; người đọc có thể lần theo thứ tự 1–9 và quét từng mục qua tối đa năm gạch đầu dòng hoặc cách trình bày tương đương.
- **Responsive layout:** Ở chiều rộng viewport 360 px trở lên, không có tràn ngang; điều hướng có thể chạm và nội dung xếp theo một cột khi cần.
- **Content provenance:** 100% dữ kiện và số liệu hiển thị phải truy được về một trong hai tài liệu được cung cấp; dòng nguồn phải hiện ở từng mục slide.

---

## Success Criteria

- [ ] **Độ phủ slide:** 9/9 slide có mặt theo đúng thứ tự và tiêu đề nội dung.
- [ ] **Độ phủ ý:** Mọi ý chính trên file nội dung 9 slide đều xuất hiện trên web; đối chiếu theo từng slide đạt 100%.
- [ ] **Độ chính xác số liệu và mốc:** Các số 9,01%; 434,30 tỷ USD; 453,72 tỷ USD; 19,42 tỷ USD; 94,1%; 14,02%; 963; 37; 26/34; 52,7 triệu; 9,1 triệu đồng/tháng, và mốc 30/4/1975 được chép đúng.
- [ ] **Nguồn:** 9/9 slide có nguồn đúng theo tài liệu tương ứng.
- [ ] **Không bịa:** Không có dữ kiện, số liệu hoặc nhận định thực tế nào trên web nằm ngoài hai tài liệu.
- [ ] **Không sót nội dung cũ:** Không còn nội dung chủ đề HCM202 cũ hoặc phản hồi chatbot cũ trên trang.
- [ ] **Metadata đúng chủ đề:** Tiêu đề/mô tả tab trình duyệt phản ánh chủ đề mới; khai báo ngôn ngữ tiếng Việt; hiển thị Trường Đại học FPT và học phần VNR202; không còn nhãn HCM202 hoặc HCM/SPST/C3-02.
- [ ] **Đọc trên điện thoại:** Ở viewport 360 px, trang không tràn ngang và cả chín slide vẫn đọc được theo thứ tự.

---

## Out of Scope

- Xác minh độc lập các số liệu 2026 bằng nguồn ngoài hai file.
- Bổ sung ví dụ, số liệu, trích dẫn hoặc sự kiện lịch sử mới.
- Tạo trợ lý AI mở hoặc chức năng hỏi đáp có thể đưa thông tin ngoài tài liệu.
- Sửa nội dung hai file DOCX nguồn.

---

## Assumptions

- Người dùng muốn thay toàn bộ nội dung website hiện tại, không duy trì chuyên đề cũ song song.
- Giữ tên Trường Đại học FPT, dùng mã học phần VNR202 theo xác nhận của người dùng; bỏ nhãn HCM202 và tên nhóm cũ.
- `Noi_dung_tren_9_slide.docx` là nguồn chính để xác định phạm vi và các ý bắt buộc; `Loi_thuyet_trinh_9_slide.docx` là tài liệu bổ sung cho giải thích và caveat.
- Ghi chú như “nguồn đặt sau lời trình bày, không đọc thành lời” hướng dẫn cách thuyết trình; trên web, nguồn vẫn hiển thị để người đọc đối chiếu.
- Có thể giữ màu sắc hoặc bố cục chung của website nếu chúng không để lại dấu vết sai chủ đề và không cản trở khả năng đọc.
- Các nguồn sẽ được ghi theo thông tin có trong hai file; không tự tạo URL hoặc chi tiết thư mục còn thiếu.

---

## [NEEDS CLARIFICATION]

Không còn mục cần làm rõ trong giai đoạn brainstorm.
