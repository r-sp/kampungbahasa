"use client";

import { useEffect, useState, useMemo } from "react";
import { ThemeContext } from "~/components/context";
import { getLocalTheme, setLocalTheme } from "~/components/theme";

export default function ThemeProvider(props: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string | undefined>(undefined);

  useEffect(() => {
    const localTheme = getLocalTheme();
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    if (theme !== "dark" && localTheme === "dark") setTheme("dark");
    if (theme !== "light" && localTheme === "light") setTheme("light");
    if (theme !== "system" && localTheme === "system") setTheme("system");

    media.addEventListener("change", setLocalTheme);
    return () => media.removeEventListener("change", setLocalTheme);
  }, [theme, setTheme]);

  const switchTheme = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return <ThemeContext.Provider value={switchTheme}>{props.children}</ThemeContext.Provider>;
}
