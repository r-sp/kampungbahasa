import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Kursus Bahasa Indonesia",
  alternates: {
    canonical: "/kursus-bahasa-indonesia",
    languages: {
      en: "/indonesia-course",
      id: "/kursus-bahasa-indonesia",
    },
  },
};

export default function KursusBahasaIndonesiaPage() {
  return <h1 className="text-4xl font-bold sm:text-5xl">Kursus Bahasa Indonesia</h1>;
}
