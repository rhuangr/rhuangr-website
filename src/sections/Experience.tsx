import { ContentBlock } from "./ContentBlock";
import { CircleQuestionMark } from "lucide-react";
import type { ReactNode } from "react";

export function Experience() {
  return (
    <div className="flex">
      <div className="flex-1 flex flex-col space-y-4">
        {experiences.map((exp, index) => (
          <ContentBlock key={index} header={exp.header}>
            {exp.content}
          </ContentBlock>
        ))}
      </div>
    </div>
  ); 
}


type ExperienceType = {
  header: ReactNode;
  content: ReactNode;
};

const experiences: ExperienceType[] = [
  {
    header: (
      <div className="flex justify-between items-center">
        <div className="flex items-center">
        Shopify
        <img
          src="Assets/shoppy/svg/shopify_glyph_white.svg"
          alt="Shopify logo"
          className="w-5 h-5 ml-1"
        />
        </div>
        <div className="font-family-geist-mono text-subheading">01/2025 - 09/2025</div>
      </div>
    ),
    content:
      "Engineering Intern - Developed and maintained customer accounts and login systems at Shopify",
  },
  {
    header: (
      <div className="flex justify-between items-center">
        <div className="flex items-center">
        Shopify
        <img
          src="Assets/shoppy/svg/shopify_glyph_white.svg"
          alt="Shopify logo"
          className="w-5 h-5 ml-1"
        />
        </div>
        <div className="font-family-geist-mono text-subheading">01/2025 - 09/2025</div>
      </div>
    ),
    content:
      "Engineering Intern - Developed and maintained customer accounts and login systems at Shopify",
  },
];
