import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CTAProps {
  badge?: string;
  heading?: React.ReactNode;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  smallText?: string;
}

export const CTA: React.FC<CTAProps> = ({
  badge = 'GET IN TOUCH',
  heading = (
    <>
      Let's Build Something<br />Remarkable.
    </>
  ),
  description = 'Whether launching a brand, designing packaging boxes, or building interactive web layouts, our team brings precision design directly to you.',
  primaryButtonText = 'Start a Project',
  primaryButtonHref = '/contact',
  secondaryButtonText = 'Contact Us',
  secondaryButtonHref = '/contact',
  smallText,
}) => {
  const isExternal = (url: string) =>
    url.startsWith('http') || url.startsWith('mailto') || url.startsWith('tel');

  return (
    <section className="relative py-24 bg-transparent overflow-hidden z-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="group relative w-full overflow-hidden bg-[#FF5A1F] rounded-[36px] px-8 py-16 md:px-16 md:py-20 flex flex-col items-center text-center shadow-[0_25px_60px_-15px_rgba(255,90,31,0.35)] hover:-translate-y-2 hover:shadow-[0_30px_70px_-10px_rgba(255,90,31,0.5)] hover:scale-[1.005] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        >
          {/* Background decorative circles */}
          <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-white/[0.06] rounded-full translate-x-1/4 -translate-y-1/4 blur-[5px] pointer-events-none transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/[0.06] rounded-full -translate-x-1/4 translate-y-1/4 blur-[5px] pointer-events-none transition-transform duration-700 group-hover:scale-105" />

          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 px-4.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white font-sans text-[10px] uppercase font-bold tracking-widest mb-6 relative z-10">
            {badge}
          </span>

          {/* Heading */}
          <h2 className="font-display font-bold text-4xl md:text-[56px] uppercase tracking-tight text-white max-w-2xl leading-[1.05] mb-6 relative z-10">
            {heading}
          </h2>

          {/* Description */}
          <p className="text-white/85 font-sans font-light text-sm md:text-base leading-relaxed max-w-lg mb-10 relative z-10">
            {description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto mt-4 relative z-10">
            {/* Primary Button */}
            {isExternal(primaryButtonHref) ? (
              <a
                href={primaryButtonHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto group flex items-center justify-center gap-2.5 px-9 py-4.5 bg-white text-[#FF5A1F] rounded-full font-sans font-bold tracking-wider text-xs uppercase hover:bg-white/95 hover:shadow-[0_8px_25px_rgba(255,255,255,0.2)] transition-all duration-500 hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                {primaryButtonText}
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            ) : (
              <Link
                to={primaryButtonHref}
                className="w-full sm:w-auto group flex items-center justify-center gap-2.5 px-9 py-4.5 bg-white text-[#FF5A1F] rounded-full font-sans font-bold tracking-wider text-xs uppercase hover:bg-white/95 hover:shadow-[0_8px_25px_rgba(255,255,255,0.2)] transition-all duration-500 hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                {primaryButtonText}
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            )}

            {/* Secondary Button */}
            {isExternal(secondaryButtonHref) ? (
              <a
                href={secondaryButtonHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto group flex items-center justify-center gap-2 px-9 py-4.5 bg-transparent border border-white hover:border-white text-white rounded-full font-sans font-bold tracking-wider text-xs uppercase hover:bg-white/10 transition-all duration-500 hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <MessageSquare className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" />
                {secondaryButtonText}
              </a>
            ) : (
              <Link
                to={secondaryButtonHref}
                className="w-full sm:w-auto group flex items-center justify-center gap-2 px-9 py-4.5 bg-transparent border border-white hover:border-white text-white rounded-full font-sans font-bold tracking-wider text-xs uppercase hover:bg-white/10 transition-all duration-500 hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <MessageSquare className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" />
                {secondaryButtonText}
              </Link>
            )}
          </div>

          {/* Optional small text below buttons */}
          {smallText && (
            <span className="text-[10px] text-white/60 font-sans font-medium uppercase tracking-wider block mt-6 relative z-10 max-w-sm">
              {smallText}
            </span>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
