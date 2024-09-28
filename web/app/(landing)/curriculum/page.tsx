import { type Metadata } from "next";
import { Prose } from "~/components/Prose";

export const metadata: Metadata = {
  title: "Curriculum",
};

export default function CurriculumPage() {
  return (
    <Prose className="px-4 py-6 mx-auto max-w-screen-lg">
      <h1>Curriculum</h1>
    </Prose>
  );
}
