import React, { useState } from 'react';
import { FiCode, FiChevronDown, FiChevronUp, FiAward } from 'react-icons/fi';
import { skillsData } from '../../data/skills';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { cn } from '../../utils/cn';

export function SkillsPage() {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [activeFilter, setActiveFilter] = useState<'all' | 'languages' | 'frontend' | 'backend' | 'databases' | 'cs' | 'tools'>('all');

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const getSkillLevelColor = (level?: string) => {
    switch (level) {
      case 'advanced': return 'primary';
      case 'intermediate': return 'secondary';
      case 'beginner': return 'purple';
      default: return 'outline';
    }
  };

  const filteredCategories = skillsData.filter(
    (cat) => activeFilter === 'all' || cat.id === activeFilter
  );

  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto animate-fade-in-up">
      {/* Page Heading */}
      <SectionHeading
        title="skills --list"
        subtitle="Core programming languages, technologies, databases, and environments I work with daily."
        icon={FiCode}
        badge="Data Driven"
      />

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 select-none font-mono text-[10px] md:text-xs">
        <button
          onClick={() => setActiveFilter('all')}
          className={cn(
            "px-3 py-1.5 rounded transition-all border",
            activeFilter === 'all'
              ? "bg-brand-accent-primary border-brand-accent-primary text-brand-bg-dark font-bold shadow-glow-primary"
              : "bg-brand-bg-panelLight border-brand-border-dark text-slate-400 hover:text-white"
          )}
        >
          All Categories
        </button>
        {skillsData.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id as any)}
            className={cn(
              "px-3 py-1.5 rounded transition-all border",
              activeFilter === cat.id
                ? "bg-brand-accent-primary border-brand-accent-primary text-brand-bg-dark font-bold shadow-glow-primary"
                : "bg-brand-bg-panelLight border-brand-border-dark text-slate-400 hover:text-white"
            )}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Skills Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCategories.map((category) => {
          const Icon = category.icon;
          const isExpanded = expandedCategories[category.id] ?? false;
          const skillsList = category.skills;
          const totalCount = skillsList.length;

          // Limit displayed skills on mobile if collapsed
          const displayedSkills = isMobile && !isExpanded ? skillsList.slice(0, 3) : skillsList;
          const hiddenCount = totalCount - displayedSkills.length;

          return (
            <Card
              key={category.id}
              hoverGlow={true}
              glowColor="primary"
              className="flex flex-col h-full border border-brand-border-dark bg-brand-bg-panel p-5 relative overflow-hidden"
            >
              {/* Category Header */}
              <div className="flex items-start justify-between select-none">
                <div className="flex items-center gap-3">
                  <span className="p-2 bg-brand-bg-panelLight border border-brand-border-dark rounded text-brand-accent-primary">
                    <Icon className="text-lg" />
                  </span>
                  <div>
                    <h3 className="font-mono text-sm font-bold text-white leading-tight">
                      {category.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-sans mt-0.5">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Badge Count or Toggle Button on Mobile */}
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] bg-slate-900 border border-slate-800 text-slate-400 font-bold px-1.5 py-0.5 rounded">
                    {totalCount}
                  </span>

                  {isMobile && (
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="p-1 text-slate-400 hover:text-white border border-brand-border-dark bg-brand-bg-panelLight rounded hover:bg-brand-bg-panelLight/80 transition-colors"
                      aria-expanded={isExpanded}
                      aria-label={`${isExpanded ? "Collapse" : "Expand"} ${category.title} skills`}
                    >
                      {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
                    </button>
                  )}
                </div>
              </div>

              {/* Skills Badge Container */}
              <div className="flex flex-wrap items-start content-start gap-2 mt-4 flex-1">
                {displayedSkills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant={getSkillLevelColor(skill.level)}
                    size="sm"
                    className="select-none hover:scale-105 transition-transform"
                    title={`Level: ${skill.level || 'intermediate'}`}
                  >
                    {skill.name}
                  </Badge>
                ))}

                {/* Collapsed "+X" indicator for mobile */}
                {isMobile && !isExpanded && hiddenCount > 0 && (
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="inline-flex items-center font-mono rounded font-bold text-[10px] px-2 py-0.5 bg-brand-bg-panelLight text-brand-accent-secondary border border-brand-accent-secondary/20 hover:border-brand-accent-secondary/50 transition-colors"
                    aria-label={`Show ${hiddenCount} more skills`}
                  >
                    +{hiddenCount} more
                  </button>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
export default SkillsPage;
