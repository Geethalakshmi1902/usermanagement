"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SelectField;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function SelectField(_ref) {
  let {
    name,
    onChange,
    value,
    onBlur,
    list,
    label,
    isDisabled,
    noDefault
  } = _ref;
  const [data] = (0, _react.useState)([{
    id: "msc",
    name: "language 1"
  }, {
    id: "mac",
    name: "language 2"
  }]);

  if (!list) {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("select", {
      className: "pc-form-select pc-form-select-lg pc-form-select-solid",
      name: name,
      value: value,
      onChange: onChange,
      onBlur: onBlur,
      disabled: isDisabled,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("option", {
        value: "",
        children: ["Select ", label !== null ? label : name, "..."]
      }), data.map(item => {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
          value: item.id,
          children: item.name
        }, item.id);
      })]
    });
  } else {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("select", {
      className: "pc-form-select pc-form-select-lg pc-form-select-solid",
      name: name,
      value: value,
      onChange: onChange,
      onBlur: onBlur,
      disabled: isDisabled,
      children: [noDefault !== true && /*#__PURE__*/(0, _jsxRuntime.jsxs)("option", {
        value: "",
        children: ["Select ", label ? label : name, "..."]
      }), list.length > 0 && list.map(item => {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
          value: item.id,
          children: item.name || item.Document_name || item.type || item.variant_name || item.id
        }, item.id);
      })]
    });
  }
}