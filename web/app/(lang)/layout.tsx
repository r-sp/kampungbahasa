import { type ReactNode } from "react";
import { Header, Footer } from "~/components/ui";

export default function CourseLayout(
  props: Readonly<{
    children: ReactNode;
  }>,
) {
  return (
    <>
      <Header />
      <main className="p-4">
        <article className="mx-auto w-full max-w-screen-lg">{props.children}</article>
      </main>
      <Footer layout="course" />
    </>
  );
}
