import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useTransform, useSpring, useMotionValue, useInView } from 'framer-motion';
import {
  Target,
  Award,
  Cpu,
  Printer,
  Zap,
  Users,
  Sparkles
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { CTA } from '../components/sections/CTA';
import creovizIcon from '../assets/creoviz_icon.webp';
import { SEO } from '../components/common/SEO';

// ----------------------------------------------------
// Helper Component: Animated Counter for Stats
// ----------------------------------------------------
interface CounterProps {
  target: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!isInView) return;

    const start = 0;
    const end = target;
    const duration = 1500; // ms
    const increment = end / (duration / 16); // ~60fps

    let current = start;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span
      ref={ref}
      className="font-display font-bold text-5xl md:text-6xl text-primary tracking-tight block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:text-accent"
    >
      {count}
      {suffix}
    </span>
  );
};

// ----------------------------------------------------
// Helper Component: Premium Abstract Hero Illustration
// ----------------------------------------------------
interface HeroIllustrationProps {
  mouseX: any;
  mouseY: any;
  isMobile: boolean;
}

const HeroIllustration: React.FC<HeroIllustrationProps> = ({ mouseX, mouseY, isMobile }) => {
  const tx1 = useTransform(mouseX, (v: number) => -v * 0.8);
  const ty1 = useTransform(mouseY, (v: number) => -v * 0.8);
  const tx2 = useTransform(mouseX, (v: number) => v * 1.4);
  const ty2 = useTransform(mouseY, (v: number) => v * 1.4);
  const tx3 = useTransform(mouseX, (v: number) => -v * 1.1);
  const ty3 = useTransform(mouseY, (v: number) => -v * 1.1);

  return (
    <div className="relative w-full max-w-[450px] aspect-square mx-auto flex items-center justify-center pointer-events-auto">
      {/* Background glow blur */}
      <div className="absolute w-[300px] h-[300px] bg-accent/15 rounded-full blur-[110px]" />

      {/* Orbiting ring 1 */}
      <motion.div
        style={{
          x: isMobile ? 0 : mouseX,
          y: isMobile ? 0 : mouseY,
          rotate: 30
        }}
        className="absolute w-[320px] h-[320px] rounded-full border border-white/10 flex items-center justify-center"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full shadow-[0_0_15px_#FF5A1F]" />
      </motion.div>

      {/* Orbiting ring 2 */}
      <motion.div
        style={{
          x: isMobile ? 0 : tx1,
          y: isMobile ? 0 : ty1,
          rotate: -45
        }}
        className="absolute w-[240px] h-[240px] rounded-full border border-white/5 flex items-center justify-center"
      >
        <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-3 h-3 bg-white rounded-full opacity-60" />
      </motion.div>

      {/* Central Brand Core (Creoviz Icon Png) */}
      <motion.div
        animate={isMobile ? {} : { scale: [1, 1.04, 1] }}
        transition={isMobile ? {} : { duration: 5, ease: "easeInOut", repeat: Infinity }}
        className="absolute w-36 h-36 rounded-full bg-[#141B3B]/60 backdrop-blur-xl border border-white/10 shadow-[0_12px_48px_rgba(0,0,0,0.4)] flex items-center justify-center z-10"
      >
        {/* Subtle orange glow behind the icon */}
        <div className="absolute w-20 h-20 bg-accent/20 rounded-full blur-xl pointer-events-none" />
        
        {/* Creoviz Icon Png */}
        <img 
          src={creovizIcon}
          alt="Creoviz Icon"
          className="w-16 h-16 relative z-10 object-contain filter drop-shadow-[0_4px_12px_rgba(255,90,31,0.3)]"
        />
      </motion.div>

      {/* Floating Glassmorphic Panel 1 */}
      <motion.div
        style={{
          x: isMobile ? 0 : tx2,
          y: isMobile ? 0 : ty2
        }}
        animate={isMobile ? {} : { y: [-15, 10, -15] }}
        transition={isMobile ? {} : { duration: 7, ease: "easeInOut", repeat: Infinity }}
        className="absolute top-[10%] left-[2%] p-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-lg z-20 flex flex-col gap-1.5 pointer-events-none"
      >
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 mb-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="font-display font-bold text-[10px] text-white tracking-widest uppercase">BRAND STRATEGY</span>
          </div>
          <span className="font-sans font-light text-[11px] text-white/70">Strategy & Direction</span>
        </div>
      </motion.div>

      {/* Floating Glassmorphic Panel 2 */}
      <motion.div
        style={{
          x: isMobile ? 0 : tx3,
          y: isMobile ? 0 : ty3
        }}
        animate={isMobile ? {} : { y: [12, -12, 12] }}
        transition={isMobile ? {} : { duration: 6, ease: "easeInOut", repeat: Infinity, delay: 0.5 }}
        className="absolute bottom-[12%] right-[2%] p-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-lg z-20 flex flex-col gap-1.5 pointer-events-none"
      >
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 mb-0.5">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span className="font-display font-bold text-[10px] text-white tracking-widest uppercase">PREMIUM DESIGN</span>
          </div>
          <span className="font-sans font-light text-[11px] text-white/70">Creative Excellence</span>
        </div>
      </motion.div>
    </div>
  );
};



// ----------------------------------------------------
// Helper Component: Why Choose Feature Card with tilt
// ----------------------------------------------------
interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactElement;
  idx: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, idx }) => {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) - 0.5;
    const y = ((e.clientY - rect.top) / rect.height) - 0.5;
    const maxTilt = 5; // degrees
    setTilt({ rotateX: -y * maxTilt, rotateY: x * maxTilt });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0 });
  }, []);

  return (
    <div
      className="group/card relative h-full w-full transition-transform duration-300 ease-out hover:-translate-y-2"
      style={{
        perspective: '1000px',
      }}
    >
      {/* Absolute Glow Layer behind the card */}
      <div 
        className="absolute inset-[-15px] bg-[#FF5A1F]/15 rounded-[35px] blur-[38px] opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none z-0" 
      />

      {/* The main glassmorphic card on top */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.65)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '22px',
          boxShadow: '0 12px 40px rgba(27, 36, 80, 0.04)',
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          transition: 'transform 0.35s ease-out, border-color 0.3s ease-out, background-color 0.3s ease-out',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8 border border-[#1B2450]/8 hover:border-[#FF5A1F] hover:bg-white/90 transition-all duration-300 cursor-pointer"
      >
        <div>
          <div className="flex justify-between items-center mb-6">
            <span className="font-display font-bold text-sm text-[#FF5A1F]">
              0{idx + 1}
            </span>
            <div className="w-10 h-10 rounded-xl bg-[#FF5A1F]/5 border border-[#FF5A1F]/10 flex items-center justify-center transition-all duration-350 ease-out group-hover/card:rotate-12 group-hover/card:bg-[#FF5A1F]/15">
              {React.cloneElement(icon as React.ReactElement<any>, {
                className: 'w-5 h-5 text-[#FF5A1F] transition-all duration-350 ease-out group-hover/card:scale-110 group-hover/card:rotate-[8deg]'
              })}
            </div>
          </div>
          <h3 className="font-display font-semibold text-lg text-primary uppercase mb-4 transition-colors duration-350 group-hover/card:text-[#FF5A1F]">
            {title}
          </h3>
          <p className="text-text-secondary font-sans font-light text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// Main Component: About Page
// ----------------------------------------------------
export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mouse Parallax values for Hero Section
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 55, stiffness: 140, mass: 0.7 };
  const parallaxX = useSpring(mouseX, springConfig);
  const parallaxY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xNormalized = (e.clientX - rect.left) / rect.width - 0.5;
    const yNormalized = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xNormalized * 40); // Max offset 40px
    mouseY.set(yNormalized * 40);
  };

  // Grid Stagger Animation configuration
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  const whyChooseList = [
    {
      title: 'Strategy First',
      description: 'We align every pixel with your brand\'s core values and business objectives to drive success.',
      icon: <Target />
    },
    {
      title: 'Creative Excellence',
      description: 'Meticulous execution, pristine typography, and premium layouts crafted with utmost care.',
      icon: <Award />
    },
    {
      title: 'Modern Design',
      description: 'Keeping your brand ahead with clean UI elements and digital design systems.',
      icon: <Cpu />
    },
    {
      title: 'Print & Digital Solutions',
      description: 'Seamless visual styling that shines on screens as well as physical print and packaging.',
      icon: <Printer />
    },
    {
      title: 'Fast Turnaround',
      description: 'Highly structured work methodology ensuring quick delivery without ever sacrificing quality.',
      icon: <Zap />
    },
    {
      title: 'Client-First Approach',
      description: 'Fully collaborative workspace, maintaining transparent communication at every step.',
      icon: <Users />
    }
  ];

  return (
    <div className="relative bg-bg-light overflow-x-hidden">
      <SEO
        title="About Our Creative Agency | Creoviz Graphics Studio"
        description="Learn about the mission, values, and creative process behind Creoviz Graphics Studio. We are a dedicated team focused on design excellence."
        path="/about"
      />
      {/* =================================================
          SECTION 1: ABOUT CREOVIZ HERO
          ================================================= */}
      <section
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative py-32 bg-[#1B2450] bg-gradient-to-b from-[#1B2450] to-[#141B3B] overflow-hidden border-b border-white/5 z-20 flex items-center min-h-[90vh]"
      >
        <div className="noise-overlay opacity-[0.035]" />
        
        {/* SVG Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-1">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="about-hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-hero-grid)" className="text-white" />
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
                className="font-sans text-[10px] uppercase tracking-widest text-accent font-bold mb-3 block"
              >
                ABOUT CREOVIZ
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, filter: 'blur(8px)', y: 20 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl uppercase tracking-[0.015em] text-white leading-[1.1] mb-6"
              >
                Building <span className="text-[#FF5A1F]">Brands</span><br />With Purpose<span className="text-[#FF5A1F]">.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white/70 font-sans font-light text-base md:text-lg leading-relaxed max-w-xl mb-8"
              >
                Creoviz Graphics Studio is a creative branding and design studio based in Bharuch, Gujarat. Since 2024, we have been helping businesses build memorable brand identities through thoughtful design, modern creativity, and premium print & digital solutions.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Button variant="accent" size="md" href="/contact">
                  Let's Discuss
                </Button>
              </motion.div>
            </div>

            {/* Right Interactive Artwork */}
            <div className="lg:col-span-5 flex justify-center">
              <HeroIllustration mouseX={parallaxX} mouseY={parallaxY} isMobile={isMobile} />
            </div>
          </div>
        </Container>
      </section>

      {/* =================================================
          SECTION 2: OUR STORY
          ================================================= */}
      <section
        className="relative py-28 bg-bg-light border-b border-glass-border overflow-hidden z-20"
      >
        <div className="noise-overlay opacity-[0.02]" />
        
        <Container>
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              className="font-display font-bold text-3xl md:text-4xl uppercase tracking-[0.015em] text-primary mb-8"
            >
              Our Story
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: 0.1 }}
              className="text-text-secondary font-sans font-light text-base md:text-lg leading-relaxed mb-0"
            >
              Creoviz Graphics Studio was founded in 2024 with a passion for helping businesses build memorable brands through thoughtful design, creativity, and modern visual communication. What began as a vision to deliver meaningful design has grown into a creative studio focused on branding, graphic design, websites, packaging, and print solutions. Every project is approached with strategy, attention to detail, and a commitment to creating work that leaves a lasting impression.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* =================================================
          SECTION 3: VISION & MISSION
          ================================================= */}
      <section
        className="relative py-28 bg-[#1B2450] bg-gradient-to-b from-[#141B3B] to-[#0C0D14] overflow-hidden z-20 border-b border-white/5"
      >
        <div className="noise-overlay opacity-[0.03]" />
        
        {/* Glow ambient */}
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-accent/6 rounded-full blur-[130px] pointer-events-none" />

        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-full group/card relative transition-transform duration-300 ease-out hover:-translate-y-2"
            >
              {/* Soft orange glow behind card */}
              <div className="absolute inset-[-15px] bg-[#FF5A1F]/18 rounded-[35px] blur-[38px] opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />

              <div
                style={{
                  background: 'rgba(27,36,80,0.38)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '22px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.22)',
                  transition: 'border-color 0.3s ease-out, background-color 0.3s ease-out'
                }}
                className="relative z-10 p-8 md:p-10 border border-white/10 hover:border-[#FF5A1F] hover:bg-[rgba(27,36,80,0.52)] cursor-pointer h-full group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FF5A1F]/5 border border-[#FF5A1F]/10 flex items-center justify-center mb-8 transition-transform duration-500 group-hover:rotate-6">
                    <Target className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-2xl text-white uppercase tracking-wider mb-6 group-hover:text-accent transition-colors duration-300">
                    Our Vision
                  </h3>
                  <p className="text-white/70 font-sans font-light text-base leading-relaxed">
                    To become one of India's most trusted creative branding and design studios by building brands that people remember.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="h-full group/card relative transition-transform duration-300 ease-out hover:-translate-y-2"
            >
              {/* Soft orange glow behind card */}
              <div className="absolute inset-[-15px] bg-[#FF5A1F]/18 rounded-[35px] blur-[38px] opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />

              <div
                style={{
                  background: 'rgba(27,36,80,0.38)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '22px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.22)',
                  transition: 'border-color 0.3s ease-out, background-color 0.3s ease-out'
                }}
                className="relative z-10 p-8 md:p-10 border border-white/10 hover:border-[#FF5A1F] hover:bg-[rgba(27,36,80,0.52)] cursor-pointer h-full group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FF5A1F]/5 border border-[#FF5A1F]/10 flex items-center justify-center mb-8 transition-transform duration-500 group-hover:rotate-6">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-2xl text-white uppercase tracking-wider mb-6 group-hover:text-accent transition-colors duration-300">
                    Our Mission
                  </h3>
                  <p className="text-white/70 font-sans font-light text-base leading-relaxed">
                    To deliver premium branding, graphic design, websites, packaging and print solutions that help businesses grow with confidence.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* =================================================
          SECTION 4: CREOVIZ AT A GLANCE
          ================================================= */}
      <section className="py-24 bg-bg-light relative z-20 border-b border-glass-border overflow-hidden">
        <div className="noise-overlay opacity-[0.02]" />
        
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-1">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="numbers-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#numbers-grid)" className="text-primary" />
          </svg>
        </div>

        <Container>
          <div className="text-center mb-16 flex flex-col items-center">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-sans text-[10px] uppercase tracking-widest text-accent font-bold mb-3 block"
            >
              COMPANY OVERVIEW
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl md:text-4xl uppercase tracking-[0.015em] text-primary"
            >
              CREOVIZ AT A GLANCE
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { target: 2024, suffix: '', label: 'FOUNDED' },
              { target: 200, suffix: '+', label: 'PROJECTS COMPLETED' },
              { target: 170, suffix: '+', label: 'HAPPY CLIENTS' },
              { target: 10, suffix: '+', label: 'CREATIVE SERVICES' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.65)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(27, 36, 80, 0.08)',
                    borderRadius: '20px',
                    boxShadow: '0 8px 32px 0 rgba(27, 36, 80, 0.03)',
                    transition: 'transform 0.4s, border-color 0.4s, box-shadow 0.4s'
                  }}
                  className="p-8 hover:-translate-y-2 hover:border-[#FF5A1F]/30 hover:shadow-[0_12px_48px_rgba(255,90,31,0.08)] group text-center flex flex-col justify-center cursor-pointer"
                >
                  <Counter target={stat.target} suffix={stat.suffix} />
                  <span className="font-display font-semibold text-xs tracking-widest text-primary uppercase mt-4 group-hover:text-accent transition-colors duration-300">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* =================================================
          SECTION 5: BEHIND CREOVIZ
          ================================================= */}
      <section
        className="relative py-28 bg-bg-light overflow-hidden z-20 border-b border-glass-border"
      >
        <div className="noise-overlay opacity-[0.02]" />
        
        <Container>
          <div className="max-w-5xl mx-auto w-[90%] md:w-full relative group/bio">
            {/* Soft orange ambient glow behind the container */}
            <div className="absolute inset-[-20px] bg-[#FF5A1F]/6 group-hover/bio:bg-[#FF5A1F]/12 rounded-[40px] blur-[45px] transition-all duration-500 pointer-events-none z-0" />

            {/* Container -> Fade + Scale on scroll */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: 'rgba(27, 36, 80, 0.96)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
              className="relative z-10 w-full rounded-[32px] py-20 px-8 md:py-24 md:px-20 text-center border hover:border-[#FF5A1F]/30 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(255,90,31,0.12)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col items-center justify-center cursor-default"
            >
              {/* Badge -> Fade Down */}
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="font-sans text-[10px] uppercase tracking-widest text-accent font-bold mb-4 block"
              >
                Behind Creoviz
              </motion.span>

              {/* Name -> Fade Up + Slight Scale */}
              <motion.h2
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold text-5xl md:text-6xl uppercase tracking-[0.015em] text-white mb-3"
              >
                Tirth Patel
              </motion.h2>

              {/* Designation -> Fade Up */}
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                className="font-sans text-xs md:text-sm uppercase tracking-widest text-white/50 font-bold mb-8 block"
              >
                Founder & Creative Designer
              </motion.span>

              {/* Paragraph -> Fade Up */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-white/80 font-sans font-light text-base md:text-lg leading-relaxed max-w-[760px] mx-auto"
              >
                Creoviz Graphics Studio was founded by Tirth Patel in 2024 with a passion for creating meaningful brands through strategy, creativity and thoughtful design. Every project is approached with attention to detail, modern aesthetics and a commitment to delivering work that helps businesses stand out.
              </motion.p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* =================================================
          SECTION 6: WHY CHOOSE CREOVIZ
          ================================================= */}
      <section
        className="relative py-28 bg-bg-light overflow-hidden z-20 border-b border-glass-border"
      >
        <div className="noise-overlay opacity-[0.02]" />
        
        {/* Soft geometric glowing elements */}
        <div className="absolute top-[30%] right-[-10%] w-[550px] h-[550px] bg-accent/4 rounded-full blur-[140px] pointer-events-none" />

        <Container>
          <div className="max-w-xl mb-20">
            <span className="font-sans text-[10px] uppercase tracking-widest text-accent font-bold mb-2 block">
              Core Strengths
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-[0.015em] text-primary">
              Why Choose Creoviz
            </h2>
          </div>

          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {whyChooseList.map((item, idx) => (
              <motion.div key={idx} variants={cardVariants} className="h-full">
                <FeatureCard
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  idx={idx}
                />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* =================================================
          SECTION 7: CALL TO ACTION
          ================================================= */}
      <CTA
        badge="GET IN TOUCH"
        heading={
          <>
            Let's Build Something<br />Extraordinary Together.
          </>
        }
        description="Ready to create a brand that stands out? Let's turn your ideas into powerful visual experiences."
      />
    </div>
  );
};

export default About;
