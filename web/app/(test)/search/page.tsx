import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search",
};

export default function SearchPage() {
  return (
    <article>
      <h1 className="text-4xl font-inter font-semibold">Search</h1>
    </article>
  );
}
