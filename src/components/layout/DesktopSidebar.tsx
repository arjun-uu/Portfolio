import React from 'react';
import { SidebarNavigation } from './SidebarNavigation';
import { SidebarSocialLinks } from './SidebarSocialLinks';
import { StatusBadge } from '../common/StatusBadge';

export function DesktopSidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-60 bg-brand-bg-panel border-r border-brand-border-dark p-4 gap-6 shrink-0 select-none">
      {/* Navigation Links */}
      <SidebarNavigation />

      {/* Divider */}
      <div className="border-t border-brand-border-dark/40 my-1" />

      {/* Status Section */}
      <div className="flex flex-col gap-2">
        <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider px-2 font-mono">
          Status
        </div>
        <div className="px-1">
          <StatusBadge />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-brand-border-dark/40 my-1" />

      {/* Social / External Links */}
      <SidebarSocialLinks />

      {/* Quick Interactive Widget */}
      <div className="mt-auto bg-gradient-to-br from-brand-accent-primary/5 to-brand-accent-secondary/5 border border-brand-border-dark rounded p-3 text-center text-[10px] leading-relaxed font-mono">
        <span className="text-slate-400">Let's </span>
        <span className="text-brand-accent-primary font-bold">build</span>
        <span className="text-slate-400"> something amazing together! 🚀</span>
      </div>
    </aside>
  );
}
