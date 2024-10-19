/** @type {import('tailwindcss').Config} */

import { type Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import typographyStyles from "./styles/typography";

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
      state: {
        "100": "var(--state-100)",
        "200": "var(--state-200)",
        "300": "var(--state-300)",
        "400": "var(--state-400)",
        "500": "var(--state-500)",
        "600": "var(--state-600)",
        "700": "var(--state-700)",
        "800": "var(--state-800)",
        "900": "var(--state-900)",
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
      typography: typographyStyles,
    },
  },
  plugins: [typography({ className: "prose", target: "legacy" })],
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
