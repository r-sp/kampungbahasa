import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "Could not find requested resource",
};

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-screen max-w-prose select-none flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-slate-900">Page Not Found</h1>
      <p className="text-base font-normal text-slate-600">Could not find requested resource</p>
      <a className="text-slate-700 underline" href="/" rel="noreferrer">
        Back to home
      </a>
    </div>
  );
}
