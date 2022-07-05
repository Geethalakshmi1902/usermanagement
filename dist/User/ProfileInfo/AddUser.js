"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddUser = AddUser;

require("core-js/modules/es.json.stringify.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _Buttons = _interopRequireDefault(require("../../Components/Buttons"));

var _InputField = _interopRequireDefault(require("../../Components/inputs/InputFields/Inputs/InputFields/InputField"));

var _SelectField = _interopRequireDefault(require("../../Components/inputs/InputFields/InputFields/SelectField"));

var _formik = require("formik");

var Yup = _interopRequireWildcard(require("yup"));

var _Avatar = _interopRequireDefault(require("../../Components/inputs/InputFields/InputFields/Avatar"));

var _reactRouterDom = require("react-router-dom");

var _CheckBox = _interopRequireDefault(require("../../Components/inputs/InputFields/InputFields/CheckBox"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function AddUser() {
  const formik = (0, _formik.useFormik)({
    initialValues: {
      image: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      companyName: "",
      companySite: "",
      userName: "",
      language: "",
      timezone: "",
      communication: [],
      passwordRestCheckbox: "",
      address1: "",
      address2: "",
      postcode: "",
      city: "",
      state: "",
      country: ""
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
      lastName: Yup.string().max(20, "Must be 20 characters or less").required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.string().matches(/^[0-9]{10}$/, "Phone number is not valid").required("Required"),
      companyName: Yup.string().required("Required"),
      image: Yup.mixed().required("A file is required"),
      companySite: Yup.string().required("Required"),
      userName: Yup.string().required("Required"),
      language: Yup.string().required("Required"),
      timezone: Yup.string().required("Required"),
      communication: Yup.string().required("Please select at least 1 option"),
      passwordRestCheckbox: Yup.string().required("Required"),
      address1: Yup.string().required("Required"),
      address2: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      state: Yup.string().required("Required"),
      postcode: Yup.string().required("Required"),
      country: Yup.string().required("Required")
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  const [step, setStep] = (0, _react.useState)("one");
  const [wiz_state, setWizState] = (0, _react.useState)("first");
  const [state, setState] = (0, _react.useState)({
    one: "current",
    two: "pending",
    three: "pending",
    four: "pending"
  });
  const stateOne = state.one;
  const stateTwo = state.two;
  const stateThree = state.three;
  const stateFour = state.four;

  const stepNext = e => {
    e.preventDefault();

    switch (step) {
      case "one":
        setStep("two");
        setState(prevState => {
          return _objectSpread(_objectSpread({}, prevState), {}, {
            one: "done",
            two: "current"
          });
        });
        setWizState("between");
        break;

      case "two":
        setStep("three");
        setState(prevState => {
          return _objectSpread(_objectSpread({}, prevState), {}, {
            two: "done",
            three: "current"
          });
        });
        break;

      case "three":
        setStep("four");
        setState(prevState => {
          return _objectSpread(_objectSpread({}, prevState), {}, {
            three: "done",
            four: "current"
          });
        });
        setWizState("last");
        break;

      default:
        alert("finished");
        break;
    }
  };

  const stepPrev = e => {
    e.preventDefault();

    switch (step) {
      case "four":
        setStep("three");
        setState(prevState => {
          return _objectSpread(_objectSpread({}, prevState), {}, {
            three: "current",
            four: "pending"
          });
        });
        setWizState("between");
        break;

      case "three":
        setStep("two");
        setState(prevState => {
          return _objectSpread(_objectSpread({}, prevState), {}, {
            two: "current",
            three: "pending"
          });
        });
        break;

      case "two":
        setStep("one");
        setState(prevState => {
          return _objectSpread(_objectSpread({}, prevState), {}, {
            one: "current",
            two: "pending"
          });
        });
        setWizState("first");
        break;

      default:
        alert("start point");
        break;
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "card card-custom card-transparent",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "card-body p-0",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "wizard wizard-4",
        id: "kt_wizard",
        "data-wizard-state": wiz_state,
        "data-wizard-clickable": "true",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "wizard-nav",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "wizard-steps",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "wizard-step",
              "data-wizard-type": "step",
              "data-wizard-state": stateOne,
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "wizard-wrapper",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "wizard-number",
                  children: "1"
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "wizard-label",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "wizard-title",
                    children: "Profile"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "wizard-desc",
                    children: "User's Personal Information"
                  })]
                })]
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "wizard-step",
              "data-wizard-type": "step",
              "data-wizard-state": stateTwo,
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "wizard-wrapper",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "wizard-number",
                  children: "2"
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "wizard-label",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "wizard-title",
                    children: "Account"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "wizard-desc",
                    children: "User's Account & Settings"
                  })]
                })]
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "wizard-step",
              "data-wizard-type": "step",
              "data-wizard-state": stateThree,
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "wizard-wrapper",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "wizard-number",
                  children: "3"
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "wizard-label",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "wizard-title",
                    children: "Address"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "wizard-desc",
                    children: "User's Shipping Address"
                  })]
                })]
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "wizard-step",
              "data-wizard-type": "step",
              "data-wizard-state": stateFour,
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "wizard-wrapper",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "wizard-number",
                  children: "4"
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "wizard-label",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "wizard-title",
                    children: "Submission"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "wizard-desc",
                    children: "Review and Submit"
                  })]
                })]
              })
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "card card-custom card-shadowless rounded-top-0",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "card-body p-0",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "row justify-content-center py-8 px-8 py-lg-15 px-lg-10",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "col-xl-12 col-xxl-10",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("form", {
                  className: "form",
                  id: "kt_form",
                  onSubmit: formik.handleSubmit,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                      className: "col-xl-9",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                        className: "my-5 step",
                        "data-wizard-type": "step-content",
                        "data-wizard-state": stateOne,
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
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
                                className: "col-form-label col-3 text-lg-right text-left",
                                children: "Avatar"
                              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                                className: "col-9",
                                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Avatar.default, _objectSpread({
                                  name: "image",
                                  value: "/media/users/300_1.jpg"
                                }, formik.getFieldProps("image"))), formik.touched.image && formik.errors.image ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                                  className: "text-danger",
                                  children: formik.errors.image
                                }) : null]
                              })]
                            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                              className: "form-group row",
                              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                                className: "col-form-label col-3 text-lg-right text-left",
                                children: "First Name"
                              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                                className: "col-9",
                                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, _objectSpread({
                                  type: "text",
                                  name: "firstName"
                                }, formik.getFieldProps("firstName"))), formik.touched.firstName && formik.errors.firstName ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                                  className: "text-danger",
                                  children: formik.errors.firstName
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
                                  name: "lastName"
                                }, formik.getFieldProps("lastName"))), formik.touched.lastName && formik.errors.lastName ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                                  className: "text-danger",
                                  children: formik.errors.lastName
                                }) : null]
                              })]
                            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                              className: "form-group row",
                              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                                className: "col-form-label col-3 text-lg-right text-left",
                                children: "Company Name"
                              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                                className: "col-9",
                                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, _objectSpread({
                                  type: "text",
                                  name: "companyName"
                                }, formik.getFieldProps("companyName"))), formik.touched.companyName && formik.errors.companyName ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                                  className: "text-danger",
                                  children: formik.errors.companyName
                                }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                                  className: "form-text text-muted",
                                  children: "If you want your invoices addressed to a company. Leave blank to use your full name."
                                })]
                              })]
                            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                              className: "form-group row",
                              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                                className: "col-form-label col-3 text-lg-right text-left",
                                children: "Contact Phone"
                              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                                className: "col-9",
                                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, _objectSpread({
                                  type: "text",
                                  name: "phone",
                                  icon: "phone"
                                }, formik.getFieldProps("phone"))), formik.touched.phone && formik.errors.phone ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                                  className: "text-danger",
                                  children: formik.errors.phone
                                }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                                  className: "form-text text-muted",
                                  children: "We'll never share your email with anyone else."
                                })]
                              })]
                            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                              className: "form-group row",
                              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                                className: "col-form-label col-3 text-lg-right text-left",
                                children: "Email Address"
                              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                                className: "col-9",
                                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, _objectSpread({
                                  type: "text",
                                  name: "email",
                                  icon: "at"
                                }, formik.getFieldProps("email"))), formik.touched.email && formik.errors.email ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                                  className: "text-danger",
                                  children: formik.errors.email
                                }) : null]
                              })]
                            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                              className: "form-group row",
                              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                                className: "col-form-label col-3 text-lg-right text-left",
                                children: "Company Site"
                              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                                className: "col-9",
                                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, _objectSpread({
                                  type: "text",
                                  name: "companySite",
                                  icon: "site"
                                }, formik.getFieldProps("companySite"))), formik.touched.companySite && formik.errors.companySite ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                                  className: "text-danger",
                                  children: formik.errors.companySite
                                }) : null]
                              })]
                            })]
                          })
                        })
                      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                        className: "my-5 step",
                        "data-wizard-type": "step-content",
                        "data-wizard-state": stateTwo,
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                          className: "row",
                          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                            className: "col-xl-9",
                            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                              className: "my-2",
                              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                                className: "row",
                                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                                  className: "col-form-label col-3 text-lg-right text-left"
                                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                                  className: "col-9",
                                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h6", {
                                    className: "text-dark fw-bold mb-10",
                                    children: "Account:"
                                  })
                                })]
                              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                                className: "form-group row",
                                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                                  className: "col-form-label col-3 text-lg-right text-left",
                                  children: "Username"
                                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                                  className: "col-9",
                                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                                    className: "spinner spinner-sm spinner-success spinner-right spinner-input",
                                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, _objectSpread({
                                      type: "text",
                                      name: "userName"
                                    }, formik.getFieldProps("userName"))), formik.touched.userName && formik.errors.userName ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                                      className: "text-danger",
                                      children: formik.errors.userName
                                    }) : null]
                                  })
                                })]
                              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                                className: "form-group row",
                                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                                  className: "col-form-label col-3 text-lg-right text-left",
                                  children: "Email Address"
                                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                                  className: "col-9",
                                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, _objectSpread({
                                    type: "text",
                                    name: "email",
                                    icon: "at"
                                  }, formik.getFieldProps("email"))), formik.touched.email && formik.errors.email ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                                    className: "text-danger",
                                    children: formik.errors.email
                                  }) : null, /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                                    className: "form-text text-muted",
                                    children: ["Email will not be publicly displayed.", /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
                                      to: "/",
                                      children: "Learn more"
                                    }), "."]
                                  })]
                                })]
                              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                                className: "form-group row",
                                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                                  className: "col-form-label col-3 text-lg-right text-left",
                                  children: "Language"
                                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                                  className: "col-9",
                                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectField.default, _objectSpread({
                                    name: "language"
                                  }, formik.getFieldProps("language"))), formik.touched.language && formik.errors.language ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                                    className: "text-danger",
                                    children: formik.errors.language
                                  }) : null]
                                })]
                              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                                className: "form-group row",
                                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                                  className: "col-form-label col-3 text-lg-right text-left",
                                  children: "Time Zone"
                                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                                  className: "col-9",
                                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectField.default, _objectSpread({
                                    name: "timezone"
                                  }, formik.getFieldProps("timezone"))), formik.touched.timezone && formik.errors.timezone ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                                    className: "text-danger",
                                    children: formik.errors.timezone
                                  }) : null]
                                })]
                              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                                className: "form-group row align-items-center",
                                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                                  className: "col-form-label col-3 text-lg-right text-left",
                                  children: "Communication"
                                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                                  className: "col-9",
                                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                                    className: "checkbox-inline",
                                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CheckBox.default, _objectSpread(_objectSpread({
                                      className: "checkbox",
                                      name: "communication"
                                    }, formik.getFieldProps("communication")), {}, {
                                      value: "email_check",
                                      label: "Email"
                                    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CheckBox.default, _objectSpread(_objectSpread({
                                      className: "checkbox",
                                      name: "communication"
                                    }, formik.getFieldProps("communication")), {}, {
                                      value: "sms_check",
                                      label: "SMS"
                                    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CheckBox.default, _objectSpread(_objectSpread({
                                      className: "checkbox",
                                      name: "communication"
                                    }, formik.getFieldProps("communication")), {}, {
                                      value: "phone_check",
                                      label: "Phone"
                                    }))]
                                  }), formik.touched.communication && formik.errors.communication ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                                    className: "text-danger",
                                    children: formik.errors.communication
                                  }) : null]
                                })]
                              })]
                            })
                          })
                        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                          className: "row",
                          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                            className: "col-xl-9",
                            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                              className: "row",
                              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                                className: "col-form-label col-3 text-lg-right text-left"
                              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                                className: "col-9",
                                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h6", {
                                  className: "text-dark fw-bold mb-10",
                                  children: "Security:"
                                })
                              })]
                            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                              className: "form-group row",
                              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                                className: "col-form-label col-3 text-lg-right text-left",
                                children: "Login verification"
                              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                                className: "col-9",
                                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Buttons.default, {
                                  type: "button",
                                  className: "btn btn-light-primary fw-bold btn-sm",
                                  label: "Setup login verification"
                                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                                  className: "form-text text-muted mt-3",
                                  children: ["After you log in, you will be asked for additional information to confirm your identity and protect your account from being compromised.", /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
                                    to: "/",
                                    children: "Learn more"
                                  }), "."]
                                })]
                              })]
                            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                              className: "form-group row",
                              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                                className: "col-form-label col-3 text-lg-right text-left",
                                children: "Password reset verification"
                              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                                className: "col-9",
                                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                                  className: "checkbox-inline",
                                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CheckBox.default, _objectSpread({
                                    className: "checkbox mb-2",
                                    name: "passwordRestCheckbox",
                                    label: "Require personal information to reset your password.",
                                    value: "passwordRestChecked"
                                  }, formik.getFieldProps("passwordRestCheckbox"))), formik.touched.passwordRestCheckbox && formik.errors.passwordRestCheckbox ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                                    className: "text-danger",
                                    children: formik.errors.passwordRestCheckbox
                                  }) : null]
                                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                                  className: "form-text text-muted",
                                  children: ["For extra security, this requires you to confirm your email or phone number when you reset your password.", /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
                                    to: "/",
                                    className: "fw-bold",
                                    children: "Learn more"
                                  }), "."]
                                })]
                              })]
                            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                              className: "form-group row mt-10",
                              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                                className: "col-3"
                              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                                className: "col-9",
                                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Buttons.default, {
                                  type: "button",
                                  className: "btn btn-light-danger fw-bold btn-sm",
                                  label: "Deactivate your account ?"
                                })
                              })]
                            })]
                          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                            className: "col-xl-2"
                          })]
                        })]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                        className: "my-5 step",
                        "data-wizard-type": "step-content",
                        "data-wizard-state": stateThree,
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h5", {
                          className: "mb-10 fw-bold text-dark",
                          children: "Setup Your Address"
                        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                          className: "form-group",
                          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                            children: "Address Line 1"
                          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, _objectSpread({
                            type: "text",
                            name: "address1",
                            placeholder: "Address Line 1"
                          }, formik.getFieldProps("address1"))), formik.touched.address1 && formik.errors.address1 ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                            className: "text-danger",
                            children: formik.errors.address1
                          }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                            className: "form-text text-muted",
                            children: "Please enter your Address."
                          })]
                        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                          className: "form-group",
                          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                            children: "Address Line 2"
                          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, _objectSpread({
                            type: "text",
                            name: "address2",
                            placeholder: "Address Line 2"
                          }, formik.getFieldProps("address2"))), formik.touched.address2 && formik.errors.address2 ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                            className: "text-danger",
                            children: formik.errors.address2
                          }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                            className: "form-text text-muted",
                            children: "Please enter your Address."
                          })]
                        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                          className: "row",
                          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                            className: "col-xl-6",
                            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                              className: "form-group",
                              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                                children: "Postcode"
                              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, _objectSpread({
                                type: "text",
                                name: "postcode",
                                placeholder: "Postcode"
                              }, formik.getFieldProps("postcode"))), formik.touched.postcode && formik.errors.postcode ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                                className: "text-danger",
                                children: formik.errors.postcode
                              }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                                className: "form-text text-muted",
                                children: "Please enter your Postcode."
                              })]
                            })
                          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                            className: "col-xl-6",
                            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                              className: "form-group",
                              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                                children: "City"
                              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, _objectSpread({
                                type: "text",
                                name: "city",
                                placeholder: "City"
                              }, formik.getFieldProps("city"))), formik.touched.city && formik.errors.city ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                                className: "text-danger",
                                children: formik.errors.city
                              }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                                className: "form-text text-muted",
                                children: "Please enter your City."
                              })]
                            })
                          })]
                        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                          className: "row",
                          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                            className: "col-xl-6",
                            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                              className: "form-group",
                              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                                children: "State"
                              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputField.default, _objectSpread({
                                type: "text",
                                name: "state",
                                placeholder: "State"
                              }, formik.getFieldProps("state"))), formik.touched.state && formik.errors.state ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                                className: "text-danger",
                                children: formik.errors.state
                              }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                                className: "form-text text-muted",
                                children: "Please enter your State."
                              })]
                            })
                          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                            className: "col-xl-6",
                            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                              className: "form-group",
                              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                                children: "Country"
                              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectField.default, _objectSpread({
                                name: "country"
                              }, formik.getFieldProps("country"))), formik.touched.country && formik.errors.country ? /*#__PURE__*/(0, _jsxRuntime.jsx)("small", {
                                className: "text-danger",
                                children: formik.errors.country
                              }) : null]
                            })
                          })]
                        })]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                        className: "my-5 step",
                        "data-wizard-type": "step-content",
                        "data-wizard-state": stateFour,
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h5", {
                          className: "mb-10 fw-bold text-dark",
                          children: "Review your Details and Submit"
                        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                          className: "border-bottom mb-5 pb-5",
                          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                            className: "fw-bolder mb-3",
                            children: "Your Account Details:"
                          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                            className: "line-height-xl",
                            children: ["John Wick", /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), "Phone: +61412345678", /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), "Email: johnwick@reeves.com"]
                          })]
                        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                          className: "border-bottom mb-5 pb-5",
                          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                            className: "fw-bolder mb-3",
                            children: "Your Address Details:"
                          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                            className: "line-height-xl",
                            children: ["Address Line 1", /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), "Address Line 2", /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), "Melbourne 3000, VIC, Australia"]
                          })]
                        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                            className: "fw-bolder",
                            children: "Payment Details:"
                          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                            className: "line-height-xl",
                            children: ["Card Number: xxxx xxxx xxxx 1111", /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), "Card Name: John Wick", /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), "Card Expiry: 01/21"]
                          })]
                        })]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                        className: "d-flex justify-content-between border-top pt-10 mt-15",
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                          className: "mr-2",
                          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Buttons.default, {
                            type: "button",
                            id: "prev-step",
                            className: "btn btn-light-primary fw-bolder px-9 py-4",
                            label: "Previous",
                            onClick: stepPrev,
                            dataWizardType: "action-prev"
                          })
                        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Buttons.default, {
                            type: "submit",
                            className: "btn btn-success fw-bolder px-9 py-4",
                            label: "Submit",
                            dataWizardType: "action-submit"
                          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Buttons.default, {
                            type: "button",
                            onClick: stepNext,
                            className: "btn btn-primary fw-bolder px-9 py-4",
                            label: "Next",
                            id: "next-step",
                            dataWizardType: "action-next"
                          })]
                        })]
                      })]
                    })
                  })
                })
              })
            })
          })
        })]
      })
    })
  });
}