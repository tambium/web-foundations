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

  rules: {
    ...require("./rules/ecmascript-6"),
    ...require("./rules/promise"),
    ...require("./rules/babel"),
    ...require("./rules/import"),
  },
};
