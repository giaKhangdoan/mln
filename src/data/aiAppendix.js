export const aiUsageLog = [
  {
    id: 'AI-01',
    criteria: '4.1, 4.2',
    tool: 'ChatGPT (hỗ trợ đọc tài liệu và soạn nội dung)',
    purpose: 'Đọc giáo trình và lập sườn cho Chương 2, phần II, mục 3.',
    prompt: 'Dựa trên PDF giáo trình, lập sườn về ý nghĩa lịch sử và kinh nghiệm lãnh đạo giai đoạn 1954–1975; ghi trang in, phân biệt trích dẫn với diễn giải.',
    output: 'Sườn thuyết trình; nhận diện ý nghĩa, nguyên nhân thắng lợi, bốn kinh nghiệm; ghi trang in 113–114 và các trang liên quan; chỉ rõ trích dẫn Hồ Chí Minh là dẫn qua chú thích của giáo trình.',
    verification: 'Nhóm đã đối chiếu các trang 93–94, 97, 102, 112–114, 117. Câu trích Hồ Chí Minh được dẫn theo chú thích 120 trong giáo trình, tr. 102.',
    status: 'Nhóm đã đối chiếu sườn và xác nhận nội dung dùng trong bài trình bày.'
  },
  {
    id: 'AI-02',
    criteria: '4.2',
    tool: 'ChatGPT (tra cứu web nguồn chính thống)',
    purpose: 'Tra cứu nguồn chính thống cho phần liên hệ về hội nhập và kinh tế Việt Nam.',
    prompt: 'Tìm dữ liệu từ nguồn nhà nước; ghi cơ quan, kỳ số liệu, đơn vị, ngày đăng và trạng thái ước tính; phân biệt dữ kiện với phần liên hệ.',
    output: 'Tìm được bài giới thiệu Nghị quyết 59-NQ/TW trên Báo Điện tử Chính phủ; GDP 9 tháng năm 2026 ước tăng 9,01% so với cùng kỳ; bài phân tích của Cục Thống kê nêu yêu cầu tăng năng lực sản xuất trong nước, công nghiệp hỗ trợ và tỷ lệ nội địa hóa.',
    verification: 'Báo Điện tử Chính phủ, bài ngày 16-9-2025; Cục Thống kê, báo cáo quý III và 9 tháng năm 2026, đăng 03-10-2026; bài phân tích của Cục Thống kê. Xem danh mục nguồn bên dưới.',
    status: 'Nhóm đã đối chiếu nguồn, kỳ số liệu và thống nhất cách diễn giải phần liên hệ.'
  },
  {
    id: 'AI-03',
    criteria: '4.3',
    tool: 'ChatGPT',
    purpose: 'Tạo quiz ngắn để ôn tập, kèm đáp án và trang nguồn.',
    prompt: 'Từ luận điểm trong giáo trình, tạo 5 câu trắc nghiệm; mỗi câu có đáp án, giải thích ngắn và trang in.',
    output: 'Bộ 5 câu trắc nghiệm, đáp án và giải thích tại mục Trắc nghiệm.',
    verification: 'Giáo trình tr. 93–94, 97, 114. Câu hỏi dựa trên các luận điểm tại những trang này.',
    status: 'Nhóm đã rà soát câu hỏi, đáp án, giải thích và trang nguồn.'
  },
  {
    id: 'AI-04',
    criteria: '4.1, 4.4',
    tool: 'ChatGPT',
    purpose: 'Biên tập phụ lục AI thành bản trình bày ngắn gọn, minh bạch.',
    prompt: 'Sắp xếp nhật ký, prompt mẫu, nguồn và cam kết học thuật thành phụ lục rõ ràng; tách lượt AI thực tế khỏi prompt tham khảo.',
    output: 'Phụ lục được biên tập theo bốn phần: nhật ký, prompt mẫu, nguồn và cam kết.',
    verification: 'Giáo trình và các nguồn chính thống liệt kê tại tab “Kiểm chứng nguồn”; Báo Điện tử Chính phủ/Cục Thống kê được mở lại ngày 23-10-2026.',
    status: 'Nhóm đã hoàn thiện và xác nhận nội dung phụ lục.'
  }
];

export const aiPromptExamples = [
  {
    id: 'P-01',
    purpose: 'Tóm lược giáo trình',
    prompt: 'Tóm lược luận điểm về ý nghĩa, nguyên nhân thắng lợi, kinh nghiệm và hạn chế; ghi trang in, phân biệt trích dẫn với diễn giải.',
    expected: 'Bảng luận điểm, nhóm nội dung, diễn giải và trang giáo trình.',
  },
  {
    id: 'P-02',
    purpose: 'Lập sườn thuyết trình',
    prompt: 'Lập sườn 12–15 phút quanh một câu hỏi trung tâm; sắp xếp bối cảnh, ý nghĩa, kinh nghiệm và liên hệ hiện nay, kèm trang giáo trình.',
    expected: 'Thứ tự trình bày, câu hỏi trung tâm, thời lượng và trang nguồn.',
  },
  {
    id: 'P-03',
    purpose: 'Rà soát học thuật',
    prompt: 'Đối chiếu bản thảo với giáo trình và nguồn chính thống; kiểm tra dữ kiện, lập luận, trang dẫn và trích dẫn; đề xuất cách diễn đạt có căn cứ.',
    expected: 'Bảng phát biểu, kết quả đối chiếu, bằng chứng và đề xuất chỉnh lý.',
  },
  {
    id: 'P-04',
    purpose: 'Liên hệ thực tiễn',
    prompt: 'Tìm dữ kiện từ nguồn nhà nước về hội nhập và nội lực kinh tế; ghi cơ quan, ngày, kỳ số liệu, đơn vị và trạng thái ước tính; tách dữ kiện khỏi nhận định.',
    expected: 'Dữ kiện có nguồn, đoạn liên hệ và giới hạn diễn giải.',
  },
  {
    id: 'P-05',
    purpose: 'Tạo hoạt động ôn tập',
    prompt: 'Từ luận điểm trong giáo trình, tạo sơ đồ, quiz 5 câu hoặc thẻ ôn tập; kèm giải thích và trang nguồn, giữ đúng bối cảnh lịch sử.',
    expected: 'Sản phẩm minh họa ngắn có chú thích nguồn.',
  },
  {
    id: 'P-06',
    purpose: 'Ghi nhật ký sử dụng AI',
    prompt: 'Lập nhật ký theo từng lượt thực tế, gồm công cụ, mục đích, prompt, đầu ra, phần biên tập và nguồn đối chiếu; tách prompt mẫu khỏi lượt đã dùng.',
    expected: 'Nhật ký minh bạch theo từng lượt sử dụng AI.',
  }
];

export const aiSources = [
  {
    id: 'S-01',
    source: 'Giáo trình Lịch sử Đảng Cộng sản Việt Nam. Ban Tuyên giáo Trung ương; Bộ Giáo dục và Đào tạo. Hà Nội, 6-2019. Dùng trong các trường đại học, hệ không chuyên lý luận chính trị.',
    location: 'Trang in 93–94, 97, 102, 112–114, 117. Mục II.3: trang in 113–114; PDF 114–115.',
    supports: 'Bối cảnh, đường lối hai miền; phương pháp; ý nghĩa, nguyên nhân, bốn kinh nghiệm và hạn chế.',
    checked: 'Đã đối chiếu trang in 113–114 với PDF 114–115 và các luận điểm sử dụng trong bài.'
  },
  {
    id: 'S-02',
    source: 'Hồ Chí Minh Toàn tập, Nxb Chính trị quốc gia, Hà Nội, 2011.',
    location: 'Tập 15, trang 131. Thông tin tập/trang theo chú thích 120 trong giáo trình tại tr. 102.',
    supports: 'Lời kêu gọi ngày 17-7-1966; câu ngắn “Không có gì quý hơn độc lập, tự do”.',
    checked: 'Thông tin tập, trang và câu trích đã được nhóm đối chiếu với nguồn gốc.'
  },
  {
    id: 'S-03',
    source: 'Báo Điện tử Chính phủ: “Nghị quyết số 59-NQ/TW: Bước ngoặt lịch sử trong tiến trình hội nhập quốc tế”, đăng 16-9-2025.',
    location: 'Nghị quyết 59-NQ/TW ngày 24-1-2025; phần quan điểm, mục tiêu và nội dung thực hiện.',
    url: 'https://baochinhphu.vn/nghi-quyet-so-59-nq-tw-buoc-ngoat-lich-su-trong-tien-trinh-hoi-nhap-quoc-te-102250916120745609.htm',
    supports: 'Liên hệ về hội nhập, phát huy nội lực và tranh thủ hiệu quả nguồn lực bên ngoài.',
    checked: 'Nguồn và ngữ cảnh Nghị quyết 59-NQ/TW đã được nhóm đối chiếu; bài báo được dùng như nguồn giới thiệu.'
  },
  {
    id: 'S-04',
    source: 'Cục Thống kê: “Báo cáo tình hình kinh tế – xã hội quý III và 9 tháng năm 2026”. Đăng 03-10-2026.',
    location: 'GDP 9 tháng năm 2026: ước tăng 9,01% so với cùng kỳ; phần tốc độ tăng GDP.',
    url: 'https://www.nso.gov.vn/bai-top/2026/10/bao-cao-tinh-hinh-kinh-te-xa-hoi-quy-iii-va-9-thang-nam-2026/',
    supports: 'Dữ liệu tăng trưởng GDP dùng cho phần liên hệ thực tiễn, với mức tăng ước tính và kỳ so sánh cụ thể.',
    checked: 'Đã xác nhận mức tăng 9,01% là ước tính cho chín tháng, so với cùng kỳ năm trước.'
  },
  {
    id: 'S-05',
    source: 'Cục Thống kê: “Tăng trưởng GDP quý III và 9 tháng năm 2026: Ba động lực tạo đà cho mục tiêu tăng trưởng cao”.',
    location: 'Phần về nhập khẩu, năng lực sản xuất trong nước, công nghiệp hỗ trợ, tỷ lệ nội địa hóa và chất lượng tăng trưởng.',
    url: 'https://www.nso.gov.vn/du-lieu-va-so-lieu-thong-ke/2026/10/tang-truong-gdp-quy-iii-va-9-thang-nam-2026-ba-dong-luc-tao-da-cho-muc-tieu-tang-truong-cao/',
    supports: 'Liên hệ về yêu cầu nâng năng lực sản xuất trong nước, công nghiệp hỗ trợ và giữ lại nhiều giá trị gia tăng hơn.',
    checked: 'Đã đối chiếu bài phân tích và dùng như nhận định định hướng, không suy diễn quan hệ nhân quả.'
  }
];

export const academicCommitments = [
  'Công khai công cụ, mục đích, prompt, đầu ra AI và phần đóng góp của sinh viên.',
  'Phân biệt prompt mẫu với lượt sử dụng thực tế; đối chiếu luận điểm, niên đại, số liệu và trích dẫn với nguồn.',
  'Nhóm chọn lọc, biên tập và chịu trách nhiệm về nội dung cuối cùng của bài trình bày.'
];
