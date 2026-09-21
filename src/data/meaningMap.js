export const meaningMapNodes = [
  {
    id: 'independence',
    label: 'ĐỘC LẬP',
    layer: 'Tầng chính trị',
    short: 'Tiền đề chính trị',
    summary: 'Độc lập giải quyết sự lệ thuộc về chính trị, bảo đảm chủ quyền, thống nhất và toàn vẹn lãnh thổ, đồng thời tạo khả năng tự lựa chọn con đường phát triển.',
    question: 'Dân tộc có quyền tự quyết định vận mệnh của mình hay không?',
    quote: '“Không có gì quý hơn độc lập, tự do.”',
    quoteSource: 'Hồ Chí Minh Toàn tập, Tập 15, tr.131',
    sources: ['Giáo trình 2019, tr.42–44', 'Hồ Chí Minh Toàn tập, Tập 15, tr.131']
  },
  {
    id: 'people',
    label: 'NHÂN DÂN',
    layer: 'Chủ thể và người thụ hưởng',
    short: 'Trung tâm tham chiếu',
    summary: 'Nhân dân vừa là chủ thể của sự nghiệp cách mạng, vừa là người mà thành quả cách mạng phải phục vụ.',
    question: 'Nhân dân có thực sự làm chủ và thụ hưởng thành quả hay không?',
    sources: ['Giáo trình 2019, tr.55–58', 'Hồ Chí Minh Toàn tập, Tập 15, tr.391']
  },
  {
    id: 'freedom',
    label: 'TỰ DO',
    layer: 'Tầng xã hội',
    short: 'Quyền làm chủ',
    summary: 'Tự do gắn với dân chủ, quyền và lợi ích của nhân dân, cùng các điều kiện xã hội để con người tham gia, làm chủ và phát triển.',
    question: 'Trong đất nước đã độc lập, nhân dân có thực sự làm chủ hay không?',
    quote: '“Chế độ ta là chế độ dân chủ. Tức là nhân dân làm chủ.” “Nước ta là nước dân chủ, địa vị cao nhất là dân, vì dân là chủ.”',
    quoteSource: 'Hồ Chí Minh Toàn tập, Tập 13, tr.10; Tập 7, tr.434',
    sources: ['Giáo trình 2019, tr.56', 'Hồ Chí Minh Toàn tập, Tập 7, tr.434', 'Hồ Chí Minh Toàn tập, Tập 13, tr.10']
  },
  {
    id: 'happiness',
    label: 'HẠNH PHÚC',
    layer: 'Tầng con người',
    short: 'Đời sống và phát triển',
    summary: 'Hạnh phúc đưa thành quả độc lập và tự do về đời sống cụ thể: mức sống, học hành, việc làm, sức khỏe và khả năng phát triển.',
    question: 'Đời sống mỗi người được cải thiện thế nào?',
    quote: '“Làm cho dân có ăn. Làm cho dân có mặc. Làm cho dân có chỗ ở. Làm cho dân có học hành.”',
    quoteSource: 'Hồ Chí Minh Toàn tập, Tập 4, tr.175 và 187',
    sources: ['Giáo trình 2019, tr.43', 'Hồ Chí Minh Toàn tập, Tập 4, tr.175 và 187']
  }
];

export const meaningMapEdges = [
  {
    id: 'independence-people',
    from: 'independence',
    to: 'people',
    label: 'Phục vụ',
    category: 'lý luận',
    path: 'M 180 68 L 245 68',
    explanation: 'Nền độc lập tạo điều kiện chính trị để nhân dân trở thành chủ thể của đất nước và tự tổ chức đời sống chính trị, kinh tế, văn hóa.',
    question: 'Độc lập cuối cùng phục vụ ai?',
    boundary: 'Không đồng nhất việc có chủ quyền với việc mọi điều kiện sống đã được bảo đảm ngay lập tức.',
    sources: ['Giáo trình 2019, tr.42–44', 'Hồ Chí Minh Toàn tập, Tập 15, tr.131']
  },
  {
    id: 'people-freedom',
    from: 'people',
    to: 'freedom',
    label: 'Làm chủ',
    category: 'lý luận',
    path: 'M 435 68 L 500 68',
    explanation: 'Quyền tự quyết của quốc gia cần được hiện thực hóa trong dân chủ, quyền và lợi ích của nhân dân.',
    question: 'Nhân dân có thực sự làm chủ trong đất nước độc lập không?',
    boundary: 'Tự do không đồng nhất với việc cá nhân tùy ý làm mọi việc; nó gắn với dân chủ và quyền làm chủ.',
    sources: ['Giáo trình 2019, tr.56', 'Hồ Chí Minh Toàn tập, Tập 7, tr.434', 'Tập 13, tr.10']
  },
  {
    id: 'people-happiness',
    from: 'people',
    to: 'happiness',
    label: 'Mục tiêu con người',
    category: 'phản biện',
    path: 'M 340 120 L 340 225',
    explanation: 'Hạnh phúc là mục tiêu đưa thành quả chính trị và xã hội về đời sống cụ thể của mỗi người.',
    question: 'Thành quả cách mạng đến với đời sống mỗi người thế nào?',
    boundary: 'Không suy ra hạnh phúc của toàn xã hội từ một sự kiện văn hóa hoặc một chỉ số đơn lẻ.',
    sources: ['Hồ Chí Minh Toàn tập, Tập 4, tr.175 và 187', 'Giáo trình 2019, tr.43']
  },
  {
    id: 'independence-happiness',
    from: 'independence',
    to: 'happiness',
    label: 'Ý nghĩa trong đời sống',
    category: 'lý luận',
    path: 'M 95 115 C 95 210, 185 265, 230 270',
    explanation: '“Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì.” Độc lập phải trở thành quyền lợi thực tế của nhân dân.',
    question: 'Một nền độc lập có ý nghĩa thế nào nếu dân chưa được hưởng hạnh phúc tự do?',
    boundary: 'Câu nói không phủ nhận chủ quyền quốc gia và không biến hạnh phúc thành một chỉ số duy nhất.',
    sources: ['Hồ Chí Minh Toàn tập, Tập 4, tr.64', 'Giáo trình 2019, tr.43']
  },
  {
    id: 'freedom-happiness',
    from: 'freedom',
    to: 'happiness',
    label: 'Phát triển',
    category: 'thực tiễn',
    path: 'M 585 115 C 585 210, 495 265, 450 270',
    explanation: 'Quyền làm chủ và các điều kiện xã hội cần được chuyển hóa thành mức sống, học hành, việc làm, sức khỏe và khả năng phát triển.',
    question: 'Có thể dùng một sự kiện văn hóa hoặc thu nhập để kết luận về hạnh phúc không?',
    boundary: 'Không. Cần đặt từng chỉ báo trong đúng phạm vi và kết hợp dữ liệu về đời sống, giáo dục, y tế và an sinh.',
    sources: ['Giáo trình 2019, tr.51–58', 'Cục Thống kê, thông cáo kinh tế – xã hội năm 2025']
  }
];
