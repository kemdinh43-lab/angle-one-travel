import React, { useState } from "react";
import { ArrowRight, ChevronRight, CheckCircle2, PhoneCall, MessageSquare } from "lucide-react";
import { IMAGES } from "../data/travelData";

interface ServicesPageProps {
  onNavigate: (view: string) => void;
  onOpenQuote: () => void;
  onOpenCustom: () => void;
}

// ── 1. TOUR CATEGORIES DATA ────────────────────────────────────────────────
const TOUR_CATEGORIES = [
  {
    title: "Tour Tuyến Miền Trung",
    badge: "Bán chạy nhất",
    desc: "Đà Nẵng – Phố cổ Hội An – Cố đô Huế – Đỉnh Bà Nà Hills – Cù Lao Chàm. Chương trình 2N1Đ, 3N2Đ, 4N3Đ trọn gói.",
    img: IMAGES.danang,
    tags: ["Đà Nẵng 3N2Đ", "Hội An 2N1Đ", "Bà Nà Hills 1 Ngày", "Huế 1 Ngày"],
  },
  {
    title: "Tour Biển Đảo & Miền Nam",
    badge: "Nghỉ dưỡng cao cấp",
    desc: "Phú Quốc, Nha Trang, Quy Nhơn, Côn Đảo. Kết hợp nghỉ dưỡng resort 4-5 sao sát biển và trải nghiệm lặn ngắm san hô.",
    img: IMAGES.phuquoc,
    tags: ["Phú Quốc 3N2Đ", "Quy Nhơn 3N2Đ", "Nha Trang 4N3Đ", "Resort Sát Biển"],
  },
  {
    title: "Tour Miền Bắc & Nâng Cao",
    badge: "Khám phá di sản",
    desc: "Sa Pa, Vịnh Hạ Long, Ninh Bình, Hà Giang. Trải nghiệm cảnh quan núi rừng hùng vĩ, ruộng bậc thang và di sản thiên nhiên.",
    img: IMAGES.sapa,
    tags: ["Sa Pa 3N2Đ", "Hạ Long 2N1Đ", "Ninh Bình 1 Ngày", "Hà Giang 4N3Đ"],
  },
  {
    title: "Tour Quốc Tế Nổi Bật",
    badge: "Hỗ trợ visa A-Z",
    desc: "Thái Lan, Hàn Quốc, Nhật Bản, Singapore - Malaysia. Hỗ trợ toàn bộ thủ tục visa, vé máy bay, lưu trú và HDV tiếng Việt.",
    img: IMAGES.thailand,
    tags: ["Thái Lan 5N4Đ", "Hàn Quốc 5N4Đ", "Nhật Bản 6N5Đ", "Singapore 4N3Đ"],
  },
];

// ── 2. TRANSPORT & VEHICLE FLEET DATA ─────────────────────────────────────
const VEHICLE_FLEET = [
  {
    type: "Xe 4 Chỗ (Sedan)",
    models: "Toyota Vios, Honda City, Camry",
    purpose: "Đưa đón sân bay Đà Nẵng, xe công tác, khách cá nhân & cặp đôi.",
    img: IMAGES.coastal,
  },
  {
    type: "Xe 7 Chỗ (SUV / MPV)",
    models: "Toyota Innova, Fortuner, Kia Carnival",
    purpose: "Phục vụ gia đình, nhóm bạn 4-6 người và chuyên gia công tác.",
    img: IMAGES.beachP,
  },
  {
    type: "Xe 16 Chỗ (Minibus)",
    models: "Ford Transit, Hyundai Solati đời mới",
    purpose: "Xe tour nhóm, đoàn gia đình lớn, xe hội nghị & sự kiện.",
    img: IMAGES.hoian,
  },
  {
    type: "Xe 29 – 45 Chỗ (Large Bus)",
    models: "Hyundai County, Thaco Town, Universe",
    purpose: "Đoàn du lịch đông người, tour công ty, trường học & tiệc cưới.",
    img: IMAGES.hue,
  },
  {
    type: "DCar Limousine VIP",
    models: "DCar VIP 9 chỗ, 16 chỗ cao cấp",
    purpose: "Đón tiếp đối tác VIP, khách hàng cao cấp & chuyến đi nghỉ dưỡng.",
    img: IMAGES.bana,
  },
];

// ── 3. ENTERPRISE MICE & TEAMBUILDING DATA ────────────────────────────────
const ENTERPRISE_SERVICES = [
  {
    title: "Du Lịch Thường Niên (Company Trip)",
    desc: "Lịch trình nghỉ dưỡng cân bằng giữa thư giãn và tham quan, gắn kết toàn bộ cán bộ nhân viên công ty.",
  },
  {
    title: "Team Building Bãi Biển",
    desc: "Tổ chức trò chơi vận động bãi biển (Biển Mỹ Khê, Cửa Đại), cung cấp đạo cụ, MC và quay phim chụp ảnh.",
  },
  {
    title: "Đêm Gala Dinner & Sân Khấu",
    desc: "Thiết kế kịch bản tiệc tối, cung cấp âm thanh, ánh sáng, màn hình LED, MC chuyên nghiệp và quà tặng.",
  },
  {
    title: "Hội Nghị, Hội Thảo (MICE)",
    desc: "Đặt phòng hội nghị tại khách sạn 4-5 sao, chuẩn bị teabreak, đón tiễn đại biểu và quà tặng sự kiện.",
  },
];

// ── 4. TICKETS & ACCOMMODATION DATA ───────────────────────────────────────
const SUPPORT_SERVICES_LIST = [
  {
    title: "Đặt Phòng Khách Sạn & Resort",
    desc: "Đại lý trực tiếp các hệ thống Khách sạn & Resort 3★ – 5★ sát biển Đà Nẵng, Phố cổ Hội An, Bà Nà Hills với giá ưu đãi hơn đặt trực tiếp.",
    img: IMAGES.beach,
    details: ["Khách sạn 3-5 sao biển Mỹ Khê", "Resort cao cấp Hội An & Lăng Cô", "Combo Phòng + Vé máy bay", "Hỗ trợ check-in sớm / muộn"],
  },
  {
    title: "Vé Tham Quan & Cáp Treo Giá Đại Lý",
    desc: "Cung cấp vé cáp treo Bà Nà Hills, Vé xem show Ký Ức Hội An, VinWonders Nam Hội An, Vé Núi Thần Tài không phải xếp hàng chờ đợi.",
    img: IMAGES.bana,
    details: ["Vé Cáp treo Bà Nà Hills + Buffet", "Vé Ký Ức Hội An hạng ECO/VIP", "Vé Công viên khoáng nóng Thần Tài", "Vé VinWonders & Cù Lao Chàm"],
  },
];

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenQuote,
  onOpenCustom,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    destination: "",
    date: "",
    guests: "",
    budget: "",
    note: "",
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenQuote();
  };

  return (
    <div
      className="min-h-screen bg-[#FAF9F5] text-[#111827]"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      {/* ── 1. HERO BANNER SANG TRỌNG (FULL-BLEED SUBMERGED HERO) ───────────────── */}
      <section className="relative w-full min-h-[520px] sm:min-h-[580px] overflow-hidden bg-[#1f2a1b] text-white pt-28 sm:pt-36 pb-16 flex items-center">
        <img
          src={IMAGES.hero}
          alt="Angel One Travel Đà Nẵng"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-black/65 backdrop-blur-xs" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/75" />

        <div className="relative z-10 max-w-[1320px] mx-auto px-5 md:px-10 w-full">
          <div className="max-w-3xl space-y-5 text-left">
            <span className="bg-white/15 backdrop-blur-md border border-white/25 text-white text-[11px] font-extrabold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full inline-block shadow-sm">
              DANH MỤC DỊCH VỤ CHÍNH THỨC
            </span>

            <h1 className="text-[clamp(32px,5vw,60px)] font-black text-white tracking-[-0.03em] leading-[1.08] uppercase">
              DỊCH VỤ DU LỊCH & VẬN TẢI TOÀN DIỆN
            </h1>

            <p
              className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed font-medium"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              Angel One Travel trực tiếp điều phối các chương trình Tour du lịch trọn gói, Đội xe vận tải 4–45 chỗ đời mới, Đặt phòng lưu trú resort và Tổ chức sự kiện doanh nghiệp tại Đà Nẵng & toàn miền Trung.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <button
                onClick={onOpenQuote}
                className="bg-[#43563A] hover:bg-[#34452F] text-white font-extrabold text-xs sm:text-sm px-8 py-4 rounded-full transition-all shadow-xl cursor-pointer inline-flex items-center gap-2.5 group"
              >
                <span>Nhận Tư Vấn & Báo Giá Nhất</span>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={14} />
                </div>
              </button>

              <button
                onClick={onOpenCustom}
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-extrabold text-xs sm:text-sm px-7 py-4 rounded-full transition-all cursor-pointer"
              >
                Thiết Kế Hành Trình Riêng
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. DỊCH VỤ 1: TOUR DU LỊCH TRỌN GÓI & THIẾT KẾ RIÊNG ───────────────── */}
      <section className="py-14 sm:py-24 max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-10 sm:mb-14 space-y-2">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#43563A]">
            MẢNG DỊCH VỤ 01
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#111827] tracking-tight">
            Tour Du Lịch Trọn Gói & Thiết Kế Theo Yêu Cầu
          </h2>
          <p
            className="text-xs sm:text-sm text-[#4B5563] max-w-2xl"
            style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
          >
            Chương trình linh hoạt theo số lượng khách, thời gian và ngân sách. Đã bao gồm xe đưa đón, khách sạn, ăn uống, vé tham quan và hướng dẫn viên.
          </p>
        </div>

        {/* 4 Large Photo Cards for Tours */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOUR_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden bg-black/10">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-[#43563A] text-white text-[10px] font-extrabold px-3 py-1 rounded-full">
                  {cat.badge}
                </span>
                <h3 className="absolute bottom-3 left-4 right-4 text-base font-black text-white">
                  {cat.title}
                </h3>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p
                  className="text-xs text-[#4B5563] leading-relaxed"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                  {cat.desc}
                </p>

                <div className="space-y-1.5 border-t border-[#F3F4F6] pt-3">
                  {cat.tags.map((tag) => (
                    <div key={tag} className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-[#43563A] flex-none" />
                      <span
                        className="text-xs font-semibold text-[#111827]"
                        style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                      >
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onNavigate("tours")}
                  className="mt-auto w-full bg-[#FAF9F5] hover:bg-[#43563A] text-[#111827] hover:text-white border border-[#E5E7EB] font-extrabold text-xs py-3 rounded-xl transition-all cursor-pointer inline-flex items-center justify-center gap-1.5 group/btn"
                >
                  <span>Xem lịch trình tour</span>
                  <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. DỊCH VỤ 2: VẬN TẢI & CHO THUÊ XE DU LỊCH 4–45 CHỖ (DARK SECTION) ─ */}
      <section className="py-14 sm:py-24 bg-[#111827] text-white">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-8">
            <div className="space-y-2">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#A3B89A]">
                MẢNG DỊCH VỤ 02
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                Vận Tải Du Lịch & Đội Xe Hợp Đồng 4–45 Chỗ
              </h2>
              <p
                className="text-xs sm:text-sm text-white/70 max-w-xl"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
              >
                Đội xe đời mới, tài xế bản địa lịch sự am hiểu tuyến điểm. Báo giá trọn gói bao gồm xăng xe, cầu đường, tài xế — Không chi phí ẩn.
              </p>
            </div>

            <button
              onClick={onOpenQuote}
              className="bg-[#43563A] hover:bg-[#34452F] text-white font-extrabold text-xs px-7 py-3.5 rounded-full transition-all cursor-pointer flex-none inline-flex items-center gap-2 group"
            >
              <span>Nhận Báo Giá Thuê Xe</span>
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Vehicle Fleet Cards Slider / Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VEHICLE_FLEET.map((car, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-3xl p-5 space-y-4 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-black/30">
                    <img
                      src={car.img}
                      alt={car.type}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2.5 left-3 text-[10px] font-bold bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-white">
                      {car.models}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-black text-lg text-white mb-1">{car.type}</h3>
                    <p
                      className="text-xs text-white/70 leading-relaxed"
                      style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                    >
                      {car.purpose}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-[#A3B89A] font-bold">Phạm vi: Đà Nẵng & Miền Trung</span>
                  <button
                    onClick={onOpenQuote}
                    className="font-extrabold text-white hover:text-[#A3B89A] transition-colors cursor-pointer"
                  >
                    Thuê dòng xe này →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. DỊCH VỤ 3: TỔ CHỨC SỰ KIỆN DOANH NGHIỆP (MICE & TEAM BUILDING) ──── */}
      <section className="py-14 sm:py-24 max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 space-y-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#43563A]">
                MẢNG DỊCH VỤ 03
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#111827] tracking-tight leading-tight">
                Dịch Vụ Doanh Nghiệp (MICE, Team Building & Gala)
              </h2>
              <p
                className="text-xs sm:text-sm text-[#4B5563] leading-relaxed"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
              >
                Đồng hành cùng doanh nghiệp xây dựng văn hóa đội ngũ qua các chuyến du lịch thường niên, hoạt động team building bãi biển náo nhiệt và tiệc Gala tri ân sang trọng.
              </p>
            </div>

            <div className="space-y-4">
              {ENTERPRISE_SERVICES.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#E5E7EB] rounded-2xl p-4.5 space-y-1 hover:border-[#43563A] transition-all shadow-xs"
                >
                  <h4 className="font-extrabold text-sm text-[#111827]">{item.title}</h4>
                  <p
                    className="text-xs text-[#6B7280] leading-relaxed"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="bg-[#43563A] hover:bg-[#34452F] text-white font-extrabold text-xs sm:text-sm px-8 py-4 rounded-full transition-all shadow-md cursor-pointer inline-flex items-center gap-2 group"
              >
                <span>Nhận Đề Xuất Kịch Bản Doanh Nghiệp</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Real Photo Grid for Enterprise */}
          <div className="grid grid-cols-2 gap-3.5">
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-md group">
              <img
                src={IMAGES.hoian}
                alt="Gala Dinner Doanh Nghiệp"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-xs font-extrabold text-white">
                Gala Dinner & Sân Khấu
              </span>
            </div>

            <div className="space-y-3.5">
              <div className="relative rounded-3xl overflow-hidden aspect-square shadow-md group">
                <img
                  src={IMAGES.hue}
                  alt="Team Building Bãi Biển"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-extrabold text-white">
                  Team Building Bãi Biển
                </span>
              </div>

              <div className="relative rounded-3xl overflow-hidden aspect-square shadow-md group">
                <img
                  src={IMAGES.bana}
                  alt="Hội Nghị MICE"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-extrabold text-white">
                  Hội Nghị & Đón VIP
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. DỊCH VỤ 4: ĐẶT PHÒNG KHÁCH SẠN & VÉ THAM QUAN GIA ĐẠI LÝ ────────── */}
      <section className="py-14 sm:py-24 bg-[#E5E7EB]/40">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 space-y-12">
          <div className="text-center space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#43563A]">
              MẢNG DỊCH VỤ 04
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#111827] tracking-tight">
              Hỗ Trợ Đặt Phòng Khách Sạn & Vé Tham Quan
            </h2>
            <p
              className="text-xs sm:text-sm text-[#4B5563] max-w-xl mx-auto"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              Sử dụng lẻ từng dịch vụ theo nhu cầu hoặc kết hợp trọn gói với giá đại lý chiết khấu trực tiếp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SUPPORT_SERVICES_LIST.map((srv, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E7EB] shadow-sm flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/9]">
                    <img
                      src={srv.img}
                      alt={srv.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="font-black text-xl text-[#111827]">{srv.title}</h3>
                  <p
                    className="text-xs sm:text-sm text-[#4B5563] leading-relaxed"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    {srv.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-2 border-t border-[#F3F4F6] pt-4">
                    {srv.details.map((d) => (
                      <div key={d} className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-[#43563A] flex-none" />
                        <span
                          className="text-xs text-[#374151] font-semibold"
                          style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                        >
                          {d}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenQuote}
                  className="w-full bg-[#43563A] hover:bg-[#34452F] text-white font-extrabold text-xs py-3.5 rounded-xl transition-all cursor-pointer"
                >
                  Yêu cầu dịch vụ này
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FORM ĐĂNG KÝ VÀ TƯ VẤN TRỰC TIẾP (CONVERSION SECTION) ───────────── */}
      <section className="py-14 sm:py-24 bg-[#1f2a1b] text-white relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Contact Details */}
            <div className="space-y-6">
              <div className="space-y-3">
                <span className="bg-white/15 border border-white/25 text-white text-[10px] font-extrabold uppercase tracking-[0.2em] px-3.5 py-1 rounded-full inline-block">
                  TƯ VẤN TRỰC TIẾP 24/7
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                  Bạn Cần Đặt Tour, Thuê Xe Hay Nhận Báo Giá Chi Tiết?
                </h2>
                <p
                  className="text-xs sm:text-sm text-white/80 leading-relaxed"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                  Đội ngũ Angel One Travel sẽ liên hệ lại trong 15 phút để giải đáp và gửi lịch trình kèm báo giá tốt nhất cho chuyến đi của bạn.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href="tel:0768643446"
                  className="flex items-center gap-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl px-5 py-4 transition-all cursor-pointer group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#43563A] text-white flex items-center justify-center flex-none">
                    <PhoneCall size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-white">Hotline tư vấn 24/7</div>
                    <div
                      className="text-xs text-white/70"
                      style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                    >
                      0768 643 446 (Tư vấn viên trực tuyến)
                    </div>
                  </div>
                  <ChevronRight size={16} className="ml-auto text-white/50 group-hover:translate-x-1 transition-transform" />
                </a>

                <div className="flex items-center gap-4 bg-white/10 border border-white/20 rounded-2xl px-5 py-4">
                  <div className="w-10 h-10 rounded-xl bg-[#43563A] text-white flex items-center justify-center flex-none">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-white">Nhắn tin Zalo Official</div>
                    <div
                      className="text-xs text-white/70"
                      style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                    >
                      Nhận bảng báo giá & hình ảnh xe trực tiếp
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Quote Request Form */}
            <form
              onSubmit={handleFormSubmit}
              className="bg-white text-[#111827] rounded-3xl p-6 sm:p-8 space-y-4 shadow-2xl"
            >
              <h3 className="font-black text-lg text-[#111827]">Nhận Phương Án & Báo Giá</h3>

              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2 sm:col-span-1">
                  <label className="text-[10px] font-extrabold text-[#374151] uppercase tracking-wider block mb-1">
                    Họ và tên *
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    placeholder="Nguyễn Văn A"
                    className="w-full text-sm border border-[#E5E7EB] rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#43563A] bg-[#FAF9F5]"
                  />
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label className="text-[10px] font-extrabold text-[#374151] uppercase tracking-wider block mb-1">
                    Số điện thoại *
                  </label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    required
                    placeholder="0768 643 446"
                    className="w-full text-sm border border-[#E5E7EB] rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#43563A] bg-[#FAF9F5]"
                  />
                </div>

                <div className="col-span-2">
                  <label className="text-[10px] font-extrabold text-[#374151] uppercase tracking-wider block mb-1">
                    Dịch vụ bạn quan tâm
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleFormChange}
                    className="w-full text-sm border border-[#E5E7EB] rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#43563A] bg-[#FAF9F5] text-[#374151]"
                  >
                    <option value="">Chọn dịch vụ...</option>
                    <option>Tour du lịch trọn gói / Tour riêng</option>
                    <option>Cho thuê xe du lịch 4–45 chỗ & Limousine</option>
                    <option>Dịch vụ Doanh nghiệp (MICE, Team Building)</option>
                    <option>Đặt phòng Khách sạn & Vé tham quan</option>
                  </select>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label className="text-[10px] font-extrabold text-[#374151] uppercase tracking-wider block mb-1">
                    Điểm đến dự kiến
                  </label>
                  <input
                    name="destination"
                    value={formData.destination}
                    onChange={handleFormChange}
                    placeholder="Đà Nẵng, Phú Quốc..."
                    className="w-full text-sm border border-[#E5E7EB] rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#43563A] bg-[#FAF9F5]"
                  />
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label className="text-[10px] font-extrabold text-[#374151] uppercase tracking-wider block mb-1">
                    Số lượng khách
                  </label>
                  <input
                    name="guests"
                    value={formData.guests}
                    onChange={handleFormChange}
                    placeholder="VD: 2 người, 15 người..."
                    className="w-full text-sm border border-[#E5E7EB] rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#43563A] bg-[#FAF9F5]"
                  />
                </div>

                <div className="col-span-2">
                  <label className="text-[10px] font-extrabold text-[#374151] uppercase tracking-wider block mb-1">
                    Ghi chú nhu cầu thêm
                  </label>
                  <textarea
                    name="note"
                    value={formData.note}
                    onChange={handleFormChange}
                    rows={2}
                    placeholder="Mô tả ngày dự kiến đi hoặc các yêu cầu riêng..."
                    className="w-full text-sm border border-[#E5E7EB] rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#43563A] bg-[#FAF9F5] resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#43563A] hover:bg-[#34452F] text-white font-extrabold text-sm py-3.5 rounded-xl transition-all cursor-pointer inline-flex items-center justify-center gap-2 group shadow-md"
              >
                <span>Nhận Đề Xuất & Báo Giá Chi Tiết</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
