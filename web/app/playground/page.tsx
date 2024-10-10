import Link from "next/link";
import { Prose } from "~/components/server/Prose";

import SectionColor from "./section/color";
import SectionIconVariant from "./section/icon-variant";
import SectionIconOutline from "./section/icon-outline";

export default function PlaygroundPage() {
  return (
    <Prose className="mx-auto" aria-labelledby="headline">
      <h1 id="headline">Playground</h1>
      <SectionColor />
      <SectionIconVariant />
      <SectionIconOutline />
      <hr />
      <p>
        <Link href="/">Back to home</Link>
      </p>
    </Prose>
  );
}
