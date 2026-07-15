import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, FolderOpen, Play, X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { WorkCTA } from '../components/sections/WorkCTA';
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_PROJECTS,
  BUSINESS_ESSENTIALS_GALLERY,
  MARKETING_DESIGN_GALLERY,
  INVITATION_CARDS_GALLERY,
  INVITATION_VIDEOS_GALLERY
} from '../utils/portfolioData';

interface LightboxItem {
  id: string;
  title: string;
  svg?: React.ReactNode;
  videoUrl?: string;
  image?: string;
}

export const WorkCategory: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();



  // Lightbox State
  const [lightboxList, setLightboxList] = useState<LightboxItem[] | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1);

  // Business Essentials Image Lightbox State
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const openImageLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setZoomLevel(1);
  };

  const closeImageLightbox = () => {
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeImageLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setLightboxList(null);
    setLightboxIndex(-1);
    setSelectedImage(null);
    setZoomLevel(1);
  }, [categoryId]);

  const category = PORTFOLIO_CATEGORIES.find(c => c.id === categoryId);

  if (!category) {
    return (
      <div className="min-h-[70vh] bg-white flex flex-col items-center justify-center py-20 px-6 text-center">
        <Container>
          <h2 className="font-display font-bold text-3xl text-[#1B2450] mb-4">Category Not Found</h2>
          <p className="text-[#555555] font-sans text-sm mb-8">The requested portfolio category could not be located.</p>
          <Button variant="accent" size="md" href="/work" icon={<ArrowLeft className="w-4 h-4" />}>
            Back to Work
          </Button>
        </Container>
      </div>
    );
  }

  // Lightbox Navigation Handlers
  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!lightboxList || lightboxIndex === -1) return;
    setLightboxIndex(prev => (prev === 0 ? lightboxList.length - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!lightboxList || lightboxIndex === -1) return;
    setLightboxIndex(prev => (prev === lightboxList.length - 1 ? 0 : prev + 1));
  };

  const handleClose = () => {
    setLightboxList(null);
    setLightboxIndex(-1);
  };

  // ----------------------------------------------------
  // TEMPLATE 1: LOGO & BRANDING (Case Studies List)
  // ----------------------------------------------------
  const renderLogoBrandingTemplate = () => {
    const categoryProjects = category.projects
      .map(projId => PORTFOLIO_PROJECTS[projId])
      .filter(Boolean);

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categoryProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.08 }}
            className="group relative flex flex-col justify-between p-6 rounded-premium-lg bg-white border border-[#1B2450]/6 hover:border-[#FF5A1F] hover:shadow-[0_20px_45px_rgba(255,90,31,0.12)] hover:-translate-y-1.5 transition-all duration-500 h-full"
          >
            <div>
              {/* Mockup container */}
              <div className="overflow-hidden rounded-xl border border-[#1B2450]/5 bg-[#F7F7F8] aspect-[16/10] flex items-center justify-center mb-6 relative">
                <div className="w-full h-full transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 flex items-center justify-center">
                  {project.heroImageUrl ? (
                    <img
                      src={project.heroImageUrl}
                      alt={`${project.name} Hero Mockup`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="p-4 w-full h-full flex items-center justify-center">
                      {project.mockupSvg}
                    </div>
                  )}
                </div>
              </div>

              {/* Meta */}
              <h3 className="font-display font-bold text-lg text-[#1B2450] uppercase tracking-wide group-hover:text-[#FF5A1F] transition-colors duration-300 mb-1">
                {project.name}
              </h3>
              <div className="text-[#FF5A1F] font-sans font-medium text-[9px] uppercase tracking-widest mb-4">
                {project.industry}
              </div>

              <p className="text-[#555555] font-sans font-light text-xs leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            {/* Action button */}
            <Button
              variant="outline"
              size="sm"
              href={`/work/project/${project.id}`}
              icon={<ArrowRight className="w-3 h-3" />}
              className="w-full text-center justify-center border-[#1B2450]/10 hover:border-[#FF5A1F] mt-auto"
            >
              View Case Study
            </Button>
          </motion.div>
        ))}
      </div>
    );
  };

  // ----------------------------------------------------
  // TEMPLATE 2: BUSINESS ESSENTIALS (Masonry Lightbox Gallery)
  // ----------------------------------------------------
  const renderBusinessEssentialsTemplate = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {BUSINESS_ESSENTIALS_GALLERY.map((item, idx) => {
          const isCenteredCard = idx === 4;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              onClick={() => item.image && openImageLightbox(item.image)}
              className={`group relative rounded-premium-lg border border-[#1B2450]/6 bg-white overflow-hidden shadow-premium-sm hover:border-[#FF5A1F] hover:shadow-[0_16px_36px_rgba(255,90,31,0.06)] hover:-translate-y-1 transition-all duration-500 cursor-pointer text-left ${
                isCenteredCard ? 'col-span-1 md:col-span-2 justify-self-center w-full md:max-w-[calc(50%-16px)]' : ''
              }`}
            >
              {/* Visual display */}
              <div className="aspect-[16/10] bg-[#F7F7F8] flex items-center justify-center border-b border-[#1B2450]/5 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                />
              </div>

              {/* Bottom info */}
              <div className="p-5 text-left flex justify-between items-center">
                <div>
                  <h4 className="font-display font-semibold text-sm text-[#1B2450] uppercase tracking-wide group-hover:text-[#FF5A1F] transition-colors duration-300">
                    {item.title}
                  </h4>
                  <span className="font-sans text-[9px] text-[#FF5A1F] uppercase tracking-widest block mt-1">
                    {item.type}
                  </span>
                </div>
                <span className="text-[10px] text-[#888888] font-mono group-hover:text-[#FF5A1F] transition-colors">
                  🔍 Zoom
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    );
  };

  // ----------------------------------------------------
  // TEMPLATE 3: MARKETING DESIGN (Sectional Lightbox Gallery)
  // ----------------------------------------------------
  const renderMarketingDesignTemplate = () => {
    const sections = [
      { id: 'banner-design', title: 'Banner Design' },
      { id: 'social-media-posts', title: 'Social Media Posts' },
      { id: 'festival-creatives', title: 'Festival Creatives' },
      { id: 'carousel-posts', title: 'Carousel Posts' },
      { id: 'promotional-creatives', title: 'Promotional Creatives' }
    ];

    return (
      <div className="flex flex-col gap-24 max-w-6xl mx-auto">
        {sections.map((sec, secIdx) => {
          const items = MARKETING_DESIGN_GALLERY[sec.id] || [];

          return (
            <div key={sec.id} className="text-left">
              {/* Section Subheading */}
              <div className="mb-10 flex items-center gap-3">
                <span className="font-display font-bold text-lg text-[#FF5A1F]">0{secIdx + 1}</span>
                <h3 className="font-display font-bold text-2xl uppercase tracking-wider text-[#1B2450]">
                  {sec.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.08 }}
                    onClick={() => {
                      setLightboxList(items);
                      setLightboxIndex(idx);
                    }}
                    className="group relative rounded-premium-lg border border-[#1B2450]/6 bg-white overflow-hidden shadow-premium-sm hover:border-[#FF5A1F] hover:shadow-[0_16px_36px_rgba(255,90,31,0.06)] hover:-translate-y-1 transition-all duration-500 cursor-pointer"
                  >
                      <div className="aspect-[16/10] bg-[#F7F7F8] flex items-center justify-center p-6 border-b border-[#1B2450]/5 overflow-hidden">
                        <div className="w-full h-full transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] flex items-center justify-center">
                          {item.svg}
                        </div>
                      </div>
                      <div className="p-5 flex justify-between items-center">
                        <h4 className="font-display font-semibold text-sm text-[#1B2450] uppercase tracking-wide group-hover:text-[#FF5A1F] transition-colors duration-300">
                          {item.title}
                        </h4>
                        <span className="text-[10px] text-[#888888] font-mono group-hover:text-[#FF5A1F] transition-colors">
                          🔍 Zoom
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
            </div>
          );
        })}
      </div>
    );
  };

  // ----------------------------------------------------
  // TEMPLATE 4: INVITATION DESIGN (Image Cards & Videos)
  // ----------------------------------------------------
  const renderInvitationDesignTemplate = () => {
    return (
      <div className="flex flex-col gap-24 max-w-6xl mx-auto text-left">
        {/* Section 1: Invitation Cards */}
        <div>
          <div className="mb-10 flex items-center gap-3">
            <span className="font-display font-bold text-lg text-[#FF5A1F]">01</span>
            <h3 className="font-display font-bold text-2xl uppercase tracking-wider text-[#1B2450]">
              Invitation Cards
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INVITATION_CARDS_GALLERY.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onClick={() => {
                  setLightboxList(INVITATION_CARDS_GALLERY);
                  setLightboxIndex(idx);
                }}
                className="group relative rounded-premium-lg border border-[#1B2450]/6 bg-white overflow-hidden shadow-premium-sm hover:border-[#FF5A1F] hover:shadow-[0_16px_36px_rgba(255,90,31,0.06)] hover:-translate-y-1 transition-all duration-500 cursor-pointer"
              >
                <div className="aspect-[16/10] bg-[#F7F7F8] flex items-center justify-center p-6 border-b border-[#1B2450]/5 overflow-hidden">
                  <div className="w-full h-full transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] flex items-center justify-center">
                    {item.svg}
                  </div>
                </div>
                <div className="p-5 flex justify-between items-center">
                  <h4 className="font-display font-semibold text-sm text-[#1B2450] uppercase tracking-wide group-hover:text-[#FF5A1F] transition-colors duration-300">
                    {item.title}
                  </h4>
                  <span className="text-[10px] text-[#888888] font-mono">🔍 Zoom</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 2: Invitation Videos */}
        <div>
          <div className="mb-10 flex items-center gap-3">
            <span className="font-display font-bold text-lg text-[#FF5A1F]">02</span>
            <h3 className="font-display font-bold text-2xl uppercase tracking-wider text-[#1B2450]">
              Invitation Videos
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INVITATION_VIDEOS_GALLERY.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onClick={() => {
                  setLightboxList(INVITATION_VIDEOS_GALLERY);
                  setLightboxIndex(idx);
                }}
                className="group relative rounded-premium-lg border border-[#1B2450]/6 bg-white overflow-hidden shadow-premium-sm hover:border-[#FF5A1F] hover:shadow-[0_16px_36px_rgba(255,90,31,0.06)] hover:-translate-y-1 transition-all duration-500 cursor-pointer"
              >
                <div className="aspect-[16/10] bg-[#F7F7F8] flex items-center justify-center p-6 border-b border-[#1B2450]/5 overflow-hidden relative">
                  <div className="absolute inset-0 opacity-40 group-hover:scale-[1.03] transition-transform duration-700">
                    {item.svg}
                  </div>
                  {/* Play Button Overlay */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#FF5A1F] hover:bg-[#FF5A1F]/90 text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 duration-300">
                    <Play className="w-5 h-5 fill-white stroke-none translate-x-0.5" />
                  </div>
                </div>
                <div className="p-5 flex justify-between items-center">
                  <h4 className="font-display font-semibold text-sm text-[#1B2450] uppercase tracking-wide group-hover:text-[#FF5A1F] transition-colors duration-300">
                    {item.title}
                  </h4>
                  <span className="text-[10px] text-[#888888] font-mono">🎬 Play Invite</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative overflow-x-hidden bg-white">
      {/* =================================================
          MINI HERO SECTION (Dark Theme)
          ================================================= */}
      <section className="relative py-24 bg-[#1B2450] bg-gradient-to-b from-[#1B2450] to-[#141B3B] overflow-hidden border-b border-white/5 z-20 flex items-center">
        <div className="noise-overlay opacity-[0.035]" />

        {/* Ambient glow spots */}
        <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] bg-[#FF5A1F]/5 rounded-full blur-[100px] pointer-events-none" />

        <Container className="relative z-10 text-left">
          {/* Breadcrumb path */}
          <div className="flex items-center gap-2 text-white/50 font-sans text-xs uppercase tracking-wider mb-6">
            <Link to="/work" className="hover:text-white transition-colors duration-300">Work</Link>
            <span>/</span>
            <span className="text-white/80 font-semibold">{category.title}</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/[0.04] border border-white/10 text-[#FF5A1F] text-[9px] font-sans font-bold tracking-widest uppercase mb-4">
              <FolderOpen className="w-3 h-3" />
              Creative Portfolio
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-[0.015em] text-white leading-tight mb-4"
            >
              {category.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white/70 font-sans font-light text-base md:text-lg leading-relaxed"
            >
              {category.description}
            </motion.p>
          </div>
        </Container>
      </section>

      {/* =================================================
          DYNAMIC GALLERY LAYOUT (Light Theme)
          ================================================= */}
      <section className="relative py-28 bg-[#F7F7F8] border-b border-[#1B2450]/6 z-20">
        <div className="noise-overlay opacity-[0.02]" />

        <Container>
          {categoryId === 'logo-branding' && renderLogoBrandingTemplate()}
          {categoryId === 'business-essentials' && renderBusinessEssentialsTemplate()}
          {categoryId === 'marketing-design' && renderMarketingDesignTemplate()}
          {categoryId === 'invitation-design' && renderInvitationDesignTemplate()}
        </Container>
      </section>

      {/* Reusable Orange Inquiry Section */}
      <WorkCTA />

      {/* =================================================
          UNIFIED VISUAL LIGHTBOX MODAL
          ================================================= */}
      <AnimatePresence>
        {lightboxList && lightboxIndex !== -1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[999] flex flex-col items-center justify-center p-6 select-none"
            onClick={handleClose}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-colors duration-300 border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-6 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-colors duration-300 border border-white/10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-6 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-colors duration-300 border border-white/10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Content Container */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-4xl aspect-[16/10] rounded-2xl overflow-hidden bg-[#F7F7F8]/5 border border-white/10 shadow-2xl flex items-center justify-center p-12"
              onClick={e => e.stopPropagation()}
            >
              {lightboxList[lightboxIndex].videoUrl ? (
                // Video Player
                <video
                  src={lightboxList[lightboxIndex].videoUrl}
                  controls
                  className="w-full h-full object-contain"
                  // No autoplay as requested
                />
              ) : (
                // SVG Graphic Display
                <div className="w-4/5 h-auto text-white flex items-center justify-center">
                  {lightboxList[lightboxIndex].svg}
                </div>
              )}
            </motion.div>

            {/* Bottom Title Bar */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white">
              <h4 className="font-display font-semibold text-sm uppercase tracking-wider">
                {lightboxList[lightboxIndex].title}
              </h4>
              <span className="font-sans text-[10px] text-white/50 tracking-widest mt-1 block">
                {lightboxIndex + 1} / {lightboxList.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =================================================
          PREMIUM FULLSCREEN IMAGE LIGHTBOX
          ================================================= */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImageLightbox}
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
                onClick={closeImageLightbox} 
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

export default WorkCategory;
