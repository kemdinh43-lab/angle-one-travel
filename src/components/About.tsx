import React from "react";

export const About: React.FC = () => {
  const trustBadges = [
    {
      stat: "100+",
      desc: "Điểm đến hấp dẫn cho chuyến đi hoàn hảo",
    },
    {
      stat: "99%",
      desc: "Khách hàng hài lòng & đánh giá cao",
    },
    {
      stat: "50K+",
      desc: "Du khách đồng hành & tin tưởng",
    },
    {
      stat: "24/7",
      desc: "Hỗ trợ chuyên nghiệp suốt hành trình",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white border-b border-[#D9D8D0]" style={{ fontFamily: "'Manrope', sans-serif" }}>
      <div className="max-w-[1320px] mx-auto px-5 md:px-10 space-y-12 sm:space-y-16">
        {/* Full-width Left-aligned Editorial Quote */}
        <blockquote
          className="text-[clamp(20px,2.6vw,34px)] text-[#22251F] leading-[1.55] italic font-normal max-w-5xl tracking-tight"
          style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
        >
          "Angel One Travel mang đến những hành trình du lịch trọn vẹn và thư thái, giúp bạn khám phá những điểm đến tuyệt vời nhất tại Đà Nẵng & Miền Trung. Từ cảnh quan thiên nhiên kỳ vĩ đến trải nghiệm di sản văn hóa phong phú, chúng tôi đồng hành giúp bạn làm chủ từng chuyến đi một cách dễ dàng và đáng nhớ nhất!"
        </blockquote>

        {/* 4 Trust Badges Spread Across Full 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 w-full">
          {trustBadges.map((badge, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 border border-[#D9D8D0] rounded-full p-2.5 pr-5 bg-[#FAF9F5]/70 hover:bg-white hover:border-[#43563A] hover:shadow-md transition-all duration-300 group cursor-default w-full"
            >
              {/* Left Circle stat */}
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full border border-[#D9D8D0] bg-white group-hover:bg-[#43563A] group-hover:border-[#43563A] group-hover:text-white transition-all flex items-center justify-center flex-shrink-0 text-[#22251F] font-extrabold text-sm sm:text-base tracking-tight shadow-2xs">
                {badge.stat}
              </div>

              {/* Right description */}
              <span
                className="text-xs text-[#787D75] group-hover:text-[#22251F] transition-colors leading-snug font-medium flex-1"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
              >
                {badge.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
