import { type ReactNode } from "react";
import { type Metadata } from "next";
import { InterTight } from "~/assets/fonts";
import { ThemeScript } from "~/components/ui";
import { StoreProvider } from "./provider";
import "./style.css";

export const metadata: Metadata = {
  title: {
    template: "%s - Kampung Bahasa",
    default: "Kampung Bahasa",
  },
  description: "FKB's proposal to help with its digital transformation",
  metadataBase: new URL("https://kampungbahasa.vercel.app"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout(
  props: Readonly<{
    children: ReactNode;
  }>,
) {
  return (
    <html lang="en" className={InterTight.variable} suppressHydrationWarning={true}>
      <head>
        <ThemeScript />
      </head>
      <body>
        <StoreProvider>{props.children}</StoreProvider>
      </body>
    </html>
  );
}
