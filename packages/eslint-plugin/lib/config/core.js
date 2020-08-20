module.exports = {
  plugins: ["@tambium"],

  parserOptions: {
    ecmaFeatures: {
      ecmaVersion: 5,
    },
  },

  rules: [
    "./rules/best-practices",
    "./rules/possible-errors",
    "./rules/strict-mode",
    "./rules/stylistic-issues",
    "./rules/variables",
  ].map(require.resolve),
};
