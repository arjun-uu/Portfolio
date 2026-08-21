import React from 'react';
import { FiArrowRight, FiMail, FiSkipBack, FiPlay, FiPause, FiSkipForward } from 'react-icons/fi';
import { SiSpotify } from 'react-icons/si';
import { siteConfig } from '../../constants/site';
import { Button } from '../../components/common/Button';
import { Card } from '../../components/common/Card';
import { useHome } from './hooks/useHome';
import { EditorMockup } from './components/EditorMockup';
import { cn } from '../../utils/cn';

export function HomePage() {
  const {
    navigate,
    quote,
    stats,
    isPlaying,
    togglePlay,
    nextTrack,
    prevTrack,
    currentTrack,
    currentTimeStr,
    durationStr,
    progressPercent
  } = useHome();


  return (
    <div className="flex flex-col gap-5 max-w-4xl mx-auto animate-fade-in-up">
      {/* Hero Terminal Panel */}
      <Card hoverGlow={false} className="p-0 border border-brand-border-dark overflow-hidden font-mono text-xs md:text-sm">
        {/* Terminal Header */}
        <div className="bg-brand-bg-dark/80 px-4 py-2 border-b border-brand-border-dark flex items-center justify-between select-none">
          <span className="text-slate-500 font-bold">bash - arjun.sh</span>
          <span className="text-slate-600 text-[10px]">utf-8</span>
        </div>

        {/* Terminal Body */}
        <div className="p-5 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 text-slate-300 items-center">
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
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card
              key={index}
              hoverGlow={true}
              glowColor={stat.glowColor}
              className="flex items-center gap-4 p-4 border border-brand-border-dark bg-brand-bg-panel relative overflow-hidden group select-none"
            >
              {/* Left: Icon Outline Wrapper (gray border, dark bg, colored icon) */}
              <div className="w-12 h-12 rounded-xl border border-slate-700/80 bg-slate-900/40 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5">
                <Icon className={cn("text-lg", stat.color || "text-white")} />
              </div>

              {/* Right: Stats text stack */}
              <div className="flex flex-col text-left font-sans">
                <span className="text-[10px] md:text-xs text-slate-500 font-mono tracking-wide">
                  {stat.label}
                </span>
                <span className="text-xl md:text-2xl font-extrabold text-white leading-none mt-1">
                  {stat.count}
                </span>
                <span className={cn("text-[10px] md:text-xs mt-1", stat.subLabelClass)}>
                  {stat.subLabel}
                </span>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Footer Split Grid: Quotes & Spotify Music Player */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Featured Quote Widget */}
        <Card hoverGlow={false} className="border border-brand-border-dark bg-brand-bg-panel/40 p-4 md:p-5 font-mono text-xs select-none flex flex-col justify-between min-h-[120px]">
          <div>
            <div className="text-brand-accent-secondary font-bold mb-1.5">// DEV QUOTE OF THE DAY</div>
            <p className="text-slate-400 italic font-sans text-xs md:text-sm leading-relaxed">
              "{quote.text || 'Simplicity is the soul of efficiency.'}"
            </p>
          </div>
          {quote.author && (
            <span className="text-[10px] text-slate-500 font-mono block mt-2 text-right">— {quote.author}</span>
          )}
        </Card>

        {/* Music Player Widget */}
        <Card hoverGlow={false} className="border border-brand-border-dark bg-brand-bg-panel/40 p-4 md:p-5 font-mono text-xs select-none flex flex-col justify-between min-h-[120px] gap-3">
          {/* Top Line: Spotify Header */}
          <div className="flex items-center gap-2">
            <SiSpotify className="text-[#1db954] text-lg animate-pulse" />
            <span className="text-slate-300 font-bold text-xs uppercase tracking-wider">Now Playing</span>
            {isPlaying && (
              <div className="flex items-center gap-0.5 h-3 ml-1 select-none">
                <span className="w-[2px] bg-[#1db954] rounded-full animate-[pulse_1s_infinite_alternate]" style={{ height: '60%' }} />
                <span className="w-[2px] bg-[#1db954] rounded-full animate-[pulse_0.8s_infinite_alternate_0.2s]" style={{ height: '95%' }} />
                <span className="w-[2px] bg-[#1db954] rounded-full animate-[pulse_1.2s_infinite_alternate_0.1s]" style={{ height: '40%' }} />
              </div>
            )}
          </div>

          {/* Middle Line: Song details & Controls */}
          <div className="flex items-center justify-between gap-2">
            {/* Left: Song Title / Artist */}
            <div className="flex flex-col text-left min-w-0 flex-1">
              <span className="text-sm font-bold text-white font-sans truncate">
                {currentTrack.title}
              </span>
              <span className="text-[11px] text-slate-400 font-sans mt-0.5 truncate">
                {currentTrack.artist}
              </span>
            </div>

            {/* Right: Media Controls (Centered buttons layout) */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={prevTrack}
                className="text-slate-400 hover:text-white transition-colors p-1"
                title="Previous Track"
              >
                <FiSkipBack className="text-base" />
              </button>
              <button
                onClick={togglePlay}
                className="w-8 h-8 rounded-full bg-[#1db954]/10 hover:bg-[#1db954]/20 border border-[#1db954]/30 flex items-center justify-center transition-all hover:scale-105 shrink-0"
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <FiPause className="text-xs text-[#1db954]" />
                ) : (
                  <FiPlay className="text-xs text-[#1db954] translate-x-[0.5px]" />
                )}
              </button>
              <button
                onClick={nextTrack}
                className="text-slate-400 hover:text-white transition-colors p-1"
                title="Next Track"
              >
                <FiSkipForward className="text-base" />
              </button>
            </div>
          </div>

          {/* Bottom Line: Real Progress Bar & Timers */}
          <div className="flex flex-col gap-1.5 select-none">
            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#1db954] transition-all duration-100 ease-out" 
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="flex justify-between text-[9px] text-slate-500 font-mono">
              <span>{currentTimeStr}</span>
              <span>{durationStr}</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default HomePage;
