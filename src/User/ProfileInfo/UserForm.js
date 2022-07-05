import React, { useState } from "react";
import InputField from "../../Components/inputs/InputFields/InputField";
import { useFormik } from "formik";
import * as Yup from "yup";
import SelectField from "../../Components/inputs/InputFields/InputFields/SelectField";
import { FIRM_ID } from "../../services/constants";
// import {
//   AddNewSuccess,
//   ErrorMessage,
//   SuccessMessage,
// } from "../../Components/CustomAlert";
import Buttons from "../../Components/Buttons";
import { useSelector } from "react-redux";
import { patchUser, postUser } from "../../Components/ApiConst";

export function UserForm({ type, onClose, reOpen, data }) {
  const authUser = useSelector((state) => state.auth);

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const [statuses] = useState([
    {
      id: "1",
      name: "ON",
    },
    {
      id: "0",
      name: "OFF",
    },
  ]);
  const [titles] = useState([
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
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      fname: "",
      email: "",
      lname: "",
      phn_nbr: "",
    },
    validationSchema: Yup.object({
      fname: Yup.string()
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
        .max(15, "Must be 15 characters or less")
        .required("First Name Required"),
      lname: Yup.string()
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
        .max(20, "Must be 20 characters or less")
        .required("Last Name Required"),
      email: Yup.string()
        .email("Wrong email format")
        .min(3, "Minimum 3 symbols")
        .max(50, "Maximum 50 symbols")
        .required("Email Required"),

      // phn_nbr: Yup.string()
      //   .matches(phoneRegExp, "Phone number is not valid")
      //   .required("Phone Number Required"),
    }),
    
    onSubmit: (values) => {
      if (type === "add") {
        submitter(values);
      } else {
        updater(values);
      }
    },
  });
  function submitter(values) {
    postUser(values)
      .then((res) => {
        onClose();
        // AddNewSuccess({ message: "User added", reOpen: reOpen });
      })
      .catch((e) => {
        onClose();
        // ErrorMessage({ message: e.response.data.message });
      });
  }
  function updater(values) {
    patchUser(data.id, values)
      .then(() => {
        onClose();
        // SuccessMessage({ message: "User updated Successfully!" });
      })
      .catch((e) => {
        onClose();
        // ErrorMessage({ message: e.response.data.message });
      });
  }
  return (
    <form onSubmit={formik.handleSubmit}>
     
     <div className="form-group row">
                  <label className="col-form-label col-3 text-lg-right text-left">
                    First Name
                  </label>
                  <div className="col-9">
                    <InputField
                      type="text"
                      name="fname"
                      {...formik.getFieldProps("fname")}
                    />
                    {formik.touched.fname && formik.errors.fname ? (
                      <small className="text-danger">
                        {formik.errors.fname}
                      </small>
                    ) : null}
                  </div>
                </div>
                
                <div className="form-group row">
                  <label className="col-form-label col-3 text-lg-right text-left">
                    Last Name
                  </label>
                  <div className="col-9">
                    <InputField
                      type="text"
                      name="lname"
                      {...formik.getFieldProps("lname")}
                    />
                    {formik.touched.lname && formik.errors.lname ? (
                      <small className="text-danger">
                        {formik.errors.lname}
                      </small>
                    ) : null}
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-form-label col-3 text-lg-right text-left">
                    Email
                  </label>
                  <div className="col-9">
                    <InputField
                      type="text"
                      name="email"
                      {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <small className="text-danger">
                        {formik.errors.email}
                      </small>
                    ) : null}
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-form-label col-3 text-lg-right text-left">
                    Phone Number
                  </label>
                  <div className="col-9">
                    <InputField
                      type="text"
                      name="phn_nbr"
                      {...formik.getFieldProps("phn_nbr")}
                    />
                    {formik.touched.phn_nbr && formik.errors.phn_nbr ? (
                      <small className="text-danger">
                        {formik.errors.phn_nbr}
                      </small>
                    ) : null}
                  </div>
                </div>
      <div className="text-center">
        <Buttons
          type="submit"
          className="btn btn-sm btn-success fw-bolder mr-2 ripple"
          label="Submit"
          onClick={formik.onSubmit}
          isHidden={type === "update" ? 1 : 0}
        />
        <Buttons
          type="submit"
          className="btn btn-sm btn-success fw-bolder mr-2 ripple"
          label="Update"
          isHidden={type === "add" ? 1 : 0}
        />
        <Buttons
          type="button"
          className="btn btn-sm btn-primary fw-bolder ripple"
          label="Cancel"
          onClick={onClose}
        />
      </div>
    </form>
  );
}
