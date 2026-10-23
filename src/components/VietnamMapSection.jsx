import { vietnamOutlinePath } from '../data/vietnamMapOutline';

const islandOutlines = [
  // Hoàng Sa — visible locator shapes, enlarged for legibility at presentation size.
  'M421 218l3-4 3 2 1 4-4 3-3-2z M432 222l3-3 4 2 1 4-4 2-3-2z M442 216l2-3 3 2 1 3-3 2-3-1z M427 232l2-2 3 1 1 3-3 2-3-1z M438 235l3-2 3 2-1 3-4 1z M449 229l2-2 3 1 1 3-3 2-3-1z',
  // Trường Sa — locator shapes are also enlarged so the group remains visible.
  'M467 405l3-3 4 1 1 3-4 3-4-1z M480 412l2-3 4 1 1 3-3 3-4-1z M493 405l3-2 3 2-1 3-3 1-3-1z M458 421l2-2 3 1 1 3-3 2-3-1z M473 428l3-3 3 1 1 3-3 3-4-1z M488 434l2-2 4 1 1 3-3 2-4-1z M503 420l2-3 4 1 1 3-3 2-4-1z M461 441l2-2 3 1 1 3-3 2-3-1z M480 447l2-2 4 1 1 3-4 2-3-1z M500 442l2-2 3 1 1 3-3 2-3-1z'
].join(' ');

const completeOutlinePath = `${vietnamOutlinePath} ${islandOutlines}`;

function IslandCluster({ label, x, y, labelX, labelY, anchor = 'start' }) {
  const lineEndX = anchor === 'start' ? labelX - 7 : labelX + 7;
  const lineEndY = labelY - 4;

  return (
    <g className="vietnam-map__island-label">
      <path d={`M${x} ${y} L${lineEndX} ${lineEndY}`} />
      <circle cx={x} cy={y} r="3.4" />
      <text x={labelX} y={labelY} textAnchor={anchor}>
        <tspan x={labelX} dy="0">QUẦN ĐẢO</tspan>
        <tspan className="vietnam-map__island-name" x={labelX} dy="15">{label}</tspan>
      </text>
    </g>
  );
}

export default function VietnamMapSection() {
  return (
    <section
      aria-labelledby="vietnam-map-title"
      className="grid items-center gap-7 border-b border-stone-200 py-10 sm:gap-9 sm:py-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12"
    >
      <div data-reveal className="min-w-0">
        <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#741e25]">Địa danh trên bản đồ</p>
        <h2 id="vietnam-map-title" className="mt-3 text-3xl font-semibold leading-tight text-stone-900 sm:text-4xl">
          Việt Nam
        </h2>
        <p className="mt-4 max-w-[42ch] text-base leading-7 text-stone-700 sm:text-lg sm:leading-8">
          Bản đồ đánh dấu thủ đô Hà Nội, Thành phố Hồ Chí Minh và hai quần đảo Hoàng Sa, Trường Sa.
        </p>
        <ul className="mt-6 grid gap-2 text-sm leading-6 text-stone-700 sm:text-base">
          <li><span className="font-semibold text-[#741e25]">Hà Nội</span> · Thủ đô</li>
          <li><span className="font-semibold text-[#741e25]">Thành phố Hồ Chí Minh</span></li>
          <li>Quần đảo Hoàng Sa · Quần đảo Trường Sa</li>
        </ul>
      </div>

      <figure data-reveal className="vietnam-map-card min-w-0 overflow-hidden rounded-3xl border border-[#e9d8ba] bg-[#5b191f] p-2 shadow-[0_24px_64px_-38px_rgba(53,15,20,0.75)] sm:p-3">
        <svg
          className="block h-auto w-full"
          viewBox="0 0 560 500"
          role="img"
          aria-labelledby="vietnam-map-svg-title vietnam-map-svg-desc"
        >
          <title id="vietnam-map-svg-title">Bản đồ Việt Nam với Hà Nội, Thành phố Hồ Chí Minh, Hoàng Sa và Trường Sa</title>
          <desc id="vietnam-map-svg-desc">Bản đồ định hướng, có các nhãn thành phố và quần đảo. Ký hiệu quần đảo được phóng lớn để dễ quan sát.</desc>
          <defs>
            <linearGradient id="vietnam-map-bg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#70232b" />
              <stop offset="1" stopColor="#48151b" />
            </linearGradient>
            <filter id="vietnam-map-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2.4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <rect width="560" height="500" rx="22" fill="url(#vietnam-map-bg)" />
          <path d="M22 72H538 M22 166H538 M22 260H538 M22 354H538 M22 448H538" className="vietnam-map__grid" />
          <path d={vietnamOutlinePath} className="vietnam-map__land" />
          <path d={islandOutlines} className="vietnam-map__land" />
          <path d={completeOutlinePath} pathLength="1000" className="vietnam-map__outline-base" />
          <path d={completeOutlinePath} pathLength="1000" className="vietnam-map__outline-run" filter="url(#vietnam-map-glow)" />

          <g className="vietnam-map__city vietnam-map__city--hanoi">
            <path d="M227 102 L176 86 L144 86" />
            <rect className="vietnam-map__city-tag" x="52" y="68" width="92" height="36" rx="8" />
            <circle cx="227" cy="102" r="7" className="vietnam-map__city-halo" />
            <circle cx="227" cy="102" r="3.5" className="vietnam-map__city-dot" />
            <text x="63" y="84" className="vietnam-map__city-name">HÀ NỘI</text>
            <text x="63" y="97" className="vietnam-map__city-caption">THỦ ĐÔ</text>
          </g>

          <g className="vietnam-map__city vietnam-map__city--hcmc">
            <path d="M252 378 L268 397 L278 397" />
            <rect className="vietnam-map__city-tag" x="278" y="382" width="154" height="38" rx="8" />
            <circle cx="252" cy="378" r="7" className="vietnam-map__city-halo" />
            <circle cx="252" cy="378" r="3.5" className="vietnam-map__city-dot" />
            <text x="289" y="398" className="vietnam-map__city-name">TP. HỒ CHÍ MINH</text>
            <text x="289" y="412" className="vietnam-map__city-caption">THÀNH PHỐ</text>
          </g>

          <IslandCluster label="HOÀNG SA" x={435} y={226} labelX={465} labelY={206} />
          <IslandCluster label="TRƯỜNG SA" x={486} y={428} labelX={460} labelY={462} anchor="end" />

          <text x="28" y="474" className="vietnam-map__map-note">BẢN ĐỒ ĐỊNH HƯỚNG</text>
        </svg>
        <figcaption className="px-3 pb-3 pt-2 text-xs leading-5 text-[#f3e5cf]/80 sm:px-4 sm:text-sm">
          Ký hiệu quần đảo được phóng lớn để dễ nhận biết. Đường bao khái quát từ{' '}
          <a href="https://www.naturalearthdata.com/downloads/50m-cultural-vectors/" target="_blank" rel="noreferrer" className="underline decoration-current/50 underline-offset-2 hover:text-white">
            Natural Earth
          </a>
          ; địa danh đối chiếu với{' '}
          <a href="https://thongtin.diagioi.gov.vn/tracuubando.aspx?mapid=11" target="_blank" rel="noreferrer" className="underline decoration-current/50 underline-offset-2 hover:text-white">
            Hệ thống quản lý CSDL địa giới hành chính Việt Nam
          </a>
          .
        </figcaption>
      </figure>
    </section>
  );
}
