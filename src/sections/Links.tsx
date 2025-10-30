import { Mail, FolderOpen } from "lucide-react";
import { cn } from "@/lib/utils";

type LinkLayout = "vertical" | "horizontal";

const GITHUB = "https://github.com/rhuangr";
const LINKEDIN = "https://www.linkedin.com/in/rhuangr";
const EMAIL = "richardhuang197@gmail.com";
const RESUME = "/Assets/resume.pdf";

type ContactLinksProps = {
  layout?: LinkLayout;
  className?: string;
};

export function GithubLink() {
  return (
    <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="group">
      <img
        src="/Assets/github-mark/github-mark-white.svg"
        alt="GitHub"
        className="w-5 h-5 filter brightness-100 group-hover:brightness-75 transform transition-all duration-200 group-hover:scale-105"
      />
    </a>
  );
}

export function LinkedinLink() {
  return (
    <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="group">
      <img
        src="/Assets/in-logo/InBug-White.png"
        alt="LinkedIn"
        className="w-5.5 h-5 filter brightness-100 transform transition-all duration-200 group-hover:brightness-75 group-hover:scale-105"
      />
    </a>
  );
}

export function MailLink() {
  // Use mailto so users can open their default mail client; keep clipboard copy behavior for convenience.
  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(EMAIL);
    } catch (e) {
      // noop - clipboard may be unavailable in some contexts
    }
  };

  return (
    <a href={`mailto:${EMAIL}`} className="group transition-all duration-300" onClick={handleCopy}>
      <Mail className="w-6 h-6 text-foreground group-hover:text-muted-foreground transform transition-all duration-200 group-hover:scale-105" />
    </a>
  );
}

export function ResumeLink() {
  return (
    <a href={RESUME} target="_blank" rel="noopener noreferrer" className="group">
      <FolderOpen className="w-6 h-6 text-foreground group-hover:text-muted-foreground transform transition-all duration-200 group-hover:scale-105" />
    </a>
  );
}

export function ContactLinks({ layout = "vertical", className }: ContactLinksProps) {
  const isVertical = layout === "vertical";

  return (
    <div
      className={cn(
        isVertical
          ? "flex flex-col gap-3"
          : "flex flex-wrap items-center gap-4",
        className
      )}
    >
      <GithubLink />
      <LinkedinLink />
      <MailLink />
      <ResumeLink />
    </div>
  );
}
