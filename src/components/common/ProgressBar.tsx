import React from 'react';

interface ProgressBarProps {
  progress: number; // 0 - 100
  showBlocks?: boolean;
  color?: 'primary' | 'secondary' | 'purple' | 'orange';
}

export function ProgressBar({ 
  progress, 
  showBlocks = true, 
  color = 'primary' 
}: ProgressBarProps) {
  const normalizedVal = Math.min(Math.max(progress, 0), 100);
  const totalBlocks = 10;
  const filledCount = Math.round((normalizedVal / 100) * totalBlocks);
  const emptyCount = totalBlocks - filledCount;

  const filledBlocks = '█'.repeat(filledCount);
  const emptyBlocks = '░'.repeat(emptyCount);

  return (
    <div className="w-full font-mono text-xs select-none">
      {showBlocks && (
        <div className="flex justify-between mb-1.5 text-slate-400">
          <span>
            <span className={
              color === 'primary' ? 'text-brand-accent-primary' : 
              color === 'secondary' ? 'text-brand-accent-secondary' : 
              color === 'orange' ? 'text-brand-accent-orange' : 
              'text-brand-accent-purple'
            }>
              {filledBlocks}
            </span>
            <span className="text-slate-700">{emptyBlocks}</span>
          </span>
          <span className="text-slate-300 font-semibold">{normalizedVal}%</span>
        </div>
      )}
      <div className="h-1.5 w-full bg-slate-900/60 border border-brand-border-dark rounded-full overflow-hidden">
        <div 
          className="h-full rounded-full transition-all duration-500 ease-out bg-gradient-to-r"
          style={{ 
            width: `${normalizedVal}%`,
            backgroundImage: color === 'primary' 
              ? 'linear-gradient(to right, #10b981, #059669)' 
              : color === 'secondary' 
              ? 'linear-gradient(to right, #06b6d4, #0891b2)' 
              : color === 'orange' 
              ? 'linear-gradient(to right, #f97316, #ea580c)' 
              : 'linear-gradient(to right, #8b5cf6, #7c3aed)'
          }}
        />
      </div>
    </div>
  );
}
