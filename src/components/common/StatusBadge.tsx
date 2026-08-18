import React from 'react';
import { siteConfig } from '../../constants/site';
import { cn } from '../../utils/cn';

export function StatusBadge() {
  const { label, state } = siteConfig.availability;
  
  return (
    <div className="flex items-center justify-between bg-brand-bg-panelLight border border-brand-border-dark rounded p-2.5 text-xs font-mono w-full">
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          {state === 'available' && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent-primary opacity-75"></span>
          )}
          {state === 'busy' && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent-orange opacity-75"></span>
          )}
          <span className={cn(
            "relative inline-flex rounded-full h-2 w-2",
            {
              "bg-brand-accent-primary": state === 'available',
              "bg-brand-accent-orange": state === 'busy',
              "bg-slate-500": state === 'unavailable',
            }
          )}></span>
        </span>
        <span className="text-slate-400 font-sans">{label}</span>
      </div>
      <span className={cn(
        "px-1.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider",
        {
          "bg-brand-accent-primary/10 text-brand-accent-primary border border-brand-accent-primary/20": state === 'available',
          "bg-brand-accent-orange/10 text-brand-accent-orange border border-brand-accent-orange/20": state === 'busy',
          "bg-slate-800 text-slate-500 border border-slate-700": state === 'unavailable',
        }
      )}>
        {state === 'available' ? 'Available' : state === 'busy' ? 'Busy' : 'Away'}
      </span>
    </div>
  );
}
