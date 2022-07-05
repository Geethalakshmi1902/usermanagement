"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContactInfo;

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

function ContactInfo(props) {
  const [edit, setEdit] = _react.default.useState(false);

  const [emailedit, setEmailedit] = _react.default.useState(false);

  const {
    className,
    user,
    UserID
  } = props;

  const [loading, setLoading] = _react.default.useState(false);

  const history = (0, _reactRouterDom.useNavigate)();
  const formik = (0, _formik.useFormik)({
    enableReinitialize: true,
    initialValues: {
      email: user.email_data && user.email_data.length ? user.email_data.filter(elm => elm.type === 1).map(elm => elm.email) : "",
      phn_nbr: user.phonenumber_data && user.phonenumber_data.length ? user.phonenumber_data.filter(elm => elm.type === 1).map(elm => elm.phone_number) || user.phonenumber_data.filter(elm => elm.type === 1).map(elm => elm.fstsegmnt) : "",
      cntry_cde: "+91"
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email Address Required").matches(/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Invalid Email format") // phn_nbr: Yup.string()
      //   .required("Phone Number Required")
      //   .matches(/^[0-9]{10}$/, "Phone number is not valid"),

    }),
    onSubmit: values => {
      setLoading(true);
    }
  });

  const submitEmail = e => {
    e.preventDefault();

    _axios.default.post("add_email", {
      email: formik.values.email
    }).then(res => {
      history({
        pathname: res.data.data.context,
        search: "?email=" + formik.values.email
      });
      setLoading(false); // SuccessMessage({ message: "Contact Updated Successfully" });
    }).catch(e => {
      setLoading(false); // ErrorMessage({ message: "Something Wrong! " });
    });
  }; // function submitphnNbr() => () {


  const submitphnNbr = e => {
    e.preventDefault();

    _axios.default.post("add_phonenumber", {
      phn_nbr: formik.values.phn_nbr
    }).then(res => {
      history({
        pathname: res.data.data.context,
        search: "?phn_nbr=" + formik.values.phn_nbr
      });
      setLoading(false); // SuccessMessage({ message: "Contact Updated Successfully" });
    }).catch(e => {
      setLoading(false); // ErrorMessage({ message: "Something Wrong! " });
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "pc-profile-custom-card",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "pc-profile-card-header padding",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "pc-profile-card-title",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
            className: "pc-card-label pc-text-dark",
            children: "Contact Information"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "pc-text-muted",
            children: "Update your contact informaiton"
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "pc-profile-card-form",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "pc-profile-card-body",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "pc-profile-row",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "pc-lbl pc-col pc-col-flex"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "pc-profile-text pc-col",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h5", {
                className: "pc-text-dark pc-add-margin",
                children: "User's Contact Details:"
              })
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "pc-form-group pc-profile-row",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              class: "pc-col pc-col-flex pc-col-form-label",
              children: "Email"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "pc-profile-text pc-col",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default // svg="/media/svg/icons/Navigation/Check.svg"
              , _objectSpread(_objectSpread({
                type: "text",
                name: "email",
                icon: "at"
              }, formik.getFieldProps("email")), {}, {
                isDisabled: !emailedit
              })), formik.touched.email && formik.errors.email ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                className: "text-danger",
                children: formik.errors.email
              }) : null]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "pc-input-group-text",
              children: emailedit === false ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "contact-color primary",
                onClick: e => {
                  setEmailedit(true);
                  e.preventDefault();
                },
                children: [" ", /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                  class: "fa fa-pencil fa-lg",
                  "aria-hidden": "true"
                })]
              }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  onClick: e => {
                    setEmailedit(true);
                    submitEmail(e);
                  } // isDisabled={!emailedit}
                  ,
                  className: "contact-color sucess",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                    class: "fa fa-check fa-lg"
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  onClick: () => setEmailedit(false),
                  className: "contact-color danger",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                    class: "fa fa-times fa-lg",
                    "aria-hidden": "true"
                  })
                })]
              })
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "pc-form-group pc-profile-row",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              class: "pc-col pc-col-flex pc-col-form-label",
              children: "Contact Phone"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "pc-profile-text pc-col",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, _objectSpread(_objectSpread({
                type: "text",
                name: "phn_nbr",
                icon: "phone"
              }, formik.getFieldProps("phn_nbr")), {}, {
                isDisabled: !edit
              })), formik.touched.phn_nbr && formik.errors.phn_nbr ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                className: "text-danger",
                children: formik.errors.phn_nbr
              }) : null]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "pc-input-group-text",
              children: edit === false ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "contact-color primary",
                onClick: e => {
                  setEdit(true);
                  e.preventDefault();
                },
                children: [" ", /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                  class: "fa fa-pencil fa-lg",
                  "aria-hidden": "true"
                })]
              }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  onClick: e => {
                    setEdit(true);
                    submitphnNbr(e);
                  },
                  isDisabled: !edit,
                  className: "contact-color sucess",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                    class: "fa fa-check fa-lg"
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  onClick: () => setEdit(false),
                  className: "contact-color danger",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                    class: "fa fa-times fa-lg",
                    "aria-hidden": "true"
                  })
                })]
              })
            })]
          })]
        })
      })]
    })
  });
}