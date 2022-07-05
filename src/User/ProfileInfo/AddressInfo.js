import React from "react";
import InputField from "../../Components/inputs/InputFields/InputField";
import { useFormik } from "formik";
import * as Yup from "yup";
import Buttons from "../../Components/Buttons";
import Axios from "axios";
// import { ErrorMessage, SuccessMessage } from "../Components/CustomAlert"
// import LoaderSmall from "../LoaderSmall";
import { useNavigate, useLocation } from "react-router-dom";


export default function AddressInfo({ data }) {
  const location = useLocation();
  let id = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
  const [loading, setLoading] = React.useState(false);
  const [edit, setEdit] = React.useState(false);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      building_name: data && data.building_name ? data.building_name : "",
      floor_line: data && data.floor_line ? data.floor_line : "",
      street_line: data && data.street_line ? data.street_line : "",
      zipcode: data && data.zipcode ? data.zipcode : "",
      door_no: data && data.door_no ? data.door_no : "",
    },
    validationSchema: Yup.object({
      building_name: Yup.string().max(15, "Must be 15 characters or less"),
      door_no: Yup.string().required("Door No. Required"),
      floor_line: Yup.string().required("Address line 1 Required"),
      zipcode: Yup.string().required("Zipcode Required"),
      //  tus: Yup.string().required("status Required"),
    }),
    onSubmit: (values) => {
      setLoading(true);
      if (data.length != 0) {
        Axios.patch("update-user_address_information/" + id, values)
          .then((res) => {
            // SuccessMessage({ message: "Address Added Successfully" });
          })
          .catch((e) => {
            // ErrorMessage({ message: e.response.data.message });
          });
      } else {
        Axios.post("user_address_information", values)
          .then((res) => {
            // SuccessMessage({ message: "Address Updated Successfully" });
          })
          .catch((e) => {
            // ErrorMessage({ message: e.response.data.message });
          });
      }
      setLoading(false);
    },
  });

  return (
    <>
      {/* <LoaderSmall className={`text-center mb-3 ${loading ? "" : "d-none"}`} /> */}
      <div className="pc-profile-custom-card">
        <div className="pc-profile-card-header padding">
          <div className="pc-profile-card-title">
            <h3 className="pc-card-label pc-text-dark">Address Information</h3>
            <span className="pc-text-muted ">
              Update your address informaiton
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
                <h5 className="pc-text-dark pc-add-margin">
                  User's Address Details:
                </h5>
              </div>
            </div>

            <div className="pc-form-group pc-profile-row">
              <label class="pc-col pc-col-flex pc-col-form-label pc-align-address-text">
                Buliding Name
              </label>
              <div className="pc-profile-text pc-col">
                <InputField
                  type="text"
                  name="building_name"
                  {...formik.getFieldProps("building_name")}
                  isDisabled={!edit}
                />
                {formik.touched.building_name && formik.errors.building_name ? (
                  <small className="text-danger">
                    {formik.errors.building_name}
                  </small>
                ) : null}
              </div>
            </div>

            <div className="pc-form-group pc-profile-row">
              <label class="pc-col pc-col-flex pc-col-form-label pc-align-address-text">
                door No
              </label>
              <div className="pc-profile-text pc-col">
                <InputField
                  type="text"
                  name="door_no"
                  {...formik.getFieldProps("door_no")}
                  isDisabled={!edit}
                />
                {formik.touched.door_no && formik.errors.door_no ? (
                  <small className="text-danger">{formik.errors.door_no}</small>
                ) : null}
              </div>
            </div>
            <div className="pc-form-group pc-profile-row">
              <label class="pc-col pc-col-flex pc-col-form-label pc-align-address-text">
                Address Line 1
              </label>
              <div className="pc-profile-text pc-col">
                <InputField
                  type="text"
                  name="floor_line"
                  {...formik.getFieldProps("floor_line")}
                  isDisabled={!edit}
                />
                {formik.touched.floor_line && formik.errors.floor_line ? (
                  <small className="text-danger">
                    {formik.errors.floor_line}
                  </small>
                ) : null}
              </div>
            </div>
            <div className="pc-form-group pc-profile-row">
              <label class="pc-col pc-col-flex pc-col-form-label pc-align-address-text">
                Address Line 2
              </label>
              <div className="pc-profile-text pc-col">
                <InputField
                  type="text"
                  name="street_line"
                  {...formik.getFieldProps("street_line")}
                  isDisabled={!edit}
                />
                {formik.touched.street_line && formik.errors.street_line ? (
                  <small className="text-danger">
                    {formik.errors.street_line}
                  </small>
                ) : null}
              </div>
            </div>
            <div className="pc-form-group pc-profile-row">
              <label class="pc-col pc-col-flex pc-col-form-label pc-align-address-text">
                Zipcode
              </label>
              <div className="pc-profile-text pc-col">
                <InputField
                  type="text"
                  name="zipcode"
                  {...formik.getFieldProps("zipcode")}
                  isDisabled={!edit}
                />
                {formik.touched.zipcode && formik.errors.zipcode ? (
                  <small className="text-danger">{formik.errors.zipcode}</small>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
