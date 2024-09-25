"use client";

import React, { useState, useEffect, useDeferredValue } from "react";
import { clsx } from "clsx";
import { RailNav, BottomNav } from "./navigation";
import Header from "./header";

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
      <>{currentLayout === "desktop" && <RailNav />}</>
      <div className="min-h-screen md:grid md:align-baseline md:grid-cols-split" role="none">
        <div className="invisible pointer-events-none w-16" role="none"></div>
        <div className={clsx("content-auto font-body", fonts, "antialiased")} role="none">
          <div className="max-w-screen-xl mx-auto" role="none">
            <Header />
            <main id="content">{children}</main>
            <footer></footer>
          </div>
          <div className="invisible pointer-events-none h-16 md:hidden" role="none"></div>
        </div>
      </div>
      <>{currentLayout === "mobile" && <BottomNav />}</>
    </div>
  );
}
