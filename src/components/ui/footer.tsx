"use client";

import Link from "next/link";
import { Banner } from "../logo";
import ThemeSwitcher from "./theme-switcher";

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
