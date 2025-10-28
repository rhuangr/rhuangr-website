import React, { createContext, useContext } from "react";
import { useOpenAI } from "./useOpenAi";

type AboutContextType = {
  isLoading: boolean;
  error: string | null;
  output: string | null;
  submitPrompt: (prompt: string) => Promise<void>;
};

const AboutContext = createContext<AboutContextType | undefined>(undefined);

export const AboutProvider = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, error, output, submitPrompt } = useOpenAI();

  return (
    <AboutContext.Provider value={{ isLoading, error, output, submitPrompt }}>
      {children}
    </AboutContext.Provider>
  );
};

export const useAboutContext = () => {
  const context = useContext(AboutContext);
  if (context === undefined) {
    throw new Error("useAboutContext must be used within an AboutProvider");
  }
  return context;
};
