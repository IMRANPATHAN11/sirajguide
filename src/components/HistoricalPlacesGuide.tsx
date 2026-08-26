import React, { useState } from 'react';
import { Search, MapPin, ArrowRight, Compass, Landmark, Clock, BookOpen, ChevronRight, Sparkles, Menu, X } from 'lucide-react';

// Sample curated historical monuments data
const FEATURED_MONUMENTS = [
  {
    id: 1,
    title: 'Kailasa Temple, Ellora',
    era: 'Rashtrakuta Dynasty (8th Century)',
    location: 'Maharashtra, India',
    image: 'https://images.unsplash.com/photo-1609946850117-90924e235074?auto=format&fit=crop&w=800&q=80',
    description: 'The world’s largest monolithic rock-cut structure, carved vertically downwards from a single basalt cliff with astonishing architectural precision.',
    readTime: '6 min read'
  },
  {
    id: 2,
    title: 'Devagiri / Daulatabad Fort',
    era: 'Yadava Dynasty (12th Century)',
    location: 'Chhatrapati Sambhajinagar, India',
    image: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=800&q=80',
    description: 'An impregnable medieval hill fortress famed for its ingenious underground maze (Bhul-Bhulaiya), multi-layered defense walls, and moat.',
    readTime: '8 min read'
  },
  {
    id: 3,
    title: 'Ajanta Cave Sanctuaries',
    era: 'Satavahana & Vakataka (2nd BCE – 5th CE)',
    location: 'Aurangabad District, India',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
    description: 'Thirty rock-hewn Buddhist prayer halls and monasteries preserving the pinnacle of ancient Indian fresco paintings and narrative sculptures.',
    readTime: '10 min read'
  },
  {
    id: 4,
    title: 'Bibi Ka Maqbara',
    era: 'Mughal Empire (1668 CE)',
    location: 'Chhatrapati Sambhajinagar, India',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    description: 'Commissioned by Azam Shah in memory of his mother Dilras Banu Begum, renowned as the graceful "Taj of the Deccan" with symmetrical charbagh gardens.',
    readTime: '5 min read'
  },
  {
    id: 5,
    title: 'Hampi Ruins & Virupaksha',
    era: 'Vijayanagara Empire (14th Century)',
    location: 'Karnataka, India',
    image: 'https://images.unsplash.com/photo-1600100397608-f010f4438317?auto=format&fit=crop&w=800&q=80',
    description: 'The monumental ruins of a legendary golden metropolis featuring stone chariots, musical pillared halls, and riverside boulder landscapes.',
    readTime: '9 min read'
  },
  {
    id: 6,
    title: 'Panchakki Water Mill',
    era: 'Ahmadnagar Sultanate (17th Century)',
    location: 'Maharashtra, India',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
    description: 'A scientific marvel of medieval hydraulic engineering that utilized underground gravity aqueducts from 8 km away to drive a grain mill.',
    readTime: '4 min read'
  }
];

export const HistoricalPlacesGuide: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredMonuments = FEATURED_MONUMENTS.filter((monument) =>
    monument.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    monument.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    monument.era.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C2C2C] font-['Inter',sans-serif] selection:bg-[#C5A880] selection:text-white flex flex-col">
      {/* 
        Google Fonts Link Embedded (Playfair Display for Headings, Inter for Body)
      */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,400;1,600&display=swap');
        .font-playfair {
          font-family: 'Playfair Display', Georgia, serif;
        }
      `}</style>

      {/* =========================================================================
          1. STICKY NAVBAR
         ========================================================================= */}
      <header className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#C5A880]/30 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-[#C5A880]/15 border border-[#C5A880] flex items-center justify-center text-xl shadow-sm group-hover:bg-[#C5A880] transition-colors duration-300">
                🏛️
              </div>
              <div className="flex flex-col">
                <span className="font-playfair text-2xl font-bold tracking-tight text-[#2C2C2C] group-hover:text-[#C5A880] transition-colors">
                  ItihasGuide
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#C5A880] -mt-1">
                  Chronicles of Heritage
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#destinations"
                className="text-sm font-medium text-[#2C2C2C] hover:text-[#C5A880] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C5A880] hover:after:w-full after:transition-all after:duration-300"
              >
                Destinations
              </a>
              <a
                href="#eras"
                className="text-sm font-medium text-[#2C2C2C] hover:text-[#C5A880] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C5A880] hover:after:w-full after:transition-all after:duration-300"
              >
                Eras & Dynasties
              </a>
              <a
                href="#gallery"
                className="text-sm font-medium text-[#2C2C2C] hover:text-[#C5A880] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C5A880] hover:after:w-full after:transition-all after:duration-300"
              >
                Gallery
              </a>
            </nav>

            {/* Search Bar & Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search monuments, eras..."
                  className="w-56 lg:w-64 pl-10 pr-4 py-2 text-xs rounded-full bg-white border border-[#C5A880]/40 text-[#2C2C2C] placeholder-[#2C2C2C]/50 focus:outline-none focus:ring-2 focus:ring-[#C5A880] focus:border-transparent transition-all shadow-sm"
                />
                <Search className="w-4 h-4 text-[#C5A880] absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#2C2C2C] hover:text-[#C5A880] hover:bg-[#C5A880]/10 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#C5A880]/20 bg-[#FDFBF7] px-6 py-5 space-y-4 shadow-xl">
            <div className="relative mb-3">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search monuments..."
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-full bg-white border border-[#C5A880]/40 text-[#2C2C2C] focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
              />
              <Search className="w-4 h-4 text-[#C5A880] absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
            <a
              href="#destinations"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-[#2C2C2C] hover:text-[#C5A880]"
            >
              Destinations
            </a>
            <a
              href="#eras"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-[#2C2C2C] hover:text-[#C5A880]"
            >
              Eras & Dynasties
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-[#2C2C2C] hover:text-[#C5A880]"
            >
              Gallery
            </a>
          </div>
        )}
      </header>

      {/* =========================================================================
          2. ELEGANT HERO SECTION
         ========================================================================= */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-[#FDFBF7] via-[#f7f2ea] to-[#FDFBF7]">
        {/* Subtle Background Geometry */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#C5A880]/15 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A880]/15 border border-[#C5A880]/40 text-[#2C2C2C] text-xs font-semibold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Discover Timeless Civilizations</span>
          </div>

          {/* Headline */}
          <h1 className="font-playfair text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#2C2C2C] leading-[1.15] mb-6">
            Where Stone Whispers <br />
            <span className="italic font-normal text-[#C5A880]">The Echoes of History</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-[#2C2C2C]/80 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Embark on a curated journey through majestic rock-cut sanctuaries, medieval fortresses, and imperial architectural marvels preserved across centuries.
          </p>

          {/* Call-to-Action Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#destinations"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#C5A880] hover:bg-[#b5966c] text-white text-sm font-semibold tracking-wide shadow-[0_8px_20px_-4px_rgba(197,168,128,0.5)] hover:shadow-[0_12px_25px_-4px_rgba(197,168,128,0.7)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Now</span>
            </a>
            
            <a
              href="#eras"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-[#FDFBF7] border border-[#C5A880]/50 text-[#2C2C2C] text-sm font-medium tracking-wide shadow-sm hover:border-[#C5A880] transition-all duration-300"
            >
              <span>View Timeline</span>
              <ArrowRight className="w-4 h-4 text-[#C5A880]" />
            </a>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-3 mt-14">
            <div className="h-[1px] w-16 bg-[#C5A880]/40" />
            <div className="w-2 h-2 rounded-full bg-[#C5A880]" />
            <div className="h-[1px] w-16 bg-[#C5A880]/40" />
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. FEATURED GRID LAYOUT
         ========================================================================= */}
      <section id="destinations" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A880] block mb-2">
              Curated Sanctuaries
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#2C2C2C]">
              Featured Historical Marvels
            </h2>
          </div>
          <p className="text-sm text-[#2C2C2C]/70 max-w-md font-light">
            Each monument represents a defining epoch of human ambition, spiritual mastery, and timeless craftsmanship.
          </p>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMonuments.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#C5A880]/25 hover:border-[#C5A880] shadow-[0_4px_20px_-4px_rgba(44,44,44,0.06)] hover:shadow-[0_15px_35px_-6px_rgba(197,168,128,0.25)] transition-all duration-400 hover:-translate-y-1.5"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-[#e9e3d8]">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Location Tag */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2C2C2C]/85 backdrop-blur-md text-white text-xs font-medium">
                  <MapPin className="w-3 h-3 text-[#C5A880]" />
                  <span>{item.location}</span>
                </div>

                {/* Reading Time */}
                <div className="absolute bottom-4 right-4 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-white/90 backdrop-blur-sm text-[#2C2C2C] text-[11px] font-medium">
                  <Clock className="w-3 h-3 text-[#C5A880]" />
                  <span>{item.readTime}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Historical Era Tag */}
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A880] block mb-2">
                    {item.era}
                  </span>

                  {/* Title in Serif Font */}
                  <h3 className="font-playfair text-2xl font-bold text-[#2C2C2C] group-hover:text-[#C5A880] transition-colors mb-3 leading-snug">
                    {item.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-[#2C2C2C]/75 leading-relaxed font-light mb-6 line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Read Guide Link */}
                <div className="pt-4 border-t border-[#C5A880]/15 flex items-center justify-between">
                  <a
                    href={`#guide-${item.id}`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#2C2C2C] group-hover:text-[#C5A880] transition-colors"
                  >
                    <span>Read Historical Guide</span>
                    <ChevronRight className="w-4 h-4 text-[#C5A880] group-hover:translate-x-1 transition-transform" />
                  </a>

                  <span className="w-7 h-7 rounded-full bg-[#C5A880]/10 flex items-center justify-center text-[#C5A880] group-hover:bg-[#C5A880] group-hover:text-white transition-colors duration-300">
                    <BookOpen className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================================================
          4. MINIMALIST DARK FOOTER
         ========================================================================= */}
      <footer className="bg-[#2C2C2C] text-white pt-16 pb-12 border-t border-[#C5A880]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            
            {/* Brand Column */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏛️</span>
                <span className="font-playfair text-2xl font-bold tracking-tight text-white">
                  ItihasGuide
                </span>
              </div>
              <p className="text-sm text-gray-300 font-light leading-relaxed max-w-sm">
                Dedicated to documenting, preserving, and sharing the profound cultural heritage and architectural triumphs of ancient civilizations.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="font-playfair text-base font-semibold text-[#C5A880] tracking-wide">
                Exploration
              </h4>
              <ul className="space-y-2 text-sm text-gray-300 font-light">
                <li><a href="#destinations" className="hover:text-[#C5A880] transition-colors">UNESCO Monuments</a></li>
                <li><a href="#eras" className="hover:text-[#C5A880] transition-colors">Dynastic Timelines</a></li>
                <li><a href="#architectures" className="hover:text-[#C5A880] transition-colors">Rock-Cut Architecture</a></li>
                <li><a href="#preservation" className="hover:text-[#C5A880] transition-colors">Heritage Preservation</a></li>
              </ul>
            </div>

            {/* Legal & Newsletter */}
            <div className="md:col-span-4 space-y-3">
              <h4 className="font-playfair text-base font-semibold text-[#C5A880] tracking-wide">
                Chronicle Gazette
              </h4>
              <p className="text-xs text-gray-300 font-light">
                Subscribe to receive monthly deep-dives on newly excavated heritage sites.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 text-xs rounded-full bg-white/5 border border-[#C5A880]/30 text-white placeholder-gray-400 focus:outline-none focus:border-[#C5A880]"
                />
                <button className="px-5 py-2 rounded-full bg-[#C5A880] hover:bg-[#b5966c] text-white text-xs font-semibold transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-light">
            <div>
              &copy; {new Date().getFullYear()} ItihasGuide. All rights reserved. Crafted for heritage explorers.
            </div>

            <div className="flex items-center gap-6">
              <a href="#privacy" className="hover:text-[#C5A880] transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-[#C5A880] transition-colors">Terms of Service</a>
              <a href="#contact" className="hover:text-[#C5A880] transition-colors">Contact Curators</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HistoricalPlacesGuide;
