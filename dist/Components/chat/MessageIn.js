"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MessageIn;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import ImgFile from "../ImgFile";
function MessageIn(_ref) {
  let {
    className,
    image,
    userName,
    time,
    message
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "d-flex flex-column mb-5 align-items-start ".concat(className),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "d-flex align-items-center",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "symbol symbol-circle symbol-40 mr-3",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          alt: "Pic",
          src: image
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
          to: "/",
          className: "text-dark-75 text-hover-primary fw-bold font-size-h6",
          children: userName
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "text-muted font-size-sm",
          children: time
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "mt-2 rounded p-5 bg-light-success text-dark-50 fw-bold font-size-lg text-left max-w-400px",
      children: message
    })]
  });
}