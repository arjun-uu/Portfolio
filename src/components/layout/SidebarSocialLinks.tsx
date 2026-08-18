import React from 'react';
import { socialLinks } from '../../data/socialLinks';
import { FiExternalLink } from 'react-icons/fi';

export function SidebarSocialLinks() {
  return (
    <div className="flex flex-col gap-1 w-full font-mono text-xs select-none">
      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2 px-2">
        Quick Links
      </div>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-3 py-1.5 rounded text-slate-400 hover:text-slate-200 hover:bg-brand-bg-panelLight transition-all group"
        >
          <div className="flex items-center gap-2.5">
            <link.icon className="text-sm group-hover:text-brand-accent-secondary transition-colors" />
            <span>{link.name}</span>
          </div>
          <FiExternalLink className="text-[10px] opacity-0 group-hover:opacity-100 transition-all duration-150" />
        </a>
      ))}
    </div>
  );
}
