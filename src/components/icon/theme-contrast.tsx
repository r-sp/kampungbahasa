"use client";

import { type ComponentPropsWithoutRef } from "react";
import { type IconProps } from "./types";

export default function IconThemeContrast({
  color = "currentColor",
  className,
  ...rest
}: IconProps & ComponentPropsWithoutRef<"svg">) {
  const iconContrast =
    "M13 2.04938C12.6711 2.01672 12.3375 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C12.3375 22 12.6711 21.9833 13 21.9506C18.0533 21.4489 22 17.1853 22 12C22 6.81465 18.0533 2.5511 13 2.04938ZM13 20.1396C17.0571 19.6464 20.2 16.1902 20.2 12C20.2 7.80978 17.0571 4.35363 13 3.86036V20.1396Z";

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path d={iconContrast} fill={color} fillRule="evenodd" clipRule="evenodd" />
    </svg>
  );
}
