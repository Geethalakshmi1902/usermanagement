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

export default function SocialCard(props) {
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
      <div class="card card-custom gutter-b card-stretch">
        <div class="card-body text-center pt-4">
          <div class="d-flex justify-content-end">
            <div class="dropdown dropdown-inline dropdown">
              <div class="topbar-item">
                <div class="btn btn-clean btn-hover-light-primary btn-sm btn-icon">
                  <i class="ki ki-bold-more-hor"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-7">
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
          <div class="my-2">
            <a
              class="text-dark fw-bold text-hover-primary font-size-h4 mb-0"
              href={"/ProfileAllList/overview/" + user.id}
              >
              {(user?.fname == null) ||(user?.fname == null)  ? "noname" : ((user.fname + " " +user.lname).slice(0,8)) + ("...")}
            </a>
          </div>
          <span class="label label-inline label-lg label-light-warning btn-sm fw-bold">
            Active
          </span>
          <div class="mt-4 mb-3 mx-auto">
          <button class="btn btn-md btn-icon btn-light-primary btn-hover-light btn-pill mx-2">
              <i class="fas fa-edit fa-sm" aria-hidden="true"></i>
            </button>
            <button class="btn btn-md btn-icon btn-light-danger btn-hover-light btn-pill mx-2">
              <i class="fas fa-trash fa-sm" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
