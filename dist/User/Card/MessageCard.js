"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MessageCard;

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
function MessageCard(props) {
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
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "card-glass-list",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "card card-custom gutter-b card-stretch",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          class: "card-body pt-4 d-flex flex-column",
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
            class: "d-flex align-items-end mb-7 makeStyles-wrapper-1",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              class: "d-flex align-items-center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                class: "flex-shrink-0 mr-4 mt-lg-0 mt-3",
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
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                class: "d-flex flex-column",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                  class: "text-dark fw-bold text-hover-primary font-size-h4 mb-0",
                  href: "/ProfileAllList/overview/" + user.id,
                  children: (user === null || user === void 0 ? void 0 : user.fname) == null || (user === null || user === void 0 ? void 0 : user.fname) == null ? "noname" : (user.fname + " " + user.lname).slice(0, 8) + "..."
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  class: "text-muted fw-bold",
                  children: "-"
                })]
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            class: "mb-7",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              class: "d-flex justify-content-between align-items-center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                class: " fw-bolder mr-2",
                children: "Email:"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
                to: "/",
                className: " text-muted text-hover-primary makeStyles-wrapper-4",
                children: user.email_data && user.email_data.length ? user.email_data.filter(elm => elm.type === 1).map(elm => elm.email) : "-"
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              class: "d-flex justify-content-between align-items-center my-1",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                class: " fw-bolder mr-2",
                children: "Phone:"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                class: "text-muted text-hover-primary makeStyles-wrapper-1",
                href: "/",
                children: user.phonenumber_data && user.phonenumber_data.length ? user.phonenumber_data.filter(elm => elm.type === 1).map(elm => elm.phone_number) : "-"
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              class: "d-flex justify-content-between align-items-center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                class: " fw-bolder mr-2",
                children: "User name:"
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                class: "text-muted fw-bold makeStyles-wrapper-1",
                children: [" ", user.username ? user.username : "-"]
              })]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            class: "mt-auto mb-3 mx-auto ",
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
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            class: "btn btn-block btn-sm btn-light-warning fw-bolder text-uppercase py-4 mt-auto",
            onClick: handleShow,
            children: "write message"
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "modal modal-sticky modal-sticky-bottom-right ".concat(show ? "show" : ""),
        id: "kt_chat_modal",
        role: "dialog",
        "data-backdrop": "false",
        "aria-modal": show,
        style: {
          display: show ? "block" : "none",
          height: "85vh"
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "modal-dialog",
          role: "document",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "modal-content",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "card card-custom",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "card-header align-items-center px-4 py-3",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "text-left flex-grow-1"
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "text-center flex-grow-1",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: " fw-bold font-size-h5",
                    children: "Matt Pears"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                      className: "label label-sm label-dot label-success"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                      className: "fw-bold text-muted font-size-sm",
                      children: "Active"
                    })]
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "text-end flex-grow-1",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
                    type: "button",
                    className: "btn btn-clean btn-sm btn-icon btn-icon-md",
                    "data-dismiss": "modal" // label={<i className="fas fa-close"></i>}
                    ,
                    onClick: handleClose,
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                      className: "fas fa-close"
                    }), " "]
                  })
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "card-body",
                style: {
                  overflowX: "auto",
                  height: "55vh"
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "scroll scroll-pull",
                  "data-mobile-height": "350",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                    className: "messages",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_MessageIn.default, {
                      image: _blank.default,
                      userName: "Matt Pears",
                      time: "2 Hours",
                      message: "How likely are you to recommend our company to your friends and family?"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MessageOut.default, {
                      time: "3 minutes",
                      image: _blank.default,
                      message: "Hey there, we\u2019re just writing to let you know that you\u2019ve been subscribed to Link repository on GitHub."
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MessageIn.default, {
                      image: _blank.default,
                      userName: "Matt Pears",
                      time: "2 Hours",
                      message: "How likely are you to recommend our company to your friends and family?"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_MessageOut.default, {
                      time: "3 minutes",
                      image: _blank.default,
                      message: "Hey there, we\u2019re just writing to let you know that you\u2019ve been subscribed to Link repository on GitHub."
                    })]
                  })
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "card-footer align-items-center",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("textarea", {
                  className: "form-control border-0 p-0",
                  rows: "2",
                  placeholder: "Type Link message"
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "d-flex align-items-center justify-content-between mt-5",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                    className: "mr-3",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                      className: "btn btn-clean btn-icon btn-md mr-1",
                      label: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                        className: "flaticon2-photograph icon-lg"
                      })
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                      className: "btn btn-clean btn-icon btn-md",
                      label: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                        className: "flaticon2-photo-camera icon-lg"
                      })
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                      type: "button",
                      className: "btn btn-primary btn-md text-uppercase fw-bold chat-send py-2 px-6" // label="Send"
                      ,
                      children: "send"
                    })
                  })]
                })]
              })]
            })
          })
        })
      })]
    })
  });
}