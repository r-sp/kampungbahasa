import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Kursus Bahasa Inggris",
  alternates: {
    canonical: "/kursus-bahasa-inggris",
    languages: {
      en: "/english-course",
      id: "/kursus-bahasa-inggris",
    },
  },
};

export default function KursusBahasaInggrisPage() {
  return <h1 className="text-4xl font-bold sm:text-5xl">Kursus Bahasa Inggris</h1>;
}
