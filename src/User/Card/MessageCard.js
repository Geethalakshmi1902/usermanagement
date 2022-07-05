import React, { useEffect, useState } from "react";
import "../../style.css";

import blank from "../../assets/Images/blank.png";
import { ColorTheme } from "../../colortheme";
import { Link } from "react-router-dom";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router";
import {
  deleteUser,
  getSingleUser,
  getUserList,
} from "../../Components/ApiConst";
import { toast } from "react-toastify";
import { DialogBox } from "../../Components/inputs/DialogBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MessageOut from "../../Components/chat/MessageOut";
import MessageIn from "../../Components/chat/MessageIn";


export default function MessageCard(props) {
  // const classes = useStyles();
  const api = process.env.REACT_APP_API_URL;
  const { user, userEdit, userDel } = props;
  // const imgText = (user.fname.charAt(0) + user.lname.charAt(0)).toUpperCase();
  const [show, setShow] = useState(false);
  const capitalizeFirstLetter = (string) => {
    // return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const fullName = (name) => {
    if (name.length > 8) {
      return name.substring(0, 8) + "...";
    } else {
      return name;
    }
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <div className="card-glass-list"> */}
      <div className="card card-custom gutter-b card-stretch">
        <div class="card-body pt-4 d-flex flex-column">
          <div class="d-flex justify-content-end">
            <div class="dropdown dropdown-inline dropdown">
              <div class="topbar-item">
                <div class="btn btn-clean btn-hover-light-primary btn-sm btn-icon">
                  <i class="ki ki-bold-more-hor"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex align-items-end mb-7 makeStyles-wrapper-1">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0 mr-4 mt-lg-0 mt-3">
                {user.profile ? (
                  <div className="symbol symbol-circle symbol-lg-75">
                    <img
                      alt="Pic"
                      src={api + user.profile_data[0]?.avatar_url}
                    />
                    
                  </div>
                ) : (
                  <div
                    className={`symbol symbol-lg-75 symbol-circle symbol-primary`}
                  >
                    <span className="symbol-label font-size-h3 fw-boldest">
                      {"mp"}
                    </span>
                  </div>
                )}
              </div>
              <div class="d-flex flex-column">
                <a
                  class="text-dark fw-bold text-hover-primary font-size-h4 mb-0"
                  href={"/ProfileAllList/overview/" + user.id}
                  
                >

                {(user?.fname == null) ||(user?.fname == null)  ? "noname" : ((user.fname + " " +user.lname).slice(0,8)) + ("...")}
                 
                </a>
                <span class="text-muted fw-bold">-</span>
              </div>
            </div>
          </div>
          <div class="mb-7">
            <div class="d-flex justify-content-between align-items-center">
              <span class=" fw-bolder mr-2">Email:</span>
              <Link
                to="/"
                className={" text-muted text-hover-primary makeStyles-wrapper-4"}
              >
               {user.email_data && user.email_data.length
                        ? user.email_data.filter((elm) => elm.type===1 ).map((elm) => elm.email)
                        : "-"}
              </Link>
            </div>
            <div class="d-flex justify-content-between align-items-center my-1">
              <span class=" fw-bolder mr-2">Phone:</span>
              <a
                class="text-muted text-hover-primary makeStyles-wrapper-1"
                href="/"
              >
                 {user.phonenumber_data && user.phonenumber_data.length
                        ?  user.phonenumber_data.filter((elm) => elm.type===1 ).map((elm) => elm.phone_number)
                        : "-"}
              </a>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <span class=" fw-bolder mr-2">User name:</span>
              <span class="text-muted fw-bold makeStyles-wrapper-1"> {user.username ? user.username : "-"}</span>
            </div>
          </div>
          <div class="mt-auto mb-3 mx-auto ">
            <button class="btn btn-md btn-icon btn-light-primary btn-hover-light btn-pill mx-2">
              <i class="fas fa-edit fa-sm" aria-hidden="true"></i>
            </button>
            <button class="btn btn-md btn-icon btn-light-danger btn-hover-light btn-pill mx-2">
              <i class="fas fa-trash fa-sm" aria-hidden="true"></i>
            </button>
          </div>
          <button class="btn btn-block btn-sm btn-light-warning fw-bolder text-uppercase py-4 mt-auto"
            onClick={handleShow}
          >
            write message
          </button>
        </div>
      </div>


      <div
        className={`modal modal-sticky modal-sticky-bottom-right ${
          show ? "show" : ""
        }`}
        id="kt_chat_modal"
        role="dialog"
        data-backdrop="false"
        aria-modal={show}
        style={{ display: show ? "block" : "none", height: "85vh" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="card card-custom">
              {/* <!--begin::Header--> */}
              <div className="card-header align-items-center px-4 py-3">
                <div className="text-left flex-grow-1">
                  {/* <AddUserDropdown /> */}
                </div>
                <div className="text-center flex-grow-1">
                  <div className=" fw-bold font-size-h5">
                    Matt Pears
                  </div>
                  <div>
                    <span className="label label-sm label-dot label-success"></span>
                    <span className="fw-bold text-muted font-size-sm">
                      Active
                    </span>
                  </div>
                </div>
                <div className="text-end flex-grow-1">
                  <button
                    type="button"
                    className="btn btn-clean btn-sm btn-icon btn-icon-md"
                    data-dismiss="modal"
                    // label={<i className="fas fa-close"></i>}
                    onClick={handleClose}
                  ><i className="fas fa-close"></i> </button>
                </div>
              </div>
              {/* <!--end::Header--> */}
              {/* <!--begin::Body--> */}
              <div
                className="card-body"
                style={{ overflowX: "auto", height: "55vh" }}
              >
                {/* <!--begin::Scroll--> */}
                <div className="scroll scroll-pull" data-mobile-height="350">
                  {/* <!--begin::Messages--> */}
                  <div className="messages">
                    <MessageIn
                      image={blank}
                      userName="Matt Pears"
                      time="2 Hours"
                      message="How likely are you to recommend our company to your friends
                    and family?"
                    />
                    <MessageOut
                      time="3 minutes"
                      image={blank}
                      message="Hey there, we’re just writing to let you know that you’ve
                    been subscribed to Link repository on GitHub."
                    />
                    <MessageIn
                      image={blank}
                      userName="Matt Pears"
                      time="2 Hours"
                      message="How likely are you to recommend our company to your friends
                    and family?"
                    />
                    <MessageOut
                      time="3 minutes"
                      image={blank}
                      message="Hey there, we’re just writing to let you know that you’ve
                    been subscribed to Link repository on GitHub."
                    />
                  </div>
                  {/* <!--end::Messages--> */}
                </div>
                {/* <!--end::Scroll--> */}
              </div>
              {/* <!--end::Body--> */}
              {/* <!--begin::Footer--> */}
              <div className="card-footer align-items-center">
                {/* <!--begin::Compose--> */}
                <textarea
                  className="form-control border-0 p-0"
                  rows="2"
                  placeholder="Type Link message"
                ></textarea>
                <div className="d-flex align-items-center justify-content-between mt-5">
                  <div className="mr-3">
                    <button
                      className="btn btn-clean btn-icon btn-md mr-1"
                      label={<i className="flaticon2-photograph icon-lg"></i>}
                    />
                    <button
                      className="btn btn-clean btn-icon btn-md"
                      label={<i className="flaticon2-photo-camera icon-lg"></i>}
                    />
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-primary btn-md text-uppercase fw-bold chat-send py-2 px-6"
                      // label="Send"
                    >send</button>
                  </div>
                </div>
                {/* <!--begin::Compose--> */}
              </div>
              {/* <!--end::Footer--> */}
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
