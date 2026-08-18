import React from 'react';
import { IconType } from 'react-icons';
import { cn } from '../../utils/cn';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  icon?: IconType;
  badge?: string;
  iconColorClass?: string;
}

export function SectionHeading({ 
  title, 
  subtitle, 
  icon: Icon, 
  badge,
  iconColorClass = "text-brand-accent-primary"
}: SectionHeadingProps) {
  return (
    <div className="mb-8 font-mono select-none">
      <div className="flex items-center gap-2 flex-wrap">
        {Icon && <Icon className={cn("text-xl md:text-2xl", iconColorClass)} />}
        <h1 className="text-lg md:text-2xl font-bold tracking-tight text-white flex items-center">
          {title}
          <span className="text-brand-accent-primary ml-0.5 animate-cursor-blink">_</span>
        </h1>
        {badge && (
          <span className="ml-2 bg-brand-bg-panelLight text-slate-400 text-[10px] font-semibold px-2 py-0.5 rounded border border-brand-border-dark uppercase tracking-wider">
            {badge}
          </span>
        )}
      </div>
      {subtitle && (
        <p className="text-slate-400 text-xs md:text-sm font-sans mt-1.5 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
