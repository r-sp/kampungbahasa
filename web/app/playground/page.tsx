import Link from "next/link";
import Section from "./section";

export default function PlaygroundPage() {
  return (
    <article className="mx-auto grid max-w-screen-lg gap-8" aria-labelledby="headline">
      <h1
        className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl"
        id="headline"
      >
        Playground
      </h1>
      <Section.Color />
      <Section.IconVariant />
      <Section.IconOutline />
      <hr />
      <p className="flex flex-wrap gap-4">
        <Link
          className="text-state-100 hover:text-state-200 active:text-state-300 inline-flex truncate rounded-lg border border-solid px-4 py-3 text-sm font-medium"
          href="/"
        >
          Homepage
        </Link>
        <Link
          className="text-state-400 hover:text-state-500 active:text-state-600 inline-flex truncate rounded-lg border border-solid px-4 py-3 text-sm font-medium"
          href="/"
        >
          Homepage
        </Link>
        <Link
          className="bg-state-700 hover:bg-state-800 active:bg-state-900 inline-flex truncate rounded-lg px-4 py-3 text-sm font-medium text-slate-50"
          href="/"
        >
          Homepage
        </Link>
      </p>
    </article>
  );
}
