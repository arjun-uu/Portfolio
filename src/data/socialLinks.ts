import { siteConfig } from '../constants/site';
import { FiGithub, FiLinkedin, FiMail, FiTerminal, FiEdit2 } from 'react-icons/fi';
import { IconType } from 'react-icons';

export interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: siteConfig.github,
    icon: FiGithub
  },
  {
    name: "LinkedIn",
    url: siteConfig.linkedin,
    icon: FiLinkedin
  },
  {
    name: "LeetCode",
    url: siteConfig.leetcode,
    icon: FiTerminal
  },
  {
    name: "Medium",
    url: siteConfig.medium,
    icon: FiEdit2
  },
];
