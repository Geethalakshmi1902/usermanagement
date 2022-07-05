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
// import { Formik, FormikProps, Form ,Field} from "formik";
export default function ProfileInfo(props) {
  const { className, profile, user } = props;

  const [afterCrop, setAfterCrop] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [imageChanged, setImageChanged] = React.useState(false);
  const { id } = useParams();

  console.log(profile)
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
      marital_sts:profile[0]?.marital_status ?? "",
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
    {/* <LoaderSmall className={`text-center mb-3 ${loading ? "" : "d-none"}`} /> */}
    <div className={`card card-custom ${className}`}>
      <div className="card-header py-3">
        <div className="card-title align-items-start flex-column">
          <h3 className="card-label fw-bolder text-dark">
            Personal Information
          </h3>
          <span className="text-muted fw-bold font-size-sm mt-1">
            Update your personal informaiton
          </span>
        </div>
        <div className="card-toolbar">
          {edit === true ? (
            <>
              <Buttons
                type="button"
                form="personalForm"
                className="btn btn-success me-2"
                label="Save Changes"
                isDisabled={loading}
                onClick={formik.handleSubmit}
              />
              <Buttons
                type="button"
                className="btn btn-secondary"
                label="Cancel"
                onClick={() => {
                  setEdit(false);
                }}
              />
            </>
          ) : (
            <Buttons
              type="button"
              className="btn btn-dark"
              label="Edit"
              onClick={() => {
                setEdit(true);
              }}
            />
          )}
        </div>
      </div>
      <div className="form">
        <div className="card-body">
          <form id="personalForm" className="row ">
            <div className="col-xl-9 my-2">
              <div className="row">
                <label className="col-3"></label>
                <div className="col-9">
                  <h6 className="text-dark fw-bold mb-10">
                    User's Profile Details:
                  </h6>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-form-label col-3 text-lg-end text-start">
                  Avatar
                </label>
                <div className="col-9">
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
                    <small className="text-danger">
                      {formik.errors.image}
                    </small>
                  ) : null}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-form-label col-3 text-lg-end text-start">
                  Title
                </label>
                <div className="col-9">
                  <SelectField
                    type="text"
                    name="title"
                    list={titles}
                    {...formik.getFieldProps("title")}
                    isDisabled={!edit}
                  />
                  {formik.touched.title && formik.errors.title ? (
                    <small className="text-danger">
                      {formik.errors.title}
                    </small>
                  ) : null}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-form-label col-3 text-lg-end text-start">
                  First Name
                </label>
                <div className="col-9">
                  <InputField
                    type="text"
                    name="fname"
                    {...formik.getFieldProps("fname")}
                    isDisabled={!edit}
                  />
                  {formik.touched.fname && formik.errors.fname ? (
                    <small className="text-danger">
                      {formik.errors.fname}
                    </small>
                  ) : null}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-form-label col-3 text-lg-end text-start">
                  Middle Name
                </label>
                <div className="col-9">
                  <InputField
                    type="text"
                    name="mname"
                    {...formik.getFieldProps("mname")}
                    isDisabled={!edit}
                  />
                  {formik.touched.mname && formik.errors.mname ? (
                    <small className="text-danger">
                      {formik.errors.mname}
                    </small>
                  ) : null}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-form-label col-3 text-lg-end text-start">
                  Last Name
                </label>
                <div className="col-9">
                  <InputField
                    type="text"
                    name="lname"
                    {...formik.getFieldProps("lname")}
                    isDisabled={!edit}
                  />
                  {formik.touched.lname && formik.errors.lname ? (
                    <small className="text-danger">
                      {formik.errors.lname}
                    </small>
                  ) : null}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-form-label col-3 text-lg-end text-start">
                  D.O.B
                </label>
                <div className="col-9">
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
              <div className="form-group row">
                <label className="col-form-label col-3 text-lg-end text-start">
                  Gender
                </label>
                <div className="col-9">
                  <SelectField
                    list={genders}
                    name="gender"
                    {...formik.getFieldProps("gender")}
                    isDisabled={!edit}
                  />
                  {formik.touched.gender && formik.errors.gender ? (
                    <small className="text-danger">
                      {formik.errors.gender}
                    </small>
                  ) : null}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-form-label col-3 text-lg-end text-start">
                  Marital Status
                </label>
                <div className="col-9">
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
          </form>
        </div>
      </div>
    </div>
  </>
  );
}
