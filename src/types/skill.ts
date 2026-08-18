import { IconType } from 'react-icons';

export interface Skill {
  name: string;
  level?: "beginner" | "intermediate" | "advanced";
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  skills: Skill[];
}
