"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AddressInfoItems;

var _react = _interopRequireDefault(require("react"));

var _AddressInfo = _interopRequireDefault(require("./AddressInfo"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AddressInfoItems(props) {
  var _user$address_data, _user$address_data2;

  const {
    className,
    user,
    profile
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: (user === null || user === void 0 ? void 0 : (_user$address_data = user.address_data) === null || _user$address_data === void 0 ? void 0 : _user$address_data.length) !== 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: user === null || user === void 0 ? void 0 : (_user$address_data2 = user.address_data) === null || _user$address_data2 === void 0 ? void 0 : _user$address_data2.map((elm, i) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_AddressInfo.default, {
          data: elm
        })
      }))
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_AddressInfo.default, {
      data: user.address_data
    })
  });
}