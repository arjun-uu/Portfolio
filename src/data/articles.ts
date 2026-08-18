import { Article } from '../types/article';

export const articlesData: Article[] = [
  {
    id: "art-1",
    title: "Implementing Clean Architecture in ASP.NET Core APIs",
    description: "A complete walkthrough of structure, layers, dependency flow, and domain-driven design strategies for scalable backend applications.",
    publishedAt: "Aug 12, 2026",
    readingTime: "8 min read",
    category: "Backend",
    tags: [".NET", "Architecture", "C#"],
    externalUrl: "https://medium.com"
  },
  {
    id: "art-2",
    title: "Why We Switched to TypeScript for Enterprise React Apps",
    description: "How static type checking, interface contracts, and module paths saved our engineering team from hundreds of runtime exceptions.",
    publishedAt: "Jul 28, 2026",
    readingTime: "6 min read",
    category: "Frontend",
    tags: ["React", "TypeScript", "Best-Practices"],
    externalUrl: "https://medium.com"
  },
  {
    id: "art-3",
    title: "Optimizing SQL Queries: Indexes, Table Scans, and Joins",
    description: "Deep dive into query execution plans, understanding index seeks versus scans, and structuring relations for performant query executions.",
    publishedAt: "Jun 15, 2026",
    readingTime: "10 min read",
    category: "Databases",
    tags: ["SQL Server", "Performance", "SQL"],
    externalUrl: "https://medium.com"
  },
  {
    id: "art-4",
    title: "Containerizing React + Vite Frontend Apps with Docker",
    description: "A developer guide on crafting multi-stage Docker builds using Nginx to host light, production-ready frontend bundles.",
    publishedAt: "Apr 04, 2026",
    readingTime: "5 min read",
    category: "DevOps",
    tags: ["Docker", "Vite", "Nginx"],
    externalUrl: "https://medium.com"
  }
];
