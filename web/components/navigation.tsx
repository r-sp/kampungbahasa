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
  const route = {
    home: "/",
    search: "/search",
    course: "/course",
    activity: "/activity",
    profile: "/profile",
  };
  return (
    <>
      <Link
        href={route.home}
        className={clsx(style, currentPath === route.home ? "text-cn-900" : "text-cn-600")}
      >
        <HomeIcon outline={currentPath === route.home ? true : false} />
      </Link>
      <Link
        href={route.search}
        className={clsx(style, currentPath === route.search ? "text-cn-900" : "text-cn-600")}
      >
        <SearchIcon outline={currentPath === route.search ? true : false} />
      </Link>
      <Link
        href={route.course}
        className={clsx(style, currentPath === route.course ? "text-cn-900" : "text-cn-600")}
      >
        <CourseIcon outline={currentPath === route.course ? true : false} />
      </Link>
      <Link
        href={route.activity}
        className={clsx(style, currentPath === route.activity ? "text-cn-900" : "text-cn-600")}
      >
        <ActivityIcon outline={currentPath === route.activity ? true : false} />
      </Link>
      <Link
        href={route.profile}
        className={clsx(style, currentPath === route.profile ? "text-cn-900" : "text-cn-600")}
      >
        <ProfileIcon outline={currentPath === route.profile ? true : false} />
      </Link>
    </>
  );
}