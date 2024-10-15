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

export function useThemeSwitch(props: {
  theme: "dark" | "light" | "system";
  setTheme: React.Dispatch<React.SetStateAction<"dark" | "light" | "system">>;
}) {
  const theme = props.theme;

  function cleanTheme(prev: typeof props.theme) {
    if (document.documentElement.classList.contains(prev))
      document.documentElement.classList.remove(prev);
  }

  function applyTheme(next: typeof props.theme) {
    document.documentElement.classList.add(next);
  }

  function storeTheme(store: typeof props.theme) {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("theme", store);
      } catch (e) {
        console.error(e);
      }
    }
  }

  function useThemeSystem(event: MediaQueryList | MediaQueryListEvent) {
    if (event.matches) {
      cleanTheme("light");
      applyTheme("dark");
    } else {
      cleanTheme("dark");
      applyTheme("light");
    }
  }

  function setThemeSystem() {
    if (typeof window !== "undefined") {
      const media = window.matchMedia("(prefers-color-scheme: dark)");
      useThemeSystem(media);
    }
    storeTheme("system");
    props.setTheme("system");
  }

  function setThemeDark() {
    cleanTheme("light");
    applyTheme("dark");
    storeTheme("dark");
    props.setTheme("dark");
  }

  function setThemeLight() {
    cleanTheme("dark");
    applyTheme("light");
    storeTheme("light");
    props.setTheme("light");
  }

  function useTheme(variant: typeof props.theme) {
    if (variant === "dark") {
      setThemeDark();
    } else if (variant === "light") {
      setThemeLight();
    } else {
      setThemeSystem();
    }
  }

  function getLocalTheme() {
    let local;
    if (typeof window !== "undefined") {
      try {
        local = localStorage.getItem("theme");
      } catch (e) {
        console.error(e);
      }
    }
    return local;
  }

  function setLocalTheme(event: MediaQueryListEvent) {
    const local = getLocalTheme();
    if (local === "system") {
      useThemeSystem(event);
    }
    return event;
  }

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    media.addEventListener("change", setLocalTheme);
    return () => {
      media.removeEventListener("change", setLocalTheme);
    };
  });

  return { theme, useTheme };
}
