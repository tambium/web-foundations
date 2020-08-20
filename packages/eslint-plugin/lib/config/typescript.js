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
      rules: require("./rules/typescript"),
    },
  ],
};
