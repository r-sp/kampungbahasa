import { useEffect, useState } from "react";

export function useHeaderMotion(): string {
  const [motion, setMotion] = useState("top");
  let globalScroll: number;
  if (typeof window !== "undefined") {
    globalScroll = window.scrollY;
  }
  const handleMotion = () => {
    const currentScroll = window.scrollY;
    if (currentScroll < 32) {
      setMotion("top");
    } else if (globalScroll > currentScroll) {
      setMotion("visible");
    } else if (globalScroll < currentScroll) {
      setMotion("hidden");
    } else {
      setMotion("hidden");
    }
    globalScroll = currentScroll;
  };
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const headerMotion = () => {
      setMotion("top");
      window.removeEventListener("scroll", handleMotion, {});
      if (!reduceMotion.matches) {
        window.addEventListener("scroll", handleMotion, { passive: true });
        return () => {
          window.removeEventListener("scroll", handleMotion);
        };
      }
    };
    headerMotion();
    reduceMotion.addEventListener("change", headerMotion);
  }, []);
  return motion;
}
