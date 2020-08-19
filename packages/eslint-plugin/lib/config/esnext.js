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

  plugins: ["@babel", "import"],

  settings: {
    "import/ignore": ["node_modules"],
  },

  rules: {},
};
