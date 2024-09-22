import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search",
};

export default function SearchPage() {
  return (
    <article className="px-4 py-6">
      <h1 className="text-4xl font-inter font-semibold">Search</h1>
    </article>
  );
}
