import { Leader } from "./components/Leader";
import { GlowEffect, GlowEffectWrapper } from "./components/GlowEffect";
import { Brain } from "lucide-react";
import { useState } from "react";

export function About() {
  return (
    <div>
      <div className="flex items-center w-full mb-10">
        <h2 className="text-2xl">About</h2>
        <Leader />
      </div>
      <div className="text-foreground leading-relaxed space-y-5 text-[13px]">
        <p>
          Hello, I'm Richard Huang, a software engineer based in Montreal,
          Canada.
        </p>
        <ul className="mt-4 list-(--my-marker) list-inside custom-list space-y-0.5">
          <li>I'm a second year at McGill University 📚</li>
          <li>I'm addicted to video games 🎮</li>
          <li>And I like singing and playing the piano 🎹</li>
        </ul>
        <p>
          Want to know more about me? Talk to{" "}
          <span className="font-bold">RHUANG GPT</span>
        </p>
        <div className="flex justify-center mt-9">
          <BigBrainButton />
        </div>
      </div>
    </div>
  );
}

const BigBrainButton = ({onClick}: {onClick?: () => void}) => {

  return (
    <div className="relative group">
      <GlowEffect
        mode="rotate"
        scale={0.72}
        className="opacity-100 group-hover:opacity-0 transition-opacity duration-500"
      />

      {/* Hover glow */}
      <GlowEffect
        mode="rotate"
        scale={1}
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      <button
        type="button"
        onClick={onClick}
        className="relative text-2xl h-14 w-14 flex justify-center items-center bg-card text-foreground rounded-xl transition cursor-pointer group"
      >
        <Brain
          size={30}
          strokeWidth={1.5}
          className="text-foreground transform transition-transform duration-300 ease-in-out group-hover:scale-102"
        />
      </button>
    </div>
  );
};
