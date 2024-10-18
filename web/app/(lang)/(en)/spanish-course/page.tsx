import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Spanish Course",
  alternates: {
    canonical: "/spanish-course",
    languages: {
      en: "/spanish-course",
      id: "/kursus-bahasa-spanyol",
    },
  },
};

export default function SpanishCoursePage() {
  return <h1 className="text-4xl font-bold sm:text-5xl">Spanish Course</h1>;
}
