"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TestTable;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.promise.finally.js");

var _react = _interopRequireWildcard(require("react"));

var _axios = _interopRequireDefault(require("axios"));

require("./table.css");

var _ApiConst = require("../Components/ApiConst");

var _LoaderSmall = _interopRequireDefault(require("../Components/LoaderSmall"));

var _reactToastify = require("react-toastify");

var _CustomAlert = require("../Components/CustomAlert");

var _blank = _interopRequireDefault(require("../assets/Images/blank.png"));

var _Buttons = _interopRequireDefault(require("../Components/Buttons"));

var _SelectField = _interopRequireDefault(require("../Components/inputs/InputFields/SelectField"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function TestTable(_ref) {
  let {
    firm,
    URL,
    columnDefs
  } = _ref;
  const API_URL = process.env.REACT_APP_API_URL;

  const [refresh, setRefresh] = _react.default.useState(false);

  const [loading, setLoading] = (0, _react.useState)(true);
  const [ulists, setUlist] = (0, _react.useState)([]);
  const [show, setShow] = (0, _react.useState)(false);
  const api = process.env.REACT_APP_API_URL;
  const [uparrow, setUparrow] = (0, _react.useState)("ase");
  const [colIndexVal, setColIndexVal] = (0, _react.useState)(1);

  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const [showDeleteConfirmationDialog, setShowDeleteConfirmationDialog] = _react.default.useState(false);

  const [currentPage, setCurrentPage] = (0, _react.useState)(1);
  const [count, setCount] = (0, _react.useState)(0);
  const [pageCount, setPageCount] = (0, _react.useState)(1);

  const [pageDotter, setPageDotter] = _react.default.useState(false);

  const [pageLengthValue, setPageLengthValue] = _react.default.useState(10);

  const [startValue, setStartValue] = (0, _react.useState)(0);
  const [addedStartValue, setAddedStartValue] = (0, _react.useState)();

  const [Page] = _react.default.useState([{
    id: 10,
    name: 10
  }, {
    id: 25,
    name: 25
  }, {
    id: 50,
    name: 50
  }, {
    id: 100,
    name: 100
  }]); //JSON responce for Datatable


  const Data = [{
    title: "Sl No.",
    searchable: false,
    sortable: false,
    data: null,
    responsivePriority: 0,
    responsive: false,
    orderable: false,
    key: "id",
    render: (data, index) => {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: index + 1
      });
    }
  }, {
    title: "Image",
    responsivePriority: 1,
    responsive: false,
    orderable: true,
    key: "id",
    render: data => {
      var _data$profile_data$;

      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: {
          borderRadius: "50%",
          width: "50px",
          height: "50px"
        },
        children: data.profile_data.length && data.profile_data[0].avatar_url ? /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          class: "w-100",
          alt: "Pic",
          src: api + ((_data$profile_data$ = data.profile_data[0]) === null || _data$profile_data$ === void 0 ? void 0 : _data$profile_data$.avatar_url)
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          class: "w-100",
          alt: "Pic",
          src: _blank.default
        })
      });
    }
  }, {
    title: "Name",
    responsivePriority: 1,
    responsive: false,
    orderable: true,
    key: "fname",
    render: data => {
      return ((data === null || data === void 0 ? void 0 : data.fname) == null || (data === null || data === void 0 ? void 0 : data.fname) === "" ? "No userName" : capitalizeFirstLetter(data === null || data === void 0 ? void 0 : data.fname)) + " " + ((data === null || data === void 0 ? void 0 : data.lname) == null ? "" : capitalizeFirstLetter(data === null || data === void 0 ? void 0 : data.lname));
    }
  }, {
    title: "DOB",
    responsivePriority: 2,
    responsive: false,
    orderable: false,
    key: "profile_data",
    render: data => {
      return data.profile_data.length == false || (data === null || data === void 0 ? void 0 : data.profile_data[0].date_of_birth) == null ? "-" : data === null || data === void 0 ? void 0 : data.profile_data[0].date_of_birth;
    }
  }, {
    title: "Gender",
    responsivePriority: 3,
    responsive: false,
    orderable: true,
    key: "profile_data",
    render: data => {
      return data.profile_data.length == false || (data === null || data === void 0 ? void 0 : data.profile_data[0].gender) == null ? "-" : (data === null || data === void 0 ? void 0 : data.profile_data[0].gender) == 0 && "Male" || (data === null || data === void 0 ? void 0 : data.profile_data[0].gender) == 1 && "Female" || (data === null || data === void 0 ? void 0 : data.profile_data[0].gender) == 2 && "Other";
    },
    searchable: false
  }, {
    title: "Marital Status",
    key: "profile_data",
    responsivePriority: 4,
    responsive: false,
    searchable: false,
    orderable: true,
    render: data => {
      return data.profile_data.length == false || (data === null || data === void 0 ? void 0 : data.profile_data[0].marital_status) == null ? "-" : (data === null || data === void 0 ? void 0 : data.profile_data[0].marital_status) == 0 && "Married" || (data === null || data === void 0 ? void 0 : data.profile_data[0].marital_status) == 1 && "Single" || (data === null || data === void 0 ? void 0 : data.profile_data[0].marital_status) == 2 && "Other";
    }
  }, {
    title: "Contact",
    responsivePriority: 5,
    responsive: false,
    key: "phonenumber_data",
    render: data => {
      return data.phonenumber_data && data.phonenumber_data.length ? data.phonenumber_data.filter(elm => elm.type === 1).map(elm => elm.phone_number) : "-";
    }
  }, {
    title: "Actions",
    orderable: false,
    searchable: false,
    sortable: false,
    orderable: false,
    responsivePriority: 6,
    responsive: false,
    key: null,
    render: data => {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
        class: "text-end",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          class: "mt-auto mb-3 mx-auto d-flex",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            onClick: e => deleteUserInfo(data.id),
            class: "btn btn-md btn-icon btn-light-danger btn-hover-light btn-pill mx-2",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
              class: "fas fa-trash fa-sm",
              "aria-hidden": "true"
            })
          })
        })
      });
    }
  }];
  const [hidden, setHidden] = (0, _react.useState)(Data.map(elm => elm.responsive));
  (0, _react.useEffect)(() => {
    window.addEventListener("resize", event => {
      let width = document.body.clientWidth;
      let SMALL = 540;
      let MEDIUM = 768;
      let LARGE = 992;
      let EXTRA_LARGE = 1200;

      if (width >= EXTRA_LARGE) {
        setHidden([false, false, false, false, false, false, false, false]);
      } else if (width >= LARGE) {
        setHidden([false, false, false, false, false, false, true, true]);
      } else if (width >= MEDIUM) {
        setHidden([false, false, true, true, true, true, true, true]);
      } else if (width >= SMALL) {
        setHidden([false, false, true, false, true, true, true, true]);
      } else {
        setHidden([false, false, true, true, true, true, true, true]);
      }
    });
  }, []);
  (0, _react.useEffect)(() => {
    fetchUserData();
  }, [currentPage, refresh, uparrow, pageLengthValue]);

  const fetchUserData = () => {
    setLoading(true);
    (0, _axios.default)({
      method: "get",
      url: "".concat(API_URL, "get_user_detail?node_id=1&custom_format=custom_datatables&draw=1&start=").concat(startValue * pageLengthValue, "&length=").concat(pageLengthValue, "&").concat(Data.map((n, index) => {
        var _n$orderable;

        return "columns[".concat(index, "][data]=").concat(n.key, "&columns[").concat(index, "][searchable]=", true, "&columns[").concat(index, "][orderable]=").concat((_n$orderable = n.orderable) !== null && _n$orderable !== void 0 ? _n$orderable : false, "&columns[").concat(index, "][search][regex]=", false);
      }).join("&"), "&columnsDef[]=").concat(Data.map(elm => elm.key), "&order[0][column]=").concat(colIndexVal, "&order[0][dir]=").concat(uparrow)
    }).then(res => {
      setUlist(res.data.data);
      setCount(res.data.recordsTotal);
      setLoading(false);

      if (Math.ceil(res.data.recordsTotal / pageLengthValue - currentPage) > pageLengthValue) {
        setPageCount(currentPage + (pageLengthValue - 1));
        setPageDotter(true);
      } else {
        setPageDotter(false);
        setPageCount(Math.ceil(res.data.recordsTotal / pageLengthValue));
      }

      if (Math.ceil(res.data.recordsTotal / pageLengthValue) === currentPage) {
        setPageDotter(false);
      }
    }).catch(e => {});
    setRefresh(false);
  };

  const getPaginationGroup = () => {
    var _Array, _Array$fill;

    let start = (Math === null || Math === void 0 ? void 0 : Math.floor((currentPage - 1) / pageCount)) * pageCount;
    return (_Array = new Array(pageCount)) === null || _Array === void 0 ? void 0 : (_Array$fill = _Array.fill()) === null || _Array$fill === void 0 ? void 0 : _Array$fill.map((_, idx) => start + idx + 1);
  };

  const deleteUserInfo = id => {
    (0, _CustomAlert.DeleteConfirm)({
      message: "Do you want to delete?",
      onYes: () => {
        setLoading(true);
        (0, _ApiConst.deleteUser)(id).then(resp => {
          if (resp.status === 200) {
            setShowDeleteConfirmationDialog(false);

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
          fetchUserData();
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

  const getTableCellData = (rowData, column, index) => {
    if (column.hasOwnProperty("render")) {
      return column.render(rowData, index);
    } else if (rowData.hasOwnProperty(column.title)) {
      return rowData[column.title];
    }

    return "";
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "".concat(loading ? "d-none" : "card"),
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
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectField.default, {
            type: "text",
            name: "Page",
            list: Page,
            value: pageLengthValue,
            onChange: e => setPageLengthValue(e.target.value)
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
              id: "table",
              class: "table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("thead", {
                id: "tab-head",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
                  class: "text-start fw-bolder fs-7 text-uppercase gs-0 ",
                  children: Data.map((elm, index) => !hidden[index] && /*#__PURE__*/(0, _jsxRuntime.jsxs)("th", {
                    onClick: () => {
                      setColIndexVal(index);
                    },
                    "data-index": index,
                    className: "min-w-125px sorting header" // class={` ${!hidden[index] ? "min-w-125px sorting header" : "displaynone"}`}
                    ,
                    tabIndex: index,
                    children: [elm.title, /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                      className: "sorting-icon",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                        onClick: e => {
                          setUparrow("asc");
                        },
                        class: "position-abs fa fa-sort-asc text-muted sort-icon",
                        "aria-hidden": "true"
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                        onClick: e => {
                          setUparrow("desc");
                        },
                        class: "fa fa-sort-desc text-muted sort-icon",
                        "aria-hidden": "true"
                      })]
                    })]
                  }))
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("tbody", {
                id: "data",
                class: "text-gray-600 fw-bold",
                children: ulists === null || ulists === void 0 ? void 0 : ulists.map((user, i) => {
                  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
                      class: "odd",
                      children: Data.map((data, index) => {
                        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
                          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
                            tabIndex: index,
                            class: " ".concat(!hidden[index] ? "" : "displaynone"),
                            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                              class: "d-flex flex-column",
                              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                                children: getTableCellData(user, data, i)
                              })
                            })
                          })
                        });
                      })
                    })
                  });
                })
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "pc-page-card ".concat(loading ? "d-none" : ""),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "pc-page-card-body",
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "pc-page-card-flex",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "pc-pagination-part",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Buttons.default, {
                    icon: "fas fa-angle-left",
                    className: "pc-arrow-btn pc-btn-flex",
                    onClick: () => {
                      setCurrentPage(currentPage - 1);
                    },
                    isDisabled: currentPage === 1 ? 1 : 0
                  }), getPaginationGroup().map((item, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_Buttons.default, {
                    onClick: () => {
                      setCurrentPage(item);
                      setStartValue(index);
                    },
                    className: "number-btn pc-btn-flex ".concat(item === currentPage ? "active" : ""),
                    label: item
                  }, index)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Buttons.default, {
                    className: "number-btn pc-btn-flex ".concat(pageDotter ? "" : "d-none"),
                    label: "...",
                    isDisabled: "".concat(pageDotter ? 1 : 0)
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Buttons.default, {
                    icon: "fas fa-angle-right",
                    className: "pc-arrow-btn pc-btn-flex",
                    onClick: () => {
                      setCurrentPage(currentPage + 1);
                    },
                    isDisabled: currentPage === pageCount ? 1 : 0
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "pc-record-part",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                    className: "pc-text-muted",
                    children: ["Displaying 5 of ", count, " records"]
                  })
                })]
              })
            })
          })]
        })
      })]
    }), loading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_LoaderSmall.default, {})]
  });
}