"use client";

import { useContext } from "react";
import { ThemeContext } from "~/components/context";
import { useThemeSwitch } from "~/components/hooks";
import { IconThemeContrast, IconThemeDark, IconThemeLight } from "~/assets/icons";

export default function ThemeSwitcher() {
  const context = useContext(ThemeContext);
  const { theme, useTheme } = useThemeSwitch(context);

  return (
    <div className="flex h-8 items-center gap-x-2" data-theme={theme}>
      <button className="text-neutral-950" onClick={() => useTheme("system")}>
        <IconThemeContrast className="block size-6" />
      </button>
      <button className="text-neutral-950" onClick={() => useTheme("dark")}>
        <IconThemeDark className="block size-6" />
      </button>
      <button className="text-neutral-950" onClick={() => useTheme("light")}>
        <IconThemeLight className="block size-6" />
      </button>
    </div>
  );
}
