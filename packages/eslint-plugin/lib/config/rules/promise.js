/*
 * Enforce best practices for JavaScript promises.
 * https://github.com/xjamundx/eslint-plugin-promise
 */

module.exports = {
  // enforces the use of catch() on un-returned promises.
  "promise/catch-or-return": "error",
  // avoid wrapping values in Promise.resolve or Promise.reject when not needed
  "promise/no-return-wrap": "error",
  // enforce consistent param names and ordering when creating new promises
  "promise/param-names": "error",
  // return inside each then() to create readable and reusable Promise chains
  "promise/always-return": "off",
  // in an ES5 environment, make sure to create a Promise constructor before using
  "promise/no-native": "off",
  // avoid nested then() or catch() statements
  "promise/no-nesting": "error",
  // avoid using promises inside of callbacks
  "promise/no-promise-in-callback": "off",
  // avoid calling cb() inside of a then() (use nodeify instead)
  "promise/no-callback-in-promise": "off",
  // avoid creating new promises outside of utility libs (use pify instead)
  "promise/avoid-new": "off",
  // avoid calling new on a Promise static method
  "promise/no-new-statics": "off",
  // disallow return statements in finally()
  "promise/no-return-in-finally": "error",
  // ensures the proper number of arguments are passed to Promise functions
  "promise/valid-params": "error",
  // prefer await to then() for reading Promise values
  "promise/prefer-await-to-then": "off",
  // prefer async/await to the callback pattern
  "promise/prefer-await-to-callbacks": "off",
};
