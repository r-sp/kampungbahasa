import { type Metadata } from "next";
import { Prose } from "~/components/Prose";

export const metadata: Metadata = {
  title: "Schedule",
};

export default function SchedulePage() {
  return (
    <Prose className="px-4 py-6 mx-auto max-w-screen-lg">
      <h1>Schedule</h1>
    </Prose>
  );
}
