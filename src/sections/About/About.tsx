import { RHUANGGPT } from "./RHUANGGPT";
import { ContentBlock } from "../ContentBlock";
import { GithubLink, LinkedinLink, MailLink, ResumeLink } from "../Links";
import { AboutProvider } from "./AboutContext";
import { MyAccordion } from "./MyAccordion";
import { GradientText } from "@/components/GradientText";

export function About() {
  return (
    <div>
      <h2 className="text-left">
        <GradientText className="text-2xl tracking-tight font-[500]">Richard Huang</GradientText>
        <div className="text-muted-foreground font-[300] text-subheading">
          Last updated :
          <span className="font-family-chivo-mono"> 2025-10-25</span>
        </div>
      </h2>
      {/* <h2 className="text-[16px]">Hello, I'm Richard 🇨🇳🇨🇦</h2> */}
      <ContentBlock
        sideHeader={sideHeader}
        className="text-foreground leading-[1.6rem]"
      >
        <AboutProvider>
          {/* <div className="relative min-h-38 max-h-38 overflow-auto">
            {skeletonContent(isLoading)}
            {initialContent(isLoading)}
          </div> */}
          {/* <div className="text-center font-[600] text-[1rem] pb-1">
            Chat with <GradientText>rhuang GPT</GradientText>
          </div> */}
          <RHUANGGPT duration={800} />
          <MyAccordion />
        </AboutProvider>
      </ContentBlock>
    </div>
  );
}

const sideHeader = (
  <div className="flex flex-col font-family-inter text-body">
    <GithubLink href="https://github.com/rhuangr" />
    <LinkedinLink href="https://www.linkedin.com/in/richard-huang-123456789/" />
    <MailLink email="richardhuang197@gmail.com" />
    <ResumeLink href="Assets/RichardHuang-Resume.pdf" />
  </div>
);
