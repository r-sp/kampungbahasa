import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Kursus Bahasa Rusia",
  alternates: {
    canonical: "/kursus-bahasa-rusia",
    languages: {
      en: "/russian-course",
      id: "/kursus-bahasa-rusia",
    },
  },
};

export default function KursusBahasaRusiaPage() {
  return <h1 className="text-4xl font-bold sm:text-5xl">Kursus Bahasa Rusia</h1>;
}
