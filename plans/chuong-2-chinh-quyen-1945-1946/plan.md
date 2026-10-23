# Kế hoạch: Chuyển nội dung web sang Chương 2 (1945–1946)

Mode: --hard
Risk: normal — thay đổi nhiều mô-đun giao diện và dữ liệu tĩnh; không thay đổi xác thực, dữ liệu người dùng, hạ tầng hay dịch vụ ngoài.

Spec: [spec.md](./spec.md) — trạng thái Ready.

## Thử thách phạm vi

- **Đã có gì:** website hiện có bố cục trình bày, ba chặng điều hướng, renderer thẻ nội dung, ảnh có nguồn, reveal khi cuộn và hiệu ứng ngôi sao khi bấm. Nội dung hiện tại là chủ đề 1954–1975; bản đồ, Trắc nghiệm và Phụ lục AI đang được render.
- **Phần tối thiểu cần làm:** thay dữ liệu bằng đúng tám slide 1945–1946; thay phần mở đầu và khu vực bản đồ bằng khối phạm vi; chỉ render ba chặng; tạm ẩn Trắc nghiệm và Phụ lục AI; giữ nguyên nhận diện và hành vi tương tác.
- **Độ phức tạp:** Hard, vì nội dung nhiều nguồn, nhiều slide, ảnh cần thẩm định và thay đổi chéo dữ liệu–trang–metadata. Không cần tách thành dự án con.

## Kiểm tra chất lượng spec

- Câu hỏi cần làm rõ: **không còn**. Người dùng đã chốt 8 slide trước, thứ tự nguyên gốc, nhóm 2/3/3, file nội dung slide là nguồn chính, file lời thuyết trình chỉ bổ trợ, tạm ẩn mục 4–5, giữ bố cục và thay ảnh/bản đồ cũ.
- Câu chuyện P1/P2: **đã có** trong spec.
- Tiêu chí chấp nhận đo được: **đạt** — có số lượng/thứ tự slide, nhóm điều hướng, trạng thái render, kiểm chứng nguồn, kích thước responsive và nội dung cần loại khỏi trang.
- Kết luận: **PASS**.

## Kết quả nghiên cứu và quyết định kỹ thuật

- **Hướng chính:** tạo `src/data/history1945-1946.js` làm nguồn dữ liệu riêng cho ba chặng và tám thẻ. Giữ `SlideCard` và cấu trúc trang hiện tại để thay nội dung mà không thiết kế lại UX/UI.
- **Hướng thay thế đã cân nhắc:** viết lại thẻ từng slide trực tiếp trong JSX. Không chọn vì làm nội dung khó đối chiếu, dễ trộn dữ liệu 1954–1975 và tăng rủi ro sửa giao diện ngoài phạm vi.
- `App.jsx` hiện sở hữu hero, nav, theo dõi chặng đang hoạt động, renderer thẻ, vùng bản đồ và việc render quiz/AI. `index.html` chứa title/description cũ. Các mô-đun quiz, phụ lục AI, bản đồ và dữ liệu Chương 1954–1975 có thể giữ trong repo để bật lại; chỉ bỏ import/render liên quan trên trang mới.
- **Ảnh ứng viên để thẩm định, chưa được xác nhận quyền sử dụng:** [Hồ Chí Minh](https://hochiminh.vn/tin-tuc/bac-ho-voi-thang-loi-ve-vang-cua-cach-mang-thang-tam-5245), [Truyền thông Quốc hội](https://media.quochoi.vn/Home/AlbumDetails/7464), [Bảo tàng Lịch sử Quốc gia](https://baotanglichsu.vn/vi/Articles/4092/anh-tu-lieu). Trước khi dùng phải kiểm tra đúng bối cảnh 1945–1946, ảnh gốc/đường dẫn truy cập, điều kiện tái sử dụng, chú thích được nguồn xác nhận và kích thước hiển thị. Ghi tên nguồn riêng trong dữ liệu ảnh và hiển thị đúng tên nguồn bên cạnh liên kết; không dùng nhãn báo cũ cho một nguồn khác. Chỉ chép ảnh vào `public/images/` nếu quyền sử dụng cho phép hoặc đã có chấp thuận. Không hotlink hay dùng ảnh khi chưa rõ quyền; nếu không xác minh được, hero dùng khối typography cùng cột chỉ có “1945–1946” và “Kháng chiến, kiến quốc”, lấy từ slide 1.
- **Quyết định sau bước xác thực kế hoạch:** người dùng chọn phương án tìm ảnh phù hợp nhất trong các nguồn chính thống nếu quyền tái sử dụng được xác minh; chỉ dùng ảnh tại hero, không thêm ảnh vào các thẻ slide. Nếu không xác minh được quyền, dùng khối typography “1945–1946 · Kháng chiến, kiến quốc” trong cột hero.
- Dữ liệu slide 08 phải giữ nguyên kỳ tham chiếu 9 tháng năm 2026, bốn chỉ số và nguồn Cục Thống kê đã ghi trong file slide. Không nối số liệu hiện nay thành quan hệ nhân quả với bài học lịch sử.
- Không thêm dependency runtime, API, dịch vụ hoặc cơ chế lưu trạng thái mới.

## Phạm vi và nguyên tắc

1. File `Noi_dung_slide_Chuong_2_Xay_dung_bao_ve_chinh_quyen_1945-1946.docx` quyết định nội dung và thứ tự. File `Loi_thuyet_trinh_Chuong_2_Xay_dung_bao_ve_chinh_quyen_1945-1946.docx` chỉ bổ sung lời giải thích đúng ý tương ứng.
2. Có đúng tám thẻ theo thứ tự: Tổng quan chủ đề; Bối cảnh sau ngày độc lập; Chủ trương “Kháng chiến, kiến quốc”; Nền tảng chính trị–pháp lý; Khắc phục nạn đói, nạn dốt và khó khăn tài chính; Ứng phó với Pháp và quân Trung Hoa Dân quốc; Từ hòa hoãn có nguyên tắc đến toàn quốc kháng chiến; Kết quả, kinh nghiệm và ý nghĩa thực tiễn.
3. Ba chặng giữ ID hiện tại để CTA, liên kết hash và điều hướng ổn định: `chang-1` gồm slide 01–02; `chang-2` gồm slide 03–05; `chang-3` gồm slide 06–08.
4. Tiêu đề, lời dẫn, nguồn giáo trình trang 60–70, phạm vi từ sau 2/9/1945 đến 19/12/1946 và các số liệu slide 08 phải đối chiếu về nguồn; không đưa sáu câu hỏi 3C lên trang trong lượt này.
5. Giữ màu, font, thẻ, nav dính, reveal, sao vàng khi bấm, focus, chuyển động giảm theo cài đặt hệ điều hành và responsive hiện tại.
6. Không xóa mã nguồn hoặc dữ liệu của chủ đề cũ, quiz hay AI. Không giữ nội dung cũ trong DOM hiển thị của trang mới.
7. Git hiện có thay đổi ngoài phạm vi tại `Chuong_3_Doc_lap_Tu_do_Hanh_phuc.docx` và `package-lock.json`; các phase không chỉnh sửa, hoàn nguyên hoặc đưa hai thay đổi này vào commit.

## Thứ tự và phụ thuộc

```text
phase-01-source-locked-content-model
             ↓
phase-02-chapter-two-page-integration
             ↓
phase-03-manual-presentation-acceptance
```

## Tiêu chí nghiệm thu tổng

- Trang có đúng tám thẻ 01–08 theo file nội dung slide, chia 2/3/3 và giữ nav ba chặng.
- Nội dung lịch sử, ngày tháng, số liệu và chú thích có thể dò lại về một trong hai DOCX; slide 08 có đủ bốn chỉ số, kỳ tham chiếu, nguồn và giới hạn diễn giải.
- Trang mở đầu dùng tiêu đề/lời dẫn Chương 2; khối phạm vi thay bản đồ cũ; ảnh chỉ xuất hiện nếu xác minh được bối cảnh, nguồn và quyền sử dụng.
- Không còn ảnh, bản đồ, số liệu hoặc nội dung 1954–1975 trong trang được render. Quiz và AI không có trong nav/DOM; mã nguồn của chúng còn nguyên.
- Các tương tác/nhận diện đã nêu trong spec vẫn hoạt động; không có tràn ngang ở chiều rộng 360 px trở lên.
- Trước khi kết thúc triển khai, kiểm tra thủ công nội dung và giao diện trên trang; nếu triển khai theo yêu cầu riêng, production build hiện có phải thành công. Không thêm hoặc chạy bộ kiểm thử tự động trong phạm vi kế hoạch này.

## Rủi ro và cách xử lý

| Rủi ro | Cách xử lý |
| --- | --- |
| Ảnh lưu trữ đúng thời kỳ nhưng không rõ quyền tái sử dụng, nguồn gốc hoặc kích thước | Chưa đưa lên trang; thử các nguồn chính thống khác. Nếu vẫn không xác minh được, dùng phương án không ảnh theo spec. |
| File lời thuyết trình có chi tiết vượt phạm vi hoặc không có trong file slide | Chỉ thêm nếu chi tiết giải thích trực tiếp một ý của slide; giữ file slide làm chuẩn; bỏ chi tiết không truy nguyên được. |
| Mô hình dữ liệu cũ có nhánh riêng cho ảnh, số liệu, kết luận hoặc chuỗi chiến dịch | Tái sử dụng renderer khi phù hợp; không đưa nhãn/diễn giải cũ vào dữ liệu mới. Chỉ chỉnh JSX khi cần hiển thị đúng nội dung nguồn, không đổi nhịp giao diện. |
| Nội dung cũ còn trong DOM do chỉ ẩn bằng CSS | Bỏ hẳn render/import của quiz, AI và bản đồ trên trang mới; giữ các tệp module trong repo để khôi phục sau. |
| Quan hệ nhân quả sai giữa số liệu 2026 và bài học 1945–1946 | Tách phần thống kê và phần liên hệ; diễn đạt đúng giới hạn trong file slide, không biến liên hệ thành kết luận nguyên nhân. |
| Thay đổi dở dang ngoài phạm vi bị mất khi triển khai | Giữ nguyên `Chuong_3_Doc_lap_Tu_do_Hanh_phuc.docx` và `package-lock.json`; chỉ sửa các tệp trong phase được nêu. |

## Danh sách công việc

- [x] Hoàn thành `phase-01-source-locked-content-model`.
- [x] Hoàn thành `phase-02-chapter-two-page-integration`.
- [x] Hoàn thành `phase-03-manual-presentation-acceptance`.

Tracker: `feature_list.json` → `E:/mln/mln/feature_list.json` (3 phase mới, giữ nguyên 2 phase cũ). Root được xác định bằng quy tắc Git root; không có `.skills.json` trong dự án hoặc thư mục cha.

## Session Notes
<!-- Updated by cook automatically — do not edit manually -->

**Last active:** 2026-10-23 15:30 UTC
**Phase in progress:** none — all three phases complete
**Status:** The 1945–1946 content model, page integration and manual browser acceptance are complete. The user approved finalization; the code review returned APPROVED. The task changes are committed locally; unrelated document and lockfile edits remain untouched. No automated tests, production build or deployment were run.

### Decisions made this session
- Kept the slide-content DOCX authoritative and used the presenter script only to clarify matching slide points.
- Kept the eight source slides in 2/3/3 groups; left the six 3C discussion questions out of the presentation model.
- Did not reuse images from the official candidate pages because none documented permission to reuse; Phase 02 will use the approved text-only hero treatment.
- Kept the existing visual system and interactions, removed only quiz, AI appendix and map from the rendered page, and updated active navigation immediately when a chapter link is activated.
- Manually reviewed the live page at desktop 1440 px and mobile 360 px, including slide order and sources, responsive overflow, keyboard navigation, click-star and reduced-motion behavior. Code review approved with no actionable findings.
- Removed the temporary manual-review helper page. Kept the production-build criterion as a release-time check because this request did not include deployment.

### Next immediate action
No implementation work remains. The task commit is local and has not been pushed or deployed; wait for a separate instruction before publishing it.
