import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  BookOpenText,
  GraduationCap,
  Landmark
} from 'lucide-react';
import { chapters } from './data/history1954-1975';

function ChapterNav({ activeChapter }) {
  return (
    <nav aria-label="Điều hướng các chặng" className="sticky top-0 z-30 w-full border-b border-stone-200/80 bg-[#faf9f6]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-5 py-3 sm:px-8">
        <span className="hidden shrink-0 text-[10px] font-bold uppercase tracking-[0.22em] text-stone-400 sm:block">
          Nội dung
        </span>
        <div className="grid min-w-0 flex-1 grid-cols-3 gap-2 md:flex md:items-center md:justify-between">
          {chapters.map((chapter) => (
            <a
              key={chapter.id}
              href={`#${chapter.id}`}
              aria-current={activeChapter === chapter.id ? 'location' : undefined}
              className={`flex w-full min-w-0 items-center justify-center truncate rounded-full px-1 py-2 text-[10px] font-semibold transition-colors md:w-auto md:shrink-0 md:px-4 md:text-sm ${
                activeChapter === chapter.id
                  ? 'bg-[#741e25] text-white shadow-sm'
                  : 'text-stone-600 hover:bg-stone-200/70 hover:text-[#741e25]'
              }`}
            >
              <span className="mr-2 hidden font-editorial text-base md:inline">{chapter.number}</span>
            <span className="hidden md:inline">{chapter.title}</span>
              <span className="md:hidden">Chặng {chapter.number}</span>
            </a>
          ))}
        </div>
        <a href="#chang-1" aria-label="Về đầu trang" className="hidden rounded-full p-2 text-stone-500 hover:bg-stone-200 sm:block">
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </nav>
  );
}

function MetricGrid({ metrics }) {
  return (
    <div className={`mt-6 grid gap-3 ${metrics.length === 2 ? 'grid-cols-2' : 'grid-cols-2 lg:grid-cols-3'}`}>
      {metrics.map((metric) => (
        <div key={`${metric.value}-${metric.label}`} className="min-w-0 rounded-xl border border-stone-200 bg-white/75 p-4 sm:p-5">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            <span className="font-editorial text-3xl leading-none tracking-tight text-[#741e25] sm:text-4xl">{metric.value}</span>
            {metric.unit && <span className="text-xs font-semibold text-stone-500 sm:text-sm">{metric.unit}</span>}
          </div>
          <p className="mt-2 text-xs leading-relaxed text-stone-600 sm:text-sm">{metric.label}</p>
        </div>
      ))}
    </div>
  );
}

function SlideCard({ slide, index }) {
  return (
    <article
      id={`slide-${slide.number}`}
      data-reveal
      style={{ '--reveal-delay': `${index * 55}ms` }}
      className="scroll-mt-28 border-t border-stone-300/80 py-8 first:border-t-0 sm:py-10"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[4.5rem_minmax(0,1fr)] md:gap-8">
        <div className="flex items-center md:block">
          <span className="font-editorial text-4xl leading-none text-[#a43b3c] sm:text-5xl">{slide.number}</span>
        </div>

        <div className="min-w-0">
          <h3 className="min-w-0 break-words font-editorial text-2xl font-semibold leading-tight tracking-[-0.025em] text-stone-900 sm:text-3xl">
            {slide.title}
          </h3>
          {slide.lead && <p className="mt-3 max-w-3xl break-words text-sm leading-7 text-stone-600 sm:text-base">{slide.lead}</p>}

          {slide.points && (
            <ul className="mt-5 grid gap-3 sm:mt-6 sm:gap-3.5">
              {slide.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-7 text-stone-700 sm:text-base">
                  <span className="mt-[0.78rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#a43b3c]" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}

          {slide.metrics && <MetricGrid metrics={slide.metrics} />}
          {slide.metricNote && <p className="mt-3 text-xs leading-6 text-stone-500">{slide.metricNote}</p>}

          {slide.conclusion && (
            <aside data-reveal aria-label="Kết luận" className="mt-6 rounded-2xl border border-[#ead8ba] bg-[#f6efe3] px-4 py-4 sm:px-5 sm:py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8a5a22]">Kết luận</p>
              <p className="mt-2 text-sm leading-7 text-stone-700 sm:text-[15px]">{slide.conclusion}</p>
            </aside>
          )}

          {slide.highlight && (
            <div data-reveal className="mt-6 rounded-2xl border border-stone-200 bg-[#f2f0eb]/80 px-4 py-4 sm:px-5 sm:py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8a5a22]">{slide.highlightLabel}</p>
              {slide.highlightKind === 'sequence' ? (
                <>
                  {slide.highlightLead && <p className="mt-3 font-editorial text-lg text-stone-700 sm:text-xl">{slide.highlightLead}</p>}
                  <ol aria-label="Trình tự chiến dịch" className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-2">
                    {slide.highlight.split(' → ').map((step, stepIndex, steps) => (
                      <li key={step} className="flex items-center gap-2">
                        <span className="rounded-full border border-stone-300 bg-white px-3 py-1.5 text-sm font-medium text-stone-800 sm:text-base">{step}</span>
                        {stepIndex < steps.length - 1 && <span aria-hidden="true" className="text-[#a43b3c]">→</span>}
                      </li>
                    ))}
                  </ol>
                </>
              ) : (
                <p className="mt-2 font-editorial text-lg leading-relaxed text-stone-800 sm:text-xl">{slide.highlight}</p>
              )}
            </div>
          )}

          <div className="mt-6 flex gap-2 border-t border-stone-200 pt-4 text-xs leading-6 text-stone-500 sm:text-[13px]">
            <BookOpenText size={15} className="mt-1 shrink-0 text-[#a43b3c]" aria-hidden="true" />
            <p><span className="font-semibold text-stone-600">Nguồn:</span> {slide.source}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

function ChapterSection({ chapter }) {
  return (
    <section id={chapter.id} className="scroll-mt-24 py-12 sm:py-16">
      <div className="mb-3 flex items-center gap-3">
        <span className="h-px w-8 bg-[#a43b3c]" aria-hidden="true" />
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8e3035]">Chặng {chapter.number}</p>
      </div>
      <div data-reveal className="mb-8 max-w-4xl border-t border-stone-300 pt-5">
        <h2 className="min-w-0 w-full max-w-full break-words font-editorial text-3xl font-semibold leading-tight tracking-[-0.035em] text-stone-900 sm:text-4xl">
          {chapter.number === '01' ? <><span className="sm:inline">Bối cảnh, ý nghĩa</span><br className="sm:hidden" /><span> và nhân tố thắng lợi</span></> : chapter.title}
        </h2>
        <p className="mt-4 max-w-3xl font-editorial text-lg leading-7 text-stone-600 sm:text-xl sm:leading-8">{chapter.intro}</p>
      </div>
      <div className="rounded-2xl border border-stone-200 bg-white/45 px-5 shadow-[0_14px_50px_-38px_rgba(41,37,36,0.3)] sm:px-8">
        {chapter.slides.map((slide, index) => <SlideCard key={slide.number} slide={slide} index={index} />)}
      </div>
    </section>
  );
}

export default function App() {
  const [activeChapter, setActiveChapter] = useState(chapters[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveChapter(visible.target.id);
      },
      { rootMargin: '-18% 0px -68% 0px', threshold: [0, 0.15, 0.35, 0.6] }
    );

    chapters.forEach((chapter) => {
      const section = document.getElementById(chapter.id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) return undefined;

    const targets = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -40px 0px', threshold: 0.08 });

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen w-screen min-w-0 max-w-[100vw] overflow-x-clip bg-[#faf9f6] text-stone-800">
      <header className="bg-[#651d24] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/25 bg-white/5">
              <Landmark size={17} aria-hidden="true" />
            </span>
            <div className="min-w-0 w-full">
              <p className="truncate text-[11px] font-semibold tracking-wide sm:text-xs">Trường Đại học FPT</p>
              <p className="mt-0.5 text-[9px] uppercase tracking-[0.18em] text-white/65 sm:text-[10px]">Học phần VNR202</p>
            </div>
          </div>
          <div className="hidden shrink-0 items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/85 sm:flex sm:text-xs">
            <GraduationCap size={14} aria-hidden="true" />
            <span>Trình bày học thuật</span>
          </div>
        </div>
      </header>

      <main className="min-w-0 w-full max-w-full">
        <section className="relative isolate overflow-hidden bg-[#711f27] text-white">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_76%_18%,rgba(193,126,72,0.2),transparent_33%),linear-gradient(125deg,transparent_42%,rgba(35,10,14,0.45))]" />
          <div className="mx-auto grid max-w-6xl grid-cols-1 px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-16">
            <div data-reveal className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#e7bd87] sm:text-xs">Lịch sử Đảng Cộng sản Việt Nam</p>
              <h1 className="mt-5 min-w-0 w-full max-w-full break-words font-editorial text-4xl font-semibold leading-[1.06] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                <span className="block sm:inline">Ý nghĩa lịch sử</span>{' '}
                <span className="block sm:inline">và kinh nghiệm</span>{' '}
                <span className="block sm:inline">lãnh đạo của Đảng</span>
              </h1>
              <p className="mt-4 font-editorial text-2xl italic text-[#f0d9b8] sm:text-3xl">thời kỳ 1954–1975</p>
              <p className="mt-7 w-full max-w-2xl whitespace-normal break-words text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                Từ thắng lợi năm 1975, nhìn lại những nhân tố quyết định, bài học lãnh đạo và cách vận dụng vào phát triển hôm nay.
              </p>
              <a href="#chang-1" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#f0d9b8] px-5 py-3 text-xs font-bold text-[#54171d] transition hover:bg-white sm:text-sm">
                Khám phá nội dung <ArrowDown size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="h-1 bg-gradient-to-r from-[#b85d42] via-[#e4b777] to-[#8d3433]" />
        </section>

        <ChapterNav activeChapter={activeChapter} />

        <div className="mx-auto max-w-6xl px-5 pb-10 sm:px-8 sm:pb-16">
          <div className="mb-2 mt-7 text-xs text-stone-500">
            <span className="font-semibold uppercase tracking-[0.14em]">Nội dung trình bày</span>
          </div>
          {chapters.map((chapter) => <ChapterSection key={chapter.id} chapter={chapter} />)}
        </div>
      </main>

      <footer className="border-t border-stone-200 bg-[#f2f0eb]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-7 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="font-semibold text-stone-700">Trường Đại học FPT <span className="mx-1 text-stone-400">·</span> VNR202</p>
          <p>Ý nghĩa lịch sử và kinh nghiệm lãnh đạo của Đảng thời kỳ 1954–1975</p>
        </div>
      </footer>
    </div>
  );
}
