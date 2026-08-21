import React from 'react';
import { FiLock, FiAlertTriangle, FiCheck, FiCopy } from 'react-icons/fi';
import { useJwtDecoder } from '../hooks/useJwtDecoder';

export function JwtDecoderTool() {
  const {
    jwtInput,
    setJwtInput,
    jwtHeader,
    jwtPayload,
    jwtError,
    copied,
    handleCopy,
    formatTimestamp
  } = useJwtDecoder();

  return (
    <div className="flex flex-col gap-5 flex-1 font-mono">
      <div className="flex flex-col gap-2">
        <label className="text-xs text-slate-400 font-bold uppercase tracking-wider">// Enter Encoded JWT Token:</label>
        <textarea
          value={jwtInput}
          onChange={(e) => setJwtInput(e.target.value)}
          placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFyanVuIiwiYWRtaW4iOnRydWUsImV4cCI6MTc4Njk4MzQ1Nn0.signature"
          className="w-full h-24 bg-brand-bg-dark border border-brand-border-dark rounded p-3 text-xs text-slate-200 focus:border-brand-accent-secondary/50 focus:outline-none resize-none break-all"
        />
      </div>

      {jwtError && (
        <div className="flex items-center gap-2 bg-rose-500/10 border border-rose-500/20 text-rose-500 rounded p-3 text-xs">
          <FiAlertTriangle className="shrink-0 text-base" />
          <span>{jwtError}</span>
        </div>
      )}

      {!jwtError && (jwtHeader || jwtPayload) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          {/* Header Section */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-brand-accent-secondary font-bold uppercase tracking-wider">// Header (Algorithm & Type):</span>
              <button 
                onClick={() => handleCopy(JSON.stringify(jwtHeader, null, 2), 'jwt-hdr')}
                className="p-1 text-slate-500 hover:text-slate-300 transition-colors"
                title="Copy Header JSON"
              >
                {copied === 'jwt-hdr' ? <FiCheck className="text-brand-accent-primary" /> : <FiCopy />}
              </button>
            </div>
            <pre className="bg-brand-bg-dark border border-brand-border-dark rounded p-3 text-[11px] text-emerald-400 overflow-x-auto whitespace-pre-wrap max-h-64">
              {JSON.stringify(jwtHeader, null, 2)}
            </pre>
          </div>

          {/* Payload Section */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-brand-accent-purple font-bold uppercase tracking-wider">// Payload (Claims):</span>
              <button 
                onClick={() => handleCopy(JSON.stringify(jwtPayload, null, 2), 'jwt-payload')}
                className="p-1 text-slate-500 hover:text-slate-300 transition-colors"
                title="Copy Payload JSON"
              >
                {copied === 'jwt-payload' ? <FiCheck className="text-brand-accent-primary" /> : <FiCopy />}
              </button>
            </div>
            <div className="flex flex-col bg-brand-bg-dark border border-brand-border-dark rounded overflow-hidden max-h-64">
              <pre className="p-3 text-[11px] text-cyan-400 overflow-x-auto whitespace-pre-wrap flex-1 border-b border-brand-border-dark/40">
                {JSON.stringify(jwtPayload, null, 2)}
              </pre>
              
              {(jwtPayload?.exp || jwtPayload?.iat) && (
                <div className="bg-brand-bg-panelLight/40 px-3 py-2 text-[10px] text-slate-400 flex flex-col gap-1 font-sans">
                  {jwtPayload?.iat && (
                    <div>
                      <span className="font-mono text-slate-500 uppercase tracking-wider">Issued At: </span>
                      <span className="font-medium text-slate-300">{formatTimestamp(jwtPayload.iat)}</span>
                    </div>
                  )}
                  {jwtPayload?.exp && (
                    <div>
                      <span className="font-mono text-slate-500 uppercase tracking-wider">Expires At: </span>
                      <span className={jwtPayload.exp < Date.now() / 1000 ? "font-bold text-rose-500" : "font-medium text-slate-300"}>
                        {formatTimestamp(jwtPayload.exp)}
                        {jwtPayload.exp < Date.now() / 1000 && " (Expired)"}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {!jwtHeader && !jwtPayload && !jwtError && (
        <div className="flex flex-col items-center justify-center gap-2 text-slate-500 flex-1 border border-dashed border-brand-border-dark/60 rounded py-12 px-4 text-center select-none">
          <FiLock className="text-4xl text-slate-700 animate-pulse" />
          <span className="text-xs">Paste an encoded token above to inspect its claims payload.</span>
        </div>
      )}
    </div>
  );
}
