"use client";

import { type ComponentPropsWithoutRef } from "react";
import { type IconProps } from "../types";
import clsx from "clsx";

export default function IconCalendar({
  color = "currentColor",
  outline = true,
  className,
  ...rest
}: IconProps & ComponentPropsWithoutRef<"svg">) {
  const iconOutlinePaper =
    "M15.6 4H8.4V2H6.6V4H5.5C4.39543 4 3.5 4.89543 3.5 6V20C3.5 21.1046 4.39543 22 5.5 22H18.5C19.6046 22 20.5 21.1046 20.5 20V6C20.5 4.89543 19.6046 4 18.5 4H17.4V2H15.6V4ZM18.5 20.2H5.5C5.38954 20.2 5.3 20.1105 5.3 20V9.9H18.7V20C18.7 20.1105 18.6105 20.2 18.5 20.2ZM18.7 8.1H5.3V6C5.3 5.88954 5.38954 5.8 5.5 5.8H18.5C18.6105 5.8 18.7 5.88954 18.7 6V8.1Z";
  const iconFillPaper =
    "M8.4 4H15.6V2H17.4V4H18.5C19.6046 4 20.5 4.89543 20.5 6V20C20.5 21.1046 19.6046 22 18.5 22H5.5C4.39543 22 3.5 21.1046 3.5 20V6C3.5 4.89543 4.39543 4 5.5 4H6.6V2H8.4V4ZM5.5 20.2H18.5C18.6105 20.2 18.7 20.1105 18.7 20V9.9H5.3V20C5.3 20.1105 5.38954 20.2 5.5 20.2Z";
  const iconOpen = "M16 18.5H8V17.5H16V18.5Z";

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d={clsx(outline ? iconOutlinePaper : iconFillPaper)}
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path d={iconOpen} fill={color} fillRule="evenodd" clipRule="evenodd" />
    </svg>
  );
}
