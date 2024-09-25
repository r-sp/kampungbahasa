import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Activity",
};

export default function ActivityPage() {
  return (
    <article className="px-4 py-6">
      <h1 className="text-4xl font-display font-semibold">Activity</h1>
    </article>
  );
}
