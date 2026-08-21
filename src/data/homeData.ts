import { FiFolder, FiGithub, FiCode } from 'react-icons/fi';
import { FaRocket } from 'react-icons/fa';

export const TRACKS = [
  { 
    title: "Lo-fi Coding Beats", 
    artist: "Chill Programmer", 
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
  },
  { 
    title: "Synthwave Uplink", 
    artist: "ByteSized", 
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" 
  },
  { 
    title: "Deep Focus Ambient", 
    artist: "Compile Time", 
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" 
  }
];

export const homeStatsData = [
  {
    label: "Projects",
    count: "18",
    icon: FiFolder,
    subLabel: "+ 5 this year",
    subLabelClass: "text-brand-accent-primary font-bold",
    iconClass: "text-brand-accent-secondary border-brand-accent-secondary/25 bg-brand-accent-secondary/5",
    glowColor: "secondary" as const,
    color: "text-brand-accent-secondary"
  },
  {
    label: "Contributions",
    count: "1,280",
    icon: FiGithub,
    subLabel: "This year",
    subLabelClass: "text-slate-500",
    iconClass: "text-slate-200 border-slate-700/50 bg-slate-800/10",
    glowColor: "primary" as const,
    color: "text-white"
  },
  {
    label: "Years Experience",
    count: "2+",
    icon: FiCode,
    subLabel: "Software Engineer",
    subLabelClass: "text-slate-500",
    iconClass: "text-brand-accent-purple border-brand-accent-purple/25 bg-brand-accent-purple/5",
    glowColor: "purple" as const,
    color: "text-brand-accent-purple"
  },
  {
    label: "Tech Stack",
    count: "12+",
    icon: FaRocket,
    subLabel: "Technologies",
    subLabelClass: "text-slate-500",
    iconClass: "text-brand-accent-orange border-brand-accent-orange/25 bg-brand-accent-orange/5",
    glowColor: "orange" as const,
    color: "text-brand-accent-orange"
  }
];
