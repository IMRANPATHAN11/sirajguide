import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Phone, Mail, MapPin, ShieldCheck, ArrowUp, Code2, ExternalLink, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#0B0F19] via-[#090D15] to-[#05070B] border-t border-[#D4AF37]/30 pt-16 pb-12 relative overflow-hidden">
      {/* Background subtle gold glow */}
      <div className="ambient-glow-orb w-[450px] h-[450px] bottom-0 left-1/2 -translate-x-1/2 bg-[#D4AF37]/10" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          {/* Col 1: Brand & Govt Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F3E5AB]/20 via-[#D4AF37]/30 to-[#AA771C]/20 border border-[#D4AF37]/50 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.25)]">
                <Landmark className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <span className="font-cinzel text-lg font-bold text-white tracking-wider block">
                  <span className="gold-shimmer-text">SIRAJ SHAIKH</span>
                </span>
                <span className="text-[10px] tracking-[0.2em] font-semibold text-[#D4AF37] uppercase block -mt-0.5">
                  Govt. Certified Heritage Guide
                </span>
              </div>
            </div>

            <p className="text-[#E6DFD5] text-xs sm:text-sm leading-relaxed font-normal">
              Official Regional Tourist Guide certified by the Ministry of Tourism & Culture, Government of India. Dedicated to delivering authentic, insightful, and memorable Deccan heritage tours across Maharashtra.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-xs text-white">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[#F3E5AB] font-medium">Incredible India Tourism Certified</span>
            </div>
          </div>

          {/* Col 2: Key Attractions */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-[#D4AF37] uppercase tracking-wider">
              Major Heritage Sites
            </h4>
            <ul className="space-y-2 text-xs text-[#E6DFD5] font-normal">
              <li><a href="#attractions" className="hover:text-[#D4AF37] transition-colors">Ellora Caves & Kailasa (Cave 16)</a></li>
              <li><a href="#attractions" className="hover:text-[#D4AF37] transition-colors">Devagiri / Daulatabad Fort</a></li>
              <li><a href="#attractions" className="hover:text-[#D4AF37] transition-colors">Ajanta Caves & Fresco Murals</a></li>
              <li><a href="#attractions" className="hover:text-[#D4AF37] transition-colors">Bibi Ka Maqbara (Taj of Deccan)</a></li>
              <li><a href="#attractions" className="hover:text-[#D4AF37] transition-colors">Panchakki Medieval Water Mill</a></li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-[#D4AF37] uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#E6DFD5] font-normal">
              <li><a href="#hero" className="hover:text-[#D4AF37] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">About Siraj</a></li>
              <li><a href="#video-tour" className="hover:text-[#D4AF37] transition-colors">Devagiri Video</a></li>
              <li><a href="#circuit" className="hover:text-[#D4AF37] transition-colors">Circuit Map</a></li>
              <li><a href="#itineraries" className="hover:text-[#D4AF37] transition-colors">Tour Packages</a></li>
              <li><a href="#reviews" className="hover:text-[#D4AF37] transition-colors">Guest Reviews</a></li>
              <li><a href="#faq" className="hover:text-[#D4AF37] transition-colors">Travel FAQ</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Bookings */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-[#D4AF37] uppercase tracking-wider">
              Contact & Bookings
            </h4>
            <div className="space-y-2.5 text-xs text-[#E6DFD5]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>Chhatrapati Sambhajinagar (Aurangabad), Maharashtra 431001, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a href="tel:+919860458313" className="hover:text-[#D4AF37] transition-colors">+91 9860458313</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sirajskmta111@gmail.com&su=Heritage%20Tour%20Inquiry%20-%20Siraj%20Shaikh&body=Hello%20Siraj%20ji,%0A%0AI%20would%20like%20to%20inquire%20about%20a%20guided%20tour%20in%20Chhatrapati%20Sambhajinagar."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                    if (isMobile) {
                      e.preventDefault();
                      window.location.href = "mailto:sirajskmta111@gmail.com?subject=Heritage%20Tour%20Inquiry%20-%20Siraj%20Shaikh&body=Hello%20Siraj%20ji,%0A%0AI%20would%20like%20to%20inquire%20about%20a%20guided%20tour%20in%20Chhatrapati%20Sambhajinagar.";
                    }
                  }}
                  className="hover:text-[#D4AF37] transition-colors break-all"
                  title="Click to compose email to Siraj Shaikh"
                >
                  sirajskmta111@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#booking"
                className="btn-primary-luxury text-xs py-2.5 px-4 w-full justify-center font-bold"
              >
                <span>Instant Tour Booking</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Middle Ribbon: Developer Branding Credit with Metallic Gold Glow Effect */}
        <div className="py-5 border-t border-[#D4AF37]/20 flex items-center justify-center">
          <motion.a
            href="https://imran-tech-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-[#141A2D] via-[#0F172A] to-[#141A2D] border border-[#D4AF37]/50 hover:border-[#D4AF37] shadow-[0_4px_20px_rgba(0,0,0,0.8)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300 backdrop-blur-md cursor-pointer"
          >
            <div className="w-6 h-6 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/60 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4AF37]/40 transition-colors shadow-[0_0_10px_rgba(212,175,55,0.4)]">
              <Code2 className="w-3.5 h-3.5 text-[#D4AF37] group-hover:rotate-12 transition-transform duration-300" />
            </div>
            
            <span className="text-xs text-[#E6DFD5] font-medium tracking-wide">
              Designed by{' '}
              <span className="font-bold text-white gold-gradient-text tracking-wider transition-colors drop-shadow-[0_0_10px_rgba(212,175,55,0.7)]">
                imran tech
              </span>
            </span>

            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] opacity-90 group-hover:opacity-100 group-hover:scale-125 transition-all drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
            <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]/70 group-hover:text-white transition-colors ml-0.5" />
          </motion.a>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8A196]">
          <div>
            &copy; {new Date().getFullYear()} Siraj Shaikh — Govt. Approved Tour Guide. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#D4AF37]/80 font-medium">Ministry of Tourism & Culture, Govt. of India</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#D4AF37] hover:text-[#0B0F19] text-[#E6DFD5] border border-[#D4AF37]/30 hover:border-[#D4AF37] flex items-center justify-center transition-all"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
