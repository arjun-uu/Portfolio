import React from 'react';
import { Project } from '../../../types/project';

interface JsonHighlightProps {
  project: Project;
}

export function JsonHighlight({ project }: JsonHighlightProps) {
  const renderJsonValue = (value: string | string[] | undefined, isLast: boolean = false) => {
    if (value === undefined) return <span className="text-brand-accent-orange">null</span>;
    if (Array.isArray(value)) {
      return (
        <>
          <span className="text-slate-400">[</span>
          <div className="pl-4 flex flex-col">
            {value.map((line, idx) => (
              <div key={idx}>
                <span className="text-brand-accent-orange">"{line}"</span>
                {idx < value.length - 1 && <span className="text-slate-500">,</span>}
              </div>
            ))}
          </div>
          <span className="text-slate-400">]</span>
          {!isLast && <span className="text-slate-500">,</span>}
        </>
      );
    }
    return (
      <>
        <span className="text-brand-accent-orange">"{value}"</span>
        {!isLast && <span className="text-slate-500">,</span>}
      </>
    );
  };

  return (
    <div className="font-mono text-[10px] md:text-xs text-slate-300 leading-relaxed select-text flex flex-col animate-fade-in-up">
      <div>
        <span className="text-slate-600 pr-4 select-none font-bold">1</span>
        <span className="text-slate-500">{"{"}</span>
      </div>
      <div className="flex items-start">
        <span className="text-slate-600 pr-4 select-none font-bold">2</span>
        <div className="pl-4 flex flex-wrap gap-x-1 items-start">
          <span className="text-brand-accent-secondary">"problem_definition"</span>
          <span className="text-slate-400">:</span>{" "}
          <div className="inline-block">{renderJsonValue(project.problem)}</div>
        </div>
      </div>
      <div className="flex items-start">
        <span className="text-slate-600 pr-4 select-none font-bold">3</span>
        <div className="pl-4 flex flex-wrap gap-x-1 items-start">
          <span className="text-brand-accent-secondary">"engineering_solution"</span>
          <span className="text-slate-400">:</span>{" "}
          <div className="inline-block">{renderJsonValue(project.solution, true)}</div>
        </div>
      </div>
      <div>
        <span className="text-slate-600 pr-4 select-none font-bold">4</span>
        <span className="text-slate-500">{"}"}</span>
      </div>
    </div>
  );
}
