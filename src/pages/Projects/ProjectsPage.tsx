import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiFolder, FiSearch, FiGithub, FiExternalLink, FiCpu, FiEye } from 'react-icons/fi';
import { projectsData } from '../../data/projects';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { cn } from '../../utils/cn';

export function ProjectsPage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<'All' | 'Frontend' | 'Backend' | 'Full Stack' | 'AI' | 'Other'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Categories list
  const categories: Array<'All' | 'Frontend' | 'Backend' | 'Full Stack' | 'AI' | 'Other'> = [
    'All', 'Frontend', 'Backend', 'Full Stack', 'AI', 'Other'
  ];

  // Filtering logic
  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch = 
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto animate-fade-in-up">
      {/* Header */}
      <SectionHeading
        title="projects --list"
        subtitle="Explore my repositories, web services, microservices, and AI integrations."
        icon={FiFolder}
        badge={`${projectsData.length} Total`}
      />

      {/* Controls Bar */}
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between select-none">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-1.5 font-mono text-[10px] md:text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-3 py-1.5 rounded transition-all border",
                activeCategory === cat
                  ? "bg-brand-accent-primary border-brand-accent-primary text-brand-bg-dark font-bold shadow-glow-primary"
                  : "bg-brand-bg-panelLight border-brand-border-dark text-slate-400 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Text Search Input */}
        <div className="relative font-mono text-xs w-full sm:w-64 max-w-xs shrink-0">
          <input
            type="text"
            placeholder="Search projects/tech..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-brand-bg-panelLight border border-brand-border-dark focus:border-slate-600 rounded px-3 py-2 pl-8 text-white placeholder-slate-500 focus:outline-none"
          />
          <FiSearch className="absolute left-2.5 top-3 text-slate-500" />
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <Card hoverGlow={false} className="border border-brand-border-dark p-12 text-center text-slate-500 select-none">
          <FiCpu className="mx-auto text-4xl text-slate-700 mb-3 animate-pulse" />
          <p className="font-mono text-sm">No projects matched your criteria.</p>
          <button 
            onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
            className="font-mono text-xs text-brand-accent-primary hover:underline mt-2"
          >
            Clear filters
          </button>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              hoverGlow={true}
              glowColor={project.featured ? 'secondary' : 'primary'}
              className="flex flex-col border border-brand-border-dark bg-brand-bg-panel p-5 relative overflow-hidden"
            >
              {/* Featured Badge Decoration */}
              {project.featured && (
                <div className="absolute right-0 top-0 bg-brand-accent-secondary/15 text-brand-accent-secondary font-mono text-[8px] font-bold px-2 py-0.5 border-l border-b border-brand-border-dark rounded-bl select-none uppercase tracking-widest">
                  Featured
                </div>
              )}

              {/* Category / Meta */}
              <div className="flex items-center gap-1.5 font-mono text-[9px] text-slate-500 select-none mb-2">
                <span>{project.category}</span>
                <span>·</span>
                <span className={cn(
                  "font-bold uppercase tracking-wider",
                  project.status === 'Completed' ? 'text-brand-accent-primary' :
                  project.status === 'Building' ? 'text-brand-accent-orange' : 'text-slate-400'
                )}>
                  {project.status}
                </span>
              </div>

              {/* Title & Info */}
              <div className="flex-1">
                <h3 className="text-base font-bold text-white font-mono hover:text-brand-accent-primary transition-colors cursor-pointer select-none" onClick={() => navigate(`/projects/${project.id}`)}>
                  {project.name}
                </h3>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-1.5 mt-4 select-none">
                {project.technologies.slice(0, 4).map(tech => (
                  <span key={tech} className="bg-slate-900 border border-slate-800 text-slate-400 font-mono text-[9px] px-1.5 py-0.5 rounded">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="font-mono text-[9px] text-slate-500 px-1 py-0.5 leading-none">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>

              {/* Footer CTA Actions */}
              <div className="flex justify-between items-center mt-5 pt-3 border-t border-brand-border-dark/40 select-none">
                {/* Left: Nav details */}
                <button
                  onClick={() => navigate(`/projects/${project.id}`)}
                  className="flex items-center gap-1 font-mono text-[10px] text-brand-accent-primary hover:text-white transition-colors"
                  aria-label={`View ${project.name} details`}
                >
                  <FiEye />
                  <span>View Project</span>
                </button>

                {/* Right: Code & Link */}
                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white text-sm transition-colors"
                      title="View GitHub Repository"
                    >
                      <FiGithub />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white text-sm transition-colors"
                      title="View Live Site"
                    >
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
export default ProjectsPage;
