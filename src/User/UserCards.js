import React, { useEffect, useRef, useState, useMemo } from "react";
import { Route, Routes } from "react-router";
import Buttons from "../Components/Buttons";
import {
  deleteUser,
  getSingleUser,
  getUserList,
  ACCEPTED,
} from "../Components/ApiConst";
import UserListCard from "./UserListCard";
import axios from "axios";
import { useNavigate } from "react-router";
import Loading from "../Components/inputs/Loading";
import { toast } from "react-toastify";
import { DialogBox } from "../Components/inputs/DialogBox";
import InputField from "../Components/inputs/InputFields/InputField";
import MessageCard from "./Card/MessageCard";
import SocialCard from "./Card/SocialCard";
import Datatablelist from "../Datatable/Datatablelist";
import ListCard from "./ListCard";
import LoadingSpinner from "../Components/LoaderSmall";
import CheckTable from "../Datatable/CheckTable";
import { DeleteConfirm } from "../Components/CustomAlert";
// import LoadingSpinner from "../Components/LoaderSmall";
import { useLocation } from "react-router-dom";
import ListCardGlass from "./ListCardGlass";

export function UserCards({ firm }) {
  const Navigate = useNavigate();
  const [refresh, setRefresh] = React.useState(false);
  const [loading, setLoading] = useState(true);
  const [ulists, setUlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [addOpen, setAddOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [singleUser, setSingleUser] = useState([]);
  const [pageDotter, setPageDotter] = React.useState(false);
  const [list, setList] = useState([]);
  const initialRender = useRef(true);
  const [showDeleteConfirmationDialog, setShowDeleteConfirmationDialog] =
    React.useState(false);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      setEditOpen(true);
    }
  }, [singleUser]);

  const location = useLocation();
  let URL_PATH = location.pathname


const pathName = URL_PATH === "/UserCards/data-table/";

  useEffect(() => {
    setLoading(true);
    axios
      .get("get_user_detail?node_id=1&page=" + currentPage)
      .then((res) => {
        setUlist(res.data.results);
        setCount(res.data.count);
        setLoading(false);
        if (Math.ceil(res.data.count / 10 - currentPage) > 10) {
          setPageCount(currentPage + 9);
          setPageDotter(true);
        } else {
          setPageDotter(false);
          setPageCount(Math.ceil(res.data.count / 10));
        }
        if (Math.ceil(res.data.count / 10) === currentPage) {
          setPageDotter(false);
        }
      })
      .catch((e) => {
        // console.error(e);
      });
    setRefresh(false);
  }, [currentPage, refresh]);

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageCount) * pageCount;
    console.log(new Array(pageCount))
    return new Array(pageCount).fill().map((_, idx) => start + idx + 1);
  };
  function handleAddOpen() {
    setAddOpen(true);
  }

  const addOrEditUserDetail = () => {
    Navigate("/UserForm/" + "-1");
  };
  // function deleteUser() {
  //   setRefresh(true);
  //   setShowDeleteConfirmationDialog(false);
  // }
  function handleEditOpen(id) {
    setLoading(true);
    getSingleUser(id)
      .then((res) => {
        setSingleUser(res.data);
        setLoading(false);
      })
      .catch((e) => {
        // ErrorMessage({ message: e.response.data.message });
        setLoading(false);
      });
  }

  const [currentLocation, setCurrentLocation] = React.useState("/");

  useEffect(() => {
    setCurrentLocation(window.location.pathname);
  }, [Navigate]);

  const activeCheck = (url) => {
    if (url === currentLocation) {
      return "pc-grey-clr active-icon";
    }
    return "pc-grey-clr ";
  };

  const [text, setText] = React.useState(ulists);
  const [search, setSearch] = React.useState("");


  const [term, setTerm] = useState(null);

  const [filteredTerms, setFilteredTerms] = useState(ulists.fname);

  const filteredUsers = useMemo(() =>
    term == null
      ? ulists
      : list.filter((user) =>
          user.fname.toLowerCase().includes(term.toLowerCase())
        )
  );

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
            setLoading(true);
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
      {loading && <LoadingSpinner />}
      <div className={`pc-subheader ${loading ? "d-none" : ""}`}>
        <div className="pc-subhead-container">
          <div className="pc-flex-align-item-center pc-flex-wrap">
            <div className="pc-username"> User List</div>
          </div>
          <div class="d-flex align-items-center flex-wrap justify-content-between">
            <div class="flex-grow-1 fw-bold text-dark-50 py-2 py-lg-2 me-5"></div>
          </div>
          <div className="pc-flex-align-item-center">
            <div className="pc-topbar">
              <div className="pc-topbar pc-topbar-button">
              {!pathName &&
                <span className="pc-topbar-search">
                  <input
                    type="text"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    className="pc-search"
                    placeholder="Search"
                  />
                </span>
              }
                <span className="pc-topbar-icon">
                  <div
                    className={activeCheck("/UserCards/default-card/")}
                    onClick={() => Navigate("/UserCards/default-card/")}
                  >
                    <i class="fas fa-credit-card"></i>{" "}
                  </div>
                </span>
                <span className="pc-topbar-icon">
                  <div
                    className={activeCheck("/UserCards/data-table/")}
                    onClick={() => Navigate("/UserCards/data-table/")}
                  >
                    <i class="fa fa-table" aria-hidden="true"></i>{" "}
                  </div>
                </span>

                <span className="pc-topbar-icon">
                  <div
                    className={activeCheck("/UserCards/message-card")}
                    onClick={() => Navigate("/UserCards/message-card")}
                  >
                    <i class="fa fa-message"></i>{" "}
                  </div>
                </span>
                <span className="pc-topbar-icon">
                  <div
                    className={activeCheck("/UserCards/social-card/")}
                    onClick={() => Navigate("/UserCards/social-card/")}
                  >
                    <i class="fa fa-users"></i>
                  </div>
                </span>
              </div>
            </div>

            <div className={`pc-text-end`}>
              <Buttons
                className="pc-button pc-add-button pc-bg"
                label="Add user"
                svg="/media/svg/icons/Code/Plus.svg"
                onClick={addOrEditUserDetail}
              />
            </div>
          </div>
        </div>
        {/* <hr/> */}
      </div>
      {/* <div className={`text-center mb-3 ${loading ? "" : "d-none"}`}> */}
      {/* <span>Loading...</span> */}
      {/* </div> */}

      {/* <div className="pc-mr-top"> */}
      {/* <hr/> */}
      <Routes>
        <Route
          path="/default-card/"
          element={
            <div>
              {filteredUsers.map((u, i) => (
                // {/* {ulists.map((u, i) => ( */}
                <ListCard
                  user={u}
                  key={i}
                  userDel={deleteUserInfo}
                  userEdit={handleEditOpen}
                />
              ))}
            </div>
           
          }
        ></Route>
      </Routes>

      <Routes>
        <Route
          path="/message-card/"
          element={
           
            <div className="grid-view">
              <>
                {ulists.map((u, i) => {
                  return (
                    <div
                      className=""
                      key={i}
                    >
                      <MessageCard
                        user={u}
                        // userDel={userDel}
                        userEdit={handleEditOpen}
                      />
                    </div>
                  );
                })}
              </>
            </div>
           
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/social-card/"
          element={
            <div className="grid-view">
              <>
                {ulists.map((u, i) => {
                  return (
                    <div
                      className=""
                      key={i}
                    >
                      <SocialCard
                        user={u}
                        // userDel={userDel}
                        userEdit={handleEditOpen}
                      />
                    </div>
                  );
                })}
              </>
            </div>
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/data-table/"
          element={
            <div>
              {/* {ulists.map((u, i) => ( */}
              {/* <Datatablelist */}
              <CheckTable
                user={ulists}
                // key={i}
                // userDelete={deleteUserInfo}
                userEdit={handleEditOpen}
              />
              {/* ))} */}
            </div>
          }
        ></Route>
      </Routes>
      {/* </div> */}
      {!pathName &&
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
      }
    </>
  );
}
