import React from 'react';

interface ResponsiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className,
  loading = 'lazy',
  fetchPriority = 'auto',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px',
  ...props
}) => {
  // Check if this image is a candidate for responsive srcset
  const isBrandImage = src && src.startsWith('/brand-images/') && src.endsWith('.webp') && !src.match(/-(400|800|1200)\.webp$/);

  if (isBrandImage) {
    const basePath = src.substring(0, src.lastIndexOf('.webp'));
    const srcSet = `
      ${basePath}-400.webp 400w,
      ${basePath}-800.webp 800w,
      ${basePath}-1200.webp 1200w,
      ${src} 1600w
    `.trim().replace(/\s+/g, ' ');

    return (
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        className={className}
        loading={loading}
        // @ts-ignore - fetchPriority is supported in React 19 but tsconfig may type-check strictly
        fetchPriority={fetchPriority}
        {...props}
      />
    );
  }

  // Fallback to standard img tag for non-brand-images
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      // @ts-ignore
      fetchPriority={fetchPriority}
      {...props}
    />
  );
};

export default ResponsiveImage;
