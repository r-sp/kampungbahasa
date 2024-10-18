import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Kursus Bahasa Belanda",
  alternates: {
    canonical: "/kursus-bahasa-belanda",
    languages: {
      en: "/dutch-course",
      id: "/kursus-bahasa-belanda",
    },
  },
};

export default function KursusBahasaBelandaPage() {
  return <h1 className="text-4xl font-bold sm:text-5xl">Kursus Bahasa Belanda</h1>;
}
