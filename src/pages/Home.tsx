import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Marquee } from '../components/sections/Marquee';
import { Stats } from '../components/sections/Stats';
import { WhatWeDo } from '../components/sections/WhatWeDo';

import { Process } from '../components/sections/Process';
import { Testimonials } from '../components/sections/Testimonials';
import { FAQ } from '../components/sections/FAQ';
import { CTA } from '../components/sections/CTA';

export const Home: React.FC = () => {
  return (
    <div className="relative bg-bg-light">
      {/* Home Hero Section */}
      <Hero />

      {/* Infinite Scrolling Ticker */}
      <Marquee />

      {/* Numerical Metrics Countups */}
      <Stats />

      {/* Brand Core Offerings */}
      <WhatWeDo />

      {/* Scrolling timeline methodology */}
      <Process />

      {/* Testimonials google review style grid */}
      <Testimonials />

      {/* Accordion FAQ questions */}
      <FAQ />

      {/* Final Inquiry triggers CTA */}
      <CTA />
    </div>
  );
};
export default Home;
