import type { PluginItem } from "@babel/core";
import type { WebOptions } from "./types";

export const sharedPlugins = ({}: WebOptions) => {
  const plugins: PluginItem[] = [];

  plugins.push(
    [require.resolve("@babel/plugin-proposal-optional-chaining")],
    [require.resolve("@babel/plugin-proposal-class-properties")]
  );
};
