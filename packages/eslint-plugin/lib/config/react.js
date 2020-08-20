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

  rules: ["./rules/react", "./rules/jsx-a11y", "./rules/react-hooks"].map(
    require.resolve
  ),

  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: require("./rules/react-typescript"),
    },
  ],
};
