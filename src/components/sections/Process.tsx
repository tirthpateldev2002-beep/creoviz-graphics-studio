import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

export const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  
  // Track scroll position
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Calculate progress lines
  const lineWidth = useTransform(scrollYProgress, [0.15, 0.75], ['0%', '100%']);

  // Update active step dynamically on scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) {
      setActiveStep(0);
    } else if (latest < 0.38) {
      setActiveStep(1);
    } else if (latest < 0.52) {
      setActiveStep(2);
    } else if (latest < 0.68) {
      setActiveStep(3);
    } else {
      setActiveStep(4);
    }
  });

  const steps = [
    {
      num: '01',
      title: 'Discover',
      desc: 'Deep diving into your brand goals, audience demographics, and market opportunities in Gujarat & beyond.',
    },
    {
      num: '02',
      title: 'Strategy',
      desc: 'Formulating visual positions, typography concepts, and structural layouts for print & web packaging.',
    },
    {
      num: '03',
      title: 'Design',
      desc: 'Iterating on bespoke logos, layout grids, packaging boxes, and digital Figma systems.',
    },
    {
      num: '04',
      title: 'Refine',
      desc: 'Polishing every vector line, font margin, and structural alignment based on close review loops.',
    },
    {
      num: '05',
      title: 'Deliver',
      desc: 'Providing high-fidelity print specifications, brand handbooks, and fully optimized production source code.',
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-28 bg-[#1B2450] relative overflow-hidden z-20 border-b border-white/5"
    >
      {/* Noise Overlay */}
      <div className="noise-overlay opacity-[0.03]" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-1">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="process-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#process-grid)" className="text-white" />
        </svg>
      </div>

      {/* Ambient glows */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-accent/6 rounded-full blur-[130px] pointer-events-none animate-glow-breathe z-1" />
      <div className="absolute bottom-[20%] left-[-10%] w-[550px] h-[550px] bg-white/[0.01] rounded-full blur-[140px] pointer-events-none animate-glow-breathe [animation-delay:4s] z-1" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Massive background watermark "PROCESS" */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.015] text-white font-display font-black text-[12vw] tracking-[0.1em] z-0 leading-none">
          PROCESS
        </div>

        {/* Section Header */}
        <div className="mb-24 relative z-10">
          <span className="font-sans text-[10px] uppercase tracking-widest text-accent font-bold mb-2 block">
            Methodology
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tight text-white leading-none">
            Our Studio Process
          </h2>
        </div>

        {/* Timeline Path */}
        <div className="relative z-10">
          {/* Progress Connecting Line (Desktop) */}
          <div className="absolute top-8 left-0 w-full h-[1px] bg-white/10 hidden lg:block" />
          <motion.div
            className="absolute top-8 left-0 h-[1px] bg-accent hidden lg:block"
            style={{ width: lineWidth }}
          />

          {/* Progress Connecting Line (Mobile/Tablet vertical) */}
          <div className="absolute left-8 top-0 w-[1px] h-full bg-white/10 lg:hidden" />
          <motion.div
            className="absolute left-8 top-0 w-[1px] bg-accent lg:hidden"
            style={{ height: lineWidth }}
          />

          {/* Steps Loop */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-8 relative z-10">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-4 group pl-20 lg:pl-0"
                >
                  {/* Step Marker Node */}
                  <div className="flex lg:flex-col items-center lg:items-start gap-4">
                    <div 
                      className={`w-16 h-16 rounded-full flex items-center justify-center font-display font-bold text-lg transition-all duration-500 relative shrink-0 z-10 cursor-pointer ${
                        isActive
                          ? 'bg-accent/10 border-accent text-accent shadow-[0_0_24px_rgba(255,81,0,0.35)] scale-105'
                          : isPast
                          ? 'bg-white/[0.04] border-accent/60 text-accent'
                          : 'bg-white/[0.02] border-white/10 text-white/40'
                      } border hover:scale-110 hover:border-accent/80 hover:shadow-[0_0_20px_rgba(255,81,0,0.2)]`}
                    >
                      {/* Pulsing ring for active step */}
                      {isActive && (
                        <span className="absolute inset-0 rounded-full border border-accent animate-ping opacity-75 pointer-events-none" />
                      )}
                      
                      {/* Ring glow on hover / active */}
                      <div 
                        className={`absolute inset-0 rounded-full border border-accent/20 transition-all duration-500 ${
                          isActive ? 'scale-110 opacity-100' : 'scale-0 opacity-0 group-hover:scale-110 group-hover:opacity-100'
                        }`} 
                      />
                      {step.num}
                    </div>
                    
                    {/* Step Title */}
                    <h3 
                      className={`font-display font-semibold text-lg uppercase mt-1 transition-colors duration-500 ${
                        isActive ? 'text-accent' : 'text-white'
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-white/60 font-sans font-light text-xs md:text-sm leading-relaxed lg:mt-2">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Process;
