"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Table;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.promise.finally.js");

var _react = _interopRequireWildcard(require("react"));

var _axios = _interopRequireDefault(require("axios"));

require("./table.css");

var _ApiConst = require("../Components/ApiConst");

var _iconsMaterial = require("@mui/icons-material");

var _LoaderSmall = _interopRequireDefault(require("../Components/LoaderSmall"));

var _reactToastify = require("react-toastify");

var _CustomAlert = require("../Components/CustomAlert");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Table(_ref) {
  let {
    firm,
    URL,
    columnDefs
  } = _ref;
  const API_URL = process.env.REACT_APP_API_URL;

  const [refresh, setRefresh] = _react.default.useState(false);

  const [loading, setLoading] = (0, _react.useState)(true);
  const [ulists, setUlist] = (0, _react.useState)([]);
  console.log(ulists);
  const [show, setShow] = (0, _react.useState)(false);
  const [showUpArrow, setShowUpArrow] = (0, _react.useState)(false);
  const [showDownArrow, setShowDownArrow] = (0, _react.useState)(true);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const api = process.env.REACT_APP_API_URL;
  const [uparrow, setUparrow] = (0, _react.useState)("asc");

  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const [showDeleteConfirmationDialog, setShowDeleteConfirmationDialog] = _react.default.useState(false);

  const [showChild, setShowChild] = (0, _react.useState)(false);
  const [hidden, setHidden] = (0, _react.useState)([false, false, false, false, false]);
  const Data = [{
    title: "Sl No.",
    searchable: false,
    sortable: false,
    data: null,
    responsivePriority: 0
  }, {
    title: "fname",
    responsivePriority: 1,
    data: ulists.map(elm => elm.fname),
    defaultContent: "<i>-</i>"
  }, {
    title: "DOB",
    responsivePriority: 2,
    data: ulists.map(user => {
      return user.profile_data.length == false || (user === null || user === void 0 ? void 0 : user.profile_data[0].gender) == null ? "-" : (user === null || user === void 0 ? void 0 : user.profile_data[0].gender) == 0 && "Male" || (user === null || user === void 0 ? void 0 : user.profile_data[0].gender) == 1 && "Female" || (user === null || user === void 0 ? void 0 : user.profile_data[0].gender) == 2 && "Other";
    }),
    defaultContent: "<i>-</i>"
  }, {
    title: "Gender",
    responsivePriority: 3,
    data: ulists.map(user => {
      return user.profile_data.length == false || (user === null || user === void 0 ? void 0 : user.profile_data[0].gender) == null ? "-" : (user === null || user === void 0 ? void 0 : user.profile_data[0].gender) == 0 && "Male" || (user === null || user === void 0 ? void 0 : user.profile_data[0].gender) == 1 && "Female" || (user === null || user === void 0 ? void 0 : user.profile_data[0].gender) == 2 && "Other";
    }),
    searchable: false,
    defaultContent: "<i>-</i>"
  }, {
    title: "MaritalStatus",
    responsivePriority: 4,
    data: ulists.map(user => {
      return user.profile_data.length == false || (user === null || user === void 0 ? void 0 : user.profile_data[0].gender) == null ? "-" : (user === null || user === void 0 ? void 0 : user.profile_data[0].gender) == 0 && "Male" || (user === null || user === void 0 ? void 0 : user.profile_data[0].gender) == 1 && "Female" || (user === null || user === void 0 ? void 0 : user.profile_data[0].gender) == 2 && "Other";
    }),
    searchable: false,
    defaultContent: "<i>-</i>"
  }, {
    title: "Contact",
    responsivePriority: 5,
    data: ulists.map(user => {
      return user.profile_data.length == false || (user === null || user === void 0 ? void 0 : user.profile_data[0].gender) == null ? "-" : (user === null || user === void 0 ? void 0 : user.profile_data[0].gender) == 0 && "Male" || (user === null || user === void 0 ? void 0 : user.profile_data[0].gender) == 1 && "Female" || (user === null || user === void 0 ? void 0 : user.profile_data[0].gender) == 2 && "Other";
    }),
    defaultContent: "<i>-</i>"
  }, {
    title: "Actions",
    orderable: false,
    searchable: false,
    sortable: false,
    responsivePriority: 6,
    data: "id"
  }];
  (0, _react.useEffect)(() => {
    var table = document.getElementById("data"); // console.log(table);
    // table.rows[0].cells.map((cell, i) => {
    //   if (table_col_len > 4) {
    //     console.log(table.rows[0]);
    //   }
    // });

    window.addEventListener("resize", event => {
      let width = document.body.clientWidth;
      let SMALL = 540;
      let MEDIUM = 768;
      let LARGE = 992;
      let EXTRA_LARGE = 1200;

      if (width >= EXTRA_LARGE) {
        setHidden([false, false, false, false, false, false, false]);
      } else if (width >= LARGE) {
        setHidden([false, false, false, false, false, true, true]);
      } else if (width >= MEDIUM) {
        setHidden([false, false, false, false, true, true, true]);
      } else if (width >= SMALL) {
        setHidden([false, false, false, true, true, true, true]);
      } else {
        setHidden([false, false, true, true, true, true, true]);
      }
    });
  }, []);
  (0, _react.useEffect)(params => {
    // const value = Data.map((n, index) => console.log(n.title));
    setLoading(true);
    (0, _axios.default)({
      method: "get",
      url: "".concat(API_URL, "get_user_detail?node_id=1&custom_format=custom_datatables&draw=1&start=0&length=10\n      &").concat(Data.map((n, index) => {
        var _n$sortable;

        return "columns[".concat(index, "][data] =").concat(n.data == null ? "" : n.data, "\n          &columns[").concat(index, "][name] =", "\n          &columns[").concat(index, "][searchable] =").concat(n !== null && n !== void 0 && n.hasOwnProperty("searchable") ? n.searchable : "", "\n          &columns[").concat(index, "][orderable] =").concat((_n$sortable = n.sortable) !== null && _n$sortable !== void 0 ? _n$sortable : "", "\n          &columns[").concat(index, "][search][value] =", "\n          &columns[").concat(index, "][search][regex] =");
      }).join("&"), " \n        ")
    }).then(res => {
      setUlist(res.data.data);
      setLoading(false); // params.api.applyTransaction({ add: res.data.data });

      var data = res.data.data;
    }).catch(e => {});
    setRefresh(false);
  }, [refresh, uparrow]);

  const deleteUserInfo = id => {
    (0, _CustomAlert.DeleteConfirm)({
      message: "Do you want to delete?",
      onYes: () => {
        setLoading(true);
        (0, _ApiConst.deleteUser)(id).then(resp => {
          if (resp.status === 200) {
            setShowDeleteConfirmationDialog(false); //   $("#data_table").DataTable().ajax.reload();

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

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "".concat(loading ? "d-none" : "card"),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "card-header border-0 pt-6"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "card-body py-4",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          id: "kt_table_users_wrapper",
          class: "dataTables_wrapper dt-bootstrap4 no-footer",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            class: "table-responsive",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("table", {
              id: "table",
              class: "table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("thead", {
                id: "tab-head",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
                  class: "text-start fw-bolder fs-7 text-uppercase gs-0 ",
                  children: Data.map((elm, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
                    "data-index": index,
                    class: "min-w-125px sorting header ".concat(!hidden[index] ? "" : "displaynone") // class = "min-w-125px sorting header"
                    ,
                    tabIndex: index,
                    children: elm.title
                  }))
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("tbody", {
                id: "data",
                class: "text-gray-600 fw-bold",
                children: ulists === null || ulists === void 0 ? void 0 : ulists.map((user, i) => {
                  var _user$profile_data$;

                  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("tr", {
                      class: "odd",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
                        tabIndex: i,
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
                        tabIndex: i,
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
                          children: user.profile_data.length == false || (user === null || user === void 0 ? void 0 : user.profile_data[0].gender) == null ? "-" : (user === null || user === void 0 ? void 0 : user.profile_data[0].gender) == 0 && "Male" || (user === null || user === void 0 ? void 0 : user.profile_data[0].gender) == 1 && "Female" || (user === null || user === void 0 ? void 0 : user.profile_data[0].gender) == 2 && "Other"
                        })
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
                        children: user.profile_data.length == false || (user === null || user === void 0 ? void 0 : user.profile_data[0].marital_status) == null ? "-" : (user === null || user === void 0 ? void 0 : user.profile_data[0].marital_status) == 0 && "Married" || (user === null || user === void 0 ? void 0 : user.profile_data[0].marital_status) == 1 && "Single" || (user === null || user === void 0 ? void 0 : user.profile_data[0].marital_status) == 2 && "Other"
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
                        "data-order": "2022-10-25T06:43:00+05:30",
                        children: user.phonenumber_data && user.phonenumber_data.length ? user.phonenumber_data.filter(elm => elm.type === 1).map(elm => elm.phone_number) : "-"
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
                        class: "text-end",
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                          class: "mt-auto mb-3 mx-auto d-flex",
                          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                            onClick: e => deleteUserInfo(user.id),
                            class: "btn btn-md btn-icon btn-light-danger btn-hover-light btn-pill mx-2",
                            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                              class: "fas fa-trash fa-sm",
                              "aria-hidden": "true"
                            })
                          })
                        })
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                      children: showChild ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
                          class: "child",
                          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
                            class: "child",
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
                                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                                  class: "dtr-title",
                                  children: [" ", "marital Status"]
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
                                  children: [" ", /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                                    class: "mt-auto mb-3 mx-auto d-flex",
                                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                                      onClick: e => deleteUserInfo(user.id),
                                      class: "btn btn-md btn-icon btn-light-danger btn-hover-light btn-pill mx-2",
                                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                                        class: "fas fa-trash fa-sm",
                                        "aria-hidden": "true"
                                      })
                                    })
                                  })]
                                })]
                              })]
                            })
                          })
                        })
                      }) : null
                    })]
                  });
                })
              })]
            })
          })
        })
      })]
    }), loading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_LoaderSmall.default, {})]
  });
}