"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VERIFY_PHN_OTP = exports.VERIFY_MBL_OTP = exports.RESET_PASSWORD = exports.RESEND_MBL_OTP = exports.RESEND_LINK = exports.REQUEST_PASSWORD_URL = exports.REGISTER_URL = exports.ME_URL = exports.LOGIN_URL = void 0;
exports.login = login;
exports.refreshAccessToken = refreshAccessToken;
exports.register = register;
exports.requestPassword = requestPassword;
exports.resendLinks = resendLinks;
exports.resendMblOTP = resendMblOTP;
exports.resetPassword = resetPassword;
exports.verifyMblOTP = verifyMblOTP;
exports.verifyPhoneOTP = verifyPhoneOTP;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.regexp.test.js");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { FIRM_ID } from '../../../services/constants';
const firm_id = localStorage.getItem("id");
const LOGIN_URL = "/auth/login";
exports.LOGIN_URL = LOGIN_URL;
const REGISTER_URL = "signup";
exports.REGISTER_URL = REGISTER_URL;
const REQUEST_PASSWORD_URL = "/forgot-password";
exports.REQUEST_PASSWORD_URL = REQUEST_PASSWORD_URL;
const RESEND_LINK = "/resend-verification-email-signup";
exports.RESEND_LINK = RESEND_LINK;
const RESET_PASSWORD = "/update-password";
exports.RESET_PASSWORD = RESET_PASSWORD;
const RESEND_MBL_OTP = "/resend_otp";
exports.RESEND_MBL_OTP = RESEND_MBL_OTP;
const VERIFY_MBL_OTP = "/verify_otp";
exports.VERIFY_MBL_OTP = VERIFY_MBL_OTP;
const VERIFY_PHN_OTP = "/verify_forget_password_otp";
exports.VERIFY_PHN_OTP = VERIFY_PHN_OTP;
const ME_URL = "auth/refresh";
exports.ME_URL = ME_URL;

function login(password, username, firm, device_id) {
  let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let regPhone = /^[+-]?\d*(?:[.,]\d*)?$/;

  if (regEmail.test(username)) {
    return _axios.default.post(LOGIN_URL, {
      email: username,
      password: password,
      type: "email",
      firm: firm,
      device_id: device_id
    });
  } else if (regPhone.test(username)) {
    return _axios.default.post(LOGIN_URL, {
      phn_nbr: username,
      password: password,
      type: "phn_nbr",
      firm: firm,
      device_id: device_id
    });
  } else {
    return _axios.default.post(LOGIN_URL, {
      username: username,
      password: password,
      type: "username",
      firm: firm,
      device_id: device_id
    });
  }
}

function requestPassword(username, firm) {
  let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let regPhone = /^[+-]?\d*(?:[.,]\d*)?$/;

  if (regEmail.test(username)) {
    return _axios.default.post(REQUEST_PASSWORD_URL, {
      email: username,
      firm: firm
    });
  } else if (regPhone.test(username)) {
    return _axios.default.post(REQUEST_PASSWORD_URL, {
      phn_nbr: username,
      firm: firm
    });
  } else {
    return _axios.default.post(REQUEST_PASSWORD_URL, {
      username: username,
      firm: firm
    });
  }
}

function register(username, fname, lname, email, phn_nbr, password, firm, node_id) {
  return _axios.default.post(REGISTER_URL, {
    username: username,
    fname: fname,
    lname: lname,
    email: email,
    phn_nbr: phn_nbr,
    password: password,
    firm: firm,
    node_id: node_id
  });
} // export function requestPassword(email) {
//   return Axios.post(REQUEST_PASSWORD_URL, { email: email });
// }


function refreshAccessToken(refToken) {
  return _axios.default.post(ME_URL, {
    refresh: refToken
  });
}

function resendLinks(email) {
  return _axios.default.post(RESEND_LINK, {
    email: email,
    firm: firm_id
  });
}

function resendMblOTP(phn_nbr) {
  return _axios.default.post(RESEND_MBL_OTP, {
    mobilenumber: phn_nbr,
    firm: firm_id
  });
}

function verifyMblOTP(phn_nbr, OTP) {
  return _axios.default.post(VERIFY_MBL_OTP, {
    mobilenumber: phn_nbr,
    firm: firm_id,
    code: OTP
  });
}

function verifyPhoneOTP(phn_nbr, OTP) {
  return _axios.default.post(VERIFY_PHN_OTP, {
    firm: firm_id,
    phn_nbr: phn_nbr,
    code: OTP
  });
}

function resetPassword(password, code) {
  return _axios.default.post(RESET_PASSWORD, {
    token: code,
    new_pwd: password
  });
}