import React, { useEffect } from "react";
// import { toAbsoluteUrl } from "@ellantec/pearlcore_config/dist/_pearl/_helpers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useParams } from "react-router";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
// import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";



export function EmailVerificationLoading(props) {
  // const toAbsoluteUrl = process.env.REACT_APP_API_URL
  // const webConfigData = useSelector(state => state.webConfig);
  const history = useNavigate()
  const { id } = useParams();
  
  const get_logo = localStorage.getItem("config")

  useEffect(() => {
    const code = id;
    Axios.get("verification-in-progress/" + code).then(
      (resp) => {
        if (resp.data.status === "success") {
          history({
            pathname: resp.data.data.context,
            search: "?code=" + code,
          });
          window.location.reload();
        } else {
          history(resp.data.data.context);
        }
      }).catch(() => {
        // history("/verification-link-expired");
        // window.location.reload();

      })
  }, [])

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
              "https://images-na.ssl-images-amazon.com/images/I/51Dop0XlFmL.png"
            }
            style={{ width: "150px" }}
            alt="Logo"
          ></img>
          	<h1 className=" text-dark mb-7" style={{fontSize:"30px", fontWeight: 600}}>Your Email Verification Loading...</h1>

         
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
         
          {/* )} */}
         
        </div>
      {/* </div> */}

    </>
  );
}

