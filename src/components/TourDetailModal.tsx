import React from "react";
import { X, Clock, Check, Star, ArrowRight, ShieldCheck, PhoneCall } from "lucide-react";
import { Tour } from "../types/travel";

interface TourDetailModalProps {
  tour: Tour | null;
  onClose: () => void;
  onBookNow: (tour: Tour) => void;
}

export const TourDetailModal: React.FC<TourDetailModalProps> = ({ tour, onClose, onBookNow }) => {
  if (!tour) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#FAF9F5] border border-[#D9D8D0] rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        style={{ fontFamily: "'Manrope', sans-serif" }}>
        
        {/* Top Banner */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden flex-shrink-0">
          <img src={tour.img} alt={tour.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/60 transition-colors z-10"
          >
            <X size={18} />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#43563A] text-white text-xs font-semibold px-3 py-1 rounded-full">
                {tour.type}
              </span>
              <span className="bg-white/20 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                <Clock size={12} /> {tour.days}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{tour.name}</h2>
            <p className="text-white/80 text-sm mt-1">{tour.price}</p>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Description */}
          <div>
            <h4 className="text-xs font-bold text-[#787D75] uppercase tracking-widest mb-2">Giới thiệu hành trình</h4>
            <p className="text-[#22251F] text-base leading-relaxed" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              {tour.description}
            </p>
          </div>

          {/* Highlights */}
          <div className="bg-white border border-[#D9D8D0] rounded-2xl p-5">
            <h4 className="text-sm font-bold text-[#43563A] mb-3 flex items-center gap-2">
              <Star size={16} fill="#43563A" /> Điểm nổi bật trong tour
            </h4>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {tour.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-[#464A43]">
                  <Check size={16} className="text-[#43563A] mt-0.5 flex-shrink-0" />
                  <span style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Day-by-Day Itinerary */}
          <div>
            <h4 className="text-xs font-bold text-[#787D75] uppercase tracking-widest mb-4">Lịch trình chi tiết</h4>
            <div className="space-y-4 border-l-2 border-[#DDE3D6] pl-4 sm:pl-6 ml-2">
              {tour.itinerary.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[23px] sm:-left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[#43563A] border-2 border-white" />
                  <span className="text-xs font-bold text-[#43563A] uppercase tracking-wider block mb-0.5">{step.day}</span>
                  <h5 className="font-bold text-[#22251F] text-base mb-1">{step.title}</h5>
                  <p className="text-sm text-[#787D75] leading-relaxed" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions */}
          <div className="bg-[#DDE3D6]/30 rounded-2xl p-5">
            <h4 className="text-sm font-bold text-[#22251F] mb-3 flex items-center gap-2">
              <ShieldCheck size={16} className="text-[#43563A]" /> Dịch vụ đã bao gồm
            </h4>
            <div className="grid sm:grid-cols-2 gap-2 text-xs text-[#464A43]">
              {tour.inclusions.map((inc, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#43563A]" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-white border-t border-[#D9D8D0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-[#787D75] block">Giá trọn gói từ</span>
            <span className="text-xl font-extrabold text-[#43563A]">{tour.price}</span>
          </div>

          <div className="flex gap-3 w-full sm:w-auto">
            <a
              href="tel:0768643446"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-[#D9D8D0] text-sm font-medium text-[#464A43] hover:border-[#43563A] transition-colors"
            >
              <PhoneCall size={14} /> Tư vấn trực tiếp
            </a>
            <button
              onClick={() => {
                onClose();
                onBookNow(tour);
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#43563A] text-white text-sm font-medium hover:bg-[#34452F] transition-colors shadow-md"
            >
              Đặt tour này <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
