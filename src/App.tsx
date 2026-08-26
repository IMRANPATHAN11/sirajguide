import React, { useState } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsStrip } from './components/StatsStrip';
import { AboutSection } from './components/AboutSection';
import { VideoExperience } from './components/VideoExperience';
import { AttractionsSection } from './components/AttractionsSection';
import { AttractionModal } from './components/AttractionModal';
import { HeritageCircuitMap } from './components/HeritageCircuitMap';
import { ItinerariesSection } from './components/ItinerariesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingSection } from './components/BookingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { LightboxModal } from './components/LightboxModal';
import { Attraction, TourPackage } from './types';

export const App: React.FC = () => {
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);
  const [preselectedSite, setPreselectedSite] = useState<string | null>(null);

  // Lightbox state
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    src: string;
    alt: string;
  }>({
    isOpen: false,
    src: '',
    alt: ''
  });

  const handleOpenLightbox = (src: string, alt: string) => {
    setLightboxState({ isOpen: true, src, alt });
  };

  const handleCloseLightbox = () => {
    setLightboxState({ isOpen: false, src: '', alt: '' });
  };

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (pkg: TourPackage) => {
    setSelectedPackage(pkg);
    scrollToBooking();
  };

  const handleBookSite = (siteName: string) => {
    setPreselectedSite(siteName);
    scrollToBooking();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0F19] via-[#121212] to-[#1A1A2E] text-white font-sans selection:bg-[#D4AF37] selection:text-[#0B0F19]">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Luxury Navbar */}
      <Navbar onOpenBooking={scrollToBooking} />

      {/* Main Content */}
      <main>
        {/* Cinematic Hero */}
        <Hero
          onOpenBooking={scrollToBooking}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Stats Strip */}
        <StatsStrip />

        {/* About Guide Section */}
        <AboutSection
          onOpenBooking={scrollToBooking}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Exclusive Video Experience */}
        <VideoExperience />

        {/* Attractions Explorer */}
        <AttractionsSection onSelectAttraction={setSelectedAttraction} />

        {/* Heritage Circuit Map */}
        <HeritageCircuitMap />

        {/* Curated Itineraries */}
        <ItinerariesSection onSelectPackage={handleSelectPackage} />

        {/* Global Traveler Reviews */}
        <TestimonialsSection />

        {/* Booking & Direct WhatsApp Inquiry */}
        <BookingSection
          selectedPackage={selectedPackage}
          preselectedSite={preselectedSite}
        />

        {/* Travel FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingActions />

      {/* Attraction Deep-Dive Modal */}
      <AttractionModal
        attraction={selectedAttraction}
        onClose={() => setSelectedAttraction(null)}
        onBookSite={handleBookSite}
      />

      {/* Fullscreen Photo Lightbox */}
      <LightboxModal
        isOpen={lightboxState.isOpen}
        src={lightboxState.src}
        alt={lightboxState.alt}
        onClose={handleCloseLightbox}
      />
    </div>
  );
};
export default App;
