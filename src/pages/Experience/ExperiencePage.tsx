import React from 'react';
import { FiBriefcase, FiCalendar, FiMapPin, FiLink2 } from 'react-icons/fi';
import { experienceData } from '../../data/experience';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';

export function ExperiencePage() {
  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto animate-fade-in-up">
      {/* Heading */}
      <SectionHeading
        title="experience --log"
        subtitle="Chronological track of my professional software engineering history and internships."
        icon={FiBriefcase}
        badge="Career History"
      />

      {/* Timeline Layout */}
      <div className="relative border-l border-brand-border-dark ml-4 md:ml-6 flex flex-col gap-8 select-text">
        {experienceData.map((exp) => {
          return (
            <div key={exp.id} className="relative pl-6 md:pl-8 group">
              {/* Timeline Bullet Dot */}
              <span className="absolute -left-[9px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-brand-border-dark bg-brand-bg-dark text-slate-500 transition-all duration-300 group-hover:border-brand-accent-primary group-hover:bg-brand-accent-primary/10">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-600 transition-colors duration-300 group-hover:bg-brand-accent-primary" />
              </span>

              {/* Experience Card */}
              <Card
                hoverGlow={true}
                glowColor="primary"
                className="border border-brand-border-dark bg-brand-bg-panel p-5 flex flex-col gap-3"
              >
                {/* Header: Role, Company, Location */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-brand-border-dark/40 pb-3 font-mono select-none">
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-white leading-tight">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-brand-accent-secondary mt-1">
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline flex items-center gap-1"
                        >
                          <span>{exp.company}</span>
                          <FiLink2 className="text-[10px]" />
                        </a>
                      ) : (
                        <span>{exp.company}</span>
                      )}
                    </div>
                  </div>

                  {/* Date & Location */}
                  <div className="flex flex-col sm:items-end gap-1 text-[10px] md:text-xs text-slate-500 font-medium">
                    <div className="flex items-center gap-1">
                      <FiCalendar className="shrink-0" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiMapPin className="shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="list-none flex flex-col gap-2 text-sm text-slate-400 font-sans leading-relaxed pl-1">
                  {exp.description.map((bullet, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <span className="text-brand-accent-primary select-none font-mono font-bold text-xs mt-[7px] leading-none">{">"}</span>
                      <span className="flex-1">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Core Technologies Used */}
                <div className="flex flex-wrap gap-1.5 mt-2 pt-2 border-t border-brand-border-dark/30 select-none">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ExperiencePage;
