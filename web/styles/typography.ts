import { type PluginUtils } from "tailwindcss/types/config";

export default function typographyStyles({ theme }: PluginUtils) {
  return {
    fiction: {
      css: {
        "--prose-body": theme("colors.slate.700"),
        "--prose-headings": theme("colors.slate.950"),
        "--prose-lead": theme("colors.slate.800"),
        "--prose-links": theme("colors.state.700"),
        "--prose-links-hover": theme("colors.state.800"),
        "--prose-links-focus": theme("colors.state.900"),
        "--prose-bold": theme("colors.slate.900"),
        "--prose-counters": theme("colors.slate.500"),
        "--prose-bullets": theme("colors.slate.500"),
        "--prose-hr": theme("colors.slate.400"),
        "--prose-quotes": theme("colors.slate.800"),
        "--prose-quote-borders": theme("colors.slate.500"),
        "--prose-captions": theme("colors.slate.600"),
        "--prose-kbd": theme("colors.slate.800"),
        "--prose-code": theme("colors.slate.800"),
        "--prose-pre-code": theme("colors.slate.800"),
        "--prose-pre-bg": theme("colors.slate.200"),
        "--prose-th-borders": theme("colors.slate.500"),
        "--prose-td-borders": theme("colors.slate.400"),
        a: {
          color: "var(--prose-links)",
          "&:hover": {
            color: "var(--prose-links-hover)",
          },
          "&:focus": {
            color: "var(--prose-links-focus)",
          },
        },
      },
    },
  };
}
