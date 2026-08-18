import React from 'react';

export function EditorMockup() {
  return (
    <div className="lg:col-span-5 hidden lg:block w-full select-none">
      <div className="bg-brand-bg-dark border border-brand-border-dark rounded-lg overflow-hidden font-mono text-[11px] shadow-2xl">
        {/* Window Bar */}
        <div className="bg-brand-bg-panelLight/65 px-4 py-2.5 border-b border-brand-border-dark flex items-center justify-between select-none">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            <span className="text-slate-400 ml-2 font-bold font-sans">arjun.json</span>
          </div>
          <span className="text-slate-500 text-[10px] font-bold">JSON</span>
        </div>
        
        {/* Editor Workspace */}
        <div className="p-4 flex gap-4 text-slate-400 select-text leading-relaxed bg-brand-bg-panelLight/65">
          {/* Line Numbers */}
          <div className="text-slate-600 select-none text-right flex flex-col pr-2 border-r border-brand-border-dark">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
            <span>11</span>
            <span>12</span>
            <span>13</span>
            <span>14</span>
            <span>15</span>
          </div>
          
          {/* Code Body */}
          <div className="flex-1 flex flex-col overflow-x-hidden select-none">
            <div><span className="text-slate-500">{`{`}</span></div>
            <div className="pl-3">
              <span className="text-rose-400">"name"</span>
              <span className="text-slate-500">: </span>
              <span className="text-brand-accent-secondary">"arjun"</span>
              <span className="text-slate-500">,</span>
            </div>
            <div className="pl-3">
              <span className="text-rose-400">"title"</span>
              <span className="text-slate-500">: </span>
              <span className="text-brand-accent-secondary">"software_developer"</span>
              <span className="text-slate-500">,</span>
            </div>
            <div className="pl-3">
              <span className="text-rose-400">"location"</span>
              <span className="text-slate-500">: </span>
              <span className="text-brand-accent-secondary">"mohali_india"</span>
              <span className="text-slate-500">,</span>
            </div>
            <div className="pl-3">
              <span className="text-rose-400">"skills"</span>
              <span className="text-slate-500">: [</span>
            </div>
            <div className="pl-6 text-brand-accent-primary">
              <span>"react"</span><span className="text-slate-500">,</span>
            </div>
            <div className="pl-6 text-brand-accent-primary">
              <span>"typescript"</span><span className="text-slate-500">,</span>
            </div>
            <div className="pl-6 text-brand-accent-primary">
              <span>"asp.net_core"</span><span className="text-slate-500">,</span>
            </div>
            <div className="pl-6 text-brand-accent-primary">
              <span>"sql_server"</span>
            </div>
            <div className="pl-3">
              <span className="text-slate-500">],</span>
            </div>
            <div className="pl-3">
              <span className="text-rose-400">"interests"</span>
              <span className="text-slate-500">: [</span>
            </div>
            <div className="pl-6 text-brand-accent-orange">
              <span>"clean_architecture"</span><span className="text-slate-500">,</span>
            </div>
            <div className="pl-6 text-brand-accent-orange">
              <span>"cqrs_pattern"</span>
            </div>
            <div className="pl-3">
              <span className="text-slate-500">]</span>
            </div>
            <div><span className="text-slate-500">{`}`}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
