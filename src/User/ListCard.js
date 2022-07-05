import React, { useEffect } from "react";
import "../style.css";
import noimage from "../assets/Images/noImage.png";
import piggy_bank from "../assets/Images/piggy_bank.png";
import chat from "../assets/Images/chat.png";
import confetti from "../assets/Images/confetti.png";
import connection from "../assets/Images/connection.png";
import file from "../assets/Images/file.png";
import location from "../assets/Images/location.png";
import lock from "../assets/Images/lock.png";
import mail from "../assets/Images/mail.png";
import pie_chart from "../assets/Images/pie_chart.png";
import tick_mark from "../assets/Images/tick_mark.png";
import { ColorTheme } from "../colortheme";
import { Link } from "react-router-dom";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router";
import { deleteUser, getSingleUser, getUserList } from "../Components/ApiConst";
import { toast } from "react-toastify";
import { DialogBox } from "../Components/inputs/DialogBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoadingSpinner from "../Components/LoaderSmall";
import { DeleteConfirm } from "../Components/CustomAlert";
import Loading from "../Components/inputs/Loading";
export default function ListCard(props) {
  const { user, userDel, userEdit, filteredContacts } = props;
  const Navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [showDeleteConfirmationDialog, setShowDeleteConfirmationDialog] =
    React.useState(false);
  // const api =process.env.REACT_APP_USER_UI_API_URL;
  const api = process.env.REACT_APP_API_URL;
  // const imgText = (user.fname.charAt(0) + user.lname.charAt(0)).toUpperCase();
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const has_gender = user?.profile_data[0];

  const calComplete = (p) => {
    if (user.profile) {
      p = p + 50;
    }
    if (user.email_data && user.email_data.length) {
      p = p + 10;
    }
    if (user.phonenumber_data && user.phonenumber_data.length) {
      p = p + 10;
    }
    if (user.username) {
      p = p + 10;
    }
    if (user.profile_data.length && user.profile_data[0].avatar_url) {
      p = p + 10;
    }
    return p;
  };
  var genders = {
    0: { title: "Male" },
    1: { title: "Female" },
    2: { title: "Others" },
  };

  var maritals = {
    0: { title: "Married" },
    1: { title: "Single" },
    2: { title: "Other" },
  };

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--card-background",
      ColorTheme.card_background
    );
    document.documentElement.style.setProperty(
      "--visible-link-with-hover",
      ColorTheme.visible_link_with_hover
    );
    document.documentElement.style.setProperty(
      "--text-muted-color",
      ColorTheme.text_muted_color
    );
    document.documentElement.style.setProperty(
      "--currency-symbol",
      ColorTheme.currency_symbol
    );
    document.documentElement.style.setProperty(
      "--Price-text",
      ColorTheme.Price_text
    );
    document.documentElement.style.setProperty(
      "--user-group-pic-border",
      ColorTheme.user_group_pic_border
    );
    document.documentElement.style.setProperty(
      "--user-profile-pic-bg)",
      ColorTheme.user_profile_pic_bg
    );
    document.documentElement.style.setProperty(
      "--user-profile-text",
      ColorTheme.user_profile_text
    );
    document.documentElement.style.setProperty(
      "--ask-btn-text",
      ColorTheme.ask_btn_text
    );
    document.documentElement.style.setProperty(
      "--ask-btn-bg",
      ColorTheme.ask_btn_bg
    );
    document.documentElement.style.setProperty(
      "--hire-btn-text",
      ColorTheme.hire_btn_text
    );
    document.documentElement.style.setProperty(
      "--hire-btn-bg",
      ColorTheme.hire_btn_bg
    );
    document.documentElement.style.setProperty(
      "--hire-btn-hover-bg",
      ColorTheme.hire_btn_hover_bg
    );
    document.documentElement.style.setProperty(
      "--hire-btn-hover-border",
      ColorTheme.hire_btn_hover_border
    );
    document.documentElement.style.setProperty(
      "--user-items-text",
      ColorTheme.user_items_text
    );
    document.documentElement.style.setProperty(
      "--user-description",
      ColorTheme.user_description
    );
    document.documentElement.style.setProperty(
      "--progressbar-bg",
      ColorTheme.progressbar_bg
    );
    document.documentElement.style.setProperty(
      "--progressbar-percentage",
      ColorTheme.progressbar_percentage
    );
    document.documentElement.style.setProperty(
      "--ask-btn-text-active",
      ColorTheme.ask_btn_text_active
    );
  }, []);
  const deleteDialogBox = (id) => {
    setShowDeleteConfirmationDialog(true);
  };
  const deleteUserInfo = (id) => {
    DeleteConfirm({
      message: "Do you want to delete?",
      onYes: () => {
        setLoading(true);

        deleteUser(id)
          .then((resp) => {
            if (resp.status === 200) {
              // setShowDeleteConfirmationDialog(false);
              //   $("#data_table").DataTable().ajax.reload();

              toast.success("User deleted successfully.!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
              });
            } else {
              showUserDeleteError();
            }
          })
          .catch((error) => {
            showUserDeleteError();
          })
          .finally(() => {
            setLoading(false);
          });
      },
    });
  };
  const showUserDeleteError = () => {
    toast.error("Unable to delete the user!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
    });
  };

  const addOrEditUserDetail = () => {
    Navigate("/UserForm/" + user.id);
  };

  return (
    <>
      <div class={`card card-custom gutter-b ${loading ? "d-none" : ""}`}>
        <div class="card-body">
          <div class="d-flex">
            <div class="flex-shrink-0 me-7">
              <div class="symbol symbol-50 symbol-lg-120 symbol-light-danger">
                {user.profile_data.length && user.profile_data[0].avatar_url ? (
                  <img alt="Pic" src={api + user.profile_data[0]?.avatar_url} />
                ) : (
                  <span className="fs-h1 symbol-label fw-boldest ">{"MP"}</span>
                )}
              </div>
            </div>
            <div class="flex-grow-1">
              <div class="d-flex align-items-center justify-content-between flex-wrap mt-2">
                <div class="me-3">
                  <Link
                    to={"/ProfileAllList/overview/" + user.id}
                    className="d-flex align-items-center text-dark text-hover-primary fs-h5 fw-bold me-3"
                  >
                    {user?.fname == null
                      ? "No userName"
                      : capitalizeFirstLetter(user?.fname)}{" "}
                    {user?.lname == null
                      ? "No userName"
                      : capitalizeFirstLetter(user?.lname)}
                    <img className="pc-tick-mark" src={tick_mark} alt="pic" />
                  </Link>

                  <div class="d-flex flex-wrap my-2">
                    <a
                      class="text-muted text-hover-primary fw-bold me-lg-8 me-5 mb-lg-0 mb-2"
                      href="/"
                    >
                      <span class="svg-icon svg-icon-md svg-icon-gray-500 me-1">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                      </span>
                      {user.email_data && user.email_data.length
                        ? user.email_data
                            .filter((elm) => elm.type === 1)
                            .map((elm) => elm.email)
                        : "-"}
                    </a>
                    <a
                      class="text-muted text-hover-primary fw-bold me-lg-8 me-5 mb-lg-0 mb-2"
                      href="/"
                    >
                      <span class="svg-icon svg-icon-md svg-icon-gray-500 me-1">
                        <i class="fa fa-phone"></i>
                      </span>
                      {user.phonenumber_data && user.phonenumber_data.length
                        ? user.phonenumber_data
                            .filter((elm) => elm.type === 1)
                            .map((elm) => elm.phone_number)
                        : "-"}
                    </a>
                    <a class="text-muted text-hover-primary fw-bold" href="/">
                      <span class="svg-icon svg-icon-md svg-icon-gray-500 me-1">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                      </span>
                      -
                    </a>
                  </div>
                  <div class="d-flex flex-wrap my-2">
                    <a
                      class="text-muted text-hover-primary fw-bold me-lg-8 me-5 mb-lg-0 mb-2"
                      href="/"
                    >
                      <span class="svg-icon svg-icon-md svg-icon-gray-500 me-1">
                        <i class="fa fa-birthday-cake" aria-hidden="true"></i>
                      </span>
                      {user.profile_data.length == false ||
                      has_gender.date_of_birth == null
                        ? "-"
                        : has_gender.date_of_birth}
                    </a>
                    <a
                      class="text-muted text-hover-primary fw-bold me-lg-8 me-5 mb-lg-0 mb-2"
                      href="/"
                    >
                      <span class="svg-icon svg-icon-md svg-icon-gray-500 me-1">
                        <i class="fas fa-user-alt"></i>
                      </span>
                      {user.profile_data.length == false ||
                      has_gender.gender == null
                        ? "-"
                        : (has_gender.gender == 0 && "Male") ||
                          (has_gender.gender == 1 && "Female") ||
                          (has_gender.gender == 2 && "Other")}
                    </a>
                    <a class="text-muted text-hover-primary fw-bold" href="/">
                      <span class="svg-icon svg-icon-md svg-icon-gray-500 me-1">
                        <i class="fas fa-ring"></i>
                      </span>
                      {user.profile_data.length == false ||
                      has_gender.marital_status == null
                        ? "-"
                        : (has_gender.marital_status == 0 && "Married") ||
                          (has_gender.marital_status == 1 && "Single") ||
                          (has_gender.marital_status == 2 && "Other")}
                    </a>
                  </div>
                </div>
                <div style={{ alignSelf: "flex-start" }}>
                  {/* <button className="btn btn-sm btn-light-primary btn-hover-light btn-icon me-2 mb-2 mt-2" 
                 onClick={addOrEditUserDetail}
                 >
                  <i class="fas fa-edit"></i>
                </button> */}
                  <button
                    className="btn btn-sm btn-light-danger btn-hover-light btn-icon me-2 mb-2 mt-2"
                    onClick={(e) => {
                      deleteUserInfo(user.id);
                    }}
                  >
                    <i class="fas fa-trash" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
              <div class="d-flex align-items-center flex-wrap justify-content-between">
                <div class="flex-grow-1 fw-bold text-dark-50 py-2 py-lg-2 me-5"></div>
              </div>
            </div>
          </div>
          <div class="separator separator-solid my-7"></div>
        </div>
      </div>
      {loading && <LoadingSpinner />}
    </>
  );
}
