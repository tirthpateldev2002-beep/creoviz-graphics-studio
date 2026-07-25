import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Home, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { SEO } from '../components/common/SEO';

const VectorIllustration = () => {
  return (
    <div className="relative w-full max-w-[450px] aspect-square mx-auto flex items-center justify-center pointer-events-none select-none">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[#FF5A1F]/5 rounded-full blur-[80px] animate-glow-breathe pointer-events-none" />
      
      {/* SVG Vector Canvas */}
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 overflow-visible"
      >
        <defs>
          {/* Canvas grid pattern matching designer layouts */}
          <pattern id="canvas-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="0.5" />
          </pattern>
          {/* Gradient for the vector path */}
          <linearGradient id="path-grad" x1="100" y1="200" x2="300" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF5A1F" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#FF5A1F" />
          </linearGradient>
        </defs>

        {/* Viewport Border Grid */}
        <rect width="360" height="360" x="20" y="20" fill="url(#canvas-grid)" rx="16" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1" />
        
        {/* Safe Area Guides */}
        <rect width="320" height="320" x="40" y="40" fill="none" stroke="rgba(255, 90, 31, 0.1)" strokeWidth="1" strokeDasharray="4 4" rx="8" />
        
        {/* Horizontal & Vertical Center Guides */}
        <line x1="200" y1="20" x2="200" y2="380" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
        <line x1="20" y1="200" x2="380" y2="200" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />

        {/* Lost Bezier Curve */}
        <motion.path
          d="M 100 240 C 100 130, 180 120, 200 200 C 220 280, 300 270, 300 160"
          stroke="url(#path-grad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
        />

        {/* Control Handles and Tangents */}
        {/* Left Tangent */}
        <motion.line
          x1="100" y1="240" x2="100" y2="150"
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth="1"
          strokeDasharray="2 2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        />
        <motion.circle
          cx="100" cy="150" r="3.5"
          fill="#FF5A1F"
          stroke="#FFFFFF"
          strokeWidth="1"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, type: "spring" }}
        />

        {/* Center Control Tangents */}
        <motion.line
          x1="200" y1="200" x2="160" y2="130"
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth="1"
          strokeDasharray="2 2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        />
        <motion.circle
          cx="160" cy="130" r="3.5"
          fill="#FFFFFF"
          stroke="#FF5A1F"
          strokeWidth="1"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.3, type: "spring" }}
        />

        <motion.line
          x1="200" y1="200" x2="240" y2="270"
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth="1"
          strokeDasharray="2 2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        />
        <motion.circle
          cx="240" cy="270" r="3.5"
          fill="#FFFFFF"
          stroke="#FF5A1F"
          strokeWidth="1"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.3, type: "spring" }}
        />

        {/* Right Tangent */}
        <motion.line
          x1="300" y1="160" x2="300" y2="250"
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth="1"
          strokeDasharray="2 2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        />
        <motion.circle
          cx="300" cy="250" r="3.5"
          fill="#FF5A1F"
          stroke="#FFFFFF"
          strokeWidth="1"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.4, type: "spring" }}
        />

        {/* Anchor Point Square Nodes */}
        {/* Start Node */}
        <motion.rect
          x="95" y="235" width="10" height="10"
          fill="#1B2450"
          stroke="#FF5A1F"
          strokeWidth="2"
          rx="1.5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, type: "spring" }}
        />
        
        {/* End Node */}
        <motion.rect
          x="295" y="155" width="10" height="10"
          fill="#1B2450"
          stroke="#FF5A1F"
          strokeWidth="2"
          rx="1.5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
        />

        {/* Selected Center Node with pulse effect */}
        <motion.circle
          cx="200"
          cy="200"
          r="9"
          fill="rgba(255, 90, 31, 0.25)"
          stroke="#FF5A1F"
          strokeWidth="1.5"
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.rect
          x="195" y="195" width="10" height="10"
          fill="#FF5A1F"
          stroke="#FFFFFF"
          strokeWidth="2"
          rx="1.5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7, type: "spring" }}
        />

        {/* Pen Cursor drawing the path */}
        <motion.g
          initial={{ x: 260, y: 310, opacity: 0 }}
          animate={{ x: 199, y: 199, opacity: 1 }}
          transition={{ delay: 1.6, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Pen tool body */}
          <g transform="translate(0, 0) rotate(-45)">
            <path
              d="M 0,0 L -5,-15 C -6,-19 -3,-22 0,-26 C 3,-22 6,-19 5,-15 Z"
              fill="#FF5A1F"
              stroke="#FFFFFF"
              strokeWidth="1.5"
            />
            <path
              d="M 0,0 L 0,-12"
              stroke="#FFFFFF"
              strokeWidth="1.2"
            />
            <circle cx="0" cy="-12" r="1.2" fill="#FFFFFF" />
          </g>
        </motion.g>

        {/* Floating Creative Grid Elements */}
        {/* Floating cross/plus guide mark */}
        <motion.path
          d="M 75 90 L 85 90 M 80 85 L 80 95"
          stroke="rgba(255, 255, 255, 0.25)"
          strokeWidth="1.5"
          animate={{ y: [0, -6, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Floating dashed guide circle */}
        <motion.circle
          cx="310" cy="90" r="12"
          fill="none"
          stroke="#FF5A1F"
          strokeWidth="1"
          strokeDasharray="3 3"
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        />
        {/* Floating square outline guide */}
        <motion.rect
          x="75" y="300" width="10" height="10"
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth="1"
          rx="1.5"
          animate={{ rotate: [0, 90, 0], y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
};

export const NotFound: React.FC = () => {
  // Page exit/entrance motion configs
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="relative min-h-[85vh] bg-[#1B2450] text-white overflow-hidden flex items-center py-16 md:py-24">
      <SEO
        title="404 Page Not Found | Creoviz Graphics Studio"
        description="Sorry, the page you're looking for doesn't exist or may have been moved."
        path="/404"
      />
      
      {/* Noise Overlay */}
      <div className="noise-overlay opacity-[0.035]" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-1">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="404-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#404-grid)" className="text-white" />
        </svg>
      </div>

      {/* Ambient background glows */}
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-[#FF5A1F]/5 rounded-full blur-[120px] pointer-events-none select-none" />
      <div className="absolute bottom-[10%] left-[-15%] w-[550px] h-[550px] bg-white/[0.01] rounded-full blur-[140px] pointer-events-none select-none" />

      <Container className="relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Typography and Actions Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
            {/* Sparkle Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-md border border-white/5 hover:border-[#FF5A1F]/20 transition-colors duration-500 mb-6 self-center lg:self-start"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FF5A1F] animate-pulse" />
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-white/95">
                Error Code 404
              </span>
            </motion.div>

            {/* Giant Graphic 404 Heading */}
            <motion.div
              variants={itemVariants}
              className="font-display font-black text-[100px] md:text-[140px] lg:text-[170px] leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A1F] via-[#FF804D] to-[#FF5A1F] select-none mb-4"
            >
              404
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-bold text-3xl md:text-5xl uppercase tracking-tight text-white mb-6"
            >
              Page Not Found
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-white/60 font-sans font-normal text-sm md:text-base leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10"
            >
              Sorry, the page you're looking for doesn't exist or may have been moved.
            </motion.p>

            {/* Actions CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-center lg:justify-start"
            >
              {/* Go Home button */}
              <Link
                to="/"
                className="group relative overflow-hidden flex items-center justify-center gap-2.5 px-8 py-4 bg-[#FF5A1F] text-white rounded-full font-sans font-bold tracking-wider text-xs uppercase hover:bg-[#E54C12] hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(255,81,0,0.4)] transition-all duration-500 hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                {/* Continuous sweep animation layer */}
                <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] animate-light-sweep" />
                </div>
                
                <span className="relative z-10 flex items-center gap-2">
                  <Home className="w-3.5 h-3.5" />
                  Go Home
                </span>
              </Link>

              {/* Start a Project button */}
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/[0.03] border border-white/10 hover:border-[#FF5A1F]/30 text-white rounded-full font-sans font-bold tracking-wider text-xs uppercase hover:bg-white/[0.08] hover:scale-[1.03] transition-all duration-500 hover:-translate-y-0.5 active:translate-y-0 text-center backdrop-blur-md"
              >
                Start a Project
              </Link>
            </motion.div>
          </div>

          {/* Graphic/Illustration Column */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 order-1 lg:order-2 flex items-center justify-center"
          >
            <VectorIllustration />
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default NotFound;
