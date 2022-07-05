"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.parse-int.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.object.assign.js");

require("core-js/modules/es.string.split.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.css");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const KEY_CODE = {
  backspace: 8,
  left: 37,
  up: 38,
  right: 39,
  down: 40
};

class ReactCodeInput extends _react.Component {
  constructor(props) {
    var _this;

    super(props);
    _this = this;

    _defineProperty(this, "__clearvalues__", () => {
      const {
        fields
      } = this.props;
      this.setState({
        values: Array(fields).fill('')
      });
      this.iRefs[0].current.focus();
    });

    _defineProperty(this, "triggerChange", function () {
      let values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.values;
      const {
        onChange,
        onComplete,
        fields
      } = _this.props;
      const val = values.join('');
      onChange && onChange(val);

      if (onComplete && val.length >= fields) {
        onComplete(val);
      }
    });

    _defineProperty(this, "onChange", e => {
      const index = parseInt(e.target.dataset.id);

      if (this.props.type === 'number') {
        e.target.value = e.target.value.replace(/[^\d]/gi, '');
      } // this.handleKeys[index] = false;


      if (e.target.value === '' || this.props.type === 'number' && !e.target.validity.valid) {
        return;
      }

      const {
        fields
      } = this.props;
      let next;
      const value = e.target.value;
      let {
        values
      } = this.state;
      values = Object.assign([], values);

      if (value.length > 1) {
        let nextIndex = value.length + index - 1;

        if (nextIndex >= fields) {
          nextIndex = fields - 1;
        }

        next = this.iRefs[nextIndex];
        const split = value.split('');
        split.forEach((item, i) => {
          const cursor = index + i;

          if (cursor < fields) {
            values[cursor] = item;
          }
        });
        this.setState({
          values
        });
      } else {
        next = this.iRefs[index + 1];
        values[index] = value;
        this.setState({
          values
        });
      }

      if (next) {
        next.current.focus();
        next.current.select();
      }

      this.triggerChange(values);
    });

    _defineProperty(this, "onKeyDown", e => {
      const index = parseInt(e.target.dataset.id);
      const prevIndex = index - 1;
      const nextIndex = index + 1;
      const prev = this.iRefs[prevIndex];
      const next = this.iRefs[nextIndex];

      switch (e.keyCode) {
        case KEY_CODE.backspace:
          e.preventDefault();
          const vals = [...this.state.values];

          if (this.state.values[index]) {
            vals[index] = '';
            this.setState({
              values: vals
            });
            this.triggerChange(vals);
          } else if (prev) {
            vals[prevIndex] = '';
            prev.current.focus();
            this.setState({
              values: vals
            });
            this.triggerChange(vals);
          }

          break;

        case KEY_CODE.left:
          e.preventDefault();

          if (prev) {
            prev.current.focus();
          }

          break;

        case KEY_CODE.right:
          e.preventDefault();

          if (next) {
            next.current.focus();
          }

          break;

        case KEY_CODE.up:
        case KEY_CODE.down:
          e.preventDefault();
          break;

        default:
          // this.handleKeys[index] = true;
          break;
      }
    });

    _defineProperty(this, "onFocus", e => {
      e.target.select(e);
    });

    const {
      fields: _fields,
      values: _values
    } = props;

    let _vals;

    let autoFocusIndex = 0;

    if (_values && _values.length) {
      _vals = [];

      for (let i = 0; i < _fields; i++) {
        _vals.push(_values[i] || '');
      }

      autoFocusIndex = _values.length >= _fields ? 0 : _values.length;
    } else {
      _vals = Array(_fields).fill('');
    }

    this.state = {
      values: _vals,
      autoFocusIndex
    };
    this.iRefs = [];

    for (let i = 0; i < _fields; i++) {
      this.iRefs.push( /*#__PURE__*/_react.default.createRef());
    }

    this.id = +new Date(); // this.handleKeys = Array(fields).fill(false);
  }
  /**
   * Clear all field value & focus first field
   */


  render() {
    const {
      values,
      autoFocusIndex
    } = this.state;
    const {
      loading,
      title,
      fieldHeight,
      fieldWidth,
      fields,
      autoFocus,
      className,
      type
    } = this.props;
    const INPUT_STYLE = {
      width: fieldWidth,
      height: fieldHeight
    };
    const ROOT_STYLE = {
      width: fields * fieldWidth
    };
    const LOADING_STYLE = {
      lineHeight: "".concat(fieldHeight, "px")
    };
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "".concat(['react-code-input-container'], " ").concat(className),
      style: ROOT_STYLE,
      children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: ['title'],
        children: title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: ['react-code-input'],
        children: values.map((value, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          type: type === 'number' ? 'tel' : type,
          pattern: type === 'number' ? '[0-9]*' : null,
          autoFocus: autoFocus && index === autoFocusIndex,
          style: INPUT_STYLE,
          "data-id": index,
          value: value,
          id: this.props.id ? "".concat(this.props.id, "-").concat(index) : null,
          ref: this.iRefs[index],
          onChange: this.onChange,
          onKeyDown: this.onKeyDown // onKeyUp={this.onKeyUp}
          ,
          onFocus: this.onFocus,
          disabled: this.props.disabled,
          required: this.props.required,
          placeholder: this.props.placeholder[index]
        }, "".concat(this.id, "-").concat(index)))
      }), loading && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: ['loading'],
        style: LOADING_STYLE,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: ['blur']
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
          className: ['spin'],
          viewBox: "0 0 1024 1024",
          "data-icon": "loading",
          width: "1em",
          height: "1em",
          fill: "currentColor",
          "aria-hidden": "true",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
            fill: "#006fff",
            d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
          })
        })]
      })]
    });
  }

}

exports.default = ReactCodeInput;

_defineProperty(ReactCodeInput, "propTypes", {
  type: _propTypes.default.oneOf(['text', 'number']),
  onChange: _propTypes.default.func,
  onComplete: _propTypes.default.func,
  fields: _propTypes.default.number,
  loading: _propTypes.default.bool,
  title: _propTypes.default.string,
  fieldWidth: _propTypes.default.number,
  id: _propTypes.default.string,
  fieldHeight: _propTypes.default.number,
  autoFocus: _propTypes.default.bool,
  className: _propTypes.default.string,
  values: _propTypes.default.arrayOf(_propTypes.default.string),
  disabled: _propTypes.default.bool,
  required: _propTypes.default.bool,
  placeholder: _propTypes.default.arrayOf(_propTypes.default.string)
});

_defineProperty(ReactCodeInput, "defaultProps", {
  type: 'number',
  fields: 6,
  fieldWidth: 58,
  fieldHeight: 54,
  autoFocus: true,
  disabled: false,
  required: false,
  placeholder: []
});