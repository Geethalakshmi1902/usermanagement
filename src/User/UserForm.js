import React, { useEffect } from "react";
import Buttons from "../Components/Buttons";
import { patchUser, postUser, HTTP_CODE } from "../Components/ApiConst";
import InputField from "../Components/inputs/InputFields/InputField";
import * as yup from "yup";
import { Formik, FormikProps, Form, Field } from "formik";
// import Axios from "../../../redux/setupAxios";
import { FormHelperText } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
// import { HTTP_CODE } from "../../components/categoriesform/HttpCode";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { ErrorMessage, SuccessMessage } from "../Components/CustomAlert";
import 'react-toastify/dist/ReactToastify.css';
// import Buttons from "@mui/material/Buttons";
import LoadingSpinner from "../Components/LoaderSmall";
const UserForm = () => {
  const Navigate = useNavigate();
  const { id } = useParams();
  const isEdit = id !== "-1";
  const API_URL = process.env.REACT_APP_API_URL;
  const ref = React.useRef(null);
  const formikRef = React.useRef(null);
  const [editData, setEditData] = React.useState(null);
  const [pickedImage, setPickedImage] = React.useState(null);

  const [loading, setLoading] = useState(false);

  const phoneRegExp =
    /^((\\[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  useEffect(() => {
    setLoading(true);

    Promise.all([
      ...(isEdit
        ? [axios.get("get_user_detail_by_id/" + id)]
        : []),
    ])
      .then((values) => {
        //User Data
        if (isEdit) {
          setEditData(values[0].data.data);
        }
        //Food Type
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  //Form Initial Value
  const initialValues = {
    name: "",
    email: "",
    lname: "",
    phn_nbr: "",
  };

  //Form Validation
  const validation = yup.object().shape({
    name: yup
      .string()
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
      .max(15, "Must be 15 characters or less")
      .required("First Name Required"),
    lname: yup
      .string()
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
      .max(20, "Must be 20 characters or less")
      .required("Last Name Required"),
    email: yup
      .string()
      .email("Wrong email format")
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Email Required"),

    phn_nbr: yup
      .string()
      // .matches(phoneRegExp, "Phone number is not valid")
      .required("Phone Number Required"),
  });

  const handleAddOrEdit = () => {
    var value = formikRef.current.values;
    // var value = ref.current.values;

    var request = {};

    request["fname"] = value.name;

    request["email"] = value.email;

    request["lname"] = value.lname;
    request["phn_nbr"] = value.phn_nbr;

    setLoading(true);
    (isEdit
      ? axios.patch(
          "update_personal-information" + id + "/",
          request
        )
      : axios.post("private-signup", request)
    )
      .then((resp) => {
        
        if (resp.status === 201) {
          Navigate("/signed_up_verification_otp_sent_to_phone");
          // <ToastContainer />;
          setLoading(false);
         toast.success("Personal info updated successfully.!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
        });
        } else {
          showUserUpdateOrAddError();
        }
      })
      .catch((error) => {
        showUserUpdateOrAddError();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const showUserUpdateOrAddError = () => {
    // <ToastContainer />;
    toast.error("Unable to add the User!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
    });
  };



  return (
    <>
  
      <Formik
        innerRef={formikRef}
        initialValues={initialValues}
        enableReinitialize={true}
        onSubmit={() => {
          handleAddOrEdit();
          // <ToastContainer />
        }}
        validationSchema={validation}
      >
        {(FormikProps) => {
          const { values, touched, errors, handleChange } = FormikProps;
          return (
            <>
              <Form>
                <div className={` ${loading ? "d-none" : "pc-profile-custom-card"}`}>
                  <div className="pc-profile-card-header pc-padding">
                    <div className="pc-profile-card-title">
                      <h3 className="pc-card-label pc-text-dark">
                        User Information
                      </h3>
                      {/* <span className="text-muted ">Update your address informaiton</span> */}
                    </div>
                  </div>
                  <div className="pc-profile-card-form">
                    <div className="pc-profile-card-body">
                      <div className="pc-profile-row">
                        <label className="pc-lbl pc-col pc-col-flex"></label>
                        <div className="pc-profile-text pc-col">
                          <h5 className="pc-text-dark pc-add-margin">
                            User's Details:
                          </h5>
                        </div>
                      </div>

                      <div className="pc-form-group pc-profile-row">
                        <label class="pc-col pc-col-flex pc-col-form-label pc-align-address-text">
                          First Name
                        </label>
                        <div className="pc-profile-text pc-col">
                          <InputField
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            error={touched.name && Boolean(errors.name)}
                            helperText={touched.name && errors.name}
                          />

                          {FormikProps.touched.name &&
                          FormikProps.errors.name ? (
                            <small className="danger">
                              {FormikProps.errors.name}
                            </small>
                          ) : null}
                        </div>
                      </div>

                      <div className="pc-form-group pc-profile-row">
                        <label class="pc-col pc-col-flex pc-col-form-label pc-align-address-text">
                          Last Name
                        </label>
                        <div className="pc-profile-text pc-col">
                          <InputField
                            fullWidth
                            id="lname"
                            name="lname"
                            label={"LastName"}
                            value={values.lname}
                            onChange={handleChange}
                            error={touched.lname && Boolean(errors.lname)}
                            helperText={touched.lname && errors.lname}
                            // variant={InputStyle.outlined}

                            //   {...formik.getFieldProps("fname")}
                          />
                          {touched.lname && errors.lname ? (
                            <small className="danger">{errors.lname}</small>
                          ) : null}
                        </div>
                      </div>
                      <div className="pc-form-group pc-profile-row">
                        <label class="pc-col pc-col-flex pc-col-form-label pc-align-address-text">
                          Email
                        </label>
                        <div className="pc-profile-text pc-col">
                          <InputField
                            fullWidth
                            id="email"
                            name="email"
                            label={"email"}
                            value={values.email}
                            onChange={handleChange}
                            error={touched.email && Boolean(errors.email)}
                            helperText={touched.email && errors.email}
                            // variant={InputStyle.outlined}

                            //   {...formik.getFieldProps("fname")}
                          />
                          {touched.email && errors.email ? (
                            <small className="danger">{errors.email}</small>
                          ) : null}
                        </div>
                      </div>
                      <div className="pc-form-group pc-profile-row">
                        <label class="pc-col pc-col-flex pc-col-form-label pc-align-address-text">
                          Phone Number
                        </label>
                        <div className="pc-profile-text pc-col">
                          <InputField
                            fullWidth
                            id="phn_nbr"
                            name="phn_nbr"
                            label={"phn_nbr"}
                            value={values.phn_nbr}
                            onChange={handleChange}
                            error={touched.phn_nbr && Boolean(errors.phn_nbr)}
                            helperText={touched.phn_nbr && errors.phn_nbr}
                            // variant={InputStyle.outlined}

                            //   {...formik.getFieldProps("fname")}
                          />
                          {touched.phn_nbr && errors.phn_nbr ? (
                            <small className="danger">{errors.phn_nbr}</small>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  <di className="pc-form-btn">
                    <div className="pc-btn-center">
                      <Buttons
                        className="pc-button"
                        label="Cancel"
                        // className="pc-form-button"
                        //   sx={{ marginRight: "10px" }}
                        //   variant={ButtonsType.outlined}
                        onClick={() => {
                          Navigate("/UserCards/default-card/");
                        }}
                      />
                      {/* Cancel</Buttons> */}
                      {isEdit ? (
                        <Buttons
                          className="pc-button pc-bg"
                          label="Update"
                          // className="pc-form-button pc-bg"
                          type="submit"
                          //   variant={ButtonsType.contained}
                        />
                      ) : (
                        <Buttons
                          className='pc-button pc-bg {isLoading ? "loading" : undefined}'
                          label="Submit"
                          isLoding="true"
                          // className="pc-form-button pc-bg"
                          type="submit"
                          //   variant={ButtonsType.contained}
                          // onClick={() => handleAddOrEdit()}
                        />
                      )}
                    </div>
                  </di>
                </div>
              </Form>
            </>
          );
        }}
      </Formik>
       {loading && <LoadingSpinner />}
    </>
  );
};

export default UserForm;
