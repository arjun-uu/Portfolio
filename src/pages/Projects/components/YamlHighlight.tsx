import React from 'react';
import { Project } from '../../../types/project';

interface YamlHighlightProps {
  project: Project;
  content: string;
}

export function YamlHighlight({ project, content }: YamlHighlightProps) {
  return (
    <div className="font-mono text-[10px] md:text-xs text-slate-300 leading-relaxed select-text flex flex-col gap-0.5 animate-fade-in-up">
      <div>
        <span className="text-slate-600 pr-4 select-none font-bold">1 </span>
        <span className="text-brand-accent-secondary font-semibold">project_specs</span>
        <span className="text-slate-400">:</span>
      </div>
      <div>
        <span className="text-slate-600 pr-4 select-none font-bold">2 </span>
        <span className="text-slate-400">  </span>
        <span className="text-brand-accent-purple">id</span>
        <span className="text-slate-400">:</span>{" "}
        <span className="text-brand-accent-orange">"{project.id}"</span>
      </div>
      <div>
        <span className="text-slate-600 pr-4 select-none font-bold">3 </span>
        <span className="text-slate-400">  </span>
        <span className="text-brand-accent-purple">compilation_target</span>
        <span className="text-slate-400">:</span>{" "}
        <span className="text-slate-300">"{project.name}"</span>
      </div>
      <div>
        <span className="text-slate-600 pr-4 select-none font-bold">4 </span>
        <span className="text-slate-400">  </span>
        <span className="text-brand-accent-purple">build_category</span>
        <span className="text-slate-400">:</span>{" "}
        <span className="text-slate-300">"{project.category}"</span>
      </div>
      <div>
        <span className="text-slate-600 pr-4 select-none font-bold">5 </span>
        <span className="text-slate-400">  </span>
        <span className="text-brand-accent-secondary font-semibold">system_architecture</span>
        <span className="text-slate-400">:</span>
      </div>
      <div>
        <span className="text-slate-600 pr-4 select-none font-bold">6 </span>
        <span className="text-slate-400">    </span>
        <span className="text-brand-accent-purple">decoupled_pattern</span>
        <span className="text-slate-400">:</span>{" "}
        <span className="text-slate-300">true</span>
      </div>
      <div className="flex items-start">
        <span className="text-slate-600 pr-4 select-none font-bold">7 </span>
        <div className="pl-4">
          <span className="text-brand-accent-purple font-semibold">core_components</span>
          <span className="text-slate-400">:</span>{" "}
          <span className="text-brand-accent-primary">"{content || 'No specifications parsed.'}"</span>
        </div>
      </div>
      <div>
        <span className="text-slate-600 pr-4 select-none font-bold">8 </span>
        <span className="text-slate-400">    </span>
        <span className="text-brand-accent-purple">technologies_injected</span>
        <span className="text-slate-400">:</span>
      </div>
      {project.technologies.map((tech: string, i: number) => (
        <div key={tech}>
          <span className="text-slate-600 pr-4 select-none font-bold">{9 + i} </span>
          <span className="text-slate-400">      - </span>
          <span className="text-slate-300">{tech}</span>
        </div>
      ))}
    </div>
  );
}
