import { useState } from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2, LockKeyhole, RotateCcw, XCircle } from 'lucide-react';
import { chapter2QuizQuestions } from '../data/historyQuiz';

const reverseDatePassword = '30/04/1975'.split('').reverse().join('');

export default function QuizSection() {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [answers, setAnswers] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const question = chapter2QuizQuestions[questionIndex];
  const selectedAnswer = answers[question?.id];
  const answeredCount = Object.keys(answers).length;
  const correctCount = chapter2QuizQuestions.filter((item) => answers[item.id] === item.answer).length;
  const isCorrect = selectedAnswer === question?.answer;

  function unlockQuiz(event) {
    event.preventDefault();
    const enteredDigits = password.replace(/\D/g, '');
    const expectedDigits = reverseDatePassword.replace(/\D/g, '');

    if (enteredDigits !== expectedDigits) {
      setPasswordError(true);
      return;
    }

    setPasswordError(false);
    setUnlocked(true);
  }

  function chooseAnswer(optionId) {
    if (selectedAnswer) return;
    setAnswers((current) => ({ ...current, [question.id]: optionId }));
  }

  function resetQuiz() {
    setAnswers({});
    setQuestionIndex(0);
    setShowResult(false);
  }

  function advance() {
    if (questionIndex === chapter2QuizQuestions.length - 1) {
      setShowResult(true);
      return;
    }
    setQuestionIndex((current) => current + 1);
  }

  return (
    <section id="quiz" className="scroll-mt-32 py-12 sm:py-16">
      <div className="mb-3 flex items-center gap-3">
        <span className="h-px w-8 bg-[#a43b3c]" aria-hidden="true" />
        <p className="text-sm font-semibold text-[#741e25]">Phần 04</p>
      </div>
      <div data-reveal className="mb-8 max-w-4xl border-t border-stone-300 pt-5">
        <h2 className="text-3xl font-semibold leading-[1.15] text-stone-900 sm:text-4xl">Trắc nghiệm</h2>
        <p className="mt-4 max-w-[68ch] text-lg leading-8 text-stone-700">
          Năm câu hỏi ôn tập Chương 2. Chọn một đáp án để xem kết quả và giải thích ngay.
        </p>
      </div>

      {!unlocked ? (
        <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-[0_14px_50px_-38px_rgba(41,37,36,0.3)] sm:p-8">
          <div className="grid gap-5 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-[#f4f1eb] text-[#741e25]">
              <LockKeyhole size={21} aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-xl font-semibold text-stone-900 sm:text-2xl">Mở khóa phần trắc nghiệm</h3>
              <p className="mt-2 max-w-[62ch] text-base leading-7 text-stone-700">Nhập mật khẩu để bắt đầu. Sau mỗi lựa chọn, đáp án đúng hoặc sai sẽ hiện ngay.</p>
              <form onSubmit={unlockQuiz} className="mt-5 grid gap-2 sm:max-w-xl sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
                <div className="min-w-0">
                  <label htmlFor="quiz-password" className="mb-1.5 block text-sm font-semibold text-stone-800">Mật khẩu</label>
                  <input
                    id="quiz-password"
                    type="password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      if (passwordError) setPasswordError(false);
                    }}
                    autoComplete="off"
                    maxLength={10}
                    required
                    aria-invalid={passwordError}
                    aria-describedby={passwordError ? 'quiz-password-error' : undefined}
                    placeholder="Nhập mật khẩu"
                    className="min-h-12 w-full rounded-xl border border-stone-300 bg-white px-4 text-base text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-[#741e25] focus:ring-2 focus:ring-[#741e25]/15"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#741e25] px-5 text-base font-semibold text-white transition-colors hover:bg-[#5f1820] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#741e25] active:scale-[0.99]"
                >
                  Mở câu hỏi <ArrowRight size={16} aria-hidden="true" />
                </button>
                {passwordError && <p id="quiz-password-error" role="alert" className="text-sm font-semibold text-[#8b272d] sm:col-span-2">Mật khẩu chưa đúng. Hãy thử lại.</p>}
              </form>
            </div>
          </div>
        </div>
      ) : showResult ? (
        <div className="quiz-feedback-enter rounded-2xl border border-stone-200 bg-white p-5 shadow-[0_14px_50px_-38px_rgba(41,37,36,0.3)] sm:p-8">
          <div className="mx-auto max-w-xl py-4 text-center">
            <p className="text-sm font-semibold text-[#741e25]">Hoàn thành</p>
            <h3 className="mt-2 text-2xl font-semibold text-stone-900 sm:text-3xl">Bạn trả lời đúng {correctCount}/{chapter2QuizQuestions.length} câu</h3>
            <p className="mt-3 text-base leading-7 text-stone-700">Các câu hỏi và giải thích được xây dựng từ giáo trình và nguồn thống kê ghi trong phụ lục.</p>
            <button
              type="button"
              onClick={resetQuiz}
              className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-stone-300 bg-white px-5 text-base font-semibold text-stone-800 transition-colors hover:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#741e25]"
            >
              <RotateCcw size={16} aria-hidden="true" /> Làm lại
            </button>
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-[0_14px_50px_-38px_rgba(41,37,36,0.3)] sm:p-8">
          <div className="mb-7 grid gap-4 rounded-xl bg-[#f4f1eb] p-4 sm:grid-cols-[1fr_auto] sm:items-center sm:p-5">
            <div>
              <p className="text-sm font-semibold text-stone-700">Câu {questionIndex + 1}/{chapter2QuizQuestions.length}</p>
              <p aria-live="polite" className="mt-1 text-base font-semibold text-stone-900">
                Đã trả lời {answeredCount}/{chapter2QuizQuestions.length} · đúng {correctCount}
              </p>
            </div>
            <div
              className="h-2 w-full overflow-hidden rounded-full bg-stone-300 sm:w-40"
              role="progressbar"
              aria-label="Tiến độ trả lời câu hỏi"
              aria-valuemin={0}
              aria-valuemax={chapter2QuizQuestions.length}
              aria-valuenow={answeredCount}
            >
              <div className="quiz-progress-fill h-full rounded-full bg-[#741e25]" style={{ width: `${(answeredCount / chapter2QuizQuestions.length) * 100}%` }} />
            </div>
          </div>

          <fieldset disabled={Boolean(selectedAnswer)}>
            <legend className="text-lg font-semibold leading-7 text-stone-900 sm:text-xl">
              <span className="mr-2 text-[#741e25]">{questionIndex + 1}.</span>{question.question}
            </legend>
            <div className="mt-4 grid gap-3">
              {question.options.map((option) => {
                const selected = selectedAnswer === option.id;
                const correctOption = Boolean(selectedAnswer) && question.answer === option.id;
                let optionState = 'border-stone-300 bg-white hover:border-[#a43b3c] hover:bg-[#fcfaf7]';
                if (selected && isCorrect) optionState = 'border-[#487252] bg-[#f0f6f0]';
                if (selected && !isCorrect) optionState = 'border-[#a33a3a] bg-[#fbf1ef]';
                if (correctOption && !isCorrect) optionState = 'border-[#487252] bg-[#f0f6f0]';

                return (
                  <label key={option.id} className={`flex min-h-12 cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 text-base leading-7 text-stone-800 transition-colors focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#741e25] has-[:disabled]:cursor-default ${optionState}`}>
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={option.id}
                      checked={selected}
                      onChange={() => chooseAnswer(option.id)}
                      className="mt-1.5 h-4 w-4 shrink-0 accent-[#741e25]"
                    />
                    <span className="min-w-0"><span className="mr-2 font-semibold">{option.id}.</span>{option.text}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          {selectedAnswer && (
            <div role="status" aria-live="polite" className="quiz-feedback-enter mt-4 rounded-xl bg-[#f5f3ef] p-4">
              <p className={`flex items-center gap-2 text-sm font-semibold ${isCorrect ? 'text-[#365d3f]' : 'text-[#8b272d]'}`}>
                {isCorrect ? <CheckCircle2 size={17} aria-hidden="true" /> : <XCircle size={17} aria-hidden="true" />}
                {isCorrect ? 'Chính xác!' : `Chưa đúng. Đáp án đúng là ${question.answer}.`}
              </p>
              <p className="mt-2 text-base leading-7 text-stone-700">{question.explanation}</p>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                <span className="font-semibold">Nguồn:</span> {question.source}{' '}
                {question.sourceUrl && (
                  <a href={question.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-1 font-semibold text-[#741e25] no-underline hover:text-[#a1383d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#741e25]">
                    Mở nguồn <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                )}
              </p>
              <button
                type="button"
                onClick={advance}
                className="mt-4 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#741e25] px-5 text-base font-semibold text-white transition-colors hover:bg-[#5f1820] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#741e25] active:scale-[0.99]"
              >
                {questionIndex === chapter2QuizQuestions.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo'}
                <ArrowRight size={16} aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
