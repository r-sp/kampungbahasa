import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
  eslintConfigPrettier,
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
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
