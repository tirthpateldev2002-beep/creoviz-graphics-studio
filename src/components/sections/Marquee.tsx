import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    'Brand Identity',
    'Logo Design',
    'Packaging Design',
    'Website Design',
    'UI Design',
    'Social Media',
    'Print Solutions',
  ];

  return (
    <section className="py-8 bg-accent border-y border-accent/20 overflow-hidden select-none relative z-20">
      <div className="flex w-max group">
        {/* First marquee list */}
        <div className="flex gap-16 pr-16 animate-marquee group-hover:[animation-play-state:paused]">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 whitespace-nowrap text-white">
              <span className="font-display text-xl">✦</span>
              <span className="font-display font-semibold text-sm md:text-base tracking-widest uppercase">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Duplicate list for seamless loop */}
        <div className="flex gap-16 pr-16 animate-marquee group-hover:[animation-play-state:paused]" aria-hidden="true">
          {items.map((item, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-6 whitespace-nowrap text-white">
              <span className="font-display text-xl">✦</span>
              <span className="font-display font-semibold text-sm md:text-base tracking-widest uppercase">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Marquee;
