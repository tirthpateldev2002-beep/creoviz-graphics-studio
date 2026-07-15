import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  el: HTMLDivElement;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  createdAt: number;
  lifetime: number;
  size: number;
}

const SHAPES = [
  // 1. Pen Tool (outlined fountain pen nib)
  `<svg viewBox="0 0 24 24" class="w-full h-full" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C11.5 2 6 7.5 6 11V16H18V11C18 7.5 12.5 2 12 2Z" /><path d="M12 2V12" /><circle cx="12" cy="12" r="1" fill="currentColor" /></svg>`,
  // 2. Color Palette (outlined artist palette)
  `<svg viewBox="0 0 24 24" class="w-full h-full" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 9.5 20 8 18 8H16C15 8 14 7 14 6V4C14 2.5 12.5 2 11 2C5.47715 2 1 6.47715 1 12C1 17.5228 5.47715 22 12 22Z" /><circle cx="7.5" cy="10.5" r="1" fill="currentColor" /><circle cx="11.5" cy="7.5" r="1" fill="currentColor" /><circle cx="16.5" cy="11.5" r="1" fill="currentColor" /></svg>`,
  // 3. Rectangle (outlined rectangle)
  `<svg viewBox="0 0 24 24" class="w-full h-full" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /></svg>`,
  // 4. Circle (outlined circle)
  `<svg viewBox="0 0 24 24" class="w-full h-full" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9" /></svg>`,
  // 5. Move Tool (outlined move crosshair with arrows)
  `<svg viewBox="0 0 24 24" class="w-full h-full" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2V22" /><path d="M2 12H22" /><path d="M12 2L9 5M12 2L15 5" /><path d="M12 22L9 19M12 22L15 19" /><path d="M2 12L5 9M2 12L5 15" /><path d="M22 12L19 9M22 12L19 15" /></svg>`,
  // 6. Hexagon (outlined hexagon)
  `<svg viewBox="0 0 24 24" class="w-full h-full" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12,2 21,7.2 21,17.6 12,22.8 3,17.6 3,7.2" /></svg>`
];

const COLORS = [
  '#FF5100', // Primary Orange
  '#1B2450', // Primary Navy
  'rgba(255, 255, 255, 0.4)' // Low opacity white
];

export const CursorTrail: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const lastPosition = useRef({ x: 0, y: 0 });
  const hasMoved = useRef(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const checkDisabled = () => {
      // Automatically disable on touch/mobile devices
      const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 768;
      setDisabled(isTouch || isSmallScreen);
    };

    checkDisabled();
    window.addEventListener('resize', checkDisabled);
    return () => {
      window.removeEventListener('resize', checkDisabled);
    };
  }, []);

  useEffect(() => {
    if (disabled) return;

    const spawnParticle = (x: number, y: number) => {
      const container = containerRef.current;
      if (!container) return;

      // Maintain max 15 particles
      if (particlesRef.current.length >= 15) {
        const oldest = particlesRef.current.shift();
        if (oldest) {
          oldest.el.remove();
        }
      }

      const el = document.createElement('div');
      el.className = 'fixed pointer-events-none z-[9999]';
      
      const size = Math.floor(Math.random() * 7) + 12; // 12px to 18px
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      
      const shapeIdx = Math.floor(Math.random() * SHAPES.length);
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      
      el.style.color = color;
      el.innerHTML = SHAPES[shapeIdx];
      
      const initialX = x - size / 2;
      const initialY = y - size / 2;
      
      // Random rotation in the range of [-15, 15] degrees
      const rotation = Math.random() * 30 - 15;
      el.style.transform = `translate3d(${initialX}px, ${initialY}px, 0) scale(0.7) rotate(${rotation}deg)`;
      el.style.opacity = '1';
      
      container.appendChild(el);
      
      const floatUpSpeed = Math.random() * 0.3 + 0.3; // px per frame, gentle drift
      
      particlesRef.current.push({
        el,
        x: initialX,
        y: initialY,
        vx: (Math.random() * 0.2 - 0.1), // minimal horizontal drift
        vy: -floatUpSpeed,
        rotation,
        createdAt: Date.now(),
        lifetime: Math.floor(Math.random() * 201) + 700, // 700ms - 900ms
        size
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const currentX = e.clientX;
      const currentY = e.clientY;
      
      if (!hasMoved.current) {
        lastPosition.current = { x: currentX, y: currentY };
        hasMoved.current = true;
        return;
      }
      
      const dx = currentX - lastPosition.current.x;
      const dy = currentY - lastPosition.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      const threshold = 24; // Subtle fixed threshold for trail generation
      
      if (distance >= threshold) {
        spawnParticle(currentX, currentY);
        lastPosition.current = { x: currentX, y: currentY };
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;

    const updateParticles = () => {
      const now = Date.now();
      particlesRef.current = particlesRef.current.filter((p) => {
        const elapsed = now - p.createdAt;
        if (elapsed >= p.lifetime) {
          p.el.remove();
          return false;
        }
        
        const progress = elapsed / p.lifetime;
        
        p.x += p.vx;
        p.y += p.vy;
        
        // Scale 0.7 -> 1.0 -> 0.0
        let scale = 1.0;
        if (progress < 0.3) {
          scale = 0.7 + (0.3 * (progress / 0.3));
        } else {
          scale = 1.0 - (1.0 * ((progress - 0.3) / 0.7));
        }
        
        // Opacity fades out smoothly
        const opacity = 1 - progress;
        
        p.el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) rotate(${p.rotation}deg) scale(${scale})`;
        p.el.style.opacity = `${opacity}`;
        
        return true;
      });
      
      animationFrameId = requestAnimationFrame(updateParticles);
    };

    animationFrameId = requestAnimationFrame(updateParticles);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      // Clean up any remaining particles
      particlesRef.current.forEach((p) => p.el.remove());
      particlesRef.current = [];
      hasMoved.current = false;
    };
  }, [disabled]);

  if (disabled) return null;

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[9999]" />;
};

export default CursorTrail;
