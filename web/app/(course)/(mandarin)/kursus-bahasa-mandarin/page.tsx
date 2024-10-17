import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Kursus Bahasa Mandarin",
  alternates: {
    canonical: "/kursus-bahasa-mandarin",
    languages: {
      en: "/mandarin-course",
      id: "/kursus-bahasa-mandarin",
    },
  },
};

export default function KursusBahasaMandarinPage() {
  return <h1 className="text-4xl font-bold sm:text-5xl">Kursus Bahasa Mandarin</h1>;
}
