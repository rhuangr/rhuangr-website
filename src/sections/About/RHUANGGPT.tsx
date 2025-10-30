import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useRhuangrContext } from "./rhuangrContext";

interface RHUANGGPTProps {
  className?: string;
}

export const RHUANGGPT = ({ className }: RHUANGGPTProps) => {
  const { submitPrompt } = useRhuangrContext();
  return (
    <div className={`w-full ${className ?? ""}`}>
      <AITextArea onSubmit={submitPrompt} />
    </div>
  );
};

interface AITextAreaProps {
  onSubmit?: (prompt: string) => void;
}

const AITextArea = ({ onSubmit }: AITextAreaProps) => {
  const [prompt, setPrompt] = useState("");
  const { isLoading } = useRhuangrContext();

  const submitHandler = () => {
    console.log("Submitted prompt:", prompt);
    setPrompt("");
    onSubmit?.(prompt);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (prompt.trim() !== "") {
        submitHandler();
      }
    }
  };

  return (
    <div className="group relative top-1/2 h-12 w-lg w-md max-w-[95vh] mx-auto transition-all duration-700 ease-in-out">
      <input
        value={prompt}
        disabled={isLoading}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrompt(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask me a question..."
        className="focus:outline-none focus:ring-1 ring-indigo-200 absolute placeholder-muted-foreground text-body h-12 w-full rounded-md bg-gray-100/20 border-0 pr-14 pl-7"
      />

      <Button
        variant="outline"
        size="icon-sm"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full"
        disabled={prompt.trim() === "" || isLoading}
        onClick={submitHandler}
      >
        <ArrowUp />
        <span className="sr-only">Send</span>
      </Button>
    </div>
  );
};
