import React from 'react';
import { Project } from '../../../types/project';

interface LogHighlightProps {
  project: Project;
}

export function LogHighlight({ project }: LogHighlightProps) {
  return (
    <div className="font-mono text-[10px] md:text-xs leading-relaxed select-text flex flex-col gap-1.5 animate-fade-in-up">
      <div className="flex items-start">
        <span className="text-slate-600 pr-4 select-none font-bold">1</span>
        <div>
          <span className="text-slate-500">[2026-08-20 23:11:12]</span>{" "}
          <span className="text-cyan-400 font-bold">[INFO]</span>{" "}
          <span className="text-slate-400">Scanning repository modules...</span>
        </div>
      </div>
      <div className="flex items-start">
        <span className="text-slate-600 pr-4 select-none font-bold">2</span>
        <div>
          <span className="text-slate-500">[2026-08-20 23:11:12]</span>{" "}
          <span className="text-rose-400 font-bold">[WARN]</span>{" "}
          <span className="text-slate-300">Engineering challenges documented:</span>
        </div>
      </div>
      <div className="flex items-start pl-4 border-l-2 border-rose-500/20 py-1 my-0.5">
        <span className="text-slate-600 pr-4 select-none font-bold font-normal">3</span>
        <div>
          <span className="text-amber-500 font-bold">Log Data:</span>{" "}
          <span className="text-slate-300">{project.challenges || 'No engineering challenges captured.'}</span>
        </div>
      </div>
      <div className="flex items-start">
        <span className="text-slate-600 pr-4 select-none font-bold font-normal">4</span>
        <div>
          <span className="text-slate-500">[2026-08-20 23:11:13]</span>{" "}
          <span className="text-emerald-400 font-bold">[SUCCESS]</span>{" "}
          <span className="text-slate-400">Challenge mitigations successfully validated in test run.</span>
        </div>
      </div>
    </div>
  );
}
