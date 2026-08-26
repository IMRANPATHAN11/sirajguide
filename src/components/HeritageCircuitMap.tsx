import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation, Car, Sparkles, Shield, ChevronRight } from 'lucide-react';

export const HeritageCircuitMap: React.FC = () => {
  const [activeStop, setActiveStop] = useState(0);

  const stops = [
    {
      name: 'City Hub (Sambhajinagar)',
      tag: 'Starting Base',
      distance: '0 km',
      driveTime: 'Center Point',
      highlight: 'Hotel Pickups, Railway & Airport Transit',
      description: 'The base for all Deccan expeditions. Close to fine Marathwada dining, hotels, and ancient city gates.'
    },
    {
      name: 'Bibi Ka Maqbara & Panchakki',
      tag: 'Urban Heritage',
      distance: '5 km NW',
      driveTime: '15 mins drive',
      highlight: '17th-Century Mughal Splendor & Water Mill',
      description: 'The graceful Taj of the Deccan paired with the medieval subterranean hydraulic gravity mill.'
    },
    {
      name: 'Devagiri / Daulatabad Fort',
      tag: 'Citadel Gate',
      distance: '15 km NW',
      driveTime: '25 mins drive',
      highlight: 'Invincible 12th-Century Hill Fortress & Maze',
      description: 'Strategically located midway to Ellora. Climb the conical granite fortress and navigate the dark labyrinth.'
    },
    {
      name: 'Ellora Caves (Verul)',
      tag: 'Monolithic Peak',
      distance: '30 km NW',
      driveTime: '45 mins drive',
      highlight: 'Kailasa Temple (Cave 16) & 34 Rock Temples',
      description: 'The crowning jewel of rock-cut monolithic engineering excavated vertically from volcanic basalt cliff.'
    },
    {
      name: 'Ajanta Caves (Lenapur)',
      tag: 'Fresco Sanctuary',
      distance: '105 km North',
      driveTime: '2.5 hrs drive',
      highlight: '30 Buddhist Gorge Caves & 2000-Year-Old Murals',
      description: 'Horseshoe river gorge sanctuary housing world-renowned Buddhist frescoes and the Reclining Buddha.'
    }
  ];

  return (
    <section id="circuit" className="section-padding bg-[#0B0F19] relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="section-pretitle">Interactive Travel Blueprint</span>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white mb-3">
            The <span className="gold-gradient-text">Heritage Circuit Map</span> & Logistics
          </h2>
          <div className="gold-divider gold-divider-center" />
          <p className="text-[#E6DFD5] text-sm sm:text-base leading-relaxed">
            Understand the geography, road distances, and optimal sightseeing sequence curated by Siraj Shaikh to minimize transit fatigue.
          </p>
        </div>

        {/* Interactive Circuit Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Stops List */}
          <div className="lg:col-span-5 space-y-3">
            {stops.map((stop, idx) => {
              const isSelected = activeStop === idx;
              return (
                <motion.div
                  key={idx}
                  onClick={() => setActiveStop(idx)}
                  whileHover={{ scale: 1.02 }}
                  className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#D4AF37]/25 via-slate-900 to-[#0B0F19] border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                      : 'bg-slate-900/60 border-[#D4AF37]/20 hover:border-[#D4AF37]/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-cinzel ${
                        isSelected ? 'bg-[#D4AF37] text-[#0B0F19]' : 'bg-white/10 text-[#E6DFD5]'
                      }`}>
                        0{idx + 1}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white flex items-center gap-2">
                          <span>{stop.name}</span>
                        </div>
                        <div className="text-xs text-[#D4AF37] font-medium">{stop.tag}</div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-xs font-bold text-white">{stop.distance}</div>
                      <div className="text-[11px] text-[#E6DFD5]">{stop.driveTime}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Active Stop Visualizer Display */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeStop}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border-2 border-[#D4AF37]/50 shadow-[0_0_30px_rgba(212,175,55,0.25)] relative"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/25 border border-[#D4AF37]/60 text-xs font-bold text-white">
                  <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Circuit Stage 0{activeStop + 1} of 05
                </span>
                <span className="text-xs text-[#E6DFD5] flex items-center gap-1">
                  <Car className="w-3.5 h-3.5 text-[#D4AF37]" />
                  {stops[activeStop].driveTime}
                </span>
              </div>

              <h3 className="font-cinzel text-2xl font-bold text-white mb-2">
                {stops[activeStop].name}
              </h3>

              <div className="p-3 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-xs text-white font-medium mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span><strong className="text-[#D4AF37]">Key Highlight:</strong> {stops[activeStop].highlight}</span>
              </div>

              <p className="text-[#E6DFD5] text-sm leading-relaxed mb-6">
                {stops[activeStop].description}
              </p>

              {/* Travel Advisory Badge */}
              <div className="pt-4 border-t border-[#D4AF37]/20 flex flex-wrap items-center justify-between gap-3 text-xs text-[#E6DFD5]">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-[#D4AF37]" />
                  Official guide accompanies private vehicle or coordinates taxi
                </span>
                <a
                  href="#booking"
                  className="text-[#D4AF37] hover:text-white font-semibold flex items-center gap-1 transition-colors"
                >
                  <span>Book Circuit Guide</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
