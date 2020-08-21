module.exports = {
  extends: ["plugin:@tambium/esnext", "plugin:import/typescript"],

  plugins: ["@typescript-eslint"],

  overrides: [
    {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
      },
      files: ["*.ts", "*.tsx"],
      rules: {
        ...require("./rules/typescript"),

        // handled by TypeScript
        "brace-style": "off",
        "func-call-spacing": "off",
        "no-array-constructor": "off",
        "no-const-assign": "off",
        "no-dupe-args": "off",
        "no-dupe-keys": "off",
        "no-empty-function": "off",
        "no-extra-parens": "off",
        "no-magic-numbers": "off",
        "no-new-symbol": "off",
        "no-redeclare": "off",
        "no-shadow": "off",
        "no-this-before-super": "off",
        "no-undef": "off",
        "no-unreachable": "off",
        "no-unused-expressions": "off",
        "no-unused-vars": "off",
        "no-use-before-define": "off",
        "no-useless-constructor": "off",
        "require-await": "off",
        "valid-typeof": "off",
        camelcase: "off",
        indent: "off",
        quotes: "off",
        semi: "off",

        // no support for TypeScript equivalent
        "import/no-unresolved": "off",

        // causes issues with @typescript-eslint/parser
        "array-callback-return": "off",
        "getter-return": "off",
        strict: "off",
      },
    },
  ],
};
