module.exports = {
  plugins: ["@tambium"],

  parserOptions: {
    ecmaFeatures: {
      ecmaVersion: 5,
    },
  },

  rules: {
    ...require("./rules/best-practices"),
    ...require("./rules/possible-errors"),
    ...require("./rules/strict-mode"),
    ...require("./rules/stylistic-issues"),
    ...require("./rules/variables"),
  },
};
