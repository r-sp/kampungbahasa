// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    languageOptions: {
      parserOptions: {
        tsconfigDirName: import.meta.dirname,
      },
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    ignores: ["eslint.config.mjs", "next.config.mjs", ".next/**/*.js"],
    ...tseslint.configs.disableTypeChecked,
  },
);
