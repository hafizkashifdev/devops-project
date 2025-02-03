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
      "no-undef": "off", // Disable 'no-undef' rule
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // Ignore unused variables prefixed with "_"
      "no-useless-escape": "off", // Disable 'no-useless-escape' rule
      "no-empty": "off", // Disable 'no-empty' rule
      "no-shadow-restricted-names": "off", // Disable 'no-shadow-restricted-names' rule
      "no-extra-semi": "off", // Disable 'no-extra-semi' rule
      "no-prototype-builtins": "off", // Disable 'no-prototype-builtins' rule
      "no-cond-assign": "off", // Disable 'no-cond-assign' rule
      "no-func-assign": "off", // Disable 'no-func-assign' rule
      "no-self-assign": "off", // Disable 'no-self-assign' rule
      "no-control-regex": "off", // Disable 'no-control-regex' rule
    },
  };