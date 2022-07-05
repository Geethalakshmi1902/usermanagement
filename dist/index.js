"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _client = _interopRequireDefault(require("react-dom/client"));

var _axios = _interopRequireDefault(require("axios"));

var _App = _interopRequireDefault(require("./App"));

var _reportWebVitals = _interopRequireDefault(require("./reportWebVitals"));

require("@fortawesome/fontawesome-free/css/all.min.css");

var _redux = _interopRequireWildcard(require("../src/Components/redux"));

var _store = _interopRequireWildcard(require("../src/Components/redux/store"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import './index.css';
const root = _client.default.createRoot(document.getElementById('root'));

const base_url = "http://77.68.116.225:8488/";

_redux.setupAxios(_axios.default, _store.default, base_url);

root.render(
/*#__PURE__*/
// <React.StrictMode>
(0, _jsxRuntime.jsx)(_App.default // base_url={base_url}
, {
  firm: "340100753856876300",
  token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwidXNlcl9pZCI6MjM5OSwidHlwZSI6MSwiZmlybV9pZCI6IjM0MDEwMDc1Mzg1Njg3NjMwMCIsImV4cCI6MTY1NzQ2NzU1NywianRpIjoiaWFrc3h6eTd2aGZkbjFpY2JmNHloenVtdW4zcTh1M24ifQ._f0I9MCWmHvsd-UB79RZ5tHJcCFWyI-XOHt_kEOzWxw",
  ref_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImlkIjoyMzk5LCJ0eXBlIjoxLCJmaXJtIjoiMzQwMTAwNzUzODU2ODc2MzAwIiwiZXhwIjoxNjg4Mzk4NzU3LCJqdGkiOiJla2FpOHJzamhzZXllN3I1cGVnaDc1d3FhYjI4ejB2NyJ9.c7KQZKZ8VwDX-vtXoJqkryxrIy_2MQw2Ht0Yr97lBgs",
  post_id: "gAAAAABiwbgl03vH2alVcYn01Sw-fpfyuAe0DIdrP5o9EX8fHm2_w0t28shUFw2NuFfF-iVN_Phks6IyoRZEQFO5gdVwi5qAeg==",
  session_id: "NyqdfmPblrDaen8259hDeevtFnh3DoHe" // onInvalidFirm={onInvalidFirm}

}) // </React.StrictMode>
); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

(0, _reportWebVitals.default)();