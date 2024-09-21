import Link from "next/link";
import {
  HomeIcon,
  SearchIcon,
  CourseIcon,
  ActivityIcon,
  ProfileIcon,
} from "~/components/icons";

export default function MobileNav() {
  return (
    <nav className="flex items-center justify-between p-4 fixed left-0 bottom-0 right-0 z-40">
      <Link href="/">
        <HomeIcon />
      </Link>
      <Link href="/search">
        <SearchIcon />
      </Link>
      <Link href="/course">
        <CourseIcon />
      </Link>
      <Link href="/activity">
        <ActivityIcon />
      </Link>
      <Link href="/profile">
        <ProfileIcon />
      </Link>
    </nav>
  );
}
