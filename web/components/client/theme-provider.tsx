"use client";

import { useState, useMemo } from "react";
import { ThemeContext } from "~/components/context";

export default function ThemeProvider(props: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"dark" | "light" | "system">("system");
  const switchTheme = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return <ThemeContext.Provider value={switchTheme}>{props.children}</ThemeContext.Provider>;
}
