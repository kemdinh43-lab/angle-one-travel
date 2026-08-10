import React, { useState, useEffect } from "react";
import {
  Clock,
  Eye,
  Calendar,
  ArrowLeft,
  ArrowUpRight,
  Search,
  CheckCircle2,
  Send,
  Share2,
  Facebook,
  MessageCircle,
  PhoneCall,
  Bookmark,
  Sparkles
} from "lucide-react";
import { IMAGES } from "../data/travelData";

interface BlogPageProps {
  onBackToHome: () => void;
  onOpenQuote: () => void;
}

export interface ArticleSection {
  id: string;
  heading: string;
  body: string;
  bulletPoints?: string[];
  image?: string;
  imageCaption?: string;
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
    sections: ArticleSection[];
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
          id: "lich-trinh-ngay-1",
          heading: "1. Lịch trình chi tiết Ngày 1: Đón sân bay – Biển Mỹ Khê – Phố cổ Hội An",
          body: "Buổi sáng đáp chuyến bay đến Đà Nẵng, xe Angel One đón tận sân bay hỗ trợ đưa về khách sạn trung tâm nhận phòng nghỉ ngơi. Chiều tắm biển Mỹ Khê và thưởng thức đặc sản bánh tráng thịt heo 2 đầu da nổi tiếng. Đến 16:30 xuất phát đi Phố cổ Hội An để kịp đón hoàng hôn bên dòng sông Hoài.",
          bulletPoints: [
            "17:30 - Thưởng thức cao lầu Thanh hoặc cơm gà Bà Buổi chuẩn vị",
            "18:30 - Đi thuyền gỗ thả hoa đăng ước nguyện trên sông Hoài",
            "20:00 - Check-in Chùa Cầu cổ kính và dạo chơi chợ đêm đèn lồng"
          ],
          image: IMAGES.hoian,
          imageCaption: "Phố cổ Hội An rực rỡ sắc màu lung linh về đêm bên dòng sông Hoài"
        },
        {
          id: "lich-trinh-ngay-2",
          heading: "2. Lịch trình chi tiết Ngày 2: Bán đảo Sơn Trà – Chợ Cồn – Mua quà mang về",
          body: "Dậy sớm ngắm bình minh trên biển Mỹ Khê, ghé Chùa Linh Ứng thắp hương cầu an và ngắm toàn cảnh vịnh Đà Nẵng từ trên cao. Trưa thưởng thức hải sản tươi sống tại khu vực bãi biển và ghé Chợ Cồn mua chả bò, mắm nêm làm quà.",
          bulletPoints: [
            "07:00 - Thưởng thức bún chả cá Đà Nẵng thơm ngon nóng hổi",
            "08:30 - Check-in tượng Phật Bà Quan Âm cao 67m tại Sơn Trà",
            "11:30 - Ăn trưa hải sản tươi sống niêm yết giá tại nhà hàng Mỹ Hạnh",
            "14:00 - Mua sắm quà đặc sản chả bò tại Chợ Cồn trước khi ra sân bay"
          ],
          image: IMAGES.coastal,
          imageCaption: "Cung đường ven biển Sơn Trà đẹp tựa tranh vẽ hướng ra biển xanh"
        },
        {
          id: "du-tru-chi-phi",
          heading: "3. Bảng dự trù chi phí thực tế cho 1 khách",
          body: "Tổng chi phí chuyến đi 2N1Đ dao động từ 2.200.000đ đến 3.100.000đ/người (chưa bao gồm vé máy bay). Việc đặt trước gói Combo Xe Đưa Đón + Vé Tham Quan giúp tiết kiệm đáng kể thời gian chờ đợi.",
          bulletPoints: [
            "Khách sạn 3 sao trung tâm biển: 350.000đ/đêm/khách",
            "Xe đưa đón sân bay & Hội An 2 chiều: 250.000đ/khách",
            "Ăn uống 4 bữa chính + quà vặt: 600.000đ/khách"
          ]
        }
      ],
      conclusion:
        "Chuyến đi 2N1Đ hoàn toàn thoải mái nếu bạn chủ động đặt dịch vụ xe đưa đón cố định và vé trực tuyến qua Angel One Travel để tránh phải xếp hàng chờ đợi."
    }
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
        "Chi phí du lịch Miền Trung năm 2026 có những điều chỉnh gì mới? Bài viết dưới đây tổng hợp chi tiết từ thực tế hàng ngàn hành khách của Angel One Travel giúp bạn chủ động dự trù ngân sách minh bạch nhất.",
      sections: [
        {
          id: "chi-phi-di-chuyen",
          heading: "1. Chi phí di chuyển & Khách sạn",
          body: "Vé máy bay khứ hồi trung bình từ 1.800.000đ - 2.500.000đ/khách tùy mùa cao điểm hay thấp điểm. Khách sạn 3 sao trung tâm biển Đà Nẵng dao động từ 550.000đ - 800.000đ/đêm có buffet ăn sáng.",
          bulletPoints: [
            "Vé máy bay khứ hồi Hà Nội/TP.HCM - Đà Nẵng: 1.800.000đ - 2.600.000đ",
            "Thuê xe đưa đón sân bay Đà Nẵng: 150.000đ - 250.000đ/chuyến",
            "Khách sạn 4 sao ven biển: 900.000đ - 1.400.000đ/đêm"
          ],
          image: IMAGES.coastal,
          imageCaption: "Các resort & khách sạn ven biển Đà Nẵng luôn sở hữu tầm nhìn đắt giá"
        },
        {
          id: "chi-phi-ve-an-uong",
          heading: "2. Chi phí vé tham quan & Ẩm thực",
          body: "Vé cáp treo Bà Nà Hills kèm buffet 1.250.000đ/người lớn. Vé Phố cổ Hội An 80.000đ, vé Đại Nội Huế 200.000đ. Chi phí ăn uống bình quân 250.000đ/người/ngày.",
          bulletPoints: [
            "Vé Bà Nà Hills trọn gói cáp treo + Buffet: 1.250.000đ",
            "Vé tham quan Phố cổ Hội An: 80.000đ",
            "Chi phí ăn uống hải sản & ẩm thực địa phương: 300.000đ/ngày"
          ]
        }
      ],
      conclusion:
        "Lựa chọn mua tour trọn gói hoặc gói Combo Xe + Khách sạn tại Angel One Travel sẽ giúp bạn tiết kiệm từ 15% đến 25% tổng ngân sách chuyến đi."
    }
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
        "Cố đô Huế luôn mang một nét đẹp lắng đọng, trầm mặc nhưng cực kỳ cổ kính và thơ mộng. Dưới đây là các điểm đến check-in được các tín đồ chụp ảnh yêu thích nhất 2026.",
      sections: [
        {
          id: "dai-noi-hue",
          heading: "1. Ngọ Môn & Điện Thái Hòa - Đại Nội Huế",
          body: "Góc chụp cổ trang đỉnh nhất với kiến trúc cung đình triều Nguyễn độc đáo. Hãy chuẩn bị những bộ trang phục Nhật Bình hoặc áo dài truyền thống để tạo nên khung hình vượt thời gian.",
          image: IMAGES.hue,
          imageCaption: "Vẻ đẹp cổ kính trầm mặc của Đại Nội Huế"
        },
        {
          id: "lang-khai-dinh",
          heading: "2. Lăng Khải Định - Tinh hoa kiến trúc Á - Âu",
          body: "Kiến trúc khảm sành sứ công phu bậc nhất với các chi tiết đường nét đạt độ xảo diệu tinh tế, là bối cảnh chụp ảnh được giới trẻ săn lùng nhiều nhất.",
          bulletPoints: [
            "Check-in điện Khải Thành khảm gốm sứ độc bản",
            "Chụp ảnh góc nghiêng cầu thang rồng đá uy nghi"
          ]
        }
      ],
      conclusion:
        "Hãy thuê một bộ Cổ phục Nhật Bình tại cổng Đại Nội để có những bức ảnh hoài niệm rực rỡ nhất tại Cố Đô."
    }
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
          id: "thoi-gian-vang",
          heading: "1. Khung giờ vàng check-in Cầu Vàng không vắng người",
          body: "Nên có mặt tại ga cáp treo từ 7:30 sáng để lên Cầu Vàng lúc 8:00 khi chưa đông đúc khách đoàn. Khung giờ chiều từ 16:00 cũng là lúc Cầu Vàng đón hoàng hôn rất thơ mộng.",
          image: IMAGES.bana,
          imageCaption: "Biểu tượng Cầu Vàng danh tiếng vươn ra mây trời Bà Nà Hills"
        }
      ],
      conclusion:
        "Đặt trước tuyến xe riêng đón tiễn tận nơi của Angel One Travel để không lo hết xe chiều về và thoải mái vui chơi."
    }
  }
];

export const BlogPage: React.FC<BlogPageProps> = ({ onBackToHome, onOpenQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState("TẤT CẢ");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [activeHeadingId, setActiveHeadingId] = useState<string>("");

  // Email Newsletter State
  const [emailInput, setEmailInput] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  // Scroll to Top when Article opens
  useEffect(() => {
    if (activeArticle) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (activeArticle.content.sections.length > 0) {
        setActiveHeadingId(activeArticle.content.sections[0].id);
      }
    }
  }, [activeArticle]);

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
    "ĐỊA ĐIỂM CHECK-IN"
  ];

  const filteredArticles = BLOG_ARTICLES.filter((item) => {
    const matchesCat = selectedCategory === "TẤT CẢ" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const scrollToSection = (id: string) => {
    setActiveHeadingId(id);
    const elem = document.getElementById(id);
    if (elem) {
      const yOffset = -120;
      const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // ═════════════════════════════════════════════════════════════════════════
  // ARTICLE DETAIL VIEW (100% MATCHING REFERENCE SCREENSHOT SPECIFICATIONS)
  // ═════════════════════════════════════════════════════════════════════════
  if (activeArticle) {
    const relatedArticles = BLOG_ARTICLES.filter((a) => a.id !== activeArticle.id).slice(0, 3);

    return (
      <div className="min-h-screen bg-[#FAF9F5] text-[#22251F]" style={{ fontFamily: "'Manrope', sans-serif" }}>
        
        {/* Top Header Bar with Back Button */}
        <div className="bg-white border-b border-[#D9D8D0] sticky top-0 z-40 shadow-2xs">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <button
              onClick={() => setActiveArticle(null)}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#22251F] hover:text-[#43563A] transition-colors cursor-pointer bg-[#FAF9F5] hover:bg-[#EBEAE5] px-4 py-2 rounded-full border border-[#D9D8D0]"
            >
              <ArrowLeft size={15} />
              <span>Quay lại danh sách bài viết</span>
            </button>

            <span className="hidden sm:inline-block text-xs font-mono font-extrabold text-[#787D75] uppercase tracking-wider">
              {activeArticle.category}
            </span>

            <button
              onClick={onOpenQuote}
              className="bg-[#43563A] hover:bg-[#34452F] text-white text-xs font-extrabold px-4 py-2 rounded-full transition-all shadow-xs cursor-pointer flex items-center gap-1.5"
            >
              <span>Nhận báo giá</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

        {/* ── ARTICLE HEADER ──────────────────────────────────────────────── */}
        <header className="pt-12 sm:pt-16 pb-8 px-4 max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#E8ECE5] text-[#43563A] text-xs font-bold uppercase tracking-widest border border-[#43563A]/20">
            {activeArticle.category}
          </div>

          <h1 className="text-[clamp(26px,4.5vw,48px)] font-extrabold text-[#22251F] tracking-[-0.03em] leading-[1.18] max-w-3xl mx-auto">
            {activeArticle.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-[#787D75] font-semibold pt-2">
            <span>Tác giả: <strong className="text-[#22251F]">{activeArticle.author}</strong></span>
            <span>•</span>
            <span>{activeArticle.date}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Clock size={13} /> {activeArticle.readTime}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Eye size={13} /> {activeArticle.views}</span>
          </div>
        </header>

        {/* ── FULL HERO IMAGE ────────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 mb-12 sm:mb-16">
          <div className="aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-xl border border-[#D9D8D0] bg-[#E5E7EB] relative group">
            <img
              src={activeArticle.image}
              alt={activeArticle.title}
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
            />
          </div>
        </div>

        {/* ── MAIN CONTENT & STICKY TOC LAYOUT (Matching Reference Screenshot 100%) ── */}
        <main className="max-w-5xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-10 lg:gap-14 items-start">
            
            {/* ── LEFT STICKY SIDEBAR: TABLE OF CONTENTS & SHARE (MATCHING REFERENCE IMAGE) ── */}
            <aside className="lg:sticky lg:top-24 space-y-8 bg-white lg:bg-transparent p-6 lg:p-0 rounded-2xl border border-[#D9D8D0] lg:border-none shadow-xs lg:shadow-none">
              
              {/* Table of Contents Box */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#787D75] border-b border-[#D9D8D0] pb-2">
                  Mục lục bài viết
                </h4>
                
                <nav className="space-y-2 text-xs">
                  {activeArticle.content.sections.map((sec, idx) => {
                    const isActive = activeHeadingId === sec.id;
                    return (
                      <button
                        key={sec.id}
                        onClick={() => scrollToSection(sec.id)}
                        className={`w-full text-left font-semibold leading-relaxed transition-all cursor-pointer block pl-2 py-1 rounded border-l-2 ${
                          isActive
                            ? "border-[#43563A] text-[#43563A] font-extrabold bg-[#F4F6F2]"
                            : "border-transparent text-[#6B7280] hover:text-[#22251F] hover:border-[#D9D8D0]"
                        }`}
                      >
                        {sec.heading}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Social Share Article Section */}
              <div className="space-y-3 pt-4 border-t border-[#D9D8D0]">
                <h4 className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#787D75]">
                  Chia sẻ bài viết
                </h4>
                
                <div className="flex items-center gap-2">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-2xs"
                    title="Chia sẻ qua Facebook"
                  >
                    <Facebook size={16} />
                  </a>
                  <a
                    href="https://zalo.me/0768643446"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-[#0068FF] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-2xs"
                    title="Gửi tin qua Zalo"
                  >
                    <MessageCircle size={16} />
                  </a>
                  <button
                    onClick={() => {
                      navigator.clipboard?.writeText(window.location.href);
                      alert("Đã sao chép liên kết bài viết!");
                    }}
                    className="w-9 h-9 rounded-full bg-[#E5E7EB] text-[#22251F] flex items-center justify-center hover:bg-[#43563A] hover:text-white transition-all shadow-2xs cursor-pointer"
                    title="Sao chép liên kết"
                  >
                    <Share2 size={16} />
                  </button>
                </div>
              </div>

              {/* Quick Consultation Promo Box */}
              <div className="bg-[#1A2316] text-white rounded-2xl p-5 space-y-3 shadow-lg">
                <div className="flex items-center gap-2 text-[#A3B89A] text-xs font-extrabold">
                  <Sparkles size={14} />
                  <span>TƯ VẤN DU LỊCH 24/7</span>
                </div>
                <h5 className="font-bold text-sm leading-snug">
                  Bạn cần tư vấn lịch trình theo nhu cầu riêng?
                </h5>
                <button
                  onClick={onOpenQuote}
                  className="w-full bg-[#43563A] hover:bg-[#34452F] text-white font-bold py-2.5 px-4 rounded-full text-xs transition-all cursor-pointer shadow"
                >
                  Nhận tư vấn ngay
                </button>
              </div>

            </aside>

            {/* ── RIGHT MAIN ARTICLE BODY ────────────────────────────────────── */}
            <article className="bg-white rounded-3xl p-6 sm:p-10 border border-[#D9D8D0] shadow-sm space-y-8">
              
              {/* Intro Callout Box */}
              <div
                className="bg-[#FAF9F5] border-l-4 border-[#43563A] p-5 sm:p-6 rounded-r-2xl text-sm sm:text-base leading-relaxed text-[#22251F] font-semibold italic"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
              >
                "{activeArticle.content.intro}"
              </div>

              {/* Article Sections */}
              {activeArticle.content.sections.map((sec) => (
                <section key={sec.id} id={sec.id} className="space-y-4 pt-2 scroll-mt-28">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#22251F] tracking-tight leading-snug">
                    {sec.heading}
                  </h2>

                  <p
                    className="text-xs sm:text-sm md:text-base leading-relaxed text-[#4B5563]"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    {sec.body}
                  </p>

                  {/* Optional Section Image */}
                  {sec.image && (
                    <figure className="my-6 rounded-2xl overflow-hidden border border-[#D9D8D0] bg-[#FAF9F5]">
                      <img
                        src={sec.image}
                        alt={sec.heading}
                        className="w-full h-auto max-h-[420px] object-cover"
                      />
                      {sec.imageCaption && (
                        <figcaption className="p-3 text-center text-xs text-[#787D75] italic bg-[#FAF9F5]">
                          {sec.imageCaption}
                        </figcaption>
                      )}
                    </figure>
                  )}

                  {/* Optional Bullet Points */}
                  {sec.bulletPoints && (
                    <div className="bg-[#FAF9F5] rounded-2xl p-4 sm:p-5 border border-[#D9D8D0] space-y-2">
                      {sec.bulletPoints.map((bp, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-[#22251F]">
                          <CheckCircle2 size={16} className="text-[#43563A] flex-none mt-0.5" />
                          <span>{bp}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}

              {/* Conclusion Box */}
              <div className="pt-6 border-t border-[#D9D8D0] space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#43563A] bg-[#DDE3D6] px-3 py-1 rounded-full">
                  <Sparkles size={13} />
                  <span>Lời khuyên từ Angel One Travel</span>
                </div>
                <p
                  className="text-sm sm:text-base font-bold text-[#22251F] leading-relaxed"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                  {activeArticle.content.conclusion}
                </p>
              </div>

              {/* Bottom Action Footer */}
              <div className="pt-6 border-t border-[#D9D8D0] flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#FAF9F5] p-6 rounded-2xl">
                <div>
                  <h4 className="font-extrabold text-sm text-[#22251F]">Sẵn sàng khám phá tuyến đường này?</h4>
                  <p className="text-xs text-[#787D75]" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                    Liên hệ ngay với Angel One để nhận lịch trình tùy chỉnh 100% miễn phí!
                  </p>
                </div>

                <button
                  onClick={onOpenQuote}
                  className="w-full sm:w-auto bg-[#43563A] hover:bg-[#34452F] text-white font-extrabold py-3 px-6 rounded-full text-xs sm:text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Nhận báo giá ngay</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>

            </article>

          </div>
        </main>

        {/* ── RELATED ARTICLES SECTION AT BOTTOM ──────────────────────────── */}
        <section className="bg-white border-t border-[#D9D8D0] py-16">
          <div className="max-w-5xl mx-auto px-4">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#22251F] mb-8 tracking-tight">
              Bài viết cẩm nang liên quan
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedArticles.map((art) => (
                <div
                  key={art.id}
                  onClick={() => setActiveArticle(art)}
                  className="group cursor-pointer space-y-3 bg-[#FAF9F5] p-4 rounded-2xl border border-[#D9D8D0] hover:shadow-lg transition-all"
                >
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#E5E7EB]">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-[#43563A] uppercase tracking-wider block">
                      {art.category}
                    </span>
                    <h4 className="font-extrabold text-sm text-[#22251F] line-clamp-2 group-hover:text-[#43563A] transition-colors">
                      {art.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    );
  }

  // ═════════════════════════════════════════════════════════════════════════
  // BLOG LISTING PAGE VIEW
  // ═════════════════════════════════════════════════════════════════════════
  return (
    <div className="min-h-screen bg-white text-[#22251F]" style={{ fontFamily: "'Manrope', sans-serif" }}>
      
      {/* Hero Header */}
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

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-8 sm:mb-10 border-b border-[#D9D8D0] pb-4 sm:pb-5">
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

        {/* Articles Grid */}
        <div className="mb-14 sm:mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => setActiveArticle(article)}
                className="group cursor-pointer space-y-3.5"
              >
                <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden bg-[#E5E7EB] relative shadow-2xs group-hover:shadow-lg transition-all duration-500">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-md text-[#111827] px-3 py-1 rounded-full text-[10px] font-extrabold uppercase shadow-xs border border-white/40">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5 px-1">
                  <div className="flex items-center gap-2 text-[11px] text-[#6B7280] font-medium">
                    <span className="flex items-center gap-1">
                      <Clock size={11} /> {article.readTime}
                    </span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-[#111827] tracking-tight leading-snug group-hover:text-[#43563A] transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p
                    className="text-xs sm:text-sm text-[#6B7280] leading-relaxed line-clamp-2"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    {article.excerpt}
                  </p>
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

      {/* Panoramic Email Newsletter Banner */}
      <section className="relative w-full overflow-hidden bg-[#1f2a1b] text-white py-16 sm:py-20">
        <img
          src={IMAGES.danang}
          alt="Nhận bài viết cẩm nang du lịch Angel One Travel"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-black/65 backdrop-blur-xs" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/80" />

        <div className="relative z-10 max-w-[1320px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
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

    </div>
  );
};
