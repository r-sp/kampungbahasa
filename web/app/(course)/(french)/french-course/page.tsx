import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "French Course",
  alternates: {
    canonical: "/french-course",
    languages: {
      en: "/french-course",
      id: "/kursus-bahasa-prancis",
    },
  },
};

export default function FrenchCoursePage() {
  return <h1 className="text-4xl font-bold sm:text-5xl">French Course</h1>;
}
