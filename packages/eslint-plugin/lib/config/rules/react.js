/*
 * React specific linting rules for ESLint
 * https://github.com/yannickcr/eslint-plugin-react
 */

module.exports = {
  // enforces consistent naming for boolean props
  "react/boolean-prop-naming": "off",
  // forbid "button" element without an explicit "type" attribute
  "react/button-has-type": "error",
  // enforce all defaultProps are defined and not "required" in propTypes.
  "react/default-props-match-prop-types": "error",
  // enforce consistent usage of destructuring assignment of props, state, and context
  "react/destructuring-assignment": "off",
  // prevent missing displayName in a React component definition
  "react/display-name": ["error", { ignoreTranspilerName: false }],
  // forbid certain props on components
  "react/forbid-component-props": "off",
  // forbid certain props on DOM Nodes
  "react/forbid-dom-props": "off",
  // forbid certain elements
  "react/forbid-elements": "off",
  // forbid using another component's propTypes
  "react/forbid-foreign-prop-types": "off",
  // forbid certain propTypes
  "react/forbid-prop-types": ["error", { forbid: ["any", "array"] }],
  // standardize the way function component get defined (fixable)
  "react/function-component-definition": "off",
  // reports when this.state is accessed within setState
  "react/no-access-state-in-setstate": "error",
  // prevent adjacent inline elements not separated by whitespace.
  "react/no-adjacent-inline-elements": "error",
  // prevent usage of Array index in keys
  "react/no-array-index-key": "error",
  // prevent passing of children as props.
  "react/no-children-prop": "error",
  // prevent usage of dangerous JSX props
  "react/no-danger": "off",
  // report when a DOM element is using both children and dangerouslySetInnerHTML
  "react/no-danger-with-children": "error",
  // prevent usage of deprecated methods
  "react/no-deprecated": "error",
  // prevent usage of setState in componentDidMount
  "react/no-did-mount-set-state": "error",
  // prevent usage of setState in componentDidUpdate
  "react/no-did-update-set-state": "error",
  // prevent direct mutation of this.state
  "react/no-direct-mutation-state": "error",
  // prevent usage of findDOMNode
  "react/no-find-dom-node": "off",
  // prevent usage of isMounted
  "react/no-is-mounted": "error",
  // prevent multiple component definition per file
  "react/no-multi-comp": "off",
  // flag shouldComponentUpdate when extending PureComponent
  "react/no-redundant-should-component-update": "error",
  // prevent usage of the return value of React.render
  "react/no-render-return-value": "error",
  // prevent usage of setState
  "react/no-set-state": "off",
  // prevent string definitions for references and prevent referencing this.refs
  "react/no-string-refs": "error",
  // report "this" being used in stateless components
  "react/no-this-in-sfc": "error",
  // prevent common typos
  "react/no-typos": "error",
  // detect unescaped HTML entities, which might represent malformed tags
  "react/no-unescaped-entities": "error",
  // prevent usage of unknown DOM property (fixable)
  "react/no-unknown-property": "off",
  // prevent usage of unsafe lifecycle methods
  "react/no-unsafe": ["error", { checkAliases: true }],
  // prevent definitions of unused prop types
  "react/no-unused-prop-types": "error",
  // prevent definition of unused state fields
  "react/no-unused-state": "error",
  // prevent usage of setState in componentWillUpdate
  "react/no-will-update-set-state": "error",
  // enforce ES5 or ES6 class for React Components
  "react/prefer-es6-class": "error",
  // require read-only props. (fixable)
  "react/prefer-read-only-props": "off",
  // enforce stateless components to be written as a pure function
  "react/prefer-stateless-function": ["error", { ignorePureComponents: true }],
  // prevent missing props validation in a React component definition
  "react/prop-types": "error",
  // prevent missing React when using JSX
  "react/react-in-jsx-scope": "error",
  // enforce a defaultProps definition for every prop that is not a required prop.
  "react/require-default-props": "off",
  // enforce React components to have a shouldComponentUpdate method
  "react/require-optimization": "off",
  // enforce ES5 or ES6 class for returning value in render function
  "react/require-render-return": "off",
  // prevent extra closing tags for components without children (fixable)
  "react/self-closing-comp": "error",
  // enforce component methods order
  "react/sort-comp": "off",
  // enforce propTypes declarations alphabetical sorting
  "react/sort-prop-types": "off",
  // state initialization in an ES6 class component should be in a constructor
  "react/state-in-constructor": ["error", "never"],
  // defines where React component static properties should be positioned.
  "react/static-property-placement": "off",
  // enforce style prop value is an object
  "react/style-prop-object": "error",
  // prevent passing of children to void DOM elements (e.g. <br />).
  "react/void-dom-elements-no-children": "error",

  // JSX-specific rules

  // enforce boolean attributes notation in JSX (fixable)
  "react/jsx-boolean-value": "error",
  // ensures inline tags are not rendered without spaces between them
  "react/jsx-child-element-spacing": "error",
  // validate closing bracket location in JSX (fixable)
  "react/jsx-closing-bracket-location": ["error", { location: "tag-aligned" }],
  // validate closing tag location for multiline JSX (fixable)
  "react/jsx-closing-tag-location": "error",
  // disallow unnecessary JSX expressions when literals alone are sufficient or enfore JSX expressions on literals in JSX children or attributes (fixable)
  "react/jsx-curly-brace-presence": ["error", "never"],
  // enforce consistent line breaks inside jsx curly (fixable)
  "react/jsx-curly-newline": "off",
  // enforce or disallow spaces inside of curly braces in JSX attributes (fixable)
  "react/jsx-curly-spacing": ["error", "never", { allowMultiline: true }],
  // disallow or enforce spaces around equal signs in JSX attributes (fixable)
  "react/jsx-equals-spacing": ["error", "never"],
  // restrict file extensions that may contain JSX
  "react/jsx-filename-extension": ["error", { extensions: [".js"] }],
  // ensure proper position of the first property in JSX (fixable)
  "react/jsx-first-prop-new-line": ["error", "multiline"],
  // enforce shorthand or standard form for React fragments (fixable)
  "react/jsx-fragments": "off",
  // enforce event handler naming conventions in JSX
  "react/jsx-handler-names": "off",
  // validate JSX indentation (fixable)
  "react/jsx-indent": ["error", 2],
  // validate props indentation in JSX (fixable)
  "react/jsx-indent-props": ["error", 2],
  // report missing key props in iterators/collection literals
  "react/jsx-key": "error",
  // validate JSX maximum depth
  "react/jsx-max-depth": "off",
  // limit maximum of props on a single line in JSX (fixable)
  "react/jsx-max-props-per-line": "off",
  // prevents usage of Function.prototype.bind and arrow functions in React component props
  "react/jsx-no-bind": "off",
  // comments inside children section of tag should be placed inside braces
  "react/jsx-no-comment-textnodes": "error",
  // enforce no duplicate props
  "react/jsx-no-duplicate-props": "error",
  // prevent using string literals in React component definition
  "react/jsx-no-literals": "off",
  // forbid javascript: URLs
  "react/jsx-no-script-url": "error",
  // forbid target="_blank" attribute without rel="noreferrer"
  "react/jsx-no-target-blank": "error",
  // disallow undeclared variables in JSX
  "react/jsx-no-undef": "error",
  // disallow unnecessary fragments (fixable)
  "react/jsx-no-useless-fragment": "error",
  // limit to one expression per line in JSX (fixable)
  "react/jsx-one-expression-per-line": "off",
  // enforce PascalCase for user-defined JSX components
  "react/jsx-pascal-case": "error",
  // disallow multiple spaces between inline JSX props (fixable)
  "react/jsx-props-no-multi-spaces": "error",
  // prevent JSX prop spreading
  "react/jsx-props-no-spreading": "off",
  // enforce default props alphabetical sorting
  "react/jsx-sort-default-props": "error",
  // enforce props alphabetical sorting (fixable)
  "react/jsx-sort-props": "error",
  // validate spacing before closing bracket in JSX (fixable)
  "react/jsx-space-before-closing": "error",
  // validate whitespace in and around the JSX opening and closing brackets (fixable)
  "react/jsx-tag-spacing": "error",
  // prevent React to be marked as unused
  "react/jsx-uses-react": "error",
  // prevent variables used in JSX to be marked as unused
  "react/jsx-uses-vars": "error",
  // prevent missing parentheses around multilines JSX (fixable)
  "react/jsx-wrap-multilines": "error",
};
