import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import black from "../../assets/Images/blank.png";

import { useNavigate, useLocation, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

export function VerificationLinkEmail(props) {
  const [email, setEmail] = useState("demo@gmail.com")
  const { intl, firm, } = props;

 

const get_logo = localStorage.getItem("config")
// console.log(localStorage.getItem("persist:config"))
  // const webConfigData = useSelector(state => state.webConfig);
  const [isRequested, setIsRequested] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phn_nbr, setphn_nbr] = useState("");
  const history = useNavigate();
  const location = useLocation();
  let onOnclickHandler = () => {
    // verifyPhoneOTP(phn_nbr,OTP)
    axios.post("/verify_add_phonenumber", { phn_nbr: phn_nbr, code: OTP })
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
  function resendLink(){
    axios.post("/resend-verification-email-signup", { email: email, firm:firm })
    
    
    .then(() => {
      // SuccessMessage({message:"Resend Link has Successfully Sent"})

    });
  }

  const [OTP, setOTP] = useState("");

  return (
    
      <>
      <div className="d-flex flex-column flex-root">
        <div
          className="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg-white"
          id="kt_login"
        >
        {/*begin::Login*/}
			<div className="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed"
       style={{
        // backgroundImage: `url(${toAbsoluteUrl("/media/bg/progress-hd.png")})`,
      }}>
				<div className="d-flex flex-column flex-column-fluid text-center p-10 py-lg-20 justify-content-center">
					<div className="pt-lg-10">
            <img
                  alt="Logo"
                  className="h-50px mb-10"
                  // src={toAbsoluteUrl(webConfigData.config.logo)}
                />
          </div>
					<div className="pt-lg-10">
          <img src={'https://images-na.ssl-images-amazon.com/images/I/51Dop0XlFmL.png'}
                style={{ width: "150px" }} alt="Logo" className="mb-10" />
						<h1 className=" text-dark mb-7" style={{fontSize:"30px", fontWeight: 600}}>Verify Your Email</h1>

           
              <div className="text-gray-400 mb-10 text-muted fw-bold" style={{fontSize:"20px"}}>We have sent an email to
              <Link to=""> {email}</Link> <br></br>
             pelase follow a link to verify your email.</div>
             
						
            {/* {webConfigData.config.features.signup.emailVerification.mandatory == true && */}
              <div className="text-center mb-10">
                <Link to="/auth/login">
                <button
              id="kt_login_signin_submit"
              type="submit"
              className={`btn btn-primary fw-bold px-9 py-4 my-3`}
            >Skip for now</button>
                </Link>
              
              </div>
            {/* } */}
						
            {/* {webConfigData.config.features.signup.emailVerification.type === 1 && */}
            <div className="font-size-h6">
            <span className="fw-bold text-gray-700">Did’t receive an email?</span>
            <Link to="" className="font-size-h4" onClick={resendLink}> Resend</Link>
          </div>
          {/* } */}
						
					</div>
				</div>
				{/* <div className="d-flex flex-center flex-column-auto p-10">
					<div className="d-flex align-items-center fw-bold fs-6">
						<a href="https://keenthemes.com/faqs" className="text-muted text-hover-primary px-2">About</a>
						<a href="mailto:support@keenthemes.com" className="text-muted text-hover-primary px-2">Contact</a>
						<a href="https://1.envato.market/EA4JP" className="text-muted text-hover-primary px-2">Contact Us</a>
					</div>
				</div> */}
			</div>
      </div>
             {/*end::Login*/}
      </div>
    </>
  );
}
