import { ArrowUpRight, Copy } from "lucide-react";
import { GradientText } from "../components/GradientText";

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
        <Icon className="inline-block w-4 h-4 text-muted-foreground" />
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={commonClasses}>
      {children}
      <Icon className="inline-block w-3 h-3 ml-1 text-muted-foreground" />
    </button>
  );
}

export function Header() {
  return (
    <header>
      <div className="flex items-center justify-between w-full">
        <h1>
          <GradientText
            className="text-[30px] font-[650]"
            animationSpeed={0}
          >
            rhuangr
          </GradientText>
        </h1>
        <div className="flex text-[13px] space-x-2 text-foreground">
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
      <div className="text-[11px] text-muted-foreground">
        last updated: 2025-10-25
      </div>
    </header>
  );
}
