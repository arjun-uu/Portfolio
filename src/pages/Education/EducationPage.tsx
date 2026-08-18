import React from 'react';
import { FiBookOpen, FiCalendar, FiAward } from 'react-icons/fi';
import { educationData } from '../../data/education';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';

export function EducationPage() {
  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto animate-fade-in-up">
      {/* Heading */}
      <SectionHeading
        title="education --history"
        subtitle="Chronological track of my academic milestones, certifications, and grades."
        icon={FiBookOpen}
        badge="Academic History"
      />

      {/* Timeline Layout */}
      <div className="relative border-l border-brand-border-dark ml-4 md:ml-6 flex flex-col gap-8 select-text">
        {educationData.map((edu, index) => {
          return (
            <div key={index} className="relative pl-6 md:pl-8 group">
              {/* Timeline Bullet Dot */}
              <span className="absolute -left-[9px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-brand-border-dark bg-brand-bg-dark text-slate-500 transition-all duration-300 group-hover:border-brand-accent-secondary group-hover:bg-brand-accent-secondary/10">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-600 transition-colors duration-300 group-hover:bg-brand-accent-secondary" />
              </span>

              {/* Education Card */}
              <Card
                hoverGlow={true}
                glowColor={edu.type === 'college' ? 'secondary' : 'purple'}
                className="border border-brand-border-dark bg-brand-bg-panel p-5 flex flex-col gap-3"
              >
                {/* Header: Institution, Degree/Class, Grade */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-brand-border-dark/40 pb-3 font-mono select-none">
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-white leading-tight">
                      {edu.degree}
                    </h3>
                    <div className="text-xs text-brand-accent-secondary mt-1 font-sans">
                      {edu.institution}
                    </div>
                  </div>

                  {/* Date & Grade */}
                  <div className="flex flex-col sm:items-end gap-1 text-[10px] md:text-xs text-slate-500 font-medium">
                    <div className="flex items-center gap-1">
                      <FiCalendar className="shrink-0" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-brand-accent-primary">
                      <FiAward className="shrink-0" />
                      <span>{edu.grade}</span>
                    </div>
                  </div>
                </div>

                {/* Details List */}
                <ul className="list-none flex flex-col gap-2 text-sm text-slate-400 font-sans leading-relaxed pl-1">
                  {edu.details.map((detail, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <span className="text-brand-accent-primary select-none font-mono font-bold text-xs mt-[7px] leading-none">{">"}</span>
                      <span className="flex-1">{detail}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EducationPage;
