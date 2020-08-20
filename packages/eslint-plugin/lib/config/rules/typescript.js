/*
 * Rules for TypeScript.
 * https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
 */

module.exports = {
  // require that member overloads be consecutive
  "@typescript-eslint/adjacent-overload-signatures": "error",
  // requires using either T[] or Array<T> for arrays
  "@typescript-eslint/array-type": [
    "error",
    {
      default: "array-simple",
      readonly: "generic",
    },
  ],
  // disallows awaiting a value that is not a Thenable
  "@typescript-eslint/await-thenable": "off",
  // bans // @ts-<directive> comments from being used or requires descriptions after directive
  "@typescript-eslint/ban-ts-comment": "error",
  // bans // tslint:<rule-flag> comments from being used
  "@typescript-eslint/ban-tslint-comment": "error",
  // bans specific types from being used
  "@typescript-eslint/ban-types": [
    "error",
    {
      types: {
        String: { message: "Use string instead", fixWith: "string" },
        Boolean: { message: "Use boolean instead", fixWith: "boolean" },
        Number: { message: "Use number instead", fixWith: "number" },
        Object: { message: "Use object instead", fixWith: "object" },
        Array: { message: "Provide a more specific type" },
      },
    },
  ],
  // ensures that literals on classes are exposed in a consistent style
  "@typescript-eslint/class-literal-property-style": "off",
  // enforces consistent usage of type assertions
  "@typescript-eslint/consistent-type-assertions": "error",
  // consistent with type definition either interface or type
  "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
  // require explicit return types on functions and class methods
  "@typescript-eslint/explicit-function-return-type": "off",
  // require explicit accessibility modifiers on class properties and methods
  "@typescript-eslint/explicit-member-accessibility": "off",
  // require explicit return and argument types on exported functions' and classes' public class methods
  "@typescript-eslint/explicit-module-boundary-types": "off",
  // require a specific member delimiter style for interfaces and type literals
  "@typescript-eslint/member-delimiter-style": [
    "error",
    {
      multiline: {
        delimiter: "semi",
        requireLast: true,
      },
      singleline: {
        delimiter: "semi",
        requireLast: true,
      },
    },
  ],
  // require a consistent member declaration order
  "@typescript-eslint/member-ordering": "off",
  // enforces using a particular method signature syntax.
  "@typescript-eslint/method-signature-style": "off",
  // enforces naming conventions for everything across a codebase
  "@typescript-eslint/naming-convention": "off",
  // requires that .toString() is only called on objects which provide useful information when stringified
  "@typescript-eslint/no-base-to-string": "off",
  // disallow non-null assertion in locations that may be confusing
  "@typescript-eslint/no-confusing-non-null-assertion": "off",
  // disallow the delete operator with computed key expressions
  "@typescript-eslint/no-dynamic-delete": "off",
  // disallow the declaration of empty interfaces
  "@typescript-eslint/no-empty-interface": "off",
  // disallow usage of the any type
  "@typescript-eslint/no-explicit-any": "off",
  // disallow extra non-null assertion
  "@typescript-eslint/no-extra-non-null-assertion": "off",
  // forbids the use of classes as namespaces
  "@typescript-eslint/no-extraneous-class": [
    "error",
    { allowConstructorOnly: false, allowEmpty: false, allowStaticOnly: false },
  ],
  // requires Promise-like values to be handled appropriately
  "@typescript-eslint/no-floating-promises": "off",
  // disallow iterating over an array with a for-in loop
  "@typescript-eslint/no-for-in-array": "off",
  // disallow the use of eval()-like methods
  "@typescript-eslint/no-implied-eval": "off",
  // disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
  "@typescript-eslint/no-inferrable-types": [
    "error",
    {
      ignoreParameters: false,
      ignoreProperties: false,
    },
  ],
  // disallows usage of void type outside of generic or return types
  "@typescript-eslint/no-invalid-void-type": "off",
  // enforce valid definition of new and constructor
  "@typescript-eslint/no-misused-new": "error",
  // avoid using promises in places not designed to handle them
  "@typescript-eslint/no-misused-promises": "off",
  // disallow the use of custom TypeScript modules and namespaces
  "@typescript-eslint/no-namespace": [
    "error",
    { allowDeclarations: false, allowDefinitionFiles: false },
  ],
  // disallows using a non-null assertion after an optional chain expression
  "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
  // disallows non-null assertions using the ! postfix operator
  "@typescript-eslint/no-non-null-assertion": "off",
  // disallow the use of parameter properties in class constructors
  "@typescript-eslint/no-parameter-properties": "off",
  // disallows invocation of require()
  "@typescript-eslint/no-require-imports": "off",
  // disallow aliasing this
  "@typescript-eslint/no-this-alias": [
    "error",
    { allowDestructuring: true, allowedNames: [] },
  ],
  // disallow throwing literals as exceptions
  "@typescript-eslint/no-throw-literal": "off",
  // disallow the use of type aliases
  "@typescript-eslint/no-type-alias": "off",
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
  // disallow unused variables and arguments
  "@typescript-eslint/no-unused-vars-experimental": "off",
  // disallows the use of require statements except in import statements
  "@typescript-eslint/no-var-requires": "error",
  // prefer usage of as const over literal type
  "@typescript-eslint/prefer-as-const": "error",
  // prefer initializing each enums member value
  "@typescript-eslint/prefer-enum-initializers": "off",
  // prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
  "@typescript-eslint/prefer-for-of": "error",
  // use function types instead of interfaces with call signatures
  "@typescript-eslint/prefer-function-type": "off",
  // enforce includes method over indexOf method
  "@typescript-eslint/prefer-includes": "off",
  // require that all enum members be literal values to prevent unintended enum member name shadow issues
  "@typescript-eslint/prefer-literal-enum-member": "off",
  // require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules
  "@typescript-eslint/prefer-namespace-keyword": "off",
  // enforce the usage of the nullish coalescing operator instead of logical chaining
  "@typescript-eslint/prefer-nullish-coalescing": "off",
  // prefer using concise optional chain expressions instead of chained logical ands
  "@typescript-eslint/prefer-optional-chain": "off",
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
  // recommends using // @ts-expect-error over // @ts-ignore
  "@typescript-eslint/prefer-ts-expect-error": "off",
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
  // sets preference level for triple slash directives versus ES6-style import declarations
  "@typescript-eslint/triple-slash-reference": [
    "error",
    { path: "never", types: "never", lib: "never" },
  ],
  // require consistent spacing around type annotations
  "@typescript-eslint/type-annotation-spacing": "off",
  // requires type annotations to exist
  "@typescript-eslint/typedef": "off",
  // enforces unbound methods are called with their expected scope
  "@typescript-eslint/unbound-method": "off",
  // warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
  "@typescript-eslint/unified-signatures": "error",

  // extension rules

  // enforce consistent brace style for blocks
  "@typescript-eslint/brace-style": "error",
  // enforces consistent spacing before and after commas
  "@typescript-eslint/comma-spacing": "off",
  // enforce default parameters to be last
  "@typescript-eslint/default-param-last": "off",
  // enforce dot notation whenever possible
  "@typescript-eslint/dot-notation": "off",
  // require or disallow spacing between function identifiers and their invocations
  "@typescript-eslint/func-call-spacing": "error",
  // enforce consistent indentation
  "@typescript-eslint/indent": "off",
  // require or disallow initialization in variable declarations
  "@typescript-eslint/init-declarations": "off",
  // enforce consistent spacing before and after keywords
  "@typescript-eslint/keyword-spacing": [
    "error",
    { before: true, after: true, overrides: {} },
  ],
  // require or disallow an empty line between class members
  "@typescript-eslint/lines-between-class-members": "off",
  // disallow generic Array constructors
  "@typescript-eslint/no-array-constructor": "error",
  // disallow duplicate class members
  "@typescript-eslint/no-dupe-class-members": "off",
  // disallow empty functions
  "@typescript-eslint/no-empty-function": "off",
  // disallow unnecessary parentheses
  "@typescript-eslint/no-extra-parens": "error",
  // disallow unnecessary semicolons
  "@typescript-eslint/no-extra-semi": "off",
  // disallow this keywords outside of classes or class-like objects
  "@typescript-eslint/no-invalid-this": "off",
  // disallow literal numbers that lose precision
  "@typescript-eslint/no-loss-of-precision": "off",
  // disallow magic numbers
  "@typescript-eslint/no-magic-numbers": "off",
  // disallow unused expressions
  "@typescript-eslint/no-unused-expressions": "off",
  // disallow unused variables
  "@typescript-eslint/no-unused-vars": "off",
  // disallow the use of variables before they are defined
  "@typescript-eslint/no-use-before-define": "off",
  // disallow unnecessary constructors
  "@typescript-eslint/no-useless-constructor": "off",
  // enforce the consistent use of either backticks, double, or single quotes
  "@typescript-eslint/quotes": [
    "error",
    "single",
    { avoidEscape: true, allowTemplateLiterals: true },
  ],
  // disallow async functions which have no await expression
  "@typescript-eslint/require-await": "off",
  // enforces consistent returning of awaited values
  "@typescript-eslint/return-await": "off",
  // require or disallow semicolons instead of ASI
  "@typescript-eslint/semi": "error",
  // enforces consistent spacing before function parenthesis
  "@typescript-eslint/space-before-function-paren": "off",
};
