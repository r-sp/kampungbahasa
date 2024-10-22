"use client";

import { type ComponentPropsWithoutRef } from "react";
import { type IconProps } from "../types";

export default function IconThemeLight({
  color = "currentColor",
  className,
  ...rest
}: IconProps & ComponentPropsWithoutRef<"svg">) {
  const iconSun =
    "M12 15.2C13.7673 15.2 15.2 13.7673 15.2 12C15.2 10.2327 13.7673 8.8 12 8.8C10.2327 8.8 8.8 10.2327 8.8 12C8.8 13.7673 10.2327 15.2 12 15.2ZM12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z";
  const iconShine =
    "M11.1 1V5H12.9V1H11.1ZM19 12.9H23V11.1H19V12.9ZM11.1 23V19H12.9V23H11.1ZM5 11.1H1V12.9H5V11.1ZM20.1364 5.1364L17.6364 7.6364L16.3636 6.3636L18.8636 3.8636L20.1364 5.1364ZM16.3636 17.6364L18.8636 20.1364L20.1364 18.8636L17.6364 16.3636L16.3636 17.6364ZM3.8636 18.8636L6.3636 16.3636L7.6364 17.6364L5.1364 20.1364L3.8636 18.8636ZM7.6364 6.3636L5.1364 3.8636L3.8636 5.1364L6.3636 7.6364L7.6364 6.3636Z";

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d={iconSun} fill={color} fillRule="evenodd" clipRule="evenodd" />
      <path d={iconShine} fill={color} fillRule="evenodd" clipRule="evenodd" />
    </svg>
  );
}
