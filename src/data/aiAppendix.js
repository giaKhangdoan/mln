export const aiUsageLog = [
  {
    id: 'AI-01',
    title: 'Đọc và đối chiếu hai tài liệu',
    tool: 'ChatGPT',
    prompt: 'Đọc riêng lời thuyết trình và nội dung slide; xác định chức năng, cấu trúc, luận điểm và điểm khác biệt của từng tài liệu.',
    output: 'Tài liệu lời thuyết trình gồm 8 phần, có chuyển ý và 6 câu hỏi 3C kèm gợi ý trả lời. Tài liệu slide gồm 8 slide và 6 câu hỏi 3C không kèm gợi ý trả lời. Hai file được giữ đúng chức năng riêng.'
  },
  {
    id: 'AI-02',
    title: 'Biên soạn phụ lục AI cho Chương 2',
    tool: 'ChatGPT',
    prompt: 'Tạo phụ lục AI với trọng tâm là hai tài liệu về xây dựng và bảo vệ chính quyền cách mạng giai đoạn 1945–1946.',
    output: 'Tổng hợp nhật ký sử dụng AI, prompt mẫu và câu hỏi ôn tập cho Chương 2.'
  },
  {
    id: 'AI-03',
    title: 'Đối chiếu số liệu lao động',
    tool: 'ChatGPT, tra cứu nguồn chính thống',
    prompt: 'Đối chiếu số liệu việc làm, thu nhập, lao động phi chính thức và thiếu việc làm với thông cáo gốc; ghi rõ kỳ thống kê và giới hạn diễn giải.',
    output: 'Đối chiếu kỳ 9 tháng năm 2026: 52,7 triệu người có việc làm; thu nhập bình quân 9,1 triệu đồng/tháng; lao động phi chính thức 32,4 triệu người (61,5%); tỷ lệ thiếu việc làm trong độ tuổi lao động 1,53%.',
    source: 'Cục Thống kê, thông cáo ngày 03/10/2026; kỳ tham chiếu 9/2026.',
    sourceUrl: 'https://www.nso.gov.vn/tin-tuc-thong-ke/2026/10/thong-cao-bao-chi-ve-tinh-hinh-lao-dong-viec-lam-quy-iii-va-9-thang-nam-2026/'
  },
  {
    id: 'AI-04',
    title: 'Tạo quiz ôn tập',
    tool: 'ChatGPT',
    prompt: 'Từ hai tài liệu và giáo trình, tạo 5 câu trắc nghiệm kèm đáp án, giải thích ngắn và trang in hoặc nguồn chính thức; không thêm dữ kiện ngoài nguồn.',
    output: 'Bộ 5 câu hỏi về đường lối “kháng chiến, kiến quốc”, Tổng tuyển cử, Hiệp định Sơ bộ, các mốc tháng 12/1946 và cách đọc số liệu lao động.',
    source: 'Giáo trình, tr. 60–70; Cục Thống kê, kỳ 9/2026.'
  }
];

export const aiPromptExamples = [
  {
    id: 'P-01',
    purpose: 'Tài liệu do người dùng cung cấp',
    prompt: 'Tôi cung cấp hai tệp khác nhau về chủ đề “Xây dựng và bảo vệ chính quyền cách mạng (1945–1946)”: (1) lời thuyết trình; (2) nội dung slide. Hãy đọc từng tệp độc lập. Với mỗi tệp, tóm tắt mục đích, cấu trúc, luận điểm và phần phụ lục. Sau đó lập bảng gồm: ý chung; ý chỉ có trong tệp 1; ý chỉ có trong tệp 2; khác biệt về diễn đạt, mốc, trích dẫn; điểm cần xác minh. Không mặc định tệp slide là bản rút gọn đầy đủ của lời thuyết trình. Tệp 1: [ĐÍNH KÈM]. Tệp 2: [ĐÍNH KÈM].'
  },
  {
    id: 'P-02',
    purpose: 'Rà sự thống nhất giữa lời nói và slide',
    prompt: 'So sánh theo từng số slide giữa lời thuyết trình và nội dung chiếu. Phân loại khác biệt là cùng ý, diễn giải dài hơn, rút gọn, khác cách nói hoặc mâu thuẫn cần xử lý. Trích đúng câu ở từng file; ưu tiên kiểm tra số liệu, mốc ngày, thuật ngữ và giới hạn của các hiệp định. Đề xuất cách đồng bộ tối thiểu nhưng vẫn giữ chức năng riêng của mỗi tài liệu. Nội dung: [DÁN TRÍCH ĐOẠN CỦA CẢ HAI FILE].'
  },
  {
    id: 'P-03',
    purpose: 'Kiểm chứng nội dung lịch sử',
    prompt: 'Kiểm tra từng phát biểu bên dưới bằng đúng phần giáo trình Lịch sử Đảng Cộng sản Việt Nam được cung cấp. Với mỗi phát biểu, ghi rõ trích nguyên văn hay diễn giải; kết luận đúng, chưa đủ căn cứ hay cần sửa; trang in; câu chữ thận trọng hơn nếu cần. Phân biệt kết quả bầu cử với ghế bổ sung, dữ kiện với diễn giải, nội dung điều khoản với đánh giá hiệu quả. Nếu không thấy bằng chứng trong phần trích, ghi “chưa xác minh”. Phát biểu: [DÁN]. Giáo trình: [ĐÍNH KÈM ĐOẠN CÓ SỐ TRANG].'
  },
  {
    id: 'P-04',
    purpose: 'Rà số liệu hiện hành',
    prompt: 'Kiểm chứng số liệu trong phần liên hệ thực tiễn bằng nguồn chính thức mới nhất tại ngày [NGÀY], ưu tiên Cục Thống kê. Với mỗi chỉ tiêu, ghi giá trị, đơn vị, kỳ tham chiếu, ngày đăng, trạng thái ước tính hoặc chính thức nếu nguồn nêu, URL và vị trí trên trang. Không suy luận quan hệ nhân quả với sự kiện 1945–1946. Dữ liệu cần kiểm tra: [DÁN].'
  },
  {
    id: 'P-05',
    purpose: 'Tạo quiz hoặc hoạt động 3C',
    prompt: 'Dựa trên phần giáo trình đã xác minh về giai đoạn 1945–1946, tạo 5 câu hỏi trắc nghiệm hoặc một hoạt động thảo luận Bối cảnh–Lý luận–Mâu thuẫn. Mỗi câu có đáp án, giải thích, trang in; với số liệu hiện nay, dẫn URL và kỳ thống kê. Không thêm dữ kiện ngoài đầu vào và không trình bày suy luận như lời giáo trình. Đầu vào: [DÁN LUẬN ĐIỂM ĐÃ KIỂM CHỨNG].'
  }
];
