"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AddressInfo;

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

function AddressInfo(_ref) {
  let {
    data
  } = _ref;
  const location = (0, _reactRouterDom.useLocation)();
  let id = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);

  const [loading, setLoading] = _react.default.useState(false);

  const [edit, setEdit] = _react.default.useState(false);

  const formik = (0, _formik.useFormik)({
    enableReinitialize: true,
    initialValues: {
      building_name: data && data.building_name ? data.building_name : "",
      floor_line: data && data.floor_line ? data.floor_line : "",
      street_line: data && data.street_line ? data.street_line : "",
      zipcode: data && data.zipcode ? data.zipcode : "",
      door_no: data && data.door_no ? data.door_no : ""
    },
    validationSchema: Yup.object({
      building_name: Yup.string().max(15, "Must be 15 characters or less"),
      door_no: Yup.string().required("Door No. Required"),
      floor_line: Yup.string().required("Address line 1 Required"),
      zipcode: Yup.string().required("Zipcode Required") //  tus: Yup.string().required("status Required"),

    }),
    onSubmit: values => {
      setLoading(true);

      if (data.length != 0) {
        _axios.default.patch("update-user_address_information/" + id, values).then(res => {// SuccessMessage({ message: "Address Added Successfully" });
        }).catch(e => {// ErrorMessage({ message: e.response.data.message });
        });
      } else {
        _axios.default.post("user_address_information", values).then(res => {// SuccessMessage({ message: "Address Updated Successfully" });
        }).catch(e => {// ErrorMessage({ message: e.response.data.message });
        });
      }

      setLoading(false);
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "pc-profile-custom-card",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "pc-profile-card-header padding",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "pc-profile-card-title",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
            className: "pc-card-label pc-text-dark",
            children: "Address Information"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "pc-text-muted ",
            children: "Update your address informaiton"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "pc-card-toolbar",
          children: edit === true ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Buttons.default, {
              type: "button",
              form: "personalForm",
              className: "pc-edit-btn btn-success me-2",
              label: "Save Changes",
              isDisabled: loading,
              onClick: formik.handleSubmit
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Buttons.default, {
              type: "button",
              className: "pc-edit-btn btn-secondary",
              label: "Cancel",
              onClick: () => {
                setEdit(false);
              }
            })]
          }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Buttons.default, {
            type: "button",
            className: "pc-edit-btn btn-dark",
            label: "Edit",
            onClick: () => {
              setEdit(true);
            }
          })
        })]
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
                children: "User's Address Details:"
              })
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "pc-form-group pc-profile-row",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              class: "pc-col pc-col-flex pc-col-form-label pc-align-address-text",
              children: "Buliding Name"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "pc-profile-text pc-col",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, _objectSpread(_objectSpread({
                type: "text",
                name: "building_name"
              }, formik.getFieldProps("building_name")), {}, {
                isDisabled: !edit
              })), formik.touched.building_name && formik.errors.building_name ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                className: "text-danger",
                children: formik.errors.building_name
              }) : null]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "pc-form-group pc-profile-row",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              class: "pc-col pc-col-flex pc-col-form-label pc-align-address-text",
              children: "door No"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "pc-profile-text pc-col",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, _objectSpread(_objectSpread({
                type: "text",
                name: "door_no"
              }, formik.getFieldProps("door_no")), {}, {
                isDisabled: !edit
              })), formik.touched.door_no && formik.errors.door_no ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                className: "text-danger",
                children: formik.errors.door_no
              }) : null]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "pc-form-group pc-profile-row",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              class: "pc-col pc-col-flex pc-col-form-label pc-align-address-text",
              children: "Address Line 1"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "pc-profile-text pc-col",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, _objectSpread(_objectSpread({
                type: "text",
                name: "floor_line"
              }, formik.getFieldProps("floor_line")), {}, {
                isDisabled: !edit
              })), formik.touched.floor_line && formik.errors.floor_line ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                className: "text-danger",
                children: formik.errors.floor_line
              }) : null]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "pc-form-group pc-profile-row",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              class: "pc-col pc-col-flex pc-col-form-label pc-align-address-text",
              children: "Address Line 2"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "pc-profile-text pc-col",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, _objectSpread(_objectSpread({
                type: "text",
                name: "street_line"
              }, formik.getFieldProps("street_line")), {}, {
                isDisabled: !edit
              })), formik.touched.street_line && formik.errors.street_line ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                className: "text-danger",
                children: formik.errors.street_line
              }) : null]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "pc-form-group pc-profile-row",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              class: "pc-col pc-col-flex pc-col-form-label pc-align-address-text",
              children: "Zipcode"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "pc-profile-text pc-col",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, _objectSpread(_objectSpread({
                type: "text",
                name: "zipcode"
              }, formik.getFieldProps("zipcode")), {}, {
                isDisabled: !edit
              })), formik.touched.zipcode && formik.errors.zipcode ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                className: "text-danger",
                children: formik.errors.zipcode
              }) : null]
            })]
          })]
        })
      })]
    })
  });
}