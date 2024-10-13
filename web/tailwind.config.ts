/** @type {import('tailwindcss').Config} */

import { type Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "selector",
  theme: {
    colors: {
      slate: {
        "50": "var(--slate-50)",
        "100": "var(--slate-100)",
        "200": "var(--slate-200)",
        "300": "var(--slate-300)",
        "400": "var(--slate-400)",
        "500": "var(--slate-500)",
        "600": "var(--slate-600)",
        "700": "var(--slate-700)",
        "800": "var(--slate-800)",
        "900": "var(--slate-900)",
        "950": "var(--slate-950)",
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
            "--tw-prose-body": "var(--slate-700)",
            "--tw-prose-headings": "var(--slate-950)",
            "--tw-prose-lead": "var(--slate-800)",
            "--tw-prose-links": "#0074e0",
            "--tw-prose-bold": "var(--slate-900)",

            "--tw-prose-counters": "var(--slate-500)",
            "--tw-prose-bullets": "var(--slate-500)",
            "--tw-prose-hr": "var(--slate-400)",

            "--tw-prose-quotes": "var(--slate-800)",
            "--tw-prose-quote-borders": "var(--slate-500)",
            "--tw-prose-captions": "var(--slate-600)",

            "--tw-prose-kbd": "var(--slate-800)",
            "--tw-prose-kbd-shadows": "17 55 55",

            "--tw-prose-code": "var(--slate-800)",
            "--tw-prose-pre-code": "var(--slate-800)",
            "--tw-prose-pre-bg": "var(--slate-200)",

            "--tw-prose-th-borders": "var(--slate-500)",
            "--tw-prose-td-borders": "var(--slate-400)",
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
    invert: false,
    backdropInvert: false,
  },
} satisfies Config;
