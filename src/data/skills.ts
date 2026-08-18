import { SkillCategory } from '../types/skill';

import {
  FiCode,
  FiServer,
  FiDatabase,
  FiGlobe,
  FiCpu,
  FiTerminal,
} from 'react-icons/fi';

export const skillsData: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    description: "Programming languages I work with",
    icon: FiCode,
    skills: [
      { name: "TypeScript", level: "intermediate" },
      { name: "JavaScript", level: "advanced" },
      { name: "C#", level: "intermediate" },
      { name: "SQL", level: "intermediate" },
      { name: "Python", level: "beginner" },
    ],
  },

  {
    id: "frontend",
    title: "Frontend Development",
    description: "Modern frontend development with React",
    icon: FiGlobe,
    skills: [
      { name: "React.js", level: "advanced" },
      { name: "TypeScript / TSX", level: "intermediate" },
      { name: "Tailwind CSS", level: "advanced" },
      { name: "Vite", level: "advanced" },
      { name: "Redux Toolkit", level: "intermediate" },
      { name: "RTK Query", level: "intermediate" },
      { name: "React Router", level: "intermediate" },
      { name: "HTML5 / CSS3", level: "advanced" },
    ],
  },

  {
    id: "backend",
    title: "Backend Development",
    description: "API development with the .NET ecosystem",
    icon: FiServer,
    skills: [
      { name: "ASP.NET Core", level: "intermediate" },
      { name: ".NET", level: "intermediate" },
      { name: "REST APIs", level: "advanced" },
      { name: "Entity Framework Core", level: "intermediate" },
      { name: "ASP.NET Identity", level: "intermediate" },
      { name: "JWT Authentication", level: "intermediate" },
      { name: "OpenIddict", level: "beginner" },
      { name: "SignalR", level: "beginner" },
      { name: "MediatR", level: "intermediate" },
      { name: "FluentValidation", level: "intermediate" },
    ],
  },

  {
    id: "databases",
    title: "Databases & Data Access",
    description: "Relational databases and data access",
    icon: FiDatabase,
    skills: [
      { name: "SQL Server", level: "intermediate" },
      { name: "Entity Framework Core", level: "intermediate" },
      { name: "LINQ", level: "intermediate" },
      { name: "SQL", level: "intermediate" },
      { name: "Repository Pattern", level: "intermediate" },
      { name: "Specification Pattern", level: "intermediate" },
    ],
  },

  {
    id: "architecture",
    title: "Architecture & Engineering",
    description: "Software engineering concepts and patterns",
    icon: FiCpu,
    skills: [
      { name: "OOP", level: "intermediate" },
      { name: "Clean Architecture", level: "intermediate" },
      { name: "Repository Pattern", level: "intermediate" },
      { name: "CQRS / MediatR", level: "intermediate" },
      { name: "Dependency Injection", level: "intermediate" },
      { name: "Generic Repository", level: "intermediate" },
      { name: "Specification Pattern", level: "intermediate" },
      { name: "Exception Handling", level: "intermediate" },
    ],
  },

  {
    id: "tools",
    title: "Tools & Platforms",
    description: "Development tools and engineering workflow",
    icon: FiTerminal,
    skills: [
      { name: "Git & GitHub", level: "advanced" },
      { name: "VS Code", level: "advanced" },
      { name: "Visual Studio", level: "intermediate" },
      { name: "Postman", level: "advanced" },
      { name: "SQL Server Management Studio", level: "intermediate" },
      { name: "ABP.IO", level: "beginner" },
      { name: "GitHub Copilot", level: "intermediate" },
    ],
  },
];