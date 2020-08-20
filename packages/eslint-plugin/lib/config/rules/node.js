/*
 * Rules for Node.js
 * https://github.com/mysticatea/eslint-plugin-node
 */

module.exports = {
  // possible errors

  // require error handling in callbacks
  "node/handle-callback-err": "error",
  // ensure Node.js-style error-first callback pattern is followed
  "node/no-callback-literal": "error",
  // disallow the assignment to exports
  "node/no-exports-assign": "error",
  // disallow import declarations which import extraneous modules
  "node/no-extraneous-import": "off",
  // disallow require() expressions which import extraneous modules
  "node/no-extraneous-require": "off",
  // disallow import declarations which import non-existence modules
  "node/no-missing-import": "off",
  // disallow require() expressions which import non-existence modules
  "node/no-missing-require": "off",
  // disallow new operators with calls to require
  "node/no-new-require": "error",
  // disallow string concatenation with __dirname and __filename
  "node/no-path-concat": "error",
  // disallow the use of process.exit()
  "node/no-process-exit": "off",
  // disallow bin files that npm ignores
  "node/no-unpublished-bin": "error",
  // disallow import declarations which import private modules
  "node/no-unpublished-import": "off",
  // disallow require() expressions which import private modules
  "node/no-unpublished-require": "off",
  // disallow unsupported ECMAScript built-ins on the specified version
  "node/no-unsupported-features/es-builtins": "off",
  // disallow unsupported ECMAScript syntax on the specified version
  "node/no-unsupported-features/es-syntax": "off",
  // disallow unsupported Node.js built-in APIs on the specified version
  "node/no-unsupported-features/node-builtins": "error",
  // make process.exit() expressions the same code path as throw
  "node/process-exit-as-throw": "off",
  // suggest correct usage of shebang
  "node/shebang": "error",

  // best practices

  // disallow deprecated APIs
  "node/no-deprecated-api": "error",

  // stylistic issues

  // require return statements after callbacks
  "node/callback-return": ["error", ["callback", "cb", "next"]],
  // enforce either module.exports or exports
  "node/exports-style": ["error", "module.exports"],
  // enforce the style of file extensions in import declarations
  "node/file-extension-in-import": "off",
  // require require() calls to be placed at top-level module scope
  "node/global-require": "off",
  // disallow require calls to be mixed with regular variable declarations
  "node/no-mixed-requires": "off",
  // disallow the use of process.env
  "node/no-process-env": "off",
  // disallow specified modules when loaded by import declarations
  "node/no-restricted-import": "off",
  // disallow specified modules when loaded by require
  "node/no-restricted-require": "off",
  // disallow synchronous methods
  "node/no-sync": "off",
  // enforce either Buffer or require("buffer").Buffer
  "node/prefer-global/buffer": "error",
  // enforce either console or require("console")
  "node/prefer-global/console": "error",
  // enforce either process or require("process")
  "node/prefer-global/process": "error",
  // enforce either TextDecoder or require("util").TextDecoder
  "node/prefer-global/text-decoder": "error",
  // enforce either TextEncoder or require("util").TextEncoder
  "node/prefer-global/text-encoder": "error",
  // enforce either URLSearchParams or require("url").URLSearchParams
  "node/prefer-global/url-search-params": "error",
  // enforce either URL or require("url").URL
  "node/prefer-global/url": "error",
  // enforce require("dns").promises
  "node/prefer-promises/dns": "error",
  // enforce require("fs").promises
  "node/prefer-promises/fs": "error",
};
