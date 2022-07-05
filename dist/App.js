"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("./UserUIRoutepage/index"));

var _reactRouterDom = require("react-router-dom");

var _reactToastify = require("react-toastify");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import logo from './logo.svg';
// import './App.css';
function App(_ref) {
  let {
    firm,
    token,
    ref_token,
    post_id,
    session_id,
    base_url
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "App",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.BrowserRouter, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_index.default //  base_url={base_url}
      , {
        firm: firm,
        token: token,
        ref_token: ref_token,
        post_id: post_id,
        session_id: session_id,
        base_url: base_url // onInvalidFirm={onInvalidFirm}

      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactToastify.ToastContainer, {})]
    })
  });
}

var _default = App;
exports.default = _default;