import Header from "~/components/client/Header";

export default function LandingLayout(
  props: Readonly<{
    children: React.ReactNode;
  }>,
) {
  return (
    <div id="root" role="none">
      <Header />
      <main>{props.children}</main>
    </div>
  );
}
