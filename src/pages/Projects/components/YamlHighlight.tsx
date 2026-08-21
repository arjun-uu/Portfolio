import React from 'react';
import { Project } from '../../../types/project';

interface YamlHighlightProps {
  project: Project;
  content?: string;
}

export function YamlHighlight({ project }: YamlHighlightProps) {
  let lineIndex = 1;
  const getLineNumber = () => lineIndex++;

  return (
    <div className="font-mono text-[10px] md:text-xs text-slate-300 leading-relaxed select-text flex flex-col gap-0.5 animate-fade-in-up">
      <div>
        <span className="text-slate-600 pr-4 select-none font-bold">{getLineNumber()} </span>
        <span className="text-brand-accent-secondary font-semibold">project_specs</span>
        <span className="text-slate-400">:</span>
      </div>
      <div>
        <span className="text-slate-600 pr-4 select-none font-bold">{getLineNumber()} </span>
        <span className="text-slate-400">  </span>
        <span className="text-brand-accent-purple">id</span>
        <span className="text-slate-400">:</span>{" "}
        <span className="text-brand-accent-orange">"{project.id}"</span>
      </div>
      <div>
        <span className="text-slate-600 pr-4 select-none font-bold">{getLineNumber()} </span>
        <span className="text-slate-400">  </span>
        <span className="text-brand-accent-purple">compilation_target</span>
        <span className="text-slate-400">:</span>{" "}
        <span className="text-slate-300">"{project.name}"</span>
      </div>
      <div>
        <span className="text-slate-600 pr-4 select-none font-bold">{getLineNumber()} </span>
        <span className="text-slate-400">  </span>
        <span className="text-brand-accent-purple">build_category</span>
        <span className="text-slate-400">:</span>{" "}
        <span className="text-slate-300">"{project.category}"</span>
      </div>
      <div>
        <span className="text-slate-600 pr-4 select-none font-bold">{getLineNumber()} </span>
        <span className="text-slate-400">  </span>
        <span className="text-brand-accent-secondary font-semibold">system_architecture</span>
        <span className="text-slate-400">:</span>
      </div>
      <div>
        <span className="text-slate-600 pr-4 select-none font-bold">{getLineNumber()} </span>
        <span className="text-slate-400">    </span>
        <span className="text-brand-accent-purple">decoupled_pattern</span>
        <span className="text-slate-400">:</span>{" "}
        <span className="text-slate-300">true</span>
      </div>
      <div>
        <span className="text-slate-600 pr-4 select-none font-bold">{getLineNumber()} </span>
        <span className="text-slate-400">    </span>
        <span className="text-brand-accent-purple font-semibold">core_components</span>
        <span className="text-slate-400">:</span>
      </div>
      {Array.isArray(project.architecture) ? (
        project.architecture.map((line, idx) => (
          <div key={idx}>
            <span className="text-slate-600 pr-4 select-none font-bold">{getLineNumber()} </span>
            <span className="text-slate-400">      - </span>
            <span className="text-brand-accent-primary">"{line}"</span>
          </div>
        ))
      ) : (
        <div>
          <span className="text-slate-600 pr-4 select-none font-bold">{getLineNumber()} </span>
          <span className="text-slate-400">      - </span>
          <span className="text-brand-accent-primary">"{project.architecture || 'No specifications documented.'}"</span>
        </div>
      )}
      <div>
        <span className="text-slate-600 pr-4 select-none font-bold">{getLineNumber()} </span>
        <span className="text-slate-400">    </span>
        <span className="text-brand-accent-purple">technologies_injected</span>
        <span className="text-slate-400">:</span>
      </div>
      {project.technologies.map((tech: string) => (
        <div key={tech}>
          <span className="text-slate-600 pr-4 select-none font-bold">{getLineNumber()} </span>
          <span className="text-slate-400">      - </span>
          <span className="text-slate-300">{tech}</span>
        </div>
      ))}
    </div>
  );
}
