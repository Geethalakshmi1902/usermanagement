"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ListCardGlass;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.promise.finally.js");

var _react = _interopRequireWildcard(require("react"));

require("../style.css");

var _noImage = _interopRequireDefault(require("../assets/Images/noImage.png"));

var _piggy_bank = _interopRequireDefault(require("../assets/Images/piggy_bank.png"));

var _chat = _interopRequireDefault(require("../assets/Images/chat.png"));

var _confetti = _interopRequireDefault(require("../assets/Images/confetti.png"));

var _connection = _interopRequireDefault(require("../assets/Images/connection.png"));

var _file = _interopRequireDefault(require("../assets/Images/file.png"));

var _location = _interopRequireDefault(require("../assets/Images/location.png"));

var _lock = _interopRequireDefault(require("../assets/Images/lock.png"));

var _mail = _interopRequireDefault(require("../assets/Images/mail.png"));

var _pie_chart = _interopRequireDefault(require("../assets/Images/pie_chart.png"));

var _tick_mark = _interopRequireDefault(require("../assets/Images/tick_mark.png"));

var _colortheme = require("../colortheme");

var _reactRouterDom = require("react-router-dom");

var _reactRouter = require("react-router");

var _ApiConst = require("../Components/ApiConst");

var _reactToastify = require("react-toastify");

var _DialogBox = require("../Components/inputs/DialogBox");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _LoaderSmall = _interopRequireDefault(require("../Components/LoaderSmall"));

var _CustomAlert = require("../Components/CustomAlert");

var _Loading = _interopRequireDefault(require("../Components/inputs/Loading"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
function ListCardGlass(props) {
  var _user$profile_data$;

  const {
    user,
    userDel,
    userEdit,
    filteredContacts
  } = props;
  const Navigate = (0, _reactRouter.useNavigate)();

  const [loading, setLoading] = _react.default.useState(false);

  const [showDeleteConfirmationDialog, setShowDeleteConfirmationDialog] = _react.default.useState(false); // const api =process.env.REACT_APP_USER_UI_API_URL;


  const api = process.env.REACT_APP_API_URL; // const imgText = (user.fname.charAt(0) + user.lname.charAt(0)).toUpperCase();

  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const has_gender = user === null || user === void 0 ? void 0 : user.profile_data[0];

  const calComplete = p => {
    if (user.profile) {
      p = p + 50;
    }

    if (user.email_data && user.email_data.length) {
      p = p + 10;
    }

    if (user.phonenumber_data && user.phonenumber_data.length) {
      p = p + 10;
    }

    if (user.username) {
      p = p + 10;
    }

    if (user.profile_data.length && user.profile_data[0].avatar_url) {
      p = p + 10;
    }

    return p;
  };

  var genders = {
    0: {
      title: "Male"
    },
    1: {
      title: "Female"
    },
    2: {
      title: "Others"
    }
  };
  var maritals = {
    0: {
      title: "Married"
    },
    1: {
      title: "Single"
    },
    2: {
      title: "Other"
    }
  };
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

  const deleteDialogBox = id => {
    setShowDeleteConfirmationDialog(true);
  };

  const deleteUserInfo = id => {
    (0, _CustomAlert.DeleteConfirm)({
      message: "Do you want to delete?",
      onYes: () => {
        setLoading(true);
        (0, _ApiConst.deleteUser)(id).then(resp => {
          if (resp.status === 200) {
            // setShowDeleteConfirmationDialog(false);
            //   $("#data_table").DataTable().ajax.reload();
            _reactToastify.toast.success("User deleted successfully.!", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true
            });
          } else {
            showUserDeleteError();
          }
        }).catch(error => {
          showUserDeleteError();
        }).finally(() => {
          setLoading(false);
        });
      }
    });
  };

  const showUserDeleteError = () => {
    _reactToastify.toast.error("Unable to delete the user!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true
    });
  };

  const addOrEditUserDetail = () => {
    Navigate("/UserForm/" + user.id);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "glass-list glass-text-clr",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        class: "card card-custom gutter-b mr-2 ".concat(loading ? "d-none" : ""),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          class: "card-body",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            class: "d-flex",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              class: "flex-shrink-0 me-7",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                class: "symbol symbol-50 symbol-lg-120 symbol-light-danger",
                children: user.profile_data.length && user.profile_data[0].avatar_url ? /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                  alt: "Pic",
                  src: api + ((_user$profile_data$ = user.profile_data[0]) === null || _user$profile_data$ === void 0 ? void 0 : _user$profile_data$.avatar_url)
                }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "fs-h1 symbol-label fw-boldest ",
                  children: "MP"
                })
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              class: "flex-grow-1",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                class: "d-flex align-items-center justify-content-between flex-wrap mt-2",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  class: "me-3",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Link, {
                    to: "/ProfileAllList/overview/" + user.id,
                    className: "d-flex align-items-center text-dark text-hover-primary fs-h5 fw-bold me-3",
                    children: [(user === null || user === void 0 ? void 0 : user.fname) == null ? "No userName" : capitalizeFirstLetter(user === null || user === void 0 ? void 0 : user.fname), " ", (user === null || user === void 0 ? void 0 : user.lname) == null ? "No userName" : capitalizeFirstLetter(user === null || user === void 0 ? void 0 : user.lname), /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                      className: "pc-tick-mark",
                      src: _tick_mark.default,
                      alt: "pic"
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                    class: "d-flex flex-wrap my-2",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
                      class: "text-muted text-hover-primary fw-bold me-lg-8 me-5 mb-lg-0 mb-2",
                      href: "/",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        class: "svg-icon svg-icon-md svg-icon-gray-500 me-1",
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                          class: "fa fa-envelope",
                          "aria-hidden": "true"
                        })
                      }), user.email_data && user.email_data.length ? user.email_data.filter(elm => elm.type === 1).map(elm => elm.email) : "-"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
                      class: "text-muted text-hover-primary fw-bold me-lg-8 me-5 mb-lg-0 mb-2",
                      href: "/",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        class: "svg-icon svg-icon-md svg-icon-gray-500 me-1",
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                          class: "fa fa-phone"
                        })
                      }), user.phonenumber_data && user.phonenumber_data.length ? user.phonenumber_data.filter(elm => elm.type === 1).map(elm => elm.phone_number) : "-"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
                      class: "text-muted text-hover-primary fw-bold",
                      href: "/",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        class: "svg-icon svg-icon-md svg-icon-gray-500 me-1",
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                          class: "fa fa-map-marker",
                          "aria-hidden": "true"
                        })
                      }), "-"]
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                    class: "d-flex flex-wrap my-2",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
                      class: "text-muted text-hover-primary fw-bold me-lg-8 me-5 mb-lg-0 mb-2",
                      href: "/",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        class: "svg-icon svg-icon-md svg-icon-gray-500 me-1",
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                          class: "fa fa-birthday-cake",
                          "aria-hidden": "true"
                        })
                      }), user.profile_data.length == false || has_gender.date_of_birth == null ? "-" : has_gender.date_of_birth]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
                      class: "text-muted text-hover-primary fw-bold me-lg-8 me-5 mb-lg-0 mb-2",
                      href: "/",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        class: "svg-icon svg-icon-md svg-icon-gray-500 me-1",
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                          class: "fas fa-user-alt"
                        })
                      }), user.profile_data.length == false || has_gender.gender == null ? "-" : has_gender.gender == 0 && "Male" || has_gender.gender == 1 && "Female" || has_gender.gender == 2 && "Other"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
                      class: "text-muted text-hover-primary fw-bold",
                      href: "/",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        class: "svg-icon svg-icon-md svg-icon-gray-500 me-1",
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                          class: "fas fa-ring"
                        })
                      }), user.profile_data.length == false || has_gender.marital_status == null ? "-" : has_gender.marital_status]
                    })]
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  style: {
                    alignSelf: "flex-start"
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                    className: "btn btn-sm btn-light-danger btn-hover-light btn-icon me-2 mb-2 mt-2",
                    onClick: e => {
                      deleteUserInfo(user.id);
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                      class: "fas fa-trash",
                      "aria-hidden": "true"
                    })
                  })
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                class: "d-flex align-items-center flex-wrap justify-content-between",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  class: "flex-grow-1 fw-bold text-dark-50 py-2 py-lg-2 me-5"
                })
              })]
            })]
          })
        })
      })
    }), loading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_LoaderSmall.default, {})]
  });
}