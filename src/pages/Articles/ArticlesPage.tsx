import React from 'react';
import { FiFileText, FiClock, FiCalendar, FiArrowRight } from 'react-icons/fi';
import { articlesData } from '../../data/articles';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';

export function ArticlesPage() {
  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto animate-fade-in-up">
      {/* Heading */}
      <SectionHeading
        title="articles --feed"
        subtitle="Developer concepts, architecture essays, tutorial briefs, and tech writeups."
        icon={FiFileText}
        badge="Insights"
      />

      {/* Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 select-text">
        {articlesData.map((article) => {
          return (
            <Card
              key={article.id}
              hoverGlow={true}
              glowColor="primary"
              className="flex flex-col border border-brand-border-dark bg-brand-bg-panel p-5 relative overflow-hidden group"
            >
              {/* Top Meta Details */}
              <div className="flex items-center justify-between font-mono text-[9px] text-slate-500 mb-2 select-none">
                <span className="text-brand-accent-secondary font-bold uppercase tracking-wider">
                  {article.category}
                </span>
                
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-0.5">
                    <FiCalendar />
                    <span>{article.publishedAt}</span>
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-0.5">
                    <FiClock />
                    <span>{article.readingTime}</span>
                  </span>
                </div>
              </div>

              {/* Title & Body */}
              <div className="flex-1">
                <h3 className="text-sm md:text-base font-bold text-white font-mono leading-snug group-hover:text-brand-accent-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-400 text-xs mt-2.5 leading-relaxed font-sans line-clamp-3">
                  {article.description}
                </p>
              </div>

              {/* Tag Badges */}
              <div className="flex flex-wrap gap-1.5 mt-4 select-none">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="gray" size="sm">
                    #{tag}
                  </Badge>
                ))}
              </div>

              {/* CTA Link */}
              <div className="mt-5 pt-3 border-t border-brand-border-dark/40 select-none">
                {article.externalUrl ? (
                  <a
                    href={article.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[10px] text-brand-accent-primary hover:text-white transition-colors"
                  >
                    <span>Read Article</span>
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <span className="font-mono text-[9px] text-slate-500 italic">
                    Draft local draft.xml
                  </span>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
export default ArticlesPage;
