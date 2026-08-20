import React from 'react';
import { Project } from '../../../types/project';
import { Card } from '../../../components/common/Card';
import { Badge } from '../../../components/common/Badge';

interface ProjectHeroHeaderProps {
  project: Project;
}

export function ProjectHeroHeader({ project }: ProjectHeroHeaderProps) {
  return (
    <Card hoverGlow={false} className="border border-brand-border-dark bg-brand-bg-panel/40 p-5 md:p-6 flex flex-col gap-4 relative overflow-hidden">
      {/* Decorative corner grid effect */}
      <div className="absolute top-0 right-0 w-24 h-24 subtle-grid opacity-10 pointer-events-none" />

      <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] text-slate-500 select-none uppercase tracking-wider">
        <Badge variant={project.category === 'AI' ? 'purple' : project.category === 'Full Stack' ? 'secondary' : 'primary'} size="sm">
          {project.category}
        </Badge>
        <span>·</span>
        <span className={
          project.status === 'Completed' ? 'text-brand-accent-primary' : 
          project.status === 'Building' ? 'text-brand-accent-purple' : 'text-brand-accent-orange'
        }>
          {project.status}
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white leading-tight font-display tracking-tight select-none">
            {project.name}
          </h1>
          <p className="text-slate-400 text-xs mt-1 max-w-2xl font-mono leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Glowing Status Meter */}
        <div className="flex flex-col gap-1.5 font-mono text-[10px] md:w-48 select-none">
          <div className="flex items-center justify-between text-slate-400 font-bold uppercase">
            <span>Build Progress</span>
            <span className={
              project.status === 'Completed' ? 'text-brand-accent-primary' : 
              project.status === 'Building' ? 'text-brand-accent-purple' : 'text-brand-accent-orange'
            }>
              {project.progress}%
            </span>
          </div>
          <div className="w-full bg-slate-900 border border-brand-border-dark/60 h-2.5 rounded-full overflow-hidden relative">
            <div 
              className={`h-full rounded-full transition-all duration-1000 ${
                project.status === 'Completed' ? 'bg-gradient-to-r from-emerald-500 to-teal-400 shadow-[0_0_8px_rgba(16,185,129,0.4)]' : 
                project.status === 'Building' ? 'bg-gradient-to-r from-purple-500 to-cyan-400 shadow-[0_0_8px_rgba(139,92,246,0.4)]' : 
                'bg-gradient-to-r from-orange-500 to-amber-400 shadow-[0_0_8px_rgba(249,115,22,0.4)]'
              }`}
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
