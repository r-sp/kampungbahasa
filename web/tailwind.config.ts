import { type Config } from "tailwindcss";

const round = (num: number) => {
  return num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
};
const rem = (px: number) => `${round(px / 16)}rem`;
const em = (px: number) => `${round(px / 16)}em`;

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./mdx-components.tsx",
  ],
  darkMode: "selector",
  theme: {
    colors: {
      inherit: "inherit",
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
      xs: { raw: `(min-width: ${em(512)})` },
      sm: { raw: `(min-width: ${em(640)})` },
      md: { raw: `(min-width: ${em(768)})` },
      lg: { raw: `(min-width: ${em(1024)})` },
      xl: { raw: `(min-width: ${em(1280)})` },
      "2xl": { raw: `(min-width: ${em(1536)})` },
      "max-xs": { raw: `not all and (min-width: ${em(512)})` },
      "max-sm": { raw: `not all and (min-width: ${em(640)})` },
      "max-md": { raw: `not all and (min-width: ${em(768)})` },
      "max-lg": { raw: `not all and (min-width: ${em(1024)})` },
      "max-xl": { raw: `not all and (min-width: ${em(1280)})` },
      "max-2xl": { raw: `not all and (min-width: ${em(1536)})` },
    },
    fontSize: {
      xs: [
        rem(12),
        {
          lineHeight: rem(16),
          letterSpacing: em(0.768),
        },
      ],
      sm: [
        rem(14),
        {
          lineHeight: rem(20),
          letterSpacing: em(0.768),
        },
      ],
      base: [
        rem(16),
        {
          lineHeight: rem(24),
          letterSpacing: em(0.768),
        },
      ],
      lg: [
        rem(18),
        {
          lineHeight: rem(28),
          letterSpacing: em(0.768),
        },
      ],
      xl: [
        rem(20),
        {
          lineHeight: rem(28),
          letterSpacing: em(0.2),
        },
      ],
      "2xl": [
        rem(24),
        {
          lineHeight: rem(32),
          letterSpacing: em(0.2),
        },
      ],
      "3xl": [
        rem(32),
        {
          lineHeight: rem(36),
          letterSpacing: em(0.2),
        },
      ],
      "4xl": [
        rem(36),
        {
          lineHeight: rem(40),
          letterSpacing: em(0),
        },
      ],
      "5xl": [
        rem(48),
        {
          lineHeight: "1",
          letterSpacing: em(0),
        },
      ],
      "6xl": [
        rem(60),
        {
          lineHeight: "1",
          letterSpacing: em(0),
        },
      ],
    },
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      gridTemplateColumns: {
        split: "auto 1fr",
      },
      maxWidth: {
        "screen-xs": em(512),
        "screen-sm": em(640),
        "screen-md": em(768),
        "screen-lg": em(1024),
        "screen-xl": em(1280),
      },
    },
  },
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
