import { useEffect, useState } from "react";

export function useHeaderMotion(props: { offset: number }): boolean {
  const [motion, setMotion] = useState(false);
  let globalScroll: number;
  if (typeof window !== "undefined") {
    globalScroll = window.scrollY;
  }
  const handleMotion = () => {
    const currentScroll = window.scrollY;
    const isActive = globalScroll > currentScroll;
    if (currentScroll < props.offset) {
      setMotion(false);
    } else {
      setMotion(isActive);
    }
    globalScroll = currentScroll;
  };
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const headerMotion = () => {
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
