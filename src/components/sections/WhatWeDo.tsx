import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../ui/ServiceCard';
import { Button } from '../ui/Button';
import { ArrowRight, Layers, Palette, Shield, Laptop, Monitor, Hash } from 'lucide-react';

export const WhatWeDo: React.FC = () => {
  const services = [
    {
      index: '01',
      title: 'Brand Identity',
      description: 'Comprehensive design systems, typography guidelines, and brand rulebooks to build visual recognition.',
      icon: <Layers className="w-5 h-5 text-accent transition-all duration-350 ease-out group-hover:scale-[1.12] group-hover:rotate-[8deg]" />,
    },
    {
      index: '02',
      title: 'Logo Design',
      description: 'Handcrafted custom wordmarks and logo marks designed to represent your core brand philosophy.',
      icon: <Palette className="w-5 h-5 text-accent transition-all duration-350 ease-out group-hover:scale-[1.12] group-hover:rotate-[8deg]" />,
    },
    {
      index: '03',
      title: 'Packaging Design',
      description: 'High-end retail boxes, product labels, and custom boxes that tell a story on the physical shelf.',
      icon: <Shield className="w-5 h-5 text-accent transition-all duration-350 ease-out group-hover:scale-[1.12] group-hover:rotate-[8deg]" />,
    },
    {
      index: '04',
      title: 'Website Design',
      description: 'Modern, fully responsive layout structures built in Figma and implemented in production code.',
      icon: <Laptop className="w-5 h-5 text-accent transition-all duration-350 ease-out group-hover:scale-[1.12] group-hover:rotate-[8deg]" />,
    },
    {
      index: '05',
      title: 'UI Design',
      description: 'High-fidelity interface layouts and component designs optimized for usability and premium aesthetics.',
      icon: <Monitor className="w-5 h-5 text-accent transition-all duration-350 ease-out group-hover:scale-[1.12] group-hover:rotate-[8deg]" />,
    },
    {
      index: '06',
      title: 'Social Media Design',
      description: 'Tailored content grids, premium post templates, and digital assets to grow brand authority.',
      icon: <Hash className="w-5 h-5 text-accent transition-all duration-350 ease-out group-hover:scale-[1.12] group-hover:rotate-[8deg]" />,
    },
  ];

  // Staggered reveal variants
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  return (
    <section className="py-28 bg-[#1B2450] bg-gradient-to-b from-[#1B2450] to-[#141B3B] relative z-20 overflow-hidden border-b border-white/5">
      {/* Noise Overlay */}
      <div className="noise-overlay opacity-[0.03]" />

      {/* Subtle radial texture & gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,90,31,0.035)_0%,transparent_75%)] pointer-events-none z-1" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-1">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="capabilities-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#capabilities-grid)" className="text-white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Massive background watermark "SERVICES" */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.015] text-white font-display font-black text-[12vw] tracking-[0.1em] z-0 leading-none">
          SERVICES
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-20 relative z-10">
          <div className="max-w-xl">
            <span className="font-sans text-[10px] uppercase tracking-widest text-accent font-bold mb-2 block">
              Core Capabilities
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tight text-white leading-none">
              What We Create
            </h2>
          </div>
          <p className="text-white/60 font-sans font-light text-base leading-relaxed max-w-sm">
            We help ambitious businesses build premium brands through strategic brand guidelines, custom web frameworks, and bespoke print systems.
          </p>
        </div>

        {/* Services Grid with staggered loading */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 relative z-10"
        >
          {services.map((service, idx) => (
            <motion.div variants={cardVariants} key={idx} className="h-full">
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>

        {/* Section Footer Actions */}
        <div className="flex justify-center relative z-10">
          <Button
            href="/services"
            variant="outline"
            size="lg"
            icon={<ArrowRight className="w-3.5 h-3.5" />}
            className="border-white/12 hover:border-accent text-white bg-[#1B2450]/30 hover:bg-accent hover:text-white hover:shadow-[0_0_24px_rgba(255,90,31,0.35)] hover:-translate-y-0.5 backdrop-blur-md transition-all duration-350 ease-out"
          >
            Explore More Services
          </Button>
        </div>
      </div>
    </section>
  );
};
export default WhatWeDo;
