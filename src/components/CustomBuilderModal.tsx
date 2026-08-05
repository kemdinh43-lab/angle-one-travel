import React, { useState } from "react";
import { X, Sparkles, ArrowRight, ArrowLeft, Check, Phone, Send } from "lucide-react";

interface CustomBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomBuilderModal: React.FC<CustomBuilderModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [selection, setSelection] = useState({
    destinations: ["Đà Nẵng", "Hội An"],
    duration: "3 Ngày 2 Đêm",
    style: "Gia đình & Thư giãn",
    hotelStar: "4 sao",
    name: "",
    phone: "",
    note: ""
  });

  if (!isOpen) return null;

  const toggleDestination = (dest: string) => {
    if (selection.destinations.includes(dest)) {
      setSelection({
        ...selection,
        destinations: selection.destinations.filter((d) => d !== dest)
      });
    } else {
      setSelection({
        ...selection,
        destinations: [...selection.destinations, dest]
      });
    }
  };

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#FAF9F5] border border-[#D9D8D0] rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        style={{ fontFamily: "'Manrope', sans-serif" }}>
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 bg-[#34452F] text-white">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#DDE3D6]/20 flex items-center justify-center text-[#DDE3D6]">
              <Sparkles size={16} />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#DDE3D6]">Thiết Kế Tour Riêng</span>
              <h3 className="text-lg font-bold">Xây dựng hành trình của bạn</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Progress Bar */}
        {!submitted && (
          <div className="w-full bg-[#D9D8D0] h-1">
            <div
              className="bg-[#43563A] h-1 transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        )}

        {/* Body */}
        <div className="p-6 sm:p-8 flex-1 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-[#DDE3D6] text-[#43563A] rounded-full flex items-center justify-center mx-auto">
                <Check size={36} />
              </div>
              <h4 className="text-2xl font-extrabold text-[#22251F]">Hành trình đã được khởi tạo!</h4>
              <p className="text-sm text-[#787D75] leading-relaxed max-w-md mx-auto" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                Angel One Travel đã ghi nhận thông tin thiết kế tour riêng cho <strong>{selection.name || "quý khách"}</strong>. Đội ngũ thiết kế hành trình sẽ gửi kịch bản tour & báo giá tốt nhất tới SĐT/Zalo <strong>{selection.phone}</strong>.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="w-full py-3 bg-[#43563A] text-white rounded-full font-medium hover:bg-[#34452F] transition-colors"
                >
                  Hoàn tất & Đóng
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* STEP 1: DESTINATION & DURATION */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-[#22251F] mb-1">Bước 1/3: Chọn những điểm đến bạn muốn ghé thăm</h4>
                    <p className="text-xs text-[#787D75]">Có thể chọn nhiều địa điểm trong cùng 1 hành trình</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-3">
                      {["Đà Nẵng", "Hội An", "Cố Đô Huế", "Quảng Bình", "Quy Nhơn", "Bà Nà Hills"].map((dest) => {
                        const active = selection.destinations.includes(dest);
                        return (
                          <button
                            key={dest}
                            type="button"
                            onClick={() => toggleDestination(dest)}
                            className={`p-3 rounded-2xl border text-sm font-medium transition-all text-left flex items-center justify-between ${
                              active
                                ? "bg-[#43563A] text-white border-[#43563A] shadow-sm"
                                : "bg-white text-[#464A43] border-[#D9D8D0] hover:border-[#9BA48F]"
                            }`}
                          >
                            <span>{dest}</span>
                            {active && <Check size={14} className="text-white" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-[#22251F] mb-2">Thời gian dự kiến</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {["2 Ngày 1 Đêm", "3 Ngày 2 Đêm", "4 Ngày 3 Đêm"].map((dur) => (
                        <button
                          key={dur}
                          type="button"
                          onClick={() => setSelection({ ...selection, duration: dur })}
                          className={`py-2.5 px-3 rounded-xl border text-xs font-medium transition-all text-center ${
                            selection.duration === dur
                              ? "bg-[#43563A] text-white border-[#43563A]"
                              : "bg-white text-[#464A43] border-[#D9D8D0] hover:border-[#9BA48F]"
                          }`}
                        >
                          {dur}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      onClick={() => setStep(2)}
                      className="px-6 py-3 bg-[#43563A] text-white rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#34452F] transition-colors"
                    >
                      Tiếp theo <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: STYLE & HOTEL */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-[#22251F] mb-2">Bước 2/3: Phong cách chuyến đi của bạn</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "Gia đình & Thư giãn",
                        "Khám phá & Trải nghiệm",
                        "Nghỉ dưỡng cao cấp",
                        "Team building / Doanh nghiệp"
                      ].map((st) => (
                        <button
                          key={st}
                          type="button"
                          onClick={() => setSelection({ ...selection, style: st })}
                          className={`p-3.5 rounded-2xl border text-xs font-medium transition-all text-left ${
                            selection.style === st
                              ? "bg-[#43563A] text-white border-[#43563A]"
                              : "bg-white text-[#464A43] border-[#D9D8D0] hover:border-[#9BA48F]"
                          }`}
                        >
                          {st}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-[#22251F] mb-2">Tiêu chuẩn khách sạn mong muốn</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {["3 Sao Tiêu Chuẩn", "4 Sao Sang Trọng", "5 Sao & Resort"].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setSelection({ ...selection, hotelStar: star })}
                          className={`py-2.5 px-3 rounded-xl border text-xs font-medium transition-all text-center ${
                            selection.hotelStar === star
                              ? "bg-[#43563A] text-white border-[#43563A]"
                              : "bg-white text-[#464A43] border-[#D9D8D0] hover:border-[#9BA48F]"
                          }`}
                        >
                          {star}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      onClick={() => setStep(1)}
                      className="px-5 py-3 border border-[#D9D8D0] text-[#464A43] rounded-full text-sm font-medium flex items-center gap-2 hover:bg-white"
                    >
                      <ArrowLeft size={14} /> Quay lại
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="px-6 py-3 bg-[#43563A] text-white rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#34452F] transition-colors"
                    >
                      Tiếp theo <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: CONTACT & FINISH */}
              {step === 3 && (
                <form onSubmit={handleFinish} className="space-y-4">
                  <h4 className="text-sm font-bold text-[#22251F]">Bước 3/3: Thông tin nhận bản lịch trình mẫu & Báo giá</h4>

                  <div className="bg-white border border-[#D9D8D0] rounded-2xl p-4 text-xs text-[#464A43] space-y-1.5">
                    <div className="font-bold text-[#43563A] text-sm mb-1">Tóm tắt yêu cầu:</div>
                    <p>• <strong>Điểm đến:</strong> {selection.destinations.join(", ")}</p>
                    <p>• <strong>Thời lượng:</strong> {selection.duration}</p>
                    <p>• <strong>Phong cách:</strong> {selection.style}</p>
                    <p>• <strong>Khách sạn:</strong> {selection.hotelStar}</p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#464A43] uppercase mb-1">Họ và tên *</label>
                    <input
                      required
                      type="text"
                      placeholder="Nguyễn Văn A"
                      value={selection.name}
                      onChange={(e) => setSelection({ ...selection, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-[#D9D8D0] rounded-xl text-sm outline-none focus:border-[#43563A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#464A43] uppercase mb-1">Số điện thoại / Zalo *</label>
                    <div className="relative">
                      <Phone size={14} className="absolute left-3.5 top-3 text-[#787D75]" />
                      <input
                        required
                        type="tel"
                        placeholder="0768 643 446"
                        value={selection.phone}
                        onChange={(e) => setSelection({ ...selection, phone: e.target.value })}
                        className="w-full pl-9 pr-4 py-2.5 bg-white border border-[#D9D8D0] rounded-xl text-sm outline-none focus:border-[#43563A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#464A43] uppercase mb-1">Ghi chú riêng</label>
                    <textarea
                      rows={2}
                      placeholder="Yêu cầu có trẻ em, ăn chay, đón sân bay..."
                      value={selection.note}
                      onChange={(e) => setSelection({ ...selection, note: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-[#D9D8D0] rounded-xl text-sm outline-none focus:border-[#43563A] resize-none"
                    ></textarea>
                  </div>

                  <div className="flex justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-3 border border-[#D9D8D0] text-[#464A43] rounded-full text-sm font-medium flex items-center gap-2 hover:bg-white"
                    >
                      <ArrowLeft size={14} /> Quay lại
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-[#43563A] text-white rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-[#34452F] transition-colors shadow-md"
                    >
                      <Send size={14} /> Hoàn tất & Gửi kịch bản
                    </button>
                  </div>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
