"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProfileAsideMenu;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _BackgroundImage = _interopRequireDefault(require("../../Components/inputs/BackgroundImage"));

var _uploadIcon = _interopRequireDefault(require("../../assets/Images/uploadIcon.png"));

var _noImage = _interopRequireDefault(require("../../assets/Images/noImage.png"));

var _logoel = _interopRequireDefault(require("../../assets/Images/logoel.png"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ProfileAsideMenu(props) {
  const {
    className,
    profile,
    user
  } = props;
  console.log(profile.avatar_url);
  let location = (0, _reactRouterDom.useLocation)();
  let UserID = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
  let URL = location.pathname.substring(location.pathname);
  const [profileview, setProfileview] = (0, _react.useState)(false);
  const navigate = (0, _reactRouterDom.useNavigate)();

  const [currentLocation, setCurrentLocation] = _react.default.useState("/");

  (0, _react.useEffect)(() => {
    setCurrentLocation(window.location.pathname.split("/")[2]);
  }, []);

  const activeCheck = url => {
    if (url === currentLocation) {
      return "pc-navi-link pc-actived";
    }

    return "pc-navi-link";
  };

  const handleIconClicks = e => {
    setProfileview(true);
  };

  const toAbsoluteUrl = process.env.REACT_APP_API_URL;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "pc-side-menu",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "pc-custom-card",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "pc-custom-card-body",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "pc-items-one",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "pc-drop-down-inline",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "hamburger-btn",
                onClick: e => handleIconClicks(e),
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                  class: "fas fa-ellipsis-h"
                })
              }), " ", profileview ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "pc-dropdown-menu",
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
                  className: "pc-toogle-list",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
                    className: "pc-toogle-item",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
                      href: "sfas",
                      className: "pc-toogle-item-link",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "pc-toogle-icon hover-icon ",
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                          class: "fa fa-users",
                          "aria-hidden": "true"
                        })
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "pc-toogle-text hover-icon ",
                        children: "New Group"
                      })]
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
                    className: "pc-toogle-item",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
                      href: "new",
                      className: "pc-toogle-item-link",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "pc-toogle-icon hover-icon",
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                          className: "fa fa-droplet",
                          "aria-hidden": "true"
                        })
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "pc-toogle-text hover-icon",
                        children: "Contacts"
                      })]
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
                    className: "pc-toogle-item",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
                      href: "new",
                      className: "pc-toogle-item-link",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "pc-toogle-icon hover-icon",
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                          className: "fa fa-droplet",
                          "aria-hidden": "true"
                        })
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "pc-toogle-text hover-icon",
                        children: "Groups"
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "pc-toogle-text hover-icon-badge",
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                          className: "pc-label-btn",
                          children: "new"
                        })
                      })]
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
                    className: "pc-toogle-item",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
                      href: "new",
                      className: "pc-toogle-item-link",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "pc-toogle-icon hover-icon",
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                          className: "fa fa-droplet",
                          "aria-hidden": "true"
                        })
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "pc-toogle-text hover-icon",
                        children: "Calls"
                      })]
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
                    className: "pc-toogle-item",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
                      href: "new",
                      className: "pc-toogle-item-link",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "pc-toogle-icon hover-icon",
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                          className: "fa fa-droplet",
                          "aria-hidden": "true"
                        })
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "pc-toogle-text hover-icon",
                        children: "Settings"
                      })]
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
                    className: "pc-navi-separator"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
                    className: "pc-toogle-item",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
                      href: "new",
                      className: "pc-toogle-item-link",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "pc-toogle-icon hover-icon",
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                          class: "fa fa-object-group",
                          "aria-hidden": "true"
                        })
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "pc-toogle-text hover-icon",
                        children: "Help"
                      })]
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
                    className: "pc-toogle-item",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
                      href: "new",
                      className: "pc-toogle-item-link",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "pc-toogle-icon hover-icon",
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                          class: "fa fa-object-group",
                          "aria-hidden": "true"
                        })
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "pc-toogle-text hover-icon",
                        children: "Privacy"
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "pc-navi-label",
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                          className: "pc-label-count",
                          children: "5"
                        })
                      })]
                    })
                  })]
                })
              }) : null]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "pc-items-two",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "pc-user-image",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "pc-image-label",
                style: {
                  backgroundImage: "url(".concat(profile ? toAbsoluteUrl + profile.map(elm => elm.avatar_url) : {
                    uploadIcon: _uploadIcon.default
                  }, ")")
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                  className: "pc-symbol-badge"
                })
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "pc-user-detail",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                className: "pc-user-title",
                children: [" ", user.fname, " ", user.lname]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "pc-text-muted",
                children: "Application Developer"
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "pc-user-btn",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                  href: "new",
                  className: "pc-chat-btn",
                  children: "Chat"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "pc-follow-btn",
                  children: "Follow"
                })]
              })]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "pc-items-three",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "pc-user-personal-detail",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "pc-detail",
                children: "Email:"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                href: "new",
                className: "pc-detail-value",
                id: "pc-detail-value",
                children: user.email_data && user.email_data.length ? user.email_data.filter(elm => elm.type === 1).map(elm => elm.email) : "-"
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "pc-user-personal-detail",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "pc-detail",
                children: "Phone:"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                href: "new",
                className: "pc-detail-value",
                children: user.phonenumber_data && user.phonenumber_data.length ? user.phonenumber_data.filter(elm => elm.type === 1).map(elm => elm.phone_number) : "-"
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "pc-user-personal-detail",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "pc-detail",
                children: "Location:"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                href: "new",
                className: "pc-detail-value",
                children: "-"
              })]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "pc-items-four",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "pc-navi-items-four",
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
                href: "/ProfileAllList/overview/" + UserID,
                className: activeCheck("overview"),
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                  class: "fa fa-th",
                  "aria-hidden": "true"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "pc-navi-text",
                  children: "Profile Overview"
                })]
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "pc-navi-items-four"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "pc-navi-items-four",
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
                href: "/ProfileAllList/personal-information/" + UserID,
                className: activeCheck("personal-information"),
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                  class: "fa fa-user",
                  "aria-hidden": "true"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "pc-navi-text",
                  children: "Personal Information"
                })]
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "pc-navi-items-four",
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
                href: "/ProfileAllList/contact-information/" + UserID,
                className: activeCheck("contact-information"),
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                  class: "fa fa-phone",
                  "aria-hidden": "true"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "pc-navi-text",
                  children: "Contact Information"
                })]
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "pc-navi-items-four",
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
                href: "/ProfileAllList/change-password/" + UserID,
                className: activeCheck("change-password"),
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                  class: "fa fa-lock"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "pc-navi-text",
                  children: "Change Password"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "pc-navi-label",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                    className: "pc-label-count",
                    children: "5"
                  })
                })]
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "pc-navi-items-four",
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
                href: "/ProfileAllList/address-information/" + UserID,
                className: activeCheck("email-setting"),
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                  class: "fab fa-firstdraft"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "pc-navi-text",
                  children: "Address informaiton"
                })]
              })
            })]
          })]
        })
      })
    })
  });
}