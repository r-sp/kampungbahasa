import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  alternates: {
    canonical: "/dashboard",
  },
};

export default function DashboardPage() {
  return <h1 className="text-4xl font-bold sm:text-5xl">Dashboard</h1>;
}
