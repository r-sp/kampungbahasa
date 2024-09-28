import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 page not found",
};

export default function NotFound() {
  return (
    <>
      <Link href="/">Back to home</Link>
    </>
  );
}
