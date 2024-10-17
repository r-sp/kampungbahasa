import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Indonesia Course",
  alternates: {
    canonical: "/indonesia-course",
    languages: {
      en: "/indonesia-course",
      id: "/kursus-bahasa-indonesia",
    },
  },
};

export default function IndonesiaCoursePage() {
  return <h1 className="text-4xl font-bold sm:text-5xl">Indonesia Course</h1>;
}
