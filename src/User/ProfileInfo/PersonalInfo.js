// import { RttRounded } from "@mui/icons-material";
import React from "react";
// import CallIcon from "@mui/icons-material/Call";
// import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { useParams } from "react-router";
// import { useNavigate, useParams } from "react-router-dom";
import { useFormik, Field } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import SelectField from "../../Components/inputs/InputFields/SelectField";
import InputField from "../../Components/inputs/InputFields/InputField";
import Avatar from "../../Components/inputs/InputFields/Avatar";
import { toast } from "react-toastify";
// import { ErrorMessage, SuccessMessage } from "../Components/CustomAlert";
import Buttons from "../../Components/Buttons";
import { DialogActions, DialogContent } from "@mui/material";
// import { Formik, FormikProps, Form ,Field} from "formik";
export default function PersonalInfo(props) {
  const { className, profile, user } = props;

  const [afterCrop, setAfterCrop] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [imageChanged, setImageChanged] = React.useState(false);
  const { id } = useParams();
  const [openCrop, setOpenCrop] = React.useState(false);

  console.log(profile);
  //Title
  const [titles] = React.useState([
    {
      id: "Mr.",
      name: "Mr.",
    },
    {
      id: "Mrs.",
      name: "Mrs.",
    },
    {
      id: "Miss.",
      name: "Miss.",
    },
  ]);

  //Gender
  const [genders] = React.useState([
    {
      id: 0,
      name: "Male",
    },
    {
      id: 1,
      name: "Female",
    },
    {
      id: 2,
      name: "Others",
    },
  ]);

  //Marital Status
  const [maritals] = React.useState([
    {
      id: 0,
      name: "Married",
    },
    {
      id: 1,
      name: "Single",
    },
    {
      id: 2,
      name: "Other",
    },
  ]);

  function getImage(img) {
    setAfterCrop(img);
    setImageChanged(true);
    formik.setFieldValue("image", img);
  }

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      image: profile.map((elm) => elm.avatar_url) ?? "",
      title: user.title ?? "",
      fname: user.fname ?? "",
      mname: user.mname ?? "",
      lname: user.lname ?? "",
      dob: profile[0]?.date_of_birth ?? "",
      gender: profile[0]?.gender ?? "",
      marital_sts: profile[0]?.marital_status ?? "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Select a tittle"),
      fname: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("First Name Required"),
      lname: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Last Name Required"),
      // mname: Yup.string().max(20, "Must be 20 characters or less"),
      // image: Yup.string().required("Image Required"),
      dob: Yup.string().required("Select D.O.B"),
      gender: Yup.string().required("Select your gender"),
      marital_sts: Yup.string().required("Select your marital status"),
    }),
    onSubmit: () => {
      setLoading(true);
      if (imageChanged) {
        Axios.post("profile-img", { image: afterCrop })
          .then((res) => {
            submitter(res.data.avatar_url);
            if (res.status === 200) {
              toast.success("Image updated successfully.!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
              });
            } else {
              showDeleteError();
            }
          })
          .catch((e) => {
            setLoading(false);
          });
      } else {
        submitter(formik.values.image);
      }
    },
  });
  function submitter(img) {
    Axios.patch("update_personal-information?id=" + id, formik.values)
      .then((resp) => {
        if (resp.status === 200) {
          toast.success("Personal info updated successfully.!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
          });
        } else {
          showDeleteError();
        }
      })
      .catch((error) => {
        showDeleteError();
      })
      .finally(() => {
        setLoading(false);
      });
  }
  const showDeleteError = () => {
    toast.error("Unable to update the PersonalInfo!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
    });
  };
  return (
    <>
      <div className="pc-profile-custom-card">
        <div className="pc-profile-card-header pc-padding">
          <div className="pc-profile-card-title">
            <h3 className="pc-card-label pc-text-dark">Personal Information</h3>
            <span className="pc-text-muted ">
              Update your personal informaiton
            </span>
          </div>

          <div className="pc-card-toolbar">
            {edit === true ? (
              <>
                <Buttons
                  type="button"
                  form="personalForm"
                  className="pc-edit-btn btn-success me-2"
                  label="Save Changes"
                  isDisabled={loading}
                  onClick={formik.handleSubmit}
                />
                <Buttons
                  type="button"
                  className="pc-edit-btn btn-secondary"
                  label="Cancel"
                  onClick={() => {
                    setEdit(false);
                  }}
                />
              </>
            ) : (
              <Buttons
                type="button"
                className="pc-edit-btn btn-dark"
                label="Edit"
                onClick={() => {
                  setEdit(true);
                }}
              />
            )}
          </div>
        </div>

        <div className="pc-profile-card-form">
          <div className="pc-profile-card-body">
            <div className="pc-profile-row">
              <label className="pc-lbl pc-col pc-col-flex"></label>
              <div className="pc-profile-text pc-col">
                <h5 className="pc-text-dark pc-add-margin">Customer Info</h5>
              </div>
            </div>
            <div className="pc-form-group pc-profile-row">
              <label className="pc-col pc-col-flex pc-col-form-label pc-align-address-text">
                Avatar
              </label>
              <div className="pc-profile-text pc-col">
                {/* {edit === true && ( */}
                <Avatar
                  className="box"
                  name="image"
                  value={formik.values.image}
                  getImage={getImage}
                  {...formik.getFieldProps("image")}
                  disabled={!edit}
                />
                {/* )} */}

                {formik.touched.image && formik.errors.image ? (
                  <small className="text-danger">{formik.errors.image}</small>
                ) : null}
              </div>
            </div>

            {/* <div className="pc-form-group pc-profile-row">
              <label class="pc-col pc-col-flex pc-col-form-label pc-align-address-text">
                Avatar
              </label>
              <div className="pc-profile-text pc-col">
                <div className="pc-profile-img">
                  <div className="pc-image-input-wrapper"> </div>

                  <label
                    className="pc-pencil-icon"
                    data-toggle="tooltip"
                    title
                    data-original-title="Change avatar"
                    aria-describedby="tooltip310546"
                  >
                    <i class="fa fa-pencil"></i>
                  </label>
                  <span className="pc-pencil-icon pc-btn-close">
                    <i class="fa fa-times"></i>
                  </span>
                  <span className="pc-pencil-icon pc-btn-close">
                    <i class="fa fa-times"></i>
                  </span>
                </div>
                <span class="pc-text-muted pc-form-text">
                  Allowed file types: png, jpg, jpeg.
                </span>
              </div>
            </div> */}

            <div className="pc-form-group pc-profile-row">
              <label className="pc-col pc-col-flex pc-col-form-label pc-align-address-text">
                Title
              </label>
              <div className="pc-profile-text pc-col">
                <SelectField
                  type="text"
                  name="title"
                  list={titles}
                  {...formik.getFieldProps("title")}
                  // isDisabled={!edit}
                />
                {formik.touched.title && formik.errors.title ? (
                  <small className="text-danger">{formik.errors.title}</small>
                ) : null}
              </div>
            </div>

            <div className="pc-form-group pc-profile-row">
              <label className="pc-col pc-col-flex pc-col-form-label pc-align-address-text">
                First Name
              </label>
              <div className="pc-profile-text pc-col">
                <InputField
                  type="text"
                  name="fname"
                  {...formik.getFieldProps("fname")}
                  isDisabled={!edit}
                />
                {formik.touched.fname && formik.errors.fname ? (
                  <small className="text-danger">{formik.errors.fname}</small>
                ) : null}
              </div>
            </div>
            <div className="pc-form-group pc-profile-row">
              <label className="pc-col pc-col-flex pc-col-form-label pc-align-address-text">
                Middle Name
              </label>
              <div className="pc-profile-text pc-col">
                <InputField
                  type="text"
                  name="mname"
                  {...formik.getFieldProps("mname")}
                  isDisabled={!edit}
                />
                {formik.touched.mname && formik.errors.mname ? (
                  <small className="text-danger">{formik.errors.mname}</small>
                ) : null}
              </div>
            </div>
            <div className="pc-form-group pc-profile-row">
              <label className="pc-col pc-col-flex pc-col-form-label pc-align-address-text">
                Last Name
              </label>
              <div className="pc-profile-text pc-col">
                <InputField
                  type="text"
                  name="lname"
                  {...formik.getFieldProps("lname")}
                  isDisabled={!edit}
                />
                {formik.touched.lname && formik.errors.lname ? (
                  <small className="text-danger">{formik.errors.lname}</small>
                ) : null}
              </div>
            </div>
            <div className="pc-form-group pc-profile-row">
              <label className="pc-col pc-col-flex pc-col-form-label pc-align-address-text">
                D.O.B
              </label>
              <div className="pc-profile-text pc-col">
                <InputField
                  type="date"
                  {...formik.getFieldProps("dob")}
                  isDisabled={!edit}
                />
                {formik.touched.dob && formik.errors.dob ? (
                  <small className="text-danger">{formik.errors.dob}</small>
                ) : null}
              </div>
            </div>
            <div className="pc-form-group pc-profile-row">
              <label className="pc-col pc-col-flex pc-col-form-label pc-align-address-text">
                Gender
              </label>
              <div className="pc-profile-text pc-col">
                <SelectField
                  list={genders}
                  name="gender"
                  {...formik.getFieldProps("gender")}
                  isDisabled={!edit}
                />
                {formik.touched.gender && formik.errors.gender ? (
                  <small className="text-danger">{formik.errors.gender}</small>
                ) : null}
              </div>
            </div>
            <div className="pc-form-group pc-profile-row">
              <label className="pc-col pc-col-flex pc-col-form-label pc-align-address-text">
                Marital Status
              </label>
              <div className="pc-profile-text pc-col">
                <SelectField
                  list={maritals}
                  name="marital_sts"
                  {...formik.getFieldProps("marital_sts")}
                  isDisabled={!edit}
                />
                {formik.touched.marital_sts && formik.errors.marital_sts ? (
                  <small className="text-danger">
                    {formik.errors.marital_sts}
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
