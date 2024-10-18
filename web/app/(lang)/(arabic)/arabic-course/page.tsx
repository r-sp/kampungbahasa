import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Arabic Course",
  alternates: {
    canonical: "/arabic-course",
    languages: {
      en: "/arabic-course",
      id: "/kursus-bahasa-arab",
    },
  },
};

export default function ArabicCoursePage() {
  return <h1 className="text-4xl font-bold sm:text-5xl">Arabic Course</h1>;
}
