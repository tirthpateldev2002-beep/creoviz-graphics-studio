import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'glass' | 'elevated' | 'outline' | 'borderless';
  hoverEffect?: 'none' | 'lift' | 'glow' | 'scale';
  children: React.ReactNode;
  cursorLabel?: string; // Optional label for the custom cursor when hovering
}

export const Card: React.FC<CardProps> = ({
  variant = 'outline',
  hoverEffect = 'lift',
  children,
  cursorLabel,
  className = '',
  ...props
}) => {
  const baseClasses = 'relative rounded-premium-md p-8 md:p-10 transition-all duration-500 overflow-hidden';

  const variantClasses = {
    glass: 'glass-panel-interactive',
    elevated: 'bg-bg-card shadow-premium-sm hover:shadow-premium-md border border-primary/5',
    outline: 'border border-glass-border hover:border-glass-border-glow bg-bg-card/40',
    borderless: 'bg-transparent',
  };

  const hoverClasses = {
    none: '',
    lift: 'hover:-translate-y-1.5 hover:shadow-premium-md',
    glow: 'hover:border-accent/30 hover:shadow-[0_12px_48px_rgba(255,81,0,0.06)]',
    scale: 'hover:scale-[1.02] hover:shadow-premium-md',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${hoverEffect !== 'none' ? hoverClasses[hoverEffect] : ''} ${className}`;

  return (
    <div
      className={combinedClasses}
      data-cursor={cursorLabel}
      {...props}
    >
      {/* Subtle shine overlay for glass card */}
      {variant === 'glass' && (
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-accent-gold/2 to-transparent opacity-50" />
      )}
      {children}
    </div>
  );
};

// Subcomponents for structured layouts
export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...props }) => (
  <div className={`mb-6 flex items-start justify-between gap-4 ${className}`} {...props}>
    {children}
  </div>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...props }) => (
  <div className={`text-text-secondary text-sm font-light leading-relaxed ${className}`} {...props}>
    {children}
  </div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...props }) => (
  <div className={`mt-8 pt-6 border-t border-glass-border/40 flex items-center justify-between ${className}`} {...props}>
    {children}
  </div>
);

export default Card;
