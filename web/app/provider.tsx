"use client";

import { type ReactNode, createContext, useContext, useEffect, useRef } from "react";
import {
  type StoreSettings,
  createStoreProvider,
  initStoreProvider,
  setLocalTheme,
} from "./store";
import { useStore } from "zustand";

export type StoreApi = ReturnType<typeof createStoreProvider>;

export const StoreContext = createContext<StoreApi | undefined>(undefined);

export interface StoreProviderProps {
  children: ReactNode;
}

export function StoreProvider({ children }: StoreProviderProps) {
  const storeRef = useRef<StoreApi>();
  if (!storeRef.current) {
    storeRef.current = createStoreProvider(initStoreProvider());
  }

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addEventListener("change", setLocalTheme);
    return () => media.removeEventListener("change", setLocalTheme);
  }, []);

  return <StoreContext.Provider value={storeRef.current}>{children}</StoreContext.Provider>;
}

export function useStoreProvider<T>(selector: (store: StoreSettings) => T) {
  const storeContext = useContext(StoreContext);

  if (!storeContext) {
    throw new Error("useStoreProvider must be used within StoreProvider");
  }

  return useStore(storeContext, selector);
}
