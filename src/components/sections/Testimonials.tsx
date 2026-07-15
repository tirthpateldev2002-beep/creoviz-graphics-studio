import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent, CardFooter } from '../ui/Card';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      author: 'Deepia Raj',
      initials: 'DR',
      role: "Founder, Deep's Beauty & Deep's Skin Clinic",
      text: 'Creoviz delivered exactly what our brand needed. From custom business cards and premium paper bags to logo design and clinic branding, every detail was handled professionally. The final print quality exceeded our expectations and gave our brand a polished identity.',
      rating: 5,
    },
    {
      author: 'Sanjay Patel',
      initials: 'SP',
      role: 'Founder, Maa Shakti Packaging',
      text: 'Working with Creoviz was a smooth experience from start to finish. They designed our complete brand identity, business stationery, and marketing materials with great attention to detail. The designs perfectly represent our packaging business and have strengthened our professional image.',
      rating: 5,
    },
    {
      author: 'Jaymix Patel',
      initials: 'JP',
      role: 'Founder, Sunelite Pharma',
      text: 'Creoviz created a premium identity for our pharmaceutical brand with outstanding creativity. The logo, brand guidelines, brochure, stationery, and marketing materials were all designed with precision. We truly appreciate their quality, commitment, and professional approach.',
      rating: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
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
    <section className="py-24 bg-bg-light relative z-20 border-b border-glass-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <span className="font-sans text-[10px] uppercase tracking-widest text-accent font-bold mb-2 block">
            Endorsements
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tight text-primary">
            Client Voices
          </h2>
          <p className="text-text-secondary font-sans font-light text-sm max-w-md mx-auto mt-4">
            Trusted by ambitious local and regional businesses to craft memorable brand footprints.
          </p>
        </div>

        {/* Reviews Grid with staggered entrance */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {reviews.map((review, idx) => (
            <motion.div variants={itemVariants} key={idx} className="h-full">
              <Card
                variant="outline"
                hoverEffect="none"
                className="h-full flex flex-col justify-between border-glass-border hover:border-accent/30 hover:bg-gradient-to-br hover:from-white hover:to-accent/[0.005] shadow-premium-sm hover:shadow-[0_16px_48px_rgba(255,81,0,0.06)] hover:-translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group bg-bg-gray/20 relative"
              >
                {/* Decorative Quote Icon */}
                <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/[0.04] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-accent/[0.08] group-hover:scale-110 group-hover:rotate-12 pointer-events-none" />

                <div>
                  <CardHeader className="flex items-center justify-between mb-4">
                    {/* Stars */}
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-accent stroke-accent" />
                      ))}
                    </div>
                    {/* Google G Logo Placeholder */}
                    <span className="text-[10px] font-mono text-text-muted font-bold tracking-widest">
                      GOOGLE REVIEW
                    </span>
                  </CardHeader>
                  
                  <CardContent className="text-text-secondary font-sans font-light text-sm leading-relaxed italic mb-6 pr-4">
                    "{review.text}"
                  </CardContent>
                </div>

                <CardFooter className="mt-auto pt-4 border-t border-glass-border/40 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Initials Avatar scaling on hover */}
                    <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center font-display font-bold text-xs text-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110">
                      {review.initials}
                    </div>
                    
                    <div className="flex flex-col">
                      <span className="font-display font-semibold text-xs text-primary uppercase transition-colors duration-300 group-hover:text-accent">
                        {review.author}
                      </span>
                      <span className="text-[10px] font-sans font-medium text-text-muted uppercase tracking-wider mt-0.5">
                        {review.role}
                      </span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Testimonials;
