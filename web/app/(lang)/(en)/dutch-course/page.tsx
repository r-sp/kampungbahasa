import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Dutch Course",
  alternates: {
    canonical: "/dutch-course",
    languages: {
      en: "/dutch-course",
      id: "/kursus-bahasa-belanda",
    },
  },
};

export default function DutchCoursePage() {
  return <h1 className="text-4xl font-bold sm:text-5xl">Dutch Course</h1>;
}
