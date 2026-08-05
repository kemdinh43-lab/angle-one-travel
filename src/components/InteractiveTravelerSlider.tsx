import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface DestinationItem {
  id: string;
  name: string;
  image: string;
}

const DESTINATIONS: DestinationItem[] = [
  {
    id: "danang",
    name: "DA NANG",
    image: "/destinations/danang_bg.jpg",
  },
  {
    id: "hoian",
    name: "HOI AN",
    image: "/destinations/hoian_bg.jpg",
  },
  {
    id: "hue",
    name: "HUE",
    image: "/destinations/hue_bg.jpg",
  },
  {
    id: "quangbinh",
    name: "QUANG BINH",
    image: "/destinations/quangbinh_bg.jpg",
  },
  {
    id: "quynhon",
    name: "QUY NHON",
    image: "/destinations/quynhon_bg.jpg",
  },
];

interface InteractiveTravelerSliderProps {
  onNavigateTours?: () => void;
}

export const InteractiveTravelerSlider: React.FC<InteractiveTravelerSliderProps> = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % DESTINATIONS.length);
    setTimeout(() => setIsAnimating(false), 750);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + DESTINATIONS.length) % DESTINATIONS.length);
    setTimeout(() => setIsAnimating(false), 750);
  };

  const goToIndex = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 750);
  };

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, isAnimating]);

  // Mobile Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
  };

  return (
    <section
      className="relative w-full h-[460px] sm:h-[640px] lg:h-[820px] overflow-hidden bg-black select-none my-6 sm:my-10 lg:my-14"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      
      {/* ── LỚP 1: CONTINUOUS HORIZONTAL SPLIT-SCREEN SLIDING BACKGROUNDS (DESKTOP 100% LOCKED) ── */}
      <div
        className="w-[500%] h-full flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 20}%)`,
        }}
      >
        {DESTINATIONS.map((slide) => (
          <div key={slide.id} className="w-[20%] h-full relative flex-shrink-0">
            {/* 100% Original High-Res Background Image with NO dark overlay */}
            <img
              src={slide.image}
              alt={slide.name}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* ── LỚP 3: NHÂN VẬT CỐ ĐỊNH CHÍNH GIỮA (DESKTOP 100% LOCKED: lg:-bottom-[380px] lg:h-[980px], MOBILE RESIZED PERFECTLY) ── */}
      <div className="absolute -bottom-[210px] sm:-bottom-[290px] lg:-bottom-[380px] left-1/2 -translate-x-1/2 z-30 pointer-events-none flex justify-center items-end h-[560px] sm:h-[760px] lg:h-[980px]">
        <img
          src="/destinations/traveler_cutout.png"
          alt="Angel One Traveler"
          className="h-full w-auto max-w-none object-contain object-bottom drop-shadow-[0_35px_70px_rgba(0,0,0,0.85)] filter brightness-105 contrast-105"
        />
      </div>

      {/* ── LỚP 4: THUẦN CAROUSEL UI (DESKTOP 100% LOCKED, MOBILE RESPONSIVE UI CONTROLS) ── */}
      <div className="absolute inset-0 z-40 max-w-[1400px] mx-auto h-full px-4 sm:px-8 lg:px-12 flex flex-col justify-between py-6 sm:py-8 lg:py-12 pointer-events-none">
        
        {/* Top Header Controls (Arrow Navigation Buttons) */}
        <div className="flex items-center justify-end pointer-events-auto w-full">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-white hover:text-black border border-white/30 backdrop-blur-md text-white flex items-center justify-center transition-all cursor-pointer shadow-lg"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-white hover:text-black border border-white/30 backdrop-blur-md text-white flex items-center justify-center transition-all cursor-pointer shadow-lg"
              aria-label="Next Slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Carousel Controls: 5 Circle Indicator Dots */}
        <div className="my-auto pointer-events-auto flex items-center">
          <div className="flex items-center gap-2 sm:gap-2.5 bg-black/35 backdrop-blur-md px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20 shadow-xl">
            {DESTINATIONS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToIndex(idx)}
                className={`w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full transition-all cursor-pointer ${
                  idx === currentIndex
                    ? "bg-white scale-125 ring-2 ring-white/60 shadow-md"
                    : "bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};
