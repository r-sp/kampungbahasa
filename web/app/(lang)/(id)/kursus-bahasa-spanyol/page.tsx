import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Kursus Bahasa Spanyol",
  alternates: {
    canonical: "/kursus-bahasa-spanyol",
    languages: {
      en: "/spanish-course",
      id: "/kursus-bahasa-spanyol",
    },
  },
};

export default function KursusBahasaSpanyolPage() {
  return <h1 className="text-4xl font-bold sm:text-5xl">Kursus Bahasa Spanyol</h1>;
}
