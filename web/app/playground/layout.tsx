import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Playground",
  alternates: {
    canonical: "/playground",
  },
};

export default function PlaygroundLayout(props: { children: React.ReactNode }) {
  return (
    <div role="none" className="px-4 py-8">
      {props.children}
    </div>
  );
}
