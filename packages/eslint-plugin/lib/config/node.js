module.exports = {
  env: {
    node: true,
  },

  plugins: ["node"],

  rules: {
    ...require("./rules/node"),
    "no-console": "off",
    "no-process-env": "off",
  },
};
