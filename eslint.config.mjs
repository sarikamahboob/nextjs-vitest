import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "no-unused-vars": "off", 
      "unused-imports/no-unused-imports": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "import/no-unused-modules": "off",
      "no-unused-imports": "off",
      "@typescript-eslint/no-unused-imports": "off",
    },
  },
];

export default eslintConfig;
