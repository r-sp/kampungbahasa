"use client";

import { Logo } from "~/assets/logo";
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4">
      <nav className="mx-auto w-full max-w-screen-lg" role="none">
        <Link className="block size-8" href="/">
          <Logo className="size-8" />
          <span className="sr-only">Kampung Bahasa</span>
        </Link>
      </nav>
    </header>
  );
}
