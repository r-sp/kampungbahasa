"use client";

import { type ReactNode } from "react";
import Link from "next/link";
import { Banner } from "~/assets/logo";

export default function Footer(props: { children?: ReactNode; layout: string }) {
  return (
    <footer className="p-4">
      <nav className="mx-auto flex h-14 max-w-screen-lg items-center justify-between">
        <Link href="/" className="inline-block">
          <Banner className="block h-8 w-auto" />
        </Link>
        <p className="text-sm text-slate-500">{props.layout}</p>
      </nav>
      {props.children}
    </footer>
  );
}
