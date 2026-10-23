import { useState } from 'react';
import { ArrowRight, CheckCircle2, LockKeyhole, RotateCcw, XCircle } from 'lucide-react';
import { historyQuizQuestions } from '../data/historyQuiz';

const quizPassword = '30/04/1975'.split('').reverse().join('');

function normalizePassword(value) {
  return value.replace(/\D/g, '');
}

export default function QuizSection() {
  const [password, setPassword] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const answeredCount = Object.keys(answers).length;
  const correctCount = historyQuizQuestions.filter((question) => answers[question.id] === question.answer).length;

  function unlockQuiz(event) {
    event.preventDefault();
    if (normalizePassword(password) !== normalizePassword(quizPassword)) {
      setPasswordError('Mật khẩu chưa đúng. Hãy thử lại.');
      return;
    }

    setPasswordError('');
    setUnlocked(true);
  }

  function submitAnswers(event) {
    event.preventDefault();
    if (answeredCount === historyQuizQuestions.length) setSubmitted(true);
  }

  function resetQuiz() {
    setAnswers({});
    setSubmitted(false);
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
          Năm câu hỏi ôn lại nội dung vừa trình bày. Chọn một đáp án cho mỗi câu.
        </p>
      </div>

      {!unlocked ? (
        <form onSubmit={unlockQuiz} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-[0_14px_50px_-38px_rgba(41,37,36,0.3)] sm:p-8">
          <div className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#f4eee6] text-[#741e25]">
              <LockKeyhole size={20} aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="text-xl font-semibold text-stone-900 sm:text-2xl">Mở khóa phần trắc nghiệm</h3>
              <p id="quiz-password-hint" className="mt-2 text-base leading-7 text-stone-700">
                Gợi ý mật khẩu: viết ngược ngày 30/04/1975.
              </p>
            </div>
          </div>

          <label htmlFor="quiz-password" className="mt-6 block text-sm font-semibold text-stone-800">Mật khẩu</label>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <input
              id="quiz-password"
              type="password"
              inputMode="numeric"
              autoComplete="off"
              maxLength={10}
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setPasswordError('');
              }}
              aria-invalid={Boolean(passwordError)}
              aria-describedby={passwordError ? 'quiz-password-hint quiz-password-error' : 'quiz-password-hint'}
              placeholder="Nhập mật khẩu"
              className="min-h-12 min-w-0 flex-1 rounded-xl border border-stone-300 bg-white px-4 text-base text-stone-900 placeholder:text-stone-600 focus:border-[#741e25] focus:outline-none focus:ring-2 focus:ring-[#741e25]/20"
            />
            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#741e25] px-5 text-base font-semibold text-white transition-colors hover:bg-[#5f1820] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#741e25] active:scale-[0.99]"
            >
              Mở phần trắc nghiệm <ArrowRight size={17} aria-hidden="true" />
            </button>
          </div>
          {passwordError && <p id="quiz-password-error" role="alert" className="mt-3 text-sm font-semibold text-[#9b252d]">{passwordError}</p>}
        </form>
      ) : (
        <div className="quiz-feedback-enter rounded-2xl border border-stone-200 bg-white p-5 shadow-[0_14px_50px_-38px_rgba(41,37,36,0.3)] sm:p-8">
          <div className="mb-7 grid gap-4 rounded-xl bg-[#f4f1eb] p-4 sm:grid-cols-[1fr_auto] sm:items-center sm:p-5">
            <div>
              <p className="text-sm font-semibold text-stone-700">{submitted ? 'Kết quả của bạn' : 'Tiến độ'}</p>
              <p aria-live="polite" className="mt-1 text-lg font-semibold text-stone-900">
                {submitted ? `Bạn trả lời đúng ${correctCount} / ${historyQuizQuestions.length} câu` : `Đã chọn ${answeredCount} / ${historyQuizQuestions.length} câu`}
              </p>
            </div>
            <div
              className="h-2 w-full overflow-hidden rounded-full bg-stone-300 sm:w-40"
              role="progressbar"
              aria-label="Số câu đã trả lời"
              aria-valuemin={0}
              aria-valuemax={historyQuizQuestions.length}
              aria-valuenow={answeredCount}
            >
              <div className="quiz-progress-fill h-full rounded-full bg-[#741e25]" style={{ width: `${(answeredCount / historyQuizQuestions.length) * 100}%` }} />
            </div>
          </div>

          <form onSubmit={submitAnswers}>
            <ol className="space-y-7">
              {historyQuizQuestions.map((question, index) => {
                const selectedAnswer = answers[question.id];
                const isCorrect = selectedAnswer === question.answer;

                return (
                  <li key={question.id} className="border-t border-stone-200 pt-6 first:border-t-0 first:pt-0">
                    <fieldset disabled={submitted}>
                      <legend className="text-lg font-semibold leading-7 text-stone-900 sm:text-xl">
                        <span className="mr-2 text-[#741e25]">{index + 1}.</span>{question.question}
                      </legend>
                      <div className="mt-4 grid gap-3">
                        {question.options.map((option) => {
                          const selected = selectedAnswer === option.id;
                          const correctOption = submitted && question.answer === option.id;
                          let optionState = 'border-stone-300 bg-white hover:border-[#a43b3c] hover:bg-[#fcfaf7]';
                          if (selected) optionState = 'border-[#741e25] bg-[#f8f1ee]';
                          if (submitted && correctOption) optionState = 'border-[#487252] bg-[#f0f6f0]';
                          if (submitted && selected && !isCorrect) optionState = 'border-[#a33a3a] bg-[#fbf1ef]';

                          return (
                            <label key={option.id} className={`flex min-h-12 cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 text-base leading-7 text-stone-800 transition-colors focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#741e25] has-[:disabled]:cursor-default ${optionState}`}>
                              <input
                                type="radio"
                                name={`question-${question.id}`}
                                value={option.id}
                                checked={selected}
                                onChange={() => setAnswers((current) => ({ ...current, [question.id]: option.id }))}
                                className="mt-1.5 h-4 w-4 shrink-0 accent-[#741e25]"
                              />
                              <span className="min-w-0"><span className="mr-2 font-semibold">{option.id}.</span>{option.text}</span>
                            </label>
                          );
                        })}
                      </div>
                    </fieldset>

                    {submitted && (
                      <div className="quiz-feedback-enter mt-4 rounded-xl bg-[#f5f3ef] p-4">
                        <p className={`flex items-center gap-2 text-sm font-semibold ${isCorrect ? 'text-[#365d3f]' : 'text-[#8b272d]'}`}>
                          {isCorrect ? <CheckCircle2 size={17} aria-hidden="true" /> : <XCircle size={17} aria-hidden="true" />}
                          {isCorrect ? 'Bạn chọn đúng.' : `Đáp án đúng: ${question.answer}.`}
                        </p>
                        <p className="mt-2 text-base leading-7 text-stone-700">{question.explanation}</p>
                      </div>
                    )}
                  </li>
                );
              })}
            </ol>

            <div className="mt-8 flex flex-col gap-3 border-t border-stone-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-stone-700">
                {submitted ? 'Bạn có thể làm lại bài để thử thêm lần nữa.' : 'Trả lời đủ năm câu để xem kết quả và phần giải thích.'}
              </p>
              {submitted ? (
                <button
                  type="button"
                  onClick={resetQuiz}
                  className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl border border-stone-300 bg-white px-5 text-base font-semibold text-stone-800 transition-colors hover:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#741e25]"
                >
                  <RotateCcw size={16} aria-hidden="true" /> Làm lại
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={answeredCount !== historyQuizQuestions.length}
                  className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#741e25] px-5 text-base font-semibold text-white transition-colors hover:bg-[#5f1820] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#741e25] active:scale-[0.99] disabled:cursor-not-allowed disabled:bg-stone-300 disabled:text-stone-700"
                >
                  Xem kết quả <ArrowRight size={17} aria-hidden="true" />
                </button>
              )}
            </div>
          </form>
        </div>
      )}
    </section>
  );
}
