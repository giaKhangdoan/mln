import { useMemo, useState } from 'react';
import { BookOpen, Link2, RotateCcw } from 'lucide-react';
import { meaningMapEdges, meaningMapNodes } from '../data/meaningMap';

const filters = [
  { id: 'all', label: 'Tất cả' },
  { id: 'lý luận', label: 'Lý luận' },
  { id: 'thực tiễn', label: 'Thực tiễn' },
  { id: 'phản biện', label: 'Phản biện' }
];

const nodePositions = {
  independence: 'left-[3%] top-8',
  people: 'left-1/2 -translate-x-1/2 top-8',
  freedom: 'right-[3%] top-8',
  happiness: 'left-1/2 -translate-x-1/2 bottom-5'
};

export default function MeaningMap() {
  const [filter, setFilter] = useState('all');
  const [selectedNodeId, setSelectedNodeId] = useState('people');
  const [selectedEdgeId, setSelectedEdgeId] = useState(null);

  const visibleEdges = useMemo(
    () => meaningMapEdges.filter(edge => filter === 'all' || edge.category === filter),
    [filter]
  );

  const visibleNodeIds = useMemo(
    () => new Set(visibleEdges.flatMap(edge => [edge.from, edge.to])),
    [visibleEdges]
  );

  const selectedNode = meaningMapNodes.find(node => node.id === selectedNodeId);
  const selectedEdge = meaningMapEdges.find(edge => edge.id === selectedEdgeId);

  const selectNode = (nodeId) => {
    setSelectedNodeId(nodeId);
    setSelectedEdgeId(null);
  };

  const selectEdge = (edgeId) => {
    const edge = meaningMapEdges.find(item => item.id === edgeId);
    setSelectedEdgeId(edgeId);
    setSelectedNodeId(null);
    if (edge && filter !== 'all' && edge.category !== filter) setFilter('all');
  };

  const resetMap = () => {
    setFilter('all');
    setSelectedNodeId('people');
    setSelectedEdgeId(null);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-8 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-slate-100 pb-5">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-red-800">
            <BookOpen className="w-3.5 h-3.5" /> Cách đọc bản đồ
          </div>
          <h3 className="text-xl font-bold text-slate-900">Meaning Map tương tác</h3>
          <p className="max-w-2xl text-sm text-slate-600 leading-relaxed">
            Nhân dân là trung tâm tham chiếu. Chọn một node để đọc khái niệm, hoặc chọn đường nối để kiểm tra quan hệ và giới hạn diễn giải.
          </p>
        </div>
        <div className="shrink-0 rounded-xl bg-slate-50 border border-slate-200 px-3 py-2 text-xs text-slate-600">
          <span className="font-semibold text-slate-900">{visibleEdges.length}</span> quan hệ đang hiển thị
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Lọc quan hệ Meaning Map">
        {filters.map(item => (
          <button
            key={item.id}
            type="button"
            onClick={() => setFilter(item.id)}
            aria-pressed={filter === item.id}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
              filter === item.id
                ? 'bg-red-800 text-white border-red-800'
                : 'bg-white text-slate-600 border-slate-200 hover:border-red-300 hover:text-red-800'
            }`}
          >
            {item.label}
          </button>
        ))}
        <button type="button" onClick={resetMap} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-500 hover:text-red-800" title="Đặt lại bản đồ">
          <RotateCcw className="w-3.5 h-3.5" />
          Đặt lại
        </button>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-[#fcfcfb] p-3 sm:p-5">
      <div className="relative max-w-3xl mx-auto h-[360px] hidden sm:block" aria-label="Sơ đồ Meaning Map">
        <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 680 340" preserveAspectRatio="none" aria-hidden="true">
          {meaningMapEdges.map(edge => {
            const isVisible = visibleEdges.some(item => item.id === edge.id);
            const isSelected = selectedEdgeId === edge.id;
            return (
              <g key={edge.id} className={`${isVisible ? 'opacity-100' : 'opacity-15'} transition-opacity`}>
                <path d={edge.path} fill="none" stroke="transparent" strokeWidth="18" className="cursor-pointer pointer-events-auto" onClick={() => selectEdge(edge.id)} />
                <path d={edge.path} fill="none" stroke={isSelected ? '#b91c1c' : edge.category === 'thực tiễn' ? '#d97706' : '#b91c1c'} strokeWidth={isSelected ? '4' : '2.5'} className="animate-flow-dash pointer-events-none" />
              </g>
            );
          })}
        </svg>

        {meaningMapNodes.map(node => {
          const isSelected = selectedNodeId === node.id;
          const isVisible = visibleNodeIds.has(node.id);
          const isPeople = node.id === 'people';
          return (
            <button
              key={node.id}
              type="button"
              onClick={() => selectNode(node.id)}
              aria-pressed={isSelected}
              className={`absolute z-10 ${nodePositions[node.id]} w-44 rounded-2xl p-4 text-center shadow-sm border-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-100 ${
                isPeople ? 'bg-red-800 text-white border-amber-400/60' : 'bg-white text-slate-900 border-slate-200'
              } ${isSelected ? 'ring-4 ring-red-100 scale-[1.03] shadow-md' : 'hover:-translate-y-0.5 hover:border-red-300'} ${isVisible ? 'opacity-100' : 'opacity-40'}`}
            >
              <span className={`block text-[10px] font-bold uppercase tracking-wide ${isPeople ? 'text-amber-300' : 'text-red-800'}`}>{node.layer}</span>
              <span className="block text-sm font-bold mt-1">{node.label}</span>
              <span className={`block text-xs mt-1 ${isPeople ? 'text-red-100' : 'text-slate-500'}`}>{node.short}</span>
            </button>
          );
        })}

        {meaningMapEdges.map(edge => (
          <button
            key={`${edge.id}-label`}
            type="button"
            onClick={() => selectEdge(edge.id)}
            className={`absolute z-20 text-[10px] font-bold px-2 py-1 rounded-md border shadow-sm transition-colors ${
              selectedEdgeId === edge.id ? 'bg-red-800 text-white border-red-800' : 'bg-white/95 text-red-800 border-red-200 hover:bg-red-50'
            } ${edge.id === 'independence-people' ? 'left-[27%] top-[8%]' : ''} ${edge.id === 'people-freedom' ? 'right-[27%] top-[8%]' : ''} ${edge.id === 'people-happiness' ? 'left-1/2 -translate-x-1/2 top-[42%]' : ''} ${edge.id === 'independence-happiness' ? 'left-[16%] top-[59%]' : ''} ${edge.id === 'freedom-happiness' ? 'right-[16%] top-[59%]' : ''}`}
          >
            {edge.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:hidden gap-3">
        {meaningMapNodes.map(node => (
          <button key={node.id} type="button" onClick={() => selectNode(node.id)} className={`text-left p-4 rounded-2xl border-2 ${selectedNodeId === node.id ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-white'}`}>
            <span className="text-[10px] font-bold uppercase text-red-800">{node.layer}</span>
            <span className="block text-sm font-bold text-slate-900 mt-1">{node.label}</span>
            <span className="block text-xs text-slate-500 mt-1">{node.short}</span>
          </button>
        ))}
        <div className="pt-2 space-y-2">
          <p className="text-[10px] font-bold uppercase text-slate-500">Các quan hệ</p>
          {visibleEdges.map(edge => (
            <button key={edge.id} type="button" onClick={() => selectEdge(edge.id)} className={`w-full text-left px-3 py-2 rounded-xl border text-xs font-semibold ${selectedEdgeId === edge.id ? 'bg-red-800 text-white border-red-800' : 'bg-white text-red-800 border-red-200'}`}>
              {edge.label}: {meaningMapNodes.find(node => node.id === edge.from)?.label} ↔ {meaningMapNodes.find(node => node.id === edge.to)?.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-slate-500">
        <span className="inline-flex items-center gap-1.5"><span className="h-2 w-5 rounded-full bg-red-700" /> Quan hệ lý luận</span>
        <span className="inline-flex items-center gap-1.5"><span className="h-2 w-5 rounded-full bg-amber-600" /> Quan hệ thực tiễn</span>
        <span className="inline-flex items-center gap-1.5"><Link2 className="w-3.5 h-3.5" /> Nhấp node hoặc đường nối</span>
      </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
        <div className="bg-slate-50 rounded-2xl p-5 space-y-3 min-h-[230px] border border-slate-100">
          {selectedEdge ? (
            <>
              <div className="flex items-center justify-between gap-3">
                <span className="text-[10px] font-bold uppercase tracking-wide text-amber-800">Quan hệ {selectedEdge.category}</span>
                <span className="text-xs font-bold text-red-800">{selectedEdge.label}</span>
              </div>
              <p className="text-sm font-semibold text-slate-900">{selectedEdge.explanation}</p>
              <p className="text-xs text-slate-600"><strong>Câu hỏi kiểm chứng:</strong> {selectedEdge.question}</p>
              <p className="text-xs text-amber-900"><strong>Giới hạn:</strong> {selectedEdge.boundary}</p>
            </>
          ) : selectedNode ? (
            <>
              <span className="text-[10px] font-bold uppercase tracking-wide text-red-800">{selectedNode.layer}</span>
              <h4 className="text-lg font-bold text-slate-900">{selectedNode.label}</h4>
              <p className="text-sm text-slate-700 leading-relaxed">{selectedNode.summary}</p>
              {selectedNode.quote && (
                <blockquote className="border-l-2 border-red-700 pl-3 text-xs italic text-slate-700 leading-relaxed">
                  {selectedNode.quote}
                  <cite className="block not-italic text-[11px] text-red-800 font-semibold mt-1">{selectedNode.quoteSource}</cite>
                </blockquote>
              )}
              <p className="text-xs text-slate-600"><strong>Câu hỏi:</strong> {selectedNode.question}</p>
            </>
          ) : (
            <p className="text-sm text-slate-500">Chọn một node hoặc đường nối để bắt đầu khám phá.</p>
          )}
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 space-y-3 min-h-[230px]">
          <h4 className="text-sm font-bold text-slate-900">Bằng chứng liên quan</h4>
          <ul className="space-y-2 text-xs text-slate-600 leading-relaxed list-disc pl-4">
            {(selectedEdge?.sources || selectedNode?.sources || []).map(source => <li key={source}>{source}</li>)}
          </ul>
          <p className="text-[11px] text-slate-500 pt-2 border-t border-slate-100">Nguồn chỉ hỗ trợ phạm vi lập luận đã nêu; không dùng một trích dẫn hoặc chỉ báo đơn lẻ để suy ra toàn bộ hạnh phúc xã hội.</p>
        </div>
      </div>
    </div>
  );
}
