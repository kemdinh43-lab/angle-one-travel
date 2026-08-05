import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, MapPin, Sparkles } from "lucide-react";
import { IMAGES } from "../data/travelData";

interface LandmarkDepthSliderProps {
  onOpenQuote: () => void;
  onOpenCustom: () => void;
}

const LANDMARKS = [
  {
    id: "bana",
    title: "BÀ NÀ HILLS",
    subtitle: "Đường Lên Tiên Cảnh & Cầu Vàng Biểu Tượng",
    desc: "Trải nghiệm cáp treo đạt kỷ lục thế giới, check-in Cầu Vàng trên đỉnh Núi Chúa và tận hưởng không khí 4 mùa trong 1 ngày.",
    img: IMAGES.bana,
    tag: "Đà Nẵng",
    price: "Giá từ 950.000đ / khách",
  },
  {
    id: "hoian",
    title: "PHỐ CỔ HỘI AN",
    subtitle: "Di Sản Văn Hóa & Đêm Đèn Lồng Sông Hoài",
    desc: "Thả mình vào không gian hoài cổ với Chùa Cầu ngàn năm, đi thuyền thả hoa đăng và thưởng thức Mì Quảng, Cao Lầu chuẩn vị.",
    img: IMAGES.hoianB,
    tag: "Hội An",
    price: "Giá từ 1.890.000đ / tour",
  },
  {
    id: "hue",
    title: "ĐẠI NỘI HUẾ",
    subtitle: "Hoàng Thành Triều Nguyễn & Sông Hương Thơ Mộng",
    desc: "Chiêm ngưỡng kiến trúc cung đình uy nghiêm, viếng các lăng tẩm triều Nguyễn và lắng nghe điệu ca Huế dạt dào trên sông.",
    img: IMAGES.hue,
    tag: "Cố Đô Huế",
    price: "Giá từ 2.150.000đ / tour",
  },
  {
    id: "quangbinh",
    title: "PHONG NHA",
    subtitle: "Vương Quốc Hang Động & Động Thiên Đường",
    desc: "Chinh phục Động Thiên Đường kỳ vĩ trong lòng đất, chèo thuyền sông Son vào Động Phong Nha và thưởng thức hải sản Nhật Lệ.",
    img: IMAGES.coastal,
    tag: "Quảng Bình",
    price: "Giá từ 3.450.000đ / tour",
  },
];

export const LandmarkDepthSlider: React.FC<LandmarkDepthSliderProps> = ({
  onOpenQuote,
  onOpenCustom,
}) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-slide every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(timer);
  }, [activeIdx]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIdx((prev) => (prev + 1) % LANDMARKS.length);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIdx((prev) => (prev - 1 + LANDMARKS.length) % LANDMARKS.length);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const currentLandmark = LANDMARKS[activeIdx];

  return (
    <section id="landmarks" className="relative w-full overflow-hidden bg-[#243120] text-white py-20 md:py-28" style={{ minHeight: "85svh", fontFamily: "'Manrope', sans-serif" }}>
      
      {/* ── BACKGROUND SCENERY IMAGE SLIDER ────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        {LANDMARKS.map((item, idx) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              idx === activeIdx
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-105 z-0 pointer-events-none"
            }`}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover object-center"
            />
            {/* Cinematic Gradient Vignette Overlay for Depth & Contrast */}
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b2518] via-black/35 to-[#1b2518]/70" />
          </div>
        ))}
      </div>

      {/* ── FOREGROUND CONTENT & DEPTH TYPOGRAPHY ──────────────────────────────────── */}
      <div className="relative z-20 flex flex-col justify-between h-full min-h-[75svh] max-w-[1320px] mx-auto px-5 md:px-10">
        
        {/* Header Tag & Counter */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-[#43563A]/80 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs text-[#DDE3D6] font-semibold shadow">
              <Sparkles size={13} /> Danh Thắng Miền Trung
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-white/80 bg-black/40 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/15">
            <span>0{activeIdx + 1}</span>
            <span className="opacity-40">/</span>
            <span>0{LANDMARKS.length}</span>
          </div>
        </div>

        {/* Center Container: Giant Submerged Landmark Title & Content */}
        <div className="my-auto py-10 flex flex-col items-center justify-center text-center">
          
          {/* Tag Pill */}
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#DDE3D6] font-extrabold mb-3 block bg-black/40 backdrop-blur-md px-4 py-1 rounded-full border border-white/20 shadow">
            <MapPin size={11} className="inline mr-1" /> {currentLandmark.tag}
          </span>

          {/* GIANT LANDMARK TITLE WITH DEPTH EFFECT */}
          <div className="overflow-hidden w-full max-w-5xl my-2">
            <h2
              key={currentLandmark.id}
              className="font-black text-[clamp(44px,9vw,135px)] leading-[0.92] tracking-[0.02em] uppercase text-white drop-shadow-[0_12px_40px_rgba(0,0,0,0.9)] animate-in fade-in slide-in-from-bottom-4 duration-700 select-none"
            >
              {currentLandmark.title}
            </h2>
          </div>

          {/* Subtitle & Description Glassmorphic Card */}
          <div className="max-w-xl mx-auto mt-5 space-y-3 bg-[#1e281b]/70 backdrop-blur-xl p-6 rounded-3xl border border-white/25 shadow-2xl">
            <h3 className="text-base sm:text-xl font-bold text-white tracking-tight">
              {currentLandmark.subtitle}
            </h3>
            <p
              className="text-xs sm:text-sm text-white/85 leading-relaxed"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              {currentLandmark.desc}
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-white/15">
              <span className="text-xs font-semibold text-[#DDE3D6]">{currentLandmark.price}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenQuote}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-white text-[#43563A] hover:bg-[#FAF9F5] text-xs font-bold transition-all cursor-pointer shadow"
                >
                  <span>Đặt tour này</span>
                  <ArrowRight size={13} />
                </button>
                <button
                  onClick={onOpenCustom}
                  className="inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 border border-white/30 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all cursor-pointer"
                >
                  <span>Thiết kế riêng</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Carousel Controls & Pagination Dots */}
        <div className="flex items-center justify-between pb-2 pt-6 border-t border-white/15">
          
          {/* Pagination Dots */}
          <div className="flex items-center gap-2">
            {LANDMARKS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setActiveIdx(idx);
                    setTimeout(() => setIsTransitioning(false), 700);
                  }
                }}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIdx
                    ? "w-8 bg-[#DDE3D6] shadow"
                    : "w-2.5 bg-white/40 hover:bg-white/80"
                }`}
                aria-label={`Go to ${item.title}`}
              />
            ))}
          </div>

          {/* Prev / Next Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous landmark"
              className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/25 text-white flex items-center justify-center hover:bg-white hover:text-[#43563A] transition-all cursor-pointer shadow"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next landmark"
              className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/25 text-white flex items-center justify-center hover:bg-white hover:text-[#43563A] transition-all cursor-pointer shadow"
            >
              <ChevronRight size={18} />
            </button>
          </div>

        </div>

      </div>

    </section>
  );
};
