"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BackgroundImage;

var _react = _interopRequireDefault(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { toAbsoluteUrl } from '@ellantec/pearlcore_config/dist/_pearl/_helpers'
function BackgroundImage(_ref) {
  let {
    className,
    image,
    transform
  } = _ref;
  const toAbsoluteUrl = process.env.REACT_APP_API_URL;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: className,
    style: {
      backgroundImage: "url(".concat("http://77.68.116.225:8488/"(image), ")"),
      transform
    }
  });
}