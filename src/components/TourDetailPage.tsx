import React, { useState } from "react";
import {
  MapPin,
  Clock,
  Plane,
  Users,
  Star,
  Share2,
  Bookmark,
  CheckCircle2,
  XCircle,
  ChevronDown,
  ChevronUp,
  Phone,
  MessageCircle,
  ShieldCheck,
  Building2,
  Sparkles,
  ArrowRight,
  Download,
  Eye,
  X,
  Compass,
  Play,
  Utensils,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import { CtaSection } from "./CtaSection";

interface TourDetailPageProps {
  onBackToHome: () => void;
  onOpenQuote: (tourName?: string) => void;
  onNavigateToTour?: (tourId: string) => void;
}

const TOUR_GALLERY = [
  { id: 1, title: "Grand World Phú Quốc · Thành Phố Không Ngủ", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80" },
  { id: 2, title: "Sunset Town & Cầu Hôn Vòng Cung Hoàng Hôn", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" },
  { id: 3, title: "VinWonders & Công Viên Nước Đỉnh Cao", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80" },
  { id: 4, title: "Cano Khám Phá Đảo Phía Nam Phú Quốc", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80" },
  { id: 5, title: "Khách Sạn 4 Sao Tiêu Chuẩn Sát Biển", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" },
  { id: 6, title: "Đặc Sản Hải Sản Phú Quốc Tươi Sống", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80" },
];

const SERVICE_PHOTOS = {
  hotel: [
    { title: "Phòng Deluxe Sát Biển 4 Sao", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" },
    { title: "Hồ Bơi Vô Cực Hướng Biển", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80" },
  ],
  dining: [
    { title: "Set Menu Hải Sản Phú Quốc Tươi Sống", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80" },
    { title: "Lẩu Hải Sản Đảo & Gỏi Cá Trích", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80" },
  ],
  island: [
    { title: "Cano Cao Tốc Lướt Sóng 3 Đảo", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80" },
    { title: "Lặn Ngắm San Hô Hòn Gầm Ghì", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80" },
  ],
};

const REVIEWS = [
  {
    id: 1,
    name: "Anh Minh Tuấn",
    tour: "Tour Đà Nẵng – Hội An – Huế 4N3Đ",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    text: "“Chuyến đi 4 ngày 3 đêm cùng gia đình 6 người cực kỳ trọn vẹn. Xe đời mới êm ái, bác tài vui tính và bạn tư vấn Angel One hỗ trợ nhiệt tình 24/7 từ lúc cất cánh đến khi về!”",
    stars: 5,
  },
  {
    id: 2,
    name: "Chị Ngọc Bích",
    tour: "Tour Quảng Bình Hang Động 3N2Đ",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    text: "“Đoàn công ty 40 người đi Quảng Bình trải nghiệm Động Thiên Đường tuyệt đẹp. Khâu tổ chức ăn uống, khách sạn và trò chơi team building của Angel One rất chuyên nghiệp!”",
    stars: 5,
  },
  {
    id: 3,
    name: "Anh Hoàng & Chị Mai",
    tour: "Combo Đà Nẵng – Bà Nà Hills 3N2Đ",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    text: "“Lần đầu tiên trải nghiệm tour thiết kế riêng của Angel One. Khách sạn biển Mỹ Khê view đẹp xuất sắc, lịch trình không bị vội, các bé nhà mình thích mê!”",
    stars: 5,
  },
];

const RELATED_TOURS = [
  {
    id: "pq-3d2n",
    title: "Tour Phú Quốc 3N2Đ Nghỉ Dưỡng 4 Sao",
    price: "4.990.000",
    location: "Đà Nẵng ➔ Phú Quốc",
    duration: "3 ngày 2 đêm",
    tag1: "Nghỉ Dưỡng",
    tag2: "Bay Thẳng",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    desc: "Trải nghiệm Phú Quốc gọn nhẹ 3N2Đ trọn gói nghỉ dưỡng resort sát biển Mỹ Khê.",
  },
  {
    id: "nhatrang-4d3n",
    title: "Tour Đà Nẵng – Nha Trang 4N3Đ VinWonders",
    price: "5.890.000",
    location: "Đà Nẵng ➔ Nha Trang",
    duration: "4 ngày 3 đêm",
    tag1: "Biển Đảo",
    tag2: "Hot Sale",
    image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=80",
    desc: "Hành trình biển xanh Nha Trang, khám phá VinWonders và lặn ngắm san hô Đảo Yến.",
  },
  {
    id: "quynhon-3d2n",
    title: "Tour Đà Nẵng – Quy Nhơn 3N2Đ Kỳ Co Eo Gió",
    price: "3.990.000",
    location: "Đà Nẵng ➔ Quy Nhơn",
    duration: "3 ngày 2 đêm",
    tag1: "Biển Đảo",
    tag2: "Bán Chạy",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    desc: "Khám phá tuyệt tác biển đảo Kỳ Co – Eo Gió, thưởng thức hải sản lẩu sứa trứ danh.",
  },
];

export const TourDetailPage: React.FC<TourDetailPageProps> = ({
  onBackToHome,
  onOpenQuote,
}) => {
  const [adultCount, setAdultCount] = useState<number>(2);
  const [childCount, setChildCount] = useState<number>(0);
  const [hotelTier, setHotelTier] = useState<"3star" | "4star">("4star");
  const [isGalleryOpen, setIsGalleryOpen] = useState<boolean>(false);
  const [activeMediaIdx, setActiveMediaIdx] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<"included" | "excluded">("included");
  const [openDay, setOpenDay] = useState<number | null>(1);
  const [isSaved, setIsSaved] = useState<boolean>(false);

  // Price Calculation Logic
  const baseAdultPrice = hotelTier === "4star" ? 6990000 : 5990000;
  const baseChildPrice = hotelTier === "4star" ? 5590000 : 4790000;
  const totalPrice = adultCount * baseAdultPrice + childCount * baseChildPrice;

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#22251F] pb-20 select-none" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      
      {/* ── 1. ULTRA-MINIMALIST HERO SECTION BANNER (Fix Lỗi Wrapping & Tối Giản) ──── */}
      <section className="relative w-full overflow-hidden bg-[#1a2316]" style={{ minHeight: "52svh", fontFamily: "'Manrope', sans-serif" }}>
        {/* Background Image with Dark Vignette */}
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80"
          alt="Tour Đà Nẵng - Phú Quốc 4N3Đ"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />

        {/* Dark Vignette Overlay for readable contrast */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/50" />

        {/* Hero Overlay Content */}
        <div className="relative z-10 flex flex-col justify-end max-w-[1240px] mx-auto px-4 sm:px-6 pt-28 pb-8 min-h-[52svh] space-y-4">
          
          {/* Category & Star Rating (Ultra Clean 1 Line) */}
          <div className="flex flex-wrap items-center gap-2.5 text-xs font-medium text-white/90">
            <span className="bg-[#43563A] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md shadow-xs">
              Tour Trong Nước
            </span>
            <span className="text-white/50">•</span>
            <div className="flex items-center gap-1.5 bg-black/35 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20 text-white text-[11px] font-bold">
              <Star size={12} className="text-[#FBBF24] fill-[#FBBF24]" />
              <span>5.0</span>
              <span className="text-white/70 font-normal">(128 đánh giá)</span>
            </div>
          </div>

          {/* Main Headline (Ultra Clean Typography, Responsive Size) */}
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug drop-shadow-md max-w-4xl">
            Tour Đà Nẵng – Phú Quốc 4N3Đ: Grand World – VinWonders – Cano khám phá đảo
          </h1>

          {/* Price, Duration & Booking CTA in 1 Clean Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 pt-2 border-t border-white/15">
            <div className="flex items-center gap-3">
              <div className="text-2xl sm:text-3xl font-black text-[#FBBF24] drop-shadow-md">
                6.990.000đ <span className="text-xs font-normal text-white/80">/ khách</span>
              </div>

              <span className="bg-white/15 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20 flex items-center gap-1">
                <Clock size={13} /> 4 ngày 3 đêm
              </span>
            </div>

            <button
              onClick={() => onOpenQuote("Tour Đà Nẵng – Phú Quốc 4N3Đ")}
              className="w-full sm:w-auto bg-[#43563A] hover:bg-[#34452F] text-white font-extrabold text-xs px-7 py-3 rounded-full shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              <span>Đặt Tour Ngay</span>
              <ArrowRight size={14} />
            </button>
          </div>

        </div>
      </section>

      {/* ── MAIN CONTENT CONTAINER (Urbanet Layout & Angel One Olive Theme) ──────── */}
      <main className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-10 space-y-10">

        {/* ── TWO-COLUMN MAIN BODY (Sticky Sidebar Guaranteed with min-w-0 fix) ───── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 lg:gap-10 items-start relative">
          
          {/* LEFT COLUMN: GALLERY, TITLE, INFO TABLES, TIMELINE ACCORDION */}
          <div className="min-w-0 space-y-10">
            
            {/* ── 1. FEATURED MEDIA GALLERY (Đặt Đầu Cột Trái Phía Trên Giới Thiệu) ── */}
            <div className="space-y-4">
              {/* Minimalist Clean Section Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-sm sm:text-base font-extrabold text-[#111827]">
                  Hình ảnh nổi bật
                </h3>
                <button
                  onClick={() => setIsGalleryOpen(true)}
                  className="text-xs font-bold text-[#43563A] hover:underline cursor-pointer flex items-center gap-1"
                >
                  <span>Xem tất cả (10+)</span>
                  <ArrowRight size={13} />
                </button>
              </div>

              {/* 1. LARGE MINIMALIST FEATURED MEDIA FRAME (Chiều cao lớn thoáng đẹp) */}
              <div
                onClick={() => setIsGalleryOpen(true)}
                className="relative rounded-3xl overflow-hidden h-[280px] sm:h-[360px] bg-[#E5E7EB] cursor-pointer group border border-[#E5E7EB] shadow-xs"
              >
                <img
                  src={TOUR_GALLERY[activeMediaIdx]?.image || TOUR_GALLERY[0].image}
                  alt="Phú Quốc Highlight"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
                
                {/* Minimal Centered Play Icon Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/35 backdrop-blur-md text-white border border-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play size={20} className="ml-1 fill-current" />
                  </div>
                </div>
              </div>

              {/* 2. DẢI 4-5 ẢNH NHỎ TỐI GIẢN (ẨN HOÀN TOÀN THANH TRƯỜN SCROLLBAR) */}
              <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 pb-1 no-scrollbar [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {TOUR_GALLERY.slice(0, 5).map((item, idx) => {
                  const isActive = activeMediaIdx === idx;
                  const isLast = idx === 4;

                  return (
                    <div
                      key={item.id}
                      onClick={() => setActiveMediaIdx(idx)}
                      className={`w-[36%] sm:w-[22%] flex-shrink-0 snap-start rounded-2xl overflow-hidden aspect-[16/10] bg-[#E5E7EB] cursor-pointer transition-all duration-300 relative border ${
                        isActive ? "border-2 border-[#43563A] ring-2 ring-[#43563A]/20 scale-102" : "border-[#E5E7EB] opacity-80 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      {isLast && (
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsGalleryOpen(true);
                          }}
                          className="absolute inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center text-white font-black text-sm cursor-pointer"
                        >
                          +10
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── 2. GIỚI THIỆU & THÔNG TIN DỊCH VỤ (Gộp 3 Block Thành 1 Theo Phong Cách Minimalism) ── */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E5E7EB] shadow-2xs space-y-6">
              
              {/* Part 1: Giới thiệu hành trình */}
              <div className="space-y-3">
                <div>
                  <span className="text-xs font-black text-[#111827] uppercase tracking-wider block">
                    GIỚI THIỆU HÀNH TRÌNH
                  </span>
                  <div className="w-10 h-0.5 bg-[#43563A] rounded-full mt-1.5" />
                </div>
                <p className="text-sm sm:text-base text-[#111827] leading-relaxed font-medium pt-1" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                  Khám phá đảo ngọc Phú Quốc trong hành trình 4 ngày 3 đêm khởi hành từ Đà Nẵng. Chương trình kết hợp tham quan các biểu tượng nổi bật, trải nghiệm thành phố không ngủ Grand World, vui chơi tại VinWonders, khám phá biển đảo bằng cano và thưởng thức đặc sản địa phương.
                </p>
              </div>

              {/* Part 2: Thông tin tour & Chi tiết dịch vụ bao gồm */}
              <div className="border-t border-[#F3F4F6] pt-6 space-y-4">
                <div>
                  <span className="text-xs font-black text-[#111827] uppercase tracking-wider block">
                    THÔNG TIN TOUR & DỊCH VỤ BAO GỒM
                  </span>
                  <div className="w-10 h-0.5 bg-[#43563A] rounded-full mt-1.5" />
                </div>

                {/* Unified Minimalist Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-8 text-xs pt-1">
                  <div className="flex justify-between border-b border-[#F3F4F6] pb-2">
                    <span className="text-[#6B7280]">Khởi hành:</span>
                    <strong className="text-[#111827]">TP. Đà Nẵng</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#F3F4F6] pb-2">
                    <span className="text-[#6B7280]">Thời lượng:</span>
                    <strong className="text-[#111827]">4 Ngày 3 Đêm</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#F3F4F6] pb-2">
                    <span className="text-[#6B7280]">Phương tiện:</span>
                    <strong className="text-[#111827]">Máy bay & Cano</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#F3F4F6] pb-2">
                    <span className="text-[#6B7280]">Khách sạn:</span>
                    <strong className="text-[#111827]">3 – 4 Sao sát biển</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#F3F4F6] pb-2">
                    <span className="text-[#6B7280]">Vé máy bay:</span>
                    <strong className="text-[#43563A] font-extrabold">Khứ hồi (Đã bao gồm 20kg HL)</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#F3F4F6] pb-2">
                    <span className="text-[#6B7280]">Bữa ăn:</span>
                    <strong className="text-[#111827]">Full Bữa Sáng/Trưa/Tối</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#F3F4F6] pb-2">
                    <span className="text-[#6B7280]">Tour đảo Cano:</span>
                    <strong className="text-[#111827]">Bao gồm trọn gói</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#F3F4F6] pb-2">
                    <span className="text-[#6B7280]">Hướng dẫn viên:</span>
                    <strong className="text-[#111827]">Đồng hành 24/7</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#F3F4F6] pb-2">
                    <span className="text-[#6B7280]">Bảo hiểm:</span>
                    <strong className="text-[#111827]">Tối đa 100 Tr/vụ</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#F3F4F6] pb-2">
                    <span className="text-[#6B7280]">Phù hợp:</span>
                    <strong className="text-[#111827]">Gia đình & Khách đoàn</strong>
                  </div>
                </div>
              </div>

            </div>

            {/* ── 8. TIMELINE LỊCH TRÌNH CHI TIẾT (Dạng Nút Sổ Xuống Thu Gọn) ──────── */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E5E7EB] shadow-2xs space-y-4">
              <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-4">
                <div>
                  <span className="text-xs font-black text-[#111827] uppercase tracking-wider block">
                    LỊCH TRÌNH CHI TIẾT
                  </span>
                  <div className="w-12 h-0.5 bg-[#43563A] rounded-full mt-2" />
                </div>
                <button
                  onClick={() => alert("Đang tải file PDF Lịch trình...")}
                  className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-[#43563A] bg-[#F0FDF4] px-4 py-2 rounded-full hover:bg-[#43563A] hover:text-white transition-colors cursor-pointer border border-[#DCFCE7]"
                >
                  <Download size={14} /> Tải PDF
                </button>
              </div>

              {/* Continuous Vertical Timeline Stepper (Trục dọc xanh lá tự nhiên, bấm tiêu đề ngày để mở rộng/thu gọn) */}
              <div className="relative pl-7 space-y-8 pt-2 before:absolute before:left-2.5 before:top-3.5 before:bottom-3.5 before:w-0.5 before:bg-[#43563A]/25">
                
                {/* NGÀY 1 */}
                <div className="relative space-y-2.5">
                  {/* Bullet Node */}
                  <span className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#43563A] ring-4 ring-[#F0FDF4]" />
                  
                  {/* Clickable Day Title Header */}
                  <button
                    onClick={() => setOpenDay(openDay === 1 ? null : 1)}
                    className="w-full text-left group cursor-pointer flex items-start justify-between gap-4"
                  >
                    <div>
                      <span className="text-[11px] font-black uppercase text-[#43563A] tracking-wider block">NGÀY 1</span>
                      <h4 className="text-base sm:text-lg font-black text-[#111827] group-hover:text-[#43563A] transition-colors leading-snug">
                        Đà Nẵng – Phú Quốc – Grand World
                      </h4>
                    </div>
                    <div className="pt-1 text-[#6B7280] group-hover:text-[#43563A] transition-colors flex-shrink-0">
                      {openDay === 1 ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </button>

                  {/* Summary preview line when collapsed */}
                  {openDay !== 1 && (
                    <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed line-clamp-2">
                      Xe đón khách tại điểm hẹn, di chuyển đến sân bay Đà Nẵng đáp chuyến bay đi Phú Quốc. Nhận phòng khách sạn 4 sao sát biển và khám phá Grand World.
                    </p>
                  )}

                  {/* Detailed Itinerary Steps & Photos when expanded */}
                  {openDay === 1 && (
                    <div className="space-y-3.5 pt-1">
                      <div className="space-y-2 text-xs sm:text-sm text-[#374151] leading-relaxed">
                        <p><strong className="text-[#111827] font-extrabold mr-1">05:30</strong> Xe đón khách tại điểm hẹn, di chuyển đến sân bay Đà Nẵng đáp chuyến bay đi Phú Quốc.</p>
                        <p><strong className="text-[#111827] font-extrabold mr-1">08:00</strong> Đến sân bay Phú Quốc, xe và hướng dẫn viên đón đoàn tham quan Dinh Cậu & dùng bữa trưa.</p>
                        <p><strong className="text-[#111827] font-extrabold mr-1">14:00</strong> Nhận phòng khách sạn 4 sao sát biển nghỉ ngơi.</p>
                        <p><strong className="text-[#111827] font-extrabold mr-1">15:30</strong> Khám phá thành phố không ngủ Grand World Venice & xem show nhạc nước hoành tráng.</p>
                      </div>

                      {/* Swipable Photo Carousel */}
                      <div className="pt-1">
                        <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 pb-1 no-scrollbar [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                          <div className="w-[85%] sm:w-[48%] flex-shrink-0 snap-start rounded-2xl overflow-hidden aspect-[16/10] bg-[#F3F4F6] border border-[#E5E7EB] shadow-xs">
                            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" alt="Grand World" className="w-full h-full object-cover" />
                          </div>
                          <div className="w-[85%] sm:w-[48%] flex-shrink-0 snap-start rounded-2xl overflow-hidden aspect-[16/10] bg-[#F3F4F6] border border-[#E5E7EB] shadow-xs">
                            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80" alt="Khách sạn 4 sao" className="w-full h-full object-cover" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* NGÀY 2 */}
                <div className="relative space-y-2.5">
                  {/* Bullet Node */}
                  <span className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#43563A] ring-4 ring-[#F0FDF4]" />
                  
                  {/* Clickable Day Title Header */}
                  <button
                    onClick={() => setOpenDay(openDay === 2 ? null : 2)}
                    className="w-full text-left group cursor-pointer flex items-start justify-between gap-4"
                  >
                    <div>
                      <span className="text-[11px] font-black uppercase text-[#43563A] tracking-wider block">NGÀY 2</span>
                      <h4 className="text-base sm:text-lg font-black text-[#111827] group-hover:text-[#43563A] transition-colors leading-snug">
                        VinWonders hoặc Vinpearl Safari
                      </h4>
                    </div>
                    <div className="pt-1 text-[#6B7280] group-hover:text-[#43563A] transition-colors flex-shrink-0">
                      {openDay === 2 ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </button>

                  {/* Summary preview line when collapsed */}
                  {openDay !== 2 && (
                    <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed line-clamp-2">
                      Thưởng thức bữa sáng buffet tại khách sạn. Khởi hành đến Vinpearl Safari hoặc công viên chủ đề VinWonders Phú Quốc.
                    </p>
                  )}

                  {/* Detailed Itinerary Steps & Photos when expanded */}
                  {openDay === 2 && (
                    <div className="space-y-3.5 pt-1">
                      <div className="space-y-2 text-xs sm:text-sm text-[#374151] leading-relaxed">
                        <p><strong className="text-[#111827] font-extrabold mr-1">07:00</strong> Thưởng thức bữa sáng buffet tại khách sạn.</p>
                        <p><strong className="text-[#111827] font-extrabold mr-1">08:30</strong> Khởi hành đến Vinpearl Safari hoặc công viên chủ đề VinWonders Phú Quốc.</p>
                        <p><strong className="text-[#111827] font-extrabold mr-1">17:00</strong> Trở về khách sạn nghỉ ngơi và dùng bữa tối hải sản phong phú.</p>
                      </div>

                      {/* Swipable Photo Carousel */}
                      <div className="pt-1">
                        <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 pb-1 no-scrollbar [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                          <div className="w-[85%] sm:w-[48%] flex-shrink-0 snap-start rounded-2xl overflow-hidden aspect-[16/10] bg-[#F3F4F6] border border-[#E5E7EB] shadow-xs">
                            <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80" alt="VinWonders" className="w-full h-full object-cover" />
                          </div>
                          <div className="w-[85%] sm:w-[48%] flex-shrink-0 snap-start rounded-2xl overflow-hidden aspect-[16/10] bg-[#F3F4F6] border border-[#E5E7EB] shadow-xs">
                            <img src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80" alt="Hải sản Phú Quốc" className="w-full h-full object-cover" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* NGÀY 3 */}
                <div className="relative space-y-2.5">
                  {/* Bullet Node */}
                  <span className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#43563A] ring-4 ring-[#F0FDF4]" />
                  
                  {/* Clickable Day Title Header */}
                  <button
                    onClick={() => setOpenDay(openDay === 3 ? null : 3)}
                    className="w-full text-left group cursor-pointer flex items-start justify-between gap-4"
                  >
                    <div>
                      <span className="text-[11px] font-black uppercase text-[#43563A] tracking-wider block">NGÀY 3</span>
                      <h4 className="text-base sm:text-lg font-black text-[#111827] group-hover:text-[#43563A] transition-colors leading-snug">
                        Cano khám phá đảo – Hòn Thơm – Sunset Town
                      </h4>
                    </div>
                    <div className="pt-1 text-[#6B7280] group-hover:text-[#43563A] transition-colors flex-shrink-0">
                      {openDay === 3 ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </button>

                  {/* Summary preview line when collapsed */}
                  {openDay !== 3 && (
                    <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed line-clamp-2">
                      Cano lướt sóng ngắm san hô tại Hòn Mây Rút & Gầm Ghì, ăn trưa hải sản trên đảo, đi cáp treo Hòn Thơm & ngắm hoàng hôn Sunset Town.
                    </p>
                  )}

                  {/* Detailed Itinerary Steps & Photos when expanded */}
                  {openDay === 3 && (
                    <div className="space-y-3.5 pt-1">
                      <div className="space-y-2 text-xs sm:text-sm text-[#374151] leading-relaxed">
                        <p><strong className="text-[#111827] font-extrabold mr-1">07:30</strong> Dùng bữa sáng tại khách sạn, xe đưa đoàn xuống cảng An Thới.</p>
                        <p><strong className="text-[#111827] font-extrabold mr-1">08:30</strong> Lên cano lướt sóng ngắm san hô tại Hòn Mây Rút & Gầm Ghì.</p>
                        <p><strong className="text-[#111827] font-extrabold mr-1">12:00</strong> Thưởng thức bữa trưa hải sản tươi sống trực tiếp trên đảo.</p>
                        <p><strong className="text-[#111827] font-extrabold mr-1">15:00</strong> Trải nghiệm cáp treo Hòn Thơm & ngắm hoàng hôn Sunset Town Cầu Hôn.</p>
                      </div>

                      {/* Swipable Photo Carousel */}
                      <div className="pt-1">
                        <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 pb-1 no-scrollbar [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                          <div className="w-[85%] sm:w-[48%] flex-shrink-0 snap-start rounded-2xl overflow-hidden aspect-[16/10] bg-[#F3F4F6] border border-[#E5E7EB] shadow-xs">
                            <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80" alt="Cano lặn ngắm san hô" className="w-full h-full object-cover" />
                          </div>
                          <div className="w-[85%] sm:w-[48%] flex-shrink-0 snap-start rounded-2xl overflow-hidden aspect-[16/10] bg-[#F3F4F6] border border-[#E5E7EB] shadow-xs">
                            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" alt="Sunset Town Cầu Hôn" className="w-full h-full object-cover" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* NGÀY 4 */}
                <div className="relative space-y-2.5">
                  {/* Bullet Node */}
                  <span className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#43563A] ring-4 ring-[#F0FDF4]" />
                  
                  {/* Clickable Day Title Header */}
                  <button
                    onClick={() => setOpenDay(openDay === 4 ? null : 4)}
                    className="w-full text-left group cursor-pointer flex items-start justify-between gap-4"
                  >
                    <div>
                      <span className="text-[11px] font-black uppercase text-[#43563A] tracking-wider block">NGÀY 4</span>
                      <h4 className="text-base sm:text-lg font-black text-[#111827] group-hover:text-[#43563A] transition-colors leading-snug">
                        Phú Quốc – Mua sắm đặc sản – Đà Nẵng
                      </h4>
                    </div>
                    <div className="pt-1 text-[#6B7280] group-hover:text-[#43563A] transition-colors flex-shrink-0">
                      {openDay === 4 ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </button>

                  {/* Summary preview line when collapsed */}
                  {openDay !== 4 && (
                    <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed line-clamp-2">
                      Tham quan cơ sở Ngọc Trai, nhà thùng Nước Mắm & Rượu Sim Phú Quốc. Xe đưa đoàn ra sân bay Phú Quốc đáp chuyến bay về lại Đà Nẵng.
                    </p>
                  )}

                  {/* Detailed Itinerary Steps & Photos when expanded */}
                  {openDay === 4 && (
                    <div className="space-y-3.5 pt-1">
                      <div className="space-y-2 text-xs sm:text-sm text-[#374151] leading-relaxed">
                        <p><strong className="text-[#111827] font-extrabold mr-1">08:00</strong> Thưởng thức bữa sáng, làm thủ tục trả phòng khách sạn.</p>
                        <p><strong className="text-[#111827] font-extrabold mr-1">09:30</strong> Tham quan cơ sở Ngọc Trai, nhà thùng Nước Mắm & Rượu Sim Phú Quốc.</p>
                        <p><strong className="text-[#111827] font-extrabold mr-1">12:00</strong> Xe đưa đoàn ra sân bay Phú Quốc đáp chuyến bay về lại TP. Đà Nẵng.</p>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>

            {/* ── 9. HÌNH ẢNH THỰC TẾ DỊCH VỤ ĐI KÈM (2 Hàng Chạy Ngược Chiều - Dual Infinite Marquee Khớp 100% Ảnh Mẫu) ──────── */}
            <div className="space-y-4 pt-2">
              <div>
                <span className="text-xs font-black text-[#111827] uppercase tracking-wider block">
                  HÌNH ẢNH THỰC TẾ DỊCH VỤ ĐI KÈM
                </span>
                <div className="w-12 h-0.5 bg-[#43563A] rounded-full mt-2" />
              </div>

              {/* 2-Row Dual Opposite Auto-Scroll Container */}
              <div className="space-y-3.5 w-full overflow-hidden relative">
                
                {/* Gradient Side Fades */}
                <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-[#FAF9F5] to-transparent z-20 pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-[#FAF9F5] to-transparent z-20 pointer-events-none" />

                {/* ROW 1: CHẠY SANG BÊN PHẢI (Animate Marquee Right) */}
                <div className="flex overflow-hidden select-none">
                  <div className="animate-marquee-right flex gap-3 sm:gap-4">
                    {[
                      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
                      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
                      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
                      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
                      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
                      // Duplicated set for seamless loop
                      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
                      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
                      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
                      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
                      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
                    ].map((imgUrl, idx) => (
                      <div
                        key={idx}
                        className="w-48 sm:w-64 h-32 sm:h-44 rounded-2xl overflow-hidden bg-[#E5E7EB] border border-[#E5E7EB] shadow-2xs flex-shrink-0"
                      >
                        <img src={imgUrl} alt="Hình ảnh dịch vụ" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* ROW 2: CHẠY SANG BÊN TRÁI (Animate Marquee Left) */}
                <div className="flex overflow-hidden select-none">
                  <div className="animate-marquee-left flex gap-3 sm:gap-4">
                    {[
                      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
                      "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=80",
                      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
                      "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=800&q=80",
                      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
                      // Duplicated set for seamless loop
                      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
                      "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=80",
                      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
                      "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=800&q=80",
                      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
                    ].map((imgUrl, idx) => (
                      <div
                        key={idx}
                        className="w-48 sm:w-64 h-32 sm:h-44 rounded-2xl overflow-hidden bg-[#E5E7EB] border border-[#E5E7EB] shadow-2xs flex-shrink-0"
                      >
                        <img src={imgUrl} alt="Hình ảnh dịch vụ" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT SIDEBAR: AGENT & BOOKING BOX (Angel One Brand Styling) ──────── */}
          <div className="sticky top-24 self-start space-y-6 z-20">
            
            {/* Price & Booking Box */}
            <div className="bg-white border border-[#E5E7EB] rounded-3xl p-6 space-y-5 shadow-lg">
              
              <div className="space-y-1 border-b border-[#E5E7EB] pb-4">
                <span className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider block">Giá tham khảo chỉ từ</span>
                <div className="text-3xl font-black text-[#43563A]">
                  {totalPrice.toLocaleString("vi-VN")} <span className="text-sm font-bold text-[#111827]">VNĐ</span>
                </div>
              </div>

              {/* Selector Inputs */}
              <div className="space-y-3 text-xs">
                <div>
                  <label className="font-bold text-[#111827] block mb-1">Số lượng người lớn</label>
                  <div className="flex items-center justify-between bg-[#FAF9F5] border border-[#E5E7EB] rounded-xl p-2.5 px-3">
                    <span className="font-bold">Người lớn (&gt; 11t)</span>
                    <div className="flex items-center gap-2">
                      <button onClick={() => setAdultCount(Math.max(1, adultCount - 1))} className="w-6 h-6 rounded bg-white border border-[#E5E7EB] font-bold">-</button>
                      <span className="font-bold w-4 text-center">{adultCount}</span>
                      <button onClick={() => setAdultCount(adultCount + 1)} className="w-6 h-6 rounded bg-white border border-[#E5E7EB] font-bold">+</button>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="font-bold text-[#111827] block mb-1">Số lượng trẻ em</label>
                  <div className="flex items-center justify-between bg-[#FAF9F5] border border-[#E5E7EB] rounded-xl p-2.5 px-3">
                    <span className="font-bold">Trẻ em (5–10t)</span>
                    <div className="flex items-center gap-2">
                      <button onClick={() => setChildCount(Math.max(0, childCount - 1))} className="w-6 h-6 rounded bg-white border border-[#E5E7EB] font-bold">-</button>
                      <span className="font-bold w-4 text-center">{childCount}</span>
                      <button onClick={() => setChildCount(childCount + 1)} className="w-6 h-6 rounded bg-white border border-[#E5E7EB] font-bold">+</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Primary Booking Button */}
              <button
                onClick={() => onOpenQuote("Tour Đà Nẵng – Phú Quốc 4N3Đ")}
                className="w-full bg-[#43563A] hover:bg-[#34452F] text-white text-xs font-black py-3.5 rounded-full transition-all shadow-md cursor-pointer tracking-wider uppercase"
              >
                Đặt tour ngay
              </button>

              <div className="text-[11px] text-[#6B7280] space-y-1 text-center font-medium">
                <div>✓ Không chi phí ẩn · Báo giá bóc tách</div>
                <div>✓ Bảo hiểm du lịch tối đa 100Tr/vụ</div>
              </div>

            </div>

            {/* Agent Support Box */}
            <div className="bg-white border border-[#E5E7EB] rounded-3xl p-6 space-y-4 shadow-xs">
              <span className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider block">Tư vấn viên hỗ trợ 24/7</span>
              
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#E5E7EB] shadow-xs flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
                    alt="Tư vấn viên du lịch Angel One"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-white" />
                </div>
                <div>
                  <strong className="block text-sm font-bold text-[#111827]">Angel One Support</strong>
                  <span className="text-xs text-[#6B7280]">hotline: 0768 643 446</span>
                </div>
              </div>

              <a
                href="https://zalo.me/0768643446"
                target="_blank"
                rel="noreferrer"
                className="w-full border border-[#43563A] text-[#43563A] hover:bg-[#F0FDF4] text-xs font-bold py-2.5 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle size={15} />
                <span>Chat Zalo tư vấn viên</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── 22. KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI ? (Y chang Section Trang Chủ) ──────── */}
        <CtaSection
          onOpenQuote={() => onOpenQuote("Tour Đà Nẵng – Phú Quốc 4N3Đ")}
          onOpenCustom={() => alert("Mở bộ thiết kế tour riêng...")}
        />

        {/* ── RELATED TOURS GRID ───────────────────────────────────────────────── */}
        <div className="space-y-6 pt-6 border-t border-[#E5E7EB]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-black text-[#111827]">Tour du lịch liên quan</h2>
              <p className="text-xs text-[#6B7280]">Khám phá các tour du lịch miền Trung & biển đảo hấp dẫn nhất cùng Angel One Travel.</p>
            </div>
            <button onClick={onBackToHome} className="text-xs font-bold text-[#43563A] hover:underline cursor-pointer">
              Xem tất cả tour →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RELATED_TOURS.map((tour) => (
              <div
                key={tour.id}
                onClick={onBackToHome}
                className="bg-white border border-[#E5E7EB] rounded-3xl overflow-hidden shadow-2xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F3F4F6]">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-white/90 backdrop-blur-md text-[#111827] text-[10px] font-bold px-3 py-1 rounded-full shadow-xs">
                      {tour.tag1}
                    </span>
                    <span className="bg-[#43563A] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-xs">
                      {tour.tag2}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#6B7280]">
                    <span>{tour.location}</span>
                    <strong className="text-[#111827] font-bold">{tour.duration}</strong>
                  </div>

                  <h3 className="font-bold text-sm text-[#111827] group-hover:text-[#43563A] transition-colors leading-snug">
                    {tour.title}
                  </h3>

                  <div className="pt-2 border-t border-[#F3F4F6] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#9CA3AF] block">Giá từ</span>
                      <strong className="text-base font-black text-[#43563A]">{tour.price} VNĐ</strong>
                    </div>
                    <span className="text-xs font-bold text-[#43563A] group-hover:translate-x-1 transition-transform">
                      Chi tiết →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* LIGHTBOX GALLERY MODAL */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setIsGalleryOpen(false)}
            className="absolute top-6 right-6 text-[#111827] p-2 rounded-full bg-white hover:bg-white/90 cursor-pointer"
          >
            <X size={24} />
          </button>

          <div className="max-w-4xl w-full space-y-4 max-h-[90vh] overflow-y-auto p-2">
            <h3 className="text-white font-bold text-lg text-center">Bộ Sưu Tập Hình Ảnh Tour Đà Nẵng – Phú Quốc 4N3Đ</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TOUR_GALLERY.map((item) => (
                <div key={item.id} className="rounded-2xl overflow-hidden border border-white/20">
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                  <div className="p-2.5 bg-black/60 text-white text-xs font-semibold">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
