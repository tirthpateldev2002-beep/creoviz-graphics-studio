import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Marquee } from '../components/sections/Marquee';
import { SEO } from '../components/common/SEO';
import { LazySection } from '../components/common/LazySection';
import { Stats } from '../components/sections/Stats';
import { WhatWeDo } from '../components/sections/WhatWeDo';
import { Process } from '../components/sections/Process';
import { Testimonials } from '../components/sections/Testimonials';
import { FAQ } from '../components/sections/FAQ';
import { CTA } from '../components/sections/CTA';

const homeSchemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://creoviz-graphics-studio.vercel.app/#organization",
      "name": "Creoviz Graphics Studio",
      "url": "https://creoviz-graphics-studio.vercel.app",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://creoviz-graphics-studio.vercel.app/#logo",
        "url": "https://creoviz-graphics-studio.vercel.app/favicon.svg",
        "caption": "Creoviz Graphics Studio Logo"
      },
      "image": "https://creoviz-graphics-studio.vercel.app/brand-images/Creoviz%20Graphic%20Studio%20Business%20Card.webp",
      "description": "We help businesses build memorable brands through logo design, brand identity, packaging, print media, UI design, website design and social media creatives.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bharuch",
        "addressRegion": "Gujarat",
        "addressCountry": "India"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 94090 73599",
        "contactType": "sales",
        "email": "creovizgraphics30@gmail.com",
        "availableLanguage": ["English", "Hindi", "Gujarati"]
      },
      "sameAs": [
        "https://www.instagram.com/creoviz_graphics_studio/",
        "https://www.linkedin.com/in/tirth-patel-56030627a",
        "https://maps.google.com/?cid=creoviz_google_business_profile_placeholder"
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://creoviz-graphics-studio.vercel.app/#localbusiness",
      "name": "Creoviz Graphics Studio",
      "url": "https://creoviz-graphics-studio.vercel.app",
      "logo": "https://creoviz-graphics-studio.vercel.app/favicon.svg",
      "image": "https://creoviz-graphics-studio.vercel.app/brand-images/Creoviz%20Graphic%20Studio%20Business%20Card.webp",
      "telephone": "+91 94090 73599",
      "email": "creovizgraphics30@gmail.com",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bharuch",
        "addressLocality": "Bharuch",
        "addressRegion": "Gujarat",
        "addressCountry": "India"
      },
      "parentOrganization": {
        "@id": "https://creoviz-graphics-studio.vercel.app/#organization"
      },
      "sameAs": [
        "https://www.instagram.com/creoviz_graphics_studio/",
        "https://www.linkedin.com/in/tirth-patel-56030627a",
        "https://maps.google.com/?cid=creoviz_google_business_profile_placeholder"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://creoviz-graphics-studio.vercel.app/#website",
      "url": "https://creoviz-graphics-studio.vercel.app",
      "name": "Creoviz Graphics Studio",
      "description": "We help businesses build memorable brands through logo design, brand identity, packaging, print media, UI design, website design and social media creatives.",
      "publisher": {
        "@id": "https://creoviz-graphics-studio.vercel.app/#organization"
      }
    }
  ]
};

export const Home: React.FC = () => {
  return (
    <div className="relative bg-bg-light">
      <SEO
        title="Creoviz Graphics Studio | Premium Branding & Graphic Design Agency"
        description="We help businesses build memorable brands through logo design, brand identity, packaging, print media, UI design, website design and social media creatives."
        path="/"
        schema={homeSchemaGraph}
      />
      {/* Home Hero Section */}
      <Hero />

      {/* Infinite Scrolling Ticker */}
      <Marquee />

      {/* Numerical Metrics Countups */}
      <LazySection placeholderHeight="min-h-[200px]">
        <Stats />
      </LazySection>

      {/* Brand Core Offerings */}
      <LazySection placeholderHeight="min-h-[400px]">
        <WhatWeDo />
      </LazySection>

      {/* Scrolling timeline methodology */}
      <LazySection placeholderHeight="min-h-[500px]">
        <Process />
      </LazySection>

      {/* Testimonials google review style grid */}
      <LazySection placeholderHeight="min-h-[400px]">
        <Testimonials />
      </LazySection>

      {/* Accordion FAQ questions */}
      <LazySection placeholderHeight="min-h-[300px]">
        <FAQ />
      </LazySection>

      {/* Final Inquiry triggers CTA */}
      <LazySection placeholderHeight="min-h-[300px]">
        <CTA />
      </LazySection>
    </div>
  );
};
export default Home;
