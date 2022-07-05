"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InputField;

var _react = _interopRequireDefault(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InputField(_ref) {
  let {
    value,
    name,
    placeholder,
    type,
    icon,
    onChange,
    autoFocus,
    onBlur,
    isDisabled,
    id,
    label,
    variant,
    required,
    defaultValue,
    disabled,
    autoComplete,
    InputProps,
    InputLabelProps,
    helperText,
    error,
    select,
    SelectProps,
    spacing,
    fullWidth,
    onClick,
    accept,
    sx,
    ref,
    multiline,
    rows,
    checked
  } = _ref;

  if (icon) {
    if (icon === "site") {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          type: type,
          className: "pc-form-control pc-form-control-solid pc-form-control-lg",
          name: name,
          placeholder: placeholder,
          value: value,
          onChange: onChange,
          autoFocus: autoFocus,
          onBlur: onBlur,
          disabled: isDisabled,
          label: label,
          error: error,
          helperText: helperText,
          variant: variant
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "pc-input-group-text",
            children: ".com"
          })
        })]
      });
    } else {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "pc-input-group",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "pc-input-group-prepend",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "pc-input-group-text",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "icon-color",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
                class: "fa fa-" + icon
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            type: type,
            className: "pc-form-control pc-form-control-solid pc-form-control-lg",
            name: name,
            placeholder: placeholder,
            value: value,
            onChange: onChange,
            autoFocus: autoFocus,
            onBlur: onBlur,
            disabled: isDisabled,
            label: label,
            error: error,
            helperText: helperText,
            variant: variant
          })]
        })
      });
    }
  } else {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      type: type,
      className: "pc-form-control pc-form-control-solid pc-form-control-lg" ///
      ,
      name: name,
      placeholder: placeholder,
      value: value,
      onChange: onChange,
      autoFocus: autoFocus,
      onBlur: onBlur,
      disabled: isDisabled,
      label: label,
      error: error,
      helperText: helperText,
      variant: variant
    });
  }
}