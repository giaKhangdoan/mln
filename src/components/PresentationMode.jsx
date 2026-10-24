import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react';
import { chapters } from '../data/history1945-1946';

const presentationSlides = chapters.flatMap((chapter) =>
  chapter.slides.map((slide) => ({ ...slide, chapter }))
);

function PresentationPhoto({ photo }) {
  return (
    <figure className="rounded-xl border border-stone-200 bg-[#f2f0eb] p-3 sm:p-4">
      <img src={photo.src} alt={photo.alt} className="max-h-44 w-full object-contain sm:max-h-52" />
      <figcaption className="mt-3 text-sm leading-6 text-stone-700">
        <p>{photo.caption}</p>
        <div className="mt-2 flex flex-wrap gap-x-3">
          <a href={photo.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-1 font-semibold text-[#741e25] no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#741e25]">
            {photo.sourceName} <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          {photo.licenseUrl && <a href={photo.licenseUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-1 text-stone-600 no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#741e25]">
            {photo.licenseLabel} <ArrowUpRight size={13} aria-hidden="true" />
          </a>}
        </div>
      </figcaption>
    </figure>
  );
}

function MetricPanel({ metrics, note }) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        {metrics.map((metric) => (
          <div key={`${metric.value}-${metric.label}`} className="min-w-0 rounded-xl border border-stone-200 bg-white p-2.5 sm:p-3">
            <p className="text-xl leading-tight text-[#741e25] sm:text-2xl">{metric.value}</p>
            {metric.unit && <p className="mt-1 text-xs font-semibold leading-4 text-stone-700">{metric.unit}</p>}
            <p className="mt-1 text-xs leading-4 text-stone-700">{metric.label}</p>
          </div>
        ))}
      </div>
      {note && <p className="mt-2 text-xs leading-5 text-stone-600">{note}</p>}
    </div>
  );
}

function PresentationSlide({ slide, titleRef }) {
  const hasAside = Boolean(slide.photo || slide.metrics);
  const isDense = (slide.points?.reduce((total, point) => total + point.length, 0) || 0) > 800;

  return (
    <article className="presentation-slide flex min-h-0 w-full flex-1 flex-col overflow-hidden rounded-2xl border border-white/60 bg-[#faf9f6] shadow-[0_28px_90px_-40px_rgba(0,0,0,0.65)]">
      <div className="flex min-h-0 flex-1 flex-col px-5 py-4 sm:px-8 sm:py-6 lg:px-11 lg:py-8">
        <header className="flex items-center justify-between gap-4">
          <p className="min-w-0 truncate text-sm font-semibold text-[#741e25]">
            Chặng {slide.chapter.number} · {slide.chapter.shortTitle}
          </p>
          <span className="shrink-0 text-xl font-semibold leading-none text-[#a43b3c] sm:text-2xl">{slide.number}</span>
        </header>

        <div className="mt-3 shrink-0">
          <h2 ref={titleRef} tabIndex={-1} className="max-w-[28ch] text-2xl font-semibold leading-[1.12] text-stone-900 focus:outline-none sm:text-3xl lg:text-4xl">
            {slide.title}
          </h2>
          {slide.lead && <p className="mt-2 max-w-[75ch] text-base leading-6 text-stone-700 sm:text-lg sm:leading-7">{slide.lead}</p>}
        </div>

        <div className={`presentation-content mt-4 min-h-0 flex-1 overflow-y-auto ${hasAside ? 'grid gap-4 md:grid-cols-[minmax(0,1.2fr)_minmax(15rem,0.8fr)] md:gap-6' : ''}`}>
          <div className="min-w-0">
            {slide.points && (
              <ul className={`grid ${isDense ? 'gap-2' : 'gap-2.5 sm:gap-3'}`}>
                {slide.points.map((point) => (
                  <li key={point} className={`flex gap-3 text-stone-800 ${isDense ? 'text-sm leading-6' : 'text-sm leading-6 sm:text-base sm:leading-7'}`}>
                    <span className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#a43b3c]" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}

            {slide.highlight && (
              <aside className="mt-4 rounded-xl border border-[#ead8ba] bg-[#f6efe3] p-4">
                {slide.highlightLabel && <p className="text-sm font-bold text-[#6c431d]">{slide.highlightLabel}</p>}
                {slide.highlightLead && <p className="mt-2 text-base font-semibold leading-6 text-stone-800">{slide.highlightLead}</p>}
                <p className="mt-2 text-sm leading-6 text-stone-800 sm:text-base">{slide.highlight}</p>
              </aside>
            )}
          </div>

          {hasAside && (
            <aside className="min-w-0 space-y-3">
              {slide.photo && <PresentationPhoto photo={slide.photo} />}
              {slide.metrics && <MetricPanel metrics={slide.metrics} note={slide.metricNote} />}
            </aside>
          )}
        </div>

        {slide.conclusion && (
          <aside className="mt-3 shrink-0 rounded-xl border border-[#ead8ba] bg-[#f6efe3] px-4 py-3 sm:px-5">
            <p className="text-xs font-bold uppercase tracking-wide text-[#6c431d]">Kết luận</p>
            <p className="mt-1 text-sm leading-6 text-stone-800 sm:text-base">{slide.conclusion}</p>
          </aside>
        )}

        {slide.source && (
          <footer className="mt-3 flex shrink-0 flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-stone-200 pt-2 text-xs leading-5 text-stone-600 sm:text-sm">
            <span className="min-w-0">Nguồn: {slide.source}</span>
            {slide.sourceUrl && <a href={slide.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 shrink-0 items-center gap-1 font-semibold text-[#741e25] no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#741e25]">
              {slide.sourceLinkText || 'Mở nguồn'} <ArrowUpRight size={13} aria-hidden="true" />
            </a>}
          </footer>
        )}
      </div>
    </article>
  );
}

export default function PresentationMode({ onExit }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const dialogRef = useRef(null);
  const titleRef = useRef(null);
  const exitRequestedRef = useRef(false);
  const slide = presentationSlides[slideIndex];
  const lastSlide = slideIndex === presentationSlides.length - 1;

  function exitPresentation() {
    if (exitRequestedRef.current) return;
    exitRequestedRef.current = true;
    onExit();
  }

  function goPrevious() {
    setSlideIndex((current) => Math.max(0, current - 1));
  }

  function goNext() {
    setSlideIndex((current) => Math.min(presentationSlides.length - 1, current + 1));
  }

  function handleKeyDown(event) {
    if (event.key === 'Escape') {
      event.preventDefault();
      exitPresentation();
      return;
    }

    const focusedControl = event.target instanceof HTMLElement && event.target.closest('button, a, input, select, textarea, [contenteditable="true"]');
    if ((event.key === ' ' || event.key === 'Spacebar') && focusedControl) return;

    if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ' || event.key === 'Spacebar') {
      event.preventDefault();
      goNext();
    } else if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
      event.preventDefault();
      goPrevious();
    } else if (event.key === 'Home') {
      event.preventDefault();
      setSlideIndex(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      setSlideIndex(presentationSlides.length - 1);
    }
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;
    const htmlOverflow = document.documentElement.style.overflow;
    const bodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    if (!dialog.open && typeof dialog.showModal === 'function') dialog.showModal();
    titleRef.current?.focus();
    return () => {
      if (dialog.open) dialog.close();
      document.documentElement.style.overflow = htmlOverflow;
      document.body.style.overflow = bodyOverflow;
    };
  }, []);

  useEffect(() => {
    titleRef.current?.focus({ preventScroll: true });
  }, [slideIndex]);

  return createPortal(
    <dialog
      ref={dialogRef}
      aria-label="Trình chiếu nội dung Chương 2"
      onCancel={(event) => {
        event.preventDefault();
        exitPresentation();
      }}
      onKeyDown={handleKeyDown}
      className="presentation-dialog"
    >
      <div className="flex h-[100dvh] flex-col gap-2.5 bg-[#4b181f] p-3 sm:gap-4 sm:p-5 lg:p-6">
        <header className="flex min-h-11 shrink-0 items-center justify-between gap-4 text-white">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">Trường Đại học FPT <span className="mx-1 text-white/50">·</span> VNR202</p>
            <p className="mt-0.5 truncate text-xs text-white/75">Xây dựng và bảo vệ chính quyền cách mạng (1945–1946)</p>
          </div>
          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <p aria-live="polite" className="hidden text-sm font-semibold text-[#f0d9b8] sm:block">{String(slideIndex + 1).padStart(2, '0')} / {String(presentationSlides.length).padStart(2, '0')}</p>
            <button type="button" onClick={onExit} aria-label="Thoát trình chiếu" className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-lg border border-white/25 px-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f0d9b8]">
              <span className="hidden sm:inline">Thoát</span><X size={18} aria-hidden="true" />
            </button>
          </div>
        </header>

        <main className="flex min-h-0 flex-1 items-center justify-center">
          <div className="presentation-stage flex min-h-0 w-full max-w-7xl">
            <PresentationSlide key={slide.number} slide={slide} titleRef={titleRef} />
          </div>
        </main>

        <footer className="flex shrink-0 flex-wrap items-center justify-between gap-2 text-white">
          <button type="button" onClick={goPrevious} disabled={slideIndex === 0} aria-label="Slide trước" className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-lg border border-white/25 px-3 text-sm font-semibold transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f0d9b8] disabled:cursor-not-allowed disabled:opacity-40">
            <ArrowLeft size={17} aria-hidden="true" /><span className="hidden sm:inline">Trước</span>
          </button>

          <div className="order-last flex min-w-full flex-1 flex-col gap-1.5 sm:order-none sm:min-w-0 sm:px-4">
            <div className="flex items-center justify-between gap-3 text-xs text-white/80">
              <span className="truncate">{slide.chapter.shortTitle} · {slide.title}</span>
              <span className="shrink-0 sm:hidden">{slideIndex + 1}/{presentationSlides.length}</span>
              <span className="hidden shrink-0 sm:inline">← → hoặc Space · Esc để thoát</span>
            </div>
            <div role="progressbar" aria-label="Tiến độ trình chiếu" aria-valuemin={1} aria-valuemax={presentationSlides.length} aria-valuenow={slideIndex + 1} className="h-1.5 overflow-hidden rounded-full bg-white/25">
              <div className="presentation-progress h-full rounded-full bg-[#f0d9b8]" style={{ width: `${((slideIndex + 1) / presentationSlides.length) * 100}%` }} />
            </div>
          </div>

          <button type="button" onClick={goNext} disabled={lastSlide} aria-label={lastSlide ? 'Đã đến slide cuối' : 'Slide tiếp theo'} className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-lg bg-[#f0d9b8] px-3 text-sm font-semibold text-[#54171d] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-40">
            <span className="hidden sm:inline">Tiếp</span><ArrowRight size={17} aria-hidden="true" />
          </button>
        </footer>
      </div>
    </dialog>,
    document.body
  );
}
