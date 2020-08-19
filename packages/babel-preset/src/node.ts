import type { ConfigAPI, PluginItem, TransformOptions } from "@babel/core";
import type { WebOptions } from "./types";
import sharedPlugins from "./shared-plugins";

export default (_api: ConfigAPI, options: WebOptions): TransformOptions => {
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

  const plugins = [
    ...sharedPlugins(options),
    require.resolve("@babel/plugin-proposal-dynamic-import"),
    require.resolve("@babel/plugin-transform-modules-commonjs"),
  ];

  if (typescript) {
    presets.push(require.resolve("@babel/preset-typescript"));
  }

  return {
    presets,
    plugins,
  };
};
