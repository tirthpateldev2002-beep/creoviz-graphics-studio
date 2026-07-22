import React, { useRef, useState, useCallback } from 'react';
import { motion, useInView, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import {
  ArrowRight,
  Palette,
  Layers,
  TrendingUp,
  Briefcase,
  CheckCircle,
  FileCheck,
  Laptop
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { CTA } from '../components/sections/CTA';

// ----------------------------------------------------
// Custom Reusable Package Card Component (with 3D-like hover reactions)
// ----------------------------------------------------
interface PackageData {
  title: string;
  description?: string;
  badge?: string;
  icon: React.ReactElement;
  includes: string[];
}

const PackageCard: React.FC<{ pkg: PackageData; idx: number }> = ({ pkg, idx }) => {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-60px' });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) - 0.5; // -0.5 to 0.5
    const y = ((e.clientY - rect.top) / rect.height) - 0.5; // -0.5 to 0.5
    const maxTilt = 4; // degrees
    setTilt({ rotateX: -y * maxTilt, rotateY: x * maxTilt });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0 });
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
      style={{
        transform: `perspective(800px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative h-full flex flex-col justify-between p-8 md:p-10 rounded-premium-lg bg-white/75 backdrop-blur-xl border border-[#1B2450]/6 hover:border-[#FF5A1F] hover:shadow-[0_24px_55px_rgba(255,90,31,0.12)] hover:bg-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer"
      data-cursor="QUOTE"
    >
      <div>
        {/* Card Header (Icon & Title) */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex flex-col">
            {pkg.badge && (
              <span className="text-[9px] font-sans font-bold tracking-widest text-[#FF5A1F] uppercase mb-1">
                {pkg.badge}
              </span>
            )}
            <h3 className="font-display font-bold text-xl uppercase tracking-wider text-[#1B2450] group-hover:text-[#FF5A1F] transition-colors duration-300">
              {pkg.title}
            </h3>
          </div>
          <div className="w-12 h-12 rounded-xl bg-[#FF5A1F]/5 border border-[#FF5A1F]/10 flex items-center justify-center text-[#FF5A1F] transition-all duration-500 group-hover:rotate-[15deg] group-hover:bg-[#FF5A1F]/15">
            {React.cloneElement(pkg.icon, {
              className: 'w-5 h-5 transition-transform duration-500 group-hover:scale-110'
            } as any)}
          </div>
        </div>

        {/* Optional Description */}
        {pkg.description && (
          <p className="text-[#555555] font-sans font-light text-xs md:text-sm leading-relaxed mb-8 border-b border-[#1B2450]/5 pb-6">
            {pkg.description}
          </p>
        )}

        {/* List of items */}
        <div className="flex flex-col gap-3 mb-10">
          {pkg.includes.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle className="w-3.5 h-3.5 text-[#FF5A1F] shrink-0" />
              <span className="font-sans font-medium text-xs text-[#555555]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Button link */}
      <Link
        to={`/contact?package=${encodeURIComponent(pkg.title)}`}
        className="mt-auto group/btn inline-flex items-center justify-center gap-2.5 w-full py-4 rounded-full border border-[#1B2450]/15 hover:border-[#FF5A1F] hover:bg-[#FF5A1F] text-[#1B2450] hover:text-white font-sans font-bold text-xs uppercase tracking-widest transition-all duration-500 shadow-premium-sm hover:shadow-[0_8px_25px_rgba(255,90,31,0.2)]"
      >
        <span>Request Quote</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover/btn:translate-x-1.5" />
      </Link>
    </motion.div>
  );
};

// ----------------------------------------------------
// Section 4 Website Featured Card Drawing Artwork
// ----------------------------------------------------
const WebsiteMockupArtwork = () => {
  return (
    <div className="relative w-full aspect-[14/10] max-w-[450px] mx-auto flex items-center justify-center pointer-events-none select-none overflow-hidden rounded-xl border border-glass-border/40 bg-white shadow-premium-md">
      {/* Decorative inner browser layout */}
      <div className="absolute inset-0 p-4 flex flex-col gap-3">
        {/* Browser Top header */}
        <div className="flex items-center justify-between pb-3 border-b border-glass-border/30">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <div className="w-1/2 h-4 rounded bg-[#F7F7F8] border border-glass-border/20 flex items-center justify-center font-mono text-[7px] text-primary/30">
            CREOVIZ.STUDIO
          </div>
          <div className="w-3 h-3 rounded bg-accent/10" />
        </div>

        {/* Mock Content */}
        <div className="grid grid-cols-12 gap-3 h-full">
          {/* Left menu */}
          <div className="col-span-3 border-r border-glass-border/30 pr-2 flex flex-col gap-2 pt-1">
            <div className="w-full h-2 rounded bg-accent/20" />
            <div className="w-3/4 h-1.5 rounded bg-primary/10" />
            <div className="w-5/6 h-1.5 rounded bg-primary/10" />
            <div className="w-2/3 h-1.5 rounded bg-primary/10" />
          </div>
          {/* Right workspace drawing layout */}
          <div className="col-span-9 flex flex-col gap-2.5 pt-1 relative">
            {/* Fine vector curves overlay representing UI grids */}
            <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 100 80">
              <path d="M 10 40 Q 40 10, 80 40" stroke="#FF5A1F" strokeWidth="0.75" fill="none" />
              <circle cx="40" cy="25" r="1.5" fill="#FF5A1F" />
              <line x1="10" y1="40" x2="40" y2="25" stroke="#FF5A1F" strokeWidth="0.3" strokeDasharray="1 1" />
              <line x1="80" y1="40" x2="40" y2="25" stroke="#FF5A1F" strokeWidth="0.3" strokeDasharray="1 1" />
            </svg>

            <div className="w-1/2 h-3.5 rounded bg-primary" />
            <div className="w-full h-10 rounded bg-[#F7F7F8] border border-glass-border/20 p-2 flex justify-between items-center">
              <div className="flex flex-col gap-1 w-1/2">
                <div className="w-full h-1.5 rounded bg-primary/10" />
                <div className="w-2/3 h-1 rounded bg-primary/10" />
              </div>
              <div className="w-6 h-6 rounded-lg bg-accent flex items-center justify-center">
                <Laptop className="w-3 h-3 text-white" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-auto pb-4">
              <div className="h-5 rounded border border-glass-border bg-[#F7F7F8] flex items-center justify-center font-display font-semibold text-[5px] tracking-wide text-primary">
                PREMIUM LAYOUT
              </div>
              <div className="h-5 rounded border border-[#FF5A1F]/30 bg-[#FF5A1F]/5 flex items-center justify-center font-display font-semibold text-[5px] tracking-wide text-accent">
                MOBILE COMPATIBLE
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// Section 5 Hero — Premium Packages Illustration
// ----------------------------------------------------
interface PackagesHeroVisualProps {
  mouseX: any;
  mouseY: any;
}

const PackagesHeroVisual: React.FC<PackagesHeroVisualProps> = ({ mouseX, mouseY }) => {
  const springConfig = { damping: 55, stiffness: 140, mass: 0.7 };
  return (
    <div className="relative w-full max-w-[480px] aspect-square mx-auto flex items-center justify-center pointer-events-auto">
      {/* Soft orange ambient radial glow spot */}
      <div className="absolute w-[300px] h-[300px] bg-[#FF5A1F]/10 rounded-full blur-[110px] pointer-events-none" />

      {/* Orbiting circular strokes in the background */}
      <motion.div
        style={{
          x: useTransform(mouseX, (v: number) => v * 0.4),
          y: useTransform(mouseY, (v: number) => v * 0.4),
          rotate: 20
        }}
        className="absolute w-[350px] h-[350px] rounded-full border border-white/5 flex items-center justify-center"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#FF5A1F] rounded-full shadow-[0_0_10px_#FF5A1F]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/30 rounded-full" />
      </motion.div>

      <motion.div
        style={{
          x: useTransform(mouseX, (v: number) => -v * 0.6),
          y: useTransform(mouseY, (v: number) => -v * 0.6),
          rotate: -40
        }}
        className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-white/10 flex items-center justify-center"
      >
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#FF5A1F] rounded-full opacity-50" />
      </motion.div>

      {/* Main Core Showcase Panel: A stylized stack of service folders/mockups */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 6.5, ease: "easeInOut", repeat: Infinity }}
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
          
          <path d="M 20 22 C 35 5, 65 5, 80 22" stroke="#FF5A1F" strokeWidth="1" opacity="0.6" />
        </svg>

        {/* Studio watermark tag */}
        <span className="font-mono text-[8px] text-white/50 relative z-10 self-center tracking-widest uppercase">
          CREATIVE RETAINER.V1
        </span>
      </motion.div>

      {/* Floating Card 1: Branding Pack (Top Left) */}
      <motion.div
        style={{
          x: useSpring(useTransform(mouseX, (v: number) => v * 1.3), springConfig),
          y: useSpring(useTransform(mouseY, (v: number) => v * 1.3), springConfig)
        }}
        animate={{ y: [12, -12, 12] }}
        transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
        className="absolute -top-[5%] -left-[3%] p-3.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl shadow-lg z-20 flex flex-col gap-2 pointer-events-none min-w-[140px] text-left"
      >
        <div className="flex justify-between items-center">
          <span className="font-mono text-[7px] text-[#FF5A1F] font-bold tracking-widest uppercase">BRAND PACK</span>
          <Palette className="w-3 h-3 text-[#FF5A1F]" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-display font-bold text-[10px] text-white tracking-wide uppercase">IDENTITY SET</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-[#1B2450] border border-white/20" />
            <div className="w-3 h-3 rounded-full bg-[#FF5A1F] border border-white/20" />
            <div className="w-3 h-3 rounded-full bg-white border border-white/20" />
          </div>
        </div>
      </motion.div>

      {/* Floating Card 2: Website Layout (Right Side) */}
      <motion.div
        style={{
          x: useSpring(useTransform(mouseX, (v: number) => -v * 1.2), springConfig),
          y: useSpring(useTransform(mouseY, (v: number) => -v * 1.2), springConfig)
        }}
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, delay: 0.5 }}
        className="absolute top-[25%] -right-[8%] p-3.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl shadow-lg z-20 flex flex-col gap-2 pointer-events-none min-w-[155px] text-left"
      >
        <div className="flex justify-between items-center">
          <span className="font-mono text-[7px] text-white/40 tracking-widest uppercase">DIGITAL PLATFORM</span>
          <Laptop className="w-3 h-3 text-white/60" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-display font-bold text-[10px] text-white tracking-wide uppercase">WEB PORTFOLIO</span>
          <div className="w-full h-1 bg-white/10 rounded-full" />
          <div className="w-2/3 h-1 bg-white/10 rounded-full" />
        </div>
      </motion.div>

      {/* Floating Card 3: Social & Marketing Creatives (Bottom Left) */}
      <motion.div
        style={{
          x: useSpring(useTransform(mouseX, (v: number) => v * 0.9), springConfig),
          y: useSpring(useTransform(mouseY, (v: number) => v * 0.9), springConfig)
        }}
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, delay: 0.2 }}
        className="absolute -bottom-[5%] left-[2%] p-3.5 bg-[#141B3B]/80 border border-white/10 backdrop-blur-md rounded-xl shadow-lg z-20 flex flex-col gap-2 pointer-events-none min-w-[145px] text-left"
      >
        <div className="flex justify-between items-center">
          <span className="font-mono text-[7px] text-[#FF5A1F] font-bold tracking-widest uppercase">SOCIAL RET</span>
          <Layers className="w-3 h-3 text-[#FF5A1F]" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-display font-bold text-[9px] text-white tracking-wide uppercase">CREATIVE FEED</span>
          <span className="font-sans text-[7px] text-white/50">6x Posts &amp; Templates</span>
        </div>
      </motion.div>
    </div>
  );
};

// ----------------------------------------------------
// Main Component
// ----------------------------------------------------
export const Packages: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse Coordinates for Hero
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 55, stiffness: 140, mass: 0.7 };
  const parallaxX = useSpring(mouseX, springConfig);
  const parallaxY = useSpring(mouseY, springConfig);

  const handleMouseMoveHero = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xNormalized = (e.clientX - rect.left) / rect.width - 0.5;
    const yNormalized = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xNormalized * 35); // max 35px translation
    mouseY.set(yNormalized * 35);
  };

  return (
    <div className="relative overflow-x-hidden bg-white">
      <SEO
        title="Premium Brand Design & Identity Packages | Creoviz"
        description="Find the perfect branding, packaging, or digital design package for your business. View transparent pricing and inclusions for all our services."
        path="/packages"
      />
      {/* =================================================
          SECTION 1: HERO (Dark Theme)
          ================================================= */}
      <section
        ref={containerRef}
        onMouseMove={handleMouseMoveHero}
        className="relative py-36 bg-[#1B2450] bg-gradient-to-b from-[#1B2450] to-[#141B3B] overflow-hidden border-b border-white/5 z-20 flex items-center min-h-[95vh]"
      >
        {/* Noise Grain overlay */}
        <div className="noise-overlay opacity-[0.035]" />

        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-1">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="packages-hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#packages-hero-grid)" className="text-white" />
          </svg>
        </div>

        {/* Ambient radial glow spot */}
        <div className="absolute w-[400px] h-[400px] bg-[#FF5A1F]/8 rounded-full blur-[130px] top-[20%] left-[10%] animate-pulse pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-sans text-[10px] uppercase tracking-widest text-[#FF5A1F] font-bold mb-3 block"
              >
                OUR PACKAGES
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, filter: 'blur(8px)', y: 20 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl uppercase tracking-[0.015em] text-white leading-[1.1] mb-6"
              >
                Creative Packages Designed<br />For Every Business<span className="text-[#FF5A1F]">.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white/70 font-sans font-light text-base md:text-lg leading-relaxed max-w-xl mb-10"
              >
                Choose the creative solution that best fits your business goals. Every package is designed to help your brand grow with premium design, strategy and consistency.
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
                    document.getElementById('branding-design-packages')?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                  className="w-full sm:w-auto text-center justify-center"
                >
                  Request a Free Quote
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  href="/contact"
                  className="w-full sm:w-auto border-white/20 text-white hover:border-white hover:bg-white/5 text-center justify-center"
                >
                  Contact Us
                </Button>
              </motion.div>
            </div>

            {/* Right Interactive Artwork */}
            <div className="lg:col-span-5 flex justify-center">
              <PackagesHeroVisual mouseX={parallaxX} mouseY={parallaxY} />
            </div>
          </div>
        </Container>
      </section>

      {/* =================================================
          SECTION 2: BRANDING & DESIGN (Light Gray Theme)
          ================================================= */}
      <section
        id="branding-design-packages"
        className="relative py-32 bg-[#F7F7F8] border-b border-[#1B2450]/6 overflow-hidden z-20"
      >
        <div className="noise-overlay opacity-[0.02]" />

        <Container>
          {/* Section Header */}
          <div className="max-w-3xl mb-20">
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#FF5A1F] font-bold mb-2 block">
              VISUAL IDENTITY &amp; MEDIA
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl uppercase tracking-[0.015em] text-[#1B2450]">
              Branding &amp; Design
            </h2>
            <div className="w-12 h-1 bg-[#FF5A1F] mt-4 rounded-full" />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <PackageCard
              idx={0}
              pkg={{
                title: 'Brand Identity',
                badge: 'ESSENTIAL FOUNDATION',
                description: 'Perfect for businesses building a strong visual identity.',
                icon: <Palette />,
                includes: [
                  'Custom Logo Design',
                  'Typography System',
                  'Color Palette',
                  'Business Card Design',
                  'Letterhead Design',
                  'Envelope Design',
                  'Basic Brand Guidelines'
                ]
              }}
            />
            <PackageCard
              idx={1}
              pkg={{
                title: 'Creative Content',
                badge: 'ONGOING RETAINER',
                description: 'Perfect for businesses needing consistent creative support.',
                icon: <Layers />,
                includes: [
                  'Monthly Graphic Design',
                  'Social Media Posts',
                  'Carousel Posts',
                  'Story Designs',
                  'WhatsApp Status Creatives',
                  'Festival Creatives',
                  'Promotional Creatives',
                  'Basic Reel / Video Edits',
                  'Thumbnail Design'
                ]
              }}
            />
          </div>
        </Container>
      </section>

      {/* =================================================
          SECTION 3: BUSINESS GROWTH (Light Theme)
          ================================================= */}
      <section
        className="relative py-32 bg-white border-b border-[#1B2450]/6 overflow-hidden z-20"
      >
        <div className="noise-overlay opacity-[0.015]" />

        <Container>
          {/* Section Header */}
          <div className="max-w-3xl mb-20">
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#FF5A1F] font-bold mb-2 block">
              MARKETING &amp; COLLATERALS
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl uppercase tracking-[0.015em] text-[#1B2450]">
              Business Growth
            </h2>
            <div className="w-12 h-1 bg-[#FF5A1F] mt-4 rounded-full" />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <PackageCard
              idx={0}
              pkg={{
                title: 'LinkedIn Branding',
                badge: 'B2B SPECIALIZED',
                description: 'Build authority, visual credibility, and corporate connections on the largest professional network.',
                icon: <TrendingUp />,
                includes: [
                  'LinkedIn Banner Design',
                  'Company Page Branding',
                  'Personal Branding Posts',
                  'Corporate Carousel Design',
                  'Professional Announcement Posts',
                  'Hiring Creatives',
                  'B2B Marketing Creatives'
                ]
              }}
            />
            <PackageCard
              idx={1}
              pkg={{
                title: 'Business Essentials',
                badge: 'SALES ENABLEMENT',
                description: 'Empower your sales and pitch interactions with clean, highly structured materials.',
                icon: <Briefcase />,
                includes: [
                  'Company Profile Design',
                  'Brochure Design',
                  'Presentation (PPT) Design',
                  'Email Signature',
                  'Digital Business Card',
                  'Proposal Design',
                  'PDF Catalogue Design'
                ]
              }}
            />
          </div>
        </Container>
      </section>

      {/* =================================================
          SECTION 4: WEBSITE SOLUTIONS (Light Gray Theme)
          ================================================= */}
      <section
        className="relative py-32 bg-[#F7F7F8] border-b border-[#1B2450]/6 overflow-hidden z-20"
      >
        <div className="noise-overlay opacity-[0.02]" />

        <Container>
          {/* Section Header */}
          <div className="max-w-3xl mb-20">
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#FF5A1F] font-bold mb-2 block">
              DIGITAL DEVELOPMENT
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl uppercase tracking-[0.015em] text-[#1B2450]">
              Website Solutions
            </h2>
          </div>

          {/* Full-width Featured Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 md:p-12 rounded-premium-lg bg-white border border-[#1B2450]/6 hover:border-[#FF5A1F] hover:shadow-[0_24px_55px_rgba(255,90,31,0.12)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer"
            data-cursor="WEBSITE"
          >
            {/* Info column */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full">
              <div>
                <span className="inline-block px-2.5 py-1 rounded bg-[#FF5A1F]/10 border border-[#FF5A1F]/20 text-[#FF5A1F] text-[9px] font-sans font-bold tracking-widest uppercase mb-4">
                  HIGH PERFORMANCE FRONTENDS
                </span>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-[#1B2450] uppercase tracking-wider mb-4 group-hover:text-[#FF5A1F] transition-colors duration-300">
                  Website Design
                </h3>
                <p className="text-[#555555] font-sans font-light text-sm md:text-base leading-relaxed mb-8">
                  Modern websites designed to represent your business professionally and deliver a seamless user experience.
                </p>

                {/* Checklist grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {[
                    'Business Website Design',
                    'Landing Page Design',
                    'UI Design',
                    'Responsive Layout Design',
                    'Modern User Interface',
                    'Mobile-Friendly Design'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <FileCheck className="w-4 h-4 text-[#FF5A1F]" />
                      <span className="font-sans font-semibold text-xs text-[#555555]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/contact?package=Website+Design"
                className="group/btn inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full border border-[#1B2450]/15 hover:border-[#FF5A1F] hover:bg-[#FF5A1F] text-[#1B2450] hover:text-white font-sans font-bold text-xs uppercase tracking-widest transition-all duration-500 shadow-premium-sm hover:shadow-[0_8px_25px_rgba(255,90,31,0.2)] max-w-xs"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover/btn:translate-x-1.5" />
              </Link>
            </div>

            {/* Graphic column */}
            <div className="lg:col-span-5 flex justify-center">
              <WebsiteMockupArtwork />
            </div>
          </motion.div>
        </Container>
      </section>

      <CTA
        badge="READY TO START?"
        heading={
          <>
            Not Sure Which Package Is<br />Right For Your Business?
          </>
        }
        description="Every business is unique. Tell us about your goals and requirements, and we'll recommend the right creative package with a custom quote tailored specifically for your business."
        primaryButtonText="Request a Free Quote"
        primaryButtonHref="/contact?package=Custom+Quote"
        secondaryButtonText="Schedule Consultation"
        secondaryButtonHref="https://wa.me/919409073599?text=Hi%20Creoviz%20Studio,%20I'd%20like%20to%20schedule%20a%20free%20consultation."
        smallText="Every package is customized to match your business goals and requirements."
      />
    </div>
  );
};

export default Packages;
