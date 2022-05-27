import React, { useState, useEffect } from "react";
import "./Login.css";
import Register from "./register/Register";
import {
  EMAIL_REQUIRED,
  INVALID_EMAIL,
  PASSWORD_REQUIRED,
  INVALID_PASSWORD,
  REGX_EMAIL,
} from "../../constants/FormValidationMessage";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginAction } from "../../redux/actions/AuthenticationActions";

export default function Login() {
  const initialFormValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Redux hook
  const { isLoggedIn } = useSelector((state) => state.AuthenticationReducer);
  const { message } = useSelector((state) => state.MessageReducer);
  const dispatch = useDispatch();

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors(validateForm(formValues));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //setFormErrors(validateForm(formValues));
    setLoading(true);
    if (Object.keys(formErrors).length === 0 && isFormSubmitted) {
      dispatch(LoginAction(formValues.email, formValues.password))
        .then(() => {
          toast.success("Login successfully!");
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          toast.error("Bad credential !");
        });
    }
  };

  const validateForm = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = EMAIL_REQUIRED;
    } else if (values.email && !REGX_EMAIL.test(values.email)) {
      errors.email = INVALID_EMAIL;
    }

    if (!values.password) {
      errors.password = PASSWORD_REQUIRED;
    } else if (values.password && values.password.length < 4) {
      errors.password = INVALID_PASSWORD;
    }

    if (Object.keys(errors).length === 0) {
      setIsFormSubmitted(true);
    }
    return errors;
  };

  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }

  return (
    <div>
      <div className="Body">
        <div className="container m-container">
          <div className="row">
            <div className="col-lg-7 best-wisher-discription">
              <h1 className="title">Best Wisher</h1>
              <h3 className="titleDesciption">
                Best Wisher helps you to post and like for people in your life.
              </h3>
            </div>
            <div className="col-lg-5 login-container">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <input
                        type="email"
                        className={`form-control ${
                          formErrors.email ? "is-invalid" : ""
                        }`}
                        name="email"
                        value={formValues.email}
                        onChange={handleFormChange}
                        placeholder="Email address"
                      />
                      <div className="invalid-feedback">
                        {formErrors?.email}
                      </div>
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        className={`form-control ${
                          formErrors.password ? "is-invalid" : ""
                        }`}
                        name="password"
                        value={formValues.password}
                        onChange={handleFormChange}
                        placeholder="Password"
                      />
                      <div className="invalid-feedback">
                        {formErrors?.password}
                      </div>
                    </div>
                    <div className="mb-3">
                      <button
                        type="submit"
                        value="Submit"
                        className="btn btn-primary form-control login-btn"
                      >
                        Log In
                      </button>
                    </div>
                  </form>
                  <div className="mb-3 text-center">
                    <a href="/">Forgotten password?</a>
                  </div>
                  <div className="mb-3">
                    <hr />
                  </div>
                  <div className="my-4 text-center">
                    <button
                      type="button"
                      className="btn create_account_btn"
                      data-bs-toggle="modal"
                      data-bs-target="#registerModal"
                    >
                      Create New Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Register />
    </div>
  );
}
