import React, { useState } from "react";
import { ArrowRight, Clock, X } from "lucide-react";
import { BLOG_POSTS } from "../data/travelData";
import { BlogPost } from "../types/travel";

interface BlogProps {
  onNavigateToBlog?: () => void;
}

export const Blog: React.FC<BlogProps> = ({ onNavigateToBlog }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const featuredPost = {
    ...BLOG_POSTS[0],
    tags: ["Cẩm nang", "Gia đình", "Lịch trình"],
  };

  const rightPosts = [
    {
      ...BLOG_POSTS[1],
      tags: ["Du lịch", "Văn hóa", "Cố Đô Huế"],
    },
    {
      ...BLOG_POSTS[2],
      tags: ["Tư vấn", "Kinh nghiệm", "Đà Nẵng"],
    },
  ];

  return (
    <section id="blog" className="py-16 md:py-24 bg-[#FAF9F5]" style={{ fontFamily: "'Manrope', sans-serif" }}>
      <div className="max-w-[1320px] mx-auto px-5 md:px-10">
        
        {/* Header Row (Matching Reference Image) */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-end mb-10">
          <div>
            <span className="text-xs text-[#787D75] uppercase tracking-widest font-bold mb-2 block">CẨM NANG DU LỊCH</span>
            <h2 className="text-[clamp(28px,3.8vw,48px)] font-extrabold text-[#22251F] tracking-[-0.02em] leading-tight">
              Kinh nghiệm & Bí quyết<br />
              du lịch Miền Trung
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-3 max-w-md">
            <p
              className="text-xs sm:text-sm text-[#787D75] leading-relaxed lg:text-right"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              Những câu chuyện hành trình, bí quyết tiết kiệm chi phí và hướng dẫn chi tiết nhất cho chuyến đi Đà Nẵng & Miền Trung của bạn.
            </p>
            <button
              onClick={() => {
                if (onNavigateToBlog) {
                  onNavigateToBlog();
                } else {
                  setSelectedPost(featuredPost);
                }
              }}
              className="inline-flex items-center gap-2 border border-[#D9D8D0] bg-white hover:bg-[#43563A] hover:text-white hover:border-[#43563A] text-[#22251F] text-xs font-bold px-5 py-2.5 rounded-full transition-all duration-300 shadow-2xs cursor-pointer"
            >
              Xem tất cả bài viết <ArrowRight size={13} />
            </button>
          </div>
        </div>

        {/* Perfectly Proportioned Grid: Left Card and Right 2-Cards Grid align 100% top and bottom */}
        <div className="grid lg:grid-cols-2 gap-5 lg:gap-6 items-stretch">
          
          {/* Left Column: Featured Card */}
          <div
            onClick={() => {
              if (onNavigateToBlog) {
                onNavigateToBlog();
              } else {
                setSelectedPost(featuredPost);
              }
            }}
            className="group border border-[#D9D8D0] rounded-3xl overflow-hidden bg-white hover:border-[#43563A] hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-between h-full"
          >
            <div className="relative flex-1 min-h-[260px] sm:min-h-[300px] overflow-hidden bg-[#DDE3D6]">
              <img
                src={featuredPost.img}
                alt={featuredPost.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-3.5 right-3.5 bg-black/40 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1 rounded-full flex items-center gap-1.5 shadow">
                <Clock size={11} /> {featuredPost.time}
              </div>
            </div>

            <div className="p-5 flex flex-col justify-between bg-white">
              <h3 className="font-extrabold text-[#22251F] text-lg sm:text-xl tracking-tight leading-snug mb-3 group-hover:text-[#43563A] transition-colors">
                {featuredPost.title}
              </h3>

              <div className="flex items-center justify-between pt-3 border-t border-[#D9D8D0]">
                <div className="flex flex-wrap gap-1.5">
                  {featuredPost.tags.map((t) => (
                    <span
                      key={t}
                      className="bg-[#FAF9F5] border border-[#D9D8D0] text-[#787D75] text-[10px] font-medium px-2.5 py-0.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="w-8 h-8 rounded-full bg-[#22251F] text-white group-hover:bg-[#43563A] flex items-center justify-center transition-all duration-300 shadow flex-shrink-0 ml-2">
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 2 Compact Stacked Cards */}
          <div className="flex flex-col gap-4 sm:gap-5 h-full justify-between">
            {rightPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => {
                  if (onNavigateToBlog) {
                    onNavigateToBlog();
                  } else {
                    setSelectedPost(post);
                  }
                }}
                className="group border border-[#D9D8D0] rounded-3xl overflow-hidden bg-white hover:border-[#43563A] hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-between flex-1 h-full"
              >
                <div className="relative h-[130px] sm:h-[145px] w-full overflow-hidden bg-[#DDE3D6] flex-shrink-0">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1 rounded-full flex items-center gap-1.5 shadow">
                    <Clock size={11} /> {post.time}
                  </div>
                </div>

                <div className="p-4 sm:p-4.5 flex-1 flex flex-col justify-between bg-white">
                  <h3 className="font-extrabold text-[#22251F] text-sm sm:text-base tracking-tight leading-snug mb-2 group-hover:text-[#43563A] transition-colors line-clamp-1">
                    {post.title}
                  </h3>

                  <div className="flex items-center justify-between pt-2.5 border-t border-[#D9D8D0]">
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.map((t) => (
                        <span
                          key={t}
                          className="bg-[#FAF9F5] border border-[#D9D8D0] text-[#787D75] text-[10px] font-medium px-2.5 py-0.5 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="w-8 h-8 rounded-full bg-[#22251F] text-white group-hover:bg-[#43563A] flex items-center justify-center transition-all duration-300 shadow flex-shrink-0 ml-2">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Modal for Post */}
        {selectedPost && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-xl max-h-[85vh] bg-[#FAF9F5] rounded-3xl overflow-hidden border border-[#D9D8D0] shadow-2xl flex flex-col">
              <div className="relative h-56 w-full flex-shrink-0">
                <img src={selectedPost.img} alt={selectedPost.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40" />
                <button
                  onClick={() => setSelectedPost(null)}
                  aria-label="Close modal"
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 cursor-pointer"
                >
                  <X size={16} />
                </button>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="bg-[#43563A] text-white text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full mb-1 inline-block">
                    {selectedPost.tag}
                  </span>
                  <h3 className="text-xl font-bold leading-tight">{selectedPost.title}</h3>
                </div>
              </div>

              <div className="p-6 overflow-y-auto space-y-4">
                <p className="text-sm text-[#464A43] leading-relaxed font-medium" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                  {selectedPost.snippet}
                </p>
                <p className="text-sm text-[#787D75] leading-relaxed" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                  Khi du lịch Đà Nẵng và miền Trung, việc lên kế hoạch chi tiết trước khi đi giúp bạn tiết kiệm đến 30% chi phí di chuyển và thời gian chờ đợi. Angel One Travel luôn có đội ngũ tư vấn miễn phí 24/7 để hỗ trợ bạn đặt xe, vé và phòng với mức giá đại lý tốt nhất.
                </p>
              </div>

              <div className="p-4 bg-white border-t border-[#D9D8D0] flex justify-end">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-6 py-2.5 bg-[#43563A] text-white text-sm font-medium rounded-full hover:bg-[#34452F] cursor-pointer"
                >
                  Đóng cẩm nang
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
