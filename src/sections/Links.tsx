import {
  Copy,
  Check,
  Download,
  Mail,
  ArrowUpRight,
  FolderOpen,
} from "lucide-react";
import { useState } from "react";

export function GithubLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200"
    >
      <img
        src="/Assets/github-mark/github-mark-white.svg"
        alt="GitHub"
        className="w-[13px] h-[13px] filter brightness-60 group-hover:brightness-100"
      />
      <div className="inline-flex items-center ">
        <span className="px-1">Github</span>
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-[10%] group-hover:-translate-y-[20%] group-hover:scale-120" />
      </div>
    </a>
  );
}

export function LinkedinLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200"
    >
      <img
        src="/Assets/in-logo/InBug-White.png"
        alt="LinkedIn"
        className="w-[13px] h-[13px] filter transform-opacity duration-200 brightness-60 group-hover:brightness-100"
      />
      <div className="inline-flex items-center ">
        <span className="px-1">Linkedin</span>
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-[10%] group-hover:-translate-y-[20%] group-hover:scale-120" />
      </div>
    </a>
  );
}

export function MailLink({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="group transition-all duration-300 relative  inline-flex items-center  text-muted-foreground hover:text-foreground transition-colors duration-200"
    >
      <Mail className="w-[13px] h-[13px]" />
      <span className="px-1">Mail</span>

      <div className="relative">
        <Copy
          className={`absolute top-1/2 w-3.5 h-3.5 -translate-y-1/2 transition-all duration-200 ${
            copied ? "opacity-0 scale-75" : "opacity-100 scale-100"
          } group-hover:scale-110`}
        />
        <Check
          strokeWidth={2.0}
          className={`absolute top-1/2 w-3.5 h-3.5 -translate-y-1/2 left-0 text-green-500 transition-all duration-300 ${
            copied ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        />
      </div>
    </button>
  );
}

export function ResumeLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200"
    >
      <FolderOpen className="w-[13px] h-[13px]" />
      <span className="px-1">Resume</span>
      <Download className="w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-120" />
    </a>
  );
}
