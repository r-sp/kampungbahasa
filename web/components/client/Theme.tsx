"use client";

import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context";

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider(props: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"dark" | "light" | "system">("system");
  const context = useContext(ThemeContext);

  useEffect(() => {
    const localTheme = getLocalTheme();
    if (localTheme === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else if (localTheme === "light") {
      setTheme("light");
      document.documentElement.classList.add("light");
    } else {
      setTheme("system");
      document.documentElement.classList.add("system");
      setSystemTheme();
    }
  }, [theme]);

  if (context) return props.children;
  return <ThemeContext.Provider value={theme}>{props.children}</ThemeContext.Provider>;
}

function getLocalTheme() {
  if (typeof window === "undefined") return undefined;
  let theme;
  try {
    theme = localStorage.getItem("theme") || undefined;
  } catch (e) {
    console.error(e);
  }
  return theme;
}

function setSystemTheme() {
  if (typeof window !== "undefined") {
    try {
      if (localStorage.getItem("theme") === null) {
        localStorage.setItem("theme", "system");
      } else {
        localStorage.setItem("theme", "system");
      }
    } catch (e) {
      console.error(e);
    }
  }
}
