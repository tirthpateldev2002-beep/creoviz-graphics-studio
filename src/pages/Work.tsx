import React, { useRef } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { ArrowRight, Laptop, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { WorkCTA } from '../components/sections/WorkCTA';
import { SEO } from '../components/common/SEO';
import { ResponsiveImage } from '../components/common/ResponsiveImage';

// ----------------------------------------------------
// Section 1 Hero — Re-using the exact original interactive illustration
// ----------------------------------------------------
interface WorkHeroVisualProps {
  mouseX: any;
  mouseY: any;
  isMobile: boolean;
}

const WorkHeroVisual: React.FC<WorkHeroVisualProps> = ({ mouseX, mouseY, isMobile }) => {
  const springConfig = { damping: 55, stiffness: 140, mass: 0.7 };
  const tx1 = useTransform(mouseX, (v: number) => v * 0.4);
  const ty1 = useTransform(mouseY, (v: number) => v * 0.4);
  const tx2 = useTransform(mouseX, (v: number) => -v * 0.6);
  const ty2 = useTransform(mouseY, (v: number) => -v * 0.6);
  const sx1 = useSpring(useTransform(mouseX, (v: number) => v * 1.3), springConfig);
  const sy1 = useSpring(useTransform(mouseY, (v: number) => v * 1.3), springConfig);
  const sx2 = useSpring(useTransform(mouseX, (v: number) => -v * 1.2), springConfig);
  const sy2 = useSpring(useTransform(mouseY, (v: number) => -v * 1.2), springConfig);

  return (
    <div className="relative w-full max-w-[480px] aspect-square mx-auto flex items-center justify-center pointer-events-auto">
      {/* Soft orange ambient radial glow spot */}
      <div className="absolute w-[300px] h-[300px] bg-[#FF5A1F]/10 rounded-full blur-[110px] pointer-events-none" />

      {/* Orbiting circular strokes in the background */}
      <motion.div
        style={{
          x: isMobile ? 0 : tx1,
          y: isMobile ? 0 : ty1,
          rotate: 20
        }}
        className="absolute w-[350px] h-[350px] rounded-full border border-white/5 flex items-center justify-center"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#FF5A1F] rounded-full shadow-[0_0_10px_#FF5A1F]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/30 rounded-full" />
      </motion.div>

      <motion.div
        style={{
          x: isMobile ? 0 : tx2,
          y: isMobile ? 0 : ty2,
          rotate: -40
        }}
        className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-white/10 flex items-center justify-center"
      >
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#FF5A1F] rounded-full opacity-50" />
      </motion.div>

      {/* Main Core Showcase Panel: A stylized stack of portfolio canvas */}
      <motion.div
        animate={isMobile ? {} : { y: [-8, 8, -8] }}
        transition={isMobile ? {} : { duration: 6.5, ease: "easeInOut", repeat: Infinity }}
        className="absolute w-56 h-56 bg-[#141B3B]/60 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_24px_48px_rgba(0,0,0,0.4)] p-6 z-10 flex flex-col justify-between"
      >
        {/* Abstract blueprint grid layout inside */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-[0.08] p-3">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-white" />
          ))}
        </div>
        
        {/* Mini tabs */}
        <div className="flex gap-2 relative z-10">
          <div className="w-10 h-2.5 rounded-full bg-[#FF5A1F]/30" />
          <div className="w-6 h-2.5 rounded-full bg-white/10" />
          <div className="w-6 h-2.5 rounded-full bg-white/10" />
        </div>

        {/* Abstract service integration mockup */}
        <svg viewBox="0 0 100 60" className="w-full h-24 text-white/20 relative z-10" fill="none">
          <line x1="20" y1="30" x2="80" y2="30" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="20" cy="30" r="8" fill="#141B3B" stroke="#FF5A1F" strokeWidth="1.5" />
          <circle cx="50" cy="30" r="10" fill="#141B3B" stroke="white" strokeWidth="1.5" />
          <circle cx="80" cy="30" r="8" fill="#141B3B" stroke="#FF5A1F" strokeWidth="1.5" />
        </svg>

        {/* Studio watermark tag */}
        <span className="font-mono text-[8px] text-white/50 relative z-10 self-center tracking-widest uppercase">
          CANVAS V.01
        </span>
      </motion.div>

      {/* Floating Card 1: Branding Pack (Top Left) */}
      <motion.div
        style={{
          x: isMobile ? 0 : sx1,
          y: isMobile ? 0 : sy1
        }}
        animate={isMobile ? {} : { y: [12, -12, 12] }}
        transition={isMobile ? {} : { duration: 7, ease: "easeInOut", repeat: Infinity }}
        className="absolute -top-[5%] -left-[3%] p-3.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl shadow-lg z-20 flex items-center gap-2 pointer-events-none min-w-[140px] text-left"
      >
        <div className="w-6 h-6 rounded-lg bg-[#FF5A1F]/20 flex items-center justify-center text-[#FF5A1F]"><Palette className="w-3.5 h-3.5" /></div>
        <div className="flex flex-col">
          <span className="font-mono text-[6px] text-white/40 uppercase tracking-widest">IDENTITY</span>
          <span className="font-display font-bold text-[9px] text-white tracking-wide uppercase">BRAND SYSTEM</span>
        </div>
      </motion.div>

      {/* Floating Card 2: Website Layout (Right Side) */}
      <motion.div
        style={{
          x: isMobile ? 0 : sx2,
          y: isMobile ? 0 : sy2
        }}
        animate={isMobile ? {} : { y: [-15, 15, -15] }}
        transition={isMobile ? {} : { duration: 8, ease: "easeInOut", repeat: Infinity, delay: 0.5 }}
        className="absolute top-[25%] -right-[8%] p-3.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl shadow-lg z-20 flex items-center gap-2 pointer-events-none min-w-[150px] text-left"
      >
        <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center text-white"><Laptop className="w-3.5 h-3.5" /></div>
        <div className="flex flex-col">
          <span className="font-mono text-[6px] text-white/40 uppercase tracking-widest">DIGITAL</span>
          <span className="font-display font-bold text-[9px] text-white tracking-wide uppercase">UI PLATFORM</span>
        </div>
      </motion.div>
    </div>
  );
};

export const Work: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mouse Coordinates for Hero
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 50, stiffness: 120, mass: 0.6 };
  const parallaxX = useSpring(mouseX, springConfig);
  const parallaxY = useSpring(mouseY, springConfig);

  const handleMouseMoveHero = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xNormalized = (e.clientX - rect.left) / rect.width - 0.5;
    const yNormalized = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xNormalized * 50);
    mouseY.set(yNormalized * 50);
  };



  return (
    <div className="relative overflow-x-hidden bg-white text-left">
      <SEO
        title="Our Portfolio & Client Case Studies | Creoviz Graphics Studio"
        description="Browse our premium portfolio showcasing custom branding packages, professional packaging boxes, responsive websites, and elegant digital interfaces."
        path="/work"
      />
      {/* =================================================
          SECTION 1: Hero Section (Dark Theme) - KEEP UNCHANGED
          ================================================= */}
      <section
        ref={containerRef}
        onMouseMove={handleMouseMoveHero}
        className="relative py-36 bg-[#1B2450] bg-gradient-to-b from-[#1B2450] to-[#141B3B] overflow-hidden border-b border-white/5 z-20 flex items-center min-h-[95vh]"
      >
        <div className="noise-overlay opacity-[0.035]" />
        
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-1">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="work-hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#work-hero-grid)" className="text-white" />
          </svg>
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-sans text-[10px] uppercase tracking-widest text-[#FF5A1F] font-bold mb-3 block"
              >
                OUR WORK
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, filter: 'blur(8px)', y: 20 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl uppercase tracking-[0.015em] text-white leading-[1.1] mb-6"
              >
                Designs That Build Brands<br />&amp; Drive Results<span className="text-[#FF5A1F]">.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white/70 font-sans font-light text-base md:text-lg leading-relaxed max-w-xl mb-10"
              >
                Explore a collection of branding, print, packaging and digital design projects crafted for businesses across different industries.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto"
              >
                <Button
                  variant="accent"
                  size="md"
                  onClick={() => {
                    document.getElementById('featured-projects-anchor')?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                  className="w-full sm:w-auto text-center justify-center"
                >
                  View Portfolio
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  href="/contact"
                  className="w-full sm:w-auto border-white/20 text-white hover:border-white hover:bg-white/5 text-center justify-center"
                >
                  Start a Project
                </Button>
              </motion.div>
            </div>

            {/* Right Interactive Artwork */}
            <div className="lg:col-span-5 flex justify-center">
              <WorkHeroVisual mouseX={parallaxX} mouseY={parallaxY} isMobile={isMobile} />
            </div>
          </div>
        </Container>
      </section>

      {/* =================================================
          SECTION 2: Featured Projects (Side by Side)
          ================================================= */}
      <section id="featured-projects-anchor" className="relative py-28 bg-[#F7F7F8] border-b border-[#1B2450]/6 z-20">
        <div className="noise-overlay opacity-[0.02]" />
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1: Deep's Beauty */}
            <Link to="/work/project/deeps-beauty" className="group relative rounded-premium-lg bg-white border border-[#1B2450]/6 p-6 flex flex-col hover:border-[#FF5A1F] hover:shadow-premium-md transition-all duration-500">
              <div className="overflow-hidden rounded-xl border border-[#1B2450]/5 bg-[#F7F7F8] aspect-[16/10] flex items-center justify-center mb-6 relative">
                <ResponsiveImage
                  src="/brand-images/Deeps Beauty Paper Bag.webp"
                  alt="Deep's Beauty Cover"
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <h3 className="font-display font-bold text-2xl text-[#1B2450] uppercase tracking-wide">
                Deep's Beauty
              </h3>
            </Link>

            {/* Card 2: Deep's Skin Clinic */}
            <Link to="/work/project/deeps-skin-clinic" className="group relative rounded-premium-lg bg-white border border-[#1B2450]/6 p-6 flex flex-col hover:border-[#FF5A1F] hover:shadow-premium-md transition-all duration-500">
              <div className="overflow-hidden rounded-xl border border-[#1B2450]/5 bg-[#F7F7F8] aspect-[16/10] flex items-center justify-center mb-6 relative">
                <ResponsiveImage
                  src="/brand-images/Deep's Skin Clinic Logo.webp"
                  alt="Deep's Skin Clinic Cover"
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <h3 className="font-display font-bold text-2xl text-[#1B2450] uppercase tracking-wide">
                Deep's Skin Clinic
              </h3>
            </Link>
          </div>
        </Container>
      </section>

      {/* =================================================
          SECTION 3: Browse Categories Small Intro Text
          ================================================= */}
      <section className="relative py-16 bg-white border-b border-[#1B2450]/6 z-20">
        <div className="noise-overlay opacity-[0.01]" />
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display font-extrabold text-3xl md:text-5xl uppercase tracking-wider text-[#1B2450] mb-4">
              BROWSE CATEGORIES
            </h2>
            <p className="text-[#555555] font-sans font-light text-sm md:text-base leading-relaxed">
              Explore our comprehensive range of creative disciplines across print, packaging, digital and custom branding media.
            </p>
          </div>
        </Container>
      </section>

      {/* =================================================
          SECTION 4: Logo & Branding Works
          ================================================= */}
      <section className="relative py-24 bg-[#F7F7F8] border-b border-[#1B2450]/6 z-20">
        <div className="noise-overlay opacity-[0.02]" />
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#FF5A1F] font-bold mb-2 block">
              01 / IDENTITY
            </span>
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-wider text-[#1B2450]">
              OUR LOGO &amp; BRANDING WORKS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {/* Card 1: Sunelite Pharma */}
            <a
              href="/Sunelite Case Study.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-premium-lg bg-white border border-[#1B2450]/6 hover:border-[#FF5A1F] hover:shadow-premium-md transition-all duration-500 text-left flex flex-col justify-between h-full cursor-pointer"
            >
              <div>
                <div className="aspect-[16/10] bg-[#F7F7F8] border border-[#1B2450]/5 rounded-xl mb-6 overflow-hidden flex items-center justify-center">
                  <ResponsiveImage
                    src="/brand-images/Sunelite Mockup 1.webp"
                    alt="Sunelite Pharma Mockup"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-103"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-display font-bold text-xl text-[#1B2450] uppercase tracking-wide mb-4">
                  Sunelite Pharma
                </h3>
              </div>
              
              <div className="w-full text-center justify-center border border-[#1B2450]/10 rounded-full py-2.5 px-4 font-sans font-bold text-xs uppercase tracking-wider text-[#1B2450] group-hover:border-[#FF5A1F] group-hover:text-[#FF5A1F] transition-all duration-300 flex items-center gap-2 mt-auto">
                View Case Study
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </a>

            {/* Card 2: Maa Shakti Packaging */}
            <a
              href="/Maa Shakti Packaging Case Study.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-premium-lg bg-white border border-[#1B2450]/6 hover:border-[#FF5A1F] hover:shadow-premium-md transition-all duration-500 text-left flex flex-col justify-between h-full cursor-pointer"
            >
              <div>
                <div className="aspect-[16/10] bg-[#F7F7F8] border border-[#1B2450]/5 rounded-xl mb-6 overflow-hidden flex items-center justify-center">
                  <ResponsiveImage
                    src="/brand-images/Maa Shakti Packaging Mockup 1.webp"
                    alt="Maa Shakti Packaging Mockup"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-103"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-display font-bold text-xl text-[#1B2450] uppercase tracking-wide mb-4">
                  Maa Shakti Packaging
                </h3>
              </div>
              
              <div className="w-full text-center justify-center border border-[#1B2450]/10 rounded-full py-2.5 px-4 font-sans font-bold text-xs uppercase tracking-wider text-[#1B2450] group-hover:border-[#FF5A1F] group-hover:text-[#FF5A1F] transition-all duration-300 flex items-center gap-2 mt-auto">
                View Case Study
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </a>
          </div>

          <div className="flex justify-center">
            <Button variant="secondary" size="md" href="/work/logo-branding">
              Explore More Projects
            </Button>
          </div>
        </Container>
      </section>

      {/* =================================================
          SECTION 5: Business Essentials
          ================================================= */}
      <section className="relative py-24 bg-white border-b border-[#1B2450]/6 z-20">
        <div className="noise-overlay opacity-[0.01]" />
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#FF5A1F] font-bold mb-2 block">
              02 / STATIONERY
            </span>
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-wider text-[#1B2450]">
              Business Essentials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1: Business Cards */}
            <Link to="/work/business-cards" className="group p-6 rounded-premium-lg bg-[#F8FAFC] border border-[#1B2450]/6 hover:border-[#FF5A1F] hover:shadow-premium-md transition-all duration-500 text-left block">
              <div className="aspect-[16/10] bg-white border border-[#1B2450]/5 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                <ResponsiveImage
                  src="/brand-images/Creoviz Graphic Studio Business Card.webp"
                  alt="Creoviz Graphic Studio Business Card"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-103"
                  loading="lazy"
                />
              </div>
              <h3 className="font-display font-bold text-xl text-[#1B2450] uppercase tracking-wide">
                Business Cards
              </h3>
            </Link>

            {/* Card 2: Other Essentials */}
            <Link to="/work/business-essentials" className="group p-6 rounded-premium-lg bg-[#F8FAFC] border border-[#1B2450]/6 hover:border-[#FF5A1F] hover:shadow-premium-md transition-all duration-500 text-left block">
              <div className="aspect-[16/10] bg-white border border-[#1B2450]/5 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                <ResponsiveImage
                  src="/brand-images/Creoviz Sticker Mockup.webp"
                  alt="Creoviz Sticker Mockup"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-103"
                  loading="lazy"
                />
              </div>
              <h3 className="font-display font-bold text-xl text-[#1B2450] uppercase tracking-wide">
                Other Essentials
              </h3>
            </Link>
          </div>
        </Container>
      </section>

      {/* =================================================
          SECTION 6: Print & Billboards
          ================================================= */}
      <section className="relative py-24 bg-[#F7F7F8] border-b border-[#1B2450]/6 z-20">
        <div className="noise-overlay opacity-[0.02]" />
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#FF5A1F] font-bold mb-2 block">
              03 / PRINT &amp; BILLBOARDS
            </span>
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-wider text-[#1B2450]">
              Print &amp; Billboards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1: Brochure */}
            <Link to="/work/brochures" className="group p-6 rounded-premium-lg bg-white border border-[#1B2450]/6 hover:border-[#FF5A1F] hover:shadow-premium-md transition-all duration-500 text-left block">
              <div className="aspect-[16/10] bg-[#F7F7F8] border border-[#1B2450]/5 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                <ResponsiveImage
                  src="/brand-images/Brochure_Mockup_4.webp"
                  alt="Brochure Cover"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-103"
                  loading="lazy"
                />
              </div>
              <h3 className="font-display font-bold text-xl text-[#1B2450] uppercase tracking-wide">
                Brochure
              </h3>
            </Link>

            {/* Card 2: Banner */}
            <Link to="/work/banners" className="group p-6 rounded-premium-lg bg-white border border-[#1B2450]/6 hover:border-[#FF5A1F] hover:shadow-premium-md transition-all duration-500 text-left block">
              <div className="aspect-[16/10] bg-[#F7F7F8] border border-[#1B2450]/5 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                <ResponsiveImage
                  src="/brand-images/Car Wash Banner.webp"
                  alt="Banner Cover"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-103"
                  loading="lazy"
                />
              </div>
              <h3 className="font-display font-bold text-xl text-[#1B2450] uppercase tracking-wide">
                Banner
              </h3>
            </Link>
          </div>
        </Container>
      </section>

      {/* =================================================
          Work CTA Section (Full-width Orange Gradient)
          ================================================= */}
      <WorkCTA />
    </div>
  );
};

export default Work;
