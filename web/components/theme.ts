export function theme() {
  const html = document.documentElement;
  const mode = ["dark", "light", "system"];
  function setTheme(theme: string) {
    html.classList.remove(...mode);
    html.classList.add(theme);
  }
  function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function switchTheme(theme: string | undefined) {
    if (theme === "dark") {
      setTheme("dark");
    } else if (theme === "light") {
      setTheme("light");
    } else {
      setTheme("system");
    }
    return theme;
  }
  try {
    const localTheme = localStorage.getItem("theme") || undefined;
    const systemTheme = getSystemTheme();
    switchTheme(localTheme);
    switchTheme(systemTheme);
  } catch (e) {
    console.error(e);
  }
}
