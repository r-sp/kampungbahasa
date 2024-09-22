import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

export default function ProfilePage() {
  return (
    <article className="px-4 py-6">
      <h1 className="text-4xl font-inter font-semibold">Profile</h1>
    </article>
  );
}
