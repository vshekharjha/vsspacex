module.exports = {
  env: {
    browser: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "prefer-arrow", "unicorn"],
  rules: {
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": "off", // turning this off as previous code was not having this rule
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/class-name-casing": "error",
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        accessibility: "off", // turning this off as previous code was not having this rule
      },
    ],
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/interface-name-prefix": [
      "off", // fixme:we need to fix all of these
      {
        prefixWithI: "always",
      },
    ],
    "@typescript-eslint/member-delimiter-style": [
      "off",
      {
        multiline: {
          delimiter: "none",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: false,
        },
      },
    ],
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-var-requires": "off", // turning off as our code already dangling underscores
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/semi": ["off", null],
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/type-annotation-spacing": "off",
    "@typescript-eslint/unified-signatures": "error",
    "arrow-parens": ["off", "as-needed"],
    camelcase: "off", // turning off as our code already has snake case identifiers
    "comma-dangle": "off",
    complexity: "off",
    "constructor-super": "error",
    "dot-notation": "off", // turning off as our code already dangling underscores
    "eol-last": "off",
    eqeqeq: ["error", "smart"],
    "guard-for-in": "error",
    "id-blacklist": [
      "error",
      // "any", we can trun this later
      "Number",
      // "number", we can trun this later
      "String",
      // "string", we can trun this later
      "Boolean",
      // "boolean", we can trun this later
      "Undefined",
      // "undefined" we can trun this later
    ],
    "id-match": "error",
    "linebreak-style": "off",
    "max-classes-per-file": ["error", 1],
    "max-len": "off",
    "new-parens": "off",
    "newline-per-chained-call": "off",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-cond-assign": "error",
    "no-console": "error",
    "no-debugger": "error",
    "no-empty": "error",
    "no-eval": "error",
    "no-extra-semi": "off",
    "no-fallthrough": "off",
    "no-invalid-this": "off",
    "no-irregular-whitespace": "off",
    "no-multiple-empty-lines": "off",
    "no-new-wrappers": "error",
    "no-shadow": [
      "error",
      {
        hoist: "all",
      },
    ],
    "no-throw-literal": "error",
    "no-trailing-spaces": "off",
    "no-undef-init": "error",
    "no-underscore-dangle": "off", // turning off as our code already dangling underscores
    "no-unsafe-finally": "error",
    "no-unused-expressions": "off",
    "no-unused-labels": "error",
    "no-var": "off", // turning off as our code already dangling underscores
    "object-shorthand": "off", // turning off as our code already dangling underscores
    "one-var": ["error", "never"],
    "prefer-arrow/prefer-arrow-functions": [
      "off", // need to fix in future
      {
        disallowPrototype: false,
        singleReturnOnly: true,
        classPropertiesAllowed: true,
      },
    ],
    "prefer-const": "off",
    "quote-props": "off",
    radix: "error",
    "space-before-function-paren": "off",
    "space-in-parens": ["off", "never"],
    "spaced-comment": "off", // need to fix in future
    "unicorn/filename-case": [
      "error",
      {
        case: "camelCase",
        ignore: ["[a-z]+((d)|([A-Z0-9][A-Za-z0-9]+))*([A-Z])?"],
      },
    ],
    "use-isnan": "error",
    "valid-typeof": "off",
  },
};
