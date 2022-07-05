"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserForm = UserForm;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _InputField = _interopRequireDefault(require("../../Components/inputs/InputFields/InputField"));

var _formik = require("formik");

var Yup = _interopRequireWildcard(require("yup"));

var _SelectField = _interopRequireDefault(require("../../Components/inputs/InputFields/InputFields/SelectField"));

var _constants = require("../../services/constants");

var _Buttons = _interopRequireDefault(require("../../Components/Buttons"));

var _reactRedux = require("react-redux");

var _ApiConst = require("../../Components/ApiConst");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function UserForm(_ref) {
  let {
    type,
    onClose,
    reOpen,
    data
  } = _ref;
  const authUser = (0, _reactRedux.useSelector)(state => state.auth);
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const [statuses] = (0, _react.useState)([{
    id: "1",
    name: "ON"
  }, {
    id: "0",
    name: "OFF"
  }]);
  const [titles] = (0, _react.useState)([{
    id: "Mr.",
    name: "Mr."
  }, {
    id: "Mrs.",
    name: "Mrs."
  }, {
    id: "Miss.",
    name: "Miss."
  }]);
  const formik = (0, _formik.useFormik)({
    enableReinitialize: true,
    initialValues: {
      fname: "",
      email: "",
      lname: "",
      phn_nbr: ""
    },
    validationSchema: Yup.object({
      fname: Yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed").max(15, "Must be 15 characters or less").required("First Name Required"),
      lname: Yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed").max(20, "Must be 20 characters or less").required("Last Name Required"),
      email: Yup.string().email("Wrong email format").min(3, "Minimum 3 symbols").max(50, "Maximum 50 symbols").required("Email Required") // phn_nbr: Yup.string()
      //   .matches(phoneRegExp, "Phone number is not valid")
      //   .required("Phone Number Required"),

    }),
    onSubmit: values => {
      if (type === "add") {
        submitter(values);
      } else {
        updater(values);
      }
    }
  });

  function submitter(values) {
    (0, _ApiConst.postUser)(values).then(res => {
      onClose(); // AddNewSuccess({ message: "User added", reOpen: reOpen });
    }).catch(e => {
      onClose(); // ErrorMessage({ message: e.response.data.message });
    });
  }

  function updater(values) {
    (0, _ApiConst.patchUser)(data.id, values).then(() => {
      onClose(); // SuccessMessage({ message: "User updated Successfully!" });
    }).catch(e => {
      onClose(); // ErrorMessage({ message: e.response.data.message });
    });
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
    onSubmit: formik.handleSubmit,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "form-group row",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
        className: "col-form-label col-3 text-lg-right text-left",
        children: "First Name"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "col-9",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, _objectSpread({
          type: "text",
          name: "fname"
        }, formik.getFieldProps("fname"))), formik.touched.fname && formik.errors.fname ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
          className: "text-danger",
          children: formik.errors.fname
        }) : null]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "form-group row",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
        className: "col-form-label col-3 text-lg-right text-left",
        children: "Last Name"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "col-9",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, _objectSpread({
          type: "text",
          name: "lname"
        }, formik.getFieldProps("lname"))), formik.touched.lname && formik.errors.lname ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
          className: "text-danger",
          children: formik.errors.lname
        }) : null]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "form-group row",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
        className: "col-form-label col-3 text-lg-right text-left",
        children: "Email"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "col-9",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, _objectSpread({
          type: "text",
          name: "email"
        }, formik.getFieldProps("email"))), formik.touched.email && formik.errors.email ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
          className: "text-danger",
          children: formik.errors.email
        }) : null]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "form-group row",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
        className: "col-form-label col-3 text-lg-right text-left",
        children: "Phone Number"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "col-9",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, _objectSpread({
          type: "text",
          name: "phn_nbr"
        }, formik.getFieldProps("phn_nbr"))), formik.touched.phn_nbr && formik.errors.phn_nbr ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
          className: "text-danger",
          children: formik.errors.phn_nbr
        }) : null]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "text-center",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Buttons.default, {
        type: "submit",
        className: "btn btn-sm btn-success fw-bolder mr-2 ripple",
        label: "Submit",
        onClick: formik.onSubmit,
        isHidden: type === "update" ? 1 : 0
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Buttons.default, {
        type: "submit",
        className: "btn btn-sm btn-success fw-bolder mr-2 ripple",
        label: "Update",
        isHidden: type === "add" ? 1 : 0
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Buttons.default, {
        type: "button",
        className: "btn btn-sm btn-primary fw-bolder ripple",
        label: "Cancel",
        onClick: onClose
      })]
    })]
  });
}