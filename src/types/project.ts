export interface ProjectStats {
  commits: number;
  hours: number;
  coverage: string;
  files: number;
  linesOfCode: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription?: string | string[];
  problem?: string | string[];
  solution?: string | string[];
  architecture?: string | string[];
  challenges?: string | string[];
  technologies: string[];
  category: "Frontend" | "Backend" | "Full Stack" | "AI" | "Other";
  status: "Planned" | "Building" | "Paused" | "Completed";
  progress?: number; // percentage 0 to 100 for the Build Queue
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  imagePlaceholder?: string;
  stats?: ProjectStats;
}
