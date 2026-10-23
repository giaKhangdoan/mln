import { vietnamOutlinePath } from '../data/vietnamMapOutline';

// Offshore points use published geographic coordinates. Their markers are
// enlarged for this locator map and are not to scale.
const dms = (degrees, minutes, seconds) => degrees + minutes / 60 + seconds / 3600;

const islandFeatures = [
  {
    group: 'hoang-sa',
    points: [
      [dms(17, 6, 0), dms(111, 30, 8)], // Đá Bắc
      [dms(16, 32, 0), dms(111, 36, 7)], // Hoàng Sa
      [dms(16, 30, 3), dms(111, 35, 3)], // Hữu Nhật
      [dms(16, 27, 6), dms(111, 35, 3)], // Duy Mộng
      [dms(16, 26, 9), dms(111, 42, 7)], // Quang Hòa
      [dms(16, 27, 0), dms(111, 30, 8)], // Quang Ảnh
      [dms(16, 3, 5), dms(111, 46, 9)], // Bạch Quy
      [dms(15, 47, 2), dms(111, 11, 8)], // Tri Tôn
      [dms(15, 44, 0), dms(112, 14, 1)], // Ốc Tai Voi
      [dms(16, 34, 0), dms(111, 40, 0)], // Ốc Hoa
      [dms(16, 33, 8), dms(111, 41, 5)], // Ba Ba
      [dms(16, 30, 5), dms(111, 46, 2)], // Lưỡi Liềm
      [dms(16, 28, 0), dms(111, 35, 5)], // Hải Sâm
      [dms(16, 15, 0), dms(111, 41, 0)], // Đá Lồi
      [dms(16, 20, 8), dms(112, 2, 6)], // Đá Chim Én
      [dms(16, 34, 9), dms(111, 42, 9)], // Xà Cừ
      [dms(16, 27, 5), dms(111, 39, 0)] // Ngự Bình
    ]
  },
  {
    group: 'truong-sa',
    points: [
      [dms(11, 25, 48), dms(114, 19, 47)], // Song Tử Tây
      [dms(10, 10, 48), dms(114, 21, 54)], // Nam Yết
      [dms(9, 53, 9), dms(114, 19, 45)], // Sinh Tồn
      [dms(8, 38, 48), dms(111, 55, 6)], // Trường Sa
      [dms(8, 40, 15), dms(111, 40, 18)], // Đá Lát
      [dms(8, 51, 30), dms(112, 13, 6)], // Đá Tây
      [dms(8, 56, 6), dms(112, 20, 54)], // Trường Sa Đông
      [dms(7, 53, 36), dms(112, 55, 11)], // An Bang
      [dms(9, 46, 24), dms(114, 15, 12)], // Cô Lin
      [dms(8, 49, 42), dms(112, 35, 48)], // Đá Đông
      [dms(9, 54, 18), dms(115, 32, 18)], // Vành Khăn
      [dms(9, 36, 8), dms(116, 9, 53)], // Long Điền
      [dms(9, 31, 12), dms(116, 21, 30)] // Bồ Đề
    ]
  }
];

const projectCoordinates = ([latitude, longitude]) => ({
  x: 40 + (longitude - 100) * 32,
  y: 22 + (24 - latitude) * 27
});

const getFeatureCenter = ({ points }) => {
  const projected = points.map(projectCoordinates);
  const totals = projected.reduce((result, point) => ({ x: result.x + point.x, y: result.y + point.y }), { x: 0, y: 0 });
  return { x: totals.x / projected.length, y: totals.y / projected.length };
};

const completeOutlinePath = vietnamOutlinePath;

function IslandCluster({ label, x, y, labelX, labelY, anchor = 'start' }) {
  const lineEndX = anchor === 'start' ? labelX - 7 : labelX - 64;
  const lineEndY = labelY - 4;

  return (
    <g className="vietnam-map__island-label">
      <path d={`M${x} ${y} L${lineEndX} ${lineEndY}`} />
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

      <figure data-reveal className="vietnam-map-card min-w-0 overflow-hidden">
        <svg
          className="block h-auto w-full"
          viewBox="0 0 620 500"
          role="img"
          aria-labelledby="vietnam-map-svg-title vietnam-map-svg-desc"
        >
          <title id="vietnam-map-svg-title">Bản đồ Việt Nam với Hà Nội, Thành phố Hồ Chí Minh, Hoàng Sa và Trường Sa</title>
          <desc id="vietnam-map-svg-desc">Bản đồ định hướng, có các nhãn thành phố và các điểm đảo được đặt theo tọa độ, phóng lớn để dễ quan sát; không theo tỷ lệ.</desc>
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
          <rect width="620" height="500" rx="22" fill="url(#vietnam-map-bg)" />
          <path d="M22 72H598 M22 166H598 M22 260H598 M22 354H598 M22 448H598" className="vietnam-map__grid" />
          <path d={vietnamOutlinePath} className="vietnam-map__land" />
          {islandFeatures.map(({ group, points }) => (
            <g key={group} className="vietnam-map__island-points" aria-hidden="true">
              {points.map((coordinate, index) => {
                const { x, y } = projectCoordinates(coordinate);
                return <circle key={`${group}-${index}`} cx={x} cy={y} r="2.1" />;
              })}
            </g>
          ))}
          <path d={completeOutlinePath} pathLength="1000" className="vietnam-map__outline-base" />
          <path d={completeOutlinePath} pathLength="1000" className="vietnam-map__outline-run" filter="url(#vietnam-map-glow)" />

          <g className="vietnam-map__city vietnam-map__city--hanoi">
            <path d="M227 102 L176 86 L112 86" />
            <circle cx="227" cy="102" r="7" className="vietnam-map__city-halo" />
            <circle cx="227" cy="102" r="3.5" className="vietnam-map__city-dot" />
            <text x="63" y="84" className="vietnam-map__city-name">HÀ NỘI</text>
            <text x="63" y="97" className="vietnam-map__city-caption">THỦ ĐÔ</text>
          </g>

          <g className="vietnam-map__city vietnam-map__city--hcmc">
            <path d="M252 378 L268 397 L278 397" />
            <circle cx="252" cy="378" r="7" className="vietnam-map__city-halo" />
            <circle cx="252" cy="378" r="3.5" className="vietnam-map__city-dot" />
            <text x="287" y="396" className="vietnam-map__city-name">TP. HỒ CHÍ MINH</text>
            <text x="287" y="410" className="vietnam-map__city-caption">THÀNH PHỐ</text>
          </g>

          <IslandCluster label="HOÀNG SA" {...getFeatureCenter(islandFeatures[0])} labelX={446} labelY={195} />
          <IslandCluster label="TRƯỜNG SA" {...getFeatureCenter(islandFeatures[1])} labelX={590} labelY={467} anchor="end" />

          <text x="28" y="474" className="vietnam-map__map-note">SƠ ĐỒ ĐỊNH HƯỚNG · KHÔNG THEO TỶ LỆ</text>
        </svg>
        <figcaption className="mt-2 text-xs leading-5 text-stone-500 sm:text-sm">
          Vị trí điểm đảo theo{' '}
          <a href="https://mae.gov.vn/noidung/Lists/VBQPPL/Attachments/514/1_DanhMuc_TT_DiaDanh_BanHanh.pdf" target="_blank" rel="noreferrer" className="text-[#741e25] underline decoration-current/40 underline-offset-2 hover:text-[#a1383d]">
            danh mục địa danh của Bộ Tài nguyên và Môi trường
          </a>
          {' '}và{' '}
          <a href="https://danang.gov.vn/vi/web/dng/w/ubnd-huyen-hoang-sa-i" target="_blank" rel="noreferrer" className="text-[#741e25] underline decoration-current/40 underline-offset-2 hover:text-[#a1383d]">
            Cổng thông tin thành phố Đà Nẵng
          </a>
          ; đường bao đất liền khái quát từ{' '}
          <a href="https://www.naturalearthdata.com/downloads/50m-cultural-vectors/" target="_blank" rel="noreferrer" className="text-[#741e25] underline decoration-current/40 underline-offset-2 hover:text-[#a1383d]">
            Natural Earth
          </a>
          ; địa giới đối chiếu với{' '}
          <a href="https://thongtin.diagioi.gov.vn/tracuubando.aspx?mapid=11" target="_blank" rel="noreferrer" className="text-[#741e25] underline decoration-current/40 underline-offset-2 hover:text-[#a1383d]">
            Hệ thống quản lý CSDL địa giới hành chính Việt Nam
          </a>
          .
        </figcaption>
      </figure>
    </section>
  );
}
