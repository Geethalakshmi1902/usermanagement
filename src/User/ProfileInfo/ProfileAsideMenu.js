import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import BackgroundImage from "../../Components/inputs/BackgroundImage";
import uploadIcon from "../../assets/Images/uploadIcon.png";
import noImage from "../../assets/Images/noImage.png";
import logoel from "../../assets/Images/logoel.png";
import blank from "../../assets/Images/blank.png";

export default function ProfileAsideMenu(props) {
  const { className, profile, user } = props;
  console.log(profile.length);

  let location = useLocation();
  let UserID = location.pathname.substring(
    location.pathname.lastIndexOf("/") + 1
  );
  let URL = location.pathname.substring(location.pathname);
  const [profileview, setProfileview] = useState(false);
  const navigate = useNavigate();
  const [currentLocation, setCurrentLocation] = React.useState("/");

  useEffect(() => {
    setCurrentLocation(window.location.pathname.split("/")[2]);
  }, []);

  const activeCheck = (url) => {
    if (url === currentLocation) {
      return "pc-navi-link pc-actived";
    }
    return "pc-navi-link";
  };

  const handleIconClicks = (e) => {
    setProfileview(true);
  };

  const toAbsoluteUrl = process.env.REACT_APP_API_URL;

  return (
    <>
      <div className="pc-side-menu">
        <div className="pc-custom-card">
          <div className="pc-custom-card-body">
            <div className="pc-items-one">
              <div className="pc-drop-down-inline">
                {/* <a href="/"
                      className="hamburger-btn"
                      data-toggle="dropdown"
                     
                    > */}
                {/* <span> <i className="fa fa-ellipsis-h" aria-hidden="true"></i></span> */}
                {/* </a> */}
                {/* <IconButton
                  className="hamburger-btn"
                  onClick={(e) => handleIconClicks(e)}
                > */}
                <div
                  className="hamburger-btn"
                  onClick={(e) => handleIconClicks(e)}
                >
                  <i class="fas fa-ellipsis-h"></i>
                </div>{" "}
                {/* </IconButton> */}
                {profileview ? (
                  <div className="pc-dropdown-menu">
                    <ul className="pc-toogle-list">
                      <li className="pc-toogle-item">
                        <a href="sfas" className="pc-toogle-item-link">
                          <span className="pc-toogle-icon hover-icon ">
                            <i class="fa fa-users" aria-hidden="true"></i>
                          </span>
                          {/* <span className="pc-toogle-icon hover-icon"><i className="fa fa-droplet" aria-hidden="true"></i></span> */}
                          <span className="pc-toogle-text hover-icon ">
                            New Group
                          </span>
                        </a>
                      </li>
                      <li className="pc-toogle-item">
                        <a href="new" className="pc-toogle-item-link">
                          {/* <span className="pc-toogle-icon hover-icon">
                              <i></i>
                            </span> */}

                          <span className="pc-toogle-icon hover-icon">
                            <i className="fa fa-droplet" aria-hidden="true"></i>
                          </span>
                          <span className="pc-toogle-text hover-icon">
                            Contacts
                          </span>
                        </a>
                      </li>
                      <li className="pc-toogle-item">
                        <a href="new" className="pc-toogle-item-link">
                          {/* <span className="pc-toogle-icon hover-icon">
                              <i></i>
                            </span> */}

                          <span className="pc-toogle-icon hover-icon">
                            <i className="fa fa-droplet" aria-hidden="true"></i>
                          </span>
                          <span className="pc-toogle-text hover-icon">
                            Groups
                          </span>
                          <span className="pc-toogle-text hover-icon-badge">
                            <span className="pc-label-btn">new</span>
                          </span>
                        </a>
                      </li>
                      <li className="pc-toogle-item">
                        <a href="new" className="pc-toogle-item-link">
                          {/* <span className="pc-toogle-icon hover-icon">
                              <i></i>
                            </span> */}

                          <span className="pc-toogle-icon hover-icon">
                            <i className="fa fa-droplet" aria-hidden="true"></i>
                          </span>
                          <span className="pc-toogle-text hover-icon">
                            Calls
                          </span>
                        </a>
                      </li>
                      <li className="pc-toogle-item">
                        <a href="new" className="pc-toogle-item-link">
                          {/* <span className="pc-toogle-icon hover-icon">
                              <i></i>
                            </span> */}

                          <span className="pc-toogle-icon hover-icon">
                            <i className="fa fa-droplet" aria-hidden="true"></i>
                          </span>
                          <span className="pc-toogle-text hover-icon">
                            Settings
                          </span>
                        </a>
                      </li>
                      <li className="pc-navi-separator"></li>
                      <li className="pc-toogle-item">
                        <a href="new" className="pc-toogle-item-link">
                          {/* <span className="pc-toogle-icon hover-icon">
                              <i></i>
                            </span> */}

                          <span className="pc-toogle-icon hover-icon">
                            <i
                              class="fa fa-object-group"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <span className="pc-toogle-text hover-icon">
                            Help
                          </span>
                        </a>
                      </li>

                      <li className="pc-toogle-item">
                        <a href="new" className="pc-toogle-item-link">
                          {/* <span className="pc-toogle-icon hover-icon">
                              <i></i>
                            </span> */}

                          <span className="pc-toogle-icon hover-icon">
                            <i
                              class="fa fa-object-group"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <span className="pc-toogle-text hover-icon">
                            Privacy
                          </span>
                          <span className="pc-navi-label">
                            <span className="pc-label-count">5</span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="pc-items-two">
              <div className="pc-user-image">
                <div
                  className="pc-image-label"
                  // style={{ backgroundImage: `url(${ profile ? toAbsoluteUrl + profile.map((elm) => elm.avatar_url) : {uploadIcon}})` }}
                >
                  <img
                    className="pc-image-label"
                    alt="Pic"
                    src={
                      profile.length != 0
                        ? toAbsoluteUrl + profile.map((elm) => elm.avatar_url)
                        : blank
                    }
                  />

                  {/* <BackgroundImage
                className="pc-image-label"
                image={
                  profile ? URL + profile.avatar_url : {uploadIcon}
                }
              /> */}
                  <i className="pc-symbol-badge"></i>
                </div>
              </div>
              <div className="pc-user-detail">
                <span className="pc-user-title">
                  {" "}
                  {user.fname} {user.lname}
                </span>
                <div className="pc-text-muted"></div>
                <div className="pc-user-btn">
                  <a href="new" className="pc-chat-btn">
                    Chat
                  </a>
                  <span className="pc-follow-btn">Follow</span>
                </div>
              </div>
            </div>
            <div className="pc-items-three">
              <div className="pc-user-personal-detail">
                <span className="pc-detail">Email:</span>
                <a href="new" className="pc-detail-value" id="pc-detail-value">
                  {user.email_data && user.email_data.length
                    ? user.email_data
                        .filter((elm) => elm.type === 1)
                        .map((elm) => elm.email)
                    : "-"}
                </a>
              </div>
              <div className="pc-user-personal-detail">
                <span className="pc-detail">Phone:</span>
                <a href="new" className="pc-detail-value">
                  {user.phonenumber_data && user.phonenumber_data.length
                    ? user.phonenumber_data
                        .filter((elm) => elm.type === 1)
                        .map((elm) => elm.phone_number)
                    : "-"}
                </a>
              </div>
              <div className="pc-user-personal-detail">
                <span className="pc-detail">Location:</span>
                <a href="new" className="pc-detail-value">
                  -
                </a>
              </div>
            </div>
            <div className="pc-items-four">
              <div className="pc-navi-items-four">
                <a
                  href={"/ProfileAllList/overview/" + UserID}
                  className={activeCheck("overview")}
                >
                  {/* <span className="navi-icon">
                        <img className="svg-icon" src={location} alt="pic" />
                      </span> */}
                  <i class="fa fa-th" aria-hidden="true"></i>

                  {/* <GridViewIcon sx={{ color: "#7E8299" }} /> */}
                  <span className="pc-navi-text">Profile Overview</span>
                </a>
              </div>
              <div className="pc-navi-items-four"></div>
              <div className="pc-navi-items-four">
                <a
                  href={"/ProfileAllList/personal-information/" + UserID}
                  className={activeCheck("personal-information")}
                >
                  {/* <span className="navi-icon">
                        <img className="svg-icon" src={location} alt="pic" />

                      </span> */}
                  {/* <ListIcon sx={{ color: 'white' }}> */}
                  <i class="fa fa-user" aria-hidden="true"></i>

                  {/* <PersonIcon sx={{ color: "#7E8299" }} /> */}
                  {/* </ListIcon> */}
                  <span className="pc-navi-text">Personal Information</span>
                </a>
              </div>
              <div className="pc-navi-items-four">
                <a
                  href={"/ProfileAllList/contact-information/" + UserID}
                  className={activeCheck("contact-information")}
                >
                  {/* <span className="navi-icon"> */}
                  {/* <img className="svg-icon" src={location} alt="pic" /> */}

                  <i class="fa fa-phone" aria-hidden="true"></i>

                  {/* <PhoneForwardedIcon sx={{ color: "#7E8299" }} /> */}
                  {/* </span> */}
                  <span className="pc-navi-text">Contact Information</span>
                </a>
              </div>
              <div className="pc-navi-items-four">
                <a
                  href={"/ProfileAllList/change-password/" + UserID}
                  className={activeCheck("change-password")}
                >
                  {/* <span className="navi-icon">
                        <img className="svg-icon" src={location} alt="pic" />
                      </span> */}
                  <i class="fa fa-lock"></i>
                  {/* <LockResetIcon sx={{ color: "#7E8299" }} /> */}
                  <span className="pc-navi-text">Change Password</span>
                  <span className="pc-navi-label">
                    <span className="pc-label-count">5</span>
                  </span>
                </a>
              </div>
              <div className="pc-navi-items-four">
                <a
                  href={"/ProfileAllList/address-information/" + UserID}
                  className={activeCheck("email-setting")}
                >
                  {/* <span className="navi-icon">
                        <img className="svg-icon" src={location} alt="pic" />
                      </span> */}
                  <i class="fab fa-firstdraft"></i>
                  {/* <DraftsIcon sx={{ color: "#7E8299" }} /> */}
                  <span className="pc-navi-text">Address informaiton</span>
                </a>
              </div>
              {/* <div className="pc-navi-items-four">
                <a href="new" className={activeCheck('overview') }>
                  
                  <CreditCardIcon sx={{ color: "#7E8299" }} />
                  <span className="pc-navi-text">Saved Credit Cards</span>
                </a>
              </div> */}
              {/* <div className="pc-navi-items-four">
                <a href="new" className={activeCheck('overview') }>
                  
                  <AlignHorizontalLeftIcon sx={{ color: "#7E8299" }} />
                  <span className="pc-navi-text">Tax information</span>
                  <span className="pc-navi-label">
                    <span className="label-btn">New</span>
                  </span>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
