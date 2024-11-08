import { type ReactNode } from "react";

export default function MDXLayout(
  props: Readonly<{
    children: ReactNode;
  }>,
) {
  return (
    <div className="mx-auto w-full max-w-screen-lg px-4 py-8" role="none">
      <div className="mx-auto w-full max-w-screen-md break-words" role="none">
        {props.children}
      </div>
    </div>
  );
}
