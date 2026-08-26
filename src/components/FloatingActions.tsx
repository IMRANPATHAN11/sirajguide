import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Action Button */}
      <motion.a
        href="https://wa.me/919860458313?text=Hello%20Siraj%20ji,%20I%20am%20interested%20in%20booking%20a%20guided%20tour%20with%20you."
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        className="group relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.5)] cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
        <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 text-white" />

        {/* Hover Tooltip */}
        <span className="absolute right-full mr-3.5 px-3 py-1.5 rounded-xl bg-[#0B0F19]/95 text-[#F3E5AB] text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-[#D4AF37]/50 shadow-xl backdrop-blur-md">
          Chat with Siraj on WhatsApp
        </span>
      </motion.a>

      {/* Phone Call Action Button with Imperial Gold Gradient */}
      <motion.a
        href="tel:+919860458313"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        className="group relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#F3E5AB] via-[#D4AF37] to-[#AA771C] text-[#0B0F19] flex items-center justify-center shadow-[0_10px_25px_rgba(212,175,55,0.55)] cursor-pointer font-bold"
        aria-label="Call Siraj Shaikh"
      >
        <Phone className="w-6 h-6 sm:w-6 sm:h-6 text-[#0B0F19]" />

        {/* Hover Tooltip */}
        <span className="absolute right-full mr-3.5 px-3 py-1.5 rounded-xl bg-[#0B0F19]/95 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-[#D4AF37]/50 shadow-xl backdrop-blur-md">
          Call +91 9860458313
        </span>
      </motion.a>
    </div>
  );
};
