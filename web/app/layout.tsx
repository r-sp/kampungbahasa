import { type Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { ThemeProvider, ThemeScript } from "~/components/client";
import "~/styles/tailwind.css";

const fontInter = Inter_Tight({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-inter",
  weight: "variable",
});

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
    children: React.ReactNode;
  }>,
) {
  return (
    <html lang="en" className={fontInter.variable} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>
        <ThemeProvider>
          <div id="root" role="none">
            {props.children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
