import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiCode, FiFolder, FiMail, FiBook } from 'react-icons/fi';
import { cn } from '../../utils/cn';

export function MobileBottomNav() {
  const items = [
    { name: 'Home', path: '/', icon: FiHome },
    { name: 'Skills', path: '/skills', icon: FiCode },
    { name: 'Projects', path: '/projects', icon: FiFolder },
    { name: 'Education', path: '/education', icon: FiBook },
    { name: 'Contact', path: '/contact', icon: FiMail },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 h-14 bg-brand-bg-panel/90 backdrop-blur-md border-t border-brand-border-dark flex items-center justify-around z-40 px-2 select-none">
      {items.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) => cn(
            "flex flex-col items-center justify-center gap-1 font-mono text-[9px] w-14 h-full transition-all duration-200",
            {
              "text-brand-accent-primary scale-105 font-bold": isActive,
              "text-slate-400 hover:text-slate-200": !isActive,
            }
          )}
        >
          <item.icon className="text-base" />
          <span>{item.name}</span>
        </NavLink>
      ))}
    </nav>
  );
}
