import React from "react";
import { ArrowRight, Clock } from "lucide-react";
import { TOURS } from "../data/travelData";
import { Tour } from "../types/travel";

interface PackagesProps {
  onSelectTour: (tour: Tour) => void;
  onOpenQuote: () => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectTour, onOpenQuote }) => {
  const featuredTour = TOURS[0];
  const sideTours = [
    {
      ...TOURS[1],
      name: "Đà Nẵng – Cố Đô Huế",
    },
    {
      ...TOURS[2],
      name: "Đà Nẵng – Quảng Bình Di Sản",
    },
    {
      ...TOURS[3],
      name: "Đà Nẵng – Quy Nhơn Biển Xanh",
    },
  ];

  return (
    <section id="tours" className="py-20 md:py-28 bg-white" style={{ fontFamily: "'Manrope', sans-serif" }}>
      <div className="max-w-[1320px] mx-auto px-5 md:px-10">
        
        {/* Heading Row (Matching Screenshot 2) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs text-[#787D75] uppercase tracking-widest mb-3 font-semibold">TOUR CHỌN LỌC</p>
            <h2 className="text-[clamp(28px,4vw,52px)] font-extrabold text-[#22251F] tracking-[-0.02em] leading-tight max-w-xl">
              Khám phá các tour nổi bật nhất
            </h2>
          </div>
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-semibold bg-[#43563A] text-white hover:bg-[#34452F] transition-all self-start sm:self-end shadow cursor-pointer"
          >
            Tất cả lịch trình <ArrowRight size={13} />
          </button>
        </div>

        {/* Editorial Grid: 1 Featured Large + Stack Right (Matching Screenshot 2 100%) */}
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 items-stretch">
          
          {/* Featured Large Card (Matching Screenshot 2) */}
          <div
            onClick={() => onSelectTour(featuredTour)}
            className="group relative rounded-3xl overflow-hidden cursor-pointer bg-[#DDE3D6] shadow-md hover:shadow-xl transition-all duration-500 flex flex-col justify-end min-h-[480px] lg:min-h-0 h-full"
          >
            <img
              src={featuredTour.img}
              alt={featuredTour.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            
            <div className="absolute top-6 left-6">
              <span className="bg-[#34452F] text-white rounded-full px-3.5 py-1 text-xs font-bold shadow">
                Nổi bật nhất
              </span>
            </div>

            <div className="relative z-10 p-7 sm:p-8 flex flex-col justify-end">
              <span className="text-white/90 text-xs mb-2 flex items-center gap-1 font-semibold">
                <Clock size={12} /> {featuredTour.days}
              </span>
              <h3 className="text-white text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
                {featuredTour.name}
              </h3>
              <p
                className="text-white/85 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
              >
                {featuredTour.description}
              </p>
              
              <div className="flex items-center justify-between pt-3 border-t border-white/20">
                <div>
                  <p className="text-white/70 text-[11px] font-medium">Giá trọn gói từ</p>
                  <p className="text-white font-extrabold text-sm sm:text-base">{featuredTour.price}</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/30 bg-black/30 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#43563A] transition-all shadow">
                  <ArrowRight size={15} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Stack: 3 Horizontal Cards (Matching Screenshot 2 100%) */}
          <div className="flex flex-col gap-4 justify-between h-full">
            {sideTours.map((t) => (
              <div
                key={t.id}
                onClick={() => onSelectTour(t)}
                className="group flex gap-4 bg-[#FAF9F5] rounded-3xl overflow-hidden border border-[#D9D8D0] hover:border-[#43563A] transition-all cursor-pointer p-4 shadow-2xs hover:shadow-md flex-1 items-center"
              >
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden flex-shrink-0 bg-[#DDE3D6]">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div className="flex flex-col justify-between flex-1 min-w-0 py-1 h-full">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="bg-[#DDE3D6] text-[#43563A] rounded-full px-2.5 py-0.5 text-[10px] font-bold">
                        {t.type}
                      </span>
                      <span className="text-[#787D75] text-xs flex items-center gap-1 font-medium">
                        <Clock size={11} /> {t.days}
                      </span>
                    </div>
                    <h3 className="font-bold text-[#22251F] text-base tracking-tight leading-snug group-hover:text-[#43563A] transition-colors line-clamp-1">
                      {t.name}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <p className="text-xs text-[#464A43] font-bold">{t.price}</p>
                    <div className="w-8 h-8 rounded-full border border-[#D9D8D0] flex items-center justify-center text-[#43563A] group-hover:bg-[#43563A] group-hover:text-white group-hover:border-[#43563A] transition-all">
                      <ArrowRight size={13} />
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
