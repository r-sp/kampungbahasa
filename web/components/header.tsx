"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header>
      <nav className="flex items-center px-4 h-16">
        <Link href="/" className="grid grid-cols-split gap-x-2 items-center h-8 md:hidden">
          <Logo />
          <span className="text-2xl text-cn-800 font-display font-semibold tracking-tight">
            Kampung Bahasa
          </span>
        </Link>
      </nav>
    </header>
  );
}
