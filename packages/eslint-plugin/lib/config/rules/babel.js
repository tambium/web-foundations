/*
 * Companion rules for babel-eslint.
 * https://github.com/babel/eslint-plugin-babel
 */

module.exports = {
  // ignores capitalized decorators
  "babel/new-cap": ["error", { newIsCap: true, capIsNew: false }],
  // doesn't complain about optional chaining
  "babel/camelcase": ["error", { properties: "always" }],
  // doesn't fail when inside class properties
  "babel/no-invalid-this": "error",
  // doesn't complain about export x from "mod"; or export * as x from "mod";
  "babel/object-curly-spacing": ["error", "never"],
  // doesn't complain about JSX fragment shorthand syntax (<>foo</>;)
  "babel/quotes": "error",
  // doesn't fail when using for await (let something of {})
  "babel/semi": "error",
  // doesn't fail when using do expressions or optional chaining
  "babel/no-unused-expressions": "error",
  // doesn't complain when used with BigInt
  "babel/valid-typeof": "error",
};
