import { type Metadata } from "next";
import { Prose } from "~/components/Prose";

export const metadata: Metadata = {
  title: "Ecosystem",
};

export default function EcosystemPage() {
  return (
    <Prose className="px-4 py-6 mx-auto max-w-screen-lg">
      <h1>Ecosystem</h1>
    </Prose>
  );
}
