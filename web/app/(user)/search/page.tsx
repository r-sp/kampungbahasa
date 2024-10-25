import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Search",
  alternates: {
    canonical: "/search",
  },
};

export default function SearchPage() {
  return (
    <article className="mx-auto w-full max-w-screen-lg">
      <h1 className="text-4xl font-bold sm:text-5xl">Search</h1>
    </article>
  );
}
