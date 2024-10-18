import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Kursus Bahasa Prancis",
  alternates: {
    canonical: "/kursus-bahasa-prancis",
    languages: {
      en: "/french-course",
      id: "/kursus-bahasa-prancis",
    },
  },
};

export default function KursusBahasaPrancisPage() {
  return <h1 className="text-4xl font-bold sm:text-5xl">Kursus Bahasa Prancis</h1>;
}
