import { Header } from "~/components/client";

export default function CourseLayout(
  props: Readonly<{
    children: React.ReactNode;
  }>,
) {
  return (
    <>
      <Header />
      <main className="p-4">
        <article className="mx-auto w-full max-w-screen-lg">{props.children}</article>
      </main>
      <footer className="p-4">
        <p className="mx-auto w-full max-w-screen-lg text-slate-500">layout: course</p>
      </footer>
    </>
  );
}