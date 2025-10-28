import { useState } from "react";
import { GlowEffect } from "../../components/GlowEffect";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Brain, ArrowUp } from "lucide-react";
import { useAboutContext } from "./AboutContext";

interface RHUANGGPTProps {
  duration?: number;
}

export const RHUANGGPT = ({ duration = 370 }: RHUANGGPTProps) => {
  const [on, setOn] = useState(false);
  const { submitPrompt } = useAboutContext();

  return (
    <div className="relative h-24">
      <div
        className={`absolute top-1/2 transform -translate-y-1/2 left-0 w-80/100 transition-all ease-in-out ${
          on
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-[61%] pointer-events-none"
        }`}
        style={{ transitionDuration: `${duration}ms` }}
      >
        <AITextArea onSubmit={submitPrompt} />
      </div>
      <div
        className={`absolute top-1/2 ${
          on ? "left-92/100" : "left-1/2"
        } transform -translate-x-1/2 -translate-y-1/2 ease-in-out transition-all`}
        style={{ transitionDuration: `${duration}ms` }}
      >
        <BigBrainButton onClick={() => setOn(!on)} />
      </div>
    </div>
  );
};

interface AITextAreaProps {
  onSubmit?: (prompt: string) => void;
}

const AITextArea = ({ onSubmit }: AITextAreaProps) => {
  const [prompt, setPrompt] = useState("");
  const { isLoading } = useAboutContext();

  const submitHandler = () => {
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
    <div className="relative ">
      <Textarea
        value={prompt}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          setPrompt(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        placeholder="Ask me a question..."
        className="h-20 pr-14 border-0"
      />
      <Button
        variant="outline"
        size="icon-sm"
        className="absolute bottom-0 right-0 rounded-full -translate-x-1/3 -translate-y-1/2"
        disabled={prompt.trim() === "" || isLoading}
        onClick={submitHandler}
      >
        <ArrowUp />
        <span className="sr-only">Send</span>
      </Button>
    </div>
  );
};

interface BigBrainButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

const BigBrainButton = ({ onClick, disabled = false }: BigBrainButtonProps) => {
  const { isLoading: thinking } = useAboutContext();

  return (
    <div className="relative group h-12 w-12">
      <GlowEffect
        mode="rotate"
        duration={6}
        scale={1}
        className={`opacity-100
        } transition-opacity duration-500 rounded-full`}
      />

      {/* Hover glow */}
      <GlowEffect
        mode="rotate"
        blur="soft"
        colors={["#ff40a0ff", "#e57220ff", "#ffd640ff", "#ff5040ff"]}
        scale={1.4}
        className={`opacity-0 ${
          thinking ? "opacity-100 animate-pulse-scale" : ""
        } group-hover:opacity-100 transition-opacity duration-500 rounded-full`}
      />

      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className="relative h-12 w-12 flex justify-center items-center bg-card/90 text-foreground rounded-lg transition cursor-pointer group"
      >
        <Brain
          size={23}
          strokeWidth={1.3}
          className="text-foreground transform transition-[transform, color] duration-600 ease-in-out group-hover:scale-115"
        />
      </button>
    </div>
  );
};
