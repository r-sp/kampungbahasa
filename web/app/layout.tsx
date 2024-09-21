import { clsx } from "clsx";
import { Inter, Roboto } from "next/font/google";
import type { Metadata } from "next";
import { BottomNav } from "~/components/navigation";
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
      <body className={clsx("bg-cn-200", inter.variable, roboto.variable, "font-sans")}>
        <main>{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
