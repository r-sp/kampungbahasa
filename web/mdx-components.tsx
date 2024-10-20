import { type MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  function proseFiction(
    props: Readonly<{
      children: React.ReactNode;
    }>,
  ) {
    return <article className="prose-fiction">{props.children}</article>;
  }

  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-slate-950 md:text-5xl">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-slate-950 md:text-3xl">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-slate-900 md:text-2xl">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold text-slate-800 md:text-xl">{children}</h4>
    ),
    p: ({ children }) => (
      <p className="my-7 text-base font-normal text-slate-800 md:my-9 md:text-lg">{children}</p>
    ),
    ul: ({ children }) => <ul className="my-7 list-disc pl-6 md:my-9">{children}</ul>,
    ol: ({ children }) => <ol className="my-7 list-decimal pl-6 md:my-9">{children}</ol>,
    li: ({ children }) => (
      <li className="my-4 text-base font-normal text-slate-800 marker:text-slate-600 md:text-lg">
        {children}
      </li>
    ),
    hr: () => <hr className="my-12 border border-solid border-slate-400 md:my-16" />,
    em: ({ children }) => <em className="italic">{children}</em>,
    strong: ({ children }) => (
      <strong className="font-semibold text-slate-900">{children}</strong>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 px-6 text-xl font-medium text-slate-800 md:my-12 md:text-2xl">
        {children}
      </blockquote>
    ),
    pre: ({ children }) => (
      <pre className="my-8 overflow-x-auto whitespace-pre rounded-lg bg-slate-200 px-5 py-4 text-slate-700 md:my-12">
        {children}
      </pre>
    ),
    code: ({ children }) => (
      <code className="text-sm font-semibold text-inherit">{children}</code>
    ),
    table: ({ children }) => (
      <table className="my-8 w-full table-auto md:my-12">{children}</table>
    ),
    thead: ({ children }) => (
      <thead className="border-b border-solid border-b-slate-500">{children}</thead>
    ),
    tbody: ({ children }) => (
      <tbody className="[&>tr:last-child]:border-b-0 [&>tr]:border-b">{children}</tbody>
    ),
    tr: ({ children }) => <tr className="border-solid border-b-slate-400">{children}</tr>,
    th: ({ children }) => (
      <th className="pb-2 text-start text-sm font-semibold text-slate-900">{children}</th>
    ),
    td: ({ children }) => (
      <td className="py-2 text-start text-sm font-normal text-slate-800">{children}</td>
    ),
    ...components,
    wrapper: proseFiction,
  };
}
