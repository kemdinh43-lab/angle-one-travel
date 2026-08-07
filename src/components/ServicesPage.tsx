import React from "react";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarCheck,
  Car,
  CheckCircle2,
  Compass,
  Headphones,
  Hotel,
  MapPinned,
  Plane,
  ShieldCheck,
  Ticket,
  UsersRound,
} from "lucide-react";
import { IMAGES } from "../data/travelData";

interface ServicesPageProps {
  onNavigate: (view: string) => void;
  onOpenQuote: () => void;
  onOpenCustom: () => void;
}

const SERVICE_PILLARS = [
  {
    number: "01",
    eyebrow: "Du lịch - lữ hành",
    title: "Tour trọn gói và hành trình thiết kế riêng",
    intro:
      "Tư vấn, xây dựng và điều phối tour theo mục tiêu chuyến đi, độ tuổi, ngân sách và tiêu chuẩn dịch vụ của từng đoàn.",
    image: IMAGES.danang,
    icon: Compass,
    items: [
      "Tour du lịch trong nước",
      "Tour du lịch quốc tế",
      "Tour khách đoàn, gia đình, học sinh - sinh viên",
      "Tour nghỉ dưỡng, trải nghiệm và tour doanh nghiệp",
      "Lịch trình riêng theo ngân sách",
    ],
  },
  {
    number: "02",
    eyebrow: "Vận tải du lịch",
    title: "Đội xe 4-45 chỗ cho tour, công tác và sự kiện",
    intro:
      "Cung cấp phương tiện phù hợp cho từng hành trình, từ đưa đón sân bay, xe công tác đến xe phục vụ đoàn theo hợp đồng.",
    image: IMAGES.coastal,
    icon: Car,
    items: [
      "Thuê xe theo hành trình",
      "Xe phục vụ tour và đưa đón sân bay",
      "Xe công tác, cưới hỏi, hội nghị và sự kiện",
      "Xe phục vụ đoàn khách theo hợp đồng",
      "Di chuyển từ Đà Nẵng đến các tỉnh miền Trung",
    ],
  },
  {
    number: "03",
    eyebrow: "Dịch vụ doanh nghiệp",
    title: "Company trip, MICE, team building và gala dinner",
    intro:
      "Thiết kế chương trình dành cho doanh nghiệp với nhịp vận hành rõ ràng, kết hợp nghỉ dưỡng, gắn kết đội ngũ và đón tiếp đối tác.",
    image: IMAGES.hoian,
    icon: BriefcaseBusiness,
    items: [
      "Tour thường niên và chuyến đi khen thưởng",
      "Team building bãi biển hoặc resort",
      "Gala dinner, hội nghị khách hàng, hội thảo",
      "Đón tiếp đối tác và đoàn công tác",
      "Chuyến đi kết hợp công tác và nghỉ dưỡng",
    ],
  },
  {
    number: "04",
    eyebrow: "Dịch vụ hỗ trợ",
    title: "Một đầu mối cho toàn bộ nhu cầu hành trình",
    intro:
      "Hỗ trợ các hạng mục riêng lẻ hoặc kết hợp trọn gói để khách hàng không phải làm việc với nhiều nhà cung cấp khác nhau.",
    image: IMAGES.bana,
    icon: Headphones,
    items: [
      "Đặt phòng khách sạn, resort và nhà hàng",
      "Vé máy bay, vé tham quan và hướng dẫn viên",
      "Tư vấn lịch trình theo thời gian thực tế",
      "Hỗ trợ hồ sơ và thủ tục liên quan đến hành trình",
      "Thiết kế chương trình theo ngân sách",
    ],
  },
];

const FLOW = [
  {
    icon: MapPinned,
    title: "Làm rõ nhu cầu",
    text: "Số lượng khách, ngày đi, điểm đến, ngân sách và yêu cầu đặc biệt.",
  },
  {
    icon: CalendarCheck,
    title: "Thiết kế phương án",
    text: "Đề xuất lịch trình, phương tiện, lưu trú, bữa ăn và phương án dự phòng.",
  },
  {
    icon: ShieldCheck,
    title: "Xác nhận dịch vụ",
    text: "Chốt báo giá, điều kiện thanh toán, nhà cung cấp và tiêu chuẩn phục vụ.",
  },
  {
    icon: UsersRound,
    title: "Điều phối hành trình",
    text: "Theo sát đoàn, cập nhật phát sinh và hỗ trợ khách trong suốt chuyến đi.",
  },
];

const SUPPORT_POINTS = [
  { icon: Plane, label: "Vé máy bay", text: "Hỗ trợ lịch bay và phương án nối chuyến phù hợp." },
  { icon: Hotel, label: "Lưu trú", text: "Khách sạn, resort, villa theo ngân sách và tiêu chuẩn đoàn." },
  { icon: Ticket, label: "Vé tham quan", text: "Đặt vé điểm đến, show, cáp treo và khu vui chơi." },
  { icon: BadgeCheck, label: "Hướng dẫn viên", text: "HDV bản địa, điều phối đoàn và hỗ trợ lịch trình." },
];

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenQuote,
  onOpenCustom,
}) => {
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#22251F]" style={{ fontFamily: "'Manrope', sans-serif" }}>
      <section className="relative isolate min-h-[560px] overflow-hidden bg-[#1A2316] pt-28 text-white sm:pt-36">
        <img
          src={IMAGES.hero}
          alt="Hành trình du lịch cùng Angel One Travel"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[#101510]/70" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-[#1A2316] to-transparent" />

        <div className="mx-auto grid w-full max-w-[1320px] gap-10 px-5 pb-16 md:grid-cols-[1fr_420px] md:px-10">
          <div className="max-w-3xl self-end">
            <p className="mb-5 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#D7C9AD]">
              Hệ sinh thái dịch vụ Angel One Travel
            </p>
            <h1 className="max-w-4xl text-[clamp(38px,6vw,78px)] font-black leading-[0.98] tracking-tight">
              Một đầu mối cho mọi hành trình
            </h1>
            <p
              className="mt-6 max-w-2xl text-sm font-medium leading-7 text-white/82 sm:text-base"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              Từ tour du lịch, xe vận tải, chương trình doanh nghiệp đến lưu trú và vé tham quan,
              Angel One Travel thiết kế giải pháp đồng bộ để khách hàng dễ chọn, dễ kiểm soát và an tâm trong suốt chuyến đi.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-3 rounded-lg bg-[#43563A] px-6 py-3.5 text-sm font-extrabold text-white shadow-lg transition-colors hover:bg-[#34452F]"
              >
                Nhận tư vấn dịch vụ
                <ArrowRight size={16} />
              </button>
              <button
                onClick={onOpenCustom}
                className="inline-flex items-center gap-3 rounded-lg border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-extrabold text-white transition-colors hover:bg-white/18"
              >
                Thiết kế hành trình riêng
              </button>
            </div>
          </div>

          <aside className="self-end border-l border-white/18 pl-6">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-white/55">
              Phạm vi phục vụ
            </p>
            <div className="mt-5 space-y-5">
              {["Tour trong nước và quốc tế", "Vận tải du lịch 4-45 chỗ", "MICE, team building, gala", "Lưu trú, vé, HDV, hồ sơ"].map((item) => (
                <div key={item} className="flex items-start gap-3 border-b border-white/12 pb-4 last:border-0">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[#D7C9AD]" />
                  <span
                    className="text-sm font-semibold leading-6 text-white/86"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-14 md:px-10 md:py-20">
        <div className="grid gap-8 border-b border-[#D9D8D0] pb-10 lg:grid-cols-[420px_1fr]">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#43563A]">
              Danh mục dịch vụ
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-[#22251F] sm:text-5xl">
              4 nhóm giải pháp chính
            </h2>
          </div>
          <p
            className="max-w-3xl text-sm leading-7 text-[#5F655D] sm:text-base"
            style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
          >
            Trang dịch vụ được tổ chức theo cách khách hàng thực sự ra quyết định: cần đi đâu,
            cần phương tiện gì, có phải tổ chức cho doanh nghiệp không và những hạng mục nào cần Angel One hỗ trợ thêm.
          </p>
        </div>

        <div className="divide-y divide-[#D9D8D0]">
          {SERVICE_PILLARS.map((service, index) => {
            const Icon = service.icon;
            const imageFirst = index % 2 === 1;

            return (
              <article
                key={service.number}
                className="grid gap-8 py-12 lg:grid-cols-2 lg:items-center lg:gap-14"
              >
                <div className={imageFirst ? "lg:order-2" : ""}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-[#DDE3D6]">
                    <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 flex items-center gap-3 text-white">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/16 backdrop-blur-md">
                        <Icon size={20} />
                      </div>
                      <span className="text-xs font-extrabold uppercase tracking-[0.18em]">
                        {service.eyebrow}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={imageFirst ? "lg:order-1" : ""}>
                  <div className="flex items-start gap-5">
                    <div className="text-5xl font-black leading-none tracking-tight text-[#B69E69] sm:text-6xl">
                      {service.number}
                    </div>
                    <div>
                      <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#43563A]">
                        {service.eyebrow}
                      </p>
                      <h3 className="mt-2 max-w-xl text-2xl font-black leading-tight tracking-tight text-[#22251F] sm:text-4xl">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p
                    className="mt-6 max-w-xl text-sm leading-7 text-[#5F655D]"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    {service.intro}
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {service.items.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#43563A]" />
                        <span
                          className="text-sm font-semibold leading-6 text-[#31362E]"
                          style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-[#1A2316] py-14 text-white md:py-20">
        <div className="mx-auto max-w-[1320px] px-5 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[360px_1fr]">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#D7C9AD]">
                Quy trình triển khai
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight sm:text-5xl">
                Rõ việc trước khi khởi hành
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              {FLOW.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="border-l border-white/18 pl-5">
                    <div className="mb-6 flex items-center justify-between">
                      <Icon className="h-5 w-5 text-[#D7C9AD]" />
                      <span className="text-xs font-black text-white/35">0{index + 1}</span>
                    </div>
                    <h3 className="text-base font-extrabold text-white">{step.title}</h3>
                    <p
                      className="mt-3 text-xs leading-6 text-white/68"
                      style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                    >
                      {step.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1320px] gap-12 px-5 py-14 md:px-10 md:py-20 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#43563A]">
            Dịch vụ hỗ trợ hành trình
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-[#22251F] sm:text-5xl">
            Những hạng mục thường được khách hàng giao trọn
          </h2>
          <p
            className="mt-5 max-w-2xl text-sm leading-7 text-[#5F655D]"
            style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
          >
            Angel One Travel có thể đứng vai trò điều phối chính hoặc hỗ trợ từng hạng mục riêng.
            Cách làm này giúp khách hàng kiểm soát ngân sách nhưng vẫn giữ được chất lượng xuyên suốt.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {SUPPORT_POINTS.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.label} className="rounded-lg border border-[#D9D8D0] bg-white p-5">
                  <Icon className="h-5 w-5 text-[#43563A]" />
                  <h3 className="mt-5 text-base font-extrabold text-[#22251F]">{point.label}</h3>
                  <p
                    className="mt-2 text-xs leading-6 text-[#6B7280]"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    {point.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="self-stretch rounded-lg bg-[#F4F1E9] p-6 sm:p-8">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#43563A]">
            Tư vấn nhanh
          </p>
          <h3 className="mt-4 text-2xl font-black leading-tight tracking-tight text-[#22251F] sm:text-3xl">
            Cần tour, thuê xe hay chương trình doanh nghiệp?
          </h3>
          <p
            className="mt-4 text-sm leading-7 text-[#5F655D]"
            style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
          >
            Gửi nhu cầu cơ bản, Angel One Travel sẽ đề xuất phương án phù hợp về lịch trình,
            phương tiện, lưu trú và ngân sách.
          </p>

          <div className="mt-8 space-y-3">
            {[
              "Tư vấn lịch trình và ngân sách",
              "Báo giá từng hạng mục rõ ràng",
              "Điều phối tour, xe, lưu trú, vé và HDV",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 text-[#43563A]" />
                <span
                  className="text-sm font-semibold text-[#31362E]"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#43563A] px-6 py-3.5 text-sm font-extrabold text-white transition-colors hover:bg-[#34452F]"
            >
              Nhận báo giá
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => onNavigate("tours")}
              className="inline-flex items-center justify-center rounded-lg border border-[#D9D8D0] bg-white px-6 py-3.5 text-sm font-extrabold text-[#22251F] transition-colors hover:bg-[#FAF9F5]"
            >
              Xem tour nổi bật
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
