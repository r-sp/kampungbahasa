import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Japanese Course",
  alternates: {
    canonical: "/japanese-course",
    languages: {
      en: "/japanese-course",
      id: "/kursus-bahasa-jepang",
    },
  },
};

export default function JapaneseCoursePage() {
  return <h1 className="text-4xl font-bold sm:text-5xl">Japanese Course</h1>;
}
