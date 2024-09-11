import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kampung Bahasa",
  description: "FKB's proposal to help with its digital transformation",
};

export default function Homepage() {
  return <h1 className="text-5xl">Homepage</h1>;
}
