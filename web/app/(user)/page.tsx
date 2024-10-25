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
      </nav>
    </article>
  );
}
