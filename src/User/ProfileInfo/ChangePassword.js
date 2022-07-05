import React from "react";
import InputField from "../../Components/inputs/InputFields/InputField";
import { useFormik } from "formik";
import * as Yup from "yup";
import Buttons from "../../Components/Buttons";
import Axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

export default function ChangePassword(props) {
  const [edit, setEdit] = React.useState(false);
  const [emailedit, setEmailedit] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const history = useNavigate();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      old_pwd: "",
      new_pwd: "",
      // verify_passw
    },
    validationSchema: Yup.object({
      old_pwd: Yup.string()
      .max(10, "Must be 10 characters or less")
      .min(4, "Must be 4 characters or more")
      .required("Required"),
    new_pwd: Yup.string()
      .max(10, "Must be 10 characters or less")
      .min(8, "Must be 8 characters or more")
      .required("Required"),
    // verify_password: Yup.string()
    //   .oneOf([Yup.ref("new_pwd"), null], "Passwords don't match!")
    //   .max(10, "Must be 10 characters or less")
    //   .min(8, "Must be 8 characters or more")
    //   .required("Required"),
    }),
    onSubmit: (values) => {
      Axios.patch("change-password", formik.values,  {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "post-id": localStorage.getItem("postId"),
          "session-id": localStorage.getItem("session_id"),
        },
      })
        .then(() => {
          // SuccessMessage({ message: "Password Updated Successfully" });
        })
        .catch((e) => {
          // ErrorMessage({ message: e.response.data.message });
        });
    },
  });

  return (
    <>
      {/* <LoaderSmall className={`text-center mb-3 ${loading ? "" : "d-none"}`} /> */}
      <div className="pc-profile-custom-card">
        
        <div className="pc-profile-card-header padding">
          <div className="pc-profile-card-title">
            <h3 className="pc-card-label pc-text-dark">Change Password</h3>
            <span className="pc-text-muted">Change your account password</span>
          </div>
        </div>
        <div className="pc-profile-card-form">
          <div className="pc-profile-card-body">
                <div className="pc-profile-row pc-add-space">
                    <label className="pc-lbl pc-col pc-col-flex"></label>
                    <div className="col-9">
                    <div class="pc-alert pc-alert-custom" role="alert">
                    <div class="pc-alert-icon">
                    <i class='fa fa-warning fa-lg'></i>

                    </div>
                    <div class="pc-alert-text fw-bold">Configure user passwords to expire periodically.<br/>
                    Users will need warning that their passwords are going to expire, or they might inadvertently get locked out of the system!</div>
                    <div class="pc-alert-close">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">
                   {/* <CloseIcon  className="contact-color danger"/> */}
                   <div className="contact-color danger"><i class="fa fa-times fa-lg" aria-hidden="true"></i></div>
                    </span></button></div></div>
              </div>
                </div>


            <div className="pc-profile-row">
              <label className="pc-lbl pc-col pc-col-flex"></label>
              <div className="pc-profile-text pc-col">
                <h5 className="pc-text-dark pc-add-margin">Change Or Recover Your Password:</h5>
              </div>
            </div>
           
            <div className="pc-form-group pc-profile-row">
              <label class="pc-col pc-col-flex pc-col-form-label">Old Password <i class="text-danger fa fa-star fa-2xs"></i></label>
              <div className="pc-profile-text pc-col">
              <InputField
                        type="password"
                        name="old_pwd"
                        {...formik.getFieldProps("old_pwd")}
                      />
                      {formik.touched.old_pwd && formik.errors.old_pwd ? (
                        <small className="text-danger">
                          {formik.errors.old_pwd}
                        </small>
                      ) : null}
              </div>
            </div>

            <div className="pc-form-group pc-profile-row">
              <label class="pc-col pc-col-flex pc-col-form-label">New Password</label>
              <div className="pc-profile-text pc-col">
              <InputField
                        type="password"
                        name="new_pwd"
                        {...formik.getFieldProps("new_pwd")}
                      />
                      {formik.touched.new_pwd && formik.errors.new_pwd ? (
                        <small className="text-danger">
                          {formik.errors.new_pwd}
                        </small>
                      ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
