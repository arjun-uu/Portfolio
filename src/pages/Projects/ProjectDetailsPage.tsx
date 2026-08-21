import React from 'react';
import { 
  FiArrowLeft, FiAlertCircle, FiSliders, FiFileText, FiLayers 
} from 'react-icons/fi';
import { useProjectDetails } from './hooks/useProjectDetails';
import { ProjectHeroHeader } from './components/ProjectHeroHeader';
import { ProjectControlPanel } from './components/ProjectControlPanel';
import { ReadmeHighlight } from './components/ReadmeHighlight';
import { JsonHighlight } from './components/JsonHighlight';
import { YamlHighlight } from './components/YamlHighlight';
import { LogHighlight } from './components/LogHighlight';
import { Button } from '../../components/common/Button';

export function ProjectDetailsPage() {
  const {
    project,
    activeTab,
    setActiveTab,
    handleBackToProjects,
    stats
  } = useProjectDetails();

  if (!project) {
    return (
      <div className="max-w-md mx-auto text-center py-16 animate-fade-in-up font-mono select-none">
        <FiAlertCircle className="mx-auto text-4xl text-rose-500 mb-4 animate-bounce" />
        <h2 className="text-lg font-bold text-white mb-2">Project Not Found</h2>
        <p className="text-slate-400 text-xs mb-6">
          The requested project ID does not exist in our repositories list.
        </p>
        <Button variant="secondary" leftIcon={<FiArrowLeft />} onClick={handleBackToProjects}>
          Back to Projects
        </Button>
      </div>
    );
  }

  const tabs = [
    { id: 'readme', name: 'README.md', icon: FiFileText, color: 'text-emerald-400' },
    { id: 'problem', name: 'problem_statement.json', icon: FiAlertCircle, color: 'text-amber-400' },
    { id: 'architecture', name: 'architecture.yaml', icon: FiLayers, color: 'text-cyan-400' },
    { id: 'challenges', name: 'challenges.log', icon: FiSliders, color: 'text-rose-400' },
  ];

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-6 animate-fade-in-up">
      {/* Back Nav Breadcrumb */}
      <div className="select-none flex items-center justify-between border-b border-brand-border-dark/60 pb-3">
        <button
          onClick={handleBackToProjects}
          className="flex items-center gap-1.5 font-mono text-xs text-slate-500 hover:text-white transition-colors"
        >
          <FiArrowLeft className="text-sm" />
          <span>cd ../projects</span>
        </button>
        <span className="font-mono text-slate-600 text-[10px] hidden md:inline">
          PATH: ~/portfolio/projects/{project.id}
        </span>
      </div>

      {/* Hero Header Area */}
      <ProjectHeroHeader project={project} />

      {/* Main Grid: IDE Editor Layout (Left) + Stats/Actions (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Interactive IDE Editor Workspace */}
        <div className="lg:col-span-2 flex flex-col border border-brand-border-dark bg-brand-bg-panel/20 rounded-lg overflow-hidden relative min-h-[460px]">
          
          {/* Tab Header bar (Segmented Pills style with separators) */}
          <div className="flex items-center gap-2 p-2 bg-slate-950/60 border-b border-brand-border-dark select-none overflow-x-auto scrollbar-thin">
            {tabs.map((tab, index) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <React.Fragment key={tab.id}>
                  {index > 0 && (
                    <span className="h-4 w-[1px] bg-brand-border-dark/60 select-none pointer-events-none mx-0.5 animate-fade-in" />
                  )}
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-md font-mono text-xs transition-all duration-200 whitespace-nowrap border ${
                      isActive 
                        ? 'bg-brand-accent-primary/10 text-brand-accent-primary border-brand-accent-primary/35 font-bold shadow-[0_0_12px_rgba(16,185,129,0.06)]' 
                        : 'text-slate-500 border-transparent hover:bg-slate-900/50 hover:text-slate-300'
                    }`}
                  >
                    <TabIcon className={`text-xs ${tab.color}`} />
                    <span>{tab.name}</span>
                  </button>
                </React.Fragment>
              );
            })}
          </div>

          {/* Sub-header Path bar */}
          <div className="bg-slate-900/20 px-4 py-1.5 border-b border-brand-border-dark/30 font-mono text-[9px] text-slate-500 select-none">
            <span>src/projects/{project.id}/{tabs.find(t => t.id === activeTab)?.name}</span>
          </div>

          {/* Editor Body */}
          <div className="flex-1 p-5 md:p-6 overflow-y-auto max-h-[500px]">
            {activeTab === 'readme' && <ReadmeHighlight project={project} />}
            {activeTab === 'problem' && <JsonHighlight project={project} />}
            {activeTab === 'architecture' && <YamlHighlight project={project} />}
            {activeTab === 'challenges' && <LogHighlight project={project} />}
          </div>
        </div>

        {/* Right Column: Unified Control Panel */}
        {stats && <ProjectControlPanel project={project} stats={stats} />}
      </div>
    </div>
  );
}

export default ProjectDetailsPage;
