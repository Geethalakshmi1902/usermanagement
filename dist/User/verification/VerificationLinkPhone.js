"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerificationLinkPhone = VerificationLinkPhone;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.search.js");

var _react = _interopRequireWildcard(require("react"));

var _verification_code_input = _interopRequireDefault(require("./verification_code_input"));

var _reactRedux = require("react-redux");

var _blank = _interopRequireDefault(require("../../assets/Images/blank.png"));

var _reactRouterDom = require("react-router-dom");

var _axios = _interopRequireDefault(require("axios"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function VerificationLinkPhone(props) {
  const {
    intl
  } = props; // const webConfigData = useSelector(state => state.webConfig);

  const [isRequested, setIsRequested] = (0, _react.useState)(false);
  const [loading, setLoading] = (0, _react.useState)(false);
  const [phn_nbr, setphn_nbr] = (0, _react.useState)("");
  const history = (0, _reactRouterDom.useNavigate)();
  const location = (0, _reactRouterDom.useLocation)(); //   const { id } = useParams();

  (0, _react.useEffect)(() => {
    let id = location.search.substring(location.search.lastIndexOf("=") + 1);
    setphn_nbr(id);
  }, []);

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

  let resendOTP = () => {
    // resendMblOTP(phn_nbr)
    _axios.default.post("/resend_otp", {
      mobilenumber: phn_nbr,
      firm: "parseInt"
    }).then(resp => {// SuccessMessage({ message: "Resend Code Successfully Sent" });
    });
  };

  const [OTP, setOTP] = (0, _react.useState)("");
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "pc-otp_screen",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "pc-verification pc-mt-5",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          className: "pc-font-size-h1",
          children: "Verification"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "pc-verification",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: "https://user-images.githubusercontent.com/4661784/56352614-4631a680-61d8-11e9-880d-86ecb053413d.png",
          style: {
            width: "150px"
          },
          alt: "Logo"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "pc-text-muted pc-mt-5",
          children: ["Please enter the verification code we send to your Mobile Number", /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "fw-bold ml-2",
            id: "kt_login_signup",
            children: ["*******", " ", phn_nbr.substring(phn_nbr.lastIndexOf("+") + 10)]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "form-group fv-plugins-icon-container pl-8",
          style: {
            justifyContent: "center",
            display: "flex"
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_verification_code_input.default, {
            type: "number",
            fields: 4,
            value: OTP,
            onChange: setOTP
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "text-center mb-10",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
            id: "kt_login_forgot_submit",
            type: "submit",
            className: "pc-button pc-add-button pc-bg",
            onClick: onOnclickHandler,
            children: ["Submit", loading && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "ml-3 spinner spinner-white"
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "font-size-h6",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "fw-bold text-gray-700",
            children: "Did\u2019t receive an OTP?"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "pc-hyperlink",
            id: "kt_login_forgot",
            onClick: resendOTP,
            children: "Click here"
          })]
        })]
      })]
    })
  });
}