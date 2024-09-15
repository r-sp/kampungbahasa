import Logo from "~/icons/logo";

export default function AdminLayout({
  children,
  ...rest
}: { children: React.ReactNode } & React.ComponentPropsWithoutRef<"main">) {
  return (
    <>
      <header>
        <Logo size={32} variant="mono" />
        <code>header from base layout</code>
      </header>
      <main {...rest}>{children}</main>
    </>
  );
}
