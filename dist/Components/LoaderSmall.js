"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LoadingSpinner;

var _react = _interopRequireDefault(require("react"));

require("./spinner.css");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LoadingSpinner() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "spinner-container",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "spinnerstyle loading-spinner "
    })
  });
}