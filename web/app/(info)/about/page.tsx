import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <h1 className="text-4xl font-bold sm:text-5xl">About</h1>;
}
