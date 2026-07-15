import React, { useState, useCallback } from 'react';
import { CardHeader, CardContent, CardFooter } from './Card';
import { ArrowRight } from 'lucide-react';

interface ServiceProps {
  service: {
    index: string;
    title: string;
    description: string;
    icon: React.ReactElement;
  };
}

// Reusable ServiceCard with premium glass styling, hover, and mouse‑tilt effect
export const ServiceCard: React.FC<ServiceProps> = ({ service }) => {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) - 0.5; // -0.5 .. 0.5
    const y = ((e.clientY - rect.top) / rect.height) - 0.5;
    const maxTilt = 6; // degrees
    setTilt({ rotateX: -y * maxTilt, rotateY: x * maxTilt });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0 });
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group/card relative h-full w-full transition-transform duration-300 ease-out hover:-translate-y-2"
      style={{
        perspective: '1000px',
      }}
    >
      {/* Absolute Glow Layer behind the card */}
      <div 
        className="absolute inset-[-15px] bg-[#FF5A1F]/18 rounded-[35px] blur-[38px] opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none z-0" 
      />

      {/* The main glassmorphic card on top */}
      <div
        style={{
          background: 'rgba(27,36,80,0.38)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '22px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.22)',
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          transition: 'transform 0.35s ease-out, border-color 0.3s ease-out, background-color 0.3s ease-out',
        }}
        className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8 border border-white/10 rounded-[22px] hover:border-[#FF5A1F] hover:bg-[rgba(27,36,80,0.52)] transition-all duration-300 cursor-pointer"
      >
        <CardHeader className="flex items-center justify-between p-0 mb-6">
          <span className="font-display font-bold text-base text-[#FF5A1F] transition-transform duration-300 group-hover/card:scale-110">
            {service.index}
          </span>
          <div className="w-9 h-9 rounded-lg bg-[#FF5A1F]/5 border border-[#FF5A1F]/10 flex items-center justify-center transition-all duration-300 ease-out group-hover/card:rotate-12 group-hover/card:bg-[#FF5A1F]/15">
            {React.cloneElement(service.icon as any, {
              className: 'w-5 h-5 text-[#FF5A1F] transition-all duration-300 ease-out group-hover/card:scale-[1.12] group-hover/card:rotate-[10deg]'
            })}
          </div>
        </CardHeader>
        <h3 className="font-display font-semibold text-lg text-white uppercase mb-4 mt-2 transition-colors duration-300 group-hover/card:text-[#FF5A1F]">
          {service.title}
        </h3>
        <CardContent className="text-white/72 p-0 font-light text-sm leading-relaxed">
          {service.description}
        </CardContent>
        <CardFooter className="mt-8 pt-4 border-t border-white/5 p-0 flex items-center justify-end text-xs font-sans font-bold tracking-widest text-white uppercase transition-colors duration-300 group-hover/card:text-[#FF5A1F]">
          <ArrowRight className="w-3.5 h-3.5 text-[#FF5A1F] transition-transform duration-300 ease-out group-hover/card:translate-x-2" />
        </CardFooter>
      </div>
    </div>
  );
};

export default ServiceCard;
