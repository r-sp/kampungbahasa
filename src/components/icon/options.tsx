"use client";

import { type ComponentPropsWithoutRef } from "react";
import { type IconProps } from "./types";

export default function IconOptions({
  color = "currentColor",
  className,
  ...rest
}: IconProps & ComponentPropsWithoutRef<"svg">) {
  const iconCircleRight =
    "M18.8627 8.9C18.4804 10.1171 17.3433 11 16 11C14.6567 11 13.5196 10.1171 13.1374 8.9H2.9C2.40295 8.9 2 8.49706 2 8C2 7.50294 2.40295 7.1 2.9 7.1H13.1374C13.5196 5.88287 14.6567 5 16 5C17.3433 5 18.4804 5.88287 18.8627 7.1H21.1C21.5971 7.1 22 7.50294 22 8C22 8.49706 21.5971 8.9 21.1 8.9H18.8627ZM17.2 8C17.2 8.66274 16.6628 9.2 16 9.2C15.3373 9.2 14.8 8.66274 14.8 8C14.8 7.33726 15.3373 6.8 16 6.8C16.6628 6.8 17.2 7.33726 17.2 8Z";
  const iconCircleLeft =
    "M5.13734 16.9C5.51962 18.1171 6.65671 19 8 19C9.34329 19 10.4804 18.1171 10.8627 16.9H21.1C21.5971 16.9 22 16.4971 22 16C22 15.5029 21.5971 15.1 21.1 15.1H10.8627C10.4804 13.8829 9.34329 13 8 13C6.65671 13 5.51962 13.8829 5.13734 15.1H2.9C2.40294 15.1 2 15.5029 2 16C2 16.4971 2.40294 16.9 2.9 16.9H5.13734ZM6.8 16C6.8 16.6627 7.33726 17.2 8 17.2C8.66274 17.2 9.2 16.6627 9.2 16C9.2 15.3373 8.66274 14.8 8 14.8C7.33726 14.8 6.8 15.3373 6.8 16Z";

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path d={iconCircleRight} fill={color} fillRule="evenodd" clipRule="evenodd" />
      <path d={iconCircleLeft} fill={color} fillRule="evenodd" clipRule="evenodd" />
    </svg>
  );
}
