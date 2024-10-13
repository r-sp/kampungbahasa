import Link from "next/link";

import SectionColor from "./section/color";
import SectionIconVariant from "./section/icon-variant";
import SectionIconOutline from "./section/icon-outline";

export default function PlaygroundPage() {
  return (
    <article className="mx-auto grid max-w-screen-lg gap-8" aria-labelledby="headline">
      <h1
        className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl"
        id="headline"
      >
        Playground
      </h1>
      <SectionColor />
      <SectionIconVariant />
      <SectionIconOutline />
      <hr />
      <p className="flex">
        <Link
          className="inline-flex truncate rounded-lg bg-slate-800 px-4 py-3 text-sm font-medium text-slate-50"
          href="/"
        >
          Back to Homepage
        </Link>
      </p>
    </article>
  );
}
