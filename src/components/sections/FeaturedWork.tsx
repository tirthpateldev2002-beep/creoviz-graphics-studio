import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const FeaturedWork: React.FC = () => {
  const projects = [
    {
      id: 1,
      category: 'Print & Packaging',
      gradient: 'linear-gradient(135deg, #1C2541 0%, #1B2450 100%)',
      title: "Deep's Beauty",
      link: '/work/project/deeps-beauty',
    },
    {
      id: 2,
      category: 'Brand Identity System',
      gradient: 'linear-gradient(135deg, #FF5A1F 0%, #E54C12 100%)',
      title: 'Logo & Branding',
      link: '/work/logo-branding',
    },
  ];

  return (
    <section className="py-24 bg-bg-light relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <span className="font-sans text-[10px] uppercase tracking-widest text-accent font-bold mb-2 block">
              Curated Showcase
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tight text-primary leading-none">
              Featured Work
            </h2>
          </div>
          <p className="text-text-secondary font-sans font-light text-base leading-relaxed max-w-sm">
            A precise selection of identity systems, premium packaging boxes, and digital interfaces crafted for ambitious brands.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {projects.map((project, idx) => (
            <Link
              to={project.link}
              key={project.id}
              className="group block relative cursor-pointer"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full"
                data-cursor="VIEW"
              >
                {/* Aspect Ratio Box with zoom and lift */}
                <div className="relative aspect-[16/10] rounded-premium-lg overflow-hidden border border-glass-border shadow-premium-sm bg-bg-gray transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2 group-hover:shadow-premium-lg">
                  {/* Colored background fill representation */}
                  <div
                    className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    style={{ background: project.gradient }}
                  />

                  {/* Subtle dark pattern gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-60" />

                  {/* Abstract brand pattern overlay to look like high-end packaging design */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

                  {/* Floating details inside thumbnail */}
                  <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end text-bg-light">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-sans font-bold tracking-widest uppercase opacity-75">
                        {project.category}
                      </span>
                      <h3 className="font-display font-semibold text-lg md:text-xl uppercase tracking-wider">
                        {project.title}
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-bg-light transition-all duration-500 group-hover:bg-accent group-hover:border-accent group-hover:text-bg-light group-hover:rotate-45">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Section Footer */}
        <div className="flex justify-center">
          <Button
            href="/work"
            variant="outline"
            size="lg"
            icon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            View All Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
