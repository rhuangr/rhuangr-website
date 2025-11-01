import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRhuangrContext } from "../sections/About/rhuangrContext";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { TextShimmer } from "./TextShimmer";
import { Home, Lightbulb, Star, Bot } from "lucide-react";

type linkType = { href: string; label: ReactNode; icon?: ReactNode };

const commonIconProps = { size: 13, strokeWidth: 2 };
const initialLinks: linkType[] = [
  { href: "/", label: "Home", icon: <Home {...commonIconProps} /> },
  {
    href: "/projects",
    label: "Projects",
    icon: <Lightbulb {...commonIconProps} />,
  },
  { href: "/other", label: "Other facts", icon: <Star {...commonIconProps} /> },
];
const loadingLink: linkType[] = [
  {
    href: "/loading",
    label: <TextShimmer duration={1}>Loading...</TextShimmer>,
    icon: <Bot {...commonIconProps} />,
  },
];

export function NavLinks() {
  const { isLoading, parsedOutput } = useRhuangrContext();
  const [links, setLinks] = useState(initialLinks);

  useEffect(() => {
    if (!parsedOutput) {
      return;
    }
    const slug = parsedOutput.heading.replace(/ /g, "_");
    setLinks((prev) => {
      return [
        ...prev,
        {
          href: `/${slug}`,
          label:
            parsedOutput.heading.length > 9
              ? `${parsedOutput.heading.slice(0, 9)}...`
              : parsedOutput.heading,
          icon: <Bot {...commonIconProps} />,
        },
      ];
    });
  }, [parsedOutput]);

  // derive displayed links without mutating the `links` state
  const renderedLinks: linkType[] = isLoading
    ? [...links, ...loadingLink]
    : links;

  return (
    <nav className="relative flex flex-col gap-4 w-fit h-auto pl-4">
      {renderedLinks.map((link, i) => {
        const isNewNavLink = i > initialLinks.length - 1;
        return isNewNavLink ? (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <NavLinkItem link={link} />
          </motion.div>
        ) : (
          <NavLinkItem key={i} link={link} />
        );
      })}
    </nav>
  );
}

function NavLinkItem({ link }: { link: linkType }) {
  console.log("Rendering NavLinkItem for:", link.href);
  return (
    <NavLink
      to={link.href}
      className={({ isActive }) =>
        [
          "px-1.5 text-subheading transform transition-colors transition-transform duration-200 inline-block origin-left",
          isActive
            ? "text-foreground font-bold translate-x-3 scale-110 -rotate-2"
            : "text-muted-foreground font-normal",
          "hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        ].join(" ")
      }
    >
      {({ isActive }) => (
        <span className="flex items-center gap-2">
          {isActive && link.icon}
          {link.label}
        </span>
      )}
    </NavLink>
  );
}
