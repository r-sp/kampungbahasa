"use client";

import clsx from "clsx";
import React from "react";

export default function SectionColor() {
  function BoxColor({
    text,
    className,
  }: { text: string } & React.ComponentPropsWithoutRef<"div">) {
    return (
      <li className="inline-flex w-full flex-col items-center gap-y-1">
        <div className={clsx("h-14 min-w-full rounded-lg max-sm:min-w-14", className)}></div>
        <span className="text-sm text-slate-600">{text}</span>
      </li>
    );
  }

  return (
    <section className="grid gap-4" aria-labelledby="color">
      <h2 className="text-xl font-bold text-slate-800" id="color">
        Color
      </h2>
      <ul className="flex max-w-full gap-x-1 overflow-x-auto">
        <BoxColor className="bg-slate-50" text="50" />
        <BoxColor className="bg-slate-100" text="100" />
        <BoxColor className="bg-slate-200" text="200" />
        <BoxColor className="bg-slate-300" text="300" />
        <BoxColor className="bg-slate-400" text="400" />
        <BoxColor className="bg-slate-500" text="500" />
        <BoxColor className="bg-slate-600" text="600" />
        <BoxColor className="bg-slate-700" text="700" />
        <BoxColor className="bg-slate-800" text="800" />
        <BoxColor className="bg-slate-900" text="900" />
        <BoxColor className="bg-slate-950" text="950" />
      </ul>
    </section>
  );
}
