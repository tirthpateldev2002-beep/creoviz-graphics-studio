import React from 'react';
import { motion } from 'framer-motion';
import { Palette } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { WorkCTA } from '../components/sections/WorkCTA';

interface BrandCardData {
  id: string;
  name: string;
  coverImage?: string;
  pdfUrl?: string;
  isPlaceholder: boolean;
}

export const LogoBrandingPortfolio: React.FC = () => {

  const brandCards: BrandCardData[] = [
    {
      id: 'kala-kruti',
      name: 'Kala Kruti',
      coverImage: '/brand-images/Kala Kruti Mockup 1.jpg',
      pdfUrl: '/Kala Kruti Case Study.pdf',
      isPlaceholder: false
    },
    {
      id: 'jwellery-hub',
      name: 'Jwellery Hub',
      coverImage: '/brand-images/Jwellery Hub Mockup 1.jpg',
      pdfUrl: '/Jwellery Hub Case Study.pdf',
      isPlaceholder: false
    },
    {
      id: 'lubrify',
      name: 'Lubrify',
      coverImage: '/brand-images/Lubrify Mockup 1.jpg',
      pdfUrl: '/Lubrify Case Study.pdf',
      isPlaceholder: false
    },
    {
      id: 'ram-solution',
      name: 'Ram Solution',
      coverImage: '/brand-images/Ram Solution Mockup 1.jpg',
      pdfUrl: '/Ram Solution Case Study.pdf',
      isPlaceholder: false
    },
    {
      id: 'shree-jwellers',
      name: 'Shree Jwellers',
      coverImage: '/brand-images/Shree Jwellers Mockup 1.png',
      pdfUrl: '/Shree Jwellers Case Study.pdf',
      isPlaceholder: false
    },
    {
      id: 'codexi',
      name: 'Codexi',
      coverImage: '/brand-images/Codexi Mockup 1.jpg',
      pdfUrl: '/Codexi Case Study.pdf',
      isPlaceholder: false
    },
    {
      id: 'hiyas-snacks-corner',
      name: "Hiya's Snacks Corner",
      coverImage: "/brand-images/Hiya's Snacks Corner Mockup 1.jpg",
      pdfUrl: "/Hiya's Snacks Corner Case Study.pdf",
      isPlaceholder: false
    },
    {
      id: 'arpan-tyre',
      name: 'Arpan Tyre',
      coverImage: '/brand-images/Arpan Tyre Corner Mockup 1.jpg',
      pdfUrl: '/Arpan Tyre Case Study.pdf',
      isPlaceholder: false
    },
    {
      id: 'umiya-industries',
      name: 'Umiya Industries',
      coverImage: '/brand-images/Umiya Industries Corner Mockup 1.jpg',
      pdfUrl: '/Umiya Industries Case Study.pdf',
      isPlaceholder: false
    },
  ];

  return (
    <div className="relative overflow-x-hidden bg-white text-left">
      {/* =================================================
          1. HERO SECTION (Dark Theme)
          ================================================= */}
      <section className="relative py-24 bg-[#1B2450] bg-gradient-to-b from-[#1B2450] to-[#141B3B] overflow-hidden border-b border-white/5 z-20 flex items-center min-h-[50vh]">
        <div className="noise-overlay opacity-[0.035]" />
        
        {/* Ambient glow spots */}
        <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] bg-[#FF5A1F]/5 rounded-full blur-[100px] pointer-events-none" />

        <Container className="relative z-10 text-left">
          <div className="max-w-3xl">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/[0.04] border border-white/10 text-[#FF5A1F] text-[9px] font-sans font-bold tracking-widest uppercase mb-4">
              WORK / LOGO &amp; BRANDING
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-[0.015em] text-white leading-tight mb-4"
            >
              Logo &amp; Branding Portfolio
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white/70 font-sans font-light text-base md:text-lg leading-relaxed"
            >
              Explore our collection of custom brand identity packages, logo designs, and typography configurations crafted for premium offline and digital experiences.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* =================================================
          2. LOGO BRAND GRID
          ================================================= */}
      <section className="relative py-28 bg-[#F7F7F8] border-b border-[#1B2450]/6 z-20">
        <div className="noise-overlay opacity-[0.02]" />
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {brandCards.map((card, idx) => {
              if (card.isPlaceholder) {
                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 0.6, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.05 }}
                    className="flex flex-col justify-between p-6 rounded-premium-lg bg-white border border-[#1B2450]/6 h-full select-none opacity-60"
                  >
                    <div>
                      <div className="overflow-hidden rounded-xl border border-dashed border-[#1B2450]/15 bg-[#F7F7F8]/50 aspect-[16/10] flex flex-col items-center justify-center mb-6 relative">
                        <Palette className="w-6 h-6 text-[#1B2450]/20 mb-2" />
                        <span className="font-sans text-[10px] text-[#888888]/40 tracking-wider uppercase font-semibold">Placeholder</span>
                      </div>
                      <h3 className="font-display font-bold text-lg text-[#1B2450]/40 uppercase tracking-wide mb-1">
                        {card.name}
                      </h3>
                    </div>
                  </motion.div>
                );
              }

              if (card.pdfUrl) {
                return (
                  <motion.a
                    key={card.id}
                    href={card.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.05 }}
                    className="group relative flex flex-col justify-between p-6 rounded-premium-lg bg-white border border-[#1B2450]/6 hover:border-[#FF5A1F] hover:shadow-[0_20px_45px_rgba(255,90,31,0.12)] hover:-translate-y-1.5 transition-all duration-500 h-full cursor-pointer text-left block"
                  >
                    <div>
                      {/* Cover image container */}
                      <div className="overflow-hidden rounded-xl border border-[#1B2450]/5 bg-[#F7F7F8] aspect-[16/10] flex items-center justify-center mb-6 relative">
                        <img
                          src={card.coverImage}
                          alt={card.name}
                          className="w-full h-full object-cover transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                        />
                      </div>
                      {/* Meta */}
                      <h3 className="font-display font-bold text-lg text-[#1B2450] uppercase tracking-wide group-hover:text-[#FF5A1F] transition-colors duration-300 mb-1">
                        {card.name}
                      </h3>
                      <div className="text-[#FF5A1F] font-sans font-medium text-[9px] uppercase tracking-widest mb-4">
                        Explore Project &rarr;
                      </div>
                    </div>
                  </motion.a>
                );
              }

              // Active card without click action (e.g. Codexi)
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="group relative flex flex-col justify-between p-6 rounded-premium-lg bg-white border border-[#1B2450]/6 h-full text-left select-none"
                >
                  <div>
                    {/* Cover image container */}
                    <div className="overflow-hidden rounded-xl border border-[#1B2450]/5 bg-[#F7F7F8] aspect-[16/10] flex items-center justify-center mb-6 relative">
                      <img
                        src={card.coverImage}
                        alt={card.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Meta */}
                    <h3 className="font-display font-bold text-lg text-[#1B2450] uppercase tracking-wide mb-1">
                      {card.name}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
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

export default LogoBrandingPortfolio;
