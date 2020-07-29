import type { PluginItem, TransformOptions } from "@babel/core";
import type { WebOptions } from "./types";
import sharedPlugins from "./shared-plugins";

export default (options: WebOptions): TransformOptions => {
  const {
    modules = "commonjs",
    corejs = 2,
    debug = false,
    targets,
    useBuiltIns = "entry",
    typescript = true,
  } = options;

  const presets: PluginItem[] = [
    [
      require.resolve("@babel/preset-env"),
      {
        corejs,
        debug,
        modules,
        targets,
        useBuiltIns,
      },
    ],
  ];

  if (typescript) {
    presets.push(require.resolve("@babel/preset-typescript"));
  }

  return {
    presets,
    plugins: sharedPlugins(options),
  };
};
