import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverGlow?: boolean;
  glowColor?: 'primary' | 'secondary' | 'purple' | 'orange';
}

export function Card({ 
  className, 
  children, 
  hoverGlow = true, 
  glowColor = 'primary',
  ...props 
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-brand-bg-panel border border-brand-border-dark rounded-lg p-5 transition-all duration-300 relative overflow-hidden",
        {
          "hover:border-brand-accent-primary/40 hover:shadow-glow-primary": hoverGlow && glowColor === 'primary',
          "hover:border-brand-accent-secondary/40 hover:shadow-glow-secondary": hoverGlow && glowColor === 'secondary',
          "hover:border-brand-accent-purple/40 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]": hoverGlow && glowColor === 'purple',
          "hover:border-brand-accent-orange/40 hover:shadow-[0_0_15px_rgba(249,115,22,0.15)]": hoverGlow && glowColor === 'orange',
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
