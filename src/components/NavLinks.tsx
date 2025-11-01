import { NavLink} from "react-router-dom";
import { useEffect, useState } from "react";
import { useRhuangrContext } from "../sections/About/rhuangrContext";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { TextShimmer } from "./TextShimmer";

type linkType = { href: string; label: ReactNode };

const initialLinks: linkType[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/other", label: "Other facts" },
];
const loadingLink: linkType[] = [
  {
    href: "/loading",
    label: <TextShimmer duration={1}>Loading...</TextShimmer>,
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
      return [...prev, { href: `/${slug}`, label: parsedOutput.heading }];
    });
  }, [parsedOutput]);

  // derive displayed links without mutating the `links` state
  const renderedLinks: linkType[] = isLoading
    ? [...links, ...loadingLink]
    : links;

  return (
    <nav className="relative flex flex-col gap-4 w-fit h-auto pl-4">
      <div
        aria-hidden="true"
        className="absolute left-0 top-1/2 -translate-y-1/2 h-8/10 border-l-1 border-orange-50/50"
      />
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

function NavLinkItem({ link }: { link: { href: string; label: ReactNode } }) {
  console.log("Rendering NavLinkItem for:", link.href);
  return (
    <NavLink
      to={link.href}
      className={({ isActive }) =>
        [
          "text-subheading transform transition-colors transition-transform duration-200 inline-block origin-left",
          isActive
            ? "text-foreground font-bold translate-x-3 scale-110"
            : "text-muted-foreground font-normal",
          "hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        ].join(" ")
      }
    >
      {link.label}
    </NavLink>
  );
}
