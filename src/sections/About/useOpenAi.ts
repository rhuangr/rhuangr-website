import { useState } from "react";

export const useOpenAI = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [output, setOutput] = useState<string | null>(null);

  const submitPrompt = async (prompt: string) => {
    setLoading(true);
    setError(null);
    setOutput(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 4000));
      setOutput("This is the response from the AI. KINDA LONGER TEXT TO TEST asfsdf");
    } catch (err) {
      setError("Failed to submit prompt");
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, error, output, submitPrompt };
};