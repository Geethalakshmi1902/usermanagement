"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserCards = UserCards;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.promise.finally.js");

var _react = _interopRequireWildcard(require("react"));

var _reactRouter = require("react-router");

var _Buttons = _interopRequireDefault(require("../Components/Buttons"));

var _ApiConst = require("../Components/ApiConst");

var _UserListCard = _interopRequireDefault(require("./UserListCard"));

var _axios = _interopRequireDefault(require("axios"));

var _Loading = _interopRequireDefault(require("../Components/inputs/Loading"));

var _reactToastify = require("react-toastify");

var _DialogBox = require("../Components/inputs/DialogBox");

var _InputField = _interopRequireDefault(require("../Components/inputs/InputFields/InputField"));

var _MessageCard = _interopRequireDefault(require("./Card/MessageCard"));

var _SocialCard = _interopRequireDefault(require("./Card/SocialCard"));

var _Datatablelist = _interopRequireDefault(require("../Datatable/Datatablelist"));

var _ListCard = _interopRequireDefault(require("./ListCard"));

var _LoaderSmall = _interopRequireDefault(require("../Components/LoaderSmall"));

var _CheckTable = _interopRequireDefault(require("../Datatable/CheckTable"));

var _CustomAlert = require("../Components/CustomAlert");

var _reactRouterDom = require("react-router-dom");

var _ListCardGlass = _interopRequireDefault(require("./ListCardGlass"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import LoadingSpinner from "../Components/LoaderSmall";
function UserCards(_ref) {
  let {
    firm
  } = _ref;
  const Navigate = (0, _reactRouter.useNavigate)();

  const [refresh, setRefresh] = _react.default.useState(false);

  const [loading, setLoading] = (0, _react.useState)(true);
  const [ulists, setUlist] = (0, _react.useState)([]);
  const [currentPage, setCurrentPage] = (0, _react.useState)(1);
  const [count, setCount] = (0, _react.useState)(0);
  const [pageCount, setPageCount] = (0, _react.useState)(1);

  const [addOpen, setAddOpen] = _react.default.useState(false);

  const [editOpen, setEditOpen] = _react.default.useState(false);

  const [singleUser, setSingleUser] = (0, _react.useState)([]);

  const [pageDotter, setPageDotter] = _react.default.useState(false);

  const [list, setList] = (0, _react.useState)([]);
  const initialRender = (0, _react.useRef)(true);

  const [showDeleteConfirmationDialog, setShowDeleteConfirmationDialog] = _react.default.useState(false);

  (0, _react.useEffect)(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      setEditOpen(true);
    }
  }, [singleUser]);
  const location = (0, _reactRouterDom.useLocation)();
  let URL_PATH = location.pathname;
  const pathName = URL_PATH === "/UserCards/data-table/";
  (0, _react.useEffect)(() => {
    setLoading(true);

    _axios.default.get("get_user_detail?node_id=1&page=" + currentPage).then(res => {
      setUlist(res.data.results);
      setCount(res.data.count);
      setLoading(false);

      if (Math.ceil(res.data.count / 5 - currentPage) > 5) {
        setPageCount(currentPage + 4);
        setPageDotter(true);
      } else {
        setPageDotter(false);
        setPageCount(Math.ceil(res.data.count / 5));
      }

      if (Math.ceil(res.data.count / 5) === currentPage) {
        setPageDotter(false);
      }
    }).catch(e => {// console.error(e);
    });

    setRefresh(false);
  }, [currentPage, refresh]);

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageCount) * pageCount;
    console.log(new Array(pageCount));
    return new Array(pageCount).fill().map((_, idx) => start + idx + 1);
  };

  function handleAddOpen() {
    setAddOpen(true);
  }

  const addOrEditUserDetail = () => {
    Navigate("/UserForm/" + "-1");
  }; // function deleteUser() {
  //   setRefresh(true);
  //   setShowDeleteConfirmationDialog(false);
  // }


  function handleEditOpen(id) {
    setLoading(true);
    (0, _ApiConst.getSingleUser)(id).then(res => {
      setSingleUser(res.data);
      setLoading(false);
    }).catch(e => {
      // ErrorMessage({ message: e.response.data.message });
      setLoading(false);
    });
  }

  const [currentLocation, setCurrentLocation] = _react.default.useState("/");

  (0, _react.useEffect)(() => {
    setCurrentLocation(window.location.pathname);
  }, []);

  const activeCheck = url => {
    if (url === currentLocation) {
      return "pc-grey-clr active-icon";
    }

    return "pc-grey-clr ";
  };

  const [text, setText] = _react.default.useState(ulists);

  const [search, setSearch] = _react.default.useState("");

  const handleText = event => {
    setText(event.target.value);
  };

  const handleSearch = () => {
    setSearch(text);
  };

  const [term, setTerm] = (0, _react.useState)(null);
  const [filteredTerms, setFilteredTerms] = (0, _react.useState)(ulists.fname);
  const filteredUsers = (0, _react.useMemo)(() => term == null ? ulists : list.filter(user => user.fname.toLowerCase().includes(term.toLowerCase())));

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
          setLoading(true);
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
    children: [loading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_LoaderSmall.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "pc-subheader ".concat(loading ? "d-none" : ""),
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "pc-subhead-container",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "pc-flex-align-item-center pc-flex-wrap",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "pc-username",
            children: " User List"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          class: "d-flex align-items-center flex-wrap justify-content-between",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            class: "flex-grow-1 fw-bold text-dark-50 py-2 py-lg-2 me-5"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "pc-flex-align-item-center",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "pc-topbar",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "pc-topbar pc-topbar-button",
              children: [!pathName && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "pc-topbar-search",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                  type: "text",
                  value: term,
                  onChange: e => setTerm(e.target.value),
                  className: "pc-search",
                  placeholder: "Search"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "pc-topbar-icon",
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: activeCheck("/UserCards/default-card/"),
                  onClick: () => Navigate("/UserCards/default-card/"),
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                    class: "fas fa-credit-card"
                  }), " "]
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "pc-topbar-icon",
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: activeCheck("/UserCards/data-table/"),
                  onClick: () => Navigate("/UserCards/data-table/"),
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                    class: "fa fa-table",
                    "aria-hidden": "true"
                  }), " "]
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "pc-topbar-icon",
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: activeCheck("/UserCards/message-card"),
                  onClick: () => Navigate("/UserCards/message-card"),
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                    class: "fa fa-message"
                  }), " "]
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "pc-topbar-icon",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: activeCheck("/UserCards/social-card/"),
                  onClick: () => Navigate("/UserCards/social-card/"),
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                    class: "fa fa-users"
                  })
                })
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "pc-text-end",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Buttons.default, {
              className: "pc-button pc-add-button pc-bg",
              label: "Add user",
              svg: "/media/svg/icons/Code/Plus.svg",
              onClick: addOrEditUserDetail
            })
          })]
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouter.Routes, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouter.Route, {
        path: "/default-card/",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
          className: "selection",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "glass-box",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "glassmarph-box",
              children: filteredUsers.map((u, i) =>
              /*#__PURE__*/
              // {/* {ulists.map((u, i) => ( */}
              (0, _jsxRuntime.jsx)(_ListCardGlass.default, {
                user: u,
                userDel: deleteUserInfo,
                userEdit: handleEditOpen
              }, i))
            })
          })
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouter.Routes, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouter.Route, {
        path: "/message-card/",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
          className: "selection",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "glass-box",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "glassmarph-box",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "grid-view",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
                  children: ulists.map((u, i) => {
                    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                      className: "",
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_MessageCard.default, {
                        user: u // userDel={userDel}
                        ,
                        userEdit: handleEditOpen
                      })
                    }, i);
                  })
                })
              })
            })
          })
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouter.Routes, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouter.Route, {
        path: "/social-card/",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "pc-mr-top",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
            children: ulists.map((u, i) => {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "col-xl-3 col-lg-6 col-md-6 col-sm-6",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SocialCard.default, {
                  user: u // userDel={userDel}
                  ,
                  userEdit: handleEditOpen
                })
              }, i);
            })
          })
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouter.Routes, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouter.Route, {
        path: "/data-table/",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CheckTable.default, {
            user: ulists // key={i}
            // userDelete={deleteUserInfo}
            ,
            userEdit: handleEditOpen
          })
        })
      })
    }), !pathName && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
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
  });
}