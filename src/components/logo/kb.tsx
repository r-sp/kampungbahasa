"use client";

import { type ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

export function Logo({
  className,
  variant = "gradient",
  ...rest
}: ComponentPropsWithoutRef<"svg"> & {
  variant?: "gradient" | "mono";
}) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        d="M0 7.7071C0 7.57449 0.0526784 7.44732 0.146447 7.35355L7.14644 0.353553C7.3417 0.158291 7.65829 0.158291 7.85355 0.353553L14.8535 7.35355C14.9473 7.44732 15 7.57449 15 7.7071V14.5C15 14.7761 14.7761 15 14.5 15H0.5C0.223858 15 0 14.7761 0 14.5V7.7071Z"
        fill={clsx(variant === "gradient" && "url(#blue-house-logo)", variant === "mono" && "currentColor")}
      />
      <path
        d="M17 7.5C17 3.35786 20.3578 0 24.5 0C28.6421 0 32 3.35786 32 7.5C32 11.6421 28.6421 15 24.5 15H17.5C17.2238 15 17 14.7761 17 14.5V7.5Z"
        fill={clsx(variant === "gradient" && "url(#green-buble-logo)", variant === "mono" && "currentColor")}
      />
      <path
        d="M17 17.5C17 17.2239 17.2238 17 17.5 17H24.5C28.6421 17 32 20.3579 32 24.5C32 28.6421 28.6421 32 24.5 32H17.5C17.2238 32 17 31.7761 17 31.5V17.5Z"
        fill={clsx(variant === "gradient" && "url(#yellow-door-logo)", variant === "mono" && "currentColor")}
      />
      <path
        d="M15 17.5C15 17.2239 14.7761 17 14.5 17H0.5C0.223858 17 0 17.2239 0 17.5V24C0 24.2761 0.224554 24.4983 0.5001 24.5164C4.24377 24.7629 7.23713 27.7562 7.48359 31.4999C7.50173 31.7754 7.72385 32 8 32H14.5C14.7761 32 15 31.7761 15 31.5V17.5Z"
        fill={clsx(variant === "gradient" && "url(#red-diamond-logo)", variant === "mono" && "currentColor")}
      />
      {variant === "gradient" && (
        <defs>
          <linearGradient id="blue-house-logo" x1="7.5" y1="0" x2="7.5" y2="15" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4EC0ED" />
            <stop offset="1" stopColor="#1F9BE5" />
          </linearGradient>
          <linearGradient id="green-buble-logo" x1="24.5" y1="0" x2="24.5" y2="15" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4CE08A" />
            <stop offset="1" stopColor="#00C18F" />
          </linearGradient>
          <linearGradient id="yellow-door-logo" x1="24.5" y1="17" x2="24.5" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EDBC4E" />
            <stop offset="1" stopColor="#F79318" />
          </linearGradient>
          <linearGradient id="red-diamond-logo" x1="7.5" y1="17" x2="7.5" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ED4E71" />
            <stop offset="1" stopColor="#F44C3C" />
          </linearGradient>
        </defs>
      )}
    </svg>
  );
}

export function Banner({
  className,
  variant = "gradient",
  ...rest
}: React.ComponentPropsWithoutRef<"svg"> & {
  variant?: "gradient" | "mono";
}) {
  return (
    <svg className={className} viewBox="0 0 166 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        d="M-2.28882e-05 16.4418C-2.28882e-05 16.1589 0.112358 15.8876 0.312397 15.6876L15.2457 0.754253C15.6623 0.337694 16.3377 0.337694 16.7542 0.754253L31.6875 15.6876C31.8876 15.8876 32 16.1589 32 16.4418V30.9333C32 31.5224 31.5224 32 30.9333 32H1.06664C0.47754 32 -2.28882e-05 31.5224 -2.28882e-05 30.9333V16.4418Z"
        fill={clsx(variant === "gradient" && "url(#blue-house-banner)", variant === "mono" && "currentColor")}
      />
      <path
        d="M36.2666 16C36.2666 7.16344 43.4301 0 52.2666 0H77.1626C85.9992 0 93.1626 7.16344 93.1626 16C93.1626 24.8366 85.9992 32 77.1626 32H37.3333C36.7442 32 36.2666 31.5224 36.2666 30.9333V16Z"
        fill={clsx(variant === "gradient" && "url(#green-buble-banner)", variant === "mono" && "currentColor")}
      />
      <path
        d="M98.496 32C97.9069 32 97.4293 31.5224 97.4293 30.9333V16C97.4293 7.16347 104.593 3.05176e-05 113.429 3.05176e-05C122.266 3.05176e-05 129.429 7.16347 129.429 16V30.9333C129.429 31.5224 128.952 32 128.363 32H98.496Z"
        fill={clsx(variant === "gradient" && "url(#yellow-door-banner)", variant === "mono" && "currentColor")}
      />
      <path
        d="M133.696 30.9333C133.696 31.5224 134.174 32 134.763 32H164.629C165.218 32 165.696 31.5224 165.696 30.9333V17.0667C165.696 16.4776 165.217 16.0037 164.629 15.965C156.643 15.4392 150.257 9.05338 149.731 1.06688C149.692 0.479049 149.218 0 148.629 0L134.763 0C134.174 0 133.696 0.477563 133.696 1.06667V30.9333Z"
        fill={clsx(variant === "gradient" && "url(#red-diamond-banner)", variant === "mono" && "currentColor")}
      />
      {variant === "gradient" && (
        <defs>
          <linearGradient id="blue-house-banner" x1="16" y1="3.65991e-05" x2="16" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4EC0ED" />
            <stop offset="1" stopColor="#1F9BE5" />
          </linearGradient>
          <linearGradient id="green-buble-banner" x1="64.7146" y1="0" x2="64.7146" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4CE08A" />
            <stop offset="1" stopColor="#00C18F" />
          </linearGradient>
          <linearGradient id="yellow-door-banner" x1="97.4293" y1="16" x2="129.429" y2="16" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EDBC4E" />
            <stop offset="1" stopColor="#F79318" />
          </linearGradient>
          <linearGradient
            id="red-diamond-banner"
            x1="149.696"
            y1="32"
            x2="149.696"
            y2="1.14441e-05"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ED4E71" />
            <stop offset="1" stopColor="#F44C3C" />
          </linearGradient>
        </defs>
      )}
    </svg>
  );
}
