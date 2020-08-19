import type { PluginItem } from "@babel/core";
import type { NodeOptions, WebOptions } from "./types";

export default ({}: NodeOptions | WebOptions): PluginItem[] => {
  const plugins: PluginItem[] = [];

  plugins.push(
    [require.resolve("@babel/plugin-proposal-optional-chaining")],
    [require.resolve("@babel/plugin-proposal-class-properties")]
  );

  return plugins;
};
