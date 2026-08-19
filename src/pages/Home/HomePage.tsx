import React from 'react';
import { FiArrowRight, FiMail } from 'react-icons/fi';
import { siteConfig } from '../../constants/site';
import { Button } from '../../components/common/Button';
import { Card } from '../../components/common/Card';
import { useHome } from './hooks/useHome';
import { EditorMockup } from './components/EditorMockup';

export function HomePage() {
  const {
    navigate,
    quote,
    stats
  } = useHome();

  
  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto animate-fade-in-up">
      {/* Hero Terminal Panel */}
      <Card hoverGlow={false} className="p-0 border border-brand-border-dark overflow-hidden font-mono text-xs md:text-sm">
        {/* Terminal Header */}
        <div className="bg-brand-bg-dark/80 px-4 py-2 border-b border-brand-border-dark flex items-center justify-between select-none">
          <span className="text-slate-500 font-bold">bash - hero.sh</span>
          <span className="text-slate-600 text-[10px]">utf-8</span>
        </div>

        {/* Terminal Body */}
        <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 text-slate-300 items-center">
          {/* Left: Terminal Output / Details */}
          <div className="lg:col-span-7 flex flex-col gap-6 w-full">
            <div>
              <div className="text-slate-500 mb-1 select-none">~/portfolio</div>
              <div className="flex items-center gap-2">
                <span className="text-brand-accent-primary font-bold">$</span>
                <span className="text-slate-100 font-semibold">whoami</span>
              </div>
            </div>

            <div className="font-sans flex flex-col gap-4">
              <h2 className="text-3xl md:text-5xl font-mono font-bold tracking-tight leading-normal pb-2 select-none flex items-center">
                <span className="bg-gradient-to-r from-brand-accent-primary to-brand-accent-secondary bg-clip-text text-transparent lowercase">
                  {siteConfig.name}
                </span>
                <span className="text-brand-accent-primary ml-0.5 animate-cursor-blink">_</span>
              </h2>
              <div className="flex items-center gap-2 text-brand-accent-primary font-mono text-sm md:text-base font-bold">
                <span>{`[${siteConfig.role}]`}</span>
              </div>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                {siteConfig.tagline} I build highly optimized, secure, and clean web applications using React, TypeScript, and Microsoft technologies.
              </p>
            </div>

            <div className="font-mono text-xs flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 bg-brand-bg-panelLight border border-brand-border-dark px-3 py-1.5 rounded select-none">
                <span className="w-2 h-2 rounded-full bg-brand-accent-primary animate-subtle-pulse" />
                <span className="text-slate-400">Available:</span>
                <span className="text-white font-bold">Full-Time</span>
              </div>
              <div className="flex items-center gap-2 bg-brand-bg-panelLight border border-brand-border-dark px-3 py-1.5 rounded select-none">
                <span className="text-brand-accent-secondary font-bold">@</span>
                <span className="text-slate-400">Location:</span>
                <span className="text-white font-bold">{siteConfig.location}</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap gap-3 pt-4 select-none">
              <Button
                variant="primary"
                rightIcon={<FiArrowRight />}
                onClick={() => navigate('/projects')}
              >
                Explore Projects
              </Button>
              <Button
                variant="secondary"
                leftIcon={<FiMail />}
                onClick={() => navigate('/contact')}
              >
                Send Message
              </Button>
            </div>
          </div>

          {/* Right: Code Editor Panel (Mockup) */}
          <EditorMockup />
        </div>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card
              key={index}
              hoverGlow={true}
              glowColor="primary"
              className="flex flex-col gap-3 p-4 md:p-5 text-center font-mono border border-brand-border-dark bg-brand-bg-panel relative overflow-hidden group select-none"
            >
              {/* Subtle background glow icon */}
              <Icon className="absolute right-2 bottom-2 sm:right-3 sm:bottom-3 text-3xl sm:text-4xl text-slate-400 opacity-[0.06] group-hover:scale-110 group-hover:opacity-15 transition-all duration-300 pointer-events-none" />

              <div className="flex items-center justify-center">
                <span className={`p-2.5 rounded-full border ${stat.color} transition-transform duration-300 group-hover:-translate-y-1`}>
                  <Icon className="text-base md:text-lg" />
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-extrabold text-white leading-none">
                  {stat.count}
                </span>
                <span className="text-[10px] md:text-xs text-slate-500 font-sans mt-1">
                  {stat.label}
                </span>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Featured Quote/Welcome Widget */}
      <Card hoverGlow={false} className="border border-brand-border-dark bg-brand-bg-panel/40 p-4 md:p-5 font-mono text-xs select-none">
        <div className="text-brand-accent-secondary font-bold mb-1.5">// DEV QUOTE OF THE DAY</div>
        <p className="text-slate-400 italic font-sans text-xs md:text-sm leading-relaxed">
          "{quote.text || 'Simplicity is the soul of efficiency.'}"
        </p>
        {quote.author && (
          <span className="text-[10px] text-slate-500 font-mono block mt-1 text-right">— {quote.author}</span>
        )}
      </Card>
    </div>
  );
}

export default HomePage;
