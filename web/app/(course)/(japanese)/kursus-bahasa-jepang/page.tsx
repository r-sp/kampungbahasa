import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Kursus Bahasa Jepang",
  alternates: {
    canonical: "/kursus-bahasa-jepang",
    languages: {
      en: "/japanese-course",
      id: "/kursus-bahasa-jepang",
    },
  },
};

export default function KursusBahasaJepangPage() {
  return <h1 className="text-4xl font-bold sm:text-5xl">Kursus Bahasa Jepang</h1>;
}
