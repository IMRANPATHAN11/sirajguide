import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/faq';

export const FaqSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'timing' | 'booking' | 'logistics'>('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'timing', label: 'Monuments & Timings' },
    { id: 'booking', label: 'Guiding & Rates' },
    { id: 'logistics', label: 'Travel & AC Cabs' }
  ];

  const filteredFaqs = FAQ_ITEMS.filter(
    item => activeCategory === 'all' || item.category === activeCategory
  );

  const toggleFaq = (id: string) => {
    setOpenFaqId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="section-padding bg-[#0B0F19] relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="section-pretitle">Practical Travel Advice</span>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white mb-3">
            Frequently Asked <span className="gold-gradient-text">Questions</span>
          </h2>
          <div className="gold-divider gold-divider-center" />
          <p className="text-[#E6DFD5] text-sm sm:text-base leading-relaxed">
            Essential visiting schedules, seasonal weather tips, and guiding protocols to make your journey effortless.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA771C] text-[#0B0F19] font-bold shadow-[0_0_15px_rgba(212,175,55,0.5)]'
                  : 'bg-slate-900/70 border border-[#D4AF37]/30 text-[#E6DFD5] hover:border-[#D4AF37]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900/90 border-[#D4AF37]/60 shadow-[0_10px_30px_rgba(0,0,0,0.75)]'
                    : 'bg-slate-900/60 border-[#D4AF37]/20 hover:border-[#D4AF37]/45'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-cinzel text-sm sm:text-base font-bold text-white flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-7 h-7 rounded-full bg-white/5 border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0 text-[#D4AF37]"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 pb-5 pt-1 text-[#E6DFD5] text-xs sm:text-sm leading-relaxed border-t border-[#D4AF37]/20">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
