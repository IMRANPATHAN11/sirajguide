import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, Globe, CheckCircle2, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { REVIEWS } from '../data/reviews';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <section id="reviews" className="section-padding bg-gradient-to-b from-[#0B0F19] via-[#121212] to-[#0B0F19] relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="ambient-glow-orb w-[600px] h-[600px] -bottom-40 -left-40 bg-[#D4AF37]/15" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="section-pretitle">Guest Experiences</span>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white mb-3">
            Words from <span className="gold-gradient-text">Global Travelers</span>
          </h2>
          <div className="gold-divider gold-divider-center" />
          <p className="text-[#E6DFD5] text-sm sm:text-base leading-relaxed">
            Read authentic reviews from guests across the UK, USA, Japan, France, and India who explored Deccan heritage with Siraj Shaikh.
          </p>
        </div>

        {/* Featured Large Testimonial Card */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="relative rounded-3xl p-6 sm:p-10 bg-slate-900/80 backdrop-blur-md border-2 border-[#D4AF37]/40 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.85)] hover:border-[#D4AF37] transition-all duration-300">
            <Quote className="w-12 h-12 text-[#D4AF37]/15 absolute top-6 right-6 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                {/* 5-Star Rating Row */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(REVIEWS[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-white px-2.5 py-0.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40">
                    5.0 Verified Experience
                  </span>
                </div>

                {/* Testimonial Quote */}
                <p className="font-serif italic text-base sm:text-xl text-white leading-relaxed mb-6">
                  "{REVIEWS[currentIndex].text}"
                </p>

                {/* Tour Taken Tag */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-[#D4AF37]/30 text-xs text-[#F3E5AB] font-medium mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Tour: {REVIEWS[currentIndex].tourTaken}</span>
                </div>

                {/* Reviewer Details */}
                <div className="flex items-center justify-between pt-6 border-t border-[#D4AF37]/25 flex-wrap gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F3E5AB] via-[#D4AF37] to-[#AA771C] text-[#0B0F19] font-cinzel font-bold text-base flex items-center justify-center shadow-lg">
                      {REVIEWS[currentIndex].avatarText}
                    </div>
                    <div>
                      <div className="text-base font-bold text-white flex items-center gap-1.5">
                        <span>{REVIEWS[currentIndex].name}</span>
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                      </div>
                      <div className="text-xs text-[#E6DFD5] flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>{REVIEWS[currentIndex].location}</span>
                        <span>•</span>
                        <span>{REVIEWS[currentIndex].date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevReview}
                      className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#D4AF37] hover:text-[#0B0F19] border border-[#D4AF37]/30 hover:border-[#D4AF37] text-white flex items-center justify-center transition-colors"
                      aria-label="Previous review"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextReview}
                      className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#D4AF37] hover:text-[#0B0F19] border border-[#D4AF37]/30 hover:border-[#D4AF37] text-white flex items-center justify-center transition-colors"
                      aria-label="Next review"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mini Preview Avatars Row */}
        <div className="flex items-center justify-center gap-3">
          {REVIEWS.map((rev, i) => (
            <button
              key={rev.id}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === i
                  ? 'w-8 bg-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.85)]'
                  : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Jump to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
