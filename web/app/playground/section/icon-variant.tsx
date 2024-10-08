"use client";

import * as Asset from "~/assets/icons";
import { useState } from "react";
import clsx from "clsx";

export default function SectionIconVariant() {
  const [homeIcon, setHomeIcon] = useState<boolean>(true);
  const [searchIcon, setSearchIcon] = useState<boolean>(true);
  const [favoriteIcon, setFavoriteIcon] = useState<boolean>(true);
  const [personIcon, setPersonIcon] = useState<boolean>(true);
  const [bagIcon, setBagIcon] = useState<boolean>(true);
  const [calendarIcon, setCalendarIcon] = useState<boolean>(true);
  const [starIcon, setStarIcon] = useState<boolean>(true);
  const [libraryIcon, setLibraryIcon] = useState<boolean>(true);

  const buttonStyles = "inline-flex items-center justify-center";
  const buttonActive = "text-neutral-800";
  const buttonDisable = "text-neutral-600";
  const iconStyles = "inline-flex h-8 w-8";

  return (
    <section aria-labelledby="icon-variant">
      <h2 id="icon-variant">Icon: Variant</h2>
      <div className="flex max-w-full flex-wrap gap-8">
        <button
          title="home"
          onClick={() => setHomeIcon(!homeIcon)}
          className={clsx(buttonStyles, homeIcon ? buttonDisable : buttonActive)}
        >
          <Asset.IconHome className={iconStyles} outline={homeIcon} />
        </button>
        <button
          title="search"
          onClick={() => setSearchIcon(!searchIcon)}
          className={clsx(buttonStyles, searchIcon ? buttonDisable : buttonActive)}
        >
          <Asset.IconSearch className={iconStyles} outline={searchIcon} />
        </button>
        <button
          title="favorite"
          onClick={() => setFavoriteIcon(!favoriteIcon)}
          className={clsx(buttonStyles, favoriteIcon ? buttonDisable : buttonActive)}
        >
          <Asset.IconFavorite className={iconStyles} outline={favoriteIcon} />
        </button>
        <button
          title="person"
          onClick={() => setPersonIcon(!personIcon)}
          className={clsx(buttonStyles, personIcon ? buttonDisable : buttonActive)}
        >
          <Asset.IconPerson className={iconStyles} outline={personIcon} />
        </button>
        <button
          title="bag"
          onClick={() => setBagIcon(!bagIcon)}
          className={clsx(buttonStyles, bagIcon ? buttonDisable : buttonActive)}
        >
          <Asset.IconBag className={iconStyles} outline={bagIcon} />
        </button>
        <button
          title="calendar"
          onClick={() => setCalendarIcon(!calendarIcon)}
          className={clsx(buttonStyles, calendarIcon ? buttonDisable : buttonActive)}
        >
          <Asset.IconCalendar className={iconStyles} outline={calendarIcon} />
        </button>
        <button
          title="star"
          onClick={() => setStarIcon(!starIcon)}
          className={clsx(buttonStyles, starIcon ? buttonDisable : buttonActive)}
        >
          <Asset.IconStar className={iconStyles} outline={starIcon} />
        </button>
        <button
          title="library"
          onClick={() => setLibraryIcon(!libraryIcon)}
          className={clsx(buttonStyles, libraryIcon ? buttonDisable : buttonActive)}
        >
          <Asset.IconLibrary className={iconStyles} outline={libraryIcon} />
        </button>
      </div>
    </section>
  );
}
