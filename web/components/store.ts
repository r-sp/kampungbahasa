import { createStore } from "zustand/vanilla";

export type ThemeVariants = {
  themes: "dark" | "light" | "system" | null;
};

export type ThemeActions = {
  applyThemeDark: () => void;
  applyThemeLight: () => void;
  applyThemeSystem: () => void;
};

export type ThemeStore = ThemeVariants & ThemeActions;

export const defaultTheme: ThemeVariants = {
  themes: null,
};

export function createThemeStore(initStore: ThemeVariants = defaultTheme) {
  return createStore<ThemeStore>()((set) => ({
    ...initStore,
    applyThemeDark: () => set(() => ({ themes: "dark" })),
    applyThemeLight: () => set(() => ({ themes: "light" })),
    applyThemeSystem: () => set(() => ({ themes: "system" })),
  }));
}

const isClient = typeof window !== "undefined";

export function setLocalTheme(variant: "dark" | "light" | "system") {
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

export function initThemeStore() {
  const local = getLocalTheme();
  let theme: ThemeVariants;

  if (local === "dark") {
    theme = {
      themes: "dark",
    };
  } else if (local === "light") {
    theme = {
      themes: "light",
    };
  } else {
    theme = {
      themes: "system",
    };
  }

  return theme;
}
