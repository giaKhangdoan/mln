import { useState } from 'react';
import { CheckCircle2, RotateCcw, XCircle } from 'lucide-react';

const questions = [
  {
    id: 1,
    category: 'Bối cảnh lịch sử',
    question: 'Câu nói “...nếu nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì” xuất hiện trong văn bản nào của Hồ Chí Minh?',
    options: [
      ['A', 'Tuyên ngôn Độc lập (02-09-1945)'],
      ['B', 'Thư gửi Ủy ban nhân dân các kỳ, tỉnh, huyện và làng (17-10-1945, Tập 4, tr.64)'],
      ['C', 'Lời kêu gọi toàn quốc kháng chiến (19-12-1946)'],
      ['D', 'Diễn văn bế mạc kỳ họp thứ nhất Quốc hội khóa I (1946)']
    ],
    correct: 'B',
    explain: 'Câu nói được trích từ Thư gửi Ủy ban nhân dân các kỳ, tỉnh, huyện và làng ngày 17-10-1945, in trong Hồ Chí Minh Toàn tập, Tập 4, tr.64.'
  },
  {
    id: 2,
    category: 'Khung lý luận',
    question: 'Luận điểm “Độc lập dân tộc phải gắn liền tự do, hạnh phúc của nhân dân” ở trang 43 của tài liệu tham khảo là gì?',
    options: [
      ['A', 'Câu trích nguyên văn lời nói của Chủ tịch Hồ Chí Minh trong kháng chiến'],
      ['B', 'Tiêu đề khung luận điểm trong Giáo trình Tư tưởng Hồ Chí Minh (Bộ GD&ĐT, 2019)'],
      ['C', 'Trích đoạn lời nói đầu của Hiến pháp năm 1946'],
      ['D', 'Khẩu hiệu tuyên truyền của Mặt trận Việt Minh']
    ],
    correct: 'B',
    explain: 'Trang 43 là tiêu đề khung luận điểm do ban biên soạn Giáo trình Tư tưởng Hồ Chí Minh năm 2019 khái quát hóa, không phải câu trích nguyên văn của Chủ tịch Hồ Chí Minh.'
  },
  {
    id: 3,
    category: 'Khung lý luận',
    question: 'Trong sơ đồ Meaning Map, tại sao “Nhân dân” được đặt ở vị trí trung tâm tham chiếu?',
    options: [
      ['A', 'Vì nhân dân được bổ sung làm giá trị thứ tư vào khẩu hiệu'],
      ['B', 'Vì nhân dân là trung tâm tham chiếu để hỏi: Độc lập cho ai, tự do cho ai, hạnh phúc cho ai?'],
      ['C', 'Vì bố cục mỹ thuật đòi hỏi phải có 4 góc đối xứng nhau'],
      ['D', 'Vì nhân dân thay thế hoàn toàn cho khái niệm độc lập chính trị']
    ],
    correct: 'B',
    explain: 'Nhân dân không phải giá trị thứ tư; nhân dân là trung tâm tham chiếu để kiểm tra ý nghĩa thực chất của ba giá trị.'
  },
  {
    id: 4,
    category: 'Phương pháp luận',
    question: 'Khi sử dụng văn bản 1946 (Tập 4, tr.175) nói về “ăn, mặc, ở, học hành”, vì sao nhóm gắn dấu sao (*) cho khái niệm Hạnh phúc?',
    options: [
      ['A', 'Để khẳng định 4 điều kiện này là định nghĩa đầy đủ, duy nhất của hạnh phúc'],
      ['B', 'Để nhắc nhở đây là một phương diện đời sống thực tiễn cụ thể, không phải toàn bộ định nghĩa'],
      ['C', 'Để báo hiệu rằng trích dẫn này chưa được kiểm chứng trong tài liệu gốc'],
      ['D', 'Để chỉ ra rằng khái niệm hạnh phúc không có giá trị học thuật']
    ],
    correct: 'B',
    explain: 'Các điều kiện ăn, mặc, ở, học hành là phương diện đời sống cụ thể; dấu sao giúp tránh đồng nhất chúng với toàn bộ định nghĩa hạnh phúc.'
  },
  {
    id: 5,
    category: 'Vấn đề phản biện',
    question: 'Nếu một quốc gia đã có độc lập chính trị nhưng một bộ phận nhân dân chưa được bảo đảm tự do và đời sống, bản đồ lập luận trả lời thế nào?',
    options: [
      ['A', 'Phủ nhận hoàn toàn nền độc lập chính trị của quốc gia đó'],
      ['B', 'Độc lập chính trị là nền tảng cần bảo vệ, nhưng ý nghĩa đầy đủ cần được tiếp tục hoàn thiện trong gắn kết với tự do và đời sống nhân dân'],
      ['C', 'Tuyên bố độc lập và hạnh phúc là hai phạm trù mâu thuẫn triệt tiêu lẫn nhau'],
      ['D', 'Cho rằng chỉ cần độc lập chính trị là tự động có được tự do và hạnh phúc']
    ],
    correct: 'B',
    explain: 'Không phủ nhận nền độc lập chính trị, nhưng cũng không đồng nhất độc lập với trạng thái hình thức khép kín; ý nghĩa đầy đủ nằm ở đời sống nhân dân.'
  }
];

export default function QuizSection() {
  const [answers, setAnswers] = useState({});

  const reset = () => setAnswers({});

  return (
    <section id="quiz" className="scroll-mt-20 max-w-5xl mx-auto px-4 sm:px-6 pb-16 w-full space-y-8">
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-7">
        <div className="text-center space-y-2">
          <p className="text-xs font-bold uppercase tracking-wider text-red-800">Ôn tập tương tác</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Trắc nghiệm nội dung Meaning Map</h2>
          <p className="text-sm text-slate-600">Kiểm tra khả năng đối chiếu nguồn, khái niệm và giới hạn của lập luận.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {questions.map(question => {
            const selected = answers[question.id];
            return (
              <article key={question.id} className="border border-slate-200 rounded-2xl p-5 space-y-4">
                <div className="space-y-1">
                  <p className="text-[11px] font-bold uppercase text-slate-500">{question.category}</p>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">Câu {question.id}. {question.question}</h3>
                </div>
                <div className="space-y-2">
                  {question.options.map(([key, text]) => {
                    const isSelected = selected === key;
                    const isCorrect = key === question.correct;
                    const style = selected
                      ? isSelected
                        ? isCorrect ? 'border-emerald-500 bg-emerald-50 text-emerald-950' : 'border-red-500 bg-red-50 text-red-950'
                        : isCorrect ? 'border-emerald-300 bg-emerald-50/50 text-emerald-900' : 'border-slate-200 text-slate-500'
                      : 'border-slate-200 text-slate-700 hover:bg-slate-50';
                    return (
                      <button key={key} type="button" disabled={Boolean(selected)} onClick={() => setAnswers(prev => ({ ...prev, [question.id]: key }))} className={`w-full text-left p-3 rounded-xl border text-xs leading-relaxed transition-colors ${style}`}>
                        <span className="font-bold mr-2">{key}.</span>{text}
                      </button>
                    );
                  })}
                </div>
                {selected && (
                  <div className={`p-3 rounded-xl text-xs leading-relaxed flex gap-2 ${selected === question.correct ? 'bg-emerald-50 text-emerald-900' : 'bg-red-50 text-red-900'}`}>
                    {selected === question.correct ? <CheckCircle2 className="w-4 h-4 shrink-0" /> : <XCircle className="w-4 h-4 shrink-0" />}
                    <span><strong>{selected === question.correct ? 'Chính xác. ' : 'Chưa chính xác. '}</strong>{question.explain}</span>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {Object.keys(answers).length > 0 && (
          <div className="text-center">
            <button type="button" onClick={reset} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200">
              <RotateCcw className="w-3.5 h-3.5" /> Làm lại bộ câu hỏi
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
