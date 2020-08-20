module.exports = {
  extends: "plugin:@tambium/core",
  parser: "babel-eslint",

  env: {
    es6: true,
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },

  plugins: ["@babel", "promise", "import"],

  settings: {
    "import/ignore": ["node_modules"],
  },

  rules: [
    "./rules/ecmascript-6",
    "./rules/promise",
    "./rules/babel",
    "./rules/import",
  ].map(require.resolve),
};
