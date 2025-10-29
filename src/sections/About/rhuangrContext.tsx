import React, { createContext, useContext } from "react";
import { useOpenAI } from "./useOpenAi";

type rhuangrContextType = {
  isLoading: boolean;
  error: string | null;
  output: string | null;
  submitPrompt: (prompt: string) => Promise<void>;
};

const rhuangrContext = createContext<rhuangrContextType | undefined>(undefined);

export const RhuangrContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, error, output, submitPrompt } = useOpenAI();

  return (
    <rhuangrContext.Provider value={{ isLoading, error, output, submitPrompt }}>
      {children}
    </rhuangrContext.Provider>
  );
};

export const useRhuangrContext = () => {
  const context = useContext(rhuangrContext);
  if (context === undefined) {
    throw new Error("useRhuangrContext must be used within an rhuangrContextProvider");
  }
  return context;
};
