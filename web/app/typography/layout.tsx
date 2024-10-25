import { type ReactNode } from "react";
import { Header, Footer } from "~/components/ui";

export default function mdxLayout(
  props: Readonly<{
    children: ReactNode;
  }>,
) {
  return (
    <div id="root" role="none">
      <Header />
      <main className="p-4">
        <section className="mx-auto w-full max-w-screen-md break-words">
          {props.children}
        </section>
      </main>
      <Footer />
    </div>
  );
}
