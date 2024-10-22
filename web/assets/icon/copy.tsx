"use client";

import { type ComponentPropsWithoutRef } from "react";
import { type IconProps } from "../types";

export default function IconCopy({
  color = "currentColor",
  className,
  ...rest
}: IconProps & ComponentPropsWithoutRef<"svg">) {
  const iconMagnetLeft =
    "M6.9 7C4.19381 7 2 9.19381 2 11.9V12.1C2 14.8062 4.1938 17 6.9 17H10.1C10.5971 17 11 16.5971 11 16.1C11 15.6029 10.5971 15.2 10.1 15.2H6.9C5.18792 15.2 3.8 13.8121 3.8 12.1V11.9C3.8 10.1879 5.18792 8.8 6.9 8.8H10.1C10.5971 8.8 11 8.39706 11 7.9C11 7.40294 10.5971 7 10.1 7H6.9Z";
  const iconMagnetRight =
    "M13.9 7C13.4029 7 13 7.40294 13 7.9C13 8.39706 13.4029 8.8 13.9 8.8H17.1C18.8121 8.8 20.2 10.1879 20.2 11.9V12.1C20.2 13.8121 18.8121 15.2 17.1 15.2H13.9C13.4029 15.2 13 15.6029 13 16.1C13 16.5971 13.4029 17 13.9 17H17.1C19.8062 17 22 14.8062 22 12.1V11.9C22 9.1938 19.8062 7 17.1 7H13.9Z";
  const iconMetal =
    "M7.09998 12C7.09998 11.5029 7.50292 11.1 7.99998 11.1H16C16.497 11.1 16.9 11.5029 16.9 12C16.9 12.4971 16.497 12.9 16 12.9H7.99998C7.50292 12.9 7.09998 12.4971 7.09998 12Z";

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d={iconMagnetLeft} fill={color} fillRule="evenodd" clipRule="evenodd" />
      <path d={iconMagnetRight} fill={color} fillRule="evenodd" clipRule="evenodd" />
      <path d={iconMetal} fill={color} fillRule="evenodd" clipRule="evenodd" />
    </svg>
  );
}
