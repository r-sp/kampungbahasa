import Link from "next/link";
import Logo from "~/assets/Logo";

export default function Header() {
  return (
    <header>
      <nav className="px-4 pt-2 mx-auto max-w-3xl">
        <Link href="/" className="inline-block">
          <Logo className="block h-8 w-8" />
        </Link>
      </nav>
    </header>
  );
}
