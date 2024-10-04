import clsx from "clsx";

type IconProps = {
  color?: string;
  outline?: boolean;
};

export function HomeIcon({
  className,
  color = "currentColor",
  outline = true,
  ...rest
}: IconProps & React.ComponentPropsWithoutRef<"svg">) {
  const HomeIconFill =
    "M28 14.9367V27C28 27.5523 27.5523 28 27 28H20C19.4477 28 19 27.5523 19 27V20C19 18.3431 17.6569 17 16 17C14.3431 17 13 18.3431 13 20V27C13 27.5523 12.5523 28 12 28H5C4.44772 28 4 27.5523 4 27V14.9367C4 14.3432 4.26365 13.7803 4.71963 13.4003L16 4L27.2804 13.4003C27.7364 13.7803 28 14.3432 28 14.9367Z";
  const HomeIconOutline =
    "M12 20C12 17.7909 13.7909 16 16 16V16C18.2091 16 20 17.7909 20 20V26H26V15.8735C26 15.2799 25.7364 14.717 25.2804 14.3371L16 6.60342L6.71963 14.3371C6.26365 14.717 6 15.2799 6 15.8735V26H12V20ZM14 27C14 27.5523 13.5523 28 13 28H5C4.44772 28 4 27.5523 4 27V14.9367C4 14.3432 4.26365 13.7803 4.71963 13.4003L16 4L27.2804 13.4003C27.7364 13.7803 28 14.3432 28 14.9367V27C28 27.5523 27.5523 28 27 28H19C18.4477 28 18 27.5523 18 27V20C18 18.8954 17.1046 18 16 18V18C14.8954 18 14 18.8954 14 20V27Z";

  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d={clsx(outline ? HomeIconOutline : HomeIconFill)}
      />
      <title>Home</title>
    </svg>
  );
}

export function SearchIcon({
  className,
  color = "currentColor",
  outline = true,
  ...rest
}: IconProps & React.ComponentPropsWithoutRef<"svg">) {
  const SearchIconFill =
    "M19.9855 21.8868C18.3123 23.1607 16.2237 23.917 13.9585 23.917C8.45857 23.917 4 19.4584 4 13.9585C4 8.45857 8.45857 4 13.9585 4C19.4584 4 23.917 8.45857 23.917 13.9585C23.917 16.2237 23.1607 18.3123 21.8868 19.9855L27.6062 25.705C28.1313 26.23 28.1313 27.0812 27.6062 27.6062C27.0812 28.1313 26.23 28.1313 25.705 27.6062L19.9855 21.8868ZM21.2282 13.9585C21.2282 17.9735 17.9735 21.2282 13.9585 21.2282C9.94356 21.2282 6.6888 17.9735 6.6888 13.9585C6.6888 9.94356 9.94356 6.6888 13.9585 6.6888C17.9735 6.6888 21.2282 9.94356 21.2282 13.9585Z";
  const SearchIconOutline =
    "M20.3287 21.7429C18.6049 23.1536 16.4013 24 14 24C8.47715 24 4 19.5228 4 14C4 8.47715 8.47715 4 14 4C19.5228 4 24 8.47715 24 14C24 16.4013 23.1536 18.6049 21.7429 20.3287L27.7071 26.2929C28.0976 26.6834 28.0976 27.3166 27.7071 27.7071C27.3166 28.0976 26.6834 28.0976 26.2929 27.7071L20.3287 21.7429ZM22 14C22 18.4183 18.4183 22 14 22C9.58172 22 6 18.4183 6 14C6 9.58172 9.58172 6 14 6C18.4183 6 22 9.58172 22 14Z";

  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d={clsx(outline ? SearchIconOutline : SearchIconFill)}
      />
      <title>Search</title>
    </svg>
  );
}

export function CourseIcon({
  className,
  color = "currentColor",
  outline = true,
  ...rest
}: IconProps & React.ComponentPropsWithoutRef<"svg">) {
  const CourseIconCapFill =
    "M31 12L16 3L1 12L16 21L29 13.2V20C29 20.5523 29.4477 21 30 21C30.5523 21 31 20.5523 31 20V12Z";
  const CourseIconGradeFill =
    "M26 21.3014C26 22.3552 25.4471 23.3317 24.5435 23.8738L16 28.9999L7.45651 23.8738C6.5529 23.3317 6 22.3552 6 21.3014V16.5L16 22.5L26 16.5V21.3014Z";
  const CourseIconCapOutline =
    "M1 12L16 3L31 12V20C31 20.5523 30.5523 21 30 21C29.4477 21 29 20.5523 29 20V13.2L16 21L1 12ZM16 18.6676L4.8873 12L16 5.33238L27.1127 12L16 18.6676Z";
  const CourseIconGradeOutline =
    "M16 18.667L6 12.667V21.8676C6 22.5701 6.3686 23.2212 6.97101 23.5826L16 29L25.029 23.5826C25.6314 23.2212 26 22.5701 26 21.8676V12.667L16 18.667ZM24 16.1994L16 20.9994L8 16.1994V21.3014C8 21.6527 8.1843 21.9782 8.4855 22.1589L16 26.6676L23.5145 22.1589C23.8157 21.9782 24 21.6527 24 21.3014V16.1994Z";

  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d={clsx(outline ? CourseIconCapOutline : CourseIconCapFill)}
      />
      <path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d={clsx(outline ? CourseIconGradeOutline : CourseIconGradeFill)}
      />
      <title>Course</title>
    </svg>
  );
}

export function ActivityIcon({
  className,
  color = "currentColor",
  outline = true,
  ...rest
}: IconProps & React.ComponentPropsWithoutRef<"svg">) {
  const ActivityIconFill =
    "M16 6.50003C15.5786 6.02592 15.1174 5.61996 14.6278 5.28029C10.8006 2.62529 5.23358 4.02082 3.29714 8.5853L3.14744 8.93815C1.85797 11.9776 2.60601 15.499 5.01973 17.7518L13.953 26.0895C15.1056 27.1653 16.8943 27.1653 18.0469 26.0895L26.9802 17.7518C29.3939 15.499 30.142 11.9776 28.8525 8.93815L28.7028 8.58529C26.7664 4.02082 21.1993 2.62529 17.3722 5.28029C16.8826 5.61996 16.4214 6.02592 16 6.50003Z";
  const ActivityIconOutline =
    "M14.6278 5.28029C15.1174 5.61996 15.5786 6.02592 16 6.50003C16.4214 6.02592 16.8826 5.61996 17.3722 5.28029C21.1993 2.62529 26.7664 4.02082 28.7028 8.58529L28.8525 8.93815C30.142 11.9776 29.3939 15.499 26.9802 17.7518L18.0469 26.0895C16.8943 27.1653 15.1056 27.1653 13.953 26.0895L5.01973 17.7518C2.60601 15.499 1.85797 11.9776 3.14744 8.93815L3.29714 8.5853C5.23358 4.02082 10.8006 2.62529 14.6278 5.28029ZM14.6353 23.9906C15.4038 24.7078 16.5962 24.7078 17.3646 23.9906L25.6156 16.2897C27.415 14.6103 27.9726 11.9851 27.0114 9.71925L26.8617 9.36639C25.2511 5.57003 20.2346 4.74653 17.4948 7.82875L16.7474 8.66959C16.3496 9.1171 15.6504 9.1171 15.2526 8.66959L14.5052 7.82875C11.7654 4.74653 6.74888 5.57003 5.1383 9.3664L4.98861 9.71925C4.02732 11.9851 4.58498 14.6103 6.38437 16.2897L14.6353 23.9906Z";

  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d={clsx(outline ? ActivityIconOutline : ActivityIconFill)}
      />
      <title>Activity</title>
    </svg>
  );
}

export function ProfileIcon({
  className,
  color = "currentColor",
  outline = true,
  ...rest
}: IconProps & React.ComponentPropsWithoutRef<"svg">) {
  const ProfileIconHeadFill =
    "M15.9999 16C19.3136 16 21.9999 13.3137 21.9999 10C21.9999 6.68629 19.3136 4 15.9999 4C12.6862 4 9.99994 6.68629 9.99994 10C9.99994 13.3137 12.6862 16 15.9999 16Z";
  const ProfileIconBodyFill =
    "M24.0564 28C26.7322 28 28.6186 25.3672 26.9499 23.2756C24.3847 20.0603 20.433 18 16 18C11.5671 18 7.61535 20.0603 5.05017 23.2756C3.3814 25.3672 5.26784 28 7.94363 28H24.0564Z";
  const ProfileIconHeadOutline =
    "M22 10C22 13.3137 19.3137 16 16 16C12.6863 16 10 13.3137 10 10C10 6.68629 12.6863 4 16 4C19.3137 4 22 6.68629 22 10ZM20 10C20 12.2091 18.2091 14 16 14C13.7909 14 12 12.2091 12 10C12 7.79086 13.7909 6 16 6C18.2091 6 20 7.79086 20 10Z";
  const ProfileIconBodyOutline =
    "M26.9499 23.2756C28.6186 25.3672 26.7322 28 24.0564 28H7.94363C5.26784 28 3.3814 25.3672 5.05017 23.2756C7.61535 20.0603 11.5671 18 16 18C20.433 18 24.3847 20.0603 26.9499 23.2756ZM24.0564 26H7.94363C7.25307 26 6.75748 25.6599 6.54481 25.3326C6.4441 25.1775 6.41835 25.0482 6.4211 24.9553C6.42349 24.8747 6.44867 24.7296 6.61357 24.5229C8.81559 21.7628 12.2013 20 16 20C19.7987 20 23.1844 21.7628 25.3865 24.5229C25.5514 24.7296 25.5765 24.8747 25.5789 24.9553C25.5817 25.0482 25.5559 25.1775 25.4552 25.3326C25.2426 25.6599 24.747 26 24.0564 26Z";

  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d={clsx(outline ? ProfileIconHeadOutline : ProfileIconHeadFill)}
      />
      <path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d={clsx(outline ? ProfileIconBodyOutline : ProfileIconBodyFill)}
      />
      <title>Profile</title>
    </svg>
  );
}
