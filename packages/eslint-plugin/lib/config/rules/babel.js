/*
 * Companion rules for babel-eslint.
 * https://github.com/babel/eslint-plugin-babel
 */

module.exports = {
  // ignores capitalized decorators
  "babel/new-cap": "off",
  // doesn't complain about optional chaining
  "babel/camelcase": "off",
  // doesn't fail when inside class properties
  "babel/no-invalid-this": "off",
  // doesn't complain about export x from "mod"; or export * as x from "mod";
  "babel/object-curly-spacing": "off",
  // doesn't complain about JSX fragment shorthand syntax (<>foo</>;)
  "babel/quotes": "off",
  // doesn't fail when using for await (let something of {})
  "babel/semi": "off",
  // doesn't fail when using do expressions or optional chaining
  "babel/no-unused-expressions": "off",
  // doesn't complain when used with BigInt
  "babel/valid-typeof": "off",
};
