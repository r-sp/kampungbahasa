import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Kursus Bahasa Korea",
  alternates: {
    canonical: "/kursus-bahasa-korea",
    languages: {
      en: "/korean-course",
      id: "/kursus-bahasa-korea",
    },
  },
};

export default function KursusBahasaKoreaPage() {
  return <h1 className="text-4xl font-bold sm:text-5xl">Kursus Bahasa Korea</h1>;
}
