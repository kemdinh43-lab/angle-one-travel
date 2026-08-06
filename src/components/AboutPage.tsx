import React from "react";
import {
  Compass,
  Calendar,
  Headphones,
  MapPin,
  CheckCircle2,
  Users,
  Car,
  Hotel,
  Briefcase,
  ArrowRight,
  Smile,
  Award,
  ShieldCheck,
  Building2,
  FileCheck2,
  PhoneCall,
  Clock,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  Flag,
  HeartHandshake,
  BadgeCheck,
} from "lucide-react";
import { IMAGES } from "../data/travelData";
import { InteractiveTravelerSlider } from "./InteractiveTravelerSlider";

interface AboutPageProps {
  onNavigate: (view: string) => void;
  onOpenQuote: () => void;
  onOpenCustom: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenQuote,
  onOpenCustom,
}) => {
  return (
    <div className="min-h-screen bg-white text-[#111827]" style={{ fontFamily: "'Manrope', sans-serif" }}>
      
      {/* ── SECTION 1: HERO THƯƠNG HIỆU (Full-Bleed Submerged Hero Header) ───────────────── */}
      <section className="relative w-full min-h-[580px] sm:min-h-[640px] overflow-hidden bg-[#1f2a1b] text-white pt-28 sm:pt-36 pb-16 flex items-center">
        
        {/* Full-bleed Submerged Panoramic Coastal Background Image */}
        <img
          src={IMAGES.hero}
          alt="Angel One Travel Đà Nẵng"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/75" />

        {/* Content Container */}
        <div className="relative z-10 max-w-[1320px] mx-auto px-5 md:px-10 w-full">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 sm:gap-12 items-center">
            
            {/* Left Column: Text Content */}
            <div className="space-y-5 text-left">
              <span className="bg-white/15 backdrop-blur-md border border-white/25 text-white text-[11px] font-extrabold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-sm inline-block">
                VỀ ANGEL ONE TRAVEL
              </span>

              <h1 className="text-[clamp(32px,5vw,64px)] font-black text-white tracking-[-0.03em] leading-[1.08] uppercase">
                HÀNH TRÌNH BẮT ĐẦU TỪ SỰ THẤU HIỂU
              </h1>

              <p
                className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed font-medium max-w-xl"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
              >
                Angel One Travel là đơn vị lữ hành uy tín tại Đà Nẵng, chuyên cung cấp tour du lịch, xe riêng, dịch vụ lưu trú và kịch bản hành trình được thiết kế phù hợp cho khách cá nhân, gia đình và doanh nghiệp.
              </p>

              {/* Olive Green Capsule Action Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenQuote}
                  className="bg-[#43563A] hover:bg-[#34452F] text-white font-extrabold text-xs sm:text-sm px-8 py-4 rounded-full transition-all shadow-xl cursor-pointer inline-flex items-center gap-2.5 group"
                >
                  <span>Đặt Lịch Tư Vấn Miễn Phí</span>
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={14} />
                  </div>
                </button>
              </div>
            </div>

            {/* Right Column: Block of 3 Floating Image Cards (Khối 3 Ảnh Chìm) */}
            <div className="relative grid grid-cols-2 gap-3.5 pt-4 lg:pt-0">
              
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-black/40 border border-white/25 shadow-2xl group cursor-pointer">
                <img src={IMAGES.danang} alt="Biển Mỹ Khê Đà Nẵng" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-2.5 left-3 text-[11px] font-extrabold text-white">
                  Biển Mỹ Khê · Đà Nẵng
                </span>
              </div>

              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-black/40 border border-white/25 shadow-2xl group cursor-pointer translate-y-4">
                <img src={IMAGES.hoian} alt="Phố Cổ Hội An" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-2.5 left-3 text-[11px] font-extrabold text-white">
                  Phố Cổ Hội An
                </span>
              </div>

              <div className="col-span-2 relative rounded-2xl overflow-hidden aspect-[16/9] bg-black/40 border border-white/25 shadow-2xl group cursor-pointer">
                <img src={IMAGES.bana} alt="Đỉnh Bà Nà Hills" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 text-xs font-extrabold text-white flex items-center gap-2">
                  <span>Đỉnh Bà Nà Hills</span>
                  <span className="text-[9px] bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full font-semibold">Cáp treo Kỷ lục</span>
                </span>
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* ── SECTION 2: VỀ ANGEL ONE TRAVEL (Thẳng Hàng Đáy 100%, Bỏ Chữ Trên Ảnh) ───────── */}
      <section className="py-14 sm:py-24 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 sm:gap-14 items-stretch">
          
          {/* Left Column: Top Intro + Spaced Quote Block (Strict Alignment) */}
          <div className="flex flex-col justify-between space-y-6">
            
            {/* Top Intro Text */}
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-4xl font-black text-[#111827] tracking-tight leading-none">
                Về Angel One Travel
              </h2>

              <p
                className="text-xs sm:text-sm text-[#4B5563] leading-relaxed max-w-xl pt-1"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
              >
                Angel One Travel được hình thành từ mong muốn giúp du khách dễ dàng biến một kế hoạch du lịch thành hành trình cụ thể, rõ ràng và phù hợp. Mỗi chuyến đi được tư vấn linh hoạt dựa trên điểm đến, thời gian, số lượng thành viên và ngân sách riêng của đoàn.
              </p>
            </div>

            {/* Bottom Quote & Message Block (Aligned at bottom with right image card) */}
            <div className="pt-6 sm:pt-8 border-t border-[#E5E7EB] space-y-2.5">
              <h3 className="text-xl sm:text-3xl font-black italic text-[#111827] tracking-tight leading-snug">
                “Mỗi bước chân đều có thể mở ra một hành trình mới.”
              </h3>
              <p
                className="text-xs sm:text-sm text-[#6B7280] leading-relaxed max-w-lg font-medium"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
              >
                Đối với Angel One Travel, du lịch không chỉ là việc di chuyển giữa các điểm đến, mà là cơ hội kiến tạo những khoảnh khắc gắn kết chân thành cùng những người thân yêu.
              </p>
            </div>

          </div>

          {/* Right Column: 2x2 Stats Grid + Clean Landscape Photo Card (No text on photo, bottom aligned) */}
          <div className="flex flex-col justify-between space-y-6">
            
            {/* 2x2 Stats Grid */}
            <div className="grid grid-cols-2 gap-8 sm:gap-10">
              
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight leading-none">2023</div>
                <div className="text-xs text-[#6B7280] font-medium" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                  Năm thành lập & vận hành
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight leading-none">06+</div>
                <div className="text-xs text-[#6B7280] font-medium" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                  Nhóm dịch vụ du lịch trọn gói
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight leading-none">01</div>
                <div className="text-xs text-[#6B7280] font-medium" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                  Đầu mối xuyên suốt hành trình
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight leading-none">10+</div>
                <div className="text-xs text-[#6B7280] font-medium" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                  Tuyến điểm đến phát triển
                </div>
              </div>

            </div>

            {/* Clean Landscape Photo Card (NO text overlay inside image, bottom aligned with left column) */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/8] sm:aspect-[16/7.5] bg-[#F3F4F6] border border-[#E5E7EB] shadow-2xs group">
              <img
                src={IMAGES.danang}
                alt="Angel One Travel Đà Nẵng"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

          </div>

        </div>
      </section>

      {/* ── SECTION 3: 4-LAYER INTERACTIVE TRAVELER DESTINATION SLIDER (Khớp 100% Ảnh Tham Chiếu FUJI / JAPAN TRAVEL) ── */}
      <InteractiveTravelerSlider onNavigateTours={() => onNavigate("tours")} />

      {/* ── SECTION 4: SERVICES WE PROVIDE (Hệ Sinh Thái Dịch Vụ - Card Dọc 01, 02, 03, 04) ────── */}
      <section className="py-10 sm:py-16 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Header Row */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#111827] tracking-tight">
              Hệ sinh thái dịch vụ
            </h2>
            <p className="text-xs text-[#6B7280]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              Khách hàng có thể lựa chọn từng dịch vụ riêng lẻ hoặc kết hợp thành chương trình hoàn chỉnh.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate("tours")}
              className="w-10 h-10 rounded-full border border-[#E5E7EB] bg-white hover:bg-[#111827] hover:text-white flex items-center justify-center transition-colors text-[#111827]"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => onNavigate("tours")}
              className="w-10 h-10 rounded-full border border-[#E5E7EB] bg-[#111827] text-white hover:bg-[#43563A] flex items-center justify-center transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* 4 Vertical Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <div className="group space-y-3 cursor-pointer" onClick={() => onNavigate("tours")}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#F3F4F6] shadow-sm">
              <img src={IMAGES.danang} alt="Tour Du Lịch" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-black/60 backdrop-blur-md text-white font-extrabold text-xs flex items-center justify-center">
                01
              </div>
            </div>
            <div>
              <h3 className="font-extrabold text-base text-[#111827] group-hover:text-[#43563A] transition-colors">
                Tour Du Lịch Trọn Gói
              </h3>
              <p className="text-xs text-[#6B7280] leading-relaxed mt-1" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                Tour trong nước, tour nước ngoài, tour khởi hành hàng ngày & tour thiết kế riêng.
              </p>
            </div>
          </div>

          <div className="group space-y-3 cursor-pointer" onClick={() => onNavigate("tours")}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#F3F4F6] shadow-sm">
              <img src={IMAGES.hoianB} alt="Vận Chuyển Du Lịch" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-black/60 backdrop-blur-md text-white font-extrabold text-xs flex items-center justify-center">
                02
              </div>
            </div>
            <div>
              <h3 className="font-extrabold text-base text-[#111827] group-hover:text-[#43563A] transition-colors">
                Vận Chuyển Du Lịch
              </h3>
              <p className="text-xs text-[#6B7280] leading-relaxed mt-1" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                Xe đón tiễn sân bay, xe du lịch 4–45 chỗ đời mới & DCar Limousine VIP.
              </p>
            </div>
          </div>

          <div className="group space-y-3 cursor-pointer" onClick={() => onNavigate("tours")}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#F3F4F6] shadow-sm">
              <img src={IMAGES.beachP} alt="Lưu Trú & Vé Tham Quan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-black/60 backdrop-blur-md text-white font-extrabold text-xs flex items-center justify-center">
                03
              </div>
            </div>
            <div>
              <h3 className="font-extrabold text-base text-[#111827] group-hover:text-[#43563A] transition-colors">
                Lưu Trú & Vé Tham Quan
              </h3>
              <p className="text-xs text-[#6B7280] leading-relaxed mt-1" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                Khách sạn & Resort sát biển Mỹ Khê, vé Bà Nà Hills & Ký Ức Hội An giá đại lý.
              </p>
            </div>
          </div>

          <div className="group space-y-3 cursor-pointer" onClick={() => onNavigate("tours")}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#F3F4F6] shadow-sm">
              <img src={IMAGES.hue} alt="Doanh Nghiệp & MICE" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-black/60 backdrop-blur-md text-white font-extrabold text-xs flex items-center justify-center">
                04
              </div>
            </div>
            <div>
              <h3 className="font-extrabold text-base text-[#111827] group-hover:text-[#43563A] transition-colors">
                Doanh Nghiệp & MICE
              </h3>
              <p className="text-xs text-[#6B7280] leading-relaxed mt-1" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                Tour công ty, Team Building bãi biển, Gala Dinner & Hội nghị.
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* ── SECTION 5: REAL EXPERIENCES & REVIEWS ─────────────────────────────────── */}
      <section className="py-10 sm:py-16 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
        
        <div className="max-w-2xl mb-8 space-y-2">
          <h2 className="text-2xl sm:text-4xl font-black text-[#111827] tracking-tight">
            Hành Trình & Bằng Chứng Thực Tế
          </h2>
          <p className="text-xs sm:text-sm text-[#6B7280]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            Khám phá những khoảnh khắc chân thực từ các đoàn gia đình, nhóm bạn & doanh nghiệp đã đồng hành cùng Angel One Travel.
          </p>
        </div>

        {/* Asymmetric Photo Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          
          <div className="relative rounded-2xl overflow-hidden min-h-[320px] md:min-h-[420px] bg-[#F3F4F6] shadow-sm group">
            <img src={IMAGES.danang} alt="Đoàn Gia Đình (Hà Nội)" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="bg-white/20 backdrop-blur-md text-[10px] font-bold px-3 py-1 rounded-full mb-2 inline-block">
                Gia đình Anh Hoàng (Hà Nội)
              </span>
              <h3 className="font-extrabold text-base">Tour Xe Riêng 4N3Đ Đà Nẵng</h3>
              <p className="text-[11px] text-white/80 line-clamp-2 mt-1" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                "Xe riêng đón đúng giờ, giờ giấc thư thái rất hợp cho người lớn tuổi và trẻ nhỏ."
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden min-h-[195px] bg-[#F3F4F6] shadow-sm group">
              <img src={IMAGES.bana} alt="Đoàn Doanh Nghiệp MICE" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="bg-white/20 backdrop-blur-md text-[9px] font-bold px-2.5 py-0.5 rounded-full mb-1 inline-block">
                  Công Ty Công Nghệ S.
                </span>
                <h3 className="font-extrabold text-sm">Team Building & Gala Dinner</h3>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden min-h-[195px] bg-[#F3F4F6] shadow-sm group">
              <img src={IMAGES.hoian} alt="Đoàn Khách Tour Hội An" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="bg-white/20 backdrop-blur-md text-[9px] font-bold px-2.5 py-0.5 rounded-full mb-1 inline-block">
                  Chị Ngọc Mai (TP.HCM)
                </span>
                <h3 className="font-extrabold text-sm">Báo Giá Bóc Tách Minh Bạch</h3>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden min-h-[320px] md:min-h-[420px] bg-[#F3F4F6] shadow-sm group">
            <img src={IMAGES.hue} alt="Nhóm Bạn Thân" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="bg-white/20 backdrop-blur-md text-[10px] font-bold px-3 py-1 rounded-full mb-2 inline-block">
                Nhóm Bạn Thân (Cần Thơ)
              </span>
              <h3 className="font-extrabold text-base">Hành Trình Chụp Ảnh & Di Sản</h3>
              <p className="text-[11px] text-white/80 line-clamp-2 mt-1" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                "Lịch trình linh hoạt, hướng dẫn viên nhiệt tình chụp ảnh siêu đẹp."
              </p>
            </div>
          </div>

        </div>

        <div className="text-center">
          <button
            onClick={() => onNavigate("tours")}
            className="border border-[#D1D5DB] hover:bg-[#111827] hover:text-white text-[#111827] font-extrabold text-xs px-8 py-3 rounded-full transition-all shadow-2xs cursor-pointer"
          >
            Xem Thêm Hình Ảnh & Đánh Giá
          </button>
        </div>

      </section>

      {/* ── SECTION 6: ALTERNATING TIMELINE WITH CENTRAL LINE & UNSPLASH IMAGES ─────── */}
      <section className="py-12 sm:py-16 bg-[#FAF9F5] border-t border-b border-[#E5E7EB]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 md:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-10 space-y-1">
            <span className="text-[10px] sm:text-xs text-[#43563A] uppercase tracking-widest font-extrabold block">
              QUY TRÌNH KHIỂN HÀNH TRÌNH
            </span>
            <h2 className="text-xl sm:text-3xl font-black text-[#111827] tracking-tight">
              Từ yêu cầu đến hành trình chỉ trong 4 bước
            </h2>
            <p className="text-xs text-[#6B7280]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              Quy trình làm việc rõ ràng, nhanh gọn giúp bạn hoàn toàn an tâm chuẩn bị cho chuyến đi.
            </p>
          </div>

          <div className="relative py-4">
            <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] bg-[#E5E7EB] z-0" />

            {/* Step 01 */}
            <div className="relative z-10 flex items-center mb-10 sm:mb-14">
              <div className="w-[45%] pr-3 sm:pr-8 text-right flex justify-end">
                <div className="w-24 sm:w-56 aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-md border border-[#E5E7EB] bg-[#F3F4F6]">
                  <img src={IMAGES.danang} alt="Bước 1: Chia sẻ nhu cầu" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="w-[10%] flex justify-center">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white border-2 border-[#111827] text-[#111827] font-black text-[10px] sm:text-xs flex items-center justify-center shadow-md">
                  01
                </div>
              </div>

              <div className="w-[45%] pl-3 sm:pl-8 text-left space-y-1">
                <h3 className="font-extrabold text-xs sm:text-lg text-[#111827]">Chia sẻ nhu cầu</h3>
                <p className="text-[10px] sm:text-xs text-[#6B7280] leading-relaxed" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                  Gửi thông tin điểm đến, thời gian dự kiến, số lượng thành viên và ngân sách.
                </p>
              </div>
            </div>

            {/* Step 02 */}
            <div className="relative z-10 flex items-center mb-10 sm:mb-14">
              <div className="w-[45%] pr-3 sm:pr-8 text-right space-y-1">
                <h3 className="font-extrabold text-xs sm:text-lg text-[#111827]">Nhận kịch bản tư vấn</h3>
                <p className="text-[10px] sm:text-xs text-[#6B7280] leading-relaxed" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                  Angel One Travel đề xuất kịch bản tour hoặc tổ hợp dịch vụ phù hợp trong 15 phút.
                </p>
              </div>

              <div className="w-[10%] flex justify-center">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white border-2 border-[#111827] text-[#111827] font-black text-[10px] sm:text-xs flex items-center justify-center shadow-md">
                  02
                </div>
              </div>

              <div className="w-[45%] pl-3 sm:pl-8 text-left flex justify-start">
                <div className="w-24 sm:w-56 aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-md border border-[#E5E7EB] bg-[#F3F4F6]">
                  <img src={IMAGES.hoianB} alt="Bước 2: Nhận kịch bản" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Step 03 */}
            <div className="relative z-10 flex items-center mb-10 sm:mb-14">
              <div className="w-[45%] pr-3 sm:pr-8 text-right flex justify-end">
                <div className="w-24 sm:w-56 aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-md border border-[#E5E7EB] bg-[#F3F4F6]">
                  <img src={IMAGES.hue} alt="Bước 3: Xác nhận & Cọc" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="w-[10%] flex justify-center">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white border-2 border-[#111827] text-[#111827] font-black text-[10px] sm:text-xs flex items-center justify-center shadow-md">
                  03
                </div>
              </div>

              <div className="w-[45%] pl-3 sm:pl-8 text-left space-y-1">
                <h3 className="font-extrabold text-xs sm:text-lg text-[#111827]">Xác nhận & Cọc giữ chỗ</h3>
                <p className="text-[10px] sm:text-xs text-[#6B7280] leading-relaxed" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                  Thống nhất lịch trình, chi phí bóc tách và đặt cọc bảo đảm dịch vụ.
                </p>
              </div>
            </div>

            {/* Step 04 */}
            <div className="relative z-10 flex items-center">
              <div className="w-[45%] pr-3 sm:pr-8 text-right space-y-1">
                <h3 className="font-extrabold text-xs sm:text-lg text-[#111827]">Khởi hành trọn vẹn</h3>
                <p className="text-[10px] sm:text-xs text-[#6B7280] leading-relaxed" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                  Đội ngũ điều hành & hỗ trợ viên đồng hành chăm sóc đoàn 24/7 suốt chuyến đi.
                </p>
              </div>

              <div className="w-[10%] flex justify-center">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white border-2 border-[#111827] text-[#111827] font-black text-[10px] sm:text-xs flex items-center justify-center shadow-md">
                  04
                </div>
              </div>

              <div className="w-[45%] pl-3 sm:pl-8 text-left flex justify-start">
                <div className="w-24 sm:w-56 aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-md border border-[#E5E7EB] bg-[#F3F4F6]">
                  <img src={IMAGES.coastal} alt="Bước 4: Khởi hành" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── SECTION 7: FULL-BLEED 2-ROW UNLIMITED AUTO-SCROLLING MARQUEE GALLERY ───────────────── */}
      <section className="py-12 sm:py-20 w-full overflow-hidden bg-[#FAF9F5] border-t border-b border-[#E5E7EB]">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2 px-4">
          <span className="text-[10px] sm:text-xs text-[#43563A] uppercase tracking-[0.25em] font-extrabold block">
            CON NGƯỜI ANGEL ONE TRAVEL
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#111827] tracking-tight">
            Những con người đứng sau mỗi chuyến đi
          </h2>
          <p className="text-xs sm:text-sm text-[#6B7280]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            Mỗi hành trình là sự phối hợp chặt chẽ giữa 4 nhóm nhân sự giàu kinh nghiệm và tâm huyết.
          </p>
        </div>

        {/* 2-Row Unlimited Scroll Container */}
        <div className="space-y-4 sm:space-y-6 w-full overflow-hidden relative">
          
          {/* Subtle Side Fades for Seamless Infinite Look */}
          <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#FAF9F5] to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#FAF9F5] to-transparent z-20 pointer-events-none" />

          {/* ROW 1: Auto-scrolls CONTINUOUSLY TO THE RIGHT */}
          <div className="flex overflow-hidden select-none">
            <div className="animate-marquee-right flex gap-4 sm:gap-6">
              {[
                { title: "Biển Mỹ Khê · Đà Nẵng", tag: "Cảnh quan", image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=80" },
                { title: "Đội Xe DCar Limousine VIP", tag: "Xe vận chuyển", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80" },
                { title: "Tư Vấn Kịch Bản Lịch Trình", tag: "Tư vấn viên", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" },
                { title: "Khách Du Lịch Trải Nghiệm", tag: "Khách du lịch", image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80" },
                { title: "Phố Cổ Hội An Di Sản", tag: "Cảnh quan", image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80" },
                { title: "Đội Xe 16–45 Chỗ Đời Mới", tag: "Xe vận chuyển", image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80" },
                { title: "Hướng Dẫn Viên Nhiệt Tình", tag: "Hướng dẫn viên", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" },
                { title: "Đoàn Khách Hàng Hạnh Phúc", tag: "Khách du lịch", image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=800&q=80" },
                
                // Duplicated set for smooth infinite loop
                { title: "Biển Mỹ Khê · Đà Nẵng", tag: "Cảnh quan", image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=80" },
                { title: "Đội Xe DCar Limousine VIP", tag: "Xe vận chuyển", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80" },
                { title: "Tư Vấn Kịch Bản Lịch Trình", tag: "Tư vấn viên", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" },
                { title: "Khách Du Lịch Trải Nghiệm", tag: "Khách du lịch", image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80" },
                { title: "Phố Cổ Hội An Di Sản", tag: "Cảnh quan", image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80" },
                { title: "Đội Xe 16–45 Chỗ Đời Mới", tag: "Xe vận chuyển", image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80" },
                { title: "Hướng Dẫn Viên Nhiệt Tình", tag: "Hướng dẫn viên", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" },
                { title: "Đoàn Khách Hàng Hạnh Phúc", tag: "Khách du lịch", image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=800&q=80" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="relative w-64 sm:w-80 h-44 sm:h-52 rounded-2xl overflow-hidden bg-white border border-[#E5E7EB] shadow-xs group flex-shrink-0 cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ROW 2: Auto-scrolls CONTINUOUSLY TO THE LEFT */}
          <div className="flex overflow-hidden select-none">
            <div className="animate-marquee-left flex gap-4 sm:gap-6">
              {[
                { title: "Hoàng Hôn Bãi Biển Quy Nhơn", tag: "Cảnh quan", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" },
                { title: "Đội Vận Chuyển Đón Tiễn", tag: "Xe vận chuyển", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80" },
                { title: "Bộ Phận Điều Hành Tour", tag: "Đội ngũ điều hành", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" },
                { title: "Nhóm Bạn Thân Check-in", tag: "Khách du lịch", image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80" },
                { title: "Quảng Bình Kỳ Quan Hang Động", tag: "Cảnh quan", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" },
                { title: "Xe Du Lịch 7 Chỗ Đời Mới", tag: "Xe vận chuyển", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80" },
                { title: "Hỗ Trợ Đoàn Khách 24/7", tag: "Hỗ trợ 24/7", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80" },
                { title: "Đoàn Doanh Nghiệp MICE", tag: "Khách du lịch", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80" },
                
                // Duplicated set for smooth infinite loop
                { title: "Hoàng Hôn Bãi Biển Quy Nhơn", tag: "Cảnh quan", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" },
                { title: "Đội Vận Chuyển Đón Tiễn", tag: "Xe vận chuyển", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80" },
                { title: "Bộ Phận Điều Hành Tour", tag: "Đội ngũ điều hành", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" },
                { title: "Nhóm Bạn Thân Check-in", tag: "Khách du lịch", image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80" },
                { title: "Quảng Bình Kỳ Quan Hang Động", tag: "Cảnh quan", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" },
                { title: "Xe Du Lịch 7 Chỗ Đời Mới", tag: "Xe vận chuyển", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80" },
                { title: "Hỗ Trợ Đoàn Khách 24/7", tag: "Hỗ trợ 24/7", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80" },
                { title: "Đoàn Doanh Nghiệp MICE", tag: "Khách du lịch", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="relative w-64 sm:w-80 h-44 sm:h-52 rounded-2xl overflow-hidden bg-white border border-[#E5E7EB] shadow-xs group flex-shrink-0 cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

      </section>

      {/* ── SECTION 8: GIẤY PHÉP & CHỨNG CHỈ KINH DOANH ──────────────────────────── */}
      <section className="py-12 sm:py-20 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Title */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-[#43563A] mb-2">
            Pháp lý & Chứng nhận
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#111827] tracking-tight">
            Giấy phép kinh doanh chính thức
          </h2>
        </div>

        {/* 3 License Images — horizontal scroll on mobile, 3 cols on desktop */}
        <div className="flex sm:grid sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto overflow-x-auto pb-3 sm:pb-0 snap-x snap-mandatory scrollbar-none">
          {[
            "/licenses/license-1.webp",
            "/licenses/license-2.webp",
            "/licenses/license-3.webp",
          ].map((src, i) => (
            <div
              key={i}
              className="flex-none w-[78vw] sm:w-auto rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-sm bg-white hover:shadow-md transition-shadow snap-start"
            >
              <img
                src={src}
                alt={`Giấy phép kinh doanh ${i + 1}`}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 9: CTA BANNER CHÂN TRANG ────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-[#1f2a1b] text-white py-14 sm:py-20">
        <img
          src={IMAGES.hero}
          alt="Cùng Angel One Travel bắt đầu hành trình tiếp theo"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-black/65 backdrop-blur-xs" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/80" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Cùng Angel One Travel bắt đầu hành trình tiếp theo
            </h2>
            <p className="text-xs sm:text-sm text-[#DDE3D6]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              Chia sẻ điểm đến, thời gian và nhu cầu của bạn. Đội ngũ Angel One Travel sẽ đề xuất phương án phù hợp nhất trong 15 phút.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-2 w-full sm:w-auto">
            <button
              onClick={() => onNavigate("tours")}
              className="w-full sm:w-auto px-6 py-3 bg-[#43563A] hover:bg-[#34452F] text-white rounded-full text-xs font-extrabold transition-all shadow-md cursor-pointer"
            >
              Khám phá tour
            </button>
            <button
              onClick={onOpenCustom}
              className="w-full sm:w-auto px-6 py-3 bg-white text-[#22251F] hover:bg-[#FAF9F5] rounded-full text-xs font-extrabold transition-all shadow-md cursor-pointer"
            >
              Thiết kế tour riêng
            </button>
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-6 py-3 border border-white/40 text-white hover:bg-white/10 rounded-full text-xs font-bold transition-all cursor-pointer"
            >
              Liên hệ tư vấn
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
