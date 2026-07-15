import React from 'react';

export interface ColorToken {
  name: string;
  hex: string;
}

export interface TypoToken {
  label: string;
  fontName: string;
  weight: string;
  style: string;
}

export interface ProjectData {
  id: string;
  name: string;
  client: string;
  location: string;
  industry: string;
  services: string[];
  description: string;
  mockupSvg?: React.ReactNode;
  logoDesignSvg?: React.ReactNode;
  logoUrl?: string;
  heroImageUrl?: string;
  mockupUrls?: string[];
  colors: ColorToken[];
  typography: TypoToken[];
  variations?: { title: string; svg: React.ReactNode }[];
  mockups?: { title: string; svg: React.ReactNode }[];
  gallery?: { title: string; svg: React.ReactNode }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  type?: string; // For sub-types like business card, envelope, etc.
  svg?: React.ReactNode;
  image?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  videoUrl: string;
  svg: React.ReactNode;
}

export interface CategoryData {
  id: string;
  title: string;
  description: string;
  count: number;
  projects: string[];
  thumbnails: React.ReactNode[];
}

// ----------------------------------------------------
// 01. LOGO & BRANDING CASE STUDY DATABASE (10 PROJECTS)
// ----------------------------------------------------
export const PORTFOLIO_PROJECTS: Record<string, ProjectData> = {
  'sunelite-pharma': {
    id: 'sunelite-pharma',
    name: 'Sunelite Pharma',
    client: 'Sunelite Pharma Ltd.',
    location: 'Mumbai, India',
    industry: 'Pharma & Healthcare',
    services: ['Brand Identity', 'Logo Design', 'Visual Guidelines', 'Product Packaging'],
    description: 'Sunelite Pharma is a pharmaceutical export company focused on delivering high-quality healthcare solutions across global markets.',
    logoUrl: '/brand-images/Sunelite Logo.png',
    heroImageUrl: '/brand-images/Sunelite Mockup 1.png',
    mockupUrls: [
      '/brand-images/Sunelite Mockup 2.png',
      '/brand-images/Sunelite Mockup 3.png',
      '/brand-images/Sunelite Mockup 4.png',
      '/brand-images/Sunelite Mockup 5.png',
      '/brand-images/Sunelite Mockup 6.png'
    ],
    colors: [
      { name: 'Deep Blue', hex: '#0C3D77' },
      { name: 'Sun Yellow', hex: '#FFCD2A' },
      { name: 'Amber Orange', hex: '#FB9318' }
    ],
    typography: [
      { label: 'Primary Brand Font', fontName: 'Archivo', weight: '700 (Bold)', style: 'Normal' },
      { label: 'Secondary Brand Font', fontName: 'Archivo', weight: '400 (Regular)', style: 'Normal' }
    ]
  },
  'maa-shakti-packaging': {
    id: 'maa-shakti-packaging',
    name: 'Maa Shakti Packaging',
    client: 'Maa Shakti Packaging Industries',
    location: 'Gujarat, India',
    industry: 'Industrial Packaging',
    services: ['Brand Identity', 'Industrial Logo', 'Packaging Systems', 'Corporate Print'],
    description: "It's a corrugated box manufacturing company.",
    logoUrl: '/brand-images/Maa Shakti Packaging Logo.png',
    heroImageUrl: '/brand-images/Maa Shakti Packaging Mockup 1.png',
    mockupUrls: [
      '/brand-images/Maa Shakti Packaging Mockup 2.png',
      '/brand-images/Maa Shakti Packaging Mockup 3.png',
      '/brand-images/Maa Shakti Packaging Mockup 4.png'
    ],
    colors: [
      { name: 'Packaging Blue', hex: '#18509D' },
      { name: 'Kraft Brown', hex: '#8B471F' }
    ],
    typography: [
      { label: 'Primary Brand Font', fontName: 'Arial', weight: '700 (Bold)', style: 'Normal' },
      { label: 'Secondary Brand Font', fontName: 'FONTSPRING', weight: '400 (Regular)', style: 'Normal' }
    ]
  },
  'lubrify': {
    id: 'lubrify',
    name: 'Lubrify',
    client: 'Lubrify Lubricants',
    location: 'Pune, India',
    industry: 'Automotive & Lubricants',
    services: ['Brand Mark', 'Logo Design', 'Label Guidelines', 'Canister Graphics'],
    description: "It's an oil recycle company.",
    logoUrl: '/brand-images/Lubrify Logo.png',
    heroImageUrl: '/brand-images/Lubrify Mockup 1.png',
    mockupUrls: [
      '/brand-images/Lubrify Mockup 2.png'
    ],
    colors: [
      { name: 'Deep Navy', hex: '#022854' },
      { name: 'Oil Gold', hex: '#F8AF1F' }
    ],
    typography: [
      { label: 'Primary Brand Font', fontName: 'Archivo', weight: '700 (Bold)', style: 'Normal' },
      { label: 'Secondary Brand Font', fontName: 'Archivo', weight: '400 (Regular)', style: 'Normal' }
    ]
  },
  'shree-jwellers': {
    id: 'shree-jwellers',
    name: 'Shree Jwellers',
    client: 'Shree Jwellers & Sons',
    location: 'Jaipur, India',
    industry: 'Luxury Jewelry',
    services: ['Luxury Identity', 'Monogram Design', 'Premium Box Print', 'Tag Design'],
    description: "It's Jewellery Showroom.",
    logoUrl: '/brand-images/Shree Jwellers Logo.png',
    heroImageUrl: '/brand-images/Shree Jwellers Mockup 1.png',
    mockupUrls: [
      '/brand-images/Shree Jwellers Mockup 2.png'
    ],
    colors: [
      { name: 'Warm Gold', hex: '#E8C379' },
      { name: 'Royal Maroon', hex: '#6A1011' }
    ],
    typography: [
      { label: 'Primary Brand Font', fontName: 'Baskerville Regular', weight: '400 (Regular)', style: 'Normal' },
      { label: 'Secondary Brand Font', fontName: 'Baskerville Regular', weight: '400 (Regular)', style: 'Normal' }
    ]
  },
  'jwellery-hub': {
    id: 'jwellery-hub',
    name: 'Jwellery Hub',
    client: 'Jwellery Hub Retail Group',
    location: 'New Delhi, India',
    industry: 'Jewelry Retail',
    services: ['E-Commerce Branding', 'Logo Lockup', 'Packaging Mockups', 'Gift Bag Design'],
    description: "It's Ornaments Business.",
    logoUrl: '/brand-images/Jwellery Hub Logo.png',
    heroImageUrl: '/brand-images/Jwellery Hub Mockup 1.png',
    mockupUrls: [
      '/brand-images/Jwellery Hub Mockup 2.png',
      '/brand-images/Jwellery Hub Mockup 3.png',
      '/brand-images/Jwellery Hub Mockup 4.png',
      '/brand-images/Jwellery Hub Mockup 5.png'
    ],
    colors: [
      { name: 'Classic Gold', hex: '#DDBA76' },
      { name: 'Deep Navy', hex: '#212F5B' }
    ],
    typography: [
      { label: 'Primary Brand Font', fontName: 'Cinzel', weight: '700 (Bold)', style: 'Normal' },
      { label: 'Secondary Brand Font', fontName: 'Cinzel', weight: '400 (Regular)', style: 'Normal' }
    ]
  },
  'ram-solution': {
    id: 'ram-solution',
    name: 'Ram Solution',
    client: 'Ram Solution IT Corp',
    location: 'Hyderabad, India',
    industry: 'IT & Technology Solutions',
    services: ['IT Branding', 'Technology Logo', 'Stationery Specs', 'Corporate Brand Deck'],
    description: 'Ram Solution is a reliable CSC (Common Service Center) service provider offering a wide range of digital and government-related services.',
    logoUrl: '/brand-images/Ram Solution Logo.png',
    heroImageUrl: '/brand-images/Ram Solution Mockup 1.png',
    mockupUrls: [
      '/brand-images/Ram Solution Mockup 2.png',
      '/brand-images/Ram Solution Mockup 3.png',
      '/brand-images/Ram Solution Mockup 4.png',
      '/brand-images/Ram Solution Mockup 5.png'
    ],
    colors: [
      { name: 'Forest Green', hex: '#179046' },
      { name: 'Sunset Orange', hex: '#E25A29' }
    ],
    typography: [
      { label: 'Primary Brand Font', fontName: 'Swis721 BT', weight: '700 (Bold)', style: 'Normal' },
      { label: 'Secondary Brand Font', fontName: 'Swis721 BT', weight: '400 (Regular)', style: 'Normal' }
    ]
  },
  'codexi': {
    id: 'codexi',
    name: 'Codexi',
    client: 'Codexi Lab Inc.',
    location: 'Bengaluru, India',
    industry: 'Software & SaaS',
    services: ['SaaS Logo Design', 'Monogram', 'Sticker Packs', 'UI Style Guide'],
    description: "It's Future IT Company.",
    logoUrl: '/brand-images/Codexi Logo.png',
    heroImageUrl: '/brand-images/Codexi Mockup 1.png',
    mockupUrls: [
      '/brand-images/Codexi Mockup 2.png'
    ],
    colors: [
      { name: 'Metallic Gold', hex: '#D4AF36' },
      { name: 'Carbon Grey', hex: '#333333' }
    ],
    typography: [
      { label: 'Primary Brand Font', fontName: 'Orbitron', weight: '700 (Bold)', style: 'Normal' },
      { label: 'Secondary Brand Font', fontName: 'Orbitron', weight: '400 (Regular)', style: 'Normal' }
    ]
  },
  'hiyas-snacks-corner': {
    id: 'hiyas-snacks-corner',
    name: "Hiya's Snacks Corner",
    client: 'Hiya Snacks & Confectioneries',
    location: 'Kolkata, India',
    industry: 'Food & Beverages',
    services: ['QSR Branding', 'Logo Design', 'Carry Bag Design', 'Menu Graphics'],
    description: "Hiya's Snacks Corner is a dry snacks business.",
    logoUrl: "/brand-images/Heeya's Snacks Corner Logo.png",
    heroImageUrl: "/brand-images/Hiya's Snacks Corner Mockup 1.png",
    mockupUrls: [
      "/brand-images/Hiya's Snacks Corner Mockup 2.png",
      "/brand-images/Hiya's Snacks Corner Mockup 3.png"
    ],
    colors: [
      { name: 'Saffron Yellow', hex: '#F3A027' },
      { name: 'Royal Blue', hex: '#283677' },
      { name: 'Pure White', hex: '#FFFFFF' }
    ],
    typography: [
      { label: 'Primary Brand Font', fontName: 'Custom Typography', weight: '800 (Extra Bold)', style: 'Normal' },
      { label: 'Secondary Brand Font', fontName: 'Custom Typography', weight: '400 (Regular)', style: 'Normal' }
    ]
  },
  'arpan-tyre': {
    id: 'arpan-tyre',
    name: 'Arpan Tyre',
    client: 'Arpan Tyre Hub',
    location: 'Surat, India',
    industry: 'Automotive & Tyres',
    services: ['Retail Branding', 'Logo Design', 'Store Front Design', 'Visiting Cards'],
    description: "It's a tyre alignment shop.",
    logoUrl: '/brand-images/Arpan tyre Logo.png',
    heroImageUrl: '/brand-images/Arpan tyre hub Mockup 1.png',
    mockupUrls: [
      '/brand-images/Arpan tyre hub Mockup 2.png'
    ],
    colors: [
      { name: 'Tread Black', hex: '#020202' },
      { name: 'Sport Red', hex: '#FF0000' }
    ],
    typography: [
      { label: 'Primary Brand Font', fontName: 'FONTSPRING DEMO', weight: '700 (Bold)', style: 'Normal' },
      { label: 'Secondary Brand Font', fontName: 'FONTSPRING DEMO', weight: '400 (Regular)', style: 'Normal' }
    ]
  },
  'umiya-industries': {
    id: 'umiya-industries',
    name: 'Umiya Industries',
    client: 'Umiya Industries Pvt. Ltd.',
    location: 'Mehsana, India',
    industry: 'Wooden Palette Manufacturing',
    services: ['Corporate Branding', 'Industrial Logo', 'Safety Boards', 'Corporate Stationery'],
    description: "It's Wooden Palette Manufacturing Company.",
    logoUrl: '/brand-images/Umiya Industries Logo.png',
    heroImageUrl: '/brand-images/Umiya Industries Mockup 1.png',
    mockupUrls: [
      '/brand-images/Umiya Industries Mockup 2.png'
    ],
    colors: [
      { name: 'Wood Brown', hex: '#793D21' },
      { name: 'Light Walnut', hex: '#BF7F4F' }
    ],
    typography: [
      { label: 'Primary Brand Font', fontName: 'DM Sans', weight: '700 (Bold)', style: 'Normal' },
      { label: 'Secondary Brand Font', fontName: 'DM Sans', weight: '400 (Regular)', style: 'Normal' }
    ]
  },
  'kala-kruti': {
    id: 'kala-kruti',
    name: 'Kala Kruti',
    client: 'Kala Kruti Small Business',
    location: 'Gujarat, India',
    industry: 'Crochet & Handwork',
    services: ['Brand Identity', 'Logo Design', 'Label Guidelines', 'Product Packaging'],
    description: "It's a Crochet and Handwork Small Business.",
    logoUrl: '/brand-images/Kala Kruti Logo.png',
    heroImageUrl: '/brand-images/Kala Kruti Mockup 1.png',
    mockupUrls: [
      '/brand-images/Kala Kruti Mockup 2.png',
      '/brand-images/Kala Kruti Mockup 3.png'
    ],
    colors: [
      { name: 'Crochet Red', hex: '#730400' },
      { name: 'Mustard Yellow', hex: '#C6B106' }
    ],
    typography: [
      { label: 'Primary Brand Font', fontName: 'AMORIA', weight: '500 (Medium)', style: 'Normal' },
      { label: 'Secondary Brand Font', fontName: 'ROUGHNECKS', weight: '400 (Regular)', style: 'Normal' }
    ]
  },
  'mahadev-decor': {
    id: 'mahadev-decor',
    name: 'Mahadev Decor',
    client: 'Mahadev Decor Hardware',
    location: 'Rajasthan, India',
    industry: 'Hardware Retail',
    services: ['Retail Identity', 'Logo Design', 'Store Banner', 'Corporate Stationery'],
    description: "It's a Hardware Shop.",
    logoUrl: '/brand-images/Mahadev Decor Logo.png',
    heroImageUrl: '/brand-images/Mahadev Decor Mockup 1.png',
    mockupUrls: [
      '/brand-images/Mahadev Decor Mockup 2.png'
    ],
    colors: [
      { name: 'Copper Orange', hex: '#CC6931' },
      { name: 'Dark Bronze', hex: '#513521' }
    ],
    typography: [
      { label: 'Primary Brand Font', fontName: 'Clash Display', weight: '700 (Bold)', style: 'Normal' },
      { label: 'Secondary Brand Font', fontName: 'Clash Display', weight: '400 (Regular)', style: 'Normal' }
    ]
  },
  'hetvi-travels': {
    id: 'hetvi-travels',
    name: 'Hetvi Travels',
    client: 'Hetvi Travels Agency',
    location: 'Mumbai, India',
    industry: 'Travel & Tourism',
    services: ['Travel Branding', 'Logo Design', 'Promo Guidelines', 'Stationery Specs'],
    description: "It's a Travel Agency.",
    logoUrl: '/brand-images/Hetvi Travels Logo.png',
    heroImageUrl: '/brand-images/Hetvi Travels Mockup 1.png',
    mockupUrls: [
      '/brand-images/Hetvi Travels Mockup 2.png'
    ],
    colors: [
      { name: 'Travel Gold', hex: '#E5AB36' },
      { name: 'Asphalt Charcoal', hex: '#20201E' }
    ],
    typography: [
      { label: 'Primary Brand Font', fontName: 'Instrument Sans', weight: '700 (Bold)', style: 'Normal' },
      { label: 'Secondary Brand Font', fontName: 'Instrument Sans', weight: '400 (Regular)', style: 'Normal' }
    ]
  },
  'apex-engineering': {
    id: 'apex-engineering',
    name: 'Apex Engineering',
    client: 'Apex Engineering Ltd.',
    location: 'Bengaluru, India',
    industry: 'Heavy Engineering',
    services: ['Industrial Identity', 'Logo Design', 'Corporate Print', 'Equipment Mockups'],
    description: "It's an Engineering Equipment Company.",
    logoUrl: '/brand-images/Apex Engineering Logo.png',
    heroImageUrl: '/brand-images/Apex Engineering Mockup 1.png',
    mockupUrls: [
      '/brand-images/Apex Engineering Mockup 2.png'
    ],
    colors: [
      { name: 'Safety Orange', hex: '#F28C22' },
      { name: 'Steel Blue', hex: '#1F4075' }
    ],
    typography: [
      { label: 'Primary Brand Font', fontName: 'Konexy', weight: '700 (Bold)', style: 'Normal' },
      { label: 'Secondary Brand Font', fontName: 'Konexy', weight: '400 (Regular)', style: 'Normal' }
    ]
  }
};

// ----------------------------------------------------
// 02. BUSINESS ESSENTIALS LIGHTBOX DATABASE
// ----------------------------------------------------
export const BUSINESS_ESSENTIALS_GALLERY: GalleryItem[] = [
  {
    id: 'be-card-1',
    title: 'Maa Shakti Packaging Letterpad',
    type: 'Letterpad',
    image: '/brand-images/Maa Shakti Packaging Letterpad.jpg',
  },
  {
    id: 'be-card-2',
    title: 'Sunelite Pharma Letterpad',
    type: 'Letterpad',
    image: '/brand-images/Sunelite Pharma Letterpad.png',
  },
  {
    id: 'be-card-3',
    title: 'Maa Shakti Envelope',
    type: 'Envelope',
    image: '/brand-images/Maa Shakti Envelope.jpg',
  },
  {
    id: 'be-card-4',
    title: 'Mahalaxmi Saw Mill Label Design',
    type: 'Label Design',
    image: '/brand-images/Mahalaxmi Saw Mill Label Design.jpg',
  },
  {
    id: 'be-card-5',
    title: 'Arpan Tyre Bill Book',
    type: 'Bill Book',
    image: '/brand-images/Arpan Tyre Bill Book.jpg',
  },
];

// ----------------------------------------------------
// 03. MARKETING DESIGN LIGHTBOX DATABASE
// ----------------------------------------------------
export const MARKETING_DESIGN_GALLERY: Record<string, GalleryItem[]> = {
  'banner-design': [
    {
      id: 'mkt-ban-1',
      title: 'Krish Power Expo Marketing Banner',
      svg: (
        <svg viewBox="0 0 320 180" className="w-full h-full text-white" fill="none">
          <rect x="0" y="0" width="320" height="180" fill="#141B3B" />
          {/* Abstract industrial grids */}
          <line x1="0" y1="30" x2="320" y2="30" stroke="rgba(255,90,31,0.06)" strokeWidth="1" />
          <line x1="0" y1="150" x2="320" y2="150" stroke="rgba(255,90,31,0.06)" strokeWidth="1" />
          <g transform="translate(30, 50)">
            <text x="0" y="20" fontFamily="Cabinet Grotesk" fontWeight="bold" fontSize="18" fill="#FFFFFF" letterSpacing="1">POWERING THE</text>
            <text x="0" y="42" fontFamily="Cabinet Grotesk" fontWeight="bold" fontSize="18" fill="#FF5A1F" letterSpacing="1">FUTURE GRID.</text>
            <text x="0" y="65" fontFamily="Plus Jakarta Sans" fontSize="6" fill="#888888">DISTRIBUTION TRANSFORMERS &amp; HEAVY TRANSMISSION</text>
          </g>
          {/* Brand mark outline */}
          <g transform="translate(230, 45) scale(1.3)">
            <polygon points="30,0 60,17 60,52 30,70 0,52 0,17" fill="none" stroke="#FF5A1F" strokeWidth="2.5" />
            <path d="M 33 15 L 18 38 L 30 38 L 27 55 L 42 32 L 30 32 Z" fill="#FF5A1F" />
          </g>
        </svg>
      )
    }
  ],
  'social-media-posts': [
    {
      id: 'mkt-soc-1',
      title: 'Social Media Grid Launch Layout',
      svg: (
        <svg viewBox="0 0 320 200" className="w-full h-full text-[#1B2450]" fill="none">
          <rect x="0" y="0" width="320" height="200" rx="12" fill="#FFFFFF" stroke="rgba(27,36,80,0.08)" strokeWidth="1" />
          {/* Instagram mockup wireframe */}
          <rect x="80" y="10" width="160" height="180" rx="8" fill="#F8FAFC" stroke="rgba(27,36,80,0.08)" strokeWidth="1" />
          <circle cx="100" cy="25" r="10" fill="#FF5A1F" opacity="0.1" />
          <text x="115" y="28" fontFamily="Cabinet Grotesk" fontWeight="bold" fontSize="6" fill="#1B2450">LAUNCH GRID</text>
          {/* Image box */}
          <rect x="90" y="45" width="140" height="100" fill="#1B2450" />
          <text x="160" y="100" textAnchor="middle" fontFamily="Cabinet Grotesk" fontWeight="bold" fontSize="12" fill="#FFFFFF" letterSpacing="1">CREATIVE STUDIO</text>
          {/* Buttons */}
          <circle cx="100" cy="165" r="4" fill="#FF5A1F" />
          <circle cx="115" cy="165" r="4" fill="#888888" />
          <circle cx="130" cy="165" r="4" fill="#888888" />
        </svg>
      )
    }
  ],
  'festival-creatives': [
    {
      id: 'mkt-fest-1',
      title: 'Diwali Celebration Brand Creative',
      svg: (
        <svg viewBox="0 0 320 200" className="w-full h-full text-white" fill="none">
          <rect x="0" y="0" width="320" height="200" rx="12" fill="#2E0E3B" />
          {/* Mandala backdrop */}
          <circle cx="160" cy="100" r="85" fill="none" stroke="#FF5A1F" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
          <circle cx="160" cy="100" r="55" fill="none" stroke="#FF5A1F" strokeWidth="1" opacity="0.2" />
          {/* Diya SVG drawing */}
          <g transform="translate(145, 80)">
            <path d="M 0,25 C 0,35 30,35 30,25 C 30,15 15,0 15,0 C 15,0 0,15 0,25 Z" fill="#FF5A1F" />
            <circle cx="15" cy="20" r="3" fill="#FFFFFF" />
          </g>
          <text x="160" y="150" textAnchor="middle" fontFamily="Cabinet Grotesk" fontWeight="bold" fontSize="12" fill="#FFFFFF" letterSpacing="3">SHUBH DEEPAWALI</text>
          <text x="160" y="165" textAnchor="middle" fontFamily="Plus Jakarta Sans" fontSize="5" fill="#FF5A1F" letterSpacing="1">WISHING YOU PROSPERITY &amp; GROWTH</text>
        </svg>
      )
    }
  ],
  'carousel-posts': [
    {
      id: 'mkt-car-1',
      title: 'Multi-Slide Branding Strategy Carousel',
      svg: (
        <svg viewBox="0 0 320 200" className="w-full h-full text-[#1B2450]" fill="none">
          <rect x="0" y="0" width="320" height="200" rx="12" fill="#FAF5FF" />
          {/* Two panels representing sequential carousel slides */}
          <rect x="15" y="15" width="135" height="170" rx="8" fill="#FFFFFF" stroke="rgba(27,36,80,0.06)" strokeWidth="1" />
          <text x="30" y="45" fontFamily="Cabinet Grotesk" fontWeight="bold" fontSize="8" fill="#1B2450">STEP 01</text>
          <text x="30" y="60" fontFamily="Cabinet Grotesk" fontWeight="bold" fontSize="12" fill="#FF5A1F">DISCOVER.</text>
          
          <rect x="170" y="15" width="135" height="170" rx="8" fill="#FFFFFF" stroke="rgba(27,36,80,0.06)" strokeWidth="1" />
          <text x="185" y="45" fontFamily="Cabinet Grotesk" fontWeight="bold" fontSize="8" fill="#1B2450">STEP 02</text>
          <text x="185" y="60" fontFamily="Cabinet Grotesk" fontWeight="bold" fontSize="12" fill="#1B2450">ALIGNMENT.</text>

          {/* Swipe symbol */}
          <path d="M 152,100 L 168,100 M 162,95 L 168,100 L 162,105" stroke="#FF5A1F" strokeWidth="1.5" />
        </svg>
      )
    }
  ],
  'promotional-creatives': [
    {
      id: 'mkt-pro-1',
      title: 'Studio Launch Promotional Design',
      svg: (
        <svg viewBox="0 0 320 200" className="w-full h-full text-[#1B2450]" fill="none">
          <rect x="0" y="0" width="320" height="200" rx="12" fill="#F7F7F8" />
          {/* Clean geometrical alignment frames */}
          <rect x="15" y="15" width="290" height="170" fill="none" stroke="#FF5A1F" strokeWidth="1" opacity="0.3" />
          <g transform="translate(45, 55)">
            <text x="0" y="20" fontFamily="Cabinet Grotesk" fontWeight="bold" fontSize="24" fill="#1B2450" letterSpacing="1">UP TO 20% OFF</text>
            <text x="0" y="45" fontFamily="Cabinet Grotesk" fontWeight="bold" fontSize="14" fill="#FF5A1F" letterSpacing="1">ON BRAND ESSENTIALS</text>
            <text x="0" y="65" fontFamily="Plus Jakarta Sans" fontSize="6" fill="#888888">LIMITED OFFER FOR BRAND INQUIRIES THIS QUARTER</text>
          </g>
        </svg>
      )
    }
  ]
};

// ----------------------------------------------------
// 04. INVITATION DESIGN DATABASE
// ----------------------------------------------------
export const INVITATION_CARDS_GALLERY: GalleryItem[] = [
  {
    id: 'inv-card-1',
    title: 'Royal Indian Gold-Foil Mandala Card',
    svg: (
      <svg viewBox="0 0 320 200" className="w-full h-full text-white" fill="none">
        <rect x="0" y="0" width="320" height="200" rx="12" fill="#5F0F1A" />
        {/* Beautiful vector mandala pattern */}
        <circle cx="160" cy="100" r="50" stroke="#FF5A1F" strokeWidth="1.5" />
        <circle cx="160" cy="100" r="40" stroke="#FF5A1F" strokeWidth="1" strokeDasharray="3 3" />
        <polygon points="160,65 170,90 195,100 170,110 160,135 150,110 125,100 150,90" fill="#FF5A1F" opacity="0.75" />
        <text x="160" y="170" textAnchor="middle" fontFamily="Cabinet Grotesk" fontWeight="bold" fontSize="12" fill="#FFFFFF" letterSpacing="2">ROYAL CELEBRATION</text>
      </svg>
    )
  },
  {
    id: 'inv-card-2',
    title: 'Minimal Floral Watercolor Card',
    svg: (
      <svg viewBox="0 0 320 200" className="w-full h-full text-[#1B2450]" fill="none">
        <rect x="0" y="0" width="320" height="200" rx="12" fill="#FAF7F2" stroke="rgba(27,36,80,0.06)" strokeWidth="1" />
        {/* Stylized watercolor leaves */}
        <path d="M 20,40 Q 60,30 40,80 Q 20,90 20,40 Z" fill="#E2E8F0" opacity="0.6" />
        <path d="M 300,160 Q 260,170 280,120 Q 300,110 300,160 Z" fill="#E2E8F0" opacity="0.6" />
        <text x="160" y="95" textAnchor="middle" fontFamily="Cabinet Grotesk" fontWeight="bold" fontSize="14" fill="#1B2450">SAVE THE DATE</text>
        <line x1="100" y1="110" x2="220" y2="110" stroke="#FF5A1F" strokeWidth="1" />
        <text x="160" y="130" textAnchor="middle" fontFamily="Plus Jakarta Sans" fontSize="7" fill="#888888" letterSpacing="1">08.20.2026</text>
      </svg>
    )
  }
];

export const INVITATION_VIDEOS_GALLERY: VideoItem[] = [
  {
    id: 'inv-vid-1',
    title: 'Udaipur Royal Palace Wedding Teaser',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    svg: (
      <svg viewBox="0 0 320 200" className="w-full h-full text-white" fill="none">
        <rect x="0" y="0" width="320" height="200" rx="12" fill="#1A0003" />
        <circle cx="160" cy="85" r="30" stroke="#FF5A1F" strokeWidth="1" opacity="0.4" />
        <polygon points="160,65 170,85 150,85" fill="#FF5A1F" />
        <text x="160" y="145" textAnchor="middle" fontFamily="Cabinet Grotesk" fontWeight="bold" fontSize="11" fill="#FFFFFF" letterSpacing="2">ROYAL WEDDING CINEMATIC</text>
        <text x="160" y="160" textAnchor="middle" fontFamily="Plus Jakarta Sans" fontSize="5" fill="#888888" letterSpacing="1">DUR: 45 SECS</text>
      </svg>
    )
  },
  {
    id: 'inv-vid-2',
    title: 'Velo Motion Minimal Event Teaser',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    svg: (
      <svg viewBox="0 0 320 200" className="w-full h-full text-white" fill="none">
        <rect x="0" y="0" width="320" height="200" rx="12" fill="#0C0D14" />
        <g transform="translate(130, 45) scale(0.6)">
          <rect x="5" y="5" width="100" height="80" stroke="#FF5A1F" strokeWidth="3" />
          <line x1="5" y1="5" x2="105" y2="85" stroke="white" strokeWidth="1" />
        </g>
        <text x="160" y="140" textAnchor="middle" fontFamily="Cabinet Grotesk" fontWeight="bold" fontSize="12" fill="#FFFFFF" letterSpacing="2.5">VELO TEASER</text>
        <text x="160" y="155" textAnchor="middle" fontFamily="Plus Jakarta Sans" fontSize="5" fill="#FF5A1F" letterSpacing="1">UPCOMING DESIGN SUMMIT</text>
      </svg>
    )
  }
];

export const PORTFOLIO_CATEGORIES: CategoryData[] = [
  {
    id: 'logo-branding',
    title: 'Logo & Branding',
    description: 'Bespoke corporate identities, brand guidelines, and letterhead typography sets.',
    count: 14,
    projects: [
      'sunelite-pharma',
      'maa-shakti-packaging',
      'lubrify',
      'shree-jwellers',
      'jwellery-hub',
      'ram-solution',
      'codexi',
      'hiyas-snacks-corner',
      'arpan-tyre',
      'umiya-industries',
      'kala-kruti',
      'mahadev-decor',
      'hetvi-travels',
      'apex-engineering'
    ],
    thumbnails: [
      <div key="t1" className="w-12 h-12 rounded bg-[#1B2450]/5 border border-[#1B2450]/10 flex items-center justify-center text-[#1B2450]">⚡</div>,
      <div key="t2" className="w-12 h-12 rounded bg-[#FF5A1F]/5 border border-[#FF5A1F]/10 flex items-center justify-center text-[#FF5A1F]">S</div>,
      <div key="t3" className="w-12 h-12 rounded bg-[#1B2450]/5 border border-[#1B2450]/10 flex items-center justify-center text-[#1B2450]">🌲</div>
    ]
  },
  {
    id: 'business-essentials',
    title: 'Business Essentials',
    description: 'Die-cut corporate visiting cards, envelope frames, letterhead specimens, and bill books.',
    count: 5,
    projects: [],
    thumbnails: [
      <div key="t1" className="w-12 h-12 rounded bg-[#FF5A1F]/5 border border-[#FF5A1F]/10 flex items-center justify-center text-[#FF5A1F]">💳</div>,
      <div key="t2" className="w-12 h-12 rounded bg-[#1B2450]/5 border border-[#1B2450]/10 flex items-center justify-center text-[#1B2450]">✉️</div>,
      <div key="t3" className="w-12 h-12 rounded bg-[#FF5A1F]/5 border border-[#FF5A1F]/10 flex items-center justify-center text-[#FF5A1F]">📝</div>
    ]
  },
  {
    id: 'marketing-design',
    title: 'Marketing Design',
    description: 'High-performance social media posts, promotional banner mockups, and swipe carousels.',
    count: 5,
    projects: [],
    thumbnails: [
      <div key="t1" className="w-12 h-12 rounded bg-[#1B2450]/5 border border-[#1B2450]/10 flex items-center justify-center text-[#1B2450]">📊</div>,
      <div key="t2" className="w-12 h-12 rounded bg-[#FF5A1F]/5 border border-[#FF5A1F]/10 flex items-center justify-center text-[#FF5A1F]">📱</div>,
      <div key="t3" className="w-12 h-12 rounded bg-[#1B2450]/5 border border-[#1B2450]/10 flex items-center justify-center text-[#1B2450]">📣</div>
    ]
  },
  {
    id: 'invitation-design',
    title: 'Invitation Design',
    description: 'Cinema-grade motion invite teasers, golden mandala card details, and watercolor save-the-dates.',
    count: 4,
    projects: [],
    thumbnails: [
      <div key="t1" className="w-12 h-12 rounded bg-[#FF5A1F]/5 border border-[#FF5A1F]/10 flex items-center justify-center text-[#FF5A1F]">💌</div>,
      <div key="t2" className="w-12 h-12 rounded bg-[#1B2450]/5 border border-[#1B2450]/10 flex items-center justify-center text-[#1B2450]">🎬</div>,
      <div key="t3" className="w-12 h-12 rounded bg-[#FF5A1F]/5 border border-[#FF5A1F]/10 flex items-center justify-center text-[#FF5A1F]">✨</div>
    ]
  }
];
