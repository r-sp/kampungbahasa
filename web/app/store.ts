import { createStore } from "zustand";

export type StoreOptions = {
  theme?: "dark" | "light" | "system" | undefined;
  auth?: {
    role: "user" | "provider" | undefined;
  };
};

export type StoreActions = {
  setThemeDark: () => void;
  setThemeLight: () => void;
  setThemeSystem: () => void;
  setRoleUser: () => void;
  setRoleProvider: () => void;
};

export type StoreSettings = StoreOptions & StoreActions;

export const defaultSettings: StoreOptions = {
  theme: undefined,
  auth: {
    role: undefined,
  },
};

export function createStoreProvider(initStore: StoreOptions = defaultSettings) {
  return createStore<StoreSettings>()((set) => ({
    ...initStore,
    setThemeDark: () =>
      set(() => {
        cleanTheme("light");
        applyTheme("dark");
        storeTheme("dark");
        return { theme: "dark" };
      }),
    setThemeLight: () =>
      set(() => {
        cleanTheme("dark");
        applyTheme("light");
        storeTheme("light");
        return { theme: "light" };
      }),
    setThemeSystem: () =>
      set(() => {
        localTheme(window.matchMedia("(prefers-color-scheme: dark)"));
        storeTheme("system");
        return { theme: "system" };
      }),
    setRoleUser: () => set(() => ({ auth: { role: "user" } })),
    setRoleProvider: () => set(() => ({ auth: { role: "provider" } })),
  }));
}

export function initStoreProvider() {
  const localTheme = getLocalStorage("theme");
  const localRole = getLocalStorage("role");
  let currentTheme: StoreOptions;
  let currentRole: StoreOptions;

  if (localTheme === "dark") {
    currentTheme = {
      theme: "dark",
    };
  } else if (localTheme === "light") {
    currentTheme = {
      theme: "light",
    };
  } else {
    currentTheme = {
      theme: "system",
    };
  }

  if (localRole === "provider") {
    currentRole = {
      auth: {
        role: "provider",
      },
    };
  } else if (localRole === "user") {
    currentRole = {
      auth: {
        role: "user",
      },
    };
  } else {
    currentRole = {
      auth: {
        role: undefined,
      },
    };
  }

  return {
    ...currentTheme,
    ...currentRole,
  };
}

export function setLocalStorage(key: string, value: string) {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      console.error(e);
    }
  }
}

export function getLocalStorage(key: string) {
  let local;
  if (typeof window !== "undefined") {
    try {
      local = localStorage.getItem(key);
    } catch (e) {
      console.error(e);
    }
  }
  return local;
}

type ThemeVariant = "dark" | "light" | "system";

function cleanTheme(variant: ThemeVariant) {
  if (document.documentElement.classList.contains(variant))
    document.documentElement.classList.remove(variant);
}

function applyTheme(variant: ThemeVariant) {
  document.documentElement.classList.add(variant);
}

function storeTheme(variant: ThemeVariant) {
  setLocalStorage("theme", variant);
}

function localTheme(event: MediaQueryList | MediaQueryListEvent) {
  if (event.matches) {
    cleanTheme("light");
    applyTheme("dark");
  } else {
    cleanTheme("dark");
    applyTheme("light");
  }
}

export function setLocalTheme(event: MediaQueryListEvent) {
  if (getLocalStorage("theme") === "system") localTheme(event);
  return event;
}
