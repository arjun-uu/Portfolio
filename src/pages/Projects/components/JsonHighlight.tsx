import React from 'react';
import { Project } from '../../../types/project';

interface JsonHighlightProps {
  project: Project;
}

export function JsonHighlight({ project }: JsonHighlightProps) {
  return (
    <div className="font-mono text-[10px] md:text-xs text-slate-300 leading-relaxed select-text flex flex-col animate-fade-in-up">
      <div>
        <span className="text-slate-600 pr-4 select-none font-bold">1</span>
        <span className="text-slate-500">{"{"}</span>
      </div>
      <div className="flex items-start">
        <span className="text-slate-600 pr-4 select-none font-bold">2</span>
        <div className="pl-4">
          <span className="text-brand-accent-secondary">"problem_definition"</span>
          <span className="text-slate-400">:</span>{" "}
          <span className="text-brand-accent-orange">"{project.problem || 'No problem definition documented.'}"</span>
          <span className="text-slate-500">,</span>
        </div>
      </div>
      <div className="flex items-start">
        <span className="text-slate-600 pr-4 select-none font-bold">3</span>
        <div className="pl-4">
          <span className="text-brand-accent-secondary">"engineering_solution"</span>
          <span className="text-slate-400">:</span>{" "}
          <span className="text-brand-accent-primary">"{project.solution || 'No solution blueprint documented.'}"</span>
        </div>
      </div>
      <div>
        <span className="text-slate-600 pr-4 select-none font-bold">4</span>
        <span className="text-slate-500">{"}"}</span>
      </div>
    </div>
  );
}
