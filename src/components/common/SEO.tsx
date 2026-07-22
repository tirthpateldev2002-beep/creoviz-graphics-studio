import React from 'react';

export interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  schema?: Record<string, any> | Record<string, any>[];
  preloadImage?: string;
}

const DEFAULT_IMAGE = 'https://creoviz-graphics-studio.vercel.app/brand-images/Creoviz%20Graphic%20Studio%20Business%20Card.png';
const BASE_URL = 'https://creoviz-graphics-studio.vercel.app';

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  type = 'website',
  schema,
  preloadImage,
}) => {
  // Ensure paths are handled cleanly
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const canonicalUrl = `${BASE_URL}${cleanPath}`;
  const finalImage = image.startsWith('http') ? image : `${BASE_URL}${image}`;

  return (
    <>
      {/* Primary Document Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Canonical Link */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Creoviz Graphics Studio" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={finalImage} />

      {/* Preload dynamic Hero/LCP Image */}
      {preloadImage && (
        <link
          rel="preload"
          as="image"
          href={preloadImage.startsWith('http') ? preloadImage : `${BASE_URL}${preloadImage}`}
          fetchPriority="high"
        />
      )}

      {/* Structured JSON-LD Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </>
  );
};
