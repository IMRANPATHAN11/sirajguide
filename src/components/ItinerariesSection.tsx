import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2, Star, Sparkles, Compass, ShieldCheck } from 'lucide-react';
import { TOUR_PACKAGES } from '../data/itineraries';
import { TourPackage } from '../types';

interface ItinerariesSectionProps {
  onSelectPackage: (pkg: TourPackage) => void;
}

export const ItinerariesSection: React.FC<ItinerariesSectionProps> = ({ onSelectPackage }) => {
  return (
    <section id="itineraries" className="section-padding bg-[#0B0F19] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="ambient-glow-orb w-[500px] h-[500px] top-1/3 right-0 bg-[#D4AF37]/15" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="section-pretitle">Tailored Travel Packages</span>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white mb-3">
            Popular <span className="gold-gradient-text">Guided Itineraries</span>
          </h2>
          <div className="gold-divider gold-divider-center" />
          <p className="text-[#E6DFD5] text-sm sm:text-base leading-relaxed">
            Choose a comprehensive sightseeing plan or request a 100% custom-curated itinerary tailored to your group size, interests, and schedule.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {TOUR_PACKAGES.map((pkg, idx) => {
            const isFeatured = pkg.isPopular;

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -8 }}
                className={`relative flex flex-col rounded-3xl p-6 sm:p-8 transition-all duration-500 ${
                  isFeatured
                    ? 'bg-gradient-to-b from-[#1E293B] via-[#0F172A] to-[#0B0F19] border-2 border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.4)]'
                    : 'bg-slate-900/80 backdrop-blur-md border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:shadow-[0_0_25px_rgba(212,175,55,0.25)] shadow-xl'
                }`}
              >
                {/* Popular Badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA771C] text-[#0B0F19] text-xs font-extrabold uppercase tracking-wider shadow-lg">
                      <Star className="w-3.5 h-3.5 fill-[#0B0F19]" />
                      {pkg.badge || 'Most Popular'}
                    </span>
                  </div>
                )}

                {/* Duration */}
                <div className="inline-flex items-center gap-1.5 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-2">
                  <Clock className="w-4 h-4" />
                  <span>{pkg.duration}</span>
                </div>

                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-2">
                  {pkg.name}
                </h3>
                <p className="text-[#E6DFD5] text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {pkg.tagline}
                </p>

                {/* Ideal For Pill */}
                <div className="p-3 rounded-xl bg-white/[0.03] border border-[#D4AF37]/20 text-xs text-white mb-6 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                  <span><strong className="text-[#D4AF37]">Ideal for:</strong> {pkg.idealFor}</span>
                </div>

                {/* Key Stops */}
                <div className="mb-6 flex-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-3">
                    Heritage Stops & Narrative:
                  </div>
                  <ul className="space-y-2.5">
                    {pkg.stops.map((stop, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[#E6DFD5]">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                        <span>{stop}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Inclusions Highlights */}
                <div className="pt-4 border-t border-[#D4AF37]/20 mb-6">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                    Package Inclusions:
                  </div>
                  <div className="space-y-1.5">
                    {pkg.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#E6DFD5]">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onSelectPackage(pkg)}
                  className={`w-full py-3 px-6 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-lg ${
                    isFeatured
                      ? 'btn-primary-luxury text-[#0B0F19] font-extrabold'
                      : 'btn-secondary-luxury text-white hover:border-[#D4AF37]'
                  }`}
                >
                  <Compass className="w-4 h-4" />
                  <span>Inquire & Reserve This Plan</span>
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
