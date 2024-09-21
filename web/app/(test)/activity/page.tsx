import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Activity",
};

export default function ActivityPage() {
  return (
    <article>
      <h1 className="text-4xl font-inter font-semibold">Activity</h1>
    </article>
  );
}