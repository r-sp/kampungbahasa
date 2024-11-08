"use client";

import { type ComponentPropsWithoutRef } from "react";
import { type IconProps } from "./types";

export default function IconThemeDark({
  color = "currentColor",
  className,
  ...rest
}: IconProps & ComponentPropsWithoutRef<"svg">) {
  const iconMoon =
    "M15.9002 16.7994C14.7656 18.26 12.9919 19.2 11 19.2C7.57583 19.2 4.8 16.4242 4.8 13C4.8 10.517 6.25966 8.37484 8.36773 7.3849C8.25783 7.90619 8.2 8.44651 8.2 9C8.2 13.2745 11.6384 16.7459 15.9002 16.7994ZM16.8929 14.934C16.6016 14.9775 16.3034 15 16 15C12.6863 15 10 12.3137 10 9C10 8.23406 10.1435 7.50164 10.4051 6.82817C10.5625 6.423 10.7627 6.03917 11 5.68221C11.1556 5.44813 11.3273 5.22561 11.5133 5.0162C11.3436 5.00546 11.1724 5 11 5C10.375 5 9.76677 5.07167 9.18304 5.20723C5.64009 6.03004 3 9.20671 3 13C3 17.4183 6.58172 21 11 21C14.1695 21 16.9085 19.1568 18.2036 16.4839C18.5398 15.7901 18.7786 15.0404 18.9025 14.2525C18.2903 14.5915 17.6124 14.8267 16.8929 14.934Z";
  const iconPlus = "M17.1 7.9V11H18.9V7.9H22V6.1H18.9V3H17.1V6.1H14V7.9H17.1Z";

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path d={iconMoon} fill={color} fillRule="evenodd" clipRule="evenodd" />
      <path d={iconPlus} fill={color} fillRule="evenodd" clipRule="evenodd" />
    </svg>
  );
}
