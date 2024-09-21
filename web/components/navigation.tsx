"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, SearchIcon, CourseIcon, ActivityIcon, ProfileIcon } from "./icons";
import Logo from "./logo";

export function RailNav() {
  return (
    <nav>
      <Link href="/">
        <Logo />
      </Link>
      <MainNav />
    </nav>
  );
}

export function BottomNav() {
  return (
    <nav className="flex items-center justify-between p-4 fixed left-0 bottom-0 right-0 z-40">
      <MainNav />
    </nav>
  );
}

function MainNav() {
  const currentPath = usePathname();
  return (
    <>
      <Link href="/">
        <HomeIcon outline={currentPath === "/" ? true : false} />
      </Link>
      <Link href="/search">
        <SearchIcon outline={currentPath === "/search" ? true : false} />
      </Link>
      <Link href="/course">
        <CourseIcon outline={currentPath === "/course" ? true : false} />
      </Link>
      <Link href="/activity">
        <ActivityIcon outline={currentPath === "/activity" ? true : false} />
      </Link>
      <Link href="/profile">
        <ProfileIcon outline={currentPath === "/profile" ? true : false} />
      </Link>
    </>
  );
}
