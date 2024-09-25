import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search",
};

export default function SearchPage() {
  return (
    <article className="prose prose-h1:tracking-tight px-4 py-6">
      <h1>Search</h1>
    </article>
  );
}
