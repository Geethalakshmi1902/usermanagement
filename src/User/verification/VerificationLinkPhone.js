import React, { useState, useEffect } from "react";
import ReactCodeInput from "./verification_code_input";
import { connect } from "react-redux";
import black from "../../assets/Images/blank.png";

import { useNavigate, useLocation, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Axios from "axios";


export function VerificationLinkPhone(props) {
  const { intl } = props;
  // const webConfigData = useSelector(state => state.webConfig);
  const [isRequested, setIsRequested] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phn_nbr, setphn_nbr] = useState("");
  const history = useNavigate();
  const location = useLocation();
  //   const { id } = useParams();
  useEffect(() => {
    let id = location.search.substring(location.search.lastIndexOf("=") + 1);
    setphn_nbr(id);
  }, []);

  let onOnclickHandler = () => {
    // verifyPhoneOTP(phn_nbr,OTP)
    Axios.post("/verify_add_phonenumber", { phn_nbr: phn_nbr, code: OTP })
      .then((resp) => {
        history({
          pathname: resp.data.data.context,
          // search: "?code=" + OTP,
        });

        setIsRequested(true);
      })

      .catch((e) => {
        // ErrorMessage({ message: e.response.data.message });
      });
  };

  let resendOTP = () => {
    // resendMblOTP(phn_nbr)
    Axios.post("/resend_otp", { mobilenumber: phn_nbr, firm: "parseInt" }).then(
      (resp) => {
        // SuccessMessage({ message: "Resend Code Successfully Sent" });
      }
    );
  };

  const [OTP, setOTP] = useState("");

  return (
    <>

      <div className="pc-otp_screen">
        <div className="pc-verification pc-mt-5">
          <h3 className="pc-font-size-h1">Verification</h3>
        </div>
        <div className="pc-verification">
          <img
            src={
              "https://user-images.githubusercontent.com/4661784/56352614-4631a680-61d8-11e9-880d-86ecb053413d.png"
            }
            style={{ width: "150px" }}
            alt="Logo"
          ></img>

          <div className="pc-text-muted pc-mt-5">
            Please enter the verification code we send to your Mobile Number
            <div className="fw-bold ml-2" id="kt_login_signup">
              {"*******"} {phn_nbr.substring(phn_nbr.lastIndexOf("+") + 10)}
            </div>
          </div>

          <div
            className="form-group fv-plugins-icon-container pl-8"
            style={{
              justifyContent: "center",
              display: "flex",
            }}
          >
            <ReactCodeInput
              type="number"
              fields={4}
              value={OTP}
              onChange={setOTP}
            />
          </div>

          {/* {webConfigData.config.features.signup.emailVerification */}
          {/* .mandatory == true && ( */}
          <div className="text-center mb-10">
            {/* <Link to="/auth/login"> */}
              <button
                id="kt_login_forgot_submit"
                type="submit"
                className="pc-button pc-add-button pc-bg"
                onClick={onOnclickHandler}
              >
                Submit
                {loading && (
                  <span className="ml-3 spinner spinner-white"></span>
                )}
              </button>
            {/* </Link> */}
          </div>
          {/* )} */}
          <div className="font-size-h6">
            <span className="fw-bold text-gray-700">Did’t receive an OTP?</span>
            <span
              className="pc-hyperlink"
              id="kt_login_forgot"
              onClick={resendOTP}
            >
              Click here
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
