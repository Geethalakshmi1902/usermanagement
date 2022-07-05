"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SocialCard;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

require("../../style.css");

var _blank = _interopRequireDefault(require("../../assets/Images/blank.png"));

var _colortheme = require("../../colortheme");

var _reactRouterDom = require("react-router-dom");

var _reactRouter = require("react-router");

var _ApiConst = require("../../Components/ApiConst");

var _reactToastify = require("react-toastify");

var _DialogBox = require("../../Components/inputs/DialogBox");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _MessageOut = _interopRequireDefault(require("../../Components/chat/MessageOut"));

var _MessageIn = _interopRequireDefault(require("../../Components/chat/MessageIn"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
function SocialCard(props) {
  var _user$profile_data$;

  // const classes = useStyles();
  const api = process.env.REACT_APP_API_URL;
  const {
    user,
    userEdit,
    userDel
  } = props; // const imgText = (user.fname.charAt(0) + user.lname.charAt(0)).toUpperCase();

  const [show, setShow] = (0, _react.useState)(false);

  const capitalizeFirstLetter = string => {// return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const fullName = name => {
    if (name.length > 8) {
      return name.substring(0, 8) + "...";
    } else {
      return name;
    }
  };

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      class: "card card-custom gutter-b card-stretch",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        class: "card-body text-center pt-4",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          class: "d-flex justify-content-end",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            class: "dropdown dropdown-inline dropdown",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              class: "topbar-item",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                class: "btn btn-clean btn-hover-light-primary btn-sm btn-icon",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                  class: "ki ki-bold-more-hor"
                })
              })
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          class: "mt-7",
          children: user.profile ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "symbol symbol-circle symbol-lg-75",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
              alt: "Pic",
              src: api + ((_user$profile_data$ = user.profile_data[0]) === null || _user$profile_data$ === void 0 ? void 0 : _user$profile_data$.avatar_url)
            })
          }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "symbol symbol-lg-75 symbol-circle symbol-primary",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "symbol-label font-size-h3 fw-boldest",
              children: "mp"
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          class: "my-2",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
            class: "text-dark fw-bold text-hover-primary font-size-h4 mb-0",
            href: "/ProfileAllList/overview/" + user.id,
            children: (user === null || user === void 0 ? void 0 : user.fname) == null || (user === null || user === void 0 ? void 0 : user.fname) == null ? "noname" : (user.fname + " " + user.lname).slice(0, 8) + "..."
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          class: "label label-inline label-lg label-light-warning btn-sm fw-bold",
          children: "Active"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          class: "mt-4 mb-3 mx-auto",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            class: "btn btn-md btn-icon btn-light-primary btn-hover-light btn-pill mx-2",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
              class: "fas fa-edit fa-sm",
              "aria-hidden": "true"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            class: "btn btn-md btn-icon btn-light-danger btn-hover-light btn-pill mx-2",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
              class: "fas fa-trash fa-sm",
              "aria-hidden": "true"
            })
          })]
        })]
      })
    })
  });
}