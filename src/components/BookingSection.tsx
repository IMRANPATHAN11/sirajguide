import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageSquare, MapPin, CheckCircle2, ShieldCheck, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { TourPackage } from '../types';

interface BookingSectionProps {
  selectedPackage?: TourPackage | null;
  preselectedSite?: string | null;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  selectedPackage,
  preselectedSite
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [guestCount, setGuestCount] = useState('2 Persons (Couple)');
  const [language, setLanguage] = useState('English');
  const [specialNotes, setSpecialNotes] = useState('');
  const [copied, setCopied] = useState(false);

  const availableDestinations = [
    'Ellora Caves (Kailasa)',
    'Devagiri (Daulatabad) Fort',
    'Ajanta Caves & Murals',
    'Bibi Ka Maqbara',
    'Panchakki Water Mill'
  ];

  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([
    'Ellora Caves (Kailasa)',
    'Devagiri (Daulatabad) Fort'
  ]);

  // If a package or site is passed from parent, update the form
  useEffect(() => {
    if (preselectedSite) {
      const match = availableDestinations.find(d => d.toLowerCase().includes(preselectedSite.toLowerCase()));
      if (match && !selectedDestinations.includes(match)) {
        setSelectedDestinations(prev => [...prev, match]);
      }
    }
  }, [preselectedSite]);

  useEffect(() => {
    if (selectedPackage) {
      setSpecialNotes(prev => `Inquiry regarding: ${selectedPackage.name} (${selectedPackage.duration}). ${prev}`);
    }
  }, [selectedPackage]);

  const toggleDestination = (dest: string) => {
    if (selectedDestinations.includes(dest)) {
      setSelectedDestinations(selectedDestinations.filter(d => d !== dest));
    } else {
      setSelectedDestinations([...selectedDestinations, dest]);
    }
  };

  const constructWaMessage = () => {
    const destString = selectedDestinations.length > 0 ? selectedDestinations.join(', ') : 'All Major Heritage Sites';
    let msg = `*Tour Guide Booking Inquiry - Siraj Shaikh*\n\n`;
    msg += `👤 *Name:* ${fullName || 'Guest'}\n`;
    msg += `📞 *Contact:* ${phoneNum || 'Not specified'}\n`;
    msg += `📅 *Travel Date:* ${travelDate || 'Flexible / Upcoming'}\n`;
    msg += `👥 *Number of Guests:* ${guestCount}\n`;
    msg += `🗣️ *Preferred Language:* ${language}\n`;
    msg += `🏛️ *Interested Sites:* ${destString}\n`;
    if (specialNotes) {
      msg += `📝 *Notes/Requests:* ${specialNotes}\n`;
    }
    msg += `\nHello Siraj ji, I would like to check your availability and guiding package rates. Thank you!`;
    return msg;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger celebratory confetti in royal gold colors
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#D4AF37', '#F3E5AB', '#FFFFFF', '#AA771C']
      });
    } catch {
      // ignore
    }

    const waMsg = constructWaMessage();
    const waUrl = `https://wa.me/919860458313?text=${encodeURIComponent(waMsg)}`;
    window.open(waUrl, '_blank');
  };

  const handleCopyMessage = () => {
    const msg = constructWaMessage();
    navigator.clipboard.writeText(msg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="booking" className="section-padding bg-gradient-to-b from-[#0B0F19] via-[#121212] to-[#0B0F19] relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="section-pretitle">Direct Connect & Bookings</span>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white mb-3">
            Reserve Your <span className="gold-gradient-text">Private Guided Experience</span>
          </h2>
          <div className="gold-divider gold-divider-center" />
          <p className="text-[#E6DFD5] text-sm sm:text-base leading-relaxed">
            Connect directly with Siraj Shaikh via WhatsApp, phone, or email to check date availability and receive a transparent quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Details & Credentials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl p-6 sm:p-8 bg-slate-900/80 border border-[#D4AF37]/30 shadow-xl backdrop-blur-md">
              <span className="section-pretitle">Official Channels</span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-3">
                Get in Touch Directly
              </h3>
              <p className="text-[#E6DFD5] text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                Have questions regarding entry tickets, best times for photography, group logistics, or private AC cab arrangements? Siraj responds promptly to all inquiries.
              </p>

              {/* Contact Methods */}
              <div className="space-y-3.5 mb-8">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/919860458313?text=Hello%20Siraj%20ji,%20I%20would%20like%20to%20inquire%20about%20a%20guided%20tour%20in%20Chhatrapati%20Sambhajinagar."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform font-bold">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-[#25D366] font-bold uppercase tracking-wider">
                      WhatsApp Chat (Fastest)
                    </div>
                    <div className="text-sm font-bold text-white">+91 9860458313</div>
                  </div>
                </a>

                {/* Direct Call */}
                <a
                  href="tel:+919860458313"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#D4AF37]/15 hover:bg-[#D4AF37]/25 border border-[#D4AF37]/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F3E5AB] via-[#D4AF37] to-[#AA771C] text-[#0B0F19] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform font-bold">
                    <Phone className="w-6 h-6 text-[#0B0F19]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#D4AF37] font-bold uppercase tracking-wider">
                      Direct Phone Call
                    </div>
                    <div className="text-sm font-bold text-white">+91 9860458313</div>
                  </div>
                </a>

                {/* Email */}
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
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-950 text-[#D4AF37] border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:border-[#D4AF37] transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-[#D4AF37] font-bold uppercase tracking-wider flex items-center justify-between">
                      <span>Official Gmail</span>
                      <span className="text-[10px] text-[#F3E5AB] font-normal lowercase bg-[#D4AF37]/20 px-2 py-0.5 rounded-full">Click to Compose</span>
                    </div>
                    <div className="text-sm font-bold text-white break-all group-hover:text-[#F3E5AB] transition-colors">sirajskmta111@gmail.com</div>
                  </div>
                </a>
              </div>

              {/* Govt Regulation Badge */}
              <div className="p-4 rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37]/35 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div className="text-xs text-white leading-relaxed">
                  <strong className="text-[#D4AF37] font-semibold">Govt. Approved & Regulated:</strong> Ensuring authentic, licensed, safe, and transparent rates aligned with Ministry of Tourism norms.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Wizard */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-6 sm:p-9 bg-slate-900/80 border border-[#D4AF37]/35 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-md">
              <span className="section-pretitle">Instant WhatsApp Inquiry</span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-2">
                Customize & Send Inquiry
              </h3>
              <p className="text-[#E6DFD5] text-xs sm:text-sm mb-6 font-normal">
                Fill in the details below to formulate a direct WhatsApp inquiry.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Robert Smith / Amit Verma"
                    className="custom-input"
                  />
                </div>

                {/* Contact & Date Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                      WhatsApp / Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phoneNum}
                      onChange={(e) => setPhoneNum(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="custom-input"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                      Proposed Tour Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className="custom-input"
                    />
                  </div>
                </div>

                {/* Guests & Language Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                      Number of Guests
                    </label>
                    <select
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      className="custom-input"
                    >
                      <option value="1 Solo Traveler">1 Solo Traveler</option>
                      <option value="2 Persons (Couple)">2 Persons (Couple)</option>
                      <option value="3-5 Persons (Family/Small Group)">3–5 Persons (Family)</option>
                      <option value="6-15 Persons (Group Tour)">6–15 Persons (Group Tour)</option>
                      <option value="15+ Persons (Large Delegation)">15+ Persons (Delegation)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                      Preferred Language
                    </label>
                    <select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="custom-input"
                    >
                      <option value="English">English</option>
                      <option value="Hindi">Hindi</option>
                      <option value="Marathi">Marathi</option>
                      <option value="Chinese">Chinese</option>
                      <option value="Japanese">Japanese</option>
                      <option value="French">French</option>
                      <option value="German">German</option>
                      <option value="Multilingual">Multilingual (Multiple Languages)</option>
                    </select>
                  </div>
                </div>

                {/* Destinations Chips Multi-select */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2.5">
                    Destinations of Interest (Select All That Apply):
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {availableDestinations.map((dest) => {
                      const isSelected = selectedDestinations.includes(dest);
                      return (
                        <button
                          key={dest}
                          type="button"
                          onClick={() => toggleDestination(dest)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                            isSelected
                              ? 'bg-[#D4AF37]/35 border border-[#D4AF37] text-white shadow-[0_0_12px_rgba(212,175,55,0.4)]'
                              : 'bg-slate-950 border border-[#D4AF37]/20 text-[#E6DFD5] hover:border-[#D4AF37]/60 hover:text-white'
                          }`}
                        >
                          {isSelected ? <Check className="w-3.5 h-3.5 text-[#D4AF37]" /> : <MapPin className="w-3.5 h-3.5 text-[#D4AF37]/60" />}
                          <span>{dest}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2">
                    Special Requests or Notes
                  </label>
                  <textarea
                    rows={2}
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                    placeholder="e.g. need AC taxi pickup, senior citizen in group, photography focus..."
                    className="custom-input resize-none"
                  />
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-whatsapp-luxury w-full sm:flex-1 py-3.5 text-sm font-bold"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Inquiry via WhatsApp</span>
                  </motion.button>

                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="w-full sm:w-auto px-4 py-3.5 rounded-2xl bg-white/[0.04] hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-xs font-medium text-white flex items-center justify-center gap-2 transition-colors"
                  >
                    {copied ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-[#F3E5AB]" />
                        <span className="text-[#F3E5AB] font-semibold">Copied Summary!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#D4AF37]" />
                        <span>Copy Summary</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
