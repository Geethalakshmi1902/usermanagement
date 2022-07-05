"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TextArea;

var _react = _interopRequireDefault(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TextArea(_ref) {
  let {
    className,
    value,
    name,
    placeholder,
    rows,
    onChange,
    autoFocus,
    onBlur
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("textarea", {
    className: "form-control form-control-lg form-control-solid ".concat(className),
    rows: rows,
    name: name,
    placeholder: placeholder,
    onChange: onChange,
    autoFocus: autoFocus,
    onBlur: onBlur,
    defaultValue: value
  });
}