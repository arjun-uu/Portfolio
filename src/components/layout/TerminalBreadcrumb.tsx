import React from 'react';
import { useLocation } from 'react-router-dom';

export function TerminalBreadcrumb() {
  const location = useLocation();
  const path = location.pathname;

  let fileSpec = 'home.md';
  if (path.startsWith('/skills')) {
    fileSpec = 'skills.json';
  } else if (path.startsWith('/projects')) {
    const segments = path.split('/').filter(Boolean);
    if (segments.length > 1) {
      fileSpec = `projects/${segments[1]}.json`;
    } else {
      fileSpec = 'projects.json';
    }
  } else if (path === '/education') {
    fileSpec = 'education.edu';
  } else if (path === '/experience') {
    fileSpec = 'experience.log';
  } else if (path === '/articles') {
    fileSpec = 'articles.db';
  } else if (path === '/playground') {
    fileSpec = 'playground.sh';
  } else if (path === '/contact') {
    fileSpec = 'contact.sh';
  }

  const pathDisplay = path === '/' ? '~/portfolio' : `~/portfolio${path}`;

  return (
    <div className="flex items-center gap-1.5 font-mono text-[10px] md:text-xs text-slate-500 select-none pb-3 border-b border-brand-border-dark mb-4">
      <span className="text-brand-accent-secondary">{pathDisplay}</span>
      <span className="text-slate-700">·</span>
      <span className="text-brand-accent-orange/80">{fileSpec}</span>
    </div>
  );
}
