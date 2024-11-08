import Link from "next/link";

export default function HomePage() {
  return (
    <article className="mx-auto w-full max-w-screen-lg px-4 py-8">
      <h1 className="text-4xl font-bold sm:text-5xl">Kampung Bahasa Concept</h1>
      <nav className="mt-4 grid max-w-max gap-2">
        <Link className="text-base font-normal text-slate-700" href="/typography">
          The Ultimate Guide To CEFR Language Levels: From A1 To C2
        </Link>
      </nav>
    </article>
  );
}
