"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _ProfileList = _interopRequireDefault(require("../User/ProfileList"));

var _PersonalInfo = _interopRequireDefault(require("../User/ProfileInfo/PersonalInfo"));

var _ContactInfo = _interopRequireDefault(require("../User/ProfileInfo/ContactInfo"));

var _ChangePassword = _interopRequireDefault(require("../User/ProfileInfo/ChangePassword"));

var _AddressInfo = _interopRequireDefault(require("../User/ProfileInfo/AddressInfo"));

var _UserCards = require("../User/UserCards");

var _UserForm = _interopRequireDefault(require("../User/UserForm"));

var _UserDatatable = _interopRequireDefault(require("../User/UserDatatable"));

var _verification = require("../User/verification");

var _VerificationLinkPhone = require("../User/verification/VerificationLinkPhone");

var _axios = _interopRequireDefault(require("axios"));

var _redux = _interopRequireWildcard(require("../Components/redux"));

var _store = _interopRequireWildcard(require("../Components/redux/store"));

var _CustomAlert = require("../Components/CustomAlert");

var _Datatablelist = _interopRequireDefault(require("../Datatable/Datatablelist"));

var _Table = _interopRequireDefault(require("../Datatable/Table"));

var _CheckTable = _interopRequireDefault(require("../Datatable/CheckTable"));

var _ListCard = _interopRequireDefault(require("../User/ListCard"));

var _ListCardGlass = _interopRequireDefault(require("../User/ListCardGlass"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import axios from "axios";
const UserUIRoutepage = _ref => {
  let {
    firm,
    token,
    ref_token,
    post_id,
    session_id,
    base_url
  } = _ref;
  localStorage.setItem('token', token);
  localStorage.setItem('id', firm);
  localStorage.setItem('sessionId', session_id);
  localStorage.setItem('postId', post_id);
  localStorage.setItem('ref_token', ref_token);

  _redux.setupAxios(_axios.default, _store.default, base_url);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Routes, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
        path: "*",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Navigate, {
          to: "/UserCards/default-card/"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
        path: "/ProfileAllList/*",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ProfileList.default, {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
        path: "/glass-view",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListCardGlass.default, {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
        path: "/UserCards/*",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_UserCards.UserCards, {
          firm: firm
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
        path: "/UserForm/:id",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_UserForm.default, {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
        path: "/verification_link_sent_to_email",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_verification.VerificationLinkEmail, {
          firm: firm // configdata={configdata}

        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
        path: "/verification-in-progress/:id",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_verification.EmailVerificationLoading, {
          firm: firm
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
        path: "/add_email_verify_successfully",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_verification.EmailVerificationSuccess, {
          firm: firm
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
        path: "/verification-link-expired",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_verification.EmailVerificationExpired, {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
        path: "/add_phonenumber_verification_otp_sent_to_phone",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VerificationLinkPhone.VerificationLinkPhone, {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
        path: "/verify_add_phonenumber_successfully",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_verification.PhoneVerificationSuccess, {})
      })]
    })
  });
};

var _default = UserUIRoutepage;
exports.default = _default;