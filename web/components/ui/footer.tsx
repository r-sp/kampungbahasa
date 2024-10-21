"use client";

import Link from "next/link";
import { Banner } from "~/assets/logo";
import { ThemeSwitcher } from "~/components/ui";

export default function Footer(props: { children?: React.ReactNode }) {
  return (
    <footer>
      <nav className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4 ps-4">
        <Link href="/playground" className="inline-block">
          <Banner className="block h-8 w-auto" />
        </Link>
        <ThemeSwitcher />
      </nav>
      {props.children}
    </footer>
  );
}
