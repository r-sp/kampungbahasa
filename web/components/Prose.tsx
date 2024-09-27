import clsx from "clsx";
import React from "react";

export function Prose<T extends React.ElementType = "article">({
  as,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, "as" | "className"> & {
  as?: T;
  className?: string;
}) {
  const Component = as ?? "article";

  return <Component className={clsx(className, "prose prose-h1:tracking-tight")} {...props} />;
}
