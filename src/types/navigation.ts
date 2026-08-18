import { IconType } from 'react-icons';

export interface NavItem {
  name: string;
  path: string;
  icon: IconType;
  badgeKey?: 'projects'; // Dynamic badge counts from data
}
