import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header>
      <nav className="flex items-center h-16 px-4">
        <Link href="/" className="contents">
          <Logo variant="gradient" />
          <span className="text-2xl text-cn-900 rounded-lg font-semibold tracking-tight mx-3">
            Kampung Bahasa
          </span>
        </Link>
        <div className="fixed inset-0 opacity-0 pointer-events-none z-10" role="none">
          <div className="flex flex-col items-center h-screen bg-cn-100" role="none">
            <Link
              href="/course"
              className="inline-flex items-center text-base text-cn-600 hover:text-cn-800 rounded-lg font-medium h-12 px-3"
              tabIndex={-1}
            >
              <span>Course</span>
            </Link>
            <Link
              href="/curriculum"
              className="inline-flex items-center text-base text-cn-600 hover:text-cn-800 rounded-lg font-medium h-12 px-3"
              tabIndex={-1}
            >
              <span>Curriculum</span>
            </Link>
            <Link
              href="/ecosystem"
              className="inline-flex items-center text-base text-cn-600 hover:text-cn-800 rounded-lg font-medium h-12 px-3"
              tabIndex={-1}
            >
              <span>Ecosystem</span>
            </Link>
            <Link
              href="/schedule"
              className="inline-flex items-center text-base text-cn-600 hover:text-cn-800 rounded-lg font-medium h-12 px-3"
              tabIndex={-1}
            >
              <span>Schedule</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
