import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kampung Bahasa",
  description: "FKB's proposal to help with its digital transformation",
};

export default function Homepage() {
  return (
    <article className="px-4 py-6">
      <h1 className="text-4xl font-inter font-semibold">Kampung Bahasa</h1>
      <p className="text-xl font-roboto font-normal">
        A place to learn, practice and improve your speaking
      </p>
      <button className="text-base">Start learning</button>
    </article>
  );
}