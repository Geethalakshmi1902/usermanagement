"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CheckBox;

var _react = _interopRequireDefault(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CheckBox(_ref) {
  let {
    value,
    name,
    label,
    className,
    onChange,
    onBlur,
    isSelected,
    span,
    id
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
      className: className,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        name: name,
        type: "checkbox",
        value: value,
        onChange: onChange,
        onBlur: onBlur,
        checked: isSelected,
        id: id
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {}), label]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "ml-auto text-muted fw-bold",
      children: span
    })]
  });
}