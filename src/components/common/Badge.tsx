import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'purple' | 'orange' | 'outline' | 'gray';
  size?: 'sm' | 'md';
}

export function Badge({
  className,
  children,
  variant = 'outline',
  size = 'sm',
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-mono rounded font-medium tracking-wide transition-colors duration-150",
        {
          "bg-brand-accent-primary/10 text-brand-accent-primary border border-brand-accent-primary/20": variant === 'primary',
          "bg-brand-accent-secondary/10 text-brand-accent-secondary border border-brand-accent-secondary/20": variant === 'secondary',
          "bg-brand-accent-purple/10 text-brand-accent-purple border border-brand-accent-purple/20": variant === 'purple',
          "bg-brand-accent-orange/10 text-brand-accent-orange border border-brand-accent-orange/20": variant === 'orange',
          "bg-brand-bg-panelLight text-slate-300 border border-brand-border-dark": variant === 'outline',
          "bg-slate-800/50 text-slate-400 border border-transparent": variant === 'gray',
        },
        {
          "px-2 py-0.5 text-[10px]": size === 'sm',
          "px-3 py-1 text-xs": size === 'md',
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
