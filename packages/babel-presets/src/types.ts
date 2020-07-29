export interface WebOptions {
  /**
   * @description Sets `corejs` version used in `@babel/preset-env`.
   * @default 2
   */
  corejs?: number | string;
  /**
   * @description Boolean indicating whether `@babel/preset-env` debugging is enabled.
   * @default false
   */
  debug?: boolean;
  /**
   * @description Boolean indicating whether native ES2015 modules should be transpiled to CommonJS equivalents. Set this option to false when using a bundler like Rollup or Webpack.
   * @default true
   */
  modules?: boolean;
  /**
   * @description Browserlist string or array, which specifies which browsers to transpile for.
   */
  targets?: string | string[];
  /**
   * @description Boolean indicating whether `@babel/preset-typescript` is enabled.
   * @default true
   */
  typescript?: boolean;
  /**
   * @description Configures how `@babel/preset-env` handles polyfills.
   * @default entry
   */
  useBuiltIns?: "usage" | false | "entry";
}
