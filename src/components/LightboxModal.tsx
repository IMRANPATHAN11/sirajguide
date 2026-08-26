import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  src: string;
  alt: string;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  src,
  alt,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0B0F19]/95 backdrop-blur-xl"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-[0_25px_70px_rgba(0,0,0,0.95)] z-10 bg-[#0B0F19] flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#0B0F19]/80 text-white flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0B0F19] border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-all"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image */}
          <div className="relative flex-1 overflow-hidden flex items-center justify-center bg-black">
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-[75vh] object-contain rounded-t-xl"
            />
          </div>

          {/* Caption */}
          <div className="p-4 bg-[#141A2D] border-t border-[#D4AF37]/30 flex items-center justify-between text-xs sm:text-sm text-white">
            <div className="flex items-center gap-2 font-medium">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[#F3E5AB]">{alt}</span>
            </div>
            <span className="text-[#D4AF37] font-cinzel text-xs font-bold tracking-wider">Siraj Shaikh Archive</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
