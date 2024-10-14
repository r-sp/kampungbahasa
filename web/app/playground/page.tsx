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
      <p className="flex">
        <Link
          className="inline-flex truncate rounded-lg bg-slate-950 px-4 py-3 text-sm font-medium text-slate-50"
          href="/"
        >
          Back to Homepage
        </Link>
      </p>
    </article>
  );
}
