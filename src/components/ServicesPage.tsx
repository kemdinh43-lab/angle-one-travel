import React, { useState } from "react";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { IMAGES } from "../data/travelData";

interface ServicesPageProps {
  onNavigate: (view: string) => void;
  onOpenQuote: () => void;
  onOpenCustom: () => void;
}

const TRANSPORT_TYPES = ["Xe theo tour","Đưa đón sân bay","Xe công tác","Xe cưới hỏi","Xe hội nghị và sự kiện","Xe tham quan trong ngày","Xe phục vụ đoàn trường học","Xe liên tỉnh","Xe theo yêu cầu riêng"];
const TRANSPORT_ROUTES = ["Quảng Bình","Quảng Trị","Huế","Đà Nẵng","Hội An – Quảng Nam","Quảng Ngãi","Quy Nhơn – Bình Định"];
const ENTERPRISE_TYPES = ["Du lịch thường niên","Team building","Gala dinner","Hội nghị khách hàng","Chuyến đi khen thưởng","Đón tiếp đối tác","Công tác kết hợp nghỉ dưỡng","Chương trình công đoàn","Đoàn khảo sát và tham quan"];
const SUPPORT_SERVICES = [
  { emoji:"🏨", title:"Khách sạn & Resort", items:["Tư vấn khu vực lưu trú","Đặt phòng cá nhân và khách đoàn","Quản lý danh sách phòng","Nhận phòng sớm, trả phòng muộn"] },
  { emoji:"🍽", title:"Nhà hàng & Ẩm thực", items:["Đặt bữa theo lịch trình","Tư vấn thực đơn & ăn chay","Bố trí không gian cho đoàn","Tiệc riêng và gala"] },
  { emoji:"✈", title:"Vé máy bay", items:["Tư vấn chuyến bay","Hỗ trợ đặt vé","Theo dõi thay đổi lịch","Vé tàu hoặc phương tiện phù hợp"] },
  { emoji:"🎟", title:"Vé tham quan & Trải nghiệm", items:["Vé điểm tham quan","Dịch vụ vui chơi","Hướng dẫn viên","Hỗ trợ tại điểm đến"] },
];
const PROCESS_STEPS = [
  { step:"01", title:"Tiếp nhận yêu cầu", desc:"Thu thập điểm đến, ngày đi, số lượng khách, ngân sách và mục tiêu chuyến đi." },
  { step:"02", title:"Phân tích nhu cầu", desc:"Làm rõ tiêu chuẩn phương tiện, lưu trú, ăn uống và các yêu cầu đặc biệt." },
  { step:"03", title:"Đề xuất phương án", desc:"Xây dựng lịch trình cùng một hoặc nhiều mức dịch vụ phù hợp." },
  { step:"04", title:"Báo giá minh bạch", desc:"Thể hiện rõ hạng mục bao gồm, chưa bao gồm, phụ thu và điều kiện giữ chỗ." },
  { step:"05", title:"Xác nhận dịch vụ", desc:"Thống nhất nội dung, hợp đồng, đặt cọc và tiến độ thanh toán." },
  { step:"06", title:"Triển khai hành trình", desc:"Điều phối phương tiện, khách sạn, nhà hàng, vé và nhân sự." },
  { step:"07", title:"Hỗ trợ trong chuyến đi", desc:"Theo dõi chương trình và xử lý thay đổi theo điều kiện thực tế." },
  { step:"08", title:"Chăm sóc sau dịch vụ", desc:"Tiếp nhận đánh giá và duy trì kết nối lâu dài với khách hàng." },
];
const WHY_US = [
  { emoji:"🔗", title:"Kết hợp tour và vận tải", desc:"Sử dụng riêng từng dịch vụ hoặc kết hợp thành hành trình trọn gói." },
  { emoji:"📍", title:"Am hiểu miền Trung", desc:"Vị trí tại Đà Nẵng thuận lợi triển khai tuyến điểm miền Trung." },
  { emoji:"🎯", title:"Tư vấn theo nhu cầu", desc:"Chương trình xây dựng theo số lượng, ngân sách và mục tiêu cụ thể." },
  { emoji:"💰", title:"Báo giá minh bạch", desc:"Chi phí bao gồm, chưa bao gồm và phụ thu được trình bày trước." },
  { emoji:"🔑", title:"Một đầu mối điều phối", desc:"Không phải tự liên hệ riêng từng phương tiện, khách sạn, nhà hàng." },
  { emoji:"⏱", title:"Đồng hành xuyên suốt", desc:"Hỗ trợ từ khâu tư vấn đến khi kết thúc hành trình." },
];
const PACKAGES = [
  { label:"Gói di chuyển chủ động", badge:"Tiết kiệm", badgeCls:"bg-[#E5E7EB] text-[#374151]", desc:"Phù hợp với khách đã có kế hoạch riêng và chỉ cần phương tiện.", includes:["Xe theo lịch trình","Tài xế","Nhiên liệu","Chi phí vận hành","Hỗ trợ điều phối cơ bản"], img: IMAGES.coastal },
  { label:"Gói linh hoạt", badge:"Phổ biến", badgeCls:"bg-[#43563A] text-white", desc:"Phù hợp với khách muốn tự chủ một phần nhưng vẫn cần hỗ trợ.", includes:["Phương tiện","Khách sạn","Một số bữa ăn","Vé tham quan","Hướng dẫn viên theo yêu cầu"], img: IMAGES.hoian },
  { label:"Gói trọn gói", badge:"Trọn vẹn nhất", badgeCls:"bg-[#111827] text-white", desc:"Phù hợp với khách muốn kiểm soát ngân sách và không phải tự tổ chức.", includes:["Phương tiện","Lưu trú","Ăn uống","Vé tham quan","Hướng dẫn viên","Bảo hiểm","Điều phối xuyên suốt"], img: IMAGES.bana },
];

const vn = "font-family: 'Be Vietnam Pro', sans-serif";
const labelCls = "text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-[#43563A]";
const h2Cls = "text-2xl sm:text-4xl font-black text-[#111827] tracking-tight leading-none";
const subCls = "text-xs sm:text-sm text-[#4B5563] leading-relaxed";
const sectionCls = "py-14 sm:py-24 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8";
const btnGreen = "bg-[#43563A] hover:bg-[#34452F] text-white font-extrabold text-xs px-7 py-3.5 rounded-full transition-all cursor-pointer inline-flex items-center gap-2 group";

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenQuote, onOpenCustom }) => {
  const [form, setForm] = useState({ name:"", phone:"", service:"", destination:"", date:"", guests:"", budget:"", note:"" });
  const onChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) => setForm(p => ({...p, [e.target.name]: e.target.value}));

  return (
    <div className="min-h-screen bg-white text-[#111827]" style={{ fontFamily:"'Manrope', sans-serif" }}>

      {/* S1 HERO */}
      <section className="relative w-full min-h-[580px] sm:min-h-[640px] overflow-hidden bg-[#1f2a1b] text-white pt-28 sm:pt-36 pb-16 flex items-center">
        <img src={IMAGES.hero} alt="Dịch vụ" className="absolute inset-0 w-full h-full object-cover object-center scale-105" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/75" />
        <div className="relative z-10 max-w-[1320px] mx-auto px-5 md:px-10 w-full">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 sm:gap-12 items-center">
            <div className="space-y-5 text-left">
              <span className="bg-white/15 backdrop-blur-md border border-white/25 text-white text-[11px] font-extrabold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full inline-block">DỊCH VỤ ANGEL ONE TRAVEL</span>
              <h1 className="text-[clamp(32px,5vw,64px)] font-black text-white tracking-[-0.03em] leading-[1.08] uppercase">GIẢI PHÁP TOÀN DIỆN CHO MỌI HÀNH TRÌNH</h1>
              <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed font-medium max-w-xl" style={{ fontFamily:"'Be Vietnam Pro', sans-serif" }}>
                Angel One Travel cung cấp dịch vụ du lịch, lữ hành và vận tải dành cho khách cá nhân, gia đình, doanh nghiệp và đoàn thể — từ thiết kế lịch trình, phương tiện, đặt phòng đến tour trọn gói.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <button onClick={() => onNavigate("tours")} className="bg-[#43563A] hover:bg-[#34452F] text-white font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-full transition-all shadow-xl cursor-pointer inline-flex items-center gap-2.5 group">
                  <span>Khám phá dịch vụ</span>
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform"><ArrowRight size={14} /></div>
                </button>
                <button onClick={onOpenQuote} className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-full transition-all cursor-pointer">Nhận tư vấn hành trình</button>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1">
                {["Tour du lịch","Vận tải","Doanh nghiệp","Dịch vụ hỗ trợ"].map(t => <span key={t} className="text-[11px] font-semibold text-white/60">• {t}</span>)}
              </div>
            </div>
            <div className="relative grid grid-cols-2 gap-3.5 pt-4 lg:pt-0">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-black/40 border border-white/25 shadow-2xl group cursor-pointer">
                <img src={IMAGES.danang} alt="Tour" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-2.5 left-3 text-[11px] font-extrabold text-white">Tour Du Lịch</span>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-black/40 border border-white/25 shadow-2xl group cursor-pointer translate-y-4">
                <img src={IMAGES.coastal} alt="Vận Tải" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-2.5 left-3 text-[11px] font-extrabold text-white">Vận Tải Du Lịch</span>
              </div>
              <div className="col-span-2 relative rounded-2xl overflow-hidden aspect-[16/9] bg-black/40 border border-white/25 shadow-2xl group cursor-pointer">
                <img src={IMAGES.hoian} alt="Doanh Nghiệp" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 text-xs font-extrabold text-white flex items-center gap-2">
                  <span>Dịch Vụ Doanh Nghiệp</span>
                  <span className="text-[9px] bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full font-semibold">Team Building · Gala</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S2 HỆ SINH THÁI */}
      <section className={sectionCls}>
        <div className="mb-10 sm:mb-14 space-y-2">
          <p className={labelCls}>Hệ sinh thái dịch vụ</p>
          <h2 className={h2Cls}>Một đầu mối cho toàn bộ chuyến đi</h2>
          <p className={subCls + " max-w-2xl"} style={{ fontFamily:"'Be Vietnam Pro', sans-serif" }}>Thay vì phải tự liên hệ nhiều nhà cung cấp, khách hàng có thể làm việc trực tiếp với Angel One Travel để xây dựng và triển khai toàn bộ hành trình.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { no:"01", title:"Tour du lịch", desc:"Các chương trình trong nước, quốc tế, tour khách đoàn và hành trình thiết kế theo yêu cầu.", img: IMAGES.danang },
            { no:"02", title:"Vận tải du lịch", desc:"Phương tiện phục vụ tour, công tác, sân bay, cưới hỏi, sự kiện và di chuyển liên tỉnh.", img: IMAGES.coastal },
            { no:"03", title:"Dịch vụ doanh nghiệp", desc:"Tour thường niên, team building, gala, hội nghị, đón tiếp đối tác và đoàn công tác.", img: IMAGES.hoian },
            { no:"04", title:"Hỗ trợ hành trình", desc:"Đặt phòng, nhà hàng, vé máy bay, vé tham quan, hướng dẫn viên và dịch vụ tại điểm đến.", img: IMAGES.beach },
          ].map(s => (
            <div key={s.no} className="group space-y-3 cursor-pointer" onClick={onOpenQuote}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#F3F4F6] shadow-sm">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-black/60 backdrop-blur-md text-white font-extrabold text-xs flex items-center justify-center">{s.no}</div>
              </div>
              <div>
                <h3 className="font-extrabold text-base text-[#111827] group-hover:text-[#43563A] transition-colors">{s.title}</h3>
                <p className="text-xs text-[#6B7280] leading-relaxed mt-1" style={{ fontFamily:"'Be Vietnam Pro', sans-serif" }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 sm:mt-14 border-t border-[#E5E7EB] pt-8 flex flex-col sm:flex-row sm:items-center gap-4">
          <blockquote className="text-lg sm:text-2xl font-black italic text-[#111827] tracking-tight">"Một yêu cầu – Nhiều phương án – Một đầu mối điều phối"</blockquote>
          <button onClick={onOpenQuote} className={btnGreen + " sm:ml-auto whitespace-nowrap"}>Nhận tư vấn <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" /></button>
        </div>
      </section>

      {/* S3 TOUR */}
      <section className="py-14 sm:py-20 bg-[#FAF9F5]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-start">
            <div className="space-y-7">
              <div className="space-y-3">
                <p className={labelCls}>Tour du lịch</p>
                <h2 className={h2Cls}>Khám phá điểm đến theo cách phù hợp với bạn</h2>
                <p className={subCls} style={{ fontFamily:"'Be Vietnam Pro', sans-serif" }}>Angel One Travel xây dựng chương trình dựa trên số lượng khách, thời gian, ngân sách và mục đích của chuyến đi.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-extrabold text-sm text-[#111827]">Tour trong nước</h3>
                  {["Tour nghỉ dưỡng","Tour biển đảo","Tour gia đình","Tour hành hương","Tour trải nghiệm văn hóa","Tour theo mùa và dịp lễ","Tour khách đoàn"].map(t => (
                    <div key={t} className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#43563A] flex-none" /><span className="text-xs text-[#4B5563]" style={{ fontFamily:"'Be Vietnam Pro', sans-serif" }}>{t}</span></div>
                  ))}
                </div>
                <div className="space-y-3">
                  <h3 className="font-extrabold text-sm text-[#111827]">Tour quốc tế – Hỗ trợ</h3>
                  {["Tư vấn tuyến điểm","Lịch trình","Vé máy bay","Lưu trú","Thông tin thủ tục","Hỗ trợ trong hành trình"].map(t => (
                    <div key={t} className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#43563A] flex-none" /><span className="text-xs text-[#4B5563]" style={{ fontFamily:"'Be Vietnam Pro', sans-serif" }}>{t}</span></div>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => onNavigate("tours")} className="bg-[#111827] hover:bg-[#43563A] text-white font-extrabold text-xs px-6 py-3 rounded-full transition-all cursor-pointer inline-flex items-center gap-2 group">Xem danh sách tour <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" /></button>
                <button onClick={onOpenCustom} className="bg-white hover:bg-[#F3F4F6] border border-[#E5E7EB] text-[#111827] font-extrabold text-xs px-6 py-3 rounded-full transition-all cursor-pointer">Yêu cầu tour riêng</button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-md group">
                <img src={IMAGES.sapa} alt="Sa Pa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-[11px] font-extrabold text-white">Sa Pa</span>
              </div>
              <div className="space-y-3">
                <div className="relative rounded-2xl overflow-hidden aspect-square shadow-md group">
                  <img src={IMAGES.phuquoc} alt="Phú Quốc" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-extrabold text-white">Phú Quốc</span>
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-square shadow-md group">
                  <img src={IMAGES.thailand} alt="Thái Lan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-extrabold text-white">Thái Lan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S4 3 PACKAGES */}
      <section className={sectionCls}>
        <div className="text-center mb-10 sm:mb-14 space-y-3">
          <p className={labelCls}>Phương án lựa chọn</p>
          <h2 className={h2Cls + " text-center"}>Lựa chọn mức dịch vụ phù hợp với ngân sách</h2>
          <p className={subCls + " max-w-2xl mx-auto"} style={{ fontFamily:"'Be Vietnam Pro', sans-serif" }}>Khách hàng không bắt buộc phải sử dụng tour trọn gói. Angel One Travel cung cấp ba phương án để dễ lựa chọn.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PACKAGES.map((pkg, i) => (
            <div key={i} className="group flex flex-col rounded-2xl overflow-hidden border border-[#E5E7EB] bg-white hover:shadow-lg transition-shadow">
              <div className="relative h-44 overflow-hidden">
                <img src={pkg.img} alt={pkg.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className={"absolute top-3 left-3 text-[10px] font-extrabold px-2.5 py-1 rounded-full " + pkg.badgeCls}>{pkg.badge}</span>
              </div>
              <div className="flex flex-col flex-1 p-5 space-y-4">
                <div>
                  <h3 className="font-black text-base text-[#111827] mb-1">{pkg.label}</h3>
                  <p className="text-xs text-[#6B7280]" style={{ fontFamily:"'Be Vietnam Pro', sans-serif" }}>{pkg.desc}</p>
                </div>
                <div className="space-y-1.5 flex-1">
                  {pkg.includes.map(item => (
                    <div key={item} className="flex items-center gap-2"><CheckCircle2 size={12} className="text-[#43563A] flex-none" /><span className="text-xs text-[#374151]" style={{ fontFamily:"'Be Vietnam Pro', sans-serif" }}>{item}</span></div>
                  ))}
                </div>
                <button onClick={onOpenQuote} className="mt-auto w-full bg-[#43563A] hover:bg-[#34452F] text-white font-extrabold text-xs py-3 rounded-xl transition-all cursor-pointer">Nhận báo giá gói này</button>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-[#6B7280] italic" style={{ fontFamily:"'Be Vietnam Pro', sans-serif" }}>Cùng một lịch trình, khách hàng có thể lựa chọn phạm vi dịch vụ khác nhau tùy ngân sách và mức độ chủ động mong muốn.</p>
      </section>

      {/* S5 VẬN TẢI — DARK */}
      <section className="py-14 sm:py-20 bg-[#111827] text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img src={IMAGES.coastal} alt="Vận tải" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                {TRANSPORT_ROUTES.map(r => <span key={r} className="text-[10px] font-bold bg-white/15 backdrop-blur-md border border-white/20 text-white px-2.5 py-1 rounded-full">{r}</span>)}
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-[#A3B89A]">Vận tải du lịch</p>
                <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-none">Chủ động phương tiện cho mọi nhu cầu</h2>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed" style={{ fontFamily:"'Be Vietnam Pro', sans-serif" }}>Angel One Travel cung cấp dịch vụ vận tải hành khách theo hợp đồng phục vụ khách du lịch, doanh nghiệp và đoàn thể.</p>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {TRANSPORT_TYPES.map(t => (
                  <div key={t} className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#A3B89A] flex-none" /><span className="text-xs text-white/80" style={{ fontFamily:"'Be Vietnam Pro', sans-serif" }}>{t}</span></div>
                ))}
              </div>
              <button onClick={onOpenQuote} className={btnGreen}>Nhận báo giá thuê xe <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" /></button>
            </div>
          </div>
        </div>
      </section>

      {/* S6 DOANH NGHIỆP */}
      <section className={sectionCls}>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className={labelCls}>Dịch vụ doanh nghiệp</p>
              <h2 className={h2Cls}>Hành trình gắn kết đội ngũ và nâng cao trải nghiệm</h2>
              <p className={subCls} style={{ fontFamily:"'Be Vietnam Pro', sans-serif" }}>Angel One Travel hỗ trợ doanh nghiệp tổ chức các chương trình du lịch, nghỉ dưỡng và hoạt động nội bộ theo mục tiêu riêng.</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {ENTERPRISE_TYPES.map(t => (
                <div key={t} className="flex items-center gap-2"><CheckCircle2 size={12} className="text-[#43563A] flex-none" /><span className="text-xs text-[#4B5563]" style={{ fontFamily:"'Be Vietnam Pro', sans-serif" }}>{t}</span></div>
              ))}
            </div>
            <div className="bg-[#FAF9F5] border border-[#E5E7EB] rounded-2xl p-5 space-y-2">
              <p className="text-xs font-extrabold text-[#111827] uppercase tracking-wider">Nguyên tắc triển khai</p>
              <p className="text-sm sm:text-base font-black italic text-[#43563A]">"Mục tiêu doanh nghiệp – Trải nghiệm người tham gia – Ngân sách thực tế"</p>
            </div>
            <button onClick={onOpenQuote} className={btnGreen}>Nhận phương án cho doanh nghiệp <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" /></button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-md group">
              <img src={IMAGES.hue} alt="Team Building" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-3 left-3 text-[11px] font-extrabold text-white">Team Building</span>
            </div>
            <div className="space-y-3">
              <div className="relative rounded-2xl overflow-hidden aspect-square shadow-md group">
                <img src={IMAGES.bana} alt="Gala Dinner" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-3 text-[11px] font-extrabold text-white">Gala Dinner</span>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-square shadow-md group">
                <img src={IMAGES.japan} alt="Hội Nghị" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-3 text-[11px] font-extrabold text-white">Hội Nghị</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S7 HỖ TRỢ */}
      <section className="py-14 sm:py-20 bg-[#FAF9F5]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-10 sm:mb-14 space-y-3">
            <p className={labelCls}>Hỗ trợ hành trình</p>
            <h2 className={h2Cls + " text-center"}>Hoàn thiện từng chi tiết của chuyến đi</h2>
            <p className={subCls + " max-w-2xl mx-auto"} style={{ fontFamily:"'Be Vietnam Pro', sans-serif" }}>Khách hàng có thể sử dụng độc lập từng dịch vụ hoặc kết hợp thành một chương trình hoàn chỉnh.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SUPPORT_SERVICES.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[#E5E7EB] p-5 space-y-4 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#DDE3D6] flex items-center justify-center text-xl">{s.emoji}</div>
                <h3 className="font-extrabold text-sm text-[#111827]">{s.title}</h3>
                <div className="space-y-1.5">
                  {s.items.map(item => (
                    <div key={item} className="flex items-start gap-2"><div className="w-1 h-1 rounded-full bg-[#43563A] flex-none mt-1.5" /><span className="text-xs text-[#6B7280]" style={{ fontFamily:"'Be Vietnam Pro', sans-serif" }}>{item}</span></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button onClick={onOpenQuote} className={btnGreen}>Yêu cầu đặt dịch vụ <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" /></button>
          </div>
        </div>
      </section>

      {/* S8 QUY TRÌNH */}
      <section className={sectionCls}>
        <div className="text-center mb-10 sm:mb-14 space-y-3">
          <p className={labelCls}>Quy trình</p>
          <h2 className={h2Cls + " text-center"}>Rõ ràng từ tư vấn đến vận hành</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROCESS_STEPS.map((s, i) => (
            <div key={i} className="group relative bg-white border border-[#E5E7EB] rounded-2xl p-5 space-y-3 hover:border-[#43563A] hover:shadow-md transition-all">
              <div className="text-3xl font-black text-[#E5E7EB] group-hover:text-[#DDE3D6] transition-colors leading-none">{s.step}</div>
              <h3 className="font-extrabold text-sm text-[#111827]">{s.title}</h3>
              <p className="text-xs text-[#6B7280] leading-relaxed" style={{ fontFamily:"'Be Vietnam Pro', sans-serif" }}>{s.desc}</p>
              {i % 4 < 3 && <div className="hidden lg:block absolute top-8 -right-3 z-10"><ChevronRight size={16} className="text-[#D1D5DB]" /></div>}
            </div>
          ))}
        </div>
      </section>

      {/* S9 VÌ SAO CHỌN — DARK */}
      <section className="py-14 sm:py-20 bg-[#1f2a1b] text-white relative overflow-hidden">
        <img src={IMAGES.hoianB} alt="bg" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-10 sm:mb-14 space-y-3">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-[#A3B89A]">Lý do lựa chọn</p>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">Giải pháp linh hoạt, rõ ràng và phù hợp thực tế</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_US.map((w, i) => (
              <div key={i} className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-5 space-y-3 hover:bg-white/12 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#43563A] flex items-center justify-center text-xl">{w.emoji}</div>
                <h3 className="font-extrabold text-sm text-white">{w.title}</h3>
                <p className="text-xs text-white/70 leading-relaxed" style={{ fontFamily:"'Be Vietnam Pro', sans-serif" }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S10 CTA FORM */}
      <section className={sectionCls}>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className={labelCls}>Nhận phương án</p>
              <h2 className={h2Cls}>Bạn đang cần tour trọn gói hay chỉ cần phương tiện?</h2>
              <p className={subCls} style={{ fontFamily:"'Be Vietnam Pro', sans-serif" }}>Hãy cung cấp một số thông tin cơ bản. Đội ngũ tư vấn sẽ đề xuất phương án phù hợp với lịch trình và ngân sách của bạn.</p>
            </div>
            <div className="space-y-2.5">
              {[
                { emoji:"📞", label:"Gọi hotline", sub:"0768 643 446" },
                { emoji:"💬", label:"Nhắn Zalo", sub:"Phản hồi trong 15 phút" },
                { emoji:"📨", label:"Gửi yêu cầu tư vấn", sub:"Qua form bên cạnh" },
              ].map((cta, i) => (
                <button key={i} onClick={onOpenQuote} className="w-full flex items-center gap-4 bg-[#FAF9F5] hover:bg-[#DDE3D6] border border-[#E5E7EB] rounded-2xl px-5 py-4 transition-all cursor-pointer group text-left">
                  <div className="w-9 h-9 rounded-xl bg-[#43563A] flex items-center justify-center flex-none text-base">{cta.emoji}</div>
                  <div>
                    <div className="text-sm font-extrabold text-[#111827] group-hover:text-[#43563A] transition-colors">{cta.label}</div>
                    <div className="text-xs text-[#6B7280]" style={{ fontFamily:"'Be Vietnam Pro', sans-serif" }}>{cta.sub}</div>
                  </div>
                  <ChevronRight size={16} className="ml-auto text-[#9CA3AF] group-hover:translate-x-0.5 transition-transform" />
                </button>
              ))}
            </div>
            <p className="text-xs text-[#6B7280] italic" style={{ fontFamily:"'Be Vietnam Pro', sans-serif" }}>Angel One Travel sẽ liên hệ để làm rõ nhu cầu trước khi gửi chương trình và báo giá chi tiết.</p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); onOpenQuote(); }} className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
            <h3 className="font-black text-base text-[#111827]">Nhận phương án và báo giá</h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] font-extrabold text-[#374151] uppercase tracking-wider block mb-1">Họ và tên *</label>
                <input name="name" value={form.name} onChange={onChange} required placeholder="Nguyễn Văn A" className="w-full text-sm border border-[#E5E7EB] rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#43563A] bg-[#FAF9F5]" />
              </div>
              <div>
                <label className="text-[10px] font-extrabold text-[#374151] uppercase tracking-wider block mb-1">Số điện thoại *</label>
                <input name="phone" value={form.phone} onChange={onChange} required placeholder="0768 643 446" className="w-full text-sm border border-[#E5E7EB] rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#43563A] bg-[#FAF9F5]" />
              </div>
              <div>
                <label className="text-[10px] font-extrabold text-[#374151] uppercase tracking-wider block mb-1">Điểm đến dự kiến</label>
                <input name="destination" value={form.destination} onChange={onChange} placeholder="Đà Nẵng, Thái Lan..." className="w-full text-sm border border-[#E5E7EB] rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#43563A] bg-[#FAF9F5]" />
              </div>
              <div>
                <label className="text-[10px] font-extrabold text-[#374151] uppercase tracking-wider block mb-1">Ngày khởi hành</label>
                <input type="date" name="date" value={form.date} onChange={onChange} className="w-full text-sm border border-[#E5E7EB] rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#43563A] bg-[#FAF9F5] text-[#374151]" />
              </div>
              <div>
                <label className="text-[10px] font-extrabold text-[#374151] uppercase tracking-wider block mb-1">Số lượng khách</label>
                <input name="guests" value={form.guests} onChange={onChange} placeholder="VD: 2 người..." className="w-full text-sm border border-[#E5E7EB] rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#43563A] bg-[#FAF9F5]" />
              </div>
              <div>
                <label className="text-[10px] font-extrabold text-[#374151] uppercase tracking-wider block mb-1">Ngân sách dự kiến</label>
                <input name="budget" value={form.budget} onChange={onChange} placeholder="VD: 5–10 triệu/người" className="w-full text-sm border border-[#E5E7EB] rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#43563A] bg-[#FAF9F5]" />
              </div>
              <div className="col-span-2">
                <label className="text-[10px] font-extrabold text-[#374151] uppercase tracking-wider block mb-1">Loại dịch vụ quan tâm</label>
                <select name="service" value={form.service} onChange={onChange} className="w-full text-sm border border-[#E5E7EB] rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#43563A] bg-[#FAF9F5] text-[#374151]">
                  <option value="">Chọn dịch vụ...</option>
                  <option>Tour du lịch trọn gói</option>
                  <option>Tour thiết kế riêng</option>
                  <option>Vận tải du lịch</option>
                  <option>Dịch vụ doanh nghiệp</option>
                  <option>Dịch vụ hỗ trợ hành trình</option>
                </select>
              </div>
              <div className="col-span-2">
                <label className="text-[10px] font-extrabold text-[#374151] uppercase tracking-wider block mb-1">Nội dung cần tư vấn</label>
                <textarea name="note" value={form.note} onChange={onChange} rows={3} placeholder="Mô tả thêm yêu cầu, sở thích, điều kiện đặc biệt..." className="w-full text-sm border border-[#E5E7EB] rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#43563A] bg-[#FAF9F5] resize-none" />
              </div>
            </div>
            <button type="submit" className="w-full bg-[#43563A] hover:bg-[#34452F] text-white font-extrabold text-sm py-3.5 rounded-xl transition-all cursor-pointer inline-flex items-center justify-center gap-2 group">
              Nhận phương án và báo giá
              <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};
