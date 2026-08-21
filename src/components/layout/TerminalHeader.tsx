import React from 'react';
import { FiGithub, FiSun, FiMoon, FiSearch, FiMenu } from 'react-icons/fi';
import { useTheme } from '../../hooks/useTheme';
import { siteConfig } from '../../constants/site';

interface TerminalHeaderProps {
  onMenuToggle: () => void;
  onCommandPaletteToggle: () => void;
}

export function TerminalHeader({ onMenuToggle, onCommandPaletteToggle }: TerminalHeaderProps) {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="h-14 bg-brand-bg-panel border-b border-brand-border-dark flex items-center justify-between px-4 sticky top-0 z-40 select-none">
      <div className="flex items-center gap-3">
        {/* macOS Dots */}
        <div className="flex gap-1.5 mr-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors cursor-pointer" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors cursor-pointer" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors cursor-pointer" />
        </div>
        
        {/* Prompt */}
        <div className="hidden sm:flex items-center font-mono text-xs text-slate-400">
          <span className="text-brand-accent-primary font-semibold">{siteConfig.username}</span>
          <span className="text-slate-500">@</span>
          <span className="text-brand-accent-secondary font-semibold">{siteConfig.domain}</span>
          <span className="text-slate-500 font-bold ml-1">:~$</span>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        {/* Command Palette Indicator (Desktop) */}
        <button
          onClick={onCommandPaletteToggle}
          className="hidden md:flex items-center gap-2 bg-brand-bg-dark border border-brand-border-dark hover:border-slate-700 px-3 py-1.5 rounded text-xs font-mono text-slate-500 hover:text-slate-300 transition-all select-none"
          title="Open Command Palette (Ctrl+K)"
        >
          <FiSearch className="text-sm" />
          <span>Search...</span>
          <kbd className="bg-slate-900 border border-slate-800 text-[10px] px-1.5 py-0.5 rounded leading-none">
            Ctrl K
          </kbd>
        </button>

        {/* Command Palette Button (Mobile) */}
        <button
          onClick={onCommandPaletteToggle}
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          aria-label="Search"
        >
          <FiSearch className="text-lg" />
        </button>

        {/* GitHub / Code Link */}
        <a
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors font-mono px-3 py-1.5 rounded bg-brand-bg-dark border border-brand-border-dark"
        >
          <FiGithub />
          <span>GitHub</span>
        </a>

        {/* Resume Button */}
        <a
          href={siteConfig.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center font-mono text-xs px-3 py-1.5 rounded transition-all bg-brand-accent-primary text-brand-bg-dark font-semibold shadow-glow-primary hover:bg-brand-accent-primary/90"
        >
          Resume
        </a>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 text-slate-400 hover:text-white transition-colors rounded border border-brand-border-dark bg-brand-bg-dark sm:bg-transparent sm:border-0"
          title={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {resolvedTheme === 'dark' ? <FiSun className="text-base" /> : <FiMoon className="text-base" />}
        </button>

        {/* Mobile Hamburger menu */}
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors"
          aria-label="Toggle navigation menu"
        >
          <FiMenu className="text-xl" />
        </button>
      </div>
    </header>
  );
}
