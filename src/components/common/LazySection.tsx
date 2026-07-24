import React, { useState, useEffect, useRef } from 'react';

interface LazySectionProps {
  children: React.ReactNode;
  placeholderHeight?: string;
  rootMargin?: string;
}

export const LazySection: React.FC<LazySectionProps> = ({
  children,
  placeholderHeight = 'min-h-[200px]',
  rootMargin = '200px 0px',
}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If IntersectionObserver is not supported, fallback to rendering immediately
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={isIntersecting ? '' : placeholderHeight}>
      {isIntersecting ? children : null}
    </div>
  );
};

export default LazySection;
