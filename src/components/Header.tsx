import React, { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

interface HeaderProps {
  currentView?: string;
  onNavigate?: (view: string) => void;
  onOpenQuote: () => void;
  logoUrl?: string;
  logoDesktopUrl?: string;
  logoMobileUrl?: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentView = "home",
  onNavigate,
  onOpenQuote,
  logoUrl,
  logoDesktopUrl,
  logoMobileUrl,
}) => {
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
    if (viewOrId === "blog" || viewOrId === "tours" || viewOrId === "about" || viewOrId === "destinations") {
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

  const hasLogoImage = logoDesktopUrl || logoMobileUrl || logoUrl;

  return (
    <header
      className={`transition-all duration-300 z-50 ${
        isScrolled
          ? "fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-md border-b border-white/10 shadow-lg text-white py-0"
          : "absolute top-0 left-0 right-0 bg-transparent border-b border-white/10 text-white"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-5 md:px-10 h-20 flex items-center justify-between">
        
        {/* LOGO LINK (Responsive Dual Logo: Square for Mobile, Horizontal for Desktop) */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (onNavigate) onNavigate("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2.5 cursor-pointer text-left group"
        >
          {hasLogoImage ? (
            <>
              {/* Mobile Logo (< lg) — horizontal logo */}
              <img
                src={logoMobileUrl || logoDesktopUrl || logoUrl}
                alt="Angel One Travel"
                className="block lg:hidden h-12 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform"
              />

              {/* Desktop Horizontal Logo (>= lg) */}
              <img
                src={logoDesktopUrl || logoMobileUrl || logoUrl}
                alt="Angel One Travel"
                className="hidden lg:block h-14 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform"
              />
            </>
          ) : (
            <>
              <div className="w-9 h-9 rounded-2xl bg-[#43563A] text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
                A
              </div>
              <div>
                <span className="font-extrabold text-base tracking-tight block leading-none text-white">
                  ANGEL ONE
                </span>
                <span className="text-[9px] uppercase tracking-widest font-semibold block leading-none mt-1 text-white/80">
                  TRAVEL - ĐÀ NẴNG
                </span>
              </div>
            </>
          )}
        </a>

        {/* DESKTOP NAVIGATION MENU (White / Submerged Light Typography Across Entire Site) */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/90">
          <a
            href="#tours"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("tours");
            }}
            className={`transition-colors cursor-pointer ${
              currentView === "tours"
                ? "text-white underline underline-offset-4 font-bold"
                : "hover:text-white"
            }`}
          >
            Tour du lịch
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("about");
            }}
            className={`transition-colors cursor-pointer ${
              currentView === "about"
                ? "text-white underline underline-offset-4 font-bold"
                : "hover:text-white"
            }`}
          >
            Về chúng tôi
          </a>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("services");
            }}
            className="transition-colors cursor-pointer hover:text-white"
          >
            Dịch vụ
          </a>
          <a
            href="#destinations"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("destinations");
            }}
            className={`transition-colors cursor-pointer ${
              currentView === "destinations"
                ? "text-white underline underline-offset-4 font-bold"
                : "hover:text-white"
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
            className={`transition-colors cursor-pointer ${
              currentView === "blog"
                ? "text-white underline underline-offset-4 font-bold"
                : "hover:text-white"
            }`}
          >
            Cẩm nang
          </a>
        </nav>

        {/* RIGHT ACTION BUTTONS (Submerged Dark Background Phone Badge + White Capsule Button) */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:0768643446"
            className="flex items-center gap-2 text-xs font-bold text-white hover:text-white/80 transition-colors"
          >
            <div className="w-7 h-7 rounded-full bg-white/20 text-white flex items-center justify-center backdrop-blur-md">
              <Phone size={13} />
            </div>
            <span>0768 643 446</span>
          </a>

          {/* White Capsule Quote Button matching reference screenshot */}
          <button
            onClick={onOpenQuote}
            className="text-xs font-extrabold px-6 py-2.5 rounded-full bg-white text-[#111827] hover:bg-white/90 transition-all duration-300 shadow cursor-pointer"
          >
            Nhận báo giá
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-white hover:text-white/80 transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#111827]/95 backdrop-blur-lg text-white border-b border-white/10 p-6 space-y-4 animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-3 font-medium text-sm text-white/90">
            <a href="#tours" onClick={() => handleNavClick("tours")} className="text-left py-1 hover:text-white">Tour du lịch</a>
            <a href="#about" onClick={() => handleNavClick("about")} className="text-left py-1 font-bold text-white">Về chúng tôi</a>
            <a href="#services" onClick={() => handleNavClick("services")} className="text-left py-1 hover:text-white">Dịch vụ</a>
            <a href="#destinations" onClick={() => handleNavClick("destinations")} className="text-left py-1 hover:text-white">Điểm đến</a>
            <a href="#blog" onClick={() => handleNavClick("blog")} className="text-left py-1 hover:text-white">Cẩm nang</a>
          </div>

          <div className="pt-3 border-t border-white/10 flex gap-3">
            <a
              href="tel:0768643446"
              className="flex-1 py-3 text-center border border-white/20 text-white rounded-full text-xs font-bold bg-white/10"
            >
              📞 0768 643 446
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="flex-1 py-3 text-center bg-white text-[#111827] rounded-full text-xs font-extrabold shadow"
            >
              Nhận báo giá ngay
            </button>
          </div>
        </div>
      )}

    </header>
  );
};
