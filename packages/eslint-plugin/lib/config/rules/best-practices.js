/*
 * These rules relate to better ways of doing things to help you avoid problems.
 * https://eslint.org/docs/rules/#best-practices
 */

module.exports = {
  // enforce getter and setter pairs in objects and classes
  "accessor-pairs": "off",
  // enforce `return` statements in callbacks of array methods
  "array-callback-return": "error",
  // enforce the use of variables within the scope they are defined
  "block-scoped-var": "error",
  // enforce that class methods utilize `this`
  "class-methods-use-this": "off",
  // enforce a maximum cyclomatic complexity allowed in a program
  complexity: "off",
  // require `return` statements to either always or never specify values
  "consistent-return": "error",
  // enforce consistent brace style for all control statements
  curly: ["error", "all"],
  // require `default` cases in `switch` statements
  "default-case": "error",
  // enforce default clauses in switch statements to be last
  "default-case-last": "off",
  // enforce default parameters to be last
  "default-param-last": "off",
  // enforce consistent newlines before and after dots
  "dot-location": ["error", "property"],
  // enforce dot notation whenever possible
  "dot-notation": ["error", { allowKeywords: true }],
  // require the use of `===` and `!==`
  eqeqeq: ["error", "allow-null"],
  // require grouped accessor pairs in object literals and classes
  "grouped-accessor-pairs": "off",
  // require `for-in` loops to include an `if` statement
  "guard-for-in": "error",
  // enforce a maximum number of classes per file
  "max-classes-per-file": "off",
  // disallow the use of `alert`, `confirm`, and `prompt`
  "no-alert": "error",
  // disallow the use of `arguments.caller` or `arguments.callee`
  "no-caller": "error",
  // disallow lexical declarations in case clauses
  "no-case-declarations": "error",
  // disallow returning value from constructor
  "no-constructor-return": "error",
  // disallow division operators explicitly at the beginning of regular expressions
  "no-div-regex": "error",
  // disallow `else` blocks after `return` statements in `if` statements
  "no-else-return": "off",
  // disallow empty functions
  "no-empty-function": [
    "error",
    {
      allow: ["arrowFunctions", "functions", "methods"],
    },
  ],
  // disallow empty destructuring patterns
  "no-empty-pattern": "error",
  // disallow `null` comparisons without type-checking operators
  "no-eq-null": "off",
  // disallow the use of `eval()`
  "no-eval": "error",
  // disallow extending native types
  "no-extend-native": "error",
  // disallow unnecessary calls to `.bind()`
  "no-extra-bind": "error",
  // disallow unnecessary labels
  "no-extra-label": "error",
  // disallow fallthrough of `case` statements
  "no-fallthrough": "error",
  // disallow leading or trailing decimal points in numeric literals
  "no-floating-decimal": "error",
  // disallow assignments to native objects or read-only global variables
  "no-global-assign": "error",
  // disallow shorthand type conversions
  "no-implicit-coercion": "error",
  // disallow declarations in the global scope
  "no-implicit-globals": "off",
  // disallow the use of `eval()`-like methods
  "no-implied-eval": "error",
  // disallow `this` keywords outside of classes or class-like objects
  "no-invalid-this": "off",
  // disallow the use of the `__iterator__` property
  "no-iterator": "error",
  // disallow labeled statements
  "no-labels": "error",
  // disallow unnecessary nested blocks
  "no-lone-blocks": "error",
  // disallow function declarations that contain unsafe references inside loop statements
  "no-loop-func": "error",
  // disallow magic numbers
  "no-magic-numbers": "off",
  // disallow multiple spaces
  "no-multi-spaces": "error",
  // disallow multiline strings
  "no-multi-str": "off",
  // disallow `new` operators outside of assignments or comparisons
  "no-new": "error",
  // disallow `new` operators with the `Function` object
  "no-new-func": "error",
  // disallow `new` operators with the `String`, `Number`, and `Boolean` objects
  "no-new-wrappers": "error",
  // disallow octal literals
  "no-octal": "error",
  // disallow octal escape sequences in string literals
  "no-octal-escape": "error",
  // disallow reassigning `function` parameters
  "no-param-reassign": "off",
  // disallow the use of the `__proto__` property
  "no-proto": "error",
  // disallow variable redeclaration
  "no-redeclare": "error",
  // disallow certain properties on certain objects
  "no-restricted-properties": "off",
  // disallow assignment operators in `return` statements
  "no-return-assign": "error",
  // disallow unnecessary `return await`
  "no-return-await": "error",
  // disallow `javascript:` urls
  "no-script-url": "error",
  // disallow assignments where both sides are exactly the same
  "no-self-assign": ["error", { props: true }],
  // disallow comparisons where both sides are exactly the same
  "no-self-compare": "error",
  // disallow comma operators
  "no-sequences": "error",
  // disallow throwing literals as exceptions
  "no-throw-literal": "error",
  // disallow unmodified loop conditions
  "no-unmodified-loop-condition": "error",
  // disallow unused expressions
  "no-unused-expressions": "error",
  // disallow unused labels
  "no-unused-labels": "error",
  // disallow unnecessary calls to `.call()` and `.apply()`
  "no-useless-call": "error",
  // disallow unnecessary `catch` clauses
  "no-useless-catch": "error",
  // disallow unnecessary concatenation of literals or template literals
  "no-useless-concat": "error",
  // disallow unnecessary escape characters
  "no-useless-escape": "error",
  // disallow redundant return statements
  "no-useless-return": "error",
  // disallow `void` operators
  "no-void": "error",
  // disallow specified warning terms in comments
  "no-warning-comments": "error",
  // disallow `with` statements
  "no-with": "error",
  // enforce using named capture group in regular expression
  "prefer-named-capture-group": "off",
  // require using Error objects as Promise rejection reasons
  "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],
  // disallow use of the `RegExp` constructor in favor of regular expression literals
  "prefer-regex-literals": "off",
  // enforce the consistent use of the radix argument when using `parseInt()`
  radix: "error",
  // disallow async functions which have no `await` expression
  "require-await": "off",
  // enforce the use of `u` flag on RegExp
  "require-unicode-regexp": "off",
  // require `var` declarations be placed at the top of their containing scope
  "vars-on-top": "error",
  // require parentheses around immediate `function` invocations
  "wrap-iife": ["error", "inside"],
  // require or disallow "Yoda" conditions
  yoda: "error",
};
