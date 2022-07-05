"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProfileInfo;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.promise.finally.js");

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

var _formik = require("formik");

var Yup = _interopRequireWildcard(require("yup"));

var _axios = _interopRequireDefault(require("axios"));

var _SelectField = _interopRequireDefault(require("../../Components/inputs/InputFields/SelectField"));

var _InputField = _interopRequireDefault(require("../../Components/inputs/InputFields/InputField"));

var _Avatar = _interopRequireDefault(require("../../Components/inputs/InputFields/Avatar"));

var _reactToastify = require("react-toastify");

var _Buttons = _interopRequireDefault(require("../../Components/Buttons"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import { Formik, FormikProps, Form ,Field} from "formik";
function ProfileInfo(props) {
  var _profile$map, _user$title, _user$fname, _user$mname, _user$lname, _profile$0$date_of_bi, _profile$, _profile$0$gender, _profile$2, _profile$0$marital_st, _profile$3;

  const {
    className,
    profile,
    user
  } = props;

  const [afterCrop, setAfterCrop] = _react.default.useState("");

  const [loading, setLoading] = _react.default.useState(false);

  const [edit, setEdit] = _react.default.useState(false);

  const [imageChanged, setImageChanged] = _react.default.useState(false);

  const {
    id
  } = (0, _reactRouter.useParams)();
  console.log(profile); //Title

  const [titles] = _react.default.useState([{
    id: "Mr.",
    name: "Mr."
  }, {
    id: "Mrs.",
    name: "Mrs."
  }, {
    id: "Miss.",
    name: "Miss."
  }]); //Gender


  const [genders] = _react.default.useState([{
    id: 0,
    name: "Male"
  }, {
    id: 1,
    name: "Female"
  }, {
    id: 2,
    name: "Others"
  }]); //Marital Status


  const [maritals] = _react.default.useState([{
    id: 0,
    name: "Married"
  }, {
    id: 1,
    name: "Single"
  }, {
    id: 2,
    name: "Other"
  }]);

  function getImage(img) {
    setAfterCrop(img);
    setImageChanged(true);
    formik.setFieldValue("image", img);
  }

  const formik = (0, _formik.useFormik)({
    enableReinitialize: true,
    initialValues: {
      image: (_profile$map = profile.map(elm => elm.avatar_url)) !== null && _profile$map !== void 0 ? _profile$map : "",
      title: (_user$title = user.title) !== null && _user$title !== void 0 ? _user$title : "",
      fname: (_user$fname = user.fname) !== null && _user$fname !== void 0 ? _user$fname : "",
      mname: (_user$mname = user.mname) !== null && _user$mname !== void 0 ? _user$mname : "",
      lname: (_user$lname = user.lname) !== null && _user$lname !== void 0 ? _user$lname : "",
      dob: (_profile$0$date_of_bi = (_profile$ = profile[0]) === null || _profile$ === void 0 ? void 0 : _profile$.date_of_birth) !== null && _profile$0$date_of_bi !== void 0 ? _profile$0$date_of_bi : "",
      gender: (_profile$0$gender = (_profile$2 = profile[0]) === null || _profile$2 === void 0 ? void 0 : _profile$2.gender) !== null && _profile$0$gender !== void 0 ? _profile$0$gender : "",
      marital_sts: (_profile$0$marital_st = (_profile$3 = profile[0]) === null || _profile$3 === void 0 ? void 0 : _profile$3.marital_status) !== null && _profile$0$marital_st !== void 0 ? _profile$0$marital_st : ""
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Select a tittle"),
      fname: Yup.string().max(15, "Must be 15 characters or less").required("First Name Required"),
      lname: Yup.string().max(20, "Must be 20 characters or less").required("Last Name Required"),
      // mname: Yup.string().max(20, "Must be 20 characters or less"),
      // image: Yup.string().required("Image Required"),
      dob: Yup.string().required("Select D.O.B"),
      gender: Yup.string().required("Select your gender"),
      marital_sts: Yup.string().required("Select your marital status")
    }),
    onSubmit: () => {
      setLoading(true);

      if (imageChanged) {
        _axios.default.post("profile-img", {
          image: afterCrop
        }).then(res => {
          submitter(res.data.avatar_url);

          if (res.status === 200) {
            _reactToastify.toast.success("Image updated successfully.!", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true
            });
          } else {
            showDeleteError();
          }
        }).catch(e => {
          setLoading(false);
        });
      } else {
        submitter(formik.values.image);
      }
    }
  });

  function submitter(img) {
    _axios.default.patch("update_personal-information?id=" + id, formik.values).then(resp => {
      if (resp.status === 200) {
        _reactToastify.toast.success("Personal info updated successfully.!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true
        });
      } else {
        showDeleteError();
      }
    }).catch(error => {
      showDeleteError();
    }).finally(() => {
      setLoading(false);
    });
  }

  const showDeleteError = () => {
    _reactToastify.toast.error("Unable to update the PersonalInfo!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "card card-custom ".concat(className),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "card-header py-3",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "card-title align-items-start flex-column",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
            className: "card-label fw-bolder text-dark",
            children: "Personal Information"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "text-muted fw-bold font-size-sm mt-1",
            children: "Update your personal informaiton"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "card-toolbar",
          children: edit === true ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Buttons.default, {
              type: "button",
              form: "personalForm",
              className: "btn btn-success me-2",
              label: "Save Changes",
              isDisabled: loading,
              onClick: formik.handleSubmit
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Buttons.default, {
              type: "button",
              className: "btn btn-secondary",
              label: "Cancel",
              onClick: () => {
                setEdit(false);
              }
            })]
          }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Buttons.default, {
            type: "button",
            className: "btn btn-dark",
            label: "Edit",
            onClick: () => {
              setEdit(true);
            }
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "form",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "card-body",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("form", {
            id: "personalForm",
            className: "row ",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "col-xl-9 my-2",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                  className: "col-3"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "col-9",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h6", {
                    className: "text-dark fw-bold mb-10",
                    children: "User's Profile Details:"
                  })
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "form-group row",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                  className: "col-form-label col-3 text-lg-end text-start",
                  children: "Avatar"
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "col-9",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.default, _objectSpread(_objectSpread({
                    className: "box",
                    name: "image",
                    value: formik.values.image,
                    getImage: getImage
                  }, formik.getFieldProps("image")), {}, {
                    disabled: !edit
                  })), formik.touched.image && formik.errors.image ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                    className: "text-danger",
                    children: formik.errors.image
                  }) : null]
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "form-group row",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                  className: "col-form-label col-3 text-lg-end text-start",
                  children: "Title"
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "col-9",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectField.default, _objectSpread(_objectSpread({
                    type: "text",
                    name: "title",
                    list: titles
                  }, formik.getFieldProps("title")), {}, {
                    isDisabled: !edit
                  })), formik.touched.title && formik.errors.title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                    className: "text-danger",
                    children: formik.errors.title
                  }) : null]
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "form-group row",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                  className: "col-form-label col-3 text-lg-end text-start",
                  children: "First Name"
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "col-9",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, _objectSpread(_objectSpread({
                    type: "text",
                    name: "fname"
                  }, formik.getFieldProps("fname")), {}, {
                    isDisabled: !edit
                  })), formik.touched.fname && formik.errors.fname ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                    className: "text-danger",
                    children: formik.errors.fname
                  }) : null]
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "form-group row",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                  className: "col-form-label col-3 text-lg-end text-start",
                  children: "Middle Name"
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "col-9",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, _objectSpread(_objectSpread({
                    type: "text",
                    name: "mname"
                  }, formik.getFieldProps("mname")), {}, {
                    isDisabled: !edit
                  })), formik.touched.mname && formik.errors.mname ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                    className: "text-danger",
                    children: formik.errors.mname
                  }) : null]
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "form-group row",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                  className: "col-form-label col-3 text-lg-end text-start",
                  children: "Last Name"
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "col-9",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, _objectSpread(_objectSpread({
                    type: "text",
                    name: "lname"
                  }, formik.getFieldProps("lname")), {}, {
                    isDisabled: !edit
                  })), formik.touched.lname && formik.errors.lname ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                    className: "text-danger",
                    children: formik.errors.lname
                  }) : null]
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "form-group row",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                  className: "col-form-label col-3 text-lg-end text-start",
                  children: "D.O.B"
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "col-9",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, _objectSpread(_objectSpread({
                    type: "date"
                  }, formik.getFieldProps("dob")), {}, {
                    isDisabled: !edit
                  })), formik.touched.dob && formik.errors.dob ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                    className: "text-danger",
                    children: formik.errors.dob
                  }) : null]
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "form-group row",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                  className: "col-form-label col-3 text-lg-end text-start",
                  children: "Gender"
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "col-9",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectField.default, _objectSpread(_objectSpread({
                    list: genders,
                    name: "gender"
                  }, formik.getFieldProps("gender")), {}, {
                    isDisabled: !edit
                  })), formik.touched.gender && formik.errors.gender ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                    className: "text-danger",
                    children: formik.errors.gender
                  }) : null]
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "form-group row",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                  className: "col-form-label col-3 text-lg-end text-start",
                  children: "Marital Status"
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "col-9",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectField.default, _objectSpread(_objectSpread({
                    list: maritals,
                    name: "marital_sts"
                  }, formik.getFieldProps("marital_sts")), {}, {
                    isDisabled: !edit
                  })), formik.touched.marital_sts && formik.errors.marital_sts ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                    className: "text-danger",
                    children: formik.errors.marital_sts
                  }) : null]
                })]
              })]
            })
          })
        })
      })]
    })
  });
}