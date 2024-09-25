"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { HomeIcon, SearchIcon, CourseIcon, ActivityIcon, ProfileIcon } from "./icons";
import Logo from "./logo";

export function RailNav() {
  return (
    <nav className="fixed left-0 bottom-0 top-0 z-40 select-none">
      <div className="flex flex-col min-h-screen w-16 smr:bg-cn-100" role="none">
        <div className="flex items-center justify-center h-16 smr:hidden" role="none">
          <Link href="/" className="bg-cn-100 p-2 rounded-lg">
            <Logo />
          </Link>
        </div>
        <div
          className="flex flex-auto flex-col items-center justify-center gap-y-2 min-h-full"
          role="none"
        >
          <MainNav className="p-2 rounded-lg" />
        </div>
        <div className="min-h-60 smr:hidden"></div>
      </div>
    </nav>
  );
}

export function BottomNav() {
  return (
    <nav className="fixed left-0 bottom-0 right-0 z-40 bg-cn-100 select-none">
      <div className="flex items-center justify-evenly h-16 px-4 mx-auto max-w-md" role="none">
        <MainNav className="p-2 rounded-lg" />
      </div>
    </nav>
  );
}

function MainNav({ className }: React.ComponentPropsWithoutRef<"a">) {
  const currentPath = usePathname();
  return (
    <>
      <>
        {currentPath === "/" ? (
          <Link href={"/"} className={clsx(className, "text-cn-900")} aria-current="page">
            <HomeIcon outline={true} />
          </Link>
        ) : (
          <Link href={"/"} className={clsx(className, "text-cn-600")}>
            <HomeIcon outline={false} />
          </Link>
        )}
      </>
      <>
        {currentPath === "/search" ? (
          <Link href={"/search"} className={clsx(className, "text-cn-900")} aria-current="page">
            <SearchIcon outline={true} />
          </Link>
        ) : (
          <Link href={"/search"} className={clsx(className, "text-cn-600")}>
            <SearchIcon outline={false} />
          </Link>
        )}
      </>
      <>
        {currentPath === "/course" ? (
          <Link href={"/course"} className={clsx(className, "text-cn-900")} aria-current="page">
            <CourseIcon outline={true} />
          </Link>
        ) : (
          <Link href={"/course"} className={clsx(className, "text-cn-600")}>
            <CourseIcon outline={false} />
          </Link>
        )}
      </>
      <>
        {currentPath === "/activity" ? (
          <Link
            href={"/activity"}
            className={clsx(className, "text-cn-900")}
            aria-current="page"
          >
            <ActivityIcon outline={true} />
          </Link>
        ) : (
          <Link href={"/activity"} className={clsx(className, "text-cn-600")}>
            <ActivityIcon outline={false} />
          </Link>
        )}
      </>
      <>
        {currentPath === "/profile" ? (
          <Link
            href={"/profile"}
            className={clsx(className, "text-cn-900")}
            aria-current="page"
          >
            <ProfileIcon outline={true} />
          </Link>
        ) : (
          <Link href={"/profile"} className={clsx(className, "text-cn-600")}>
            <ProfileIcon outline={false} />
          </Link>
        )}
      </>
    </>
  );
}
