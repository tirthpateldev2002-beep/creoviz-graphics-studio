import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

export const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      q: 'What core services does Creoviz Graphics Studio offer?',
      a: 'We specialize in custom Brand Identity Design, Logo Marks, Retail Packaging Box Design, Custom Website Frontends, User Interface (UI) Design, and Social Media Graphics. We cover both digital assets and high-fidelity print specifications.',
    },
    {
      q: 'Do you provide print solutions or just digital designs?',
      a: 'We provide comprehensive print-ready files and pack specifications. We guide you through the choosing of cardstocks, box structures, embossings, and foil-stamp specs to ensure the final physical box matches the premium mockup.',
    },
    {
      q: 'How long does a brand identity project typically take?',
      a: 'A complete branding identity project (discovery, logo creation, packaging samples, and style handbook) typically takes 3 to 6 weeks. This timeline ensures meticulous alignment of typographic grids and color balance.',
    },
    {
      q: 'Can you help redesign our existing packaging line?',
      a: 'Yes. We routinely help established companies modernize their box structures, packaging layout structures, and logo systems while retaining brand recognition.',
    },
    {
      q: 'Where is your studio located and do you work remotely?',
      a: 'Our studio is based in Bharuch, Gujarat, India. While we love working with local Gujarati enterprises, we operate fully digitally and collaborate with ambitious clients worldwide.',
    },
  ];

  return (
    <section className="py-24 bg-bg-gray relative z-20 border-t border-glass-border">
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="font-sans text-[10px] uppercase tracking-widest text-accent font-bold mb-2 block">
            Faq
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tight text-primary">
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
                className="border border-glass-border rounded-premium-md bg-white overflow-hidden transition-all duration-300 hover:border-accent/25"
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                >
                  <span className="font-display font-semibold text-sm md:text-base text-primary uppercase tracking-wide">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 text-xs md:text-sm font-sans font-light leading-relaxed text-text-secondary border-t border-glass-border/30 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default FAQ;
