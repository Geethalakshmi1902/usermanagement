import React, { useEffect, useState } from "react";
import axios from "axios";
import "./table.css";
import { ArrowBack } from "@mui/icons-material";
export default function Datatablelist() {
  // const { user, userDelete, userEdit,filteredContacts } = props;
  // console.log(props);
  // const Navigate = useNavigate();
  const [refresh, setRefresh] = React.useState(false);
  const [loading, setLoading] = useState(true);
  const [ulists, setUlist] = useState([]);
  const [show, setShow] = useState(false);
  const [showUpArrow, setShowUpArrow] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const api = process.env.REACT_APP_API_URL;
  const [uparrow, setUparrow] = useState("asc");
  console.log(uparrow)
  // const imgText = (user.fname.charAt(0) + user.lname.charAt(0)).toUpperCase();
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const [showChild, setShowChild] = useState(false);

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
    axios({
      method: "get",

      url: "http://77.68.116.225:8488/get_user_detail?node_id=1",
      params: {
        custom_format: "custom_datatables",
        draw: 1,
        start: 0,
        length: 10,
        "columns[0][data]": "firm",
        "columns[0][searchable]": true,
        "columns[0][orderable]": false,
        "columns[0][search][regex]": false,
        "columns[1][data]": "fname",
        "columns[1][searchable]": true,
        "columns[1][orderable]": true,
        "columns[1][search][regex]": false,
        "columns[2][data]": "lname",
        "columns[2][searchable]": true,
        "columns[2][orderable]": false,
        "columns[2][search][regex]": false,
        "columns[3][data]": "email_data",
        "columns[3][searchable]": true,
        "columns[3][orderable]": false,
        "columns[3][search][regex]": false,
        "columns[4][data]": "phonenumber_data",
        "columns[4][searchable]": true,
        "columns[4][orderable]": false,
        "columns[4][search][regex]": false,
        "columns[5][data]": "profile_data",
        "columns[5][searchable]": true,
        "columns[5][orderable]": false,
        "columns[5][search][regex]": false,
        "order[0][column]": 1,
        "order[0][dir]": uparrow,
        "columnsDef[]":
          "firm,fname,lname,email_data,phonenumber_data,profile_data",
      },

      responseType: "json",
    })
      .then((res) => {
        setUlist(res.data.data);
        var data = res.data.data;
      })
      .catch((e) => {
        // console.error(e);
      });
    setRefresh(false);
  }, [refresh, uparrow]);

 

  return (
    <>
      <div className="card">
        <div className="card-header border-0 pt-6">
          {/* <div className=""></div> */}
          <div className="card-title">
            <div class="d-flex align-items-center position-relative my-1">
              <span class="svg-icon svg-icon-1 position-absolute ms-6"></span>
              <input
                type="text"
                data-kt-user-table-filter="search"
                class="form-control form-control-solid w-250px ps-14"
                placeholder="Search user"
              />
            </div>
          </div>
          <div className="card-toolbar">
            <div
              class="d-flex justify-content-end"
              data-kt-user-table-toolbar="base"
            >
              <button
                type="button"
                class="btn btn-light-primary me-3"
                data-kt-menu-trigger="click"
                data-kt-menu-placement="bottom-end"
                onClick={handleShow}
              >
                <span class="svg-icon svg-icon-2"></span>
                Filter
              </button>

              <div
                class={`menu menu-sub menu-sub-dropdown w-300px w-md-325px ${
                  show ? "show" : ""
                }`}
                id="kt_chat_modal"
                role="dialog"
                data-backdrop="false"
                aria-modal={show}
                data-kt-menu="true"
                style={{
                  display: show ? "block" : "none",
                  zIndex: "105",
                  position: "fixed",
                  inset: "0px 0px auto auto",
                  margin: "0px",
                  transform: "translate3d(-465px, 222px, 0px)",
                }}
              >
                <div class="px-7 py-5">
                  <div class="fs-5 text-dark fw-bolder">Filter Options</div>
                </div>

                <div class="separator border-gray-200"></div>

                <div class="px-7 py-5" data-kt-user-table-filter="form">
                  <div class="mb-10">
                    <label class="form-label fs-6 fw-bold">Role:</label>
                    <select
                      class="form-select form-select-solid fw-bolder select2-hidden-accessible"
                      data-kt-select2="true"
                      data-placeholder="Select option"
                      data-allow-clear="true"
                      data-kt-user-table-filter="role"
                      data-hide-search="true"
                      data-select2-id="select2-data-10-lkri"
                      tabIndex="-1"
                      aria-hidden="true"
                    >
                      <option data-select2-id="select2-data-12-6sst"></option>
                      <option value="Administrator">Administrator</option>
                      <option value="Analyst">Analyst</option>
                      <option value="Developer">Developer</option>
                      <option value="Support">Support</option>
                      <option value="Trial">Trial</option>
                    </select>
                    <span
                      class="select2 select2-container select2-container--bootstrap5"
                      dir="ltr"
                      data-select2-id="select2-data-11-fcol"
                      //   style="width: 100%;"
                    >
                      <span class="selection">
                        <span
                          class="select2-selection select2-selection--single form-select form-select-solid fw-bolder"
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabIndex="0"
                          aria-disabled="false"
                          aria-labelledby="select2-fbvz-container"
                          aria-controls="select2-fbvz-container"
                        >
                          <span
                            class="select2-selection__rendered"
                            id="select2-fbvz-container"
                            role="textbox"
                            aria-readonly="true"
                            title="Select option"
                          >
                            <span class="select2-selection__placeholder">
                              Select option
                            </span>
                          </span>
                          <span
                            class="select2-selection__arrow"
                            role="presentation"
                          >
                            <b role="presentation"></b>
                          </span>
                        </span>
                      </span>
                      <span class="dropdown-wrapper" aria-hidden="true"></span>
                    </span>
                  </div>

                  <div class="mb-10">
                    <label class="form-label fs-6 fw-bold">
                      Two Step Verification:
                    </label>
                    <select
                      class="form-select form-select-solid fw-bolder select2-hidden-accessible"
                      data-kt-select2="true"
                      data-placeholder="Select option"
                      data-allow-clear="true"
                      data-kt-user-table-filter="two-step"
                      data-hide-search="true"
                      data-select2-id="select2-data-13-lo64"
                      tabIndex="-1"
                      aria-hidden="true"
                    >
                      <option data-select2-id="select2-data-15-iow6"></option>
                      <option value="Enabled">Enabled</option>
                    </select>
                    <span
                      class="select2 select2-container select2-container--bootstrap5"
                      dir="ltr"
                      data-select2-id="select2-data-14-9eki"
                      //   style="width: 100%;"
                    >
                      <span class="selection">
                        <span
                          class="select2-selection select2-selection--single form-select form-select-solid fw-bolder"
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabIndex="0"
                          aria-disabled="false"
                          aria-labelledby="select2-o9o3-container"
                          aria-controls="select2-o9o3-container"
                        >
                          <span
                            class="select2-selection__rendered"
                            id="select2-o9o3-container"
                            role="textbox"
                            aria-readonly="true"
                            title="Select option"
                          >
                            <span class="select2-selection__placeholder">
                              Select option
                            </span>
                          </span>
                          <span
                            class="select2-selection__arrow"
                            role="presentation"
                          >
                            <b role="presentation"></b>
                          </span>
                        </span>
                      </span>
                      <span class="dropdown-wrapper" aria-hidden="true"></span>
                    </span>
                  </div>

                  <div class="d-flex justify-content-end">
                    <button
                      type="reset"
                      class="btn btn-light btn-active-light-primary fw-bold me-2 px-6"
                      data-kt-menu-dismiss="true"
                      data-kt-user-table-filter="reset"
                    >
                      Reset
                    </button>
                    <button
                      type="submit"
                      class="btn btn-primary fw-bold px-6"
                      data-kt-menu-dismiss="true"
                      data-kt-user-table-filter="filter"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>

              <button
                type="button"
                class="btn btn-light-primary me-3"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_export_users"
              >
                <span class="svg-icon svg-icon-2"></span>
                Export
              </button>

              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_add_user"
              >
                <span class="svg-icon svg-icon-2"></span>
                Add User
              </button>
            </div>
          </div>
        </div>
        <div className="card-body py-4">
          <div
            id="kt_table_users_wrapper"
            class="dataTables_wrapper dt-bootstrap4 no-footer"
          >
            <div class="table-responsive">
              <table
                // onClick={(e) => console.log(e.target)}
                class="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer"
                id="kt_table_users"
              >
                <thead>
                  <tr class="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                    <th
                      class="w-10px pe-2 sorting_disabled"
                      rowSpan="1"
                      colSpan="1"
                      aria-label=""
                    >
                      <div class="form-check form-check-sm form-check-custom form-check-solid me-3">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          data-kt-check="true"
                          data-kt-check-target="#kt_table_users .form-check-input"
                          value="1"
                        />
                      </div>
                    </th>
                    <th
                      class="min-w-125px sorting"
                      tabIndex="0"
                      aria-controls="kt_table_users"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="User: activate to sort column ascending"
                      //   style="width: 287.244px;"
                    >
                      User
                      <span className="sorting-icon">
                        <i
                          onClick={(e) => {
                            setUparrow("asc");
                          }}
                          class="position-abs fa fa-sort-asc text-muted"
                          aria-hidden="true"
                        ></i>

                        <i
                          onClick={(e) => {
                            setUparrow("dsc");
                          }}
                          class="fa fa-sort-desc text-muted"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </th>
                    <th
                      class="min-w-125px sorting"
                      tabIndex="0"
                      aria-controls="kt_table_users"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Role: activate to sort column ascending"
                      //   style="width: 159.787px;"
                    >
                      DOB
                      <span className="sorting-icon">
                        <i
                          onClick={(e) => {
                            setUparrow("asc");
                          }}
                          class="position-abs fa fa-sort-asc text-muted"
                          aria-hidden="true"
                        ></i>

                        <i
                          onClick={(e) => {
                            setUparrow("dsc");
                          }}
                          class="fa fa-sort-desc text-muted"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </th>
                    <th
                      class="min-w-125px sorting"
                      tabIndex="0"
                      aria-controls="kt_table_users"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Last login: activate to sort column ascending"
                      //   style="width: 159.787px;"
                    >
                      Gender
                      <span className="sorting-icon">
                        <i
                          onClick={(e) => {
                            setUparrow("asc");
                          }}
                          class="position-abs fa fa-sort-asc text-muted"
                          aria-hidden="true"
                        ></i>

                        <i
                          onClick={(e) => {
                            setUparrow("dsc");
                          }}
                          class="fa fa-sort-desc text-muted"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </th>
                    <th
                      class="min-w-125px sorting"
                      tabIndex="0"
                      aria-controls="kt_table_users"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Two-step: activate to sort column ascending"
                      //   style="width: 159.787px;"
                    >
                      marital Status
                      <span className="sorting-icon">
                        <i
                          onClick={(e) => {
                            setUparrow("asc");
                          }}
                          class="position-abs fa fa-sort-asc text-muted"
                          aria-hidden="true"
                        ></i>

                        <i
                          onClick={(e) => {
                            setUparrow("dsc");
                          }}
                          class="fa fa-sort-desc text-muted"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </th>
                    <th
                      class="min-w-125px sorting"
                      tabIndex="0"
                      aria-controls="kt_table_users"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Joined Date: activate to sort column ascending"
                      //   style="width: 212.358px;"
                    >
                      Contact
                      <span className="sorting-icon">
                        <i
                          onClick={(e) => {
                            setUparrow("asc");
                          }}
                          class="position-abs fa fa-sort-asc text-muted"
                          aria-hidden="true"
                        ></i>

                        <i
                          onClick={(e) => {
                            setUparrow("dsc");
                          }}
                          class="fa fa-sort-desc text-muted"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </th>
                    <th
                      class="text-end min-w-100px sorting_disabled"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Actions"
                      //   style="width: 128.352px;"
                      style={{ width: "128.352px" }}
                    >
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody id="data" class="text-gray-600 fw-bold">
                  {ulists?.map((user, i) => (
                    <tr class="odd">
                      <td>
                        <div class="form-check form-check-sm form-check-custom form-check-solid">
                          {showDownArrow ? (
                            <span className="responsive">
                              <i
                                onClick={() => {
                                  setShowDownArrow(false);
                                  setShowChild(false);
                                }}
                                class=" me-3 fa fa-angle-down"
                                aria-hidden="true"
                              ></i>
                            </span>
                          ) : (
                            <span className="responsive">
                              <i
                                onClick={() => {
                                  setShowDownArrow(true);
                                  setShowChild(true);
                                }}
                                class="me-3 fa fa-angle-up"
                                aria-hidden="true"
                              ></i>
                            </span>
                          )}

                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="1"
                          />
                        </div>
                      </td>

                      <td class="d-flex align-items-center">
                        <div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
                          <a href="/metronic8/demo1/../demo1/apps/user-management/users/view.html">
                            <div class="symbol-label">
                              {user.profile_data.length &&
                              user.profile_data[0].avatar_url ? (
                                <img
                                  class="w-100"
                                  alt="Pic"
                                  src={api + user.profile_data[0]?.avatar_url}
                                />
                              ) : (
                                <span>{"MP"}</span>
                              )}
                              
                            </div>
                          </a>
                        </div>

                        <div class="d-flex flex-column">
                          <a
                            href={"/ProfileAllList/overview/" + user.id}
                            class="text-gray-800 text-hover-primary mb-1"
                          >
                            {user?.fname == null
                              ? "No userName"
                              : capitalizeFirstLetter(user?.fname)}{" "}
                            {user?.lname == null
                              ? "No userName"
                              : capitalizeFirstLetter(user?.lname)}
                          </a>
                          <span>
                            {" "}
                            {user.email_data && user.email_data.length
                              ? user.email_data
                                  .filter((elm) => elm.type === 1)
                                  .map((elm) => elm.email)
                              : "-"}
                          </span>
                        </div>
                      </td>
                     
                      <td>
                        {user.profile_data.length == false ||
                        user?.profile_data[0].date_of_birth == null
                          ? "-"
                          : user?.profile_data[0].date_of_birth}
                      </td>

                      <td data-order="2022-06-20T12:03:00+05:30">
                        <div class="badge badge-light fw-bolder">
                          {user.profile_data.length == false ||
                          user?.profile_data[0].gender == null
                            ? "-"
                            : user?.profile_data[0].gender}
                        </div>
                      </td>

                      <td>
                        {user.profile_data.length == false ||
                        user?.profile_data[0].marital_status == null
                          ? "-"
                          : user?.profile_data[0].marital_status}
                      </td>

                      <td data-order="2022-10-25T06:43:00+05:30">
                        {user.phonenumber_data && user.phonenumber_data.length
                          ? user.phonenumber_data
                              .filter((elm) => elm.type === 1)
                              .map((elm) => elm.phone_number)
                          : "-"}
                      </td>

                      <td class="text-end">
                        <div class="mt-auto mb-3 mx-auto d-flex">
                          <button class="btn btn-md btn-icon btn-light-primary btn-hover-light btn-pill mx-2">
                            <i class="fas fa-edit fa-sm" aria-hidden="true"></i>
                          </button>
                          <button class="btn btn-md btn-icon btn-light-danger btn-hover-light btn-pill mx-2">
                            <i
                              class="fas fa-trash fa-sm"
                              aria-hidden="true"
                            ></i>
                          </button>
                        </div>
                      </td>
                      {showChild ? (
                        <>
                          <tr class="child">
                            <td class="child" colSpan="3">
                              <ul data-dtr-index="7" class="dtr-details">
                                <li
                                  data-dtr-index="3"
                                  data-dt-row="7"
                                  data-dt-column="3"
                                >
                                  <span class="dtr-title">Gender</span>{" "}
                                  <span class="dtr-data">
                                    {" "}
                                    {user.profile_data.length == false ||
                                    user?.profile_data[0].gender == null
                                      ? "-"
                                      : user?.profile_data[0].gender}
                                  </span>
                                </li>
                                <li
                                  data-dtr-index="4"
                                  data-dt-row="7"
                                  data-dt-column="4"
                                >
                                  <span class="dtr-title"> marital Status</span>{" "}
                                  <span class="dtr-data">
                                    {user.profile_data.length == false ||
                                    user?.profile_data[0].marital_status == null
                                      ? "-"
                                      : user?.profile_data[0].marital_status}
                                  </span>
                                </li>
                                <li
                                  data-dtr-index="5"
                                  data-dt-row="7"
                                  data-dt-column="5"
                                >
                                  <span class="dtr-title">Contact</span>{" "}
                                  <span class="dtr-data">
                                    {" "}
                                    {user.phonenumber_data &&
                                    user.phonenumber_data.length
                                      ? user.phonenumber_data
                                          .filter((elm) => elm.type === 1)
                                          .map((elm) => elm.phone_number)
                                      : "-"}
                                  </span>
                                </li>
                                {showChild ? (
                        <>
                          <tr class="child">
                            <td class="child" colSpan="3">
                              <ul data-dtr-index="7" class="dtr-details">
                                <li
                                  data-dtr-index="3"
                                  data-dt-row="7"
                                  data-dt-column="3"
                                >
                                  <span class="dtr-title">Gender</span>{" "}
                                  <span class="dtr-data">
                                    {" "}
                                    {user.profile_data.length == false ||
                                    user?.profile_data[0].gender == null
                                      ? "-"
                                      : user?.profile_data[0].gender}
                                  </span>
                                </li>
                                <li
                                  data-dtr-index="4"
                                  data-dt-row="7"
                                  data-dt-column="4"
                                >
                                  <span class="dtr-title"> marital Status</span>{" "}
                                  <span class="dtr-data">
                                    {user.profile_data.length == false ||
                                    user?.profile_data[0].marital_status == null
                                      ? "-"
                                      : user?.profile_data[0].marital_status}
                                  </span>
                                </li>
                                <li
                                  data-dtr-index="5"
                                  data-dt-row="7"
                                  data-dt-column="5"
                                >
                                  <span class="dtr-title">Contact</span>{" "}
                                  <span class="dtr-data">
                                    {" "}
                                    {user.phonenumber_data &&
                                    user.phonenumber_data.length
                                      ? user.phonenumber_data
                                          .filter((elm) => elm.type === 1)
                                          .map((elm) => elm.phone_number)
                                      : "-"}
                                  </span>
                                </li>
                                <li
                                  data-dtr-index="5"
                                  data-dt-row="7"
                                  data-dt-column="5"
                                >
                                  <span class="dtr-title">Action</span>{" "}
                                  <span class="dtr-data">
                                    {" "}
                                    <div class="mt-auto mb-3 mx-auto d-flex">
                                      <button class="btn btn-md btn-icon btn-light-primary btn-hover-light btn-pill mx-2">
                                        <i
                                          class="fas fa-edit fa-sm"
                                          aria-hidden="true"
                                        ></i>
                                      </button>
                                      <button class="btn btn-md btn-icon btn-light-danger btn-hover-light btn-pill mx-2">
                                        <i
                                          class="fas fa-trash fa-sm"
                                          aria-hidden="true"
                                        ></i>
                                      </button>
                                    </div>
                                  </span>
                                </li>
                              </ul>
                            </td>
                          </tr>
                        </>
                      ) : null}                <li
                                  data-dtr-index="5"
                                  data-dt-row="7"
                                  data-dt-column="5"
                                >
                                  <span class="dtr-title">Action</span>{" "}
                                  <span class="dtr-data">
                                    {" "}
                                    <div class="mt-auto mb-3 mx-auto d-flex">
                                      <button class="btn btn-md btn-icon btn-light-primary btn-hover-light btn-pill mx-2">
                                        <i
                                          class="fas fa-edit fa-sm"
                                          aria-hidden="true"
                                        ></i>
                                      </button>
                                      <button class="btn btn-md btn-icon btn-light-danger btn-hover-light btn-pill mx-2">
                                        <i
                                          class="fas fa-trash fa-sm"
                                          aria-hidden="true"
                                        ></i>
                                      </button>
                                    </div>
                                  </span>
                                </li>
                              </ul>
                            </td>
                          </tr>
                        </>
                      ) : null}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div class="row">
              <div class="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start"></div>
              <div class="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
                <div
                  class="dataTables_paginate paging_simple_numbers"
                  id="kt_table_users_paginate"
                >
                  <ul class="pagination">
                    <li
                      class="paginate_button page-item previous disabled"
                      id="kt_table_users_previous"
                    >
                      <a
                        href="#"
                        aria-controls="kt_table_users"
                        data-dt-idx="0"
                        tabIndex="0"
                        class="page-link"
                      >
                        <i class="previous"></i>
                      </a>
                    </li>
                    <li class="paginate_button page-item active">
                      <a
                        href="#"
                        aria-controls="kt_table_users"
                        data-dt-idx="1"
                        tabIndex="0"
                        class="page-link"
                      >
                        1
                      </a>
                    </li>
                    <li class="paginate_button page-item ">
                      <a
                        href="#"
                        aria-controls="kt_table_users"
                        data-dt-idx="2"
                        tabIndex="0"
                        class="page-link"
                      >
                        2
                      </a>
                    </li>
                    <li class="paginate_button page-item ">
                      <a
                        href="#"
                        aria-controls="kt_table_users"
                        data-dt-idx="3"
                        tabIndex="0"
                        class="page-link"
                      >
                        3
                      </a>
                    </li>
                    <li
                      class="paginate_button page-item next"
                      id="kt_table_users_next"
                    >
                      <a
                        href="#"
                        aria-controls="kt_table_users"
                        data-dt-idx="4"
                        tabIndex="0"
                        class="page-link"
                      >
                        <i class="next"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
