"use client";

import { useContext, useState } from "react";
import { ThemeContext } from "~/components/context";
import { useThemeProvider } from "~/components/theme";
import * as Asset from "~/assets/icons";
import clsx from "clsx";

export default function IconOutline() {
  const context = useContext(ThemeContext);
  const { theme, useTheme } = useThemeProvider(context);
  const [copyIcon, setCopyIcon] = useState<boolean>(true);
  const [optionsIcon, setOptionsIcon] = useState<boolean>(true);
  const [menuIcon, setMenuIcon] = useState<boolean>(true);
  const [verifiedIcon, setVerifiedIcon] = useState<boolean>(true);
  const [arrowIcon, setArrowIcon] = useState<boolean>(true);
  const [chevronIcon, setChevronIcon] = useState<boolean>(true);

  const buttonStyles = "inline-flex items-center justify-center";
  const buttonActive = "text-slate-900";
  const buttonDisable = "text-slate-600";
  const iconStyles = "inline-flex h-8 w-8";

  const gradientVerifiedStyle = verifiedIcon
    ? { from: "#4ec0ed", to: "#1f9be5" }
    : { from: "#4ce08a", to: "#00c18f" };

  return (
    <section className="grid gap-4" aria-labelledby="outline-only">
      <h2 className="text-xl font-bold text-slate-800" id="outline-only">
        Icon: Outline
      </h2>
      <div className="flex max-w-full flex-wrap gap-8">
        <button
          title="contrast"
          onClick={() => useTheme("system")}
          className={clsx(buttonStyles, theme === "system" ? buttonActive : buttonDisable)}
        >
          <Asset.IconThemeContrast className={iconStyles} />
        </button>
        <button
          title="light mode"
          onClick={() => useTheme("light")}
          className={clsx(buttonStyles, theme === "light" ? buttonActive : buttonDisable)}
        >
          <Asset.IconThemeLight className={iconStyles} />
        </button>
        <button
          title="dark mode"
          onClick={() => useTheme("dark")}
          className={clsx(buttonStyles, theme === "dark" ? buttonActive : buttonDisable)}
        >
          <Asset.IconThemeDark className={iconStyles} />
        </button>
        <button
          title="copy"
          onClick={() => setCopyIcon(!copyIcon)}
          className={clsx(buttonStyles, copyIcon ? buttonDisable : buttonActive)}
        >
          <Asset.IconCopy className={iconStyles} />
        </button>
        <button
          title="options"
          onClick={() => setOptionsIcon(!optionsIcon)}
          className={clsx(buttonStyles, optionsIcon ? buttonDisable : buttonActive)}
        >
          <Asset.IconOptions className={iconStyles} />
        </button>
        <button
          title="menu"
          onClick={() => setMenuIcon(!menuIcon)}
          className={clsx(buttonStyles, menuIcon ? buttonDisable : buttonActive)}
        >
          <Asset.IconMenu className={iconStyles} />
        </button>
        <button
          title={clsx(verifiedIcon ? "verified provider" : "verified teacher")}
          onClick={() => setVerifiedIcon(!verifiedIcon)}
          className={buttonStyles}
        >
          <Asset.IconVerified className={iconStyles} linearGradient={gradientVerifiedStyle} />
        </button>
        <button
          title="arrow"
          onClick={() => setArrowIcon(!arrowIcon)}
          className={clsx(buttonStyles, arrowIcon ? buttonDisable : buttonActive)}
        >
          <Asset.IconArrow className={iconStyles} />
        </button>
        <button
          title="chevron"
          onClick={() => setChevronIcon(!chevronIcon)}
          className={clsx(buttonStyles, chevronIcon ? buttonDisable : buttonActive)}
        >
          <Asset.IconChevron className={iconStyles} />
        </button>
      </div>
    </section>
  );
}
