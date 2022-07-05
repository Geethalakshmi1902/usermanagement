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

var _reactEasyCrop = _interopRequireDefault(require("react-easy-crop"));

var _iconsMaterial = require("@mui/icons-material");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import { toAbsoluteUrl } from "@ellantec/pearlcore_config/dist/_pearl/_helpers";
function Avatar(_ref) {
  let {
    photoURL
  } = _ref;
  const [crop, setcrop] = (0, _react.useState)({
    x: 0,
    y: 0
  });
  const [zoom, setzoom] = (0, _react.useState)(1);
  const [rotation, setrotation] = (0, _react.useState)(0);
  const [croppedAreaPixels, setcroppedAreaPixels] = (0, _react.useState)(null);

  const cropComplete = (croppedArea, croppedAreaPixels) => {
    setcroppedAreaPixels(croppedAreaPixels);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogContent.default, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactEasyCrop.default //   onClose={handleAddClose}
      //   croppedImage={croppedImage}
      //   defaultSrc={image !== "/media/users/blank.png" ? image : ""}
      , {
        image: photoURL,
        crop: crop,
        zoom: zoom,
        rotation: rotation,
        aspect: 1,
        onZoomChange: setzoom,
        onRotationChange: setrotation,
        onCropChange: setcrop,
        onCropComplete: cropComplete
      })
    })
  });
}