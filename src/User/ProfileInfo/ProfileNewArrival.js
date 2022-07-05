import React from "react" ;
import bebo from "../../assets/Images/bebo.svg";
import plurk from "../../assets/Images/plurk.svg";
import kickstarter from "../../assets/Images/kickstarter.svg";
import puzzle from "../../assets/Images/puzzle.svg";
import telegram from "../../assets/Images/telegram.svg";


export default function ProfileNewArrival() {

return(
    <>
 <div className="pc-bottom-menu">
              <div className="pc-bottom-menu-header">
                <h3 className="pc-bottom-card-title">
                  <span className="pc-bottom-card-text">New Arrivals</span>
                  <span className="pc-text-muted pc-mt-3">
                    More than 400+ new members
                  </span>
                </h3>
                <div className="pc-bottom-card-toolbar">
                  <ul className="pc-nav pc-nav-pills">
                    <li className="pc-nav-items">
                      <a href="new" className="pc-nav-link">
                        Month
                      </a>
                    </li>
                    <li className="pc-nav-items">
                      <a href="new" className="pc-nav-link">
                        Week
                      </a>
                    </li>
                    <li className="pc-nav-items">
                      <a href="new" className="pc-nav-link bg-clr">
                        Day
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pc-bottom-menu-body">
                <div className="pc-tab-content pc-mt-5">
                  <div className="pc-tab-pane pc-fade pc-show pc-active">
                    <div className="pc-table-responsive">
                      <table className="pc-bottom-menu-table">
                        <thead>
                          <tr>
                            <th class="p-0 w-50px"></th>
                            <th class="p-0 min-w-200px"></th>
                            <th class="p-0 min-w-120px"></th>
                            <th class="p-0 min-w-120px"></th>
                            <th class="p-0 min-w-120px"></th>
                            <th class="p-0 min-w-160px"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="pc-table-symbol-img">
                              <div className="pc-table-symbol">
                                <span className="pc-symbol-label">
                                  <img
                                    className="pc-table-img"
                                    src={plurk}
                                    alt="pic"
                                  ></img>
                                </span>
                              </div>
                            </td>
                            <td className="pc-pl-0">
                              <a href="new" className="pc-table-text">
                                Sant Outstanding
                              </a>
                              <div>
                                <span className="pc-email-text">
                                  Email:
                                  <span className="pc-text-muteds">
                                    bprow@bnc.cc
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className="pc-text-right">
                              <span className="pc-text-dark">$2,000,000</span>
                              <span className="pc-text-muted">Paid</span>
                            </td>
                            <td className="pc-text-right">
                              <span class="pc-text-muted">ReactJs, HTML</span>
                            </td>
                            <td className="pc-text-right">
                              <span class="pc-notification-label pc-label-blue">
                                Approved
                              </span>
                            </td>
                            <td className="pc-pr-0 pc-text-right">
                              <a href="new" className="pc-symbol-btn">
                                <span class="navi-icon">
                                  {/* <img
                                    class="svg-icon"
                                    src={location}
                                    alt="pic"
                                  />
                                  <i class="fa fa-edit"/> */}
                                </span>
                                <div className="mui-icon"> <i class="fas fa-server"></i></div>
                              </a>
                              <a href="new" className="pc-symbol-btn margin">
                                <span class="navi-icon">
                                 
                                  <div className="mui-icon"> <i class="fas fa-edit"></i></div>
                                 
                                </span>
                              </a>
                              <a href="new" className="pc-symbol-btn">
                               
                                <div className="mui-icon"><i class="fas fa-trash" aria-hidden="true"></i></div>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="pc-table-symbol-img">
                              <div className="pc-table-symbol">
                                <span className="pc-symbol-label">
                                  <img
                                    className="pc-table-img"
                                    src={telegram}
                                    alt="pic"
                                  ></img>
                                </span>
                              </div>
                            </td>
                            <td className="pc-pl-0">
                              <a href="new" className="pc-table-text">
                                Sant Outstanding
                              </a>
                              <div>
                                <span className="pc-email-text">
                                  Email:
                                  <span className="pc-text-muteds">
                                    bprow@bnc.cc
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className="pc-text-right">
                              <span className="pc-text-dark">$2,000,000</span>
                              <span className="pc-text-muted">Paid</span>
                            </td>
                            <td className="pc-text-right">
                              <span class="pc-text-muted">ReactJs, HTML</span>
                            </td>
                            <td className="pc-text-right">
                              <span class="pc-notification-label pc-label-blue">
                                Approved
                              </span>
                            </td>
                            <td className="pc-pr-0 pc-text-right">
                              <a href="new" className="pc-symbol-btn">
                                <span class="navi-icon">
                                  {/* <img
                                    class="svg-icon"
                                    src={location}
                                    alt="pic"
                                  />
                                  <i class="fa fa-edit"/> */}
                                </span>
                                <div className="mui-icon"> <i class="fas fa-server"></i></div>
                              </a>
                              <a href="new" className="pc-symbol-btn margin">
                                <span class="navi-icon">
                                  {/* <img
                                    class="svg-icon"
                                    src={location}
                                    alt="pic"
                                  /> */}
                                  {/* <i class="fa fa-trash"/> */}
                                   <div className="mui-icon"> <i class="fas fa-edit"></i></div>
                                </span>
                              </a>
                              <a href="new" className="pc-symbol-btn">
                                {/* <span class="navi-icon"> */}
                                {/* <img
                                    class="svg-icon"
                                    src={location}
                                    alt="pic"
                                  /> */}
                                {/* <i class="fa fa-edit"/> */}

                                {/* </span> */}
                                <div className="mui-icon"><i class="fas fa-trash" aria-hidden="true"></i></div>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="pc-table-symbol-img">
                              <div className="pc-table-symbol">
                                <span className="pc-symbol-label">
                                  <img
                                    className="pc-table-img"
                                    src={puzzle}
                                    alt="pic"
                                  ></img>
                                </span>
                              </div>
                            </td>
                            <td className="pc-pl-0">
                              <a href="new" className="pc-table-text">
                                Sant Outstanding
                              </a>
                              <div>
                                <span className="pc-email-text">
                                  Email:
                                  <span className="pc-text-muteds">
                                    bprow@bnc.cc
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className="pc-text-right">
                              <span className="pc-text-dark">$2,000,000</span>
                              <span className="pc-text-muted">Paid</span>
                            </td>
                            <td className="pc-text-right">
                              <span class="pc-text-muted">ReactJs, HTML</span>
                            </td>
                            <td className="pc-text-right">
                              <span class="pc-notification-label pc-label-blue">
                                Approved
                              </span>
                            </td>
                            <td className="pc-pr-0 pc-text-right">
                              <a href="new" className="pc-symbol-btn">
                                <span class="navi-icon">
                                  {/* <img
                                    class="svg-icon"
                                    src={location}
                                    alt="pic"
                                  />
                                  <i class="fa fa-edit"/> */}
                                </span>
                                <div className="mui-icon"> <i class="fas fa-server"></i></div>
                              </a>
                              <a href="new" className="pc-symbol-btn margin">
                                <span class="navi-icon">
                                  {/* <img
                                    class="svg-icon"
                                    src={location}
                                    alt="pic"
                                  /> */}
                                  {/* <i class="fa fa-trash"/> */}
                                   <div className="mui-icon"> <i class="fas fa-edit"></i></div>
                                </span>
                              </a>
                              <a href="new" className="pc-symbol-btn">
                                {/* <span class="navi-icon"> */}
                                {/* <img
                                    class="svg-icon"
                                    src={location}
                                    alt="pic"
                                  /> */}
                                {/* <i class="fa fa-edit"/> */}

                                {/* </span> */}
                                <div className="mui-icon"><i class="fas fa-trash" aria-hidden="true"></i></div>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="pc-table-symbol-img">
                              <div className="pc-table-symbol">
                                <span className="pc-symbol-label">
                                  <img
                                    className="pc-table-img"
                                    src={bebo}
                                    alt="pic"
                                  ></img>
                                </span>
                              </div>
                            </td>
                            <td className="pc-pl-0">
                              <a href="new" className="pc-table-text">
                                Sant Outstanding
                              </a>
                              <div>
                                <span className="pc-email-text">
                                  Email:
                                  <span className="pc-text-muteds">
                                    bprow@bnc.cc
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className="pc-text-right">
                              <span className="pc-text-dark">$2,000,000</span>
                              <span className="pc-text-muted">Paid</span>
                            </td>
                            <td className="pc-text-right">
                              <span class="pc-text-muted">ReactJs, HTML</span>
                            </td>
                            <td className="pc-text-right">
                              <span class="pc-notification-label pc-label-blue">
                                Approved
                              </span>
                            </td>
                            <td className="pc-pr-0 pc-text-right">
                              <a href="new" className="pc-symbol-btn">
                                <span class="navi-icon">
                                  {/* <img
                                    class="svg-icon"
                                    src={location}
                                    alt="pic"
                                  />
                                  <i class="fa fa-edit"/> */}
                                </span>
                                <div className="mui-icon"> <i class="fas fa-server"></i></div>
                              </a>
                              <a href="new" className="pc-symbol-btn margin">
                                <span class="navi-icon">
                                  {/* <img
                                    class="svg-icon"
                                    src={location}
                                    alt="pic"
                                  /> */}
                                  {/* <i class="fa fa-trash"/> */}
                                   <div className="mui-icon"> <i class="fas fa-edit"></i></div>
                                </span>
                              </a>
                              <a href="new" className="pc-symbol-btn">
                                {/* <span class="navi-icon"> */}
                                {/* <img
                                    class="svg-icon"
                                    src={location}
                                    alt="pic"
                                  /> */}
                                {/* <i class="fa fa-edit"/> */}

                                {/* </span> */}
                                <div className="mui-icon"><i class="fas fa-trash" aria-hidden="true"></i></div>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="pc-table-symbol-img">
                              <div className="pc-table-symbol">
                                <span className="pc-symbol-label">
                                  <img
                                    className="pc-table-img"
                                    src={kickstarter}
                                    alt="pic"
                                  ></img>
                                </span>
                              </div>
                            </td>
                            <td className="pc-pl-0">
                              <a href="new" className="pc-table-text">
                                Sant Outstanding
                              </a>
                              <div>
                                <span className="pc-email-text">
                                  Email:
                                  <span className="pc-text-muteds">
                                    bprow@bnc.cc
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className="pc-text-right">
                              <span className="pc-text-dark">$2,000,000</span>
                              <span className="pc-text-muted">Paid</span>
                            </td>
                            <td className="pc-text-right">
                              <span class="pc-text-muted">ReactJs, HTML</span>
                            </td>
                            <td className="pc-text-right">
                              <span class="pc-notification-label pc-label-blue">
                                Approved
                              </span>
                            </td>
                            <td className="pc-pr-0 pc-text-right">
                              <a href="new" className="pc-symbol-btn">
                                <span class="navi-icon">
                                  {/* <img
                                    class="svg-icon"
                                    src={location}
                                    alt="pic"
                                  />
                                  <i class="fa fa-edit"/> */}
                                </span>
                                <div className="mui-icon"> <i class="fas fa-server"></i></div>
                              </a>
                              <a href="new" className="pc-symbol-btn margin">
                                <span class="navi-icon">
                                  {/* <img
                                    class="svg-icon"
                                    src={location}
                                    alt="pic"
                                  /> */}
                                  {/* <i class="fa fa-trash"/> */}
                                   <div className="mui-icon"> <i class="fas fa-edit"></i></div>
                                </span>
                              </a>
                              <a href="new" className="pc-symbol-btn">
                                {/* <span class="navi-icon"> */}
                                {/* <img
                                    class="svg-icon"
                                    src={location}
                                    alt="pic"
                                  /> */}
                                {/* <i class="fa fa-edit"/> */}

                                {/* </span> */}
                                <div className="mui-icon"><i class="fas fa-trash" aria-hidden="true"></i></div>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

    </>
)
}