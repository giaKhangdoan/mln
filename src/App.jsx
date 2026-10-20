import { useEffect, useRef, useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  BookOpenText,
  Landmark
} from 'lucide-react';
import { chapters } from './data/history1954-1975';
import { historicalPhotos } from './data/historicalPhotos';

function ChapterNav({ activeChapter }) {
  return (
    <nav aria-label="Điều hướng các chặng" className="sticky top-0 z-30 w-full border-b border-white/15 bg-[#651d24]">
      <div className="mx-auto flex max-w-6xl items-center px-3 py-2 sm:px-8">
        <div className="grid min-w-0 flex-1 grid-cols-3 gap-2 md:flex md:items-center md:justify-between">
          {chapters.map((chapter) => (
            <a
              key={chapter.id}
              href={`#${chapter.id}`}
              aria-current={activeChapter === chapter.id ? 'location' : undefined}
              className={`flex min-h-11 w-full min-w-0 items-center justify-center gap-1 truncate rounded-lg px-2 text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f0d9b8] active:scale-[0.98] md:w-auto md:shrink-0 md:gap-1.5 md:px-4 md:text-sm ${
                activeChapter === chapter.id
                  ? 'bg-[#7a262d] text-[#f4d48b]'
                  : 'text-[#f0dfd4] hover:bg-[#7a262d] hover:text-white'
              }`}
            >
              <span className="hidden text-base md:inline">{chapter.number}</span>
              <span className="hidden md:inline">{chapter.title}</span>
              <span className="md:hidden">{chapter.shortTitle}</span>
            </a>
          ))}
        </div>
        <a href="#chang-1" aria-label="Về đầu trang" className="ml-2 hidden min-h-11 min-w-11 items-center justify-center rounded-lg text-[#f0dfd4] transition-colors hover:bg-[#7a262d] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f0d9b8] sm:flex">
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
            <span className="text-3xl leading-none tracking-tight text-[#741e25] sm:text-4xl">{metric.value}</span>
            {metric.unit && <span className="text-sm font-semibold text-stone-700">{metric.unit}</span>}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-stone-700 sm:text-base">{metric.label}</p>
        </div>
      ))}
    </div>
  );
}

function HistoricalPhoto({ photo, hero = false, priority = false }) {
  return (
    <figure className={`historical-photo ${hero ? 'hero-photo mx-auto w-full max-w-[42rem] text-white lg:mx-0 lg:max-w-none lg:justify-self-end' : 'inline-photo text-stone-700'}`}>
      <a
        href={photo.sourceUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Mở nguồn ảnh chính thức: ${photo.caption}`}
        className={`historical-photo__link group block overflow-hidden rounded-2xl border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${hero ? 'border-white/20 focus-visible:outline-[#f0d9b8]' : 'border-stone-300 focus-visible:outline-[#741e25]'}`}
      >
        <img
          src={photo.src}
          alt={photo.alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : undefined}
          decoding="async"
          className={`historical-photo__image block w-full object-cover ${hero ? 'aspect-[1.5/1]' : 'aspect-[4/3]'}`}
        />
      </a>
      <figcaption className={`mt-3 flex min-w-0 flex-col gap-1.5 text-sm leading-6 sm:flex-row sm:items-start sm:justify-between sm:gap-4 ${hero ? 'text-white/90' : 'text-stone-700'}`}>
        <span className="min-w-0">{photo.caption}</span>
        <a
          href={photo.sourceUrl}
          target="_blank"
          rel="noreferrer"
          className={`inline-flex min-h-11 shrink-0 items-center gap-1 font-semibold underline decoration-current/40 underline-offset-4 transition-colors hover:decoration-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${hero ? 'text-[#f0d9b8] focus-visible:outline-[#f0d9b8]' : 'text-[#741e25] focus-visible:outline-[#741e25]'}`}
        >
          Nguồn ảnh: Báo Điện tử Chính phủ <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </figcaption>
    </figure>
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
          <span className="text-4xl leading-none text-[#a43b3c] sm:text-5xl">{slide.number}</span>
        </div>

        <div className="min-w-0">
          <h3 className="min-w-0 break-words text-2xl font-semibold leading-[1.18] text-stone-900 sm:text-3xl">
            {slide.title}
          </h3>
          {slide.lead && <p className="mt-3 max-w-[68ch] break-words text-base leading-7 text-stone-700">{slide.lead}</p>}

          {slide.points && (
            <ul className="mt-5 grid gap-3 sm:mt-6 sm:gap-3.5">
              {slide.points.map((point) => (
                <li key={point} className="flex gap-3 text-base leading-7 text-stone-800">
                  <span className="mt-[0.78rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#a43b3c]" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}

          {slide.metrics && <MetricGrid metrics={slide.metrics} />}
          {slide.metricNote && <p className="mt-3 text-sm leading-6 text-stone-700">{slide.metricNote}</p>}

          {slide.conclusion && (
            <aside data-reveal aria-label="Kết luận" className="mt-6 rounded-2xl border border-[#ead8ba] bg-[#f6efe3] px-4 py-4 sm:px-5 sm:py-5">
              <p className="text-sm font-bold text-[#6c431d]">Kết luận</p>
              <p className="mt-2 text-base leading-7 text-stone-800">{slide.conclusion}</p>
            </aside>
          )}

          {slide.highlight && (
            <div data-reveal className="mt-6 rounded-2xl border border-stone-200 bg-[#f2f0eb]/80 px-4 py-4 sm:px-5 sm:py-5">
              <p className="text-sm font-bold text-[#6c431d]">{slide.highlightLabel}</p>
              {slide.highlightKind === 'sequence' ? (
                <>
                  {slide.highlightLead && <p className="mt-3 text-lg text-stone-700 sm:text-xl">{slide.highlightLead}</p>}
                  <ol aria-label="Trình tự chiến dịch" className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-2">
                    {slide.highlight.split(' → ').map((step, stepIndex, steps) => (
                      <li key={step} className="campaign-step flex items-center gap-2" style={{ '--step-delay': `${stepIndex * 90}ms` }}>
                        <span className="rounded-full border border-stone-300 bg-white px-3 py-1.5 text-sm font-medium text-stone-800 sm:text-base">{step}</span>
                        {stepIndex < steps.length - 1 && <span aria-hidden="true" className="text-[#a43b3c]">→</span>}
                      </li>
                    ))}
                  </ol>
                </>
              ) : (
                <p className="mt-2 text-lg leading-relaxed text-stone-800 sm:text-xl">{slide.highlight}</p>
              )}
            </div>
          )}

          {slide.photo && <HistoricalPhoto photo={slide.photo} />}

          <div className="mt-6 flex gap-2 border-t border-stone-200 pt-4 text-sm leading-6 text-stone-700">
            <BookOpenText size={15} className="mt-1 shrink-0 text-[#a43b3c]" aria-hidden="true" />
          <p><span className="font-semibold text-stone-800">Nguồn:</span> {slide.source}</p>
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
        <p className="text-sm font-semibold text-[#741e25]">Chặng {chapter.number}</p>
      </div>
      <div data-reveal className="mb-8 max-w-4xl border-t border-stone-300 pt-5">
        <h2 className="min-w-0 w-full max-w-full break-words text-3xl font-semibold leading-[1.15] text-stone-900 sm:text-4xl">
          {chapter.number === '01' ? <><span className="sm:inline">Bối cảnh, ý nghĩa</span><br className="sm:hidden" /><span> và nhân tố thắng lợi</span></> : chapter.title}
        </h2>
        <p className="mt-4 max-w-[68ch] text-lg leading-8 text-stone-700">{chapter.intro}</p>
      </div>
      <div className="rounded-2xl border border-stone-200 bg-white/45 px-5 shadow-[0_14px_50px_-38px_rgba(41,37,36,0.3)] sm:px-8">
        {chapter.slides.map((slide, index) => <SlideCard key={slide.number} slide={slide} index={index} />)}
      </div>
    </section>
  );
}

export default function App() {
  const [activeChapter, setActiveChapter] = useState(chapters[0].id);
  const [clickStars, setClickStars] = useState([]);
  const nextStarId = useRef(0);

  function handlePageClick(event) {
    const target = event.target instanceof Element ? event.target : null;
    const bounds = target?.getBoundingClientRect();
    const keyboardActivation = event.detail === 0;
    const clickX = keyboardActivation && bounds ? bounds.left + bounds.width / 2 : event.clientX;
    const clickY = keyboardActivation && bounds ? bounds.top + bounds.height / 2 : event.clientY;
    const x = Math.min(window.innerWidth - 16, Math.max(16, clickX + 18));
    const y = Math.min(window.innerHeight - 16, Math.max(16, clickY - 18));
    const star = { id: ++nextStarId.current, x, y };

    setClickStars((current) => [...current.slice(-11), star]);
    window.setTimeout(() => {
      setClickStars((current) => current.filter(({ id }) => id !== star.id));
    }, 720);
  }

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
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
    <div onClickCapture={handlePageClick} className="min-h-screen w-full min-w-0 max-w-[100vw] overflow-x-clip bg-[#faf9f6] text-stone-800">
      {clickStars.map((star) => (
        <svg
          key={star.id}
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 24 24"
          className="site-click-star"
          style={{ left: star.x, top: star.y }}
        >
          <path d="m12 2.8 2.8 5.9 6.5.9-4.7 4.5 1.1 6.6-5.7-3.2-5.7 3.2 1.1-6.6-4.7-4.5 6.5-.9L12 2.8Z" />
        </svg>
      ))}
      <a href="#main-content" className="sr-only z-50 rounded bg-white px-4 py-3 font-semibold text-[#45151a] shadow focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#741e25]">
        Bỏ qua điều hướng
      </a>
      <header className="bg-[#651d24] text-white">
        <div className="mx-auto flex max-w-6xl items-center px-5 py-4 sm:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/25 bg-white/5">
              <Landmark size={17} aria-hidden="true" />
            </span>
            <div className="min-w-0 w-full">
              <p className="truncate text-sm font-semibold">Trường Đại học FPT</p>
              <p className="mt-0.5 text-xs font-semibold text-white/90">Học phần VNR202</p>
            </div>
          </div>
        </div>
      </header>

      <main id="main-content" className="min-w-0 w-full max-w-full">
        <ChapterNav activeChapter={activeChapter} />
        <section className="relative isolate overflow-hidden bg-[#711f27] text-white">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_76%_18%,rgba(193,126,72,0.2),transparent_33%),linear-gradient(125deg,transparent_42%,rgba(35,10,14,0.45))]" />
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-12">
            <div data-reveal className="min-w-0">
              <p className="text-sm font-bold text-[#f0d9b8]">Lịch sử Đảng Cộng sản Việt Nam</p>
              <h1 className="mt-5 min-w-0 w-full max-w-full break-words text-4xl font-semibold leading-[1.14] sm:text-5xl md:text-6xl">
                <span className="block sm:inline">Ý nghĩa lịch sử</span>{' '}
                <span className="block sm:inline">và kinh nghiệm</span>{' '}
                <span className="block sm:inline">lãnh đạo của Đảng</span>
              </h1>
              <p className="mt-4 text-2xl italic text-[#f0d9b8] sm:text-3xl">thời kỳ 1954–1975</p>
              <p className="mt-7 w-full max-w-[60ch] whitespace-normal break-words text-base leading-8 text-white/90">
                Từ thắng lợi năm 1975, nhìn lại những nhân tố quyết định, bài học lãnh đạo và cách vận dụng vào phát triển hôm nay.
              </p>
              <a href="#chang-1" className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#f0d9b8] px-5 py-3 text-sm font-bold text-[#54171d] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0d9b8] active:scale-[0.98]">
                Khám phá nội dung <ArrowDown size={15} aria-hidden="true" />
              </a>
            </div>
            <HistoricalPhoto photo={historicalPhotos.liberationTank} hero priority />
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-5 pb-10 sm:px-8 sm:pb-16">
          {chapters.map((chapter) => <ChapterSection key={chapter.id} chapter={chapter} />)}
        </div>
      </main>

      <footer className="border-t border-stone-200 bg-[#f2f0eb]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-7 text-sm text-stone-700 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="font-semibold text-stone-700">Trường Đại học FPT <span className="mx-1 text-stone-400">·</span> VNR202</p>
          <p>Ý nghĩa lịch sử và kinh nghiệm lãnh đạo của Đảng thời kỳ 1954–1975</p>
        </div>
      </footer>
    </div>
  );
}
