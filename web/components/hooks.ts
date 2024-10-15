import { useState, useEffect } from "react";

export function useStickyHeader() {
  const [sticky, setSticky] = useState<"top" | "visible" | "hidden">("top");
  let pageScroll = typeof window !== "undefined" ? window.scrollY : 0;
  let useScroll = false;

  const stickyHeader = () => {
    const currentScroll = window.scrollY;
    if (!useScroll) {
      window.requestAnimationFrame(() => {
        if (currentScroll < 48) {
          setSticky("top");
        } else if (pageScroll > currentScroll) {
          setSticky("visible");
        } else if (pageScroll < currentScroll) {
          setSticky("hidden");
        } else {
          setSticky("hidden");
        }
        pageScroll = currentScroll;
        useScroll = false;
      });
      useScroll = true;
    }
  };

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const preferMotion = () => {
      setSticky("top");
      window.removeEventListener("scroll", stickyHeader, {});

      if (!reduceMotion.matches) {
        window.addEventListener("scroll", stickyHeader, { passive: true });
        return () => {
          window.removeEventListener("scroll", stickyHeader, {});
        };
      }
    };

    if (typeof window !== "undefined") {
      preferMotion();
      reduceMotion.addEventListener("change", preferMotion);
    }
  }, []);

  return sticky;
}
