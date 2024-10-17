import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Kursus Bahasa Jerman",
  alternates: {
    canonical: "/kursus-bahasa-jerman",
    languages: {
      en: "/german-course",
      id: "/kursus-bahasa-jerman",
    },
  },
};

export default function KursusBahasaJermanPage() {
  return <h1 className="text-4xl font-bold sm:text-5xl">Kursus Bahasa Jerman</h1>;
}
