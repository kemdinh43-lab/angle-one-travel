import React from "react";
import { Phone, MessageCircle, Send } from "lucide-react";

interface MobileBarProps {
  onOpenQuote: () => void;
}

export const MobileBar: React.FC<MobileBarProps> = ({ onOpenQuote }) => {
  return (
    <div
      className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-[#FAF9F5]/95 backdrop-blur-md border-t border-[#D9D8D0] px-4 py-2.5 shadow-lg"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href="tel:0768643446"
          className="flex-1 flex items-center justify-center gap-1.5 rounded-full border border-[#D9D8D0] bg-white py-2 text-xs font-semibold text-[#464A43] hover:text-[#43563A] hover:border-[#43563A] transition-colors"
        >
          <Phone size={13} className="text-[#43563A]" /> Gọi ngay
        </a>
        <a
          href="https://zalo.me/0768643446"
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 rounded-full border border-[#D9D8D0] bg-white py-2 text-xs font-semibold text-[#464A43] hover:text-[#43563A] hover:border-[#43563A] transition-colors"
        >
          <MessageCircle size={13} className="text-[#43563A]" /> Chat Zalo
        </a>
        <button
          onClick={onOpenQuote}
          className="flex-1 flex items-center justify-center gap-1.5 rounded-full bg-[#43563A] py-2 text-xs font-semibold text-white hover:bg-[#34452F] transition-colors shadow"
        >
          <Send size={12} /> Báo giá
        </button>
      </div>
    </div>
  );
};
