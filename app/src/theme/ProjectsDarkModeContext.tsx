// Professional context for Projects section only (dark mode always)
import React, { createContext, useContext, ReactNode } from 'react';

interface ProjectsDarkModeContextType {
  dark: boolean;
}

// Always dark mode: dark is true
const ProjectsDarkModeContext = createContext<ProjectsDarkModeContextType | undefined>(undefined);

export const useProjectsDarkMode = () => {
  const ctx = useContext(ProjectsDarkModeContext);
  if (!ctx) throw new Error('useProjectsDarkMode must be used within ProjectsDarkModeProvider');
  return ctx;
};

export const ProjectsDarkModeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ProjectsDarkModeContext.Provider value={{ dark: true }}>
      {children}
    </ProjectsDarkModeContext.Provider>
  );
};
