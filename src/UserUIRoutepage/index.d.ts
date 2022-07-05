import * as React from "react";
interface Props {
  // onLoginSuccess: (response: any) => void;
  // onLoginFailed: (response: any) => void;
  // onSignupFailed: (response: any) => void;
  // onSignupSuccess: (response: any) => void;
  // onForgotPasswordSuccess: (response: any) => void;
  // onForgotPasswordFailed: (response: any) => void;
  // onResetPasswordSuccess: (response: any) => void;
  // onResetPasswordFailed: (response: any) => void;
  // onEmailVerifySuccess: (response: any) => void;
  // onEmailVerifyFailed: (response: any) => void;
  // onSignupMobileOtpSentSuccess: (response: any) => void;
  // onSignupMobileOtpSentFailed: (response: any) => void;
  // onInvalidFirm: (response: any) => void;
  // onInvalidNode_Id:(response: any) => void;
  firm: Number;
  // node_id:Number;
  base_url: any;
  token: any;
  ref_token: any;
  post_id: any;
  session_id;
}
declare const UserUIRoutepage: React.FunctionComponent<Props>;
export default UserUIRoutepage;
