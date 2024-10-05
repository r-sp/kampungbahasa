import { Header, Footer } from "~/components/client";

export default function LandingLayout(
  props: Readonly<{
    children: React.ReactNode;
  }>,
) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
