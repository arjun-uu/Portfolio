import React from 'react';
import { FiCheck, FiCopy } from 'react-icons/fi';
import { Button } from '../../../components/common/Button';
import { usePasswordGenerator } from '../hooks/usePasswordGenerator';

export function PasswordGeneratorTool() {
  const {
    pwLength,
    setPwLength,
    pwOptions,
    toggleOption,
    generatedPassword,
    generatePassword,
    copied,
    handleCopy,
    strength
  } = usePasswordGenerator();

  return (
    <div className="flex flex-col gap-6 flex-1 font-mono justify-center">
      <div className="flex flex-col gap-2">
        <label className="text-xs text-slate-400 font-bold uppercase tracking-wider">// Generated Key Code:</label>
        <div className="flex items-center justify-between bg-brand-bg-dark border border-brand-border-dark rounded p-3.5 text-sm font-semibold select-text text-white">
          <span className="break-all tracking-wider font-mono">{generatedPassword || 'Choose options...'}</span>
          
          {generatedPassword && (
            <button
              onClick={handleCopy}
              className="p-1.5 text-slate-500 hover:text-slate-300 transition-colors ml-4 bg-brand-bg-panel border border-brand-border-dark/60 rounded"
              title="Copy Password"
            >
              {copied ? <FiCheck className="text-brand-accent-primary" /> : <FiCopy />}
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4 justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
              <span>Length:</span>
              <span className="text-brand-accent-primary font-mono">{pwLength} chars</span>
            </div>
            <input
              type="range"
              min={8}
              max={64}
              value={pwLength}
              onChange={(e) => setPwLength(Number(e.target.value))}
              className="w-full accent-brand-accent-primary cursor-pointer my-2"
            />
          </div>

          <div className="flex items-center justify-between border border-brand-border-dark bg-brand-bg-dark/40 px-3 py-2.5 rounded text-xs select-none">
            <span className="text-slate-400">Entropy Strength:</span>
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${strength.color}`}>
              {strength.label}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 justify-center select-none bg-brand-bg-dark/35 border border-brand-border-dark rounded p-4 text-xs">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={pwOptions.uppercase}
              onChange={() => toggleOption('uppercase')}
              className="w-4 h-4 rounded text-brand-accent-primary accent-brand-accent-primary cursor-pointer"
            />
            <span className="text-slate-300 font-medium">Include Uppercase Letters (A-Z)</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={pwOptions.lowercase}
              onChange={() => toggleOption('lowercase')}
              className="w-4 h-4 rounded text-brand-accent-primary accent-brand-accent-primary cursor-pointer"
            />
            <span className="text-slate-300 font-medium">Include Lowercase Letters (a-z)</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={pwOptions.numbers}
              onChange={() => toggleOption('numbers')}
              className="w-4 h-4 rounded text-brand-accent-primary accent-brand-accent-primary cursor-pointer"
            />
            <span className="text-slate-300 font-medium">Include Numbers (0-9)</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={pwOptions.symbols}
              onChange={() => toggleOption('symbols')}
              className="w-4 h-4 rounded text-brand-accent-primary accent-brand-accent-primary cursor-pointer"
            />
            <span className="text-slate-300 font-medium">Include Special Symbols (!@#$*)</span>
          </label>
        </div>
      </div>

      <div className="flex justify-end select-none">
        <Button
          variant="terminal"
          onClick={generatePassword}
          className="text-xs"
        >
          Regenerate key()
        </Button>
      </div>
    </div>
  );
}
