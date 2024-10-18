import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "English Course",
  alternates: {
    canonical: "/english-course",
    languages: {
      en: "/english-course",
      id: "/kursus-bahasa-inggris",
    },
  },
};

export default function EnglishCoursePage() {
  return <h1 className="text-4xl font-bold sm:text-5xl">English Course</h1>;
}
