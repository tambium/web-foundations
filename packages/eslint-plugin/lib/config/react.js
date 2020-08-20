module.exports = {
  settings: {
    react: {
      version: "detect",
    },
  },

  env: {
    browser: true,
  },

  parserOptions: {
    ecmaFeatures: { jsx: true },
  },

  plugins: ["react", "jsx-a11y", "react-hooks"],

  rules: {
    ...require("./rules/react"),
    ...require("./rules/jsx-a11y"),
    ...require("./rules/react-hooks"),
  },

  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: require("./rules/react-typescript"),
    },
  ],
};
