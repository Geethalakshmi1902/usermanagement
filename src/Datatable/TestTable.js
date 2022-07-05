import React, { useEffect, useState } from "react";
import axios from "axios";
import "./table.css";
import { deleteUser, getSingleUser, getUserList } from "../Components/ApiConst";
import LoadingSpinner from "../Components/LoaderSmall";
import { toast } from "react-toastify";
import { DeleteConfirm } from "../Components/CustomAlert";
import blank from "../assets/Images/blank.png";
import Buttons from "../Components/Buttons";
import SelectField from "../Components/inputs/InputFields/SelectField";

export default function TestTable({ firm, URL, columnDefs }) {
  const API_URL = process.env.REACT_APP_API_URL;
  const [refresh, setRefresh] = React.useState(false);
  const [loading, setLoading] = useState(true);
  const [ulists, setUlist] = useState([]);
  const [show, setShow] = useState(false);
  const api = process.env.REACT_APP_API_URL;
  const [uparrow, setUparrow] = useState("ase");
  const [colIndexVal, setColIndexVal] = useState(1);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const [showDeleteConfirmationDialog, setShowDeleteConfirmationDialog] =
    React.useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [pageDotter, setPageDotter] = React.useState(false);
  const [pageLengthValue, setPageLengthValue] = React.useState(10);
  const [startValue, setStartValue] = useState(0);

  const [addedStartValue, setAddedStartValue] = useState();

  const [Page] = React.useState([
    {
      id: 10,
      name: 10,
    },
    {
      id: 25,
      name: 25,
    },
    {
      id: 50,
      name: 50,
    },
    {
      id: 100,
      name: 100,
    },
  ]);
  
  //JSON responce for Datatable

  const Data = [
    {
      title: "Sl No.",
      searchable: false,
      sortable: false,
      data: null,
      responsivePriority: 0,
      responsive: false,
      orderable: false,
      key: "id",
      render: (data, index) => {
        return <div>{index + 1}</div>;
      },
    },
    {
      title: "Image",
      responsivePriority: 1,
      responsive: false,
      orderable: true,
      key: "id",
      render: (data) => {
        return (
          <div style={{ borderRadius: "50%", width: "50px", height: "50px" }}>
            {data.profile_data.length && data.profile_data[0].avatar_url ? (
              <img
                class="w-100"
                alt="Pic"
                src={api + data.profile_data[0]?.avatar_url}
              />
            ) : (
              <img class="w-100" alt="Pic" src={blank} />
            )}
          </div>
        );
      },
    },
    {
      title: "Name",
      responsivePriority: 1,
      responsive: false,
      orderable: true,
      key: "fname",
      render: (data) => {
        return (
          (data?.fname == null || data?.fname === ""
            ? "No userName"
            : capitalizeFirstLetter(data?.fname)) +
          " " +
          (data?.lname == null ? "" : capitalizeFirstLetter(data?.lname))
        );
      },
    },

    {
      title: "DOB",
      responsivePriority: 2,
      responsive: false,
      orderable: false,
      key: "profile_data",
      render: (data) => {
        return data.profile_data.length == false ||
          data?.profile_data[0].date_of_birth == null
          ? "-"
          : data?.profile_data[0].date_of_birth;
      },
    },
    {
      title: "Gender",
      responsivePriority: 3,
      responsive: false,
      orderable: true,
      key: "profile_data",
      render: (data) => {
        return data.profile_data.length == false ||
          data?.profile_data[0].gender == null
          ? "-"
          : (data?.profile_data[0].gender == 0 && "Male") ||
              (data?.profile_data[0].gender == 1 && "Female") ||
              (data?.profile_data[0].gender == 2 && "Other");
      },
      searchable: false,
    },
    {
      title: "Marital Status",
      key: "profile_data",
      responsivePriority: 4,
      responsive: false,
      searchable: false,
      orderable: true,
      render: (data) => {
        return data.profile_data.length == false ||
          data?.profile_data[0].marital_status == null
          ? "-"
          : (data?.profile_data[0].marital_status == 0 && "Married") ||
              (data?.profile_data[0].marital_status == 1 && "Single") ||
              (data?.profile_data[0].marital_status == 2 && "Other");
      },
    },
    {
      title: "Contact",
      responsivePriority: 5,
      responsive: false,
      key: "phonenumber_data",
      render: (data) => {
        return data.phonenumber_data && data.phonenumber_data.length
          ? data.phonenumber_data
              .filter((elm) => elm.type === 1)
              .map((elm) => elm.phone_number)
          : "-";
      },
    },
    {
      title: "Actions",
      orderable: false,
      searchable: false,
      sortable: false,
      orderable: false,
      responsivePriority: 6,
      responsive: false,
      key: null,
      render: (data) => {
        return (
          <td class="text-end">
            <div class="mt-auto mb-3 mx-auto d-flex">
              <button
                onClick={(e) => deleteUserInfo(data.id)}
                class="btn btn-md btn-icon btn-light-danger btn-hover-light btn-pill mx-2"
              >
                <i class="fas fa-trash fa-sm" aria-hidden="true"></i>
              </button>
            </div>
          </td>
        );
      },
    },
  ];
  const [hidden, setHidden] = useState(Data.map((elm) => elm.responsive));
  useEffect(() => {
    window.addEventListener("resize", (event) => {
      let width = document.body.clientWidth;
      let SMALL = 540;
      let MEDIUM = 768;
      let LARGE = 992;
      let EXTRA_LARGE = 1200;

      if (width >= EXTRA_LARGE) {
        setHidden([false, false, false, false, false, false, false, false]);
      } else if (width >= LARGE) {
        setHidden([false, false, false, false, false, false, true, true]);
      } else if (width >= MEDIUM) {
        setHidden([false, false, true, true, true, true, true, true]);
      } else if (width >= SMALL) {
        setHidden([false, false, true, false, true, true, true, true]);
      } else {
        setHidden([false, false, true, true, true, true, true, true]);
      }
    });
  }, []);

  useEffect(() => {
    fetchUserData();
  }, [currentPage, refresh, uparrow, pageLengthValue]);

  const fetchUserData = () => {
    setLoading(true);
    axios({
      method: "get",
      url: `${API_URL}get_user_detail?node_id=1&custom_format=custom_datatables&draw=1&start=${
        startValue * pageLengthValue
      }&length=${pageLengthValue}&${Data.map(
        (n, index) =>
          `columns[${index}][data]=${
            n.key
          }&columns[${index}][searchable]=${true}&columns[${index}][orderable]=${
            n.orderable ?? false
          }&columns[${index}][search][regex]=${false}`
      ).join("&")}&columnsDef[]=${Data.map(
        (elm) => elm.key
      )}&order[0][column]=${colIndexVal}&order[0][dir]=${uparrow}`,
    })
      .then((res) => {
        setUlist(res.data.data);
        setCount(res.data.recordsTotal);
        setLoading(false);

        if (
          Math.ceil(res.data.recordsTotal / pageLengthValue - currentPage) >
          pageLengthValue
        ) {
          setPageCount(currentPage + (pageLengthValue - 1));
          setPageDotter(true);
        } else {
          setPageDotter(false);
          setPageCount(Math.ceil(res.data.recordsTotal / pageLengthValue));
        }
        if (
          Math.ceil(res.data.recordsTotal / pageLengthValue) === currentPage
        ) {
          setPageDotter(false);
        }
      })
      .catch((e) => {});
    setRefresh(false);
  };

  const getPaginationGroup = () => {
    let start = Math?.floor((currentPage - 1) / pageCount) * pageCount;
    return new Array(pageCount)?.fill()?.map((_, idx) => start + idx + 1);
  };

  const deleteUserInfo = (id) => {
    DeleteConfirm({
      message: "Do you want to delete?",
      onYes: () => {
        setLoading(true);

        deleteUser(id)
          .then((resp) => {
            if (resp.status === 200) {
              setShowDeleteConfirmationDialog(false);
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
            fetchUserData();
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

  const getTableCellData = (rowData, column, index) => {
    if (column.hasOwnProperty("render")) {
      return column.render(rowData, index);
    } else if (rowData.hasOwnProperty(column.title)) {
      return rowData[column.title];
    }
    return "";
  };

  return (
    <>
      <div className={`${loading ? "d-none" : "card"}`}>
        <div className="card-header border-0 pt-6">
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
          <div>
            <SelectField
              type="text"
              name="Page"
              list={Page}
              value={pageLengthValue}
              onChange={(e) => setPageLengthValue(e.target.value)}
            />
          </div>
        </div>
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
                    {Data.map(
                      (elm, index) =>
                        !hidden[index] && (
                          <th
                            onClick={() => {
                              setColIndexVal(index);
                            }}
                            data-index={index}
                            className="min-w-125px sorting header"
                            // class={` ${!hidden[index] ? "min-w-125px sorting header" : "displaynone"}`}
                            tabIndex={index}
                          >
                            {elm.title}
                            <span className="sorting-icon">
                              <i
                                onClick={(e) => {
                                  setUparrow("asc");
                                }}
                                class="position-abs fa fa-sort-asc text-muted sort-icon"
                                aria-hidden="true"
                              ></i>

                              <i
                                onClick={(e) => {
                                  setUparrow("desc");
                                }}
                                class="fa fa-sort-desc text-muted sort-icon"
                                aria-hidden="true"
                              ></i>
                            </span>
                          </th>
                        )
                    )}
                  </tr>
                </thead>

                <tbody id="data" class="text-gray-600 fw-bold">
                  {ulists?.map((user, i) => {
                    return (
                      <>
                        <tr class="odd">
                          {Data.map((data, index) => {
                            return (
                              <>
                                <td
                                  tabIndex={index}
                                  class={` ${
                                    !hidden[index] ? "" : "displaynone"
                                  }`}
                                >
                                  <div class="d-flex flex-column">
                                    <span>
                                      {getTableCellData(user, data, i)}
                                    </span>
                                  </div>
                                </td>
                              </>
                            );
                          })}
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className={`pc-page-card ${loading ? "d-none" : ""}`}>
              <div className="pc-page-card-body">
                <div className="pc-page-card-flex">
                  <div className="pc-pagination-part">
                    <Buttons
                      icon="fas fa-angle-left"
                      className="pc-arrow-btn pc-btn-flex"
                      onClick={() => {
                        setCurrentPage(currentPage - 1);
                      }}
                      isDisabled={currentPage === 1 ? 1 : 0}
                    />
                    {getPaginationGroup().map((item, index) => (
                      <Buttons
                        key={index}
                        onClick={() => {
                          setCurrentPage(item);
                          setStartValue(index);
                        }}
                        className={`number-btn pc-btn-flex ${
                          item === currentPage ? "active" : ""
                        }`}
                        label={item}
                      />
                    ))}
                    <Buttons
                      className={`number-btn pc-btn-flex ${
                        pageDotter ? "" : "d-none"
                      }`}
                      label="..."
                      isDisabled={`${pageDotter ? 1 : 0}`}
                    />
                    <Buttons
                      icon="fas fa-angle-right"
                      className="pc-arrow-btn pc-btn-flex"
                      onClick={() => {
                        setCurrentPage(currentPage + 1);
                      }}
                      isDisabled={currentPage === pageCount ? 1 : 0}
                    />
                  </div>
                  <div className="pc-record-part">
                    <span className="pc-text-muted">
                      Displaying 5 of {count} records
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {loading && <LoadingSpinner />}
    </>
  );
}
