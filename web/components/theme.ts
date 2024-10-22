import React from "react";

import { useThemeStore } from "./provider";

export type ThemeVariant = "dark" | "light" | "system";

const isClient = typeof window !== "undefined";

export function cleanTheme(variant: ThemeVariant) {
  if (document.documentElement.classList.contains(variant))
    document.documentElement.classList.remove(variant);
}

export function applyTheme(variant: ThemeVariant) {
  document.documentElement.classList.add(variant);
}

export function storeTheme(variant: ThemeVariant) {
  if (isClient) {
    try {
      localStorage.setItem("theme", variant);
    } catch (e) {
      console.error(e);
    }
  }
}

export function getLocalTheme() {
  let local;
  if (isClient) {
    try {
      local = localStorage.getItem("theme");
    } catch (e) {
      console.error(e);
    }
  }
  return local;
}

export function applyLocalTheme(event: MediaQueryList | MediaQueryListEvent) {
  if (event.matches) {
    cleanTheme("light");
    applyTheme("dark");
  } else {
    cleanTheme("dark");
    applyTheme("light");
  }
}

export function setLocalTheme(event: MediaQueryListEvent) {
  if (getLocalTheme() === "system") applyLocalTheme(event);
  return event;
}

export function useThemeProvider(props: {
  theme: string | undefined;
  setTheme: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
  const theme = props.theme;

  const { applyThemeDark, applyThemeLight, applyThemeSystem } = useThemeStore((state) => state);

  function setThemeSystem() {
    if (isClient) applyLocalTheme(window.matchMedia("(prefers-color-scheme: dark)"));
    storeTheme("system");
    props.setTheme("system");
    applyThemeSystem();
  }

  function setThemeDark() {
    cleanTheme("light");
    applyTheme("dark");
    storeTheme("dark");
    props.setTheme("dark");
    applyThemeDark();
  }

  function setThemeLight() {
    cleanTheme("dark");
    applyTheme("light");
    storeTheme("light");
    props.setTheme("light");
    applyThemeLight();
  }

  function switchTheme(variant: ThemeVariant) {
    if (variant === "dark") return setThemeDark();
    else if (variant === "light") return setThemeLight();
    else return setThemeSystem();
  }

  return { theme, switchTheme };
}
