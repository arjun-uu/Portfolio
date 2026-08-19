import React from 'react';
import { useCurrentTime } from '../../hooks/useCurrentTime';
import { siteConfig } from '../../constants/site';
import { cn } from '../../utils/cn';

export function Footer() {
  const { time, utcOffset } = useCurrentTime();
  const { state, label } = siteConfig.availability;

  return (
    <footer className="h-10 bg-brand-bg-panel border-t border-brand-border-dark flex items-center justify-between px-4 text-[10px] md:text-xs font-mono text-slate-500 select-none z-10 shrink-0">
      {/* Left: Credit */}
      <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-[10px] sm:text-xs select-none whitespace-nowrap">
        <span className="text-brand-accent-primary">$</span>
        <span className="text-brand-accent-primary">code</span>
        <span className="text-slate-400">→</span>
        <span className="text-brand-accent-secondary">build</span>
        <span className="text-slate-400">→</span>
        <span className="text-brand-accent-purple">learn</span>
        <span className="text-slate-400">→</span>
        <span className="text-brand-accent-orange">repeat</span>
      </div>

      {/* Center: Status & Location (Hidden on mobile) */}
      <div className="hidden sm:flex items-center gap-2">
        <span className={cn(
          "w-1.5 h-1.5 rounded-full relative inline-block",
          {
            "bg-brand-accent-primary": state === 'available',
            "bg-brand-accent-orange": state === 'busy',
            "bg-slate-600": state === 'unavailable'
          }
        )}>
          {state === 'available' && (
            <span className="absolute inset-0 rounded-full bg-brand-accent-primary animate-ping opacity-75"></span>
          )}
        </span>
        <span>{label}</span>
        <span className="text-slate-700 font-bold">·</span>
        <span>{siteConfig.location}</span>
      </div>

      {/* Right: Clock */}
      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 whitespace-nowrap">
        <span className="text-slate-300 font-bold tracking-wider text-[10px] sm:text-xs">{time}</span>
        <span className="hidden xs:inline-block bg-brand-bg-dark border border-brand-border-dark px-1.5 py-0.5 rounded text-[9px] text-slate-400">
          UTC {utcOffset}
        </span>
      </div>
    </footer>
  );
}
