import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Mandarin Course",
  alternates: {
    canonical: "/mandarin-course",
    languages: {
      en: "/mandarin-course",
      id: "/kursus-bahasa-mandarin",
    },
  },
};

export default function MandarinCoursePage() {
  return <h1 className="text-4xl font-bold sm:text-5xl">Mandarin Course</h1>;
}
