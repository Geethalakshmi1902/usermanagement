"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhoneVerificationSuccess = PhoneVerificationSuccess;

require("core-js/modules/es.regexp.to-string.js");

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _reactRouterDom = require("react-router-dom");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { toAbsoluteUrl } from "@ellantec/pearlcore_config/dist/_pearl/_helpers";
function PhoneVerificationSuccess(props) {
  // const toAbsoluteUrl = pathname => process.env.PUBLIC_URL + pathname;
  // const webConfigData = useSelector(state => state.webConfig);
  const history = (0, _reactRouterDom.useNavigate)(); // function handleClick(){
  //   history("/users/user-lists/default-card")
  // }

  const get_logo = localStorage.getItem("config");
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "pc-otp_screen",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "pc-verification pc-mt-5",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("h3", {
          className: "pc-font-size-h1",
          children: [" ", /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: get_logo.toString(),
            style: {
              width: "150px"
            },
            alt: "Logo"
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "pc-verification",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: "https://freepngimg.com/thumb/green_tick/27889-3-green-tick-thumb.png",
          style: {
            width: "150px"
          },
          alt: "Logo"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
          className: " text-dark mb-7",
          style: {
            fontSize: "30px",
            fontWeight: 600
          },
          children: "Verify Successfull"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "pc-text-muted pc-mt-5",
          style: {
            fontSize: "20px"
          },
          children: "Your Mobile OTP has been verified successfully."
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "text-center mb-10",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
          to: "/auth/login",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            id: "kt_login_forgot_submit",
            type: "submit",
            className: "pc-button pc-add-button pc-bg" // onClick={onOnclickHandler}
            ,
            children: "Continue"
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "font-size-h6",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "fw-bold text-gray-700",
          children: "Did\u2019t receive an email?"
        })
      })]
    })
  });
}