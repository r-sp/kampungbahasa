import Logo from "~/icons/logo";

export default function BaseLayout({
  children,
  ...rest
}: { children: React.ReactNode } & React.ComponentPropsWithoutRef<"main">) {
  return (
    <>
      <header>
        <Logo size={32} aria-hidden="true" />
        <code>header from base layout</code>
      </header>
      <main {...rest}>{children}</main>
    </>
  );
}
