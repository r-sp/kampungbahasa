import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Korean Course",
  alternates: {
    canonical: "/korean-course",
    languages: {
      en: "/korean-course",
      id: "/kursus-bahasa-korea",
    },
  },
};

export default function KoreanCoursePage() {
  return <h1 className="text-4xl font-bold sm:text-5xl">Korean Course</h1>;
}
