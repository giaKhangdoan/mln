import { ArrowDown, ArrowRight } from 'lucide-react';

export default function Chapter7OverviewVisual({ slide }) {
  if (slide.roadmapSteps) {
    return (
      <ol aria-label="Ba chặng nội dung" className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
        {slide.roadmapSteps.map((step, index) => (
          <li key={step} className="relative flex min-h-20 min-w-0 items-center gap-3 rounded-xl border border-stone-200 bg-[#f2f0eb]/70 px-4 py-3">
            <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#741e25] text-sm font-semibold text-[#f0d9b8]">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="min-w-0 text-base font-semibold leading-6 text-stone-900">{step}</span>
            {index < slide.roadmapSteps.length - 1 && (
              <>
                <ArrowDown aria-hidden="true" className="absolute -bottom-3 left-1/2 z-10 h-4 w-4 -translate-x-1/2 text-[#a43b3c] md:hidden" />
                <ArrowRight aria-hidden="true" className="absolute -right-3 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-[#a43b3c] md:block" />
              </>
            )}
          </li>
        ))}
      </ol>
    );
  }

  if (slide.objectives) {
    return (
      <ol aria-label="Mục tiêu bài trình bày" className="mt-6 grid grid-cols-1 divide-y divide-stone-300 overflow-hidden rounded-xl border border-stone-200 bg-[#f2f0eb]/70 md:grid-cols-3 md:divide-x md:divide-y-0">
        {slide.objectives.map((objective) => (
          <li key={objective.code} className="min-w-0 p-4 sm:p-5">
            <p className="text-2xl font-semibold leading-none text-[#a43b3c]">{objective.code}</p>
            <h4 className="mt-3 text-lg font-semibold text-stone-900">{objective.title}</h4>
            <p className="mt-2 text-sm leading-6 text-stone-700 sm:text-base">{objective.description}</p>
          </li>
        ))}
      </ol>
    );
  }

  return null;
}
