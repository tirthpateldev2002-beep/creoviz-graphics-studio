import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';

import logoBrandImg from '../assets/logo-brand-identity.webp';
import graphicDesignImg from '../assets/graphic-design.webp';
import printPackagingImg from '../assets/print-packaging.webp';
import linkedinBrandingImg from '../assets/linkedin-branding.webp';
import businessEssentialsImg from '../assets/business-essentials.webp';
import socialMediaImg from '../assets/social-media-design.webp';
import googleBusinessImg from '../assets/google-business-profile.webp';
import googleAdsImg from '../assets/google-ads.webp';
import metaAdsImg from '../assets/meta-ads.webp';
import websiteDesignImg from '../assets/website-design.webp';
import uiDesignImg from '../assets/ui-design.webp';
import videoEditingImg from '../assets/video-editing.webp';
import {
  Palette,
  ArrowRight,
  ChevronDown,
  MessageSquare,
  Compass,
  CheckCircle,
  FileText,
  Maximize2,
  Sparkles
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { CTA } from '../components/sections/CTA';

// ----------------------------------------------------
// Section 1 Hero — Decorative Creative Workspace Artwork Component
// ----------------------------------------------------
interface HeroArtworkProps {
  mouseX: any;
  mouseY: any;
}

const HeroArtwork: React.FC<HeroArtworkProps> = ({ mouseX, mouseY }) => {
  return (
    <div className="relative w-full max-w-[500px] aspect-square mx-auto flex items-center justify-center pointer-events-none select-none">
      {/* Background radial soft light */}
      <div className="absolute w-[350px] h-[350px] bg-[#FF5A1F]/10 rounded-full blur-[120px] animate-pulse" />

      {/* Outer Orbiting Blueprint Circles */}
      <motion.div
        style={{ x: useTransform(mouseX, (v: number) => v * 0.5), y: useTransform(mouseY, (v: number) => v * 0.5), rotate: 45 }}
        className="absolute w-[360px] h-[360px] rounded-full border border-white/5 flex items-center justify-center"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#FF5A1F] rounded-full shadow-[0_0_10px_#FF5A1F]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white/40 rounded-full" />
      </motion.div>

      <motion.div
        style={{
          x: useTransform(mouseX, (v: number) => -v * 0.6),
          y: useTransform(mouseY, (v: number) => -v * 0.6),
          rotate: -30
        }}
        className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-white/10 flex items-center justify-center"
      >
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#FF5A1F] rounded-full" />
      </motion.div>

      {/* Main Drawing board element representing Design process */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        className="absolute w-64 h-64 bg-[#141B3B]/80 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_24px_48px_rgba(0,0,0,0.4)] p-6 z-10 pointer-events-auto"
      >
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-10 p-4">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-white" />
          ))}
        </div>

        {/* Vector pen drawing paths */}
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#FF5A1F] relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main geometric curve */}
          <motion.path
            d="M 15 50 C 35 15, 65 85, 85 50"
            stroke="url(#hero-vector-grad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          />

          {/* Anchor Points */}
          <circle cx="15" cy="50" r="3.5" fill="#141B3B" stroke="#FF5A1F" strokeWidth="2" />
          <circle cx="85" cy="50" r="3.5" fill="#141B3B" stroke="#FF5A1F" strokeWidth="2" />
          
          {/* Bezier control handles */}
          <circle cx="35" cy="15" r="3" fill="#FF5A1F" />
          <line x1="15" y1="50" x2="35" y2="15" stroke="#FF5A1F" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
          
          <circle cx="65" cy="85" r="3" fill="#FF5A1F" />
          <line x1="85" y1="50" x2="65" y2="85" stroke="#FF5A1F" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />

          <defs>
            <linearGradient id="hero-vector-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF5A1F" />
              <stop offset="100%" stopColor="#1B2450" />
            </linearGradient>
          </defs>
        </svg>

        {/* Mini indicator labels inside the board */}
        <div className="absolute top-3 left-3 bg-[#FF5A1F]/15 px-2 py-0.5 rounded border border-[#FF5A1F]/20 flex items-center gap-1">
          <Sparkles className="w-2.5 h-2.5 text-[#FF5A1F] animate-spin" />
          <span className="font-display font-bold text-[8px] text-[#FF5A1F] tracking-widest uppercase">VECTOR</span>
        </div>

        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 text-white/50 font-mono text-[8px]">
          <span>W: 1080px</span>
          <span className="opacity-30">|</span>
          <span>H: 1080px</span>
        </div>
      </motion.div>

      {/* Floating element 1: Brand Swatches */}
      <motion.div
        style={{
          x: useTransform(mouseX, (v: number) => v * 1.2),
          y: useTransform(mouseY, (v: number) => v * 1.2)
        }}
        animate={{ y: [15, -15, 15] }}
        transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
        className="absolute top-1/4 left-0 p-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl shadow-lg z-20 flex flex-col gap-2 pointer-events-none"
      >
        <span className="font-display font-bold text-[8px] text-white/60 tracking-wider">SWATCHES</span>
        <div className="flex gap-1.5">
          <div className="w-4 h-4 rounded-full bg-[#1B2450] border border-white/20" title="Primary Navy" />
          <div className="w-4 h-4 rounded-full bg-[#FF5A1F] border border-white/20" title="Accent Orange" />
          <div className="w-4 h-4 rounded-full bg-[#FFFFFF] border border-white/20" title="Base Light" />
        </div>
      </motion.div>

      {/* Floating element 2: Layout Guide */}
      <motion.div
        style={{
          x: useTransform(mouseX, (v: number) => -v * 0.9),
          y: useTransform(mouseY, (v: number) => -v * 0.9)
        }}
        animate={{ y: [-12, 12, -12] }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, delay: 0.5 }}
        className="absolute bottom-[10%] right-0 p-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl shadow-lg z-20 flex items-center gap-2 pointer-events-none"
      >
        <Maximize2 className="w-3.5 h-3.5 text-[#FF5A1F]" />
        <div className="flex flex-col">
          <span className="font-display font-bold text-[8px] text-white tracking-widest uppercase">GRID MATCH</span>
          <span className="font-mono text-[7px] text-white/50">ALIGNMENT: OK</span>
        </div>
      </motion.div>
    </div>
  );
};

// ----------------------------------------------------
// Section 2 All Services — Premium Image Card Component
// ----------------------------------------------------
interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  route: string;
  idx: number;
}

const ServiceImageCard: React.FC<ServiceCardProps> = ({ title, description, image, route, idx }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative h-full flex flex-col"
    >
      {/* Soft orange ambient glow BEHIND the card. z-0 */}
      <div 
        className="absolute -inset-1.5 bg-[#FF5A1F]/16 rounded-[34px] blur-[30px] opacity-0 group-hover:opacity-100 group-hover:-translate-y-2.5 transition-all duration-300 pointer-events-none z-0" 
      />

      {/* Main card Link wrapper. z-10, solid white bg, 28px rounded corners, thin border, soft shadow */}
      <Link
        to={route}
        className="relative z-10 flex flex-col h-full bg-white border border-[#1B2450]/8 rounded-[28px] shadow-[0_8px_30px_rgb(27,36,80,0.03)] hover:border-[#FF5A1F] hover:-translate-y-2.5 transition-all duration-300 ease-out overflow-hidden cursor-pointer"
      >
        {/* Large premium image at the top (16:9 ratio) */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F7F7F8]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Content & spacing */}
        <div className="flex flex-col flex-grow p-8">
          {/* Service Title */}
          <h3 className="font-display font-bold text-lg md:text-xl uppercase tracking-wider text-[#1B2450] group-hover:text-[#FF5A1F] transition-colors duration-300 mb-3">
            {title}
          </h3>

          {/* Short Description (Maximum 2 lines) */}
          <p className="text-[#555555] font-sans font-light text-xs md:text-sm leading-relaxed mb-6 line-clamp-2">
            {description}
          </p>

          {/* Explore Service & Minimal Arrow Button */}
          <div className="mt-auto pt-6 border-t border-[#1B2450]/6 flex items-center justify-between text-[11px] font-sans font-bold tracking-widest text-[#1B2450] uppercase group-hover:text-[#FF5A1F] transition-colors duration-300">
            <span>Explore Service</span>
            <div className="w-8 h-8 rounded-full bg-[#1B2450]/5 flex items-center justify-center text-[#1B2450] group-hover:bg-[#FF5A1F]/10 group-hover:text-[#FF5A1F] transition-all duration-300 shrink-0">
              <ArrowRight className="w-3.5 h-3.5 text-current transition-transform duration-300 ease-out group-hover:translate-x-1.2" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

// ----------------------------------------------------
// Main Page Component
// ----------------------------------------------------
export const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const workflowRef = useRef<HTMLDivElement>(null);

  // Mouse Parallax values for Hero Section
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 50, stiffness: 120, mass: 0.6 };
  const parallaxX = useSpring(mouseX, springConfig);
  const parallaxY = useSpring(mouseY, springConfig);

  const handleMouseMoveHero = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const xNormalized = (e.clientX - rect.left) / rect.width - 0.5;
    const yNormalized = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xNormalized * 35); // max 35px translation
    mouseY.set(yNormalized * 35);
  };

  // Scroll Timeline for Workflow Section
  const { scrollYProgress } = useScroll({
    target: workflowRef,
    offset: ['start end', 'end start'],
  });
  
  const workflowProgress = useSpring(useTransform(scrollYProgress, [0.15, 0.65], [0, 1]), {
    stiffness: 100,
    damping: 30,
  });

  // Services list grouped by categories
  const brandingServices = [
    {
      title: 'Logo & Brand Identity',
      description: 'Establish a strong, recognizable market presence with custom logomarks, typography, and cohesive brand styling guidelines.',
      image: logoBrandImg,
      route: '/services/logo-brand-identity'
    },
    {
      title: 'Graphic Design',
      description: 'High-impact visual communication, marketing collaterals, and digital assets designed to captivate your audience.',
      image: graphicDesignImg,
      route: '/services/graphic-design'
    },
    {
      title: 'Print & Packaging Solutions',
      description: 'Make an unforgettable impression on retail shelves with luxury custom boxes, product labels, and custom structural designs.',
      image: printPackagingImg,
      route: '/services/print-packaging'
    }
  ];

  const marketingServices = [
    {
      title: 'LinkedIn Branding',
      description: 'Establish professional authority on LinkedIn with curated banner designs, custom carousel templates, and high-converting visual assets.',
      image: linkedinBrandingImg,
      route: '/services/linkedin-branding'
    },
    {
      title: 'Business Essentials',
      description: 'Equip your team with modern professional accessories, company profiles, brochures, presentations, and premium business cards.',
      image: businessEssentialsImg,
      route: '/services/business-essentials'
    },
    {
      title: 'Social Media Design',
      description: 'Engage your followers and build visual authority with custom social posts, carousel layout templates, and story designs.',
      image: socialMediaImg,
      route: '/services/social-media-design'
    }
  ];

  const digitalServices = [
    {
      title: 'Website Design',
      description: 'High-performance digital products and custom interfaces that align with your business objectives and look stunning on all screen sizes.',
      image: websiteDesignImg,
      route: '/services/website-design'
    },
    {
      title: 'UI Design',
      description: 'Sleek, human-centered UI/UX design maps for websites, mobile applications, and complex dashboard software architectures.',
      image: uiDesignImg,
      route: '/services/ui-design'
    },
    {
      title: 'Video Editing',
      description: 'High-fidelity video editing and production for corporate briefs, event reels, promotional teasers, and invitation clips.',
      image: videoEditingImg,
      route: '/services/video-editing'
    }
  ];

  const growthServices = [
    {
      title: 'Google Business Profile',
      description: 'Improve your local visibility and build trust with a fully optimized Google Business Profile.',
      image: googleBusinessImg,
      route: '/services/google-business-profile'
    },
    {
      title: 'Google Ads',
      description: 'Reach the right audience through strategic Google Ads campaigns that drive measurable business growth.',
      image: googleAdsImg,
      route: '/services/google-ads'
    },
    {
      title: 'Meta Ads',
      description: 'Scale your business with high-converting Facebook and Instagram advertising campaigns.',
      image: metaAdsImg,
      route: '/services/meta-ads'
    }
  ];

  // Workflow steps
  const steps = [
    {
      num: '01',
      title: 'Share Your Requirement',
      desc: 'Submit your creative brief, goals, references, and specifications. We review details to establish the visual scope.',
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      num: '02',
      title: 'Strategy & Planning',
      desc: 'We map target demographic positions, compile mood boards, align type scales, and map styling guides.',
      icon: <Compass className="w-6 h-6" />
    },
    {
      num: '03',
      title: 'Creative Execution',
      desc: 'Our design specialists design custom assets, align design grids, and test configurations across physical shelf mockups and digital UI layouts.',
      icon: <Palette className="w-6 h-6" />
    },
    {
      num: '04',
      title: 'Final Delivery',
      desc: 'Receive master high-fidelity vectors, print-ready specs, style manuals, and source layout parameters ready for immediate use.',
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  // Industries list
  const industries = [
    { name: 'Manufacturing', desc: 'Industrial brochures & identity' },
    { name: 'Retail', desc: 'Bespoke tags & product packages' },
    { name: 'Food & Beverage', desc: 'Premium label, menus & boxes' },
    { name: 'Healthcare', desc: 'Clean layouts & system brochures' },
    { name: 'Real Estate', desc: 'High-end developer sales kits' },
    { name: 'Education', desc: 'Prospectus books & certificates' },
    { name: 'Startups', desc: 'Pitch layouts & brand guidelines' },
    { name: 'Corporate', desc: 'Stationery sheets & business decks' }
  ];

  // Coming Soon list
  const comingSoonList = [
    { title: 'Google Ads', desc: 'Paid search copy & design layouts' },
    { title: 'Meta Ads', desc: 'Social campaign display creatives' },
    { title: 'Google Business Profile', desc: 'Listing optimization & visual maps' }
  ];

  // FAQs list
  const faqs = [
    {
      q: 'How long does a logo design take?',
      a: 'A custom logo and brand mark project typically takes 1 to 2 weeks, allowing for discovery, multiple concept revisions, and meticulous alignment grids.'
    },
    {
      q: 'Do you provide printing services?',
      a: 'We deliver high-fidelity, print-ready files (vector PDFs with bleed and crop marks). While we do not print in-house, we coordinate closely with your chosen printers to select materials, cardstocks, and foil stamps.'
    },
    {
      q: 'Can I order only one design service?',
      a: 'Absolutely. While we build cohesive identity packages, you are welcome to order standalone services such as a single packaging box, landing page, or brochure design.'
    },
    {
      q: 'Do you design websites for businesses?',
      a: 'Yes. We design and build high-conversion, fully responsive business websites, landing pages, and interactive portfolio layouts using modern front-end technologies.'
    },
    {
      q: 'How can I start a project with Creoviz?',
      a: 'Simply click "Start a Project" or navigate to our Contact page. Fill out our creative brief, and our designer will get back to you within 24 hours to schedule a consultation.'
    }
  ];

  return (
    <div className="relative overflow-x-hidden bg-white">
      <SEO
        title="Professional Graphic Design & Growth Services | Creoviz"
        description="Explore our premium design and marketing services, including logo & brand identity, print & packaging solutions, social media design, website design, and UI design."
        path="/services"
      />
      {/* =================================================
          SECTION 1: HERO (Dark Theme)
          ================================================= */}
      <section
        ref={heroRef}
        onMouseMove={handleMouseMoveHero}
        className="relative py-36 bg-[#1B2450] bg-gradient-to-b from-[#1B2450] to-[#141B3B] overflow-hidden border-b border-white/5 z-20 flex items-center min-h-[95vh]"
      >
        {/* Noise Grain overlay */}
        <div className="noise-overlay opacity-[0.035]" />

        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-1">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="services-hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#services-hero-grid)" className="text-white" />
          </svg>
        </div>

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
                OUR SERVICES
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, filter: 'blur(8px)', y: 20 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl uppercase tracking-[0.015em] text-white leading-[1.1] mb-6"
              >
                Creative Solutions<br />Designed to Grow Your Business<span className="text-[#FF5A1F]">.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white/70 font-sans font-light text-base md:text-lg leading-relaxed max-w-xl mb-10"
              >
                From branding and websites to packaging and print, we provide creative solutions that help businesses build a memorable and professional brand presence.
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
                    document.getElementById('services-list-grid')?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                  className="w-full sm:w-auto text-center justify-center"
                >
                  Explore Services
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
              <HeroArtwork mouseX={parallaxX} mouseY={parallaxY} />
            </div>
          </div>
        </Container>
      </section>

      {/* =================================================
          SECTION 2: ALL SERVICES (Light Theme)
          ================================================= */}
      <section
        id="services-list-grid"
        className="relative py-32 bg-[#F7F7F8] border-b border-[#1B2450]/6 overflow-hidden z-20"
      >
        <div className="noise-overlay opacity-[0.02]" />

        {/* Ambient radial glow spot */}
        <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-[#FF5A1F]/5 rounded-full blur-[140px] pointer-events-none" />

        <Container>
          {/* Section Header */}
          <div className="max-w-3xl mb-24">
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#FF5A1F] font-bold mb-2 block">
              CAPABILITIES
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl uppercase tracking-[0.015em] text-[#1B2450]">
              Our Premium Services
            </h2>
            <div className="w-12 h-1 bg-[#FF5A1F] mt-4 rounded-full" />
          </div>

          {/* Category 1: BRANDING & DESIGN */}
          <div className="mb-32">
            <div className="flex items-center gap-4 mb-12 border-b border-[#1B2450]/6 pb-6">
              <span className="font-display font-bold text-2xl md:text-3xl text-[#FF5A1F]">01</span>
              <h3 className="font-display font-bold text-xl md:text-2xl uppercase tracking-widest text-[#1B2450]">
                BRANDING & DESIGN
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {brandingServices.map((service, idx) => (
                <ServiceImageCard
                  key={idx}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  route={service.route}
                  idx={idx}
                />
              ))}
            </div>
          </div>

          {/* Category 2: MARKETING & BUSINESS */}
          <div className="mb-32">
            <div className="flex items-center gap-4 mb-12 border-b border-[#1B2450]/6 pb-6">
              <span className="font-display font-bold text-2xl md:text-3xl text-[#FF5A1F]">02</span>
              <h3 className="font-display font-bold text-xl md:text-2xl uppercase tracking-widest text-[#1B2450]">
                MARKETING & BUSINESS
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {marketingServices.map((service, idx) => (
                <ServiceImageCard
                  key={idx}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  route={service.route}
                  idx={idx}
                />
              ))}
            </div>
          </div>

          {/* Category 3: WEB & DIGITAL */}
          <div className="mb-32">
            <div className="flex items-center gap-4 mb-12 border-b border-[#1B2450]/6 pb-6">
              <span className="font-display font-bold text-2xl md:text-3xl text-[#FF5A1F]">03</span>
              <h3 className="font-display font-bold text-xl md:text-2xl uppercase tracking-widest text-[#1B2450]">
                WEB & DIGITAL
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {digitalServices.map((service, idx) => (
                <ServiceImageCard
                  key={idx}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  route={service.route}
                  idx={idx}
                />
              ))}
            </div>
          </div>

          {/* Category 4: GROWTH SOLUTIONS */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-12 border-b border-[#1B2450]/6 pb-6">
              <span className="font-display font-bold text-2xl md:text-3xl text-[#FF5A1F]">04</span>
              <h3 className="font-display font-bold text-xl md:text-2xl uppercase tracking-widest text-[#1B2450]">
                GROWTH SOLUTIONS
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {growthServices.map((service, idx) => (
                <ServiceImageCard
                  key={idx}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  route={service.route}
                  idx={idx}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =================================================
          SECTION 3: OUR WORKFLOW (Dark Theme)
          ================================================= */}
      <section
        ref={workflowRef}
        className="relative py-32 bg-[#141B3B] bg-gradient-to-b from-[#141B3B] to-[#0C0D14] overflow-hidden z-20 border-b border-white/5"
      >
        <div className="noise-overlay opacity-[0.03]" />

        {/* Ambient glows */}
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#FF5A1F]/6 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-[#FF5A1F]/5 rounded-full blur-[130px] pointer-events-none" />

        <Container>
          {/* Watermark */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.012] text-white font-display font-black text-[12vw] tracking-[0.1em] z-0 leading-none">
            WORKFLOW
          </div>

          {/* Section Header */}
          <div className="mb-24 relative z-10 text-center">
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#FF5A1F] font-bold mb-2 block">
              METHODOLOGY
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl uppercase tracking-[0.015em] text-white">
              Our Workflow
            </h2>
            <p className="text-white/50 font-sans font-light text-sm max-w-md mx-auto mt-4 leading-relaxed">
              We guide each project through a structured, strategy-first timeline to ensure pixel-perfect delivery.
            </p>
          </div>

          {/* Timeline Wrapper */}
          <div className="relative z-10 mt-16 max-w-6xl mx-auto">
            {/* Horizontal Line Connector (Desktop) */}
            <div className="absolute top-10 left-[8%] right-[8%] h-[1px] bg-white/10 hidden lg:block" />
            <motion.div
              style={{ scaleX: workflowProgress, originX: 0 }}
              className="absolute top-10 left-[8%] right-[8%] h-[1px] bg-[#FF5A1F] hidden lg:block"
            />

            {/* Vertical Line Connector (Mobile/Tablet) */}
            <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-white/10 lg:hidden" />
            <motion.div
              style={{ scaleY: workflowProgress, originY: 0 }}
              className="absolute left-10 top-0 bottom-0 w-[1px] bg-[#FF5A1F] lg:hidden"
            />

            {/* Workflow Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
              {steps.map((step, idx) => {
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col pl-20 lg:pl-0 group"
                  >
                    {/* Circle Node Header */}
                    <div className="flex lg:flex-col gap-4 items-center lg:items-start mb-6">
                      <div className="w-20 h-20 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md flex items-center justify-center text-white/50 transition-all duration-500 group-hover:scale-105 group-hover:border-[#FF5A1F] group-hover:text-[#FF5A1F] group-hover:shadow-[0_0_25px_rgba(255,90,31,0.2)] relative z-10">
                        {step.icon}
                        {/* Number tag */}
                        <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#FF5A1F] text-white text-[9px] font-sans font-bold flex items-center justify-center">
                          {step.num}
                        </span>
                      </div>

                      <h3 className="font-display font-semibold text-lg uppercase text-white mt-1 group-hover:text-[#FF5A1F] transition-colors duration-500 tracking-wider">
                        {step.title}
                      </h3>
                    </div>

                    {/* Step Description */}
                    <p className="text-white/60 font-sans font-light text-xs md:text-sm leading-relaxed lg:pr-4">
                      {step.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* =================================================
          SECTION 4: INDUSTRIES WE SERVE (Light Theme)
          ================================================= */}
      <section
        className="relative py-32 bg-white border-b border-[#1B2450]/6 overflow-hidden z-20"
      >
        <div className="noise-overlay opacity-[0.015]" />

        <Container>
          {/* Section Header */}
          <div className="mb-20 text-center">
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#FF5A1F] font-bold mb-2 block">
              EXPERTISE
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl uppercase tracking-[0.015em] text-[#1B2450]">
              Industries We Serve
            </h2>
            <p className="text-[#555555] font-sans font-light text-sm max-w-md mx-auto mt-4 leading-relaxed">
              We craft tailored identity and layout designs across a comprehensive spectrum of physical and digital sectors.
            </p>
          </div>

          {/* Grid of Industries */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {industries.map((ind, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group p-6 rounded-2xl bg-[#F7F7F8] border border-[#1B2450]/6 hover:border-[#FF5A1F]/30 hover:bg-white hover:-translate-y-1.5 hover:shadow-premium-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between h-[150px] cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-[#1B2450]/5 flex items-center justify-center text-[#1B2450] group-hover:bg-[#FF5A1F]/10 group-hover:text-[#FF5A1F] transition-all duration-500">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm md:text-base text-[#1B2450] uppercase tracking-wide group-hover:text-[#FF5A1F] transition-colors duration-300">
                    {ind.name}
                  </h3>
                  <span className="text-[10px] text-[#888888] font-sans font-light block mt-1">
                    {ind.desc}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* =================================================
          SECTION 5: COMING SOON (Light Theme)
          ================================================= */}
      <section
        className="relative py-28 bg-white border-b border-[#1B2450]/6 overflow-hidden z-20"
      >
        <div className="noise-overlay opacity-[0.01]" />

        <Container>
          {/* Header */}
          <div className="mb-16 text-center">
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#888888] font-bold mb-2 block">
              COMING SOON
            </span>
            <h2 className="font-display font-bold text-2xl md:text-4xl uppercase tracking-[0.015em] text-[#1B2450]">
              More Services Are On The Way
            </h2>
          </div>

          {/* Grid of Coming Soon */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {comingSoonList.map((cs, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 0.65 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative p-8 rounded-2xl bg-[#F7F7F8] border border-[#1B2450]/6 select-none flex flex-col justify-between min-h-[180px] pointer-events-none"
              >
                <div>
                  <div className="inline-block px-2 py-0.5 rounded bg-[#1B2450]/5 text-[#1B2450] text-[8px] font-sans font-bold tracking-widest uppercase mb-4">
                    COMING SOON
                  </div>
                  <h3 className="font-display font-semibold text-lg text-[#1B2450] uppercase tracking-wide">
                    {cs.title}
                  </h3>
                  <p className="text-[#555555] font-sans font-light text-xs mt-2 leading-relaxed">
                    {cs.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* =================================================
          SECTION 6: FAQ ACCORDION (Light Theme)
          ================================================= */}
      <section
        className="relative py-32 bg-[#F7F7F8] border-b border-[#1B2450]/6 overflow-hidden z-20"
      >
        <div className="noise-overlay opacity-[0.02]" />

        <Container size="sm">
          {/* Header */}
          <div className="mb-20 text-center">
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#FF5A1F] font-bold mb-2 block">
              FAQ
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl uppercase tracking-[0.015em] text-[#1B2450]">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Accordion Box */}
          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-[#1B2450]/6 rounded-premium-md bg-white/80 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-[#FF5A1F]/25"
                >
                  <button
                    onClick={() => setActiveIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                  >
                    <span className="font-display font-semibold text-sm md:text-base text-[#1B2450] uppercase tracking-wide">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#FF5A1F] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <div
                    style={{
                      height: isOpen ? 'auto' : 0,
                      opacity: isOpen ? 1 : 0,
                      transition: 'height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease-out'
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-xs md:text-sm font-sans font-light leading-relaxed text-[#555555] border-t border-[#1B2450]/6 pt-4">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =================================================
          SECTION 7: CTA (Dark Theme)
          ================================================= */}
      <CTA
        badge="GET STARTED"
        heading={
          <>
            Let's Build Something<br />Extraordinary Together.
          </>
        }
        description="Ready to elevate your brand? Let's create impactful designs that leave a lasting impression."
      />
    </div>
  );
};

export default Services;
