import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '../components/layout/AppLayout';
import { HomePage } from '../pages/Home/HomePage';
import { SkillsPage } from '../pages/Skills/SkillsPage';
import { ProjectsPage } from '../pages/Projects/ProjectsPage';
import { ProjectDetailsPage } from '../pages/Projects/ProjectDetailsPage';
import { ExperiencePage } from '../pages/Experience/ExperiencePage';
import { ArticlesPage } from '../pages/Articles/ArticlesPage';
import { ContactPage } from '../pages/Contact/ContactPage';
import { PlaygroundPage } from '../pages/Playground/PlaygroundPage';
import { EducationPage } from '../pages/Education/EducationPage';
import { NotFoundPage } from '../pages/NotFound/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: 'skills',
        element: <SkillsPage />
      },
      {
        path: 'projects',
        element: <ProjectsPage />
      },
      {
        path: 'projects/:projectId',
        element: <ProjectDetailsPage />
      },
      {
        path: 'education',
        element: <EducationPage />
      },
      {
        path: 'experience',
        element: <ExperiencePage />
      },
      {
        path: 'articles',
        element: <ArticlesPage />
      },
      {
        path: 'playground',
        element: <PlaygroundPage />
      },
      {
        path: 'contact',
        element: <ContactPage />
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  }
]);
