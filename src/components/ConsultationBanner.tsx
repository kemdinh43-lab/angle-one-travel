import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { IMAGES } from "../data/travelData";

export const ConsultationBanner: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#243120] text-white py-14 sm:py-16" style={{ fontFamily: "'Manrope', sans-serif" }}>
      {/* Panoramic Landscape Background */}
      <img
        src={IMAGES.hero}
        alt="Tư vấn du lịch Đà Nẵng"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/75" />

      {/* Main Container */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-center justify-between">
          
          {/* Left Text */}
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#DDE3D6] font-semibold block">
              Tư vấn 24/7 từ chuyên viên
            </span>
            <h2 className="text-[clamp(24px,3.2vw,42px)] font-extrabold text-white tracking-[-0.02em] leading-tight">
              Gửi yêu cầu nhận tư vấn miễn phí
            </h2>
            <p
              className="text-white/80 text-xs sm:text-sm max-w-lg leading-relaxed"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              Để lại thông tin, đội ngũ Angel One Travel sẽ liên hệ tư vấn hành trình và gửi báo giá ưu đãi nhất trong 15 phút!
            </p>
          </div>

          {/* Right Quick Consultation Form (Matching Reference Image) */}
          <div>
            {submitted ? (
              <div className="bg-black/40 backdrop-blur-md border border-white/30 rounded-3xl p-6 text-center space-y-2 shadow-xl animate-in fade-in">
                <div className="w-10 h-10 bg-[#DDE3D6] text-[#43563A] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={22} />
                </div>
                <h4 className="font-bold text-base text-white">Yêu cầu đã được gửi!</h4>
                <p className="text-xs text-white/80" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                  Cảm ơn <strong>{name}</strong>! Chuyên viên tư vấn sẽ gọi đến SĐT <strong>{phone}</strong> ngay.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-sm ml-auto w-full">
                {/* Name Input */}
                <input
                  required
                  type="text"
                  placeholder="Họ và tên của bạn"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/10 backdrop-blur-md border border-white/40 rounded-full px-5 py-3 text-xs sm:text-sm text-white placeholder:text-white/70 outline-none focus:border-white focus:bg-white/20 transition-all shadow-inner"
                />

                {/* Number Input */}
                <input
                  required
                  type="tel"
                  placeholder="Số điện thoại / Zalo"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white/10 backdrop-blur-md border border-white/40 rounded-full px-5 py-3 text-xs sm:text-sm text-white placeholder:text-white/70 outline-none focus:border-white focus:bg-white/20 transition-all shadow-inner"
                />

                {/* Send Button */}
                <button
                  type="submit"
                  className="w-full bg-[#43563A] hover:bg-[#34452F] text-white rounded-full py-3 px-6 text-xs sm:text-sm font-bold transition-all duration-300 shadow-xl cursor-pointer flex items-center justify-center gap-2 mt-1"
                >
                  <span>Gửi yêu cầu ngay</span>
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
