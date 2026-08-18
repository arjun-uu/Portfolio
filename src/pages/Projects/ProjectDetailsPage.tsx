import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiGithub, FiExternalLink, FiCpu, FiAlertCircle, FiSettings, FiSliders, FiFileText } from 'react-icons/fi';
import { projectsData } from '../../data/projects';
import { Button } from '../../components/common/Button';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';

export function ProjectDetailsPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  // Find project
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="max-w-md mx-auto text-center py-16 animate-fade-in-up font-mono select-none">
        <FiAlertCircle className="mx-auto text-4xl text-rose-500 mb-4 animate-bounce" />
        <h2 className="text-lg font-bold text-white mb-2">Project Not Found</h2>
        <p className="text-slate-400 text-xs mb-6">
          The requested project ID "{projectId}" does not exist in our repositories list.
        </p>
        <Button variant="secondary" leftIcon={<FiArrowLeft />} onClick={() => navigate('/projects')}>
          Back to Projects
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-6 animate-fade-in-up">
      {/* Back Nav Button */}
      <div className="select-none">
        <button
          onClick={() => navigate('/projects')}
          className="flex items-center gap-1.5 font-mono text-xs text-slate-500 hover:text-white transition-colors"
        >
          <FiArrowLeft />
          <span>cd ../projects</span>
        </button>
      </div>

      {/* Main Grid: Info (Left) + Meta/Actions (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Extensive Details */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Title Header */}
          <Card hoverGlow={false} className="border border-brand-border-dark bg-brand-bg-panel/60 p-6 flex flex-col gap-4">
            <div className="flex items-center gap-2 font-mono text-[10px] text-slate-500 select-none uppercase tracking-wider">
              <span>{project.category}</span>
              <span>·</span>
              <span className="text-brand-accent-primary">{project.status}</span>
            </div>
            
            <h1 className="text-xl md:text-3xl font-extrabold text-white leading-tight font-mono select-none">
              {project.name}
            </h1>
            
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </Card>

          {/* Problem & Solution */}
          {project.problem && project.solution && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Card hoverGlow={false} className="border border-brand-border-dark bg-brand-bg-panel flex flex-col gap-3">
                <div className="flex items-center gap-2 text-brand-accent-orange/90 font-mono text-xs select-none">
                  <FiAlertCircle className="text-sm" />
                  <span className="font-bold">THE PROBLEM</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed font-sans">
                  {project.problem}
                </p>
              </Card>
              <Card hoverGlow={false} className="border border-brand-border-dark bg-brand-bg-panel flex flex-col gap-3">
                <div className="flex items-center gap-2 text-brand-accent-primary font-mono text-xs select-none">
                  <FiCpu className="text-sm" />
                  <span className="font-bold">THE SOLUTION</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed font-sans">
                  {project.solution}
                </p>
              </Card>
            </div>
          )}

          {/* Architecture Details */}
          {project.architecture && (
            <Card hoverGlow={false} className="border border-brand-border-dark bg-brand-bg-panel flex flex-col gap-3">
              <div className="flex items-center gap-2 text-brand-accent-secondary font-mono text-xs select-none">
                <FiSettings className="text-sm animate-spin-slow" />
                <span className="font-bold">SYSTEM ARCHITECTURE</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed font-sans">
                {project.architecture}
              </p>
            </Card>
          )}

          {/* Engineering Challenges */}
          {project.challenges && (
            <Card hoverGlow={false} className="border border-brand-border-dark bg-brand-bg-panel flex flex-col gap-3">
              <div className="flex items-center gap-2 text-brand-accent-purple font-mono text-xs select-none">
                <FiSliders className="text-sm" />
                <span className="font-bold">ENGINEERING CHALLENGES & RESOLUTIONS</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed font-sans">
                {project.challenges}
              </p>
            </Card>
          )}
        </div>

        {/* Right Column: Meta Details, Tech, Actions */}
        <div className="flex flex-col gap-6">
          
          {/* Actions & Links Card */}
          <Card hoverGlow={false} className="border border-brand-border-dark bg-brand-bg-panel flex flex-col gap-4 font-mono select-none">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">// REPOSITORY LINKS</h3>
            
            <div className="flex flex-col gap-2.5">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-brand-bg-dark border border-brand-border-dark hover:border-slate-600 px-4 py-2.5 rounded text-xs text-white hover:bg-brand-bg-panelLight transition-all w-full"
                >
                  <FiGithub />
                  <span>Explore Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-brand-accent-primary hover:bg-brand-accent-primary/90 px-4 py-2.5 rounded text-xs text-brand-bg-dark font-bold shadow-glow-primary transition-all w-full"
                >
                  <FiExternalLink />
                  <span>Launch Live App</span>
                </a>
              )}
              {!project.githubUrl && !project.liveUrl && (
                <p className="text-[10px] text-slate-500 text-center py-2">
                  No public web links deployment config setup.
                </p>
              )}
            </div>
          </Card>

          {/* Tech Stack Specs */}
          <Card hoverGlow={false} className="border border-brand-border-dark bg-brand-bg-panel flex flex-col gap-4">
            <h3 className="text-xs font-bold text-slate-500 font-mono select-none uppercase tracking-wider">
              // SPECIFICATION STACK
            </h3>
            <div className="flex flex-wrap gap-2 select-none">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="primary" size="md">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Mock Screenshot Placeholder */}
          <Card hoverGlow={false} className="border border-brand-border-dark bg-brand-bg-panel/40 p-0 overflow-hidden flex flex-col relative aspect-[4/3] items-center justify-center text-center p-4">
            {/* Terminal layout decoration inside screenshot */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-slate-900 border-b border-brand-border-dark flex items-center px-3 gap-1 select-none pointer-events-none">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
            </div>
            
            <FiFileText className="text-slate-800 text-5xl mb-2" />
            <span className="font-mono text-[10px] text-slate-600 uppercase tracking-widest select-none font-bold">
              Deployment Blueprint Mockup
            </span>
            <span className="font-mono text-[9px] text-slate-500 mt-1 select-none">
              {project.id}_spec_layout.xml
            </span>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default ProjectDetailsPage;
