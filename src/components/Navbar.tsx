import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, Landmark, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'video-tour', 'attractions', 'circuit', 'itineraries', 'reviews', 'faq', 'booking'];
      const scrollPos = window.scrollY + 160;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Siraj', href: '#about', id: 'about' },
    { name: 'Video Tour', href: '#video-tour', id: 'video-tour' },
    { name: 'Attractions', href: '#attractions', id: 'attractions' },
    { name: 'Circuit Map', href: '#circuit', id: 'circuit' },
    { name: 'Tour Plans', href: '#itineraries', id: 'itineraries' },
    { name: 'Guest Reviews', href: '#reviews', id: 'reviews' },
    { name: 'Travel FAQ', href: '#faq', id: 'faq' }
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-500">
      {/* Main Glass Navigation Bar */}
      <nav
        className={`transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-[#0B0F19]/95 backdrop-blur-xl border-b border-[#D4AF37]/30 shadow-[0_10px_30px_rgba(0,0,0,0.85)]'
            : 'py-4 md:py-5 bg-gradient-to-b from-[#0B0F19]/95 via-[#0B0F19]/60 to-transparent'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Brand Logo with Golden Light Effect */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="flex items-center gap-3.5 group cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.08, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#D4AF37]/30 via-[#AA771C]/40 to-[#0B0F19] border border-[#D4AF37]/50 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.35)] group-hover:border-[#D4AF37] transition-colors"
            >
              <Landmark className="w-5 h-5 text-[#D4AF37] group-hover:text-white transition-colors" />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-cinzel text-lg md:text-xl font-bold tracking-wider text-white group-hover:text-[#D4AF37] transition-colors">
                <span className="gold-shimmer-text">SIRAJ SHAIKH</span>
              </span>
              <span className="text-[10px] tracking-[0.2em] font-semibold text-[#D4AF37] uppercase -mt-0.5">
                Govt. Certified Heritage Guide
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-1 bg-[#141A2D]/80 border border-[#D4AF37]/25 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide transition-colors duration-300 rounded-full ${
                    isActive ? 'text-[#0B0F19] font-bold' : 'text-[#E6DFD5] hover:text-[#D4AF37]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA771C] rounded-full shadow-[0_0_15px_rgba(212,175,55,0.6)]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Nav Actions */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenBooking}
              className="btn-primary-luxury text-xs md:text-sm py-2.5 px-4 md:px-5 cursor-pointer font-bold"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Guide</span>
            </motion.button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-lg bg-white/5 border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/60 transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="xl:hidden border-t border-[#D4AF37]/30 bg-[#0B0F19]/98 backdrop-blur-2xl px-6 py-6 mt-3 shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col gap-3">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="flex items-center justify-between py-2.5 px-4 rounded-xl text-sm font-medium text-white hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all border border-transparent hover:border-[#D4AF37]/30"
                  >
                    <span>{link.name}</span>
                    <span className="text-[#D4AF37]/80 text-xs font-cinzel">0{idx + 1}</span>
                  </motion.a>
                ))}

                <div className="pt-4 border-t border-[#D4AF37]/30 flex flex-col gap-3">
                  <a
                    href="tel:+919860458313"
                    className="flex items-center gap-2 text-sm text-[#E6DFD5] py-2"
                  >
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                    +91 9860458313
                  </a>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBooking();
                    }}
                    className="btn-primary-luxury w-full justify-center text-sm py-3 font-bold"
                  >
                    <Calendar className="w-4 h-4" />
                    Reserve Guided Tour
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
