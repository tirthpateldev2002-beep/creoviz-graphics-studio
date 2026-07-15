import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useScroll, animate } from 'framer-motion';
import { Sparkles, ArrowRight, Layers, Palette, Shield, Laptop, Monitor, Hash } from 'lucide-react';
import { Link } from 'react-router-dom';

const WORDS = ["DESIGN", "BUILD", "ELEVATE"];

export const Hero: React.FC = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [isMouseInHero, setIsMouseInHero] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll Parallax configuration
  const { scrollY } = useScroll();
  const textScale = useTransform(scrollY, [0, 600], [1, 1.03]);
  const backgroundY = useTransform(scrollY, [0, 800], [0, 80]);
  const cardsParallaxY = useTransform(scrollY, [0, 800], [0, -40]);
  const mouseScrollFade = useTransform(scrollY, [0, 450], [1, 0]);

  // Global mouse-following spring radial glow coordinates (lagged and smooth)
  const mouseXGlobal = useMotionValue(-1000);
  const mouseYGlobal = useMotionValue(-1000);
  const glowX = useSpring(mouseXGlobal, { damping: 75, stiffness: 70 });
  const glowY = useSpring(mouseYGlobal, { damping: 75, stiffness: 70 });

  // Dedicated opacity motion value for clean fade-in and fade-out transitions
  const glowOpacity = useMotionValue(0);

  // Floating cards parallax spring coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 55, stiffness: 140, mass: 0.7 };
  const parallaxX = useSpring(mouseX, springConfig);
  const parallaxY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Switch dynamic words every 2 seconds
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Animate ambient glow opacity dynamically when mouse enters or leaves
  useEffect(() => {
    animate(glowOpacity, isMouseInHero ? 0.15 : 0, { duration: 0.5, ease: "easeOut" });
  }, [isMouseInHero, glowOpacity]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    // Position the 500px x 500px glow element centered under the cursor
    const xRelative = e.clientX - rect.left;
    const yRelative = e.clientY - rect.top;
    mouseXGlobal.set(xRelative - 250);
    mouseYGlobal.set(yRelative - 250);

    // Normalise mouse coords to [-0.5, 0.5] for floating cards Parallax depth
    const xNormalized = (e.clientX - rect.left) / rect.width - 0.5;
    const yNormalized = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xNormalized * 30);
    mouseY.set(yNormalized * 30);
  };

  const cardsData = [
    {
      title: 'Brand Identity',
      desc: 'Strategy & Art Direction',
      icon: <Layers className="w-4 h-4 text-accent" />,
      pos: 'top-[2%] left-[4%]',
      speed: 'animate-float',
      factor: 0.5,
    },
    {
      title: 'Logo Design',
      desc: 'Bespoke Mark System',
      icon: <Palette className="w-4 h-4 text-accent" />,
      pos: 'top-[34%] left-[0%]',
      speed: 'animate-float-delayed',
      factor: 1.0,
    },
    {
      title: 'Packaging Design',
      desc: 'Retail Experience & Print',
      icon: <Shield className="w-4 h-4 text-accent" />,
      pos: 'top-[66%] left-[6%]',
      speed: 'animate-float',
      factor: 0.8,
    },
    {
      title: 'Website Design',
      desc: 'Framer & Custom Web',
      icon: <Laptop className="w-4 h-4 text-accent" />,
      pos: 'top-[12%] left-[54%]',
      speed: 'animate-float-delayed',
      factor: 1.3,
    },
    {
      title: 'UI Design',
      desc: 'Figma Products & Systems',
      icon: <Monitor className="w-4 h-4 text-accent" />,
      pos: 'top-[44%] left-[50%]',
      speed: 'animate-float',
      factor: 0.6,
    },
    {
      title: 'Social Media',
      desc: 'Curated Premium Content',
      icon: <Hash className="w-4 h-4 text-accent" />,
      pos: 'top-[76%] left-[52%]',
      speed: 'animate-float-delayed',
      factor: 1.1,
    },
  ];

  // Combined mouse glow opacity tracking scroll progress and enter/leave triggers
  const combinedGlowOpacity = useTransform(
    [glowOpacity, mouseScrollFade],
    ([o, f]) => (o as number) * (f as number)
  );

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsMouseInHero(true)}
      onMouseLeave={() => {
        setIsMouseInHero(false);
        // Shift glow far offscreen so it resets cleanly on re-entry
        mouseXGlobal.set(-1000);
        mouseYGlobal.set(-1000);
      }}
      className="relative min-h-[110vh] bg-[#1B2450] overflow-hidden flex items-center pt-32 pb-24 border-b border-white/5"
    >
      {/* Noise Overlay */}
      <div className="noise-overlay opacity-[0.035]" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-1">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" className="text-white" />
        </svg>
      </div>

      {/* Background Parallax Layer */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 pointer-events-none z-1">
        {/* Soft orange ambient radial glows */}
        <div className="absolute top-[15%] left-[-10%] w-[600px] h-[600px] bg-accent/6 rounded-full blur-[140px] animate-glow-breathe" />
        <div className="absolute bottom-[20%] right-[-10%] w-[650px] h-[650px] bg-white/[0.015] rounded-full blur-[160px] animate-glow-breathe [animation-delay:4s]" />

        {/* Centered Concentric Outline Circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center select-none w-[1200px] h-[1200px]">
          {/* Circle 3 (Large) */}
          <div className="absolute w-[1000px] h-[1000px] rounded-full border-2 border-[#FF5A1F] opacity-[0.02] animate-concentric-pulse pointer-events-none" style={{ animationDelay: '0s', animationDuration: '16s' }} />
          {/* Circle 2 (Medium) */}
          <div className="absolute w-[700px] h-[700px] rounded-full border-2 border-[#FF5A1F] opacity-[0.02] animate-concentric-pulse pointer-events-none" style={{ animationDelay: '4s', animationDuration: '12s' }} />
          {/* Circle 1 (Small) */}
          <div className="absolute w-[400px] h-[400px] rounded-full border-2 border-[#FF5A1F] opacity-[0.02] animate-concentric-pulse pointer-events-none" style={{ animationDelay: '8s', animationDuration: '8s' }} />
        </div>

        {/* Floating drift particles */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-[15%] left-[25%] w-2 h-2 bg-accent rounded-full animate-particle-drift" />
          <div className="absolute top-[55%] left-[8%] w-1.5 h-1.5 bg-white rounded-full animate-float" />
          <div className="absolute top-[75%] left-[40%] w-3 h-3 bg-accent rounded-full animate-particle-drift [animation-delay:2s]" />
          <div className="absolute top-[25%] right-[30%] w-2.5 h-2.5 bg-white rounded-full animate-float-delayed" />
          <div className="absolute top-[65%] right-[8%] w-2 h-2 bg-accent rounded-full animate-particle-drift [animation-delay:4s]" />
        </div>
      </motion.div>

      {/* Mouse Follow Ambient Cursor Light (Large, Soft, Blurred, Inertial) */}
      <motion.div
        style={{ x: glowX, y: glowY, opacity: combinedGlowOpacity }}
        className="absolute w-[500px] h-[500px] bg-accent/[0.12] rounded-full blur-[130px] pointer-events-none z-1 select-none"
      />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        {/* Left Side: Typography and CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Creative Branding Studio Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-md border border-white/5 hover:border-accent/20 transition-colors duration-500 mb-8 self-start pointer-events-auto">
            <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
            <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-white/90">
              Creative Branding Studio
            </span>
          </div>

          {/* Headline */}
          <motion.h1
            style={{ scale: textScale }}
            className="font-display font-black text-5xl md:text-[80px] lg:text-[96px] leading-[0.9] text-white uppercase select-none flex flex-col pointer-events-none mb-10 tracking-[2px]"
          >
            <span>WE</span>
            <span className="relative inline-flex overflow-hidden h-[1.1em] text-accent font-black w-full">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ y: 70, opacity: 0, scale: 0.85, filter: "blur(12px)" }}
                  animate={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ y: -70, opacity: 0, scale: 1.05, filter: "blur(12px)" }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] as any }}
                  className="absolute left-0 text-left w-full"
                >
                  {WORDS[wordIndex]}.
                </motion.span>
              </AnimatePresence>
            </span>
            <span>BRANDS</span>
            <span>PEOPLE</span>
            <span className="text-white/90">REMEMBER.</span>
          </motion.h1>

          {/* Subtitle */}
          <p className="text-white/60 font-sans font-normal text-base md:text-lg leading-relaxed max-w-lg mb-10">
            Premium branding, digital design and print solutions crafted to help ambitious businesses stand out and grow. Based in Bharuch.
          </p>

          {/* CTA Actions */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center pointer-events-auto mb-8">
            <Link
              to="/work"
              className="group relative overflow-hidden flex items-center justify-center gap-2.5 px-8 py-4 bg-accent text-bg-light rounded-full font-sans font-bold tracking-wider text-xs uppercase hover:bg-accent-hover hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(255,81,0,0.45)] transition-all duration-500 hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              {/* Continuous sweep animation layer */}
              <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] animate-light-sweep" />
              </div>

              <span className="relative z-10 flex items-center gap-2.5">
                View Our Work
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>

            <Link
              to="/contact"
              className="px-8 py-4 bg-white/[0.03] border border-white/10 hover:border-accent/30 text-white rounded-full font-sans font-bold tracking-wider text-xs uppercase hover:bg-white/[0.08] hover:scale-[1.03] transition-all duration-500 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-center backdrop-blur-md block"
            >
              Start a Project
            </Link>
          </div>

          {/* Trust section below buttons */}
          <div className="flex items-center gap-2 mt-4 select-none pointer-events-none">
            <span className="text-accent text-sm tracking-widest font-mono">★★★★★</span>
            <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-white/50">
              Trusted by ambitious businesses across the world.
            </span>
          </div>
        </div>

        {/* Right Side: Floating Premium Service Cards Grid */}
        <motion.div
          style={{ y: cardsParallaxY }}
          className="lg:col-span-5 h-[480px] md:h-[580px] relative w-full select-none"
        >
          {cardsData.map((card, idx) => {
            const cardX = useSpring(useTransform(parallaxX, (v) => v * card.factor), springConfig);
            const cardY = useSpring(useTransform(parallaxY, (v) => v * card.factor), springConfig);

            return (
              <motion.div
                key={idx}
                className={`absolute ${card.pos} pointer-events-auto`}
                style={{ x: cardX, y: cardY }}
              >
                <div
                  style={{
                    animationDelay: `${idx * 0.4}s`,
                    animationDuration: `${5.5 + idx * 0.8}s`
                  }}
                  className={`${card.speed} bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] p-4 md:p-6 rounded-premium-md shadow-[0_16px_48px_rgba(0,0,0,0.3)] flex flex-col gap-3 min-w-[200px] md:min-w-[250px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2.5 hover:scale-[1.02] hover:rotate-2 hover:border-accent/40 hover:shadow-[0_16px_48px_rgba(255,81,0,0.12)] group`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display font-semibold text-sm text-white uppercase transition-colors duration-300 group-hover:text-accent">
                      {card.title}
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-accent/5 border border-accent/10 flex items-center justify-center transition-all duration-300 group-hover:rotate-12 group-hover:bg-accent/15">
                      {card.icon}
                    </div>
                  </div>
                  <p className="text-[10px] font-sans font-bold tracking-wider text-white/40 uppercase">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
