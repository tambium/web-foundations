module.exports = {
  rules: {},

  configs: {
    core: require("./lib/config/core"),
    esnext: require("./lib/config/esnext"),
    react: require("./lib/config/react"),
    typescript: require("./lib/config/typescript"),

    graphql: require("./lib/config/graphql"),
    node: require("./lib/config/node"),

    prettier: require("./lib/config/prettier"),
  },
};
