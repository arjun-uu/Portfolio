import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projectsData } from '../../../data/projects';
import { Project, ProjectStats } from '../../../types/project';

// Re-export type for component compatibility
export type { ProjectStats };

export const getTechBadgeVariant = (tech: string): 'primary' | 'secondary' | 'purple' | 'orange' | 'outline' => {
  const lower = tech.toLowerCase();
  if (lower.includes('react') || lower.includes('typescript') || lower.includes('js') || lower.includes('ts')) {
    return 'secondary';
  }
  if (lower.includes('net') || lower.includes('asp') || lower.includes('python') || lower.includes('fastapi') || lower.includes('node') || lower.includes('c#')) {
    return 'purple';
  }
  if (lower.includes('sql') || lower.includes('postgres') || lower.includes('redis') || lower.includes('db') || lower.includes('docker')) {
    return 'orange';
  }
  return 'primary';
};

export function useProjectDetails() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  // Find project
  const project = projectsData.find((p) => p.id === projectId);

  const [activeTab, setActiveTab] = useState('readme');

  const handleBackToProjects = () => {
    navigate('/projects');
  };

  // Fallback defaults for new projects that don't have specified stats configurations
  const defaultStats: ProjectStats = {
    commits: 0,
    hours: 0,
    coverage: "0%",
    files: 0,
    linesOfCode: "0"
  };

  const stats = project ? (project.stats || defaultStats) : null;

  return {
    project,
    projectId,
    activeTab,
    setActiveTab,
    handleBackToProjects,
    stats,
  };
}
