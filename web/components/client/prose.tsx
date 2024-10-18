"use client";

import clsx from "clsx";

export default function Prose<T extends React.ElementType = "article">({
  as,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, "as" | "className"> & {
  as?: T;
  className?: string;
}) {
  const Component = as ?? "article";

  return <Component className={clsx(className, "prose-fiction")} {...props} />;
}
