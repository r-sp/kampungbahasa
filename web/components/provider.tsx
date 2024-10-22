"use client";

import { type ReactNode, createContext, useContext, useRef } from "react";
import { type ThemeStore, createThemeStore, initThemeStore } from "./store";
import { useStore } from "zustand";

export type ThemeStoreApi = ReturnType<typeof createThemeStore>;

export const ThemeStoreContext = createContext<ThemeStoreApi | undefined>(undefined);

export interface ThemeStoreProviderProps {
  children: ReactNode;
}

export function ThemeStoreProvider({ children }: ThemeStoreProviderProps) {
  const storeRef = useRef<ThemeStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createThemeStore(initThemeStore());
  }

  return (
    <ThemeStoreContext.Provider value={storeRef.current}>{children}</ThemeStoreContext.Provider>
  );
}

export function useThemeStore<T>(selector: (store: ThemeStore) => T) {
  const themeStoreContext = useContext(ThemeStoreContext);

  if (!themeStoreContext) {
    throw new Error("useThemeStore must be used within ThemeStoreProvider");
  }

  return useStore(themeStoreContext, selector);
}
