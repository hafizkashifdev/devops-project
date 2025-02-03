module.exports = {
  env: {
    browser: true, // For browser globals like 'window' and 'document'
    node: true, // For Node.js globals like 'require' and 'module'
    es2021: true, // Enables ES2021 features (e.g., async/await, logical assignment operators)
    jquery: true, // For jQuery global variables
  },
  extends: [
    "eslint:recommended", // ESLint's recommended rules
    "plugin:react/recommended", // React-specific linting rules
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Enable JSX support for React
    },
    ecmaVersion: 12, // Use ECMAScript 2021 (ES12) syntax
    sourceType: "module", // Use ECMAScript modules (import/export)
  },
  plugins: [
    "react", // Include React plugin for JSX linting
  ],
  rules: {
    "no-undef": ["error", { typeof: true }], // Ensure that undefined variables like 'jQuery' are recognized
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // Ignore unused variables prefixed with "_"
    "no-useless-escape": "warn", // Warn about unnecessary escape characters in regex
    "no-empty": "warn", // Warn about empty block statements
    "no-shadow-restricted-names": "warn", // Warn about shadowing restricted global variables like 'undefined'
    "no-extra-semi": "warn", // Warn about unnecessary semicolons
    "no-prototype-builtins": "warn", // Warn about calling `hasOwnProperty` on potentially null objects
  },
};
