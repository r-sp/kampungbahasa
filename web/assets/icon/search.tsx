"use client";

import clsx from "clsx";
import { type IconProps } from "../types";

export default function IconSearch({
  color = "currentColor",
  outline = true,
  className,
  ...rest
}: IconProps & React.ComponentPropsWithoutRef<"svg">) {
  const iconOutline =
    "M15.8404 17.1132C14.381 18.2933 12.523 19 10.5 19C5.80558 19 2 15.1944 2 10.5C2 5.80558 5.80558 2 10.5 2C15.1944 2 19 5.80558 19 10.5C19 12.523 18.2933 14.381 17.1132 15.8404L21.7364 20.4636C22.0879 20.8151 22.0879 21.3849 21.7364 21.7364C21.3849 22.0879 20.8151 22.0879 20.4636 21.7364L15.8404 17.1132ZM17.2 10.5C17.2 14.2003 14.2003 17.2 10.5 17.2C6.79969 17.2 3.8 14.2003 3.8 10.5C3.8 6.79969 6.79969 3.8 10.5 3.8C14.2003 3.8 17.2 6.79969 17.2 10.5Z";
  const iconFill =
    "M15.602 17.2991C14.1811 18.3671 12.4144 19 10.5 19C5.80558 19 2 15.1944 2 10.5C2 5.80558 5.80558 2 10.5 2C15.1944 2 19 5.80558 19 10.5C19 12.4144 18.3671 14.1811 17.2991 15.602L21.6485 19.9515C22.1172 20.4201 22.1172 21.1799 21.6485 21.6485C21.1799 22.1172 20.4201 22.1172 19.9515 21.6485L15.602 17.2991ZM16.6 10.5C16.6 13.8689 13.8689 16.6 10.5 16.6C7.13106 16.6 4.4 13.8689 4.4 10.5C4.4 7.13106 7.13106 4.4 10.5 4.4C13.8689 4.4 16.6 7.13106 16.6 10.5Z";

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
