import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { TerminalHeader } from './TerminalHeader';
import { DesktopSidebar } from './DesktopSidebar';
import { MobileSidebar } from './MobileSidebar';
import { MobileBottomNav } from './MobileBottomNav';
import { Footer } from './Footer';
import { TerminalBreadcrumb } from './TerminalBreadcrumb';
import { CommandPalette } from '../common/CommandPalette';
import { useTheme } from '../../hooks/useTheme';
import { siteConfig } from '../../constants/site';

export function AppLayout() {
  const { resolvedTheme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // Global key listener for Ctrl+K, T, and R shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+K / Cmd+K -> Toggle Command Palette
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
        return;
      }

      // Ignore shortcuts if the user is typing in form inputs or textareas
      const activeEl = document.activeElement;
      const isTyping = activeEl && (
        activeEl.tagName === 'INPUT' || 
        activeEl.tagName === 'TEXTAREA' || 
        activeEl.getAttribute('contenteditable') === 'true'
      );
      if (isTyping) return;

      // 'T' / 't' -> Toggle Theme
      if (e.key === 't' || e.key === 'T') {
        e.preventDefault();
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
      }

      // 'R' / 'r' -> Download/Open Resume
      if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        if (siteConfig.resumeUrl) {
          window.open(siteConfig.resumeUrl, '_blank', 'noopener,noreferrer');
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [resolvedTheme, setTheme]);

  return (
    <div className="h-screen overflow-hidden flex flex-col bg-brand-bg-dark text-slate-300 relative pb-14 lg:pb-0">

      {/* Subtle developer grid background pattern */}
      <div className="fixed inset-0 pointer-events-none subtle-grid opacity-80 z-0" />

      {/* Subtle green ambient glow top-left */}
      <div className="fixed top-0 left-0 w-[45vw] h-[45vw] glow-emerald pointer-events-none opacity-[0.15] z-0 blur-[80px]" />

      {/* Subtle cyan ambient glow bottom-right */}
      <div className="fixed bottom-0 right-0 w-[45vw] h-[45vw] glow-cyan pointer-events-none opacity-[0.12] z-0 blur-[80px]" />

      {/* Terminal Header Bar */}
      <TerminalHeader
        onMenuToggle={() => setIsMobileMenuOpen((prev) => !prev)}
        onCommandPaletteToggle={() => setIsCommandPaletteOpen((prev) => !prev)}
      />

      {/* Main Workspace Layout */}
      <div className="flex-1 flex overflow-hidden relative z-10">

        {/* Desktop Sidebar Panel */}
        <DesktopSidebar />

        {/* Content Explorer Panel */}
        <main className="flex-1 flex flex-col min-w-0 overflow-y-auto px-4 md:px-8 py-6 select-text max-h-[calc(100vh-3.5rem-2.5rem)] lg:max-h-[calc(100vh-3.5rem-2.5rem)]">
          {/* Automatic page-specific Breadcrumbs */}
          <TerminalBreadcrumb />

          {/* Nested Route Views */}
          <div className="flex-1">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Status Bar / Footer */}
      <Footer />

      {/* Mobile drawer overlays */}
      <MobileSidebar
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile sticky bottom tabs */}
      <MobileBottomNav />

      {/* Global Command Palette dialog */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />

      {/* Global Toast Alerts container */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={resolvedTheme}
        toastClassName="bg-brand-bg-panel border border-brand-border-dark font-mono text-xs text-slate-300 rounded-md"
        bodyClassName="font-sans"
        progressClassName="bg-brand-accent-primary"
      />
    </div>
  );
}
export default AppLayout;
