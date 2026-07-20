import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { PORTFOLIO_PROJECTS } from '../utils/portfolioData';
import { WorkCTA } from '../components/sections/WorkCTA';

interface ShowcaseItem {
  label: string;
  title: string;
  align: 'left' | 'right';
  description: string;
  imageUrl?: string;
}

export const WorkProject: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();

  // Fullscreen Lightbox State
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1);
  const [isLocalProject, setIsLocalProject] = useState<boolean>(false);

  useEffect(() => {
    setLightboxIndex(-1);
    setIsLocalProject(projectId === 'deeps-beauty' || projectId === 'deeps-skin-clinic');
  }, [projectId]);

  // Define data for the two featured projects
  const beautyShowcases: ShowcaseItem[] = [
    {
      label: '01 / PRINT BRANDING',
      title: 'Custom Lip-Shaped Business Card',
      align: 'left',
      description: 'We designed custom lip-shaped business cards featuring premium print structures and soft-touch matte laminations to reflect a modern, high-fashion aesthetic for the brand.',
      imageUrl: '/brand-images/Deeps Beauty Mockup design.png'
    },
    {
      label: '02 / PRINT BRANDING',
      title: 'Premium Business Card',
      align: 'right',
      description: 'Crafted dual-toned premium business cards on heavy cardstock. The design utilizes a minimal, high-contrast typography layout highlighting core details alongside a clean blind-debossed logo finish.',
      imageUrl: '/brand-images/Deeps Beauty Business Card.jpg'
    },
    {
      label: '03 / RETAIL BRANDING',
      title: 'Product Price Tag Design',
      align: 'left',
      description: 'Elegant product price tags featuring clean grids, custom typography configurations, and metallic foil accents to unify the physical product presentation for retail shelf layouts.',
      imageUrl: '/brand-images/Deeps Beauty Price Tag.jpg'
    },
    {
      label: '04 / PACKAGING',
      title: 'Custom Paper Bag Design',
      align: 'right',
      description: 'Bespoke corporate paper bag layout designs with structural rope handles and unified brand motifs, optimized for production and premium unboxing customer experiences.',
      imageUrl: '/brand-images/Deeps Beauty Paper Bag.png'
    }
  ];

  const clinicShowcases: ShowcaseItem[] = [
    {
      label: '01 / BRAND IDENTITY',
      title: 'Logo Design',
      align: 'left',
      description: "Designed a clean, clinical logo identity system for Deep's Skin Clinic. The round signage concept utilizes elegant typography and a minimalist face icon, creating a high-end medical-aesthetic brand presence.",
      imageUrl: "/brand-images/Deep's Skin Clinic Logo.jpg"
    },
    {
      label: '02 / PRINT BRANDING',
      title: 'Custom Lip-Shaped Business Card',
      align: 'right',
      description: "Created custom lip-shaped business cards featuring premium rose-toned colors, minimal typography layout, and detailed contact info. The unique contour cut mirrors the clinic's core treatments, offering a memorable tactile experience.",
      imageUrl: '/brand-images/Deeps Skin Clinic Card Mockup.jpg'
    },
    {
      label: '03 / PRINT MARKETING',
      title: 'Coupon Design & Printing',
      align: 'left',
      description: 'Production-ready discount coupons and referral tickets optimized for offset print colors to drive clinic client retention and strengthen offline promotional activities.',
      imageUrl: "/brand-images/Deep's Skin Clinic Coupon Mockup.png"
    },
    {
      label: '04 / PACKAGING',
      title: 'Custom Paper Bag Design',
      align: 'right',
      description: 'Premium clinical shopping bags designed with minimalist alignments, soft paper weights, and durable fold alignments suitable for premium skin care products delivery.',
      imageUrl: "/brand-images/Deep's Skin Clinic Paper Bag.png"
    }
  ];

  const currentShowcases = projectId === 'deeps-beauty' ? beautyShowcases : clinicShowcases;

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (isLocalProject) {
      setLightboxIndex(prev => (prev === 0 ? currentShowcases.length - 1 : prev - 1));
    } else {
      const fallbackProject = PORTFOLIO_PROJECTS[projectId || ''];
      if (fallbackProject?.mockupUrls) {
        setLightboxIndex(prev => (prev === 0 ? fallbackProject.mockupUrls!.length - 1 : prev - 1));
      }
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (isLocalProject) {
      setLightboxIndex(prev => (prev === currentShowcases.length - 1 ? 0 : prev + 1));
    } else {
      const fallbackProject = PORTFOLIO_PROJECTS[projectId || ''];
      if (fallbackProject?.mockupUrls) {
        setLightboxIndex(prev => (prev === fallbackProject.mockupUrls!.length - 1 ? 0 : prev + 1));
      }
    }
  };

  const handleClose = () => {
    setLightboxIndex(-1);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === -1) return;
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, projectId, isLocalProject]);

  // ----------------------------------------------------
  // DEEP'S BEAUTY & DEEP'S SKIN CLINIC RENDERING
  // ----------------------------------------------------
  if (isLocalProject) {
    const isBeauty = projectId === 'deeps-beauty';
    const pageTitle = isBeauty ? "Deep's Beauty" : "Deep's Skin Clinic";
    const category = isBeauty ? "Beauty Brand" : "Skin Clinic";
    const location = isBeauty ? "USA" : "India";
    const overviewText = isBeauty
      ? "Deep's Beauty is a premium beauty brand based in the USA. The objective was to create high-quality printed branding materials that reflect a professional and luxurious brand identity. Every design was carefully prepared for production to ensure a premium customer experience."
      : "Deep's Skin Clinic required a complete brand identity along with professionally designed print materials to strengthen its offline branding and customer experience. Every design was created with production-ready specifications for premium print quality.";

    return (
      <div className="relative overflow-x-hidden bg-white text-left">
        {/* =================================================
            1. HERO SECTION (Dark Theme)
            ================================================= */}
        <section className="relative py-28 bg-[#1B2450] bg-gradient-to-b from-[#1B2450] to-[#141B3B] overflow-hidden border-b border-white/5 z-20 min-h-[60vh] flex items-center">
          <div className="noise-overlay opacity-[0.035]" />
          <div className="absolute top-[30%] right-[-10%] w-[450px] h-[450px] bg-[#FF5A1F]/5 rounded-full blur-[110px] pointer-events-none" />

          <Container className="relative z-10 w-full text-left">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-white/55 hover:text-[#FF5A1F] font-sans text-xs uppercase tracking-wider mb-8 transition-colors duration-300 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-0.5 transition-transform" />
              Back to Portfolio
            </Link>

            <div className="max-w-4xl">
              <h1 className="font-display font-extrabold text-4xl sm:text-6xl uppercase tracking-[0.015em] text-white leading-tight mb-8">
                {pageTitle}
              </h1>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-2xl bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
                <div>
                  <span className="font-display font-semibold text-[9px] text-[#FF5A1F] uppercase tracking-widest block mb-1">Category</span>
                  <span className="font-sans font-bold text-sm text-white">{category}</span>
                </div>
                <div>
                  <span className="font-display font-semibold text-[9px] text-[#FF5A1F] uppercase tracking-widest block mb-1">Location</span>
                  <span className="font-sans font-bold text-sm text-white">{location}</span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* =================================================
            2. PROJECT OVERVIEW (Project Brief)
            ================================================= */}
        <section className="relative py-20 bg-white border-b border-[#1B2450]/6 z-20">
          <div className="noise-overlay opacity-[0.01]" />
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 max-w-5xl mx-auto">
              <div className="lg:col-span-4">
                <h2 className="font-display font-bold text-xs uppercase tracking-widest text-[#FF5A1F] mb-3">01 / OVERVIEW</h2>
                <h3 className="font-display font-extrabold text-2xl uppercase text-[#1B2450] tracking-wide">Project Brief</h3>
              </div>
              <div className="lg:col-span-8">
                <p className="text-[#555555] font-sans font-light text-base leading-relaxed">
                  {overviewText}
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* =================================================
            3. SERVICES DELIVERED (SHOWCASE SECTIONS)
            ================================================= */}
        <section className="relative py-24 bg-[#F7F7F8] border-b border-[#1B2450]/6 z-20">
          <div className="noise-overlay opacity-[0.02]" />
          <Container>
            <div className="max-w-5xl mx-auto">
              <div className="mb-16">
                <h2 className="font-display font-bold text-xs uppercase tracking-widest text-[#FF5A1F] mb-3">02 / SERVICES</h2>
                <h3 className="font-display font-extrabold text-2xl uppercase text-[#1B2450] tracking-wide">Services Delivered</h3>
              </div>

              {/* Showcase Rows */}
              <div className="space-y-24">
                {currentShowcases.map((showcase, idx) => {
                  const isLeft = showcase.align === 'left';
                  
                  // Premium click trigger placeholder block
                  const imagePlaceholderBlock = (
                    <div
                      onClick={() => setLightboxIndex(idx)}
                      className="group w-full aspect-[16/9] rounded-2xl border border-[#1B2450]/8 bg-white shadow-premium-sm hover:border-[#FF5A1F] hover:shadow-premium-md hover:-translate-y-0.5 cursor-pointer flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden relative transition-all duration-300"
                    >
                      {showcase.imageUrl ? (
                        <img
                          src={showcase.imageUrl}
                          alt={showcase.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                        />
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-tr from-[#1B2450]/0 to-[#1B2450]/1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                          <ImageIcon className="w-9 h-9 text-[#1B2450]/20 mb-3 group-hover:text-[#FF5A1F]/30 transition-colors duration-300" />
                          <span className="font-sans text-xs text-[#888888] font-medium group-hover:text-[#FF5A1F] transition-colors duration-300">Project Image will be added later</span>
                          <span className="font-mono text-[9px] text-[#888888]/50 mt-1 uppercase tracking-widest">Click to Zoom</span>
                        </>
                      )}
                    </div>
                  );

                  const textBlock = (
                    <div className="flex flex-col justify-center items-start text-left">
                      <span className="font-sans text-[10px] text-[#FF5A1F] font-bold tracking-widest uppercase mb-2 block">
                        {showcase.label}
                      </span>
                      <h4 className="font-display font-bold text-xl md:text-2xl text-[#1B2450] uppercase tracking-wide mb-4">
                        {showcase.title}
                      </h4>
                      <p className="text-[#555555] font-sans font-light text-sm md:text-base leading-relaxed">
                        {showcase.description}
                      </p>
                    </div>
                  );

                  return (
                    <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                      {isLeft ? (
                        <>
                          {textBlock}
                          {imagePlaceholderBlock}
                        </>
                      ) : (
                        <>
                          {imagePlaceholderBlock}
                          {textBlock}
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        {/* Ready to Start CTA */}
        <WorkCTA />

        {/* =================================================
            FULLSCREEN LIGHTBOX MODAL
            ================================================= */}
        <AnimatePresence>
          {lightboxIndex !== -1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-[999] flex flex-col items-center justify-center p-6 select-none cursor-pointer"
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

              {/* Modal Zoom Canvas Box */}
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="relative w-full max-w-4xl aspect-[16/9] rounded-2xl overflow-hidden bg-black/40 border border-white/10 shadow-2xl flex items-center justify-center p-12"
                onClick={e => e.stopPropagation()}
              >
                {currentShowcases[lightboxIndex].imageUrl ? (
                  <img
                    src={currentShowcases[lightboxIndex].imageUrl}
                    alt={currentShowcases[lightboxIndex].title}
                    className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-500 cursor-zoom-in"
                  />
                ) : (
                  <div className="text-center text-white flex flex-col items-center justify-center select-none">
                    <ImageIcon className="w-16 h-16 text-white/20 mb-4" />
                    <h4 className="font-display font-bold text-xl uppercase tracking-wider text-white mb-2">
                      {currentShowcases[lightboxIndex].title}
                    </h4>
                    <span className="font-sans text-sm text-white/50">Project Image will be added later</span>
                  </div>
                )}
              </motion.div>

              {/* Bottom metadata */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white">
                <h4 className="font-display font-semibold text-sm uppercase tracking-wider">
                  {currentShowcases[lightboxIndex].title}
                </h4>
                <span className="font-sans text-[10px] text-white/50 tracking-widest mt-1 block">
                  {lightboxIndex + 1} / {currentShowcases.length}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // ----------------------------------------------------
  // ORIGINAL FALLBACK PROJECT DETAIL PAGE
  // ----------------------------------------------------
  const project = projectId ? PORTFOLIO_PROJECTS[projectId] : null;

  if (!project) {
    return (
      <div className="min-h-[70vh] bg-white flex flex-col items-center justify-center py-20 px-6 text-center">
        <Container>
          <h2 className="font-display font-bold text-3xl text-[#1B2450] mb-4">Case Study Not Found</h2>
          <p className="text-[#555555] font-sans text-sm mb-8">The requested project could not be located.</p>
          <Button variant="accent" size="md" href="/work" icon={<ArrowLeft className="w-4 h-4" />}>
            Back to Portfolio
          </Button>
        </Container>
      </div>
    );
  }

  return (
    <div className="relative overflow-x-hidden bg-[#F7F7F8] text-left">
      {/* =================================================
          1. HERO MOCKUP (Dark Theme) - UNCHANGED LAYOUT
          ================================================= */}
      <section className="relative py-28 bg-[#1B2450] bg-gradient-to-b from-[#1B2450] to-[#141B3B] overflow-hidden border-b border-white/5 z-20 min-h-[85vh] flex items-center">
        <div className="noise-overlay opacity-[0.035]" />
        
        {/* Glow backdrop */}
        <div className="absolute top-[30%] right-[-10%] w-[450px] h-[450px] bg-[#FF5A1F]/5 rounded-full blur-[110px] pointer-events-none" />

        <Container className="relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col items-start">
              {/* Back to Work link */}
              <Link
                to="/work"
                className="inline-flex items-center gap-2 text-white/55 hover:text-[#FF5A1F] font-sans text-xs uppercase tracking-wider mb-8 transition-colors duration-300 group"
              >
                <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-0.5 transition-transform" />
                Back to Portfolio
              </Link>

              <div className="inline-block px-2.5 py-0.5 rounded bg-[#FF5A1F]/15 border border-[#FF5A1F]/25 text-[#FF5A1F] text-[9px] font-sans font-bold tracking-widest uppercase mb-4">
                Case Study
              </div>

              <h1 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-[0.015em] text-white leading-tight mb-6">
                {project.name}
              </h1>

              <p className="text-white/70 font-sans font-light text-sm leading-relaxed mb-8 max-w-md">
                {project.description}
              </p>

              {/* Quick specs */}
              <div className="grid grid-cols-2 gap-4 w-full bg-white/[0.02] border border-white/5 p-5 rounded-xl">
                <div>
                  <span className="font-display font-semibold text-[8px] text-[#FF5A1F] uppercase tracking-widest block mb-1">Client</span>
                  <span className="font-sans font-bold text-xs text-white">{project.client}</span>
                </div>
                <div>
                  <span className="font-display font-semibold text-[8px] text-[#FF5A1F] uppercase tracking-widest block mb-1">Industry</span>
                  <span className="font-sans font-bold text-xs text-white">{project.industry}</span>
                </div>
              </div>
            </div>

            {/* Right Graphic Mockup */}
            <div className="lg:col-span-7 flex justify-center relative w-full">
              <div className="w-full max-w-[540px] aspect-[16/10] rounded-2xl bg-[#F7F7F8]/5 border border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.5)] flex items-center justify-center p-6 overflow-hidden">
                {project.heroImageUrl ? (
                  <img
                    src={project.heroImageUrl}
                    alt={`${project.name} Hero`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  project.mockupSvg
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =================================================
          2. LOGO DESIGN (Emblem Focus) - REMOVED "THE MARK"
          ================================================= */}
      <section className="relative py-24 bg-white border-b border-[#1B2450]/6 z-20">
        <div className="noise-overlay opacity-[0.01]" />
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-wider text-[#1B2450] mb-12">
              Logo Design Construction
            </h2>

            <div className="relative p-12 rounded-premium-lg border border-[#1B2450]/6 bg-[#F8FAFC] shadow-premium-sm inline-flex items-center justify-center min-w-[280px] max-w-md mx-auto">
              <div className="relative z-10 flex items-center justify-center">
                {project.logoUrl ? (
                  <img
                    src={project.logoUrl}
                    alt={`${project.name} Logo`}
                    className="max-h-48 w-auto object-contain"
                  />
                ) : (
                  project.logoDesignSvg
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =================================================
          3. COLOR PALETTE - UNCHANGED
          ================================================= */}
      <section className="relative py-24 bg-[#F7F7F8] border-b border-[#1B2450]/6 z-20">
        <div className="noise-overlay opacity-[0.02]" />
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="font-sans text-[10px] uppercase tracking-widest text-[#FF5A1F] font-bold mb-2 block">
                02 / PALETTE
              </span>
              <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-wider text-[#1B2450]">
                Brand Colors
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {project.colors.map((color, idx) => (
                <div
                  key={idx}
                  className="group p-5 rounded-premium-lg bg-white border border-[#1B2450]/6 hover:border-[#FF5A1F] hover:shadow-premium-md transition-all duration-300 text-left relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-8 h-8 rounded-bl-lg opacity-10" style={{ backgroundColor: color.hex }} />
                  <div
                    className="w-full aspect-square rounded-lg mb-4 shadow-inner"
                    style={{ backgroundColor: color.hex }}
                  />
                  <h4 className="font-display font-bold text-sm text-[#1B2450] uppercase tracking-wide">
                    {color.name}
                  </h4>
                  <span className="font-mono text-xs text-[#FF5A1F] font-semibold mt-1 block">
                    {color.hex}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =================================================
          4. TYPOGRAPHY - UNCHANGED
          ================================================= */}
      <section className="relative py-24 bg-white border-b border-[#1B2450]/6 z-20">
        <div className="noise-overlay opacity-[0.01]" />
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="font-sans text-[10px] uppercase tracking-widest text-[#FF5A1F] font-bold mb-2 block">
                03 / SYSTEM
              </span>
              <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-wider text-[#1B2450]">
                Typography System
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.typography.map((typo, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-premium-lg border border-[#1B2450]/6 bg-[#F8FAFC] text-left"
                >
                  <span className="text-[9px] font-sans font-bold tracking-widest text-[#888888] uppercase block mb-1">
                    {typo.label}
                  </span>
                  <h4 className="font-display font-bold text-2xl text-[#1B2450] mb-4">
                    {typo.fontName}
                  </h4>
                  <div className="font-mono text-xs text-[#FF5A1F] space-y-1">
                    <div>Weight: {typo.weight}</div>
                    <div>Style: {typo.style}</div>
                  </div>
                  
                  {/* Alphabet preview */}
                  <div className="border-t border-[#1B2450]/5 pt-4 mt-4 text-[#1B2450]/60 text-sm font-sans tracking-wide">
                    A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br />
                    a b c d e f g h i j k l m n o p q r s t u v w x y z<br />
                    1 2 3 4 5 6 7 8 9 0
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =================================================
          5. MOCKUP GALLERY (IMMEDIATELY AFTER TYPOGRAPHY)
          ================================================= */}
      {project.mockupUrls && project.mockupUrls.length > 0 && (
        <section className="relative py-24 bg-[#F7F7F8] border-b border-[#1B2450]/6 z-20">
          <div className="noise-overlay opacity-[0.02]" />
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="font-sans text-[10px] uppercase tracking-widest text-[#FF5A1F] font-bold mb-2 block">
                  04 / GALLERY
                </span>
                <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-wider text-[#1B2450]">
                  Mockup Gallery
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {project.mockupUrls.map((mockupUrl, idx) => (
                  <div
                    key={idx}
                    onClick={() => setLightboxIndex(idx)}
                    className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#1B2450]/6 hover:border-[#FF5A1F] bg-white shadow-premium-md hover:shadow-[0_20px_50px_rgba(255,90,31,0.18)] hover:-translate-y-1 transition-all duration-500"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-[#F7F7F8] flex items-center justify-center">
                      <img
                        src={mockupUrl}
                        alt={`${project.name} Mockup ${idx + 1}`}
                        className="w-full h-full object-cover transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Reusable Orange Inquiry Section */}
      <WorkCTA />

      {/* =================================================
          UNIFIED VISUAL LIGHTBOX MODAL
          ================================================= */}
      <AnimatePresence>
        {project.mockupUrls && lightboxIndex !== -1 && (
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
              onClick={e => handlePrev(e)}
              className="absolute left-6 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-colors duration-300 border border-white/10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={e => handleNext(e)}
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
              className="relative w-full max-w-4xl aspect-[16/10] rounded-2xl overflow-hidden bg-black/10 border border-white/10 shadow-2xl flex items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={project.mockupUrls[lightboxIndex]}
                alt={`${project.name} Mockup ${lightboxIndex + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>

            {/* Bottom Title Bar */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white">
              <h4 className="font-display font-semibold text-sm uppercase tracking-wider">
                {project.name} - Mockup {lightboxIndex + 1}
              </h4>
              <span className="font-sans text-[10px] text-white/50 tracking-widest mt-1 block">
                {lightboxIndex + 1} / {project.mockupUrls.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WorkProject;
