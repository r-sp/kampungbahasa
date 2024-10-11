"use client";

import { useState } from "react";
import clsx from "clsx";

export default function SectionColor() {
  const [theme, setTheme] = useState<boolean>(false);

  return (
    <section aria-labelledby="color">
      <h2 id="color">Color</h2>
      <div
        onClick={() => setTheme(!theme)}
        className={clsx("flex select-none flex-wrap", theme ? "dark" : "light")}
      >
        <div className="bg-kb-50 inline-flex px-8 py-4">
          <span className="invert-auto">kb-50</span>
        </div>
        <div className="bg-kb-100 inline-flex px-8 py-4">
          <span className="invert-auto">kb-100</span>
        </div>
        <div className="bg-kb-200 inline-flex px-8 py-4">
          <span className="invert-auto">kb-200</span>
        </div>
        <div className="bg-kb-300 inline-flex px-8 py-4">
          <span className="invert-auto">kb-300</span>
        </div>
        <div className="bg-kb-400 inline-flex px-8 py-4">
          <span className="invert-auto">kb-400</span>
        </div>
        <div className="bg-kb-500 inline-flex px-8 py-4">
          <span className="invert-auto">kb-500</span>
        </div>
        <div className="bg-kb-600 inline-flex px-8 py-4">
          <span className="invert-auto">kb-600</span>
        </div>
        <div className="bg-kb-700 inline-flex px-8 py-4">
          <span className="invert-auto">kb-700</span>
        </div>
        <div className="bg-kb-800 inline-flex px-8 py-4">
          <span className="invert-auto">kb-800</span>
        </div>
        <div className="bg-kb-900 inline-flex px-8 py-4">
          <span className="invert-auto">kb-900</span>
        </div>
        <div className="bg-kb-950 inline-flex px-8 py-4">
          <span className="invert-auto">kb-950</span>
        </div>
        <div className="inline-flex bg-neutral-50 px-8 py-4">
          <span className="invert-auto">neutral-50</span>
        </div>
        <div className="inline-flex bg-neutral-100 px-8 py-4">
          <span className="invert-auto">neutral-100</span>
        </div>
        <div className="inline-flex bg-neutral-200 px-8 py-4">
          <span className="invert-auto">neutral-200</span>
        </div>
        <div className="inline-flex bg-neutral-300 px-8 py-4">
          <span className="invert-auto">neutral-300</span>
        </div>
        <div className="inline-flex bg-neutral-400 px-8 py-4">
          <span className="invert-auto">neutral-400</span>
        </div>
        <div className="inline-flex bg-neutral-500 px-8 py-4">
          <span className="invert-auto">neutral-500</span>
        </div>
        <div className="inline-flex bg-neutral-600 px-8 py-4">
          <span className="invert-auto">neutral-600</span>
        </div>
        <div className="inline-flex bg-neutral-700 px-8 py-4">
          <span className="invert-auto">neutral-700</span>
        </div>
        <div className="inline-flex bg-neutral-800 px-8 py-4">
          <span className="invert-auto">neutral-800</span>
        </div>
        <div className="inline-flex bg-neutral-900 px-8 py-4">
          <span className="invert-auto">neutral-900</span>
        </div>
        <div className="inline-flex bg-neutral-950 px-8 py-4">
          <span className="invert-auto">neutral-950</span>
        </div>
      </div>
    </section>
  );
}
