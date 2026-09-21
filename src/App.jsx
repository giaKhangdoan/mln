import { lazy, Suspense, useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  ChevronDown,
  RotateCcw,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Send,
  LockKeyhole,
  UnlockKeyhole
} from 'lucide-react';
import VietnamFlagTick from './components/VietnamFlagTick';
import MeaningMap from './components/MeaningMap';

const VietnamFlag3D = lazy(() => import('./components/VietnamFlag3D'));


// ===== HỆ THỐNG DỮ LIỆU HỌC THUẬT: HCM202 • SPST • C3-02 =====
const chaptersData = {
  intro: {
    chapterNum: "Phần 1",
    title: "Lý luận và phân tích",
    desc: "Ba giá trị độc lập, tự do và hạnh phúc liên hệ với nhau trong một lập luận thống nhất: độc lập tạo điều kiện chính trị để nhân dân tự quyết; tự do thể hiện nền độc lập trong quyền làm chủ; hạnh phúc đưa thành quả ấy về đời sống cụ thể của con người.",
    traps: [
      { title: "Độc lập là tiền đề chính trị", desc: "Trong bối cảnh thuộc địa, giành độc lập và quyền tự quyết là nhiệm vụ trước tiên. Độc lập bao hàm chủ quyền, thống nhất, toàn vẹn lãnh thổ và nền độc lập thật sự, hoàn toàn." },
      { title: "Không có quan hệ nhân quả tự động", desc: "Độc lập không tự động làm xuất hiện mọi thành quả xã hội. Nhà nước và nhân dân phải tiếp tục xây dựng dân chủ, kinh tế, văn hóa và các điều kiện sống để thành quả độc lập đi vào thực tế." },
      { title: "Nhân dân là trung tâm của lập luận", desc: "Giá trị của nền độc lập được xem xét qua khả năng bảo đảm quyền làm chủ, tự do và cải thiện đời sống của nhân dân; nhân dân vừa là chủ thể vừa là người thụ hưởng thành quả." }
    ],
    historicalSchools: [
      {
        school: "Độc lập là nhiệm vụ trước tiên của dân tộc thuộc địa",
        sourceTag: "Hồ Chí Minh Toàn tập • Tập 15, tr.131; Giáo trình 2019, tr.42",
        date: "Bối cảnh kháng chiến chống Mỹ",
        quote: "“Không có gì quý hơn độc lập, tự do.”",
        context: "Độc lập và quyền tự quyết là nhiệm vụ trước tiên của dân tộc bị đặt dưới ách thống trị thực dân.",
        analysis: "Ở tầng chính trị, độc lập bao hàm chủ quyền, quyền tự quyết, thống nhất và toàn vẹn lãnh thổ; đó phải là nền độc lập thật sự, hoàn toàn.",
        inference: "Độc lập tạo cơ sở để nhân dân trở thành chủ thể của đất nước và tự tổ chức đời sống chính trị, kinh tế, văn hóa."
      },
      {
        school: "Độc lập gắn với tự do và hạnh phúc của nhân dân",
        sourceTag: "Hồ Chí Minh Toàn tập • Tập 4, tr.64; Giáo trình 2019, tr.43",
        date: "Sau Cách mạng Tháng Tám",
        quote: "“Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì.”",
        context: "Câu nói đặt nhiệm vụ làm cho thành quả độc lập trở thành quyền lợi thực tế của dân bên cạnh việc giữ vững nền độc lập.",
        analysis: "Không có độc lập thì thiếu cơ sở chính trị để nhân dân làm chủ; có độc lập rồi vẫn phải tiếp tục tạo điều kiện để người dân được tự do, sống ấm no và phát triển.",
        inference: "Độc lập là tiền đề cần thiết; quyền làm chủ và đời sống của nhân dân là nội dung mà nền độc lập ấy phải phục vụ."
      },
      {
        school: "Quan hệ với chủ nghĩa xã hội trong Chương III",
        sourceTag: "Giáo trình 2019, tr.51–58",
        date: "Mục 1.5",
        quote: "Độc lập là tiền đề; tự do là nội dung xã hội của nền độc lập; hạnh phúc là thước đo ở đời sống con người.",
        context: "Chương III chuyển từ cách mạng giải phóng dân tộc sang tư tưởng về chủ nghĩa xã hội và xây dựng chủ nghĩa xã hội ở Việt Nam. --> Cách chuyển này làm rõ rằng giành chính quyền và giữ chủ quyền mới mở ra khả năng tiếp tục xây dựng một xã hội nhằm nâng cao đời sống nhân dân.",
        analysis: "Giành chính quyền và giữ chủ quyền mở ra khả năng tiếp tục xây dựng một xã hội nhằm nâng cao đời sống nhân dân; quá trình này gắn với dân chủ, việc làm, đời sống ấm no, tự do và hạnh phúc."
      },
      {
        school: "Nhân dân là chủ thể và vai trò lãnh đạo của Đảng",
        sourceTag: "Giáo trình 2019, tr.55–58; Hồ Chí Minh Toàn tập, Tập 15, tr.391",
        date: "Mục 1.6",
        quote: "Nhân dân vừa là chủ thể của sự nghiệp cách mạng, vừa là người mà thành quả cách mạng phải phục vụ.",
        context: "Quá trình xây dựng chủ nghĩa xã hội là công trình tập thể của nhân dân dưới sự lãnh đạo của Đảng Cộng sản.",
        analysis: "Trong các mục tiêu chính trị, kinh tế, văn hóa và quan hệ xã hội, nhân dân giữ vị trí làm chủ, tham gia xây dựng xã hội và thụ hưởng những thành quả của công cuộc ấy."
      }
    ]
  },
  theory: {
    chapterNum: "Phần 2",
    title: "Khung khái niệm và ba tầng mục tiêu",
    principles: [
      { title: "01. Độc lập", aspect: "Chủ quyền • Quyền tự quyết", desc: "Độc lập giải quyết sự lệ thuộc về chính trị, bảo đảm chủ quyền, thống nhất và toàn vẹn lãnh thổ, đồng thời tạo khả năng tự lựa chọn con đường phát triển.", source: "Giáo trình Tư tưởng Hồ Chí Minh 2019, tr.42–44; Hồ Chí Minh Toàn tập, Tập 15, tr.131" },
      { title: "02. Tự do", aspect: "Dân chủ • Quyền làm chủ", desc: "Tự do gắn với dân chủ, quyền và lợi ích của nhân dân, cùng các điều kiện xã hội để con người tham gia, làm chủ và phát triển.", source: "Giáo trình 2019, tr.56; Hồ Chí Minh Toàn tập, Tập 7, tr.434; Tập 13, tr.10" },
      { title: "03. Hạnh phúc", aspect: "Đời sống • Phát triển", desc: "Hạnh phúc có nội dung vật chất và tinh thần: mức sống, học hành, việc làm, sức khỏe, khả năng tham gia và phát triển. Ăn, mặc, ở, học hành là những phương diện thiết thực, không phải toàn bộ định nghĩa duy nhất.", source: "Hồ Chí Minh Toàn tập, Tập 4, tr.175 và 187; Giáo trình 2019, tr.43" }
    ],
    dialecticsSteps: [
      { step: "A", name: "Tầng chính trị: Độc lập", desc: "Dân tộc có quyền tự quyết định vận mệnh của mình hay không? Độc lập là tiền đề cần thiết, nhưng không tự động làm xuất hiện mọi thành quả xã hội." },
      { step: "B", name: "Tầng xã hội: Tự do", desc: "Trong đất nước đã độc lập, nhân dân có thực sự làm chủ hay không? Quyền tự quyết của quốc gia cần được hiện thực hóa trong dân chủ và quyền làm chủ của nhân dân." },
      { step: "C", name: "Tầng con người: Hạnh phúc", desc: "Thành quả cách mạng đến với đời sống mỗi người thế nào? Hạnh phúc là mục tiêu để độc lập và tự do hướng tới, được xem xét qua những điều kiện sống cụ thể." }
    ]
  },
  practice: {
    chapterNum: "Phần 3",
    title: "Meaning Map",
    forms: [
      { step: "01 / Tầng chính trị", name: "Độc lập", desc: "Câu hỏi trung tâm: Dân tộc có quyền tự quyết định vận mệnh của mình hay không? Bằng chứng cần tập trung vào chủ quyền, độc lập thực chất, thống nhất và toàn vẹn lãnh thổ." },
      { step: "02 / Tầng xã hội", name: "Tự do", desc: "Câu hỏi trung tâm: Trong đất nước đã độc lập, nhân dân có thực sự làm chủ hay không? Phân tích dân chủ, quyền và lợi ích của nhân dân, cùng điều kiện tham gia xã hội." },
      { step: "03 / Tầng con người", name: "Hạnh phúc", desc: "Câu hỏi trung tâm: Đời sống mỗi người được cải thiện thế nào? Đặt cạnh nhau các chỉ báo về ăn, mặc, ở, học hành, việc làm, sức khỏe và phát triển." }
    ],
    roles: [
      { title: "Nhân dân là chủ thể", desc: "Nhân dân tham gia xây dựng xã hội, làm chủ trong đời sống chính trị và thụ hưởng những thành quả của công cuộc xây dựng đất nước." },
      { title: "Thực tiễn không thay thế lý luận", desc: "Một sự kiện văn hóa hay một con số kinh tế chỉ minh họa một phương diện. Không được dùng chúng để thay thế cho việc giải thích khái niệm và chứng minh bằng nguồn lý luận." },
      { title: "Đọc dữ kiện trong đúng phạm vi", desc: "Phân biệt rõ dữ kiện, diễn giải và giới hạn. Không suy ra hạnh phúc của toàn xã hội từ một concert, một sự kiện cộng đồng hoặc một chỉ số thu nhập." }
    ]
  },
  digital: {
    chapterNum: "Phần 4",
    title: "Liên hệ thực tiễn và giới hạn diễn giải",
    desc: "Thực tiễn làm bật câu hỏi lý luận.",
    process: [
      { phase: "Sự kiện 1", title: "A80 và ký ức về độc lập", subtitle: "Ý thức quốc gia và lịch sử giành độc lập", date: "02/09/2025 • 06:30 • Báo Điện tử Chính phủ", reality: "Lễ diễu binh, diễu hành kỷ niệm 80 năm Cách mạng Tháng Tám thành công và Quốc khánh 2/9 bắt đầu lúc 6 giờ 30 tại Quảng trường Ba Đình, gợi lại lịch sử giành độc lập và sự ra đời của nhà nước Việt Nam độc lập.", boundary: "A80 minh họa ký ức lịch sử và ý thức quốc gia về độc lập; không thể dùng riêng sự kiện này để kết luận về hạnh phúc của toàn bộ nhân dân." },
      { phase: "Sự kiện 2", title: "Tổ quốc trong tim", subtitle: "Độc lập trong đời sống văn hóa", date: "10/08/2025 • Báo Nhân Dân", reality: "Chương trình nghệ thuật chính luận tại Sân vận động Quốc gia Mỹ Đình thu hút hơn 50.000 khán giả trực tiếp và hàng triệu người theo dõi qua truyền thông.", boundary: "Chương trình cho thấy ký ức lịch sử được truyền tải qua không gian văn hóa và sự tham gia của công chúng; niềm tự hào tại concert không phải bằng chứng trực tiếp rằng mục tiêu hạnh phúc đã được thực hiện." },
      { phase: "Sự kiện 3", title: "Hạnh phúc và điều kiện sống hiện nay", subtitle: "Một chỉ báo vật chất cần đọc đúng phạm vi", date: "Tháng 01/2026 • Cục Thống kê", reality: "Theo thông cáo tình hình kinh tế – xã hội năm 2025, thu nhập bình quân của lao động đạt khoảng 8,4 triệu đồng một tháng, tăng 8,9% so với năm trước.", boundary: "Đây là số đo đối với lao động, không phải thu nhập bình quân của toàn bộ dân cư hay chỉ số hạnh phúc. Cần đặt cùng dữ liệu về học hành, sức khỏe, mức sống và an sinh." }
    ],
    comparison: {
      headers: ["Tiêu chí kiểm soát", "Cách đọc sai lệch / Suy diễn quá mức", "Cách đọc có kiểm soát"],
      rows: [
        ["Dữ kiện", "Biến một sự kiện văn hóa thành bằng chứng đại diện cho hạnh phúc toàn xã hội", "Ghi nhận đúng sự kiện và phạm vi mà nguồn cho phép"],
        ["Diễn giải", "Khẳng định một chỉ số thu nhập hoặc niềm tự hào tập thể đã đo được hạnh phúc", "Xem đó là một phương diện hoặc chỉ báo cần đặt trong hệ thống dữ liệu rộng hơn"],
        ["Giới hạn", "Dùng sự tán thành của số đông để kiểm tra đúng sai", "Phân biệt đồng thuận chủ quan với điều kiện đời sống và thực tiễn khách quan"],
        ["Vai trò học thuật", "Lấy dẫn chứng thời sự thay thế cho việc chứng minh lý luận", "Dùng thực tiễn làm bật câu hỏi, rồi quay về khái niệm và nguồn giáo trình"]
      ]
    }
  },
  truth: {
    chapterNum: "Khái niệm",
    title: "4 khái niệm cốt lõi trên Meaning Map",
    desc: "Bốn node trung tâm giúp người xem ghi nhớ lập luận từ độc lập đến tự do, hạnh phúc và vai trò của nhân dân.",
    properties: [
      { name: "Độc Lập Dân Tộc", role: "Tầng chính trị", desc: "Quyền tự quyết, chủ quyền, thống nhất và toàn vẹn lãnh thổ. Độc lập là tiền đề chính trị để dân tộc trở thành chủ thể của vận mệnh quốc gia." },
      { name: "Tự Do Nhân Dân", role: "Tầng xã hội", desc: "Quyền làm chủ được hiện thực hóa trong dân chủ, quyền và lợi ích của nhân dân, cùng các điều kiện xã hội để con người tham gia và phát triển." },
      { name: "Hạnh Phúc", role: "Tầng con người", desc: "Mục tiêu đưa thành quả độc lập và tự do về đời sống cụ thể: mức sống, học hành, việc làm, sức khỏe, ăn, mặc, ở và khả năng phát triển." },
      { name: "Nhân Dân", role: "Chủ thể và người thụ hưởng", desc: "Nhân dân vừa là chủ thể của sự nghiệp cách mạng, vừa là người mà thành quả cách mạng phải phục vụ; đây là trung tâm để kiểm tra ý nghĩa của ba giá trị." }
    ]
  }
};

const docxQuizQuestions = [
  {
    id: 1,
    category: "Tính khách quan",
    question: "Đặc tính nào khẳng định nội dung của chân lý không phụ thuộc vào con người, loài người, lợi ích hay sự quy ước của đám đông?",
    options: [
      { key: "A", text: "Tính cụ thể" },
      { key: "B", text: "Tính khách quan" },
      { key: "C", text: "Tính tuyệt đối" },
      { key: "D", text: "Tính tương đối" }
    ],
    correct: "B",
    explain: "Tính khách quan khẳng định chân lý không phụ thuộc vào con người, loài người hay sự quy ước của số đông."
  },
  {
    id: 2,
    category: "Thực tiễn và chân lý",
    question: "Điền từ còn thiếu: “Vấn đề tìm hiểu xem tư duy của con người có thể đạt tới chân lý khách quan không, hoàn toàn không phải là một vấn đề lý luận mà là...”?",
    options: [
      { key: "A", text: "Một vấn đề thực tiễn" },
      { key: "B", text: "Một sự đồng thuận của số đông" },
      { key: "C", text: "Sự cảm nhận chủ quan" },
      { key: "D", text: "Lợi ích trước mắt" }
    ],
    correct: "A",
    explain: "C. Mác dùng câu này để khẳng định thực tiễn là nơi kiểm tra khả năng đạt tới chân lý khách quan."
  },
  {
    id: 3,
    category: "Độc lập – Tự do – Hạnh phúc",
    question: "Theo nội dung thuyết trình, mối liên hệ giữa ba giá trị được trình bày như thế nào?",
    options: [
      { key: "A", text: "Độc lập tự động tạo ra mọi thành quả xã hội" },
      { key: "B", text: "Độc lập là tiền đề; tự do là quyền làm chủ; hạnh phúc là mục tiêu ở đời sống con người" },
      { key: "C", text: "Hạnh phúc chỉ là cảm xúc trong các sự kiện văn hóa" },
      { key: "D", text: "Tự do tách rời khỏi dân chủ và quyền lợi của nhân dân" }
    ],
    correct: "B",
    explain: "Ba giá trị tạo thành một lập luận thống nhất nhưng không phải lịch trình nhân quả cứng nhắc: độc lập tạo tiền đề chính trị, tự do thể hiện quyền làm chủ và hạnh phúc đưa thành quả về đời sống."
  },
  {
    id: 4,
    category: "Con đường nhận thức",
    question: "V.I. Lênin khái quát con đường biện chứng của sự nhận thức chân lý theo trình tự nào?",
    options: [
      { key: "A", text: "Từ tư duy trừu tượng đến thực tiễn, rồi quay lại trực quan sinh động" },
      { key: "B", text: "Từ nhận thức cảm tính đến sự tung hô của số đông" },
      { key: "C", text: "Từ trực quan sinh động đến thực tiễn, bỏ qua tư duy trừu tượng" },
      { key: "D", text: "Từ trực quan sinh động đến tư duy trừu tượng, và từ tư duy trừu tượng đến thực tiễn" }
    ],
    correct: "D",
    explain: "Đây là con đường biện chứng của sự nhận thức chân lý: từ trực quan sinh động đến tư duy trừu tượng, rồi từ tư duy trừu tượng đến thực tiễn."
  },
  {
    id: 5,
    category: "Tính cụ thể của chân lý",
    question: "Triết học Mác – Lênin khẳng định: “Không có chân lý trừu tượng, chung chung, chân lý luôn là...”?",
    options: [
      { key: "A", text: "Số đông" },
      { key: "B", text: "Cụ thể" },
      { key: "C", text: "Bất biến" },
      { key: "D", text: "Lợi ích" }
    ],
    correct: "B",
    explain: "Chân lý luôn gắn với những điều kiện không gian, thời gian và hoàn cảnh lịch sử cụ thể."
  }
];

void docxQuizQuestions;

const quizQuestions = [
  {
    id: 1,
    category: "Bối cảnh lịch sử",
    question: "Câu nói “...nếu nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì” xuất hiện trong văn bản nào của Hồ Chí Minh?",
    options: [
      { key: "A", text: "Tuyên ngôn Độc lập (02-09-1945)" },
      { key: "B", text: "Thư gửi Ủy ban nhân dân các kỳ, tỉnh, huyện và làng (17-10-1945, Tập 4, tr.64)" },
      { key: "C", text: "Lời kêu gọi toàn quốc kháng chiến (19-12-1946)" },
      { key: "D", text: "Diễn văn bế mạc kỳ họp thứ nhất Quốc hội khóa I (1946)" }
    ],
    correct: "B",
    explain: "Trích trong Thư gửi Ủy ban nhân dân các kỳ, tỉnh, huyện và làng ngày 17-10-1945, in trong Hồ Chí Minh Toàn tập, Tập 4, tr.64."
  },
  {
    id: 2,
    category: "Khung lý luận",
    question: "Luận điểm “Độc lập dân tộc phải gắn liền tự do, hạnh phúc của nhân dân” ở trang 43 của tài liệu tham khảo là gì?",
    options: [
      { key: "A", text: "Câu trích nguyên văn lời nói của Chủ tịch Hồ Chí Minh trong kháng chiến" },
      { key: "B", text: "Tiêu đề khung luận điểm trong Giáo trình Tư tưởng Hồ Chí Minh (Bộ GD&ĐT, 2019)" },
      { key: "C", text: "Trích đoạn lời nói đầu của Hiến pháp năm 1946" },
      { key: "D", text: "Khẩu hiệu tuyên truyền của Mặt trận Việt Minh" }
    ],
    correct: "B",
    explain: "Đây là tiêu đề khung luận điểm do ban biên soạn Giáo trình năm 2019 khái quát hóa, không phải câu trích nguyên văn của Chủ tịch Hồ Chí Minh."
  },
  {
    id: 3,
    category: "Khung lý luận",
    question: "Trong sơ đồ Meaning Map của nhóm, tại sao “Nhân dân” được đặt ở vị trí trung tâm tham chiếu?",
    options: [
      { key: "A", text: "Vì nhân dân được bổ sung làm giá trị thứ tư vào khẩu hiệu" },
      { key: "B", text: "Vì nhân dân là trung tâm tham chiếu để hỏi: Độc lập cho ai, tự do cho ai, hạnh phúc cho ai?" },
      { key: "C", text: "Vì bố cục mỹ thuật đòi hỏi phải có 4 góc đối xứng nhau" },
      { key: "D", text: "Vì nhân dân thay thế hoàn toàn cho khái niệm độc lập chính trị" }
    ],
    correct: "B",
    explain: "Nhân dân không phải giá trị thứ tư; nhân dân là trung tâm tham chiếu để kiểm tra ý nghĩa thực chất của ba giá trị."
  },
  {
    id: 4,
    category: "Phương pháp luận",
    question: "Khi sử dụng văn bản 1946 (Tập 4, tr.175) nói về “ăn, mặc, ở, học hành”, vì sao nhóm gắn dấu sao (*) cho khái niệm Hạnh phúc?",
    options: [
      { key: "A", text: "Để khẳng định 4 điều kiện này là định nghĩa đầy đủ, duy nhất của hạnh phúc" },
      { key: "B", text: "Để nhắc nhở đây là một phương diện đời sống thực tiễn cụ thể, không phải toàn bộ định nghĩa" },
      { key: "C", text: "Để báo hiệu rằng trích dẫn này chưa được kiểm chứng trong tài liệu gốc" },
      { key: "D", text: "Để chỉ ra rằng khái niệm hạnh phúc không có giá trị học thuật" }
    ],
    correct: "B",
    explain: "Ăn, mặc, ở, học hành là những phương diện đời sống cụ thể; dấu sao giúp tránh đồng nhất chúng với toàn bộ định nghĩa hạnh phúc."
  },
  {
    id: 5,
    category: "Vấn đề phản biện",
    question: "Nếu một quốc gia đã có độc lập chính trị nhưng một bộ phận nhân dân chưa được bảo đảm tự do và đời sống, bản đồ lập luận trả lời thế nào?",
    options: [
      { key: "A", text: "Phủ nhận hoàn toàn nền độc lập chính trị của quốc gia đó" },
      { key: "B", text: "Độc lập chính trị là nền tảng cần bảo vệ, nhưng ý nghĩa đầy đủ cần được tiếp tục hoàn thiện trong gắn kết với tự do và đời sống nhân dân" },
      { key: "C", text: "Tuyên bố độc lập và hạnh phúc là hai phạm trù mâu thuẫn triệt tiêu lẫn nhau" },
      { key: "D", text: "Cho rằng chỉ cần độc lập chính trị là tự động có được tự do và hạnh phúc" }
    ],
    correct: "B",
    explain: "Không phủ nhận nền độc lập chính trị, nhưng cũng không đồng nhất độc lập với trạng thái hình thức khép kín; ý nghĩa đầy đủ nằm ở đời sống nhân dân."
  }
];

const chatbotFAQ = [
  { q: "Luận điểm xuyên suốt của bài là gì?", a: "Độc lập tạo điều kiện chính trị để nhân dân tự quyết; tự do thể hiện nền độc lập trong quyền làm chủ; hạnh phúc đưa thành quả ấy về đời sống cụ thể của con người." },
  { q: "Vì sao độc lập không tự động tạo ra hạnh phúc?", a: "Độc lập là tiền đề chính trị. Nhà nước và nhân dân vẫn phải tiếp tục xây dựng dân chủ, kinh tế, văn hóa và các điều kiện sống để thành quả độc lập đi vào thực tế." },
  { q: "Nhân dân có vai trò gì trong lập luận?", a: "Nhân dân vừa là chủ thể của sự nghiệp cách mạng, vừa là người mà thành quả cách mạng phải phục vụ. Quyền làm chủ và đời sống của nhân dân là cách kiểm tra ý nghĩa của ba giá trị." },
  { q: "A80 hoặc một concert có chứng minh hạnh phúc không?", a: "Không thể suy ra như vậy. Các sự kiện này minh họa ký ức lịch sử và đời sống văn hóa; muốn phân tích hạnh phúc cần kết hợp dữ liệu về mức sống, học hành, y tế, việc làm và an sinh." }
];

export default function App() {
  const [activeSection, setActiveSection] = useState('intro');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Expanded timelines state
  const [expandedTimeline, setExpandedTimeline] = useState({
    1: true,
    2: false,
    3: false,
    4: false
  });

  // Flip Flashcard states
  const [flippedCard, setFlippedCard] = useState(null);

  // Quiz states
  const [answers, setAnswers] = useState({ 1: null, 2: null, 3: null, 4: null, 5: null });
  const [isQuizUnlocked, setIsQuizUnlocked] = useState(false);
  const [quizPassword, setQuizPassword] = useState('');
  const [quizPasswordError, setQuizPasswordError] = useState(false);

  // Poll states for question 6
  const [pollVote, setPollVote] = useState(null);
  const [pollResults, setPollResults] = useState({ A: 138, B: 156, C: 92 });

  const unlockQuiz = (event) => {
    event.preventDefault();
    const now = new Date();
    const hours = new Set([
      now.getHours(),
      ((now.getHours() + 11) % 12) + 1
    ]);
    const minutes = [now.getMinutes(), (now.getMinutes() + 59) % 60, (now.getMinutes() + 1) % 60];
    const acceptedPasswords = [...hours].flatMap((hourValue) => minutes.flatMap((minuteValue) => {
      const hour = String(hourValue).padStart(2, '0');
      const minute = String(minuteValue).padStart(2, '0');
      const timeDigits = `${hour}${minute}`;
      return [
        timeDigits.split('').reverse().join(''),
        `${minute}${hour}`,
        `${hour.split('').reverse().join('')}${minute.split('').reverse().join('')}`
      ];
    }));
    const isCorrect = acceptedPasswords.includes(quizPassword);

    setQuizPasswordError(!isCorrect);
    if (isCorrect) {
      setIsQuizUnlocked(true);
      setQuizPassword('');
    }
  };

  // Toggle practical lessons flashcards states
  const [flippedLessons, setFlippedLessons] = useState({});

  const toggleLessonFlip = (idx) => {
    setFlippedLessons(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  // AI Chatbot state
  const [chatMessages, setChatMessages] = useState([
    {
      sender: 'bot',
      text: 'Kính chào bạn. Tôi là Trợ lý AI học phần HCM202, hỗ trợ đối chiếu nội dung thuyết trình về mối liên hệ giữa độc lập, tự do và hạnh phúc trong tư tưởng Hồ Chí Minh. Bạn có thể chọn câu hỏi mẫu bên trái hoặc nhập nội dung cần giải đáp.'
    }
  ]);
  const [userMsg, setUserMsg] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-quad',
      offset: 40,
    });
  }, []);

  // Monitor scroll for progress and active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((scrollY / totalScroll) * 100);
      }

      const sections = ['intro', 'theory', 'practice', 'digital', 'flashcard', 'quiz', 'chatbot', 'sources'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (chatMessages.length > 1 || isTyping) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [chatMessages, isTyping]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 72;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  // Bot logic
  const handleSendMessage = (textToSend = '') => {
    const text = textToSend || userMsg;
    if (!text.trim() || isTyping) return;

    setChatMessages(prev => [...prev, { sender: 'user', text }]);
    if (!textToSend) setUserMsg('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = "Trong phạm vi nội dung thuyết trình, độc lập tạo điều kiện chính trị để nhân dân tự quyết; tự do thể hiện nền độc lập trong quyền làm chủ; hạnh phúc đưa thành quả ấy về đời sống cụ thể của con người. Bạn có thể hỏi thêm về ba tầng phân tích, nguồn trích dẫn hoặc các dẫn chứng thực tiễn.";

      const lowerText = text.toLowerCase();
      if (lowerText.includes('luận điểm') || lowerText.includes('trung tâm') || lowerText.includes('ba giá trị')) {
        reply = "Luận điểm xuyên suốt: độc lập dân tộc tạo điều kiện chính trị để nhân dân tự quyết; tự do thể hiện nền độc lập trong quyền làm chủ; hạnh phúc là mục tiêu ở đời sống con người. Giá trị của nền độc lập được xem xét qua khả năng bảo đảm tự do và cải thiện đời sống của nhân dân.";
      } else if (lowerText.includes('tr.64') || lowerText.includes('nghĩa lý gì')) {
        reply = "Hồ Chí Minh viết: ‘Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì.’ Câu nói đặt yêu cầu làm cho thành quả độc lập trở thành quyền lợi thực tế của nhân dân, nhưng không phủ nhận vai trò nền tảng của chủ quyền quốc gia.";
      } else if (lowerText.includes('tr.175') || lowerText.includes('tr.187') || lowerText.includes('ăn') || lowerText.includes('mặc') || lowerText.includes('học hành')) {
        reply = "Hạnh phúc được liên hệ với các nhu cầu thiết thực như ăn, mặc, ở, học hành, cùng mức sống, việc làm, sức khỏe, khả năng tham gia và phát triển. Đây là những phương diện cụ thể, không phải một định nghĩa duy nhất hay một chỉ số đơn lẻ.";
      } else if (lowerText.includes('ba tầng') || lowerText.includes('tầng chính trị') || lowerText.includes('tầng xã hội') || lowerText.includes('tầng con người')) {
        reply = "Ba tầng phân tích gồm: chính trị — độc lập, quyền tự quyết và chủ quyền; xã hội — tự do, dân chủ và quyền làm chủ; con người — hạnh phúc, đời sống và phát triển. Ba tầng liên hệ với nhau nhưng không phải một chuỗi nhân quả tự động.";
      } else if (lowerText.includes('nhân dân') || lowerText.includes('đảng')) {
        reply = "Nhân dân vừa là chủ thể của sự nghiệp cách mạng, vừa là người mà thành quả cách mạng phải phục vụ. Theo nội dung Chương III, quá trình xây dựng chủ nghĩa xã hội gắn với sự tham gia, quyền làm chủ của nhân dân và sự lãnh đạo của Đảng Cộng sản Việt Nam.";
      } else if (lowerText.includes('a80') || lowerText.includes('tổ quốc trong tim') || lowerText.includes('concert') || lowerText.includes('thu nhập')) {
        reply = "A80 minh họa ký ức lịch sử và ý thức quốc gia về độc lập. Chương trình ‘Tổ quốc trong tim’ minh họa đời sống văn hóa và sự tham gia của công chúng. Thu nhập bình quân của lao động là một chỉ báo vật chất, không phải thu nhập của toàn dân hay chỉ số hạnh phúc; các dẫn chứng này không thể thay thế phân tích lý luận.";
      } else if (lowerText.includes('thực tiễn') || lowerText.includes('kiểm chứng') || lowerText.includes('đúng sai')) {
        reply = "Thực tiễn làm bật câu hỏi lý luận, nhưng không tự mình trả lời trọn vẹn câu hỏi về tự do hay hạnh phúc. Cần phân biệt dữ kiện, diễn giải và giới hạn; không suy ra kết luận toàn xã hội từ một sự kiện văn hóa hoặc một chỉ số kinh tế.";
      }

      setChatMessages(prev => [...prev, { sender: 'bot', text: reply }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] flex flex-col text-slate-800 antialiased selection:bg-red-800 selection:text-white">

      {/* Top Scroll Indicator */}
      <div
        className="fixed top-0 left-0 h-0.5 bg-red-800 z-50 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* ================= HERO SECTION (Editorial Academic Heritage Style) ================= */}
      <header className="relative min-h-screen w-full bg-heritage-red-animated text-white flex flex-col justify-between items-center px-4 sm:px-6 py-10 sm:py-14 overflow-hidden border-b border-red-950">
        
        {/* Animated Ambient Light & Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-600/25 via-transparent to-black/50 pointer-events-none" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(185,28,28,0.18)_0%,transparent_75%)] pointer-events-none" />

        {/* Ambient Shimmering Stars across Hero Sky */}
        <div className="absolute top-12 left-1/4 text-amber-300/40 text-xs animate-sparkle-1 select-none pointer-events-none">✦</div>
        <div className="absolute top-24 right-1/4 text-amber-200/40 text-sm animate-sparkle-3 select-none pointer-events-none">✦</div>
        <div className="absolute bottom-24 left-1/3 text-amber-400/30 text-xs animate-sparkle-2 select-none pointer-events-none">★</div>
        <div className="absolute bottom-28 right-1/3 text-red-300/40 text-xs animate-sparkle-4 select-none pointer-events-none">✦</div>
        <div className="absolute top-1/3 left-16 text-yellow-300/30 text-sm animate-sparkle-2 select-none pointer-events-none">✨</div>
        <div className="absolute bottom-1/3 right-20 text-yellow-200/30 text-sm animate-sparkle-1 select-none pointer-events-none">✨</div>

        {/* LEFT SIDE: Authentic Historical Portrait of President Ho Chi Minh (Rõ nét ngũ quan, phóng to) */}
        <div className="absolute left-2 lg:left-6 bottom-0 top-0 w-72 md:w-84 lg:w-[400px] xl:w-[460px] pointer-events-none select-none z-10 hidden md:flex items-center justify-start">
          <div className="relative w-full flex flex-col items-center">
            {/* Subtle radiant golden-red atmospheric halo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-red-600/25 to-amber-400/15 rounded-3xl blur-3xl animate-pulse" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.45)] border border-amber-400/35 backdrop-blur-sm max-h-[440px] lg:max-h-[490px] w-auto">
              <img
                src="/assets/bac_ho.jpg"
                alt="Chủ tịch Hồ Chí Minh (Chân dung lịch sử 1946 - Rõ ngũ quan)"
                className="w-full h-full object-cover object-top max-h-[440px] lg:max-h-[490px] filter contrast-105 brightness-105 animate-portrait"
                style={{
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0.2) 92%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0.2) 92%, transparent 100%)'
                }}
              />
              {/* Subtle sheen highlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-950/20 via-transparent to-amber-300/10 pointer-events-none" />
            </div>

          </div>
        </div>

        {/* RIGHT SIDE: Real-Time 3D Fluttering National Flag of Vietnam (Không dùng cột, to hơn, chìm 1 chút) */}
        <div className="absolute right-2 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 pointer-events-none select-none z-10 hidden md:block w-80 lg:w-[460px] xl:w-[520px]">
          <div className="relative">
            {/* Shimmering Ambient Glow behind Flag */}
            <div className="absolute -inset-10 bg-gradient-to-tr from-amber-500/25 via-red-600/30 to-amber-400/20 rounded-full blur-3xl animate-pulse" />

            {/* Sparkling Golden & Red Stars surrounding the Flag */}
            <div className="absolute -top-8 -left-6 text-amber-300 text-2xl font-bold animate-sparkle-1 select-none">✦</div>
            <div className="absolute -bottom-6 -left-4 text-amber-400 text-xl font-bold animate-sparkle-2 select-none">★</div>
            <div className="absolute -top-6 right-6 text-amber-200 text-lg font-bold animate-sparkle-3 select-none">✦</div>
            <div className="absolute -bottom-8 right-10 text-amber-300 text-2xl font-bold animate-sparkle-4 select-none">★</div>
            <div className="absolute top-1/2 -left-10 text-red-400 text-base font-bold animate-sparkle-2 select-none">✦</div>
            <div className="absolute top-1/4 -right-6 text-amber-300 text-lg font-bold animate-sparkle-1 select-none">✦</div>
            <div className="absolute -top-2 left-1/3 text-yellow-200 text-sm font-bold animate-sparkle-3 select-none">✨</div>
            <div className="absolute -bottom-4 left-1/2 text-yellow-300 text-base font-bold animate-sparkle-4 select-none">✨</div>

            {/* 3D Real-Time Animated Flag Canvas with Sunken Blend (Hiệu ứng chìm hòa quyện) */}
            <div 
              className="relative h-72 sm:h-80 lg:h-[380px] w-full"
              style={{
                maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 62%, rgba(0,0,0,0.7) 82%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 62%, rgba(0,0,0,0.7) 82%, transparent 100%)'
              }}
            >
              <Suspense fallback={<div className="h-full w-full" aria-label="Đang tải mô phỏng cờ 3D" />}>
                <VietnamFlag3D />
              </Suspense>
            </div>

          </div>
        </div>

        {/* Top Spacer & Institutional Academic Header */}
        <div className="relative z-20 max-w-4xl mx-auto text-center pt-2">
          <div className="space-y-1 text-xs text-amber-200/90 font-medium tracking-wide">
            <p>TRƯỜNG ĐẠI HỌC FPT • BỘ MÔN LÝ LUẬN CHÍNH TRỊ VÀ KỸ NĂNG MỀM</p>
            <p className="text-red-200/80">HỌC PHẦN HCM202 • NHÓM HCM / SPST / C3-02 • FALL 2026</p>
          </div>
        </div>

        {/* Central Core Content Block */}
        <div className="relative z-20 max-w-3xl xl:max-w-4xl mx-auto text-center space-y-6 my-auto py-4">
          
          {/* Central National Star Emblem */}
          <div className="inline-flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-red-900/70 border-2 border-amber-400/40 flex items-center justify-center shadow-lg backdrop-blur-sm">
              <span className="text-3xl text-amber-300 leading-none select-none drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]">★</span>
            </div>
          </div>

          {/* Title with Generous Leading & Zero Overlap */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-normal text-white leading-normal md:leading-relaxed drop-shadow-md">
              <span className="inline-block whitespace-nowrap">ĐỘC LẬP</span>
              <span className="text-amber-400 mx-2 sm:mx-3 inline-block select-none">·</span>
              <span className="inline-block whitespace-nowrap">TỰ DO</span>
              <span className="text-amber-400 mx-2 sm:mx-3 inline-block select-none">·</span>
              <span className="inline-block whitespace-nowrap text-amber-200">HẠNH PHÚC</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-red-100/95 font-light max-w-2xl mx-auto leading-relaxed">
              Bản đồ lập luận về ý nghĩa của độc lập trong mối liên hệ với tự do, hạnh phúc và đời sống nhân dân trong tư tưởng Hồ Chí Minh
            </p>
          </div>

          {/* Foundational Quote */}
          <div className="max-w-2xl mx-auto pt-1">
            <blockquote className="font-editorial text-lg sm:text-xl text-red-100 italic leading-relaxed">
              “Không có gì quý hơn độc lập, tự do.”
            </blockquote>
            <p className="text-xs text-amber-300/90 mt-2 font-medium">
              — Hồ Chí Minh, Toàn tập, Tập 15, tr.131; Giáo trình Tư tưởng Hồ Chí Minh, 2019, tr.42
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => scrollToSection('intro')}
              className="px-6 py-3 bg-white text-red-900 rounded-xl font-semibold text-sm hover:bg-amber-50 hover:shadow-lg transition-all shadow-sm inline-flex items-center gap-2 cursor-pointer"
            >
              Khám phá Lộ trình Lập luận
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Scroll Prompt (leads seamlessly down into navigation) */}
        <div
          className="relative z-20 pb-2 text-center select-none cursor-pointer group"
          onClick={() => scrollToSection('intro')}
        >
          <p className="text-[11px] text-amber-200/70 group-hover:text-amber-200 font-medium tracking-wider uppercase mb-1 transition-colors">
            Cuộn để khám phá nội dung
          </p>
          <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/10 border border-white/15 text-amber-300 group-hover:bg-white/20 animate-bounce transition-all">
            ↓
          </div>
        </div>

      </header>

      {/* ================= STICKY NAVIGATION BAR ================= */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14 overflow-x-auto scrollbar-none gap-2">
            
            <div
              className="font-bold text-sm text-red-800 select-none flex items-center gap-1.5 cursor-pointer flex-shrink-0 mr-2"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <span className="text-amber-600 text-base">★</span>
              <span>HCM202 • C3-02</span>
            </div>

            <div className="flex items-center gap-1 flex-shrink-0">
              {[
                { id: 'intro', label: 'Lộ trình' },
                { id: 'theory', label: 'Khung lý luận' },
                { id: 'practice', label: 'Meaning Map' },
                { id: 'digital', label: 'Dẫn chứng thực tiễn' },
                { id: 'flashcard', label: 'Khái niệm' },
                { id: 'quiz', label: 'Trắc nghiệm' },
                { id: 'chatbot', label: 'Trợ lý AI' },
                { id: 'sources', label: 'Tài liệu tham khảo' },
              ].map((tab) => {
                const isActive = activeSection === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => scrollToSection(tab.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-red-850 bg-red-800 text-white'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-28 w-full">

        {/* ================= PHẦN 1: LỘ TRÌNH LẬP LUẬN ================= */}
        <section id="intro" className="scroll-mt-20 space-y-10">

          <div className="text-center space-y-2.5 max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-red-50 text-red-800 text-xs font-semibold">
              {chaptersData.intro.chapterNum}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {chaptersData.intro.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {chaptersData.intro.desc}
            </p>
          </div>

          {/* 4 Bước phát triển lộ trình */}
          <div className="space-y-4">
            <div className="border-b border-slate-200 pb-3">
              <h3 className="text-lg font-bold text-slate-900">4 Mốc phát triển lập luận của đề tài</h3>
              <p className="text-slate-500 text-xs">Nhấp vào từng thẻ để đối chiếu ngữ cảnh văn bản và phân tích sâu</p>
            </div>

            <div className="space-y-3">
              {chaptersData.intro.historicalSchools.map((item, idx) => {
                const isExpanded = expandedTimeline[idx + 1];
                return (
                  <div
                    key={idx}
                    className={`bg-white border rounded-2xl overflow-hidden transition-all duration-200 cursor-pointer ${
                      isExpanded ? 'border-red-300 shadow-sm' : 'border-slate-200/80 hover:border-slate-300'
                    }`}
                    onClick={() => setExpandedTimeline(prev => ({ ...prev, [idx + 1]: !prev[idx + 1] }))}
                  >
                    <div className="p-5 flex items-start justify-between gap-4">
                      <div className="space-y-1.5 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-xs font-semibold">
                            {item.sourceTag}
                          </span>
                          <span className="text-xs text-slate-400">{item.date}</span>
                        </div>
                        <h4 className="text-base font-bold text-slate-900 leading-snug">{item.school}</h4>
                        <p className="font-editorial text-sm sm:text-base text-red-900 italic bg-red-50/50 p-2.5 rounded-lg border border-red-100">
                          {item.quote}
                        </p>
                      </div>
                      <div className="flex items-center gap-2.5 flex-shrink-0 mt-1">
                        <VietnamFlagTick checked={isExpanded} />
                        <ChevronDown
                          className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180 text-red-800' : ''
                          }`}
                        />
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="px-5 pb-5 pt-2 border-t border-slate-100 bg-slate-50/60 space-y-3 text-sm text-slate-700 leading-relaxed">
                        <div>
                          <strong className="text-slate-900">Theo trích dẫn: </strong>
                          {item.context}
                        </div>
                        <div>
                          <strong className="text-red-900">Theo nhóm: </strong>
                          {item.analysis}
                        </div>
                        {item.inference && (
                          <div className="flex items-start gap-2 text-red-900 font-semibold">
                            <span aria-hidden="true" className="text-red-800">→</span>
                            <span>{item.inference}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Thesis Statement Box */}
          <div className="bg-white border border-red-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-3">
            <span className="text-xs font-bold text-red-800 uppercase">Luận đề cốt lõi</span>
            <p className="font-editorial text-lg sm:text-xl text-slate-900 leading-relaxed italic">
              “Chúng tôi không xem Độc lập - Tự do - Hạnh phúc là một chuỗi tiến trình tuyến tính rời rạc, mà là một hệ giá trị có điều kiện ràng buộc biện chứng: Độc lập chỉ thực sự có giá trị khi mang lại tự do và hạnh phúc thực tế cho nhân dân; ngược lại, tự do và hạnh phúc của nhân dân chính là gốc rễ bền vững nhất để bảo vệ nền độc lập quốc gia”
            </p>
            <p className="text-xs text-slate-500">
              — Phân tích của nhóm HCM / SPST / C3-02, dựa trên Giáo trình 2019, tr.43 và Hồ Chí Minh Toàn tập, Tập 4, tr.64.
            </p>
          </div>

          {/* 3 Nguyên tắc nền tảng - đặt ở cuối phần lý luận và phân tích */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {chaptersData.intro.traps.map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm space-y-2 card-subtle">
                <span className="text-xs font-bold text-red-800 uppercase">Nguyên tắc {idx + 1}</span>
                <h3 className="text-base font-bold text-slate-900 leading-snug">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </section>

        {/* ================= PHẦN 2: KHUNG KHÁI NIỆM & HAI PHƯƠNG DIỆN ================= */}
        <section id="theory" className="scroll-mt-20 space-y-10">

          <div className="text-center space-y-2.5 max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-red-50 text-red-800 text-xs font-semibold">
              {chaptersData.theory.chapterNum}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {chaptersData.theory.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {chaptersData.theory.desc}
            </p>
          </div>

          {/* 3 Trụ cột khái niệm */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {chaptersData.theory.principles.map((pr, idx) => (
              <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm space-y-3 card-subtle flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-500 uppercase">{pr.aspect}</span>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">{pr.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{pr.desc}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium">
                  Xuất xứ: <span className="text-slate-800 font-semibold">{pr.source}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Trích dẫn và khung luận điểm từ Chương III */}
          <div className="bg-gradient-to-r from-red-900 via-red-950 to-red-900 border-2 border-red-700/60 text-white rounded-2xl p-6 sm:p-8 space-y-3 shadow-xl relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 text-white/5 text-9xl font-black select-none pointer-events-none">★</div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-800/80 border border-amber-400/40 text-xs font-bold text-amber-300 uppercase tracking-wide">
              <span>★</span> Khung luận điểm nền tảng
            </div>
            <blockquote className="font-editorial text-xl sm:text-2xl italic text-amber-100 font-medium leading-relaxed drop-shadow-sm">
              “Độc lập dân tộc phải gắn liền tự do, hạnh phúc của nhân dân.”
            </blockquote>
            <p className="text-xs text-red-200/90 font-medium">
              — Giáo trình Tư tưởng Hồ Chí Minh (Bộ GD&ĐT, 2019), Chương III, tr.43
            </p>
          </div>

          {/* Phân biệt Phương diện A & B */}
          <div className="space-y-4">
            <div className="border-b border-slate-200 pb-3">
              <h3 className="text-lg font-bold text-slate-900">Ba Tầng Mục Tiêu</h3>
              <p className="text-slate-500 text-xs">Phân tích làm rõ giữa điều kiện chính trị và ý nghĩa trải nghiệm trong đời sống</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {chaptersData.theory.dialecticsSteps.map((item, idx) => (
                <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-red-800 font-bold flex items-center justify-center text-xs">
                    {item.step}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 leading-snug">{item.name}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* ================= PHẦN 3: BẢN ĐỒ Ý NGHĨA (MEANING MAP) ================= */}
        <section id="practice" className="scroll-mt-20 space-y-10">

          <div className="text-center space-y-2.5 max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-red-50 text-red-800 text-xs font-semibold">
              {chaptersData.practice.chapterNum}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {chaptersData.practice.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {chaptersData.practice.desc}
            </p>
          </div>

          <MeaningMap />

          {/* Sơ đồ cũ được giữ tạm để bảo toàn bố cục lịch sử, nhưng không hiển thị */}
          <div className="hidden bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
            <div className="text-center space-y-1">
              <h3 className="text-lg font-bold text-slate-900">Sơ đồ Lập luận: Nhân Dân là Trung Tâm Tham Chiếu</h3>
              <p className="text-xs text-slate-500">Các đường nối thể hiện mối quan hệ gắn bó hữu cơ, không phải quan hệ nhân quả một chiều</p>
            </div>

            {/* Conceptual Node Diagram with Animated SVG Connecting Lines */}
            <div className="relative max-w-2xl mx-auto py-8 px-2 sm:px-4">
              
              {/* SVG Connecting Lines Overlay (Tablet & Desktop) */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block z-0"
                viewBox="0 0 680 340"
                preserveAspectRatio="none"
              >
                {/* Line 1: Độc Lập <---> Nhân Dân (Horizontal) */}
                <line
                  x1="180"
                  y1="68"
                  x2="245"
                  y2="68"
                  stroke="#b91c1c"
                  strokeWidth="2.5"
                  className="animate-flow-dash"
                />
                <rect x="188" y="55" width="50" height="18" rx="4" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1" />
                <text x="213" y="67" textAnchor="middle" fill="#991b1b" fontSize="8.5" fontWeight="bold">Phục vụ</text>

                {/* Line 2: Nhân Dân <---> Tự Do (Horizontal) */}
                <line
                  x1="435"
                  y1="68"
                  x2="500"
                  y2="68"
                  stroke="#b91c1c"
                  strokeWidth="2.5"
                  className="animate-flow-dash"
                />
                <rect x="442" y="55" width="52" height="18" rx="4" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1" />
                <text x="468" y="67" textAnchor="middle" fill="#991b1b" fontSize="8.5" fontWeight="bold">Làm chủ</text>

                {/* Line 3: Nhân Dân <---> Hạnh Phúc (Vertical) */}
                <line
                  x1="340"
                  y1="120"
                  x2="340"
                  y2="225"
                  stroke="#b91c1c"
                  strokeWidth="2.5"
                  className="animate-flow-dash"
                />
                <rect x="295" y="162" width="90" height="20" rx="5" fill="#fffbeb" stroke="#fcd34d" strokeWidth="1" />
                <text x="340" y="175" textAnchor="middle" fill="#92400e" fontSize="9" fontWeight="bold">Đích đến tối hậu</text>

                {/* Curve 4: Độc Lập <---> Hạnh Phúc (Arc: T4 tr.64) */}
                <path
                  d="M 95 115 C 95 210, 185 265, 230 270"
                  fill="none"
                  stroke="#d97706"
                  strokeWidth="2"
                  className="animate-flow-dash opacity-75"
                />
                <rect x="105" y="195" width="56" height="18" rx="4" fill="#fffbeb" stroke="#fde68a" strokeWidth="1" />
                <text x="133" y="207" textAnchor="middle" fill="#b45309" fontSize="8.5" fontWeight="bold">T4 tr.64</text>

                {/* Curve 5: Tự Do <---> Hạnh Phúc (Arc: Hữu cơ) */}
                <path
                  d="M 585 115 C 585 210, 495 265, 450 270"
                  fill="none"
                  stroke="#d97706"
                  strokeWidth="2"
                  className="animate-flow-dash opacity-75"
                />
                <rect x="520" y="195" width="56" height="18" rx="4" fill="#fffbeb" stroke="#fde68a" strokeWidth="1" />
                <text x="548" y="207" textAnchor="middle" fill="#b45309" fontSize="8.5" fontWeight="bold">Hữu cơ</text>

                {/* Junction Dots */}
                <circle cx="180" cy="68" r="4" fill="#b91c1c" />
                <circle cx="245" cy="68" r="4" fill="#b91c1c" />
                <circle cx="435" cy="68" r="4" fill="#b91c1c" />
                <circle cx="500" cy="68" r="4" fill="#b91c1c" />
                <circle cx="340" cy="120" r="4" fill="#b91c1c" />
                <circle cx="340" cy="225" r="4" fill="#b91c1c" />
              </svg>

              {/* Row 1: 3 Nodes */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0 relative z-10">
                
                {/* Node 1: Độc Lập */}
                <div className="w-full sm:w-44 bg-white border-2 border-slate-200 hover:border-red-300 rounded-2xl p-4 text-center space-y-1 shadow-sm transition-all">
                  <span className="text-[11px] font-bold text-red-800 uppercase tracking-wide">Chính trị</span>
                  <h4 className="text-sm font-bold text-slate-900">ĐỘC LẬP</h4>
                  <p className="text-xs text-slate-500">Điều kiện tiên quyết</p>
                </div>

                {/* Central Reference Node: Nhân Dân */}
                <div className="w-full sm:w-48 bg-red-800 text-white rounded-2xl p-5 text-center space-y-1 shadow-lg border-2 border-amber-400/40 transform sm:-translate-y-1">
                  <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wide">Trung tâm tham chiếu</span>
                  <h4 className="text-base font-bold text-white tracking-wide">NHÂN DÂN</h4>
                  <p className="text-xs text-red-100">Đích đến tối hậu</p>
                </div>

                {/* Node 2: Tự Do */}
                <div className="w-full sm:w-44 bg-white border-2 border-slate-200 hover:border-red-300 rounded-2xl p-4 text-center space-y-1 shadow-sm transition-all">
                  <span className="text-[11px] font-bold text-red-800 uppercase tracking-wide">Con người</span>
                  <h4 className="text-sm font-bold text-slate-900">TỰ DO</h4>
                  <p className="text-xs text-slate-500">Quyền làm chủ thực chất</p>
                </div>

              </div>

              {/* Mobile Indicator */}
              <div className="sm:hidden text-center py-2 text-xs font-semibold text-red-700">
                ↕ Mối liên hệ gắn bó hữu cơ ↕
              </div>

              {/* Node 3 (Bottom): Hạnh Phúc */}
              <div className="relative z-10 mt-6 sm:mt-16 flex justify-center">
                <div className="w-full sm:w-56 bg-white border-2 border-slate-200 hover:border-amber-400 rounded-2xl p-4 text-center space-y-1 shadow-sm transition-all">
                  <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wide">Đời sống cụ thể</span>
                  <h4 className="text-sm font-bold text-slate-900">HẠNH PHÚC*</h4>
                  <p className="text-xs text-slate-500">Ăn · mặc · ở · học hành</p>
                </div>
              </div>
            </div>

            {/* 3 Lưu ý khi đọc bản đồ */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              {chaptersData.practice.roles.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* ================= PHẦN 4: DẪN CHỨNG THỰC TIỄN & ĐỌC KIỂM SOÁT ================= */}
        <section id="digital" className="scroll-mt-20 space-y-10">

          <div className="text-center space-y-2.5 max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-red-50 text-red-800 text-xs font-semibold">
              {chaptersData.digital.chapterNum}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {chaptersData.digital.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {chaptersData.digital.desc}
            </p>
          </div>

          {/* 3 Sự kiện thực tiễn (Interactive 3D Flip Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {chaptersData.digital.process.map((item, idx) => {
              const isFlipped = !!flippedLessons[idx];
              return (
                <div
                  key={idx}
                  onClick={() => toggleLessonFlip(idx)}
                  className={`flip-card h-[390px] w-full cursor-pointer select-none group transition-transform duration-200 hover:-translate-y-1 ${
                    isFlipped ? 'flipped' : ''
                  }`}
                >
                  <div
                    className={`flip-card-inner relative w-full h-full rounded-2xl border border-slate-200/80 shadow-sm ${
                      isFlipped ? 'flipped' : ''
                    }`}
                  >
                    {/* Front Side */}
                    <div className="flip-card-front absolute inset-0 bg-white rounded-2xl p-6 flex flex-col justify-between">
                      <div className="space-y-2">
                        <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 text-xs font-semibold">
                          {item.phase}
                        </span>
                        <h3 className="text-lg font-bold text-slate-900 leading-snug">{item.title}</h3>
                        <p className="text-xs text-slate-500 font-medium">{item.subtitle}</p>
                      </div>

                      <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100 space-y-1">
                        <span className="text-[11px] font-bold text-slate-400 uppercase">Nguồn thông tấn</span>
                        <p className="text-xs text-slate-700 font-medium">{item.date}</p>
                      </div>

                      <div className="pt-2 text-center">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-800 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg border border-red-200/60 transition-colors">
                          <RotateCcw className="w-3.5 h-3.5" />
                          Nhấp để lật xem phân tích kiểm soát
                        </span>
                      </div>
                    </div>

                    {/* Back Side (Không để nền đen theo yêu cầu) */}
                    <div className="flip-card-back absolute inset-0 bg-[#fffdfa] border-2 border-red-200/80 rounded-2xl p-5 sm:p-6 flex flex-col justify-between text-left shadow-md">
                      <div className="space-y-3.5 overflow-y-auto pr-1">
                        <div className="border-b border-red-100 pb-2 flex items-center justify-between">
                          <span className="text-xs text-red-800 font-bold uppercase tracking-wider">{item.phase}</span>
                          <span className="text-[11px] text-slate-500 font-medium">{item.date}</span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 leading-snug">{item.title}</h4>

                        <div className="space-y-1 bg-slate-50 p-3 rounded-xl border border-slate-200/70">
                          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">Dữ kiện:</p>
                          <p className="text-xs text-slate-700 leading-relaxed font-normal">{item.reality}</p>
                        </div>

                        <div className="space-y-1 bg-amber-50/80 p-3 rounded-xl border border-amber-200/70">
                          <p className="text-[11px] font-bold text-amber-900 uppercase tracking-wide">Ý nghĩa:</p>
                          <p className="text-xs text-amber-950/90 leading-relaxed font-normal">{item.boundary}</p>
                        </div>
                      </div>

                      <div className="pt-3 text-center border-t border-slate-100">
                        <span className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-red-800 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg border border-red-200/60 transition-colors w-full">
                          <RotateCcw className="w-3.5 h-3.5" />
                          Nhấp để lật lại mặt trước
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>



        </section>

        {/* ================= PHẦN 5: 4 KHÁI NIỆM CỐT LÕI ================= */}
        <section id="flashcard" className="scroll-mt-20 space-y-10">

          <div className="text-center space-y-2.5 max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-red-50 text-red-800 text-xs font-semibold">
              {chaptersData.truth.chapterNum}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {chaptersData.truth.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {chaptersData.truth.desc}
            </p>
          </div>

          {/* 4 Flashcards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {chaptersData.truth.properties.map((prop, idx) => {
              const isFlipped = flippedCard === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setFlippedCard(isFlipped ? null : idx)}
                  className={`flip-card h-60 w-full cursor-pointer select-none transition-transform duration-200 hover:-translate-y-1 ${
                    isFlipped ? 'flipped' : ''
                  }`}
                >
                  <div
                    className={`flip-card-inner relative w-full h-full rounded-2xl border border-slate-200/80 shadow-sm ${
                      isFlipped ? 'flipped' : ''
                    }`}
                  >
                    {/* Front */}
                    <div className="flip-card-front absolute inset-0 bg-white rounded-2xl p-5 flex flex-col justify-between text-center">
                      <div className="space-y-1 mt-2">
                        <span className="text-[11px] font-bold text-slate-400 uppercase">{prop.role}</span>
                        <h4 className="text-base font-bold text-slate-900">{prop.name}</h4>
                      </div>
                      <span className="text-xs text-red-800 font-medium">Nhấp để xem giải thích</span>
                    </div>

                    {/* Back (Không để nền đen theo yêu cầu) */}
                    <div className="flip-card-back absolute inset-0 bg-[#fffdfa] border-2 border-red-200/80 rounded-2xl p-5 flex flex-col justify-between text-left shadow-md">
                      <div className="space-y-2 overflow-y-auto pr-1">
                        <span className="text-xs font-bold text-red-800 uppercase tracking-wide">{prop.name}</span>
                        <p className="text-xs text-slate-700 leading-relaxed">{prop.desc}</p>
                      </div>
                      <span className="inline-flex items-center justify-center gap-1.5 text-xs text-red-800 font-medium bg-red-50 py-1.5 px-3 rounded-lg border border-red-100 text-center">
                        <RotateCcw className="w-3.5 h-3.5" /> Nhấp để lật lại
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </section>

        {/* ================= PHẦN 6: TRẮC NGHIỆM & PHẢN BIỆN C-C-C ================= */}
        <section id="quiz" className="scroll-mt-20 space-y-10">

          <div className="text-center space-y-2.5 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Kiểm Tra Nội Dung Bằng 5 Câu Hỏi Và 1 Khảo Sát
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Ôn lại ba tầng phân tích: độc lập ở tầng chính trị, tự do ở tầng xã hội và hạnh phúc ở tầng con người.
            </p>
          </div>

          {!isQuizUnlocked ? (
            <div className="max-w-md mx-auto w-full bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm text-center space-y-5">
              <div className="mx-auto w-12 h-12 rounded-full bg-red-50 text-red-800 flex items-center justify-center">
                <LockKeyhole className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">Nội dung đang được khóa</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Nhập mật khẩu gồm giờ và phút hiện tại theo thứ tự đảo ngược để xem 5 câu hỏi và khảo sát.
                </p>
              </div>
              <form onSubmit={unlockQuiz} className="space-y-3 text-left">
                <label htmlFor="quiz-password" className="block text-xs font-semibold text-slate-700">Mật khẩu</label>
                <div className="flex gap-2">
                  <input
                    id="quiz-password"
                    type="password"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={7}
                    value={quizPassword}
                    onChange={(event) => {
                      setQuizPassword(event.target.value.replace(/\D/g, '').slice(0, 4));
                      setQuizPasswordError(false);
                    }}
                    placeholder="4 chữ số"
                    autoComplete="off"
                    className="min-w-0 flex-1 rounded-xl border border-slate-300 px-3 py-2.5 text-sm tracking-[0.25em] outline-none focus:border-red-700 focus:ring-2 focus:ring-red-100"
                    aria-invalid={quizPasswordError}
                  />
                  <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-800 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-red-900">
                    <UnlockKeyhole className="w-4 h-4" /> Mở khóa
                  </button>
                </div>
                {quizPasswordError && (
                  <p className="text-xs text-red-700" role="alert">Mật khẩu chưa đúng </p>
                )}
              </form>
            </div>
          ) : (
            <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quizQuestions.map((qz) => {
              const selectedOpt = answers[qz.id];
              return (
                <div key={qz.id} className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4 text-left">
                  
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-slate-500 uppercase">{qz.category}</span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      Câu {qz.id}. {qz.question}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    {qz.options.map((opt) => {
                      const isSelected = selectedOpt === opt.key;
                      const isCorrect = opt.key === qz.correct;

                      let styleClass = 'border-slate-200 hover:bg-slate-50 text-slate-700';
                      if (selectedOpt) {
                        if (isSelected) {
                          styleClass = isCorrect
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-950 font-medium'
                            : 'border-red-500 bg-red-50 text-red-950 font-medium';
                        } else if (isCorrect) {
                          styleClass = 'border-emerald-300 bg-emerald-50/50 text-emerald-900';
                        }
                      }

                      return (
                        <div
                          key={opt.key}
                          onClick={() => !selectedOpt && setAnswers(prev => ({ ...prev, [qz.id]: opt.key }))}
                          className={`p-3 rounded-xl border text-xs sm:text-sm transition-all duration-200 cursor-pointer flex items-center gap-3 group ${styleClass}`}
                        >
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <span className="w-6 h-6 rounded-md bg-slate-100 text-slate-700 font-bold flex items-center justify-center text-xs">
                              {opt.key}
                            </span>
                            <VietnamFlagTick checked={isSelected} />
                          </div>
                          <span className="leading-snug flex-1">{opt.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  {selectedOpt && (
                    <div className={`p-3 rounded-xl text-xs leading-relaxed flex items-start gap-2 ${
                      selectedOpt === qz.correct ? 'bg-emerald-50 text-emerald-900' : 'bg-red-50 text-red-900'
                    }`}>
                      {selectedOpt === qz.correct ? (
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-600 mt-0.5" />
                      ) : (
                        <XCircle className="w-4 h-4 flex-shrink-0 text-red-600 mt-0.5" />
                      )}
                      <div>
                        <strong>{selectedOpt === qz.correct ? 'Chính xác.' : 'Chưa chính xác.'} </strong>
                        {qz.explain}
                      </div>
                    </div>
                  )}

                </div>
              );
            })}

            {/* Câu hỏi 6: Poll Khảo sát */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4 text-left flex flex-col justify-between">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-amber-700 uppercase">Khảo sát ý kiến tương tác</span>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  Câu 6. Dẫn chứng thực tiễn nào cần được đọc thận trọng nhất để không suy diễn quá mức về hạnh phúc?
                </h3>
              </div>

              {!pollVote ? (
                <div className="space-y-2">
                  {[
                    { key: 'A', text: 'Sự kiện A80 và ký ức về độc lập' },
                    { key: 'B', text: 'Chương trình Tổ quốc trong tim và niềm tự hào văn hóa' },
                    { key: 'C', text: 'Thu nhập bình quân của lao động và điều kiện sống' }
                  ].map((opt) => (
                    <div
                      key={opt.key}
                      onClick={() => {
                        setPollVote(opt.key);
                        setPollResults(prev => ({ ...prev, [opt.key]: prev[opt.key] + 1 }));
                      }}
                      className="p-3 rounded-xl border border-slate-200 hover:border-red-300 hover:bg-slate-50 text-xs sm:text-sm transition-all duration-200 cursor-pointer flex items-center gap-3 group"
                    >
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="w-6 h-6 rounded-md bg-slate-100 text-slate-700 font-bold flex items-center justify-center text-xs">
                          {opt.key}
                        </span>
                        <VietnamFlagTick checked={pollVote === opt.key} />
                      </div>
                      <span className="leading-snug flex-1">{opt.text}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3 pt-2">
                  {(() => {
                    const totalVotes = pollResults.A + pollResults.B + pollResults.C;
                    const getPercent = (val) => Math.round((val / totalVotes) * 100);
                    return [
                      { key: 'A', text: 'A80 và ký ức độc lập', count: pollResults.A },
                      { key: 'B', text: 'Tổ quốc trong tim', count: pollResults.B },
                      { key: 'C', text: 'Thu nhập và điều kiện sống', count: pollResults.C }
                    ].map((opt) => {
                      const pct = getPercent(opt.count);
                      return (
                        <div key={opt.key} className="space-y-1">
                          <div className="flex justify-between text-xs font-semibold text-slate-700">
                            <span>{opt.text} {pollVote === opt.key && '(Bạn đã chọn)'}</span>
                            <span>{pct}% ({opt.count})</span>
                          </div>
                          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-red-800 transition-all duration-500" style={{ width: `${pct}%` }} />
                          </div>
                        </div>
                      );
                    });
                  })()}
                  <p className="text-xs text-slate-500 italic pt-1">
                    Cảm ơn bạn đã tham gia. Mỗi dẫn chứng chỉ minh họa một phương diện và cần được đọc cùng khái niệm, phạm vi dữ liệu và nguồn lý luận tương ứng.
                  </p>
                </div>
              )}

              <div className="pt-2"></div>
            </div>
          </div>

          {/* Nút làm lại quiz */}
          {(Object.values(answers).some(a => a !== null) || pollVote !== null) && (
            <div className="text-center">
              <button
                onClick={() => {
                  setAnswers({ 1: null, 2: null, 3: null, 4: null, 5: null });
                  setPollVote(null);
                  setPollResults({ A: 138, B: 156, C: 92 });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold text-xs transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Làm lại bộ câu hỏi
              </button>
            </div>
          )}

            </>
          )}

        </section>

        {/* ================= PHẦN 7: TRỢ LÝ AI HCM202 ================= */}
        <section id="chatbot" className="scroll-mt-20 space-y-10">

          <div className="text-center space-y-2.5 max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-red-50 text-red-800 text-xs font-semibold">
              Trợ Lý AI Học Thuật
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Hỏi Đáp & Đối Chiếu Cùng AI HCM202
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Trợ lý AI hỗ trợ giải đáp nhanh về các nguồn trích dẫn, khung khái niệm và phân tích 2 phương diện của đề tài.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col md:flex-row h-[520px]">
            
            {/* Cột trái: Câu hỏi mẫu */}
            <div className="md:w-5/12 bg-slate-50 border-r border-slate-200 p-5 flex flex-col justify-between">
              <div className="space-y-3">
                <p className="text-xs font-bold text-slate-500 uppercase">Câu hỏi gợi ý</p>
                <div className="space-y-2">
                  {chatbotFAQ.map((faq, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(faq.q)}
                      disabled={isTyping}
                      className="w-full text-left p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-red-50 hover:border-red-200 text-xs font-medium text-slate-700 transition-colors"
                    >
                      {faq.q}
                    </button>
                  ))}
                </div>
              </div>
              <p className="text-[11px] text-slate-400 pt-4">Nguồn dữ liệu: Giáo trình 2019, Hồ Chí Minh Toàn tập và các nguồn thực tiễn trong tài liệu</p>
            </div>

            {/* Cột phải: Khung hội thoại */}
            <div className="md:w-7/12 flex flex-col h-full bg-[#fbfbfa]">
              
              <div className="px-5 py-3 border-b border-slate-200 bg-white flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900">HCM202 AI-Tutor</h4>
                  <p className="text-[10px] text-slate-500">Hỗ trợ học tập trực tuyến</p>
                </div>
                <span className="text-[10px] text-slate-400 font-medium">SPST • FALL 2026</span>
              </div>

              <div className="flex-1 p-5 overflow-y-auto space-y-3">
                {chatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`max-w-[90%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-red-800 text-white self-end ml-auto'
                        : 'bg-white text-slate-700 border border-slate-200/80 self-start'
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
                {isTyping && (
                  <div className="bg-white border border-slate-200 rounded-2xl px-4 py-2.5 text-xs text-slate-400 self-start animate-pulse">
                    AI đang tra cứu tài liệu nguồn...
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="p-3 bg-white border-t border-slate-200 flex gap-2"
              >
                <input
                  type="text"
                  value={userMsg}
                  onChange={(e) => setUserMsg(e.target.value)}
                  placeholder="Hỏi về ba tầng phân tích, T4 tr.64, A80, Tổ quốc trong tim..."
                  disabled={isTyping}
                  className="flex-1 px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-red-800"
                />
                <button
                  type="submit"
                  disabled={!userMsg.trim() || isTyping}
                  className="px-4 py-2 bg-red-800 text-white rounded-xl text-xs font-semibold hover:bg-red-900 disabled:opacity-50 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>

            </div>

          </div>

        </section>

        {/* ================= NGUỒN TÀI LIỆU CHÍNH THỨC ================= */}
        <section id="sources" className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 space-y-4">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
            Nguồn Tài Liệu Tham Khảo Chính Thức
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed list-disc pl-5">
            <li>
              Bộ Giáo dục và Đào tạo, Giáo trình Tư tưởng Hồ Chí Minh dành cho bậc đại học không chuyên ngành Lý luận chính trị, Hà Nội, 2019, Chương III, tr.41–68.
            </li>
            <li>
              Hồ Chí Minh, Toàn tập, Nxb Chính trị quốc gia, Hà Nội, 2011: Tập 4, tr.64, 175, 187; Tập 7, tr.434; Tập 13, tr.10; Tập 15, tr.131, 391.
            </li>
            <li>
              Báo Điện tử Chính phủ — “Chùm ảnh Cận cảnh khối diễu binh hùng hậu của lực lượng Công an tại A80”, 02/09/2025.
            </li>
            <li>
              Báo Nhân Dân — “Thư cảm ơn của Báo Nhân Dân về thành công của chương trình Tổ quốc trong tim”, 14/08/2025.
            </li>
            <li>
              Cục Thống kê — “Thông cáo báo chí tình hình kinh tế – xã hội quý IV và năm 2025”, công bố tháng 01/2026.
            </li>
          </ul>
        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-900 border-t border-slate-800 text-white py-12 px-4 sm:px-6 mt-20">
        <div className="max-w-5xl mx-auto space-y-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="space-y-1">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span className="text-amber-400">★</span>
                <span>ĐỘC LẬP · TỰ DO · HẠNH PHÚC</span>
              </h3>
              <p className="text-xs text-slate-400">
                Meaning Map / Visual Essay • Học phần HCM202 • Nhóm HCM / SPST / C3-02
              </p>
            </div>
            <p className="text-xs text-slate-500">
              Bộ môn Lý luận Chính trị và Kỹ năng mềm • Fall 2026
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-slate-400 uppercase font-bold tracking-wide">Luận điểm trung tâm của đề tài</p>
            <p className="font-editorial text-sm text-slate-300 italic leading-relaxed">
              “Độc lập dân tộc có ý nghĩa đầy đủ khi được đặt trong mối liên hệ với tự do, hạnh phúc và đời sống nhân dân. Nhân dân là trung tâm tham chiếu để xác định độc lập cho ai, tự do cho ai và hạnh phúc cho ai.”
            </p>
          </div>

          <div className="pt-4 text-center text-xs text-slate-500 border-t border-slate-800/80">
            © Fall 2026 HCM202 / SPST • Nhóm C3-02. Dự án học tập tư tưởng Hồ Chí Minh.
          </div>

        </div>
      </footer>

    </div>
  );
}
