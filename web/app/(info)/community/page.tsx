import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Community",
  alternates: {
    canonical: "/community",
  },
};

export default function CommunityPage() {
  return <h1 className="text-4xl font-bold sm:text-5xl">Community</h1>;
}
