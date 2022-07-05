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

export default function UserListCard(props) {
  const { user, userDelete, userEdit, filteredContacts } = props;
  const Navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);
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
    setLoading(true);
    deleteUser(id)
      .then((resp) => {
        toast.success("User deleted successfully.!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
        });
        if (resp.status === 200) {
          setShowDeleteConfirmationDialog(false);
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
      <div className="pc-card">
        <div className="pc-row">
          <div className="pc-column">
            <div className="pc-imag-tag">
              {user.profile_data.length && user.profile_data[0].avatar_url ? (
                <img
                  className="pc-imag-tag"
                  alt="Pic"
                  src={api + user.profile_data[0]?.avatar_url}
                />
              ) : (
                <span>{"MP"}</span>
              )}
            </div>
          </div>
          <div className="pc-user-detail-column">
            <div className="pc-card-active-link">
              <div>
                <div className="pc-username">
                  <Link
                    to={"/ProfileAllList/overview/" + user.id}
                    className="pc-username"
                  >
                    {user?.fname == null
                      ? "No userName"
                      : capitalizeFirstLetter(user?.fname)}{" "}
                    {user?.lname == null
                      ? "No userName"
                      : capitalizeFirstLetter(user?.lname)}
                    <img className="pc-tick-mark" src={tick_mark} alt="pic" />
                  </Link>
                </div>

                <div className="pc-user-icon-link">
                  <div className="pc-personal-detail">
                    {/* <img className="pc-icons" src={mail} alt="mail" /> */}
                    <div className="pc-icons pc-text-muted">
                      {" "}
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                    </div>
                    <span>
                      {user.email_data && user.email_data.length
                        ? user.email_data
                            .filter((elm) => elm.type === 1)
                            .map((elm) => elm.email)
                        : "-"}
                    </span>
                  </div>
                  <div className="pc-personal-detail">
                    {" "}
                    {/* <img className="pc-icons" src={lock} alt="lock" /> */}
                    <div className="pc-icons pc-text-muted">
                      <i class="fa fa-phone"></i>
                    </div>
                    <span>
                      {user.phonenumber_data && user.phonenumber_data.length
                        ? user.phonenumber_data
                            .filter((elm) => elm.type === 1)
                            .map((elm) => elm.phone_number)
                        : "-"}
                    </span>
                  </div>
                  <div className="pc-personal-detail">
                    {" "}
                    {/* <img className="pc-icons" src={location} alt="location" /> */}
                    <div className="pc-icons pc-text-muted">
                      <i class="fa fa-map-marker" aria-hidden="true"></i>
                    </div>
                    <span>{"-"}</span>
                  </div>
                </div>
              </div>
              <div className="pc-display-flex">
                <div
                  className="pc-edit-del-icon sucess"
                  onClick={addOrEditUserDetail}
                >
                  <i class="fas fa-edit fa-2x"></i>
                </div>
                <div
                  className="pc-edit-del-icon danger"
                  onClick={(e) => deleteUserInfo(user.id)}
                >
                  <i class="fas fa-trash fa-2x" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="pc-user-description">
              <div className="pc-inner-description">
                {/* I distinguish three main text objectives could be merely to
                inform people.
                <br /> A second could be persuade people. You want people to bay
                objective. */}
                <div className="pc-user-icon-link">
                  <div className="pc-personal-detail">
                    {/* <img className="pc-icons" src={mail} alt="mail" /> */}
                    <div className="pc-icons pc-text-muted">
                      {" "}
                      <i class="fa fa-birthday-cake" aria-hidden="true"></i>
                    </div>
                    <span>
                      {user.profile_data.length == false ||
                      has_gender.date_of_birth == null
                        ? "-"
                        : has_gender.date_of_birth}
                    </span>
                  </div>
                  <div className="pc-personal-detail">
                    {" "}
                    {/* <img className="pc-icons" src={lock} alt="lock" /> */}
                    <div className="pc-icons pc-text-muted">
                      <i class="fas fa-user-alt"></i>
                    </div>
                    <span>
                      {user.profile_data.length == false ||
                      has_gender.gender == null
                        ? "-"
                        : (has_gender.gender == 0 && "Male") ||
                          (has_gender.gender == 1 && "Female") ||
                          (has_gender.gender == 2 && "Other")}
                    </span>
                  </div>
                  <div className="pc-personal-detail">
                    {" "}
                    {/* <img className="pc-icons" src={location} alt="location" /> */}
                    <div className="pc-icons pc-text-muted">
                      <i class="fas fa-ring"></i>
                    </div>
                    <span>
                      {user.profile_data.length == false ||
                      has_gender.marital_status == null
                        ? "-"
                        : has_gender.marital_status}
                    </span>
                  </div>
                </div>
              </div>
              <div className="pc-progress-bar">
                {/* <span>Progress</span>
                <div className="pc-progress-bar-progress">
                  <div className="pc-percentage"></div>
                </div>
                <span>78%</span> */}
              </div>
            </div>
          </div>
        </div>

        {/* <hr /> */}
        {/* <div className="pc-user-details">
          <div className="pc-user-items">
            <div className="pc-user-items-align">
              <div className="pc-row">
                <div className="pc-finance">
                  <img className="pc-img-logo" src={piggy_bank} alt="pic" />
                </div>
                <div className="pc-finance">
                  Earnings
                  <span className="pc-currency">
                    $<span className="pc-amount">{user.earning ? user.earning : "-"}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="pc-user-items">
            <div className="pc-user-items-align">
              <div className="pc-row">
                <div className="pc-finance">
                  <img className="pc-img-logo" src={confetti} alt="confetti" />
                </div>
                <div className="pc-finance">
                  Expenses
                  <span className="pc-currency">
                    $<span className="pc-amount">{user.expense ? user.expense : "-"}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="pc-user-items">
            <div className="pc-user-items-align">
              <div className="pc-row">
                <div className="pc-finance">
                  <img className="pc-img-logo" src={pie_chart} alt="pic" />
                </div>
                <div className="pc-finance">
                  Net
                
                  <span className="pc-currency">
                    $<span className="pc-amount">{user.net ? user.net : "-"}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="pc-user-items">
            <div className="pc-user-items-align">
              <div className="pc-row">
                <div className="pc-finance">
                  <img className="pc-img-logo" src={file} alt="file" />
                </div>
                <div className="pc-finance">
                {user.task ? user.task : "-"} Tasks
                  <span className="pc-currency">
                    <span className="pc-view-link">View</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="pc-user-items">
            <div className="pc-user-items-align">
              <div className="pc-row">
                <div className="pc-finance">
                  <img className="pc-img-logo" src={chat} alt="chat" />
                </div>
                <div className="pc-finance">
                  648 Comments
                  <span className="pc-currency">
                    $<span className="pc-amount">{user.email ? user.email : "-"}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="pc-user-items">
            <div className="pc-user-items-align">
              <div className="pc-row">
                <div className="pc-finance">
                  <img
                    className="pc-img-logo"
                    src={connection}
                    alt="connection"
                  />
                </div>
                <div className="pc-user-group">
                  <div className="pc-user-grp-pic">
                    <img className="pc-profile-pic" alt="pic" src={noimage} />
                  </div>
                  <div className="pc-user-grp-pic">
                    <img className="pc-profile-pic" src={noimage} alt="pic" />
                  </div>
                  <div className="pc-user-grp-pic">
                    <img className="pc-profile-pic" src={noimage} alt="pic" />
                  </div>
                  <div className="pc-user-grp-pic">
                    <img className="pc-profile-pic" src={noimage} alt="pic" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* <DialogBox
        positiveButton={{
          text: "Delete",
          onPress: () => {
            setShowDeleteConfirmationDialog(false);
            deleteUserInfo(user.id);
          },
          variant: "contained",
          color: "error",
        }}
        negativeButton={{
          text: "Cancel",
          onPress: () => {
            setShowDeleteConfirmationDialog(false);
          },
          variant: "outlined",
        }}
        title="Detete Confirmation"
        open={showDeleteConfirmationDialog}
        // onclose={setShowDeleteConfirmationDialog(false)}
        dialogContent={<div>Are you sure you want to delete the Product?</div>}
      /> */}
    </>
  );
}
