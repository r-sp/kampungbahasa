import { type ReactNode } from "react";
import { Header, Footer } from "~/components/ui";

export default function UserLayout(
  props: Readonly<{
    children: ReactNode;
  }>,
) {
  return (
    <div id="root" role="none">
      <Header />
      <main className="p-4">{props.children}</main>
      <Footer />
    </div>
  );
}
