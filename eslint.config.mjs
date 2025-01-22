import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "prefer-const": "off", // Disable 'prefer-const' rule globally
      "@typescript-eslint/no-unused-expressions": "off", // Disable 'no-unused-expressions'
      "@typescript-eslint/no-unused-vars": "warn", // Change 'no-unused-vars' to a warning
      "react-hooks/exhaustive-deps": "off", // Disable exhaustive-deps for React hooks
    },
  },
];

export default eslintConfig;
