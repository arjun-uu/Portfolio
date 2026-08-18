import React from 'react';
import { FiAlertTriangle, FiCheck, FiCopy } from 'react-icons/fi';
import { Button } from '../../../components/common/Button';
import { useJsonFormatter } from '../hooks/useJsonFormatter';

export function JsonFormatterTool() {
  const {
    jsonInput,
    setJsonInput,
    jsonOutput,
    jsonError,
    formatJson,
    minifyJson,
    copied,
    handleCopy
  } = useJsonFormatter();

  return (
    <div className="flex flex-col gap-4 flex-1 font-mono">
      <div className="flex flex-col gap-2">
        <label className="text-xs text-slate-400 font-bold uppercase tracking-wider">// Enter JSON Input Payload:</label>
        <textarea
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          placeholder='{"username": "arjun", "domain": "portfolio", "details": {"active": true, "skills": ["react", "typescript"]}}'
          className="w-full h-64 bg-brand-bg-dark border border-brand-border-dark rounded p-3 text-xs text-slate-200 focus:border-brand-accent-secondary/50 focus:outline-none resize-none font-mono"
        />
      </div>

      {jsonError && (
        <div className="flex items-center gap-2 bg-rose-500/10 border border-rose-500/20 text-rose-500 rounded p-3 text-xs select-text">
          <FiAlertTriangle className="shrink-0 text-base" />
          <span>JSON Syntax Error: {jsonError}</span>
        </div>
      )}

      <div className="flex items-center gap-2 select-none">
        <Button variant="primary" size="sm" onClick={() => formatJson(2)}>Prettify JSON</Button>
        <Button variant="secondary" size="sm" onClick={minifyJson}>Minify JSON</Button>
      </div>

      {jsonOutput && (
        <div className="flex flex-col gap-2 flex-1 mt-2">
          <div className="flex items-center justify-between">
            <label className="text-xs text-slate-400 font-bold uppercase tracking-wider">// Formatted Output:</label>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              {copied ? (
                <>
                  <FiCheck className="text-brand-accent-primary" />
                  <span className="text-[10px] text-brand-accent-primary font-mono font-bold">Copied</span>
                </>
              ) : (
                <>
                  <FiCopy />
                  <span className="text-[10px]">Copy JSON</span>
                </>
              )}
            </button>
          </div>
          <pre className="w-full h-44 bg-brand-bg-dark border border-brand-border-dark rounded p-3 text-xs text-emerald-400 overflow-y-auto whitespace-pre-wrap select-text">
            {jsonOutput}
          </pre>
        </div>
      )}
    </div>
  );
}
