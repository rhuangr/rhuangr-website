import { RHUANGGPT } from "./RHUANGGPT";
import { ContentBlock } from "./ContentBlock";
import { GithubLink, LinkedinLink, MailLink, ResumeLink } from "./Links";
import { Skeleton } from "@/components/ui/skeleton";

export function About() {
  return (
    <div>
      <h2>About Me</h2>
      <AboutContent isLoading={true} />
    </div>
  );
}

interface AboutContentProps {
  isLoading?: boolean;
}
function AboutContent({ isLoading=false }: AboutContentProps) {

  const content = isLoading
    ? ["w-full", "w-4/5", "w-3/4", "w-2/5", "w-full"].map((width, i) => (
        <Skeleton key={i} className={`${width} h-4 my-2`} />
      ))
    : (
      <div>
        <p>Hi, I'm Richard, a software engineer based in Montreal, Canada.</p>
      <ul className="list-(--my-marker) list-inside py-2">
        <li>
          I'm a second year at McGill University{" "}
          <span className="ml-1.5">🎓 </span>
        </li>
        <li>
          I'm <span className="italic">addicted</span> to video games{" "}
          <span className="ml-1.5">🎮 </span>
        </li>
        <li>
          And I like singing and playing the piano{" "}
          <span className="ml-1.5">🎹 </span>
        </li>
      </ul>
      <p>
        Want to know more about me? Chat with rhuang GPT
        {/* <GradientText className="font-[600]">rhuang GPT</GradientText> */}
      </p>
      <div className="">
       </div> 
      </div>
    );

  return (
    <ContentBlock
      sideHeader={
        <div className="flex flex-col font-family-inter font-size-body">
          <GithubLink href="https://github.com/rhuangr" />
          <LinkedinLink href="https://www.linkedin.com/in/richard-huang-123456789/" />
          <MailLink email="richardhuang197@gmail.com" />
          <ResumeLink href="Assets/RichardHuang-Resume.pdf" />
        </div>
      }
      className="text-foreground leading-[1.6rem]"
    >
      {content}

        <RHUANGGPT duration={800} />
    </ContentBlock>
  );
}
