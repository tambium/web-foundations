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

  plugins: ["react", "jsx-a11y", "react-hooks", "@tambium"],

  rules: {},

  overrides: [],
};
