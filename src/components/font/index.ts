import localFont from "next/font/local";

export const InterTight = localFont({
  src: [
    {
      path: "./intertight-latin-normal.woff2",
      style: "normal",
    },
    {
      path: "./intertight-latin-italic.woff2",
      style: "italic",
    },
  ],
  display: "swap",
  weight: "100 900",
  variable: "--font-inter",
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    },
    {
      prop: "font-optical-sizing",
      value: "auto",
    },
  ],
  fallback: [
    "ui-sans-serif",
    "system-ui",
    "sans-serif",
    "'Apple Color Emoji'",
    "'Segoe UI Emoji'",
    "'Segoe UI Symbol'",
    "'Noto Color Emoji'",
  ],
  preload: true,
});
