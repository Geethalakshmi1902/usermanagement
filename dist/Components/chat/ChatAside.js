"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ChatAside;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("../SvgIcon"));

var _ChatPerson = _interopRequireDefault(require("./ChatPerson"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ChatAside() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "flex-row-auto offcanvas-mobile w-350px w-xl-400px",
    id: "kt_chat_aside",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "card card-custom card-stretch",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "card-body",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "input-group input-group-solid",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "input-group-prepend",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "input-group-text",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "svg-icon svg-icon-lg",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgIcon.default, {
                  svg: "/media/svg/icons/General/Search.svg"
                })
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            type: "text",
            className: "form-control py-4 h-auto",
            placeholder: "Email"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "mt-7 scroll scroll-pull",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ChatPerson.default, {
            className: "mb-5",
            userName: "Matt Pears",
            role: "Head of Development",
            time: "35 mins",
            count: "2",
            type: "success"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ChatPerson.default, {
            className: "mb-5",
            userName: "Matt Pears",
            role: "Head of Development",
            time: "35 mins",
            count: "2",
            type: "warning"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ChatPerson.default, {
            className: "mb-5",
            userName: "Matt Pears",
            role: "Head of Development",
            time: "35 mins",
            count: "2",
            type: "success"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ChatPerson.default, {
            className: "mb-5",
            userName: "Matt Pears",
            role: "Head of Development",
            time: "35 mins",
            count: "2",
            type: "success"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ChatPerson.default, {
            className: "mb-5",
            userName: "Matt Pears",
            role: "Head of Development",
            time: "35 mins",
            count: "2",
            type: "danger"
          })]
        })]
      })
    })
  });
}