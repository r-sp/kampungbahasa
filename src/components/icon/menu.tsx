"use client";

import { type ComponentPropsWithoutRef } from "react";
import { type IconProps } from "./types";

export default function IconMenu({ color = "currentColor", className, ...rest }: IconProps & ComponentPropsWithoutRef<"svg">) {
  const iconLineTop =
    "M3 5.9C3 5.40294 3.40294 5 3.9 5H20.1C20.5971 5 21 5.40294 21 5.9C21 6.39706 20.5971 6.8 20.1 6.8H3.9C3.40294 6.8 3 6.39706 3 5.9Z";
  const iconLineMiddle =
    "M3 11.9C3 11.4029 3.40294 11 3.9 11H20.1C20.5971 11 21 11.4029 21 11.9C21 12.3971 20.5971 12.8 20.1 12.8H3.9C3.40294 12.8 3 12.3971 3 11.9Z";
  const iconLineBottom =
    "M3 18.1C3 17.6029 3.40294 17.2 3.9 17.2H20.1C20.5971 17.2 21 17.6029 21 18.1C21 18.5971 20.5971 19 20.1 19H3.9C3.40294 19 3 18.5971 3 18.1Z";

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path d={iconLineTop} fill={color} fillRule="evenodd" clipRule="evenodd" />
      <path d={iconLineMiddle} fill={color} fillRule="evenodd" clipRule="evenodd" />
      <path d={iconLineBottom} fill={color} fillRule="evenodd" clipRule="evenodd" />
    </svg>
  );
}
