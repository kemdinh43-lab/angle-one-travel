import React from "react";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "../data/travelData";

interface NeedPickerProps {
  onOpenQuote: () => void;
  onOpenCustom: () => void;
}

export const NeedPicker: React.FC<NeedPickerProps> = ({ onOpenQuote, onOpenCustom }) => {
  const cards = [
    {
      n: "01",
      title: "Chọn tour có sẵn",
      desc: "Tour trọn gói lịch trình tối ưu, chi phí minh bạch, dễ dàng lựa chọn và khởi hành nhanh chóng.",
      img: IMAGES.danang,
      cta: "Xem danh sách tour",
      action: onOpenQuote,
    },
    {
      n: "02",
      title: "Thiết kế tour riêng",
      desc: "Bạn đưa ra ý tưởng và sở thích, Angel One Travel lên kịch bản chi tiết chuẩn từng cá nhân.",
      img: IMAGES.hoian,
      cta: "Bắt đầu thiết kế",
      action: onOpenCustom,
    },
    {
      n: "03",
      title: "Đặt dịch vụ riêng lẻ",
      desc: "Xe du lịch, phòng khách sạn, vé tham quan các điểm du lịch & hướng dẫn viên theo yêu cầu.",
      img: IMAGES.beach,
      cta: "Nhận báo giá xe/phòng",
      action: onOpenQuote,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAF9F5]" style={{ fontFamily: "'Manrope', sans-serif" }}>
      <div className="max-w-[1320px] mx-auto px-5 md:px-10">
        <div className="mb-12">
          <p className="text-xs text-[#787D75] uppercase tracking-widest mb-3 font-semibold">Nhu cầu của bạn</p>
          <h2 className="text-[clamp(28px,4vw,52px)] font-extrabold text-[#22251F] tracking-[-0.02em] leading-tight">
            Chọn hình thức du lịch phù hợp
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div
              key={i}
              onClick={c.action}
              className="relative group rounded-3xl overflow-hidden cursor-pointer bg-[#DDE3D6] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-end"
              style={{ minHeight: 400 }}
            >
              <img
                src={c.img}
                alt={c.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

              <div className="relative z-10 p-7 flex flex-col justify-between h-full">
                <span className="font-mono text-sm text-[#DDE3D6] font-bold">{c.n}</span>
                <div>
                  <h3 className="text-white text-2xl font-bold tracking-tight mb-2">{c.title}</h3>
                  <p
                    className="text-white/80 text-sm mb-6 max-w-xs leading-relaxed"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    {c.desc}
                  </p>
                  <button className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold bg-white text-[#43563A] group-hover:bg-[#FAF9F5] transition-colors">
                    {c.cta} <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
