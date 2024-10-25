"use client";

import { type ReactNode } from "react";
import Link from "next/link";
import { Banner } from "~/assets/logo";
import ThemeSwitcher from "./theme-switcher";

export default function Footer(props: { children?: ReactNode }) {
  return (
    <footer className="p-4">
      <nav className="mx-auto flex h-14 max-w-screen-lg items-center justify-between">
        <Link href="/" className="inline-block">
          <Banner className="block h-8 w-auto" />
        </Link>
        <ThemeSwitcher />
      </nav>
      {props.children}
    </footer>
  );
}
