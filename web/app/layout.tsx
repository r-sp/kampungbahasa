import { clsx } from "clsx";
import { Inter, Roboto } from "next/font/google";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-ID"
      className={clsx("bg-cn-200", inter.variable, roboto.variable, "font-sans")}
    >
      <body>{children}</body>
    </html>
  );
}
