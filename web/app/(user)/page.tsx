import Link from "next/link";

export default function HomePage() {
  return (
    <article className="mx-auto w-full max-w-screen-lg">
      <h1 className="text-4xl font-bold sm:text-5xl">Home</h1>
      <nav className="mt-4 grid max-w-max gap-2">
        <Link className="text-base font-normal text-slate-700" href="/search">
          Search
        </Link>
        <Link className="text-base font-normal text-slate-700" href="/course">
          Course
        </Link>
        <Link className="text-base font-normal text-slate-700" href="/activity">
          Activity
        </Link>
        <Link className="text-base font-normal text-slate-700" href="/account">
          Profile
        </Link>
        <Link className="text-base font-normal text-slate-700" href="/login">
          Login
        </Link>
        <Link className="text-base font-normal text-slate-700" href="/logout">
          Logout
        </Link>
        <Link className="text-base font-normal text-slate-700" href="/account/settings">
          Settings
        </Link>
        <Link className="text-base font-normal text-slate-700" href="/dashboard">
          Dashboard
        </Link>
        <Link className="text-base font-normal text-slate-700" href="/about">
          About
        </Link>
        <Link className="text-base font-normal text-slate-700" href="/community">
          Community
        </Link>
        <Link className="text-base font-normal text-slate-700" href="/faq">
          FAQ
        </Link>
        <Link className="text-base font-normal text-slate-700" href="/feedback">
          Feedback
        </Link>
        <Link className="text-base font-normal text-slate-700" href="/legal">
          Legal
        </Link>
        <Link className="text-base font-normal text-slate-700" href="/payments">
          Payments
        </Link>
        <Link className="text-base font-normal text-slate-700" href="/status">
          Status
        </Link>
      </nav>
    </article>
  );
}
