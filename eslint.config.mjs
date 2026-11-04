import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextCoreWebVitals,
  {
    ignores: [".next/**", "out/**", "node_modules/**"],
  },
  {
    // Page copy uses plain apostrophes and quotes; React renders them safely.
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
