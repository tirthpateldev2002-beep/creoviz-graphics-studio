import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, ZoomOut, X } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { WorkCTA } from '../components/sections/WorkCTA';
import { SEO } from '../components/common/SEO';

export const BannersPortfolio: React.FC = () => {
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

  return (
    <div className="relative overflow-x-hidden bg-white text-left">
      <SEO
        title="Banners & Outdoor Ads Portfolio | Creoviz Graphics Studio"
        description="Explore our collection of custom outdoor banners, shop flex layouts, and large-format digital advertisements."
        path="/work/banners"
      />
      {/* =================================================
          1. HERO SECTION (Dark Theme)
          ================================================= */}
      <section className="relative py-28 bg-[#1B2450] bg-gradient-to-b from-[#1B2450] to-[#141B3B] overflow-hidden border-b border-white/5 z-20">
        <div className="noise-overlay opacity-[0.03]" />
        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#FF5A1F] font-bold mb-4 block">
              PORTFOLIO
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-none mb-6">
              Banners
            </h1>
            <p className="text-white/70 font-sans font-light text-base md:text-lg leading-relaxed">
              Explore our premium promotional banners and large-format outdoor advertisements crafted to capture attention and communicate message.
            </p>
          </div>
        </Container>
      </section>

      {/* =================================================
          2. PROJECT LIST / GALLERY
          ================================================= */}
      <section className="relative py-28 bg-[#F7F7F8] border-b border-[#1B2450]/6 z-20">
        <div className="noise-overlay opacity-[0.02]" />
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 01: Car Wash Banner */}
            <div
              onClick={() => openLightbox('/brand-images/Car Wash Banner.webp')}
              className="group p-6 rounded-premium-lg bg-white border border-[#1B2450]/6 hover:border-[#FF5A1F] hover:shadow-premium-md transition-all duration-500 text-left flex flex-col justify-between h-full cursor-pointer"
            >
              <div>
                <div className="aspect-[16/10] bg-[#F7F7F8] border border-[#1B2450]/5 rounded-xl mb-6 overflow-hidden flex items-center justify-center">
                  <img
                    src="/brand-images/Car Wash Banner.webp"
                    alt="Car Wash Banner"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-103"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-display font-bold text-xl text-[#1B2450] uppercase tracking-wide mb-4">
                  Car Wash Banner
                </h3>
              </div>
              
              <div className="w-full text-center justify-center border border-[#1B2450]/10 rounded-full py-2.5 px-4 font-sans font-bold text-xs uppercase tracking-wider text-[#1B2450] group-hover:border-[#FF5A1F] group-hover:text-[#FF5A1F] transition-all duration-300 flex items-center gap-2 mt-auto">
                View Banner
              </div>
            </div>

            {/* Card 02: KKPS Banner */}
            <div
              onClick={() => openLightbox('/brand-images/KKPS Banner.webp')}
              className="group p-6 rounded-premium-lg bg-white border border-[#1B2450]/6 hover:border-[#FF5A1F] hover:shadow-premium-md transition-all duration-500 text-left flex flex-col justify-between h-full cursor-pointer"
            >
              <div>
                <div className="aspect-[16/10] bg-[#F7F7F8] border border-[#1B2450]/5 rounded-xl mb-6 overflow-hidden flex items-center justify-center">
                  <img
                    src="/brand-images/KKPS Banner.webp"
                    alt="KKPS Banner"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-103"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-display font-bold text-xl text-[#1B2450] uppercase tracking-wide mb-4">
                  KKPS Banner
                </h3>
              </div>
              
              <div className="w-full text-center justify-center border border-[#1B2450]/10 rounded-full py-2.5 px-4 font-sans font-bold text-xs uppercase tracking-wider text-[#1B2450] group-hover:border-[#FF5A1F] group-hover:text-[#FF5A1F] transition-all duration-300 flex items-center gap-2 mt-auto">
                View Banner
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =================================================
          Work CTA Section (Full-width Orange Gradient)
          ================================================= */}
      <WorkCTA />

      {/* =================================================
          PREMIUM FULLSCREEN IMAGE LIGHTBOX
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
                alt="Fullscreen Portfolio View"
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

export default BannersPortfolio;
