import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Globe2, ShieldCheck } from 'lucide-react';

export const StatsStrip: React.FC = () => {
  const stats = [
    {
      icon: Clock,
      number: '18+',
      title: 'Years Experience',
      desc: 'Guiding in Deccan Heritage',
      color: '#D4AF37'
    },
    {
      icon: Users,
      number: '5,000+',
      title: 'Satisfied Travelers',
      desc: 'VIPs, Researchers & Families',
      color: '#F3E5AB'
    },
    {
      icon: Globe2,
      number: '50+',
      title: 'Countries Hosted',
      desc: 'Global Guests Welcomed',
      color: '#D4AF37'
    },
    {
      icon: ShieldCheck,
      number: '100%',
      title: 'Govt. Verified',
      desc: 'Ministry of Tourism Norms',
      color: '#AA771C'
    }
  ];

  return (
    <div className="relative z-20 -mt-6 sm:-mt-10 mb-12">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4, borderColor: '#D4AF37' }}
                className="relative overflow-hidden rounded-2xl bg-slate-900/80 p-4 sm:p-6 border border-[#D4AF37]/30 backdrop-blur-md shadow-[0_15px_35px_-10px_rgba(0,0,0,0.7)] group hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-300"
              >
                {/* Background glow accent */}
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-[#D4AF37]/15 rounded-full blur-2xl group-hover:bg-[#D4AF37]/25 transition-all duration-500" />

                <div className="flex items-center gap-3.5 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="font-cinzel text-2xl sm:text-3xl font-extrabold text-white tracking-tight gold-gradient-text">
                    {stat.number}
                  </div>
                </div>

                <div className="font-semibold text-white text-sm sm:text-base mb-0.5">
                  {stat.title}
                </div>
                <div className="text-xs text-[#E6DFD5] font-normal">
                  {stat.desc}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
