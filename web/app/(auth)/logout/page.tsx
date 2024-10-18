import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Logout",
  alternates: {
    canonical: "/logout",
  },
};

export default function LogoutPage() {
  return <h1 className="text-4xl font-bold sm:text-5xl">Logout</h1>;
}
