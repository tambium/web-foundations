module.exports = {
  overrides: [
    {
      files: ["*.ts", "*.tsx"],

      rules: {
        // disallows awaiting a value that is not a Thenable
        "@typescript-eslint/await-thenable": "off",
        // enforces naming conventions for everything across a codebase
        "@typescript-eslint/naming-convention": "off",
        // requires that .toString() is only called on objects which provide useful information when stringified
        "@typescript-eslint/no-base-to-string": "off",
        // requires Promise-like values to be handled appropriately
        "@typescript-eslint/no-floating-promises": "off",
        // disallow iterating over an array with a for-in loop
        "@typescript-eslint/no-for-in-array": "off",
        // disallow the use of eval()-like methods
        "@typescript-eslint/no-implied-eval": "off",
        // avoid using promises in places not designed to handle them
        "@typescript-eslint/no-misused-promises": "off",
        // disallow throwing literals as exceptions
        "@typescript-eslint/no-throw-literal": "off",
        // flags unnecessary equality comparisons against boolean literals
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off",
        // prevents conditionals where the type is always truthy or always falsy
        "@typescript-eslint/no-unnecessary-condition": "off",
        // warns when a namespace qualifier is unnecessary
        "@typescript-eslint/no-unnecessary-qualifier": "off",
        // enforces that type arguments will not be used if not required
        "@typescript-eslint/no-unnecessary-type-arguments": "off",
        // warns if a type assertion does not change the type of an expression
        "@typescript-eslint/no-unnecessary-type-assertion": "off",
        // disallows assigning any to variables and properties
        "@typescript-eslint/no-unsafe-assignment": "error",
        // disallows calling an any type value
        "@typescript-eslint/no-unsafe-call": "error",
        // disallows member access on any typed variables
        "@typescript-eslint/no-unsafe-member-access": "error",
        // disallows returning any from a function
        "@typescript-eslint/no-unsafe-return": "error",
        // enforce includes method over indexOf method
        "@typescript-eslint/prefer-includes": "off",
        // enforce the usage of the nullish coalescing operator instead of logical chaining
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        // requires that private members are marked as readonly if they're never modified outside of the constructor
        "@typescript-eslint/prefer-readonly": "off",
        // requires that function parameters are typed as readonly to prevent accidental mutation of inputs
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
        // prefer using type parameter when calling Array#reduce instead of casting
        "@typescript-eslint/prefer-reduce-type-parameter": "off",
        // enforce that RegExp#exec is used instead of String#match if no global flag is provided
        "@typescript-eslint/prefer-regexp-exec": "off",
        // enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings
        "@typescript-eslint/prefer-string-starts-ends-with": "off",
        // requires any function or method that returns a Promise to be marked async
        "@typescript-eslint/promise-function-async": "off",
        // requires Array#sort calls to always provide a compareFunction
        "@typescript-eslint/require-array-sort-compare": "off",
        // when adding two variables, operands must both be of type number or of type string
        "@typescript-eslint/restrict-plus-operands": "off",
        // enforce template literal expressions to be of string type
        "@typescript-eslint/restrict-template-expressions": "off",
        // restricts the types allowed in boolean expressions
        "@typescript-eslint/strict-boolean-expressions": "off",
        // exhaustiveness checking in switch with union type
        "@typescript-eslint/switch-exhaustiveness-check": "off",
        // enforces unbound methods are called with their expected scope
        "@typescript-eslint/unbound-method": "off",

        // extension rules

        // enforce dot notation whenever possible
        "@typescript-eslint/dot-notation": "off",
        // disallow async functions which have no await expression
        "@typescript-eslint/require-await": "off",
        // enforces consistent returning of awaited values
        "@typescript-eslint/return-await": "off",
      },
    },
  ],
};
