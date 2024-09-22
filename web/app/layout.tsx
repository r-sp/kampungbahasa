import React from "react";
import { Inter, Roboto } from "next/font/google";
import type { Metadata } from "next";
import { clsx } from "clsx";
import Main from "~/components/main";
import "./styles.css";

const inter = Inter({
  style: "normal",
  subsets: ["latin"],
  variable: "--font-inter",
});

const roboto = Roboto({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: {
    template: "%s - Kampung Bahasa",
    default: "Kampung Bahasa",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ID">
      <body>
        <Main fonts={clsx(inter.variable, roboto.variable)}>{children}</Main>
      </body>
    </html>
  );
}