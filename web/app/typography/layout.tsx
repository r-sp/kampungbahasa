import { Header } from "~/components/client";

export default function mdxLayout(
  props: Readonly<{
    children: React.ReactNode;
  }>,
) {
  return (
    <>
      <Header />
      <main className="p-4">
        <article className="prose-fiction mx-auto w-full max-w-prose">{props.children}</article>
      </main>
      <footer className="p-4">
        <p className="mx-auto w-full max-w-screen-lg text-slate-500">layout: mdx</p>
      </footer>
    </>
  );
}
