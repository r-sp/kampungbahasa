import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule",
  alternates: {
    canonical: "/schedule",
  },
};

export default function SchedulePage() {
  return <h1 className="text-4xl font-bold sm:text-5xl">Schedule</h1>;
}
