"use client";

import { type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

export default function Header(props: { children?: ReactNode }) {
  const currentPath = usePathname();

  return (
    <header className="flex flex-col items-start gap-4 p-4 tracking-wide">
      <nav className="mx-auto flex w-full max-w-screen-lg gap-4 max-sm:flex-col">
        <Link
          className={clsx(currentPath === "/" ? "text-slate-900" : "text-slate-600")}
          href="/"
        >
          Home
        </Link>
        <Link
          className={clsx(currentPath === "/search" ? "text-slate-900" : "text-slate-600")}
          href="/search"
        >
          Search
        </Link>
        <Link
          className={clsx(currentPath === "/course" ? "text-slate-900" : "text-slate-600")}
          href="/course"
        >
          Course
        </Link>
        <Link
          className={clsx(currentPath === "/activity" ? "text-slate-900" : "text-slate-600")}
          href="/activity"
        >
          Activity
        </Link>
        <Link
          className={clsx(currentPath === "/account" ? "text-slate-900" : "text-slate-600")}
          href="/account"
        >
          Profile
        </Link>
      </nav>
      <nav className="mx-auto flex w-full max-w-screen-lg gap-4 max-sm:flex-col">
        <Link
          className={clsx(currentPath === "/dashboard" ? "text-slate-900" : "text-slate-600")}
          href="/dashboard"
        >
          Dashboard
        </Link>
        <Link
          className={clsx(currentPath === "/careers" ? "text-slate-900" : "text-slate-600")}
          href="/careers"
        >
          Careers
        </Link>
        <Link
          className={clsx(currentPath === "/schedule" ? "text-slate-900" : "text-slate-600")}
          href="/schedule"
        >
          Schedule
        </Link>
        <Link
          className={clsx(currentPath === "/login" ? "text-slate-900" : "text-slate-600")}
          href="/login"
        >
          Login
        </Link>
        <Link
          className={clsx(currentPath === "/logout" ? "text-slate-900" : "text-slate-600")}
          href="/logout"
        >
          Logout
        </Link>
        <Link
          className={clsx(
            currentPath === "/account/settings" ? "text-slate-900" : "text-slate-600",
          )}
          href="/account/settings"
        >
          Settings
        </Link>
      </nav>
      <nav className="mx-auto flex w-full max-w-screen-lg gap-4 max-sm:flex-col">
        <Link
          className={clsx(currentPath === "/about" ? "text-slate-900" : "text-slate-600")}
          href="/about"
        >
          About
        </Link>
        <Link
          className={clsx(currentPath === "/community" ? "text-slate-900" : "text-slate-600")}
          href="/community"
        >
          Community
        </Link>
        <Link
          className={clsx(currentPath === "/faq" ? "text-slate-900" : "text-slate-600")}
          href="/faq"
        >
          FAQ
        </Link>
        <Link
          className={clsx(currentPath === "/feedback" ? "text-slate-900" : "text-slate-600")}
          href="/feedback"
        >
          Feedback
        </Link>
        <Link
          className={clsx(currentPath === "/legal" ? "text-slate-900" : "text-slate-600")}
          href="/legal"
        >
          Legal
        </Link>
        <Link
          className={clsx(currentPath === "/payments" ? "text-slate-900" : "text-slate-600")}
          href="/payments"
        >
          Payments
        </Link>
        <Link
          className={clsx(currentPath === "/status" ? "text-slate-900" : "text-slate-600")}
          href="/status"
        >
          Status
        </Link>
      </nav>
      {props.children}
    </header>
  );
}
