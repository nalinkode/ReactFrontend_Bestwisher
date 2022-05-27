import React, { useState, useEffect } from "react";
import "./Register.css";
import {
  FIRSTNAME_REQUIRED,
  SURNAME_REQUIRED,
  EMAIL_REQUIRED,
  INVALID_EMAIL,
  PASSWORD_REQUIRED,
  INVALID_PASSWORD,
  REGX_EMAIL,
  INVALID_DATE_OF_BIRTH,
} from "../../../constants/FormValidationMessage";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { RegisterAction } from "../../../redux/actions/AuthenticationActions";

export default function Register() {
  const [monthArray] = useState([
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]);
  const [dayArray, setDayArray] = useState([]);
  const [yearArray, setYearArray] = useState([]);

  const initialFormValues = {
    firstName: "",
    surName: "",
    email: "",
    password: "",
    gender: "male",
    day: new Date().getDate(),
    month: monthArray[new Date().getMonth()],
    year: new Date().getFullYear(),
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const { message } = useSelector((state) => state.MessageReducer);

  const dispatch = useDispatch();
  const createDayArray = () => {
    let dt = new Date();
    let day = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
    let demoday = [];
    for (let i = 1; i <= day; i++) {
      demoday.push(i);
    }
    setDayArray(demoday);
  };

  const createYearArray = (startYear) => {
    var currentYear = new Date().getFullYear(),
      years = [];
    startYear = startYear || 1905;
    while (startYear <= currentYear) {
      years.push(startYear++);
    }
    setYearArray(years);
  };

  useEffect(() => {
    createDayArray();
    createYearArray(); // Creating year array from 1905 to current year & setting current year
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors(validateForm(formValues));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (Object.keys(formErrors).length === 0 && isFormSubmitted) {
      formValues.month = monthArray.indexOf(formValues.month) + 1;
      setFormValues(formValues);
      dispatch(RegisterAction(formValues))
        .then(() => {
          onModalClose();
          setIsFormSubmitted(false);
          toast.success("Register Successfully");
        })
        .catch(() => {
          toast.error("Failed Register");
        });
    }
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = FIRSTNAME_REQUIRED;
    }

    if (!values.surName) {
      errors.surName = SURNAME_REQUIRED;
    }

    if (!values.email) {
      errors.email = EMAIL_REQUIRED;
    } else if (values.email && !REGX_EMAIL.test(values.email)) {
      errors.email = INVALID_EMAIL;
    }

    if (!values.password) {
      errors.password = PASSWORD_REQUIRED;
    }

    if (values.password && values.password.length < 6) {
      errors.password = INVALID_PASSWORD;
    }

    if (
      values.day === new Date().getDate() &&
      values.month === monthArray[new Date().getMonth()] &&
      values.year === new Date().getFullYear()
    ) {
      errors.dob = INVALID_DATE_OF_BIRTH;
    }

    if (Object.keys(errors).length === 0) {
      setIsFormSubmitted(true);
    }
    return errors;
  };

  const onModalClose = () => {
    setFormErrors({});
    setFormValues(initialFormValues);
  };

  return (
    <div>
      <div
        className="modal fade"
        id="registerModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable justify-content-center">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Sign Up
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onModalClose}
              ></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <input
                        type="text"
                        className={`form-control ${
                          formErrors.firstName ? "is-invalid" : ""
                        }`}
                        placeholder="First name"
                        name="firstName"
                        value={formValues.firstName}
                        onChange={handleFormChange}
                      />
                      <div className="invalid-feedback">
                        {formErrors?.firstName}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <input
                        type="text"
                        className={`form-control ${
                          formErrors.surName ? "is-invalid" : ""
                        }`}
                        placeholder="Surname"
                        name="surName"
                        value={formValues.surName}
                        onChange={handleFormChange}
                      />
                      <div className="invalid-feedback">
                        {formErrors?.surName}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <input
                        type="text"
                        className={`form-control ${
                          formErrors.email ? "is-invalid" : ""
                        }`}
                        placeholder="Email address"
                        name="email"
                        value={formValues.email}
                        onChange={handleFormChange}
                      />
                      <div className="invalid-feedback">
                        {formErrors?.email}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <input
                        type="password"
                        className={`form-control ${
                          formErrors.password ? "is-invalid" : ""
                        }`}
                        placeholder="New password"
                        name="password"
                        value={formValues.password}
                        onChange={handleFormChange}
                      />
                      <div className="invalid-feedback">
                        {formErrors?.password}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <label className={`${formErrors.dob ? "is-invalid" : ""}`}>
                    Date of birth
                  </label>
                  <div className="col-lg-4">
                    <select
                      className="form-select form-select-sm"
                      aria-label=".form-select-sm example"
                      value={formValues.day}
                      name="day"
                      onChange={handleFormChange}
                    >
                      {dayArray.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-lg-4">
                    <select
                      className="form-select form-select-sm"
                      aria-label=".form-select-sm example"
                      value={formValues.month}
                      name="month"
                      onChange={handleFormChange}
                    >
                      {monthArray.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-lg-4">
                    <select
                      className="form-select form-select-sm"
                      aria-label=".form-select-sm example"
                      value={formValues.year}
                      name="year"
                      onChange={handleFormChange}
                    >
                      {yearArray.map((y) => (
                        <option key={y} value={y}>
                          {y}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="invalid-feedback">{formErrors?.dob}</div>
                </div>

                <div className="row mt-2">
                  <label>Gender</label>
                  <div className="col-lg-2">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="checkMale"
                        value="male"
                        checked={formValues.gender === "male"}
                        onChange={handleFormChange}
                      />
                      <label className="form-check-label" for="checkMale">
                        Male
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="checkFemale"
                        value="female"
                        checked={formValues.gender === "female"}
                        onChange={handleFormChange}
                      />
                      <label className="form-check-label" for="checkFemale">
                        Female
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <p className="policy">
                    By clicking Sign Up, you agree to our Terms, Data Policy and
                    Cookie Policy.
                  </p>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  value="Submit"
                  className="btn create_account_btn"
                  data-bs-dismiss="modal"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
