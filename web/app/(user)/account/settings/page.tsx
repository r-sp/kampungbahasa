import { ThemeSwitcher } from "~/components/client";

export default function AccountSettingsPage() {
  return (
    <>
      <h1 className="text-4xl font-bold sm:text-5xl">Settings</h1>
      <div className="mt-8">
        <ThemeSwitcher />
      </div>
    </>
  );
}
