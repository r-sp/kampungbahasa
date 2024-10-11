import { type Metadata } from "next";
import { Inter } from "next/font/google";
import "~/styles/tailwind.css";

// test theme
import { ThemeProvider } from "~/components/client/Theme";
import { theme } from "~/components/theme";
import Script from "next/script";

const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: "variable",
});

export const metadata: Metadata = {
  title: {
    template: "%s - Kampung Bahasa",
    default: "Kampung Bahasa",
  },
  description: "FKB's proposal to help with its digital transformation",
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
      <body>
        <ThemeProvider>
          <div id="root">{props.children}</div>
          <Script
            id="theme"
            strategy="beforeInteractive"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: `(${theme.toString()})()`,
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
