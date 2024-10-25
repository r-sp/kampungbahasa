import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Account",
  alternates: {
    canonical: "/account",
  },
};

export default function AccountPage() {
  return (
    <article className="mx-auto w-full max-w-screen-lg">
      <h1 className="text-4xl font-bold sm:text-5xl">Account</h1>
    </article>
  );
}
