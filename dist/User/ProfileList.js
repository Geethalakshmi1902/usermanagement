"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProfileList;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

require("../style.css");

var _colortheme = require("../colortheme");

var _ProfileAsideMenu = _interopRequireDefault(require("./ProfileInfo/ProfileAsideMenu"));

var _NotificationCard = _interopRequireDefault(require("./ProfileInfo/NotificationCard"));

var _MarketLead = _interopRequireDefault(require("./ProfileInfo/MarketLead"));

var _ProfileNewArrival = _interopRequireDefault(require("./ProfileInfo/ProfileNewArrival"));

var _PersonalInfo = _interopRequireDefault(require("./ProfileInfo/PersonalInfo"));

var _ContactInfo = _interopRequireDefault(require("./ProfileInfo/ContactInfo"));

var _AddressInfoItems = _interopRequireDefault(require("./ProfileInfo/AddressInfoItems"));

var _ChangePassword = _interopRequireDefault(require("./ProfileInfo/ChangePassword"));

var _reactRouterDom = require("react-router-dom");

var _axios = _interopRequireDefault(require("axios"));

var _reactRouter = require("react-router");

var _ProfileInfo = _interopRequireDefault(require("./ProfileInfo/ProfileInfo"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ProfileList() {
  const [profileview, setProfileview] = (0, _react.useState)(false);

  const [market, setMarket] = _react.default.useState(false);

  const [Notification, setNotification] = _react.default.useState(false);

  const [month, setMonth] = _react.default.useState(false);

  const [week, setWeek] = _react.default.useState(false);

  const [profile, setProfile] = (0, _react.useState)([]);
  const [user, setUser] = (0, _react.useState)("");
  const location = (0, _reactRouterDom.useLocation)();
  let UserID = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
  (0, _react.useEffect)(() => {
    document.documentElement.style.setProperty("--card-background", _colortheme.ColorTheme.card_background);
    document.documentElement.style.setProperty("--visible-link-with-hover", _colortheme.ColorTheme.visible_link_with_hover);
    document.documentElement.style.setProperty("--text-muted-color", _colortheme.ColorTheme.text_muted_color);
    document.documentElement.style.setProperty("--currency-symbol", _colortheme.ColorTheme.currency_symbol);
    document.documentElement.style.setProperty("--Price-text", _colortheme.ColorTheme.Price_text);
    document.documentElement.style.setProperty("--user-group-pic-border", _colortheme.ColorTheme.user_group_pic_border);
    document.documentElement.style.setProperty("--user-profile-pic-bg)", _colortheme.ColorTheme.user_profile_pic_bg);
    document.documentElement.style.setProperty("--user-profile-text", _colortheme.ColorTheme.user_profile_text);
    document.documentElement.style.setProperty("--ask-btn-text", _colortheme.ColorTheme.ask_btn_text);
    document.documentElement.style.setProperty("--ask-btn-bg", _colortheme.ColorTheme.ask_btn_bg);
    document.documentElement.style.setProperty("--hire-btn-text", _colortheme.ColorTheme.hire_btn_text);
    document.documentElement.style.setProperty("--hire-btn-bg", _colortheme.ColorTheme.hire_btn_bg);
    document.documentElement.style.setProperty("--hire-btn-hover-bg", _colortheme.ColorTheme.hire_btn_hover_bg);
    document.documentElement.style.setProperty("--hire-btn-hover-border", _colortheme.ColorTheme.hire_btn_hover_border);
    document.documentElement.style.setProperty("--user-items-text", _colortheme.ColorTheme.user_items_text);
    document.documentElement.style.setProperty("--user-description", _colortheme.ColorTheme.user_description);
    document.documentElement.style.setProperty("--progressbar-bg", _colortheme.ColorTheme.progressbar_bg);
    document.documentElement.style.setProperty("--progressbar-percentage", _colortheme.ColorTheme.progressbar_percentage);
    document.documentElement.style.setProperty("--ask-btn-text-active", _colortheme.ColorTheme.ask_btn_text_active);
  }, []);
  (0, _react.useEffect)(() => {
    _axios.default.get("get_user_detail_by_id/" + UserID).then(res => {
      setProfile(res.data.data.profile_data);
      setUser(res.data.data);
    });
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "pc-container",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Routes, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
          path: "*",
          element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ProfileAsideMenu.default, {
            profile: profile,
            user: user
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "pc-profile-row",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Routes, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
            path: "/overview/:id",
            element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "pc-menu",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "pc-top-menu",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_MarketLead.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_NotificationCard.default, {})]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ProfileNewArrival.default, {})]
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
            path: "/personal-information/:id",
            element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ProfileInfo.default, {
                profile: profile,
                user: user,
                className: "card-stretch"
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
            path: "/contact-information/:id",
            element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ContactInfo.default, {
                profile: profile,
                user: user,
                className: "card-stretch"
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
            path: "/address-information/:id",
            element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_AddressInfoItems.default, {
                profile: profile,
                user: user,
                className: "card-stretch"
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
            path: "/change-password/:id",
            element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ChangePassword.default, {
                profile: profile,
                user: user,
                className: "card-stretch"
              })
            })
          })]
        })
      })]
    })
  });
}