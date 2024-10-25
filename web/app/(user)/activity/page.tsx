import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Activity",
  alternates: {
    canonical: "/activity",
  },
};

export default function ActivityPage() {
  return (
    <article className="mx-auto w-full max-w-screen-lg">
      <h1 className="text-4xl font-bold sm:text-5xl">Activity</h1>
    </article>
  );
}
