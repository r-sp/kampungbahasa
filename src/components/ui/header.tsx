"use client";

import Link from "next/link";
import { Logo } from "../logo";

export default function Header() {
  return (
    <header>
      <nav className="mx-auto flex h-12 w-full max-w-screen-lg items-center px-4">
        <Link className="block size-8" href="/">
          <Logo className="size-8" />
          <span className="sr-only">Kampung Bahasa</span>
        </Link>
      </nav>
    </header>
  );
}
