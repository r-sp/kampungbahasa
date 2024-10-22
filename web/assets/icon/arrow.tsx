"use client";

import { type ComponentPropsWithoutRef } from "react";
import { type IconProps } from "../types";

export default function IconArrow({
  color = "currentColor",
  className,
  ...rest
}: IconProps & ComponentPropsWithoutRef<"svg">) {
  const iconArrowRight =
    "M17.5593 12.8962L3.9 12.9C3.40294 12.9 3 12.4971 3 12C3 11.5029 3.40294 11.1 3.9 11.1L17.5583 11.0962L11.7384 5.27236L13.0116 4L21.0021 11.996L13.0068 20.0021L11.7332 18.7302L17.5593 12.8962Z";

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d={iconArrowRight} fill={color} fillRule="evenodd" clipRule="evenodd" />
    </svg>
  );
}
