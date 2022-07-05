"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Avatar;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _Dialog = _interopRequireDefault(require("@mui/material/Dialog"));

var _DialogContent = _interopRequireDefault(require("@mui/material/DialogContent"));

var _DialogTitle = _interopRequireDefault(require("@mui/material/DialogTitle"));

var _crop = require("../../crop/crop");

var _blank = _interopRequireDefault(require("../../../assets/Images/blank.png"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import { toAbsoluteUrl } from "@ellantec/pearlcore_config/dist/_pearl/_helpers";
function Avatar(props) {
  const toAbsoluteUrl = process.env.REACT_APP_API_URL;
  const {
    value,
    getImage,
    disabled
  } = props;
  const [changed, setChange] = (0, _react.useState)(false);
  const [image, setImage] = (0, _react.useState)();
  const initialRender = (0, _react.useRef)(true);
  const url = process.env.REACT_APP_API_URL;
  (0, _react.useEffect)(() => {
    if (value) {
      if (initialRender.current) {
        initialRender.current = false;
        setImage(url + value);
      } else {
        setImage(value);
      }

      setChange(true);
    } else {
      setImage(_blank.default);
    }
  }, [value]);

  const avatarCancel = e => {
    setImage(_blank.default);
    setChange(false);
    getImage("");
  };

  const [addOpen, setAddOpen] = _react.default.useState(false);

  function handleAddOpen() {
    setAddOpen(true);
  }

  function handleAddClose() {
    setAddOpen(false);
  }

  function croppedImage(img) {
    setImage(img);
    getImage(img);
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "pc-profile-img ".concat(changed ? " image-input-changed" : ""),
    id: "kt_user_add_avatar",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "pc-image-input-wrapper",
      style: {
        backgroundImage: "url(".concat(url + image, ")")
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
      className: "pc-pencil-icon ".concat(disabled ? 'd-none' : ''),
      "data-action": "change",
      "data-toggle": "tooltip",
      title: "",
      "data-original-title": "Change avatar",
      onClick: handleAddOpen,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
        class: "fa fa-pencil"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        type: "hidden",
        name: "profile_avatar_remove"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "pc-pencil-icon pc-btn-close ".concat(disabled ? 'd-none' : ''),
      "data-action": "cancel",
      "data-toggle": "tooltip",
      title: "Cancel avatar",
      onClick: avatarCancel,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
        class: "fa fa-times"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Dialog.default, {
        open: addOpen,
        onClose: handleAddClose,
        "aria-labelledby": "responsive-dialog-title",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogTitle.default, {
          id: "responsive-dialog-title",
          children: "Add New Profile"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogContent.default, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_crop.Crop, {
            onClose: handleAddClose,
            croppedImage: croppedImage,
            defaultSrc: image !== "/media/users/blank.png" ? image : ""
          })
        })]
      })
    })]
  });
}