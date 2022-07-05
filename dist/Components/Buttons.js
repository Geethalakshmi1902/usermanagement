"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Buttons;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import "./spinner.css";
// import { toAbsoluteUrl } from "@ellantec/pearlcore_config/dist/_pearl/_helpers";
// import SVG from "react-inlinesvg";
function Buttons(_ref) {
  let {
    className,
    type,
    onClick,
    label,
    id,
    dataWizardType,
    icon,
    svg,
    form,
    isDisabled,
    isHidden,
    isLoding
  } = _ref;

  const [isLoading, setIsLoading] = _react.default.useState(false);

  const handleOnClick = () => {
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  if (icon) {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
      type: type,
      className: className,
      onClick: onClick,
      id: id,
      "data-wizard-type": dataWizardType,
      disabled: isDisabled,
      hidden: isHidden,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
        className: icon
      }), label]
    });
  } else if (svg) {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
      type: type,
      className: className,
      onClick: onClick,
      id: id,
      "data-wizard-type": dataWizardType,
      disabled: isDisabled,
      hidden: isHidden,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "svg-icon svg-icon-md"
      }), label]
    });
  } else if (isLoding) {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
      type: type,
      onClick: onClick,
      id: id,
      "data-wizard-type": dataWizardType,
      disabled: isDisabled,
      hidden: isHidden,
      className: className // className={isLoading ? "loading" : undefined}
      ,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "spinners"
      }), label]
    });
  } else {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      type: type,
      className: className,
      onClick: onClick,
      id: id,
      "data-wizard-type": dataWizardType,
      form: form,
      disabled: isDisabled,
      hidden: isHidden,
      children: label
    });
  }
}