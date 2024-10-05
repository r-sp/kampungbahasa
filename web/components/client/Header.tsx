import Link from "next/link";
import { Logo } from "~/assets/Logo";

export default function Header() {
  return (
    <header>
      <nav className="flex items-center h-14 mx-auto max-w-3xl ps-4 px-4">
        <Link href="/" className="inline-block">
          <Logo className="block h-8 w-8" />
        </Link>
      </nav>
    </header>
  );
}
