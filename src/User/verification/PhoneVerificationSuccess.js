import React from "react";
// import { toAbsoluteUrl } from "@ellantec/pearlcore_config/dist/_pearl/_helpers";
import { useSelector } from 'react-redux';
import { useNavigate,Link } from "react-router-dom";


export function PhoneVerificationSuccess(props) {
    // const toAbsoluteUrl = pathname => process.env.PUBLIC_URL + pathname;
  // const webConfigData = useSelector(state => state.webConfig);
  const history = useNavigate();

  // function handleClick(){
  //   history("/users/user-lists/default-card")
  // }
  const get_logo = localStorage.getItem("config")

  return (
    <>
      <div className="pc-otp_screen">
        <div className="pc-verification pc-mt-5">
          <h3 className="pc-font-size-h1">
            {" "}
            <img
              src={get_logo.toString()}
              style={{ width: "150px" }}
              alt="Logo"
            ></img>
          </h3>
        </div>
        <div className="pc-verification">
          <img
            src={
              "https://freepngimg.com/thumb/green_tick/27889-3-green-tick-thumb.png"
            }
            style={{ width: "150px" }}
            alt="Logo"
          ></img>
          	<h1 className=" text-dark mb-7" style={{fontSize:"30px", fontWeight: 600}}>Verify Successfull</h1>

          <div className="pc-text-muted pc-mt-5"
          style={{fontSize:"20px"}}>Your Mobile OTP has been verified successfully.
              {/* <Link to=""> {"email"}</Link> <br></br>
             pelase follow a link to verify your email. */}
            </div>
          </div>

          {/* <div
            className="form-group fv-plugins-icon-container pl-8"
            style={{
              justifyContent: "center",
              display: "flex",
            }}
          >
            
          </div> */}

          {/* {webConfigData.config.features.signup.emailVerification */}
          {/* .mandatory == true && ( */}
          <div className="text-center mb-10">
            <Link to="/auth/login">
            <button
              id="kt_login_forgot_submit"
              type="submit"
              className="pc-button pc-add-button pc-bg"
              // onClick={onOnclickHandler}
            >
            Continue
                {/* {loading && <span className="ml-3 spinner spinner-white"></span>} */}
            </button>
            </Link>
          </div>
          {/* )} */}
          <div className="font-size-h6">
            <span className="fw-bold text-gray-700">Did’t receive an email?</span>
            {/* <Link to="" className="font-size-h4" onClick={resendLink}> Resend</Link> */}
          </div>
        </div>
      {/* </div> */}
    </>
  );
}

