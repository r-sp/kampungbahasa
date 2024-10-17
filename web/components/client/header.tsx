"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

export default function Header(props: { children?: React.ReactNode }) {
  const currentPath = usePathname();

  return (
    <header className="flex flex-col items-start gap-4 p-4">
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
      {props.children}
    </header>
  );
}
