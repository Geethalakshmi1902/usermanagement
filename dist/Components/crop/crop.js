"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Crop = Crop;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _reactCropper = _interopRequireDefault(require("react-cropper"));

require("cropperjs/dist/cropper.css");

require("./crop.css");

var _Buttons = _interopRequireDefault(require("../Buttons"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Crop(props) {
  const {
    onClose,
    croppedImage,
    defaultSrc
  } = props;
  const [image, setImage] = (0, _react.useState)(defaultSrc);
  const [cropData, setCropData] = (0, _react.useState)("#");
  const [cropper, setCropper] = (0, _react.useState)();

  const onChange = e => {
    e.preventDefault();
    let files;

    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
      croppedImage(cropper.getCroppedCanvas().toDataURL());
      onClose();
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: {
        width: "100%"
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
        htmlFor: "file-upload",
        className: "custom-file-upload",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
          className: "fa fa-cloud-upload"
        }), "New Profile Upload"]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        id: "file-upload",
        type: "file",
        onChange: onChange,
        accept: "image/png, image/gif, image/jpeg"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactCropper.default //   style={{ height: 400, width: "100%" }}
      , {
        zoomTo: 2,
        initialAspectRatio: 1,
        preview: ".img-preview",
        src: image,
        viewMode: 1,
        guides: true,
        minCropBoxHeight: 10,
        minCropBoxWidth: 10,
        background: false,
        responsive: true,
        autoCropArea: 1,
        checkOrientation: false // https://github.com/fengyuanchen/cropperjs/issues/671
        ,
        onInitialized: instance => {
          setCropper(instance);
        }
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "card-toolbar mt-10",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Buttons.default, {
          type: "submit" // form="personalForm"
          ,
          className: "btn btn-success mr-2",
          label: "Save Changes",
          onClick: getCropData
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Buttons.default, {
          type: "button",
          className: "btn btn-secondary",
          label: "Cancel",
          onClick: onClose
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        style: {
          width: "100%",
          display: "none"
        },
        src: cropData,
        alt: "cropped"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {
      style: {
        clear: "both"
      }
    })]
  });
} // export default Demo;