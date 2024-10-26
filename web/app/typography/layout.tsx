import { type ReactNode } from "react";
import { Header, Footer } from "~/components/ui";

export default function MDXLayout(
  props: Readonly<{
    children: ReactNode;
  }>,
) {
  return (
    <>
      <Header />
      <main>
        <div className="mx-auto w-full max-w-screen-lg px-4 py-8" role="none">
          <div className="mx-auto w-full max-w-screen-md break-words" role="none">
            {props.children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
