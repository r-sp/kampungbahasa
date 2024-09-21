import { clsx } from "clsx";
import { Inter, Roboto } from "next/font/google";
import MobileNav from "~/components/MobileNavigation";
import Logo from "./logo";

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
      <body>
        <header>
          <Logo className="flex items-center justify-center h-10 w-10 rounded-xl bg-cn-100" />
        </header>
        <main>{children}</main>
        <MobileNav />
      </body>
    </html>
  );
}
