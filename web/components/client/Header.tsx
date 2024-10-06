import Link from "next/link";
import { Logo } from "~/assets/Logo";

export default function Header() {
  return (
    <header>
      <nav className="mx-auto flex h-14 max-w-3xl items-center px-4 ps-4">
        <Link href="/" className="inline-block">
          <Logo className="block h-8 w-8" />
        </Link>
      </nav>
    </header>
  );
}
