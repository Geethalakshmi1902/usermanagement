import React, { useState } from "react";
import Buttons from "../../Components/Buttons";
import InputField from "../../Components/inputs/InputFields/Inputs/InputFields/InputField";
import SelectField from "../../Components/inputs/InputFields/InputFields/SelectField";
import { useFormik } from "formik";
import * as Yup from "yup";
import Avatar from "../../Components/inputs/InputFields/InputFields/Avatar";
import { Link } from "react-router-dom";
import CheckBox from "../../Components/inputs/InputFields/InputFields/CheckBox";

export function AddUser() {
  const formik = useFormik({
    initialValues: {
      image:"",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      companyName: "",
      companySite: "",
      userName: "",
      language: "",
      timezone: "",
      communication: [],
      passwordRestCheckbox: "",
      address1: "",
      address2: "",
      postcode: "",
      city: "",
      state: "",
      country: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone number is not valid")
        .required("Required"),
      companyName: Yup.string().required("Required"),
      image: Yup.mixed().required("A file is required"),
      companySite: Yup.string().required("Required"),
      userName: Yup.string().required("Required"),
      language: Yup.string().required("Required"),
      timezone: Yup.string().required("Required"),
      communication: Yup.string().required("Please select at least 1 option"),
      passwordRestCheckbox: Yup.string().required("Required"),
      address1: Yup.string().required("Required"),
      address2: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      state: Yup.string().required("Required"),
      postcode: Yup.string().required("Required"),
      country: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const [step, setStep] = useState("one");
  const [wiz_state, setWizState] = useState("first");
  const [state, setState] = useState({
    one: "current",
    two: "pending",
    three: "pending",
    four: "pending",
  });
  const stateOne = state.one;
  const stateTwo = state.two;
  const stateThree = state.three;
  const stateFour = state.four;
  const stepNext = (e) => {
    e.preventDefault();
    switch (step) {
      case "one":
        setStep("two");
        setState((prevState) => {
          return { ...prevState, one: "done", two: "current" };
        });
        setWizState("between");
        break;
      case "two":
        setStep("three");
        setState((prevState) => {
          return { ...prevState, two: "done", three: "current" };
        });
        break;
      case "three":
        setStep("four");
        setState((prevState) => {
          return { ...prevState, three: "done", four: "current" };
        });
        setWizState("last");
        break;

      default:
        alert("finished");
        break;
    }
  };
  const stepPrev = (e) => {
    e.preventDefault();
    switch (step) {
      case "four":
        setStep("three");
        setState((prevState) => {
          return { ...prevState, three: "current", four: "pending" };
        });
        setWizState("between");
        break;
      case "three":
        setStep("two");
        setState((prevState) => {
          return { ...prevState, two: "current", three: "pending" };
        });
        break;
      case "two":
        setStep("one");
        setState((prevState) => {
          return { ...prevState, one: "current", two: "pending" };
        });
        setWizState("first");
        break;

      default:
        alert("start point");
        break;
    }
  };
  return (
    <div className="card card-custom card-transparent">
      <div className="card-body p-0">
        <div
          className="wizard wizard-4"
          id="kt_wizard"
          data-wizard-state={wiz_state}
          data-wizard-clickable="true"
        >
          <div className="wizard-nav">
            <div className="wizard-steps">
              <div
                className="wizard-step"
                data-wizard-type="step"
                data-wizard-state={stateOne}
              >
                <div className="wizard-wrapper">
                  <div className="wizard-number">1</div>
                  <div className="wizard-label">
                    <div className="wizard-title">Profile</div>
                    <div className="wizard-desc">
                      User's Personal Information
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="wizard-step"
                data-wizard-type="step"
                data-wizard-state={stateTwo}
              >
                <div className="wizard-wrapper">
                  <div className="wizard-number">2</div>
                  <div className="wizard-label">
                    <div className="wizard-title">Account</div>
                    <div className="wizard-desc">
                      User's Account &amp; Settings
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="wizard-step"
                data-wizard-type="step"
                data-wizard-state={stateThree}
              >
                <div className="wizard-wrapper">
                  <div className="wizard-number">3</div>
                  <div className="wizard-label">
                    <div className="wizard-title">Address</div>
                    <div className="wizard-desc">User's Shipping Address</div>
                  </div>
                </div>
              </div>
              <div
                className="wizard-step"
                data-wizard-type="step"
                data-wizard-state={stateFour}
              >
                <div className="wizard-wrapper">
                  <div className="wizard-number">4</div>
                  <div className="wizard-label">
                    <div className="wizard-title">Submission</div>
                    <div className="wizard-desc">Review and Submit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card card-custom card-shadowless rounded-top-0">
            <div className="card-body p-0">
              <div className="row justify-content-center py-8 px-8 py-lg-15 px-lg-10">
                <div className="col-xl-12 col-xxl-10">
                  <form
                    className="form"
                    id="kt_form"
                    onSubmit={formik.handleSubmit}
                  >
                    <div className="row justify-content-center">
                      <div className="col-xl-9">
                        <div
                          className="my-5 step"
                          data-wizard-type="step-content"
                          data-wizard-state={stateOne}
                        >
                          <div className={"row "}>
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
                                <label className="col-form-label col-3 text-lg-right text-left">
                                  Avatar
                                </label>
                                <div className="col-9">
                                  <Avatar
                                    name="image" value="/media/users/300_1.jpg"
                                    {...formik.getFieldProps("image")}
                                  />
                                  {formik.touched.image &&
                                  formik.errors.image ? (
                                    <small className="text-danger">
                                      {formik.errors.image}
                                    </small>
                                  ) : null}
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-form-label col-3 text-lg-right text-left">
                                  First Name
                                </label>
                                <div className="col-9">
                                  <InputField
                                    type="text"
                                    name="firstName"
                                    {...formik.getFieldProps("firstName")}
                                  />
                                  {formik.touched.firstName &&
                                  formik.errors.firstName ? (
                                    <small className="text-danger">
                                      {formik.errors.firstName}
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
                                    name="lastName"
                                    {...formik.getFieldProps("lastName")}
                                  />
                                  {formik.touched.lastName &&
                                  formik.errors.lastName ? (
                                    <small className="text-danger">
                                      {formik.errors.lastName}
                                    </small>
                                  ) : null}
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-form-label col-3 text-lg-right text-left">
                                  Company Name
                                </label>
                                <div className="col-9">
                                  <InputField
                                    type="text"
                                    name="companyName"
                                    {...formik.getFieldProps("companyName")}
                                  />
                                  {formik.touched.companyName &&
                                  formik.errors.companyName ? (
                                    <small className="text-danger">
                                      {formik.errors.companyName}
                                    </small>
                                  ) : null}
                                  <span className="form-text text-muted">
                                    If you want your invoices addressed to a
                                    company. Leave blank to use your full name.
                                  </span>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-form-label col-3 text-lg-right text-left">
                                  Contact Phone
                                </label>
                                <div className="col-9">
                                  <InputField
                                    type="text"
                                    name="phone"
                                    icon="phone"
                                    {...formik.getFieldProps("phone")}
                                  />
                                  {formik.touched.phone &&
                                  formik.errors.phone ? (
                                    <small className="text-danger">
                                      {formik.errors.phone}
                                    </small>
                                  ) : null}
                                  <span className="form-text text-muted">
                                    We'll never share your email with anyone
                                    else.
                                  </span>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-form-label col-3 text-lg-right text-left">
                                  Email Address
                                </label>
                                <div className="col-9">
                                  <InputField
                                    type="text"
                                    name="email"
                                    icon="at"
                                    {...formik.getFieldProps("email")}
                                  />
                                  {formik.touched.email &&
                                  formik.errors.email ? (
                                    <small className="text-danger">
                                      {formik.errors.email}
                                    </small>
                                  ) : null}
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-form-label col-3 text-lg-right text-left">
                                  Company Site
                                </label>
                                <div className="col-9">
                                  <InputField
                                    type="text"
                                    name="companySite"
                                    icon="site"
                                    {...formik.getFieldProps("companySite")}
                                  />
                                  {formik.touched.companySite &&
                                  formik.errors.companySite ? (
                                    <small className="text-danger">
                                      {formik.errors.companySite}
                                    </small>
                                  ) : null}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="my-5 step"
                          data-wizard-type="step-content"
                          data-wizard-state={stateTwo}
                        >
                          <div className="row">
                            <div className="col-xl-9">
                              <div className="my-2">
                                {/*<!--begin::Row-->*/}
                                <div className="row">
                                  <label className="col-form-label col-3 text-lg-right text-left"></label>
                                  <div className="col-9">
                                    <h6 className="text-dark fw-bold mb-10">
                                      Account:
                                    </h6>
                                  </div>
                                </div>
                                {/*<!--end::Row-->*/}
                                {/*<!--begin::Group-->*/}
                                <div className="form-group row">
                                  <label className="col-form-label col-3 text-lg-right text-left">
                                    Username
                                  </label>
                                  <div className="col-9">
                                    <div className="spinner spinner-sm spinner-success spinner-right spinner-input">
                                      <InputField
                                        type="text"
                                        name="userName"
                                        {...formik.getFieldProps("userName")}
                                      />
                                      {formik.touched.userName &&
                                      formik.errors.userName ? (
                                        <small className="text-danger">
                                          {formik.errors.userName}
                                        </small>
                                      ) : null}
                                    </div>
                                  </div>
                                </div>
                                {/*<!--end::Group-->*/}
                                {/*<!--begin::Group-->*/}
                                <div className="form-group row">
                                  <label className="col-form-label col-3 text-lg-right text-left">
                                    Email Address
                                  </label>
                                  <div className="col-9">
                                    <InputField
                                      type="text"
                                      name="email"
                                      icon="at"
                                      {...formik.getFieldProps("email")}
                                    />
                                    {formik.touched.email &&
                                    formik.errors.email ? (
                                      <small className="text-danger">
                                        {formik.errors.email}
                                      </small>
                                    ) : null}
                                    <span className="form-text text-muted">
                                      Email will not be publicly displayed.
                                      <Link to="/">Learn more</Link>.
                                    </span>
                                  </div>
                                </div>
                                {/*<!--end::Group-->*/}
                                {/*<!--begin::Group-->*/}
                                <div className="form-group row">
                                  <label className="col-form-label col-3 text-lg-right text-left">
                                    Language
                                  </label>
                                  <div className="col-9">
                                    <SelectField
                                      name="language"
                                      {...formik.getFieldProps("language")}
                                    />
                                    {formik.touched.language &&
                                    formik.errors.language ? (
                                      <small className="text-danger">
                                        {formik.errors.language}
                                      </small>
                                    ) : null}
                                  </div>
                                </div>
                                {/*<!--end::Group-->*/}
                                {/*<!--begin::Group-->*/}
                                <div className="form-group row">
                                  <label className="col-form-label col-3 text-lg-right text-left">
                                    Time Zone
                                  </label>
                                  <div className="col-9">
                                    <SelectField
                                      name="timezone"
                                      {...formik.getFieldProps("timezone")}
                                    />
                                    {formik.touched.timezone &&
                                    formik.errors.timezone ? (
                                      <small className="text-danger">
                                        {formik.errors.timezone}
                                      </small>
                                    ) : null}
                                  </div>
                                </div>
                                {/*<!--end::Group-->*/}
                                {/*<!--begin::Group-->*/}
                                <div className="form-group row align-items-center">
                                  <label className="col-form-label col-3 text-lg-right text-left">
                                    Communication
                                  </label>
                                  <div className="col-9">
                                    <div className="checkbox-inline">
                                      <CheckBox className="checkbox"
                                        name="communication"
                                        {...formik.getFieldProps(
                                          "communication"
                                        )}
                                        value="email_check"
                                        label="Email"
                                      />
                                      <CheckBox className="checkbox"
                                        name="communication"
                                        {...formik.getFieldProps(
                                          "communication"
                                        )}
                                        value="sms_check"
                                        label="SMS"
                                      />
                                      <CheckBox className="checkbox"
                                        name="communication"
                                        {...formik.getFieldProps(
                                          "communication"
                                        )}
                                        value="phone_check"
                                        label="Phone"
                                      />
                                    </div>
                                    {formik.touched.communication &&
                                    formik.errors.communication ? (
                                      <small className="text-danger">
                                        {formik.errors.communication}
                                      </small>
                                    ) : null}
                                  </div>
                                </div>
                                {/*<!--end::Group-->*/}
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xl-9">
                              {/*<!--begin::Row-->*/}
                              <div className="row">
                                <label className="col-form-label col-3 text-lg-right text-left"></label>
                                <div className="col-9">
                                  <h6 className="text-dark fw-bold mb-10">
                                    Security:
                                  </h6>
                                </div>
                              </div>
                              {/*<!--end::Row-->*/}
                              {/*<!--begin::Group-->*/}
                              <div className="form-group row">
                                <label className="col-form-label col-3 text-lg-right text-left">
                                  Login verification
                                </label>
                                <div className="col-9">
                                  <Buttons
                                    type="button"
                                    className="btn btn-light-primary fw-bold btn-sm"
                                    label="Setup login verification"
                                  />
                                  <div className="form-text text-muted mt-3">
                                    After you log in, you will be asked for
                                    additional information to confirm your
                                    identity and protect your account from being
                                    compromised.
                                    <Link to="/">Learn more</Link>.
                                  </div>
                                </div>
                              </div>
                              {/*<!--end::Group-->*/}
                              {/*<!--begin::Group-->*/}
                              <div className="form-group row">
                                <label className="col-form-label col-3 text-lg-right text-left">
                                  Password reset verification
                                </label>
                                <div className="col-9">
                                  <div className="checkbox-inline">
                                    <CheckBox className="checkbox mb-2"
                                      name="passwordRestCheckbox"
                                      label="Require personal information to reset your password."
                                      value="passwordRestChecked"
                                      {...formik.getFieldProps(
                                        "passwordRestCheckbox"
                                      )}
                                    />
                                    {formik.touched.passwordRestCheckbox &&
                                    formik.errors.passwordRestCheckbox ? (
                                      <small className="text-danger">
                                        {formik.errors.passwordRestCheckbox}
                                      </small>
                                    ) : null}
                                  </div>
                                  <div className="form-text text-muted">
                                    For extra security, this requires you to
                                    confirm your email or phone number when you
                                    reset your password.
                                    <Link to="/" className="fw-bold">
                                      Learn more
                                    </Link>
                                    .
                                  </div>
                                </div>
                              </div>
                              {/*<!--end::Group-->*/}
                              {/*<!--begin::Group-->*/}
                              <div className="form-group row mt-10">
                                <label className="col-3"></label>
                                <div className="col-9">
                                  <Buttons
                                    type="button"
                                    className="btn btn-light-danger fw-bold btn-sm"
                                    label="Deactivate your account ?"
                                  />
                                </div>
                              </div>
                              {/*<!--end::Group-->*/}
                            </div>
                            <div className="col-xl-2"></div>
                          </div>
                        </div>
                        <div
                          className="my-5 step"
                          data-wizard-type="step-content"
                          data-wizard-state={stateThree}
                        >
                          <h5 className="mb-10 fw-bold text-dark">
                            Setup Your Address
                          </h5>
                          <div className="form-group">
                            <label>Address Line 1</label>
                            <InputField
                              type="text"
                              name="address1"
                              placeholder="Address Line 1"
                              {...formik.getFieldProps("address1")}
                            />
                            {formik.touched.address1 &&
                            formik.errors.address1 ? (
                              <small className="text-danger">
                                {formik.errors.address1}
                              </small>
                            ) : null}
                            <span className="form-text text-muted">
                              Please enter your Address.
                            </span>
                          </div>
                          <div className="form-group">
                            <label>Address Line 2</label>
                            <InputField
                              type="text"
                              name="address2"
                              placeholder="Address Line 2"
                              {...formik.getFieldProps("address2")}
                            />
                            {formik.touched.address2 &&
                            formik.errors.address2 ? (
                              <small className="text-danger">
                                {formik.errors.address2}
                              </small>
                            ) : null}
                            <span className="form-text text-muted">
                              Please enter your Address.
                            </span>
                          </div>
                          <div className="row">
                            <div className="col-xl-6">
                              <div className="form-group">
                                <label>Postcode</label>
                                <InputField
                                  type="text"
                                  name="postcode"
                                  placeholder="Postcode"
                                  {...formik.getFieldProps("postcode")}
                                />
                                {formik.touched.postcode &&
                                formik.errors.postcode ? (
                                  <small className="text-danger">
                                    {formik.errors.postcode}
                                  </small>
                                ) : null}
                                <span className="form-text text-muted">
                                  Please enter your Postcode.
                                </span>
                              </div>
                            </div>
                            <div className="col-xl-6">
                              <div className="form-group">
                                <label>City</label>
                                <InputField
                                  type="text"
                                  name="city"
                                  placeholder="City"
                                  {...formik.getFieldProps("city")}
                                />
                                {formik.touched.city && formik.errors.city ? (
                                  <small className="text-danger">
                                    {formik.errors.city}
                                  </small>
                                ) : null}
                                <span className="form-text text-muted">
                                  Please enter your City.
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xl-6">
                              <div className="form-group">
                                <label>State</label>
                                <InputField
                                  type="text"
                                  name="state"
                                  placeholder="State"
                                  {...formik.getFieldProps("state")}
                                />
                                {formik.touched.state && formik.errors.state ? (
                                  <small className="text-danger">
                                    {formik.errors.state}
                                  </small>
                                ) : null}
                                <span className="form-text text-muted">
                                  Please enter your State.
                                </span>
                              </div>
                            </div>
                            <div className="col-xl-6">
                              <div className="form-group">
                                <label>Country</label>
                                <SelectField
                                  name="country"
                                  {...formik.getFieldProps("country")}
                                />
                                {formik.touched.country &&
                                formik.errors.country ? (
                                  <small className="text-danger">
                                    {formik.errors.country}
                                  </small>
                                ) : null}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="my-5 step"
                          data-wizard-type="step-content"
                          data-wizard-state={stateFour}
                        >
                          <h5 className="mb-10 fw-bold text-dark">
                            Review your Details and Submit
                          </h5>
                          <div className="border-bottom mb-5 pb-5">
                            <div className="fw-bolder mb-3">
                              Your Account Details:
                            </div>
                            <div className="line-height-xl">
                              John Wick
                              <br />
                              Phone: +61412345678
                              <br />
                              Email: johnwick@reeves.com
                            </div>
                          </div>
                          <div className="border-bottom mb-5 pb-5">
                            <div className="fw-bolder mb-3">
                              Your Address Details:
                            </div>
                            <div className="line-height-xl">
                              Address Line 1
                              <br />
                              Address Line 2
                              <br />
                              Melbourne 3000, VIC, Australia
                            </div>
                          </div>
                          <div>
                            <div className="fw-bolder">
                              Payment Details:
                            </div>
                            <div className="line-height-xl">
                              Card Number: xxxx xxxx xxxx 1111
                              <br />
                              Card Name: John Wick
                              <br />
                              Card Expiry: 01/21
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between border-top pt-10 mt-15">
                          <div className="mr-2">
                            <Buttons
                              type="button"
                              id="prev-step"
                              className="btn btn-light-primary fw-bolder px-9 py-4"
                              label="Previous"
                              onClick={stepPrev}
                              dataWizardType="action-prev"
                            />
                          </div>
                          <div>
                            <Buttons
                              type="submit"
                              className="btn btn-success fw-bolder px-9 py-4"
                              label="Submit"
                              dataWizardType="action-submit"
                            />
                            <Buttons
                              type="button"
                              onClick={stepNext}
                              className="btn btn-primary fw-bolder px-9 py-4"
                              label="Next"
                              id="next-step"
                              dataWizardType="action-next"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
