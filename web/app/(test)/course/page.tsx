import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Course",
};

export default function CoursePage() {
  return (
    <article>
      <h1 className="text-4xl font-inter font-semibold">Course</h1>
    </article>
  );
}
