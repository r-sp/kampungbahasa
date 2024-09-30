"use client";

import { useHeaderMotion } from "~/lib/hooks";
import clsx from "clsx";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const motion = useHeaderMotion({ offset: 32 });
  return (
    <header>
      <div
        className={clsx(
          "bg-pare-200",
          motion ? "shadow-4dp fixed" : "shadow-1dp absolute",
          "left-0 right-0 top-0 z-10 flex items-center gap-3 sm:h-16 sm:px-4",
        )}
        role="none"
      >
        <div
          className="sm:contents sm-r:flex sm-r:items-center sm-r:gap-3 sm-r:h-16 sm-r:pl-4 sm-r:pr-3 sm-r:min-w-full"
          role="none"
        >
          <Link href="/" className="contents">
            <Logo variant="gradient" aria-hidden="true" />
            <span className="text-cn-800 text-2xl font-semibold tracking-tight">
              Kampung Bahasa
            </span>
          </Link>
          <div aria-hidden="true" className="sm:hidden sm-r:flex-grow" role="none"></div>
          <button className="toggle-menu sm:hidden">
            <svg
              className="block w-8 h-8"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="top"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 7C4 6.44772 4.44772 6 5 6H27C27.5523 6 28 6.44772 28 7C28 7.55228 27.5523 8 27 8H5C4.44772 8 4 7.55228 4 7Z"
                fill="currentColor"
              ></path>
              <path
                className="mid"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 16C4 15.4477 4.44772 15 5 15H27C27.5523 15 28 15.4477 28 16C28 16.5523 27.5523 17 27 17H5C4.44772 17 4 16.5523 4 16Z"
                fill="currentColor"
              ></path>
              <path
                className="bot"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 25C4 24.4477 4.44772 24 5 24H27C27.5523 24 28 24.4477 28 25C28 25.5523 27.5523 26 27 26H5C4.44772 26 4 25.5523 4 25Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
        <div className="sm:contents sm-r:hidden" role="none">
          <nav className="text-cn-700 sm:contents">
            <Link href="/course">Course</Link>
            <Link href="/curriculum">Curriculum</Link>
            <Link href="/ecosystem">Ecosystem</Link>
            <Link href="/schedule">Schedule</Link>
          </nav>
        </div>
      </div>
      <div className="h-16 pointer-events-none" role="none"></div>
    </header>
  );
}
