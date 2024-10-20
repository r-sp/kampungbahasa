import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Course",
  alternates: {
    canonical: "/course",
  },
};

export default function CoursePage() {
  const ItemCourse = (props: { en: string; id: string }) => {
    const slugify = (lang: string, useLocal: boolean) => {
      const url = lang.toLowerCase();
      const slug = useLocal ? `/kursus-bahasa-${url}` : `/${url}-course`;
      return slug;
    };
    const textify = (lang: string, useLocal: boolean) => {
      const text = useLocal ? `Kursus Bahasa ${lang}` : `${lang} Course`;
      return text;
    };

    return (
      <li key={props.en.toLowerCase()} aria-label={props.en.toLowerCase()}>
        <Link className="text-slate-700" href={slugify(props.id, true)} lang="id" tabIndex={-1}>
          {textify(props.id, true)}
        </Link>
        <span className="text-slate-500"> / </span>
        <Link className="text-state-700" href={slugify(props.en, false)} lang="en">
          {textify(props.en, false)}
        </Link>
      </li>
    );
  };
  return (
    <>
      <h1 className="text-4xl font-bold sm:text-5xl">Course</h1>
      <ul className="mt-4 flex flex-col gap-6 text-base tracking-wide">
        <ItemCourse en="Arabic" id="Arab" />
        <ItemCourse en="Dutch" id="Belanda" />
        <ItemCourse en="English" id="Inggris" />
        <ItemCourse en="French" id="Prancis" />
        <ItemCourse en="German" id="Jerman" />
        <ItemCourse en="Indonesia" id="Indonesia" />
        <ItemCourse en="Japanese" id="Jepang" />
        <ItemCourse en="Korean" id="Korea" />
        <ItemCourse en="Mandarin" id="Mandarin" />
        <ItemCourse en="Russian" id="Rusia" />
        <ItemCourse en="Spanish" id="Spanyol" />
        <li>
          <Link className="text-state-700" href="/typography">
            The Ultimate Guide To CEFR Language Levels: From A1 To C2
          </Link>
        </li>
      </ul>
    </>
  );
}
