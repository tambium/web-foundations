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

  plugins: ["react", "react-hooks"],

  rules: {
    ...require("./rules/react"),
    ...require("./rules/react-hooks"),
  },

  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: require("./rules/react-typescript"),
    },
  ],
};
