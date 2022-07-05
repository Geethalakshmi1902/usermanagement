"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NotificationCard;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import "./style.css";
function NotificationCard() {
  const [profileview, setProfileview] = (0, _react.useState)(false);

  const [market, setMarket] = _react.default.useState(false);

  const [Notification, setNotification] = _react.default.useState(false);

  const [month, setMonth] = _react.default.useState(false);

  const [week, setWeek] = _react.default.useState(false);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "pc-column-lg",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "pc-custom-card-right",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "pc-menu-card-header",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
            class: "pc-menu-card-title",
            children: "Notifications"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "pc-tool-bar",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "pc-drop-down-inline",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                href: "new",
                className: "hamburger-btn",
                "data-toggle": "dropdown" // aria-haspopup="true"
                // aria-expanded="false"
                ,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                  class: "fa fa-ellipsis-v",
                  "aria-hidden": "true"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "pc-dropdown-menu",
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
                  className: "pc-toogle-list",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
                    className: "pc-toogle-item",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
                      href: "new",
                      className: "pc-toogle-item-link",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "pc-toogle-icon",
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {})
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "pc-toogle-text",
                        children: "Contact"
                      })]
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
                    className: "pc-toogle-item",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
                      href: "new",
                      className: "pc-toogle-item-link",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "pc-toogle-icon",
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {})
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "pc-toogle-text",
                        children: "Contact"
                      })]
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
                    className: "pc-toogle-item",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
                      href: "new",
                      className: "pc-toogle-item-link",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "pc-toogle-icon",
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {})
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "pc-toogle-text",
                        children: "Contact"
                      })]
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
                    className: "pc-toogle-item",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
                      href: "new",
                      className: "pc-toogle-item-link",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "pc-toogle-icon",
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {})
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "pc-toogle-text",
                        children: "Contact"
                      })]
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
                    className: "pc-toogle-item",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
                      href: "new",
                      className: "pc-toogle-item-link",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "pc-toogle-icon",
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {})
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "pc-toogle-text",
                        children: "Contact"
                      })]
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
                    className: "pc-toogle-item",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
                      href: "new",
                      className: "pc-toogle-item-link",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "pc-toogle-icon",
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {})
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "pc-toogle-text",
                        children: "Contact"
                      })]
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
                    className: "pc-toogle-item",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
                      href: "new",
                      className: "pc-toogle-item-link",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "pc-toogle-icon",
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {})
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "pc-toogle-text",
                        children: "Contact"
                      })]
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
                    className: "pc-toogle-item",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
                      href: "new",
                      className: "pc-toogle-item-link",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "pc-toogle-icon",
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                          className: "pc-success-symbol"
                        })
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "pc-toogle-text",
                        children: "Contact"
                      })]
                    })
                  })]
                })
              })]
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "pc-menu-card-body",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "pc-menu-card-items",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "pc-item-align",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
                className: "pc-item-checkbox",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                  className: "pc-checkbox-active",
                  type: "checkbox",
                  value: "1"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "pc-after-checkbox"
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "pc-notification-items",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "pc-notification-item",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                    href: "new",
                    className: "pc-iteam-name",
                    children: "Daily Standup Meeting"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                    class: "pc-text-muted",
                    children: "Due in 2 Days"
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "pc-notification-label label-blue",
                  children: "Approved"
                })]
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "pc-menu-card-items",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "pc-item-align",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
                className: "pc-item-checkbox",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                  className: "pc-checkbox-active",
                  type: "checkbox",
                  value: "1"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "pc-after-checkbox"
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "pc-notification-items",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "pc-notification-item",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                    href: "new",
                    className: "pc-iteam-name",
                    children: "Group Town Hall Meet-up with showcase"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                    class: "pc-text-muted",
                    children: "Due in 2 Days"
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "pc-notification-label label-yellow",
                  children: "in progress"
                })]
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "pc-menu-card-items",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "pc-item-align",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
                className: "pc-item-checkbox",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                  className: "pc-checkbox-active",
                  type: "checkbox",
                  value: "1"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "pc-after-checkbox"
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "pc-notification-items",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "pc-notification-item",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                    href: "new",
                    className: "pc-iteam-name",
                    children: "Next sprint planning and estimations"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                    class: "pc-text-muted",
                    children: "Due in 2 Days"
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "pc-notification-label label-success",
                  children: "Sucess"
                })]
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "pc-menu-card-items",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "pc-item-align",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
                className: "pc-item-checkbox",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                  className: "pc-checkbox-active",
                  type: "checkbox",
                  value: "1"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "pc-after-checkbox"
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "pc-notification-items",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "pc-notification-item",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                    href: "new",
                    className: "pc-iteam-name",
                    children: "Sprint delivery and project deployment"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                    class: "pc-text-muted",
                    children: "Due in 2 Days"
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "pc-notification-label label-reject",
                  children: "Rejected"
                })]
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "pc-menu-card-items",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "pc-item-align",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
                className: "pc-item-checkbox",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                  className: "pc-checkbox-active",
                  type: "checkbox",
                  value: "1"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "pc-after-checkbox"
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "pc-notification-items",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "pc-notification-item",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                    href: "new",
                    className: "pc-iteam-name",
                    children: "Data analytics research showcase"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                    class: "pc-text-muted",
                    children: "Due in 2 Days"
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "pc-notification-label label-progress",
                  children: "in progress"
                })]
              })]
            })
          })]
        })]
      })
    })
  });
}