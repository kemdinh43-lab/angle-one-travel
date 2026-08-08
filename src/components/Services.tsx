import React, { useState } from "react";
import { ArrowRight, Car, Hotel, Ticket, UserCheck, Coffee, Building2, CheckCircle } from "lucide-react";
import { SERVICES, IMAGES } from "../data/travelData";
import { ServiceItem } from "../types/travel";
import { useWordPressContent } from "../lib/wordpressContent";

interface ServicesProps {
  onOpenQuote: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenQuote }) => {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);
  const { services: wpServices } = useWordPressContent();
  const services =
    wpServices.length > 0
      ? [...wpServices, ...SERVICES.filter((service) => !wpServices.some((wpService) => wpService.slug === service.slug || wpService.id === service.id))]
      : SERVICES;
  const primaryService = services[0] ?? SERVICES[0];
  const serviceBackgrounds = [IMAGES.hoian, IMAGES.bana, IMAGES.hue, IMAGES.beachP];

  const secondaryServices = services.slice(1, 5).map((service, index) => ({
    ...service,
    bgImg: serviceBackgrounds[index] ?? IMAGES.hoian,
    isOliveDefault: index === 2,
  }));

  const getIcon = (iconName: string, className = "w-5 h-5") => {
    switch (iconName) {
      case "Car": return <Car className={className} />;
      case "Hotel": return <Hotel className={className} />;
      case "Ticket": return <Ticket className={className} />;
      case "UserCheck": return <UserCheck className={className} />;
      case "Coffee": return <Coffee className={className} />;
      case "Building2": return <Building2 className={className} />;
      default: return <Car className={className} />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FAF9F5]" style={{ fontFamily: "'Manrope', sans-serif" }}>
      <div className="max-w-[1320px] mx-auto px-5 md:px-10">
        
        {/* Title Row */}
        <div className="mb-12">
          <p className="text-xs text-[#787D75] uppercase tracking-widest mb-3 font-semibold">Dịch vụ & Trải nghiệm</p>
          <h2 className="text-[clamp(28px,4vw,52px)] font-extrabold text-[#22251F] tracking-[-0.02em] leading-tight">
            Tất cả những gì bạn cần<br className="hidden md:block" /> cho một chuyến đi hoàn hảo
          </h2>
        </div>

        {/* Stretched Grid Layout - Left card & Right 2x2 grid align top and bottom 100% perfectly */}
        <div className="grid lg:grid-cols-[1.15fr_1.85fr] gap-5 items-stretch">
          
          {/* Large Main Card (Left) - Stretches h-full to match exact height of right 2x2 grid */}
          <div
            onClick={onOpenQuote}
            className="relative rounded-3xl overflow-hidden bg-[#DDE3D6] cursor-pointer group shadow-md hover:shadow-xl transition-all duration-500 flex flex-col justify-between h-full min-h-[380px] lg:min-h-0 w-full"
          >
            <img
              src={IMAGES.danang}
              alt="Vận chuyển du lịch Đà Nẵng"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            
            <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-between h-full">
              <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                {getIcon(primaryService.iconName, "w-5 h-5")}
              </div>

              <div>
                <span className="text-[10px] sm:text-xs text-[#DDE3D6] uppercase tracking-widest font-semibold block mb-1">
                  Dịch vụ Angel One
                </span>
                <h3 className="text-white text-xl sm:text-2xl font-bold mb-2 tracking-tight">
                  {primaryService.title}
                </h3>
                <p
                  className="text-white/80 text-xs sm:text-sm mb-6 leading-relaxed line-clamp-2"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                  {primaryService.desc}
                </p>
                <button className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold bg-white text-[#43563A] group-hover:bg-[#FAF9F5] transition-colors shadow">
                  Nhận báo giá dịch vụ <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>

          {/* 4 Cards Grid (2x2) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full h-full">
            {secondaryServices.map((s) => {
              const isOlive = s.isOliveDefault;

              return (
                <div
                  key={s.id}
                  onClick={() => setActiveService(s)}
                  className={`group relative rounded-3xl p-6 cursor-pointer transition-all duration-500 hover:shadow-xl flex flex-col justify-between overflow-hidden h-full min-h-[220px] ${
                    isOlive
                      ? "bg-[#34452F] text-white border border-[#34452F]"
                      : "bg-white text-[#22251F] border border-[#D9D8D0] hover:border-[#43563A]"
                  }`}
                >
                  {/* Background Travel Image revealed smoothly on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
                    <img
                      src={s.bgImg}
                      alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35" />
                  </div>

                  {/* Content Overlay */}
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      <div
                        className={`w-10 h-10 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${
                          isOlive
                            ? "bg-white/15 text-white group-hover:bg-white/20"
                            : "bg-[#DDE3D6] text-[#43563A] group-hover:bg-white/20 group-hover:text-white group-hover:backdrop-blur-md"
                        }`}
                      >
                        {getIcon(s.iconName)}
                      </div>
                      <h3
                        className={`font-bold text-base sm:text-lg tracking-tight mb-2 transition-colors ${
                          isOlive ? "text-white" : "text-[#22251F] group-hover:text-white"
                        }`}
                      >
                        {s.title}
                      </h3>
                      <p
                        className={`text-xs sm:text-sm leading-relaxed line-clamp-3 transition-colors ${
                          isOlive ? "text-white/80" : "text-[#787D75] group-hover:text-white/85"
                        }`}
                        style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                      >
                        {s.desc}
                      </p>
                    </div>

                    <div
                      className={`pt-3 border-t flex items-center justify-between transition-colors ${
                        isOlive
                          ? "border-white/20"
                          : "border-[#D9D8D0] group-hover:border-white/20"
                      }`}
                    >
                      <span
                        className={`text-xs font-semibold transition-colors ${
                          isOlive ? "text-[#DDE3D6]" : "text-[#43563A] group-hover:text-white"
                        }`}
                      >
                        Xem chi tiết
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                          isOlive
                            ? "border-white/30 text-white group-hover:bg-white/20"
                            : "border-[#D9D8D0] group-hover:border-white/40 group-hover:bg-white/20 text-[#43563A] group-hover:text-white"
                        }`}
                      >
                        <ArrowRight size={13} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Service Detail Modal */}
        {activeService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-md bg-[#FAF9F5] rounded-3xl p-6 border border-[#D9D8D0] shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#DDE3D6] text-[#43563A] flex items-center justify-center">
                  {getIcon(activeService.iconName)}
                </div>
                <div>
                  <span className="text-[10px] text-[#787D75] uppercase tracking-widest font-semibold block">Dịch vụ Angel One</span>
                  <h3 className="text-xl font-bold text-[#22251F]">{activeService.title}</h3>
                </div>
              </div>

              <p className="text-sm text-[#464A43] leading-relaxed mb-4" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                {activeService.desc}
              </p>

              <div className="bg-white border border-[#D9D8D0] rounded-2xl p-4 mb-6 space-y-2">
                <p className="text-xs font-bold text-[#43563A] uppercase tracking-wider mb-1">Cam kết chất lượng:</p>
                {activeService.details.map((detail, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#464A43]">
                    <CheckCircle size={14} className="text-[#43563A]" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setActiveService(null)}
                  className="flex-1 py-2.5 border border-[#D9D8D0] text-[#464A43] rounded-full text-sm font-medium hover:bg-white cursor-pointer"
                >
                  Đóng
                </button>
                <button
                  onClick={() => {
                    setActiveService(null);
                    onOpenQuote();
                  }}
                  className="flex-1 py-2.5 bg-[#43563A] text-white rounded-full text-sm font-medium hover:bg-[#34452F] cursor-pointer shadow"
                >
                  Yêu cầu báo giá
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
