import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Activity",
};

export default function ActivityPage() {
  return (
    <article className="prose prose-h1:tracking-tight px-4 py-6">
      <h1>Activity</h1>
    </article>
  );
}
