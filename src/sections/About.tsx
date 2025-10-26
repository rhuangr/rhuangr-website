import { GlowEffect } from "../components/GlowEffect";
import { Textarea } from "@/components/ui/textarea";
import { Brain } from "lucide-react";
import { GradientText } from "../components/GradientText";
import { useState } from "react";

export function About() {
  return (
    <div className="flex-1">
      <div className="text-foreground leading-relaxed mt-21">
        <p>
          Hello, I'm Richard Huang, a software engineer based in Montreal,
          Canada.
        </p>
        <ul className="mt-4 list-(--my-marker) list-inside custom-list pb-5">
          <li>
            I'm a second year at McGill University <span className="text-base">🎓</span>
          </li>
          <li>
            I'm <span className="italic">addicted</span> to video games{" "}
            <span className="text-base ml-1.5">🎮</span>
          </li>
          <li>
            And I like singing and playing the piano <span className="text-base">🎹</span>
          </li>
        </ul>
        <p>
          Want to know more about me? Chat with{" "}
          <GradientText className="font-[600]">rhuang GPT</GradientText>
        </p>
        <div className="">
          <RHUANGGPT duration={700} />
        </div>
      </div>
    </div>
  );
}

interface RHUANGGPTProps {
  duration?: number;
}

const RHUANGGPT = ({ duration = 700 }: RHUANGGPTProps) => {
  const [on, setOn] = useState(false);

  return (
    <div className="relative h-24 mt-12">
      <div
        className={`absolute top-1/2 transform -translate-y-1/2 left-0 w-65/100 transition-all ease-in-out duration-${duration} ${
          on ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[50%]"
        }`}
      >
        <Textarea
          placeholder="Ask me a question"
          className="py-3 px-4 min-h-25 max-h-25"
        />
      </div>
      <div
        className={`absolute top-1/2 ${
          on ? "left-74/100" : "left-1/2"
        } transform -translate-x-1/2 -translate-y-1/2 ease-in-out transition-all duration-${duration}`}
      >
        <BigBrainButton onClick={() => setOn(!on)} />
      </div>
    </div>
  );
};

const BigBrainButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div className="relative group h-12 w-12">
      <GlowEffect
        mode="static"
        scale={1}
        className="opacity-100 group-hover:opacity-0 transition-opacity duration-500 rounded-full"
      />

      {/* Hover glow */}
      <GlowEffect
        mode="rotate"
        blur="soft"
        colors={["#ff40a0ff", "#e57220ff", "#ffd640ff", "#ff5040ff"]}
        scale={1.4}
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"
      />

      <button
        type="button"
        onClick={onClick}
        className="relative h-12 w-12 flex justify-center items-center bg-card/90 text-foreground rounded-lg transition cursor-pointer group"
      >
        <Brain
          size={24}
          strokeWidth={1.4}
          className="text-foreground transform transition-transform duration-400 ease-out group-hover:scale-103"
        />
      </button>
    </div>
  );
};

import { useId } from "react";

const TextareaWithOverlappingLabel = () => {
  const id = useId();

  return (
    <div className="relative max-w-xs space-y-2">
      <div className=" text-foreground absolute top-0 left-2 z-10 block -translate-y-1/2 px-1 text-[14px] font-lg group-has-disabled:opacity-50">
        Talk to me 🤖
      </div>
      <Textarea id={id} className="bg-card min-h-25 max-h-25 pt-4" />
    </div>
  );
};
