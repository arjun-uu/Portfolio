import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import { Badge } from '../../../components/common/Badge';
import { useRegexTester } from '../hooks/useRegexTester';

export function RegexTesterTool() {
  const {
    regexPattern,
    setRegexPattern,
    regexFlags,
    toggleFlag,
    regexTarget,
    setRegexTarget,
    regexMatches,
    regexError
  } = useRegexTester();

  const renderHighlightedTarget = () => {
    if (regexError || !regexPattern || regexMatches.length === 0) {
      return regexTarget;
    }

    const segments: React.ReactNode[] = [];
    let lastIndex = 0;
    const sortedMatches = [...regexMatches].sort((a, b) => a.index - b.index);

    sortedMatches.forEach((match, idx) => {
      const matchText = match[0];
      const start = match.index;
      const end = start + matchText.length;

      if (start > lastIndex) {
        segments.push(regexTarget.slice(lastIndex, start));
      }

      segments.push(
        <span 
          key={`match-${idx}`} 
          className="bg-brand-accent-primary/20 text-brand-accent-primary border-b-2 border-brand-accent-primary font-bold px-0.5 rounded-sm"
          title={`Match ${idx + 1}: ${matchText}`}
        >
          {matchText}
        </span>
      );

      lastIndex = end;
    });

    if (lastIndex < regexTarget.length) {
      segments.push(regexTarget.slice(lastIndex));
    }

    return segments;
  };

  return (
    <div className="flex flex-col gap-4 flex-1 font-mono">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 flex flex-col gap-1.5">
          <label className="text-xs text-slate-400 font-bold uppercase tracking-wider">// Regex Pattern:</label>
          <div className="flex items-center bg-brand-bg-dark border border-brand-border-dark rounded px-3 py-2">
            <span className="text-slate-500 font-bold mr-1">/</span>
            <input
              type="text"
              value={regexPattern}
              onChange={(e) => setRegexPattern(e.target.value)}
              placeholder="[a-z]+"
              className="bg-transparent text-xs text-slate-200 w-full focus:outline-none"
            />
            <span className="text-slate-500 font-bold ml-1">/</span>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-slate-400 font-bold uppercase tracking-wider">// Flags:</label>
          <div className="flex items-center justify-around h-[38px] bg-brand-bg-dark border border-brand-border-dark rounded text-xs select-none">
            <label className="relative group flex items-center gap-1 cursor-pointer">
              <input
                type="checkbox"
                checked={regexFlags.g}
                onChange={() => {}}
                onClick={() => toggleFlag('g')}
                className="accent-brand-accent-primary"
              />
              <span className="text-slate-300">g</span>
              
              {/* Tooltip (aligned to the left to prevent clipping on the left border) */}
              <div className="pointer-events-none absolute top-full left-0 mt-2.5 w-48 bg-brand-bg-panelLight border border-brand-border-dark text-[10px] text-slate-300 p-2 rounded shadow-xl opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-150 z-20 whitespace-normal text-left leading-normal font-sans">
                <span className="font-bold text-brand-accent-primary block mb-0.5">Global Search (g)</span>
                Matches all occurrences in the text instead of stopping after the first match.
              </div>
            </label>
            
            <label className="relative group flex items-center gap-1 cursor-pointer">
              <input
                type="checkbox"
                checked={regexFlags.i}
                onChange={() => {}}
                onClick={() => toggleFlag('i')}
                className="accent-brand-accent-primary"
              />
              <span className="text-slate-300">i</span>
              
              {/* Tooltip (centered) */}
              <div className="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-48 bg-brand-bg-panelLight border border-brand-border-dark text-[10px] text-slate-300 p-2 rounded shadow-xl opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-150 z-20 whitespace-normal text-center leading-normal font-sans">
                <span className="font-bold text-brand-accent-primary block mb-0.5">Case-Insensitive (i)</span>
                Ignores uppercase vs. lowercase distinctions when matching letters.
              </div>
            </label>
            
            <label className="relative group flex items-center gap-1 cursor-pointer">
              <input
                type="checkbox"
                checked={regexFlags.m}
                onChange={() => {}}
                onClick={() => toggleFlag('m')}
                className="accent-brand-accent-primary"
              />
              <span className="text-slate-300">m</span>
              
              {/* Tooltip (aligned to the right to prevent clipping on the right border) */}
              <div className="pointer-events-none absolute top-full right-0 mt-2.5 w-48 bg-brand-bg-panelLight border border-brand-border-dark text-[10px] text-slate-300 p-2 rounded shadow-xl opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-150 z-20 whitespace-normal text-right leading-normal font-sans">
                <span className="font-bold text-brand-accent-primary block mb-0.5">Multi-line (m)</span>
                Treats start (^) and end ($) anchors as matching each individual line.
              </div>
            </label>
          </div>
        </div>
      </div>

      {regexError && (
        <div className="flex items-center gap-2 bg-rose-500/10 border border-rose-500/20 text-rose-500 rounded p-3 text-xs">
          <FiAlertTriangle className="shrink-0 text-base" />
          <span>{regexError}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-slate-400 font-bold uppercase tracking-wider">// Test Target String:</label>
          <textarea
            value={regexTarget}
            onChange={(e) => setRegexTarget(e.target.value)}
            placeholder="Insert multi-line text matches..."
            className="w-full h-36 bg-brand-bg-dark border border-brand-border-dark rounded p-3 text-xs text-slate-200 focus:border-brand-accent-secondary/50 focus:outline-none resize-none"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label className="text-xs text-slate-400 font-bold uppercase tracking-wider">// Highlights & Matches ({regexMatches.length}):</label>
            <Badge variant={regexMatches.length > 0 ? "primary" : "outline"} size="sm">
              {regexMatches.length > 0 ? "Match Found" : "No Matches"}
            </Badge>
          </div>
          <div className="w-full h-36 bg-brand-bg-dark border border-brand-border-dark rounded p-3 text-xs text-slate-300 overflow-y-auto whitespace-pre-wrap select-text leading-relaxed">
            {renderHighlightedTarget()}
          </div>
        </div>
      </div>

      {regexMatches.length > 0 && (
        <div className="flex flex-col gap-1.5 mt-2 max-h-32 overflow-y-auto">
          <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">// Match Capture Logs:</div>
          <div className="flex flex-col gap-1 text-[10px] font-sans">
            {regexMatches.slice(0, 10).map((match, idx) => (
              <div key={idx} className="bg-brand-bg-panelLight/40 border border-brand-border-dark/50 px-2.5 py-1 rounded flex items-center justify-between font-mono">
                <span className="text-brand-accent-primary">Match {idx + 1}: "{match[0]}"</span>
                <span className="text-slate-500">Index: {match.index}</span>
              </div>
            ))}
            {regexMatches.length > 10 && (
              <div className="text-center text-slate-500 italic py-1">({regexMatches.length - 10} more matches omitted)</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
