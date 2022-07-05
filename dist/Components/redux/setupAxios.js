"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setupAxios;

require("core-js/modules/es.promise.js");

var _authCrud = require("./authCrud");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const Axios = axios.create({
//   baseURL: process.env.REACT_APP_USER_UI_API_URL,
// });
function setupAxios(axios, store, base_url) {
  // axios.interceptors.request.handlers.forEach((element,index) => {
  //   axios.interceptors.request.eject(index);
  // });
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  const refToken = localStorage.getItem("ref_token");
  const postId = localStorage.getItem("postId");
  const sessionId = localStorage.getItem("sessionId"); // axios.defaults.baseURL = process.env.REACT_APP_AUTH_UI_API_URL;
  // const refToken = localStorage.getItem("ref_token");

  axios.interceptors.request.use(async config => {
    const authToken = localStorage.getItem("token");

    if (!authToken) {
      config.headers = {
        Authorization: "",
        "accept-language": "en"
      };
    } else {
      config.headers = {
        Authorization: "Bearer ".concat(authToken),
        "accept-language": "en",
        'post-id': "".concat(postId),
        'session-id': "".concat(sessionId)
      };
    }

    return config;
  }, error => {
    Promise.reject(error);
  }); // // Response interceptor for API calls
  // if (refToken) {
  //   axios.interceptors.response.use(
  //     (response) => {
  //       return response;
  //     },
  //     async function(error) {
  //       const originalRequest = error.config;
  //       if (error.response.status === 401) {
  //         const access_token = await refreshAccessToken(refToken);
  //         localStorage.setItem("token", access_token.data.access);
  //         axios.defaults.headers.common["Authorization"] =
  //           "Bearer " + access_token;
  //         return axios(originalRequest);
  //       }
  //       return Promise.reject(error);
  //     }
  //   );
  // } else {
  // }
} // const Axios = axios.create({
//   baseURL: process.env.REACT_APP_API_URL,
// })