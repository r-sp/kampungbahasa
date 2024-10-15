"use client";

import clsx from "clsx";
import { type IconProps } from "../types";

export default function IconPerson({
  color = "currentColor",
  outline = true,
  className,
  ...rest
}: IconProps & React.ComponentPropsWithoutRef<"svg">) {
  const iconOutlineHead =
    "M12 9.2C13.4912 9.2 14.7 7.99117 14.7 6.5C14.7 5.00883 13.4912 3.8 12 3.8C10.5088 3.8 9.3 5.00883 9.3 6.5C9.3 7.99117 10.5088 9.2 12 9.2ZM12 11C14.4853 11 16.5 8.98528 16.5 6.5C16.5 4.01472 14.4853 2 12 2C9.51472 2 7.5 4.01472 7.5 6.5C7.5 8.98528 9.51472 11 12 11Z";
  const iconOutlineBody =
    "M19.2 20.2V18.5753C19.2 17.9897 18.9977 17.571 18.7405 17.3444C16.9421 15.7595 14.5853 14.8 12 14.8C9.41473 14.8 7.05795 15.7595 5.25951 17.3444C5.00233 17.571 4.8 17.9897 4.8 18.5753V20.2H19.2ZM21 18.5753C21 17.6005 20.6619 16.6384 19.9306 15.9939C17.816 14.1305 15.04 13 12 13C8.95996 13 6.18396 14.1305 4.06942 15.9939C3.33807 16.6384 3 17.6005 3 18.5753V22H21V18.5753Z";
  const iconFillHead =
    "M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z";
  const iconFillBody =
    "M19.9306 15.9939C20.6619 16.6384 21 17.6005 21 18.5753V22H3V18.5753C3 17.6005 3.33807 16.6384 4.06942 15.9939C6.18396 14.1305 8.95996 13 12 13C15.04 13 17.816 14.1305 19.9306 15.9939Z";

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d={clsx(outline ? iconOutlineHead : iconFillHead)}
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d={clsx(outline ? iconOutlineBody : iconFillBody)}
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
