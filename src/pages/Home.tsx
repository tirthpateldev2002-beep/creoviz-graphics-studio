import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Marquee } from '../components/sections/Marquee';
import { Stats } from '../components/sections/Stats';
import { WhatWeDo } from '../components/sections/WhatWeDo';

import { Process } from '../components/sections/Process';
import { Testimonials } from '../components/sections/Testimonials';
import { FAQ } from '../components/sections/FAQ';
import { CTA } from '../components/sections/CTA';
import { SEO } from '../components/common/SEO';

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://creoviz-graphics-studio.vercel.app/#organization",
  "name": "Creoviz Graphics Studio",
  "url": "https://creoviz-graphics-studio.vercel.app",
  "logo": {
    "@type": "ImageObject",
    "url": "https://creoviz-graphics-studio.vercel.app/favicon.svg",
    "caption": "Creoviz Graphics Studio Logo"
  },
  "image": "https://creoviz-graphics-studio.vercel.app/brand-images/Creoviz%20Graphic%20Studio%20Business%20Card.png",
  "description": "Creoviz is a premium creative agency specializing in logo design, brand identity systems, retail packaging box dielines, and high-performance digital interfaces.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bharuch",
    "addressRegion": "Gujarat",
    "addressCountry": "India"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-94090-73599",
    "contactType": "sales",
    "email": "creovizgraphic30@gmail.com",
    "availableLanguage": ["English", "Hindi", "Gujarati"]
  },
  "sameAs": [
    "https://www.instagram.com/creoviz_graphics_studio/",
    "https://www.behance.net/creovizgraphics30",
    "https://www.linkedin.com/in/tirth-patel-56030627a"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://creoviz-graphics-studio.vercel.app/#website",
  "url": "https://creoviz-graphics-studio.vercel.app",
  "name": "Creoviz Graphics Studio",
  "description": "Premium Brand Identity, Retail Packaging, and Modern Website Design",
  "publisher": {
    "@id": "https://creoviz-graphics-studio.vercel.app/#organization"
  }
};

export const Home: React.FC = () => {
  return (
    <div className="relative bg-bg-light">
      <SEO
        title="Creoviz Graphics Studio | Premium Brand Identity & Packaging Design"
        description="Creoviz is a premium creative agency specializing in logo design, brand identity systems, retail packaging box dielines, and high-performance digital interfaces."
        path="/"
        schema={[organizationSchema, websiteSchema]}
      />
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
