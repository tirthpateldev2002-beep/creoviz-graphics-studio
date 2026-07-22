import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, ZoomOut, X, FolderOpen } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { WorkCTA } from '../components/sections/WorkCTA';
import { SEO } from '../components/common/SEO';

interface BusinessCardData {
  id: string;
  name: string;
  image?: string;
  isPlaceholder: boolean;
}

export const BusinessCardsPortfolio: React.FC = () => {
  // Lightbox State
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  // ESC Key listener for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setZoomLevel(1);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setZoomLevel(1);
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.5, 1));
  };

  const toggleZoom = () => {
    setZoomLevel(prev => (prev > 1 ? 1 : 2.5));
  };

  const businessCards: BusinessCardData[] = [
    {
      id: 'card-01',
      name: 'The Layers Business Card',
      image: '/brand-images/The Layers Business Card.webp',
      isPlaceholder: false,
    },
    {
      id: 'card-02',
      name: 'Sunelite Pharma Business Card 4',
      image: '/brand-images/Sunelite Pharma Business Card 4.webp',
      isPlaceholder: false,
    },
    {
      id: 'card-03',
      name: 'Divya Ply Business Card',
      image: '/brand-images/Divya Ply Business Card.webp',
      isPlaceholder: false,
    },
    {
      id: 'card-04',
      name: 'Poonam Traders Visiting Card',
      image: '/brand-images/Poonam Traders Visiting Card.webp',
      isPlaceholder: false,
    },
    {
      id: 'card-05',
      name: 'Maa Shakti Packaging Business Card',
      image: '/brand-images/Maa Shakti Packaging Business Card.webp',
      isPlaceholder: false,
    },
    {
      id: 'card-06',
      name: 'Arpan Tyre Visiting Card',
      image: '/brand-images/Arpan Tyre Visiting Card.webp',
      isPlaceholder: false,
    },
    {
      id: 'card-07',
      name: 'Divyog CNC Studio Visiting Card',
      image: '/brand-images/Divyog CNC Studio Visiting Card.webp',
      isPlaceholder: false,
    },
    {
      id: 'card-08',
      name: 'Patel & Company Visiting Card',
      image: '/brand-images/Patel & Company Visiting Card.webp',
      isPlaceholder: false,
    },
  ];

  return (
    <div className="relative overflow-x-hidden bg-white text-left">
      <SEO
        title="Business Cards Portfolio | Creoviz Graphics Studio"
        description="Browse our collection of premium visiting card designs, structured on standard dielines and print dimensions."
        path="/work/business-cards"
      />
      {/* =================================================
          1. HERO SECTION (Dark Theme)
          ================================================= */}
      <section className="relative py-24 bg-[#1B2450] bg-gradient-to-b from-[#1B2450] to-[#141B3B] overflow-hidden border-b border-white/5 z-20 flex items-center min-h-[50vh]">
        <div className="noise-overlay opacity-[0.035]" />
        
        {/* Ambient glow spots */}
        <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] bg-[#FF5A1F]/5 rounded-full blur-[100px] pointer-events-none" />

        <Container className="relative z-10 text-left">
          <div className="max-w-3xl">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/[0.04] border border-white/10 text-[#FF5A1F] text-[9px] font-sans font-bold tracking-widest uppercase mb-4">
              WORK / BUSINESS ESSENTIALS
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-[0.015em] text-white leading-tight mb-4"
            >
              Business Cards Portfolio
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white/70 font-sans font-light text-base md:text-lg leading-relaxed"
            >
              Discover our collection of bespoke, premium business card designs featuring refined typography, elegant layout structures, and high-end finishes for professional offline impressions.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* =================================================
          2. BUSINESS CARD GRID
          ================================================= */}
      <section className="relative py-28 bg-[#F7F7F8] border-b border-[#1B2450]/6 z-20">
        <div className="noise-overlay opacity-[0.02]" />
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {businessCards.map((card, idx) => {
              if (card.isPlaceholder) {
                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 0.6, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.05 }}
                    className="flex flex-col justify-between p-6 rounded-premium-lg bg-white border border-[#1B2450]/6 h-full select-none opacity-60"
                  >
                    <div>
                      <div className="overflow-hidden rounded-xl border border-dashed border-[#1B2450]/15 bg-[#F7F7F8]/50 aspect-[16/10] flex flex-col items-center justify-center mb-6 relative">
                        <FolderOpen className="w-6 h-6 text-[#1B2450]/20 mb-2" />
                        <span className="font-sans text-[10px] text-[#888888]/40 tracking-wider uppercase font-semibold">Placeholder</span>
                      </div>
                      <h3 className="font-display font-bold text-lg text-[#1B2450]/40 uppercase tracking-wide mb-1">
                        {card.name}
                      </h3>
                    </div>
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  onClick={() => card.image && openLightbox(card.image)}
                  className="group relative flex flex-col justify-between p-6 rounded-premium-lg bg-white border border-[#1B2450]/6 hover:border-[#FF5A1F] hover:shadow-[0_20px_45px_rgba(255,90,31,0.08)] hover:-translate-y-1.5 transition-all duration-500 h-full cursor-pointer text-left"
                >
                  <div>
                    {/* Image container */}
                    <div className="overflow-hidden rounded-xl border border-[#1B2450]/5 bg-[#F7F7F8] aspect-[16/10] flex items-center justify-center mb-6 relative">
                      <img
                        src={card.image}
                        alt={card.name}
                        className="w-full h-full object-cover transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[#1B2450]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="px-4 py-2 bg-white rounded-full text-[#1B2450] font-sans font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          <ZoomIn className="w-3.5 h-3.5" />
                          View Design
                        </div>
                      </div>
                    </div>
                    {/* Meta */}
                    <h3 className="font-display font-bold text-lg text-[#1B2450] uppercase tracking-wide group-hover:text-[#FF5A1F] transition-colors duration-300 mb-1">
                      {card.name}
                    </h3>
                    <div className="text-[#FF5A1F] font-sans font-medium text-[9px] uppercase tracking-widest">
                      Premium Quality Design &rarr;
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =================================================
          Work CTA Section (Full-width Orange Gradient)
          ================================================= */}
      <WorkCTA />

      {/* =================================================
          4. PREMIUM FULLSCREEN LIGHTBOX
          ================================================= */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 bg-[#0c0f1d]/98 backdrop-blur-md z-[9999] flex flex-col items-center justify-center p-4 md:p-8 select-none"
          >
            {/* Control Bar */}
            <div 
              className="absolute top-6 flex items-center gap-4 bg-white/5 border border-white/10 rounded-full px-5 py-2 backdrop-blur-sm z-[10000] text-white"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={handleZoomOut} 
                disabled={zoomLevel === 1}
                className="hover:text-[#FF5A1F] transition-colors disabled:opacity-30 disabled:hover:text-white cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              
              <span className="font-mono text-xs font-semibold min-w-[50px] text-center">
                {Math.round(zoomLevel * 100)}%
              </span>
              
              <button 
                onClick={handleZoomIn} 
                disabled={zoomLevel === 4}
                className="hover:text-[#FF5A1F] transition-colors disabled:opacity-30 disabled:hover:text-white cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn className="w-5 h-5" />
              </button>

              <div className="w-px h-4 bg-white/25" />

              <button 
                onClick={closeLightbox} 
                className="hover:text-[#FF5A1F] transition-colors cursor-pointer"
                title="Close (ESC)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drag Container / Image viewport */}
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              <motion.img
                key={selectedImage}
                src={selectedImage}
                alt="Fullscreen Business Card View"
                onDoubleClick={toggleZoom}
                className={`max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl select-none transition-shadow ${
                  zoomLevel > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-zoom-in'
                }`}
                style={{ scale: zoomLevel }}
                drag={zoomLevel > 1}
                dragConstraints={{
                  left: -350 * (zoomLevel - 1),
                  right: 350 * (zoomLevel - 1),
                  top: -250 * (zoomLevel - 1),
                  bottom: 250 * (zoomLevel - 1)
                }}
                dragElastic={0.12}
                dragMomentum={true}
                animate={{ scale: zoomLevel }}
                onClick={e => e.stopPropagation()}
              />
            </div>
            
            {/* Helper Caption */}
            <div className="absolute bottom-6 font-sans text-[10px] text-white/40 uppercase tracking-widest pointer-events-none">
              Double-click to toggle zoom &bull; Drag to pan when zoomed
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BusinessCardsPortfolio;
