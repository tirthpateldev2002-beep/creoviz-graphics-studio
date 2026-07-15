import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WorkCTA: React.FC = () => {
  return (
    <section className="relative py-24 bg-transparent overflow-hidden z-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="group relative w-full overflow-hidden bg-gradient-to-br from-[#FF5A1F] to-[#E04810] rounded-[36px] px-8 py-16 md:px-16 md:py-20 flex flex-col items-center text-center shadow-[0_25px_60px_-15px_rgba(255,90,31,0.35)] hover:-translate-y-2 hover:shadow-[0_30px_70px_-10px_rgba(255,90,31,0.5)] hover:scale-[1.005] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        >
          {/* Background decorative circles */}
          <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-white/[0.06] rounded-full translate-x-1/4 -translate-y-1/4 blur-[5px] pointer-events-none transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/[0.06] rounded-full -translate-x-1/4 translate-y-1/4 blur-[5px] pointer-events-none transition-transform duration-700 group-hover:scale-105" />

          {/* Soft orange glow ambient spot inside */}
          <div className="absolute w-[200px] h-[200px] bg-white/10 rounded-full blur-[60px] top-[-20%] left-[-20%] pointer-events-none" />

          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 px-4.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white font-sans text-[10px] uppercase font-bold tracking-widest mb-6 relative z-10">
            START A PROJECT
          </span>

          {/* Heading */}
          <h2 className="font-display font-bold text-4xl md:text-[56px] uppercase tracking-tight text-white max-w-2xl leading-[1.05] mb-6 relative z-10 text-center w-full">
            Let's Build Something<br />Remarkable.
          </h2>

          {/* Description */}
          <p className="text-white/85 font-sans font-light text-sm md:text-base leading-relaxed max-w-lg mb-10 relative z-10">
            Connect with our design office to craft custom visual assets for your brand today.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto mt-4 relative z-10">
            {/* Button 01: Start a Project */}
            <Link
              to="/contact"
              className="w-full sm:w-auto group flex items-center justify-center gap-2.5 px-9 py-4.5 bg-white border border-white text-[#FF5A1F] rounded-full font-sans font-bold tracking-wider text-xs uppercase hover:bg-transparent hover:text-white transition-all duration-500 hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              Start a Project
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            {/* Button 02: Contact Us */}
            <Link
              to="/contact"
              className="w-full sm:w-auto group flex items-center justify-center gap-2 px-9 py-4.5 bg-transparent border border-white text-white rounded-full font-sans font-bold tracking-wider text-xs uppercase hover:bg-white hover:text-[#FF5A1F] transition-all duration-500 hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              <MessageSquare className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" />
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
