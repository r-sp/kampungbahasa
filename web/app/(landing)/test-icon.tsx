"use client";

import { useState } from "react";
import {
  HomeIcon,
  SearchIcon,
  CourseIcon,
  ActivityIcon,
  ProfileIcon,
} from "~/components/icons";

export default function TestIcon() {
  const [isActive, setIsActive] = useState(false);
  const switchIcon = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="grid gap-y-2">
      <button onClick={switchIcon}>Switch icon {isActive ? "fill" : "outline"}</button>
      <div className="flex max-w-80">
        <HomeIcon outline={isActive} />
        <SearchIcon outline={isActive} />
        <CourseIcon outline={isActive} />
        <ActivityIcon outline={isActive} />
        <ProfileIcon outline={isActive} />
      </div>
    </div>
  );
}
