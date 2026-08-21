import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { ThemeProvider } from '../hooks/useTheme';
import { AudioProvider } from '../context/AudioContext';

export function App() {
  return (
    <ThemeProvider>
      <AudioProvider>
        <RouterProvider router={router} />
      </AudioProvider>
    </ThemeProvider>
  );
}

export default App;
