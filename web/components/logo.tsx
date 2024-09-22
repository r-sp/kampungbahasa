import React from "react";

type LogoProps = {
  size?: number;
  variant?: "gradient" | "mono";
};

export default function Logo({
  size = 32,
  variant = "gradient",
  ...rest
}: LogoProps & React.ComponentPropsWithoutRef<"svg">) {
  const inherit = "currentColor";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {variant === "gradient" && (
        <>
          <HouseShape color="url(#blue-house)" />
          <BubbleShape color="url(#green-buble)" />
          <DoorShape color="url(#yellow-door)" />
          <DiamondShape color="url(#red-diamond)" />
          <GradientLogo />
        </>
      )}
      {variant === "mono" && (
        <>
          <HouseShape color={inherit} />
          <BubbleShape color={inherit} />
          <DoorShape color={inherit} />
          <DiamondShape color={inherit} />
        </>
      )}
      <title>Kampung Bahasa</title>
    </svg>
  );
}

function HouseShape({ color }: { color: string } & React.ComponentPropsWithoutRef<"path">) {
  return (
    <path
      d="M1.77777 8.65154C1.77777 8.51894 1.83045 8.39176 1.92422 8.29799L8.09088 2.13132C8.28615 1.93606 8.60273 1.93606 8.79799 2.13132L14.9647 8.29799C15.0584 8.39176 15.1111 8.51894 15.1111 8.65154V14.6111C15.1111 14.8872 14.8872 15.1111 14.6111 15.1111H2.27777C2.00163 15.1111 1.77777 14.8872 1.77777 14.6111V8.65154Z"
      fill={color}
    />
  );
}
function BubbleShape({ color }: { color: string } & React.ComponentPropsWithoutRef<"path">) {
  return (
    <path
      d="M16.8889 8.44444C16.8889 4.76254 19.8737 1.77777 23.5556 1.77777C27.2375 1.77777 30.2222 4.76254 30.2222 8.44444C30.2222 12.1263 27.2375 15.1111 23.5556 15.1111H17.3889C17.1128 15.1111 16.8889 14.8872 16.8889 14.6111V8.44444Z"
      fill={color}
    />
  );
}
function DoorShape({ color }: { color: string } & React.ComponentPropsWithoutRef<"path">) {
  return (
    <path
      d="M16.8889 17.3889C16.8889 17.1127 17.1128 16.8889 17.3889 16.8889H23.5556C27.2375 16.8889 30.2222 19.8737 30.2222 23.5556C30.2222 27.2374 27.2375 30.2222 23.5556 30.2222H17.3889C17.1128 30.2222 16.8889 29.9984 16.8889 29.7222V17.3889Z"
      fill={color}
    />
  );
}
function DiamondShape({ color }: { color: string } & React.ComponentPropsWithoutRef<"path">) {
  return (
    <path
      d="M15.1111 17.3889C15.1111 17.1127 14.8872 16.8889 14.6111 16.8889H2.27777C2.00163 16.8889 1.77777 17.1127 1.77777 17.3889V23.0556C1.77777 23.3317 2.00241 23.5536 2.27779 23.574C5.56108 23.8175 8.18251 26.4389 8.42597 29.7222C8.44639 29.9976 8.66829 30.2222 8.94444 30.2222H14.6111C14.8872 30.2222 15.1111 29.9984 15.1111 29.7222V17.3889Z"
      fill={color}
    />
  );
}

function GradientLogo() {
  return (
    <defs>
      <linearGradient
        id="blue-house"
        x1="8.44444"
        y1="1.77777"
        x2="8.44444"
        y2="15.1111"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4EC0ED" />
        <stop offset="1" stopColor="#1F9BE5" />
      </linearGradient>
      <linearGradient
        id="green-buble"
        x1="23.5556"
        y1="1.77777"
        x2="23.5556"
        y2="15.1111"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4CE08A" />
        <stop offset="1" stopColor="#00C18F" />
      </linearGradient>
      <linearGradient
        id="yellow-door"
        x1="23.5556"
        y1="16.8889"
        x2="23.5556"
        y2="30.2222"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EDBC4E" />
        <stop offset="1" stopColor="#F79318" />
      </linearGradient>
      <linearGradient
        id="red-diamond"
        x1="8.44444"
        y1="16.8889"
        x2="8.44444"
        y2="30.2222"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#ED4E71" />
        <stop offset="1" stopColor="#F44C3C" />
      </linearGradient>
    </defs>
  );
}
