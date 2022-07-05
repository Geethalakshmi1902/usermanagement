"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Datatablelist;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _axios = _interopRequireDefault(require("axios"));

require("./table.css");

var _iconsMaterial = require("@mui/icons-material");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Datatablelist() {
  // const { user, userDelete, userEdit,filteredContacts } = props;
  // console.log(props);
  // const Navigate = useNavigate();
  const [refresh, setRefresh] = _react.default.useState(false);

  const [loading, setLoading] = (0, _react.useState)(true);
  const [ulists, setUlist] = (0, _react.useState)([]);
  const [show, setShow] = (0, _react.useState)(false);
  const [showUpArrow, setShowUpArrow] = (0, _react.useState)(false);
  const [showDownArrow, setShowDownArrow] = (0, _react.useState)(true);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const api = process.env.REACT_APP_API_URL;
  const [uparrow, setUparrow] = (0, _react.useState)("asc");
  console.log(uparrow); // const imgText = (user.fname.charAt(0) + user.lname.charAt(0)).toUpperCase();

  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const [showChild, setShowChild] = (0, _react.useState)(false);
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
    (0, _axios.default)({
      method: "get",
      url: "http://77.68.116.225:8488/get_user_detail?node_id=1",
      params: {
        custom_format: "custom_datatables",
        draw: 1,
        start: 0,
        length: 10,
        "columns[0][data]": "firm",
        "columns[0][searchable]": true,
        "columns[0][orderable]": false,
        "columns[0][search][regex]": false,
        "columns[1][data]": "fname",
        "columns[1][searchable]": true,
        "columns[1][orderable]": true,
        "columns[1][search][regex]": false,
        "columns[2][data]": "lname",
        "columns[2][searchable]": true,
        "columns[2][orderable]": false,
        "columns[2][search][regex]": false,
        "columns[3][data]": "email_data",
        "columns[3][searchable]": true,
        "columns[3][orderable]": false,
        "columns[3][search][regex]": false,
        "columns[4][data]": "phonenumber_data",
        "columns[4][searchable]": true,
        "columns[4][orderable]": false,
        "columns[4][search][regex]": false,
        "columns[5][data]": "profile_data",
        "columns[5][searchable]": true,
        "columns[5][orderable]": false,
        "columns[5][search][regex]": false,
        "order[0][column]": 1,
        "order[0][dir]": uparrow,
        "columnsDef[]": "firm,fname,lname,email_data,phonenumber_data,profile_data"
      },
      responseType: "json"
    }).then(res => {
      setUlist(res.data.data);
      var data = res.data.data;
    }).catch(e => {// console.error(e);
    });
    setRefresh(false);
  }, [refresh, uparrow]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "card",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "card-header border-0 pt-6",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "card-title",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            class: "d-flex align-items-center position-relative my-1",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              class: "svg-icon svg-icon-1 position-absolute ms-6"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              type: "text",
              "data-kt-user-table-filter": "search",
              class: "form-control form-control-solid w-250px ps-14",
              placeholder: "Search user"
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "card-toolbar",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            class: "d-flex justify-content-end",
            "data-kt-user-table-toolbar": "base",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
              type: "button",
              class: "btn btn-light-primary me-3",
              "data-kt-menu-trigger": "click",
              "data-kt-menu-placement": "bottom-end",
              onClick: handleShow,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                class: "svg-icon svg-icon-2"
              }), "Filter"]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              class: "menu menu-sub menu-sub-dropdown w-300px w-md-325px ".concat(show ? "show" : ""),
              id: "kt_chat_modal",
              role: "dialog",
              "data-backdrop": "false",
              "aria-modal": show,
              "data-kt-menu": "true",
              style: {
                display: show ? "block" : "none",
                zIndex: "105",
                position: "fixed",
                inset: "0px 0px auto auto",
                margin: "0px",
                transform: "translate3d(-465px, 222px, 0px)"
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                class: "px-7 py-5",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  class: "fs-5 text-dark fw-bolder",
                  children: "Filter Options"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                class: "separator border-gray-200"
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                class: "px-7 py-5",
                "data-kt-user-table-filter": "form",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  class: "mb-10",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                    class: "form-label fs-6 fw-bold",
                    children: "Role:"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("select", {
                    class: "form-select form-select-solid fw-bolder select2-hidden-accessible",
                    "data-kt-select2": "true",
                    "data-placeholder": "Select option",
                    "data-allow-clear": "true",
                    "data-kt-user-table-filter": "role",
                    "data-hide-search": "true",
                    "data-select2-id": "select2-data-10-lkri",
                    tabIndex: "-1",
                    "aria-hidden": "true",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                      "data-select2-id": "select2-data-12-6sst"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                      value: "Administrator",
                      children: "Administrator"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                      value: "Analyst",
                      children: "Analyst"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                      value: "Developer",
                      children: "Developer"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                      value: "Support",
                      children: "Support"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                      value: "Trial",
                      children: "Trial"
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                    class: "select2 select2-container select2-container--bootstrap5",
                    dir: "ltr",
                    "data-select2-id": "select2-data-11-fcol" //   style="width: 100%;"
                    ,
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                      class: "selection",
                      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                        class: "select2-selection select2-selection--single form-select form-select-solid fw-bolder",
                        role: "combobox",
                        "aria-haspopup": "true",
                        "aria-expanded": "false",
                        tabIndex: "0",
                        "aria-disabled": "false",
                        "aria-labelledby": "select2-fbvz-container",
                        "aria-controls": "select2-fbvz-container",
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                          class: "select2-selection__rendered",
                          id: "select2-fbvz-container",
                          role: "textbox",
                          "aria-readonly": "true",
                          title: "Select option",
                          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                            class: "select2-selection__placeholder",
                            children: "Select option"
                          })
                        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                          class: "select2-selection__arrow",
                          role: "presentation",
                          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("b", {
                            role: "presentation"
                          })
                        })]
                      })
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                      class: "dropdown-wrapper",
                      "aria-hidden": "true"
                    })]
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  class: "mb-10",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                    class: "form-label fs-6 fw-bold",
                    children: "Two Step Verification:"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("select", {
                    class: "form-select form-select-solid fw-bolder select2-hidden-accessible",
                    "data-kt-select2": "true",
                    "data-placeholder": "Select option",
                    "data-allow-clear": "true",
                    "data-kt-user-table-filter": "two-step",
                    "data-hide-search": "true",
                    "data-select2-id": "select2-data-13-lo64",
                    tabIndex: "-1",
                    "aria-hidden": "true",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                      "data-select2-id": "select2-data-15-iow6"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
                      value: "Enabled",
                      children: "Enabled"
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                    class: "select2 select2-container select2-container--bootstrap5",
                    dir: "ltr",
                    "data-select2-id": "select2-data-14-9eki" //   style="width: 100%;"
                    ,
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                      class: "selection",
                      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                        class: "select2-selection select2-selection--single form-select form-select-solid fw-bolder",
                        role: "combobox",
                        "aria-haspopup": "true",
                        "aria-expanded": "false",
                        tabIndex: "0",
                        "aria-disabled": "false",
                        "aria-labelledby": "select2-o9o3-container",
                        "aria-controls": "select2-o9o3-container",
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                          class: "select2-selection__rendered",
                          id: "select2-o9o3-container",
                          role: "textbox",
                          "aria-readonly": "true",
                          title: "Select option",
                          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                            class: "select2-selection__placeholder",
                            children: "Select option"
                          })
                        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                          class: "select2-selection__arrow",
                          role: "presentation",
                          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("b", {
                            role: "presentation"
                          })
                        })]
                      })
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                      class: "dropdown-wrapper",
                      "aria-hidden": "true"
                    })]
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  class: "d-flex justify-content-end",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                    type: "reset",
                    class: "btn btn-light btn-active-light-primary fw-bold me-2 px-6",
                    "data-kt-menu-dismiss": "true",
                    "data-kt-user-table-filter": "reset",
                    children: "Reset"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                    type: "submit",
                    class: "btn btn-primary fw-bold px-6",
                    "data-kt-menu-dismiss": "true",
                    "data-kt-user-table-filter": "filter",
                    children: "Apply"
                  })]
                })]
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
              type: "button",
              class: "btn btn-light-primary me-3",
              "data-bs-toggle": "modal",
              "data-bs-target": "#kt_modal_export_users",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                class: "svg-icon svg-icon-2"
              }), "Export"]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
              type: "button",
              class: "btn btn-primary",
              "data-bs-toggle": "modal",
              "data-bs-target": "#kt_modal_add_user",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                class: "svg-icon svg-icon-2"
              }), "Add User"]
            })]
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "card-body py-4",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          id: "kt_table_users_wrapper",
          class: "dataTables_wrapper dt-bootstrap4 no-footer",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            class: "table-responsive",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("table", {
              // onClick={(e) => console.log(e.target)}
              class: "table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer",
              id: "kt_table_users",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("thead", {
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("tr", {
                  class: "text-start text-muted fw-bolder fs-7 text-uppercase gs-0",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
                    class: "w-10px pe-2 sorting_disabled",
                    rowSpan: "1",
                    colSpan: "1",
                    "aria-label": "",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                      class: "form-check form-check-sm form-check-custom form-check-solid me-3",
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                        class: "form-check-input",
                        type: "checkbox",
                        "data-kt-check": "true",
                        "data-kt-check-target": "#kt_table_users .form-check-input",
                        value: "1"
                      })
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("th", {
                    class: "min-w-125px sorting",
                    tabIndex: "0",
                    "aria-controls": "kt_table_users",
                    rowSpan: "1",
                    colSpan: "1",
                    "aria-label": "User: activate to sort column ascending" //   style="width: 287.244px;"
                    ,
                    children: ["User", /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                      className: "sorting-icon",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                        onClick: e => {
                          setUparrow("asc");
                        },
                        class: "position-abs fa fa-sort-asc text-muted",
                        "aria-hidden": "true"
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                        onClick: e => {
                          setUparrow("dsc");
                        },
                        class: "fa fa-sort-desc text-muted",
                        "aria-hidden": "true"
                      })]
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("th", {
                    class: "min-w-125px sorting",
                    tabIndex: "0",
                    "aria-controls": "kt_table_users",
                    rowSpan: "1",
                    colSpan: "1",
                    "aria-label": "Role: activate to sort column ascending" //   style="width: 159.787px;"
                    ,
                    children: ["DOB", /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                      className: "sorting-icon",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                        onClick: e => {
                          setUparrow("asc");
                        },
                        class: "position-abs fa fa-sort-asc text-muted",
                        "aria-hidden": "true"
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                        onClick: e => {
                          setUparrow("dsc");
                        },
                        class: "fa fa-sort-desc text-muted",
                        "aria-hidden": "true"
                      })]
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("th", {
                    class: "min-w-125px sorting",
                    tabIndex: "0",
                    "aria-controls": "kt_table_users",
                    rowSpan: "1",
                    colSpan: "1",
                    "aria-label": "Last login: activate to sort column ascending" //   style="width: 159.787px;"
                    ,
                    children: ["Gender", /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                      className: "sorting-icon",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                        onClick: e => {
                          setUparrow("asc");
                        },
                        class: "position-abs fa fa-sort-asc text-muted",
                        "aria-hidden": "true"
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                        onClick: e => {
                          setUparrow("dsc");
                        },
                        class: "fa fa-sort-desc text-muted",
                        "aria-hidden": "true"
                      })]
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("th", {
                    class: "min-w-125px sorting",
                    tabIndex: "0",
                    "aria-controls": "kt_table_users",
                    rowSpan: "1",
                    colSpan: "1",
                    "aria-label": "Two-step: activate to sort column ascending" //   style="width: 159.787px;"
                    ,
                    children: ["marital Status", /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                      className: "sorting-icon",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                        onClick: e => {
                          setUparrow("asc");
                        },
                        class: "position-abs fa fa-sort-asc text-muted",
                        "aria-hidden": "true"
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                        onClick: e => {
                          setUparrow("dsc");
                        },
                        class: "fa fa-sort-desc text-muted",
                        "aria-hidden": "true"
                      })]
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("th", {
                    class: "min-w-125px sorting",
                    tabIndex: "0",
                    "aria-controls": "kt_table_users",
                    rowSpan: "1",
                    colSpan: "1",
                    "aria-label": "Joined Date: activate to sort column ascending" //   style="width: 212.358px;"
                    ,
                    children: ["Contact", /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                      className: "sorting-icon",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                        onClick: e => {
                          setUparrow("asc");
                        },
                        class: "position-abs fa fa-sort-asc text-muted",
                        "aria-hidden": "true"
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                        onClick: e => {
                          setUparrow("dsc");
                        },
                        class: "fa fa-sort-desc text-muted",
                        "aria-hidden": "true"
                      })]
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
                    class: "text-end min-w-100px sorting_disabled",
                    rowSpan: "1",
                    colSpan: "1",
                    "aria-label": "Actions" //   style="width: 128.352px;"
                    ,
                    style: {
                      width: "128.352px"
                    },
                    children: "Actions"
                  })]
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("tbody", {
                id: "data",
                class: "text-gray-600 fw-bold",
                children: ulists === null || ulists === void 0 ? void 0 : ulists.map((user, i) => {
                  var _user$profile_data$;

                  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("tr", {
                    class: "odd",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
                      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                        class: "form-check form-check-sm form-check-custom form-check-solid",
                        children: [showDownArrow ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                          className: "responsive",
                          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                            onClick: () => {
                              setShowDownArrow(false);
                              setShowChild(false);
                            },
                            class: " me-3 fa fa-angle-down",
                            "aria-hidden": "true"
                          })
                        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                          className: "responsive",
                          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                            onClick: () => {
                              setShowDownArrow(true);
                              setShowChild(true);
                            },
                            class: "me-3 fa fa-angle-up",
                            "aria-hidden": "true"
                          })
                        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                          class: "form-check-input",
                          type: "checkbox",
                          value: "1"
                        })]
                      })
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("td", {
                      class: "d-flex align-items-center",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                        class: "symbol symbol-circle symbol-50px overflow-hidden me-3",
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                          href: "/metronic8/demo1/../demo1/apps/user-management/users/view.html",
                          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                            class: "symbol-label",
                            children: user.profile_data.length && user.profile_data[0].avatar_url ? /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                              class: "w-100",
                              alt: "Pic",
                              src: api + ((_user$profile_data$ = user.profile_data[0]) === null || _user$profile_data$ === void 0 ? void 0 : _user$profile_data$.avatar_url)
                            }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                              children: "MP"
                            })
                          })
                        })
                      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                        class: "d-flex flex-column",
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
                          href: "/ProfileAllList/overview/" + user.id,
                          class: "text-gray-800 text-hover-primary mb-1",
                          children: [(user === null || user === void 0 ? void 0 : user.fname) == null ? "No userName" : capitalizeFirstLetter(user === null || user === void 0 ? void 0 : user.fname), " ", (user === null || user === void 0 ? void 0 : user.lname) == null ? "No userName" : capitalizeFirstLetter(user === null || user === void 0 ? void 0 : user.lname)]
                        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                          children: [" ", user.email_data && user.email_data.length ? user.email_data.filter(elm => elm.type === 1).map(elm => elm.email) : "-"]
                        })]
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
                      children: user.profile_data.length == false || (user === null || user === void 0 ? void 0 : user.profile_data[0].date_of_birth) == null ? "-" : user === null || user === void 0 ? void 0 : user.profile_data[0].date_of_birth
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
                      "data-order": "2022-06-20T12:03:00+05:30",
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                        class: "badge badge-light fw-bolder",
                        children: user.profile_data.length == false || (user === null || user === void 0 ? void 0 : user.profile_data[0].gender) == null ? "-" : user === null || user === void 0 ? void 0 : user.profile_data[0].gender
                      })
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
                      children: user.profile_data.length == false || (user === null || user === void 0 ? void 0 : user.profile_data[0].marital_status) == null ? "-" : user === null || user === void 0 ? void 0 : user.profile_data[0].marital_status
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
                      "data-order": "2022-10-25T06:43:00+05:30",
                      children: user.phonenumber_data && user.phonenumber_data.length ? user.phonenumber_data.filter(elm => elm.type === 1).map(elm => elm.phone_number) : "-"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
                      class: "text-end",
                      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                        class: "mt-auto mb-3 mx-auto d-flex",
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
                      })
                    }), showChild ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
                        class: "child",
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
                          class: "child",
                          colSpan: "3",
                          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
                            "data-dtr-index": "7",
                            class: "dtr-details",
                            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
                              "data-dtr-index": "3",
                              "data-dt-row": "7",
                              "data-dt-column": "3",
                              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                                class: "dtr-title",
                                children: "Gender"
                              }), " ", /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                                class: "dtr-data",
                                children: [" ", user.profile_data.length == false || (user === null || user === void 0 ? void 0 : user.profile_data[0].gender) == null ? "-" : user === null || user === void 0 ? void 0 : user.profile_data[0].gender]
                              })]
                            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
                              "data-dtr-index": "4",
                              "data-dt-row": "7",
                              "data-dt-column": "4",
                              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                                class: "dtr-title",
                                children: " marital Status"
                              }), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                                class: "dtr-data",
                                children: user.profile_data.length == false || (user === null || user === void 0 ? void 0 : user.profile_data[0].marital_status) == null ? "-" : user === null || user === void 0 ? void 0 : user.profile_data[0].marital_status
                              })]
                            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
                              "data-dtr-index": "5",
                              "data-dt-row": "7",
                              "data-dt-column": "5",
                              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                                class: "dtr-title",
                                children: "Contact"
                              }), " ", /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                                class: "dtr-data",
                                children: [" ", user.phonenumber_data && user.phonenumber_data.length ? user.phonenumber_data.filter(elm => elm.type === 1).map(elm => elm.phone_number) : "-"]
                              })]
                            }), showChild ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
                              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
                                class: "child",
                                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
                                  class: "child",
                                  colSpan: "3",
                                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
                                    "data-dtr-index": "7",
                                    class: "dtr-details",
                                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
                                      "data-dtr-index": "3",
                                      "data-dt-row": "7",
                                      "data-dt-column": "3",
                                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                                        class: "dtr-title",
                                        children: "Gender"
                                      }), " ", /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                                        class: "dtr-data",
                                        children: [" ", user.profile_data.length == false || (user === null || user === void 0 ? void 0 : user.profile_data[0].gender) == null ? "-" : user === null || user === void 0 ? void 0 : user.profile_data[0].gender]
                                      })]
                                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
                                      "data-dtr-index": "4",
                                      "data-dt-row": "7",
                                      "data-dt-column": "4",
                                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                                        class: "dtr-title",
                                        children: " marital Status"
                                      }), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                                        class: "dtr-data",
                                        children: user.profile_data.length == false || (user === null || user === void 0 ? void 0 : user.profile_data[0].marital_status) == null ? "-" : user === null || user === void 0 ? void 0 : user.profile_data[0].marital_status
                                      })]
                                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
                                      "data-dtr-index": "5",
                                      "data-dt-row": "7",
                                      "data-dt-column": "5",
                                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                                        class: "dtr-title",
                                        children: "Contact"
                                      }), " ", /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                                        class: "dtr-data",
                                        children: [" ", user.phonenumber_data && user.phonenumber_data.length ? user.phonenumber_data.filter(elm => elm.type === 1).map(elm => elm.phone_number) : "-"]
                                      })]
                                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
                                      "data-dtr-index": "5",
                                      "data-dt-row": "7",
                                      "data-dt-column": "5",
                                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                                        class: "dtr-title",
                                        children: "Action"
                                      }), " ", /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                                        class: "dtr-data",
                                        children: [" ", /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                                          class: "mt-auto mb-3 mx-auto d-flex",
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
                                        })]
                                      })]
                                    })]
                                  })
                                })
                              })
                            }) : null, "                ", /*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
                              "data-dtr-index": "5",
                              "data-dt-row": "7",
                              "data-dt-column": "5",
                              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                                class: "dtr-title",
                                children: "Action"
                              }), " ", /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                                class: "dtr-data",
                                children: [" ", /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                                  class: "mt-auto mb-3 mx-auto d-flex",
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
                                })]
                              })]
                            })]
                          })
                        })
                      })
                    }) : null]
                  });
                })
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            class: "row",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              class: "col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              class: "col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                class: "dataTables_paginate paging_simple_numbers",
                id: "kt_table_users_paginate",
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
                  class: "pagination",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
                    class: "paginate_button page-item previous disabled",
                    id: "kt_table_users_previous",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                      href: "#",
                      "aria-controls": "kt_table_users",
                      "data-dt-idx": "0",
                      tabIndex: "0",
                      class: "page-link",
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                        class: "previous"
                      })
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
                    class: "paginate_button page-item active",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                      href: "#",
                      "aria-controls": "kt_table_users",
                      "data-dt-idx": "1",
                      tabIndex: "0",
                      class: "page-link",
                      children: "1"
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
                    class: "paginate_button page-item ",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                      href: "#",
                      "aria-controls": "kt_table_users",
                      "data-dt-idx": "2",
                      tabIndex: "0",
                      class: "page-link",
                      children: "2"
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
                    class: "paginate_button page-item ",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                      href: "#",
                      "aria-controls": "kt_table_users",
                      "data-dt-idx": "3",
                      tabIndex: "0",
                      class: "page-link",
                      children: "3"
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
                    class: "paginate_button page-item next",
                    id: "kt_table_users_next",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                      href: "#",
                      "aria-controls": "kt_table_users",
                      "data-dt-idx": "4",
                      tabIndex: "0",
                      class: "page-link",
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                        class: "next"
                      })
                    })
                  })]
                })
              })
            })]
          })]
        })
      })]
    })
  });
}