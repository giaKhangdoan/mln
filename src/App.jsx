import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  ChevronDown, 
  Compass, 
  ShieldAlert, 
  Cpu, 
  Zap, 
  Layers, 
  Bot, 
  Trophy, 
  ChevronRight, 
  RotateCcw,
  ArrowRight,
  BrainCircuit,
  Lightbulb,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Info,
  Send,
  HelpCircle as QuestionIcon,
  MessageSquare,
  FileText,
  Eye,
  Users,
  PenLine,
  BookMarked,
  Wrench
} from 'lucide-react';

// ===== NỘI DUNG: CMCN 4.0 VÀ THẤT NGHIỆP (MLN122) =====
const chaptersData = {
  intro: {
    badge: "Nền tảng",
    chapterNum: "Phần 1",
    title: "Lý luận: Đội quân thất nghiệp dự bị của C.Mác",
    desc: "Lý thuyết kinh tế chính trị Mác-xít không chỉ phản ánh đúng thời kỳ trước mà còn dự báo chính xác hiện tượng đang diễn ra với AI hiện nay.",
    traps: [
      {
        icon: "⚙️",
        title: "Cơ chế: AI tăng cấu tạo tư bản",
        desc: "Khi tư bản tích lũy, cấu tạo kỹ thuật tăng → tỷ lệ tư bản bất biến/khả biến tăng → nhu cầu tương đối về lao động giảm dù tổng tư bản tăng. AI là phiên bản công nghệ cao nhất của quy luật này."
      },
      {
        icon: "�",
        title: "Đối tượng bị ảnh hưởng nặng nhất",
        desc: "Lao động kỹ năng thấp trong ngành gia công/lắp ráp — đúng là cấu trúc lao động chủ lực của Việt Nam. 86% lao động dệt may và da giày đối mặt nguy cơ mất việc cao (ILO, 2016)."
      },
      {
        icon: "🏭",
        title: "Hệ quả chính trị – xã hội",
        desc: "Nguy cơ tái tạo 'đội quân thất nghiệp dự bị' ở quy mô lớn, kéo theo phân hóa thu nhập, đòi hỏi vai trò điều tiết của Nhà nước trong nền kinh tế thị trường định hướng XHCN."
      }
    ],
    historicalSchools: [
      {
        school: "Luận điểm gốc của C.Mác (Tư bản, quyển I)",
        philosophers: "C.Mác — Tư bản luận",
        desc: "Khi tư bản tích lũy, cấu tạo kỹ thuật tăng → nhu cầu tương đối về lao động giảm → hình thành 'nhân khẩu thừa tương đối'. Đây không phải thất bại của hệ thống mà là điều kiện tồn tại của nó.",
        color: "from-amber-50 to-orange-100 border-orange-200 text-orange-850"
      },
      {
        school: "3 Hình thái của đội quân thất nghiệp dự bị",
        philosophers: "Phân loại theo Mác",
        desc: "Lưu động (mất việc tạm thời, di chuyển giữa ngành), Tiềm tàng (lao động dư ở nông nghiệp/nông thôn), Trì trệ (bán thất nghiệp kinh niên, việc làm không ổn định).",
        color: "from-blue-50 to-indigo-100 border-indigo-200 text-indigo-850"
      },
      {
        school: "AI so với Máy móc cơ khí truyền thống",
        philosophers: "Sự khác biệt về chất",
        desc: "AI không chỉ thay thế lao động chân tay (CMCN 1-2) mà còn thay thế một phần lao động trí óc lặp lại (CMCN 3-4) — phạm vi 'đội quân dự bị' mở rộng từ công nhân sang cả lao động văn phòng kỹ năng thấp/trung.",
        color: "from-rose-50 to-red-100 border-red-200 text-red-850"
      },
      {
        school: "Kết nối với CNH, HĐH Việt Nam",
        philosophers: "Giáo trình Chương 6, mục 6.1",
        desc: "Mô hình CNH của Việt Nam dựa vào lợi thế lao động giá rẻ, gia công xuất khẩu. Chính lợi thế này lại là điểm dễ tổn thương nhất trước CMCN 4.0 — đây đúng là các ngành dễ tự động hóa nhất.",
        color: "from-teal-50 to-emerald-100 border-emerald-200 text-emerald-850"
      }
    ]
  },
  theory: {
    badge: "Thực tiễn VN",
    chapterNum: "Phần 2",
    title: "Số liệu & Case Study: Tự động hóa tại Việt Nam",
    desc: "Dữ liệu thực tế chứng minh nguy cơ hình thành đội quân thất nghiệp dự bị trong các ngành thâm dụng lao động của Việt Nam.",
    definition: "ILO (2016): 86% lao động Việt Nam trong ngành dệt may và da giày phải đối mặt với nguy cơ mất việc làm cao do sự dịch chuyển của công nghệ tự động hóa.",
    principles: [
      {
        title: "Ngành May mặc",
        desc: "46,3% doanh nghiệp may tại Tây Nam Bộ đã tự động hóa ít nhất một công đoạn. 78% doanh nghiệp FDI áp dụng tự động hóa so với chỉ 39,5% ở doanh nghiệp nội địa (Huỳnh và cộng sự, 2026)."
      },
      {
        title: "Ngành Logistics",
        desc: "55-60% doanh nghiệp đã ứng dụng TMS/WMS nhưng chỉ 10% đạt tự động hóa vật lý toàn trình. 80-90% quy trình forwarder vừa và nhỏ vẫn thao tác bằng tay (Báo cáo Logistics VN 2024)."
      },
      {
        title: "Tác động ròng đến 2030",
        desc: "ADB (2021): Tác động ròng đến việc làm vẫn ở mức tích cực — số việc làm mới bù đắp được số mất đi, nhưng đòi hỏi kỹ năng thay đổi hoàn toàn từ thể chất lặp lại sang tư duy phân tích và kỹ năng số."
      }
    ],
    dialecticsSteps: [
      {
        step: "01",
        name: "Sụp đổ lợi thế 'lao động giá rẻ'",
        desc: "Hơn 20 năm CNH dựa vào gia công và lao động phổ thông. Với 86% lao động may mặc đối diện nguy cơ mất việc, lợi thế cạnh tranh truyền thống đang bị triệt tiêu nhanh chóng dưới CMCN 4.0."
      },
      {
        step: "02",
        name: "Nghịch lý 'Thừa - Thiếu' kiểu mới",
        desc: "Tác động ròng dự báo tích cực nhưng người lao động thủ công (mất việc) không thể đáp ứng ngay kỹ năng số của việc làm mới — minh chứng cho lý luận Mác về 'nhân khẩu thừa tương đối'."
      },
      {
        step: "03",
        name: "Nguy cơ bị loại khỏi chuỗi cung ứng",
        desc: "Doanh nghiệp nội địa chậm chân về công nghệ (39,5% so với 78% FDI). Nếu không số hóa và xanh hóa kịp, doanh nghiệp nội địa sẽ mất đơn hàng, kéo theo hàng triệu lao động mất việc."
      }
    ]
  },
  truth: {
    badge: "Phản biện",
    chapterNum: "Phần 3",
    title: "AI Tạo Việc Làm Hay Thay Thế? — 3 Lớp Phân Tích",
    desc: "AI không xóa bỏ việc làm theo nghĩa tuyệt đối — đúng như lý luận Mác về đội quân thất nghiệp dự bị, nó tái cấu trúc lực lượng lao động theo hướng phân cực kỹ năng.",
    properties: [
      {
        name: "Đội quân thất nghiệp dự bị",
        keyword: "Nhân khẩu thừa tương đối",
        desc: "C.Mác: khi cấu tạo kỹ thuật tăng, nhu cầu tương đối về lao động giảm → 3 hình thái: lưu động, tiềm tàng, trì trệ. AI tạo ra hình thái 'trì trệ' mới — lao động không thể chuyển đổi kỹ năng kịp tốc độ công nghệ."
      },
      {
        name: "Lệch về Kỹ năng",
        keyword: "Skill Mismatch",
        desc: "Việc làm AI tạo ra (kỹ sư dữ liệu, vận hành tự động) yêu cầu trình độ cao hơn nhiều so với việc làm bị mất (công nhân may, lái xe, bốc xếp). Đây là cơ chế tạo ra 'đội quân thất nghiệp dự bị trì trệ' kiểu mới."
      },
      {
        name: "Lệch về Thời gian",
        keyword: "Creation Lag",
        desc: "Việc làm mất ngay khi tự động hóa áp dụng; việc làm mới cần thời gian đào tạo nhân lực và xây hạ tầng số. Khoảng trống này tạo ra thất nghiệp hàng loạt — đặc biệt nghiêm trọng với lao động phổ thông Việt Nam."
      },
      {
        name: "Nghịch lý Thừa-Thiếu",
        keyword: "Net Effect — ADB 2021",
        desc: "ADB (2021) dự báo tác động ròng đến 2030 vẫn tích cực — nhưng người mất việc (thủ công) không thể đáp ứng việc làm mới (kỹ năng số). Thị trường tự do không tự giải quyết khoảng cách này — cần Nhà nước can thiệp."
      }
    ]
  },
  practice: {
    badge: "Case Study",
    chapterNum: "Phần 4",
    title: "Doanh nghiệp Việt Nam ứng dụng AI/Tự động hóa",
    desc: "Các case study thực tế chứng minh cả hai mặt của quá trình tự động hóa: tăng năng suất và thay thế lao động.",
    forms: [
      {
        icon: "👗",
        name: "Ngành May — Hansae & Luen Thai",
        desc: "Doanh nghiệp FDI tại Long An thử nghiệm hệ thống MES tích hợp AI kiểm lỗi: giảm tỷ lệ lỗi từ 35-40% và tăng năng suất lao động thêm 18% (Huỳnh và cộng sự, 2026)."
      },
      {
        icon: "🚢",
        name: "Logistics — Tân Cảng Sài Gòn",
        desc: "Ứng dụng IoT và dữ liệu lớn: giảm 40% thời gian xử lý container, tiết kiệm 15% chi phí vận hành (Bộ Công Thương, 2025)."
      },
      {
        icon: "📦",
        name: "Viettel Post — AI Phân phối",
        desc: "Ứng dụng AI phân tích dữ liệu giúp tăng tốc độ giao hàng lên 20%. Minh chứng rõ nét cho xu hướng tự động hóa trong logistics Việt Nam."
      }
    ],
    roles: [
      {
        title: "Số hóa ≠ Tự động hóa",
        desc: "55-60% doanh nghiệp logistics đã dùng phần mềm TMS/WMS nhưng chỉ 10% đạt tự động hóa vật lý toàn trình. 90,5% vẫn ở mức số hóa sơ khai (mức 1-2)."
      },
      {
        title: "Phân hóa FDI vs Nội địa",
        desc: "Khoảng cách lớn về ứng dụng công nghệ: 78% doanh nghiệp FDI đã tự động hóa so với chỉ 39,5% ở doanh nghiệp nội địa trong ngành may — nguy cơ mất đơn hàng cho khối nội địa."
      },
      {
        title: "Sẵn sàng chuyển đổi số",
        desc: "Chỉ 16% doanh nghiệp logistics thực sự sẵn sàng chuyển đổi số cấp cao. Còn lại phần lớn đang 'dậm chân' ở mức sơ khai, tạo ra nguy cơ tụt hậu toàn diện."
      }
    ]
  },
  digital: {
    badge: "Giải pháp",
    chapterNum: "Phần 5",
    title: "Bài học & Vai trò Nhà nước trong Kỷ nguyên AI",
    desc: "Từ phân tích lý luận Mác và thực tiễn Việt Nam, 3 bài học hành động cụ thể cho từng đối tượng: người lao động, doanh nghiệp và Nhà nước trong ứng phó với CMCN 4.0.",
    process: [
      {
        phase: "Bài học 1",
        title: "Với Người Lao Động",
        trap: "Chủ động nâng cấp kỹ năng — thoát khỏi 'đội quân trì trệ'",
        realityLabel: "Thực trạng",
        reality: "Người lao động thủ công (mất việc do tự động hóa) không thể đáp ứng ngay các kỹ năng số của việc làm mới. Đây chính là cơ chế tạo ra 'đội quân thất nghiệp dự bị trì trệ' theo phân loại của Mác.",
        philosophyLabel: "Hành động cụ thể",
        philosophy: "Phải chủ động tham gia các chương trình đào tạo lại (reskilling), hướng tới kỹ năng tư duy phân tích và kỹ năng số — đây là điều kiện để không bị loại khỏi thị trường lao động trong CMCN 4.0."
      },
      {
        phase: "Bài học 2",
        title: "Với Doanh Nghiệp Nội Địa",
        trap: "Đầu tư tự động hóa thực chất — không nhầm 'số hóa màn hình' với tự động hóa",
        realityLabel: "Thực trạng",
        reality: "90,5% doanh nghiệp vẫn ở mức số hóa sơ khai. Khoảng cách với FDI ngày càng lớn (39,5% vs 78% tự động hóa trong ngành may). Nguy cơ mất đơn hàng và đào thải lao động hàng loạt.",
        philosophyLabel: "Hành động cụ thể",
        philosophy: "Phân biệt rõ 'số hóa trên màn hình' (dùng phần mềm) với 'tự động hóa vật lý' (robot, băng chuyền). Ưu tiên đầu tư vào tự động hóa thực chất để cạnh tranh với FDI, đồng thời xây dựng lộ trình đào tạo lại lao động dôi dư."
      },
      {
        phase: "Bài học 3",
        title: "Với Nhà Nước",
        trap: "Vai trò điều tiết chủ động — kinh tế thị trường định hướng XHCN",
        realityLabel: "Luận điểm cốt lõi",
        reality: "Thị trường tự do không thể tự giải quyết 'lệch về kỹ năng' và 'lệch về thời gian' trong chuyển đổi lao động. Đây là thất bại thị trường điển hình đòi hỏi can thiệp của Nhà nước.",
        philosophyLabel: "Hành động cụ thể",
        philosophy: "Nhà nước cần: (1) Xây dựng hệ thống đào tạo lại lao động quy mô lớn; (2) Chính sách hỗ trợ chuyển đổi cho người lao động bị thay thế; (3) Khuyến khích doanh nghiệp nội địa số hóa; (4) Điều tiết FDI gắn với trách nhiệm đào tạo lao động địa phương."
      }
    ],
    comparison: {
      headers: ["Tiêu chí", "Không can thiệp (Mặc kệ thị trường)", "Có vai trò Nhà nước (Định hướng XHCN)"],
      rows: [
        ["Người lao động", "Rơi vào bán thất nghiệp kinh niên, không có hỗ trợ chuyển đổi", "Được đào tạo lại, hỗ trợ chuyển ngành, tái hòa nhập thị trường lao động"],
        ["Doanh nghiệp nội địa", "Mất đơn hàng vào tay FDI, phá sản hàng loạt, kéo theo thất nghiệp", "Được hỗ trợ số hóa, tiếp cận tín dụng ưu đãi, nâng cấp công nghệ"],
        ["Cơ cấu kinh tế", "Phân hóa thu nhập sâu sắc, bất bình đẳng tăng theo cấp số nhân", "Chuyển dịch cơ cấu lao động có kiểm soát, giảm bất bình đẳng"],
        ["Mục tiêu CNH", "CNH thiếu bền vững, phụ thuộc mãi vào lao động giá rẻ", "CNH chuyển sang giá trị gia tăng cao, thoát bẫy thu nhập trung bình"]
      ]
    }
  }
};

const quizQuestions = [
  {
    id: 1,
    question: "Theo lý luận của C.Mác, khi tư bản tích lũy và cấu tạo kỹ thuật tăng, điều gì sẽ xảy ra với nhu cầu về lao động?",
    options: [
      { key: "A", text: "Nhu cầu lao động tuyệt đối tăng lên" },
      { key: "B", text: "Nhu cầu tương đối về lao động giảm, hình thành nhân khẩu thừa tương đối" },
      { key: "C", text: "Nhu cầu lao động không đổi" },
      { key: "D", text: "Nhu cầu lao động chân tay tăng mạnh" }
    ],
    correct: "B",
    explain: "Mác khẳng định: khi cấu tạo giá trị (tỷ lệ tư bản bất biến/tư bản khả biến) tăng, nhu cầu tương đối về lao động giảm dù tổng tư bản tăng — tạo ra 'nhân khẩu thừa tương đối' hay 'đội quân thất nghiệp dự bị'."
  },
  {
    id: 2,
    question: "ILO (2016) cảnh báo bao nhiêu phần trăm lao động Việt Nam trong ngành dệt may và da giày có nguy cơ mất việc cao do tự động hóa?",
    options: [
      { key: "A", text: "46,3%" },
      { key: "B", text: "55%" },
      { key: "C", text: "86%" },
      { key: "D", text: "78%" }
    ],
    correct: "C",
    explain: "International Labour Organization (2016) cảnh báo có đến 86% lao động Việt Nam trong ngành dệt may và da giày phải đối mặt với nguy cơ mất việc làm cao do sự dịch chuyển của công nghệ tự động hóa."
  },
  {
    id: 3,
    question: "Điều gì tạo ra 'nghịch lý Thừa - Thiếu' trong thị trường lao động Việt Nam khi CMCN 4.0 diễn ra?",
    options: [
      { key: "A", text: "Tổng số việc làm giảm mạnh tuyệt đối" },
      { key: "B", text: "Người lao động thủ công mất việc không đáp ứng được kỹ năng số của việc làm mới tạo ra" },
      { key: "C", text: "Doanh nghiệp FDI không tuyển dụng lao động Việt Nam" },
      { key: "D", text: "Nhà nước không cho phép tự động hóa" }
    ],
    correct: "B",
    explain: "ADB (2021) dự báo tác động ròng vẫn tích cực (việc làm mới bù đắp việc làm mất đi), nhưng người lao động thủ công không thể đáp ứng ngay kỹ năng số — tạo ra trạng thái 'thừa lao động cũ, thiếu lao động kỹ năng cao'."
  },
  {
    id: 4,
    question: "Theo số liệu thực tế, sự phân hóa về ứng dụng tự động hóa giữa doanh nghiệp FDI và nội địa trong ngành may là bao nhiêu?",
    options: [
      { key: "A", text: "FDI 55% vs Nội địa 45%" },
      { key: "B", text: "FDI 78% vs Nội địa 39,5%" },
      { key: "C", text: "FDI 90% vs Nội địa 10%" },
      { key: "D", text: "FDI 60% vs Nội địa 50%" }
    ],
    correct: "B",
    explain: "Huỳnh và cộng sự (2026): 78% doanh nghiệp FDI đã áp dụng tự động hóa, so với chỉ 39,5% ở doanh nghiệp nội địa — minh chứng cho sự phân hóa công nghệ và nguy cơ mất đơn hàng của khối nội địa."
  },
  {
    id: 5,
    question: "AI khác gì với máy móc cơ khí truyền thống (CMCN 1-2) về tác động đến lực lượng lao động?",
    options: [
      { key: "A", text: "AI chỉ tác động đến lao động nông nghiệp" },
      { key: "B", text: "AI không thay thế được lao động trí óc" },
      { key: "C", text: "AI thay thế cả lao động chân tay lẫn một phần lao động trí óc lặp lại, mở rộng phạm vi 'đội quân dự bị' sang lao động văn phòng kỹ năng thấp/trung" },
      { key: "D", text: "AI chỉ ảnh hưởng đến các nước phát triển" }
    ],
    correct: "C",
    explain: "AI có đặc điểm khác biệt về chất: không chỉ thay thế lao động chân tay (như CMCN 1-2) mà còn thay thế lao động trí óc lặp lại (CMCN 3-4) — phạm vi 'đội quân dự bị' mở rộng từ công nhân sang cả lao động văn phòng kỹ năng thấp/trung."
  }
];

const debatesData = [
  {
    question: "Phản biện 1: 'AI tạo ra việc làm mới, vậy có thực sự đáng lo không?'",
    answer: "Đúng, AI tạo ra việc làm mới — nhưng câu hỏi không phải là 'có hay không', mà là việc làm mới đó dành cho ai và đủ nhanh để hấp thụ số lao động bị thay thế không? Có 3 lệch: (1) Lệch kỹ năng — việc làm AI yêu cầu trình độ cao hơn nhiều so với việc làm bị mất; (2) Lệch thời gian — việc làm mất ngay, việc làm mới cần đào tạo và hạ tầng; (3) Lệch số lượng — nhóm lao động thâm dụng tay nghề thấp là nhóm chịu rủi ro lớn nhất."
  },
  {
    question: "Phản biện 2: 'Việt Nam có lợi thế lao động rẻ, vậy CMCN 4.0 không ảnh hưởng nhiều?'",
    answer: "Đây chính là nghịch lý nguy hiểm nhất! Theo giáo trình (mục 6.1.2.2), CMCN 4.0 'làm mất đi những lợi thế sản xuất truyền thống, đặc biệt từ các nước đang phát triển như nhân công rẻ, dồi dào'. Chính lợi thế cạnh tranh đã giúp Việt Nam CNH thành công 20-30 năm qua lại là điểm dễ tổn thương nhất trước CMCN 4.0 — vì đây đúng là các ngành dễ tự động hóa nhất (công việc lặp lại, quy trình hóa cao)."
  },
  {
    question: "Phản biện 3: 'Doanh nghiệp FDI đầu tư vào Việt Nam chứng tỏ lao động Việt Nam vẫn cạnh tranh được?'",
    answer: "FDI vào vì chi phí thấp và vị trí địa lý, không phải vì kỹ năng. Dữ liệu cho thấy FDI đang tự động hóa nhanh hơn nhiều (78%) so với doanh nghiệp nội địa (39,5%). Điều này có nghĩa FDI đang dùng Việt Nam như cơ sở sản xuất nhưng dần giảm nhu cầu lao động tay nghề thấp. Nếu không nâng cấp kỹ năng lao động, Việt Nam có nguy cơ bị FDI rời đi khi chi phí tự động hóa tiếp tục giảm."
  },
  {
    question: "Phản biện 4: 'Lý luận của Mác từ thế kỷ 19, có còn áp dụng được trong kỷ nguyên AI không?'",
    answer: "Mác không nói về AI, nhưng ông nói về quy luật: khi tư bản tích lũy và cấu tạo kỹ thuật tăng thì nhu cầu tương đối về lao động giảm. AI là phiên bản công nghệ cao nhất từ trước đến nay của quy luật này — máy móc thay lao động sống bằng lao động chết (tư bản cố định). Sự kiện 86% lao động may mặc đối diện nguy cơ mất việc là minh chứng thực tiễn xác nhận lý luận của Mác sau 150 năm."
  },
  {
    question: "Phản biện 5: 'Nhà nước can thiệp nhiều có làm méo mó thị trường lao động không?'",
    answer: "Đây là 'thất bại thị trường' điển hình — khi thị trường tự do không giải quyết được 'lệch kỹ năng' và 'lệch thời gian'. Trong nền kinh tế thị trường định hướng XHCN, vai trò của Nhà nước là điều tiết, không phải thay thế thị trường. Kinh nghiệm của Đức (đào tạo nghề kép), Singapore (SkillsFuture) cho thấy can thiệp có định hướng của Nhà nước là điều kiện cần thiết để chuyển đổi cơ cấu lao động thành công trong CMCN 4.0."
  }
];

const chatbotFAQ = [
  { q: "Đội quân thất nghiệp dự bị là gì?", a: "Lý luận của C.Mác về nhân khẩu thừa tương đối và 3 hình thái của nó." },
  { q: "AI khác gì máy móc truyền thống?", a: "Phân tích sự khác biệt về chất và phạm vi tác động đến lao động." },
  { q: "Việt Nam bị ảnh hưởng như thế nào?", a: "Số liệu thực tế về các ngành may, logistics và nghịch lý thừa-thiếu." },
  { q: "Nhà nước cần làm gì trước CMCN 4.0?", a: "Vai trò điều tiết và các chính sách cụ thể trong định hướng XHCN." }
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

  // Debates Accordion state
  const [expandedDebate, setExpandedDebate] = useState(null);

  // Toggle insight text in Phần 5
  const [showPhilosophy, setShowPhilosophy] = useState({});

  const togglePhilosophy = (idx) => {
    setShowPhilosophy(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  // AI Chatbot state
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Xin chào! Tôi là Trợ lý AI chuyên về CMCN 4.0 và Thị trường Lao động Việt Nam. Bạn có thắc mắc gì về lý luận đội quân thất nghiệp dự bị, tác động của AI đến lao động, hay vai trò của Nhà nước không?' }
  ]);
  const [userMsg, setUserMsg] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Monitor scroll for progress and active section (Scrollspy)
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Check which section is in view
      const sections = ['intro', 'theory', 'truth', 'practice', 'digital', 'flashcard', 'quiz', 'debates', 'chatbot', 'ai-usage'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto scroll to chat bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, isTyping]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // Adjust for sticky navigation height
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

    // Add user message
    setChatMessages(prev => [...prev, { sender: 'user', text }]);
    if (!textToSend) setUserMsg('');
    setIsTyping(true);

    // AI logic response simulation
    setTimeout(() => {
      let reply = "Tôi đã ghi nhận câu hỏi của bạn. Theo lý luận Mác-Lênin về kinh tế chính trị, CMCN 4.0 đang tái cấu trúc lực lượng lao động theo hướng phân cực kỹ năng. Bạn có thể làm rõ thêm khía cạnh bạn đang quan tâm không?";
      
      const lowerText = text.toLowerCase();
      if (lowerText.includes('đội quân') || lowerText.includes('thất nghiệp dự bị') || lowerText.includes('mác')) {
        reply = "Theo C.Mác (Tư bản, quyển I): Khi tư bản tích lũy, cấu tạo kỹ thuật tăng → tỷ lệ tư bản bất biến/khả biến tăng → nhu cầu tương đối về lao động giảm → hình thành 'nhân khẩu thừa tương đối'. Đội quân này tồn tại dưới 3 hình thái: (1) Lưu động — mất việc tạm thời, di chuyển giữa ngành; (2) Tiềm tàng — lao động dư ở nông nghiệp/nông thôn; (3) Trì trệ — bán thất nghiệp kinh niên. AI chính là phiên bản công nghệ cao nhất của quy luật này sau 150 năm.";
      } else if (lowerText.includes('ai') || lowerText.includes('tự động hóa') || lowerText.includes('robot')) {
        reply = "AI khác với máy móc cơ khí truyền thống (CMCN 1-2) ở chỗ: nó không chỉ thay thế lao động chân tay mà còn thay thế một phần lao động trí óc lặp lại (CMCN 3-4). Điều này mở rộng phạm vi 'đội quân thất nghiệp dự bị' từ công nhân sang cả lao động văn phòng kỹ năng thấp/trung. Case study thực tế: Tân Cảng Sài Gòn giảm 40% thời gian xử lý container, Viettel Post tăng tốc giao hàng 20% nhờ AI.";
      } else if (lowerText.includes('việt nam') || lowerText.includes('dệt may') || lowerText.includes('logistics')) {
        reply = "ILO (2016) cảnh báo 86% lao động dệt may và da giày Việt Nam có nguy cơ mất việc cao do tự động hóa. Nghịch lý lớn nhất: chính lợi thế 'lao động giá rẻ' giúp Việt Nam CNH thành công 20-30 năm qua lại là điểm dễ tổn thương nhất — vì đây là các ngành dễ tự động hóa nhất. Trong logistics, 90,5% doanh nghiệp vẫn ở mức số hóa sơ khai và chỉ 10% đạt tự động hóa vật lý toàn trình.";
      } else if (lowerText.includes('nhà nước') || lowerText.includes('xhcn') || lowerText.includes('chính sách')) {
        reply = "Trong nền kinh tế thị trường định hướng XHCN, Nhà nước cần can thiệp vì đây là 'thất bại thị trường' điển hình. Cụ thể: (1) Xây dựng hệ thống đào tạo lại lao động quy mô lớn; (2) Chính sách hỗ trợ chuyển đổi cho người lao động bị thay thế; (3) Khuyến khích doanh nghiệp nội địa số hóa; (4) Điều tiết FDI gắn với trách nhiệm đào tạo lao động địa phương. Kinh nghiệm từ Singapore (SkillsFuture) và Đức (đào tạo nghề kép) là bài học tham khảo tốt.";
      } else if (lowerText.includes('skill mismatch') || lowerText.includes('lệch kỹ năng') || lowerText.includes('creation lag')) {
        reply = "3 loại 'lệch' trong chuyển đổi lao động thời AI: (1) Skill mismatch — việc làm AI tạo ra (kỹ sư dữ liệu, vận hành tự động) yêu cầu trình độ cao hơn nhiều so với việc làm bị mất; (2) Creation lag — việc làm mất ngay khi áp dụng công nghệ, việc làm mới cần thời gian đào tạo; (3) Net effect — ADB (2021) dự báo tác động ròng đến 2030 vẫn tích cực nhưng nhóm lao động tay nghề thấp chịu rủi ro lớn nhất.";
      }

      setChatMessages(prev => [...prev, { sender: 'bot', text: reply }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col text-slate-850 antialiased selection:bg-red-500 selection:text-white">
      
      {/* Scroll Progress Bar at very top */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-red-700 via-red-500 to-amber-500 z-50 transition-all duration-100 shadow-sm" 
        style={{ width: `${scrollProgress}%` }}
      />

      {/* ================= HERO SECTION (bg-red-gradient) ================= */}
      <section className="relative min-h-screen bg-red-gradient overflow-hidden flex flex-col items-center justify-center text-white px-4">
        
        {/* Sphere lights */}
        <div className="absolute top-0 right-0 w-[300px] sm:w-[700px] h-[300px] sm:h-[700px] bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[250px] sm:w-[600px] h-[250px] sm:h-[600px] bg-black/15 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[500px] h-[200px] sm:h-[500px] bg-red-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Artistic decorated images at sides */}
        <div className="absolute left-0 bottom-0 h-[70%] w-[340px] pointer-events-none select-none hidden xl:block" style={{
          maskImage: 'linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, transparent 100%), linear-gradient(to top, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, transparent 100%), linear-gradient(to top, transparent 0%, black 15%, black 85%, transparent 100%)',
          maskComposite: 'intersect',
          WebkitMaskComposite: 'source-in'
        }}>
          <img 
            src="/assets/image3.png" 
            alt="Left Side Decoration" 
            className="h-full w-full object-cover object-top filter grayscale contrast-[0.95] brightness-[0.55] mix-blend-mode-luminosity opacity-40 hover:opacity-50 transition-opacity duration-750" 
          />
        </div>

        <div className="absolute right-0 bottom-0 h-[70%] w-[340px] pointer-events-none select-none hidden xl:block" style={{
          maskImage: 'linear-gradient(to left, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, transparent 100%), linear-gradient(to top, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, transparent 100%), linear-gradient(to top, transparent 0%, black 15%, black 85%, transparent 100%)',
          maskComposite: 'intersect',
          WebkitMaskComposite: 'source-in'
        }}>
          <img 
            src="/assets/image18.png" 
            alt="Right Side Decoration" 
            className="h-full w-full object-cover object-top filter grayscale contrast-[0.95] brightness-[0.55] mix-blend-mode-luminosity opacity-40 hover:opacity-50 transition-opacity duration-750" 
          />
        </div>

        {/* Lưới tọa độ chìm */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>

        {/* Small floating glowing stars matching target style */}
        <div className="absolute rounded-full bg-white/20 pointer-events-none w-1.5 h-1.5 top-[15%] left-[8%] animate-ping"></div>
        <div className="absolute rounded-full bg-white/20 pointer-events-none w-1 h-1 top-[25%] left-[18%]"></div>
        <div className="absolute rounded-full bg-white/20 pointer-events-none w-2 h-2 top-[60%] left-[5%] animate-pulse"></div>
        <div className="absolute rounded-full bg-white/20 pointer-events-none w-1.5 h-1.5 top-[75%] left-[14%]"></div>
        <div className="absolute rounded-full bg-white/20 pointer-events-none w-1.5 h-1.5 top-[12%] right-[10%]"></div>
        <div className="absolute rounded-full bg-white/20 pointer-events-none w-1 h-1 top-[30%] right-[6%] animate-ping"></div>
        <div className="absolute rounded-full bg-white/25 pointer-events-none w-2 h-2 top-[55%] right-[8%] animate-pulse"></div>
        <div className="absolute rounded-full bg-white/20 pointer-events-none w-1.5 h-1.5 top-[80%] right-[15%]"></div>

        {/* Diagonal lines decoration */}
        <div className="absolute bg-white/10 pointer-events-none top-[20%] left-[3%] w-10 h-[1.5px] rotate-[45deg]"></div>
        <div className="absolute bg-white/10 pointer-events-none top-[70%] left-[10%] w-7 h-[1.5px] -rotate-[30deg]"></div>
        <div className="absolute bg-white/10 pointer-events-none top-[35%] right-[4%] w-12 h-[1.5px] -rotate-[45deg]"></div>
        <div className="absolute bg-white/10 pointer-events-none top-[65%] right-[12%] w-9 h-[1.5px] rotate-[20deg]"></div>

        {/* Hero Content Area */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full space-y-8">
          
          {/* Badge */}
          <div className="flex items-center justify-center gap-3 animate-float">
            <div className="h-[1.5px] w-12 bg-white/30"></div>
            <span className="inline-flex h-6 items-center justify-center rounded-full border border-white/25 bg-white/15 px-4 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm gap-1.5 hover:bg-white/25 transition-colors cursor-default">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              CMCN 4.0 & Kinh tế Chính trị
            </span>
            <div className="h-[1.5px] w-12 bg-white/30"></div>
          </div>

          {/* Rotating Búa Liềm Symbol with radial gears */}
          <div className="relative inline-flex items-center justify-center">
            <div className="absolute w-28 h-28 rounded-full border border-white/10 animate-spin-slow" style={{
              backgroundImage: 'repeating-conic-gradient(transparent 0deg, transparent 20deg, rgba(255,255,255,0.06) 20deg, rgba(255,255,255,0.06) 21deg)'
            }}></div>
            <div className="absolute w-20 h-20 rounded-full border border-white/15 animate-spin-reverse"></div>
            <span className="relative text-7xl font-black text-white/90 select-none leading-none animate-pulse drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">☭</span>
          </div>

          {/* Epic Main Titles */}
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-5 leading-tight tracking-tight drop-shadow-sm uppercase">
            CMCN 4.0 & <br />
            <span className="text-red-200">THẤT NGHIỆP</span>
          </h1>

          {/* Aesthetic Center Line */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1.5px] w-16 bg-white/25"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
            <div className="h-[1.5px] w-16 bg-white/25"></div>
          </div>

          {/* Descriptions */}
          <p className="text-xl sm:text-2xl text-red-100 mb-3 max-w-3xl mx-auto font-light">
            Tác động của AI đến CNH và nguy cơ "Đội quân thất nghiệp dự bị"
          </p>
          <p className="text-red-200/80 text-sm max-w-2xl mx-auto">
            Vận dụng lý luận kinh tế chính trị C.Mác phân tích thực tiễn Việt Nam trong các ngành thâm dụng lao động trước CMCN 4.0
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button 
              onClick={() => scrollToSection('intro')}
              className="px-8 py-4 bg-white text-red-800 rounded-full font-bold text-lg hover:bg-red-50 hover:shadow-xl hover:shadow-white/10 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 group"
            >
              Khám phá ngay
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('quiz')}
              className="px-8 py-4 bg-transparent text-white border-2 border-white/40 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/60 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              Làm bài Quiz
            </button>
          </div>

          {/* Under Quote Panel */}
          <div className="mx-auto max-w-xl bg-white/5 border border-white/10 rounded-2xl px-6 py-4 backdrop-blur-sm">
            <p className="text-red-100/90 text-sm italic leading-relaxed">
              &quot;AI không tạo ra một hiện tượng mới, mà là phiên bản công nghệ cao nhất từ trước đến nay của quy luật mà Mác đã chỉ ra cách đây 150 năm.&quot;
            </p>
            <p className="text-white/40 text-[10px] uppercase tracking-wider mt-2">— Luận điểm cốt lõi của bài thuyết trình</p>
          </div>

          {/* Counters matching target style */}
          <div className="flex flex-wrap justify-center gap-8 sm:gap-14 pt-4 text-white/95">
            <div className="text-center flex flex-col items-center gap-1 group cursor-pointer" onClick={() => scrollToSection('intro')}>
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-1 group-hover:bg-white/20 transition-colors">
                <BookOpen className="w-5 h-5 text-red-200" />
              </div>
              <div className="text-2xl font-bold">05</div>
              <div className="text-red-200/80 text-xs uppercase tracking-wider">Phần nội dung</div>
            </div>
            <div className="text-center flex flex-col items-center gap-1 group cursor-pointer" onClick={() => scrollToSection('quiz')}>
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-1 group-hover:bg-white/20 transition-colors">
                <Trophy className="w-5 h-5 text-red-200" />
              </div>
              <div className="text-2xl font-bold">05</div>
              <div className="text-red-200/80 text-xs uppercase tracking-wider">Câu hỏi Quiz</div>
            </div>
            <div className="text-center flex flex-col items-center gap-1 group cursor-pointer" onClick={() => scrollToSection('chatbot')}>
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-1 group-hover:bg-white/20 transition-colors">
                <Bot className="w-5 h-5 text-red-200" />
              </div>
              <div className="text-2xl font-bold">AI</div>
              <div className="text-red-200/80 text-xs uppercase tracking-wider">AI Chatbot</div>
            </div>
          </div>

        </div>

      </section>

      {/* ================= STICKY TABS NAVIGATION ================= */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-red-100 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-1 py-2.5 scrollbar-none items-center">
            
            {/* Logo */}
            <div className="pr-4 border-r border-slate-200 font-extrabold text-sm text-red-700 select-none flex items-center gap-1.5 flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span className="text-lg">☭</span> TRANG CHỦ
            </div>

            {/* Menu Items */}
            {[
              { id: 'intro', label: 'Lý luận C.Mác', icon: ShieldAlert },
              { id: 'theory', label: 'Số liệu & Thực tiễn', icon: BrainCircuit },
              { id: 'truth', label: 'Phản biện AI', icon: Compass },
              { id: 'practice', label: 'Case Study VN', icon: Zap },
              { id: 'digital', label: 'Bài học & Giải pháp', icon: Cpu },
              { id: 'flashcard', label: 'Flashcard 3D', icon: Layers },
              { id: 'quiz', label: 'Đố Vui', icon: Trophy },
              { id: 'debates', label: 'Phản Biện Lớp', icon: HelpCircle },
              { id: 'chatbot', label: 'Chatbot AI', icon: Bot },
              { id: 'ai-usage', label: 'Phụ Lục AI', icon: FileText },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeSection === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`relative flex items-center gap-1.5 px-4 py-2 rounded-xl font-semibold text-sm whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                    isActive 
                      ? 'text-white' 
                      : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
                  }`}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-red-gradient rounded-xl -z-10 shadow-sm shadow-red-700/25"></div>
                  )}
                  <Icon className="relative z-10 w-4 h-4" />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= MAIN CONTENT SECTION (cuộn SPA dài) ================= */}
      <main className="max-w-7xl mx-auto px-4 py-16 w-full space-y-32">

        {/* ================= PHẦN 1: LÝ LUẬN C.MÁC & ĐỘI QUÂN THẤT NGHIỆP DỰ BỊ ================= */}
        <section id="intro" className="scroll-mt-24 space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-3">
            <span className="inline-flex h-5 w-fit items-center justify-center rounded-full bg-red-100 text-red-700 border border-red-200 px-3 py-0.5 text-xs font-bold uppercase tracking-wider">
              Phần 1
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gradient-red tracking-tight">
              Lý luận "Đội quân thất nghiệp dự bị" & Vận dụng vào AI
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Lý thuyết kinh tế chính trị của C.Mác không chỉ phản ánh thế kỷ 19 mà còn dự báo chính xác hiện tượng AI thay thế lao động đang diễn ra hiện nay.
            </p>
          </div>

          {/* Luận điểm chính Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {chaptersData.intro.traps.map((trap, idx) => (
              <div key={idx} className="card-hover bg-gradient-to-br from-red-50 to-red-100 border border-red-200/60 rounded-3xl p-6 shadow-sm flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center text-2xl text-white shadow-md shadow-red-600/10">
                    {trap.icon}
                  </div>
                  <h3 className="text-lg font-bold text-red-950">{trap.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{trap.desc}</p>
                </div>
                <div className="pt-2 border-t border-red-200/30 flex items-center text-xs font-bold text-red-700 hover:text-red-900 cursor-pointer" onClick={() => scrollToSection('digital')}>
                  <span>Xem phân tích</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>

          {/* Red blockquote matching target website */}
          <div className="bg-red-gradient rounded-3xl p-8 text-white relative overflow-hidden shadow-lg shadow-red-800/10">
            <div className="text-8xl font-serif absolute -top-4 left-4 opacity-15 select-none">&quot;</div>
            <blockquote className="relative z-10 space-y-4">
              <p className="text-lg sm:text-xl italic font-light leading-relaxed">
                &quot;Chính lợi thế cạnh tranh đã giúp Việt Nam CNH thành công trong 20-30 năm qua (lao động rẻ, dồi dào) lại chính là điểm dễ tổn thương nhất trước CMCN 4.0 — vì đây đúng là các ngành dễ tự động hóa nhất.&quot;
              </p>
              <footer className="font-semibold text-red-200/90 text-sm flex items-center gap-1.5">
                <Info className="w-4 h-4" /> 
                — Nghịch lý cốt lõi trong quá trình CNH của Việt Nam
              </footer>
            </blockquote>
          </div>

          {/* Timeline vận dụng lý luận Mác */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center text-slate-800">Vận dụng lý luận Mác vào bối cảnh CMCN 4.0</h3>
            <div className="relative">
              
              {/* Vertical timeline line */}
              <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-red-100 hidden md:block"></div>

              <div className="space-y-8">
                {chaptersData.intro.historicalSchools.map((school, idx) => {
                  const isLeft = idx % 2 === 0;
                  const isExpanded = expandedTimeline[idx + 1];
                  return (
                    <div key={idx} className="relative flex flex-col md:flex-row items-stretch md:items-center w-full">
                      
                      {/* Timeline dot */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full border-2 border-white shadow-md z-10 hidden md:block transition-all duration-300 bg-red-600 scale-110"></div>

                      {/* Left container */}
                      <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-10 md:text-right flex justify-end' : 'md:pl-10 order-last flex justify-start'}`}>
                        <div className={`w-full max-w-xl rounded-2xl border transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md ${
                          isExpanded 
                            ? 'border-red-300 bg-red-50/70' 
                            : 'border-slate-200 bg-white'
                        }`}>
                          <div className="p-5 space-y-3 cursor-pointer" onClick={() => setExpandedTimeline(prev => ({ ...prev, [idx+1]: !prev[idx+1] }))}>
                            <div className="flex items-center justify-between gap-2">
                              <span className={`inline-flex px-2 py-0.5 text-[10px] font-extrabold uppercase rounded-full ${
                                isExpanded ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-500'
                              }`}>
                                {school.philosophers}
                              </span>
                              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180 text-red-600' : ''}`} />
                            </div>
                            <h4 className={`font-bold text-base ${isExpanded ? 'text-red-950' : 'text-slate-800'}`}>{school.school}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{school.desc}</p>
                          </div>
                          
                          {/* Expanded Content */}
                          {isExpanded && (
                            <div className="px-5 pb-5 border-t border-red-200/40 pt-4 bg-red-50/40 text-left">
                    <h5 className="text-xs font-bold text-red-800 uppercase tracking-wider mb-2">Phân tích sâu & Ý nghĩa thực tiễn</h5>
                              <p className="text-xs text-slate-700 leading-relaxed">
                                {idx === 0 && "Luận điểm gốc: Cấu tạo kỹ thuật tăng → nhu cầu tương đối về lao động giảm → hình thành nhân khẩu thừa tương đối. AI là phiên bản công nghệ cao nhất thực hiện quy luật này sau 150 năm."}
                                {idx === 1 && "3 hình thái: Lưu động (di chuyển tạm thời), Tiềm tàng (lao động dư nông nghiệp), Trì trệ (bán thất nghiệp kinh niên). AI tạo ra loại trì trệ mới — lao động không thể chuyển đổi kỹ năng kịp tốc độ công nghệ."}
                                {idx === 2 && "Điểm khác biệt về chất: AI thay thế cả lao động trí óc lặp lại, không chỉ lao động chân tay như CMCN 1-2. Điều này mở rộng phạm vi 'đội quân dự bị' sang cả văn phòng kỹ năng thấp/trung."}
                                {idx === 3 && "Giáo trình mục 6.1.2.2: CMCN 4.0 làm mất lợi thế sản xuất truyền thống. Mô hình CNH của Việt Nam dựa trên lao động giá rẻ chính là điểm dễ bị tổn thương nhất trước tự động hóa."}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Right empty placeholder container for large screens to balance layout */}
                      <div className="hidden md:block w-1/2"></div>

                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </section>

        {/* ================= PHẦN 2: SỐ LIỆU & THỰC TIỄN VIỆT NAM ================= */}
        <section id="theory" className="scroll-mt-24 space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-3">
            <span className="inline-flex h-5 w-fit items-center justify-center rounded-full bg-red-100 text-red-700 border border-red-200 px-3 py-0.5 text-xs font-bold uppercase tracking-wider">
              Phần 2
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gradient-red tracking-tight">
              Số liệu & Case Study: Tự động hóa tại Việt Nam
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Dữ liệu thực tế từ ngành may, logistics và các case study doanh nghiệp chứng minh nguy cơ hình thành đội quân thất nghiệp dự bị tại Việt Nam.
            </p>
          </div>

          {/* Số liệu chính 3 cột */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {chaptersData.theory.principles.map((pr, idx) => (
              <div key={idx} className="card-hover bg-gradient-to-br from-rose-50 to-rose-100 border border-rose-200/60 rounded-3xl p-6 shadow-sm flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-red-950">{pr.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{pr.desc}</p>
                </div>
                <div className="pt-2 border-t border-red-200/30 text-xs font-semibold text-slate-400">
                  Số liệu thực tế
                </div>
              </div>
            ))}
          </div>

          {/* Quote số liệu ILO */}
          <div className="bg-red-gradient text-white rounded-3xl p-8 relative overflow-hidden shadow-lg shadow-red-800/10">
            <div className="absolute right-0 bottom-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 space-y-4 max-w-4xl">
              <span className="text-red-200 font-extrabold text-xs uppercase tracking-wider">Số liệu ILO — Báo động đỏ</span>
              <p className="text-lg sm:text-xl italic font-light leading-relaxed">
                &quot;86% lao động Việt Nam trong ngành dệt may và da giày phải đối mặt với nguy cơ mất việc làm cao do sự dịch chuyển của công nghệ tự động hóa.&quot;
              </p>
              <footer className="font-semibold text-red-200/90 text-sm">— International Labour Organization (ILO), 2016</footer>
            </div>
          </div>

          {/* 3 Hệ quả grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center text-slate-800">3 Hệ quả suy ra từ số liệu thực tiễn</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {chaptersData.theory.dialecticsSteps.map((st, idx) => (
                <div key={idx} className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm space-y-3 card-hover">
                  <div className="w-10 h-10 bg-red-100 text-red-700 font-extrabold rounded-full flex items-center justify-center text-sm">
                    {st.step}
                  </div>
                  <h4 className="font-bold text-slate-800 text-base">{st.name}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{st.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* ================= PHẦN 3: PHÂN TÍCH "AI TẠO VIỆC LÀM HAY THAY THẾ?" ================= */}
        <section id="truth" className="scroll-mt-24 space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-3">
            <span className="inline-flex h-5 w-fit items-center justify-center rounded-full bg-red-100 text-red-700 border border-red-200 px-3 py-0.5 text-xs font-bold uppercase tracking-wider">
              Phần 3
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gradient-red tracking-tight">
              AI Tạo Việc Làm Hay Thay Thế? — 3 Lớp Phân Tích
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Trả lời dứt khoát phản biện thường gặp nhất: AI không xóa bỏ việc làm tuyệt đối, nhưng tái cấu trúc theo hướng phân cực kỹ năng với 3 loại "lệch" nguy hiểm.
            </p>
          </div>

          {/* Phân tích 4 lớp */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {chaptersData.truth.properties.map((prop, idx) => (
              <div key={idx} className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm flex flex-col justify-between space-y-5 card-hover">
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-rose-50 text-red-600 rounded-xl flex items-center justify-center">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">{prop.name}</h3>
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-500 uppercase tracking-wider">
                    {prop.keyword}
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed">{prop.desc}</p>
                </div>
                <div className="pt-2 border-t border-slate-100 text-xs text-slate-400 font-semibold select-none">
                  Lệch #{idx + 1}
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* ================= PHẦN 4: CASE STUDY DOANH NGHIỆP VIỆT NAM ================= */}
        <section id="practice" className="scroll-mt-24 space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-3">
            <span className="inline-flex h-5 w-fit items-center justify-center rounded-full bg-red-100 text-red-700 border border-red-200 px-3 py-0.5 text-xs font-bold uppercase tracking-wider">
              Phần 4
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gradient-red tracking-tight">
              Doanh nghiệp Việt Nam ứng dụng AI/Tự động hóa
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Case study thực tế từ ngành may, logistics và các tập đoàn lớn — chứng minh cả mặt tích cực và rủi ro của làn sóng tự động hóa tại Việt Nam.
            </p>
          </div>

          {/* Case Study 3 doanh nghiệp */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {chaptersData.practice.forms.map((form, idx) => (
              <div key={idx} className="card-hover bg-gradient-to-br from-red-50 to-orange-50 border border-orange-200/60 rounded-3xl p-6 shadow-sm flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center text-white text-xl">
                    {form.icon}
                  </div>
                  <h3 className="text-lg font-bold text-red-950">{form.name}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{form.desc}</p>
                </div>
                <div className="pt-2 border-t border-orange-200/35 text-xs font-bold text-orange-700">
                  Case Study {idx + 1}
                </div>
              </div>
            ))}
          </div>

          {/* C.Mác Quote Box */}
          <div className="bg-red-gradient text-white rounded-3xl p-8 relative overflow-hidden shadow-lg shadow-red-800/10">
            <div className="absolute right-0 bottom-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 space-y-4 max-w-4xl">
              <span className="text-red-200 font-extrabold text-xs uppercase tracking-wider">Luận điểm cốt lõi của C.Mác</span>
              <p className="text-lg sm:text-xl italic font-light leading-relaxed">
                &quot;AI không tạo ra một hiện tượng mới, mà là phiên bản công nghệ cao nhất từ trước đến nay của quy luật mà Mác đã chỉ ra cách đây 150 năm — máy móc thay lao động sống bằng lao động chết (tư bản cố định).&quot;
              </p>
              <footer className="font-semibold text-red-200/90 text-sm">— Luận điểm trung tâm của bài thuyết trình</footer>
            </div>
          </div>

          {/* 3 Decisive Roles */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center text-slate-800">Phân tích thực trạng logistics Việt Nam</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {chaptersData.practice.roles.map((role, idx) => (
                <div key={idx} className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm space-y-3 card-hover">
                  <span className="text-xs uppercase font-extrabold tracking-wider text-red-600">Phát hiện {idx+1}</span>
                  <h4 className="font-bold text-slate-800 text-base">{role.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{role.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* ================= PHẦN 5: BÀI HỌC & VAI TRÒ NHÀ NƯỚC ================= */}
        <section id="digital" className="scroll-mt-24 space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-3">
            <span className="inline-flex h-5 w-fit items-center justify-center rounded-full bg-red-100 text-red-700 border border-red-200 px-3 py-0.5 text-xs font-bold uppercase tracking-wider">
              Phần 5
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gradient-red tracking-tight">
              Bài học & Vai trò Nhà nước trong Kỷ nguyên AI
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
              Từ lý luận Mác và thực tiễn Việt Nam, 3 bài học hành động cho người lao động, doanh nghiệp và Nhà nước để ứng phó chủ động với CMCN 4.0 trong khuôn khổ <strong className="text-red-700 font-bold">kinh tế thị trường định hướng XHCN</strong>.
            </p>
          </div>

          {/* 3 Bài học hành động */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {chaptersData.digital.process.map((pr, idx) => (
              <div key={idx} className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm flex flex-col justify-between space-y-4 card-hover transition-all duration-300 hover:shadow-md" style={{
                borderTop: `4px solid ${idx === 0 ? '#dc2626' : idx === 1 ? '#eab308' : '#10b981'}`
              }}>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className={`inline-flex px-2 py-0.5 text-[10px] font-bold rounded-full ${
                      idx === 0 ? 'bg-red-50 text-red-700' : idx === 1 ? 'bg-amber-50 text-amber-700' : 'bg-emerald-50 text-emerald-700'
                    }`}>
                      {pr.phase}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-base leading-snug">{pr.title}</h4>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">{pr.trap}</div>
                  </div>
                  
                  <div className="space-y-3 pt-3 border-t border-slate-100">
                    <div className="space-y-1">
                      <span className={`text-xs font-extrabold uppercase tracking-wider ${
                        idx === 0 ? 'text-red-600' : idx === 1 ? 'text-amber-600' : 'text-emerald-600'
                      }`}>{pr.realityLabel}:</span>
                      <p className="text-gray-600 text-sm leading-relaxed">{pr.reality}</p>
                    </div>
                    <div className="space-y-2 pt-2">
                      <button
                        onClick={() => togglePhilosophy(idx)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                          showPhilosophy[idx]
                            ? 'bg-slate-150 text-slate-800 border border-slate-200'
                            : 'bg-red-50/50 text-red-700 hover:bg-red-50 border border-dashed border-red-200'
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          💡 {pr.philosophyLabel}
                        </span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          showPhilosophy[idx] ? 'rotate-180 text-slate-500' : 'text-red-500'
                        }`} />
                      </button>
                      
                      <div className={`overflow-hidden transition-all duration-300 ${
                        showPhilosophy[idx] 
                          ? 'max-h-72 opacity-100 mt-2' 
                          : 'max-h-0 opacity-0 pointer-events-none'
                      }`}>
                        <div className="p-3 bg-slate-50/60 border border-slate-100 rounded-xl">
                          <p className="text-gray-600 text-sm leading-relaxed italic">{pr.philosophy}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bảng đối chiếu Có/Không có Nhà nước */}
          <div className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 overflow-hidden">
            <div className="text-center max-w-md mx-auto">
              <h3 className="text-lg font-bold text-slate-800">Đối chiếu: Có/Không có vai trò Nhà nước trong ứng phó CMCN 4.0</h3>
              <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mt-1">Tác động lên người lao động, doanh nghiệp và cơ cấu kinh tế</p>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 border border-slate-200 rounded-2xl overflow-hidden">
                <thead className="bg-slate-50">
                  <tr>
                    {chaptersData.digital.comparison.headers.map((h, idx) => (
                      <th key={idx} className="px-6 py-4 text-left text-sm font-bold text-slate-700 tracking-wider">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  {chaptersData.digital.comparison.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-50/70 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-800">
                        {row[0]}
                      </td>
                      <td className="px-6 py-4 text-sm text-red-600 font-medium">
                        {row[1]}
                      </td>
                      <td className="px-6 py-4 text-sm text-emerald-600 font-medium">
                        {row[2]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 3 Trường hợp thực tiễn */}
          <div className="bg-slate-100/70 border border-slate-200/50 rounded-3xl p-8 sm:p-10 space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h3 className="text-2xl font-bold text-red-950">Phân tích 3 trường hợp thực tiễn tại Việt Nam</h3>
              <p className="text-slate-500 text-sm">Từ số liệu thực tế đến bài học hành động cho từng nhóm đối tượng</p>
            </div>
            
            <div className="space-y-4">
              <div className="p-5 bg-white rounded-2xl shadow-sm border border-slate-200/40">
                <h4 className="font-bold text-red-700 text-sm uppercase tracking-wider mb-2">Trường hợp 1: Người lao động kỹ năng thấp — Nhóm dễ tổn thương nhất</h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  <strong>Thực trạng:</strong> 86% lao động dệt may, da giày đối mặt nguy cơ mất việc (ILO, 2016). Khi dây chuyền may tự động hóa, hàng nghìn công nhân không thể đáp ứng kỹ năng vận hành máy CNC hay lập trình robot.
                  <br />
                  <strong className="text-emerald-700">Bài học:</strong> Cần chủ động tham gia chương trình đào tạo lại (reskilling) ngay trước khi làn sóng tự động hóa đến — không chờ đến khi mất việc mới học kỹ năng mới.
                </p>
              </div>

              <div className="p-5 bg-white rounded-2xl shadow-sm border border-slate-200/40">
                <h4 className="font-bold text-amber-700 text-sm uppercase tracking-wider mb-2">Trường hợp 2: Doanh nghiệp nội địa — Nguy cơ bị loại khỏi chuỗi cung ứng</h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  <strong>Thực trạng:</strong> 78% FDI đã tự động hóa so với chỉ 39,5% nội địa trong ngành may. 90,5% doanh nghiệp logistics vẫn ở mức số hóa sơ khai — dễ mất đơn hàng khi FDI đặt tiêu chuẩn cao hơn.
                  <br />
                  <strong className="text-emerald-700">Bài học:</strong> Đầu tư vào tự động hóa thực chất (không chỉ số hóa phần mềm), xây dựng lộ trình chuyển đổi số dài hạn để duy trì sức cạnh tranh.
                </p>
              </div>

              <div className="p-5 bg-white rounded-2xl shadow-sm border border-slate-200/40">
                <h4 className="font-bold text-emerald-700 text-sm uppercase tracking-wider mb-2">Trường hợp 3: Nghịch lý "Thừa - Thiếu" và vai trò điều tiết của Nhà nước</h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  <strong>Thực trạng:</strong> ADB (2021) dự báo tác động ròng đến 2030 vẫn tích cực — nhưng người lao động mất việc (thủ công) không thể đáp ứng việc làm mới (kỹ năng số). Thị trường tự do không giải quyết được khoảng cách này.
                  <br />
                  <strong className="text-emerald-700">Bài học:</strong> Nhà nước XHCN cần chủ động: hệ thống đào tạo lại quy mô lớn, hỗ trợ tài chính chuyển đổi ngành, chính sách thu hút FDI gắn với trách nhiệm đào tạo lao động địa phương.
                </p>
              </div>
            </div>
          </div>

        </section>

        {/* ================= FLASHCARD: 4 KHÁI NIỆM CỐT LÕI ================= */}
        <section id="flashcard" className="scroll-mt-24 space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-3">
            <span className="inline-flex h-5 w-fit items-center justify-center rounded-full bg-red-100 text-red-700 border border-red-200 px-3 py-0.5 text-xs font-bold uppercase tracking-wider">
              Flashcard 3D
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gradient-red tracking-tight">
              Flashcard: 4 Khái niệm Cốt lõi CMCN 4.0
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Nhấp vào mỗi thẻ để lật 3D và xem định nghĩa chi tiết. Ôn nhanh 4 khái niệm trọng tâm của bài thuyết trình.
            </p>
          </div>

          {/* Grid Cards 3D */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {chaptersData.truth.properties.map((prop, idx) => {
              const isFlipped = flippedCard === idx;
              return (
                <div 
                  key={idx}
                  onClick={() => setFlippedCard(isFlipped ? null : idx)}
                  className="flip-card h-64 w-full cursor-pointer group"
                >
                  <div className={`flip-card-inner relative w-full h-full text-center transition-transform duration-500 rounded-3xl shadow-sm border border-slate-200/60 ${isFlipped ? 'flipped' : ''}`} style={{
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}>
                    
                    {/* Front Side */}
                    <div className="flip-card-front absolute inset-0 bg-white rounded-3xl p-6 flex flex-col justify-between items-center bg-gradient-to-br from-white to-slate-50">
                      <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform duration-300">
                        <Compass className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-lg font-bold text-slate-800">{prop.name}</h4>
                        <span className="inline-block text-xs font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">{prop.keyword}</span>
                      </div>
                      <div className="text-xs font-semibold text-red-600 flex items-center gap-1">
                        <span>Lật để xem</span>
                        <ChevronRight className="w-3 h-3" />
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className="flip-card-back absolute inset-0 bg-red-950 text-white rounded-3xl p-6 flex flex-col justify-between items-center">
                      <span className="text-xs uppercase font-extrabold tracking-wider text-red-400">Giải thích chi tiết</span>
                      <p className="text-sm leading-relaxed text-red-100">{prop.desc}</p>
                      <button className="text-xs text-red-300 font-semibold hover:underline">Lật lại</button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </section>

        {/* ================= QUIZ: TRẮC NGHIỆM CMCN 4.0 ================= */}
        <section id="quiz" className="scroll-mt-24 space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-3">
            <span className="inline-flex h-5 w-fit items-center justify-center rounded-full bg-red-100 text-red-700 border border-red-200 px-3 py-0.5 text-xs font-bold uppercase tracking-wider">
              Đố Vui
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gradient-red tracking-tight">
              Trắc nghiệm 5 Câu hỏi về CMCN 4.0 & Lao động (MLN122)
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Kiểm tra mức độ nắm vững lý luận và số liệu thực tiễn về tác động của AI đến thị trường lao động Việt Nam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quizQuestions.map((qz) => {
              const selectedOpt = answers[qz.id];
              return (
                <div key={qz.id} className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm space-y-5">
                  
                  {/* Title Question */}
                  <div className="flex gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 font-bold flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                      {qz.id}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-800 leading-snug">
                      {qz.question}
                    </h3>
                  </div>

                  {/* List Choices */}
                  <div className="flex flex-col gap-2.5">
                    {qz.options.map((opt) => {
                      const isSelected = selectedOpt === opt.key;
                      const isCorrectOpt = opt.key === qz.correct;
                      
                      let cardStyle = 'border-slate-200/80 hover:bg-slate-50 hover:border-slate-300';
                      let letterStyle = 'bg-slate-100 text-slate-600';

                      if (selectedOpt) {
                        if (isSelected) {
                          if (isCorrectOpt) {
                            cardStyle = 'border-emerald-500 bg-emerald-50/50';
                            letterStyle = 'bg-emerald-500 text-white';
                          } else {
                            cardStyle = 'border-red-500 bg-red-50/50';
                            letterStyle = 'bg-red-500 text-white';
                          }
                        } else if (isCorrectOpt) {
                          cardStyle = 'border-emerald-300 bg-emerald-50/20';
                          letterStyle = 'bg-emerald-500/20 text-emerald-700';
                        }
                      }

                      return (
                        <div
                          key={opt.key}
                          onClick={() => !selectedOpt && setAnswers(prev => ({ ...prev, [qz.id]: opt.key }))}
                          className={`border rounded-xl p-3 flex items-center gap-3 transition-all duration-300 cursor-pointer ${cardStyle}`}
                        >
                          <div className={`w-7 h-7 rounded-lg font-bold flex items-center justify-center text-xs flex-shrink-0 transition-colors ${letterStyle}`}>
                            {opt.key}
                          </div>
                          <span className="text-xs font-semibold text-slate-700 leading-snug">{opt.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation feedback */}
                  {selectedOpt && (
                    <div className={`p-3.5 rounded-xl flex items-start gap-2.5 border text-xs ${
                      selectedOpt === qz.correct 
                        ? 'bg-emerald-50/50 border-emerald-200 text-emerald-800' 
                        : 'bg-red-50/50 border-red-200 text-red-800'
                    }`}>
                      {selectedOpt === qz.correct ? (
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-600 mt-0.5" />
                      ) : (
                        <XCircle className="w-4 h-4 flex-shrink-0 text-red-600 mt-0.5" />
                      )}
                      <div className="leading-relaxed">
                        <strong className="block mb-0.5">
                          {selectedOpt === qz.correct ? "Lựa chọn chính xác!" : "Lựa chọn chưa chính xác."}
                        </strong>
                        {qz.explain}
                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>

          {/* Reset quiz button */}
          {Object.values(answers).some(a => a !== null) && (
            <div className="text-center">
              <button 
                onClick={() => setAnswers({ 1: null, 2: null, 3: null, 4: null, 5: null })}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300/60 rounded-xl font-bold text-sm transition-all shadow-sm"
              >
                <RotateCcw className="w-4 h-4" />
                Làm lại quiz
              </button>
            </div>
          )}

        </section>

        {/* ================= PHẢN BIỆN: Q&A CMCN 4.0 ================= */}
        <section id="debates" className="scroll-mt-24 space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-3">
            <span className="inline-flex h-5 w-fit items-center justify-center rounded-full bg-red-100 text-red-700 border border-red-200 px-3 py-0.5 text-xs font-bold uppercase tracking-wider">
              Phản Biện Lớp
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gradient-red tracking-tight">
              Phản Biện Thường Gặp & Cách Đỡ Đòn
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Trang bị sẵn lý luận sắc bén để trả lời các câu hỏi hóc búa nhất từ giảng viên và khán giả về tác động của AI và CMCN 4.0 đến lao động Việt Nam.
            </p>
          </div>

          {/* Debates Accordion List matching docx */}
          <div className="max-w-4xl mx-auto space-y-4">
            {debatesData.map((deb, idx) => {
              const isExpanded = expandedDebate === idx;
              return (
                <div 
                  key={idx} 
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'border-red-300 shadow-md bg-red-50/20' : 'border-slate-200 bg-white hover:border-slate-300 shadow-sm'
                  }`}
                >
                  {/* Title Bar */}
                  <div 
                    onClick={() => setExpandedDebate(isExpanded ? null : idx)}
                    className="p-5 flex items-center justify-between gap-4 cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-3 text-left">
                      <span className={`w-8 h-8 rounded-xl font-bold flex items-center justify-center text-xs flex-shrink-0 ${
                        isExpanded ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {idx + 1}
                      </span>
                      <h4 className={`text-sm sm:text-base font-bold ${isExpanded ? 'text-red-950' : 'text-slate-800'}`}>
                        {deb.question}
                      </h4>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${isExpanded ? 'rotate-180 text-red-600' : ''}`} />
                  </div>

                  {/* Body Content */}
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-3 border-t border-red-200/40 text-left bg-red-50/10">
                      <span className="text-xs uppercase font-extrabold tracking-wider text-red-700 block mb-2">
                        🔥 Vũ khí lý luận đỡ đòn
                      </span>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {deb.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </section>

        {/* ================= CHATBOT: AI CMCN 4.0 ================= */}
        <section id="chatbot" className="scroll-mt-24 space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-3">
            <span className="inline-flex h-5 w-fit items-center justify-center rounded-full bg-red-100 text-red-700 border border-red-200 px-3 py-0.5 text-xs font-bold uppercase tracking-wider">
              Chatbot AI
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gradient-red tracking-tight">
              Hỏi AI về CMCN 4.0 & Lao động Việt Nam
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Chatbot AI mô phỏng giúp bạn tháo gỡ mọi khúc mắc về lý luận đội quân thất nghiệp dự bị, số liệu thực tiễn và vai trò Nhà nước.
            </p>
          </div>

          {/* Chat Container */}
          <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl shadow-md overflow-hidden flex flex-col md:flex-row items-stretch h-[600px] border-red-100">
            
            {/* Left FAQs sidebar */}
            <div className="md:w-1/3 bg-slate-50 border-r border-slate-200 p-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <HelpCircle className="w-4 h-4" />
                  Câu hỏi mẫu về CMCN 4.0
                </h3>
                <div className="flex flex-col gap-2">
                  {chatbotFAQ.map((faq, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(faq.q)}
                      disabled={isTyping}
                      className="text-left p-3 rounded-xl border border-slate-200/80 bg-white hover:bg-red-50 hover:border-red-200 text-xs font-semibold text-slate-700 leading-snug transition-all duration-300 hover:text-red-800 disabled:opacity-50"
                    >
                      {faq.q}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 border-t border-slate-200 text-slate-400 text-xs text-center font-medium">
                Mô phỏng Phân tích Kinh tế Chính trị
              </div>
            </div>

            {/* Right Chat logs display */}
            <div className="md:w-2/3 flex flex-col h-full bg-slate-100/30">
              
              {/* Top chat bar */}
              <div className="px-6 py-4 bg-white border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-md shadow-red-600/10">
                    <Bot className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 leading-none">CMCN 4.0 AI-Bot</h4>
                    <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                      Trực tuyến
                    </span>
                  </div>
                </div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Phân tích kinh tế chính trị
                </div>
              </div>

              {/* Message scroll log */}
              <div className="flex-grow p-6 overflow-y-auto space-y-4 flex flex-col scrollbar-thin">
                {chatMessages.map((msg, idx) => (
                  <div 
                    key={idx} 
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-red-600 text-white self-end rounded-tr-none'
                        : 'bg-white text-slate-700 border border-slate-200/80 self-start rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
                
                {isTyping && (
                  <div className="bg-white border border-slate-200/80 rounded-2xl rounded-tl-none px-4 py-3 text-sm text-slate-400 self-start animate-pulse flex items-center gap-1.5">
                    <Bot className="w-4 h-4 animate-spin text-red-600" />
                    <span>AI đang phân tích dữ liệu...</span>
                  </div>
                )}
                
                <div ref={chatEndRef} />
              </div>

              {/* Message Input box */}
              <div className="p-4 bg-white border-t border-slate-200">
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="text"
                    value={userMsg}
                    onChange={(e) => setUserMsg(e.target.value)}
                    placeholder="Đặt câu hỏi về CMCN 4.0, lao động, AI..."
                    disabled={isTyping}
                    className="flex-grow px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={!userMsg.trim() || isTyping}
                    className="px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-colors disabled:opacity-50 shadow-sm shadow-red-600/10 flex items-center justify-center"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>

            </div>

          </div>

        </section>

        {/* ================= PHẦN PHỤ LỤC: SỬ DỤNG AI TRONG DỰ ÁN ================= */}
        <section id="ai-usage" className="scroll-mt-24 space-y-14">

          {/* Section Header */}
          <div className="text-center space-y-3">
            <span className="inline-flex h-5 w-fit items-center justify-center rounded-full bg-red-100 text-red-700 border border-red-200 px-3 py-0.5 text-xs font-bold uppercase tracking-wider">
              Phụ Lục
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gradient-red tracking-tight">
              Phụ Lục: Ứng Dụng AI Trong Dự Án
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Nguyên tắc sử dụng AI trong dự án học tập chuyên đề <span className="font-semibold text-red-700">CMCN 4.0 & Thất nghiệp</span> — Kinh tế Chính trị Mác-Lênin (MLN122)
            </p>
          </div>

          {/* Intro quote */}
          <div className="max-w-3xl mx-auto bg-red-50 border border-red-200 rounded-2xl px-7 py-5 text-center">
            <p className="text-sm text-red-800 italic leading-relaxed">
              &quot;Số liệu không tự nói — con người phải đọc, phân tích và đặt đúng câu hỏi. AI hỗ trợ tra cứu, nhưng lý luận kinh tế chính trị phải do sinh viên tự xây dựng.&quot;
            </p>
            <p className="text-xs text-red-500 mt-2 font-semibold uppercase tracking-wider">— Quan điểm của nhóm nghiên cứu</p>
          </div>

          {/* 4 Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

            {/* 1. Minh Bạch */}
            <div className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm card-hover space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-red-gradient flex items-center justify-center shadow-md shadow-red-600/15 flex-shrink-0">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-extrabold text-red-800">1. Minh Bạch</h3>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Công Cụ Và Mục Đích Sử Dụng</p>
                {[
                  {
                    name: "ChatGPT",
                    desc: "Hỗ trợ tìm kiếm và tổng hợp thông tin cho website để hệ thống lý luận chặt chẽ hơn."
                  },
                  {
                    name: "NotebookLM",
                    desc: "Trích xuất thông tin trực tiếp từ giáo trình MLN122 và các báo cáo ILO, ADB, Bộ Công Thương về lao động và CMCN 4.0."
                  },
                  {
                    name: "Claude (Cursor AI)",
                    desc: "Hỗ trợ thiết kế giao diện, chỉnh sửa CSS và xây dựng cấu trúc website tương tác."
                  }
                ].map((tool, i) => (
                  <div key={i} className="flex gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="w-7 h-7 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Wrench className="w-3.5 h-3.5 text-red-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">{tool.name}</p>
                      <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{tool.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Có Trách Nhiệm */}
            <div className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm card-hover space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-red-gradient flex items-center justify-center shadow-md shadow-red-600/15 flex-shrink-0">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-extrabold text-red-800">2. Có Trách Nhiệm</h3>
              </div>

              <div className="space-y-3">
                {[
                  {
                    icon: "🔍",
                    title: "Kiểm Chứng Thông Tin",
                    desc: "Tất cả thông tin do AI hỗ trợ đều được kiểm chứng lại bằng giáo trình MLN122, báo cáo ILO, ADB, Bộ Công Thương và các nguồn học thuật chính thống."
                  },
                  {
                    icon: "👥",
                    title: "Trách Nhiệm Cá Nhân",
                    desc: "Nhóm chịu trách nhiệm hoàn toàn về nội dung cuối cùng. AI không thay thế quá trình học tập và tư duy phản biện của sinh viên."
                  },
                  {
                    icon: "📚",
                    title: "Học Tập Tích Cực",
                    desc: "AI là công cụ hỗ trợ — không thể thay thế quá trình nghiên cứu, đọc tài liệu và tư duy phân tích độc lập của sinh viên về kinh tế chính trị."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-sm font-bold text-slate-800">{item.title}</p>
                      <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Sáng Tạo */}
            <div className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm card-hover space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-red-gradient flex items-center justify-center shadow-md shadow-red-600/15 flex-shrink-0">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-extrabold text-red-800">3. Sáng Tạo</h3>
              </div>

              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Ứng Dụng AI Trong Sáng Tạo</p>

              <div className="space-y-3">
                {[
                  {
                    label: "Thiết Kế Giao Diện",
                    detail: "Ảnh minh họa, thiết kế layout, chỉnh sửa CSS cho trang web tương tác chuyên đề.",
                    color: "bg-amber-50 border-amber-200 text-amber-700"
                  },
                  {
                    label: "Tương Tác & Trò Chơi",
                    detail: "Gợi ý câu hỏi quiz và tích hợp vào minigame ôn tập CMCN 4.0 & Lao động.",
                    color: "bg-blue-50 border-blue-200 text-blue-700"
                  },
                  {
                    label: "Chatbot CMCN 4.0",
                    detail: "Xây dựng kịch bản phản hồi cho chatbot giả lập tư duy kinh tế chính trị về CMCN 4.0 và lao động.",
                    color: "bg-emerald-50 border-emerald-200 text-emerald-700"
                  }
                ].map((item, i) => (
                  <div key={i} className={`p-3 rounded-xl border text-xs font-medium ${item.color}`}>
                    <p className="font-bold text-sm mb-0.5">{item.label}</p>
                    <p className="opacity-80 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-red-50 border border-red-100 rounded-xl text-xs text-red-700">
                <span className="font-bold">Lưu ý:</span> Nội dung phân tích học thuật (số liệu, lý luận kinh tế chính trị, lập luận phản biện) đều được nhóm biên soạn dựa trên tài liệu MLN122 và nguồn chính thống.
              </div>
            </div>

            {/* 4. Liêm Chính Học Thuật */}
            <div className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm card-hover space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-red-gradient flex items-center justify-center shadow-md shadow-red-600/15 flex-shrink-0">
                  <BookMarked className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-extrabold text-red-800">4. Liêm Chính Học Thuật</h3>
              </div>

              <div className="space-y-3">
                {[
                  {
                    icon: <PenLine className="w-4 h-4" />,
                    title: "Cam Kết",
                    desc: "Không để AI làm thay hoàn toàn. AI chỉ là công cụ hỗ trợ — tư duy và kiểm chứng là trách nhiệm của sinh viên."
                  },
                  {
                    icon: <CheckCircle2 className="w-4 h-4" />,
                    title: "Phân Định Rõ",
                    desc: "Các kết quả AI sinh ra đều được chú thích, chỉnh sửa và bổ sung bởi nhóm sinh viên trước khi đưa vào sản phẩm."
                  },
                  {
                    icon: <BookOpen className="w-4 h-4" />,
                    title: "Đối Chiếu Nguồn",
                    desc: "Toàn bộ thông tin từ AI đều được so sánh với giáo trình MLN122, báo cáo ILO, ADB, Bộ Công Thương và các nguồn học thuật chính thống trước khi đưa vào sản phẩm."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="w-7 h-7 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5 text-red-600">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">{item.title}</p>
                      <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Conclusion Card */}
          <div className="max-w-5xl mx-auto bg-red-gradient rounded-3xl p-8 text-white shadow-xl shadow-red-900/15 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 blur-2xl pointer-events-none"></div>
            <div className="relative z-10 space-y-4">
              <h3 className="text-xl font-extrabold">Kết Luận</h3>
              <p className="text-red-100 text-sm leading-relaxed max-w-3xl">
                Việc sử dụng AI trong dự án học tập chuyên đề <strong>CMCN 4.0 & Thất nghiệp</strong> đã mang lại hiệu quả tích cực, giúp nhóm sinh viên tra cứu, tổng hợp số liệu và xây dựng lập luận nhanh hơn. Tuy nhiên, toàn bộ số liệu, lý luận và phân tích đều được đối chiếu lại với giáo trình MLN122, báo cáo ILO, ADB, Bộ Công Thương và Viettel — không để AI thay thế quá trình nghiên cứu độc lập.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-red-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  Nội dung đã kiểm chứng
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-red-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  Dựa trên giáo trình chính thống
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-red-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  Chịu trách nhiệm học thuật
                </div>
              </div>
            </div>
          </div>

          {/* Sources */}
          <div className="max-w-5xl mx-auto border border-slate-200 rounded-2xl p-6 bg-slate-50 space-y-3">
            <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-red-600" />
              Nguồn Tài Liệu Tham Khảo
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-0.5">•</span>
                Giáo trình Kinh tế Chính trị Mác-Lênin (MLN122) — Bộ Giáo dục và Đào tạo (tái bản 2021)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-0.5">•</span>
                International Labour Organization — <em>ASEAN in Transformation: How Technology is Changing Jobs and Enterprises</em> (ILO, 2016)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-0.5">•</span>
                Asian Development Bank — <em>The Future of Work: Regional Perspectives</em> (ADB, 2021)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-0.5">•</span>
                Bộ Công Thương Việt Nam — <em>Báo cáo Logistics Việt Nam 2024 & 2025</em>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-0.5">•</span>
                Huỳnh và cộng sự — <em>Tự động hóa trong ngành may mặc Tây Nam Bộ</em> (2026)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-0.5">•</span>
                C. Mác — <em>Tư bản luận (Das Kapital), Quyển I</em> — về Nhân khẩu thừa tương đối
              </li>
            </ul>
          </div>

        </section>

      </main>

      {/* ================= FOOTER matches target website exactly ================= */}
      <footer className="bg-slate-900 border-t border-slate-800 text-white py-14 px-4 mt-20 relative overflow-hidden">
        {/* Glow backdrop decoration */}
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-700/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-1.5">
              <span className="text-red-500">☭</span> CMCN 4.0 & THẤT NGHIỆP
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Ứng dụng web tương tác học tập về chuyên đề &quot;Cách mạng công nghiệp 4.0 và Thất nghiệp&quot; thuộc học phần Kinh tế Chính trị Mác-Lênin (MLN122). Vận dụng lý luận C.Mác phân tích tác động của AI đến lao động Việt Nam.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-red-500">Mục lục Nội dung</h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
              <span onClick={() => scrollToSection('intro')} className="hover:text-white cursor-pointer transition-colors">Lý luận C.Mác</span>
              <span onClick={() => scrollToSection('theory')} className="hover:text-white cursor-pointer transition-colors">Số liệu Thực tiễn</span>
              <span onClick={() => scrollToSection('truth')} className="hover:text-white cursor-pointer transition-colors">Phân tích AI</span>
              <span onClick={() => scrollToSection('practice')} className="hover:text-white cursor-pointer transition-colors">Case Study VN</span>
              <span onClick={() => scrollToSection('digital')} className="hover:text-white cursor-pointer transition-colors">Bài học & Giải pháp</span>
              <span onClick={() => scrollToSection('quiz')} className="hover:text-white cursor-pointer transition-colors">Trắc Nghiệm</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-red-500">Luận điểm trung tâm</h4>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-xs text-slate-300 italic leading-relaxed">
              &quot;AI không tạo ra hiện tượng mới — nó là phiên bản công nghệ cao nhất của quy luật Mác đã chỉ ra 150 năm trước. Câu hỏi không phải AI có thay thế lao động không, mà là ai sẽ bị thay thế và ai sẽ được tạo ra.&quot;
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto border-t border-slate-800 mt-8 pt-6 text-center text-xs text-slate-500 font-medium">
          © {new Date().getFullYear()} CMCN 4.0 & Thất nghiệp — MLN122. Kinh tế Chính trị Mác-Lênin.
        </div>
      </footer>

    </div>
  );
}
