import React, { useState } from "react";
import { Clock, Eye, Calendar, ArrowRight, Search, CheckCircle2, Send } from "lucide-react";
import { IMAGES } from "../data/travelData";

interface BlogPageProps {
  onBackToHome: () => void;
  onOpenQuote: () => void;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  views: string;
  image: string;
  excerpt: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      bulletPoints?: string[];
    }[];
    conclusion: string;
  };
}

export const BLOG_ARTICLES: Article[] = [
  {
    id: "danang-hoian-2n1d",
    title: "Kinh nghiệm du lịch Đà Nẵng – Hội An 2N1Đ tối ưu chi phí 2026",
    category: "KINH NGHIỆM DU LỊCH",
    readTime: "6 phút đọc",
    date: "05/08/2026",
    author: "Angel One Team",
    views: "3.4k lượt xem",
    image: IMAGES.hoian,
    excerpt:
      "Bí quyết sắp xếp lịch trình gọn gàng 2 ngày 1 đêm vừa check-in được trọn vẹn Cầu Rồng, Phố cổ Hội An rực rỡ đèn lồng mà vẫn tiết kiệm 30% chi phí vé xe và khách sạn.",
    content: {
      intro:
        "Đà Nẵng và Phố cổ Hội An luôn là cặp đôi điểm đến lý tưởng nhất cho những chuyến đi ngắn ngày. Chỉ với 2 ngày 1 đêm, bạn hoàn toàn có thể tận hưởng trọn vẹn vẻ đẹp lung linh của di sản thế giới Hội An và nhịp sống hiện đại năng động tại Đà Nẵng nếu nắm rõ bí quyết sắp xếp tuyến đường bên dưới.",
      sections: [
        {
          heading: "1. Lịch trình chi tiết Ngày 1: Đón sân bay – Biển Mỹ Khê – Phố cổ Hội An",
          body: "Buổi sáng đáp chuyến bay đến Đà Nẵng, xe Angel One hỗ trợ đưa về khách sạn nhận phòng nghỉ ngơi. Chiều tắm biển Mỹ Khê và thưởng thức bánh tráng thịt heo 2 đầu da nổi tiếng. Đến 16:30 xuất phát đi Phố cổ Hội An để kịp đón hoàng hôn bên sông Hoài.",
          bulletPoints: [
            "17:30 - Thưởng thức cao lầu Thanh / Cơm gà Bà Buổi",
            "18:30 - Đi thuyền thả hoa đăng ước nguyện trên sông Hoài",
            "20:00 - Ghé thăm Chùa Cầu và dạo chợ đêm đèn lồng",
          ],
        },
        {
          heading: "2. Lịch trình chi tiết Ngày 2: Bán đảo Sơn Trà – Chợ Cồn – Mua quà mang về",
          body: "Dậy sớm ngắm bình minh trên biển, ghé Chùa Linh Ứng thắp hương cầu an. Trưa thưởng thức hải sản tươi sống tại khu vực bãi biển và ghé Chợ Cồn mua chả bò, mắm nêm làm quà.",
        },
      ],
      conclusion:
        "Chuyến đi 2N1Đ không bị vội nếu bạn đặt trước dịch vụ xe đưa đón cố định và vé tham quan online để tránh phải xếp hàng.",
    },
  },
  {
    id: "chi-phi-du-lich-mientrung-2026",
    title: "Bảng tổng hợp chi phí du lịch Miền Trung thực tế mới nhất 2026",
    category: "CẨM NANG CHI PHÍ",
    readTime: "8 phút đọc",
    date: "02/08/2026",
    author: "Nguyễn Văn Hùng",
    views: "5.1k lượt xem",
    image: IMAGES.coastal,
    excerpt:
      "Chi tiết ngân sách dự trù cho các chuyến đi Đà Nẵng, Hội An, Huế và Quảng Bình từ tự túc đến trọn gói bao gồm vé máy bay, vé tham quan, khách sạn 3-4 sao và ẩm thực.",
    content: {
      intro:
        "Chi phí du lịch Miền Trung năm 2026 có những điều chỉnh gì mới? Bài viết dưới đây tổng hợp chi tiết từ thực tế hàng ngàn hành khách của Angel One Travel giúp bạn chủ động dự trù ngân sách.",
      sections: [
        {
          heading: "1. Chi phí di chuyển & Khách sạn",
          body: "Vé máy bay khứ hồi trung bình từ 1.800.000đ - 2.500.000đ/khách tùy mùa. Khách sạn 3 sao trung tâm biển Đà Nẵng dao động từ 550.000đ - 800.000đ/đêm có ăn sáng buffet.",
        },
        {
          heading: "2. Chi phí vé tham quan & Ẩm thực",
          body: "Vé cáp treo Bà Nà Hills kèm buffet 1.250.000đ. Vé Phố cổ Hội An 80.000đ, vé Đại Nội Huế 200.000đ. Chi phí ăn uống bình quân 250.000đ/người/ngày.",
        },
      ],
      conclusion:
        "Lựa chọn mua tour trọn gói hoặc gói Combo Xe + Khách sạn sẽ giúp tiết kiệm từ 15% đến 25% tổng ngân sách chuyến đi.",
    },
  },
  {
    id: "top-7-checkin-hue",
    title: "Top 7 địa điểm check-in không thể bỏ qua tại Cố Đô Huế",
    category: "ĐỊA ĐIỂM CHECK-IN",
    readTime: "5 phút đọc",
    date: "28/07/2026",
    author: "Lê Thanh Hương",
    views: "4.2k lượt xem",
    image: IMAGES.hue,
    excerpt:
      "Khám phá 7 góc chụp ảnh thơ mộng và mang đậm nét cổ kính hoàng cung Huế từ Đại Nội, Lăng Khải Định đến Đồi Vọng Cảnh và Trường Quốc Học Huế.",
    content: {
      intro:
        "Cố đô Huế luôn mang một nét đẹp lắng đọng, trầm mặc nhưng cực kỳ cổ kính và thơ mộng. Dưới đây là 7 điểm đến check-in được các tín đồ chụp ảnh yêu thích nhất 2026.",
      sections: [
        {
          heading: "1. Ngọ Môn & Điện Thái Hòa - Đại Nội Huế",
          body: "Góc chụp cổ trang đỉnh nhất với kiến trúc cung đình triều Nguyễn độc đáo.",
        },
        {
          heading: "2. Lăng Khải Định - Tinh hoa kiến trúc Á - Âu",
          body: "Kiến trúc khảm sành sứ công phu bậc nhất với các chi tiết đường nét đạt độ xảo diệu.",
        },
        {
          heading: "3. Đồi Vọng Cảnh & Chùa Thiên Mụ bên dòng Sông Hương",
          body: "Hoàng hôn trên sông Hương tuyệt đẹp ngắm nhìn toàn cảnh khúc quanh thơ mộng.",
        },
      ],
      conclusion:
        "Hãy thuê một bộ Cổ phục Nhật Bình để có những bức ảnh hoài niệm rực rỡ nhất tại Cố Đô.",
    },
  },
  {
    id: "kinh-nghiem-bana-hills",
    title: "Kinh nghiệm chinh phục Đỉnh Bà Nà Hills từ A đến Z",
    category: "KINH NGHIỆM DU LỊCH",
    readTime: "7 phút đọc",
    date: "25/07/2026",
    author: "Angel One Team",
    views: "6.8k lượt xem",
    image: IMAGES.bana,
    excerpt:
      "Bí quyết đi Bà Nà Hills không lo chờ đợi cáp treo, thời điểm check-in Cầu Vàng vắng người nhất và cẩm nang thưởng thức buffet hơn 100 món ăn đẳng cấp.",
    content: {
      intro:
        "Bà Nà Hills - đường lên tiên cảnh là điểm đến không thể bỏ qua tại Đà Nẵng. Nơi đây sở hữu công trình Cầu Vàng danh tiếng thế giới cùng không khí 4 mùa trong 1 ngày.",
      sections: [
        {
          heading: "1. Nên đi Bà Nà Hills vào thời gian nào?",
          body: "Nên có mặt tại ga cáp treo từ 7:30 sáng để lên Cầu Vàng lúc 8:00 khi chưa đông đúc khách đoàn.",
        },
      ],
      conclusion: "Đặt trước tuyến xe bus đón tiễn tận nơi để không lo hết xe chiều về.",
    },
  },
  {
    id: "am-thuc-cho-dem-son-tra",
    title: "Bí quyết thưởng thức trọn vẹn ẩm thực chợ đêm Sơn Trà Đà Nẵng",
    category: "ẨM THỰC MIỀN TRUNG",
    readTime: "4 phút đọc",
    date: "20/07/2026",
    author: "Trần Minh Đức",
    views: "2.9k lượt xem",
    image: IMAGES.beach,
    excerpt:
      "Điểm danh các món ăn vặt ngon ngất ngây: Hải sản nướng mỡ hành, kem bơ Chợ Bắc Mỹ An, bánh xèo tôm nhảy và bánh kẹp thơm lừng ngay chân Cầu Rồng.",
    content: {
      intro:
        "Chợ đêm Sơn Trà ngay dưới chân Cầu Rồng là thiên đường ẩm thực về đêm cho các du khách đam mê ăn uống.",
      sections: [
        {
          heading: "Top món ngon nhất định phải thử",
          body: "Tôm hùm nướng phô mai, ram cuốn lá cải và chè liên sầu riêng ngon ngọt dịu nhẹ.",
        },
      ],
      conclusion: "Hãy kết hợp đi chợ đêm Sơn Trà vào các tối Thứ 7 hoặc Chủ Nhật để xem Cầu Rồng phun lửa!",
    },
  },
  {
    id: "quang-binh-3n2d",
    title: "Lịch trình khám phá Quảng Bình 3N2Đ: Động Thiên Đường & Sông Chày",
    category: "KINH NGHIỆM DU LỊCH",
    readTime: "6 phút đọc",
    date: "15/07/2026",
    author: "Angel One Team",
    views: "3.8k lượt xem",
    image: IMAGES.coastal,
    excerpt:
      "Hành trình khám phá vương quốc hang động thế giới Phong Nha - Kẻ Bàng, trải nghiệm đu dây Zipline và chèo thuyền Kayak trên dòng Sông Chày Hang Tối xanh ngọc bích.",
    content: {
      intro:
        "Quảng Bình được mệnh danh là vương quốc hang động kỳ vĩ nhất thế giới. Hành trình 3N2Đ thích hợp cho các du khách yêu thích thiên nhiên và hoạt động thể thao ngoài trời.",
      sections: [
        {
          heading: "Trải nghiệm Zipline & Động Phong Nha",
          body: "Du thuyền trên sông Son vào Động Phong Nha và đu dây Zipline thả mình xuống dòng nước xanh trong.",
        },
      ],
      conclusion: "Mang theo đồ bơi và túi chống nước cho điện thoại để thoải mái chụp ảnh dưới nước.",
    },
  },
];

export const BlogPage: React.FC<BlogPageProps> = ({ onBackToHome, onOpenQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState("TẤT CẢ");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  // Email Newsletter Form State
  const [emailInput, setEmailInput] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput) {
      setNewsletterSubmitted(true);
    }
  };

  const categories = [
    "TẤT CẢ",
    "KINH NGHIỆM DU LỊCH",
    "CẨM NANG CHI PHÍ",
    "ĐỊA ĐIỂM CHECK-IN",
    "ẨM THỰC MIỀN TRUNG",
  ];

  const filteredArticles = BLOG_ARTICLES.filter((item) => {
    const matchesCat = selectedCategory === "TẤT CẢ" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const featuredArticle = filteredArticles[0] || BLOG_ARTICLES[0];
  const gridArticles = filteredArticles.slice(1);

  return (
    <div className="min-h-screen bg-white text-[#22251F]" style={{ fontFamily: "'Manrope', sans-serif" }}>
      
      {/* ── PANORAMIC LANDSCAPE HERO HEADER (Matching Homepage Hero Submerged Style) ──── */}
      <section className="relative w-full overflow-hidden bg-[#1a2318] text-white pt-28 pb-16 sm:pt-36 sm:pb-20">
        <img
          src={IMAGES.coastal}
          alt="Cẩm nang du lịch Đà Nẵng & Miền Trung"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />

        <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 md:px-10">
          <span className="text-[10px] sm:text-xs text-[#DDE3D6] uppercase tracking-widest font-extrabold block mb-2">
            CẨM NANG DU LỊCH & BÍ QUYẾT
          </span>
          <h1 className="text-[clamp(28px,4.5vw,54px)] font-extrabold text-white tracking-[-0.03em] leading-tight mb-3">
            Góc Nhìn & Cẩm Nang Du Lịch
          </h1>
          <p className="text-xs sm:text-sm text-[#DDE3D6]/90 max-w-2xl leading-relaxed" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            Những kinh nghiệm di chuyển, bí quyết tối ưu chi phí và gợi ý hành trình chi tiết nhất cho chuyến đi Đà Nẵng & Miền Trung từ Angel One Travel.
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-14">

        {/* ── ALIGNED FILTER TABS & RIGHT SEARCH BAR ROW ───────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-8 sm:mb-10 border-b border-[#D9D8D0] pb-4 sm:pb-5">
          
          {/* Left Category Filter Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-full text-[11px] font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#43563A] text-white shadow-xs"
                      : "bg-[#FAF9F5] border border-[#D9D8D0] text-[#464A43] hover:bg-[#EBEAE5]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Right Corner Search Bar */}
          <div className="relative w-full sm:w-64 flex-shrink-0">
            <input
              type="text"
              placeholder="Tìm kiếm cẩm nang..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FAF9F5] border border-[#D9D8D0] rounded-full pl-9 pr-4 py-2 text-xs text-[#22251F] placeholder:text-[#787D75] outline-none focus:border-[#43563A] focus:bg-white transition-all shadow-2xs"
            />
            <Search size={13} className="absolute left-3.5 top-2.5 text-[#787D75]" />
          </div>

        </div>

        {/* ── FEATURED HERO ARTICLE CARD (Compact Mobile First Layout) ───────── */}
        {featuredArticle && (
          <div className="mb-10 sm:mb-12 bg-[#FAF9F5] border border-[#D9D8D0] rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xs hover:border-[#43563A] hover:shadow-lg transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-5 sm:gap-6 items-center">
              
              {/* Left Image */}
              <div className="rounded-xl sm:rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[4/3] bg-[#DDE3D6] relative group">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 flex gap-1.5">
                  <span className="bg-[#43563A] text-white px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-extrabold uppercase shadow-xs">
                    NỔI BẬT
                  </span>
                  <span className="bg-white text-[#22251F] px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase shadow-2xs border border-[#D9D8D0]">
                    {featuredArticle.category}
                  </span>
                </div>
              </div>

              {/* Right Content */}
              <div className="flex flex-col justify-between h-full space-y-3 sm:space-y-4">
                <div>
                  <div className="flex items-center gap-2.5 text-[11px] text-[#787D75] font-semibold mb-2">
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {featuredArticle.readTime}
                    </span>
                    <span>•</span>
                    <span>{featuredArticle.date}</span>
                  </div>

                  <h2
                    onClick={() => setActiveArticle(featuredArticle)}
                    className="text-lg sm:text-2xl font-extrabold text-[#22251F] tracking-tight leading-snug hover:text-[#43563A] transition-colors cursor-pointer mb-2"
                  >
                    {featuredArticle.title}
                  </h2>

                  <p
                    className="text-xs sm:text-sm text-[#464A43] leading-relaxed line-clamp-2 sm:line-clamp-3 mb-4"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    {featuredArticle.excerpt}
                  </p>
                </div>

                {/* Olive Green CTA Button */}
                <div>
                  <button
                    onClick={() => setActiveArticle(featuredArticle)}
                    className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-[#43563A] hover:bg-[#34452F] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                  >
                    <span>Đọc cẩm nang</span>
                    <ArrowRight size={13} />
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* ── GRID OF ARTICLES (Mobile-First Compact 3 Columns Layout) ────────── */}
        <div className="mb-14 sm:mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {gridArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => setActiveArticle(article)}
                className="group bg-[#FAF9F5] border border-[#D9D8D0] rounded-2xl p-4 shadow-2xs hover:shadow-md hover:border-[#43563A] transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Card Image */}
                  <div className="rounded-xl overflow-hidden aspect-[16/10] sm:aspect-[4/3] bg-[#DDE3D6] mb-3.5 relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="bg-white/95 backdrop-blur-xs text-[#22251F] px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase shadow-2xs border border-[#D9D8D0]">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Metadata */}
                  <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-[#787D75] font-medium mb-1.5">
                    <span className="flex items-center gap-1">
                      <Clock size={11} /> {article.readTime}
                    </span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-sm sm:text-base font-extrabold text-[#22251F] tracking-tight leading-snug group-hover:text-[#43563A] transition-colors mb-1.5 line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Card Excerpt */}
                  <p
                    className="text-[11px] sm:text-xs text-[#787D75] leading-relaxed line-clamp-2 mb-3"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    {article.excerpt}
                  </p>
                </div>

                {/* Olive Green Link */}
                <div className="pt-2.5 border-t border-[#D9D8D0] flex items-center justify-between">
                  <span className="text-[11px] sm:text-xs font-bold text-[#43563A] group-hover:underline flex items-center gap-1">
                    Đọc tiếp <ArrowRight size={11} />
                  </span>
                  <span className="text-[10px] text-[#787D75]">{article.author}</span>
                </div>
              </div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12 bg-[#FAF9F5] rounded-2xl border border-[#D9D8D0]">
              <p className="text-xs sm:text-sm text-[#787D75]">Không tìm thấy bài viết phù hợp với từ khóa của bạn.</p>
              <button
                onClick={() => {
                  setSelectedCategory("TẤT CẢ");
                  setSearchQuery("");
                }}
                className="mt-3 px-4 py-2 bg-[#43563A] text-white rounded-full text-xs font-bold"
              >
                Xem tất cả cẩm nang
              </button>
            </div>
          )}
        </div>

      </div>

      {/* ── FULL-BLEED PANORAMIC EMAIL CTA SECTION (Matching Reference Screenshot 100%) ── */}
      <section className="relative w-full overflow-hidden bg-[#1f2a1b] text-white py-16 sm:py-20">
        {/* Full-width Panoramic Cầu Rồng Background Image */}
        <img
          src={IMAGES.danang}
          alt="Nhận bài viết cẩm nang du lịch Angel One Travel"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-black/65 backdrop-blur-xs" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/80" />

        {/* Section Container */}
        <div className="relative z-10 max-w-[1320px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
            
            {/* Left Content */}
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#DDE3D6] font-extrabold block">
                CẨM NANG & TIN TỨC DU LỊCH
              </span>
              <h2 className="text-[clamp(26px,3.8vw,48px)] font-extrabold text-white tracking-[-0.02em] leading-tight">
                Đăng ký nhận bài viết cẩm nang mới nhất
              </h2>
              <p
                className="text-[#DDE3D6]/90 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
              >
                Để lại địa chỉ Email của bạn, đội ngũ Angel One Travel sẽ gửi thông tin bài viết cẩm nang, kinh nghiệm du lịch và lịch trình Miền Trung mới nhất hàng tuần!
              </p>
            </div>

            {/* Right Simple Email Input & Send Button (Matching Screenshot 100%) */}
            <div className="bg-black/35 backdrop-blur-xl border border-white/25 rounded-3xl p-6 sm:p-7 shadow-2xl">
              {newsletterSubmitted ? (
                <div className="text-center py-4 space-y-2 animate-in fade-in">
                  <div className="w-12 h-12 bg-[#DDE3D6] text-[#43563A] rounded-full flex items-center justify-center mx-auto shadow">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="font-extrabold text-lg text-white">Đăng ký thành công!</h4>
                  <p className="text-xs text-[#DDE3D6]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                    Cảm ơn bạn! Các bài viết cẩm nang mới nhất sẽ được gửi trực tiếp tới <strong>{emailInput}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#DDE3D6] mb-1.5">
                      Địa chỉ Email của bạn *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="vidu@gmail.com"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full bg-white/10 backdrop-blur-md border border-white/40 rounded-full px-5 py-3 text-xs sm:text-sm text-white placeholder:text-white/60 outline-none focus:border-white focus:bg-white/20 transition-all shadow-inner"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#43563A] hover:bg-[#34452F] text-white rounded-full py-3.5 px-6 text-xs sm:text-sm font-extrabold transition-all duration-300 shadow-xl cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Gửi yêu cầu ngay</span>
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ── FULL ARTICLE READING MODAL ─────────────────────────────────────── */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-[#FAF9F5] text-[#22251F] rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#D9D8D0] p-5 sm:p-8 relative animate-in zoom-in-95">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#EBEAE5] hover:bg-[#43563A] hover:text-white text-[#22251F] flex items-center justify-center transition-all cursor-pointer font-bold text-xs"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="mb-4 space-y-2 pr-8">
              <span className="bg-[#43563A] text-white px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider inline-block">
                {activeArticle.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight leading-snug">
                {activeArticle.title}
              </h2>
              <div className="flex items-center gap-3 text-[11px] text-[#787D75] font-semibold pt-0.5">
                <span>{activeArticle.author}</span>
                <span>•</span>
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="rounded-xl overflow-hidden aspect-[16/9] mb-6 bg-[#DDE3D6]">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content Body */}
            <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-[#464A43]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              <p className="font-semibold text-xs sm:text-sm text-[#22251F] italic bg-white p-4 rounded-xl border border-[#D9D8D0]">
                "{activeArticle.content.intro}"
              </p>

              {activeArticle.content.sections.map((sec, idx) => (
                <div key={idx} className="space-y-2 pt-1">
                  <h3 className="font-extrabold text-sm sm:text-base text-[#22251F]" style={{ fontFamily: "'Manrope', sans-serif" }}>
                    {sec.heading}
                  </h3>
                  <p>{sec.body}</p>
                  {sec.bulletPoints && (
                    <ul className="space-y-1.5 pl-3">
                      {sec.bulletPoints.map((bp, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs font-medium">
                          <CheckCircle2 size={13} className="text-[#43563A] flex-shrink-0 mt-0.5" />
                          <span>{bp}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <div className="pt-3 border-t border-[#D9D8D0]">
                <p className="font-bold text-xs sm:text-sm text-[#43563A]">
                  💡 Lời khuyên từ Angel One: {activeArticle.content.conclusion}
                </p>
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="mt-6 pt-4 border-t border-[#D9D8D0] flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => {
                  setActiveArticle(null);
                  onOpenQuote();
                }}
                className="px-6 py-2.5 bg-[#43563A] hover:bg-[#34452F] text-white rounded-full text-xs font-extrabold transition-all shadow-xs cursor-pointer"
              >
                Nhận báo giá tour liên quan
              </button>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2.5 border border-[#D9D8D0] text-[#22251F] rounded-full text-xs font-semibold hover:bg-white transition-all cursor-pointer"
              >
                Đóng cẩm nang
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
