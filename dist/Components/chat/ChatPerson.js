"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ChatPerson;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _ImgFile = _interopRequireDefault(require("../ImgFile"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ChatPerson(_ref) {
  let {
    className,
    userName,
    role,
    time,
    count,
    type
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "d-flex align-items-center justify-content-between ".concat(className),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "d-flex align-items-center",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "symbol symbol-circle symbol-50 mr-3",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ImgFile.default, {
          alt: "Pic",
          image: "/media/users/300_11.jpg"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "d-flex flex-column",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
          to: "/",
          className: "text-dark-75 text-hover-primary fw-bold font-size-lg",
          children: userName
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "text-muted fw-bold font-size-sm",
          children: role
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "d-flex flex-column align-items-end",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "text-muted fw-bold font-size-sm",
        children: time
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "label label-sm label-".concat(type),
        children: count
      })]
    })]
  });
}