export interface ReactOptions {
  /**
   * @description Boolean indicating whether `@emotion/babel-preset-css-prop` is enabled.
   * @default true
   */
  emotion?: boolean;
}

export interface WebOptions {
  /**
   * @description Sets `corejs` version used in `@babel/preset-env`.
   * @default 2
   */
  corejs?: number | string;
  /**
   * @description Boolean indicating whether `@babel/preset-env` outputs the targets/plugins used and the version specified in plugin data version to console.log.
   * @default false
   */
  debug?: boolean;
  /**
   * @description Enable transformation of ES6 module syntax to another module type. Setting this to false will not transform modules. Also note that cjs is just an alias for commonjs.
   * @default false
   */
  modules?: "amd" | "umd" | "systemjs" | "commonjs" | "cjs" | "auto" | false;
  /**
   * @description Describes the environments supported by project.
   */
  targets?:
    | string
    | Array<string>
    | {
        browsers?: string | Array<string>;
      };
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
