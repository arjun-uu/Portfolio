import React, { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiHome, FiCode, FiFolder, FiBookOpen, FiBriefcase, 
  FiFileText, FiMail, FiGithub, FiSun, FiMoon, FiCornerDownLeft, FiTerminal 
} from 'react-icons/fi';
import { siteConfig } from '../../constants/site';
import { useTheme } from '../../hooks/useTheme';
import { cn } from '../../utils/cn';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandItem {
  id: string;
  name: string;
  category: string;
  icon: React.ComponentType<any>;
  shortcut?: string;
  action: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const navigate = useNavigate();
  const { resolvedTheme, setTheme } = useTheme();
  const [search, setSearch] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setSearch('');
      setActiveIndex(0);
      // Timeout to ensure modal has mounted
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Define commands list
  const commands: CommandItem[] = [
    {
      id: 'home',
      name: 'Go to Home',
      category: 'Navigation',
      icon: FiHome,
      action: () => { navigate('/'); onClose(); }
    },
    {
      id: 'skills',
      name: 'View Skills',
      category: 'Navigation',
      icon: FiCode,
      action: () => { navigate('/skills'); onClose(); }
    },
    {
      id: 'projects',
      name: 'Explore Projects',
      category: 'Navigation',
      icon: FiFolder,
      action: () => { navigate('/projects'); onClose(); }
    },
    {
      id: 'education',
      name: 'View Education History',
      category: 'Navigation',
      icon: FiBookOpen,
      action: () => { navigate('/education'); onClose(); }
    },
    {
      id: 'experience',
      name: 'View Work Experience',
      category: 'Navigation',
      icon: FiBriefcase,
      action: () => { navigate('/experience'); onClose(); }
    },
    {
      id: 'articles',
      name: 'Read Articles & Blog',
      category: 'Navigation',
      icon: FiFileText,
      action: () => { navigate('/articles'); onClose(); }
    },
    {
      id: 'playground',
      name: 'Open Developer Playground',
      category: 'Navigation',
      icon: FiTerminal,
      action: () => { navigate('/playground'); onClose(); }
    },
    {
      id: 'contact',
      name: 'Get in Touch',
      category: 'Navigation',
      icon: FiMail,
      action: () => { navigate('/contact'); onClose(); }
    },
    {
      id: 'theme',
      name: `Switch to ${resolvedTheme === 'dark' ? 'Light' : 'Dark'} Theme`,
      category: 'Preferences',
      icon: resolvedTheme === 'dark' ? FiSun : FiMoon,
      shortcut: 'T',
      action: () => { setTheme(resolvedTheme === 'dark' ? 'light' : 'dark'); onClose(); }
    },
    {
      id: 'github',
      name: 'Open GitHub Profile',
      category: 'External Links',
      icon: FiGithub,
      action: () => { window.open(siteConfig.github, '_blank', 'noopener,noreferrer'); onClose(); }
    },
    {
      id: 'resume',
      name: 'Download Resume PDF',
      category: 'Documents',
      icon: FiFileText,
      shortcut: 'R',
      action: () => { window.open(siteConfig.resumeUrl, '_blank', 'noopener,noreferrer'); onClose(); }
    }
  ];

  // Filter commands by query
  const filteredCommands = commands.filter(cmd => 
    cmd.name.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  // Keyboard navigation inside menu
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % filteredCommands.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands[activeIndex]) {
        filteredCommands[activeIndex].action();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  // Keep active item in scroll viewport view
  useEffect(() => {
    const listElement = listRef.current;
    if (listElement && listElement.children[activeIndex]) {
      const activeElement = listElement.children[activeIndex] as HTMLElement;
      const listHeight = listElement.clientHeight;
      const activeHeight = activeElement.clientHeight;
      const activeTop = activeElement.offsetTop;
      const scrollPosition = listElement.scrollTop;

      if (activeTop + activeHeight > scrollPosition + listHeight) {
        listElement.scrollTop = activeTop + activeHeight - listHeight;
      } else if (activeTop < scrollPosition) {
        listElement.scrollTop = activeTop;
      }
    }
  }, [activeIndex]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4 font-sans select-none"
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      {/* Backdrop overlay */}
      <div 
        className="fixed inset-0 bg-brand-bg-dark/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Palette Container */}
      <div className="relative w-full max-w-lg bg-brand-bg-panel border border-brand-border-dark rounded-lg shadow-2xl flex flex-col overflow-hidden max-h-[50vh] z-10 animate-fade-in-up">
        
        {/* Input Bar */}
        <div className="flex items-center gap-3 px-4 border-b border-brand-border-dark bg-brand-bg-dark/50">
          <span className="text-brand-accent-primary font-mono text-sm font-bold">$</span>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search commands (e.g. 'View Projects')..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setActiveIndex(0);
            }}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent py-4 text-sm text-white placeholder-slate-500 focus:outline-none font-mono"
          />
          <span className="text-[10px] text-slate-500 font-mono bg-slate-900 border border-slate-800 px-1.5 py-0.5 rounded uppercase">
            ESC
          </span>
        </div>

        {/* Command List */}
        <div 
          ref={listRef}
          className="flex-1 overflow-y-auto p-2 divide-y divide-transparent max-h-[300px]"
        >
          {filteredCommands.length === 0 ? (
            <div className="py-8 px-4 text-center font-mono text-xs text-slate-500">
              No commands matched your query.
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const Icon = cmd.icon;
              return (
                <div
                  key={cmd.id}
                  onClick={() => cmd.action()}
                  className={cn(
                    "flex items-center justify-between px-3 py-2.5 rounded cursor-pointer transition-all duration-100",
                    {
                      "bg-brand-accent-primary/10 text-white font-semibold": idx === activeIndex,
                      "text-slate-400 hover:text-slate-200": idx !== activeIndex
                    }
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={cn(
                      "text-base shrink-0",
                      idx === activeIndex ? "text-brand-accent-primary" : "text-slate-500"
                    )} />
                    <div className="flex flex-col">
                      <span className="text-xs">{cmd.name}</span>
                      <span className="text-[9px] text-slate-500 font-medium tracking-wide uppercase font-mono">{cmd.category}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {cmd.shortcut && (
                      <kbd className="font-mono text-[9px] bg-brand-bg-dark border border-brand-border-dark px-1.5 py-0.5 rounded text-slate-500">
                        {cmd.shortcut}
                      </kbd>
                    )}
                    {idx === activeIndex && (
                      <FiCornerDownLeft className="text-brand-accent-primary text-xs opacity-80" />
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Help Footer */}
        <div className="bg-brand-bg-dark/40 border-t border-brand-border-dark px-4 py-2 flex items-center justify-between font-mono text-[9px] text-slate-500">
          <div className="flex gap-3">
            <span><kbd className="bg-slate-900 px-1 rounded">↑↓</kbd> Navigate</span>
            <span><kbd className="bg-slate-900 px-1 rounded">Enter</kbd> Select</span>
          </div>
          <span>Command Menu</span>
        </div>
      </div>
    </div>
  );
}
