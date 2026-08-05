import React, { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { IMAGES } from "../data/travelData";

interface CtaSectionProps {
  onOpenQuote: () => void;
  onOpenCustom: () => void;
}

const FEEDBACKS = [
  {
    id: 1,
    name: "Anh Minh Tuấn",
    role: "Khách hàng gia đình (Hà Nội)",
    tour: "Tour Đà Nẵng – Hội An – Huế 4N3Đ",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    comment:
      "Chuyến đi 4 ngày 3 đêm cùng gia đình 6 người cực kỳ trọn vẹn. Xe đời mới êm ái, bác tài vui tính và bạn tư vấn Angel One hỗ trợ nhiệt tình 24/7 từ lúc cất cánh đến khi về!",
  },
  {
    id: 2,
    name: "Chị Ngọc Bích",
    role: "Khách hàng doanh nghiệp (TP.HCM)",
    tour: "Tour Quảng Bình Hang Động 3N2Đ",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    comment:
      "Đoàn công ty 40 người đi Quảng Bình trải nghiệm Động Thiên Đường tuyệt đẹp. Khâu tổ chức ăn uống, khách sạn và trò chơi team building của Angel One rất chuyên nghiệp!",
  },
  {
    id: 3,
    name: "Anh Hoàng & Chị Mai",
    role: "Tour gia đình & Nghỉ dưỡng",
    tour: "Combo Đà Nẵng – Bà Nà Hills 3N2Đ",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
    comment:
      "Lần đầu tiên trải nghiệm tour thiết kế riêng của Angel One. Khách sạn biển Mỹ Khê view đẹp xuất sắc, lịch trình không bị vội, các bé nhà mình thích mê!",
  },
  {
    id: 4,
    name: "Chú Đức Thanh",
    role: "Khách hàng trung niên (Cần Thơ)",
    tour: "Tour Cố Đô Huế – Hội An 3N2Đ",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    comment:
      "Lịch trình đi Huế nhẹ nhàng, cơm cung đình ngon và HDV nói chuyện rất có duyên. Chú và bạn bè rất hài lòng với chuyến đi vừa rồi!",
  },
  {
    id: 5,
    name: "Chị Phương Anh",
    role: "Khách hàng nhóm bạn (Hải Phòng)",
    tour: "Tour Quy Nhơn – Kỳ Co – Eo Gió 3N2Đ",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    comment:
      "Nhóm bạn 8 đứa tụi mình đi Quy Nhơn chụp được vô số hình sống ảo. Cano Kỳ Co siêu đã, hải sản tươi rói và chi phí cực kỳ hợp lý!",
  },
];

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenQuote, onOpenCustom }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + FEEDBACKS.length) % FEEDBACKS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % FEEDBACKS.length);
  };

  // 3 Visible Feedbacks for Desktop View
  const desktopFeedbacks = [
    FEEDBACKS[currentIndex % FEEDBACKS.length],
    FEEDBACKS[(currentIndex + 1) % FEEDBACKS.length],
    FEEDBACKS[(currentIndex + 2) % FEEDBACKS.length],
  ];

  // 1 Visible Feedback for Mobile View
  const mobileFeedback = FEEDBACKS[currentIndex % FEEDBACKS.length];

  return (
    <section id="feedback" className="relative w-full overflow-hidden bg-[#1f2a1b] text-white py-20 md:py-28" style={{ fontFamily: "'Manrope', sans-serif" }}>
      {/* Full-bleed Panoramic Background Image */}
      <img
        src={IMAGES.coastal}
        alt="Khách hàng nói gì về Angel One Travel"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/40 to-black/85" />

      {/* Main Container */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-5 md:px-10 space-y-16">
        
        {/* ── SECTION 1: RESPONSIVE CAROUSEL (5 REVIEWS) ────────────────────────── */}
        <div>
          {/* Centered Title Only */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-[clamp(28px,4.5vw,52px)] font-extrabold text-white tracking-[-0.02em] leading-tight">
              Khách hàng nói gì về chúng tôi ?
            </h2>
          </div>

          {/* Carousel Slider with Left/Right Arrows */}
          <div className="relative flex items-center">
            
            {/* Left Control Arrow Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous feedback"
              className="absolute -left-3 sm:-left-6 z-20 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-[#43563A] shadow-2xl flex items-center justify-center transition-all duration-300 cursor-pointer border border-[#D9D8D0]"
            >
              <ChevronLeft size={20} />
            </button>

            {/* DESKTOP VIEW: Displays 3 Cards Side-by-Side */}
            <div className="hidden md:grid md:grid-cols-3 gap-6 w-full px-6">
              {desktopFeedbacks.map((fb) => (
                <div
                  key={fb.id}
                  className="bg-white text-[#22251F] border border-white/20 rounded-3xl p-7 shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between animate-in fade-in duration-300 min-h-[280px]"
                >
                  <div>
                    {/* Rating Stars & Quote Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1 text-[#F59E0B]">
                        {[...Array(fb.rating)].map((_, i) => (
                          <Star key={i} size={15} fill="currentColor" />
                        ))}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#FAF9F5] flex items-center justify-center text-[#43563A]">
                        <Quote size={16} />
                      </div>
                    </div>

                    {/* Comment Text */}
                    <p
                      className="text-xs sm:text-sm text-[#464A43] leading-relaxed italic mb-6 line-clamp-4"
                      style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                    >
                      "{fb.comment}"
                    </p>
                  </div>

                  {/* Customer Avatar & Info */}
                  <div className="pt-4 border-t border-[#D9D8D0] flex items-center gap-3.5">
                    <img
                      src={fb.avatar}
                      alt={fb.name}
                      className="w-11 h-11 rounded-full object-cover border border-[#D9D8D0]"
                    />
                    <div>
                      <h4 className="font-extrabold text-sm text-[#22251F]">{fb.name}</h4>
                      <span className="text-[11px] text-[#787D75] block mt-0.5 line-clamp-1">{fb.tour}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE VIEW: Displays 1 Single Card at a time */}
            <div className="block md:hidden w-full px-6">
              <div
                key={mobileFeedback.id}
                className="bg-white text-[#22251F] border border-white/20 rounded-3xl p-6 shadow-2xl flex flex-col justify-between animate-in fade-in duration-300 min-h-[280px]"
              >
                <div>
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#F59E0B]">
                      {[...Array(mobileFeedback.rating)].map((_, i) => (
                        <Star key={i} size={15} fill="currentColor" />
                      ))}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#FAF9F5] flex items-center justify-center text-[#43563A]">
                      <Quote size={16} />
                    </div>
                  </div>

                  {/* Comment Text */}
                  <p
                    className="text-xs sm:text-sm text-[#464A43] leading-relaxed italic mb-6"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    "{mobileFeedback.comment}"
                  </p>
                </div>

                {/* Customer Avatar & Info */}
                <div className="pt-4 border-t border-[#D9D8D0] flex items-center gap-3.5">
                  <img
                    src={mobileFeedback.avatar}
                    alt={mobileFeedback.name}
                    className="w-11 h-11 rounded-full object-cover border border-[#D9D8D0]"
                  />
                  <div>
                    <h4 className="font-extrabold text-sm text-[#22251F]">{mobileFeedback.name}</h4>
                    <span className="text-[11px] text-[#787D75] block mt-0.5 line-clamp-1">{mobileFeedback.tour}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Control Arrow Button */}
            <button
              onClick={handleNext}
              aria-label="Next feedback"
              className="absolute -right-3 sm:-right-6 z-20 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-[#43563A] shadow-2xl flex items-center justify-center transition-all duration-300 cursor-pointer border border-[#D9D8D0]"
            >
              <ChevronRight size={20} />
            </button>

          </div>

          {/* Slide Indicator Dots (5 total dots) */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {FEEDBACKS.map((fb, idx) => (
              <button
                key={fb.id}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex % FEEDBACKS.length
                    ? "w-6 bg-[#DDE3D6]"
                    : "w-2 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── SECTION 2: SLEEK BOTTOM BANNER (CÙNG ANGEL ONE KHỞI TẠO HÀNH TRÌNH TÍẾP THEO) ── */}
        <div className="relative rounded-3xl overflow-hidden bg-[#34452F] text-white p-8 sm:p-12 shadow-2xl border border-white/20">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-center">
            
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#DDE3D6] font-extrabold block">
                SẴN SÀNG CHO CHUYẾN ĐI TUYỆT VỜI?
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Cùng Angel One khởi tạo hành trình tiếp theo
              </h3>
              <p
                className="text-[#DDE3D6]/90 text-xs sm:text-sm leading-relaxed max-w-lg"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
              >
                Gửi thông tin về điểm đến, thời gian dự kiến và số lượng thành viên. Đội ngũ tư vấn Angel One Travel sẽ gửi kịch bản chi tiết & báo giá ưu đãi nhất trong 15 phút!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 lg:justify-end">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 bg-white text-[#43563A] hover:bg-[#FAF9F5] text-xs font-bold transition-all shadow-md cursor-pointer"
              >
                <span>Nhận báo giá ngay</span>
                <ArrowRight size={14} />
              </button>
              <button
                onClick={onOpenCustom}
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 border border-white/30 text-white hover:bg-white/10 text-xs font-semibold transition-all cursor-pointer"
              >
                <span>Thiết kế tour riêng</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
