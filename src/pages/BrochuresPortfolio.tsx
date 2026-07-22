import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { WorkCTA } from '../components/sections/WorkCTA';
import { SEO } from '../components/common/SEO';

export const BrochuresPortfolio: React.FC = () => {

  return (
    <div className="relative overflow-x-hidden bg-white text-left">
      <SEO
        title="Brochures Portfolio | Creoviz Graphics Studio"
        description="Explore our collection of premium corporate brochures, product catalogs, and corporate sales booklets designed to present details clearly."
        path="/work/brochures"
      />
      {/* =================================================
          1. HERO SECTION (Dark Theme)
          ================================================= */}
      <section className="relative py-28 bg-[#1B2450] bg-gradient-to-b from-[#1B2450] to-[#141B3B] overflow-hidden border-b border-white/5 z-20">
        <div className="noise-overlay opacity-[0.03]" />
        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#FF5A1F] font-bold mb-4 block">
              PORTFOLIO
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-none mb-6">
              Brochures
            </h1>
            <p className="text-white/70 font-sans font-light text-base md:text-lg leading-relaxed">
              Explore our premium corporate brochures, product catalogs, and sales materials designed to elevate communication and present details clearly.
            </p>
          </div>
        </Container>
      </section>

      {/* =================================================
          2. PROJECT LIST / GALLERY
          ================================================= */}
      <section className="relative py-28 bg-[#F7F7F8] border-b border-[#1B2450]/6 z-20">
        <div className="noise-overlay opacity-[0.02]" />
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 01: Sunelite Pharma Brochure */}
            <a
              href="/Sunelite Pharma Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-premium-lg bg-white border border-[#1B2450]/6 hover:border-[#FF5A1F] hover:shadow-premium-md transition-all duration-500 text-left flex flex-col justify-between h-full cursor-pointer"
            >
              <div>
                <div className="aspect-[16/10] bg-[#F7F7F8] border border-[#1B2450]/5 rounded-xl mb-6 overflow-hidden flex items-center justify-center">
                  <img
                    src="/brand-images/Brochure_Mockup_4.webp"
                    alt="Sunelite Pharma Brochure"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-103"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-display font-bold text-xl text-[#1B2450] uppercase tracking-wide mb-4">
                  Sunelite Pharma Brochure
                </h3>
              </div>
              
              <div className="w-full text-center justify-center border border-[#1B2450]/10 rounded-full py-2.5 px-4 font-sans font-bold text-xs uppercase tracking-wider text-[#1B2450] group-hover:border-[#FF5A1F] group-hover:text-[#FF5A1F] transition-all duration-300 flex items-center gap-2 mt-auto">
                Open PDF Brochure
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </a>

            {/* Card 02: Maa Shakti Packaging Brochure */}
            <a
              href="/Maa Shakti Packaging Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-premium-lg bg-white border border-[#1B2450]/6 hover:border-[#FF5A1F] hover:shadow-premium-md transition-all duration-500 text-left flex flex-col justify-between h-full cursor-pointer"
            >
              <div>
                <div className="aspect-[16/10] bg-[#F7F7F8] border border-[#1B2450]/5 rounded-xl mb-6 overflow-hidden flex items-center justify-center">
                  <img
                    src="/brand-images/Folded_A5_Flyer_Mockup_1.webp"
                    alt="Maa Shakti Packaging Brochure"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-103"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-display font-bold text-xl text-[#1B2450] uppercase tracking-wide mb-4">
                  Maa Shakti Packaging Brochure
                </h3>
              </div>
              
              <div className="w-full text-center justify-center border border-[#1B2450]/10 rounded-full py-2.5 px-4 font-sans font-bold text-xs uppercase tracking-wider text-[#1B2450] group-hover:border-[#FF5A1F] group-hover:text-[#FF5A1F] transition-all duration-300 flex items-center gap-2 mt-auto">
                Open PDF Brochure
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </a>
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

export default BrochuresPortfolio;
