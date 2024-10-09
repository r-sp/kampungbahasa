/** @type {import('tailwindcss').Config} */

import { type Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "selector",
  theme: {
    colors: {
      kb: {
        "50": "var(--kb-50)",
        "100": "var(--kb-100)",
        "200": "var(--kb-200)",
        "300": "var(--kb-300)",
        "400": "var(--kb-400)",
        "500": "var(--kb-500)",
        "600": "var(--kb-600)",
        "700": "var(--kb-700)",
        "800": "var(--kb-800)",
        "900": "var(--kb-900)",
        "950": "var(--kb-950)",
      },
      neutral: {
        "50": "var(--neutral-50)",
        "100": "var(--neutral-100)",
        "200": "var(--neutral-200)",
        "300": "var(--neutral-300)",
        "400": "var(--neutral-400)",
        "500": "var(--neutral-500)",
        "600": "var(--neutral-600)",
        "700": "var(--neutral-700)",
        "800": "var(--neutral-800)",
        "900": "var(--neutral-900)",
        "950": "var(--neutral-950)",
      },
    },
    screens: {
      xs: { raw: "(min-width: 32em)" },
      sm: { raw: "(min-width: 40em)" },
      md: { raw: "(min-width: 48em)" },
      lg: { raw: "(min-width: 64em)" },
      xl: { raw: "(min-width: 80em)" },
      "2xl": { raw: "(min-width: 96em)" },
      "max-xs": { raw: "not all and (min-width: 32em)" },
      "max-sm": { raw: "not all and (min-width: 40em)" },
      "max-md": { raw: "not all and (min-width: 48em)" },
      "max-lg": { raw: "not all and (min-width: 64em)" },
      "max-xl": { raw: "not all and (min-width: 80em)" },
      "max-2xl": { raw: "not all and (min-width: 96em)" },
    },
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      gridTemplateColumns: {
        split: "auto 1fr",
      },
      maxWidth: {
        "screen-xs": "32em",
        "screen-sm": "40em",
        "screen-md": "48em",
        "screen-lg": "64em",
        "screen-xl": "80em",
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "var(--neutral-800)",
            "--tw-prose-headings": "var(--neutral-950)",
            "--tw-prose-lead": "var(--neutral-900)",
            "--tw-prose-links": "var(--kb-50)",
            "--tw-prose-bold": "var(--neutral-950)",
            "--tw-prose-counters": "var(--neutral-700)",
            "--tw-prose-bullets": "var(--neutral-700)",
            "--tw-prose-hr": "var(--neutral-300)",
            "--tw-prose-quotes": "var(--neutral-950)",
            "--tw-prose-quote-borders": "var(--kb-50)",
            "--tw-prose-captions": "var(--neutral-600)",
            "--tw-prose-kbd": "var(--neutral-600)",
            "--tw-prose-kbd-shadows": "17 55 55",
            "--tw-prose-code": "var(--neutral-800)",
            "--tw-prose-pre-code": "var(--neutral-200)",
            "--tw-prose-pre-bg": "var(--neutral-900)",
            "--tw-prose-th-borders": "var(--neutral-600)",
            "--tw-prose-td-borders": "var(--neutral-300)",
          },
        },
      },
    },
  },
  plugins: [typography],
  corePlugins: {
    preflight: true,
    backdropOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    placeholderOpacity: false,
    ringOpacity: false,
    textOpacity: false,
    boxShadow: false,
    boxShadowColor: false,
    dropShadow: false,
  },
} satisfies Config;
