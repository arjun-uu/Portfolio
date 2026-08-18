import { NavItem } from '../types/navigation';
import { FiHome, FiCode, FiFolder, FiBriefcase, FiFileText, FiMail, FiTerminal, FiBookOpen } from 'react-icons/fi';

export const navigationItems: NavItem[] = [
  {
    name: "Home",
    path: "/",
    icon: FiHome
  },
  {
    name: "Skills",
    path: "/skills",
    icon: FiCode
  },
  {
    name: "Projects",
    path: "/projects",
    icon: FiFolder,
    badgeKey: "projects"
  },
  {
    name: "Education",
    path: "/education",
    icon: FiBookOpen
  },
  {
    name: "Experience",
    path: "/experience",
    icon: FiBriefcase
  },
  {
    name: "Articles",
    path: "/articles",
    icon: FiFileText
  },
  {
    name: "Playground",
    path: "/playground",
    icon: FiTerminal
  },
  {
    name: "Contact",
    path: "/contact",
    icon: FiMail
  }
];
