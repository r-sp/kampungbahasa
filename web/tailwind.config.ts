/** @type {import('tailwindcss').Config} */

import { type Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        kb: {
          "100": "var(--kb-100)",
          "200": "var(--kb-200)",
          "300": "var(--kb-300)",
          "400": "var(--kb-400)",
          "600": "var(--kb-600)",
          "700": "var(--kb-700)",
          "800": "var(--kb-800)",
          "900": "var(--kb-900)",
        },
        pare: {
          "100": "var(--pare-100)",
          "200": "var(--pare-200)",
          "300": "var(--pare-300)",
          "400": "var(--pare-400)",
          "600": "var(--pare-600)",
          "700": "var(--pare-700)",
          "800": "var(--pare-800)",
          "900": "var(--pare-900)",
        },
        kediri: {
          "200": "var(--kediri-200)",
          "400": "var(--kediri-400)",
          "600": "var(--kediri-600)",
        },
      },
      boxShadow: {
        "1dp": "var(--shadow-1dp)",
        "2dp": "var(--shadow-2dp)",
        "4dp": "var(--shadow-4dp)",
        "6dp": "var(--shadow-6dp)",
        "8dp": "var(--shadow-8dp)",
      },
      fontFamily: {
        flex: ["var(--font-flex)"],
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
      screens: {
        xs: { raw: "(min-width: 32em)" },
        sm: { raw: "(min-width: 40em)" },
        md: { raw: "(min-width: 48em)" },
        lg: { raw: "(min-width: 64em)" },
        xl: { raw: "(min-width: 80em)" },
        "2xl": { raw: "(min-width: 96em)" },
        "xs-r": { raw: "(max-width: 32em)" },
        "sm-r": { raw: "(max-width: 40em)" },
        "md-r": { raw: "(max-width: 48em)" },
        "lg-r": { raw: "(max-width: 64em)" },
        "xl-r": { raw: "(max-width: 80em)" },
        "2xl-r": { raw: "(max-width: 96em)" },
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "var(--pare-700)",
            "--tw-prose-headings": "var(--pare-900)",
            "--tw-prose-lead": "var(--pare-800)",
            "--tw-prose-links": "var(--kediri-200)",
            "--tw-prose-bold": "var(--pare-800)",
            "--tw-prose-counters": "var(--pare-700)",
            "--tw-prose-bullets": "var(--pare-700)",
            "--tw-prose-hr": "var(--pare-400)",
            "--tw-prose-quotes": "var(--pare-800)",
            "--tw-prose-quote-borders": "var(--pare-600)",
            "--tw-prose-captions": "var(--pare-600)",
            "--tw-prose-kbd": "var(--pare-800)",
            "--tw-prose-kbd-shadows": "17 24 39",
            "--tw-prose-code": "var(--pare-800)",
            "--tw-prose-pre-code": "var(--pare-300)",
            "--tw-prose-pre-bg": "var(--pare-900)",
            "--tw-prose-th-borders": "var(--pare-600)",
            "--tw-prose-td-borders": "var(--pare-400)",
            h1: {
              fontWeight: 700,
            },
            h2: {
              fontWeight: 700,
            },
            p: {
              fontWeight: 400,
            },
            strong: {
              fontWeight: 600,
            },
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
