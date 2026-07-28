"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useReducedMotion } from "framer-motion";

type Theme = "light" | "dark";
interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === "undefined") return "light";
    return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  });
  const reducedMotion = useReducedMotion();

  const applyTheme = useCallback(
    (nextTheme: Theme) => {
      const root = document.documentElement;
      const meta = document.querySelector<HTMLMetaElement>(
        'meta[name="theme-color"]',
      );
      const commitTheme = () => {
        root.dataset.theme = nextTheme;
        localStorage.setItem("vinit-portfolio-theme", nextTheme);
        if (meta) meta.content = nextTheme === "dark" ? "#07090c" : "#eef1f4";
        setTheme(nextTheme);
      };
      if (reducedMotion) {
        commitTheme();
        return;
      }
      root.classList.add("theme-is-changing");
      commitTheme();
      window.setTimeout(() => root.classList.remove("theme-is-changing"), 780);
    },
    [reducedMotion],
  );

  const toggleTheme = useCallback(
    () => applyTheme(theme === "light" ? "dark" : "light"),
    [applyTheme, theme],
  );
  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);
  return (
    <ThemeContext.Provider value={value}>
      <div className="theme-sweep" aria-hidden="true" />
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
