import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQPage() {
  return <h1 className="text-4xl font-bold sm:text-5xl">FAQ</h1>;
}
