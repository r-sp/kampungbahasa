"use client";

import { useStoreProvider } from "~/app/provider";
import { IconThemeContrast, IconThemeDark, IconThemeLight } from "~/assets/icons";

export default function ThemeSwitcher() {
  const { setThemeDark, setThemeLight, setThemeSystem, theme } = useStoreProvider(
    (state) => state,
  );

  return (
    <fieldset className="flex gap-1">
      <legend className="sr-only">Select a display theme:</legend>
      <span className="inline-flex">
        <input
          aria-label="system"
          aria-checked={theme === "system" ? true : false}
          id="theme-system"
          name="theme"
          type="radio"
          value="system"
          onChange={() => setThemeSystem()}
          className="sr-only"
        />
        <label
          htmlFor="theme-system"
          className={theme === "system" ? "text-slate-900" : "text-slate-600"}
        >
          <span className="sr-only">OS Default</span>
          <IconThemeContrast aria-hidden="true" className="block size-6" />
        </label>
      </span>
      <span className="inline-flex">
        <input
          aria-label="light"
          aria-checked={theme === "light" ? true : false}
          id="theme-light"
          name="theme"
          type="radio"
          value="light"
          onChange={() => setThemeLight()}
          className="sr-only"
        />
        <label
          htmlFor="theme-light"
          className={theme === "light" ? "text-slate-900" : "text-slate-600"}
        >
          <span className="sr-only">Light</span>
          <IconThemeLight aria-hidden="true" className="block size-6" />
        </label>
      </span>
      <span className="inline-flex">
        <input
          aria-label="dark"
          aria-checked={theme === "dark" ? true : false}
          id="theme-dark"
          name="theme"
          type="radio"
          value="dark"
          onChange={() => setThemeDark()}
          className="sr-only"
        />
        <label
          htmlFor="theme-dark"
          className={theme === "dark" ? "text-slate-900" : "text-slate-600"}
        >
          <span className="sr-only">Dark</span>
          <IconThemeDark aria-hidden="true" className="block size-6" />
        </label>
      </span>
    </fieldset>
  );
}
