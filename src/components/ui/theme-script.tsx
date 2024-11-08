"use client";

export default function ThemeScript() {
  return (
    <script
      suppressHydrationWarning={true}
      dangerouslySetInnerHTML={{
        __html: `(${theme.toString()})()`,
      }}
    />
  );
}

function theme() {
  const html = document.documentElement;

  function cleanTheme(theme: string) {
    if (html.classList.contains(theme)) html.classList.remove(theme);
  }

  function setTheme(theme: string) {
    html.classList.add(theme);
  }

  function darkMode() {
    cleanTheme("light");
    setTheme("dark");
  }

  function lightMode() {
    cleanTheme("dark");
    setTheme("light");
  }

  function switchTheme(theme: string | undefined) {
    if (theme === "dark") {
      darkMode();
    } else if (theme === "light") {
      lightMode();
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        darkMode();
      } else {
        lightMode();
      }
    }
    return theme;
  }

  try {
    const localTheme = localStorage.getItem("theme") || undefined;
    switchTheme(localTheme);
  } catch (e) {
    console.error(e);
  }
}
