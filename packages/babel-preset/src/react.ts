import type { ConfigAPI, PluginItem, TransformOptions } from "@babel/core";
import type { ReactOptions } from "./types";

export default (api: ConfigAPI, options: ReactOptions): TransformOptions => {
  const { emotion = true } = options;

  const env = api.env();
  const isDevelopment = env === "development" || env === "test";

  const plugins: PluginItem[] = [];

  const presets: PluginItem[] = [
    [
      require.resolve("@babel/preset-react"),
      {
        useBuiltIns: true,
        development: isDevelopment,
      },
    ],
  ];

  if (emotion) {
    presets.push(require.resolve("@emotion/babel-preset-css-prop"));
  }

  return {
    presets,
    plugins,
  };
};
