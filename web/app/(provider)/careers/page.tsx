import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers",
  alternates: {
    canonical: "/careers",
  },
};

export default function CareersPage() {
  return (
    <article className="mx-auto w-full max-w-screen-lg">
      <h1 className="text-4xl font-bold sm:text-5xl">Careers</h1>
      <nav className="mt-4 grid max-w-max gap-2">
        <Link className="text-base font-normal text-slate-700" href="/dashboard">
          Dashboard
        </Link>
        <Link className="text-base font-normal text-slate-700" href="/careers">
          Careers
        </Link>
        <Link className="text-base font-normal text-slate-700" href="/schedule">
          Schedule
        </Link>
      </nav>
    </article>
  );
}
