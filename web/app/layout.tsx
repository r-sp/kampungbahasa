import { type Metadata } from "next";
import { Inter } from "next/font/google";
import "~/styles/tailwind.css";

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
    <html lang="en" className={fontInter.variable}>
      <body>
        <div id="root">{props.children}</div>
      </body>
    </html>
  );
}
