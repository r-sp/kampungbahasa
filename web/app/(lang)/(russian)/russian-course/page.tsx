import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Russian Course",
  alternates: {
    canonical: "/russian-course",
    languages: {
      en: "/russian-course",
      id: "/kursus-bahasa-rusia",
    },
  },
};

export default function RussianCoursePage() {
  return <h1 className="text-4xl font-bold sm:text-5xl">Russian Course</h1>;
}
