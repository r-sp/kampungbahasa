"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { HomeIcon, SearchIcon, CourseIcon, ActivityIcon, ProfileIcon } from "./icons";
import Logo from "./logo";

export function RailNav() {
  return (
    <nav className="fixed left-0 bottom-0 top-0 z-40 bg-cn-100 select-none">
      <div className="flex flex-col items-center justify-between min-h-screen py-6">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex flex-col gap-y-4">
          <MainNav />
        </div>
        <div></div>
      </div>
    </nav>
  );
}

export function BottomNav() {
  return (
    <nav className="fixed left-0 bottom-0 right-0 z-40 bg-cn-100 select-none">
      <div className="flex items-center justify-evenly h-12 mx-auto my-0 max-w-lg">
        <MainNav />
      </div>
    </nav>
  );
}

function MainNav() {
  const currentPath = usePathname();
  const style = "inline-flex items-center justify-center h-10 w-16 rounded-xl";
  return (
    <>
      <Link
        href="/"
        className={clsx(style, currentPath === "/" ? "text-cn-900" : "text-cn-600")}
      >
        <HomeIcon outline={currentPath === "/" ? true : false} />
      </Link>
      <Link
        href="/search"
        className={clsx(style, currentPath === "/search" ? "text-cn-900" : "text-cn-600")}
      >
        <SearchIcon outline={currentPath === "/search" ? true : false} />
      </Link>
      <Link
        href="/course"
        className={clsx(style, currentPath === "/course" ? "text-cn-900" : "text-cn-600")}
      >
        <CourseIcon outline={currentPath === "/course" ? true : false} />
      </Link>
      <Link
        href="/activity"
        className={clsx(style, currentPath === "/activity" ? "text-cn-900" : "text-cn-600")}
      >
        <ActivityIcon outline={currentPath === "/activity" ? true : false} />
      </Link>
      <Link
        href="/profile"
        className={clsx(style, currentPath === "/profile" ? "text-cn-900" : "text-cn-600")}
      >
        <ProfileIcon outline={currentPath === "/profile" ? true : false} />
      </Link>
    </>
  );
}
