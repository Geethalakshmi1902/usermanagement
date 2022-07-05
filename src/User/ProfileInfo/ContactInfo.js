import React from "react";
import InputField from "../../Components/inputs/InputFields/InputField";
import { useFormik } from "formik";
import * as Yup from "yup";
import Buttons from "../../Components/Buttons";
import Axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

export default function ContactInfo(props) {
  const [edit, setEdit] = React.useState(false);
  const [emailedit, setEmailedit] = React.useState(false);
  const { className, user, UserID } = props;
  const [loading, setLoading] = React.useState(false);
  const history = useNavigate();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email:
        user.email_data && user.email_data.length
          ? user.email_data
              .filter((elm) => elm.type === 1)
              .map((elm) => elm.email)
          : "",
      phn_nbr:
        user.phonenumber_data && user.phonenumber_data.length
          ? user.phonenumber_data
              .filter((elm) => elm.type === 1)
              .map((elm) => elm.phone_number) ||
            user.phonenumber_data
              .filter((elm) => elm.type === 1)
              .map((elm) => elm.fstsegmnt)
          : "",
      cntry_cde: "+91",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email Address Required")
        .matches(
          /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "Invalid Email format"
        ),
      // phn_nbr: Yup.string()
      //   .required("Phone Number Required")
      //   .matches(/^[0-9]{10}$/, "Phone number is not valid"),
    }),
    onSubmit: (values) => {
      setLoading(true);
    },
  });

  const submitEmail = (e) => {
    e.preventDefault();
    Axios.post(
      "add_email",
      {
        email: formik.values.email,
      },
     
    )
      .then((res) => {
        history({
          pathname: res.data.data.context,
          search: "?email=" + formik.values.email,
        });
        setLoading(false);
        // SuccessMessage({ message: "Contact Updated Successfully" });
      })
      .catch((e) => {
        setLoading(false);
        // ErrorMessage({ message: "Something Wrong! " });
      });
  };

  // function submitphnNbr() => () {
  const submitphnNbr = (e) => {
    e.preventDefault();
    Axios.post(
      "add_phonenumber",
      {
        phn_nbr: formik.values.phn_nbr,
      },
     
    )
      .then((res) => {
        history({
          pathname: res.data.data.context,
          search: "?phn_nbr=" + formik.values.phn_nbr,
        });
        setLoading(false);
        // SuccessMessage({ message: "Contact Updated Successfully" });
      })
      .catch((e) => {
        setLoading(false);
        // ErrorMessage({ message: "Something Wrong! " });
      });
  };
  return (
    <>
      {/* <LoaderSmall className={`text-center mb-3 ${loading ? "" : "d-none"}`} /> */}
      <div className="pc-profile-custom-card">
        {/* <div className="card-header py-3">
          <div className="card-title align-items-start flex-column">
            <h3 className="card-label fw-bolder text-dark">
              Contact Information
            </h3>
            <span className="text-muted fw-bold font-size-sm mt-1">
              Update your contact informaiton
            </span>
          </div>
         
        </div> */}
        <div className="pc-profile-card-header padding">
          <div className="pc-profile-card-title">
            <h3 className="pc-card-label pc-text-dark">Contact Information</h3>
            <span className="pc-text-muted">
              Update your contact informaiton
            </span>
          </div>
        </div>
        <div className="pc-profile-card-form">
          <div className="pc-profile-card-body">
            <div className="pc-profile-row">
              <label className="pc-lbl pc-col pc-col-flex"></label>
              <div className="pc-profile-text pc-col">
                <h5 className="pc-text-dark pc-add-margin">
                  User's Contact Details:
                </h5>
              </div>
            </div>
            <div className="pc-form-group pc-profile-row">
              <label class="pc-col pc-col-flex pc-col-form-label">
                Email
              </label>
              <div className="pc-profile-text pc-col">
                <InputField
                  // svg="/media/svg/icons/Navigation/Check.svg"
                  type="text"
                  name="email"
                  icon="at"
                  {...formik.getFieldProps("email")}
                  isDisabled={!emailedit}
                />
                {formik.touched.email && formik.errors.email ? (
                  <small className="text-danger">{formik.errors.email}</small>
                ) : null}
              </div>
              <span className="pc-input-group-text">
                {emailedit === false ? (
                  <div
                    className="contact-color primary"
                    onClick={(e) => {
                      setEmailedit(true);
                      e.preventDefault();
                    }}
                  >
                    {" "}
                    <i class="fa fa-pencil fa-lg" aria-hidden="true"></i>
                  </div>
                ) : (
                  <>
                    <div
                      onClick={(e) => {
                        setEmailedit(true);
                        submitEmail(e);
                      }}
                      // isDisabled={!emailedit}
                      className="contact-color sucess"
                    >
                      <i class="fa fa-check fa-lg"></i>
                    </div>

                    <div
                      onClick={() => setEmailedit(false)}
                      className="contact-color danger"
                    >
                      <i class="fa fa-times fa-lg" aria-hidden="true"></i>
                    </div>
                  </>
                )}
              </span>
            </div>

            <div className="pc-form-group pc-profile-row">
              <label class="pc-col pc-col-flex pc-col-form-label">
                Contact Phone
              </label>
              <div className="pc-profile-text pc-col">
                <InputField
                  type="text"
                  name="phn_nbr"
                  icon="phone"
                  {...formik.getFieldProps("phn_nbr")}
                  isDisabled={!edit}
                />

                {formik.touched.phn_nbr && formik.errors.phn_nbr ? (
                  <small className="text-danger">{formik.errors.phn_nbr}</small>
                ) : null}
              </div>
              <span className="pc-input-group-text">
              {edit === false ? (
                  <div
                    className="contact-color primary"
                    onClick={(e) => {
                      setEdit(true);
                      e.preventDefault();
                    }}
                  >
                    {" "}
                    <i class="fa fa-pencil fa-lg" aria-hidden="true"></i>
                  </div>
                ) : (
                  <>
                    <div
                      onClick={(e) => {
                        setEdit(true);
                        submitphnNbr(e);
                      }}
                      isDisabled={!edit}
                      className="contact-color sucess"
                    >
                      <i class="fa fa-check fa-lg"></i>
                    </div>

                    <div
                      onClick={() => setEdit(false)}
                      className="contact-color danger"
                    >
                      <i class="fa fa-times fa-lg" aria-hidden="true"></i>
                    </div>
                  </>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
