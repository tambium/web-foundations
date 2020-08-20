/*
 * Rules to improve linting when working with React and TypeScript.
 */

module.exports = {
  // disable JS-specific rules
  "react/default-props-match-prop-types": "off",
  "react/jsx-filename-extension": "off",
  "react/prop-types": "off",

  // avoid rules that cause issues with @typescript-eslint/parser
  "react/jsx-closing-tag-location": "off",
  "react/jsx-indent": "off",
  "react/jsx-wrap-multilines": "off",
  "react/no-typos": "off",
};
