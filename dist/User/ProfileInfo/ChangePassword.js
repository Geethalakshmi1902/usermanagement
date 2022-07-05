"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ChangePassword;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _InputField = _interopRequireDefault(require("../../Components/inputs/InputFields/InputField"));

var _formik = require("formik");

var Yup = _interopRequireWildcard(require("yup"));

var _Buttons = _interopRequireDefault(require("../../Components/Buttons"));

var _axios = _interopRequireDefault(require("axios"));

var _reactRouterDom = require("react-router-dom");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ChangePassword(props) {
  const [edit, setEdit] = _react.default.useState(false);

  const [emailedit, setEmailedit] = _react.default.useState(false);

  const [loading, setLoading] = _react.default.useState(false);

  const history = (0, _reactRouterDom.useNavigate)();
  const formik = (0, _formik.useFormik)({
    enableReinitialize: true,
    initialValues: {
      old_pwd: "",
      new_pwd: "" // verify_passw

    },
    validationSchema: Yup.object({
      old_pwd: Yup.string().max(10, "Must be 10 characters or less").min(4, "Must be 4 characters or more").required("Required"),
      new_pwd: Yup.string().max(10, "Must be 10 characters or less").min(8, "Must be 8 characters or more").required("Required") // verify_password: Yup.string()
      //   .oneOf([Yup.ref("new_pwd"), null], "Passwords don't match!")
      //   .max(10, "Must be 10 characters or less")
      //   .min(8, "Must be 8 characters or more")
      //   .required("Required"),

    }),
    onSubmit: values => {
      _axios.default.patch("change-password", formik.values, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "post-id": localStorage.getItem("postId"),
          "session-id": localStorage.getItem("session_id")
        }
      }).then(() => {// SuccessMessage({ message: "Password Updated Successfully" });
      }).catch(e => {// ErrorMessage({ message: e.response.data.message });
      });
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "pc-profile-custom-card",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "pc-profile-card-header padding",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "pc-profile-card-title",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
            className: "pc-card-label pc-text-dark",
            children: "Change Password"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "pc-text-muted",
            children: "Change your account password"
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "pc-profile-card-form",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "pc-profile-card-body",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "pc-profile-row pc-add-space",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "pc-lbl pc-col pc-col-flex"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "col-9",
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                class: "pc-alert pc-alert-custom",
                role: "alert",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  class: "pc-alert-icon",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                    class: "fa fa-warning fa-lg"
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  class: "pc-alert-text fw-bold",
                  children: ["Configure user passwords to expire periodically.", /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), "Users will need warning that their passwords are going to expire, or they might inadvertently get locked out of the system!"]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  class: "pc-alert-close",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                    type: "button",
                    class: "close",
                    "data-dismiss": "alert",
                    "aria-label": "Close",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                      "aria-hidden": "true",
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                        className: "contact-color danger",
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                          class: "fa fa-times fa-lg",
                          "aria-hidden": "true"
                        })
                      })
                    })
                  })
                })]
              })
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "pc-profile-row",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "pc-lbl pc-col pc-col-flex"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "pc-profile-text pc-col",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h5", {
                className: "pc-text-dark pc-add-margin",
                children: "Change Or Recover Your Password:"
              })
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "pc-form-group pc-profile-row",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
              class: "pc-col pc-col-flex pc-col-form-label",
              children: ["Old Password ", /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                class: "text-danger fa fa-star fa-2xs"
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "pc-profile-text pc-col",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, _objectSpread({
                type: "password",
                name: "old_pwd"
              }, formik.getFieldProps("old_pwd"))), formik.touched.old_pwd && formik.errors.old_pwd ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                className: "text-danger",
                children: formik.errors.old_pwd
              }) : null]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "pc-form-group pc-profile-row",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              class: "pc-col pc-col-flex pc-col-form-label",
              children: "New Password"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "pc-profile-text pc-col",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, _objectSpread({
                type: "password",
                name: "new_pwd"
              }, formik.getFieldProps("new_pwd"))), formik.touched.new_pwd && formik.errors.new_pwd ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                className: "text-danger",
                children: formik.errors.new_pwd
              }) : null]
            })]
          })]
        })
      })]
    })
  });
}