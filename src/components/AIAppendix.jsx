import { ArrowDown, ArrowUpRight, ChevronDown } from 'lucide-react';
import {
  academicCommitments,
  aiPromptExamples,
  aiSources,
  aiUsageLog
} from '../data/aiAppendix';

function DisclosureChevron() {
  return <ChevronDown size={18} aria-hidden="true" className="shrink-0 transition-transform motion-reduce:transition-none group-open:rotate-180" />;
}

function LogEntry({ entry }) {
  return (
    <details className="group rounded-2xl border border-stone-200 bg-white/75 transition-colors motion-reduce:transition-none open:border-[#d8c2a4] open:bg-white">
      <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#741e25] sm:px-5">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-sm font-bold tracking-wide text-[#741e25]">{entry.id}</span>
            <span className="text-xs text-stone-500">Tiêu chí {entry.criteria}</span>
          </div>
          <p className="mt-1 text-base font-semibold leading-6 text-stone-900">{entry.purpose}</p>
          <p className="mt-1 text-sm leading-6 text-stone-600">{entry.status}</p>
        </div>
        <DisclosureChevron />
      </summary>
      <div className="grid gap-5 border-t border-stone-200 px-4 py-5 sm:grid-cols-2 sm:px-5">
        <div>
          <h4 className="text-sm font-bold text-stone-800">Công cụ và prompt được ghi nhận</h4>
          <p className="mt-2 text-sm leading-6 text-stone-700">{entry.tool}</p>
          <p className="mt-2 text-sm leading-6 text-stone-700">{entry.prompt}</p>
        </div>
        <div>
          <h4 className="text-sm font-bold text-stone-800">Đầu ra AI</h4>
          <p className="mt-2 text-sm leading-6 text-stone-700">{entry.output}</p>
        </div>
        <div className="sm:col-span-2">
          <h4 className="text-sm font-bold text-stone-800">Nguồn và tình trạng kiểm chứng</h4>
          <p className="mt-2 text-sm leading-6 text-stone-700">{entry.verification}</p>
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
      <div className="grid gap-4 pb-5 sm:grid-cols-2">
        <div className="rounded-xl bg-[#f2f0eb] p-4 sm:col-span-2">
          <p className="text-xs font-bold uppercase tracking-wide text-[#6c431d]">Prompt tham khảo</p>
          <p className="mt-2 whitespace-pre-line text-sm leading-6 text-stone-800">{prompt.prompt}</p>
        </div>
        <div className="sm:col-span-2">
          <h4 className="text-sm font-bold text-stone-800">Đầu ra nên yêu cầu</h4>
          <p className="mt-1 text-sm leading-6 text-stone-700">{prompt.expected}</p>
        </div>
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
          <span className="text-base font-semibold leading-6 text-stone-900">{source.source}</span>
          <span className="mt-1 block text-sm leading-6 text-stone-600">{source.checked}</span>
        </span>
        <DisclosureChevron />
      </summary>
      <div className="grid gap-4 pb-5 sm:grid-cols-2">
        <div className="min-w-0">
          <h5 className="text-sm font-bold text-stone-800">Vị trí và đường dẫn</h5>
          <p className="mt-1 text-sm leading-6 text-stone-600">{source.location}</p>
          {source.url ? (
            <a href={source.url} target="_blank" rel="noreferrer" className="mt-1 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-[#741e25] no-underline transition-colors motion-reduce:transition-none hover:text-[#a1383d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#741e25]">
              Mở nguồn <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          ) : source.reference ? (
            <p className="mt-1 text-sm leading-6 text-stone-600">{source.reference}</p>
          ) : null}
        </div>
        <div>
          <h5 className="text-sm font-bold text-stone-800">Dùng để hỗ trợ</h5>
          <p className="mt-1 text-sm leading-6 text-stone-700">{source.supports}</p>
        </div>
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
          Nhật ký AI, prompt tham khảo, nguồn đối chiếu và nguyên tắc liêm chính học thuật.
        </p>
      </div>

      <div className="rounded-2xl border border-[#e4d8c7] bg-[#f2f0eb] px-4 py-4 sm:px-5">
        <p className="text-sm leading-6 text-stone-800">
          Nhóm đã rà soát và xác nhận nội dung phụ lục; nhật ký sử dụng thực tế được tách riêng với prompt tham khảo.
        </p>
        <nav aria-label="Nội dung phụ lục AI" className="mt-4 flex flex-wrap gap-2">
          <a href="#ai-nhat-ky" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-stone-300 bg-white px-4 text-sm font-semibold text-stone-800 no-underline transition-colors motion-reduce:transition-none hover:border-[#741e25] hover:text-[#741e25] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#741e25]">
            Nhật ký AI <span className="text-stone-500">04</span>
          </a>
          <a href="#ai-prompt-mau" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-stone-300 bg-white px-4 text-sm font-semibold text-stone-800 no-underline transition-colors motion-reduce:transition-none hover:border-[#741e25] hover:text-[#741e25] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#741e25]">
            Prompt mẫu <span className="text-stone-500">06</span>
          </a>
          <a href="#ai-nguon-cam-ket" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-stone-300 bg-white px-4 text-sm font-semibold text-stone-800 no-underline transition-colors motion-reduce:transition-none hover:border-[#741e25] hover:text-[#741e25] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#741e25]">
            Nguồn và cam kết <ArrowDown size={14} aria-hidden="true" />
          </a>
        </nav>
      </div>

      <section id="ai-nhat-ky" className="scroll-mt-36 pt-10 sm:scroll-mt-32 sm:pt-14">
        <div className="mb-5 max-w-3xl">
          <h3 className="text-2xl font-semibold leading-tight text-stone-900 sm:text-3xl">Nhật ký sử dụng AI</h3>
          <p className="mt-2 text-base leading-7 text-stone-700">Bốn lượt sử dụng, gồm mục đích, đầu ra và nguồn đã đối chiếu.</p>
        </div>
        <div className="grid gap-3">
          {aiUsageLog.map((entry) => <LogEntry key={entry.id} entry={entry} />)}
        </div>
      </section>

      <section id="ai-prompt-mau" className="scroll-mt-36 pt-12 sm:scroll-mt-32 sm:pt-16">
        <div className="mb-4 max-w-3xl">
          <h3 className="text-2xl font-semibold leading-tight text-stone-900 sm:text-3xl">Bộ prompt tham khảo</h3>
          <p className="mt-2 text-base leading-7 text-stone-700">
            Sáu mẫu tham khảo được tách riêng khỏi bốn lượt AI đã ghi trong nhật ký.
          </p>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white/75 px-4 sm:px-6">
          {aiPromptExamples.map((prompt) => <PromptEntry key={prompt.id} prompt={prompt} />)}
        </div>
      </section>

      <section id="ai-nguon-cam-ket" className="scroll-mt-36 pt-12 sm:scroll-mt-32 sm:pt-16">
        <div className="mb-4 max-w-3xl">
          <h3 className="text-2xl font-semibold leading-tight text-stone-900 sm:text-3xl">Nguồn tham chiếu và cam kết học thuật</h3>
          <p className="mt-2 text-base leading-7 text-stone-700">
            Giáo trình làm căn cứ cho nội dung lịch sử; nguồn hiện hành hỗ trợ phần liên hệ thực tiễn.
          </p>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white/75 px-4 sm:px-6">
          {aiSources.map((source) => <SourceEntry key={source.id} source={source} />)}
        </div>

        <div className="mt-6">
          <section className="rounded-2xl border border-stone-200 bg-white/75 p-5 sm:p-6">
            <h4 className="text-xl font-semibold text-stone-900">Nguyên tắc liêm chính học thuật</h4>
            <ul className="mt-4 grid gap-3">
              {academicCommitments.map((commitment) => (
                <li key={commitment} className="flex gap-3 text-sm leading-6 text-stone-700 sm:text-base">
                  <span className="mt-[0.72rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#a43b3c]" aria-hidden="true" />
                  <span>{commitment}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </section>
  );
}
