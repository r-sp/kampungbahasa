import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Course",
};

export default function CoursePage() {
  return (
    <article className="prose prose-h1:tracking-tight px-4 py-6">
      <h1>Course</h1>
    </article>
  );
}
