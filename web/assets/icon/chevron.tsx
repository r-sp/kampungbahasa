"use client";

import { type IconProps } from "../types";

export default function IconChevron({
  color = "currentColor",
  className,
  ...rest
}: IconProps & React.ComponentPropsWithoutRef<"svg">) {
  const iconChevronRight =
    "M8.00641 2.0036L18.0025 11.9997L8.00675 22.0061L6.73328 20.7339L15.4576 12.0003L6.73362 3.27639L8.00641 2.0036Z";

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d={iconChevronRight} fill={color} fillRule="evenodd" clipRule="evenodd" />
    </svg>
  );
}
