import React from "react";

export const WhyUs: React.FC = () => {
  const values = [
    {
      n: "01",
      h: "Tư vấn đúng nhu cầu thực tế",
      d: "Lắng nghe mong muốn của từng khách hàng để tư vấn phương án di chuyển và thời gian hợp lý nhất, không ép tour có sẵn.",
    },
    {
      n: "02",
      h: "Minh bạch giá cả & Không phí ẩn",
      d: "Mọi khoản chi phí từ xe, vé, ăn uống đến khách sạn đều được niêm yết rõ ràng. Không phát sinh ngoài hợp đồng.",
    },
    {
      n: "03",
      h: "Linh hoạt lịch trình & Dịch vụ",
      d: "Sẵn sàng điều chỉnh thứ tự tham quan hay thời gian dừng chân tùy theo sức khỏe và sở thích thực tế của đoàn.",
    },
    {
      n: "04",
      h: "Đồng hành 24/7 suốt hành trình",
      d: "Đội ngũ điều hành và tư vấn viên luôn giữ liên lạc hỗ trợ tức thì mọi vấn đề phát sinh trong suốt chuyến đi.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-y border-[#D9D8D0]" style={{ fontFamily: "'Manrope', sans-serif" }}>
      <div className="max-w-[1320px] mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-[260px_1fr] gap-10 lg:gap-20 items-start">
          <div>
            <span className="inline-block border border-[#D9D8D0] rounded-full px-4 py-1.5 text-xs text-[#787D75] tracking-widest uppercase font-semibold mb-3">
              Vì sao chọn chúng tôi
            </span>
            <h2 className="text-[clamp(26px,3vw,40px)] font-extrabold text-[#22251F] tracking-[-0.02em] leading-tight">
              Sự khác biệt của Angel One Travel
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {values.map((v) => (
              <div
                key={v.n}
                className="border border-[#D9D8D0] rounded-3xl p-7 hover:border-[#43563A] transition-all bg-[#FAF9F5] hover:shadow-md"
              >
                <span className="text-3xl font-mono font-extrabold text-[#43563A] block mb-4">{v.n}</span>
                <h3 className="font-bold text-[#22251F] text-lg mb-2 tracking-tight">{v.h}</h3>
                <p className="text-sm text-[#787D75] leading-relaxed" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                  {v.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
