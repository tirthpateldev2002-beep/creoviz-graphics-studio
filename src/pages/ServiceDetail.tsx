import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import logoBrandImg from '../assets/logo-brand-identity.jpg';
import graphicDesignImg from '../assets/graphic-design.png';
import printPackagingImg from '../assets/print-packaging.jpg';
import linkedinBrandingImg from '../assets/linkedin-branding.png';
import businessEssentialsImg from '../assets/business-essentials.jpg';
import googleBusinessImg from '../assets/google-business-profile.jpg';
import googleAdsImg from '../assets/google-ads.png';
import metaAdsImg from '../assets/meta-ads.png';
import socialMediaImg from '../assets/social-media-design.jpg';
import websiteDesignImg from '../assets/website-design.png';
import uiDesignImg from '../assets/ui-design.png';
import videoEditingImg from '../assets/video-editing.jpg';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  ChevronDown,
  Palette,
  MessageSquare,
  Compass,
  HelpCircle
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { CTA } from '../components/sections/CTA';

// Data Interfaces
interface ServiceContent {
  title: string;
  category: string;
  heroDesc: string;
  image: string;
  isComingSoon?: boolean;
  overviewText: string;
  overviewHighlight: string;
  benefits: string[];
  whatsIncluded: {
    title: string;
    desc: string;
  }[];
  workflow: {
    title: string;
    desc: string;
  }[];
  relatedProjects: {
    name: string;
    category: string;
    description: string;
    services: string[];
    mockupSvg: React.ReactNode;
  }[];
  faqs: {
    q: string;
    a: string;
  }[];
}

// Map of all service details
const SERVICES_DATA: Record<string, ServiceContent> = {
  'logo-brand-identity': {
    title: 'Logo & Brand Identity',
    category: 'Branding & Design',
    heroDesc: 'Establish a strong, recognizable market presence with custom logomarks, typography, and cohesive brand styling guidelines.',
    image: logoBrandImg,
    overviewText: 'A brand is more than just a logo—it is the entire emotional and visual relationship you have with your audience. We design thoughtful, cohesive, and scalable brand identities that convey your unique value proposition and make an immediate impact on your target market.',
    overviewHighlight: 'Building a consistent identity builds market trust. We define guidelines so your business stands out across all consumer touchpoints.',
    benefits: [
      'Memorable custom logo mark customized for your target market.',
      'Professional typography selection that communicates brand character.',
      'Harmonious color schemes mapped for digital and print production.',
      'Consistent style guidelines ensuring clear team implementation.'
    ],
    whatsIncluded: [
      { title: 'Primary Brand Logo', desc: 'The signature visual identifier of your business, optimized for all scales and placements.' },
      { title: 'Secondary & Submark Logos', desc: 'Flexible layouts (horizontal, vertical, compact) designed for diverse platforms.' },
      { title: 'Brand Color Palette', desc: 'Tailored primary, secondary, and neutral colors with precise HEX, RGB, and CMYK parameters.' },
      { title: 'Typography System', desc: 'Curated hierarchy of display and body fonts that elevate legibility and style.' },
      { title: 'Brand Book & Guidelines', desc: 'A complete styling rulebook showing usage rules, spacing guides, and design limits.' },
      { title: 'Master Production Assets', desc: 'High-fidelity vector and print-ready files (AI, SVG, PDF, PNG) for immediate launch.' }
    ],
    workflow: [
      { title: 'Discovery & Brief', desc: 'Researching industry trends, target demographics, and outlining the core creative parameters.' },
      { title: 'Planning & Concepting', desc: 'Building visual mood boards, defining typography scales, and identifying styling guidelines.' },
      { title: 'Design & Refinement', desc: 'Crafting bespoke vectors using geometric grids, testing color contrasts, and refining line weights.' },
      { title: 'Delivery & Asset Pack', desc: 'Preparing final high-fidelity source vectors, print specs, and exporting custom formats.' }
    ],
    relatedProjects: [
      {
        name: 'Krish Power',
        category: 'Industrial Identity System',
        description: 'A robust, high-performance brand identity system created for a leading electrical transformer and transmission manufacturer.',
        services: ['Logo Design', 'Visual Identity', 'Corporate Stationery', 'Guidelines'],
        mockupSvg: (
          <svg viewBox="0 0 320 200" className="w-4/5 h-auto">
            <rect x="10" y="20" width="300" height="160" rx="10" fill="#141B3B" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <path d="M 10 90 L 310 90 M 10 110 L 310 110" stroke="rgba(255,90,31,0.04)" strokeWidth="0.5" />
            <path d="M 60 20 L 60 180 M 260 20 L 260 180" stroke="rgba(255,90,31,0.04)" strokeWidth="0.5" />
            <g transform="translate(130, 45)">
              <polygon points="30,0 60,17 60,52 30,70 0,52 0,17" fill="none" stroke="#FF5A1F" strokeWidth="2.5" />
              <path d="M 33 15 L 18 38 L 30 38 L 27 55 L 42 32 L 30 32 Z" fill="#FF5A1F" />
            </g>
            <text x="160" y="145" textAnchor="middle" fontFamily="Cabinet Grotesk" fontWeight="bold" fontSize="16" fill="#FFFFFF" letterSpacing="3">KRISH POWER</text>
            <text x="160" y="160" textAnchor="middle" fontFamily="Plus Jakarta Sans" fontSize="6" fill="#FF5A1F" letterSpacing="1.5">ELECTRICAL POWER SYSTEM</text>
          </svg>
        )
      },
      {
        name: "Deep's Beauty",
        category: 'Elegant Retail Brand',
        description: 'A modern monogram and packaging palette designed for a high-end luxury cosmetics boutique in New York, USA.',
        services: ['Logo Mark', 'Brand Stationery', 'Box Print Layouts'],
        mockupSvg: (
          <svg viewBox="0 0 320 200" className="w-4/5 h-auto">
            <rect x="20" y="20" width="280" height="160" rx="8" fill="#F7F7F8" stroke="rgba(27,36,80,0.08)" strokeWidth="1.5" />
            <circle cx="160" cy="90" r="50" fill="none" stroke="rgba(27,36,80,0.06)" strokeWidth="1" />
            <circle cx="160" cy="90" r="40" fill="none" stroke="#FF5A1F" strokeWidth="0.75" opacity="0.4" />
            <circle cx="160" cy="90" r="28" fill="#1B2450" />
            <text x="160" y="96" textAnchor="middle" fontFamily="Cabinet Grotesk" fontWeight="bold" fontSize="22" fill="#FFFFFF">D</text>
            <text x="160" y="155" textAnchor="middle" fontFamily="Cabinet Grotesk" fontWeight="semibold" fontSize="11" fill="#1B2450" letterSpacing="2">DEEP'S BEAUTY</text>
            <text x="160" y="168" textAnchor="middle" fontFamily="Plus Jakarta Sans" fontSize="5" fill="#FF5A1F" letterSpacing="1">NEW YORK, USA</text>
          </svg>
        )
      }
    ],
    faqs: [
      { q: 'How long does a brand identity project take?', a: 'A standard logo and brand identity package typically requires 2 to 3 weeks. This includes initial analysis, concept iteration, styling guide development, and final print testing.' },
      { q: 'What files will I receive upon project completion?', a: 'You will receive high-resolution vector files (AI, EPS, SVG) that scale infinitely without loss of detail, as well as production-ready PDFs and background-free PNG/JPG assets.' },
      { q: 'Can you work on updating our existing company logo?', a: 'Yes. We provide complete brand refreshes where we preserve your existing recognition and design value while modernizing typography, ratios, and layout elements.' }
    ]
  },
  'graphic-design': {
    title: 'Graphic Design',
    category: 'Branding & Design',
    heroDesc: 'High-impact visual communication, marketing collaterals, and digital assets designed to captivate your audience.',
    image: graphicDesignImg,
    overviewText: 'We convert complex corporate messages into engaging, high-end visual concepts. From marketing flyers and banner advertisements to digital assets and vector illustrations, we apply strict layout grids, grid alignments, and color dynamics to make your design stand out.',
    overviewHighlight: 'Engage your followers and build visual authority. We construct layouts designed for high visual retention across all screens.',
    benefits: [
      'Asymmetrical layouts designed to capture attention immediately.',
      'Pixel-perfect alignment grids across digital and print boards.',
      'Cohesive campaign visuals keeping your message unified.',
      'Flexible layouts designed for specific social and ad platforms.'
    ],
    whatsIncluded: [
      { title: 'Marketing Materials', desc: 'Eye-catching brochures, leaflets, posters, and flyers designed to drive customer inquiries.' },
      { title: 'Custom Vector Graphics', desc: 'Bespoke icon sets, graphics, and visual elements customized for your business.' },
      { title: 'Digital Advertising Assets', desc: 'Fully optimized display banner ad configurations (Google, Meta, LinkedIn) that build clicks.' },
      { title: 'Corporate Reports', desc: 'Multi-page document layouts, catalogs, and PDF briefs displaying clean content setups.' },
      { title: 'Social Banner Graphics', desc: 'Premium feed backdrops, profile covers, and custom styling patterns for social feeds.' },
      { title: 'Source & Vector Files', desc: 'Fully organized source materials (PSD, AI, PDF) with appropriate font setups and layers.' }
    ],
    workflow: [
      { title: 'Creative Briefing', desc: 'Detailing layout specifications, margins, platforms, brand rules, and core copy objectives.' },
      { title: 'Layout Boarding', desc: 'Building spacing drafts, selecting typography scales, and placing copy hierarchies.' },
      { title: 'Graphic Rendering', desc: 'Applying vector artwork, testing colors, and refining alignment grids.' },
      { title: 'Handoff & Output', desc: 'Packaging layered assets, print files, and optimized web-ready PNG/JPG assets.' }
    ],
    relatedProjects: [
      {
        name: 'Sayaji Laminate',
        category: 'Corporate Branding System',
        description: 'A minimalist visual identity and tactile catalog architecture crafted for a high-end interior laminate supplier.',
        services: ['Logo & Marks', 'Catalogue Layouts', 'Label Design', 'Visual Systems'],
        mockupSvg: (
          <svg viewBox="0 0 320 200" className="w-4/5 h-auto">
            <rect x="20" y="10" width="280" height="180" rx="8" fill="#F7F7F8" stroke="rgba(27,36,80,0.08)" strokeWidth="1.5" />
            <rect x="35" y="25" width="250" height="150" fill="none" stroke="#1B2450" strokeWidth="0.5" opacity="0.1" />
            <rect x="35" y="25" width="110" height="150" fill="#E2E8F0" />
            <path d="M 35 125 C 60 70, 90 150, 145 100" stroke="#CBD5E1" strokeWidth="2" fill="none" opacity="0.8" />
            <path d="M 35 65 C 70 40, 110 95, 145 55" stroke="#CBD5E1" strokeWidth="1" fill="none" opacity="0.5" />
            <text x="165" y="55" fontFamily="Cabinet Grotesk" fontWeight="bold" fontSize="14" fill="#1B2450" letterSpacing="1">SAYAJI</text>
            <text x="165" y="70" fontFamily="Cabinet Grotesk" fontWeight="normal" fontSize="10" fill="#888888" letterSpacing="2">LAMINATES</text>
            <line x1="165" y1="85" x2="260" y2="85" stroke="#FF5A1F" strokeWidth="1.5" />
            <text x="165" y="115" fontFamily="Plus Jakarta Sans" fontSize="6" fill="#555555" leading-relaxed="true">
              <tspan x="165" dy="0">TACTILE TEXTURES &amp;</tspan>
              <tspan x="165" dy="8">PREMIUM SURFACES</tspan>
              <tspan x="165" dy="8">STUDIO EDITION 2026</tspan>
            </text>
          </svg>
        )
      },
      {
        name: 'Ram Saw Mill',
        category: 'Rustic Heritage Branding',
        description: 'An organic, heritage-focused branding project combining traditional woodworking details with modern typography guidelines.',
        services: ['Wordmark Logo', 'Timber Mark', 'Packaging Specs', 'Style Manual'],
        mockupSvg: (
          <svg viewBox="0 0 320 200" className="w-4/5 h-auto">
            <rect x="30" y="20" width="260" height="160" rx="12" fill="#EADBC8" stroke="#1B2450" strokeWidth="2" />
            <circle cx="160" cy="100" r="72" fill="none" stroke="rgba(27,36,80,0.06)" strokeWidth="2" />
            <circle cx="160" cy="100" r="62" fill="none" stroke="rgba(27,36,80,0.06)" strokeWidth="1" />
            <rect x="38" y="28" width="244" height="144" rx="8" fill="none" stroke="#FF5A1F" strokeWidth="0.75" />
            <g transform="translate(145, 45)">
              <polygon points="15,0 30,26 0,26" fill="#1B2450" />
              <line x1="15" y1="0" x2="15" y2="30" stroke="#FF5A1F" strokeWidth="1.5" />
            </g>
            <text x="160" y="110" textAnchor="middle" fontFamily="Cabinet Grotesk" fontWeight="semibold" fontSize="16" fill="#1B2450" letterSpacing="4">RAM SAW MILL</text>
            <line x1="80" y1="122" x2="240" y2="122" stroke="#1B2450" strokeWidth="1" />
            <text x="160" y="138" textAnchor="middle" fontFamily="Plus Jakarta Sans" fontWeight="bold" fontSize="6" fill="#FF5A1F" letterSpacing="2">HERITAGE WOODWORKS</text>
            <text x="160" y="148" textAnchor="middle" fontFamily="Plus Jakarta Sans" fontSize="5" fill="#888888" letterSpacing="1">EST. 1988</text>
          </svg>
        )
      }
    ],
    faqs: [
      { q: 'Can you work with our existing brand guidelines?', a: 'Yes, we are highly experienced in aligning new visual layouts directly with established brand specs, including typography sizes, spacing grids, and specific brand colors.' },
      { q: 'What is the turnaround time for a standard flyer or brochure?', a: 'Simple banner or marketing flyer designs are typically ready in 3 to 4 business days. Larger multi-page catalog and brochure layouts take between 5 to 7 days.' },
      { q: 'Do you provide copy writing for the design files?', a: 'We optimize typographic layout hierarchy and formatting for best readability, but the primary copy/text needs to be supplied by you.' }
    ]
  },
  'print-packaging': {
    title: 'Print & Packaging Solutions',
    category: 'Branding & Design',
    heroDesc: 'Make an unforgettable impression on retail shelves with luxury custom boxes, product labels, and custom structural designs.',
    image: printPackagingImg,
    overviewText: 'We create premium, retail-ready packaging design. By balancing visual structure, dieline parameters, and typography hierarchy, we build custom product boxes and labels that highlight your brand, improve unpackaging experiences, and look beautiful on store shelves.',
    overviewHighlight: 'Premium packaging directly increases product perceived value. We construct specs to look elegant, modern, and luxury.',
    benefits: [
      'Custom box layouts built on exact structural dielines.',
      'Unboxing layouts constructed for consumer sensory delight.',
      'High-contrast graphics that stand out on retail shelves.',
      'Print-ready paths configured for foil and spot UV embossing.'
    ],
    whatsIncluded: [
      { title: 'Structural Dieline Planning', desc: 'Precision templates mapping folds, cutlines, glue spots, and bleed paths for printing.' },
      { title: 'Product Label Design', desc: 'Front, back, and wrapping labels displaying clear typographic hierarchy and ingredient tables.' },
      { title: 'Premium Retail Box Design', desc: 'Full box panels customized with brand colors, typography alignment, and clean patterns.' },
      { title: 'Mockup Visualizations', desc: 'Professional mockups that showcase how your final printed packaging and branding materials will look in real-world applications.' },
      { title: 'Material & Coating Specs', desc: 'Guidance on cardstocks, soft-touch laminates, metallic foil stamp, and debossing.' },
      { title: 'Production Source Files', desc: 'Layered vector files (AI, PDF) configured with correct spot colors and bleed margins.' }
    ],
    workflow: [
      { title: 'Discovery & Briefing', desc: 'Analyzing the physical container specs, checking print templates, and detailing box layout bounds.' },
      { title: 'Planning & Concepting', desc: 'Drafting box layout lines, setting fold parameters, and aligning typographic margins.' },
      { title: 'Design & Rendering', desc: 'Creating box graphics, rendering 3D digital mockups, and reviewing readability.' },
      { title: 'Delivery & Asset Pack', desc: 'Packaging high-res vectors with custom layer labels, crop marks, and spot color specs.' }
    ],
    relatedProjects: [
      {
        name: 'Ram Saw Mill',
        category: 'Rustic Heritage Branding',
        description: 'An organic, heritage-focused branding project combining traditional woodworking details with modern typography guidelines.',
        services: ['Wordmark Logo', 'Timber Mark', 'Packaging Specs', 'Style Manual'],
        mockupSvg: (
          <svg viewBox="0 0 320 200" className="w-4/5 h-auto">
            <rect x="30" y="20" width="260" height="160" rx="12" fill="#EADBC8" stroke="#1B2450" strokeWidth="2" />
            <rect x="38" y="28" width="244" height="144" rx="8" fill="none" stroke="#FF5A1F" strokeWidth="0.75" />
            <circle cx="160" cy="100" r="50" fill="none" stroke="rgba(27,36,80,0.05)" strokeWidth="1" />
            <text x="160" y="95" textAnchor="middle" fontFamily="Cabinet Grotesk" fontWeight="bold" fontSize="14" fill="#1B2450" letterSpacing="2">PRODUCT PACKAGING</text>
            <text x="160" y="112" textAnchor="middle" fontFamily="Plus Jakarta Sans" fontSize="6" fill="#FF5A1F" letterSpacing="1">WOOD FINISH SPEC</text>
            <line x1="110" y1="122" x2="210" y2="122" stroke="#1B2450" strokeWidth="1" />
          </svg>
        )
      },
      {
        name: 'Sayaji Laminate',
        category: 'Catalogue Layouts',
        description: 'Visual system design and cover mockups displaying luxury surface finishes and textured graphics.',
        services: ['Catalogue Layouts', 'Label Design', 'Visual Systems'],
        mockupSvg: (
          <svg viewBox="0 0 320 200" className="w-4/5 h-auto">
            <rect x="20" y="10" width="280" height="180" rx="8" fill="#1B2450" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <rect x="40" y="40" width="100" height="120" fill="#FF5A1F" opacity="0.8" />
            <text x="160" y="70" fontFamily="Cabinet Grotesk" fontWeight="bold" fontSize="13" fill="#FFFFFF" letterSpacing="1">CATALOGUE</text>
            <text x="160" y="85" fontFamily="Plus Jakarta Sans" fontSize="6" fill="#888888">Tactile Material Showcase</text>
            <path d="M 160 110 L 260 110" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          </svg>
        )
      }
    ],
    faqs: [
      { q: 'Do you print the boxes and labels directly?', a: 'No, we operate strictly as a design studio. We configure standard print dielines and vectors and cooperate directly with your manufacturing partners to make sure prints align perfectly.' },
      { q: 'What is a dieline blueprint?', a: 'A dieline blueprint is a flat 2D layout indicating cutlines, fold markings, and glue strips of a packaging box, showing the printing machine exactly where to crease and slice the paper.' },
      { q: 'Do you provide realistic 3D renderings?', a: 'Yes. Every packaging project includes high-end 3D mockup previews showing textures, colors, and shadows, allowing you to review your package before printing.' }
    ]
  },
  'linkedin-branding': {
    title: 'LinkedIn Branding',
    category: 'Marketing & Business',
    heroDesc: 'Establish professional authority on LinkedIn with curated banner designs, custom carousel templates, and high-converting visual assets.',
    image: linkedinBrandingImg,
    overviewText: 'LinkedIn has evolved into a key commercial platform. We help executives, entrepreneurs, and corporate teams optimize their personal brand by creating custom banner designs, slide carousels, and visual templates that project authority, build trust, and drive high lead conversion.',
    overviewHighlight: 'First impressions matter. We transform profile layout graphics to align with your personal industry positioning.',
    benefits: [
      'Premium banner designs optimized for mobile and desktop screens.',
      'High-conversion slide carousel templates designed to be read easily.',
      'Consistent style grids ensuring clean typography hierarchy.',
      'Visual layouts customized to communicate your professional niche.'
    ],
    whatsIncluded: [
      { title: 'Personalized Profile Banner', desc: 'A desktop and mobile-optimized header design that states your key niche immediately.' },
      { title: 'LinkedIn Carousel Frameworks', desc: 'Multi-slide presentation grids optimized for high click-through rates and easy reading.' },
      { title: 'Editable Social Templates', desc: 'Fully structured templates (usually in Figma) that let you easily type and place images.' },
      { title: 'Personal Style Guide', desc: 'Specific typography scales, spacing grids, and color combinations for your personal brand.' },
      { title: 'Featured Section Asset Covers', desc: 'Cohesive thumbnail covers for your featured documents, case studies, or links.' },
      { title: 'Avatar Background Tuning', desc: 'Cohesive profile photo edits with appropriate brand backdrops for visual styling.' }
    ],
    workflow: [
      { title: 'Brand Alignment', desc: 'Detailing your professional goals, target demographic, styling preferences, and profile structure.' },
      { title: 'Concept Drafting', desc: 'Formulating taglines, reviewing typography combinations, and boarding carousel layouts.' },
      { title: 'Asset Design', desc: 'Designing custom banners, crafting templates, and polishing color contrasts.' },
      { title: 'Handoff & Guide', desc: 'Providing upload-ready assets and sharing interactive links to editable templates.' }
    ],
    relatedProjects: [
      {
        name: 'Sayaji Laminate',
        category: 'Corporate Catalog Presentation',
        description: 'A layout design built for corporate LinkedIn postings, featuring interior laminate textures and brand guides.',
        services: ['Branding Graphics', 'Carousel Design', 'Layout Templates'],
        mockupSvg: (
          <svg viewBox="0 0 320 200" className="w-4/5 h-auto">
            <rect x="15" y="15" width="290" height="170" rx="8" fill="#141B3B" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <rect x="30" y="30" width="130" height="85" fill="#1B2450" />
            <circle cx="95" cy="72" r="20" fill="#FF5A1F" />
            <text x="180" y="60" fontFamily="Cabinet Grotesk" fontWeight="bold" fontSize="12" fill="#FFFFFF">LINKEDIN</text>
            <text x="180" y="75" fontFamily="Plus Jakarta Sans" fontSize="6" fill="#888888">Professional Carousel Slide 01</text>
            <line x1="30" y1="135" x2="290" y2="135" stroke="rgba(255,90,31,0.2)" strokeWidth="1" />
          </svg>
        )
      },
      {
        name: 'Krish Power',
        category: 'Industrial Brand Showcase',
        description: 'LinkedIn banners and technical graphics built to showcase industrial transformer products and engineering projects.',
        services: ['Header Design', 'Social Assets', 'Figma Templates'],
        mockupSvg: (
          <svg viewBox="0 0 320 200" className="w-4/5 h-auto">
            <rect x="15" y="15" width="290" height="170" rx="8" fill="#F7F7F8" stroke="rgba(27,36,80,0.06)" strokeWidth="1" />
            <rect x="25" y="25" width="270" height="60" fill="#1B2450" rx="4" />
            <circle cx="60" cy="55" r="16" fill="#FF5A1F" />
            <text x="90" y="52" fontFamily="Cabinet Grotesk" fontWeight="bold" fontSize="10" fill="#FFFFFF">KRISH POWER</text>
            <text x="90" y="62" fontFamily="Plus Jakarta Sans" fontSize="5" fill="#888888">Leading Transmission System Solutions</text>
            <text x="25" y="115" fontFamily="Plus Jakarta Sans" fontWeight="bold" fontSize="7" fill="#1B2450">POST TEMPLATE</text>
            <rect x="25" y="125" width="70" height="40" fill="#E2E8F0" rx="2" />
            <rect x="105" y="125" width="70" height="40" fill="#E2E8F0" rx="2" />
          </svg>
        )
      }
    ],
    faqs: [
      { q: 'Do we get templates we can edit ourselves?', a: 'Yes. We build the banners and slide templates in Figma, sharing accessible links so you can edit the text and images while keeping the design clean.' },
      { q: 'Why is standard profile branding important on LinkedIn?', a: 'A cohesive visual style establishes credibility. A customized header layout ensures prospective clients or partners see you as an industry authority.' },
      { q: 'How long does a LinkedIn branding project take?', a: 'A complete package (custom profile header, avatar adjustment, and editable slide carousel templates) is typically completed in 5 business days.' }
    ]
  },
  'business-essentials': {
    title: 'Business Essentials',
    category: 'Marketing & Business',
    heroDesc: 'Equip your team with modern professional accessories, company profiles, brochures, presentations, and premium business cards.',
    image: businessEssentialsImg,
    overviewText: 'Premium physical and digital touchpoints build professional credibility. We design elegant stationery packs, company profiles, slide presentation templates, brochures, and custom business cards configured to make your corporate interaction feel high-end.',
    overviewHighlight: 'Unified brand collateral is crucial for corporate alignment. We construct stationary to match your brand style.',
    benefits: [
      'High-fidelity print layouts designed for premium cardstocks.',
      'Sleek company profile structures optimized for high readability.',
      'Custom deck templates built for pitch meetings and reviews.',
      'Unified stationary details ensuring consistent corporate styling.'
    ],
    whatsIncluded: [
      { title: 'Premium Business Cards', desc: 'Modern card layouts (front & back) customized with clear typography and spacing.' },
      { title: 'Company Letterheads & Invoices', desc: 'Elegant letter templates (Word & PDF formats) designed for clean business communications.' },
      { title: 'Company Profile & Brochure Layouts', desc: 'Professional multi-page layout structures presenting your services, values, and case studies.' },
      { title: 'Corporate Slide Presentations', desc: 'Custom slide templates (Figma, PPT) configured with clean layout structures.' },
      { title: 'Digital Business Cards & Email Signatures', desc: 'Professionally designed digital business cards and email signatures for consistent branding across online communication.' },
      { title: 'Print-Prep Specifications', desc: 'Vector designs exported with standard trim markings, dielines, and bleed bounds.' }
    ],
    workflow: [
      { title: 'Requirement Review', desc: 'Assessing your corporate guidelines, document types, cardstock choices, and layout requirements.' },
      { title: 'Grid Aligning', desc: 'Setting page margins, structuring content columns, and placing design placeholders.' },
      { title: 'Asset Development', desc: 'Designing custom letterheads, company profiles, card layouts, and presentation decks.' },
      { title: 'Source Packing', desc: 'Providing print-ready vector PDFs alongside editable PowerPoint / Figma master links.' }
    ],
    relatedProjects: [
      {
        name: 'Krish Power',
        category: 'Corporate Stationery Systems',
        description: 'Complete corporate branding collateral including business cards, letterheads, envelope templates, and style rules.',
        services: ['Business Cards', 'Letterhead Spec', 'Envelopes', 'Invoice templates'],
        mockupSvg: (
          <svg viewBox="0 0 320 200" className="w-4/5 h-auto">
            <rect x="20" y="20" width="280" height="160" rx="8" fill="#F7F7F8" stroke="rgba(27,36,80,0.08)" strokeWidth="1.5" />
            <rect x="35" y="35" width="130" height="75" rx="4" fill="#141B3B" />
            <circle cx="60" cy="55" r="10" fill="#FF5A1F" />
            <text x="35" y="130" fontFamily="Cabinet Grotesk" fontWeight="bold" fontSize="10" fill="#1B2450">BUSINESS CARD</text>
            <text x="35" y="140" fontFamily="Plus Jakarta Sans" fontSize="5" fill="#888888">3.5" x 2.0" Print Prep</text>
            <rect x="180" y="35" width="105" height="130" fill="#FFFFFF" stroke="rgba(27,36,80,0.1)" strokeWidth="1" />
            <line x1="190" y1="50" x2="240" y2="50" stroke="#FF5A1F" strokeWidth="2" />
            <line x1="190" y1="70" x2="270" y2="70" stroke="#1B2450" strokeWidth="0.5" />
            <line x1="190" y1="80" x2="260" y2="80" stroke="#1B2450" strokeWidth="0.5" />
          </svg>
        )
      },
      {
        name: 'Sayaji Laminate',
        category: 'Tactile Catalogue layouts',
        description: 'Premium print booklets and corporate product sheets detailing wood materials and product specifications.',
        services: ['Print Catalogs', 'Profile Brochures', 'Product Labels'],
        mockupSvg: (
          <svg viewBox="0 0 320 200" className="w-4/5 h-auto">
            <rect x="20" y="20" width="280" height="160" rx="8" fill="#1B2450" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <rect x="40" y="40" width="240" height="120" fill="#FFFFFF" rx="4" />
            <rect x="55" y="55" width="80" height="90" fill="#E2E8F0" />
            <text x="150" y="75" fontFamily="Cabinet Grotesk" fontWeight="bold" fontSize="12" fill="#1B2450">SAYAJI CORE</text>
            <text x="150" y="90" fontFamily="Plus Jakarta Sans" fontSize="6" fill="#888888">Company Profile &amp; Presentation</text>
            <line x1="150" y1="110" x2="260" y2="110" stroke="#FF5A1F" strokeWidth="1.5" />
          </svg>
        )
      }
    ],
    faqs: [
      { q: 'Can you match the designs with our existing logo files?', a: 'Absolutely. We will ask for your logo files (in vector format like AI or SVG) and corporate colors to ensure all stationery packs coordinate perfectly.' },
      { q: 'Do you deliver PowerPoint files for presentation decks?', a: 'Yes. We design presentation slides in Figma for absolute layout precision and can export them to PPT formats or Keynote files for your editing convenience.' },
      { q: 'What is the standard format for printing stationery?', a: 'We deliver print-ready, high-resolution vector PDF files, containing standard CMYK color settings, 3mm bleeds, and precise trim marks.' }
    ]
  },
  'website-design': {
    title: 'Website Design',
    category: 'Web & Digital',
    heroDesc: 'High-performance digital products and custom interfaces that align with your business objectives and look stunning on all screen sizes.',
    image: websiteDesignImg,
    overviewText: 'A high-converting website is essential for modern businesses. We design custom user interfaces (UI) and user experiences (UX) in Figma that load fast, navigate cleanly, and look beautiful on desktop, tablet, and mobile screens alike, ensuring your brand stands out online.',
    overviewHighlight: 'Clean design builds customer conversion. We structure website layouts to guide user interactions seamlessly.',
    benefits: [
      'Custom desktop and mobile layouts designed for your brand.',
      'Clean interactive layouts optimized for user conversion.',
      'Clear Figma design files structured for easy code development.',
      'Modern, stunning visual assets aligning with web guidelines.'
    ],
    whatsIncluded: [
      { title: 'Custom UI Page Layouts', desc: 'Bespoke page interface designs (Home, About, Contact, Services) built in high-fidelity.' },
      { title: 'Responsive Mobile UI Designs', desc: 'Tailored mobile wireframes and layouts ensuring a flawless experience on smartphones.' },
      { title: 'Interactive UX Prototyping', desc: 'Dynamic navigation setups showing button hover states, popups, and scroll transitions.' },
      { title: 'Digital Assets & Illustrations', desc: 'Custom icons, image placements, and styling guides optimized for web use.' },
      { title: 'Figma Component Systems', desc: 'Figma files containing reusable buttons, headers, cards, and input fields.' },
      { title: 'Developer Handoff Guides', desc: 'Structured font listings, color codes, grid details, and asset bundles for clean code coding.' }
    ],
    workflow: [
      { title: 'UX Research & Wireframing', desc: 'Defining website paths, outlining information layout, and structuring content sections.' },
      { title: 'UI Design Conception', desc: 'Creating high-fidelity visuals, applying brand colors, and selecting modern web fonts.' },
      { title: 'Interactive Prototype Tuning', desc: 'Connecting page buttons, scripting motion directives, and checking responsive layouts.' },
      { title: 'Figma Handoff Packing', desc: 'Organizing design sheets, grouping design components, and exporting svg asset packs.' }
    ],
    relatedProjects: [
      {
        name: 'Sayaji Laminate',
        category: 'Interior Web Showcase Mockup',
        description: 'An interactive product listing catalog designed for high-resolution web displays and mobile screens.',
        services: ['Web Layouts', 'UX Wireframes', 'Figma Components'],
        mockupSvg: (
          <svg viewBox="0 0 320 200" className="w-4/5 h-auto">
            <rect x="15" y="15" width="290" height="170" rx="8" fill="#141B3B" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <rect x="25" y="25" width="270" height="20" fill="#1B2450" rx="3" />
            <circle cx="35" cy="35" r="3" fill="#FF5A1F" />
            <circle cx="43" cy="35" r="3" fill="#FFFFFF" opacity="0.4" />
            <circle cx="51" cy="35" r="3" fill="#FFFFFF" opacity="0.4" />
            <text x="160" y="38" textAnchor="middle" fontFamily="Plus Jakarta Sans" fontSize="6" fill="#888888">sayajilaminates.com</text>
            <rect x="25" y="55" width="130" height="100" fill="#FFFFFF" rx="4" />
            <rect x="35" y="65" width="110" height="50" fill="#FF5A1F" rx="2" />
            <text x="35" y="130" fontFamily="Cabinet Grotesk" fontWeight="bold" fontSize="8" fill="#1B2450">PREMIUM SURFACES</text>
            <rect x="165" y="55" width="130" height="100" fill="#FFFFFF" rx="4" />
            <circle cx="230" cy="105" r="35" fill="none" stroke="#FF5A1F" strokeWidth="2" />
            <path d="M 230 85 L 230 125 M 210 105 L 250 105" stroke="#1B2450" strokeWidth="1" />
          </svg>
        )
      },
      {
        name: 'Krish Power',
        category: 'Corporate Brand Interface',
        description: 'High-performance corporate webpage layouts showcasing electrical grids, company history, and catalog downloaders.',
        services: ['Landing Page', 'Responsive Layout', 'UI Guidelines'],
        mockupSvg: (
          <svg viewBox="0 0 320 200" className="w-4/5 h-auto">
            <rect x="15" y="15" width="290" height="170" rx="8" fill="#F7F7F8" stroke="rgba(27,36,80,0.06)" strokeWidth="1" />
            <rect x="25" y="25" width="270" height="20" fill="#FFFFFF" rx="3" stroke="rgba(27,36,80,0.06)" strokeWidth="1" />
            <text x="50" y="38" fontFamily="Cabinet Grotesk" fontWeight="bold" fontSize="8" fill="#1B2450">KRISH</text>
            <rect x="25" y="55" width="270" height="70" fill="#1B2450" rx="4" />
            <polygon points="150,65 170,105 130,105" fill="#FF5A1F" />
            <text x="150" y="118" textAnchor="middle" fontFamily="Plus Jakarta Sans" fontSize="6" fill="#FFFFFF">Energy Transmission Redefined</text>
            <rect x="25" y="135" width="80" height="40" fill="#FFFFFF" rx="2" />
            <rect x="120" y="135" width="80" height="40" fill="#FFFFFF" rx="2" />
            <rect x="215" y="135" width="80" height="40" fill="#FFFFFF" rx="2" />
          </svg>
        )
      }
    ],
    faqs: [
      { q: 'What design tool do you use for website layouts?', a: 'We design exclusively in Figma. This lets us build reusable UI components, autolayout templates, and share responsive design files directly with your code developers.' },
      { q: 'Is responsive mobile layout design included?', a: 'Yes, absolutely. We design dedicated desktop and mobile web interface wireframes so the website renders clean and premium on both computers and smartphones.' },
      { q: 'Do you offer coding/development services as well?', a: 'Yes. In addition to visual UX design, we write custom responsive code (React, Next.js, HTML/CSS) to build fast, optimized, and SEO-friendly websites.' }
    ]
  },
  'social-media-design': {
    title: 'Social Media Design',
    category: 'Marketing & Business',
    heroDesc: 'Amplify your brand presence across social platforms with premium post layouts, high-converting carousels, and visual templates.',
    image: socialMediaImg,
    overviewText: 'In a fast-paced digital world, capturing attention in a fraction of a second is crucial. We design scroll-stopping social media graphics and custom layout templates. By implementing high-contrast visual grids, brand typography rules, and tailored illustrations, we help your business build a recognizable digital presence.',
    overviewHighlight: 'Consistent social design increases engagement and visual recognition. We construct files to align with your platform requirements.',
    benefits: [
      'Scroll-stopping graphics optimized for social feed algorithms.',
      'Pixel-perfect typography alignment scales for readability.',
      'Consistent visual themes establishing clear brand authority.',
      'Fully editable source templates built in Figma/Photoshop.'
    ],
    whatsIncluded: [
      { title: 'Social Media Post Layouts', desc: 'Custom-designed square and portrait graphics tailored for Instagram, LinkedIn, and Facebook feeds.' },
      { title: 'Carousel Presentation Slides', desc: 'Engaging, multi-slide story sequences structured for high read rates and engagement.' },
      { title: 'Premium Story Graphics', desc: 'Clean, vertical designs mapping promotional highlights, product launches, or event teasers.' },
      { title: 'Festival & Promotional Creatives', desc: 'Highly themed graphics combining corporate brand accents with holiday and campaign colors.' },
      { title: 'Content Strategy & Calendar', desc: 'Strategic content planning with monthly post ideas, content themes, and publishing schedules to maintain a consistent social media presence.' },
      { title: 'Social Media Asset Kit', desc: 'Reusable post templates, story designs, highlight covers, carousel layouts, and branded social media assets for maintaining a consistent visual identity across all platforms.' }
    ],
    workflow: [
      { title: 'Discovery & Briefing', desc: 'Identifying your target platform specs, copywriting goals, image requirements, and theme rules.' },
      { title: 'Planning & Concepting', desc: 'Structuring design margins, setting text scales, and concepting visual layout grids.' },
      { title: 'Design & Refinement', desc: 'Applying brand color schemes, placing vector illustrations, and tweaking visual contrasts.' },
      { title: 'Delivery & Asset Pack', desc: 'Packing layered master designs and delivering ready-to-post high-fidelity digital graphics.' }
    ],
    relatedProjects: [
      {
        name: 'Aura Cosmetics',
        category: 'Social Growth Campaign',
        description: 'A premium visual campaign designed for Instagram feeds, featuring minimalist pastel backgrounds, clean layout frames, and sleek typography.',
        services: ['Post Layouts', 'Figma Templates', 'Story Graphics'],
        mockupSvg: (
          <svg viewBox="0 0 320 200" className="w-4/5 h-auto">
            <rect x="15" y="15" width="290" height="170" rx="8" fill="#F4EAE6" stroke="rgba(27,36,80,0.06)" strokeWidth="1" />
            <circle cx="50" cy="50" r="22" fill="#EAD5C3" />
            <circle cx="50" cy="50" r="14" fill="#1B2450" />
            <rect x="88" y="38" width="130" height="8" rx="2" fill="#1B2450" />
            <rect x="88" y="52" width="90" height="6" rx="2" fill="#FF5A1F" opacity="0.8" />
            <rect x="30" y="85" width="260" height="85" rx="6" fill="#FFFFFF" />
            <rect x="42" y="98" width="70" height="60" rx="4" fill="#EAD5C3" />
            <circle cx="77" cy="128" r="12" fill="#1B2450" opacity="0.8" />
            <rect x="125" y="105" width="140" height="6" rx="2" fill="#1B2450" />
            <rect x="125" y="117" width="120" height="5" rx="2" fill="#888888" />
            <rect x="125" y="129" width="130" height="5" rx="2" fill="#888888" />
            <rect x="125" y="141" width="60" height="8" rx="3" fill="#FF5A1F" />
          </svg>
        )
      }
    ],
    faqs: [
      { q: 'Can we edit the designs ourselves?', a: 'Yes! We create reusable social post templates in Figma, sharing accessible links so you can edit the text and swap images easily.' },
      { q: 'What platforms do you design for?', a: 'We design fully optimized layouts for LinkedIn, Instagram, Facebook, and Twitter, ensuring assets match the native dimensions of each feed.' },
      { q: 'How long does a standard social graphic batch take?', a: 'A package of 6 to 9 custom post layouts is typically delivered within 4 to 6 business days, including review and concept tuning.' }
    ]
  },
  'ui-design': {
    title: 'UI Design',
    category: 'Web & Digital',
    heroDesc: 'Design sleek, intuitive interfaces for websites, mobile applications, and software dashboards that maximize user conversion.',
    image: uiDesignImg,
    overviewText: 'Great interface design bridges the gap between technology and human interaction. We design clean, engaging, and high-fidelity user interfaces (UI) in Figma. By structuring comprehensive spacing guides, modular layout systems, and responsive viewport specs, we ensure your product looks premium and functions flawlessly.',
    overviewHighlight: 'Clean layout spacing creates smooth navigation. We build structured systems to make developer handoff seamless.',
    benefits: [
      'Modern component layouts custom-made for your audience.',
      'Strict spacing margins and alignment systems for screen scaling.',
      'Fully interactive wireframes and screen prototypes.',
      'Organized component libraries for immediate developer handoff.'
    ],
    whatsIncluded: [
      { title: 'Figma User Interface Designs', desc: 'High-fidelity screen layouts customized for desktop viewports, tablet screens, and mobile formats.' },
      { title: 'App & Mobile Viewport UI', desc: 'Sleek interface configurations mapping smartphone screens, mobile cards, and app menus.' },
      { title: 'Dashboard & Admin UI Mockups', desc: 'Complex dashboard screens presenting clean dataviz grids, table alignments, and sidebars.' },
      { title: 'Interactive UI Prototypes', desc: 'Connected screen transitions showing click behaviors, dropdown animations, and page routing.' },
      { title: 'Figma Component Libraries', desc: 'Reusable UI elements (buttons, forms, header segments) utilizing Figma auto-layouts.' },
      { title: 'Developer Handoff Package', desc: 'Clear styling maps indicating font hierarchies, HEX values, SVG assets, and grid dimensions.' }
    ],
    workflow: [
      { title: 'UX & Wireframe Mapping', desc: 'Sketching basic screen hierarchies, structuring navigation, and mapping client goals.' },
      { title: 'High-Fidelity Conception', desc: 'Applying typography hierarchies, establishing color states, and rendering visual assets.' },
      { title: 'Interactive Flow Linking', desc: 'Connecting interface buttons, defining hover states, and scripting transition motions.' },
      { title: 'Handoff Specs Delivery', desc: 'Organizing layers, packaging svg graphics, and exporting code-ready styling sheets.' }
    ],
    relatedProjects: [
      {
        name: 'Velo Admin',
        category: 'Fintech Dashboard System',
        description: 'A high-performance financial management dashboard featuring clean statistics graphs, detailed transaction logs, and sleek dark modes.',
        services: ['Dashboard UI', 'UX Architecture', 'Design Tokens'],
        mockupSvg: (
          <svg viewBox="0 0 320 200" className="w-4/5 h-auto">
            <rect x="15" y="15" width="290" height="170" rx="8" fill="#0C0D14" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <rect x="15" y="15" width="60" height="170" fill="#141B3B" rx="8" />
            <circle cx="45" cy="45" r="10" fill="#FF5A1F" />
            <rect x="25" y="75" width="40" height="5" rx="1.5" fill="#FFFFFF" opacity="0.6" />
            <rect x="25" y="90" width="40" height="5" rx="1.5" fill="#FFFFFF" opacity="0.3" />
            <rect x="25" y="105" width="40" height="5" rx="1.5" fill="#FFFFFF" opacity="0.3" />
            <rect x="90" y="30" width="200" height="50" rx="6" fill="#141B3B" />
            <circle cx="115" cy="55" r="14" fill="#FF5A1F" opacity="0.1" />
            <path d="M 110 58 Q 115 50 120 52" stroke="#FF5A1F" strokeWidth="2" fill="none" />
            <rect x="145" y="45" width="60" height="6" rx="2" fill="#FFFFFF" />
            <rect x="145" y="57" width="100" height="4" rx="1.5" fill="#888888" />
            <rect x="90" y="95" width="95" height="75" rx="6" fill="#141B3B" />
            <line x1="105" y1="150" x2="170" y2="120" stroke="#FF5A1F" strokeWidth="1.5" />
            <circle cx="105" cy="150" r="3" fill="#FF5A1F" />
            <circle cx="170" cy="120" r="3" fill="#FF5A1F" />
            <rect x="195" y="95" width="95" height="75" rx="6" fill="#141B3B" />
            <circle cx="242" cy="132" r="22" fill="none" stroke="#FF5A1F" strokeWidth="3" />
          </svg>
        )
      }
    ],
    faqs: [
      { q: 'Do you write frontend code for the interfaces?', a: 'This service is focused on design (Figma UI/UX layouts). However, our studio also offers full frontend engineering (React, Next.js, HTML/CSS) if you select complete development.' },
      { q: 'Do you design interfaces for mobile apps?', a: 'Yes! We design screens for iOS and Android layouts following native guidelines (Apple Human Interface and Google Material Design).' },
      { q: 'What is the average timeline for UI design?', a: 'A standard multi-page website or application UI prototype typically requires 2 to 3 weeks of research, layout design, and refinement.' }
    ]
  },
  'video-editing': {
    title: 'Video Editing',
    category: 'Web & Digital',
    heroDesc: 'Transform raw video footage into high-impact brand stories, promotional reels, and dynamic social videos.',
    image: videoEditingImg,
    overviewText: 'Video is the most powerful medium for visual storytelling. We edit and produce premium video content. By structuring engaging timeline paces, color corrections, typographic title cards, and clear sound design overlays, we help you communicate your corporate goals clearly and look stunning on screens.',
    overviewHighlight: 'Engaging video pacing increases target retention. We format renders for specific platform standards.',
    benefits: [
      'High-impact video pacing keeping viewers engaged.',
      'Professional color grading matching your brand identity.',
      'Typographic title overlays and callout animations.',
      'Tailored sound engineering with license-free music.'
    ],
    whatsIncluded: [
      { title: 'Corporate & Business Videos', desc: 'Professional visual stories detailing company operations, services, team profiles, and case studies.' },
      { title: 'Promotional Campaign Videos', desc: 'High-energy visual teasers designed to highlight specific product releases or corporate launches.' },
      { title: 'Sleek Social Media Reels', desc: 'Fast-paced vertical videos optimized for Instagram, YouTube Shorts, and TikTok campaigns.' },
      { title: 'Custom Invitation Clips', desc: 'Elegant, graphic-rich videos built to invite stakeholders to corporate ceremonies or launches.' },
      { title: 'Dynamic Text Overlays', desc: 'Modern title cards, logo animations, and infographic banners matching your brand styles.' },
      { title: 'Sound Engineering & Mix', desc: 'Balanced audio layers combining dialogue clean-up, background soundtracks, and custom sound effects.' }
    ],
    workflow: [
      { title: 'Discovery & Briefing', desc: 'Reviewing script requirements, audio directions, footage clips, and style objectives.' },
      { title: 'Planning & Concepting', desc: 'Assembling the video narrative structure, sequencing scenes, and mapping audio peaks.' },
      { title: 'Design & Refinement', desc: 'Applying color correction filters, placing graphic overlays, and animating titles.' },
      { title: 'Delivery & Asset Pack', desc: 'Combining audio tracks, exporting files in high-resolution, and uploading formats.' }
    ],
    relatedProjects: [
      {
        name: 'Velo Motion',
        category: 'Brand Teaser Project',
        description: 'A high-energy, typography-focused promotional video edited for a digital product launch, featuring fast transition cuts and custom sound design.',
        services: ['Promo Video', 'Sound Design', 'Title Animation'],
        mockupSvg: (
          <svg viewBox="0 0 320 200" className="w-4/5 h-auto">
            <rect x="15" y="15" width="290" height="170" rx="8" fill="#141B3B" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <path d="M 40 35 L 280 35 L 280 135 L 40 135 Z" fill="#0C0D14" stroke="#FF5A1F" strokeWidth="1" />
            <polygon points="145,70 185,85 145,100" fill="#FF5A1F" />
            <rect x="40" y="150" width="60" height="15" rx="3" fill="#1B2450" />
            <rect x="48" y="157" width="44" height="2" fill="#FFFFFF" opacity="0.4" />
            <rect x="110" y="150" width="170" height="15" rx="3" fill="#0C0D14" />
            <rect x="115" y="157" width="100" height="2" fill="#FF5A1F" />
            <circle cx="215" cy="158" r="4" fill="#FF5A1F" />
            <rect x="250" y="155" width="22" height="5" rx="1" fill="#FFFFFF" opacity="0.3" />
          </svg>
        )
      }
    ],
    faqs: [
      { q: 'What raw footage format do you accept?', a: 'We accept all major formats including MP4, MOV, and AVI, and work with resolutions ranging from 1080p up to high-quality 4K footage.' },
      { q: 'Do you supply the background music?', a: 'Yes! We source and license premium, copyright-free background music and audio tracks to ensure you can post your videos anywhere safely.' },
      { q: 'How many rounds of edits do you support?', a: 'We include two complete feedback revision rounds with our standard video packages to make sure the final cuts are exactly to your liking.' }
    ]
  },
  'google-business-profile': {
    title: 'Google Business Profile',
    category: 'Growth Solutions',
    heroDesc: 'Improve your local visibility and build trust with a fully optimized Google Business Profile.',
    image: googleBusinessImg,
    isComingSoon: true,
    overviewText: '',
    overviewHighlight: '',
    benefits: [],
    whatsIncluded: [],
    workflow: [],
    relatedProjects: [],
    faqs: []
  },
  'google-ads': {
    title: 'Google Ads',
    category: 'Growth Solutions',
    heroDesc: 'Reach the right audience through strategic Google Ads campaigns that drive measurable business growth.',
    image: googleAdsImg,
    isComingSoon: true,
    overviewText: '',
    overviewHighlight: '',
    benefits: [],
    whatsIncluded: [],
    workflow: [],
    relatedProjects: [],
    faqs: []
  },
  'meta-ads': {
    title: 'Meta Ads',
    category: 'Growth Solutions',
    heroDesc: 'Scale your business with high-converting Facebook and Instagram advertising campaigns.',
    image: metaAdsImg,
    isComingSoon: true,
    overviewText: '',
    overviewHighlight: '',
    benefits: [],
    whatsIncluded: [],
    workflow: [],
    relatedProjects: [],
    faqs: []
  }
};

export const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);

  // Scroll to top when navigation occurs
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [serviceId]);

  // Load content
  const content = serviceId ? SERVICES_DATA[serviceId] : null;

  // Handle fallback if route parameter is unrecognized
  if (!content) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white py-20 px-6">
        <Container className="text-center max-w-md">
          <HelpCircle className="w-16 h-16 text-[#FF5A1F] mx-auto mb-6 animate-bounce" />
          <h1 className="font-display font-extrabold text-2xl md:text-3xl uppercase tracking-[0.015em] text-[#1B2450] mb-4">
            Service Not Found
          </h1>
          <p className="text-[#555555] font-sans font-light text-sm mb-8 leading-relaxed">
            The service page you are looking for does not exist or has been moved. Explore our core visual design capabilities.
          </p>
          <Button variant="accent" onClick={() => navigate('/services')}>
            Back to Services
          </Button>
        </Container>
      </div>
    );
  }

  if (content.isComingSoon) {
    return (
      <div className="relative overflow-x-hidden bg-white">
        {/* Noise Overlay */}
        <div className="noise-overlay opacity-[0.02]" />

        {/* =================================================
            SECTION 1: HERO (Dark Theme)
            ================================================= */}
        <section className="relative py-28 bg-[#1B2450] bg-gradient-to-b from-[#1B2450] to-[#141B3B] overflow-hidden border-b border-white/5 z-20 flex items-center min-h-[75vh]">
          {/* Subtle grid backdrop */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-1">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="detail-hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#detail-hero-grid)" className="text-white" />
            </svg>
          </div>

          {/* Ambient radial glow spot */}
          <div className="absolute w-[400px] h-[400px] bg-[#FF5A1F]/8 rounded-full blur-[130px] top-[20%] left-[10%] animate-pulse pointer-events-none" />

          <Container className="relative z-10">
            <div className="max-w-3xl flex flex-col items-start text-left">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-[10px] font-sans font-bold uppercase tracking-widest text-[#FF5A1F] mb-6 hover:text-white transition-colors duration-300 group"
              >
                <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
                <span>Back to Capabilities</span>
              </Link>

              <span className="font-sans text-[10px] uppercase tracking-widest text-[#FF5A1F] font-bold mb-3 block">
                {content.category}
              </span>

              <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl uppercase tracking-[0.015em] text-white leading-[1.1] mb-6">
                {content.title}<span className="text-[#FF5A1F]">.</span>
              </h1>

              <p className="text-white/70 font-sans font-light text-base md:text-lg leading-relaxed max-w-2xl mb-10">
                {content.heroDesc}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
                <Button
                  variant="accent"
                  size="md"
                  href={`/contact?service=${encodeURIComponent(content.title)}`}
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                  className="w-full sm:w-auto text-center justify-center"
                >
                  Start a Project
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => {
                    document.getElementById('service-overview')?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                  className="w-full sm:w-auto border-white/20 text-white hover:border-white hover:bg-white/5 text-center justify-center"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* =================================================
            SECTION 2: COMING SOON SECTION (Light Theme)
            ================================================= */}
        <section id="service-overview" className="relative py-32 bg-[#F7F7F8] z-20 overflow-hidden border-b border-[#1B2450]/6">
          <div className="noise-overlay opacity-[0.015]" />
          
          <div className="absolute w-[350px] h-[350px] bg-[#FF5A1F]/5 rounded-full blur-[100px] top-[10%] right-[5%] pointer-events-none" />
          <div className="absolute w-[400px] h-[400px] bg-[#1B2450]/3 rounded-full blur-[120px] bottom-[10%] left-[5%] pointer-events-none" />

          <Container>
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FF5A1F]/10 border border-[#FF5A1F]/20 mb-8"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F] animate-ping" />
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#FF5A1F]">
                  COMING SOON
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.015em] text-[#1B2450] mb-6"
              >
                This Service Is Coming Soon
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[#555555] font-sans font-light text-base md:text-lg leading-relaxed mb-12 max-w-2xl"
              >
                We're currently developing this service to deliver the same premium quality and strategic approach as our existing offerings. Stay tuned for the official launch.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto"
              >
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    alert("Thank you! We will notify you when this service launches.");
                  }}
                  className="w-full sm:w-auto"
                >
                  Notify Me
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  href="/contact"
                  className="w-full sm:w-auto"
                >
                  Contact Us
                </Button>
              </motion.div>
            </div>
          </Container>
        </section>
      </div>
    );
  }

  return (
    <div className="relative overflow-x-hidden bg-white">
      {/* Noise Overlay */}
      <div className="noise-overlay opacity-[0.02]" />

      {/* =================================================
          SECTION 1: HERO (Dark Theme)
          ================================================= */}
      <section className="relative py-28 bg-[#1B2450] bg-gradient-to-b from-[#1B2450] to-[#141B3B] overflow-hidden border-b border-white/5 z-20 flex items-center min-h-[75vh]">
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-1">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="detail-hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#detail-hero-grid)" className="text-white" />
          </svg>
        </div>

        {/* Ambient radial glow spot */}
        <div className="absolute w-[400px] h-[400px] bg-[#FF5A1F]/8 rounded-full blur-[130px] top-[20%] left-[10%] animate-pulse pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-3xl flex flex-col items-start text-left">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[10px] font-sans font-bold uppercase tracking-widest text-[#FF5A1F] mb-6 hover:text-white transition-colors duration-300 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Back to Capabilities</span>
            </Link>

            <span className="font-sans text-[10px] uppercase tracking-widest text-[#FF5A1F] font-bold mb-3 block">
              {content.category}
            </span>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl uppercase tracking-[0.015em] text-white leading-[1.1] mb-6">
              {content.title}<span className="text-[#FF5A1F]">.</span>
            </h1>

            <p className="text-white/70 font-sans font-light text-base md:text-lg leading-relaxed max-w-2xl mb-10">
              {content.heroDesc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
              <Button
                variant="accent"
                size="md"
                href={`/contact?service=${encodeURIComponent(content.title)}`}
                icon={<ArrowRight className="w-3.5 h-3.5" />}
                className="w-full sm:w-auto text-center justify-center"
              >
                Start a Project
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={() => {
                  document.getElementById('service-overview')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
                className="w-full sm:w-auto border-white/20 text-white hover:border-white hover:bg-white/5 text-center justify-center"
              >
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* =================================================
          SECTION 2: SERVICE OVERVIEW (Light Theme)
          ================================================= */}
      <section id="service-overview" className="relative py-28 bg-[#F7F7F8] border-b border-[#1B2450]/6 z-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Copy Block */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="font-sans text-[10px] uppercase tracking-widest text-[#FF5A1F] font-bold mb-3 block">
                Overview
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-[0.015em] text-[#1B2450] mb-6 leading-tight">
                Crafting visual authority for your business
              </h2>
              <p className="text-[#555555] font-sans font-light text-base leading-relaxed mb-6">
                {content.overviewText}
              </p>
              
              <div className="p-5 border-l-2 border-[#FF5A1F] bg-white shadow-premium-sm rounded-r-xl mb-8">
                <p className="text-[#1B2450] font-sans font-medium text-sm leading-relaxed italic">
                  "{content.overviewHighlight}"
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <span className="font-display font-semibold text-[10px] tracking-wider uppercase text-[#1B2450]/40 block">
                  Core Service Benefits
                </span>
                <div className="grid grid-cols-1 gap-3">
                  {content.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#FF5A1F] shrink-0 mt-0.5" />
                      <span className="font-sans font-medium text-xs md:text-sm text-[#555555]">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Media Block */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] w-full rounded-premium-lg overflow-hidden border border-[#1B2450]/6 shadow-premium-lg bg-white p-2">
                <img
                  src={content.image}
                  alt={content.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =================================================
          SECTION 3: WHAT'S INCLUDED (Light Theme)
          ================================================= */}
      <section className="relative py-28 bg-white border-b border-[#1B2450]/6 z-20">
        <Container>
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#FF5A1F] font-bold mb-2 block">
              Deliverables
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl uppercase tracking-[0.015em] text-[#1B2450]">
              What's Included
            </h2>
            <div className="w-12 h-1 bg-[#FF5A1F] mt-4 rounded-full mx-auto" />
            <p className="text-[#555555] font-sans font-light text-sm mt-4 leading-relaxed max-w-lg mx-auto">
              Every detail is meticulously planned to build high visual consistency and clear corporate execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.whatsIncluded.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="group p-8 rounded-2xl bg-[#F7F7F8] border border-[#1B2450]/6 hover:border-[#FF5A1F]/30 hover:bg-white hover:-translate-y-1.5 hover:shadow-premium-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FF5A1F]/5 border border-[#FF5A1F]/10 flex items-center justify-center mb-6 text-[#FF5A1F] transition-all duration-500 group-hover:bg-[#FF5A1F]/15 group-hover:rotate-6">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-sm md:text-base text-[#1B2450] uppercase tracking-wide group-hover:text-[#FF5A1F] transition-colors duration-300 mb-3">
                  {item.title}
                </h3>
                <p className="text-[#555555] font-sans font-light text-xs leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* =================================================
          SECTION 4: HOW WE WORK (Dark Theme)
          ================================================= */}
      <section className="relative py-28 bg-[#141B3B] bg-gradient-to-b from-[#141B3B] to-[#0C0D14] overflow-hidden z-20 border-b border-white/5">
        <div className="noise-overlay opacity-[0.03]" />
        
        {/* Glow spots */}
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#FF5A1F]/6 rounded-full blur-[130px] pointer-events-none" />

        <Container>
          <div className="mb-20 text-center relative z-10">
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#FF5A1F] font-bold mb-2 block">
              Methodology
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl uppercase tracking-[0.015em] text-white">
              How We Work
            </h2>
            <p className="text-white/50 font-sans font-light text-sm max-w-md mx-auto mt-4 leading-relaxed">
              We guide each project through a structured, strategy-first timeline to ensure pixel-perfect delivery.
            </p>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto mt-16">
            {/* Horizontal line connector (Desktop) */}
            <div className="absolute top-10 left-[8%] right-[8%] h-[1px] bg-white/10 hidden lg:block" />

            {/* Vertical line connector (Mobile/Tablet) */}
            <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-white/10 lg:hidden" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
              {content.workflow.map((step, idx) => {
                const icons = [
                  <MessageSquare key="msg" className="w-6 h-6" />,
                  <Compass key="cmp" className="w-6 h-6" />,
                  <Palette key="plt" className="w-6 h-6 animate-pulse" />,
                  <CheckCircle key="chk" className="w-6 h-6" />
                ];
                const nums = ['01', '02', '03', '04'];
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.15 }}
                    className="flex flex-col pl-20 lg:pl-0 group"
                  >
                    <div className="flex lg:flex-col gap-4 items-center lg:items-start mb-6">
                      <div className="w-20 h-20 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md flex items-center justify-center text-white/50 transition-all duration-500 group-hover:scale-105 group-hover:border-[#FF5A1F] group-hover:text-[#FF5A1F] group-hover:shadow-[0_0_25px_rgba(255,90,31,0.2)] relative z-10">
                        {icons[idx] || <Palette className="w-6 h-6" />}
                        <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#FF5A1F] text-white text-[9px] font-sans font-bold flex items-center justify-center">
                          {nums[idx]}
                        </span>
                      </div>
                      <h3 className="font-display font-semibold text-lg uppercase text-white mt-1 group-hover:text-[#FF5A1F] transition-colors duration-500 tracking-wider">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-white/60 font-sans font-light text-xs md:text-sm leading-relaxed lg:pr-4">
                      {step.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* =================================================
          SECTION 6: FAQ ACCORDION (Light Theme)
          ================================================= */}
      <section className="relative py-28 bg-[#F7F7F8] border-b border-[#1B2450]/6 z-20">
        <Container size="sm">
          <div className="mb-20 text-center">
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#FF5A1F] font-bold mb-2 block">
              FAQ
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-[0.015em] text-[#1B2450]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {content.faqs.map((faq, idx) => {
              const isOpen = activeFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-[#1B2450]/6 rounded-premium-md bg-white/80 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-[#FF5A1F]/25"
                >
                  <button
                    onClick={() => setActiveFaqIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                  >
                    <span className="font-display font-semibold text-sm md:text-base text-[#1B2450] uppercase tracking-wide">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#FF5A1F] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <div
                    style={{
                      height: isOpen ? 'auto' : 0,
                      opacity: isOpen ? 1 : 0,
                      transition: 'height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease-out'
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-xs md:text-sm font-sans font-light leading-relaxed text-[#555555] border-t border-[#1B2450]/6 pt-4">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =================================================
          SECTION 7: CTA (Dark Theme)
          ================================================= */}
      <CTA
        badge="GET STARTED"
        heading={
          <>
            Let's Build Something<br />Extraordinary Together.
          </>
        }
        description={`Ready to launch your ${content.title} project? Fill out our design brief and let's craft something beautiful together.`}
        primaryButtonHref={`/contact?service=${encodeURIComponent(content.title)}`}
      />
    </div>
  );
};

export default ServiceDetail;
