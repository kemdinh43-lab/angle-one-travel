import React, { useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { DESTINATIONS } from "../data/travelData";
import { Destination } from "../types/travel";
import { useWordPressContent } from "../lib/wordpressContent";

interface DestinationsProps {
  onOpenQuote: () => void;
}

export const Destinations: React.FC<DestinationsProps> = ({ onOpenQuote }) => {
  const TABS = ["Tất cả", "Thành phố", "Văn hóa", "Thiên nhiên", "Biển"];
  const [activeTab, setActiveTab] = useState("Tất cả");
  const [selectedDest, setSelectedDest] = useState<Destination | null>(null);
  const { destinations: wpDestinations } = useWordPressContent();
  const destinations =
    wpDestinations.length > 0
      ? [...wpDestinations, ...DESTINATIONS.filter((destination) => !wpDestinations.some((wpDestination) => wpDestination.slug === destination.slug || wpDestination.id === destination.id))]
      : DESTINATIONS;

  const filteredDests =
    activeTab === "Tất cả"
      ? destinations
      : destinations.filter((d) => d.tag === activeTab);

  return (
    <section id="destinations" className="py-20 md:py-28 bg-[#FAF9F5]" style={{ fontFamily: "'Manrope', sans-serif" }}>
      <div className="max-w-[1320px] mx-auto px-5 md:px-10">
        {/* Title Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs text-[#787D75] uppercase tracking-widest mb-3 font-semibold">Bản đồ trải nghiệm</p>
            <h2 className="text-[clamp(28px,4vw,52px)] font-extrabold text-[#22251F] tracking-[-0.02em] leading-tight">
              Điểm đến hấp dẫn nhất
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer border ${
                  activeTab === tab
                    ? "bg-[#43563A] text-white border-[#43563A] shadow-sm"
                    : "bg-white border-[#D9D8D0] text-[#464A43] hover:border-[#9BA48F] hover:text-[#43563A]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredDests.map((dest) => (
            <div
              key={dest.id}
              onClick={() => setSelectedDest(dest)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer bg-[#DDE3D6] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-end"
              style={{ minHeight: 280 }}
            >
              <img
                src={dest.img}
                alt={dest.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="relative z-10 p-6 flex flex-col justify-end">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-[#DDE3D6] uppercase tracking-widest font-semibold flex items-center gap-1">
                    <MapPin size={11} /> {dest.tag}
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] px-2.5 py-0.5 rounded-full">
                    {dest.bestTime}
                  </span>
                </div>
                <h3 className="text-white font-extrabold text-2xl tracking-tight mb-2">
                  {dest.name}
                </h3>
                <p
                  className="text-white/80 text-xs line-clamp-2 mb-3"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                  {dest.description}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-white/20">
                  <span className="text-xs text-white/90 font-medium">Xem tour tại đây</span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#43563A] transition-all">
                    <ArrowRight size={13} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Destination */}
        {selectedDest && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-lg bg-[#FAF9F5] rounded-3xl p-6 border border-[#D9D8D0] shadow-2xl">
              <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                <img src={selectedDest.img} alt={selectedDest.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-xs text-[#DDE3D6] uppercase tracking-wider">{selectedDest.tag}</span>
                  <h3 className="text-2xl font-bold">{selectedDest.name}</h3>
                </div>
              </div>

              <p className="text-sm text-[#464A43] leading-relaxed mb-4" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                {selectedDest.description}
              </p>

              <div className="bg-white border border-[#D9D8D0] rounded-xl p-3 mb-6">
                <p className="text-xs font-bold text-[#43563A] mb-2">Trải nghiệm không thể bỏ qua:</p>
                <div className="flex flex-wrap gap-1.5">
                  {selectedDest.highlights.map((h, i) => (
                    <span key={i} className="bg-[#DDE3D6] text-[#43563A] px-2.5 py-1 rounded-full text-xs font-medium">
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedDest(null)}
                  className="flex-1 py-2.5 border border-[#D9D8D0] text-[#464A43] rounded-full text-sm font-medium hover:bg-white"
                >
                  Đóng
                </button>
                <button
                  onClick={() => {
                    setSelectedDest(null);
                    onOpenQuote();
                  }}
                  className="flex-1 py-2.5 bg-[#43563A] text-white rounded-full text-sm font-medium hover:bg-[#34452F]"
                >
                  Đặt tour ngay
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
