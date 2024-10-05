import Link from "next/link";
import { Banner } from "~/assets/Logo";

export default function Footer() {
  return (
    <footer>
      <nav className="flex items-center h-14 mx-auto max-w-3xl ps-4 px-4">
        <Link href="/" className="inline-block">
          <Banner className="block h-8 w-auto" />
        </Link>
      </nav>
    </footer>
  );
}
