import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

export default function ProfilePage() {
  return (
    <article className="prose prose-h1:tracking-tight px-4 py-6">
      <h1>Profile</h1>
    </article>
  );
}
