/** @type {import('tailwindcss').Config} */

import { type Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        kb: {
          "100": "#4EC0ED",
          "200": "#1F9BE5",
          "300": "#4CE08A",
          "400": "#00C18F",
          "600": "#ED4E71",
          "700": "#F44C3C",
          "800": "#EDBC4E",
          "900": "#F79318",
        },
        cn: {
          "100": "#FFFFFF",
          "200": "#F2F3F4",
          "300": "#E4E6E8",
          "400": "#C8CCD0",
          "600": "#5E666E",
          "700": "#383D42",
          "900": "#131416",
          "800": "#25292C",
        },
        ca: {
          "200": "#0074E0",
          "400": "#008040",
          "600": "#CC350F",
        },
      },
      fontFamily: {
        display: ["var(--font-flex)"],
        body: ["var(--font-roboto)"],
      },
      gridTemplateColumns: {
        split: "auto 1fr",
      },
      screens: {
        smr: { raw: "(max-height: 640px)" },
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontWeight: 700,
              fontFamily: "var(--font-flex)",
            },
            h2: {
              fontWeight: 700,
              fontFamily: "var(--font-flex)",
            },
            p: {
              fontWeight: 400,
            },
            strong: {
              fontWeight: 500,
            },
          },
        },
      },
    },
  },
  plugins: [typography],
  corePlugins: {
    preflight: true,
    textOpacity: false,
    backgroundOpacity: false,
  },
} satisfies Config;
