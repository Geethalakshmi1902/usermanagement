"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DialogBox = DialogBox;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("@mui/material/Button"));

var _styles = require("@mui/material/styles");

var _Dialog = _interopRequireDefault(require("@mui/material/Dialog"));

var _DialogTitle = _interopRequireDefault(require("@mui/material/DialogTitle"));

var _DialogContent = _interopRequireDefault(require("@mui/material/DialogContent"));

var _DialogActions = _interopRequireDefault(require("@mui/material/DialogActions"));

var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));

var _Close = _interopRequireDefault(require("@mui/icons-material/Close"));

var _Typography = _interopRequireDefault(require("@mui/material/Typography"));

var _jsxRuntime = require("react/jsx-runtime");

const _excluded = ["children", "onClose"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const BootstrapDialog = (0, _styles.styled)(_Dialog.default)(_ref => {
  let {
    theme
  } = _ref;
  return {
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2)
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1)
    }
  };
});

const BootstrapDialogTitle = props => {
  const {
    children,
    onClose
  } = props,
        other = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_DialogTitle.default, _objectSpread(_objectSpread({
    sx: {
      m: 0,
      p: 2
    }
  }, other), {}, {
    children: [children, onClose ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconButton.default, {
      "aria-label": "close",
      onClick: onClose,
      sx: {
        position: 'absolute',
        right: 8,
        top: 8,
        color: theme => theme.palette.grey[500]
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Close.default, {})
    }) : null]
  }));
};

BootstrapDialogTitle.propTypes = {
  children: _propTypes.default.node,
  onClose: _propTypes.default.func.isRequired
};

function DialogBox(_ref2) {
  let {
    open,
    title,
    dialogContent,
    negativeButton,
    positiveButton
  } = _ref2;

  //   const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {// setOpen(true);
  };

  const handleClose = () => {// setOpen(false);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(BootstrapDialog, {
      id: "dialog-style",
      onClose: handleClose,
      "aria-labelledby": "customized-dialog-title",
      open: open,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(BootstrapDialogTitle, {
        id: "customized-dialog-title",
        onClose: negativeButton.onPress,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          style: {
            paddingRight: "30px",
            paddingLeft: "30px",
            paddingTop: "10px"
          },
          children: title
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogContent.default, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          gutterBottom: true,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            style: {
              paddingRight: "30px",
              paddingLeft: "30px"
            },
            children: dialogContent
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_DialogActions.default, {
        children: [negativeButton != null && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Button.default, {
          sx: {
            float: "right",
            margin: "10px"
          },
          onClick: negativeButton.onPress,
          variant: negativeButton.variant //   content={negativeButton.text}
          ,
          color: negativeButton.color,
          children: [" ", negativeButton.text]
        }), positiveButton != null && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Button.default, {
          sx: {
            float: "right",
            margin: "10px"
          },
          onClick: positiveButton.onPress,
          variant: positiveButton.variant //   content={positiveButton.text}/
          ,
          color: positiveButton.color,
          children: [" ", positiveButton.text]
        }), negativeButton == null && positiveButton == null ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
          sx: {
            float: "right",
            margin: "10px"
          },
          onClick: negativeButton.onPress,
          variant: "outlined" //   content="Cancel"
          ,
          children: " Cancel"
        }) : ""]
      })]
    })
  });
}