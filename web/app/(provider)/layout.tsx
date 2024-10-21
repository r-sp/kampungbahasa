import { Header } from "~/components/ui";

export default function ProviderLayout(
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
        <p className="mx-auto w-full max-w-screen-lg text-slate-500">layout: provider</p>
      </footer>
    </>
  );
}
