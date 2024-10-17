import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "German Course",
  alternates: {
    canonical: "/german-course",
    languages: {
      en: "/german-course",
      id: "/kursus-bahasa-jerman",
    },
  },
};

export default function GermanCoursePage() {
  return <h1 className="text-4xl font-bold sm:text-5xl">German Course</h1>;
}
