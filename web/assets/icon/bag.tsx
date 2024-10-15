"use client";

import clsx from "clsx";
import { type IconProps } from "../types";

export default function IconBag({
  color = "currentColor",
  outline = true,
  className,
  ...rest
}: IconProps & React.ComponentPropsWithoutRef<"svg">) {
  const iconOutlineHandle =
    "M12 3.8C10.785 3.8 9.8 4.78497 9.8 6V10.1C9.8 10.5971 9.39706 11 8.9 11C8.40294 11 8 10.5971 8 10.1V6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V10.1C16 10.5971 15.5971 11 15.1 11C14.6029 11 14.2 10.5971 14.2 10.1V6C14.2 4.78497 13.215 3.8 12 3.8Z";
  const iconOutlineBag =
    "M6 20.2H18C18.1105 20.2 18.2 20.1105 18.2 20V8C18.2 7.88954 18.1105 7.8 18 7.8H6C5.88954 7.8 5.8 7.88954 5.8 8V20C5.8 20.1105 5.88954 20.2 6 20.2ZM6 22H18C19.1046 22 20 21.1046 20 20V8C20 6.89543 19.1046 6 18 6H6C4.89543 6 4 6.89543 4 8V20C4 21.1046 4.89543 22 6 22Z";
  const iconFillHandle =
    "M9.8 6C9.8 4.78497 10.785 3.8 12 3.8C13.215 3.8 14.2 4.78497 14.2 6V7H16V6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6V7H9.8V6Z";
  const iconFillBag =
    "M6 6C4.89543 6 4 6.89543 4 8V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8C20 6.89543 19.1046 6 18 6H6ZM8 8H9.8V10.1C9.8 10.5971 9.39706 11 8.9 11C8.40294 11 8 10.5971 8 10.1V8ZM16 10.1V8H14.2V10.1C14.2 10.5971 14.6029 11 15.1 11C15.5971 11 16 10.5971 16 10.1Z";

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d={clsx(outline ? iconOutlineHandle : iconFillHandle)}
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d={clsx(outline ? iconOutlineBag : iconFillBag)}
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
