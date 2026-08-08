import React from "react";
import { MessageCircle, PhoneCall } from "lucide-react";

const CONTACT_NUMBER = "0966438227";

export const FloatingContactCtas: React.FC = () => {
  return (
    <div
      className="fixed bottom-5 right-4 md:bottom-7 md:right-7 z-[90] flex flex-col gap-2.5"
      style={{ fontFamily: "'Manrope', sans-serif" }}
      aria-label="Liên hệ nhanh Angel One Travel"
    >
      <a
        href={`tel:${CONTACT_NUMBER}`}
        aria-label={`Gọi hotline ${CONTACT_NUMBER}`}
        title={`Gọi hotline ${CONTACT_NUMBER}`}
        className="group flex h-12 w-12 items-center justify-center rounded-full bg-[#43563A] text-white shadow-[0_16px_35px_rgba(34,37,31,0.22)] ring-1 ring-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#34452F] hover:shadow-[0_18px_42px_rgba(34,37,31,0.28)] md:h-13 md:w-13"
      >
        <PhoneCall size={21} strokeWidth={2.35} />
      </a>

      <a
        href={`https://zalo.me/${CONTACT_NUMBER}`}
        target="_blank"
        rel="noreferrer"
        aria-label={`Chat Zalo ${CONTACT_NUMBER}`}
        title={`Chat Zalo ${CONTACT_NUMBER}`}
        className="group flex h-12 w-12 items-center justify-center rounded-full bg-[#0A75FF] text-white shadow-[0_16px_35px_rgba(10,117,255,0.24)] ring-1 ring-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#075ED0] hover:shadow-[0_18px_42px_rgba(10,117,255,0.3)] md:h-13 md:w-13"
      >
        <MessageCircle size={21} strokeWidth={2.35} />
      </a>
    </div>
  );
};
