import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Payments",
  alternates: {
    canonical: "/payments",
  },
};

export default function PaymentsPage() {
  return <h1 className="text-4xl font-bold sm:text-5xl">Payments</h1>;
}
