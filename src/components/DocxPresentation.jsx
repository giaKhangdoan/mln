import MeaningMap from './MeaningMap';
import QuizSection from './QuizSection';
import documentText from '../../content_docx.txt?raw';

const blocks = documentText
  .replace(/\r\n/g, '\n')
  .split(/\n{2,}/)
  .map(block => block.trim())
  .filter(Boolean);

function isHeading(block) {
  return /^PHẦN\s/.test(block) || block === 'Tài liệu tham khảo' || /^\d+\.\d+\./.test(block);
}

function Block({ block }) {
  if (block === 'Nội dung Thuyết trình') {
    return <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">{block}</h1>;
  }

  if (isHeading(block)) {
    const isPart = /^PHẦN\s/.test(block) || block === 'Tài liệu tham khảo';
    return isPart
      ? <h2 className="text-2xl sm:text-3xl font-bold text-red-900 pt-8 border-b border-red-100 pb-3">{block}</h2>
      : <h3 className="text-xl font-bold text-slate-900 pt-5">{block}</h3>;
  }

  if (block.startsWith('“') || block.startsWith('"')) {
    return <blockquote className="font-editorial text-lg text-red-900 italic leading-relaxed border-l-4 border-amber-400 pl-5">{block}</blockquote>;
  }

  if (block.startsWith('Nguồn:') || block.startsWith('Bản giáo trình')) {
    return <p className="text-xs text-slate-500 leading-relaxed">{block}</p>;
  }

  if (block.startsWith('Điểm chính:') || block.startsWith('Phân tích:')) {
    return <p className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-sm text-amber-950 leading-relaxed">{block}</p>;
  }

  return <p className="text-slate-700 text-sm sm:text-base leading-relaxed">{block}</p>;
}

function TableBlock({ rows }) {
  const [header, ...body] = rows;
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200">
      <table className="min-w-full text-sm">
        <thead className="bg-slate-900 text-white">
          <tr>{header.split(' | ').map(cell => <th key={cell} className="px-4 py-3 text-left font-semibold">{cell}</th>)}</tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {body.map((row, index) => (
            <tr key={`${row}-${index}`} className={index % 2 ? 'bg-slate-50' : 'bg-white'}>
              {row.split(' | ').map(cell => <td key={cell} className="px-4 py-3 align-top text-slate-700 leading-relaxed">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function splitIntoSections() {
  const sections = [
    { id: 'overview', label: 'Mở đầu', blocks: [] },
    { id: 'part-1', label: 'Phần 1 · Lý luận và phân tích', blocks: [] },
    { id: 'part-2', label: 'Phần 2 · Liên hệ thực tiễn', blocks: [] },
    { id: 'part-3', label: 'Phần 3 · Tổng hợp và phản biện', blocks: [] },
    { id: 'sources', label: 'Tài liệu tham khảo', blocks: [] }
  ];
  let current = sections[0];

  blocks.forEach(block => {
    if (block.startsWith('PHẦN 1')) current = sections[1];
    else if (block.startsWith('PHẦN 2')) current = sections[2];
    else if (block.startsWith('PHẦN 3')) current = sections[3];
    else if (block === 'Tài liệu tham khảo') current = sections[4];
    current.blocks.push(block);
  });

  return sections;
}

function renderBlocks(sectionBlocks, keyPrefix) {
  const content = [];
  let index = 0;

  while (index < sectionBlocks.length) {
    if (sectionBlocks[index] === 'Bảng tổng hợp') {
      const rows = [];
      index += 1;
      while (index < sectionBlocks.length && sectionBlocks[index].includes(' | ')) {
        if (!sectionBlocks[index].startsWith('--- | ')) rows.push(sectionBlocks[index]);
        index += 1;
      }
      content.push(<TableBlock key={`${keyPrefix}-table`} rows={rows} />);
      continue;
    }

    content.push(<Block key={`${keyPrefix}-${sectionBlocks[index]}-${index}`} block={sectionBlocks[index]} />);
    index += 1;
  }

  return content;
}

function PresentationSection({ section }) {
  const sectionBlocks = section.blocks[0] === section.label || section.blocks[0]?.startsWith('PHẦN') || section.blocks[0] === 'Tài liệu tham khảo'
    ? section.blocks.slice(1)
    : section.blocks;

  return (
    <section id={section.id} className="scroll-mt-20">
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-5">
        <p className="text-xs font-bold uppercase tracking-wider text-red-800">HCM202 • Nội dung theo tài liệu DOCX</p>
        {section.id !== 'overview' && <h2 className="text-2xl sm:text-3xl font-bold text-red-900 border-b border-red-100 pb-3">{section.label}</h2>}
        <div className="space-y-5">{renderBlocks(sectionBlocks, section.id)}</div>
      </div>
    </section>
  );
}

function blocksBetween(source, startPrefix, endPrefix) {
  const start = source.findIndex(block => block.startsWith(startPrefix));
  const end = endPrefix ? source.findIndex((block, index) => index > start && block.startsWith(endPrefix)) : source.length;
  if (start < 0) return [];
  return source.slice(start, end < 0 ? source.length : end);
}

function withoutPartMarker(sectionBlocks) {
  return sectionBlocks.filter(block => !/^PHẦN\s/.test(block));
}

function FaqSection() {
  const items = [
    ['Luận điểm xuyên suốt là gì?', 'Độc lập tạo điều kiện chính trị để nhân dân tự quyết; tự do thể hiện nền độc lập trong quyền làm chủ; hạnh phúc là mục tiêu ở đời sống con người.'],
    ['Vì sao độc lập không tự động tạo ra hạnh phúc?', 'Độc lập là tiền đề chính trị. Nhà nước và nhân dân vẫn phải tiếp tục xây dựng dân chủ, kinh tế, văn hóa và các điều kiện sống để thành quả độc lập đi vào thực tế.'],
    ['A80 hoặc một concert có chứng minh nhân dân hạnh phúc không?', 'Không thể suy ra như vậy. Các sự kiện chỉ minh họa ký ức lịch sử và đời sống văn hóa; muốn phân tích hạnh phúc cần kết hợp dữ liệu về mức sống, học hành, y tế, việc làm và an sinh.']
  ];
  return (
    <section id="chatbot" className="scroll-mt-20">
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-5">
        <p className="text-xs font-bold uppercase tracking-wider text-red-800">Trợ lý AI học thuật</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Hỏi đáp và đối chiếu nội dung</h2>
        <p className="text-sm text-slate-600">Các câu trả lời dưới đây được xây dựng từ nội dung DOCX và các nguồn được dẫn trong tài liệu.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map(([question, answer]) => (
            <div key={question} className="bg-slate-50 rounded-2xl p-4 space-y-2">
              <h3 className="text-sm font-bold text-slate-900">{question}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function DocxPresentation() {
  const sourceSections = splitIntoSections();
  const overview = sourceSections.find(section => section.id === 'overview')?.blocks || [];
  const part1 = sourceSections.find(section => section.id === 'part-1')?.blocks || [];
  const part2 = sourceSections.find(section => section.id === 'part-2')?.blocks || [];
  const part3 = sourceSections.find(section => section.id === 'part-3')?.blocks || [];
  const sources = sourceSections.find(section => section.id === 'sources');

  const sections = [
    { id: 'intro', label: 'Phần 1 · Lộ trình lý luận', blocks: [...overview, ...blocksBetween(part1, '1.1.', '1.3.')] },
    { id: 'theory', label: 'Phần 2 · Khung lý luận', blocks: blocksBetween(part1, '1.3.') },
    { id: 'digital', label: 'Phần 4 · Liên hệ thực tiễn', blocks: withoutPartMarker(part2) },
    { id: 'flashcard', label: 'Phần 5 · Tổng hợp và phản biện', blocks: blocksBetween(part3, '3.1.') }
  ];

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-10 w-full">
        {sections.slice(0, 2).map(section => <PresentationSection key={section.id} section={section} />)}
      </div>

      <section id="practice" className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 w-full scroll-mt-20">
        <MeaningMap />
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 space-y-10 w-full">
        {sections.slice(2).map(section => <PresentationSection key={section.id} section={section} />)}
      </div>

      <QuizSection />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 w-full"><FaqSection /></div>

      {sources && <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 w-full"><PresentationSection section={{ ...sources, id: 'sources', label: 'Tài liệu tham khảo' }} /></div>}
    </>
  );
}
