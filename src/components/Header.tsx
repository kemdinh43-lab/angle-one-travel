import React, { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

interface HeaderProps {
  currentView?: string;
  onNavigate?: (view: string) => void;
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView = "home", onNavigate, onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (viewOrId: string) => {
    setIsMobileMenuOpen(false);
    if (viewOrId === "blog" || viewOrId === "tours") {
      if (onNavigate) {
        onNavigate(viewOrId);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      if (currentView !== "home" && onNavigate) {
        onNavigate("home");
        setTimeout(() => {
          const el = document.getElementById(viewOrId);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const el = document.getElementById(viewOrId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`transition-all duration-300 z-50 ${
        isScrolled
          ? "fixed top-0 left-0 right-0 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-[#D9D8D0]/80 shadow-sm py-0 text-[#22251F]"
          : "absolute top-0 left-0 right-0 bg-transparent border-b border-white/10 text-white"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-5 md:px-10 h-20 flex items-center justify-between">
        
        {/* LOGO TEXT (Clean Minimalist Typography - ANGEL ONE TRAVEL ĐÀ NẴNG) */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (onNavigate) onNavigate("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 cursor-pointer text-left group"
        >
          <div className="w-9 h-9 rounded-2xl bg-[#43563A] text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
            A
          </div>
          <div>
            <span
              className={`font-extrabold text-base tracking-tight block leading-none transition-colors ${
                isScrolled ? "text-[#22251F]" : "text-white"
              }`}
            >
              ANGEL ONE
            </span>
            <span
              className={`text-[9px] uppercase tracking-widest font-semibold block leading-none mt-1 transition-colors ${
                isScrolled ? "text-[#787D75]" : "text-white/80"
              }`}
            >
              TRAVEL - ĐÀ NẴNG
            </span>
          </div>
        </a>

        {/* DESKTOP NAVIGATION MENU */}
        <nav
          className={`hidden lg:flex items-center gap-8 text-sm font-medium transition-colors ${
            isScrolled ? "text-[#464A43]" : "text-white/90"
          }`}
        >
          <a
            href="#tours"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("tours");
            }}
            className={`transition-colors cursor-pointer ${
              isScrolled ? "hover:text-[#43563A]" : "hover:text-white"
            }`}
          >
            Tour du lịch
          </a>
          <a
            href="#custom"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("custom");
            }}
            className={`transition-colors cursor-pointer ${
              isScrolled ? "hover:text-[#43563A]" : "hover:text-white"
            }`}
          >
            Tour riêng
          </a>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("services");
            }}
            className={`transition-colors cursor-pointer ${
              isScrolled ? "hover:text-[#43563A]" : "hover:text-white"
            }`}
          >
            Dịch vụ
          </a>
          <a
            href="#corporate"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("corporate");
            }}
            className={`transition-colors cursor-pointer ${
              isScrolled ? "hover:text-[#43563A]" : "hover:text-white"
            }`}
          >
            Doanh nghiệp
          </a>
          <a
            href="#destinations"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("destinations");
            }}
            className={`transition-colors cursor-pointer ${
              isScrolled ? "hover:text-[#43563A]" : "hover:text-white"
            }`}
          >
            Điểm đến
          </a>
          <a
            href="#blog"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("blog");
            }}
            className={`transition-colors cursor-pointer font-bold ${
              currentView === "blog" && !isScrolled
                ? "text-white underline underline-offset-4"
                : currentView === "blog" && isScrolled
                ? "text-[#43563A]"
                : isScrolled
                ? "hover:text-[#43563A]"
                : "hover:text-white"
            }`}
          >
            Cẩm nang
          </a>
        </nav>

        {/* RIGHT ACTION BUTTONS */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:0768643446"
            className={`flex items-center gap-2 text-xs font-bold transition-colors ${
              isScrolled ? "text-[#22251F]" : "text-white"
            }`}
          >
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                isScrolled ? "bg-[#DDE3D6] text-[#43563A]" : "bg-white/20 text-white backdrop-blur-md"
              }`}
            >
              <Phone size={13} />
            </div>
            <span>0768 643 446</span>
          </a>

          {/* White Capsule Quote Button */}
          <button
            onClick={onOpenQuote}
            className={`text-xs font-extrabold px-6 py-2.5 rounded-full transition-all duration-300 shadow cursor-pointer ${
              isScrolled
                ? "bg-[#43563A] text-white hover:bg-[#34452F]"
                : "bg-white text-[#22251F] hover:bg-white/90"
            }`}
          >
            Nhận báo giá
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 transition-colors cursor-pointer ${
            isScrolled ? "text-[#22251F]" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white text-[#22251F] border-b border-[#D9D8D0] p-6 space-y-4 animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-3 font-medium text-sm text-[#464A43]">
            <a href="#tours" onClick={() => handleNavClick("tours")} className="text-left py-1 hover:text-[#43563A]">Tour du lịch</a>
            <a href="#custom" onClick={() => handleNavClick("custom")} className="text-left py-1 hover:text-[#43563A]">Tour riêng</a>
            <a href="#services" onClick={() => handleNavClick("services")} className="text-left py-1 hover:text-[#43563A]">Dịch vụ</a>
            <a href="#destinations" onClick={() => handleNavClick("destinations")} className="text-left py-1 hover:text-[#43563A]">Điểm đến</a>
            <a href="#blog" onClick={() => handleNavClick("blog")} className="text-left py-1 font-bold text-[#43563A]">Cẩm nang & Blog</a>
          </div>

          <div className="pt-3 border-t border-[#D9D8D0] flex gap-3">
            <a
              href="tel:0768643446"
              className="flex-1 py-3 text-center border border-[#D9D8D0] text-[#43563A] rounded-full text-xs font-bold"
            >
              📞 0768 643 446
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="flex-1 py-3 text-center bg-[#43563A] text-white rounded-full text-xs font-bold shadow"
            >
              Nhận báo giá ngay
            </button>
          </div>
        </div>
      )}

    </header>
  );
};
