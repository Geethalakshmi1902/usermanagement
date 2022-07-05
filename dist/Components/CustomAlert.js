"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddNewSuccess = AddNewSuccess;
exports.DeleteConfirm = DeleteConfirm;
exports.ErrorMessage = ErrorMessage;
exports.SuccessMessage = SuccessMessage;
exports.UpdateMessage = UpdateMessage;

var _react = _interopRequireDefault(require("react"));

var _reactConfirmAlert = require("react-confirm-alert");

require("react-confirm-alert/src/react-confirm-alert.css");

var _Buttons = _interopRequireDefault(require("./Buttons"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AddNewSuccess(_ref) {
  let {
    message,
    reOpen
  } = _ref;
  (0, _reactConfirmAlert.confirmAlert)({
    customUI: _ref2 => {
      let {
        onClose
      } = _ref2;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "react-confirm-alert",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "react-confirm-alert-body",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
            className: "custom-alert-head text-success",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
              className: "la la-check-circle text-success"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
              children: " Success"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "text-center mt-3",
            children: message
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "react-confirm-alert-button-group justify-content-center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Buttons.default, {
              className: "btn btn-lg btn-primary w-100 ml-3",
              label: "Add New",
              onClick: () => {
                onClose();
                reOpen();
              }
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Buttons.default, {
              className: "btn btn-lg btn-success w-100",
              label: "OK",
              onClick: onClose
            })]
          })]
        })
      });
    }
  });
}

function ErrorMessage(_ref3) {
  let {
    message
  } = _ref3;
  (0, _reactConfirmAlert.confirmAlert)({
    customUI: _ref4 => {
      let {
        onClose
      } = _ref4;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "react-confirm-alert",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "react-confirm-alert-body",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
            className: "custom-alert-head text-danger",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
              className: "la la-exclamation-circle text-danger"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
              children: " Error"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "text-center mt-3",
            children: message
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "react-confirm-alert-button-group justify-content-center",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Buttons.default, {
              className: "btn btn-lg btn-danger w-50 ml-3",
              label: "OK",
              onClick: onClose
            })
          })]
        })
      });
    }
  });
}

function DeleteConfirm(_ref5) {
  let {
    message,
    onYes
  } = _ref5;
  (0, _reactConfirmAlert.confirmAlert)({
    customUI: _ref6 => {
      let {
        onClose
      } = _ref6;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "react-confirm-alert",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "react-confirm-alert-body",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
            className: "custom-alert-head text-danger",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
              class: "far fa-question-circle text-danger",
              style: {
                marginBottom: "2px"
              }
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
              className: "mr-lg",
              children: " Delete"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "text-center mt-3",
            children: message
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "react-confirm-alert-button-group justify-content-center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Buttons.default, {
              className: "btn btn-lg btn-dark w-100 ml-3",
              label: "No",
              onClick: onClose
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Buttons.default, {
              className: "btn btn-lg btn-danger w-100",
              label: "Yes",
              onClick: e => {
                onClose();
                onYes();
              }
            })]
          })]
        })
      });
    }
  });
}

function SuccessMessage(_ref7) {
  let {
    message
  } = _ref7;
  (0, _reactConfirmAlert.confirmAlert)({
    customUI: _ref8 => {
      let {
        onClose
      } = _ref8;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "react-confirm-alert",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "react-confirm-alert-body",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
            className: "custom-alert-head text-success",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
              className: "la la-check-circle text-success"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
              children: " Success"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "text-center mt-3",
            children: message
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "react-confirm-alert-button-group justify-content-center",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Buttons.default, {
              className: "btn btn-lg btn-success w-50 ml-3",
              label: "OK",
              onClick: onClose
            })
          })]
        })
      });
    }
  });
}

function UpdateMessage(_ref9) {
  let {
    message,
    onYes
  } = _ref9;
  (0, _reactConfirmAlert.confirmAlert)({
    customUI: _ref10 => {
      let {
        onClose
      } = _ref10;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "react-confirm-alert",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "react-confirm-alert-body",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
            className: "custom-alert-head text-success",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
              className: "la la-check-circle text-success"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
              children: " Update"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "text-center mt-3",
            children: message
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "react-confirm-alert-button-group justify-content-center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Buttons.default, {
              className: "btn btn-lg btn-dark w-100 ml-3",
              label: "No",
              onClick: onClose
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Buttons.default, {
              className: "btn btn-lg btn-danger w-100",
              label: "Yes",
              onClick: e => {
                onClose();
                onYes();
              }
            })]
          })]
        })
      });
    }
  });
}