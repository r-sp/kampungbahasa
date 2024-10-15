"use client";

import { useEffect, useState, useMemo } from "react";
import { ThemeContext } from "~/components/context";

export default function ThemeProvider(props: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string | undefined>(undefined);

  useEffect(() => {
    let local;
    if (typeof window !== "undefined") {
      try {
        local = localStorage.getItem("theme");
      } catch (e) {
        console.error(e);
      }
    }

    if (local === "dark") {
      if (theme !== "dark") setTheme("dark");
    } else if (local === "light") {
      if (theme !== "light") setTheme("light");
    } else {
      if (theme !== "system") setTheme("system");
    }
  }, [theme, setTheme]);

  const switchTheme = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return <ThemeContext.Provider value={switchTheme}>{props.children}</ThemeContext.Provider>;
}
