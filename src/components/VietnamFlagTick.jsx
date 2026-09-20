/**
 * Cute micro-interaction component:
 * When checked/ticked, displays an animated mini Vietnamese Red Flag with Golden Star
 * with a playful spring pop-in, golden sparkle, and sheen overlay.
 */
export default function VietnamFlagTick({ checked = false, className = '' }) {
  if (!checked) {
    return (
      <div 
        className={`w-7 h-5 rounded-[4px] border border-slate-300/80 bg-slate-50 flex items-center justify-center transition-all duration-200 group-hover:border-red-300 group-hover:bg-red-50/40 flex-shrink-0 ${className}`}
        title="Chưa chọn"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-red-300 transition-colors" />
      </div>
    );
  }

  return (
    <div 
      className={`relative inline-flex items-center justify-center select-none flex-shrink-0 animate-flag-pop ${className}`}
      title="Đã chọn (Cờ đỏ sao vàng Việt Nam)"
    >
      {/* Cute mini flag container with golden glow */}
      <div className="w-7 h-5 rounded-[4px] overflow-hidden shadow-[0_2px_8px_rgba(218,37,29,0.35)] border border-amber-300/80 relative bg-[#da251d] flex items-center justify-center">
        {/* Precise SVG Vietnamese Flag */}
        <svg 
          viewBox="0 0 30 20" 
          className="w-full h-full object-cover"
          aria-hidden="true"
        >
          {/* Crimson Red Background */}
          <rect width="30" height="20" fill="#da251d" />
          {/* Golden 5-Pointed Star (ratio 3:2 standard) */}
          <polygon
            points="15,4 16.545,8.755 21.545,8.755 17.5,11.69 19.045,16.445 15,13.51 10.955,16.445 12.5,11.69 8.455,8.755 13.455,8.755"
            fill="#ffff00"
          />
        </svg>

        {/* Diagonal Sheen / Gloss Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/35 to-transparent pointer-events-none" />
      </div>

      {/* Cute playful sparkling micro-badge */}
      <span className="absolute -top-1.5 -right-1.5 text-[9px] leading-none select-none pointer-events-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] animate-pulse">
        ✨
      </span>
    </div>
  );
}
