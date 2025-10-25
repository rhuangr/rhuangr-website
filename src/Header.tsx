import { ArrowUpRight, Copy } from "lucide-react";
import { TextShimmer } from "./components/TextShimmer";

interface ContactLinkProps {
  href?: string;
  onClick?: () => void;
  icon: React.ComponentType<any>;
  children: React.ReactNode;
}

function ContactLink({
  href,
  onClick,
  icon: Icon,
  children,
}: ContactLinkProps) {
  const commonClasses =
    "relative items-center inline-flex transition-all duration-300 ease-in-out hover:after:content-[''] hover:after:absolute hover:after:bottom-[-1px] hover:after:left-0 hover:after:right-0 hover:after:h-[1px] hover:after:bg-muted-foreground";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={commonClasses}
      >
        {children}
        <Icon className="inline-block w-4 h-4 ml-1" />
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={commonClasses}>
      {children}
      <Icon className="inline-block w-4 h-4 ml-1" />
    </button>
  );
}

export function Header() {
  return (
    <header>
      <div className="flex items-center justify-between w-full">
        <h1 className="text-4xl font-[650]">
          <TextShimmer
            spread={4}
            className="dark:[--base-gradient-color:var(--amber-shimmer)]"
          >
            rhuangr
          </TextShimmer>
        </h1>
        <div className="flex space-x-2 text-muted-foreground">
          <ContactLink href="https://github.com/rhuangr" icon={ArrowUpRight}>
            Github
          </ContactLink>
          <ContactLink
            href="https://www.linkedin.com/in/richard-huang-123456789/"
            icon={ArrowUpRight}
          >
            Linkedin
          </ContactLink>
          <ContactLink
            onClick={() =>
              navigator.clipboard.writeText("richardhuang197@gmail.com")
            }
            icon={Copy}
          >
            Mail
          </ContactLink>
        </div>
      </div>
    </header>
  );
}
