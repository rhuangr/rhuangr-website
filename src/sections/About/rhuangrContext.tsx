import React, { createContext, useContext, useMemo } from "react";
import { useAI } from "./useAI";

type rhuangrContextType = {
  isLoading: boolean;
  error: string | null;
  parsedOutput: {
    heading: string;
    paragraphs: { subheading: string; content: string }[];
  } | null;
  submitPrompt: (prompt: string) => Promise<void>;
};

const rhuangrContext = createContext<rhuangrContextType | undefined>(undefined);

export const RhuangrContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isLoading, error, output, submitPrompt } = useAI();

  const parsedOutput = useMemo(() => {
    if (!output) {
      return null;
    }
    return JSON.parse(output.response);
  }, [output]);

  return (
    <rhuangrContext.Provider
      value={{ isLoading, error, submitPrompt, parsedOutput }}
    >
      {children}
    </rhuangrContext.Provider>
  );
};

export const useRhuangrContext = () => {
  const context = useContext(rhuangrContext);
  if (context === undefined) {
    throw new Error(
      "useRhuangrContext must be used within an rhuangrContextProvider"
    );
  }
  return context;
};

export interface LLMOutputType {
  heading: string;
  paragraphs: {
    subheading: string;
    content: string;
  }[];
}
