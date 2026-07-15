import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card } from '../ui/Card';

interface CounterProps {
  target: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!isInView) return;
    
    const start = 0;
    const end = target;
    const duration = 1500; // ms
    const increment = end / (duration / 16); // ~60fps
    
    let current = start;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-display font-bold text-5xl md:text-6xl text-primary tracking-tight block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:text-accent">
      {count}
      {suffix}
    </span>
  );
};

export const Stats: React.FC = () => {
  const statsList = [
    { target: 200, suffix: '+', label: 'Projects Completed', description: 'Tailored strategy & design' },
    { target: 170, suffix: '+', label: 'Happy Clients', description: 'Across branding and print' },
    { target: 2, suffix: '+', label: 'Years Experience', description: 'Technical design expertise' },
    { target: 10, suffix: '+', label: 'Creative Services', description: 'Complete branding solutions' },
  ];

  return (
    <section className="py-24 bg-bg-light relative z-20 border-b border-glass-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsList.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card
                variant="outline"
                hoverEffect="none"
                className="h-full flex flex-col justify-between border-glass-border hover:border-accent/30 shadow-premium-sm hover:shadow-[0_16px_48px_rgba(255,81,0,0.06)] hover:-translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group bg-bg-gray/20"
              >
                <div className="flex flex-col gap-2">
                  <Counter target={stat.target} suffix={stat.suffix} />
                  <span className="font-display font-semibold text-xs tracking-widest text-primary uppercase mt-4 transition-colors duration-300 group-hover:text-accent">
                    {stat.label}
                  </span>
                </div>
                <p className="text-[11px] font-sans font-medium text-text-secondary mt-2">
                  {stat.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Stats;
