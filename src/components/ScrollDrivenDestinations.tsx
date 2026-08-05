import React, { useRef, useState, useEffect } from "react";
import { ArrowRight, ChevronRight, ChevronLeft, MapPin, Sparkles } from "lucide-react";
import { IMAGES } from "../data/travelData";

export interface DestinationSlide {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
}

const DESTINATIONS: DestinationSlide[] = [
  {
    id: "danang",
    number: "01",
    name: "ĐÀ NẴNG",
    subtitle: "Thành phố đáng sống bên bờ biển Mỹ Khê",
    description: "Cửa ngõ miền Trung rực rỡ với bãi biển Mỹ Khê xanh ngắt, bán đảo Sơn Trà quyến rũ và đỉnh Bà Nà Hills mờ sương kỳ vĩ.",
    image: IMAGES.danang,
    tag: "Điểm Đến Đột Phá",
  },
  {
    id: "hoian",
    number: "02",
    name: "HỘI AN",
    subtitle: "Phố cổ di sản rực rỡ sắc đèn lồng",
    description: "Nơi lưu giữ nhịp sống hoài cổ yên bình bên dòng sông Hoài trầm mặc, điểm hẹn ẩm thực & kiến trúc di sản thế giới.",
    image: IMAGES.hoian,
    tag: "Di Sản Văn Hóa",
  },
  {
    id: "hue",
    number: "03",
    name: "CỐ ĐÔ HUẾ",
    subtitle: "Dấu ấn triều đại & Dòng sông Hương thơ mộng",
    description: "Vùng đất di sản trầm mặc với Đại Nội nguy nga, hệ thống lăng tẩm cổ kính và ẩm thực cung đình tinh tế vượt thời gian.",
    image: IMAGES.hue,
    tag: "Văn Hóa Cung Đình",
  },
  {
    id: "quangbinh",
    number: "04",
    name: "QUẢNG BÌNH",
    subtitle: "Vương quốc hang động kỳ vĩ thế giới",
    description: "Thiên nhiên hoang sơ với Sơn Đoòng đại ngàn, động Phong Nha - Kẻ Bàng và những bãi biển xanh trong vắt chưa từng khai phá.",
    image: IMAGES.coastal,
    tag: "Kỳ Quan Thiên Nhiên",
  },
  {
    id: "quynhon",
    number: "05",
    name: "QUY NHƠN",
    subtitle: "Thiên đường biển xanh Eo Gió & Kỳ Co",
    description: "Vẻ đẹp biển đảo nguyên sơ với những ghềnh đá bạt ngàn, hoàng hôn Eo Gió thơ mộng và thảm san hô rực rỡ sắc màu.",
    image: IMAGES.beachP,
    tag: "Biển Đảo Nguyên Sơ",
  },
];

interface ScrollDrivenDestinationsProps {
  onNavigateTours: () => void;
}

export const ScrollDrivenDestinations: React.FC<ScrollDrivenDestinationsProps> = ({
  onNavigateTours,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
    const handleChange = () => setIsReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Listen to window scroll to scrub progress & pinned index inside the 5-height section
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalHeight = containerRef.current.offsetHeight - window.innerHeight;
      
      if (totalHeight <= 0) return;

      const scrolled = -rect.top;
      const currentProgress = Math.max(0, Math.min(1, scrolled / totalHeight));
      setProgress(currentProgress);

      // Determine active slide index (0 to 4)
      const index = Math.min(
        DESTINATIONS.length - 1,
        Math.floor(currentProgress * DESTINATIONS.length)
      );
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextSlide = () => {
    if (activeIndex < DESTINATIONS.length - 1) {
      const targetIndex = activeIndex + 1;
      scrollToSlideIndex(targetIndex);
    }
  };

  const prevSlide = () => {
    if (activeIndex > 0) {
      const targetIndex = activeIndex - 1;
      scrollToSlideIndex(targetIndex);
    }
  };

  const scrollToSlideIndex = (index: number) => {
    if (!containerRef.current) return;
    const totalHeight = containerRef.current.offsetHeight - window.innerHeight;
    const targetScroll = containerRef.current.offsetTop + (index / (DESTINATIONS.length - 1)) * totalHeight;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  return (
    // Outer scroll track container: 500vh height to create a smooth pin duration
    <div
      ref={containerRef}
      className="relative w-full bg-[#111827]"
      style={{ height: `${DESTINATIONS.length * 100}vh` }}
    >
      {/* Sticky Fullscreen Pinned Viewport */}
      <div className="sticky top-0 w-full h-screen overflow-hidden text-white flex flex-col justify-between select-none">
        
        {/* Render stacked slides with horizontal clip-path reveal matching reference video */}
        {DESTINATIONS.map((slide, idx) => {
          // Calculate individual slide progress for clip-path horizontal reveal
          const slideStart = idx / DESTINATIONS.length;
          const slideEnd = (idx + 1) / DESTINATIONS.length;
          let slideProgress = 0;
          
          if (progress >= slideEnd) {
            slideProgress = 1;
          } else if (progress <= slideStart) {
            slideProgress = 0;
          } else {
            slideProgress = (progress - slideStart) / (slideEnd - slideStart);
          }

          // Compute horizontal reveal clip-path inset (Inset from right to left: 0% to 0% = visible)
          // For active and previous slides
          const clipRight = idx <= activeIndex ? 0 : 100;
          const isCurrent = idx === activeIndex;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-all duration-700 ease-out ${
                isReducedMotion ? (isCurrent ? "opacity-100 z-20" : "opacity-0 z-10") : ""
              }`}
              style={{
                zIndex: idx + 10,
                clipPath: isReducedMotion
                  ? "none"
                  : idx === 0
                  ? "inset(0 0 0 0)"
                  : `inset(0 ${100 - (idx <= activeIndex ? 100 : 0)}% 0 0)`,
                transition: "clip-path 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease",
              }}
            >
              {/* Full-bleed Destination Image */}
              <img
                src={slide.image}
                alt={slide.name}
                className="absolute inset-0 w-full h-full object-cover object-center scale-105"
              />

              {/* Dark Ambient Gradients & Vignette for high contrast typography */}
              <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/60" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40" />

              {/* Content Container */}
              <div className="relative z-10 max-w-[1360px] mx-auto h-full px-5 sm:px-10 flex flex-col justify-between py-24 sm:py-28">
                
                {/* Top Bar inside Slide */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#43563A] animate-pulse" />
                    <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.25em] text-white/90">
                      ANGEL ONE DESTINATIONS · {slide.tag}
                    </span>
                  </div>

                  {/* Slide Number Badge */}
                  <div className="text-xs sm:text-sm font-black tracking-widest text-white/80 border border-white/20 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full">
                    {slide.number} <span className="text-white/40">/ 05</span>
                  </div>
                </div>

                {/* Middle: Giant Split Typography Title (Khớp chuẩn ảnh mẫu HOKKAIDO / OKINAWA) */}
                <div className="my-auto space-y-4 max-w-4xl text-left">
                  
                  {/* Giant Destination Title */}
                  <h2 className="text-[clamp(48px,10vw,120px)] font-black text-white tracking-[-0.04em] leading-[0.9] uppercase drop-shadow-2xl">
                    {slide.name}
                  </h2>

                  <h3 className="text-base sm:text-2xl font-bold text-white/90 tracking-tight">
                    {slide.subtitle}
                  </h3>

                  <p
                    className="text-xs sm:text-base text-white/80 leading-relaxed font-medium max-w-2xl pt-1"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    {slide.description}
                  </p>

                  <div className="pt-4">
                    <button
                      onClick={onNavigateTours}
                      className="bg-white hover:bg-[#43563A] hover:text-white text-[#111827] font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-full transition-all shadow-2xl cursor-pointer inline-flex items-center gap-2.5 group"
                    >
                      <span>Khám Phá Tour {slide.name}</span>
                      <div className="w-6 h-6 rounded-full bg-black/10 group-hover:bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                        <ArrowRight size={14} />
                      </div>
                    </button>
                  </div>

                </div>

              </div>
            </div>
          );
        })}

        {/* Global Floating Bottom Controls Overlay across pinned viewport */}
        <div className="absolute bottom-8 left-0 right-0 z-50 max-w-[1360px] mx-auto px-5 sm:px-10 flex items-center justify-between pointer-events-none">
          
          {/* Progress Bar & Indicators */}
          <div className="flex items-center gap-4 pointer-events-auto">
            <div className="w-32 sm:w-48 h-1 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-300 ease-out"
                style={{ width: `${((activeIndex + 1) / DESTINATIONS.length) * 100}%` }}
              />
            </div>
            <span className="text-xs font-bold text-white/80">
              {DESTINATIONS[activeIndex].name}
            </span>
          </div>

          {/* Nav Arrows */}
          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              onClick={prevSlide}
              disabled={activeIndex === 0}
              className={`w-11 h-11 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center transition-all ${
                activeIndex === 0
                  ? "opacity-30 cursor-not-allowed bg-black/20"
                  : "hover:bg-white hover:text-[#111827] bg-black/40 text-white cursor-pointer"
              }`}
              aria-label="Previous Destination"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              disabled={activeIndex === DESTINATIONS.length - 1}
              className={`w-11 h-11 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center transition-all ${
                activeIndex === DESTINATIONS.length - 1
                  ? "opacity-30 cursor-not-allowed bg-black/20"
                  : "hover:bg-white hover:text-[#111827] bg-black/40 text-white cursor-pointer"
              }`}
              aria-label="Next Destination"
            >
              <ChevronRight size={20} />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
