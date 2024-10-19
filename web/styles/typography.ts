export default function typographyStyles() {
  const round = (num: number) =>
    num
      .toFixed(7)
      .replace(/(\.[0-9]+?)0+$/, "$1")
      .replace(/\.0$/, "");
  const rem = (px: number) => `${round(px / 16)}rem`;
  const em = (px: number) => `${round(px / 16)}em`;

  return {
    fiction: {
      css: {
        h1: {
          color: "var(--slate-950)",
          fontSize: rem(48),
          lineHeight: rem(48),
          fontWeight: 700,
          letterSpacing: em(0.2),
        },
        h2: {
          color: "var(--slate-950)",
          fontSize: rem(32),
          lineHeight: rem(40),
          fontWeight: 700,
          letterSpacing: 0,
        },
        h3: {
          color: "var(--slate-900)",
          fontSize: rem(24),
          lineHeight: rem(32),
          fontWeight: 600,
          letterSpacing: 0,
        },
        h4: {
          color: "var(--slate-800)",
          fontSize: rem(16),
          lineHeight: rem(24),
          fontWeight: 600,
          letterSpacing: em(0.4),
        },
        p: {
          color: "var(--slate-700)",
          fontSize: rem(16),
          lineHeight: rem(24),
          fontWeight: 400,
          letterSpacing: em(0.6),
          marginTop: rem(24),
          marginBottom: rem(24),
          maxWidth: "65ch",
        },
        img: {
          maxWidth: "100%",
        },
        figure: {
          maxWidth: "100%",
          overflowX: "auto",
        },
        figcaption: {
          color: "var(--slate-600)",
          fontSize: rem(14),
          lineHeight: rem(22),
          fontWeight: 400,
          letterSpacing: em(0.6),
          marginTop: rem(8),
        },
        ol: {
          listStyleType: "decimal",
          marginTop: rem(24),
          marginBottom: rem(24),
          paddingLeft: rem(24),
        },
        ul: {
          listStyleType: "disc",
          marginTop: rem(24),
          marginBottom: rem(24),
          paddingLeft: rem(24),
        },
        li: {
          color: "var(--slate-700)",
          fontSize: rem(16),
          lineHeight: rem(24),
          fontWeight: 400,
          letterSpacing: em(0.6),
          marginTop: rem(16),
          marginBottom: rem(16),
        },
        "ul>li::marker, ol>li::marker": {
          color: "var(--slate-600)",
          fontWeight: 500,
        },
        dt: {
          color: "var(--slate-800)",
          fontSize: rem(16),
          lineHeight: rem(24),
          fontWeight: 600,
          letterSpacing: em(0.2),
          marginTop: rem(24),
        },
        dd: {
          color: "var(--slate-700)",
          fontSize: rem(16),
          lineHeight: rem(24),
          fontWeight: 400,
          letterSpacing: em(0.6),
          marginTop: rem(16),
          paddingLeft: rem(24),
        },
        table: {
          borderCollapse: "collapse",
          borderSpacing: 0,
          tableLayout: "fixed",
          width: "100%",
        },
        thead: {
          borderColor: "var(--slate-500)",
          borderStyle: "solid",
          borderBottomWidth: "1px",
        },
        th: {
          color: "var(--slate-800)",
          fontSize: rem(14),
          lineHeight: rem(22),
          fontWeight: 600,
          letterSpacing: em(0.2),
          paddingBottom: rem(8),
          textAlign: "start",
        },
        td: {
          color: "var(--slate-700)",
          fontSize: rem(14),
          lineHeight: rem(22),
          fontWeight: 400,
          letterSpacing: em(0.6),
          paddingTop: rem(8),
          paddingBottom: rem(8),
          textAlign: "start",
        },
        "tbody tr": {
          borderColor: "var(--slate-400)",
          borderStyle: "solid",
          borderBottomWidth: "1px",
        },
        "tbody tr:last-child": {
          borderBottomWidth: 0,
        },
        blockquote: {
          color: "var(--slate-800)",
          fontSize: rem(20),
          lineHeight: rem(28),
          fontWeight: 600,
          letterSpacing: em(0.2),
          paddingLeft: rem(24),
          paddingRight: rem(24),
        },
        "blockquote>p:first-of-type::before": {
          content: "open-quote",
        },
        "blockquote>p:last-of-type::after": {
          content: "close-quote",
        },
        pre: {
          backgroundColor: "var(--slate-200)",
          color: "var(--slate-700)",
          borderRadius: rem(8),
          maxWidth: "100%",
          overflowX: "auto",
          paddingTop: rem(16),
          paddingBottom: rem(16),
          paddingLeft: rem(24),
          paddingRight: rem(24),
          whiteSpace: "pre",
        },
        code: {
          color: "inherit",
          fontFamily: "monospace",
          fontSize: rem(14),
          lineHeight: rem(22),
          fontWeight: 600,
          letterSpacing: em(0.2),
        },
        hr: {
          borderColor: "var(--slate-400)",
          borderStyle: "solid",
          borderWidth: "1px",
          marginTop: rem(48),
          marginBottom: rem(48),
        },
        strong: {
          color: "var(--slate-800)",
          fontWeight: 600,
          letterSpacing: em(0.2),
        },
        em: {
          fontStyle: "italic",
          letterSpacing: 0,
        },
        a: {
          color: "var(--state-700)",
          textDecoration: "underline transparent",
          "&:hover": {
            color: "var(--state-800)",
            textDecorationColor: "var(--state-700)",
          },
          "&:focus": {
            color: "var(--state-900)",
            textDecorationColor: "var(--state-800)",
          },
        },
        "h1+*, h2+*, h3+*, h4+*": {
          marginTop: rem(16),
        },
        "p+h2, p+h3": {
          marginTop: rem(48),
        },
        "p+h4, pre+*, figure+*, table+*, dl+*, picture+*": {
          marginTop: rem(32),
        },
        "li>ul, li>ol, li>p, blockquote>p": {
          marginTop: rem(16),
          marginBottom: rem(16),
        },
        "li>p:last-child": {
          marginBottom: rem(24),
        },
        "figure, dl, table, pre, blockquote": {
          marginTop: rem(32),
          marginBottom: rem(32),
        },
        "blockquote>p": {
          color: "inherit",
          fontSize: "inherit",
          lineHeight: "inherit",
          fontWeight: "inherit",
          letterSpacing: "inherit",
        },
        "h1>code, h2>code, h3>code, h4>code, blockquote>p>code": {
          fontSize: "inherit",
          lineHeight: "inherit",
          fontWeight: "inherit",
        },
      },
    },
  };
}
