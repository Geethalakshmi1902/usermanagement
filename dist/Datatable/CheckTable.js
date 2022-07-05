"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CheckTable;

var _react = _interopRequireWildcard(require("react"));

require("./table.css");

var _reactRouterDom = require("react-router-dom");

var _Table = _interopRequireDefault(require("./Table"));

var _TestTable = _interopRequireDefault(require("./TestTable"));

var _Buttons = _interopRequireDefault(require("../Components/Buttons"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function CheckTable() {
  const Navigate = (0, _reactRouterDom.useNavigate)();
  const tableHeaders = [{
    title: "Sl No.",
    searchable: false,
    sortable: false,
    data: null,
    responsivePriority: 0
  }, {
    title: "fname",
    responsivePriority: 1,
    data: "fname",
    defaultContent: "<i>-</i>"
  }, {
    title: "DOB",
    responsivePriority: 2,
    data: "fname",
    defaultContent: "<i>-</i>"
  }, {
    title: "Gender",
    responsivePriority: 3,
    data: "fname",
    searchable: false,
    defaultContent: "<i>-</i>"
  }, {
    title: "MaritalStatus",
    responsivePriority: 4,
    data: "fname",
    searchable: false,
    defaultContent: "<i>-</i>"
  }, {
    title: "Contact",
    responsivePriority: 5,
    data: "lname",
    defaultContent: "<i>-</i>"
  }, {
    title: "Actions",
    orderable: false,
    searchable: false,
    sortable: false,
    responsivePriority: 6,
    data: "id"
  }];
  const API = "get_user_detail?node_id=1";

  const edit_icon = () => {
    Navigate("/UserForm/-1");
  };

  const columnDefs = [{
    targets: -1,
    visible: true,
    data: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Buttons.default, {})
  }];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TestTable.default, {
        URL: API,
        Data: tableHeaders,
        firm: "450100753856876400",
        columnDefs: columnDefs
      })
    })
  });
}