/*
 * Rules that help validate proper imports.
 * https://github.com/benmosher/eslint-plugin-import
 */

module.exports = {
  // static analysis

  // ensure imports point to a file/module that can be resolved.
  "import/no-unresolved": "error",
  // ensure named imports correspond to a named export in the remote file.
  "import/named": "error",
  // ensure a default export is present, given a default import.
  "import/default": "error",
  // ensure imported namespaces contain dereferenced properties as they are dereferenced.
  "import/namespace": "error",
  // restrict which files can be imported in a given folder
  "import/no-restricted-paths": "off",
  // forbid import of modules using absolute paths
  "import/no-absolute-path": "error",
  // forbid require() calls with expressions
  "import/no-dynamic-require": "off",
  // prevent importing the submodules of other modules
  "import/no-internal-modules": "off",
  // forbid webpack loader syntax in imports
  "import/no-webpack-loader-syntax": "error",
  // forbid a module from importing itself
  "import/no-self-import": "error",
  // forbid a module from importing a module with a dependency path back to itself
  "import/no-cycle": "error",
  // prevent unnecessary path segments in import and require statements
  "import/no-useless-path-segments": "error",
  // forbid importing modules from parent directories
  "import/no-relative-parent-imports": "off",

  // helpful warnings

  // report any invalid exports, i.e. re-export of the same name
  "import/export": "error",
  // report use of exported name as identifier of default export
  "import/no-named-as-default": "error",
  // report use of exported name as property of default export
  "import/no-named-as-default-member": "error",
  // report imported names marked with @deprecated documentation tag
  "import/no-deprecated": "error",
  // forbid the use of extraneous packages
  "import/no-extraneous-dependencies": "error",
  // forbid the use of mutable exports with var or let.
  "import/no-mutable-exports": "error",
  // report modules without exports, or exports without matching import in another module
  "import/no-unused-modules": "error",

  // module systems

  // report potentially ambiguous parse goal (script vs. module)
  "import/unambiguous": "off",
  // report CommonJS require calls and module.exports or exports.*.
  "import/no-commonjs": "off",
  // report AMD require and define calls.
  "import/no-amd": "off",
  // no Node.js builtin modules.
  "import/no-nodejs-modules": "off",

  // style guide

  // ensure all imports appear before other statements
  "import/first": "error",
  // ensure all exports appear after other statements
  "import/exports-last": "off",
  // report repeated import of the same module in multiple places
  "import/no-duplicates": "error",
  // forbid namespace (a.k.a. "wildcard" *) imports
  "import/no-namespace": "off",
  // ensure consistent use of file extension within the import path
  "import/extensions": "off",
  // enforce a convention in module import order
  "import/order": [
    "error",
    {
      groups: ["builtin", "external", "internal", "parent", "sibling"],
    },
  ],
  // enforce a newline after import statements
  "import/newline-after-import": "error",
  // prefer a default export if module exports a single name
  "import/prefer-default-export": "off",
  // limit the maximum number of dependencies a module can have
  "import/max-dependencies": "off",
  // forbid unassigned imports
  "import/no-unassigned-import": "off",
  // forbid named default exports
  "import/no-named-default": "error",
  // forbid default exports
  "import/no-default-export": "off",
  // forbid named exports
  "import/no-named-export": "off",
  // forbid anonymous values as default exports
  "import/no-anonymous-default-export": "error",
  // prefer named exports to be grouped together in a single export declaration
  "import/group-exports": "off",
  // enforce a leading comment with the webpackChunkName for dynamic imports
  "import/dynamic-import-chunkname": "off",
};
