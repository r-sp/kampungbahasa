"use client";

import { type ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

export default function FKB({
  className,
  color,
  ...rest
}: ComponentPropsWithoutRef<"svg"> & {
  color?: {
    bg: string;
    top: string;
    left: string;
    right: string;
  };
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <circle cx="16" cy="16" r="16" fill={clsx(color ? color.bg : "#0000FD")} />
      <circle cx="16" cy="7.93332" r="7" fill={clsx(color ? color.bg : "#FD0001")} />
      <circle cx="9" cy="20.0573" r="7" fill={clsx(color ? color.bg : "#FCFC00")} />
      <circle cx="23" cy="20.0573" r="7" fill={clsx(color ? color.bg : "#02FF01")} />
    </svg>
  );
}
