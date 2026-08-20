import React from 'react';
import { Project } from '../../../types/project';

interface ReadmeHighlightProps {
  project: Project;
}

export function ReadmeHighlight({ project }: ReadmeHighlightProps) {
  return (
    <div className="font-sans text-xs md:text-sm text-slate-300 leading-relaxed select-text flex flex-col gap-5 animate-fade-in-up">
      {/* Title block */}
      <div className="border-b border-brand-border-dark/40 pb-4 font-mono select-none">
        <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1 font-bold">README.md Overview</div>
        <h2 className="text-lg md:text-xl font-black text-white flex items-center gap-2">
          {project.name}
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700 font-normal">v1.0.0</span>
        </h2>
      </div>

      {/* Narrative */}
      <div>
        <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-sans font-normal">
          {project.longDescription || project.description}
        </p>
      </div>

      {/* Specifications list */}
      <div className="flex flex-col gap-2 font-mono text-[11px] pt-1">
        <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold select-none">Project Specifications</div>
        <ul className="list-none flex flex-col gap-2 pl-1 text-slate-400 select-none">
          <li className="flex items-center gap-2">
            <span className="text-brand-accent-primary">➜</span>
            <span>Category: <strong className="text-slate-200">{project.category}</strong></span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-brand-accent-primary">➜</span>
            <span>Current Build Phase: <strong className="text-slate-200">{project.status}</strong></span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-brand-accent-primary">➜</span>
            <span>Database Schema: <strong className="text-slate-200">{
              project.technologies.find((t: string) => t.toLowerCase().includes('sql') || t.toLowerCase().includes('postgres') || t.toLowerCase().includes('redis')) || 'Local File System'
            }</strong></span>
          </li>
          {project.liveUrl && (
            <li className="flex items-center gap-2">
              <span className="text-brand-accent-primary">➜</span>
              <span>Distribution Gateway: <strong className="text-slate-200">Public Live App Route</strong></span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
