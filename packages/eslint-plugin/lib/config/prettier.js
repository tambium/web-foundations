module.exports = {
  extends: ["prettier"],

  plugins: ["prettier"],

  rules: require("./rules/prettier"),

  overrides: [
    {
      files: ["*.graphql", "*.gql"],
      rules: {
        "prettier/prettier": "off",
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      rules: require("./rules/prettier-typescript"),
    },
  ],
};
