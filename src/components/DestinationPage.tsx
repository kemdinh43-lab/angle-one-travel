import React, { useState, useEffect, useRef, useCallback } from "react";

interface DestinationItem {
  title: string;
  kicker: string;
  desc: string;
  season: string;
  duration: string;
  image: string;
}

const DESTINATIONS: DestinationItem[] = [
  {
    title: "Đà Nẵng",
    kicker: "Thành phố biển",
    desc: "Nhịp sống hiện đại, bờ biển dài và vị trí thuận lợi để kết nối Hội An, Huế và các hành trình miền Trung.",
    season: "Tháng 2 — Tháng 8",
    duration: "Gợi ý 3N2Đ",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=90",
  },
  {
    title: "Phú Quốc",
    kicker: "Đảo ngọc phương Nam",
    desc: "Bãi biển trong xanh, hoàng hôn rực rỡ và hệ sinh thái nghỉ dưỡng phù hợp cho gia đình, cặp đôi và doanh nghiệp.",
    season: "Tháng 11 — Tháng 4",
    duration: "Gợi ý 4N3Đ",
    image: "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=2200&q=90",
  },
  {
    title: "Hội An",
    kicker: "Di sản và nhịp sống",
    desc: "Phố cổ vàng ấm, đèn lồng và những con hẻm yên tĩnh tạo nên một điểm đến giàu bản sắc và cảm xúc.",
    season: "Tháng 2 — Tháng 8",
    duration: "Gợi ý 2N1Đ",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=2200&q=90",
  },
  {
    title: "Quy Nhơn",
    kicker: "Biển miền Trung",
    desc: "Cảnh quan hoang sơ, biển xanh và những trải nghiệm đậm chất địa phương tạo nên một hành trình nhẹ nhàng nhưng khác biệt.",
    season: "Tháng 3 — Tháng 9",
    duration: "Gợi ý 3N2Đ",
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=2200&q=90",
  },
  {
    title: "Nha Trang",
    kicker: "Vịnh biển nhiệt đới",
    desc: "Biển đảo, nghỉ dưỡng và hoạt động giải trí đa dạng phù hợp cho chuyến đi gia đình, nhóm bạn và khách đoàn.",
    season: "Tháng 1 — Tháng 8",
    duration: "Gợi ý 4N3Đ",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2200&q=90",
  },
  {
    title: "Đà Lạt",
    kicker: "Cao nguyên sương",
    desc: "Khí hậu mát lành, rừng thông và nhịp sống chậm tạo nên không gian phù hợp để nghỉ ngơi và tái tạo năng lượng.",
    season: "Quanh năm",
    duration: "Gợi ý 3N2Đ",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=90",
  },
  {
    title: "Ninh Bình",
    kicker: "Thiên nhiên và di sản",
    desc: "Núi đá, sông nước và những cánh đồng mở ra khung cảnh thanh bình cho hành trình khám phá chậm và sâu.",
    season: "Tháng 1 — Tháng 5",
    duration: "Gợi ý 2N1Đ",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=2200&q=90",
  },
  {
    title: "Hạ Long",
    kicker: "Kỳ quan thiên nhiên",
    desc: "Du thuyền giữa hàng nghìn đảo đá vôi và mặt nước xanh thẳm mang lại một trải nghiệm đặc trưng của miền Bắc.",
    season: "Tháng 10 — Tháng 4",
    duration: "Gợi ý 3N2Đ",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=2200&q=90",
  },
  {
    title: "Huế",
    kicker: "Kinh đô di sản",
    desc: "Kiến trúc cung đình, nhịp sống trầm lắng và chiều sâu văn hóa mang đến một hành trình giàu giá trị lịch sử.",
    season: "Tháng 1 — Tháng 8",
    duration: "Gợi ý 2N1Đ",
    image: "https://images.unsplash.com/photo-1513415564515-763d91423bdd?auto=format&fit=crop&w=2200&q=90",
  },
  {
    title: "Sa Pa",
    kicker: "Núi rừng Tây Bắc",
    desc: "Ruộng bậc thang, bản làng và khí hậu vùng cao tạo nên trải nghiệm thiên nhiên, văn hóa và khám phá đầy cảm hứng.",
    season: "Tháng 3 — Tháng 5",
    duration: "Gợi ý 3N2Đ",
    image: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=2200&q=90",
  },
];

interface DestinationPageProps {
  onOpenQuote?: () => void;
}

export const DestinationPage: React.FC<DestinationPageProps> = ({ onOpenQuote }) => {
  const [current, setCurrent] = useState(0);
  const [virtualIndex, setVirtualIndex] = useState(DESTINATIONS.length);

  const currentRef = useRef(0);
  const virtualIndexRef = useRef(DESTINATIONS.length);

  currentRef.current = current;
  virtualIndexRef.current = virtualIndex;

  const animatingRef = useRef(false);
  const touchStartXRef = useRef<number | null>(null);

  const trackRef = useRef<HTMLDivElement>(null);
  const galleryWrapRef = useRef<HTMLDivElement>(null);

  // Triple set for infinite loop (30 items)
  const loopItems = [...DESTINATIONS, ...DESTINATIONS, ...DESTINATIONS];

  const updateTrackPosition = useCallback((vIdx: number, animate: boolean) => {
    const track = trackRef.current;
    const galleryWrap = galleryWrapRef.current;
    if (!track || !galleryWrap) return;

    track.style.transition = animate ? "transform 0.82s cubic-bezier(0.22, 0.61, 0.36, 1)" : "none";

    requestAnimationFrame(() => {
      const activeCard = track.children[vIdx] as HTMLElement;
      if (!activeCard) return;

      const wrapRect = galleryWrap.getBoundingClientRect();
      const cardRect = activeCard.getBoundingClientRect();
      const transformMatrix = new DOMMatrix(getComputedStyle(track).transform);
      const currentTransform = transformMatrix.m41 || 0;

      const targetCenter = wrapRect.left + wrapRect.width / 2;
      const cardCenterWithoutTransform = cardRect.left - currentTransform + cardRect.width / 2;
      const targetX = targetCenter - cardCenterWithoutTransform;

      track.style.transform = `translate3d(${targetX}px, 0, 0)`;
    });
  }, []);

  const move = useCallback((step: number) => {
    if (animatingRef.current) return;
    animatingRef.current = true;

    const prevVIdx = virtualIndexRef.current;
    const prevCurrent = currentRef.current;

    const nextVIdx = prevVIdx + step;
    const nextCurrent = (prevCurrent + step + DESTINATIONS.length) % DESTINATIONS.length;

    virtualIndexRef.current = nextVIdx;
    currentRef.current = nextCurrent;

    setVirtualIndex(nextVIdx);
    setCurrent(nextCurrent);

    updateTrackPosition(nextVIdx, true);

    setTimeout(() => {
      let normalizedVIdx = nextVIdx;
      if (nextVIdx < DESTINATIONS.length) {
        normalizedVIdx += DESTINATIONS.length;
      } else if (nextVIdx >= DESTINATIONS.length * 2) {
        normalizedVIdx -= DESTINATIONS.length;
      }

      if (normalizedVIdx !== nextVIdx) {
        virtualIndexRef.current = normalizedVIdx;
        setVirtualIndex(normalizedVIdx);
        updateTrackPosition(normalizedVIdx, false);
      }

      animatingRef.current = false;
    }, 850);
  }, [updateTrackPosition]);

  const goToOriginal = useCallback((targetOriginalIndex: number) => {
    if (animatingRef.current) return;
    const prevCurrent = currentRef.current;
    const forward = (targetOriginalIndex - prevCurrent + DESTINATIONS.length) % DESTINATIONS.length;
    const backward = forward - DESTINATIONS.length;
    const step = Math.abs(forward) <= Math.abs(backward) ? forward : backward;

    if (step !== 0) {
      move(step);
    }
  }, [move]);

  // Initial alignment & window resize handler
  useEffect(() => {
    updateTrackPosition(virtualIndexRef.current, false);

    const handleResize = () => {
      updateTrackPosition(virtualIndexRef.current, false);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [updateTrackPosition, move]);

  // Touch Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartXRef.current;
    if (Math.abs(dx) > 45) {
      move(dx < 0 ? 1 : -1);
    }
    touchStartXRef.current = null;
  };

  const currentDestination = DESTINATIONS[current];

  return (
    <div className="relative w-full overflow-hidden bg-[#101514] text-white min-h-screen select-none font-sans pt-20">
      {/* ── CSS STYLES IMPLEMENTED 100% IDENTICAL TO HTML REFERENCE ────────── */}
      <style>{`
        .dest-page {
          min-height: 100svh;
          position: relative;
          overflow: hidden;
          background: #101514;
        }

        .dest-bg-wrap, .dest-bg, .dest-overlay, .dest-grain {
          position: absolute;
          inset: 0;
        }

        .dest-bg {
          opacity: 0;
          transform: scale(1.04);
          background-position: center;
          background-size: cover;
          transition: opacity 0.8s cubic-bezier(0.22, 0.61, 0.36, 1), transform 1.2s cubic-bezier(0.22, 0.61, 0.36, 1);
        }

        .dest-bg.active {
          opacity: 1;
          transform: scale(1);
        }

        .dest-overlay {
          background: linear-gradient(180deg, rgba(5,10,9,0.24) 0%, rgba(5,10,9,0.12) 35%, rgba(5,10,9,0.88) 76%, rgba(5,10,9,0.98) 100%);
          z-index: 2;
        }

        .dest-grain {
          z-index: 3;
          pointer-events: none;
          opacity: 0.14;
          mix-blend-mode: soft-light;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.52'/%3E%3C/svg%3E");
        }

        .dest-main {
          position: relative;
          z-index: 5;
          min-height: calc(100svh - 80px);
          display: grid;
          grid-template-rows: minmax(330px, 52vh) auto;
          align-content: end;
          padding: 0 clamp(18px, 4vw, 62px) 34px;
        }

        .dest-top-cta {
          position: absolute;
          top: 24px;
          right: clamp(18px, 4vw, 62px);
          z-index: 9;
          margin-top: 0;
        }

        .dest-gallery-wrap {
          position: relative;
          display: flex;
          align-items: center;
          overflow: hidden;
          mask-image: linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%);
        }

        .dest-track {
          display: flex;
          gap: 18px;
          align-items: center;
          will-change: transform;
          touch-action: pan-y;
          user-select: none;
        }

        .dest-card {
          flex: 0 0 clamp(170px, 16vw, 250px);
          height: clamp(250px, 35vh, 410px);
          border: 0;
          padding: 0;
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          background: #222;
          opacity: 0.45;
          transform: scale(0.84);
          filter: saturate(0.72) brightness(0.78);
          transition: transform 0.72s cubic-bezier(0.22, 0.61, 0.36, 1), opacity 0.5s ease, filter 0.5s ease;
          box-shadow: 0 24px 60px rgba(0,0,0,0.28);
          cursor: pointer;
        }

        .dest-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
        }

        .dest-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 45%, rgba(5,10,9,0.72));
        }

        .dest-card.active {
          flex-basis: clamp(230px, 22vw, 340px);
          height: clamp(330px, 43vh, 500px);
          opacity: 1;
          transform: scale(1);
          filter: saturate(1) brightness(1);
          z-index: 3;
        }

        .dest-card.near {
          opacity: 0.72;
          transform: scale(0.92);
          filter: saturate(0.85) brightness(0.9);
        }

        .dest-card:hover img {
          transform: scale(1.04);
        }

        .dest-card-label {
          position: absolute;
          z-index: 2;
          left: 16px;
          right: 16px;
          bottom: 14px;
          text-align: left;
          color: #fff;
        }

        .dest-card-label strong {
          display: block;
          font-family: "Barlow Condensed", sans-serif;
          font-size: 24px;
          line-height: 0.9;
          text-transform: uppercase;
        }

        .dest-card-label span {
          display: block;
          font-size: 10px;
          color: rgba(255,255,255,0.72);
          margin-top: 7px;
        }

        .dest-card-index {
          position: absolute;
          z-index: 2;
          right: 12px;
          top: 10px;
          font-family: "Barlow Condensed", sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: rgba(255,255,255,0.7);
        }

        .dest-content {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 28px;
          align-items: end;
          padding-top: 18px;
        }

        .dest-text-wrap {
          max-width: 830px;
          animation: destFadeIn 0.5s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
        }

        @keyframes destFadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dest-kicker {
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(255,255,255,0.68);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .dest-kicker::before {
          content: "";
          width: 34px;
          height: 1px;
          background: #fff;
        }

        .dest-title {
          margin: 10px 0 10px;
          font-family: "Barlow Condensed", sans-serif;
          text-transform: uppercase;
          font-size: clamp(58px, 8vw, 120px);
          line-height: 0.8;
          letter-spacing: -0.04em;
        }

        .dest-desc {
          max-width: 690px;
          color: rgba(255,255,255,0.68);
          font-size: 14px;
          line-height: 1.65;
        }

        .dest-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          margin-top: 18px;
          color: rgba(255,255,255,0.68);
          font-size: 12px;
        }

        .dest-meta span {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .dest-meta i {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ef8b43;
          box-shadow: 0 0 18px #ef8b43;
        }

        .dest-controls {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
          min-width: 120px;
          align-self: end;
          padding-bottom: 8px;
        }

        .dest-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.32);
          background: rgba(255,255,255,0.08);
          color: #fff;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transition: transform 0.25s cubic-bezier(0.22, 0.61, 0.36, 1), background 0.25s;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dest-circle:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,0.14);
        }

        .dest-explore {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 50px;
          padding: 0 30px;
          margin-top: 22px;
          border-radius: 999px;
          border: 1.5px solid rgba(255,255,255,0.34);
          background: rgba(255,255,255,0.07);
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          font-size: 17px;
          letter-spacing: 0.01em;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transition: transform 0.25s cubic-bezier(0.22, 0.61, 0.36, 1), background 0.25s cubic-bezier(0.22, 0.61, 0.36, 1), border-color 0.25s cubic-bezier(0.22, 0.61, 0.36, 1);
          width: max-content;
          white-space: nowrap;
          cursor: pointer;
        }

        .dest-explore:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.48);
        }

        @media(max-width:900px){
          .dest-main {
            grid-template-rows: minmax(300px, 50vh) auto;
            padding-bottom: 24px;
          }
          .dest-top-cta {
            top: auto;
            bottom: 24px;
            right: 18px;
            margin-top: 0;
            font-size: 15px;
            min-height: 44px;
            padding: 0 22px;
            z-index: 30;
          }
          .dest-content {
            grid-template-columns: 1fr;
          }
          .dest-controls {
            justify-content: flex-start;
            min-width: 0;
          }
          .dest-title {
            font-size: clamp(54px, 15vw, 92px);
          }
          .dest-gallery-wrap {
            margin-left: -18px;
            margin-right: -18px;
            mask-image: none;
            -webkit-mask-image: none;
          }
          .dest-track {
            gap: 12px;
          }
          .dest-card {
            flex-basis: 55vw;
            height: 280px;
          }
          .dest-card.active {
            flex-basis: 72vw;
            height: 360px;
          }
        }

        @media(max-width:620px){
          .dest-main {
            min-height: calc(100svh - 80px);
            grid-template-rows: minmax(250px, 45vh) auto;
            padding: 0 16px 20px;
          }
          .dest-top-cta {
            top: auto;
            bottom: 16px;
            right: 16px;
            font-size: 14px;
            min-height: 42px;
            padding: 0 20px;
          }
          .dest-gallery-wrap {
            margin-left: -16px;
            margin-right: -16px;
          }
          .dest-card {
            flex-basis: 58vw;
            height: 220px;
          }
          .dest-card.active {
            flex-basis: 78vw;
            height: 285px;
          }
          .dest-content {
            padding-top: 12px;
          }
          .dest-title {
            font-size: clamp(52px, 18vw, 76px);
          }
          .dest-desc {
            font-size: 13px;
            line-height: 1.55;
          }
          .dest-meta {
            font-size: 11px;
            gap: 12px;
          }
          .dest-controls {
            gap: 10px;
          }
          .dest-circle {
            width: 44px;
            height: 44px;
          }
        }
      `}</style>

      {/* Background Images for Cross-fade */}
      <div className="dest-bg-wrap">
        {DESTINATIONS.map((d, i) => (
          <div
            key={i}
            className={`dest-bg ${i === current ? "active" : ""}`}
            style={{ backgroundImage: `url("${d.image}")` }}
          />
        ))}
      </div>

      {/* Dark Vignette Gradient Overlay */}
      <div className="dest-overlay" />

      {/* Grain Texture Overlay */}
      <div className="dest-grain" />

      {/* Main Content Layout Grid */}
      <main className="dest-main">
        {/* Top-Right CTA Button (Mobile bottom right) */}
        <button
          onClick={onOpenQuote}
          className="dest-explore dest-top-cta"
          aria-label={`Khám phá ${currentDestination.title}`}
        >
          Khám phá ↗
        </button>

        {/* Center Track Gallery Slider */}
        <section
          className="dest-gallery-wrap"
          ref={galleryWrapRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="dest-track" ref={trackRef}>
            {loopItems.map((d, i) => {
              const originalIndex = i % DESTINATIONS.length;
              const isActive = i === virtualIndex;
              const isNear = Math.abs(i - virtualIndex) === 1;

              return (
                <button
                  key={i}
                  className={`dest-card ${isActive ? "active" : ""} ${isNear ? "near" : ""}`}
                  onClick={() => goToOriginal(originalIndex)}
                  type="button"
                >
                  <img
                    src={d.image}
                    alt={d.title}
                    loading={i < 14 ? "eager" : "lazy"}
                  />
                  <div className="dest-card-index">
                    {String(originalIndex + 1).padStart(2, "0")}
                  </div>
                  <div className="dest-card-label">
                    <strong>{d.title}</strong>
                    <span>{d.kicker}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Bottom Text Content & Controls */}
        <section className="dest-content">
          <div key={current} className="dest-text-wrap" aria-live="polite">
            <div className="dest-kicker">{currentDestination.kicker}</div>
            <h1 className="dest-title">{currentDestination.title}</h1>
            <p className="dest-desc">{currentDestination.desc}</p>
            <div className="dest-meta">
              <span>
                <i />
                <b>{currentDestination.season}</b>
              </span>
              <span>{currentDestination.duration}</span>
            </div>
          </div>

          <div className="dest-controls">
            <button
              className="dest-circle"
              onClick={() => move(-1)}
              aria-label="Địa điểm trước"
              type="button"
            >
              ←
            </button>
            <button
              className="dest-circle"
              onClick={() => move(1)}
              aria-label="Địa điểm tiếp theo"
              type="button"
            >
              →
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};
