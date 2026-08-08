import React, { useState, useRef } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  PhoneCall,
  MessageCircle,
  ShieldCheck,
  Award,
  Clock,
  HeartHandshake,
  CheckCircle2
} from "lucide-react";
import { IMAGES } from "../data/travelData";

interface ServicesPageProps {
  onNavigate: (view: string) => void;
  onOpenQuote: () => void;
  onOpenCustom: () => void;
}

// ── BRAND COLORS ──────────────────────────────────────────────────────────
const PRIMARY = "#43563A"; // Forest Green
const PRIMARY_HOVER = "#34452F";

// ── 4 CORE SERVICES DATA ──────────────────────────────────────────────────
const SERVICES_LIST = [
  {
    id: "tours",
    num: "01",
    tag: "TOUR & TRẢI NGHIỆM",
    title: "Tour du lịch thiết kế riêng",
    subtitle: "Lịch trình riêng cho Gia đình, Cặp đôi & Nhóm bạn",
    desc: "Tận hưởng lịch trình riêng tư được may đo 100% theo thời gian, ngân sách và sở thích cá nhân. Khám phá thiên nhiên và văn hóa địa phương với chiều sâu khác biệt.",
    img: IMAGES.sapa,
    details: [
      "Tour gia đình & nhóm nhỏ riêng tư",
      "Lịch trình tùy chỉnh theo nhu cầu",
      "Khách sạn & Resort 3 - 5★ tuyển chọn",
      "Hướng dẫn viên bản địa am hiểu"
    ],
    action: "tours",
    ctaText: "Khám phá Tour riêng"
  },
  {
    id: "transport",
    num: "02",
    tag: "VẬN TẢI DU LỊCH",
    title: "Vận tải du lịch & Xe VIP",
    subtitle: "Xe 4 - 45 chỗ đời mới & Dàn VIP Limousine",
    desc: "Dịch vụ đưa đón sân bay 24/7, xe hợp đồng tham quan liên tỉnh Miền Trung với sự an toàn tuyệt đối. Lái xe kinh nghiệm, đúng giờ và am hiểu tuyến đường.",
    img: IMAGES.coastal,
    details: [
      "Đón tiễn sân bay 24/7 đúng giờ",
      "Đội xe 4 - 45 chỗ đời mới, máy lạnh êm",
      "Dòng VIP Limousine đẳng cấp",
      "Lái xe bản địa lịch sự, an toàn"
    ],
    action: "quote",
    ctaText: "Yêu cầu báo giá xe"
  },
  {
    id: "mice",
    num: "03",
    tag: "MICE & SỰ KIỆN DOANH NGHIỆP",
    title: "Giải pháp MICE & Sự kiện",
    subtitle: "Team Building, Gala Dinner & Hội thảo MICE",
    desc: "Tổ chức trọn gói các chương trình du lịch kết hợp hội nghị, sự kiện và hoạt động gắn kết tinh thần đồng đội cho doanh nghiệp trên bãi biển sôi động.",
    img: IMAGES.bana,
    details: [
      "Team Building bãi biển kịch bản độc đáo",
      "Đêm tiệc Gala Dinner hoành tráng",
      "Hội thảo MICE chuyên nghiệp setup",
      "In ấn backdrop, quà tặng & flycam"
    ],
    action: "quote",
    ctaText: "Tư vấn Doanh nghiệp"
  },
  {
    id: "support",
    num: "04",
    tag: "DỊCH VỤ HỖ TRỢ TẠI ĐIỂM ĐẾN",
    title: "Dịch vụ hỗ trợ tại điểm đến",
    subtitle: "Booking Resort 3-5★, Vé QR Code & HDV",
    desc: "Đơn vị kết nối trực tiếp giúp bạn đặt phòng khách sạn giá đại lý ưu đãi hơn đặt trực tiếp, vé vào cổng quét QR Code không phải xếp hàng chờ đợi.",
    img: IMAGES.hoian,
    details: [
      "Cam kết giá phòng tốt hơn đặt trực tiếp",
      "Vé QR Code Bà Nà, Hội An qua cổng nhanh",
      "HDV tiếng Việt, Anh, Hàn, Trung",
      "Hỗ trợ phát sinh & thay đổi 24/7"
    ],
    action: "quote",
    ctaText: "Đặt dịch vụ hỗ trợ"
  }
];

// ── TRUST BADGES DATA ─────────────────────────────────────────────────────
const TRUST_BADGES = [
  {
    num: "01",
    icon: Award,
    title: "Chất lượng chuẩn 5★",
    desc: "Mọi xe du lịch, khách sạn & đối tác đều qua kiểm định thực tế khắt khe."
  },
  {
    num: "02",
    icon: ShieldCheck,
    title: "Am hiểu địa phương",
    desc: "Đội ngũ bản địa tư vấn chân thành, đưa ra giải pháp đúng nhu cầu thực tế."
  },
  {
    num: "03",
    icon: Clock,
    title: "Minh bạch chi phí",
    desc: "Báo giá trọn gói niêm yết rõ ràng, tuyệt đối không phát sinh chi phí ẩn."
  },
  {
    num: "04",
    icon: HeartHandshake,
    title: "Hỗ trợ đồng hành 24/7",
    desc: "Luôn có nhân sự trực tuyến xử lý mọi phát sinh từ khi đi đến khi về nhà."
  }
];

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenQuote,
  onOpenCustom
}) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const activeService = SERVICES_LIST[activeIdx];
  const prevService = SERVICES_LIST[(activeIdx - 1 + SERVICES_LIST.length) % SERVICES_LIST.length];
  const nextService = SERVICES_LIST[(activeIdx + 1) % SERVICES_LIST.length];

  const handleAction = (action: string) => {
    if (action === "tours") onNavigate("tours");
    else if (action === "custom") onOpenCustom();
    else onOpenQuote();
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % SERVICES_LIST.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + SERVICES_LIST.length) % SERVICES_LIST.length);
  };

  // Touch Swipe for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
  };

  return (
    <div
      className="relative min-h-screen text-[#22251F] select-none bg-[#121614]"
      style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
    >
      {/* ════════════════════════════════════════════════════════════════════
          FULL-PAGE NEUTRAL DARK CINEMATIC SCENIC BACKGROUND
          ════════════════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 bottom-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={IMAGES.danang}
          alt="Đà Nẵng Cầu Rồng Panorama Unsplash"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Neutral Dark Overlay */}
        <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#121614]" />
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 1 — HERO HEADER
          ════════════════════════════════════════════════════════════════════ */}
      <section className="relative z-10 w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-[1380px] mx-auto px-5 md:px-10 py-32 flex flex-col items-center text-center">
          <h1 className="text-[clamp(36px,5.5vw,72px)] font-extrabold text-white leading-[1.08] tracking-[-0.03em] mb-6 max-w-4xl drop-shadow-md">
            Giải pháp toàn diện<br />
            <span className="text-[#A3B89A]">cho mọi hành trình</span>
          </h1>

          <p
            className="text-white/85 text-sm md:text-base leading-relaxed mb-10 max-w-2xl"
            style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
          >
            Từ những chuyến đi cá nhân tự do đến các sự kiện doanh nghiệp quy mô lớn, Angel One Travel mang đến trải nghiệm liền mạch, đẳng cấp và đậm chất riêng tại Miền Trung.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={onOpenQuote}
              className="group inline-flex items-center gap-3 bg-[#43563A] hover:bg-[#34452F] text-white rounded-full p-2 pl-7 pr-2.5 transition-all duration-300 shadow-xl cursor-pointer"
            >
              <span className="text-sm font-bold tracking-tight">Khám phá dịch vụ</span>
              <div className="w-10 h-10 rounded-full bg-white text-[#43563A] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300 shadow">
                <ArrowUpRight size={18} />
              </div>
            </button>

            <button
              onClick={onOpenCustom}
              className="bg-white/15 hover:bg-white text-white hover:text-[#43563A] backdrop-blur-md border border-white/25 font-bold py-3.5 px-7 rounded-full flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer text-sm"
            >
              <span>Nhận tư vấn thiết kế riêng</span>
            </button>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 2 — DỊCH VỤ CỐT LÕI
          ════════════════════════════════════════════════════════════════════ */}
      <section className="relative z-10 w-full py-16 lg:py-24 overflow-hidden">
        <div className="max-w-[1380px] mx-auto px-4 md:px-8">
          
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <h2 className="text-[clamp(28px,3.5vw,44px)] font-extrabold text-white tracking-[-0.02em] leading-tight">
              Dịch vụ du lịch nổi bật
            </h2>
          </div>

          {/* MAIN 3-BLOCK CAROUSEL STAGE */}
          <div
            className="relative flex items-center justify-center gap-4 lg:gap-6 my-4 min-h-[380px] lg:min-h-[420px]"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* LEFT PHOTO BLOCK */}
            <div
              onClick={handlePrev}
              className="hidden lg:block w-[300px] xl:w-[340px] h-[340px] lg:h-[370px] rounded-2xl overflow-hidden relative cursor-pointer opacity-85 hover:opacity-100 transition-all duration-500 shadow-2xl border border-white/30 group flex-none"
            >
              <img
                src={prevService.img}
                alt={prevService.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20" />
              
              {/* Minimalist Bold Title Overlay */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <h4 className="text-lg md:text-xl font-extrabold text-white tracking-tight drop-shadow-md leading-tight">
                  {prevService.title}
                </h4>
              </div>
            </div>

            {/* Left Circular Arrow Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 lg:left-6 z-40 w-11 h-11 rounded-full border border-white/40 bg-black/50 hover:bg-white text-white hover:text-[#43563A] backdrop-blur-md flex items-center justify-center transition-all shadow-xl cursor-pointer"
              aria-label="Previous Service"
            >
              <ChevronLeft size={20} />
            </button>

            {/* CENTER ACTIVE TEXT BLOCK */}
            <div className="w-full max-w-[440px] lg:max-w-[480px] h-[370px] lg:h-[400px] rounded-2xl bg-white text-[#22251F] shadow-2xl p-6 sm:p-8 flex flex-col justify-between relative z-30 transition-all duration-500 border border-white/40">
              
              {/* Top Header */}
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#D9D8D0] pb-3">
                  <span className="text-3xl font-bold text-[#43563A]">
                    {activeService.num}
                  </span>
                  <span className="text-[11px] font-bold text-[#787D75] uppercase tracking-widest">
                    {activeIdx + 1} / {SERVICES_LIST.length} DỊCH VỤ
                  </span>
                </div>

                <h3 className="text-xl lg:text-2xl font-extrabold text-[#22251F] tracking-tight leading-snug">
                  {activeService.title}
                </h3>

                <p
                  className="text-xs sm:text-sm text-[#787D75] leading-relaxed line-clamp-3"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                  {activeService.desc}
                </p>

                {/* Minimalist Checklist */}
                <div className="space-y-1.5 pt-1">
                  {activeService.details.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-[#22251F]">
                      <CheckCircle2 size={13} className="text-[#43563A] flex-none" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="pt-3 border-t border-[#D9D8D0]">
                <button
                  onClick={() => handleAction(activeService.action)}
                  className="group w-full inline-flex items-center justify-center gap-3 bg-[#43563A] hover:bg-[#34452F] text-white rounded-full p-2 pl-6 pr-2 transition-all duration-300 shadow-xl cursor-pointer text-xs sm:text-sm font-bold"
                >
                  <span>{activeService.ctaText}</span>
                  <div className="w-7 h-7 rounded-full bg-white text-[#43563A] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300 shadow">
                    <ArrowUpRight size={14} />
                  </div>
                </button>
              </div>

            </div>

            {/* Right Circular Arrow Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 lg:right-6 z-40 w-11 h-11 rounded-full border border-white/40 bg-black/50 hover:bg-white text-white hover:text-[#43563A] backdrop-blur-md flex items-center justify-center transition-all shadow-xl cursor-pointer"
              aria-label="Next Service"
            >
              <ChevronRight size={20} />
            </button>

            {/* RIGHT PHOTO BLOCK */}
            <div
              onClick={handleNext}
              className="hidden lg:block w-[300px] xl:w-[340px] h-[340px] lg:h-[370px] rounded-2xl overflow-hidden relative cursor-pointer opacity-85 hover:opacity-100 transition-all duration-500 shadow-2xl border border-white/30 group flex-none"
            >
              <img
                src={nextService.img}
                alt={nextService.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20" />

              {/* Minimalist Bold Title Overlay */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <h4 className="text-lg md:text-xl font-extrabold text-white tracking-tight drop-shadow-md leading-tight">
                  {nextService.title}
                </h4>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 3 — VÌ SAO CHỌN CHÚNG TÔI (UNIFIED SANS FONT & ELEGANT WHITE CARDS)
          ════════════════════════════════════════════════════════════════════ */}
      <section className="relative z-10 w-full py-20 md:py-28 overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10">
          
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-14 space-y-3">
            <h2 className="text-[clamp(26px,3vw,40px)] font-extrabold text-white tracking-[-0.02em] leading-tight">
              Sự khác biệt của Angel One Travel
            </h2>
          </div>

          {/* TRUST BADGES GRID (1x4 Desktop, 2x2 Mobile - Elegant Numbers & Sans Typography) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {TRUST_BADGES.map((b) => {
              const IconComp = b.icon;
              return (
                <div
                  key={b.num}
                  className="border border-white/40 rounded-3xl p-6 sm:p-7 hover:border-[#43563A] transition-all bg-white shadow-xl hover:shadow-2xl group flex flex-col justify-between text-[#22251F]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-4xl font-extrabold text-[#43563A] tracking-tight">
                        {b.num}
                      </span>
                      <div className="w-11 h-11 rounded-2xl bg-[#DDE3D6] text-[#43563A] flex items-center justify-center group-hover:bg-[#43563A] group-hover:text-white transition-all shadow-sm">
                        <IconComp size={20} />
                      </div>
                    </div>

                    <h3 className="font-extrabold text-[#22251F] text-base md:text-lg mb-2 tracking-tight">
                      {b.title}
                    </h3>

                    <p
                      className="text-xs md:text-sm text-[#5C6059] leading-relaxed"
                      style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                    >
                      {b.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 4 — CALL TO ACTION BANNER
          ════════════════════════════════════════════════════════════════════ */}
      <section className="relative z-10 py-20 overflow-hidden text-white border-t border-white/15">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left bg-black/50 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/20 shadow-2xl">
            <div className="space-y-2 max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                Sẵn sàng thiết kế chuyến đi dành riêng cho bạn?
              </h2>
              <p
                className="text-white/80 text-sm md:text-base"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
              >
                Đội ngũ tư vấn viên am hiểu địa phương luôn sẵn sàng hỗ trợ bạn 24/7.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <a
                href="https://zalo.me/0768643446"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-[#43563A] hover:bg-[#34452F] text-white font-bold py-4 px-8 rounded-full flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-xl min-h-[48px]"
              >
                <MessageCircle size={18} />
                <span>Chat Zalo tư vấn ngay</span>
              </a>

              <a
                href="tel:0768643446"
                className="w-full sm:w-auto bg-white/15 hover:bg-white text-white hover:text-[#43563A] border border-white/25 backdrop-blur-md font-bold py-4 px-7 rounded-full flex items-center justify-center gap-2.5 transition-all cursor-pointer min-h-[48px]"
              >
                <PhoneCall size={17} />
                <span>Hotline: 0768 643 446</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
