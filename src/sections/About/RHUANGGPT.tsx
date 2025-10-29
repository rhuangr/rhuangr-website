import { useState } from "react";
import { GlowEffect } from "../../components/GlowEffect";
import { Textarea } from "@/components/ui/textarea";
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
    // Keep a small console trace for development.
    console.log("Submitted prompt:", prompt);
    setPrompt("");
    onSubmit?.(prompt);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (prompt.trim() !== "") {
        submitHandler();
      }
    }
  };

  return (
    <div className="group relative h-12 w-full max-w-[min(900px,calc(100vw-4rem))] mx-auto transition-all duration-700 ease-in-out pointer-events-auto">
      <GlowEffect
        mode="rotate"
        duration={6}
        scale={1}
        blur="soft"
        className="rounded-xl h-12 w-full opacity-80"
      />
      <GlowEffect
        mode="rotate"
        blur="medium"
        colors={["#ff40a0ff", "#e57220ff", "#ffd640ff", "#ff5040ff"]}
        scale={1}
        className={`rounded-xl h-12 w-full transition-opacity duration-500 ${
          isLoading
            ? "opacity-100 animate-pulse-scale"
            : "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
        }`}
      />

      <Textarea
        value={prompt}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPrompt(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask me a question..."
        className="absolute h-12 w-full rounded-xl border-0 pr-14 pl-7"
      />

      <Button
        variant="outline"
        size="icon-sm"
        className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full"
        disabled={prompt.trim() === "" || isLoading}
        onClick={submitHandler}
      >
        <ArrowUp />
        <span className="sr-only">Send</span>
      </Button>
    </div>
  );
};
