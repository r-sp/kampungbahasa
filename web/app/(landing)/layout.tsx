import Header from "~/components/Header";

export default function LandingLayout(
  props: Readonly<{
    children: React.ReactNode;
  }>,
) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <footer></footer>
    </>
  );
}
