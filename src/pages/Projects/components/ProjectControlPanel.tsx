import React from 'react';
import { 
  FiGithub, FiExternalLink, FiGitCommit, FiClock, FiActivity, FiTag 
} from 'react-icons/fi';
import { Project } from '../../../types/project';
import { ProjectStats, getTechBadgeVariant } from '../hooks/useProjectDetails';
import { Card } from '../../../components/common/Card';
import { Badge } from '../../../components/common/Badge';

interface ProjectControlPanelProps {
  project: Project;
  stats: ProjectStats;
}

export function ProjectControlPanel({ project, stats }: ProjectControlPanelProps) {
  return (
    <Card hoverGlow={false} className="border border-brand-border-dark bg-brand-bg-panel/40 p-5 md:p-6 flex flex-col gap-6 relative select-none font-mono">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-brand-border-dark/40">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">// CONTROL PANEL</span>
        <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider font-mono">ID: {project.id}</span>
      </div>

      {/* Actions & Deployments */}
      <div className="flex flex-col gap-2.5">
        <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider font-semibold">// DEPLOYMENTS</span>
        <div className="flex flex-col gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-bg-dark border border-brand-border-dark hover:border-brand-accent-secondary px-4 py-2.5 rounded text-xs text-white hover:bg-slate-900/60 transition-all w-full select-none"
            >
              <FiGithub className="text-sm text-slate-400" />
              <span>Explore Source Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-accent-primary hover:bg-brand-accent-primary/95 hover:shadow-glow-primary px-4 py-2.5 rounded text-xs text-brand-bg-dark font-bold transition-all w-full select-none"
            >
              <FiExternalLink className="text-sm" />
              <span>Launch Live Instance</span>
            </a>
          )}
          {!project.githubUrl && !project.liveUrl && (
            <p className="text-[10px] text-slate-500 text-center py-2">
              No public deployment routes found.
            </p>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-brand-border-dark/40 my-1" />

      {/* System Metrics & Stats Grid */}
      <div className="flex flex-col gap-2.5">
        <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider font-semibold">// STATS GRID</span>
        <div className="grid grid-cols-2 gap-[1px] bg-brand-border-dark border border-brand-border-dark rounded-lg overflow-hidden select-none">
          
          {/* Commits */}
          <div className="bg-brand-bg-panel/85 p-2.5 flex items-center justify-between pr-3.5">
            <div className="flex items-center gap-1.5 text-slate-500 text-[10px] uppercase font-bold">
              <FiGitCommit className="text-brand-accent-secondary animate-pulse" />
              <span>Commits</span>
            </div>
            <span className="font-extrabold text-white text-xs">{stats.commits}</span>
          </div>

          {/* Hours */}
          <div className="bg-brand-bg-panel/85 p-2.5 flex items-center justify-between pl-3.5 pr-2.5">
            <div className="flex items-center gap-1.5 text-slate-500 text-[10px] uppercase font-bold">
              <FiClock className="text-brand-accent-purple" />
              <span>Hours</span>
            </div>
            <span className="font-extrabold text-white text-xs">{stats.hours}h</span>
          </div>

          {/* Tests */}
          <div className="bg-brand-bg-panel/85 p-2.5 flex items-center justify-between pr-3.5">
            <div className="flex items-center gap-1.5 text-slate-500 text-[10px] uppercase font-bold">
              <FiActivity className="text-brand-accent-primary" />
              <span>Tests</span>
            </div>
            <span className="font-extrabold text-white text-xs">{stats.coverage}</span>
          </div>

          {/* Files */}
          <div className="bg-brand-bg-panel/85 p-2.5 flex items-center justify-between pl-3.5 pr-2.5">
            <div className="flex items-center gap-1.5 text-slate-500 text-[10px] uppercase font-bold">
              <FiTag className="text-brand-accent-orange" />
              <span>Files</span>
            </div>
            <span className="font-extrabold text-white text-xs">{stats.files}</span>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-brand-border-dark/40 my-1" />

      {/* Tech Stack Specs */}
      <div className="flex flex-col gap-3">
        <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider font-semibold">// SPECIFICATION STACK</span>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant={getTechBadgeVariant(tech)} size="sm">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
