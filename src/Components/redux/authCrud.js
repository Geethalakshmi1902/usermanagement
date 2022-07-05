// import { FIRM_ID } from '../../../services/constants';
import Axios from "axios";

const firm_id = localStorage.getItem("id")
export const LOGIN_URL = "/auth/login";
export const REGISTER_URL = "signup";
export const REQUEST_PASSWORD_URL = "/forgot-password";
export const RESEND_LINK = "/resend-verification-email-signup";
export const RESET_PASSWORD = "/update-password";
export const RESEND_MBL_OTP ="/resend_otp";
export const VERIFY_MBL_OTP ="/verify_otp";
export const VERIFY_PHN_OTP = "/verify_forget_password_otp";
export const ME_URL = "auth/refresh";


export function login(password, username,firm,device_id) {
  let regEmail =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let regPhone =/^[+-]?\d*(?:[.,]\d*)?$/;
  if (regEmail.test(username)) {
    return Axios.post(LOGIN_URL, { email: username, password: password, type: "email" ,firm:firm,device_id:device_id});

  } else if (regPhone.test(username)) {
    return Axios.post(LOGIN_URL, { phn_nbr: username, password: password, type: "phn_nbr"  ,firm:firm ,device_id:device_id});

  } else {
    return Axios.post(LOGIN_URL, { username: username, password: password, type: "username"  ,firm:firm ,device_id:device_id});

  }
}


export function requestPassword(username,firm) {
  let regEmail =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let regPhone =/^[+-]?\d*(?:[.,]\d*)?$/;
  if (regEmail.test(username)) {
    return Axios.post(REQUEST_PASSWORD_URL, { email: username ,firm:firm});

  } else if (regPhone.test(username)) {
    return Axios.post(REQUEST_PASSWORD_URL, { phn_nbr: username ,firm:firm});

  } else {
    return Axios.post(REQUEST_PASSWORD_URL, { username: username ,firm:firm});

  }
}
export function register(username,fname, lname, email, phn_nbr, password,firm,node_id) {
  return Axios.post(REGISTER_URL, { username:username,fname: fname, lname: lname, email: email, phn_nbr: phn_nbr, password: password,firm: firm,node_id:node_id });
}

// export function requestPassword(email) {
//   return Axios.post(REQUEST_PASSWORD_URL, { email: email });
// }

export function refreshAccessToken(refToken) {
  return Axios.post(ME_URL, { refresh: refToken });
}

export function resendLinks(email) {
  return Axios.post(RESEND_LINK, { email: email, firm: firm_id })
}
export function resendMblOTP(phn_nbr) {
  return Axios.post(RESEND_MBL_OTP, { mobilenumber: phn_nbr, firm: firm_id })
}
export function verifyMblOTP(phn_nbr,OTP) {
  return Axios.post(VERIFY_MBL_OTP, { mobilenumber: phn_nbr, firm: firm_id ,code : OTP})

}

export function verifyPhoneOTP(phn_nbr,OTP) {
  return Axios.post(VERIFY_PHN_OTP, { firm: firm_id,phn_nbr: phn_nbr ,code : OTP})
  
}
export function resetPassword(password, code){
  return Axios.post(RESET_PASSWORD, {token: code, new_pwd: password})
}
