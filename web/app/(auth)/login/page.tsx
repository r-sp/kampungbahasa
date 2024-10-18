import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  alternates: {
    canonical: "/login",
  },
};

export default function LoginPage() {
  return <h1 className="text-4xl font-bold sm:text-5xl">Login</h1>;
}
