import React from "react";
import { ArrowUpRight, Facebook, Instagram, MessageCircle } from "lucide-react";
import { IMAGES } from "../data/travelData";

interface HeroProps {
  onOpenQuote: () => void;
  onOpenCustom: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#1a2316]" style={{ minHeight: "100svh", fontFamily: "'Manrope', sans-serif" }}>
      {/* Background Image with Dark Vignette */}
      <img
        src={IMAGES.hero}
        alt="Đà Nẵng toàn cảnh thiên nhiên"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
      />

      {/* Subtle Dark Overlays for maximum contrast & breathing space */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/60" />

      {/* Main Hero Content */}
      <div className="relative z-10 flex flex-col justify-between h-full min-h-[100svh] max-w-[1400px] mx-auto px-5 md:px-10 pt-28 pb-8">

        {/* Center Main Headline (Sized balanced & breathable) */}
        <div className="flex-1 flex flex-col justify-center items-center text-center my-auto py-8 max-w-4xl mx-auto">
          <h1 className="text-[clamp(36px,5.5vw,76px)] font-extrabold text-white leading-[1.08] tracking-[-0.03em] mb-4 drop-shadow-lg">
            Khám phá thế giới &<br />
            trải nghiệm văn hóa<br />
            Đà Nẵng & Miền Trung
          </h1>
        </div>

        {/* Bottom Action Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4 border-t border-white/15">
          {/* Bottom Left: Book Now Capsule Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="group inline-flex items-center gap-3 bg-[#43563A] hover:bg-[#34452F] text-white rounded-full p-2 pl-6 pr-2 transition-all duration-300 shadow-xl cursor-pointer"
            >
              <span className="text-xs sm:text-sm font-bold tracking-tight">Đặt Tour Ngay</span>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-[#43563A] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300 shadow">
                <ArrowUpRight size={17} />
              </div>
            </button>
          </div>

          {/* Bottom Center: Subtitle Text */}
          <p
            className="text-white/80 text-xs md:text-sm text-center max-w-md leading-relaxed"
            style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
          >
            Hành trình trọn gói, tour thiết kế theo yêu cầu & các giải pháp du lịch hàng đầu cùng Angel One Travel.
          </p>

          {/* Bottom Right: Social Icons Circles */}
          <div className="flex items-center gap-2.5">
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white hover:bg-white hover:text-[#43563A] transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook size={14} />
            </a>
            <a
              href="https://zalo.me/0768643446"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white hover:bg-white hover:text-[#43563A] transition-all duration-300"
              aria-label="Zalo"
            >
              <MessageCircle size={14} />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white hover:bg-white hover:text-[#43563A] transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
