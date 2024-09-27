export default function LandingLayout(
  props: Readonly<{
    children: React.ReactNode;
  }>,
) {
  return (
    <>
      <header></header>
      <main>{props.children}</main>
      <footer></footer>
    </>
  );
}
