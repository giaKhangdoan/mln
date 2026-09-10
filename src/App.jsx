import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  ChevronDown,
  RotateCcw,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Send
} from 'lucide-react';
import VietnamFlag3D from './components/VietnamFlag3D';
import VietnamFlagTick from './components/VietnamFlagTick';


// ===== HỆ THỐNG DỮ LIỆU HỌC THUẬT: HCM202 • SPST • C3-02 =====
const chaptersData = {
  intro: {
    chapterNum: "Phần 1",
    title: "Lộ trình Lập luận & Luận đề Trung tâm",
    desc: "Một nền độc lập có đủ ý nghĩa nếu người dân chưa được hưởng tự do và hạnh phúc? Nhóm không bắt đầu bằng việc đọc định nghĩa rời rạc, mà bắt đầu bằng một vấn đề cần được lý giải trong tư tưởng Hồ Chí Minh.",
    traps: [
      {
        title: "Có quan hệ nội dung",
        desc: "Ba giá trị Độc lập – Tự do – Hạnh phúc không tách rời khi đọc ý nghĩa của độc lập. Độc lập dân tộc phải gắn liền với tự do, hạnh phúc của nhân dân (Giáo trình 2019, tr.43)."
      },
      {
        title: "Không có nhân quả tự động",
        desc: "Bản đồ không phải chuỗi nhân quả tự động. Độc lập chính trị không tự động tạo ra mọi kết quả; hạnh phúc không thể quy giản thành một chỉ số định lượng đơn lẻ."
      },
      {
        title: "Quay về nguồn kiểm chứng",
        desc: "Mọi đường nối lập luận đều phải giải thích và đối chiếu được bằng văn bản gốc: Giáo trình TTHCM 2019 (tr.41–44) hoặc Hồ Chí Minh Toàn tập, Tập 4 (tr.64, 175)."
      }
    ],
    historicalSchools: [
      {
        school: "Văn bản 1945: Độc lập được hỏi bằng đời sống của dân",
        sourceTag: "Hồ Chí Minh Toàn tập • Tập 4, tr.64",
        date: "Thư ngày 17-10-1945",
        quote: "“...nếu nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì.”",
        context: "Trích từ “Thư gửi Ủy ban nhân dân các kỳ, tỉnh, huyện và làng” (17-10-1945). Vấn đề được đặt ra ở cấp độ ý nghĩa: độc lập không thể bị xem như một chủ quyền hình thức tách khỏi con người thực tế.",
        analysis: "Ý nghĩa cốt lõi: Câu hỏi không phủ nhận độc lập; câu hỏi yêu cầu làm rõ ý nghĩa của độc lập đối với nhân dân. Nhóm dùng trích đoạn này để chứng minh mối quan hệ nội dung, không suy ra thước đo định lượng cho hạnh phúc."
      },
      {
        school: "Văn bản 1946: Mục tiêu chính trị đi vào điều kiện cụ thể",
        sourceTag: "Hồ Chí Minh Toàn tập • Tập 4, tr.175",
        date: "Diễn văn ngày 10-01-1946",
        quote: "“Làm cho dân có ăn. Làm cho dân có mặc. Làm cho dân có chỗ ở. Làm cho dân có học hành.”",
        context: "Trích diễn văn ngày 10-01-1946. Từ giá trị chính trị cao cả, văn bản chỉ rõ hướng đi vào các điều kiện đời sống thiết thực của nhân dân.",
        analysis: "Ý nghĩa cốt lõi: Đời sống nhân dân là một phương diện cụ thể của mục tiêu chính trị. Nhóm gắn dấu sao (*) cho Hạnh phúc để nhắc nhở: ăn, mặc, ở, học hành là phương diện đời sống thực tế, không phải toàn bộ định nghĩa duy nhất về hạnh phúc."
      },
      {
        school: "Khung Giáo trình 2019: Độc lập dân tộc gắn liền tự do, hạnh phúc",
        sourceTag: "Giáo trình TTHCM 2019 • Chương III, tr.41–44",
        date: "Bộ GD&ĐT (2019)",
        quote: "“Độc lập dân tộc phải gắn liền với tự do, hạnh phúc của nhân dân.”",
        context: "Trang 41 và 44 xác định độc lập dân tộc là quyền thiêng liêng, bất khả xâm phạm, phải là nền độc lập thật sự, hoàn toàn và triệt để.",
        analysis: "Ý nghĩa cốt lõi: Câu chữ tại trang 43 là tiêu đề khung luận điểm do ban biên soạn Giáo trình khái quát hóa, không phải câu trích nguyên văn của Chủ tịch Hồ Chí Minh. Khung lý luận giúp giữ vững ranh giới khái niệm trong khi phân tích mối liên hệ nội dung."
      },
      {
        school: "Luận đề Trung tâm: Độc lập trong mối liên hệ với Nhân dân",
        sourceTag: "Luận đề của Nhóm HCM / SPST / C3-02",
        date: "Fall 2026",
        quote: "“Độc lập dân tộc có ý nghĩa đầy đủ khi được đặt trong mối liên hệ với tự do, hạnh phúc và đời sống nhân dân.”",
        context: "Nhóm không xếp ba giá trị thành một khẩu hiệu tuyến tính. Nhóm đề xuất một cách đọc có điều kiện và có giới hạn.",
        analysis: "Ý nghĩa cốt lõi: Độc lập dân tộc là điều kiện tiên quyết, nhưng để độc lập có ý nghĩa thực chất và trọn vẹn, phải hướng về tự do và chất lượng đời sống của nhân dân. Nhân dân là trung tâm tham chiếu tối hậu."
      }
    ]
  },
  theory: {
    chapterNum: "Phần 2",
    title: "Khung Khái Niệm & Phân Tích Hai Phương Diện",
    desc: "Ba giá trị được đọc cùng nhau — nhưng không xóa ranh giới khái niệm. Giáo trình 2019 cung cấp khung khái niệm; Tập 4 cung cấp văn bản để kiểm tra ý nghĩa trong đời sống.",
    principles: [
      {
        title: "01. Độc Lập (Điều kiện chính trị)",
        aspect: "Chính trị • Nền tảng",
        desc: "Quyền thiêng liêng, bất khả xâm phạm của các dân tộc; đồng thời phải là nền độc lập thật sự, hoàn toàn và triệt để trên mọi phương diện chủ quyền lãnh thổ và quyền tự quyết.",
        source: "Giáo trình TTHCM 2019, tr.41 và tr.44"
      },
      {
        title: "02. Tự Do (Giá trị con người)",
        aspect: "Con người • Quyền làm chủ",
        desc: "Trong câu hỏi trung tâm của nhóm, tự do được đọc như giá trị phải gắn với nhân dân — không tách khỏi câu hỏi “ai được hưởng?”. Nhân dân thoát ách nô lệ và thực sự làm chủ vận mệnh.",
        source: "Giáo trình 2019, tr.43; Hồ Chí Minh Toàn tập, T4, tr.64"
      },
      {
        title: "03. Hạnh Phúc* (Phương diện đời sống)",
        aspect: "Đời sống • Ăn, mặc, ở, học hành",
        desc: "Không thu hẹp thành cảm xúc cá nhân trừu tượng. Tập 4, tr.175 gợi một phương diện cụ thể: ăn, mặc, ở, học hành. Dấu * nhắc nhở đây là phương diện đời sống thực tiễn, không phải toàn bộ định nghĩa.",
        source: "Hồ Chí Minh Toàn tập, T4, tr.175"
      }
    ],
    dialecticsSteps: [
      {
        step: "A",
        name: "Phương diện A: Điều kiện chính trị",
        desc: "Chủ quyền quốc gia, quyền tự quyết dân tộc, toàn vẹn lãnh thổ; không đồng nhất với một cảm xúc cá nhân. Đây là nền tảng tối thượng cần được xác lập và kiên quyết bảo vệ."
      },
      {
        step: "B",
        name: "Phương diện B: Ý nghĩa trong đời sống",
        desc: "Người dân có được tự do, hạnh phúc? Các điều kiện sống thiết yếu có được quan tâm? Nền độc lập có chạm tới đời sống không? Đây là thước đọc giá trị thực chất."
      },
      {
        step: "C",
        name: "Cầu nối biện chứng của nhóm",
        desc: "Phương diện B không hề phủ định Phương diện A. Phương diện B giúp giải thích ý nghĩa chiều sâu và mục đích phụng sự của Phương diện A đối với nhân dân."
      }
    ]
  },
  practice: {
    chapterNum: "Phần 3",
    title: "Bản Đồ Ý Nghĩa (Meaning Map) & Trải Nghiệm Tương Tác",
    desc: "Sản phẩm không chỉ kể lại lý thuyết — giao diện cho phép người xem tự kiểm tra đường nối. Meaning Map biến bài thuyết trình tuyến tính thành trải nghiệm có lựa chọn, bằng chứng và phản biện.",
    forms: [
      {
        step: "01 / Khám phá",
        name: "Chạm vào từng Node",
        desc: "Người xem chọn Độc lập, Tự do hoặc Hạnh phúc. Mỗi node mở ra một lớp giải thích cô đọng, tránh việc nhồi nhét cả chương sách vào một màn hình duy nhất."
      },
      {
        step: "02 / Đối chiếu",
        name: "Mở Bằng chứng (Evidence)",
        desc: "Mỗi luận điểm đều đính kèm trích dẫn, số tập và số trang in cụ thể (T4 tr.64, T4 tr.175, GT tr.43). Phân biệt rành mạch lời văn của nguồn với phần nhóm diễn giải."
      },
      {
        step: "03 / Phản biện",
        name: "Thử thách Bẻ gãy Đường nối",
        desc: "Người xem tương tác với các câu hỏi C–C–C: Bối cảnh nào? Lý luận nào? Mâu thuẫn nào? Nếu không chứng minh được bằng nguồn, đường nối lập luận phải được xem lại."
      }
    ],
    roles: [
      {
        title: "Nhân dân: Trung tâm tham chiếu",
        desc: "Nhân dân nằm ở trung tâm sơ đồ để định vị: Độc lập phục vụ ai? Tự do hướng về ai? Hạnh phúc mang lại cho ai? Nhân dân là thước đo giá trị cao nhất."
      },
      {
        title: "Không có mũi tên nhân quả tự động",
        desc: "Các đường nối biểu thị mối quan hệ gắn bó hữu cơ do nhóm tổng hợp — tuyệt đối không vẽ mũi tên một chiều vì độc lập không tự động tạo ra hạnh phúc."
      },
      {
        title: "Chú thích dấu sao Hạnh phúc*",
        desc: "Tập 4, tr.175 cho phép nhóm đưa ăn, mặc, ở, học hành vào tầng thực tiễn; nhưng không được đồng nhất bốn điều kiện này là định nghĩa đầy đủ duy nhất của hạnh phúc."
      }
    ]
  },
  digital: {
    chapterNum: "Phần 4",
    title: "Dẫn Chứng Thực Tiễn & Đọc Có Kiểm Soát",
    desc: "Từ ý nghĩa chính trị đến cách công chúng cùng trải nghiệm hòa bình trong đời sống hiện đại. Nguyên tắc học thuật: Thực tiễn làm bật câu hỏi — không thay thế chứng minh lý luận.",
    process: [
      {
        phase: "Sự kiện 1",
        title: "A80 / Không Gian Chung",
        subtitle: "Sự tham gia cộng đồng và biểu tượng quốc gia",
        date: "02/09/2025 • VTV News",
        reality: "VTV ghi nhận hàng chục nghìn người dân từ nhiều tỉnh, thành có mặt tại các tuyến phố trung tâm Hà Nội theo dõi diễu binh, diễu hành kỷ niệm 80 năm Quốc khánh (A80).",
        boundary: "Minh họa biểu tượng độc lập có không gian tiếp nhận công cộng thời bình; không biến phóng sự thành khảo sát đại diện, không khẳng định tất cả mọi người đều có cùng mức độ cảm xúc."
      },
      {
        phase: "Sự kiện 2",
        title: "Concert Quốc Gia 80 Năm",
        subtitle: "Ba giá trị kể lại trong văn hóa đại chúng",
        date: "01/09/2025 • VTV1 THTT",
        reality: "Chương trình nghệ thuật quy mô quốc gia “80 năm Hành trình Độc lập – Tự do – Hạnh phúc” quy tụ các thế hệ nghệ sĩ, tái hiện chiều dài lịch sử dựng nước và giữ nước.",
        boundary: "Minh họa cách ba giá trị lập quốc tiếp tục là nguồn cảm hứng nghệ thuật thời bình; không đánh đồng buổi diễn với sự đồng thuận cảm xúc của toàn thể công chúng."
      },
      {
        phase: "Sự kiện 3",
        title: "Mưa Đỏ / Ký Ức Lịch Sử",
        subtitle: "Chỉ báo tiếp nhận thị trường với phim bảo vệ độc lập",
        date: "07/09/2025 • VietnamPlus / TTXVN",
        reality: "VietnamPlus/TTXVN đưa tin doanh thu phim điện ảnh “Mưa đỏ” vượt 552 tỷ đồng sau 17 ngày chiếu — kỷ lục phòng vé đối với tác phẩm đề tài chiến tranh bảo vệ Tổ quốc.",
        boundary: "Chỉ phản ánh mức độ quan tâm của thị trường và giới trẻ với ký ức lịch sử; không dùng doanh thu để đo lường nhận thức tư tưởng hay chất lượng cảm xúc từng khán giả."
      }
    ],
    comparison: {
      headers: ["Tiêu chí kiểm soát", "Cách đọc sai lệch / Suy diễn quá mức", "Cách đọc có kiểm soát của Nhóm SPST"],
      rows: [
        ["Dữ kiện (Fact)", "Biến một phóng sự thời sự thành khảo sát đại diện xã hội học", "Ghi nhận đúng điều đã diễn ra theo nguồn thông tấn chính thống (VTV, TTXVN)"],
        ["Diễn giải (Interpretation)", "Khẳng định 100% người dân cả nước đều đạt tới hạnh phúc tuyệt đối", "Chỉ ra biểu tượng độc lập và ký ức lịch sử có không gian tiếp nhận công cộng"],
        ["Giới hạn (Boundary)", "Dùng con số doanh thu 552 tỷ để đo lường giác ngộ tư tưởng", "Phân định rõ: Doanh thu phản ánh sức hút thị trường, không đo cảm xúc cá nhân"],
        ["Vai trò học thuật", "Lấy dẫn chứng thời sự thay thế cho việc chứng minh lý luận", "Tuân thủ nguyên tắc: Dữ kiện thực tiễn làm bật câu hỏi, nguồn lý luận mới trả lời"]
      ]
    }
  },
  truth: {
    chapterNum: "Khái niệm",
    title: "4 Khái Niệm Cốt Lõi Trên Meaning Map",
    desc: "Khám phá 4 node trung tâm của bản đồ ý nghĩa. Nhấp vào mỗi thẻ để lật xem cơ sở trích dẫn và giới hạn học thuật.",
    properties: [
      {
        name: "Độc Lập Dân Tộc",
        role: "Điều kiện chính trị tiên quyết",
        desc: "Quyền thiêng liêng, bất khả xâm phạm của mọi dân tộc; phải là nền độc lập thật sự, hoàn toàn và triệt để (Giáo trình 2019, tr.41, 44). Đây là tiền đề cần xác lập và bảo vệ."
      },
      {
        name: "Tự Do Nhân Dân",
        role: "Giá trị giải phóng con người",
        desc: "Tự do gắn liền với nhân dân — không tách khỏi câu hỏi “ai được hưởng tự do?”. Độc lập dân tộc phải gắn với quyền tự do và quyền làm chủ thực chất của đồng bào (T4 tr.64, GT tr.43)."
      },
      {
        name: "Hạnh Phúc*",
        role: "Phương diện đời sống cụ thể",
        desc: "Không thu hẹp thành cảm xúc trừu tượng. Tập 4, tr.175 chỉ ra phương diện cụ thể: ăn, mặc, ở, học hành. Dấu * nhắc nhở đây là phương diện đời sống thực tiễn, không phải toàn bộ định nghĩa."
      },
      {
        name: "Nhân Dân",
        role: "Trung tâm tham chiếu tối hậu",
        desc: "Nhân dân không phải giá trị thứ tư bổ sung vào khẩu hiệu; Nhân dân là trung tâm tham chiếu để hỏi: Độc lập cho ai? Tự do cho ai? Hạnh phúc cho ai?"
      }
    ]
  }
};

const quizQuestions = [
  {
    id: 1,
    category: "Bối cảnh lịch sử (Context)",
    question: "Câu nói “...nếu nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì” xuất hiện trong văn bản nào của Hồ Chí Minh?",
    options: [
      { key: "A", text: "Tuyên ngôn Độc lập (02-09-1945)" },
      { key: "B", text: "Thư gửi Ủy ban nhân dân các kỳ, tỉnh, huyện và làng (17-10-1945, Tập 4, tr.64)" },
      { key: "C", text: "Lời kêu gọi toàn quốc kháng chiến (19-12-1946)" },
      { key: "D", text: "Diễn văn bế mạc kỳ họp thứ nhất Quốc hội khóa I (1946)" }
    ],
    correct: "B",
    explain: "Trích trong “Thư gửi Ủy ban nhân dân các kỳ, tỉnh, huyện và làng” ngày 17-10-1945, in trong Hồ Chí Minh Toàn tập, Tập 4, tr.64. Câu nói đặt ra yêu cầu làm rõ ý nghĩa của độc lập trong đời sống nhân dân."
  },
  {
    id: 2,
    category: "Khung lý luận (Concept)",
    question: "Luận điểm “Độc lập dân tộc phải gắn liền với tự do, hạnh phúc của nhân dân” ở trang 43 của tài liệu tham khảo là gì?",
    options: [
      { key: "A", text: "Câu trích nguyên văn lời nói của Chủ tịch Hồ Chí Minh trong kháng chiến" },
      { key: "B", text: "Tiêu đề khung luận điểm trong Giáo trình Tư tưởng Hồ Chí Minh (Bộ GD&ĐT, 2019)" },
      { key: "C", text: "Trích đoạn lời nói đầu của Hiến pháp năm 1946" },
      { key: "D", text: "Khẩu hiệu tuyên truyền của Mặt trận Việt Minh" }
    ],
    correct: "B",
    explain: "Trang 43 là tiêu đề khung luận điểm do ban biên soạn Giáo trình Tư tưởng Hồ Chí Minh (Bộ GD&ĐT, 2019) khái quát hóa, không phải câu trích nguyên văn của Chủ tịch Hồ Chí Minh."
  },
  {
    id: 3,
    category: "Khung lý luận (Concept)",
    question: "Trong sơ đồ Meaning Map của nhóm, tại sao “Nhân dân” được đặt ở vị trí trung tâm tham chiếu?",
    options: [
      { key: "A", text: "Vì nhân dân được bổ sung làm giá trị thứ tư vào khẩu hiệu" },
      { key: "B", text: "Vì nhân dân là trung tâm tham chiếu để hỏi: Độc lập cho ai, tự do cho ai, hạnh phúc cho ai?" },
      { key: "C", text: "Vì bố cục mỹ thuật đòi hỏi phải có 4 góc đối xứng nhau" },
      { key: "D", text: "Vì nhân dân thay thế hoàn toàn cho khái niệm độc lập chính trị" }
    ],
    correct: "B",
    explain: "Nhân dân không phải giá trị thứ tư; nhân dân là trung tâm tham chiếu để đo lường ý nghĩa thực chất của ba giá trị Độc lập - Tự do - Hạnh phúc."
  },
  {
    id: 4,
    category: "Phương pháp luận (Methodology)",
    question: "Khi sử dụng văn bản 1946 (T4 tr.175) nói về “ăn, mặc, ở, học hành”, vì sao nhóm gắn dấu sao (*) cho khái niệm Hạnh phúc?",
    options: [
      { key: "A", text: "Để khẳng định 4 điều kiện này là định nghĩa đầy đủ, duy nhất của hạnh phúc" },
      { key: "B", text: "Để nhắc nhở đây là một phương diện đời sống thực tiễn cụ thể, không phải toàn bộ định nghĩa" },
      { key: "C", text: "Để báo hiệu rằng trích dẫn này chưa được kiểm chứng trong tài liệu gốc" },
      { key: "D", text: "Để chỉ ra rằng khái niệm hạnh phúc không có giá trị học thuật" }
    ],
    correct: "B",
    explain: "Quy tắc đọc nguồn: T4 tr.175 cho thấy các điều kiện đời sống cụ thể (ăn, mặc, ở, học hành). Nhóm gắn dấu * để tránh đồng nhất 4 điều kiện này là toàn bộ định nghĩa khái niệm hạnh phúc."
  },
  {
    id: 5,
    category: "Vấn đề phản biện (Conflict)",
    question: "Nếu một quốc gia đã có độc lập chính trị nhưng một bộ phận nhân dân chưa được bảo đảm tự do và đời sống, bản đồ lập luận trả lời thế nào?",
    options: [
      { key: "A", text: "Phủ nhận hoàn toàn nền độc lập chính trị của quốc gia đó" },
      { key: "B", text: "Độc lập chính trị là nền tảng cần bảo vệ, nhưng ý nghĩa đầy đủ cần được tiếp tục hoàn thiện trong gắn kết với tự do và đời sống nhân dân" },
      { key: "C", text: "Tuyên bố độc lập và hạnh phúc là hai phạm trù mâu thuẫn triệt tiêu lẫn nhau" },
      { key: "D", text: "Cho rằng chỉ cần độc lập chính trị là tự động có được tự do và hạnh phúc" }
    ],
    correct: "B",
    explain: "Công thức tự bảo vệ của nhóm: Không phủ nhận nền độc lập chính trị; không đồng nhất độc lập với trạng thái hình thức khép kín; và khẳng định ý nghĩa đầy đủ của độc lập nằm ở đời sống nhân dân."
  }
];

const chatbotFAQ = [
  { q: "Luận đề trung tâm của Meaning Map là gì?", a: "Độc lập dân tộc có ý nghĩa đầy đủ khi gắn với tự do, hạnh phúc và đời sống nhân dân." },
  { q: "Ý nghĩa học thuật của câu trích T4 tr.64?", a: "Độc lập được hỏi bằng đời sống của dân, không phải chủ quyền hình thức tách rời." },
  { q: "Phân biệt Phương diện A và B ra sao?", a: "Phương diện A: Điều kiện chính trị; Phương diện B: Ý nghĩa trong đời sống nhân dân." },
  { q: "Vì sao 'Nhân dân' là trung tâm tham chiếu?", a: "Nhân dân là trung tâm tham chiếu để hỏi: Độc lập, Tự do, Hạnh phúc hướng tới ai?" }
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

  // Poll states for question 6
  const [pollVote, setPollVote] = useState(null);
  const [pollResults, setPollResults] = useState({ A: 138, B: 156, C: 92 });

  // Toggle practical lessons flashcards states
  const [flippedLessons, setFlippedLessons] = useState({});

  const toggleLessonFlip = (idx) => {
    setFlippedLessons(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  // AI Chatbot state
  const [chatMessages, setChatMessages] = useState([
    {
      sender: 'bot',
      text: 'Kính chào bạn. Tôi là Trợ lý AI học phần HCM202, hỗ trợ đối chiếu nguồn tài liệu và phản biện đề tài "Độc lập · Tự do · Hạnh phúc" (Meaning Map / SPST Fall 2026). Bạn có thể chọn câu hỏi mẫu bên trái hoặc nhập nội dung cần giải đáp.'
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

      const sections = ['intro', 'theory', 'practice', 'digital', 'flashcard', 'quiz', 'chatbot'];
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
      let reply = "Trong phạm vi các nguồn được chọn (Giáo trình 2019 và Hồ Chí Minh Toàn tập T4), độc lập dân tộc có ý nghĩa đầy đủ khi được đặt trong mối liên hệ với tự do, hạnh phúc và đời sống nhân dân. Bạn có muốn đi sâu vào văn bản trích dẫn cụ thể hay cách phân tích hai phương diện không?";

      const lowerText = text.toLowerCase();
      if (lowerText.includes('luận đề') || lowerText.includes('trung tâm') || lowerText.includes('central argument')) {
        reply = "Luận đề trung tâm: 'Độc lập dân tộc có ý nghĩa đầy đủ khi được đặt trong mối liên hệ với tự do, hạnh phúc và đời sống nhân dân'. Nhóm khẳng định có quan hệ nội dung (ba giá trị không tách rời); không khẳng định quan hệ nhân quả tự động; và mỗi đường nối phải kiểm chứng được từ nguồn văn bản gốc.";
      } else if (lowerText.includes('tr.64') || lowerText.includes('1945') || lowerText.includes('nghĩa lý gì')) {
        reply = "Văn bản 1945: Trích 'Thư gửi Ủy ban nhân dân các kỳ, tỉnh, huyện và làng' ngày 17-10-1945 (Tập 4, tr.64): '...nếu nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì.' Trích đoạn này được dùng để chứng minh độc lập không thể bị đọc như chủ quyền hình thức tách khỏi người dân; câu hỏi yêu cầu làm rõ ý nghĩa của độc lập trong đời sống.";
      } else if (lowerText.includes('tr.175') || lowerText.includes('ăn') || lowerText.includes('mặc') || lowerText.includes('ở') || lowerText.includes('học hành') || lowerText.includes('1946')) {
        reply = "Văn bản 1946: Diễn văn ngày 10-01-1946 (Tập 4, tr.175): 'Làm cho dân có ăn. Làm cho dân có mặc. Làm cho dân có chỗ ở. Làm cho dân có học hành.' Từ giá trị chính trị, văn bản chỉ ra hướng đi vào đời sống thiết thực. Dấu * trên từ Hạnh phúc nhằm nhấn mạnh đây là một phương diện đời sống cụ thể, không phải toàn bộ định nghĩa duy nhất của hạnh phúc.";
      } else if (lowerText.includes('tr.43') || lowerText.includes('giáo trình') || lowerText.includes('2019')) {
        reply = "Giáo trình Tư tưởng Hồ Chí Minh 2019 (Bộ GD&ĐT), Chương III, tr.41-44: Xác định độc lập là quyền thiêng liêng, bất khả xâm phạm và phải là nền độc lập thật sự, hoàn toàn và triệt để. Tại trang 43, tiêu đề khung luận điểm là: 'Độc lập dân tộc phải gắn liền với tự do, hạnh phúc của nhân dân' — đây là tiêu đề luận điểm của Giáo trình, không phải câu trích nguyên văn.";
      } else if (lowerText.includes('phương diện') || lowerText.includes('phương diện a') || lowerText.includes('phương diện b') || lowerText.includes('mâu thuẫn')) {
        reply = "Phân tích hai phương diện để tránh mâu thuẫn nội bộ: Phương diện A là Độc lập như điều kiện chính trị (chủ quyền, quyền tự quyết, nền độc lập của dân tộc) — đây là nền tảng tối thượng cần xác lập và bảo vệ. Phương diện B là Độc lập như ý nghĩa trong đời sống (dân có tự do, hạnh phúc, ăn mặc ở học hành). Cầu nối: B không phủ định A; B giúp giải thích ý nghĩa chiều sâu của A đối với nhân dân.";
      } else if (lowerText.includes('nhân dân') || lowerText.includes('tham chiếu')) {
        reply = "Nhân dân nằm ở vị trí trung tâm vì nhân dân là trung tâm tham chiếu của bản đồ, không phải giá trị thứ tư bổ sung vào khẩu hiệu. Bản đồ đặt nhân dân ở giữa để hỏi: Độc lập cho ai? Tự do cho ai? Hạnh phúc cho ai? Mọi giá trị đều hướng tới và lấy đời sống nhân dân làm thước đo thực chất.";
      } else if (lowerText.includes('a80') || lowerText.includes('mưa đỏ') || lowerText.includes('concert') || lowerText.includes('thực tiễn')) {
        reply = "Đọc dẫn chứng có kiểm soát (Rubric 1.2): Các sự kiện A80 (02/09/2025), Concert quốc gia (01/09/2025) và Mưa đỏ (>552 tỷ, 07/09/2025) minh chứng biểu tượng độc lập có không gian tiếp nhận công cộng thời bình. Nhóm không gọi đây là khảo sát đại diện, không nói toàn bộ người dân đều đạt hạnh phúc viên mãn, và không dùng doanh thu đo chất lượng tư tưởng. Thực tiễn làm bật câu hỏi — lý luận mới trả lời câu hỏi.";
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

            <div className="mt-2.5 text-center bg-red-950/80 px-3.5 py-1.5 rounded-full border border-amber-400/30 backdrop-blur-md shadow-md">
              <p className="text-xs font-bold text-amber-200 tracking-wider uppercase drop-shadow-sm">Chủ tịch Hồ Chí Minh</p>
              <p className="text-[10px] text-red-200/90 font-light drop-shadow-sm">Chân dung lịch sử (1946) • Rõ nét ngũ quan</p>
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
              <VietnamFlag3D />
            </div>

            {/* Flag Caption */}
            <div className="mt-1 text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-red-950/85 border border-amber-400/40 text-[11px] font-medium text-amber-200/90 shadow-md backdrop-blur-md">
                Quốc kỳ Việt Nam • Mô phỏng 3D uốn lượn
              </span>
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

          {/* Central Research Question */}
          <div className="max-w-xl mx-auto bg-black/30 border border-white/15 rounded-2xl p-5 text-left space-y-2 backdrop-blur-md shadow-xl">
            <p className="text-xs text-amber-300 font-semibold uppercase tracking-wide">Câu hỏi trung tâm của bài nghiên cứu</p>
            <p className="text-base sm:text-lg text-white font-medium leading-snug">
              “Ba giá trị này liên hệ với nhau thế nào trong tư tưởng Hồ Chí Minh?”
            </p>
            <p className="text-xs text-red-200/80">
              * Bản đồ xác lập quan hệ nội dung, không phải chuỗi nhân quả tự động.
            </p>
          </div>

          {/* Foundational Quote */}
          <div className="max-w-2xl mx-auto pt-1">
            <blockquote className="font-editorial text-lg sm:text-xl text-red-100 italic leading-relaxed">
              “...nếu nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì.”
            </blockquote>
            <p className="text-xs text-amber-300/90 mt-2 font-medium">
              — Hồ Chí Minh Toàn tập, Tập 4, tr.64 (Thư ngày 17-10-1945)
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
            <button
              onClick={() => scrollToSection('quiz')}
              className="px-6 py-3 bg-red-950/70 text-white border border-red-600/60 rounded-xl font-semibold text-sm hover:bg-red-900/80 hover:border-amber-400/40 transition-all cursor-pointer backdrop-blur-sm shadow-sm"
            >
              Thử thách Phản biện C-C-C
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
                { id: 'practice', label: 'Bản đồ ý nghĩa' },
                { id: 'digital', label: 'Dẫn chứng thực tiễn' },
                { id: 'flashcard', label: 'Khái niệm' },
                { id: 'quiz', label: 'Phản biện C-C-C' },
                { id: 'chatbot', label: 'Trợ lý AI' },
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

      {/* ================= MAIN CONTENT ================= */}
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

          {/* 3 Nguyên tắc nền tảng */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {chaptersData.intro.traps.map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm space-y-2 card-subtle">
                <span className="text-xs font-bold text-red-800 uppercase">Nguyên tắc {idx + 1}</span>
                <h3 className="text-base font-bold text-slate-900 leading-snug">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
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
                          <strong className="text-slate-900">Ngữ cảnh văn bản: </strong>
                          {item.context}
                        </div>
                        <div>
                          <strong className="text-red-900">Phân tích học thuật của nhóm: </strong>
                          {item.analysis}
                        </div>
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
              “Chúng tôi không xếp ba giá trị thành một khẩu hiệu tuyến tính. Chúng tôi đề xuất một cách đọc có điều kiện và có giới hạn: Độc lập dân tộc có ý nghĩa đầy đủ khi được đặt trong mối liên hệ với tự do, hạnh phúc và đời sống nhân dân.”
            </p>
            <p className="text-xs text-slate-500">
              — Phân tích của nhóm HCM / SPST / C3-02, dựa trên Giáo trình 2019, tr.43 và Hồ Chí Minh Toàn tập, Tập 4, tr.64.
            </p>
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

          {/* Trích dẫn Giáo trình 2019 tr.43 - Khung luận điểm nền tảng (Nền Đỏ theo yêu cầu) */}
          <div className="bg-gradient-to-r from-red-900 via-red-950 to-red-900 border-2 border-red-700/60 text-white rounded-2xl p-6 sm:p-8 space-y-3 shadow-xl relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 text-white/5 text-9xl font-black select-none pointer-events-none">★</div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-800/80 border border-amber-400/40 text-xs font-bold text-amber-300 uppercase tracking-wide">
              <span>★</span> Khung luận điểm nền tảng
            </div>
            <blockquote className="font-editorial text-xl sm:text-2xl italic text-amber-100 font-medium leading-relaxed drop-shadow-sm">
              “Độc lập dân tộc phải gắn liền với tự do, hạnh phúc của nhân dân.”
            </blockquote>
            <p className="text-xs text-red-200/90 font-medium">
              — Giáo trình Tư tưởng Hồ Chí Minh (Bộ GD&ĐT, 2019), Chương III, tr.43
            </p>
          </div>

          {/* Phân biệt Phương diện A & B */}
          <div className="space-y-4">
            <div className="border-b border-slate-200 pb-3">
              <h3 className="text-lg font-bold text-slate-900">Tách hai phương diện để tránh mâu thuẫn nội bộ</h3>
              <p className="text-slate-500 text-xs">Phân tích học thuật giúp làm rõ giữa điều kiện chính trị và ý nghĩa trải nghiệm trong đời sống</p>
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

          {/* 3 Khâu trải nghiệm của sản phẩm */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {chaptersData.practice.forms.map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm space-y-2 card-subtle">
                <span className="text-xs font-bold text-red-800 uppercase">{item.step}</span>
                <h3 className="text-base font-bold text-slate-900 leading-snug">{item.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Sơ đồ Meaning Map trực quan */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
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
                          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">Dữ kiện (Fact):</p>
                          <p className="text-xs text-slate-700 leading-relaxed font-normal">{item.reality}</p>
                        </div>

                        <div className="space-y-1 bg-amber-50/80 p-3 rounded-xl border border-amber-200/70">
                          <p className="text-[11px] font-bold text-amber-900 uppercase tracking-wide">Giới hạn học thuật (Boundary):</p>
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

          {/* Bảng đối chiếu chuẩn mực đọc dẫn chứng */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4 overflow-hidden">
            <div>
              <h3 className="text-base font-bold text-slate-900">Bảng Đối Chiếu: Cách Đọc Có Kiểm Soát vs. Suy Diễn Quá Mức</h3>
              <p className="text-xs text-slate-500">Nguyên tắc phương pháp luận giúp bài làm đạt chuẩn Rubric 1.2</p>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead>
                  <tr className="bg-slate-50 text-left text-xs font-bold text-slate-700">
                    {chaptersData.digital.comparison.headers.map((h, idx) => (
                      <th key={idx} className="px-4 py-3">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {chaptersData.digital.comparison.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-50/50">
                      <td className="px-4 py-3 font-semibold text-slate-800 whitespace-nowrap">{row[0]}</td>
                      <td className="px-4 py-3 text-red-900/80">{row[1]}</td>
                      <td className="px-4 py-3 text-slate-700 font-medium">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
            <span className="inline-block px-3 py-1 rounded-full bg-red-50 text-red-800 text-xs font-semibold">
              Peer Challenge C-C-C
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Thử Thách Bẻ Gãy Bản Đồ Bằng 6 Câu Hỏi
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Kiểm tra tính nhất quán của Meaning Map qua 3 khía cạnh: Bối cảnh (Context) — Khung lý luận (Concept) — Vấn đề phản biện (Conflict).
            </p>
          </div>

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
                  Câu 6. Trong bản đồ Meaning Map, bạn thấy đường nối nào đòi hỏi chứng minh bằng nguồn và mang nhiều thử thách học thuật nhất?
                </h3>
              </div>

              {!pollVote ? (
                <div className="space-y-2">
                  {[
                    { key: 'A', text: 'Độc lập ↔ Tự do (Từ điều kiện chính trị đến giá trị con người)' },
                    { key: 'B', text: 'Độc lập ↔ Hạnh phúc* (Từ chủ quyền đến điều kiện sống cụ thể: ăn, mặc, ở, học)' },
                    { key: 'C', text: 'Tự do ↔ Hạnh phúc* (Từ quyền tự do đến trải nghiệm đời sống của nhân dân)' }
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
                      { key: 'A', text: 'Độc lập ↔ Tự do', count: pollResults.A },
                      { key: 'B', text: 'Độc lập ↔ Hạnh phúc*', count: pollResults.B },
                      { key: 'C', text: 'Tự do ↔ Hạnh phúc*', count: pollResults.C }
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
                    Cảm ơn bạn đã tham gia. Nhóm luôn sẵn sàng bảo vệ đường nối bạn vừa chọn bằng các trích dẫn chính xác trong Giáo trình 2019 và Hồ Chí Minh Toàn tập (Tập 4).
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
              <p className="text-[11px] text-slate-400 pt-4">Nguồn dữ liệu: Giáo trình 2019 & Hồ Chí Minh Toàn tập T4</p>
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
                  placeholder="Đặt câu hỏi về T4 tr.64, tr.175, Phương diện A/B..."
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
              Giáo trình Tư tưởng Hồ Chí Minh — Bộ Giáo dục và Đào tạo (NXB Chính trị quốc gia Sự thật, 2019), Chương III, tr.41–44.
            </li>
            <li>
              Hồ Chí Minh Toàn tập, Tập 4 — <em>“Thư gửi Ủy ban nhân dân các kỳ, tỉnh, huyện và làng”</em> (17-10-1945), tr.64.
            </li>
            <li>
              Hồ Chí Minh Toàn tập, Tập 4 — Diễn văn ngày 10-01-1946 về điều kiện ăn, mặc, ở, học hành của dân, tr.175.
            </li>
            <li>
              Hồ Chí Minh Toàn tập, Tập 4 — <em>“Thư gửi đồng bào toàn quốc”</em> (1946), tr.187.
            </li>
            <li>
              VTV — Phóng sự <em>“Hàng vạn người dân hạnh phúc, xúc động xem diễu binh, diễu hành”</em> (A80, 02/09/2025).
            </li>
            <li>
              VTV — Truyền hình trực tiếp Concert quốc gia <em>“80 năm Hành trình Độc lập – Tự do – Hạnh phúc”</em> (01/09/2025).
            </li>
            <li>
              VietnamPlus / Thông tấn xã Việt Nam (TTXVN) — Doanh thu phim điện ảnh <em>“Mưa đỏ”</em> vượt 552 tỷ đồng (07/09/2025).
            </li>
            <li>
              Quy chế học thuật: Toàn bộ nguồn và trích dẫn được lưu trữ và kiểm chứng trong Source Log của nhóm HCM / SPST / C3-02.
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
