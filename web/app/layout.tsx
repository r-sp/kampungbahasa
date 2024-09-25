import React from "react";
import { Roboto_Flex, Roboto } from "next/font/google";
import type { Metadata } from "next";
import { clsx } from "clsx";
import Main from "~/components/main";
import "./styles.css";

const fontDisplay = Roboto_Flex({
  axes: ["opsz"],
  subsets: ["latin"],
  variable: "--font-flex",
});

const fontBody = Roboto({
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
        <Main fonts={clsx(fontDisplay.variable, fontBody.variable)}>{children}</Main>
      </body>
    </html>
  );
}
