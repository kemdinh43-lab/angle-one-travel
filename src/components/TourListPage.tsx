import React, { useState, useMemo } from "react";
import { ArrowRight, Search, Filter, Clock, MapPin, CheckCircle, ArrowLeft, Sparkles, SlidersHorizontal } from "lucide-react";
import { TOURS, IMAGES } from "../data/travelData";
import { Tour } from "../types/travel";

interface TourListPageProps {
  category: "domestic" | "international";
  onSelectTour: (tour: Tour) => void;
  onOpenQuote: (tour?: Tour) => void;
  onBackToHome: () => void;
}

export const TourListPage: React.FC<TourListPageProps> = ({
  category,
  onSelectTour,
  onOpenQuote,
  onBackToHome,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");
  const [sortOption, setSortOption] = useState<"featured" | "price-low" | "price-high">("featured");

  const isDomestic = category === "domestic";

  // Filter tours by category (domestic vs international)
  const categoryTours = useMemo(() => {
    return TOURS.filter((t) => t.category === category);
  }, [category]);

  // Extract unique locations for filter tags
  const locations = useMemo(() => {
    const locs = Array.from(new Set(categoryTours.map((t) => t.location)));
    return ["all", ...locs];
  }, [categoryTours]);

  // Filter and sort logic
  const filteredTours = useMemo(() => {
    let result = categoryTours.filter((tour) => {
      const matchesSearch =
        tour.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tour.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tour.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesLocation =
        selectedLocation === "all" || tour.location === selectedLocation;

      const matchesDuration =
        selectedDuration === "all" || tour.days === selectedDuration;

      return matchesSearch && matchesLocation && matchesDuration;
    });

    if (sortOption === "price-low") {
      result.sort((a, b) => {
        const pA = parseInt(a.price.replace(/\D/g, "")) || 0;
        const pB = parseInt(b.price.replace(/\D/g, "")) || 0;
        return pA - pB;
      });
    } else if (sortOption === "price-high") {
      result.sort((a, b) => {
        const pA = parseInt(a.price.replace(/\D/g, "")) || 0;
        const pB = parseInt(b.price.replace(/\D/g, "")) || 0;
        return pB - pA;
      });
    }

    return result;
  }, [categoryTours, searchTerm, selectedLocation, selectedDuration, sortOption]);

  const bgBanner = isDomestic ? IMAGES.hoianB : IMAGES.thailand;

  return (
    <div className="min-h-screen bg-[#FAF9F5]" style={{ fontFamily: "'Manrope', sans-serif" }}>
      
      {/* ── SUBPAGE HERO BANNER ────────────────────────────────────────── */}
      <section className="relative w-full bg-[#1e281b] text-white py-16 md:py-24 overflow-hidden">
        <img
          src={bgBanner}
          alt={isDomestic ? "Tour Du Lịch Trong Nước" : "Tour Du Lịch Nước Ngoài"}
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e281b] via-[#1e281b]/60 to-transparent" />

        <div className="relative z-10 max-w-[1320px] mx-auto px-5 md:px-10">
          
          {/* Breadcrumbs & Back Button */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-xs font-bold text-white/80 hover:text-white bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 transition-all cursor-pointer"
            >
              <ArrowLeft size={14} /> Trang chủ Angel One
            </button>

            <span className="text-xs text-[#DDE3D6] font-semibold bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/15">
              {isDomestic ? "🇻🇳 Tour Trong Nước" : "✈️ Tour Nước Ngoài"}
            </span>
          </div>

          {/* Title & Description */}
          <div className="max-w-2xl">
            <h1 className="text-[clamp(32px,5vw,56px)] font-black tracking-[-0.02em] leading-tight text-white mb-3">
              {isDomestic ? "Tour Du Lịch Trong Nước" : "Tour Du Lịch Nước Ngoài"}
            </h1>
            <p
              className="text-white/85 text-sm md:text-base leading-relaxed mb-8"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              {isDomestic
                ? "Khám phá danh thắng Miền Trung, biển đảo ngọc Phú Quốc & núi rừng Tây Bắc với các hành trình được thiết kế chỉn chu, trọn gói giá tốt nhất."
                : "Hành trình vươn tầm thế giới đến Thái Lan, Hàn Quốc, Nhật Bản, Singapore & Châu Âu với dịch vụ 4-5 sao trọn gói và visa tỉ lệ đậu cao."}
            </p>
          </div>

          {/* Search Input Bar */}
          <div className="relative max-w-xl bg-white/10 backdrop-blur-xl p-2 rounded-2xl border border-white/30 shadow-2xl flex items-center gap-2">
            <Search size={18} className="text-white/70 ml-3 flex-shrink-0" />
            <input
              type="text"
              placeholder={isDomestic ? "Tìm tour Đà Nẵng, Hội An, Huế, Phú Quốc..." : "Tìm tour Thái Lan, Hàn Quốc, Nhật Bản..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent text-xs sm:text-sm text-white placeholder:text-white/70 outline-none pr-3"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="text-xs text-white/70 hover:text-white px-2 cursor-pointer"
              >
                Xóa
              </button>
            )}
          </div>

        </div>
      </section>

      {/* ── INTERACTIVE FILTER BAR & TOUR LIST ────────────────────────── */}
      <section className="py-12 md:py-20 max-w-[1320px] mx-auto px-5 md:px-10">
        
        {/* Filter Controls */}
        <div className="bg-white border border-[#D9D8D0] rounded-3xl p-5 md:p-6 mb-10 shadow-sm space-y-4">
          
          <div className="flex items-center justify-between border-b border-[#D9D8D0] pb-4">
            <div className="flex items-center gap-2 text-sm font-bold text-[#22251F]">
              <SlidersHorizontal size={16} className="text-[#43563A]" />
              <span>Bộ lọc tìm kiếm tour</span>
              <span className="text-xs text-[#787D75] font-normal">({filteredTours.length} kết quả)</span>
            </div>

            {/* Sort selection */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#787D75] hidden sm:inline">Sắp xếp:</span>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as any)}
                className="text-xs font-semibold bg-[#FAF9F5] border border-[#D9D8D0] rounded-full px-3.5 py-1.5 text-[#22251F] outline-none cursor-pointer"
              >
                <option value="featured">Nổi bật nhất</option>
                <option value="price-low">Giá: Thấp đến Cao</option>
                <option value="price-high">Giá: Cao đến Thấp</option>
              </select>
            </div>
          </div>

          {/* Location Filter Tags */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-[#787D75] mr-2">Điểm đến:</span>
            {locations.map((loc) => (
              <button
                key={loc}
                onClick={() => setSelectedLocation(loc)}
                className={`text-xs font-semibold px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                  selectedLocation === loc
                    ? "bg-[#43563A] text-white shadow"
                    : "bg-[#FAF9F5] border border-[#D9D8D0] text-[#464A43] hover:border-[#43563A]"
                }`}
              >
                {loc === "all" ? "Tất cả điểm đến" : loc}
              </button>
            ))}
          </div>

        </div>

        {/* TOUR CARDS GRID */}
        {filteredTours.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredTours.map((tour) => (
              <div
                key={tour.id}
                className="group border border-[#D9D8D0] rounded-3xl overflow-hidden bg-white hover:border-[#43563A] hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
              >
                {/* Tour Photo */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#DDE3D6]">
                  <img
                    src={tour.img}
                    alt={tour.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2">
                    <span className="bg-black/40 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow">
                      <Clock size={11} /> {tour.days}
                    </span>
                    <span className="bg-[#43563A] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow">
                      {tour.type}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-[#22251F] text-xs font-bold px-3 py-1 rounded-full shadow flex items-center gap-1">
                    <MapPin size={12} className="text-[#43563A]" /> {tour.location}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-extrabold text-[#22251F] text-xl tracking-tight leading-snug mb-2 group-hover:text-[#43563A] transition-colors">
                      {tour.name}
                    </h3>
                    <p
                      className="text-xs text-[#787D75] leading-relaxed line-clamp-2"
                      style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                    >
                      {tour.description}
                    </p>
                  </div>

                  {/* Highlights checklist */}
                  <div className="space-y-1.5 pt-2 border-t border-[#D9D8D0]">
                    {tour.highlights.slice(0, 3).map((hl, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#464A43]">
                        <CheckCircle size={13} className="text-[#43563A] flex-shrink-0" />
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price & CTA */}
                  <div className="pt-4 border-t border-[#D9D8D0] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#787D75] uppercase font-bold tracking-wider block">Giá trọn gói</span>
                      <span className="text-base font-extrabold text-[#43563A]">{tour.price}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSelectTour(tour)}
                        className="px-4 py-2 border border-[#D9D8D0] hover:border-[#43563A] text-[#22251F] hover:text-[#43563A] rounded-full text-xs font-semibold transition-all cursor-pointer"
                      >
                        Chi tiết
                      </button>
                      <button
                        onClick={() => onOpenQuote(tour)}
                        className="px-4 py-2 bg-[#43563A] hover:bg-[#34452F] text-white rounded-full text-xs font-bold transition-all cursor-pointer shadow flex items-center gap-1"
                      >
                        <span>Đặt tour</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>
        ) : (
          /* Empty Filter Result */
          <div className="bg-white border border-[#D9D8D0] rounded-3xl p-12 text-center space-y-4 max-w-md mx-auto">
            <div className="w-12 h-12 rounded-full bg-[#DDE3D6] text-[#43563A] flex items-center justify-center mx-auto">
              <Filter size={24} />
            </div>
            <h3 className="text-lg font-bold text-[#22251F]">Không tìm thấy tour phù hợp</h3>
            <p className="text-xs text-[#787D75]">
              Rất tiếc, chưa có tour nào phù hợp với bộ lọc hiện tại của bạn. Vui lòng thử tìm từ khóa khác hoặc đặt tour theo yêu cầu riêng!
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedLocation("all");
                setSelectedDuration("all");
              }}
              className="px-6 py-2.5 bg-[#43563A] text-white text-xs font-bold rounded-full hover:bg-[#34452F] cursor-pointer"
            >
              Xóa tất cả bộ lọc
            </button>
          </div>
        )}

      </section>

    </div>
  );
};
