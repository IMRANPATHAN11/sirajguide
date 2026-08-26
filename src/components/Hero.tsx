import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Languages, Award, Compass, Play, Star, CheckCircle2, MapPin, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenLightbox: (src: string, alt: string) => void;
}

const HERO_PHOTOS = [
  {
    src: '/images/siraj-photo1.jpg',
    title: 'Siraj Shaikh at Ellora Caves',
    caption: 'Kailasa Temple & Monolithic Sanctuaries Specialist',
    badge: 'Govt. Verified Guide'
  },
  {
    src: '/images/siraj-photo2.jpg',
    title: 'Siraj Shaikh at Devagiri Fort',
    caption: '12th-Century Yadava Citadel & Dark Maze Historian',
    badge: 'Military Defense Expert'
  },
  {
    src: '/images/siraj-photo3.jpg',
    title: 'Siraj Shaikh at Ajanta Caves',
    caption: '2,000-Year-Old Buddhist Fresco & Cave Art Narrator',
    badge: 'Fresco Art Specialist'
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenLightbox }) => {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePhotoIdx((prev) => (prev + 1) % HERO_PHOTOS.length);
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePhotoIdx((prev) => (prev - 1 + HERO_PHOTOS.length) % HERO_PHOTOS.length);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-16 lg:py-32 overflow-hidden bg-gradient-to-b from-[#0B0F19] via-[#121212] to-[#1A1A2E]">
      {/* Background Ambient Glow Orbs with Royal Gold Colors */}
      <div className="ambient-glow-orb w-[550px] h-[550px] -top-32 left-1/2 -translate-x-1/2 bg-[#D4AF37]/15" />
      <div className="ambient-glow-orb w-[450px] h-[450px] top-1/3 -left-32 bg-[#AA771C]/20" />
      <div className="ambient-glow-orb w-[450px] h-[450px] bottom-10 right-0 bg-[#F3E5AB]/10" />

      {/* Background Subtle Grid */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#D4AF37 1px, transparent 1px)`,
          backgroundSize: '36px 36px'
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Top Imperial Gold Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#F3E5AB] text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.25)]"
            >
              <Star className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37] animate-pulse" />
              <span>18+ Years of Heritage Guiding Excellence</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.15] tracking-tight mb-6 text-white uppercase">
              UNRAVEL THE GRANDEUR OF <br />
              <span className="gold-shimmer-text">CHHATRAPATI SAMBHAJINAGAR (AURANGABAD)</span> <br />
              WITH <span className="text-[#D4AF37]">SIRAJ SHAIKH</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[#E6DFD5] text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal">
              Experience world-renowned UNESCO World Heritage caves, impregnable 12th-century fortresses, and Mughal monuments through captivating historical narratives by a <strong className="text-[#D4AF37] font-semibold">Govt. Approved Regional Tourist Guide</strong>.
            </p>

            {/* Credentials Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full max-w-2xl mb-9">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-[#D4AF37]/30 backdrop-blur-md flex items-center gap-3 hover:border-[#D4AF37] transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-medium">Certification</div>
                  <div className="text-xs font-bold text-white">Govt. of India Approved</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-[#D4AF37]/30 backdrop-blur-md flex items-center gap-3 hover:border-[#D4AF37] transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0">
                  <Languages className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-medium">Languages</div>
                  <div className="text-xs font-bold text-white">English & Hindi</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-[#D4AF37]/30 backdrop-blur-md flex items-center gap-3 hover:border-[#D4AF37] transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-medium">Experience</div>
                  <div className="text-xs font-bold text-white">18+ Years Expert</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenBooking}
                className="btn-primary-luxury w-full sm:w-auto font-bold"
              >
                <Compass className="w-4 h-4 text-[#0B0F19]" />
                <span>Reserve Your Guided Tour</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="#video-tour"
                className="btn-secondary-luxury w-full sm:w-auto font-semibold"
              >
                <div className="w-6 h-6 rounded-full bg-[#D4AF37]/25 flex items-center justify-center">
                  <Play className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" />
                </div>
                <span>Watch Devagiri Experience</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Hero Portrait Showcase with Interactive 3-Photo Golden Slider */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Outer Golden Glow Aura Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#AA771C]/70 via-[#D4AF37]/50 to-[#F3E5AB]/60 rounded-3xl blur-xl opacity-80 group-hover:opacity-100 transition duration-1000 animate-pulse" />

              {/* Main Photo Card Frame with Dark Slate & Gold Border */}
              <div className="relative rounded-2xl bg-gradient-to-b from-[#141A2D] via-[#0F172A] to-[#0B0F19] p-3 border-2 border-[#D4AF37]/50 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] overflow-hidden">
                <div 
                  className="relative h-[440px] sm:h-[480px] rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => onOpenLightbox(HERO_PHOTOS[activePhotoIdx].src, HERO_PHOTOS[activePhotoIdx].title)}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activePhotoIdx}
                      src={HERO_PHOTOS[activePhotoIdx].src}
                      alt={HERO_PHOTOS[activePhotoIdx].title}
                      initial={{ opacity: 0, scale: 1.08 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </AnimatePresence>
                  
                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/30 to-transparent opacity-90" />

                  {/* Top Photo Switcher Dots & Tag */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B0F19]/85 backdrop-blur-md border border-[#D4AF37]/50 text-xs font-semibold text-[#F3E5AB]">
                      <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{HERO_PHOTOS[activePhotoIdx].badge}</span>
                    </div>

                    {/* Left/Right Slider Controls */}
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={prevPhoto}
                        className="w-8 h-8 rounded-full bg-[#0B0F19]/80 hover:bg-[#D4AF37] hover:text-[#0B0F19] text-white border border-[#D4AF37]/40 flex items-center justify-center transition-all"
                        aria-label="Previous Guide Photo"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={nextPhoto}
                        className="w-8 h-8 rounded-full bg-[#0B0F19]/80 hover:bg-[#D4AF37] hover:text-[#0B0F19] text-white border border-[#D4AF37]/40 flex items-center justify-center transition-all"
                        aria-label="Next Guide Photo"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Floating Guide Info Card at bottom of photo */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0B0F19]/92 backdrop-blur-md border border-[#D4AF37]/50 flex items-center justify-between z-20">
                    <div>
                      <div className="font-cinzel text-base font-bold text-white flex items-center gap-1.5">
                        <span className="gold-shimmer-text">Siraj Shaikh</span>
                      </div>
                      <div className="text-xs text-[#E6DFD5] font-medium">{HERO_PHOTOS[activePhotoIdx].caption}</div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/60 text-[11px] font-bold text-[#F3E5AB]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Photo 0{activePhotoIdx + 1}/03</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Verified Counter Chip */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="hidden sm:flex absolute -bottom-5 -left-6 items-center gap-3 px-4 py-3 rounded-2xl bg-[#141A2D]/95 border-2 border-[#D4AF37]/50 backdrop-blur-xl shadow-2xl z-20"
              >
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/25 border border-[#D4AF37]/60 flex items-center justify-center">
                  <Award className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">5,000+ Travelers</div>
                  <div className="text-[11px] text-[#F3E5AB]">From 50+ Countries Guided</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
