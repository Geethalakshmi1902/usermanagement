import React, { useEffect, useState } from "react";
import axios from "axios";
import "./table.css";
import { deleteUser, getSingleUser, getUserList } from "../Components/ApiConst";
import { ArrowBack, Flag } from "@mui/icons-material";
import LoaderSmall from "../Components/LoaderSmall";
import LoadingSpinner from "../Components/LoaderSmall";
import { toast } from "react-toastify";
import { DeleteConfirm } from "../Components/CustomAlert";

export default function Table({ firm, URL, columnDefs }) {
  const API_URL = process.env.REACT_APP_API_URL;
  const [refresh, setRefresh] = React.useState(false);
  const [loading, setLoading] = useState(true);
  const [ulists, setUlist] = useState([]);
  console.log(ulists);
  const [show, setShow] = useState(false);
  const [showUpArrow, setShowUpArrow] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const api = process.env.REACT_APP_API_URL;
  const [uparrow, setUparrow] = useState("asc");
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const [showDeleteConfirmationDialog, setShowDeleteConfirmationDialog] =
    React.useState(false);

  const [showChild, setShowChild] = useState(false);
  const [hidden, setHidden] = useState([false, false, false, false, false]);

  const Data = [
    {
      title: "Sl No.",
      searchable: false,
      sortable: false,
      data: null,
      responsivePriority: 0,
    },
    {
      title: "fname",
      responsivePriority: 1,
      data: ulists.map((elm) => elm.fname),
      defaultContent: "<i>-</i>",
    },

    {
      title: "DOB",
      responsivePriority: 2,
      data: ulists.map((user) => {
        return user.profile_data.length == false ||
          user?.profile_data[0].gender == null
          ? "-"
          : (user?.profile_data[0].gender == 0 && "Male") ||
              (user?.profile_data[0].gender == 1 && "Female") ||
              (user?.profile_data[0].gender == 2 && "Other");
      }),
      defaultContent: "<i>-</i>",
    },

    {
      title: "Gender",
      responsivePriority: 3,
      data: ulists.map((user) => {
        return user.profile_data.length == false ||
          user?.profile_data[0].gender == null
          ? "-"
          : (user?.profile_data[0].gender == 0 && "Male") ||
              (user?.profile_data[0].gender == 1 && "Female") ||
              (user?.profile_data[0].gender == 2 && "Other");
      }),
      searchable: false,
      defaultContent: "<i>-</i>",
    },
    {
      title: "MaritalStatus",
      responsivePriority: 4,
      data: ulists.map((user) => {
        return user.profile_data.length == false ||
          user?.profile_data[0].gender == null
          ? "-"
          : (user?.profile_data[0].gender == 0 && "Male") ||
              (user?.profile_data[0].gender == 1 && "Female") ||
              (user?.profile_data[0].gender == 2 && "Other");
      }),
      searchable: false,
      defaultContent: "<i>-</i>",
    },
    {
      title: "Contact",
      responsivePriority: 5,
      data: ulists.map((user) => {
        return user.profile_data.length == false ||
          user?.profile_data[0].gender == null
          ? "-"
          : (user?.profile_data[0].gender == 0 && "Male") ||
              (user?.profile_data[0].gender == 1 && "Female") ||
              (user?.profile_data[0].gender == 2 && "Other");
      }),
      defaultContent: "<i>-</i>",
    },
    {
      title: "Actions",
      orderable: false,
      searchable: false,
      sortable: false,
      responsivePriority: 6,
      data: "id",
    },
  ];

  useEffect(() => {
    var table = document.getElementById("data");

    // console.log(table);
    // table.rows[0].cells.map((cell, i) => {
    //   if (table_col_len > 4) {
    //     console.log(table.rows[0]);
    //   }
    // });

    window.addEventListener("resize", (event) => {
      let width = document.body.clientWidth;
      let SMALL = 540;
      let MEDIUM = 768;
      let LARGE = 992;
      let EXTRA_LARGE = 1200;

      if (width >= EXTRA_LARGE) {
        setHidden([false, false, false, false, false, false, false]);
      } else if (width >= LARGE) {
        setHidden([false, false, false, false, false, true, true]);
      } else if (width >= MEDIUM) {
        setHidden([false, false, false, false, true, true, true]);
      } else if (width >= SMALL) {
        setHidden([false, false, false, true, true, true, true]);
      } else {
        setHidden([false, false, true, true, true, true, true]);
      }
    });
  }, []);

  useEffect(
    (params) => {
      // const value = Data.map((n, index) => console.log(n.title));
      setLoading(true);
      axios({
        method: "get",

        url: `${API_URL}get_user_detail?node_id=1&custom_format=custom_datatables&draw=1&start=0&length=10
      &${Data.map(
        (n, index) =>
          `columns[${index}][data] =${n.data == null ? "" : n.data}
          &columns[${index}][name] =${""}
          &columns[${index}][searchable] =${
            n?.hasOwnProperty("searchable") ? n.searchable : ""
          }
          &columns[${index}][orderable] =${n.sortable ?? ""}
          &columns[${index}][search][value] =${""}
          &columns[${index}][search][regex] =${""}`
      ).join("&")} 
        `,
      })
        .then((res) => {
          setUlist(res.data.data);
          setLoading(false);
          // params.api.applyTransaction({ add: res.data.data });
          var data = res.data.data;
        })
        .catch((e) => {});
      setRefresh(false);
    },
    [refresh, uparrow]
  );
  const deleteUserInfo = (id) => {
    DeleteConfirm({
      message: "Do you want to delete?",
      onYes: () => {
        setLoading(true);

        deleteUser(id)
          .then((resp) => {
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

  return (
    <>
      <div className={`${loading ? "d-none" : "card"}`}>
        <div className="card-header border-0 pt-6"></div>
        <div className="card-body py-4">
          <div
            id="kt_table_users_wrapper"
            class="dataTables_wrapper dt-bootstrap4 no-footer"
          >
            <div class="table-responsive">
              <table
                id="table"
                class="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer"
              >
                <thead id="tab-head">
                  <tr class="text-start fw-bolder fs-7 text-uppercase gs-0 ">
                    {Data.map((elm, index) => (
                      <th
                        data-index={index}
                        class={`min-w-125px sorting header ${
                          !hidden[index] ? "" : "displaynone"
                        }`}
                        // class = "min-w-125px sorting header"
                        tabIndex={index}
                      >
                        {elm.title}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody id="data" class="text-gray-600 fw-bold">
                  {ulists?.map((user, i) => (
                    <>
                      <tr class="odd">
                        <td tabIndex={i}>
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

                        <td class="d-flex align-items-center" tabIndex={i}>
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
                              : (user?.profile_data[0].gender == 0 && "Male") ||
                                (user?.profile_data[0].gender == 1 &&
                                  "Female") ||
                                (user?.profile_data[0].gender == 2 && "Other")}
                          </div>
                        </td>

                        <td>
                          {user.profile_data.length == false ||
                          user?.profile_data[0].marital_status == null
                            ? "-"
                            : (user?.profile_data[0].marital_status == 0 &&
                                "Married") ||
                              (user?.profile_data[0].marital_status == 1 &&
                                "Single") ||
                              (user?.profile_data[0].marital_status == 2 &&
                                "Other")}
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
                            <button
                              onClick={(e) => deleteUserInfo(user.id)}
                              class="btn btn-md btn-icon btn-light-danger btn-hover-light btn-pill mx-2"
                            >
                              <i
                                class="fas fa-trash fa-sm"
                                aria-hidden="true"
                              ></i>
                            </button>
                          </div>
                        </td>
                      </tr>

                      <div>
                        {showChild ? (
                          <>
                            <tr class="child">
                              <td class="child">
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
                                    <span class="dtr-title">
                                      {" "}
                                      marital Status
                                    </span>{" "}
                                    <span class="dtr-data">
                                      {user.profile_data.length == false ||
                                      user?.profile_data[0].marital_status ==
                                        null
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
                                        {/* <button class="btn btn-md btn-icon btn-light-primary btn-hover-light btn-pill mx-2">
                                          <i
                                            class="fas fa-edit fa-sm"
                                            aria-hidden="true"
                                          ></i>
                                        </button> */}
                                        <button
                                          onClick={(e) =>
                                            deleteUserInfo(user.id)
                                          }
                                          class="btn btn-md btn-icon btn-light-danger btn-hover-light btn-pill mx-2"
                                        >
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
                      </div>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {loading && <LoadingSpinner />}
    </>
  );
}
