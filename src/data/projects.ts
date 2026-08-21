import { Project } from '../types/project';

export const projectsData: Project[] = [
  {
    id: "job-portal",
    name: "Enterprise Job Portal",
    description: "A full-stack recruitment platform managing resumes, job matches, and applicant tracking with automated alerts.",
    longDescription: [
      "High-availability applicant tracking system (ATS) and recruitment platform.",
      "Streamlines candidate selection by matching CV uploads to active job descriptions.",
      "Allows companies to publish openings and manage stages of their hiring pipeline.",
      "Enables candidates to track applications and status updates in real-time."
    ],
    problem: [
      "Recruiters manually screen hundreds of CV files daily, causing massive review backlogs.",
      "Communication gaps leave candidates unaware of their current pipeline status.",
      "Lack of status-aware pipelines extends average company hiring cycles."
    ],
    solution: [
      "Engineered an automated status-aware candidate pipeline using React and ASP.NET Core.",
      "Integrated push alerts notifying users immediately of application changes.",
      "Implemented fast search filters to screen candidates using advanced predicates."
    ],
    architecture: [
      "Decoupled React Single Page Application communicating with a RESTful C# backend.",
      "Entity Framework Core ORM mapping system entities to a Microsoft SQL Server database.",
      "Role-based security (Recruiters vs. Candidates) utilizing secure JWT token filters."
    ],
    challenges: [
      "Processing concurrent large PDF file uploads without blocking server response threads.",
      "Solved via asynchronous streaming, chunked uploads, and off-thread background parsing."
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "ASP.NET Core", "SQL Server", "EF Core"],
    category: "Full Stack",
    status: "Completed",
    progress: 100,
    githubUrl: "https://github.com",
    liveUrl: "https://google.com",
    featured: true,
    imagePlaceholder: "job_portal_app",
    stats: { commits: 142, hours: 120, coverage: "96.4%", files: 38, linesOfCode: "8.4k" }
  },
  {
    id: "ai-resume-analyzer",
    name: "AI Resume Analyzer & Matcher",
    description: "A smart assistant that parses PDF resumes using OCR and evaluates match scores against target job descriptions.",
    longDescription: [
      "Smart resume analytics engine parsing CV metadata using PDF processing and NLP.",
      "Identifies candidate key skills, career timeline blocks, and core domains.",
      "Matches candidate profiles against target job descriptions to output score ratings.",
      "Provides developers with automated feedback for keyword optimizations."
    ],
    problem: [
      "Applicant resumes are frequently filtered out by automated screening bots.",
      "Candidates struggle to align their CV keywords with target job posting parameters."
    ],
    solution: [
      "Built a Python-based resume parsing server utilizing FastAPI and OpenAI API.",
      "Configured a dashboard client rendering compatibility charts and suggestions."
    ],
    architecture: [
      "FastAPI server running SpaCy and LangChain for CV token parsing.",
      "OpenAI integrations running prompt-engineered compatibility tests.",
      "React client rendering dynamic analytics reports using vector metrics."
    ],
    challenges: [
      "Mitigating high API network latency during long LLM completion queries.",
      "Resolved with query optimizations, Redis caches, and client-side streaming response feeds."
    ],
    technologies: ["React", "FastAPI", "Python", "Tailwind CSS", "OpenAI API"],
    category: "AI",
    status: "Building",
    progress: 70,
    githubUrl: "https://github.com",
    featured: true,
    imagePlaceholder: "resume_analyzer_app",
    stats: { commits: 88, hours: 75, coverage: "94.2%", files: 19, linesOfCode: "4.2k" }
  },
  {
    id: "dev-analytics",
    name: "Developer Analytics Dashboard",
    description: "A SaaS tool integrating GitHub and Jira metrics to calculate individual developer cycle times and commit trends.",
    longDescription: [
      "Engineering metrics dashboard for software delivery and team productivity.",
      "Visualizes delivery lead times, commit frequency, and PR approval latencies.",
      "Identifies bottlenecks in software review stages and repository lifecycles."
    ],
    problem: [
      "Engineering leads lack clear metrics to identify bottlenecks in development stages.",
      "Pull request reviews suffer long, untracked latencies before production releases."
    ],
    solution: [
      "Aggregated GitHub webhooks and Jira events into a central indexing dashboard.",
      "Rendered interactive latency trendlines, review times, and repository averages."
    ],
    architecture: [
      "Node.js background ingest workers collecting real-time webhooks.",
      "PostgreSQL relational database storing delivery and repository metrics.",
      "React frontend dashboard plotting analytics using custom SVG graph overlays."
    ],
    challenges: [
      "Avoiding rate-limiting restrictions during massive initial organization sync queries.",
      "Solved with token-rotation queues, batch endpoints, and incremental sync updates."
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    category: "Frontend",
    status: "Building",
    progress: 30,
    githubUrl: "https://github.com",
    featured: false,
    imagePlaceholder: "dev_analytics_app",
    stats: { commits: 64, hours: 90, coverage: "92.0%", files: 27, linesOfCode: "5.6k" }
  },
  {
    id: "portfolio-v2",
    name: "Developer Portfolio OS v2",
    description: "The current system: a dashboard-styled terminal developer environment showcasing skills, logs, and projects.",
    longDescription: [
      "Interactive retro-futuristic portfolio styled as a developer terminal OS.",
      "Presents professional experience, timeline logs, and projects in tabs.",
      "Implements dynamic custom theme toggles and a global command palette."
    ],
    problem: [
      "Generic template portfolios look static and fail to showcase active front-end skill.",
      "Navigating flat sites feels uninspired to technical recruiters."
    ],
    solution: [
      "Crafted an interactive terminal mock layout using custom CSS variables.",
      "Integrated search index palettes, route transitions, and responsive drawers."
    ],
    architecture: [
      "Pure React client built on Vite and TypeScript with Tailwind CSS utility structures.",
      "React Router DOM managing deep paths with browser history sync.",
      "Global Audio Context providing persistent background music streams."
    ],
    challenges: [
      "Aligning multi-column card sizes and complex grid heights across mobile layouts.",
      "Solved with CSS Flexbox stretching models and dynamic responsive grid tracks."
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    category: "Frontend",
    status: "Completed",
    progress: 100,
    githubUrl: "https://github.com",
    liveUrl: "https://google.com",
    featured: true,
    imagePlaceholder: "portfolio_os",
    stats: { commits: 112, hours: 80, coverage: "99.1%", files: 31, linesOfCode: "3.8k" }
  },
  {
    id: "ecommerce-gateway",
    name: "E-Commerce Microservices Gateway",
    description: "An API gateway supporting JWT routing, request rate limiting, and caching for a distributed catalog and checkout system.",
    longDescription: [
      "High-throughput API reverse-proxy orchestrating microservice communication.",
      "Unifies requests for checkout pipelines, shopping carts, and item listings.",
      "Applies cross-cutting configurations to simplify core service layers."
    ],
    problem: [
      "Duplicating security, rate-limiting, and request logging inside every single service.",
      "High network overhead and complexity for client applications fetching data."
    ],
    solution: [
      "Centralized traffic routing using YARP (Yet Another Reverse Proxy) in .NET Core.",
      "Configured unified rate-limit rules, logging middleware, and token validators."
    ],
    architecture: [
      "Built on .NET Core framework executing centralized request pipeline filters.",
      "Redis memory database caching blacklist flags and request limit counters."
    ],
    challenges: [
      "Minimizing API proxy hop latency below 10ms under heavy parallel request loads.",
      "Solved with customized memory caches and optimized routing maps in YARP."
    ],
    technologies: [".NET", "ASP.NET Core", "Redis", "Docker"],
    category: "Backend",
    status: "Paused",
    progress: 50,
    githubUrl: "https://github.com",
    featured: false,
    imagePlaceholder: "gateway_app",
    stats: { commits: 53, hours: 65, coverage: "97.5%", files: 14, linesOfCode: "2.9k" }
  },
  {
    id: "task-cli",
    name: "DevTask CLI System",
    description: "A C# command line utility to manage developer boards, backlog sprints, and automated git branch formatting.",
    longDescription: [
      "Developer command line dashboard supporting rapid task and issue workflows.",
      "Updates active board tickets, registers logged hours, and creates Git branches.",
      "Maintains context alignment by bringing project updates into the code editor."
    ],
    problem: [
      "Constantly switching tabs between code terminal and web backlog boards breaks flow.",
      "Manual Git branch creation and naming conventions are prone to typos."
    ],
    solution: [
      "C# terminal executable interacting with Jira and GitHub APIs directly.",
      "Configured branch generator matching branch tags with ticket IDs automatically."
    ],
    architecture: [
      "Standalone .NET Console Application compiled as a global CLI system utility.",
      "Standard local JSON file caches speeding up repeated index fetches."
    ],
    challenges: [
      "Resolving and parsing recursive command arguments and flags natively.",
      "Solved using System.CommandLine library to enforce dynamic autocomplete definitions."
    ],
    technologies: ["C#", ".NET", "REST APIs"],
    category: "Other",
    status: "Completed",
    progress: 100,
    githubUrl: "https://github.com",
    featured: false,
    imagePlaceholder: "task_cli_app",
    stats: { commits: 37, hours: 40, coverage: "95.0%", files: 12, linesOfCode: "1.8k" }
  }
];
