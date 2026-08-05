import React, { useState } from "react";
import { X, Send, CheckCircle2, Phone, Calendar, Users, MapPin } from "lucide-react";
import { Tour } from "../types/travel";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTour?: Tour | null;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, selectedTour }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    destination: selectedTour ? selectedTour.name : "Đà Nẵng – Hội An",
    date: "",
    guests: "2-4 người",
    note: ""
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 3 seconds
    }, 3000);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#FAF9F5] border border-[#D9D8D0] rounded-3xl shadow-2xl overflow-hidden"
        style={{ fontFamily: "'Manrope', sans-serif" }}>
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 bg-[#43563A] text-white">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#DDE3D6]">Angel One Travel</span>
            <h3 className="text-lg font-bold">
              {selectedTour ? `Nhận báo giá: ${selectedTour.name}` : "Yêu cầu báo giá & Tư vấn tour"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#DDE3D6] text-[#43563A] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 size={36} />
            </div>
            <h4 className="text-xl font-extrabold text-[#22251F]">Gửi yêu cầu thành công!</h4>
            <p className="text-sm text-[#787D75] leading-relaxed" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              Cảm ơn <strong>{formData.name || "bạn"}</strong> đã liên hệ. Chuyên viên Angel One Travel sẽ gọi điện báo giá chi tiết qua số <strong>{formData.phone}</strong> trong vòng 15 phút!
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="w-full py-3 bg-[#43563A] text-white rounded-full font-medium hover:bg-[#34452F] transition-colors"
              >
                Đóng cửa sổ
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#464A43] uppercase mb-1">Họ và tên *</label>
              <input
                required
                type="text"
                placeholder="Ví dụ: Nguyễn Văn A"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 bg-white border border-[#D9D8D0] rounded-xl text-sm outline-none focus:border-[#43563A]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#464A43] uppercase mb-1">Số điện thoại / Zalo *</label>
                <div className="relative">
                  <Phone size={14} className="absolute left-3.5 top-3 text-[#787D75]" />
                  <input
                    required
                    type="tel"
                    placeholder="0768 643 446"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-9 pr-4 py-2.5 bg-white border border-[#D9D8D0] rounded-xl text-sm outline-none focus:border-[#43563A]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#464A43] uppercase mb-1">Email</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white border border-[#D9D8D0] rounded-xl text-sm outline-none focus:border-[#43563A]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#464A43] uppercase mb-1">Dự kiến khởi hành</label>
                <div className="relative">
                  <Calendar size={14} className="absolute left-3.5 top-3 text-[#787D75]" />
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#D9D8D0] rounded-xl text-sm outline-none focus:border-[#43563A]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#464A43] uppercase mb-1">Số lượng khách</label>
                <div className="relative">
                  <Users size={14} className="absolute left-3.5 top-3 text-[#787D75]" />
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#D9D8D0] rounded-xl text-sm outline-none focus:border-[#43563A] appearance-none"
                  >
                    <option value="1 người">1 người (Cá nhân)</option>
                    <option value="2-4 người">2 - 4 người (Gia đình)</option>
                    <option value="5-10 người">5 - 10 người (Nhóm nhỏ)</option>
                    <option value=">10 người">Trên 10 người (Đoàn thể)</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#464A43] uppercase mb-1">Hành trình mong muốn</label>
              <div className="relative">
                <MapPin size={14} className="absolute left-3.5 top-3 text-[#787D75]" />
                <input
                  type="text"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full pl-9 pr-4 py-2.5 bg-white border border-[#D9D8D0] rounded-xl text-sm outline-none focus:border-[#43563A]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#464A43] uppercase mb-1">Ghi chú thêm</label>
              <textarea
                rows={2}
                placeholder="Yêu cầu xe riêng, khách sạn 4 sao, ăn chay..."
                value={formData.note}
                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                className="w-full px-4 py-2.5 bg-white border border-[#D9D8D0] rounded-xl text-sm outline-none focus:border-[#43563A] resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#43563A] text-white font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-[#34452F] transition-all shadow-md mt-2"
            >
              <Send size={15} /> Gửi yêu cầu ngay
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
