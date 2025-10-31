import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { useRhuangrContext } from "../sections/About/rhuangrContext";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { TextShimmer } from "./TextShimmer";


 type linkType = { href: string; label: ReactNode };
  
const initialLinks: linkType[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
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
  const renderedLinks: linkType[] = isLoading ? [...links, ...loadingLink] : links;

  return (
    <nav className="flex flex-col gap-4 w-fit h-auto">
      {renderedLinks.map((link, i) => {
        const isNewNavLink = i >= 3;
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

function NavLinkItem({
  link,
}: {
  link: { href: string; label: ReactNode };
}) {
  return (
    <NavLink
      to={link.href}
      className={({ isActive }) =>
        [
          "text-body",
          "transition-colors duration-200",
          isActive
            ? "text-foreground font-bold"
            : "text-muted-foreground font-normal",
          "hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        ].join(" ")
      }
    >
      {link.label}
    </NavLink>
  );
}
