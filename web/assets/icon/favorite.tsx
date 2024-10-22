"use client";

import { type ComponentPropsWithoutRef } from "react";
import { type IconProps } from "../types";
import clsx from "clsx";

export default function IconFavorite({
  color = "currentColor",
  outline = true,
  className,
  ...rest
}: IconProps & ComponentPropsWithoutRef<"svg">) {
  const iconOutline =
    "M12 4.23795L10.8521 3.24982C8.40067 1.384 4.97032 1.6314 2.80351 3.83028C0.398829 6.27057 0.398828 10.2271 2.80351 12.6674L12 22L21.1965 12.6673C23.6012 10.2271 23.6012 6.27057 21.1965 3.83028C19.0297 1.6314 15.5993 1.384 13.1479 3.24982L12 4.23795ZM12 19.4355L19.9144 11.4039C21.6285 9.6644 21.6285 6.83324 19.9144 5.09369C18.3812 3.53781 15.9665 3.36658 14.238 4.68214L12 6.5L9.76198 4.68214C8.03348 3.36658 5.6188 3.53781 4.08562 5.09369C2.37146 6.83323 2.37146 9.6644 4.08562 11.4039L12 19.4355Z";
  const iconFill =
    "M21.1965 12.6673L12 22L2.80351 12.6674C0.398828 10.2271 0.398829 6.27057 2.80351 3.83028C4.97032 1.6314 8.40067 1.384 10.8521 3.24982L12 4.24L13.1479 3.24982C15.5993 1.384 19.0297 1.6314 21.1965 3.83028C23.6012 6.27057 23.6012 10.2271 21.1965 12.6673Z";

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
