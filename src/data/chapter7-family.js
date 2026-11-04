const textbookBase = 'Giáo trình học phần Chủ nghĩa xã hội khoa học, Chương 7.';

export const chapter7Intro = {
  title: 'Xây dựng gia đình Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội',
  chapter: 'Chương 7 · Vấn đề gia đình trong thời kỳ quá độ lên chủ nghĩa xã hội',
  centralQuestion:
    'Trong bối cảnh kinh tế, xã hội và dân số đang thay đổi, làm thế nào để gia đình thích ứng mà vẫn bảo đảm bình đẳng, chăm sóc và gắn kết?',
  roadmap: 'Cơ sở lý luận → Biến đổi → Phương hướng xây dựng',
  section: 'Mục III'
};

export const chapter7Hero = {
  kind: 'typography',
  eyebrow: 'Chương 7 · Mục III',
  title: 'Gia đình Việt Nam',
  subtitle: 'Thích ứng với thay đổi, giữ vững bình đẳng, chăm sóc và gắn kết.'
};

export const heroImageResearch = {
  decision: 'typography-fallback',
  candidates: [
    {
      publisher: 'Báo Điện tử Chính phủ',
      articleUrl: 'https://baochinhphu.vn/trien-lam-anh-gia-dinh-to-am-yeu-thuong-102294997.htm',
      assetUrl: 'https://bcp.cdnchinhphu.vn/thumb_w/777/Uploaded/nguyenminhdiem/2021_06_28/hanhphuc.jpg',
      caption: '“Mãi mãi là hạnh phúc” — một tác phẩm trưng bày tại Triển lãm ảnh “Gia đình - Tổ ấm yêu thương”.',
      credit: 'Bài không ghi tên tác giả ảnh.',
      reuseStatus: 'unconfirmed',
      rightsEvidence:
        'Trang ghi bản quyền thuộc Báo Điện tử Chính phủ và yêu cầu ghi nguồn khi phát hành lại thông tin; không tìm thấy điều khoản cấp quyền riêng cho ảnh.'
    },
    {
      publisher: 'Bộ Văn hóa, Thể thao và Du lịch',
      articleUrl: 'https://bvhttdl.gov.vn/ngay-gia-dinh-viet-nam-286-de-gia-dinh-tro-thanh-nguon-luc-phat-trien-xa-hoi.htm',
      assetUrl: 'https://bvhttdl.gov.vn/uploads/images/2026/06/25/external-1782380677529.jpeg',
      caption: 'Các đội tham gia Hội thi “Gia đình tài năng” tại Ngày hội Gia đình tỉnh Bắc Ninh năm 2026.',
      credit: 'Danh Lam/TTXVN',
      reuseStatus: 'unconfirmed',
      rightsEvidence:
        'Bài ghi credit TTXVN nhưng không nêu giấy phép hoặc quyền tái sử dụng ảnh.'
    }
  ],
  note: 'Chỉ dùng ảnh khi quyền tái sử dụng được xác nhận; hiện giữ phương án typography từ slide 01.'
};

export const chapters = [
  {
    id: 'chang-1',
    number: '01',
    shortTitle: 'Cơ sở',
    title: 'Cơ sở lý luận về gia đình',
    intro: 'Từ mục tiêu bài trình bày đến cơ sở xã hội, pháp luật và văn hóa của gia đình.',
    slides: [
      {
        number: '01',
        title: 'Xây dựng gia đình Việt Nam',
        lead: 'Trong thời kỳ quá độ lên chủ nghĩa xã hội',
        points: [
          'Câu hỏi trung tâm: ' + chapter7Intro.centralQuestion,
          'Mạch trình bày: ' + chapter7Intro.roadmap + '.'
        ]
      },
      {
        number: '02',
        title: 'Mạch trình bày và mục tiêu',
        points: [
          'LO 1 · Nắm lý luận: Trình bày cơ sở hình thành và phát triển gia đình trong thời kỳ quá độ. Đây là mục tiêu đề xuất cho bài trình bày, không phải mã LO chính thức của học phần.',
          'LO 2 · Phân tích: Làm rõ biến đổi về cơ cấu, chức năng và quan hệ; phân biệt mô tả trong giáo trình với nhận định phân tích.',
          'LO 3 · Vận dụng: Liên hệ phương hướng xây dựng với luật, chính sách và dữ liệu chính thức; rút ra bài học thực tiễn có căn cứ.'
        ],
        source: 'Khung bài trình bày; GT mục III, tr.137–143 / PDF tr.136–142'
      },
      {
        number: '03',
        title: 'Cơ sở lý luận: Gia đình gắn với điều kiện xã hội',
        points: [
          'Kinh tế – xã hội: Điều kiện sản xuất, việc làm, thu nhập và tổ chức đời sống tác động đến quy mô, vai trò và phân công trong gia đình.',
          'Chính trị – pháp luật: Thể chế và pháp luật xác lập quyền, nghĩa vụ, chuẩn mực bình đẳng; tạo cơ chế bảo vệ thành viên.',
          'Văn hóa: Giá trị, học vấn, phong tục và chuẩn mực ứng xử ảnh hưởng đến hôn nhân, nuôi dạy con và quan hệ thế hệ.',
          'Hôn nhân tiến bộ: Tự nguyện, một vợ một chồng, bình đẳng và tôn trọng là cơ sở cho quan hệ gia đình tiến bộ.'
        ],
        source: 'GT mục II, tr.133–136 / PDF tr.132–135'
      }
    ]
  },
  {
    id: 'chang-2',
    number: '02',
    shortTitle: 'Biến đổi',
    title: 'Biến đổi trong gia đình Việt Nam',
    intro: 'Nhìn sự thay đổi qua cơ cấu, cách thực hiện chức năng và các quan hệ trong gia đình.',
    slides: [
      {
        number: '04',
        title: 'Cơ cấu gia đình: Quy mô và liên kết đa thế hệ',
        points: [
          'Mô tả trong giáo trình: “gia đình hạt nhân quy mô nhỏ” (trích nguyên văn; GT tr.137 / PDF tr.136).',
          'Phân tích hai mặt: Hộ nhỏ có thể tăng tính độc lập, riêng tư. Chăm sóc trẻ em, người cao tuổi và duy trì liên hệ liên thế hệ cần được tổ chức chủ động hơn. Đây là nhận định phân tích, không phải số liệu điều tra.'
        ],
        source: 'GT mục III.1.1, tr.137–138 / PDF tr.136–137'
      },
      {
        number: '05',
        title: 'Chức năng gia đình: Cách thực hiện thay đổi',
        points: [
          'Tái sản xuất con người: Sinh con và chăm sóc sức khỏe gắn với lựa chọn có trách nhiệm, điều kiện sống và bối cảnh dân số.',
          'Kinh tế – tiêu dùng: Gia đình tổ chức sinh kế, phân bổ thu nhập và chi tiêu; việc làm tương tác với lao động chăm sóc trong nhà.',
          'Giáo dục – xã hội hóa: Truyền giá trị, nếp sống và kỹ năng; phối hợp với nhà trường, cộng đồng và môi trường số.',
          'Tâm lý – tình cảm: Nơi gắn bó, hỗ trợ tinh thần và cảm giác an toàn; xung đột kéo dài làm suy yếu chức năng này.'
        ],
        source: 'GT mục III.1.2, tr.138–140 / PDF tr.137–139'
      },
      {
        number: '06',
        title: 'Quan hệ gia đình: Bình đẳng, chăm sóc và an toàn',
        points: [
          'Vợ chồng: Hướng tới bình đẳng, tôn trọng và chia sẻ việc nhà; pháp luật ghi nhận quyền và nghĩa vụ ngang nhau.',
          'Cha mẹ – con: Nuôi dưỡng, giáo dục gắn với bảo vệ, lắng nghe và lợi ích tốt nhất của trẻ em.',
          'Anh chị em: Gắn bó, hỗ trợ và học cách giải quyết khác biệt giữa các thành viên.',
          'Các thế hệ: Chăm sóc người cao tuổi, trẻ em và duy trì kết nối cần phối hợp trong gia đình và với dịch vụ xã hội.'
        ],
        source: 'GT mục III.1.3, tr.140–141 / PDF tr.139–140; Luật HN&GĐ 2014, Điều 17, 19',
        sourceLinks: [
          {
            label: 'Luật Hôn nhân và gia đình số 52/2014/QH13',
            url: 'https://vbpl.moj.gov.vn/ninhbinh/Pages/vbpq-toanvan.aspx?ItemID=36870&Keyword='
          }
        ]
      }
    ]
  },
  {
    id: 'chang-3',
    number: '03',
    shortTitle: 'Phương hướng',
    title: 'Phương hướng và vận dụng',
    intro: 'Đặt dữ liệu trong giới hạn diễn giải, rồi đối chiếu phương hướng xây dựng với thực tiễn.',
    slides: [
      {
        number: '07',
        title: 'Bối cảnh dân số và việc làm: Dữ liệu để đặt câu hỏi',
        lead: 'Số liệu nêu bối cảnh thích ứng; tự chúng không giải thích nguyên nhân của từng biến đổi gia đình.',
        metrics: [
          { value: '1,93', unit: 'con/phụ nữ', label: 'TFR năm 2025 (năm 2024: 1,91)' },
          { value: '14,5%', label: 'Dân số từ 60 tuổi trở lên năm 2025 (2024: 14,0%)' },
          { value: '63,0%', label: 'Tỷ lệ tham gia lực lượng lao động năm 2025 · nữ' },
          { value: '74,3%', label: 'Tỷ lệ tham gia lực lượng lao động năm 2025 · nam' }
        ],
        points: [
          'Mức sinh: TFR năm 2025 là 1,93 con/phụ nữ; năm 2024 là 1,91. Tăng nhẹ so với năm trước, song xu hướng dài hạn vẫn giảm.',
          'Già hóa: Tỷ trọng dân số từ 60 tuổi trở lên tăng từ 14,0% (2024) lên 14,5% (2025).',
          'Lao động: Tỷ lệ tham gia lực lượng lao động năm 2025 là nữ 63,0%, nam 74,3%. Chỉ báo này không đo trực tiếp việc chăm sóc không lương.'
        ],
        metricNote: 'Dữ liệu không tự chứng minh nguyên nhân của biến đổi gia đình.',
        source: 'Cục Thống kê, Thông cáo 05/01/2026, tr.1, 3; Luật Dân số 113/2025/QH15, Điều 13',
        sourceLinks: [
          {
            label: 'Cục Thống kê · Thông cáo báo chí về dân số, lao động, việc làm quý IV và năm 2025',
            url: 'https://www.nso.gov.vn/wp-content/uploads/2026/01/Thong-cao-bao-chi-lao-dong-Q4-2025.pdf'
          },
          {
            label: 'Luật Dân số số 113/2025/QH15',
            url: 'https://chinhphu.vn/?classid=1&docid=216497&orggroupid=1&pageid=27160'
          }
        ]
      },
      {
        number: '08',
        title: 'Bốn phương hướng xây dựng gia đình Việt Nam',
        points: [
          '1 · Nhận thức, lãnh đạo: Nâng cao nhận thức và trách nhiệm của hệ thống chính trị, cộng đồng, gia đình và mỗi thành viên.',
          '2 · Nền tảng kinh tế: Phát triển kinh tế, nâng cao đời sống vật chất và tinh thần; tạo điều kiện để gia đình thực hiện chức năng.',
          '3 · Kế thừa và đổi mới: Phát huy giá trị tốt đẹp, tiếp thu giá trị tiến bộ, khắc phục tập quán lạc hậu và định kiến.',
          '4 · Phong trào thiết thực: Nâng cao chất lượng phong trào gia đình văn hóa; chú trọng hiệu quả thực chất, tránh chạy theo thành tích.'
        ],
        source: 'GT mục III.2 (mục 3.2), tr.142–143 / PDF tr.141–142'
      },
      {
        number: '09',
        title: 'Kinh nghiệm vận dụng vào thực tiễn hiện nay',
        points: [
          'Thiết kế theo điều kiện: Xét mức sinh, sức khỏe, thu nhập, học tập và năng lực nuôi dạy; tôn trọng quyết định bình đẳng.',
          'Bình đẳng trong việc nhà: Thống nhất cách chia sẻ chăm sóc, việc nhà và quyết định kinh tế; biến bình đẳng thành thực hành.',
          'An toàn là điều kiện nền: Phòng ngừa bạo lực, bảo vệ người bị bạo lực và trẻ em; hòa giải không thay thế xử lý vi phạm.',
          'Đánh giá bằng chất lượng sống: Theo dõi an toàn, tôn trọng, chăm sóc, giáo dục và gắn kết; không chỉ đếm hoạt động hay danh hiệu.'
        ],
        source: 'Luật Dân số 2025; Luật HN&GĐ 2014; Luật PCBLGĐ 2022; QĐ 2238/QĐ-TTg',
        sourceLinks: [
          {
            label: 'Luật Dân số số 113/2025/QH15',
            url: 'https://chinhphu.vn/?classid=1&docid=216497&orggroupid=1&pageid=27160'
          },
          {
            label: 'Luật Hôn nhân và gia đình số 52/2014/QH13',
            url: 'https://vbpl.moj.gov.vn/ninhbinh/Pages/vbpq-toanvan.aspx?ItemID=36870&Keyword='
          },
          {
            label: 'Luật Phòng, chống bạo lực gia đình số 13/2022/QH15',
            url: 'https://vanban.chinhphu.vn/?classid=1&docid=207711&orggroupid=1&pageid=27160'
          },
          {
            label: 'Quyết định 2238/QĐ-TTg ngày 30/12/2021',
            url: 'https://vanban.chinhphu.vn/?classid=0&docid=204882&pageid=27160'
          }
        ]
      },
      {
        number: '10',
        title: 'Kết luận: Thích ứng để duy trì các giá trị cốt lõi',
        points: [
          'Thay đổi có tính hệ thống: Cơ cấu, chức năng và quan hệ liên kết; thay đổi ở một mặt thường đòi hỏi tổ chức lại các mặt còn lại.',
          'Không tuyệt đối hóa: Không lãng mạn hóa gia đình truyền thống, cũng không xem mọi thay đổi là tiến bộ. Đánh giá theo bình đẳng, chăm sóc và an toàn.',
          'Trả lời câu hỏi: Gia đình thích ứng tốt khi có điều kiện kinh tế, chính sách, dịch vụ phù hợp và gắn kết bằng tôn trọng, chia sẻ, trách nhiệm.'
        ],
        source: 'Tổng hợp mục III.1–III.2, GT tr.137–143 / PDF tr.136–142'
      }
    ]
  }
];

export const sourcePage = {
  number: '11',
  title: 'Nguồn, trang trích và quy ước dẫn chứng',
  sectionLabel: 'Nguồn',
  sections: [
    {
      title: 'Giáo trình',
      items: [
        'Mục II: tr.133–136 / PDF 132–135.',
        'III.1.1: tr.137–138 / PDF 136–137.',
        'III.1.2: tr.138–140 / PDF 137–139.',
        'III.1.3: tr.140–141 / PDF 139–140.',
        'III.2: tr.142–143 / PDF 141–142.'
      ]
    },
    {
      title: 'Văn bản và dữ liệu',
      items: [
        'Luật Dân số 113/2025/QH15, Điều 6, 13, 30.',
        'Luật Hôn nhân và gia đình 52/2014/QH13, Điều 17, 19.',
        'Luật Phòng, chống bạo lực gia đình 13/2022/QH15, Điều 4, 17.',
        'Cục Thống kê, Thông cáo 05/01/2026, tr.1, 3.',
        'Quyết định 2238/QĐ-TTg ngày 30/12/2021.'
      ]
    },
    {
      title: 'Chú thích kinh điển',
      items: [
        'Theo chú thích giáo trình tr.133–135: V.I. Lenin, Toàn tập, Nxb Tiến bộ, Moscow, 1977, tập 42, tr.464; tập 40, tr.182.',
        'C. Marx và F. Engels, Toàn tập, Nxb CTQG, Hà Nội, 1995, tập 21, tr.118, 125, 128.',
        'Giáo trình dẫn; không trích trực tiếp bản gốc.'
      ]
    }
  ],
  fullSources: [
    {
      id: 'S-01',
      title: textbookBase + ' Tệp PDF do người dùng cung cấp, mục II–III, tr.133–143 theo số trang in; số trang PDF đối chiếu được ghi ở các phần trên.',
      links: []
    },
    {
      id: 'S-02',
      title: 'Quốc hội, Luật Dân số số 113/2025/QH15, thông qua 10/12/2025, hiệu lực 01/07/2026, Điều 6, 13, 30.',
      links: [
        { label: 'Cổng thông tin Chính phủ', url: 'https://chinhphu.vn/?classid=1&docid=216497&orggroupid=1&pageid=27160' },
        { label: 'Toàn văn PDF', url: 'https://datafiles.chinhphu.vn/cpp/files/vbpq/2026/01/luat113-2025.pdf' }
      ]
    },
    {
      id: 'S-03',
      title: 'Cục Thống kê, Thông cáo báo chí về tình hình dân số, lao động, việc làm quý IV và năm 2025, 05/01/2026, tr.1 (TFR, cơ cấu tuổi), tr.3 (tỷ lệ tham gia lực lượng lao động).',
      links: [
        { label: 'Toàn văn PDF', url: 'https://www.nso.gov.vn/wp-content/uploads/2026/01/Thong-cao-bao-chi-lao-dong-Q4-2025.pdf' }
      ]
    },
    {
      id: 'S-04',
      title: 'Quốc hội, Luật Hôn nhân và gia đình số 52/2014/QH13, Điều 17, 19.',
      links: [
        { label: 'Cơ sở dữ liệu quốc gia về văn bản pháp luật', url: 'https://vbpl.moj.gov.vn/ninhbinh/Pages/vbpq-toanvan.aspx?ItemID=36870&Keyword=' }
      ]
    },
    {
      id: 'S-05',
      title: 'Quốc hội, Luật Phòng, chống bạo lực gia đình số 13/2022/QH15, hiệu lực 01/07/2023, Điều 4, 17.',
      links: [
        { label: 'Cổng văn bản Chính phủ', url: 'https://vanban.chinhphu.vn/?classid=1&docid=207711&orggroupid=1&pageid=27160' },
        { label: 'Toàn văn PDF', url: 'https://datafiles.chinhphu.vn/cpp/files/vbpq/2023/4/luat13.pdf' }
      ]
    },
    {
      id: 'S-06',
      title: 'Thủ tướng Chính phủ, Quyết định số 2238/QĐ-TTg ngày 30/12/2021 phê duyệt Chiến lược phát triển gia đình Việt Nam đến năm 2030.',
      links: [
        { label: 'Cổng văn bản Chính phủ', url: 'https://vanban.chinhphu.vn/?classid=0&docid=204882&pageid=27160' }
      ]
    },
    {
      id: 'S-07',
      title: 'Chú thích giáo trình tr.133–135 dẫn: V.I. Lenin, Toàn tập, Nxb Tiến bộ, Moscow, 1977, tập 42, tr.464; tập 40, tr.182; C. Marx và F. Engels, Toàn tập, Nxb CTQG, Hà Nội, 1995, tập 21, tr.118, 125, 128. Đây là tài liệu giáo trình dẫn, không phải trích trực tiếp bản gốc.',
      links: []
    }
  ],
  citationConvention:
    'Chỉ cụm “gia đình hạt nhân quy mô nhỏ” ở slide 04 là trích nguyên văn; các ý giáo trình khác là diễn giải. Số liệu và điều luật được dẫn riêng theo nguồn chính thức.',
  accessDate: '04/11/2026',
  source: 'Nguồn truy cập ngày 04/11/2026'
};

export const sourceSlide = {
  number: sourcePage.number,
  title: sourcePage.title,
  sectionLabel: sourcePage.sectionLabel,
  pageType: 'sources',
  source: sourcePage.source,
  sourcePage
};

export const presentationSlides = [
  ...chapters.flatMap((chapter) =>
    chapter.slides.map((slide) => ({
      ...slide,
      sectionLabel: 'Chặng ' + chapter.number + ' · ' + chapter.shortTitle
    }))
  ),
  { ...sourceSlide, sectionLabel: 'Nguồn' }
];
