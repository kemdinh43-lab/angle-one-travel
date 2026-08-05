import React, { useState } from "react";
import { Send, Facebook, Instagram, Youtube, CheckCircle2 } from "lucide-react";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const cols = {
    "Tour nổi bật": ["Tour Đà Nẵng – Hội An", "Tour Đà Nẵng – Huế", "Tour Quảng Bình 3N2Đ", "Tour Quy Nhơn Biển Xanh"],
    "Dịch vụ du lịch": ["Cho thuê xe du lịch", "Đặt phòng khách sạn", "Vé tham quan Bà Nà", "Hướng dẫn viên du lịch"],
    "Doanh nghiệp": ["Tour đoàn công ty", "Team building bãi biển", "Tổ chức Gala Dinner", "Hội nghị MICE"],
    "Hỗ trợ khách hàng": ["Cẩm nang du lịch", "Điều khoản dịch vụ", "Chính sách bảo mật", "Liên hệ tư vấn"],
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#F4F1E9] border-t border-[#D9D8D0]" style={{ fontFamily: "'Manrope', sans-serif" }}>
      {/* Newsletter Strip */}
      <div className="border-b border-[#D9D8D0]">
        <div className="max-w-[1320px] mx-auto px-5 md:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-[#22251F] text-base">Đăng ký nhận cẩm nang & Ưu đãi tour mới nhất</h4>
            <p className="text-xs text-[#787D75]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              Nhận thông tin khuyến mãi giảm giá 10-20% vé & tour hàng tháng.
            </p>
          </div>

          {subscribed ? (
            <div className="flex items-center gap-2 text-xs font-bold text-[#43563A] bg-[#DDE3D6] px-4 py-2.5 rounded-full">
              <CheckCircle2 size={16} /> Đã đăng ký thành công!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2 w-full sm:w-auto">
              <input
                required
                type="email"
                placeholder="Email của bạn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 sm:w-64 rounded-full border border-[#D9D8D0] bg-white px-5 py-2.5 text-sm outline-none focus:border-[#43563A] text-[#22251F]"
              />
              <button
                type="submit"
                aria-label="Đăng ký tin tức"
                className="w-10 h-10 rounded-full bg-[#43563A] flex items-center justify-center text-white hover:bg-[#34452F] transition-colors flex-shrink-0 cursor-pointer"
              >
                <Send size={15} />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-[1320px] mx-auto px-5 md:px-10 py-14">
        <div className="grid grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr_1fr_1fr] gap-8">
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-[#43563A] flex items-center justify-center text-white font-black text-xs shadow-2xs">
                A
              </div>
              <div>
                <div className="font-extrabold text-[#22251F] text-sm tracking-tight">ANGEL ONE TRAVEL</div>
                <div className="text-[#787D75] text-[9px] tracking-widest uppercase">Đà Nẵng · Việt Nam</div>
              </div>
            </div>

            <p className="text-xs text-[#787D75] leading-relaxed mb-2" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              111/3 Nguyễn Công Trứ, Phường An Hải,<br />TP. Đà Nẵng, Việt Nam
            </p>
            <p className="text-[11px] text-[#9BA48F] mb-3">Mã số thuế: 0402198423</p>
            <p className="text-sm font-bold text-[#43563A] mb-4">Hotline: 0768 643 446</p>

            <div className="flex gap-2">
              {[
                { icon: <Facebook size={14} />, href: "#" },
                { icon: <Instagram size={14} />, href: "#" },
                { icon: <Youtube size={14} />, href: "#" },
              ].map((ic, i) => (
                <a
                  key={i}
                  href={ic.href}
                  className="w-8 h-8 rounded-full border border-[#D9D8D0] bg-white flex items-center justify-center text-[#787D75] hover:text-[#43563A] hover:border-[#43563A] transition-colors"
                >
                  {ic.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          {Object.entries(cols).map(([section, items]) => (
            <div key={section}>
              <h4 className="font-bold text-[#22251F] text-sm mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#tours"
                      className="text-xs text-[#787D75] hover:text-[#43563A] transition-colors"
                      style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-[#D9D8D0] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#9BA48F]">© 2026 Angel One Travel. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-[#9BA48F] hover:text-[#43563A] transition-colors">Chính sách bảo mật</a>
            <a href="#" className="text-xs text-[#9BA48F] hover:text-[#43563A] transition-colors">Điều khoản dịch vụ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
