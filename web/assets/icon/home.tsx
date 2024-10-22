"use client";

import { type ComponentPropsWithoutRef } from "react";
import { type IconProps } from "../types";
import clsx from "clsx";

export default function IconHome({
  color = "currentColor",
  outline = true,
  className,
  ...rest
}: IconProps & ComponentPropsWithoutRef<"svg">) {
  const iconOutline =
    "M20.2 11.8017L12 4.42165L3.8 11.8017V20.2H8.2V16C8.2 13.9013 9.90132 12.2 12 12.2C14.0987 12.2 15.8 13.9013 15.8 16V20.2H20.2V11.8017ZM22 11L12 2L2 11V22H10V16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16V22H22V11Z";
  const iconFill =
    "M22 11V22H14.7V16C14.7 14.5088 13.4912 13.3 12 13.3C10.5088 13.3 9.3 14.5088 9.3 16V22H2V11L12 2L22 11Z";

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d={clsx(outline ? iconOutline : iconFill)}
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
