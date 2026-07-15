import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  animateHover?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  icon,
  iconPosition = 'right',
  animateHover = true,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-sans font-semibold tracking-wider uppercase transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] focus:outline-none rounded-full select-none cursor-pointer';

  const variantClasses = {
    primary: 'bg-primary text-bg-light hover:bg-primary-light hover:shadow-premium-md hover:-translate-y-0.5 active:translate-y-0',
    secondary: 'border border-primary/20 text-primary hover:border-primary hover:bg-primary/5',
    accent: 'bg-accent text-bg-light hover:bg-accent-hover hover:shadow-[0_8px_30px_rgba(255,81,0,0.25)] hover:-translate-y-0.5 active:translate-y-0',
    outline: 'border border-glass-border text-text-dark hover:border-text-dark hover:shadow-premium-sm hover:-translate-y-0.5 active:translate-y-0',
    glass: 'glass-panel-interactive text-text-dark hover:border-glass-border-glow hover:shadow-[0_8px_32px_rgba(255,81,0,0.08)] hover:-translate-y-0.5 active:translate-y-0',
  };

  const sizeClasses = {
    sm: 'text-[10px] px-5 py-2.5 gap-1.5',
    md: 'text-xs px-8 py-3.5 gap-2',
    lg: 'text-xs px-10 py-4.5 gap-2.5',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const renderContent = () => (
    <>
      {icon && iconPosition === 'left' && (
        <span className="flex items-center shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span className="relative overflow-hidden block">
        {children}
      </span>
      {icon && iconPosition === 'right' && (
        <span className="flex items-center shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  // If link using react-router
  if (href && !external) {
    return (
      <Link to={href} className={`${combinedClasses} group`}>
        {renderContent()}
      </Link>
    );
  }

  // If external link
  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${combinedClasses} group`}
      >
        {renderContent()}
      </a>
    );
  }

  // Standard Button with motion scale animations on tap
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`${combinedClasses} group`}
      {...props as any}
    >
      {renderContent()}
    </motion.button>
  );
};
export default Button;
