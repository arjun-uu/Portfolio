import React, { useState } from 'react';
import { FiTerminal } from 'react-icons/fi';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Card } from '../../components/common/Card';
import { JwtDecoderTool } from './components/JwtDecoderTool';
import { RegexTesterTool } from './components/RegexTesterTool';
import { PasswordGeneratorTool } from './components/PasswordGeneratorTool';
import { JsonFormatterTool } from './components/JsonFormatterTool';

type ToolTab = 'jwt' | 'regex' | 'password' | 'json';

export function PlaygroundPage() {
  const [activeTab, setActiveTab] = useState<ToolTab>('jwt');

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto animate-fade-in-up">
      <SectionHeading 
        title="play --tools"
        subtitle="An interactive playground containing essential mini-utilities for encoding, pattern testing, formatting, and cryptography."
        icon={FiTerminal}
        badge="Dev utilities"
      />

      {/* Code Editor Style Tab selector */}
      <div className="flex border-b border-brand-border-dark font-mono text-xs select-none">
        <button
          onClick={() => setActiveTab('jwt')}
          className={`px-4 py-2.5 border-t-2 border-x transition-all relative top-[1px] rounded-t flex items-center gap-1.5 ${
            activeTab === 'jwt'
              ? 'bg-brand-bg-panel border-x-brand-border-dark border-t-brand-accent-primary text-brand-accent-primary font-bold'
              : 'bg-brand-bg-panel/40 border-x-transparent border-t-transparent text-slate-500 hover:text-slate-300'
          }`}
        >
          <span>jwt_decoder.json</span>
        </button>

        <button
          onClick={() => setActiveTab('regex')}
          className={`px-4 py-2.5 border-t-2 border-x transition-all relative top-[1px] rounded-t flex items-center gap-1.5 ${
            activeTab === 'regex'
              ? 'bg-brand-bg-panel border-x-brand-border-dark border-t-brand-accent-primary text-brand-accent-primary font-bold'
              : 'bg-brand-bg-panel/40 border-x-transparent border-t-transparent text-slate-500 hover:text-slate-300'
          }`}
        >
          <span>regex_tester.sh</span>
        </button>

        <button
          onClick={() => setActiveTab('password')}
          className={`px-4 py-2.5 border-t-2 border-x transition-all relative top-[1px] rounded-t flex items-center gap-1.5 ${
            activeTab === 'password'
              ? 'bg-brand-bg-panel border-x-brand-border-dark border-t-brand-accent-primary text-brand-accent-primary font-bold'
              : 'bg-brand-bg-panel/40 border-x-transparent border-t-transparent text-slate-500 hover:text-slate-300'
          }`}
        >
          <span>password_gen.bin</span>
        </button>

        <button
          onClick={() => setActiveTab('json')}
          className={`px-4 py-2.5 border-t-2 border-x transition-all relative top-[1px] rounded-t flex items-center gap-1.5 ${
            activeTab === 'json'
              ? 'bg-brand-bg-panel border-x-brand-border-dark border-t-brand-accent-primary text-brand-accent-primary font-bold'
              : 'bg-brand-bg-panel/40 border-x-transparent border-t-transparent text-slate-500 hover:text-slate-300'
          }`}
        >
          <span>json_formatter.json</span>
        </button>
      </div>

      {/* Main Panel Content Area */}
      <Card hoverGlow={false} className="border border-brand-border-dark bg-brand-bg-panel p-6 min-h-[450px] flex flex-col justify-between">
        {activeTab === 'jwt' && <JwtDecoderTool />}
        {activeTab === 'regex' && <RegexTesterTool />}
        {activeTab === 'password' && <PasswordGeneratorTool />}
        {activeTab === 'json' && <JsonFormatterTool />}
      </Card>
    </div>
  );
}

export default PlaygroundPage;
