import { useEffect, useRef, useState } from "react";
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "./components/ui/theme-provider";
import { RhuangrContextProvider } from "./sections/About/rhuangrContext";
import { About } from "./sections/About/About";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { RHUANGGPT } from "./sections/About/RHUANGGPT";
import Balatro from "./components/Balatro";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RhuangrContextProvider>
        <BrowserRouter>
          <AppLayout />
        </BrowserRouter>
      </RhuangrContextProvider>
    </ThemeProvider>
  );
}

function AppLayout() {
  return (
    <div className="relative flex flex-col min-h-screen text-foreground selection:bg-orange-600">
      <div className="fixed h-screen w-full">
        <Balatro mouseInteraction={false}  />
      </div>
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 -translate-y-10 z-1">
        <RHUANGGPT />
        <div className="text-center text-xs pt-2"> © 2025 Made by Richard Huang</div>
      </div>
      <div className="min-h-screen relative w-full ">
        <div className="fixed left-0 w-full top-1/2 -translate-y-20 z-10 px-20 text-left ">
          <NavLinks />
        </div>

        <div className="relative bg-background rounded-b-3xl shadow-xl z-5">
          <div className="w-full text-foreground mb-40 relative ">
            <div className="min-h-[95vh] mx-auto max-w-lg flex items-center px-7 md:px-0">
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="*" element={<About />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function NavLinks() {
  const links = [
    { href: "/", label: "home" },
    { href: "/projects", label: "projects" },
    { href: "/experience", label: "experience" },
  ];
  return (
    <nav className="flex flex-col gap-4 w-fit">
      {links.map((link) => (
        <NavLink
          key={link.href}
          to={link.href}
          className={({ isActive }) =>
            [
              "text-sm",
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
      ))}
    </nav>
  );
}

export function Footer() {
  return (
    <>
      <Balatro mouseInteraction={false} />
    </>
  );
}

export default App;
