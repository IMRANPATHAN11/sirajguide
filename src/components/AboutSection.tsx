import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Crown, Languages, Users, Camera, Sparkles, Compass } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
  onOpenLightbox: (src: string, alt: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking, onOpenLightbox }) => {
  const specialties = [
    { icon: Landmark, text: 'Monolithic Architecture Deep-Dive' },
    { icon: Crown, text: 'Yadava & Mughal Deccan Lore' },
    { icon: Languages, text: 'Fluent English & Hindi Narration' },
    { icon: Users, text: 'Family & VIP Delegation Friendly' },
    { icon: Camera, text: 'Best Golden-Hour Photography Spots' }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-[#0B0F19] via-[#121212] to-[#0B0F19] relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: 3-Photo Interactive Mosaic */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="grid grid-cols-2 gap-4 relative">
              {/* Photo 1: Large Left */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                onClick={() => onOpenLightbox('/images/siraj-photo1.jpg', 'Siraj Shaikh guiding at Ellora Caves')}
                className="col-span-2 sm:col-span-1 row-span-2 relative h-[360px] sm:h-[450px] rounded-2xl overflow-hidden border border-[#D4AF37]/40 hover:border-[#D4AF37] cursor-pointer shadow-2xl group hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-300"
              >
                <img
                  src="/images/siraj-photo1.jpg"
                  alt="Siraj Shaikh at Ellora Caves"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/95 via-[#0B0F19]/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/25 backdrop-blur-md border border-[#D4AF37]/50 text-xs font-semibold text-[#F3E5AB] mb-1">
                    <Landmark className="w-3.5 h-3.5 text-[#D4AF37]" />
                    Ellora Caves Specialist
                  </span>
                  <p className="text-white text-xs font-medium">Expert on Kailasa Temple excavation</p>
                </div>
              </motion.div>

              {/* Photo 2: Top Right */}
              <motion.div 
                whileHover={{ scale: 1.03 }}
                onClick={() => onOpenLightbox('/images/siraj-photo2.jpg', 'Siraj Shaikh at Devagiri Fort')}
                className="relative h-[210px] rounded-2xl overflow-hidden border border-[#D4AF37]/35 hover:border-[#D4AF37] cursor-pointer shadow-xl group hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300"
              >
                <img
                  src="/images/siraj-photo2.jpg"
                  alt="Siraj Shaikh at Devagiri Fort"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/85 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[11px] font-semibold text-white flex items-center gap-1 bg-[#0B0F19]/80 px-2.5 py-1 rounded-lg backdrop-blur-sm border border-[#D4AF37]/40">
                    <Crown className="w-3 h-3 text-[#D4AF37]" />
                    Devagiri Fort Historian
                  </span>
                </div>
              </motion.div>

              {/* Photo 3: Bottom Right */}
              <motion.div 
                whileHover={{ scale: 1.03 }}
                onClick={() => onOpenLightbox('/images/siraj-photo3.jpg', 'Siraj Shaikh heritage tour guide')}
                className="relative h-[210px] rounded-2xl overflow-hidden border border-[#D4AF37]/35 hover:border-[#D4AF37] cursor-pointer shadow-xl group hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300"
              >
                <img
                  src="/images/siraj-photo3.jpg"
                  alt="Siraj Shaikh Tour Guide"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/85 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[11px] font-semibold text-white flex items-center gap-1 bg-[#0B0F19]/80 px-2.5 py-1 rounded-lg backdrop-blur-sm border border-[#D4AF37]/40">
                    <Camera className="w-3 h-3 text-[#D4AF37]" />
                    Ajanta Frescoes Guide
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: About Content & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <span className="section-pretitle">Meet Your Guide</span>
            
            <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              Bringing Deccan History to Life with <span className="gold-gradient-text">Passion & Authenticity</span>
            </h2>

            <div className="gold-divider" />

            <p className="text-[#E6DFD5] text-base leading-relaxed mb-4">
              Welcome to the imperial capital of Deccan heritage! I am <strong className="text-[#D4AF37] font-semibold">Siraj Shaikh</strong>, an official Govt. Approved and Certified Regional Tour Guide under the Ministry of Tourism & Culture, Government of India.
            </p>

            <p className="text-[#E6DFD5] text-base leading-relaxed mb-6 font-normal">
              With over <strong className="text-white font-semibold">18 years of specialized field experience</strong> in Chhatrapati Sambhajinagar (Aurangabad), I have had the privilege of guiding international dignitaries, archaeologists, cultural delegations, families, and solo explorers through the awe-inspiring rock sanctuaries and mountain citadels.
            </p>

            {/* Philosophy Quote Box with Imperial Gold Accent */}
            <div className="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#D4AF37]/15 via-slate-900/90 to-[#AA771C]/15 border-l-4 border-[#D4AF37] border-y border-r border-[#D4AF37]/30 mb-7 shadow-lg">
              <Sparkles className="w-5 h-5 text-[#D4AF37] mb-2" />
              <p className="font-serif italic text-white text-sm sm:text-base leading-relaxed">
                "A ruin is just stones until someone tells you the heartbeat, the human triumphs, and the artistic mastery behind every single chisel mark."
              </p>
              <div className="mt-2 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider font-cinzel">
                — Siraj Shaikh
              </div>
            </div>

            {/* Specialty Pills with Royal Gold */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {specialties.map((spec, i) => {
                const Icon = spec.icon;
                return (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-[#D4AF37]/30 text-xs font-medium text-white hover:border-[#D4AF37] hover:bg-[#D4AF37]/20 transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{spec.text}</span>
                  </span>
                );
              })}
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenBooking}
              className="btn-primary-luxury font-bold"
            >
              <Compass className="w-4 h-4 text-[#0B0F19]" />
              <span>Plan Your Tour with Siraj</span>
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
