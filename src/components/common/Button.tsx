import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'terminal';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = 'primary',
      size = 'md',
      isLoading,
      leftIcon,
      rightIcon,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center font-mono rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent-primary/50 disabled:opacity-50 disabled:cursor-not-allowed",
          // Variants
          {
            'bg-brand-accent-primary hover:bg-brand-accent-primary/90 text-brand-bg-dark font-medium shadow-glow-primary':
              variant === 'primary',
            'bg-brand-bg-panelLight border border-brand-border-dark hover:bg-brand-accent-secondary/10 hover:border-brand-accent-secondary text-brand-accent-secondary':
              variant === 'secondary',
            'bg-transparent border border-brand-border-dark hover:bg-brand-bg-panelLight text-slate-300 hover:text-white':
              variant === 'outline',
            'bg-transparent hover:bg-brand-bg-panelLight text-slate-400 hover:text-slate-200':
              variant === 'ghost',
            'bg-brand-bg-dark border border-brand-accent-primary/50 text-brand-accent-primary hover:bg-brand-accent-primary/10 font-bold':
              variant === 'terminal',
          },
          // Sizes
          {
            'px-2.5 py-1.5 text-xs': size === 'sm',
            'px-4 py-2 text-sm': size === 'md',
            'px-6 py-3 text-base': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!isLoading && leftIcon && <span className="mr-1.5">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span className="ml-1.5">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
