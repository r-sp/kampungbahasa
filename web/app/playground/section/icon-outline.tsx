"use client";

import * as Asset from "~/assets/icons";
import { useState } from "react";
import clsx from "clsx";

export default function SectionIconOutline() {
  const [contrastIcon, setContrastIcon] = useState<boolean>(true);
  const [lightIcon, setLightIcon] = useState<boolean>(true);
  const [darkIcon, setDarkIcon] = useState<boolean>(true);
  const [copyIcon, setCopyIcon] = useState<boolean>(true);
  const [optionsIcon, setOptionsIcon] = useState<boolean>(true);
  const [menuIcon, setMenuIcon] = useState<boolean>(true);
  const [verifiedIcon, setVerifiedIcon] = useState<boolean>(true);
  const [arrowIcon, setArrowIcon] = useState<boolean>(true);
  const [chevronIcon, setChevronIcon] = useState<boolean>(true);

  const buttonStyles = "inline-flex items-center justify-center";
  const buttonActive = "text-neutral-800";
  const buttonDisable = "text-neutral-600";
  const iconStyles = "inline-flex h-8 w-8";

  const iconVerifiedStyle = "text-neutral-50";
  const gradientVerifiedStyle = verifiedIcon
    ? { from: "#4ec0ed", to: "#1f9be5" }
    : { from: "#4ce08a", to: "#00c18f" };

  return (
    <section aria-labelledby="outline-only">
      <h2 id="outline-only">Icon: Outline</h2>
      <div className="flex max-w-full flex-wrap gap-8">
        <button
          title="contrast"
          onClick={() => setContrastIcon(!contrastIcon)}
          className={clsx(buttonStyles, contrastIcon ? buttonDisable : buttonActive)}
        >
          <Asset.IconThemeContrast className={iconStyles} />
        </button>
        <button
          title="light mode"
          onClick={() => setLightIcon(!lightIcon)}
          className={clsx(buttonStyles, lightIcon ? buttonDisable : buttonActive)}
        >
          <Asset.IconThemeLight className={iconStyles} />
        </button>
        <button
          title="dark mode"
          onClick={() => setDarkIcon(!darkIcon)}
          className={clsx(buttonStyles, darkIcon ? buttonDisable : buttonActive)}
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
          className={clsx(buttonStyles, iconVerifiedStyle)}
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
