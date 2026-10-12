import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";
import fsdPlugin from "eslint-plugin-fsd-lint";

export default tseslint.config(
  { ignores: ["dist", "node_modules", "src-tauri/target"] },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  fsdPlugin.configs.recommended,

  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      prettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // Точка с запятой — обязательно (дублируем, чтобы ESLint тоже ругался)
      "prettier/prettier": "error",

      // Полезные правила для пет-проекта
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports" },
      ],
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },

  // Отключаем правила ESLint, конфликтующие с Prettier (должно быть последним)
  prettierConfig,
);
