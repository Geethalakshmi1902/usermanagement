"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerificationLinkEmail = VerificationLinkEmail;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.regexp.to-string.js");

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _blank = _interopRequireDefault(require("../../assets/Images/blank.png"));

var _reactRouterDom = require("react-router-dom");

var _axios = _interopRequireDefault(require("axios"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function VerificationLinkEmail(props) {
  const [email, setEmail] = (0, _react.useState)("demo@gmail.com");
  const {
    intl,
    firm
  } = props;
  const get_logo = localStorage.getItem("config"); // const webConfigData = useSelector(state => state.webConfig);

  const [isRequested, setIsRequested] = (0, _react.useState)(false);
  const [loading, setLoading] = (0, _react.useState)(false);
  const [phn_nbr, setphn_nbr] = (0, _react.useState)("");
  const history = (0, _reactRouterDom.useNavigate)();
  const location = (0, _reactRouterDom.useLocation)();

  let onOnclickHandler = () => {
    // verifyPhoneOTP(phn_nbr,OTP)
    _axios.default.post("/verify_add_phonenumber", {
      phn_nbr: phn_nbr,
      code: OTP
    }).then(resp => {
      history({
        pathname: resp.data.data.context // search: "?code=" + OTP,

      });
      setIsRequested(true);
    }).catch(e => {// ErrorMessage({ message: e.response.data.message });
    });
  };

  function resendLink() {
    _axios.default.post("/resend-verification-email-signup", {
      email: email,
      firm: firm
    }).then(() => {// SuccessMessage({message:"Resend Link has Successfully Sent"})
    });
  }

  const [OTP, setOTP] = (0, _react.useState)("");
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
          src: "https://images-na.ssl-images-amazon.com/images/I/51Dop0XlFmL.png",
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
          children: "Verify Your Email"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "pc-text-muted pc-mt-5",
          style: {
            fontSize: "20px"
          },
          children: ["We have sent an email to", /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Link, {
            to: "",
            children: [" ", email]
          }), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), "pelase follow a link to verify your email."]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "text-center mb-10",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
          to: "/auth/login",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
            id: "kt_login_forgot_submit",
            type: "submit",
            className: "pc-button pc-add-button pc-bg" // onClick={onOnclickHandler}
            ,
            children: ["Skip for now", loading && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "ml-3 spinner spinner-white"
            })]
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "font-size-h6",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "fw-bold text-gray-700",
          children: "Did\u2019t receive an email?"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
          to: "",
          className: "font-size-h4",
          onClick: resendLink,
          children: " Resend"
        })]
      })]
    })
  });
}