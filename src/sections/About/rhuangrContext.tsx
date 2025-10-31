import React, { createContext, useContext, useState } from "react";
import { useOpenAI } from "./useOpenAi";
import type {ReactNode} from "react";



type rhuangrContextType = {
  isLoading: boolean;
  error: string | null;
  output: string | null;
  paths: Map<string, ReactNode>;
  submitPrompt: (prompt: string) => Promise<void>;
};

const rhuangrContext = createContext<rhuangrContextType | undefined>(undefined);

export const RhuangrContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, error, output, submitPrompt } = useOpenAI();

  const paths = new Map<string, ReactNode>();

  return (
    <rhuangrContext.Provider value={{ isLoading, error, output, submitPrompt, paths }}>
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
