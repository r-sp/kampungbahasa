"use client";

import clsx from "clsx";
import { type IconProps } from "../types";

export default function IconVerified({
  className,
  linearGradient,
  ...rest
}: IconProps &
  React.ComponentPropsWithoutRef<"svg"> & {
    linearGradient?: {
      from: string;
      to: string;
    };
  }) {
  const iconBadge =
    "M1.53813 12.5562C1.2381 12.2461 1.2381 11.7539 1.53813 11.4438L3.35883 9.56173C3.53039 9.38438 3.61052 9.13778 3.57596 8.89345L3.20923 6.30067C3.14879 5.87341 3.4381 5.47522 3.86312 5.40066L6.44233 4.94823C6.68538 4.9056 6.89515 4.75319 7.0108 4.53521L8.23811 2.22205C8.44036 1.84087 8.90846 1.68877 9.29613 1.87827L11.6487 3.02827C11.8704 3.13664 12.1297 3.13664 12.3514 3.02827L14.7039 1.87827C15.0916 1.68877 15.5597 1.84087 15.7619 2.22205L16.9892 4.53521C17.1049 4.75319 17.3147 4.9056 17.5577 4.94823L20.1369 5.40066C20.562 5.47522 20.8513 5.87341 20.7908 6.30067L20.4241 8.89345C20.3895 9.13778 20.4697 9.38438 20.6412 9.56173L22.4619 11.4438C22.7619 11.7539 22.7619 12.2461 22.4619 12.5562L20.6412 14.4383C20.4697 14.6156 20.3895 14.8622 20.4241 15.1066L20.7908 17.6994C20.8513 18.1266 20.562 18.5248 20.1369 18.5994L17.5577 19.0518C17.3147 19.0944 17.1049 19.2468 16.9892 19.4648L15.7619 21.778C15.5597 22.1592 15.0916 22.3113 14.7039 22.1218L12.3514 20.9718C12.1297 20.8634 11.8704 20.8634 11.6487 20.9718L9.29613 22.1218C8.90846 22.3113 8.44036 22.1592 8.23811 21.778L7.0108 19.4648C6.89515 19.2468 6.68538 19.0944 6.44233 19.0518L3.86312 18.5994C3.4381 18.5248 3.14879 18.1266 3.20923 17.6994L3.57596 15.1066C3.61052 14.8622 3.53039 14.6156 3.35883 14.4383L1.53813 12.5562Z";
  const iconSign =
    "M17.1364 9.63641L11 15.7728L7.36359 12.1364L8.63638 10.8636L11 13.2272L15.8636 8.36362L17.1364 9.63641Z";

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d={iconBadge} fill="url(#verified)" fillRule="evenodd" clipRule="evenodd" />
      <path d={iconSign} fill="#FFFFFF" fillRule="evenodd" clipRule="evenodd" />
      <defs>
        <linearGradient
          id="verified"
          x1="12"
          y1="1.79684"
          x2="12"
          y2="22.2032"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={clsx(linearGradient ? linearGradient.from : "#4EC0ED")} />
          <stop offset="1" stopColor={clsx(linearGradient ? linearGradient.to : "#1F9BE5")} />
        </linearGradient>
      </defs>
    </svg>
  );
}
