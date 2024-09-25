import React from "react";

type LogoProps = {
  variant?: "gradient" | "mono";
};

export default function Logo({
  className = "block w-8 h-8",
  variant = "gradient",
  ...rest
}: LogoProps & React.ComponentPropsWithoutRef<"svg">) {
  const inherit = "currentColor";
  return (
    <svg
      className={className}
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
      d="M0 7.7071C0 7.57449 0.0526784 7.44732 0.146447 7.35355L7.14644 0.353553C7.3417 0.158291 7.65829 0.158291 7.85355 0.353553L14.8535 7.35355C14.9473 7.44732 15 7.57449 15 7.7071V14.5C15 14.7761 14.7761 15 14.5 15H0.5C0.223858 15 0 14.7761 0 14.5V7.7071Z"
      fill={color}
    />
  );
}
function BubbleShape({ color }: { color: string } & React.ComponentPropsWithoutRef<"path">) {
  return (
    <path
      d="M17 7.5C17 3.35786 20.3578 0 24.5 0C28.6421 0 32 3.35786 32 7.5C32 11.6421 28.6421 15 24.5 15H17.5C17.2238 15 17 14.7761 17 14.5V7.5Z"
      fill={color}
    />
  );
}
function DoorShape({ color }: { color: string } & React.ComponentPropsWithoutRef<"path">) {
  return (
    <path
      d="M17 17.5C17 17.2239 17.2238 17 17.5 17H24.5C28.6421 17 32 20.3579 32 24.5C32 28.6421 28.6421 32 24.5 32H17.5C17.2238 32 17 31.7761 17 31.5V17.5Z"
      fill={color}
    />
  );
}
function DiamondShape({ color }: { color: string } & React.ComponentPropsWithoutRef<"path">) {
  return (
    <path
      d="M15 17.5C15 17.2239 14.7761 17 14.5 17H0.5C0.223858 17 0 17.2239 0 17.5V24C0 24.2761 0.224554 24.4983 0.5001 24.5164C4.24377 24.7629 7.23713 27.7562 7.48359 31.4999C7.50173 31.7754 7.72385 32 8 32H14.5C14.7761 32 15 31.7761 15 31.5V17.5Z"
      fill={color}
    />
  );
}

function GradientLogo() {
  return (
    <defs>
      <linearGradient
        id="blue-house"
        x1="7.5"
        y1="0"
        x2="7.5"
        y2="15"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4EC0ED" />
        <stop offset="1" stopColor="#1F9BE5" />
      </linearGradient>
      <linearGradient
        id="green-buble"
        x1="24.5"
        y1="0"
        x2="24.5"
        y2="15"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4CE08A" />
        <stop offset="1" stopColor="#00C18F" />
      </linearGradient>
      <linearGradient
        id="yellow-door"
        x1="24.5"
        y1="17"
        x2="24.5"
        y2="32"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EDBC4E" />
        <stop offset="1" stopColor="#F79318" />
      </linearGradient>
      <linearGradient
        id="red-diamond"
        x1="7.5"
        y1="17"
        x2="7.5"
        y2="32"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#ED4E71" />
        <stop offset="1" stopColor="#F44C3C" />
      </linearGradient>
    </defs>
  );
}
