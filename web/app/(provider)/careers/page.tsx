import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  alternates: {
    canonical: "/careers",
  },
};

export default function CareersPage() {
  return <h1 className="text-4xl font-bold sm:text-5xl">Careers</h1>;
}
