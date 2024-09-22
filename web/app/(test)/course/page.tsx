import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Course",
};

export default function CoursePage() {
  return (
    <article className="px-4 py-6">
      <h1 className="text-4xl font-inter font-semibold">Course</h1>
    </article>
  );
}
