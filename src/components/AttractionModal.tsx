import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, AlertCircle, MapPin, Sparkles, Camera, Landmark, CheckCircle2, Crown, HeartHandshake, Shield, Compass, Flame, Palette, Eye, Moon, Flower2, Layers, Droplets, Cog, TreePine } from 'lucide-react';
import { Attraction } from '../types';

interface AttractionModalProps {
  attraction: Attraction | null;
  onClose: () => void;
  onBookSite: (attractionName: string) => void;
}

export const AttractionModal: React.FC<AttractionModalProps> = ({
  attraction,
  onClose,
  onBookSite
}) => {
  if (!attraction) return null;

  // Icon mapper helper with imperial gold
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Crown': return <Crown className="w-4 h-4 text-[#D4AF37]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-4 h-4 text-[#D4AF37]" />;
      case 'Shield': return <Shield className="w-4 h-4 text-[#D4AF37]" />;
      case 'Compass': return <Compass className="w-4 h-4 text-[#D4AF37]" />;
      case 'Flame': return <Flame className="w-4 h-4 text-[#D4AF37]" />;
      case 'Palette': return <Palette className="w-4 h-4 text-[#D4AF37]" />;
      case 'Eye': return <Eye className="w-4 h-4 text-[#D4AF37]" />;
      case 'Moon': return <Moon className="w-4 h-4 text-[#D4AF37]" />;
      case 'Flower2': return <Flower2 className="w-4 h-4 text-[#D4AF37]" />;
      case 'Layers': return <Layers className="w-4 h-4 text-[#D4AF37]" />;
      case 'Droplets': return <Droplets className="w-4 h-4 text-[#D4AF37]" />;
      case 'Cog': return <Cog className="w-4 h-4 text-[#D4AF37]" />;
      case 'TreePine': return <TreePine className="w-4 h-4 text-[#D4AF37]" />;
      default: return <Sparkles className="w-4 h-4 text-[#D4AF37]" />;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl my-8 rounded-2xl bg-[#101524] border-2 border-[#D4AF37]/50 shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#0B0F19]/80 border border-[#D4AF37]/40 text-white flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0B0F19] hover:border-[#D4AF37] transition-colors"
            aria-label="Close details modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header Image */}
          <div className="relative h-64 sm:h-72 w-full flex-shrink-0 bg-slate-900">
            <img
              src={attraction.image}
              alt={attraction.imageAlt || attraction.name}
              onError={(e) => {
                const target = e.currentTarget;
                target.onerror = null;
                target.src = `${import.meta.env.BASE_URL}images/siraj-photo1.jpg`;
              }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101524] via-[#101524]/40 to-transparent" />
            
            <div className="absolute bottom-4 left-6 right-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/35 backdrop-blur-md border border-[#D4AF37]/60 text-xs font-bold text-white mb-2">
                <Landmark className="w-3.5 h-3.5 text-[#D4AF37]" />
                {attraction.badge}
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-white">
                {attraction.name} {attraction.marathiName && <span className="text-[#D4AF37] text-xl font-normal">({attraction.marathiName})</span>}
              </h2>
              <p className="text-[#E6DFD5] text-xs sm:text-sm font-medium">{attraction.tagline}</p>
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 overflow-y-auto space-y-6">
            {/* Quick Metadata Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-[#D4AF37]/20">
                <div className="text-[11px] text-[#D4AF37] uppercase tracking-wider flex items-center gap-1 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> Location
                </div>
                <div className="text-xs font-semibold text-white">{attraction.distance}</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-[#D4AF37]/20">
                <div className="text-[11px] text-[#D4AF37] uppercase tracking-wider flex items-center gap-1 mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" /> Visiting Hours
                </div>
                <div className="text-xs font-semibold text-white">{attraction.timing}</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-[#D4AF37]/20">
                <div className="text-[11px] text-[#D4AF37] uppercase tracking-wider flex items-center gap-1 mb-1">
                  <AlertCircle className="w-3.5 h-3.5 text-[#D4AF37]" /> Weekly Status
                </div>
                <div className="text-xs font-semibold text-[#D4AF37]">{attraction.closedDay}</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-[#D4AF37]/20">
                <div className="text-[11px] text-[#D4AF37] uppercase tracking-wider flex items-center gap-1 mb-1">
                  <Landmark className="w-3.5 h-3.5 text-[#D4AF37]" /> Historical Era
                </div>
                <div className="text-xs font-semibold text-white truncate" title={attraction.historicalEra}>{attraction.historicalEra}</div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-cinzel text-lg font-bold text-[#D4AF37] mb-2">Historical Overview</h3>
              <p className="text-[#E6DFD5] text-sm leading-relaxed">{attraction.fullDesc}</p>
            </div>

            {/* Architectural Highlights */}
            <div>
              <h3 className="font-cinzel text-lg font-bold text-[#D4AF37] mb-3">Architectural & Story Highlights</h3>
              <div className="space-y-3">
                {attraction.highlights.map((hl, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-900/80 border border-[#D4AF37]/25 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {getIcon(hl.icon)}
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white mb-0.5">{hl.title}</div>
                      <div className="text-xs text-[#E6DFD5] leading-relaxed">{hl.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Photography Tip */}
            {attraction.photographyTip && (
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#D4AF37]/20 via-[#AA771C]/15 to-transparent border border-[#D4AF37]/35 flex items-start gap-3">
                <Camera className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-[#F3E5AB] uppercase tracking-wider mb-0.5">Insider Photography Tip</div>
                  <div className="text-xs text-[#E6DFD5]">{attraction.photographyTip}</div>
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-5 border-t border-[#D4AF37]/20 bg-[#0B0F19] flex items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#E6DFD5] hover:text-white transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookSite(attraction.name);
              }}
              className="btn-primary-luxury text-xs sm:text-sm py-2.5 px-5 font-bold"
            >
              <CheckCircle2 className="w-4 h-4 text-[#0B0F19]" />
              <span>Book Tour for {attraction.name}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
