/*
 * Companion rules for @babel/eslint-parser.
 * https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin
 */

module.exports = {
  // handles decorators
  "@babel/new-cap": "error",
  // handles class fields and private class methods
  "@babel/no-invalid-this": "error",
  // handles do expressions
  "@babel/no-unused-expressions": "error",
  // handles export * as x from "mod"
  "@babel/object-curly-spacing": "error",
  // handles class properties
  "@babel/semi": "error",
};
