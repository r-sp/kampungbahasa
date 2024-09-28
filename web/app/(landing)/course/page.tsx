import { type Metadata } from "next";
import { Prose } from "~/components/Prose";

export const metadata: Metadata = {
  title: "Course",
};

export default function CoursePage() {
  return (
    <Prose className="px-4 py-6 mx-auto max-w-screen-lg">
      <h1>Course</h1>
    </Prose>
  );
}
