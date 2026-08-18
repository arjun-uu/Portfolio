export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  duration: string; // e.g., "Jan 2024 - Present"
  description: string[];
  technologies: string[];
}
