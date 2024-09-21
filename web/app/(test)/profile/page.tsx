import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

export default function ProfilePage() {
  return (
    <article>
      <h1 className="text-4xl font-inter font-semibold">Profile</h1>
    </article>
  );
}
