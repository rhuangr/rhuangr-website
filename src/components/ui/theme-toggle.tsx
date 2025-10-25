import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/ui/theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="hover:bg-[var(--muted)] dark:hover:text-[var(--primary)] rounded-full p-2"
    >
      {theme === "dark" ? <Sun size={30} /> : <Moon size={30} />}
    </button>
  );
}
