import { type Metadata } from "next";
import { ThemeSwitcher } from "~/components/ui";

export const metadata: Metadata = {
  title: "Settings",
  alternates: {
    canonical: "/account/settings",
  },
};

export default function AccountSettingsPage() {
  return (
    <article className="mx-auto w-full max-w-screen-lg">
      <h1 className="text-4xl font-bold sm:text-5xl">Settings</h1>
      <div className="mt-8">
        <ThemeSwitcher />
      </div>
    </article>
  );
}
