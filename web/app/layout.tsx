import { type Metadata } from "next";
import { InterTight } from "~/assets/fonts";
import { ThemeProvider, ThemeScript } from "~/components/ui";
import "~/styles/tailwind.css";

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
    <html lang="en" className={InterTight.variable} suppressHydrationWarning>
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
