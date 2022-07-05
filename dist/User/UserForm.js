"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.promise.finally.js");

var _react = _interopRequireWildcard(require("react"));

var _Buttons = _interopRequireDefault(require("../Components/Buttons"));

var _ApiConst = require("../Components/ApiConst");

var _InputField = _interopRequireDefault(require("../Components/inputs/InputFields/InputField"));

var yup = _interopRequireWildcard(require("yup"));

var _formik = require("formik");

var _material = require("@mui/material");

var _reactRouterDom = require("react-router-dom");

var _axios = _interopRequireDefault(require("axios"));

var _reactToastify = require("react-toastify");

var _CustomAlert = require("../Components/CustomAlert");

require("react-toastify/dist/ReactToastify.css");

var _LoaderSmall = _interopRequireDefault(require("../Components/LoaderSmall"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import Axios from "../../../redux/setupAxios";
// import { HTTP_CODE } from "../../components/categoriesform/HttpCode";
// import Buttons from "@mui/material/Buttons";
const UserForm = () => {
  const Navigate = (0, _reactRouterDom.useNavigate)();
  const {
    id
  } = (0, _reactRouterDom.useParams)();
  const isEdit = id !== "-1";
  const API_URL = process.env.REACT_APP_API_URL;

  const ref = _react.default.useRef(null);

  const formikRef = _react.default.useRef(null);

  const [editData, setEditData] = _react.default.useState(null);

  const [pickedImage, setPickedImage] = _react.default.useState(null);

  const [loading, setLoading] = (0, _react.useState)(false);
  const phoneRegExp = /^((\\[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  (0, _react.useEffect)(() => {
    setLoading(true);
    Promise.all([...(isEdit ? [_axios.default.get("get_user_detail_by_id/" + id)] : [])]).then(values => {
      //User Data
      if (isEdit) {
        setEditData(values[0].data.data);
      } //Food Type

    }).catch(error => {}).finally(() => {
      setLoading(false);
    });
  }, []); //Form Initial Value

  const initialValues = {
    name: "",
    email: "",
    lname: "",
    phn_nbr: ""
  }; //Form Validation

  const validation = yup.object().shape({
    name: yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed").max(15, "Must be 15 characters or less").required("First Name Required"),
    lname: yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed").max(20, "Must be 20 characters or less").required("Last Name Required"),
    email: yup.string().email("Wrong email format").min(3, "Minimum 3 symbols").max(50, "Maximum 50 symbols").required("Email Required"),
    phn_nbr: yup.string() // .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone Number Required")
  });

  const handleAddOrEdit = () => {
    var value = formikRef.current.values; // var value = ref.current.values;

    var request = {};
    request["fname"] = value.name;
    request["email"] = value.email;
    request["lname"] = value.lname;
    request["phn_nbr"] = value.phn_nbr;
    setLoading(true);
    (isEdit ? _axios.default.patch("update_personal-information" + id + "/", request) : _axios.default.post("private-signup", request)).then(resp => {
      if (resp.status === 201) {
        Navigate("/signed_up_verification_otp_sent_to_phone"); // <ToastContainer />;

        setLoading(false);

        _reactToastify.toast.success("Personal info updated successfully.!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true
        });
      } else {
        showUserUpdateOrAddError();
      }
    }).catch(error => {
      showUserUpdateOrAddError();
    }).finally(() => {
      setLoading(false);
    });
  };

  const showUserUpdateOrAddError = () => {
    // <ToastContainer />;
    _reactToastify.toast.error("Unable to add the User!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.Formik, {
      innerRef: formikRef,
      initialValues: initialValues,
      enableReinitialize: true,
      onSubmit: () => {
        handleAddOrEdit(); // <ToastContainer />
      },
      validationSchema: validation,
      children: FormikProps => {
        const {
          values,
          touched,
          errors,
          handleChange
        } = FormikProps;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_formik.Form, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: " ".concat(loading ? "d-none" : "pc-profile-custom-card"),
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "pc-profile-card-header pc-padding",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "pc-profile-card-title",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
                    className: "pc-card-label pc-text-dark",
                    children: "User Information"
                  })
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
                        children: "User's Details:"
                      })
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                    className: "pc-form-group pc-profile-row",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                      class: "pc-col pc-col-flex pc-col-form-label pc-align-address-text",
                      children: "First Name"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                      className: "pc-profile-text pc-col",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, {
                        type: "text",
                        name: "name",
                        value: values.name,
                        onChange: handleChange,
                        error: touched.name && Boolean(errors.name),
                        helperText: touched.name && errors.name
                      }), FormikProps.touched.name && FormikProps.errors.name ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                        className: "danger",
                        children: FormikProps.errors.name
                      }) : null]
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                    className: "pc-form-group pc-profile-row",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                      class: "pc-col pc-col-flex pc-col-form-label pc-align-address-text",
                      children: "Last Name"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                      className: "pc-profile-text pc-col",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, {
                        fullWidth: true,
                        id: "lname",
                        name: "lname",
                        label: "LastName",
                        value: values.lname,
                        onChange: handleChange,
                        error: touched.lname && Boolean(errors.lname),
                        helperText: touched.lname && errors.lname // variant={InputStyle.outlined}
                        //   {...formik.getFieldProps("fname")}

                      }), touched.lname && errors.lname ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                        className: "danger",
                        children: errors.lname
                      }) : null]
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                    className: "pc-form-group pc-profile-row",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                      class: "pc-col pc-col-flex pc-col-form-label pc-align-address-text",
                      children: "Email"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                      className: "pc-profile-text pc-col",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, {
                        fullWidth: true,
                        id: "email",
                        name: "email",
                        label: "email",
                        value: values.email,
                        onChange: handleChange,
                        error: touched.email && Boolean(errors.email),
                        helperText: touched.email && errors.email // variant={InputStyle.outlined}
                        //   {...formik.getFieldProps("fname")}

                      }), touched.email && errors.email ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                        className: "danger",
                        children: errors.email
                      }) : null]
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                    className: "pc-form-group pc-profile-row",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                      class: "pc-col pc-col-flex pc-col-form-label pc-align-address-text",
                      children: "Phone Number"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                      className: "pc-profile-text pc-col",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, {
                        fullWidth: true,
                        id: "phn_nbr",
                        name: "phn_nbr",
                        label: "phn_nbr",
                        value: values.phn_nbr,
                        onChange: handleChange,
                        error: touched.phn_nbr && Boolean(errors.phn_nbr),
                        helperText: touched.phn_nbr && errors.phn_nbr // variant={InputStyle.outlined}
                        //   {...formik.getFieldProps("fname")}

                      }), touched.phn_nbr && errors.phn_nbr ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                        className: "danger",
                        children: errors.phn_nbr
                      }) : null]
                    })]
                  })]
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("di", {
                className: "pc-form-btn",
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "pc-btn-center",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Buttons.default, {
                    className: "pc-button",
                    label: "Cancel" // className="pc-form-button"
                    //   sx={{ marginRight: "10px" }}
                    //   variant={ButtonsType.outlined}
                    ,
                    onClick: () => {
                      Navigate("/UserCards/default-card/");
                    }
                  }), isEdit ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Buttons.default, {
                    className: "pc-button pc-bg",
                    label: "Update" // className="pc-form-button pc-bg"
                    ,
                    type: "submit" //   variant={ButtonsType.contained}

                  }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Buttons.default, {
                    className: "pc-button pc-bg {isLoading ? \"loading\" : undefined}",
                    label: "Submit",
                    isLoding: "true" // className="pc-form-button pc-bg"
                    ,
                    type: "submit" //   variant={ButtonsType.contained}
                    // onClick={() => handleAddOrEdit()}

                  })]
                })
              })]
            })
          })
        });
      }
    }), loading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_LoaderSmall.default, {})]
  });
};

var _default = UserForm;
exports.default = _default;