import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { aiPrinciples, aiPromptExamples, aiSources, aiUsageLog } from '../data/aiAppendix';

function DisclosureChevron() {
  return <ChevronDown size={18} aria-hidden="true" className="shrink-0 transition-transform motion-reduce:transition-none group-open:rotate-180" />;
}

function LogEntry({ entry }) {
  return (
    <details className="group rounded-2xl border border-stone-200 bg-white/75 transition-colors motion-reduce:transition-none open:border-[#d8c2a4] open:bg-white">
      <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#741e25] sm:px-5">
        <span className="min-w-0">
          <span className="mr-3 text-sm font-bold tracking-wide text-[#741e25]">{entry.id}</span>
          <span className="text-base font-semibold leading-6 text-stone-900">{entry.title}</span>
          <span className="mt-1 block text-sm leading-6 text-stone-600">{entry.tool}</span>
        </span>
        <DisclosureChevron />
      </summary>
      <div className="grid gap-5 border-t border-stone-200 px-4 py-5 sm:grid-cols-2 sm:px-5">
        <div>
          <h4 className="text-sm font-bold text-stone-800">Tác vụ</h4>
          <p className="mt-2 text-sm leading-6 text-stone-700">{entry.prompt}</p>
        </div>
        <div>
          <h4 className="text-sm font-bold text-stone-800">Đầu ra</h4>
          <p className="mt-2 text-sm leading-6 text-stone-700">{entry.output}</p>
        </div>
        <div className="sm:col-span-2">
          <h4 className="text-sm font-bold text-stone-800">Nguồn</h4>
          <p className="mt-2 text-sm leading-6 text-stone-700">
            {entry.source}{' '}
            {entry.sourceUrl && (
              <a href={entry.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-1 font-semibold text-[#741e25] no-underline hover:text-[#a1383d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#741e25]">
                Mở nguồn <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            )}
          </p>
        </div>
      </div>
    </details>
  );
}

function PromptEntry({ prompt }) {
  return (
    <details className="group border-b border-stone-200 last:border-b-0">
      <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#741e25]">
        <span className="min-w-0">
          <span className="mr-3 inline-block text-sm font-bold text-[#741e25]">{prompt.id}</span>
          <span className="text-base font-semibold text-stone-900">{prompt.purpose}</span>
        </span>
        <DisclosureChevron />
      </summary>
      <div className="mb-5 rounded-xl bg-[#f2f0eb] p-4">
        <p className="text-xs font-bold uppercase tracking-wide text-[#6c431d]">Prompt tham khảo</p>
        <p className="mt-2 whitespace-pre-line text-sm leading-6 text-stone-800">{prompt.prompt}</p>
      </div>
    </details>
  );
}

function SourceEntry({ source }) {
  return (
    <details className="group border-b border-stone-200 last:border-b-0">
      <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#741e25]">
        <span className="min-w-0">
          <span className="mr-3 inline-block text-sm font-bold text-[#741e25]">{source.id}</span>
          <span className="text-base font-semibold leading-6 text-stone-900">{source.title}</span>
          <span className="mt-1 block text-sm leading-6 text-stone-600">{source.detail}</span>
        </span>
        <DisclosureChevron />
      </summary>
      <div className="grid gap-4 pb-5 sm:grid-cols-2">
        <div>
          <h4 className="text-sm font-bold text-stone-800">Dùng để hỗ trợ</h4>
          <p className="mt-1 text-sm leading-6 text-stone-700">{source.supports}</p>
        </div>
        {source.url && (
          <div>
            <h4 className="text-sm font-bold text-stone-800">Nguồn trực tuyến</h4>
            <a href={source.url} target="_blank" rel="noreferrer" className="mt-1 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-[#741e25] no-underline hover:text-[#a1383d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#741e25]">
              Mở Cục Thống kê <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        )}
      </div>
    </details>
  );
}

export default function AIAppendix() {
  return (
    <section id="phu-luc-ai" className="scroll-mt-36 py-12 sm:scroll-mt-32 sm:py-16">
      <div data-reveal className="mb-8 max-w-4xl border-t border-stone-300 pt-5">
        <p className="text-sm font-semibold text-[#741e25]">Phần 05</p>
        <h2 className="mt-3 text-3xl font-semibold leading-[1.15] text-stone-900 sm:text-4xl">Phụ lục AI</h2>
        <p className="mt-4 max-w-[68ch] text-lg leading-8 text-stone-700">
          AI hỗ trợ đối chiếu hai tài liệu, kiểm tra số liệu và soạn câu hỏi. Giáo trình là căn cứ cho nội dung lịch sử; Cục Thống kê là nguồn cho phần liên hệ.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {[
          { value: '04', label: 'lượt hỗ trợ AI' },
          { value: '06', label: 'prompt tham khảo' },
          { value: '05', label: 'câu hỏi ôn tập' }
        ].map((metric) => (
          <div key={metric.label} className="rounded-xl border border-stone-200 bg-white/75 p-3 sm:p-5">
            <p className="text-2xl font-semibold leading-none text-[#741e25] sm:text-3xl">{metric.value}</p>
            <p className="mt-2 text-xs leading-5 text-stone-700 sm:text-sm">{metric.label}</p>
          </div>
        ))}
      </div>

      <nav aria-label="Nội dung phụ lục AI" className="mt-5 flex flex-wrap gap-2">
        <a href="#ai-nhat-ky" className="inline-flex min-h-11 items-center rounded-full border border-stone-300 bg-white px-4 text-sm font-semibold text-stone-800 no-underline transition-colors motion-reduce:transition-none hover:border-[#741e25] hover:text-[#741e25] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#741e25]">Nhật ký AI</a>
        <a href="#ai-prompt-mau" className="inline-flex min-h-11 items-center rounded-full border border-stone-300 bg-white px-4 text-sm font-semibold text-stone-800 no-underline transition-colors motion-reduce:transition-none hover:border-[#741e25] hover:text-[#741e25] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#741e25]">Prompt mẫu</a>
        <a href="#ai-nguon-cam-ket" className="inline-flex min-h-11 items-center rounded-full border border-stone-300 bg-white px-4 text-sm font-semibold text-stone-800 no-underline transition-colors motion-reduce:transition-none hover:border-[#741e25] hover:text-[#741e25] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#741e25]">Nguồn và nguyên tắc</a>
      </nav>

      <section id="ai-nhat-ky" className="scroll-mt-36 pt-10 sm:scroll-mt-32 sm:pt-14">
        <div className="mb-5 max-w-3xl">
          <h3 className="text-2xl font-semibold leading-tight text-stone-900 sm:text-3xl">Nhật ký sử dụng AI</h3>
          <p className="mt-2 text-base leading-7 text-stone-700">Bốn lượt hỗ trợ gắn với nội dung Chương 2.</p>
        </div>
        <div className="grid gap-3">
          {aiUsageLog.map((entry) => <LogEntry key={entry.id} entry={entry} />)}
        </div>
      </section>

      <section id="ai-prompt-mau" className="scroll-mt-36 pt-12 sm:scroll-mt-32 sm:pt-16">
        <div className="mb-4 max-w-3xl">
          <h3 className="text-2xl font-semibold leading-tight text-stone-900 sm:text-3xl">Prompt mẫu</h3>
          <p className="mt-2 text-base leading-7 text-stone-700">Sáu prompt để tham khảo khi đọc tài liệu, kiểm chứng và biên soạn.</p>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white/75 px-4 sm:px-6">
          {aiPromptExamples.map((prompt) => <PromptEntry key={prompt.id} prompt={prompt} />)}
        </div>
      </section>

      <section id="ai-nguon-cam-ket" className="scroll-mt-36 pt-12 sm:scroll-mt-32 sm:pt-16">
        <div className="mb-4 max-w-3xl">
          <h3 className="text-2xl font-semibold leading-tight text-stone-900 sm:text-3xl">Nguồn và nguyên tắc</h3>
          <p className="mt-2 text-base leading-7 text-stone-700">Các tài liệu làm căn cứ cho phần trình bày và quiz.</p>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white/75 px-4 sm:px-6">
          {aiSources.map((source) => <SourceEntry key={source.id} source={source} />)}
        </div>
        <aside className="mt-6 rounded-2xl border border-stone-200 bg-white/75 p-5 sm:p-6">
          <h4 className="text-xl font-semibold text-stone-900">Nguyên tắc sử dụng</h4>
          <ul className="mt-4 grid gap-3">
            {aiPrinciples.map((principle) => (
              <li key={principle} className="flex gap-3 text-sm leading-6 text-stone-700 sm:text-base">
                <span className="mt-[0.72rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#a43b3c]" aria-hidden="true" />
                <span>{principle}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </section>
  );
}
