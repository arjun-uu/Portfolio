import { Experience } from '../types/experience';

export const experienceData: Experience[] = [
  {
    id: "exp-1",
    role: "Software Developer",
    company: "TechCorp Global Solutions",
    companyUrl: "https://google.com",
    location: "Hyderabad, India",
    duration: "Jan 2024 - Present",
    description: [
      "Architected and deployed full-stack web portals using React, TypeScript, and .NET Core APIs.",
      "Optimized database indexing in SQL Server, improving query retrieval times by 35% on high-traffic endpoints.",
      "Implemented OAuth2/JWT authorization workflows to secure microservice client integrations.",
      "Mentored junior engineers and instituted code review standards across a team of 6 developers."
    ],
    technologies: ["React", "TypeScript", ".NET Core", "SQL Server", "EF Core", "Docker"]
  },
  {
    id: "exp-2",
    role: "Associate Developer",
    company: "Innovate Software Systems",
    companyUrl: "https://google.com",
    location: "Bangalore, India",
    duration: "Jun 2022 - Dec 2023",
    description: [
      "Developed responsive user interfaces with React, improving site load times by 20% through lazy-loading and bundle split optimizations.",
      "Integrated third-party REST APIs and managed client-side state using Redux Toolkit.",
      "Wrote comprehensive unit tests using Jest and React Testing Library, boosting code coverage from 60% to 85%.",
      "Collaborated closely with UX designers to convert Figma designs into pixel-perfect Tailwind layouts."
    ],
    technologies: ["React", "JavaScript", "Redux", "Tailwind CSS", "Jest", "Git"]
  },
  {
    id: "exp-3",
    role: "Junior Engineer Intern",
    company: "CloudCore Systems",
    companyUrl: "https://google.com",
    location: "Hyderabad, India",
    duration: "Jul 2021 - May 2022",
    description: [
      "Assisted in maintaining backend API services built with ASP.NET Core.",
      "Authored automated SQL migration scripts and managed local schema upgrades.",
      "Designed utility C# scripts to parse large CSV feeds into active staging tables, reducing manual operator errors."
    ],
    technologies: ["C#", ".NET Core", "SQL Server", "Postman"]
  }
];
