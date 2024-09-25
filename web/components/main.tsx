"use client";

import React, { useState, useEffect, useDeferredValue } from "react";
import { RailNav, BottomNav } from "./navigation";
import { clsx } from "clsx";

export default function Main({
  fonts,
  children,
}: {
  fonts: string;
  children: React.ReactNode;
}) {
  const [layout, setLayout] = useState("");
  const handleResize = () => {
    if (window.innerWidth <= 767) {
      if (layout !== "mobile") setLayout("mobile");
    } else {
      if (layout !== "desktop") setLayout("desktop");
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentLayout = useDeferredValue(layout);
  return (
    <div id="root" role="none">
      <header></header>
      <>{currentLayout === "desktop" && <RailNav />}</>
      <main id="content">
        <div className="min-h-screen md:grid md:align-baseline md:grid-cols-split" role="none">
          <div className="invisible pointer-events-none w-16" role="none"></div>
          <div className={clsx("content-auto font-body", fonts, "antialiased")} role="none">
            {children}
          </div>
        </div>
      </main>
      <>{currentLayout === "mobile" && <BottomNav />}</>
      <footer></footer>
    </div>
  );
}
