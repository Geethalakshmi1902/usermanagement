import React, { useEffect, useState } from "react";
// import "./style.css";

export default function NotificationCard() {
  const [profileview, setProfileview] = useState(false);
  const [market, setMarket] = React.useState(false);
  const [Notification, setNotification] = React.useState(false);
  const [month, setMonth] = React.useState(false);
  const [week, setWeek] = React.useState(false);

  
  return (
    <>
      
              <div className="pc-column-lg">
                <div className="pc-custom-card-right">
                  <div className="pc-menu-card-header">
                    <h3 class="pc-menu-card-title">Notifications</h3>
                    <div className="pc-tool-bar">
                      <div className="pc-drop-down-inline">
                        <a
                          href="new"
                          className="hamburger-btn"
                          data-toggle="dropdown"
                          // aria-haspopup="true"
                          // aria-expanded="false"
                        >
                          <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                        </a>
                        <div className="pc-dropdown-menu">
                          <ul className="pc-toogle-list">
                            <li className="pc-toogle-item">
                              <a href="new" className="pc-toogle-item-link">
                                <span className="pc-toogle-icon">
                                  <i></i>
                                </span>
                                <span className="pc-toogle-text">Contact</span>
                              </a>
                            </li>
                            <li className="pc-toogle-item">
                              <a href="new" className="pc-toogle-item-link">
                                <span className="pc-toogle-icon">
                                  <i></i>
                                </span>
                                <span className="pc-toogle-text">Contact</span>
                              </a>
                            </li>
                            <li className="pc-toogle-item">
                              <a href="new" className="pc-toogle-item-link">
                                <span className="pc-toogle-icon">
                                  <i></i>
                                </span>
                                <span className="pc-toogle-text">Contact</span>
                              </a>
                            </li>
                            <li className="pc-toogle-item">
                              <a href="new" className="pc-toogle-item-link">
                                <span className="pc-toogle-icon">
                                  <i></i>
                                </span>
                                <span className="pc-toogle-text">Contact</span>
                              </a>
                            </li>
                            <li className="pc-toogle-item">
                              <a href="new" className="pc-toogle-item-link">
                                <span className="pc-toogle-icon">
                                  <i></i>
                                </span>
                                <span className="pc-toogle-text">Contact</span>
                              </a>
                            </li>
                            <li className="pc-toogle-item">
                              <a href="new" className="pc-toogle-item-link">
                                <span className="pc-toogle-icon">
                                  <i></i>
                                </span>
                                <span className="pc-toogle-text">Contact</span>
                              </a>
                            </li>
                            <hr />
                            <li className="pc-toogle-item">
                              <a href="new" className="pc-toogle-item-link">
                                <span className="pc-toogle-icon">
                                  <i></i>
                                </span>
                                <span className="pc-toogle-text">Contact</span>
                              </a>
                            </li>
                            <li className="pc-toogle-item">
                              <a href="new" className="pc-toogle-item-link">
                                <span className="pc-toogle-icon">
                                  <i className="pc-success-symbol"></i>
                                </span>
                                <span className="pc-toogle-text">Contact</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pc-menu-card-body">
                    <div className="pc-menu-card-items">
                      <div className="pc-item-align">
                        <label className="pc-item-checkbox">
                          <input
                            className="pc-checkbox-active"
                            type="checkbox"
                            value="1"
                          ></input>
                          <span className="pc-after-checkbox"></span>
                        </label>
                        <div className="pc-notification-items">
                          <div className="pc-notification-item">
                            <a href="new" className="pc-iteam-name">
                              Daily Standup Meeting
                            </a>
                            <span class="pc-text-muted">Due in 2 Days</span>
                          </div>
                          <span className="pc-notification-label label-blue">
                            Approved
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="pc-menu-card-items">
                      <div className="pc-item-align">
                        <label className="pc-item-checkbox">
                          <input
                            className="pc-checkbox-active"
                            type="checkbox"
                            value="1"
                          ></input>
                          <span className="pc-after-checkbox"></span>
                        </label>
                        <div className="pc-notification-items">
                          <div className="pc-notification-item">
                            <a href="new" className="pc-iteam-name">
                              Group Town Hall Meet-up with showcase
                            </a>
                            <span class="pc-text-muted">Due in 2 Days</span>
                          </div>
                          <span className="pc-notification-label label-yellow">
                            in progress
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="pc-menu-card-items">
                      <div className="pc-item-align">
                        <label className="pc-item-checkbox">
                          <input
                            className="pc-checkbox-active"
                            type="checkbox"
                            value="1"
                          ></input>
                          <span className="pc-after-checkbox"></span>
                        </label>
                        <div className="pc-notification-items">
                          <div className="pc-notification-item">
                            <a href="new" className="pc-iteam-name">
                              Next sprint planning and estimations
                            </a>
                            <span class="pc-text-muted">Due in 2 Days</span>
                          </div>
                          <span className="pc-notification-label label-success">
                            Sucess
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="pc-menu-card-items">
                      <div className="pc-item-align">
                        <label className="pc-item-checkbox">
                          <input
                            className="pc-checkbox-active"
                            type="checkbox"
                            value="1"
                          ></input>
                          <span className="pc-after-checkbox"></span>
                        </label>
                        <div className="pc-notification-items">
                          <div className="pc-notification-item">
                            <a href="new" className="pc-iteam-name">
                              Sprint delivery and project deployment
                            </a>
                            <span class="pc-text-muted">Due in 2 Days</span>
                          </div>
                          <span className="pc-notification-label label-reject">
                            Rejected
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="pc-menu-card-items">
                      <div className="pc-item-align">
                        <label className="pc-item-checkbox">
                          <input
                            className="pc-checkbox-active"
                            type="checkbox"
                            value="1"
                          ></input>
                          <span className="pc-after-checkbox"></span>
                        </label>
                        <div className="pc-notification-items">
                          <div className="pc-notification-item">
                            <a href="new" className="pc-iteam-name">
                              Data analytics research showcase
                            </a>
                            <span class="pc-text-muted">Due in 2 Days</span>
                          </div>
                          <span className="pc-notification-label label-progress">
                            in progress
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            
    </>
  );
}
