import React, { lazy, Suspense } from 'react';
import { Hero } from '../components/sections/Hero';
import { Marquee } from '../components/sections/Marquee';
import { SEO } from '../components/common/SEO';
import { LazySection } from '../components/common/LazySection';

// Dynamic imports for below-the-fold components to reduce initial JS bundle size
const Stats = lazy(() => import('../components/sections/Stats').then(m => ({ default: m.Stats })));
const WhatWeDo = lazy(() => import('../components/sections/WhatWeDo').then(m => ({ default: m.WhatWeDo })));
const Process = lazy(() => import('../components/sections/Process').then(m => ({ default: m.Process })));
const Testimonials = lazy(() => import('../components/sections/Testimonials').then(m => ({ default: m.Testimonials })));
const FAQ = lazy(() => import('../components/sections/FAQ').then(m => ({ default: m.FAQ })));
const CTA = lazy(() => import('../components/sections/CTA').then(m => ({ default: m.CTA })));

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
      <Suspense fallback={<div className="min-h-[200px]" />}>
        <LazySection placeholderHeight="min-h-[200px]">
          <Stats />
        </LazySection>
      </Suspense>

      {/* Brand Core Offerings */}
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <LazySection placeholderHeight="min-h-[400px]">
          <WhatWeDo />
        </LazySection>
      </Suspense>

      {/* Scrolling timeline methodology */}
      <Suspense fallback={<div className="min-h-[500px]" />}>
        <LazySection placeholderHeight="min-h-[500px]">
          <Process />
        </LazySection>
      </Suspense>

      {/* Testimonials google review style grid */}
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <LazySection placeholderHeight="min-h-[400px]">
          <Testimonials />
        </LazySection>
      </Suspense>

      {/* Accordion FAQ questions */}
      <Suspense fallback={<div className="min-h-[300px]" />}>
        <LazySection placeholderHeight="min-h-[300px]">
          <FAQ />
        </LazySection>
      </Suspense>

      {/* Final Inquiry triggers CTA */}
      <Suspense fallback={<div className="min-h-[300px]" />}>
        <LazySection placeholderHeight="min-h-[300px]">
          <CTA />
        </LazySection>
      </Suspense>
    </div>
  );
};
export default Home;
