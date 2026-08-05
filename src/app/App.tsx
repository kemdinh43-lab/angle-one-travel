import React, { useState } from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { NeedPicker } from "../components/NeedPicker";
import { Packages } from "../components/Packages";
import { Destinations } from "../components/Destinations";
import { ConsultationBanner } from "../components/ConsultationBanner";
import { CustomTour } from "../components/CustomTour";
import { Services } from "../components/Services";
import { WhyUs } from "../components/WhyUs";
import { Blog } from "../components/Blog";
import { CtaSection } from "../components/CtaSection";
import { Footer } from "../components/Footer";
import { TourPage } from "../components/TourPage";
import { BlogPage } from "../components/BlogPage";
import { AboutPage } from "../components/AboutPage";

import { QuoteModal } from "../components/QuoteModal";
import { TourDetailModal } from "../components/TourDetailModal";
import { CustomBuilderModal } from "../components/CustomBuilderModal";

import { Tour } from "../types/travel";

export default function App() {
  const [currentView, setCurrentView] = useState<"home" | "tours" | "blog" | "about">("home");
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isCustomOpen, setIsCustomOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);

  const handleOpenQuoteForTour = (tour?: Tour) => {
    setSelectedTour(tour || null);
    setIsQuoteOpen(true);
  };

  const handleNavigate = (view: string) => {
    if (view === "tours" || view === "blog" || view === "home" || view === "about") {
      setCurrentView(view as any);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setCurrentView("home");
    }
  };

  return (
    <div
      className="min-h-screen bg-[#FAF9F5] text-[#22251F]"
      style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
    >
      {/* Global Navigation Header */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuoteForTour()}
      />

      <main>
        {currentView === "home" ? (
          <>
            {/* 1. Hero Section */}
            <Hero
              onOpenQuote={() => handleOpenQuoteForTour()}
              onOpenCustom={() => setIsCustomOpen(true)}
            />

            {/* 2. Editorial About Section */}
            <About />

            {/* 3. Interactive Need Picker Cards */}
            <NeedPicker
              onOpenQuote={() => handleOpenQuoteForTour()}
              onOpenCustom={() => setIsCustomOpen(true)}
            />

            {/* 4. Featured Tours & Packages ("Khám phá các tour nổi bật nhất") */}
            <Packages
              onSelectTour={(tour) => setSelectedTour(tour)}
              onOpenQuote={() => handleOpenQuoteForTour()}
            />

            {/* 5. Destination Gallery ("Điểm đến hấp dẫn nhất") */}
            <Destinations onOpenQuote={() => handleOpenQuoteForTour()} />

            {/* 6. Quick Consultation Request Banner */}
            <ConsultationBanner />

            {/* 7. Custom Tour Section */}
            <CustomTour onOpenCustom={() => setIsCustomOpen(true)} />

            {/* 8. Services & Vehicle Rental */}
            <Services onOpenQuote={() => handleOpenQuoteForTour()} />

            {/* 9. Why Choose Us */}
            <WhyUs />

            {/* 10. Travel Guides & Blog Homepage Section */}
            <Blog onNavigateToBlog={() => handleNavigate("blog")} />

            {/* 11. Customer Feedback & Bottom Banner */}
            <CtaSection
              onOpenQuote={() => handleOpenQuoteForTour()}
              onOpenCustom={() => setIsCustomOpen(true)}
            />
          </>
        ) : currentView === "tours" ? (
          /* Dedicated Full Tour Page */
          <TourPage
            onSelectTour={(tour) => setSelectedTour(tour)}
            onOpenQuote={(tour) => handleOpenQuoteForTour(tour)}
            onOpenCustom={() => setIsCustomOpen(true)}
            onBackToHome={() => handleNavigate("home")}
          />
        ) : currentView === "about" ? (
          /* Dedicated Editorial About Us Page (Matching Moodboard 100%) */
          <AboutPage
            onNavigate={handleNavigate}
            onOpenQuote={() => handleOpenQuoteForTour()}
            onOpenCustom={() => setIsCustomOpen(true)}
          />
        ) : (
          /* Dedicated Blog & Articles Page */
          <BlogPage
            onBackToHome={() => handleNavigate("home")}
            onOpenQuote={() => handleOpenQuoteForTour()}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        selectedTour={selectedTour}
      />

      <TourDetailModal
        tour={selectedTour}
        onClose={() => setSelectedTour(null)}
        onBookNow={(tour) => {
          setSelectedTour(null);
          handleOpenQuoteForTour(tour);
        }}
      />

      <CustomBuilderModal
        isOpen={isCustomOpen}
        onClose={() => setIsCustomOpen(false)}
      />
    </div>
  );
}
