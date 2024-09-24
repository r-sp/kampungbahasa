"use client";

import React from "react";
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
          <MainNav className="inline-flex items-center justify-center h-10 w-16 rounded-xl" />
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
        <MainNav className="inline-flex items-center justify-center h-10 w-16 rounded-xl" />
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
