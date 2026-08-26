import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Landmark, Clock, MapPin, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';
import { ATTRACTIONS } from '../data/attractions';
import { Attraction } from '../types';

interface AttractionsSectionProps {
  onSelectAttraction: (attraction: Attraction) => void;
}

export const AttractionsSection: React.FC<AttractionsSectionProps> = ({ onSelectAttraction }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'unesco' | 'fort' | 'hydraulic'>('all');

  const filterTabs = [
    { id: 'all', label: 'All Attractions', count: 5 },
    { id: 'unesco', label: 'UNESCO Caves', count: 2 },
    { id: 'fort', label: 'Citadels & Palaces', count: 2 },
    { id: 'hydraulic', label: 'Hydraulic Engineering', count: 1 }
  ];

  const filteredAttractions = ATTRACTIONS.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  return (
    <section id="attractions" className="section-padding bg-gradient-to-b from-[#0B0F19] via-[#121212] to-[#0B0F19] relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="section-pretitle">The Imperial Deccan Circuit</span>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white mb-3">
            Explore <span className="gold-gradient-text">5 Major Heritage Marvels</span>
          </h2>
          <div className="gold-divider gold-divider-center" />
          <p className="text-[#E6DFD5] text-sm sm:text-base leading-relaxed">
            Comprehensive, expertly curated historical overviews of the region's most iconic UNESCO World Heritage wonders, mountain citadels, and medieval hydraulics.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'text-[#0B0F19] font-bold'
                    : 'text-[#E6DFD5] hover:text-white bg-slate-900/60 border border-[#D4AF37]/30 hover:border-[#D4AF37]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="attractionTabActive"
                    className="absolute inset-0 bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA771C] rounded-full shadow-[0_0_20px_rgba(212,175,55,0.6)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-[#0B0F19]/30 text-[#0B0F19] font-bold' : 'bg-white/10 text-[#D4AF37]'}`}>
                    {tab.count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Attractions Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredAttractions.map((attraction, index) => (
              <motion.div
                key={attraction.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col rounded-2xl bg-slate-900/80 backdrop-blur-md border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:shadow-[0_0_30px_rgba(212,175,55,0.35)] transition-all duration-500 shadow-xl overflow-hidden"
              >
                {/* Image Box */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                  <img
                    src={attraction.image}
                    alt={attraction.imageAlt || attraction.name}
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.onerror = null;
                      target.src = `${import.meta.env.BASE_URL}images/siraj-photo1.jpg`;
                    }}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/30 to-transparent opacity-90" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#0B0F19]/85 backdrop-blur-md border border-[#D4AF37]/50 text-[11px] font-bold text-[#F3E5AB] shadow-md">
                      <Landmark className="w-3 h-3 text-[#D4AF37]" />
                      {attraction.badge}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#0B0F19]/85 backdrop-blur-md border border-white/20 text-[11px] font-medium text-white shadow-md">
                      <MapPin className="w-3 h-3 text-[#D4AF37]" />
                      {attraction.distance}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-cinzel text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-1">
                      {attraction.name}
                    </h3>
                    <div className="text-xs font-medium text-[#D4AF37] mb-3">{attraction.tagline}</div>
                    
                    <p className="text-[#E6DFD5] text-xs sm:text-sm leading-relaxed line-clamp-3 mb-5 font-normal">
                      {attraction.shortDesc}
                    </p>

                    {/* Highlights bullet previews */}
                    <div className="space-y-2 mb-5">
                      {attraction.highlights.slice(0, 2).map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#E6DFD5]">
                          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1"><strong className="text-white font-semibold">{hl.title}:</strong> {hl.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Meta & Explore Button */}
                  <div>
                    <div className="pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between text-xs text-[#E6DFD5] mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                        {attraction.timing}
                      </span>
                      <span className="flex items-center gap-1 text-[#D4AF37] font-medium">
                        <AlertCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
                        {attraction.closedDay}
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectAttraction(attraction)}
                      className="w-full py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-[#D4AF37]/25 border border-[#D4AF37]/35 hover:border-[#D4AF37] text-xs font-semibold text-[#F3E5AB] hover:text-white flex items-center justify-center gap-2 transition-all group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                    >
                      <span>Explore In-Depth Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
