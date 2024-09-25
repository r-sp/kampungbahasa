import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kampung Bahasa",
  description: "FKB's proposal to help with its digital transformation",
};

export default function Homepage() {
  return (
    <article className="px-4 py-6">
      <h1 className="text-4xl font-display font-semibold tracking-tight">Kampung Bahasa</h1>
      <p className="text-xl">A place to learn, practice and improve your speaking</p>
    </article>
  );
}
