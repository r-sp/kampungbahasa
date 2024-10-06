import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "Could not find requested resource",
};

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-screen max-w-prose select-none flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-neutral-900">Page Not Found</h1>
      <p className="text-base font-normal text-neutral-600">
        Could not find requested resource
      </p>
      <a className="text-kb-50 underline" href="/" rel="noreferrer">
        Back to home
      </a>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-0 left-0 right-0 z-10 grid"
      >
        <span className="bg-kb-100 block h-3"></span>
        <span className="bg-kb-300 block h-3"></span>
        <span className="bg-kb-600 block h-3"></span>
        <span className="bg-kb-800 block h-3"></span>
      </div>
    </div>
  );
}
