import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Feedback",
  alternates: {
    canonical: "/feedback",
  },
};

export default function FeedbackPage() {
  return <h1 className="text-4xl font-bold sm:text-5xl">Feedback</h1>;
}
