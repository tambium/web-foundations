/*
 * Accessibility rules on JSX elements.
 * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
 */

module.exports = {
  // enforce emojis are wrapped in <span> and provide screenreader access.
  "accessible-emoji": "error",
  // enforce all elements that require alternative text have meaningful information to relay back to end user.
  "alt-text": "error",
  // enforce all anchors to contain accessible content.
  "anchor-has-content": "error",
  // enforce all anchors are valid, navigable elements.
  "anchor-is-valid": "error",
  // enforce elements with aria-activedescendant are tabbable.
  "aria-activedescendant-has-tabindex": "error",
  // enforce all aria-* props are valid.
  "aria-props": "error",
  // enforce ARIA state and property values are valid.
  "aria-proptypes": "error",
  // enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
  "aria-role": "error",
  // enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
  "aria-unsupported-elements": "error",
  // enforce that autocomplete attributes are used correctly.
  "autocomplete-valid": "error",
  // enforce a clickable non-interactive element has at least one keyboard event listener.
  "click-events-have-key-events": "error",
  // enforce heading (h1, h2, etc) elements contain accessible content.
  "heading-has-content": "error",
  // enforce <html> element has lang prop.
  "html-has-lang": "error",
  // enforce iframe elements have a title attribute.
  "iframe-has-title": "error",
  // enforce <img> alt prop does not contain the word "image", "picture", or "photo".
  "img-redundant-alt": "error",
  // enforce that elements with interactive handlers like onClick must be focusable.
  "interactive-supports-focus": "error",
  // enforce that a label tag has a text label and an associated control.
  "label-has-associated-control": "error",
  // enforce lang attribute has a valid value.
  lang: "error",
  // enforces that <audio> and <video> elements must have a <track> for captions.
  "media-has-caption": "error",
  // enforce that onMouseOver/onMouseOut are accompanied by onFocus/onBlur for keyboard-only users.
  "mouse-events-have-key-events": "error",
  // enforce that the accessKey prop is not used on any element to avoid complications with keyboard commands used by a screenreader.
  "no-access-key": "error",
  // enforce autoFocus prop is not used.
  "no-autofocus": "error",
  // enforce distracting elements are not used.
  "no-distracting-elements": "error",
  // interactive elements should not be assigned non-interactive roles.
  "no-interactive-element-to-noninteractive-role": "error",
  // non-interactive elements should not be assigned mouse or keyboard event listeners.
  "no-noninteractive-element-interactions": "error",
  // non-interactive elements should not be assigned interactive roles.
  "no-noninteractive-element-to-interactive-role": "error",
  // tabIndex should only be declared on interactive elements.
  "no-noninteractive-tabindex": "error",
  // enforce usage of onBlur over onChange on select menus for accessibility.
  "no-onchange": "error",
  // enforce explicit role property is not the same as implicit/default role property on element.
  "no-redundant-roles": "error",
  // enforce that non-interactive, visible elements (such as <div>) that have click handlers use the role attribute.
  "no-static-element-interactions": "error",
  // enforce that elements with ARIA roles must have all required attributes for that role.
  "role-has-required-aria-props": "error",
  // enforce that elements with explicit or implicit roles defined contain only aria-* properties supported by that role.
  "role-supports-aria-props": "error",
  // enforce scope prop is only used on <th> elements.
  scope: "error",
  // enforce tabIndex value is not greater than zero.
  "tabindex-no-positive": "error",
};
