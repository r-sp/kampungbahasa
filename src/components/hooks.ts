import { useState, useEffect, useCallback } from "react";

export function useStickyHeader() {
  const [sticky, setSticky] = useState<"top" | "visible" | "hidden">("top");
  let pageScroll = typeof window !== "undefined" ? window.scrollY : 0;
  let useScroll = false;

  const updateHeader = () => {
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
        pageScroll = currentScroll;
        useScroll = false;
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
      useScroll = true;
    }
  };

  const stickyHeader = useCallback(updateHeader, [pageScroll, useScroll]);

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
  }, [stickyHeader]);

  return sticky;
}
