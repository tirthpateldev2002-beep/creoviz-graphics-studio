import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';
import Lenis from 'lenis';

interface SmoothScrollProps {
  children: React.ReactNode;
}

export const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const location = useLocation();
  const navType = useNavigationType();
  const scrollPositions = useRef<Record<string, number>>({});

  // Initialize scroll positions from sessionStorage
  useEffect(() => {
    try {
      const stored = sessionStorage.getItem('creoviz_scroll_positions');
      if (stored) {
        scrollPositions.current = JSON.parse(stored);
      }
    } catch (e) {
      console.error('Failed to load scroll positions from sessionStorage', e);
    }
  }, []);

  // Save scroll position when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (location.key) {
        scrollPositions.current[location.key] = window.scrollY;
        try {
          sessionStorage.setItem('creoviz_scroll_positions', JSON.stringify(scrollPositions.current));
        } catch (e) {
          // ignore storage quota errors
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.key]);

  // Reset scroll or restore position on navigation
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const savedPos = scrollPositions.current[location.key] || 0;

    if (navType === 'POP') {
      const restoreScroll = () => {
        if (lenisRef.current) {
          lenisRef.current.scrollTo(savedPos, { immediate: true });
        } else {
          window.scrollTo(0, savedPos);
        }
      };

      restoreScroll();
      
      const rafId = requestAnimationFrame(restoreScroll);
      const timeoutId = setTimeout(restoreScroll, 50);

      return () => {
        cancelAnimationFrame(rafId);
        clearTimeout(timeoutId);
      };
    } else {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      }
      window.scrollTo(0, 0);
    }
  }, [location, navType]);

  useEffect(() => {
    // Detect touch / mobile devices to bypass Lenis smooth scroll
    const isTouchDevice = 
      (typeof window !== 'undefined') && (
        window.matchMedia('(pointer: coarse)').matches ||
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.innerWidth < 768
      );

    if (isTouchDevice) {
      return;
    }

    // Initialize Lenis smooth scroll with luxurious, smooth parameters for desktop
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Premium exponential ease-out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    // Connect Lenis to requestAnimationFrame
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <>{children}</>;
};
