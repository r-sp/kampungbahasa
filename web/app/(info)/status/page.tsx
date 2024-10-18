import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Status",
  alternates: {
    canonical: "/status",
  },
};

export default function StatusPage() {
  return <h1 className="text-4xl font-bold sm:text-5xl">Status</h1>;
}
