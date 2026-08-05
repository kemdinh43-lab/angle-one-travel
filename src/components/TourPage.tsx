import React, { useState, useMemo } from "react";
import {
  Search,
  Star,
  Clock,
  MapPin,
  ArrowRight,
  Heart,
  Calendar,
  Users,
  ChevronRight,
  Filter,
  CheckCircle2,
  SlidersHorizontal,
} from "lucide-react";
import { TOURS, IMAGES } from "../data/travelData";
import { Tour } from "../types/travel";

interface RichTour extends Tour {
  departure: string;
  vehicle: string;
  nextDate: string;
  oldPrice: string;
  priceVal: number;
  priceDisplay: string;
  rating: number;
  reviewsCount: number;
  badge: string;
  discountBadge?: string | null;
  visaNote?: string | null;
  flightNote?: string | null;
  region: string;
  seatsLeft: number;
}

interface TourPageProps {
  onSelectTour: (tour: Tour) => void;
  onOpenQuote: (tour?: Tour) => void;
  onOpenCustom: () => void;
  onBackToHome: () => void;
}

export const TourPage: React.FC<TourPageProps> = ({
  onSelectTour,
  onOpenQuote,
  onOpenCustom,
  onBackToHome,
}) => {
  // Tab State: All vs Domestic vs International
  const [activeTab, setActiveTab] = useState<"all" | "domestic" | "international">("all");

  // Hero Floating Search Bar State
  const [searchDestination, setSearchDestination] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [searchDuration, setSearchDuration] = useState("all");
  const [searchGuests, setSearchGuests] = useState("2");

  // Listing Sidebar Filter State
  const [filterCategory, setFilterCategory] = useState<"all" | "domestic" | "international">("all");
  const [filterDuration, setFilterDuration] = useState("all");
  const [filterPrice, setFilterPrice] = useState("all");
  const [sortOption, setSortOption] = useState<"popular" | "rating" | "price-low" | "price-high">("popular");

  // Favorites state
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (tourId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(tourId) ? prev.filter((id) => id !== tourId) : [...prev, tourId]
    );
  };

  // Rich Tour Dataset
  const richTours: RichTour[] = useMemo(() => {
    return [
      {
        ...TOURS[0],
        departure: "Đà Nẵng",
        vehicle: "Ô tô",
        nextDate: "15/08/2026",
        oldPrice: "5.290.000đ",
        priceVal: 4590000,
        priceDisplay: "4.590.000đ",
        rating: 4.9,
        reviewsCount: 126,
        badge: "Tour nổi bật",
        discountBadge: "Giảm 13%",
        region: "Miền Trung",
        seatsLeft: 4,
      },
      {
        ...TOURS[1],
        departure: "Đà Nẵng",
        vehicle: "Ô tô",
        nextDate: "18/08/2026",
        oldPrice: "2.450.000đ",
        priceVal: 2150000,
        priceDisplay: "2.150.000đ",
        rating: 4.8,
        reviewsCount: 98,
        badge: "Tour di sản",
        discountBadge: null,
        region: "Miền Trung",
        seatsLeft: 6,
      },
      {
        ...TOURS[2],
        departure: "Đà Nẵng",
        vehicle: "Ô tô",
        nextDate: "20/08/2026",
        oldPrice: "3.790.000đ",
        priceVal: 3290000,
        priceDisplay: "3.290.000đ",
        rating: 4.8,
        reviewsCount: 82,
        badge: "Tour thiên nhiên",
        discountBadge: "Hot deal",
        region: "Miền Trung",
        seatsLeft: 2,
      },
      {
        ...TOURS[3],
        departure: "Đà Nẵng",
        vehicle: "Ô tô",
        nextDate: "22/08/2026",
        oldPrice: "3.100.000đ",
        priceVal: 2650000,
        priceDisplay: "2.650.000đ",
        rating: 4.8,
        reviewsCount: 74,
        badge: "Tour biển đảo",
        discountBadge: null,
        region: "Miền Nam",
        seatsLeft: 8,
      },
      {
        ...TOURS[4],
        departure: "Đà Nẵng",
        vehicle: "Máy bay",
        nextDate: "25/08/2026",
        oldPrice: "5.590.000đ",
        priceVal: 4890000,
        priceDisplay: "4.890.000đ",
        rating: 4.9,
        reviewsCount: 112,
        badge: "Tour biển đảo",
        discountBadge: null,
        region: "Biển đảo",
        seatsLeft: 5,
      },
      {
        ...TOURS[6],
        departure: "TP. Hồ Chí Minh",
        vehicle: "Máy bay",
        nextDate: "16/08/2026",
        oldPrice: "10.490.000đ",
        priceVal: 8990000,
        priceDisplay: "8.990.000đ",
        rating: 4.9,
        reviewsCount: 94,
        badge: "Tour nước ngoài",
        discountBadge: "Miễn visa",
        visaNote: "Không cần visa cho khách Việt Nam",
        flightNote: "Hàng không 4 sao",
        region: "Đông Nam Á",
        seatsLeft: 4,
      },
      {
        ...TOURS[7],
        departure: "Đà Nẵng",
        vehicle: "Máy bay",
        nextDate: "24/08/2026",
        oldPrice: "21.900.000đ",
        priceVal: 18990000,
        priceDisplay: "18.990.000đ",
        rating: 4.9,
        reviewsCount: 88,
        badge: "Tour nước ngoài",
        discountBadge: null,
        visaNote: "Hỗ trợ thủ tục visa trọn gói",
        flightNote: "Korean Air / Vietnam Airlines",
        region: "Đông Bắc Á",
        seatsLeft: 2,
      },
      {
        ...TOURS[8],
        departure: "Hà Nội",
        vehicle: "Máy bay + Shinkansen",
        nextDate: "02/09/2026",
        oldPrice: "36.900.000đ",
        priceVal: 32900000,
        priceDisplay: "32.900.000đ",
        rating: 4.8,
        reviewsCount: 43,
        badge: "Tour cao cấp",
        discountBadge: null,
        visaNote: "Tỉ lệ đậu visa 99%",
        flightNote: "Bay thẳng 5 sao",
        region: "Đông Bắc Á",
        seatsLeft: 6,
      },
      {
        ...TOURS[9],
        departure: "TP. Hồ Chí Minh",
        vehicle: "Máy bay",
        nextDate: "19/08/2026",
        oldPrice: "14.200.000đ",
        priceVal: 12490000,
        priceDisplay: "12.490.000đ",
        rating: 4.8,
        reviewsCount: 67,
        badge: "Tour nước ngoài",
        discountBadge: null,
        visaNote: "Miễn visa nhập cảnh",
        flightNote: "Singapore Airlines",
        region: "Đông Nam Á",
        seatsLeft: 4,
      },
      {
        ...TOURS[10],
        departure: "Hà Nội",
        vehicle: "Máy bay 5 sao",
        nextDate: "10/09/2026",
        oldPrice: "65.000.000đ",
        priceVal: 59900000,
        priceDisplay: "59.900.000đ",
        rating: 4.9,
        reviewsCount: 38,
        badge: "Tour Châu Âu",
        discountBadge: null,
        visaNote: "Hỗ trợ visa Schengen trọn gói",
        flightNote: "Hàng không 5 sao",
        region: "Châu Âu",
        seatsLeft: 2,
      },
    ];
  }, []);

  // Popular International Destination Cards
  const popularIntlPackages = [
    { name: "Thái Lan & Đông Nam Á", count: "100+ Gói tour", img: IMAGES.thailand },
    { name: "Châu Âu & Cổ Kính", count: "150+ Gói tour", img: IMAGES.europe },
    { name: "Hàn Quốc & Nhật Bản", count: "90+ Gói tour", img: IMAGES.korea },
    { name: "Đảo Ngọc & Biển Nhiệt Đới", count: "120+ Gói tour", img: IMAGES.singapore },
  ];

  // Popular Domestic Destination Cards
  const popularDomesticPackages = [
    { name: "Đà Nẵng - Biển Mỹ Khê", count: "80+ Gói tour", img: IMAGES.danang },
    { name: "Phố Cổ Hội An", count: "65+ Gói tour", img: IMAGES.hoianB },
    { name: "Cố Đô Huế Di Sản", count: "50+ Gói tour", img: IMAGES.hue },
    { name: "Hang Động Quảng Bình", count: "40+ Gói tour", img: IMAGES.coastal },
  ];

  // Filtered Listing Logic
  const listingTours = useMemo(() => {
    return richTours.filter((tour) => {
      if (filterCategory === "domestic" && tour.category !== "domestic") return false;
      if (filterCategory === "international" && tour.category !== "international") return false;
      if (activeTab === "domestic" && tour.category !== "domestic") return false;
      if (activeTab === "international" && tour.category !== "international") return false;

      if (filterDuration === "short" && (tour.days.includes("4") || tour.days.includes("5") || tour.days.includes("6"))) return false;
      if (filterDuration === "medium" && !tour.days.includes("3") && !tour.days.includes("4")) return false;
      if (filterDuration === "long" && !tour.days.includes("5") && !tour.days.includes("6") && !tour.days.includes("9")) return false;

      if (filterPrice === "under-3m" && tour.priceVal > 3000000) return false;
      if (filterPrice === "3m-10m" && (tour.priceVal < 3000000 || tour.priceVal > 10000000)) return false;
      if (filterPrice === "over-10m" && tour.priceVal < 10000000) return false;

      if (
        searchDestination &&
        !tour.name.toLowerCase().includes(searchDestination.toLowerCase()) &&
        !tour.location.toLowerCase().includes(searchDestination.toLowerCase())
      ) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortOption === "price-low") return a.priceVal - b.priceVal;
      if (sortOption === "price-high") return b.priceVal - a.priceVal;
      if (sortOption === "rating") return b.rating - a.rating;
      return b.reviewsCount - a.reviewsCount;
    });
  }, [richTours, filterCategory, filterDuration, filterPrice, searchDestination, sortOption, activeTab]);

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const faqs = [
    {
      q: "Giá tour Angel One Travel đã bao gồm những gì?",
      a: "Giá tour niêm yết đã bao gồm trọn gói: xe du lịch đời mới máy lạnh, khách sạn tiêu chuẩn 3-5 sao, các bữa ăn theo lịch trình, vé tham quan cổng vào tất cả các điểm, hướng dẫn viên chuyên nghiệp và bảo hiểm du lịch mức 50.000.000đ/vụ.",
    },
    {
      q: "Tôi có thể yêu cầu điều chỉnh lịch trình tour không?",
      a: "Hoàn toàn được! Đối với các đoàn riêng hoặc khi bạn chọn dịch vụ Tour Thiết Kế Riêng, Angel One Travel sẵn sàng tùy chỉnh 100% thời gian, điểm tham quan và dịch vụ theo yêu cầu.",
    },
    {
      q: "Đối với các tour nước ngoài, Angel One hỗ trợ visa như thế nào?",
      a: "Đội ngũ chuyên viên visa của Angel One sẽ hỗ trợ bạn chuẩn bị hồ sơ từ A-Z, dịch thuật, nộp hồ sơ và luyện phỏng vấn (nếu cần) với tỉ lệ đậu đạt tới 99%.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#22251F]" style={{ fontFamily: "'Manrope', sans-serif" }}>
      
      {/* ── SECTION 1: FULL-BLEED SUBMERGED HERO HEADER (Vietnamese Text, No Icons) ── */}
      <section className="relative w-full overflow-hidden bg-[#1a2318] text-white pt-28 pb-16 sm:pt-36 sm:pb-24">
        {/* Full-width Panoramic Background Image */}
        <img
          src={IMAGES.beachP}
          alt="Khám phá các tour du lịch hấp dẫn nhất cùng Angel One Travel"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 md:px-10">
          
          <div className="max-w-3xl space-y-3 mb-8">
            <span className="text-[10px] sm:text-xs text-[#DDE3D6] uppercase tracking-widest font-extrabold block">
              LÊN KẾ HOẠCH DU LỊCH DỄ DÀNG & TRỌN VẸN NGAY HÔM NAY!
            </span>
            <h1 className="text-[clamp(32px,5.2vw,60px)] font-extrabold text-white tracking-[-0.03em] leading-tight">
              Khám Phá Thế Giới & Khởi Tạo Hành Trình Mới.
            </h1>
            <p className="text-xs sm:text-sm text-[#DDE3D6]/90 max-w-xl leading-relaxed" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              Khám phá thế giới và trải nghiệm những hành trình du lịch tuyệt vời cùng Angel One Travel. Dịch vụ trọn gói chất lượng cao, minh bạch chi phí.
            </p>
          </div>

          {/* Overlaid Floating White Capsule Search Bar */}
          <div className="max-w-5xl">
            <p className="text-[11px] font-extrabold text-[#DDE3D6] mb-2 ml-2 tracking-wider uppercase">
              Bạn muốn đi du lịch ở đâu?
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const el = document.getElementById("tour-catalog");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white text-[#22251F] rounded-2xl sm:rounded-full p-2.5 sm:p-3 shadow-2xl border border-[#D9D8D0] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr_auto] gap-2.5 items-center"
            >
              {/* Field 1: Nhập điểm đến */}
              <div className="flex items-center gap-2.5 px-3 py-1.5 border-b sm:border-b-0 sm:border-r border-[#D9D8D0]">
                <MapPin size={16} className="text-[#43563A] flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Nhập điểm đến..."
                  value={searchDestination}
                  onChange={(e) => setSearchDestination(e.target.value)}
                  className="w-full text-xs font-bold bg-transparent outline-none placeholder:text-[#787D75]"
                />
              </div>

              {/* Field 2: Ngày khởi hành */}
              <div className="flex items-center gap-2.5 px-3 py-1.5 border-b sm:border-b-0 sm:border-r border-[#D9D8D0]">
                <Calendar size={16} className="text-[#43563A] flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Ngày khởi hành"
                  value={searchDate}
                  onChange={(e) => setSearchDate(e.target.value)}
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  className="w-full text-xs font-bold bg-transparent outline-none text-[#22251F] cursor-pointer"
                />
              </div>

              {/* Field 3: Thời lượng */}
              <div className="flex items-center gap-2.5 px-3 py-1.5 border-b sm:border-b-0 sm:border-r border-[#D9D8D0]">
                <Clock size={16} className="text-[#43563A] flex-shrink-0" />
                <select
                  value={searchDuration}
                  onChange={(e) => setSearchDuration(e.target.value)}
                  className="w-full text-xs font-bold bg-transparent outline-none cursor-pointer text-[#22251F]"
                >
                  <option value="all">Thời lượng</option>
                  <option value="2n1d">2 Ngày 1 Đêm</option>
                  <option value="3n2d">3 Ngày 2 Đêm</option>
                  <option value="4n3d">4 Ngày 3 Đêm</option>
                  <option value="5n4d">5 Ngày 4 Đêm</option>
                </select>
              </div>

              {/* Field 4: Số lượng khách */}
              <div className="flex items-center gap-2.5 px-3 py-1.5">
                <Users size={16} className="text-[#43563A] flex-shrink-0" />
                <select
                  value={searchGuests}
                  onChange={(e) => setSearchGuests(e.target.value)}
                  className="w-full text-xs font-bold bg-transparent outline-none cursor-pointer text-[#22251F]"
                >
                  <option value="1">1 Khách</option>
                  <option value="2">2 Khách</option>
                  <option value="4">4 Khách</option>
                  <option value="10">10+ Khách đoàn</option>
                </select>
              </div>

              {/* Olive Green CTA Button */}
              <div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#43563A] hover:bg-[#34452F] text-white rounded-full px-7 py-3.5 text-xs font-extrabold transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Tìm tour ngay</span>
                </button>
              </div>
            </form>

          </div>

        </div>
      </section>

      {/* ── SECTION 2: TOUR DU LỊCH QUỐC TẾ NỔI BẬT ──────────────────────────── */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-10 py-12">
        
        {/* Header Row */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#22251F] tracking-tight">
            Tour du lịch Quốc tế Nổi bật
          </h2>
          <button
            onClick={() => setActiveTab("international")}
            className="inline-flex items-center gap-2 bg-[#22251F] hover:bg-[#43563A] text-white rounded-full px-5 py-2.5 text-xs font-bold transition-all shadow cursor-pointer"
          >
            <span>Xem tất cả (200+)</span>
            <ChevronRight size={14} />
          </button>
        </div>

        {/* 4 Rounded Horizontal Package Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularIntlPackages.map((pkg, idx) => (
            <div
              key={idx}
              onClick={() => {
                setActiveTab("international");
                const el = document.getElementById("tour-catalog");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#DDE3D6] cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={pkg.img}
                alt={pkg.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              
              <div className="absolute top-3 left-3">
                <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-extrabold px-3 py-1 rounded-full border border-white/30">
                  {pkg.count}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-extrabold text-base tracking-tight leading-snug">
                  {pkg.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ── SECTION 3: TOUR DU LỊCH TRONG NƯỚC NỔI BẬT ─────────────────────────── */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-10 pb-14">
        
        {/* Header Row */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#22251F] tracking-tight">
            Tour du lịch Trong nước Nổi bật
          </h2>
          <button
            onClick={() => setActiveTab("domestic")}
            className="inline-flex items-center gap-2 bg-[#22251F] hover:bg-[#43563A] text-white rounded-full px-5 py-2.5 text-xs font-bold transition-all shadow cursor-pointer"
          >
            <span>Xem tất cả (150+)</span>
            <ChevronRight size={14} />
          </button>
        </div>

        {/* 4 Rounded Horizontal Package Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularDomesticPackages.map((pkg, idx) => (
            <div
              key={idx}
              onClick={() => {
                setActiveTab("domestic");
                const el = document.getElementById("tour-catalog");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#DDE3D6] cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={pkg.img}
                alt={pkg.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              
              <div className="absolute top-3 left-3">
                <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-extrabold px-3 py-1 rounded-full border border-white/30">
                  {pkg.count}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-extrabold text-base tracking-tight leading-snug">
                  {pkg.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ── SECTION 4: DANH SÁCH TOUR DU LỊCH & BỘ LỌC SIDEBAR (No Emojis/Icons on Text) ────── */}
      <section id="tour-catalog" className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-10 py-12 border-t border-[#D9D8D0]">
        
        {/* Catalog Header & Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-[10px] text-[#787D75] uppercase tracking-widest font-extrabold block mb-1">
              DANH SÁCH TOUR DU LỊCH
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#22251F] tracking-tight">
              Tất cả chương trình tour ({listingTours.length})
            </h2>
          </div>

          {/* Clean Text Tabs without Emojis */}
          <div className="flex items-center gap-2 bg-[#FAF9F5] border border-[#D9D8D0] p-1.5 rounded-full shadow-2xs">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === "all" ? "bg-[#43563A] text-white shadow-xs" : "text-[#464A43] hover:text-[#43563A]"
              }`}
            >
              Tất cả tour
            </button>
            <button
              onClick={() => setActiveTab("domestic")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === "domestic" ? "bg-[#43563A] text-white shadow-xs" : "text-[#464A43] hover:text-[#43563A]"
              }`}
            >
              Tour trong nước
            </button>
            <button
              onClick={() => setActiveTab("international")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === "international" ? "bg-[#43563A] text-white shadow-xs" : "text-[#464A43] hover:text-[#43563A]"
              }`}
            >
              Tour nước ngoài
            </button>
          </div>
        </div>

        {/* Sidebar & Grid Container */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-start">
          
          {/* LEFT SIDEBAR FILTERS */}
          <div className="hidden lg:block bg-[#FAF9F5] border border-[#D9D8D0] rounded-3xl p-6 shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-[#D9D8D0] pb-4">
              <h3 className="font-extrabold text-base text-[#22251F] flex items-center gap-2">
                <SlidersHorizontal size={16} className="text-[#43563A]" />
                <span>Bộ lọc tìm kiếm</span>
              </h3>
              <button
                onClick={() => {
                  setFilterCategory("all");
                  setFilterDuration("all");
                  setFilterPrice("all");
                  setSearchDestination("");
                }}
                className="text-[11px] font-bold text-[#43563A] hover:underline cursor-pointer"
              >
                Đặt lại
              </button>
            </div>

            {/* Filter 1: Phân loại tour (No Emojis) */}
            <div className="space-y-2">
              <label className="text-xs font-extrabold text-[#22251F] uppercase tracking-wider block">
                Phân loại tour
              </label>
              <div className="space-y-1.5 text-xs font-medium text-[#464A43]">
                {[
                  { id: "all", label: "Tất cả tour" },
                  { id: "domestic", label: "Tour trong nước" },
                  { id: "international", label: "Tour nước ngoài" },
                ].map((item) => (
                  <label key={item.id} className="flex items-center gap-2 cursor-pointer hover:text-[#43563A]">
                    <input
                      type="radio"
                      name="filterCategory"
                      checked={filterCategory === item.id}
                      onChange={() => setFilterCategory(item.id as any)}
                      className="accent-[#43563A]"
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter 2: Duration */}
            <div className="space-y-2 pt-4 border-t border-[#D9D8D0]">
              <label className="text-xs font-extrabold text-[#22251F] uppercase tracking-wider block">
                Thời lượng tour
              </label>
              <div className="space-y-1.5 text-xs font-medium text-[#464A43]">
                {[
                  { id: "all", label: "Tất cả thời lượng" },
                  { id: "short", label: "2 - 3 Ngày" },
                  { id: "medium", label: "3 - 4 Ngày" },
                  { id: "long", label: "5 Ngày trở lên" },
                ].map((item) => (
                  <label key={item.id} className="flex items-center gap-2 cursor-pointer hover:text-[#43563A]">
                    <input
                      type="radio"
                      name="filterDuration"
                      checked={filterDuration === item.id}
                      onChange={() => setFilterDuration(item.id)}
                      className="accent-[#43563A]"
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter 3: Price Range */}
            <div className="space-y-2 pt-4 border-t border-[#D9D8D0]">
              <label className="text-xs font-extrabold text-[#22251F] uppercase tracking-wider block">
                Khoảng giá
              </label>
              <div className="space-y-1.5 text-xs font-medium text-[#464A43]">
                {[
                  { id: "all", label: "Tất cả mức giá" },
                  { id: "under-3m", label: "Dưới 3.000.000đ" },
                  { id: "3m-10m", label: "Từ 3.000.000đ - 10.000.000đ" },
                  { id: "over-10m", label: "Trên 10.000.000đ" },
                ].map((item) => (
                  <label key={item.id} className="flex items-center gap-2 cursor-pointer hover:text-[#43563A]">
                    <input
                      type="radio"
                      name="filterPrice"
                      checked={filterPrice === item.id}
                      onChange={() => setFilterPrice(item.id)}
                      className="accent-[#43563A]"
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Sort Selection */}
            <div className="space-y-2 pt-4 border-t border-[#D9D8D0]">
              <label className="text-xs font-extrabold text-[#22251F] uppercase tracking-wider block">
                Sắp xếp theo
              </label>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as any)}
                className="w-full bg-white border border-[#D9D8D0] rounded-xl px-3 py-2 text-xs font-bold text-[#22251F] outline-none cursor-pointer"
              >
                <option value="popular">Phổ biến nhất</option>
                <option value="rating">Đánh giá cao nhất</option>
                <option value="price-low">Giá từ thấp đến cao</option>
                <option value="price-high">Giá từ cao đến thấp</option>
              </select>
            </div>

          </div>

          {/* RIGHT TOUR CARDS GRID */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {listingTours.map((tour) => (
                <div
                  key={tour.id}
                  onClick={() => onSelectTour(tour)}
                  className="group bg-[#FAF9F5] border border-[#D9D8D0] rounded-3xl overflow-hidden shadow-2xs hover:shadow-xl hover:border-[#43563A] transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Card Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#DDE3D6]">
                      <img
                        src={tour.img}
                        alt={tour.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      <div className="absolute top-3 left-3 flex gap-1.5">
                        <span className="bg-[#43563A] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-2xs">
                          {tour.badge}
                        </span>
                        {tour.discountBadge && (
                          <span className="bg-[#34452F] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-2xs">
                            {tour.discountBadge}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={(e) => toggleFavorite(tour.id, e)}
                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md text-[#22251F] hover:text-[#43563A] flex items-center justify-center transition-colors shadow-2xs"
                      >
                        <Heart size={15} fill={favorites.includes(tour.id) ? "#43563A" : "none"} />
                      </button>
                    </div>

                    {/* Card Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-[11px] text-[#787D75] font-medium mb-1.5">
                        <span className="flex items-center gap-1"><MapPin size={11} className="text-[#43563A]" /> {tour.departure}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><Clock size={11} className="text-[#43563A]" /> {tour.days}</span>
                      </div>

                      <h3 className="font-extrabold text-[#22251F] text-base tracking-tight leading-snug group-hover:text-[#43563A] transition-colors mb-2 line-clamp-2">
                        {tour.name}
                      </h3>

                      <p
                        className="text-xs text-[#787D75] leading-relaxed line-clamp-2 mb-4"
                        style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                      >
                        {tour.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom Row */}
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-[#D9D8D0] flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-1 text-[11px] text-[#F59E0B] font-bold">
                          <Star size={12} fill="currentColor" /> {tour.rating} <span className="text-[#787D75] font-normal">({tour.reviewsCount})</span>
                        </div>
                        <span className="text-base font-extrabold text-[#43563A] block">{tour.priceDisplay}</span>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectTour(tour);
                        }}
                        className="px-4 py-2 bg-[#43563A] hover:bg-[#34452F] text-white text-xs font-bold rounded-full transition-all cursor-pointer shadow-xs flex items-center gap-1"
                      >
                        <span>Chi tiết</span>
                        <ArrowRight size={12} />
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {listingTours.length === 0 && (
              <div className="text-center py-16 bg-[#FAF9F5] rounded-3xl border border-[#D9D8D0]">
                <p className="text-sm text-[#787D75]">Không tìm thấy tour phù hợp với tiêu chí lọc của bạn.</p>
                <button
                  onClick={() => {
                    setFilterCategory("all");
                    setFilterDuration("all");
                    setFilterPrice("all");
                    setSearchDestination("");
                  }}
                  className="mt-4 px-5 py-2 bg-[#43563A] text-white rounded-full text-xs font-bold"
                >
                  Xem tất cả tour
                </button>
              </div>
            )}
          </div>

        </div>

      </section>

      {/* ── SECTION 5: CUSTOM TRIP BUILDER CTA BANNER ───────────────────────────────── */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-10 py-10">
        <div className="relative rounded-3xl overflow-hidden bg-[#34452F] text-white p-8 sm:p-12 shadow-2xl">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-center">
            
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#DDE3D6] font-extrabold block">
                THIẾT KẾ HÀNH TRÌNH RIÊNG
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Bạn chọn nhu cầu, chúng tôi thiết kế tour riêng
              </h2>
              <p
                className="text-[#DDE3D6]/90 text-xs sm:text-sm leading-relaxed max-w-lg"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
              >
                Chủ động chọn điểm đến, số lượng thành viên, tiêu chuẩn khách sạn và phương tiện di chuyển. Đội ngũ Angel One Travel sẽ gửi kịch bản riêng trong 15 phút!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 lg:justify-end">
              <button
                onClick={onOpenCustom}
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 bg-white text-[#43563A] hover:bg-[#FAF9F5] text-xs font-bold transition-all shadow-md cursor-pointer"
              >
                <span>Bắt đầu thiết kế ngay</span>
                <ArrowRight size={14} />
              </button>
              <button
                onClick={() => onOpenQuote()}
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 border border-white/30 text-white hover:bg-white/10 text-xs font-semibold transition-all cursor-pointer"
              >
                <span>Tư vấn qua Hotline</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 6: FAQ ACCORDION ────────────────────────────────────────────── */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-10 py-12 mb-10">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs text-[#787D75] uppercase tracking-widest font-extrabold block mb-1">
            GIẢI ĐÁP THẮC MẮC
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#22251F] tracking-tight">
            Câu hỏi thường gặp khi đặt tour
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={i}
                className="bg-[#FAF9F5] border border-[#D9D8D0] rounded-2xl overflow-hidden transition-all duration-300 shadow-2xs"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full text-left p-5 flex items-center justify-between font-bold text-sm text-[#22251F] hover:text-[#43563A] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className={`w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#43563A] transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? "rotate-180" : ""}`}>
                    ▾
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs text-[#787D75] leading-relaxed border-t border-[#D9D8D0]/40 mt-1" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
