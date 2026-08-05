import React, { useState, useEffect } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { IMAGES } from "../data/travelData";

interface CustomTourProps {
  onOpenCustom: () => void;
}

const CAROUSEL_IMAGES = [
  { img: IMAGES.hoianB, title: "Phố cổ Hội An" },
  { img: IMAGES.danang, title: "Thành phố Đà Nẵng" },
  { img: IMAGES.hue, title: "Cố Đô Huế" },
  { img: IMAGES.coastal, title: "Vịnh biển Quảng Bình" },
];

export const CustomTour: React.FC<CustomTourProps> = ({ onOpenCustom }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  };

  return (
    <section id="custom" className="py-16 md:py-24 bg-white border-b border-[#D9D8D0]" style={{ fontFamily: "'Manrope', sans-serif" }}>
      <div className="max-w-[1320px] mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <span className="text-xs text-[#787D75] uppercase tracking-widest font-bold mb-3">
              TOUR THEO YÊU CẦU
            </span>
            
            <h2 className="text-[clamp(28px,3.5vw,46px)] font-extrabold text-[#22251F] tracking-[-0.02em] leading-tight mb-5 max-w-lg">
              Bạn chọn nhu cầu,<br />
              chúng tôi thiết kế<br />
              hành trình riêng
            </h2>

            <p
              className="text-[#787D75] text-sm md:text-base leading-relaxed mb-8 max-w-md"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              Mỗi du khách là một phong cách trải nghiệm khác nhau. Angel One lắng nghe, tùy biến kịch bản từ khách sạn, nhà hàng đến điểm dừng chân để bạn có chuyến đi thật trọn vẹn và đáng nhớ.
            </p>

            <div>
              <button
                onClick={onOpenCustom}
                className="inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 bg-[#43563A] text-white text-sm font-semibold hover:bg-[#34452F] shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Bắt đầu thiết kế ngay</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Column: Clean Auto-Sliding 4-Image Carousel without Text Overlay */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group bg-[#DDE3D6] aspect-[4/3] sm:aspect-square lg:aspect-[4/3]">
            
            {/* 4 Images with Smooth Cross-fade Transition */}
            {CAROUSEL_IMAGES.map((item, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Small Navigation Arrows (Appear on hover) */}
            <button
              onClick={goToPrev}
              aria-label="Previous Slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/30 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-black/60 transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={goToNext}
              aria-label="Next Slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/30 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-black/60 transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>

            {/* Small Navigation Dots at Bottom */}
            <div className="absolute bottom-4 inset-x-0 z-20 flex items-center justify-center gap-2">
              {CAROUSEL_IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex
                      ? "w-6 bg-white shadow-md"
                      : "w-2 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
