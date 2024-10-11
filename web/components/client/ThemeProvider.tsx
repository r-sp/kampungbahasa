"use client";

import { useContext } from "react";
import { ThemeContext } from "../context";

export default function ThemeProvider(props: { children: React.ReactNode }) {
  const context = useContext(ThemeContext);
  if (context) return props.children;

  return <ThemeContext.Provider value={context}>{props.children}</ThemeContext.Provider>;
}
