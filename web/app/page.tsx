import type { Metadata } from "next";
import Logo from "./logo";

export const metadata: Metadata = {
  title: "Kampung Bahasa",
  description: "FKB's proposal to help with its digital transformation",
};

export default function Homepage() {
  return (
    <>
      <header>
        <Logo className="flex items-center justify-center h-10 w-10 rounded-xl bg-cn-100" />
      </header>
      <main>
        <article>
          <h1 className="text-4xl font-inter font-semibold">Kampung Bahasa</h1>
          <p className="text-xl font-roboto font-normal">
            A place to learn, practice and improve your speaking
          </p>
          <button className="text-base">Start learning</button>
        </article>
      </main>
    </>
  );
}
