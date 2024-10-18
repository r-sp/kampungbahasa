import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal",
  alternates: {
    canonical: "/legal",
  },
};

export default function LegalPage() {
  return <h1 className="text-4xl font-bold sm:text-5xl">Legal</h1>;
}
