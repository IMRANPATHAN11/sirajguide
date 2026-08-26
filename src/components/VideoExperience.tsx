import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ExternalLink, Sparkles } from 'lucide-react';

export const VideoExperience: React.FC = () => {
  return (
    <section id="video-tour" className="section-padding bg-[#0B0F19] relative overflow-hidden">
      {/* Background Glow */}
      <div className="ambient-glow-orb w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D4AF37]/15" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="section-pretitle">Exclusive Video Tour</span>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white mb-3">
            Experience <span className="gold-gradient-text">Devagiri Fort</span> with Siraj Shaikh
          </h2>
          <div className="gold-divider gold-divider-center" />
          <p className="text-[#E6DFD5] text-sm sm:text-base leading-relaxed">
            Watch Siraj Shaikh in action as he navigates the thrilling underground maze, defensive military architecture, and royal lore of the invincible 12th-century Daulatabad fortress.
          </p>
        </div>

        {/* Video Frame with Luxury Gold Shadow Effect */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl p-3 sm:p-4 bg-gradient-to-b from-[#141A2D] via-slate-900 to-[#0B0F19] border-2 border-[#D4AF37]/50 shadow-[0_0_50px_rgba(212,175,55,0.25)] backdrop-blur-2xl group hover:border-[#D4AF37] transition-all duration-500">
            {/* Aspect Ratio 16:9 Video Box */}
            <div className="relative w-full pb-[56.25%] rounded-2xl overflow-hidden bg-black shadow-inner border border-white/10">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/EFYSLGIi4ZE?rel=0&modestbranding=1"
                title="Experience Devagiri Fort with Siraj Shaikh"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Video Footer Metadata */}
            <div className="mt-4 sm:mt-5 px-3 py-3 rounded-xl bg-white/[0.03] border border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <span>Walking Through Medieval Defense Engineering</span>
                  </div>
                  <div className="text-xs text-[#E6DFD5]">Live on-site historical exploration of Daulatabad Citadel</div>
                </div>
              </div>

              <a
                href="https://youtu.be/EFYSLGIi4ZE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600/20 border border-red-500/40 text-red-300 hover:bg-red-600/30 transition-colors text-xs font-semibold shadow-md"
              >
                <i className="fab fa-youtube text-red-400 text-sm"></i>
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
