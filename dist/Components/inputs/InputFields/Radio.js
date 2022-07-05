"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Radio;

var _react = _interopRequireDefault(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Radio(_ref) {
  let {
    className,
    value,
    onClick,
    name,
    onChange,
    autoFocus,
    onBlur,
    span,
    label,
    isSelected
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
      className: className,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        type: "radio",
        name: name,
        onClick: onClick,
        onChange: onChange,
        onBlur: onBlur,
        autoFocus: autoFocus,
        value: value,
        checked: isSelected
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {}), label]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "ms-auto text-muted fw-bold",
      children: span
    })]
  });
}