import { Mail, FolderOpen } from "lucide-react";
import { cn } from "@/lib/utils";

type LinkLayout = "vertical" | "horizontal";

type ContactLinksProps = {
  github: string;
  linkedin: string;
  resume: string;
  email: string;
  layout?: LinkLayout;
  className?: string;
};

export function GithubLink({ href }: { href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group">
      <img
        src="/Assets/github-mark/github-mark-white.svg"
        alt="GitHub"
        className="w-[13px] h-[13px] filter brightness-60 group-hover:brightness-100 transition-all duration-200"
      />
    </a>
  );
}

export function LinkedinLink({ href }: { href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group">
      <img
        src="/Assets/in-logo/InBug-White.png"
        alt="LinkedIn"
        className="w-[13px] h-[13px] filter transform-opacity duration-200 brightness-60 group-hover:brightness-100"
      />
    </a>
  );
}

export function MailLink({ email }: { email: string }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(email);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="group transition-all duration-300"
    >
      <Mail className="w-[13px] h-[13px] text-muted-foreground hover:text-foreground" />
    </button>
  );
}

export function ResumeLink({ href }: { href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group">
      <FolderOpen className="w-[13px] h-[13px] text-muted-foreground hover:text-foreground transition-colors duration-200" />
    </a>
  );
}

export function ContactLinks({
  github,
  linkedin,
  resume,
  email,
  layout = "vertical",
  className,
}: ContactLinksProps) {
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
      <GithubLink href={github} />
      <LinkedinLink href={linkedin} />
      <MailLink email={email} />
      <ResumeLink href={resume} />
    </div>
  );
}
