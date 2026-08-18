import React, { useEffect } from 'react';
import { SidebarNavigation } from './SidebarNavigation';
import { SidebarSocialLinks } from './SidebarSocialLinks';
import { StatusBadge } from '../common/StatusBadge';
import { FiX } from 'react-icons/fi';
import { siteConfig } from '../../constants/site';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  // Prevent body scrolls when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 lg:hidden flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
    >
      {/* Backdrop Backdrop Overlay */}
      <div 
        className="fixed inset-0 bg-brand-bg-dark/85 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Container */}
      <div className="relative w-72 max-w-[85vw] bg-brand-bg-panel border-l border-brand-border-dark h-full flex flex-col p-4 gap-6 animate-slide-in-right z-10 shadow-2xl">
        
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-3 border-b border-brand-border-dark/40 font-mono">
          <div className="flex items-center gap-1 text-xs">
            <span className="text-brand-accent-primary font-bold">{siteConfig.username}</span>
            <span className="text-slate-500">@</span>
            <span className="text-brand-accent-secondary font-bold">{siteConfig.domain}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <FiX className="text-lg" />
          </button>
        </div>

        {/* Navigation Section */}
        <SidebarNavigation onItemClick={onClose} />

        {/* Divider */}
        <div className="border-t border-brand-border-dark/40 my-1" />

        {/* Status */}
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

        {/* Quick Socials */}
        <SidebarSocialLinks />
      </div>
    </div>
  );
}
