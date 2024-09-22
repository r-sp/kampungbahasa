"use client";

import React, {
  useState,
  useCallback,
  useEffect,
  createContext,
  useDeferredValue,
} from "react";
import { RailNav, BottomNav } from "./navigation";
import { clsx } from "clsx";

export default function Main({
  fonts,
  children,
  ...rest
}: { fonts: string; children: React.ReactNode } & React.ComponentPropsWithoutRef<"main">) {
  const [layout, setLayout] = useState("");
  const handleResize = useCallback(() => {
    if (window.innerWidth <= 768) {
      setLayout("mobile");
    } else {
      setLayout("desktop");
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { Provider } = createContext("");
  const currentLayout = useDeferredValue(layout);
  return (
    <main className={clsx(fonts, "min-h-screen", "md:pl-16")} {...rest}>
      <Provider value="dekstop">{currentLayout === "desktop" && <RailNav />}</Provider>
      <Provider value={currentLayout}>{children}</Provider>
      <Provider value="mobile">{currentLayout === "mobile" && <BottomNav />}</Provider>
    </main>
  );
}