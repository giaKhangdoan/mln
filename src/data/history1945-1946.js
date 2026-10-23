import baDinhPhoto from '../assets/history1945-1946/ba-dinh-platform-1945.jpg';
import coalitionGovernmentPhoto from '../assets/history1945-1946/coalition-government-1946.jpg';
import dongXuanPhoto from '../assets/history1945-1946/dong-xuan-self-defense-1946.jpg';

const textbookSource =
  'Giáo trình Lịch sử Đảng Cộng sản Việt Nam (sử dụng trong các trường đại học, hệ không chuyên lý luận chính trị), 2019, tr. 60–70.';

const statisticsSource =
  'Liên hệ hiện nay: Cục Thống kê, Thông cáo báo chí về tình hình lao động, việc làm quý III và 9 tháng năm 2026, công bố ngày 03/10/2026.';

const baDinhSourceUrl = 'https://commons.wikimedia.org/wiki/File:To%C3%A0n_c%E1%BA%A3nh_l%E1%BB%85_%C4%91%C3%A0i_t%E1%BA%A1i_Qu%E1%BA%A3ng_tr%C6%B0%E1%BB%9Dng_Ba_%C4%90%C3%ACnh_-_H%C3%A0_N%E1%BB%99i,_ng%C3%A0y_02-09-1945.jpg';
const baDinhOfficialImageUrl = 'https://dms.luutru.gov.vn/files/ecm/source_files/2020/08/13/6-143758-130820-95.jpg';
const coalitionGovernmentSourceUrl = 'https://commons.wikimedia.org/wiki/File:L%C3%A2m-th%E1%BB%9Di_Li%C3%AAn-hi%E1%BB%87p_Ch%C3%ADnh-ph%E1%BB%A7_Vi%E1%BB%87t-nam_D%C3%A2n-ch%E1%BB%A7_C%E1%BB%99ng-h%C3%B2a_ra_m%E1%BA%AFt_Qu%E1%BB%91c-h%E1%BB%99i_ng%C3%A0y_02_th%C3%A1ng_03_n%C4%83m_1946.jpg';
const dongXuanSourceUrl = 'https://commons.wikimedia.org/wiki/File:Hanoi_guards_in_1946.jpg';
const ccBySaLicenseUrl = 'https://creativecommons.org/licenses/by-sa/4.0/deed.vi';

export const heroPhoto = {
  src: baDinhPhoto,
  alt: 'Toàn cảnh lễ đài và người dân tại Quảng trường Ba Đình ngày 2/9/1945',
  caption: 'Quảng trường Ba Đình, ngày 2/9/1945. Tư liệu Phông Nghệ sĩ nhiếp ảnh Nguyễn Bá Khoản.',
  sourceName: 'Trung tâm Lưu trữ quốc gia III',
  sourceUrl: baDinhOfficialImageUrl,
  licenseLabel: 'Phạm vi công cộng tại Việt Nam',
  licenseUrl: `${baDinhSourceUrl}#Licensing`,
  fit: 'contain'
};

export const chapters = [
  {
    id: 'chang-1',
    number: '01',
    shortTitle: 'Bối cảnh',
    title: 'Bối cảnh sau ngày độc lập',
    intro: 'Độc lập vừa giành được, đất nước đứng trước nhiều nguy cơ.',
    slides: [
      {
        number: '01',
        title: 'Tổng quan chủ đề',
        lead: 'Xây dựng và bảo vệ chính quyền cách mạng (1945–1946)',
        points: [
          'Phạm vi: từ sau ngày 2/9/1945 đến khi cuộc kháng chiến toàn quốc bùng nổ ngày 19/12/1946; tập trung vào mục I.1 của giáo trình.',
          'Hai nhiệm vụ gắn bó: xây dựng chính quyền và giải quyết khủng hoảng đời sống; bảo vệ chính quyền trước nguy cơ tái xâm lược và chống phá.',
          'Luận điểm: “Kháng chiến, kiến quốc” kết hợp củng cố nội lực, tập hợp đoàn kết và sách lược đối ngoại linh hoạt để giữ nền độc lập.'
        ],
        highlightLabel: 'Phạm vi trình bày',
        highlight: 'Từ sau ngày 2/9/1945 đến khi cuộc kháng chiến toàn quốc bùng nổ ngày 19/12/1946.',
        conclusion: '“Kháng chiến, kiến quốc” gắn xây dựng nội lực với bảo vệ chính quyền.',
        source: textbookSource
      },
      {
        number: '02',
        title: 'Độc lập vừa giành được, đất nước đứng trước nhiều nguy cơ',
        lead: 'Thuận lợi ban đầu đan xen với khủng hoảng và sức ép quân sự.',
        points: [
          'Thuận lợi: nước Việt Nam Dân chủ Cộng hòa ra đời; nhân dân trở thành người làm chủ; chính quyền cách mạng được tổ chức từ trung ương đến địa phương.',
          'Khủng hoảng xã hội: nạn đói 1944–1945 làm khoảng 2 triệu người chết; khoảng 95% dân số mù chữ; sản xuất đình đốn, một nửa ruộng đất bị bỏ hoang, ngân khố gần như trống rỗng.',
          'Sức ép quân sự: hơn 200.000 quân Trung Hoa Dân quốc ở phía bắc vĩ tuyến 16; khoảng 60.000 quân Nhật còn ở Việt Nam; quân Anh–Ấn vào miền Nam.',
          'Nguy cơ xâm lược: ngày 23/9/1945, Pháp đánh chiếm Sài Gòn–Chợ Lớn; quân Anh–Ấn và các đơn vị Nhật hỗ trợ Pháp. Nhà nước mới chưa được nước lớn nào công nhận.'
        ],
        conclusion: 'Chính quyền phải đồng thời đáp ứng nhu cầu sống còn của nhân dân, xây dựng bộ máy và chống nguy cơ bị lật đổ, tái xâm lược.',
        source: textbookSource
      }
    ]
  },
  {
    id: 'chang-2',
    number: '02',
    shortTitle: 'Đường lối',
    title: 'Chủ trương “Kháng chiến, kiến quốc”',
    intro: 'Củng cố chính quyền, cải thiện đời sống và bảo vệ độc lập trong cùng một đường lối.',
    slides: [
      {
        number: '03',
        title: 'Chủ trương “Kháng chiến, kiến quốc”',
        lead: 'Giữ vững độc lập bằng cách củng cố chính quyền, đoàn kết và tạo nội lực.',
        points: [
          'Ngày 3/9/1945: Chính phủ lâm thời nêu ba nhiệm vụ cấp bách: chống nạn đói, chống nạn dốt và chống ngoại xâm.',
          'Ngày 25/11/1945: Ban Chấp hành Trung ương Đảng ban hành Chỉ thị “Kháng chiến, kiến quốc”; xác định thực dân Pháp là kẻ thù chính lúc này.',
          'Phương châm: “Dân tộc trên hết, Tổ quốc trên hết”; củng cố chính quyền, chống Pháp, bài trừ nội phản và cải thiện đời sống nhân dân.',
          'Sách lược: đoàn kết rộng rãi, thêm bạn bớt thù, tránh cùng lúc đối đầu nhiều lực lượng; kiên định mục tiêu độc lập dân tộc.'
        ],
        conclusion: '“Kiến quốc” tạo nền tảng xã hội và vật chất cho “kháng chiến”; hai nhiệm vụ hỗ trợ nhau trong cùng một chiến lược.',
        source: textbookSource
      },
      {
        number: '04',
        title: 'Củng cố nền tảng chính trị – pháp lý của chính quyền',
        lead: 'Mở rộng sự tham gia của nhân dân, đồng thời xử lý sức ép chính trị.',
        photo: {
          src: coalitionGovernmentPhoto,
          alt: 'Chính phủ Liên hiệp Việt Nam Dân chủ Cộng hòa ra mắt Quốc hội ngày 2/3/1946',
          caption: 'Chính phủ Liên hiệp ra mắt Quốc hội, ngày 2/3/1946.',
          sourceName: 'Musée Annam',
          sourceUrl: coalitionGovernmentSourceUrl,
          licenseLabel: 'CC BY-SA 4.0 · ảnh không chỉnh sửa',
          licenseUrl: ccBySaLicenseUrl,
          fit: 'contain'
        },
        points: [
          'Tổng tuyển cử ngày 6/1/1946: hơn 89% cử tri tham gia, bầu 333 đại biểu vào Quốc hội khóa I.',
          'Sau tổng tuyển cử, bổ sung 70 ghế Quốc hội không qua bầu cử cho một số đảng viên Việt Quốc, Việt Cách; có thể phân tích đây là một nhượng bộ chính trị nhằm giảm đối đầu và mở rộng khối đoàn kết, không phải kết quả lá phiếu.',
          'Thiết chế nhà nước: Quốc hội họp phiên đầu ngày 2/3/1946, kiện toàn Chính phủ chính thức; Hiến pháp đầu tiên được thông qua ngày 9/11/1946.',
          'Tổ chức và bảo vệ: củng cố chính quyền địa phương; đến cuối năm 1946 có hơn 80.000 bộ đội chính quy, lực lượng công an được tổ chức đến cấp huyện và hàng vạn dân quân tự vệ.'
        ],
        conclusion: 'Bầu cử và Hiến pháp đặt nền tảng chính trị – pháp lý; việc dành ghế là một nhượng bộ có tính toán trong tương quan lực lượng phức tạp.',
        source: textbookSource
      },
      {
        number: '05',
        title: 'Khắc phục nạn đói, nạn dốt và khó khăn tài chính',
        lead: 'Củng cố chính quyền bắt đầu từ việc đáp ứng nhu cầu thiết yếu.',
        points: [
          'Chống đói: đẩy mạnh tăng gia, tiết kiệm, cứu tế và khôi phục nông nghiệp; nạn đói cơ bản được đẩy lùi vào đầu năm 1946.',
          'Huy động nguồn lực: phát động “Tuần lễ vàng”, “Quỹ Độc lập”; xây dựng lại ngân khố và phát hành giấy bạc Việt Nam.',
          'Giảm gánh nặng: bãi bỏ thuế thân và một số thứ thuế vô lý; giảm tô 25% để hỗ trợ người dân và nông nghiệp.',
          'Chống mù chữ: phong trào Bình dân học vụ lan rộng; đến cuối năm 1946 có hơn 2,5 triệu người biết đọc, biết viết.'
        ],
        conclusion: 'Các chính sách xã hội vừa xử lý khủng hoảng trước mắt, vừa tạo sự gắn bó giữa chính quyền với nhân dân.',
        source: textbookSource
      }
    ]
  },
  {
    id: 'chang-3',
    number: '03',
    shortTitle: 'Bảo vệ',
    title: 'Bảo vệ chính quyền',
    intro: 'Từ ứng phó nhiều sức ép đến toàn quốc kháng chiến; rút kinh nghiệm và liên hệ hiện nay.',
    slides: [
      {
        number: '06',
        title: 'Ứng phó với Pháp và quân Trung Hoa Dân quốc',
        lead: 'Mềm dẻo về sách lược, kiên định về mục tiêu độc lập.',
        points: [
          'Ở Nam Bộ: kháng chiến chống Pháp bắt đầu sau cuộc tiến công ngày 23/9/1945; miền Bắc chi viện sức người, sức của cho chiến trường.',
          'Bước ngoặt tháng 2–3/1946: Hiệp ước Hoa–Pháp ngày 28/2 làm xuất hiện nguy cơ quân Pháp ra Bắc thay quân Tưởng; ngày 3/3, Chỉ thị “Tình hình và chủ trương” xác định cách ứng phó.',
          'Hiệp định Sơ bộ 6/3: Pháp công nhận Việt Nam là quốc gia tự do có chính phủ, nghị viện, tài chính và quân đội riêng, trong Liên bang Đông Dương thuộc khối Liên hiệp Pháp; 15.000 quân Pháp ra Bắc thay quân Tưởng và sẽ rút dần trong 5 năm.',
          '“Hòa để tiến” ngày 9/3: chủ trương tranh thủ thời gian, tiếp tục chuẩn bị kháng chiến; không chấm dứt kháng chiến ở Nam Bộ hay từ bỏ mục tiêu độc lập.'
        ],
        conclusion: 'Hiệp định Sơ bộ giúp giảm sức ép trước mắt, nhưng các điều khoản và tương quan lực lượng cho thấy chủ quyền vẫn còn bị đe dọa.',
        source: textbookSource
      },
      {
        number: '07',
        title: 'Từ hòa hoãn có nguyên tắc đến toàn quốc kháng chiến',
        lead: 'Duy trì nỗ lực hòa bình trong khi bảo vệ an ninh và chuẩn bị tự vệ.',
        photo: {
          src: dongXuanPhoto,
          alt: 'Tổ tự vệ chợ Đồng Xuân tại Hà Nội vào mùa đông năm 1946',
          caption: 'Tổ tự vệ chợ Đồng Xuân, mùa đông năm 1946.',
          sourceName: 'Musée Annam',
          sourceUrl: dongXuanSourceUrl,
          licenseLabel: 'CC BY-SA 4.0 · ảnh không chỉnh sửa',
          licenseUrl: ccBySaLicenseUrl,
          fit: 'contain'
        },
        points: [
          'Vụ Ôn Như Hầu, tháng 7/1946: chính quyền phát hiện và ngăn chặn kế hoạch đảo chính dự kiến ngày 14/7 của một số tổ chức Đại Việt–Quốc dân đảng có sự hậu thuẫn của Pháp; không đồng nhất toàn bộ lực lượng đối lập với nhóm tham gia âm mưu.',
          'Tạm ước 14/9/1946: được ký sau khi đàm phán Fontainebleau thất bại, với thiện chí hòa bình và để bảo đảm phái đoàn Việt Nam rời Pháp an toàn; hai bên đình chỉ chiến sự ở Nam Bộ, tiếp tục đàm phán, đồng thời có thêm nhượng bộ kinh tế, văn hóa.',
          'Leo thang tháng 12: ngày 16–17/12, Pháp đánh chiếm trụ sở Bộ Tài chính và Bộ Giao thông công chính, pháo kích khu Yên Ninh – Hàng Bún gây thảm sát; ngày 18/12 gửi ba tối hậu thư đòi giải giáp, giải tán tự vệ và độc quyền kiểm soát an ninh Hà Nội.',
          'Mốc chuyển sang kháng chiến: 12/12 có Chỉ thị “Toàn dân kháng chiến”; 18/12, Hội nghị Ban Thường vụ Trung ương mở rộng quyết định phát động; 19/12, Hồ Chí Minh ra Lời kêu gọi; từ 20 giờ cùng ngày, chiến đấu bắt đầu.'
        ],
        conclusion: 'Kháng chiến toàn quốc bùng nổ khi các nỗ lực hòa bình không còn bảo đảm được độc lập và an toàn của chính quyền.',
        source: textbookSource
      },
      {
        number: '08',
        title: 'Kết quả, kinh nghiệm và ý nghĩa thực tiễn',
        lead: 'Phân biệt bài học lịch sử với dữ liệu và điều kiện hiện nay.',
        points: [
          'Kết quả đến cuối năm 1946: chính quyền được giữ vững; âm mưu lật đổ bị làm thất bại, bước tiến của Pháp ở Nam Bộ bị ngăn chặn; Quốc hội, Chính phủ chính thức và Hiến pháp được hình thành, tạo thời gian xây dựng thực lực.',
          'Kinh nghiệm trong giáo trình: tự lực tự cường; dựa vào sức dân, phát huy đại đoàn kết và xây dựng thực lực cách mạng; lợi dụng mâu thuẫn trong hàng ngũ đối phương; kiên định mục tiêu, linh hoạt sách lược.',
          'Cách liên hệ: số việc làm và thu nhập bình quân chưa phản ánh đầy đủ độ ổn định, chất lượng việc làm và chênh lệch cơ hội; dùng số liệu để đặt câu hỏi về sinh kế, không suy ra quan hệ nhân quả với bài học 1945–1946.'
        ],
        metrics: [
          { value: '52,7', unit: 'triệu người', label: 'Có việc làm' },
          { value: '9,1', unit: 'triệu đồng/tháng', label: 'Thu nhập bình quân' },
          { value: '32,4', unit: 'triệu người', label: 'Lao động phi chính thức (61,5% số người có việc làm)' },
          { value: '1,53%', label: 'Tỷ lệ thiếu việc làm trong độ tuổi lao động' }
        ],
        metricNote: 'Số liệu 9 tháng năm 2026. Đây là dữ liệu về bối cảnh hiện nay, không phải kết quả nhân quả của các bài học lịch sử.',
        conclusion: 'Vận dụng bài học lịch sử cần đặt trong bối cảnh hiện nay và đánh giá bằng các chỉ báo phù hợp về đời sống người dân.',
        source: `${textbookSource} ${statisticsSource}`,
        sourceUrl: 'https://www.nso.gov.vn/tin-tuc-thong-ke/2026/10/thong-cao-bao-chi-ve-tinh-hinh-lao-dong-viec-lam-quy-iii-va-9-thang-nam-2026/',
        sourceLinkText: 'Mở thông cáo của Cục Thống kê'
      }
    ]
  }
];
