"use client";

import { type ComponentPropsWithoutRef } from "react";
import { type IconProps } from "./types";
import clsx from "clsx";

export default function IconStar({
  color = "currentColor",
  outline = true,
  className,
  ...rest
}: IconProps & ComponentPropsWithoutRef<"svg">) {
  const iconOutline =
    "M14.645 8.35942L12 2L9.35497 8.35942L2.48944 8.90983L7.72025 13.3906L6.12215 20.0902L12 16.5L17.8779 20.0902L16.2798 13.3906L21.5106 8.90983L14.645 8.35942ZM17.0528 10.3582L13.4053 10.0658L12 6.68713L10.5947 10.0658L6.94716 10.3582L9.72623 12.7388L8.87718 16.2982L12 14.3908L15.1228 16.2982L14.2738 12.7388L17.0528 10.3582Z";
  const iconFill =
    "M12 2L14.645 8.35942L21.5106 8.90983L16.2798 13.3906L17.8779 20.0902L12 16.5L6.12215 20.0902L7.72025 13.3906L2.48944 8.90983L9.35497 8.35942L12 2Z";

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path d={clsx(outline ? iconOutline : iconFill)} fill={color} fillRule="evenodd" clipRule="evenodd" />
    </svg>
  );
}
