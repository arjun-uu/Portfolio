import React from 'react';
import { NavLink } from 'react-router-dom';
import { navigationItems } from '../../data/navigation';
import { projectsData } from '../../data/projects';
import { cn } from '../../utils/cn';

interface SidebarNavigationProps {
  onItemClick?: () => void;
}

export function SidebarNavigation({ onItemClick }: SidebarNavigationProps) {
  // Calculate dynamic badge values
  const totalProjectsCount = projectsData.length;

  const getBadgeValue = (key?: 'projects') => {
    if (!key) return null;
    if (key === 'projects') return totalProjectsCount;
    return null;
  };

  return (
    <nav className="flex flex-col gap-1 w-full font-mono text-xs">
      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2 select-none px-2">
        Navigation
      </div>
      {navigationItems.map((item) => {
        const badge = getBadgeValue(item.badgeKey);
        
        return (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={onItemClick}
            className={({ isActive }) => cn(
              "flex items-center justify-between px-3 py-2 rounded transition-all select-none hover:bg-brand-bg-panelLight group",
              {
                "bg-brand-bg-panelLight/80 text-brand-accent-primary border-l-2 border-brand-accent-primary rounded-l-none font-semibold": isActive,
                "text-slate-400 hover:text-slate-200": !isActive
              }
            )}
          >
            <div className="flex items-center gap-2.5">
              <item.icon className="text-sm transition-transform group-hover:scale-110" />
              <span>{item.name}</span>
            </div>
            
            {badge !== null && badge > 0 && (
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold min-w-5 text-center transition-all bg-slate-800 text-slate-400 border border-slate-700">
                {badge}
              </span>
            )}
          </NavLink>
        );
      })}
    </nav>
  );
}
