import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Kursus Bahasa Arab",
  alternates: {
    canonical: "/kursus-bahasa-arab",
    languages: {
      en: "/arabic-course",
      id: "/kursus-bahasa-arab",
    },
  },
};

export default function KursusBahasaArabPage() {
  return <h1 className="text-4xl font-bold sm:text-5xl">Kursus Bahasa Arab</h1>;
}
