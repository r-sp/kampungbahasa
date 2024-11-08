"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Banner } from "../logo";

const ThemeSwitcher = dynamic(() => import("./theme-switcher"), { ssr: false });

export default function Footer() {
  return (
    <footer>
      <nav className="mx-auto flex h-14 max-w-screen-lg items-center justify-between px-4">
        <Link href="/" className="inline-block">
          <Banner className="block h-8 w-auto" />
        </Link>
        <ThemeSwitcher />
      </nav>
    </footer>
  );
}
